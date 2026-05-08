'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Clock } from 'lucide-react';
import Image from 'next/image';

const relatedData = [
  {
    id: 1,
    date: 'May 1, 2026',
    category: 'Fashion, Lifestyle',
    title: "Mother's Day Gift Ideas for the Last-Minute Girly",
    image: '/images/r1.webp',
  },
  {
    id: 2,
    date: 'April 29, 2026',
    category: 'Home, Tech',
    title: 'Uplift Standing Desk: Small Space, Big Upgrade.',
    image: '/images/r2.webp',
  },
  {
    id: 3,
    date: 'April 25, 2026',
    category: 'Style, Shopping',
    title: 'Fioboc Clothing: Timeless Style & Premium Fabrics',
    image: '/images/r3.webp',
  },
  {
    id: 4,
    date: 'April 20, 2026',
    category: 'Food, Home',
    title: 'Discover Host Modern: Elegant Entertaining Made Simple',
    image: '/images/r4.webp',
  }
];

const RelatedReviews = () => {
  return (
    <section className="bg-brand-bg py-24 px-6 lg:px-8 border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-black text-brand-accent tracking-tight mb-4">
              Continue <span className="text-brand">Exploring</span>
            </h2>
            <p className="text-slate-500 text-lg font-medium leading-relaxed">
              Based on your interest in professional hardware, you might find these curated analyses valuable for your daily workflow.
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 font-bold text-brand hover:text-brand-accent transition-colors group">
            View All Reviews <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Stunning Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {relatedData.map((post) => (
            <motion.div
              key={post.id}
              whileHover={{ y: -10 }}
              className="group cursor-pointer flex flex-col h-full"
            >
              {/* Image Container with Zoom Effect */}
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-6 bg-slate-200">
                <Image 
                  src={post.image} 
                  alt={post.title}
                  width={100}
                  height={100}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-accent/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Float Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-md text-brand-accent text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-sm">
                    {post.category.split(',')[0]}
                  </span>
                </div>
              </div>

              {/* Content Box */}
              <div className="flex flex-col flex-grow px-2">
                <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-tighter mb-3">
                  <Clock size={14} className="text-brand" />
                  {post.date}
                </div>
                
                <h3 className="text-xl font-bold text-brand-accent leading-snug group-hover:text-brand transition-colors line-clamp-3 mb-4">
                  {post.title}
                </h3>

                <div className="mt-auto flex items-center gap-2 text-brand text-sm font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 duration-300">
                  Read Analysis <ArrowUpRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Button (Mobile & Desktop) */}
        <div className="mt-16 text-center">
          <button className="bg-white border-2 border-slate-200 hover:border-brand hover:text-brand text-brand-accent px-10 py-4 rounded-2xl font-black uppercase tracking-widest transition-all shadow-sm active:scale-95">
            Load More Stories
          </button>
        </div>
      </div>
    </section>
  );
};

export default RelatedReviews;