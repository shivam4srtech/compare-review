"use client";
import React, { useState } from 'react';
import { HiOutlineMail, HiCheckCircle } from 'react-icons/hi';

export default function SubscriptionForm() {
  const [status, setStatus] = useState(null); // null, 'sending', 'success', 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const email = e.target.email.value;
    const pageUrl = window.location.href; // Grabs current page URL

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, pageUrl }),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <div className="w-full max-w-md">
      {status === 'success' ? (
        <div className="flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-2xl animate-in fade-in zoom-in duration-300">
          <HiCheckCircle className="text-emerald-500 text-2xl" />
          <p className="text-emerald-400 font-bold">Success! Data sent to admin.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <HiOutlineMail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
            <input 
              required
              name="email"
              type="email" 
              placeholder="Enter email..." 
              className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-all"
            />
          </div>
          <button 
            type="submit"
            disabled={status === 'sending'}
            className="bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-700 text-white font-bold px-8 py-4 rounded-2xl transition-all shadow-lg shadow-indigo-500/20"
          >
            {status === 'sending' ? 'Processing...' : 'Subscribe'}
          </button>
        </form>
      )}
      {status === 'error' && <p className="text-red-500 text-xs mt-2">Server error. Check SMTP settings.</p>}
    </div>
  );
}