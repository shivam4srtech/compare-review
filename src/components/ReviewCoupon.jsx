'use client'; // Required for Next.js app directory to use state
import React, { useState } from 'react';
import { Mail, Truck, Copy, X, ExternalLink } from 'lucide-react';
import Image from 'next/image';

const coupons = [
  {
    id: 1,
    logo: "/images/ag-logo.webp",
    title: '10% Off Nova Pro X Sitewide',
    description: '10% Off Nova Pro X — Email Sign Up',
    linkText: 'Claim Your Discount',
    lastUsed: '1/28/2026',
    discount: '10% OFF',
    type: 'code', // This one has a physical code to show
    code: 'NOVAFIRST10'
  },
  {
    id: 2,
    logo: "/images/ag-logo.webp",
    title: 'Free Express Shipping on All Orders',
    description: 'Nova Pro X — Free shipping on most orders over $500',
    linkText: 'Claim Discount',
    lastUsed: '1/28/2026',
    discount: 'FREE SHIPPING',
    type: 'no-code', // This is a "deal" (activate at checkout)
    code: null
  }
];

const ReviewCoupon = () => {
  // State to manage modal visibility. Stores the coupon object itself or null.
  const [activeCoupon, setActiveCoupon] = useState(null);

  const openModal = (coupon) => {
    setActiveCoupon(coupon);
    // Optional: Lock body scroll when modal is open
    // document.body.style.overflow = 'hidden'; 
  };

  const closeModal = () => {
    setActiveCoupon(null);
    // Optional: Restore body scroll
    // document.body.style.overflow = 'unset';
  };

  return (
    <>
      <section className="bg-white  px-6 lg:px-8 mb-10">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Coupons List */}
          <div className="space-y-6">
            {coupons.map((coupon) => (
              <div key={coupon.id} className="grid md:grid-cols-[160px_1fr_auto] items-center gap-4 p-6  bg-brand-mute rounded-2xl shadow-xl shadow-brand-accent/5 border border-slate-100 hover:shadow-lg transition-shadow">
                
                {/* Column 1: The Icon/Logo Badge (Matching shape/mute BG) */}
                <div className="flex-shrink-0">
                  <div className="aspect-square bg-white border border-slate-100 rounded-2xl p-4 flex items-center justify-center shadow-inner shadow-slate-100">
                    <Image
                        src={coupon.logo}
                        width={100}
                        height={100}
                        alt='logo'
                    />
                  </div>
                </div>

                {/* Column 2: Text Details (Center Aligned on Mobile, Left on Desktop) */}
                <div className="text-center md:text-left space-y-1">
                  <h3 className="text-xl font-extrabold text-brand-accent tracking-tight">
                    {coupon.title}
                  </h3>
                  <p className="text-slate-600 text-sm">{coupon.description}</p>
                  <div className="pt-1 flex flex-wrap gap-x-4 gap-y-1 justify-center md:justify-start items-center text-xs">
                    <a href="#" className="text-brand hover:text-brand-accent font-semibold underline decoration-brand/50">
                      {coupon.linkText}
                    </a>
                    <span className="text-slate-400 font-medium">Last used {coupon.lastUsed}</span>
                  </div>
                </div>

                {/* Column 3: The Offer & Code (Far Right) */}
                <div className="flex flex-col items-center md:items-end gap-3 p-4 md:p-0 md:pl-8 md:border-l md:border-slate-100">
                  <div className="text-3xl font-black text-brand tracking-tighter text-center md:text-right">
                    {coupon.discount}
                  </div>
                  
                  {/* The Code Button (Matching "SHOW CODE" structure) */}
                  <button 
                    onClick={() => openModal(coupon)}
                    className="relative flex items-center bg-brand text-white text-sm font-bold uppercase tracking-wider pl-4 pr-3 py-3 rounded-xl overflow-hidden group shadow-lg shadow-brand/20 transition-all hover:bg-brand-accent"
                  >
                    <span className="pr-4 border-r border-white/20">Show Code</span>
                    <div className="relative w-12 pl-3 flex items-center justify-center">
                      <div className="absolute inset-y-0 right-0 w-full bg-brand-mute group-hover:bg-brand-bg rounded-l-md rounded-r-xl transition-colors"></div>
                      <span className="relative text-brand group-hover:text-brand-accent">...{coupon.id}</span>
                    </div>
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* The Modal Component (Conditionally Rendered) */}
      <CouponModal coupon={activeCoupon} onClose={closeModal} />
    </>
  );
};

/* --- The Coupon Modal Component --- */
const CouponModal = ({ coupon, onClose }) => {
  if (!coupon) return null; // Render nothing if no active coupon

  const hasCode = coupon.type === 'code';

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      {/* Background Overlay */}
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0" onClick={onClose}>
        <div className="fixed inset-0 bg-brand-accent/70 transition-opacity" aria-hidden="true"></div>
        {/* Trick to center modal (on desktop) */}
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        {/* Modal Panel (White, Rounded, Matches shape of image_1.png) */}
        <div className="inline-block align-bottom bg-white rounded-3xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full relative p-8 " onClick={(e) => e.stopPropagation()}>
          
          {/* Close Button (Icon on top right) */}
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 p-2 text-slate-400 hover:text-brand rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>

          {/* Modal Content */}
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              {/* Badge/Icon Box */}
               <div className="aspect-square bg-brand-bg border border-slate-100 rounded-2xl p-4 flex items-center justify-center">
                  {coupon.icon}
                </div>
            </div>

            <h3 className="text-4xl font-extrabold text-brand-accent tracking-tight leading-tight">
              {coupon.title}
            </h3>

            {/* Sub-description with underline (Matching style from image_1.png) */}
            <p className="text-xl text-brand font-medium italic underline decoration-brand/30 mb-2">
              {coupon.description}
            </p>
            <p className="text-sm text-slate-400 font-medium pb-1">Last used {coupon.lastUsed}</p>

            {/* The Code/Copy Area (Matches image_1.png structure) */}
            <div className="flex items-stretch border border-brand/20 border-dashed rounded-xl overflow-hidden bg-brand-mute/50 mb-2">
              <div className="flex-grow flex items-center justify-center p-3">
                {hasCode ? (
                  <span className="text-3xl md:text-4xl font-mono font-black text-brand-accent tracking-widest uppercase">
                    {coupon.code}
                  </span>
                ) : (
                  <span className="text-2xl font-bold text-slate-500 italic">No Code Required</span>
                )}
              </div>
              
              <button 
                className="flex items-center gap-2 px-6 py-5 bg-brand hover:bg-brand-accent text-white text-sm font-bold uppercase tracking-wider transition-colors"
                onClick={() => {
                  if (hasCode) navigator.clipboard.writeText(coupon.code);
                  // Optional: Add a "Copied!" notification hint
                }}
              >
                <Copy size={16} /> {hasCode ? 'Copy' : 'Activate'}
              </button>
            </div>

            {/* Main Go to Offer Button */}
            <div className="pt-4">
              <a 
                href="#" // Update with the actual external affiliate link
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 w-full justify-center bg-brand hover:bg-brand-accent text-white text-base font-bold uppercase tracking-wider py-4 rounded-xl transition-all shadow-lg shadow-brand/20"
              >
                Go to Offer <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCoupon;