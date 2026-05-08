import React from 'react';
import { Calendar, User, Tag, Star } from 'lucide-react';

const ProductHeroCentered = () => {
  return (
    <section className="pt-12 pb-6 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Category & Meta Info */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-4 text-sm font-bold uppercase tracking-widest">
          <span className="flex items-center gap-1.5 text-brand bg-brand-mute px-3 py-1 rounded-full">
            <Tag size={14} />
            Tech & Gadgets
          </span>
          <span className="flex items-center gap-1.5 text-slate-500">
            <Calendar size={14} />
            October 24, 2025
          </span>
          <span className="flex items-center gap-1.5 text-slate-500">
            <User size={14} />
            By Julian Thorne
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl  font-semibold text-brand-accent leading-[1.1] mb-8">
          The Nova Pro X: <br /> 
          <span className="text-brand">Masterpiece or Marketing?</span>
        </h1>

        {/* Short Summary / Sub-lead */}
        <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mb-3">
          We’ve spent three weeks putting this flagship through its paces. Is the hardware actually worth the premium price tag, or are you just paying for the logo?
        </p>

        

      </div>
    </section>
  );
};

export default ProductHeroCentered;