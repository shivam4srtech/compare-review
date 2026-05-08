import React from 'react';
// Using Hero Icons from react-icons/hi
import { 
  HiChip, HiHome, HiHeart, HiShoppingBag, 
  HiOutlineDesktopComputer, HiColorSwatch, HiArrowRight 
} from 'react-icons/hi';
import { MdOutlineSportsSoccer, MdChildCare } from 'react-icons/md';

const categories = [
  {
    name: "Technology",
    count: "138 Categories",
    guides: "8,686",
    icon: <HiChip size={28} />,
    color: "from-blue-500 to-cyan-400",
    shadow: "hover:shadow-blue-500/20"
  },
  {
    name: "Home & Garden",
    count: "387 Categories",
    guides: "11,288",
    icon: <HiHome size={28} />,
    color: "from-emerald-500 to-teal-400",
    shadow: "hover:shadow-emerald-500/20"
  },
  {
    name: "Health & Fitness",
    count: "72 Categories",
    guides: "2,880",
    icon: <HiHeart size={28} />,
    color: "from-rose-500 to-pink-400",
    shadow: "hover:shadow-rose-500/20"
  },
  {
    name: "Fashion & Beauty",
    count: "136 Categories",
    guides: "7,219",
    icon: <HiShoppingBag size={28} />,
    color: "from-purple-500 to-indigo-400",
    shadow: "hover:shadow-purple-500/20"
  },
  {
    name: "Sports & Outdoors",
    count: "167 Categories",
    guides: "5,067",
    icon: <MdOutlineSportsSoccer size={28} />,
    color: "from-orange-500 to-yellow-400",
    shadow: "hover:shadow-orange-500/20"
  },
  {
    name: "Baby & Kids",
    count: "68 Categories",
    guides: "1,346",
    icon: <MdChildCare size={28} />,
    color: "from-pink-500 to-rose-400",
    shadow: "hover:shadow-pink-500/20"
  }
];

export default function CategoryGrid() {
  return (
    <section className="bg-[#F8FAFC] py-10 px-6 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
              Explore By <span className="text-indigo-600">Category</span>
            </h2>
            <p className="text-slate-500 text-lg font-medium leading-relaxed">
              Dive into our curated ecosystem of products, hand-picked and 
              analyzed by our AI-driven expert panels.
            </p>
          </div>
          <button className="flex items-center gap-2 text-indigo-600 font-bold hover:gap-4 transition-all duration-300 group">
            View All 968+ Categories <HiArrowRight />
          </button>
        </div>

        {/* Unique Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <div 
              key={index}
              className={`group relative bg-white border border-slate-100 p-8 rounded-[2rem] transition-all duration-500 hover:-translate-y-2 hover:bg-white shadow-[0_10px_40px_rgba(0,0,0,0.02)] ${cat.shadow} hover:shadow-2xl`}
            >
              {/* Animated Icon Orb */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-white mb-8 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                {cat.icon}
              </div>

              <div className="space-y-1">
                <h3 className="text-xl font-bold text-slate-900 tracking-tight group-hover:text-indigo-600 transition-colors">
                  {cat.name}
                </h3>
                <div className="pt-4 border-t border-slate-50 mt-4">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{cat.count}</p>
                  <p className="text-sm font-black text-slate-800 mt-1">
                    {cat.guides} <span className="text-slate-400 font-normal underline decoration-indigo-200">Guides</span>
                  </p>
                </div>
              </div>

              {/* Decorative background element for hover */}
              <div className={`absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-5 blur-2xl transition-opacity rounded-full`} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}