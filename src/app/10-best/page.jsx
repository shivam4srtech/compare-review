import React from 'react';
import { HiTrendingUp, HiBadgeCheck, HiChevronRight, HiExternalLink, HiCalendar, HiShieldCheck } from 'react-icons/hi';

const products = [
  {
    id: 1,
    rank: "01",
    score: 9.8,
    name: "ROBERTSON 3P20116 eBallast",
    description: "Instant Start, NPF, 1 or 2 Lamp F32T8, 120Vac, 60 Hz, Model IS...",
    brand: "Robertson",
    region: "Worldwide",
    image: "https://via.placeholder.com/150", // Replace with your actual product image
    tags: ["Best Overall", "Energy Efficient"]
  },
  {
    id: 2,
    rank: "02",
    score: 9.5,
    name: "28474-89904 HID Ballast",
    description: "High-intensity discharge headlight ballast for premium automotive lighting systems...",
    brand: "NZMNS",
    region: "Automotive",
    image: "https://via.placeholder.com/150",
    tags: ["Top Rated", "High Durability"]
  }
];

const categories = ["Digital Ballast", "Grow Ballast", "1000w Ballast", "600 Watt Ballast", "Hid Ballast"];

export default function BestProductsPage() {
  return (
    <div className="min-h-screen bg-[#FDFDFF] text-slate-900 pb-20">
      {/* 1. Header Section */}
      <header className="bg-white border-b border-slate-100 pt-16 pb-12 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <div className="flex items-center gap-2 text-indigo-600 font-bold text-sm uppercase tracking-widest mb-3">
                <HiTrendingUp />
                <span>Updated March 2026</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-4">
                10 Best <span className="text-indigo-600 underline decoration-indigo-200">Ballast</span>
              </h1>
              <p className="text-slate-500 text-lg max-w-xl font-medium">
                Analysis of <span className="text-slate-900 font-bold">1,606 verified reviews</span> using our proprietary AI ranking audit.
              </p>
            </div>
            
            {/* Trust Badge Box */}
            <div className="bg-slate-50 border border-slate-100 p-6 rounded-3xl flex items-center gap-4">
              <div className="bg-white p-3 rounded-2xl shadow-sm text-indigo-600">
                <HiShieldCheck size={32} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Integrity Verified</p>
                <p className="text-sm font-bold text-slate-800">No Paid Placements</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto md:px-6 px-3 lg:px-24 mt-12">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* 2. Floating Sidebar Navigation */}
          <aside className="lg:col-span-3">
            <div className="sticky top-10 space-y-6">
              <div className="bg-white border border-slate-100 p-2 rounded-[2rem] shadow-sm">
                <div className="px-6 py-4 border-b border-slate-50">
                  <h3 className="font-black text-slate-900 uppercase text-xs tracking-[0.2em]">Quick Filter</h3>
                </div>
                <nav className="p-2 space-y-1">
                  {categories.map((cat, i) => (
                    <button key={i} className="w-full flex items-center justify-between px-4 py-3 rounded-2xl text-slate-500 hover:bg-slate-50 hover:text-indigo-600 transition-all font-semibold text-sm group">
                      {cat}
                      <HiChevronRight className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </aside>

          {/* 3. Product Feed */}
          <div className="lg:col-span-9 space-y-8">
            {products.map((product) => (
              <div key={product.id} className="group relative bg-white border border-slate-100 rounded-[2.5rem] p-6 md:p-10 transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] hover:border-indigo-100">
                
                {/* Ranking Ribbon */}
                <div className="absolute -left-3 top-8 bg-slate-900 text-white px-6 py-2 rounded-xl font-black shadow-xl">
                  #{product.rank}
                </div>

                <div className="grid md:grid-cols-12 gap-8 items-center">
                  {/* Image Container */}
                  <div className="md:col-span-3 flex justify-center bg-slate-50 rounded-3xl p-6 group-hover:bg-white transition-colors border border-transparent group-hover:border-slate-100">
                    <img
                        src='https://m.media-amazon.com/images/I/41moVfPgYOL._SL160_.jpg' alt={product.name}     
                        className="w-full h-auto mix-blend-multiply transition-transform group-hover:scale-110 duration-500" 
                    />
                  </div>

                  {/* Content */}
                  <div className="md:col-span-6 space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {product.tags.map((tag, i) => (
                        <span key={i} className="text-[10px] font-bold uppercase tracking-widest bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 leading-tight group-hover:text-indigo-600 transition-colors">
                      {product.name}
                    </h2>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {product.description} <span className="text-indigo-600 font-bold cursor-pointer">Read Review</span>
                    </p>
                    <div className="flex items-center gap-4 text-xs font-bold text-slate-400">
                      <span className="flex items-center gap-1"><HiBadgeCheck className="text-emerald-500" size={16}/> {product.brand}</span>
                      <span className="w-1 h-1 bg-slate-200 rounded-full"></span>
                      <span>{product.region}</span>
                    </div>
                  </div>

                  {/* Score & CTA */}
                  <div className="md:col-span-3 flex flex-col items-center justify-center border-l border-slate-50 pl-4 space-y-4">
                    <div className="text-center">
                      <div className="text-4xl font-black text-slate-900">{product.score}</div>
                      <div className="text-[10px] font-bold uppercase text-slate-400 tracking-widest">AI Trust Score</div>
                    </div>
                    <button className="w-full bg-indigo-600 hover:bg-slate-900 text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-indigo-100 hover:shadow-none flex items-center justify-center gap-2 group/btn">
                      Check Price <HiExternalLink className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>
    </div>
  );
}