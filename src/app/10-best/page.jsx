
import TenBest from '@/components/TenBest';
import TenBestFaqs from '@/components/TenBestFaqs'
import { HiTrendingUp, HiBadgeCheck, HiChevronRight, HiExternalLink, HiCalendar, HiShieldCheck } from 'react-icons/hi';




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

          <TenBest/>
         

        </div>
         <TenBestFaqs/>
      </main>
    </div>
  );
}