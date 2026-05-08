import { HiBadgeCheck, HiExternalLink, HiCalendar } from 'react-icons/hi';
export default function TenBest(){
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
    return(
        <>
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
        </>
    )
}