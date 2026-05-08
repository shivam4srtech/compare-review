import React from 'react';
import { CheckCircle2, XCircle, Info, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const ReviewContent = () => {
  return (
    <article className="max-w-4xl mx-auto px-6 py-12 pt-0  font-sans text-slate-800">
      
      {/* 1. Introduction Paragraphs */}
      <div className="space-y-6 mb-6">
        <h2 className="text-3xl font-black text-brand-accent tracking-tight">The Deep Dive: First Impressions</h2>
        <p className="text-lg leading-relaxed text-slate-600">
          After unboxing the <span className="font-bold text-brand-accent">Nova Pro X</span>, the first thing that strikes you is the build quality. It doesn't just feel like another piece of tech; it feels like a precision-engineered tool. We spent the first 72 hours testing the industrial design under varying stress conditions.
        </p>
        <p className="text-lg leading-relaxed text-slate-600">
          While many competitors opt for high-gloss plastics that attract fingerprints like a magnet, the matte finish here is a breath of fresh air. However, beauty is only skin deep—what matters is how it handles a 12-hour professional workload without thermal throttling.
        </p>
      </div>

      {/* 2. Key Features List (The "Good" and the "Bad") */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-emerald-50/50 border border-emerald-100 p-8 rounded-3xl">
          <h3 className="text-xl font-bold text-emerald-900 mb-4 flex items-center gap-2">
            <CheckCircle2 className="text-emerald-500" /> What We Loved
          </h3>
          <ul className="space-y-3">
            {['Industry-leading battery life (18h+)', 'Responsive haptic feedback engine', 'Zero-latency wireless connection', 'Sustainable packaging materials'].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-emerald-800/80 text-sm font-medium">
                <ChevronRight size={16} className="mt-0.5 text-emerald-400" /> {item}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="bg-rose-50/50 border border-rose-100 p-8 rounded-3xl">
          <h3 className="text-xl font-bold text-rose-900 mb-4 flex items-center gap-2">
            <XCircle className="text-rose-500" /> Room for Improvement
          </h3>
          <ul className="space-y-3">
            {['Premium price point', 'Steep learning curve for software', 'Limited color options at launch'].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-rose-800/80 text-sm font-medium">
                <ChevronRight size={16} className="mt-0.5 text-rose-400" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

       <Image
           className='w-full block mx-auto mb-6'
            src="/images/review-img.webp"
            width="400"
            height="300"
            alt="review"
          
          />

      {/* 4. Technical Specs Table */}
      <div className="mb-16">
        <h2 className="text-3xl font-black text-brand-accent tracking-tight mb-8">Technical Comparison</h2>
        <div className="overflow-hidden border border-slate-200 rounded-2xl shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-brand-accent text-white">
                <th className="p-4 font-bold uppercase text-xs tracking-widest">Feature</th>
                <th className="p-4 font-bold uppercase text-xs tracking-widest">Nova Pro X</th>
                <th className="p-4 font-bold uppercase text-xs tracking-widest">Industry Avg.</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[
                ['Processor', 'Gen 4 Titan-S', 'Gen 2 Standard'],
                ['RAM', '32GB LPDDR5', '16GB DDR4'],
                ['Weight', '1.2 kg', '1.8 kg'],
                ['Connectivity', 'Wi-Fi 7 / BT 5.4', 'Wi-Fi 6 / BT 5.0']
              ].map(([spec, val1, val2], i) => (
                <tr key={i} className="hover:bg-brand-bg transition-colors">
                  <td className="p-4 font-bold text-brand-accent">{spec}</td>
                  <td className="p-4 text-brand font-semibold">{val1}</td>
                  <td className="p-4 text-slate-500">{val2}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 5. Expert Tip / Callout */}
      <div className="bg-brand text-white p-8 rounded-3xl flex flex-col md:flex-row items-center gap-6 shadow-xl shadow-brand/20">
        <div className="bg-white/20 p-4 rounded-2xl">
          <Info size={32} />
        </div>
        <div>
          <h4 className="text-xl font-bold mb-1">Pro Expert Tip</h4>
          <p className="text-brand-mute/90 leading-relaxed">
            If you're upgrading from the 2023 model, make sure to use the included 100W cable. Using standard chargers will limit your peak performance by nearly 40%.
          </p>
        </div>
      </div>

    </article>
  );
};

export default ReviewContent;