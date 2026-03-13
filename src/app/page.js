import Image from "next/image";
import { HiSearch, HiCheckCircle, HiLightningBolt } from 'react-icons/hi';
import HomeFaqs from "../components/HomeFaqs"
import CategoryGrid from "@/components/CategoryGrid";
export default function Home() {
  return (
      <>
        <section className="relative min-h-[90vh] flex items-center bg-[#F8FAFC] overflow-hidden pt-2 px-6 lg:px-24">
            {/* Abstract Background Accents */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 blur-[120px] rounded-full -mr-48 -mt-48" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-50 blur-[100px] rounded-full -ml-20 -mb-20" />

            <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-6 md:gap-16 items-center">
              
              {/* LEFT CONTENT: Minimalist & Bold */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2 mb-6">
                  <span className="h-[1px] w-12 bg-indigo-600"></span>
                  <span className="text-indigo-600 font-bold uppercase tracking-[0.2em] text-xs">
                    Powered by Next-Gen AI
                  </span>
                </div>

                <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-8 tracking-tight">
                  The Gold Standard <br /> 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
                    Of Product Curation
                  </span>
                </h1>
                {/* Search: "Floating Island" Design */}
                <div className="relative max-w-2xl group mb-8">
                  <div className="flex items-center bg-white shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-slate-100 rounded-2xl p-2 transition-all duration-300 group-focus-within:shadow-[0_20px_50px_rgba(79,70,229,0.1)] group-focus-within:border-indigo-200">
                    <div className="pl-4 text-slate-400">
                      <HiSearch size={22} />
                    </div>
                    <input 
                      type="text" 
                      placeholder="Search premium products..." 
                      className="outline-[0] w-full bg-transparent border-none focus:ring-0 text-slate-800 placeholder-slate-400 px-4 py-4 text-lg"
                    />
                    <button className="bg-slate-900 hover:bg-indigo-600 text-white font-semibold px-10 py-4 rounded-xl transition-all shadow-lg active:scale-95">
                      Search
                    </button>
                  </div>
                </div>
                <p className="text-slate-500 text-lg md:text-xl max-w-xl mb-10 leading-relaxed font-medium">
                  We analyze <span className="text-slate-900 font-bold">968+ categories</span> so you don't have to. 
                  Smart shopping simplified through real-time data audits.
                </p>

                
              </div>

              {/* RIGHT CONTENT: Unique "Card Stack" Layout */}
              <div className="lg:col-span-5 relative">
                {/* Main Decorative Box */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-[40px] rotate-3 scale-105 -z-10 border border-indigo-100/50" />
                
                <div className="flex flex-col gap-6">
                  {[
                    { label: "Expert Buying Guides", val: "36,487+", color: "bg-blue-600" },
                    { label: "Products Evaluated", val: "374,398+", color: "bg-indigo-600" },
                    { label: "AI Reliability Score", val: "99.2%", color: "bg-teal-500" },
                  ].map((item, i) => (
                    <div 
                      key={i} 
                      className={`bg-white/80 backdrop-blur-md border border-white p-6 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex items-center gap-5 transition-transform hover:scale-[1.02] cursor-default
                      ${i === 1 ? 'lg:-translate-x-12 shadow-[0_20px_40px_rgba(0,0,0,0.05)]' : ''}`}
                    >
                      <div className={`${item.color} p-3 rounded-2xl text-white shadow-lg shadow-indigo-200`}>
                        {i === 2 ? <HiLightningBolt size={24} /> : <HiCheckCircle size={24} />}
                      </div>
                      <div>
                        <h4 className="text-slate-900 font-bold text-2xl tracking-tight leading-none">{item.val}</h4>
                        <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-1.5">{item.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
        </section>
        <CategoryGrid/>
        <HomeFaqs/>
      </>
  );
}
