import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// List of disposable email providers to block
const BANNED_DOMAINS = ['mailinator.com', 'tempmail.com', 'guerrillamail.com', '10minutemail.com'];

export async function POST(req) {
  try {
    const { email, pageUrl } = await req.json();

    // 1. Backend Validation: Format Check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json({ message: 'Invalid email format' }, { status: 400 });
    }

    // 2. Backend Validation: Disposable Email Check
    const domain = email.split('@')[1].toLowerCase();
    if (BANNED_DOMAINS.includes(domain)) {
      return NextResponse.json({ message: 'Disposable emails are blocked' }, { status: 400 });
    }

    // 3. Configure Nodemailer Transporter
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      secure: false, // true for 465, false for 587
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
      },
    });

    // admin Compose the Email
    const adminMailOptions = {
      from: `"${process.env.MAIL_FROM_NAME || 'Subscribe System'}" <${process.env.MAIL_FROM_ADDRESS}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `🚀 New Subscription: ${email}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
          <div style="background-color: #4f46e5; padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 20px;">New Subscription Received</h1>
          </div>
          <div style="padding: 30px; background-color: #ffffff;">
            <p style="margin-bottom: 10px;"><strong>Email Address:</strong> ${email}</p>
            <p style="margin-bottom: 20px;"><strong>Submitted From:</strong> <br/> 
               <a href="${pageUrl}" style="color: #4f46e5;">${pageUrl}</a>
            </p>
            <div style="font-size: 12px; color: #94a3b8; border-top: 1px solid #f1f5f9; pt: 15px;">
              Sent via Compare & Review Subscription Engine • ${new Date().toLocaleString()}
            </div>
          </div>
        </div>
      `,
    };
    //Email to the USER (Confirmation Copy)
    const userMailOptions = {
      from: `"${process.env.MAIL_FROM_NAME}" <${process.env.MAIL_FROM_ADDRESS}>`,
      to: email, // Sending to the user's provided email
      subject: `Welcome to Compare & Review!`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #f1f5f9; border-radius: 16px; overflow: hidden;">
          <div style="background-color: #4f46e5; padding: 40px; text-align: center;">
            <h1 style="color: white; margin: 0;">You're on the list!</h1>
          </div>
          <div style="padding: 30px; line-height: 1.6; color: #334155;">
            <p>Hi there,</p>
            <p>Thanks for subscribing to <strong>Compare & Review</strong>. You'll now be the first to know when we release new expert buying guides and AI-powered product rankings.</p>
            <div style="background: #f8fafc; padding: 20px; border-radius: 12px; margin: 20px 0;">
              <p style="margin: 0; font-size: 14px;"><strong>Subscription Details:</strong></p>
              <p style="margin: 5px 0 0; font-size: 13px; color: #64748b;">Signed up via: ${pageUrl}</p>
            </div>
            <p>If you didn't mean to sign up, you can safely ignore this email.</p>
            <hr style="border: 0; border-top: 1px solid #f1f5f9; margin: 30px 0;" />
            <p style="font-size: 12px; color: #94a3b8; text-align: center;">© 2026 Compare & Review • 123 Tech Lane, Silicon Valley</p>
          </div>
        </div>
      `,
    };

    // 5. Send Email
   
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions)
    ]);

    return NextResponse.json({ message: 'Success' }, { status: 200 });
  } catch (error) {
    console.error("SMTP Error:", error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}