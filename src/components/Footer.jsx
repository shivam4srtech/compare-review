"use client"; 
import { useState, useEffect } from 'react';
import SubscriptionForm from './SubscriptionForm';
import Link from 'next/link';
import { 
  HiOutlineGlobeAlt, 
  HiShieldCheck, 
  HiLightningBolt 
} from 'react-icons/hi';
import { RiTwitterXFill } from "react-icons/ri";
import { 
  FaFacebook, 
  FaInstagram, 
  FaLinkedin 
} from 'react-icons/fa';


const footerLinks = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Methodology", href: "/methodology" },
    { name: "AI Technology", href: "/ai" },
    { name: "Contact Support", href: "/contact" }
  ],
  categories: [
    { name: "Technology", href: "/tech" },
    { name: "Home & Garden", href: "/home" },
    { name: "Health & Fitness", href: "/health" },
    { name: "Baby & Kids", href: "/baby" }
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Affiliate Disclosure", href: "/disclosure" }
  ]
};

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  return (
    <footer className="bg-[#f0f3fe] border-t border-slate-100 pt-20 pb-10 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* 1. TOP SECTION: Newsletter & Branding */}
        <div className="grid lg:grid-cols-12 gap-12 mb-8">
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-200">
                <HiLightningBolt size={24} />
              </div>
              <span className="text-2xl font-black tracking-tighter text-slate-900">
                COMPARE<span className="text-indigo-600"> & </span>REVIEW
              </span>
            </div>
            <p className="text-slate-500 text-lg leading-relaxed max-w-sm">
              The world's most advanced AI-driven product discovery engine. 
              Helping you find the <span className="text-slate-900 font-bold">top 1%</span> of everything.
            </p>
            <div className="flex gap-4">
              {[RiTwitterXFill , FaFacebook, FaInstagram, FaLinkedin].map((Icon, i) => (
                <button key={i} className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:text-indigo-600 hover:border-indigo-200 hover:bg-indigo-50 transition-all">
                  <Icon size={18} />
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-slate-900 rounded-[2.5rem] p-4 md:p-12 relative overflow-hidden group">
              {/* Decorative Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[80px] -mr-32 -mt-32 transition-all group-hover:bg-indigo-500/20" />
              
              <div className="relative z-10 flex flex-col   gap-8">
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold text-white mb-2">Join the Elite List</h3>
                  <p className="text-slate-400 text-sm">Get the top 10 products of the week in your inbox.</p>
                </div>
                <SubscriptionForm/>
              </div>
            </div>
          </div>
        </div>

        {/* 2. MIDDLE SECTION: Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:gap-12 gap-4 pb-4 md:pb-8 border-b border-slate-100">
          <div className="col-span-1 space-y-6">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-900 mb-2">Platform</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-500 hover:text-indigo-600 font-medium transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-1 space-y-6">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-900 mb-2">Categories</h4>
            <ul className="space-y-4">
              {footerLinks.categories.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-500 hover:text-indigo-600 font-medium transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-1 space-y-6">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-900 mb-2">Resources</h4>
            <ul className="space-y-4">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-500 hover:text-indigo-600 font-medium transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-1 bg-indigo-50/50 p-6 rounded-3xl space-y-4">
            <div className="flex items-center gap-2 text-indigo-600 font-bold text-sm">
              <HiShieldCheck size={20} />
              <span>Safety Certified</span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed font-medium">
              Every ranking is audited by our human verification team to ensure no brand bias or AI hallucinations.
            </p>
          </div>
        </div>

        {/* 3. BOTTOM SECTION: Copyright */}
        <div className="pt-4 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <p className="text-slate-400 text-sm font-medium">
            © {year} Compare & Reaview Built for smart shoppers.
          </p>
          <div className="flex md:items-center md:gap-8 gap-4  flex-col md:flex-row">
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <HiOutlineGlobeAlt />
              <span>United States (EN)</span>
            </div>
            <div className="flex items-center gap-1 text-slate-400 text-sm">
              Status: <span className="text-emerald-500 font-bold">Systems Online</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}