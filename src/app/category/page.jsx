
import Link from 'next/link';
import { HiChartBar, HiBookOpen, HiSearch, HiArrowRight } from 'react-icons/hi';
import { MdFitnessCenter, MdHealthAndSafety, MdMonitorHeart } from 'react-icons/md';

const subCategories = [
  { name: "Absorber", guides: 8, icon: <MdFitnessCenter />, color: "text-blue-500", bg: "bg-blue-50" },
  { name: "Armband", guides: 5, icon: <MdMonitorHeart />, color: "text-emerald-500", bg: "bg-emerald-50" },
  { name: "Stability Ball", guides: 124, icon: <HiChartBar />, color: "text-teal-500", bg: "bg-teal-50" },
  { name: "Ballast", guides: 11, icon: <HiBookOpen />, color: "text-indigo-500", bg: "bg-indigo-50" },
  { name: "Heart Monitors", guides: 42, icon: <MdHealthAndSafety />, color: "text-rose-500", bg: "bg-rose-50" },
  { name: "Yoga Mats", guides: 96, icon: <MdFitnessCenter />, color: "text-orange-500", bg: "bg-orange-50" },
];

export default function CategoryPage() {
  return (
    <div className="min-h-screen bg-[#FDFDFF] pb-20">
      {/* 1. UNIQUE HERO: Split Layout */}
      <header className="relative pt-4 px-3 lg:px-24  overflow-hidden">
        {/* Decorative background blur */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-indigo-50/50 to-transparent -z-10" />
        
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-12">
          <div className="lg:w-2/3">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">
              <Link href="/" className="hover:text-indigo-600">Home</Link>
              <span className="w-1 h-1 bg-slate-300 rounded-full" />
              <span className="text-indigo-600">Health & Fitness</span>
            </nav>

            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 leading-[1.1] mb-6">
              Elite <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">Fitness</span> <br /> 
              Instruments.
            </h1>
            <p className="text-slate-500 text-lg md:text-xl max-w-xl font-medium leading-relaxed">
              In-depth analysis of high-performance health devices and wellness products 
              vetted by our AI-driven review panels.
            </p>
          </div>

          {/* Data Stats Card */}
          <div className="lg:w-1/3 w-full">
            <div className="bg-white border border-slate-100 p-8 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.04)] relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                <HiChartBar size={80} className="text-indigo-600" />
              </div>
              <div className="relative z-10 flex flex-col gap-6">
                <div>
                  <span className="text-5xl font-bold text-slate-900">71</span>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Specialized Categories</p>
                </div>
                <div className="h-[1px] w-full bg-slate-100" />
                <div>
                  <span className="text-5xl font-bold text-indigo-600">2,849</span>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Verified Buying Guides</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 2. CATEGORY BROWSER */}
      <section className="max-w-7xl mx-auto px-6 lg:px-24 mt-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-6">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
            Browse <span className="text-indigo-600">Specialties</span>
          </h2>
          
          {/* Internal Search */}
          <div className="relative group min-w-[300px]">
            <HiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors" />
            <input 
              type="text" 
              placeholder="Filter health categories..." 
              className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-2xl focus:ring-4 focus:ring-indigo-50 focus:border-indigo-200 transition-all outline-none text-sm font-medium"
            />
          </div>
        </div>

        {/* ASYMMETRICAL GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {subCategories.map((item, i) => (
            <Link 
              href="/10-best"
              key={i}
              className="group relative bg-white border border-slate-100 p-8 rounded-[2rem] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)]"
            >
              {/* Floating Icon Orb */}
              <div className={`w-14 h-14 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center mb-6 text-2xl transition-transform group-hover:scale-110 group-hover:rotate-6`}>
                {item.icon}
              </div>

              <div className="space-y-1">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {item.name}
                </h3>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-tighter">
                  {item.guides} Expert Guides
                </p>
              </div>

              {/* Unique Reveal Arrow */}
              <div className="mt-6 flex items-center gap-2 text-indigo-600 font-bold text-xs opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                Explore Category <HiArrowRight />
              </div>

              {/* Corner Accent */}
              <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl ${item.bg} opacity-20 rounded-bl-[3rem] transition-all group-hover:w-20 group-hover:h-20`} />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}