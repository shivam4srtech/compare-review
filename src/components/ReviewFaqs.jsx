'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqData = [
  {
    question: "Is the Nova Pro X compatible with older accessories?",
    answer: "Yes, it maintains backwards compatibility with all Type-C accessories from the last three generations. However, to achieve peak charging speeds, we recommend using the included Gen-4 cable."
  },
  {
    question: "How long does the battery actually last under heavy load?",
    answer: "In our stress tests—running 4K video editing and 3D rendering—the battery lasted 6 hours and 42 minutes. For standard office work, it easily clears 16 hours."
  },
  {
    question: "Does the warranty cover accidental liquid damage?",
    answer: "The standard 1-year warranty covers manufacturing defects. For liquid damage, you'll need the 'Nova Care+' add-on which can be purchased within 30 days of activation."
  }
];

const ReviewFaqs = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto px-6 py-6">
      <div className="flex items-center gap-3 mb-10">
        <div className="p-2 bg-brand-mute rounded-lg">
          <HelpCircle className="text-brand" size={28} />
        </div>
        <h2 className="text-3xl font-black text-brand-accent tracking-tight">
          Common Questions
        </h2>
      </div>

      <div className="space-y-4">
        {faqData.map((faq, index) => {
          const isOpen = expandedIndex === index;
          
          return (
            <div 
              key={index} 
              className={`border rounded-2xl transition-colors duration-300 ${
                isOpen ? 'border-brand bg-brand-bg/50' : 'border-slate-200 bg-white'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-4 text-left focus:outline-none"
              >
                <span className={`text-lg font-bold transition-colors ${
                  isOpen ? 'text-brand' : 'text-brand-accent'
                }`}>
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <ChevronDown size={20} className={isOpen ? 'text-brand' : 'text-slate-400'} />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { opacity: 1, height: "auto", marginBottom: 0 },
                      collapsed: { opacity: 0, height: 0, marginBottom: 0 }
                    }}
                    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <div className="px-6 pb-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100/50 mt-2">
                      <p className="">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ReviewFaqs;