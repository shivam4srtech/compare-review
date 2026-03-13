
"use client"
import { HiPlus, HiMinus, HiQuestionMarkCircle } from 'react-icons/hi';
import { useState } from 'react';
const faqs = [
  {
    question: "How does the AI-powered ranking system work?",
    answer: "Our proprietary algorithm analyzes over 50 data points per product, including verified user sentiment, technical specifications, and long-term durability tests to ensure unbiased results."
  },
  {
    question: "Are these buying guides updated in real-time?",
    answer: "Yes. Our system monitors price changes and stock levels hourly. When a newer model is released or a product quality drops, our rankings adjust automatically."
  },
  {
    question: "Can I trust the reviews are truly unbiased?",
    answer: "Absolutely. We do not accept direct payments from brands for rankings. Our revenue comes from affiliate partnerships that do not influence our editorial integrity."
  },
  {
    question: "How often do you add new categories?",
    answer: "We add approximately 10-15 new niche categories every month based on search trends and community requests from our 36,000+ active users."
  }
];
export default function HomeFaqs(){
    const [openIndex, setOpenIndex] = useState(0);
    return(
        <>
            <section className="bg-white py-10 px-3 lg:px-24">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 md:gap-16">
                    
                    {/* Left Side: Sticky Header */}
                    <div className="lg:col-span-5 lg:sticky lg:top-24 h-fit">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-widest mb-6">
                        <HiQuestionMarkCircle size={16} />
                        <span>Support Center</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                        Commonly Asked <br />
                        <span className="text-indigo-600">Questions.</span>
                    </h2>
                    <p className="text-slate-500 text-lg max-w-sm mb-8 font-medium">
                        Everything you need to know about our data-driven curation process and how we help you shop smarter.
                    </p>
                    <button className="text-slate-900 font-bold border-b-2 border-indigo-600 pb-1 hover:text-indigo-600 transition-colors">
                        Still have questions? Contact us
                    </button>
                    </div>

                    {/* Right Side: Animated Accordion */}
                    <div className="lg:col-span-7 space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        
                        return (
                        <div 
                            key={index}
                            className={`group border rounded-3xl transition-all duration-300 ${
                            isOpen 
                            ? 'border-indigo-200 bg-indigo-50/30 shadow-sm' 
                            : 'border-slate-100 bg-transparent hover:border-slate-200'
                            }`}
                        >
                            <button
                            onClick={() => setOpenIndex(isOpen ? null : index)}
                            className="cursor-pointer w-full flex items-center justify-between p-3 md:p-8 text-left outline-none"
                            >
                            <span className={`text-[14px] md:text-xl font-bold transition-colors ${
                                isOpen ? 'text-indigo-600' : 'text-slate-800'
                            }`}>
                                {faq.question}
                            </span>
                            <div className={`flex-shrink-0 ml-4 p-2 rounded-full transition-all duration-300 ${
                                isOpen ? 'bg-indigo-600 text-white rotate-180' : 'bg-slate-100 text-slate-400 group-hover:bg-slate-200'
                            }`}>
                                {isOpen ? <HiMinus size={20} /> : <HiPlus size={20} />}
                            </div>
                            </button>

                            {/* Animated Body */}
                            <div 
                            className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                            }`}
                            >
                            <div className="p-3 md:p-8 pt-0 text-slate-600 leading-relaxed text-[12px] md:text-lg border-t border-indigo-100/50 mt-2">
                                {faq.answer}
                            </div>
                            </div>
                        </div>
                        );
                    })}
                    </div>

                </div>
            </section>
        </>
    )
}