'use client'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import ResponsiveRender from './ResponsiveRender';
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import { GoSearch } from "react-icons/go";
import { HiArrowRight } from 'react-icons/hi';

import StoreSearch from './StoreSearch';
import { useState, useRef, useEffect  } from "react";
const menuData = [
  {
    title: "Technology",
    links: ["Adapter", "Alternator", "Altimeter", "Ammeter"],
    color: "bg-blue-500"
  },
  {
    title: "Home & Garden",
    links: ["Additive", "Adults", "Aerator", "Aids"],
    color: "bg-emerald-500"
  },
  {
    title: "Health & Fitness",
    links: ["Absorber", "Armband", "Ball", "Ballast"],
    color: "bg-rose-500"
  },
  {
    title: "Fashion & Beauty",
    links: ["Aftershave", "Anklets", "Antiperspirant", "Apparel"],
    color: "bg-purple-500"
  },
  {
    title: "Sports & Outdoors",
    links: ["Adhesive", "Aquarium", "Backboard", "Backpack"],
    color: "bg-orange-500"
  },
  {
    title: "Baby & Kids",
    links: ["Accessories", "Actuator", "Aprons", "Barrier"],
    color: "bg-pink-500"
  }
];
export default function Header(){
    const [isOpen, setIsOpen] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const pathname = usePathname();
    const searchRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
        if (
            searchRef.current &&
            !searchRef.current.contains(event.target)
        ) {
            setShowSearch(false);
        }
        }

        if (showSearch) {
        document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        };
    },[isOpen, showSearch]);
    const defautNavClasses = "border-solid border-[#f0f3fe]  border-b-[2px] h-[65px] flex items-center px-[5px] text-[#7c828f] font-[400] text-[16px] uppercase"
    return(
        <>
            <header className="h-[50px] min-h-fit items-center flex flex-row justify-between px-[20px] md:px-[40px] shadow-xs relative bg-[#f0f3fe]">
               <ResponsiveRender breakpoint={768}
                mobile={
                    <>
                       <div className="menu_icon">
                           <button
                                aria-label="menu"
                                onClick={() => {setIsOpen(true); setShowSearch(false);}}
                            >
                            <IoMenuOutline size={26}/>
                            </button>
                       </div>
                    </>
                 }
               />
                <div className="flex items-center gap-4">
                    <div className="logo">
                        <Link href="/">
                            <Image
                                src='/images/logo.png'
                                width={220}
                                height={60}
                                alt="logo"
                                className="h-auto object-contain"
                                loading="eager"
                                fetchPriority="high"
                            />
                        </Link>
                    </div>
                    
                </div>
                <ul className="navLinks flex item-center items-center gap-5 desktop_nav_links">
                    <li className="flex items-center">
                        <Link href={'/'} className={`${defautNavClasses} ${pathname === "/" ? "active" : ''}`} >Home</Link>
                    </li>
                    <li className="flex items-center group">
                        <Link href={'/10-best'} className={`${defautNavClasses} ${pathname === "/10best" ? "active" : ''}`} >
                            Top 10
                            {/* Subtle indicator icon */}
                            <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </Link>
                        {/* THE MEGA MENU PANEL */}
                        <div className="absolute top-[100%] left-1/2 -translate-x-1/2 w-[90vw] max-w-[1400px] 
                            opacity-0 invisible translate-y-4 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 
                            transition-all duration-300 ease-out z-50">
              
                            <div className="bg-white border border-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-[2rem] overflow-hidden mt-2">
                                <div className="px-10 py-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                                {menuData.map((section, idx) => (
                                    <div key={idx} className="space-y-5">
                                    <div className="space-y-2">
                                        <h3 className="text-slate-900 font-black text-xs uppercase tracking-[0.15em]">{section.title}</h3>
                                        <div className={`h-1 w-6 rounded-full ${section.color}`} />
                                    </div>
                                    <ul className="space-y-3">
                                        {section.links.map((link, i) => (
                                        <li key={i}>
                                            <Link href="/10-best" className="text-slate-500 hover:text-indigo-600 text-[13px] font-medium transition-colors">
                                            {link}
                                            </Link>
                                        </li>
                                        ))}
                                    </ul>
                                    <Link href="#" className="inline-flex items-center gap-1 text-indigo-600 text-[11px] font-bold hover:translate-x-1 transition-transform">
                                        VIEW ALL <HiArrowRight size={12} />
                                    </Link>
                                    </div>
                                ))}
                                </div>

                                {/* Optional Bottom Bar */}
                                <div className="bg-slate-50 border-t border-slate-100 px-10 py-4 flex justify-between items-center">
                                <span className="text-slate-400 text-xs font-medium italic">Discover over 12,000+ top-rated products analyzed this week.</span>
                                <Link href="/guides" className="text-indigo-600 text-xs font-bold hover:underline">Full Buying Guides →</Link>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="flex items-center">
                        <Link href={'/category'} className={`${defautNavClasses} ${pathname === "/category" ? "active" : ''}`} >Category</Link>
                    </li>
                    <li className="flex items-center">
                        <Link href={'/review'} className={`${defautNavClasses} ${pathname === "/review" ? "active" : ''}`} >Review</Link>
                    </li>
                </ul>
                <ResponsiveRender breakpoint={768}
                    mobile={
                        <>
                            <div ref={searchRef} className="refWrapper">
                                <div>
                                    { showSearch? (<button onClick={()=>setShowSearch(false) } className="search_btn"><IoCloseOutline size={24} /></button>): (<button className="search_btn" onClick={()=>setShowSearch(true)}><GoSearch size={24}/></button>)}
                                </div>
                                { showSearch? 
                                (
                                    <div className="absolute top-[55px] z-[99] left-[0]  w-[100%] bg-[#fff]  mobile_search p-4">
                                        <div className="m-auto">
                                            <StoreSearch/>
                                        </div>
                                    </div>
                                )
                                :
                                ( 
                                ""
                                )
                                }
                            </div>    
                        </>
                    }
                    desktop={
                        <>
                            <div className="flex items-center w-[380px]">
                                <div className="w-[100%]">
                                        <StoreSearch/>
                                </div>
                            </div>
                        </>
                    }
                />
                <ResponsiveRender breakpoint={768}
                    mobile={
                        <>
                           
                           
                            {/* ===== Overlay ===== */}
                            <div
                                className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
                                isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                                }`}
                                onClick={() => setIsOpen(false)}
                            />
                            {/* ===== Offcanvas Sidebar ===== */}
                            <div
                                    className={`fixed top-0 left-0 h-full w-[260px] bg-white z-50 shadow-lg transform transition-transform duration-300 ${
                                    isOpen ? "translate-x-0" : "-translate-x-full"
                                    }`}
                                >
                                {/* Close Button */}
                                <div className="flex justify-end p-4 border-b">
                                <button onClick={() => setIsOpen(false)}>
                                    <IoCloseOutline size={26} />
                                </button>
                                </div>

                                {/* Mobile Nav Links */}
                                <ul className="flex flex-col">
                                <li>
                                    <Link
                                    href="/"
                                    onClick={() => setIsOpen(false)}
                                    className={`${defautNavClasses} ${
                                        pathname === "/" ? "active" : ""
                                    }`}
                                    >
                                    Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                    href="/products"
                                    onClick={() => setIsOpen(false)}
                                    className={`${defautNavClasses} ${
                                        pathname === "/products" ? "active" : ""
                                    }`}
                                    >
                                    Products
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                    href="/stores"
                                    onClick={() => setIsOpen(false)}
                                    className={`${defautNavClasses} ${
                                        pathname === "/stores" ? "active" : ""
                                    }`}
                                    >
                                    Store
                                    </Link>
                                </li>
                                </ul>
                            </div>
                        </>
                    }
                />  
            </header>
        </>
    );
}