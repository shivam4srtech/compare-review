import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { email, pageUrl } = await req.json();

    // 1. Create Transporter
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
      },
    });

    // 2. Setup Email Data
    const mailOptions = {
      from: `"Newsletter Subscribe" <${process.env.MAIL_FROM_ADDRESS}>`,
      to: process.env.ADMIN_EMAIL,
      subject: 'New Subscription Received',
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee">
          <h2 style="color: #4f46e5">New Subscriber!</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Source Page:</strong> <a href="${pageUrl}">${pageUrl}</a></p>
          <hr />
          <p style="font-size: 12px; color: #666">Sent via Google SMTP Service</p>
        </div>
      `,
    };

    // 3. Send Email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Success' }, { status: 200 });
  } catch (error) {
    console.error("SMTP Error:", error);
    return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
  }
}