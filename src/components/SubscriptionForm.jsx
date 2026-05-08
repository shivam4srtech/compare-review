"use client";
import React, { useState } from 'react';
import { HiOutlineMail, HiCheckCircle, HiExclamationCircle } from 'react-icons/hi';

export default function SubscriptionForm() {
  const [status, setStatus] = useState(null); // null, 'sending', 'success', 'error', 'invalid'

  // Frontend Email Validation Logic
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pageUrl = typeof window !== 'undefined' ? window.location.href : '';

    // Step 1: Frontend Validation
    if (!validateEmail(email)) {
      setStatus('invalid');
      return;
    }

    setStatus('sending');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, pageUrl }),
      });

      if (response.ok) {
        setStatus('success');
        e.target.reset();
      } else {
        const errorData = await response.json();
        // If the backend blocks the domain, we show 'invalid', otherwise generic 'error'
        setStatus(response.status === 400 ? 'invalid' : 'error');
      }
    } catch (err) {
      console.error("Submission failed:", err);
      setStatus('error');
    }
  };

  return (
    <div className="w-full max-w-md">
      {status === 'success' ? (
        /* --- SUCCESS MESSAGE --- */
        <div className="flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/20 p-5 rounded-[2rem] animate-in fade-in slide-in-from-bottom-2 duration-500">
          <HiCheckCircle className="text-emerald-500 text-3xl" />
          <div>
            <p className="text-emerald-400 font-bold leading-tight">You're subscribed!</p>
            <p className="text-emerald-500/60 text-xs font-medium">Check your inbox for a confirmation.</p>
          </div>
        </div>
      ) : (
        /* --- SUBSCRIPTION FORM --- */
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <HiOutlineMail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
              <input 
                required
                name="email"
                type="email" 
                placeholder="shivam@example.com" 
                onChange={() => setStatus(null)} // Reset status when typing
                className={`w-full pl-12 pr-4 py-4 bg-white/5 border rounded-2xl text-white placeholder-slate-500 outline-none transition-all
                  ${status === 'invalid' ? 'border-amber-500 focus:border-amber-400 ring-2 ring-amber-500/10' : 'border-white/10 focus:border-indigo-500'}
                `}
              />
            </div>
            <button 
              type="submit"
              disabled={status === 'sending'}
              className="bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-700 text-white font-bold px-8 py-4 rounded-2xl transition-all shadow-lg shadow-indigo-500/20 active:scale-95 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? 'Verifying...' : 'Subscribe'}
            </button>
          </div>

          {/* --- ERROR FEEDBACK --- */}
          {status === 'invalid' && (
            <div className="flex items-center gap-2 text-amber-500 text-xs font-bold px-2 animate-in fade-in duration-300">
              <HiExclamationCircle />
              <span>Please provide a valid, non-temporary email address.</span>
            </div>
          )}
          
          {status === 'error' && (
            <div className="flex items-center gap-2 text-red-500 text-xs font-bold px-2">
              <HiExclamationCircle />
              <span>Network error. Please check your connection and try again.</span>
            </div>
          )}
        </form>
      )}
    </div>
  );
}