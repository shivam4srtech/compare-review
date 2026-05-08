'use client';
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Search, ArrowRight } from 'lucide-react';

const ReviewDirectory = () => {
  // Mock Data: In a real app, you'd fetch this from your database
 const reviews = [
    { id: 1, title: '1Password Review', category: 'Software' },
    { id: 2, title: 'Adobe Creative Cloud', category: 'Design' },
    { id: 3, title: 'Apple MacBook Pro M3', category: 'Tech' },
    { id: 4, title: 'Beats Studio Pro', category: 'Audio' },
    { id: 5, title: 'Bose QuietComfort', category: 'Audio' },
    { id: 6, title: 'Canon EOS R5', category: 'Photography' },
    { id: 7, title: '99Designs Service', category: 'Service' },
    { id: 8, title: 'Nike Air Max', category: 'Fashion' },
    { id: 9, title: 'Samsung Galaxy S24', category: 'Tech' },
    { id: 10, title: 'Sony WH-1000XM5', category: 'Audio' },
    { id: 11, title: 'Adobe Photoshop', category: 'Design' },
    { id: 12, title: 'Microsoft Surface Laptop', category: 'Tech' },
    { id: 13, title: 'Logitech MX Master 3S', category: 'Accessories' },
    { id: 14, title: 'Dell XPS 15', category: 'Tech' },
    { id: 15, title: 'GoPro HERO12', category: 'Photography' },
    { id: 16, title: 'DJI Mini 4 Pro', category: 'Tech' },
    { id: 17, title: 'Kindle Paperwhite', category: 'Gadgets' },
    { id: 18, title: 'iPad Pro M2', category: 'Tech' },
    { id: 19, title: 'Apple Watch Ultra 2', category: 'Gadgets' },
    { id: 20, title: 'Garmin Fenix 7', category: 'Sports' },
    { id: 21, title: 'Tesla Model 3', category: 'Automotive' },
    { id: 22, title: 'Ring Video Doorbell', category: 'Smart Home' },
    { id: 23, title: 'Nest Thermostat', category: 'Smart Home' },
    { id: 24, title: 'Sonos Arc', category: 'Audio' },
    { id: 25, title: 'Roku Streaming Stick', category: 'Entertainment' },
    { id: 26, title: 'Chromecast with Google TV', category: 'Entertainment' },
    { id: 27, title: 'Fire TV Cube', category: 'Entertainment' },
    { id: 28, title: 'Eero Pro 6E', category: 'Networking' },
    { id: 29, title: 'Ubiquiti UniFi', category: 'Networking' },
    { id: 30, title: 'Asus ROG Zephyrus', category: 'Tech' },
    { id: 31, title: 'Razer Blade 16', category: 'Tech' },
    { id: 32, title: 'Corsair K100 Keyboard', category: 'Accessories' },
    { id: 33, title: 'SteelSeries Arctis Nova Pro', category: 'Audio' },
    { id: 34, title: 'Elgato Stream Deck', category: 'Accessories' },
    { id: 35, title: 'Lululemon Align Leggings', category: 'Fashion' },
    { id: 36, title: 'Patagonia Nano Puff', category: 'Fashion' },
    { id: 37, title: 'The North Face Jacket', category: 'Fashion' },
    { id: 38, title: 'Yeti Rambler', category: 'Lifestyle' },
    { id: 39, title: 'Hydro Flask', category: 'Lifestyle' },
    { id: 40, title: 'Instant Pot Duo', category: 'Kitchen' },
    { id: 41, title: 'Ninja Foodi', category: 'Kitchen' },
    { id: 42, title: 'Vitamix Blender', category: 'Kitchen' },
    { id: 43, title: 'Breville Espresso Machine', category: 'Kitchen' },
    { id: 44, title: 'Keurig K-Elite', category: 'Kitchen' },
    { id: 45, title: 'Roomba j7+', category: 'Smart Home' },
    { id: 46, title: 'Shark AI Robot Vacuum', category: 'Smart Home' },
    { id: 47, title: 'Dyson V15 Detect', category: 'Appliances' },
    { id: 48, title: 'Tineco Floor S7', category: 'Appliances' },
    { id: 49, title: 'Bissell CrossWave', category: 'Appliances' },
    { id: 50, title: 'Purple Harmony Pillow', category: 'Home' },
    { id: 51, title: 'Casper Mattress', category: 'Home' },
    { id: 52, title: 'Tempur-Pedic Mattress', category: 'Home' },
    { id: 53, title: 'Herman Miller Aeron', category: 'Furniture' },
    { id: 54, title: 'Steelcase Leap Chair', category: 'Furniture' },
    { id: 55, title: 'Autonomous ErgoChair', category: 'Furniture' },
    { id: 56, title: 'Uplift Standing Desk', category: 'Furniture' },
    { id: 57, title: 'Fully Jarvis Desk', category: 'Furniture' },
    { id: 58, title: 'Omnilux LED Mask', category: 'Beauty' },
    { id: 59, title: 'Dyson Airwrap', category: 'Beauty' },
    { id: 60, title: 'Shark FlexStyle', category: 'Beauty' },
    { id: 61, title: 'Philips Sonicare Toothbrush', category: 'Health' },
    { id: 62, title: 'Oral-B iO Series 10', category: 'Health' },
    { id: 63, title: 'Waterpik Water Flosser', category: 'Health' },
    { id: 64, title: 'Withings Body Scan', category: 'Health' },
    { id: 65, title: 'Oura Ring Gen 3', category: 'Health' },
    { id: 66, title: 'Fitbit Charge 6', category: 'Fitness' },
    { id: 67, title: 'Whoop 4.0', category: 'Fitness' },
    { id: 68, title: 'Peloton Bike+', category: 'Fitness' },
    { id: 69, title: 'NordicTrack S22i', category: 'Fitness' },
    { id: 70, title: 'Tonal System', category: 'Fitness' },
    { id: 71, title: 'Mirror Home Gym', category: 'Fitness' },
    { id: 72, title: 'Lululemon Studio Mirror', category: 'Fitness' },
    { id: 73, title: 'Hyperice Hypervolt 2', category: 'Wellness' },
    { id: 74, title: 'Theragun Pro', category: 'Wellness' },
    { id: 75, title: 'Philips Hue Starter Kit', category: 'Smart Home' },
    { id: 76, title: 'LIFX Color Bulb', category: 'Smart Home' },
    { id: 77, title: 'TP-Link Kasa Smart Plug', category: 'Smart Home' },
    { id: 78, title: 'August Smart Lock', category: 'Smart Home' },
    { id: 79, title: 'Yale Assure Lock 2', category: 'Smart Home' },
    { id: 80, title: 'Arlo Pro 5 Camera', category: 'Smart Home' },
    { id: 81, title: 'EufyCam 3', category: 'Smart Home' },
    { id: 82, title: 'Blink Outdoor Camera', category: 'Smart Home' },
    { id: 83, title: 'Wyze Cam v3', category: 'Smart Home' },
    { id: 84, title: 'Meta Quest 3', category: 'Tech' },
    { id: 85, title: 'PlayStation 5', category: 'Gaming' },
    { id: 86, title: 'Xbox Series X', category: 'Gaming' },
    { id: 87, title: 'Nintendo Switch OLED', category: 'Gaming' },
    { id: 88, title: 'Steam Deck OLED', category: 'Gaming' },
    { id: 89, title: 'Logitech G Pro X Superlight', category: 'Gaming' },
    { id: 90, title: 'Razer DeathAdder V3', category: 'Gaming' },
    { id: 91, title: 'Alienware AW3423DW', category: 'Gaming' },
    { id: 92, title: 'Samsung Odyssey G9', category: 'Gaming' },
    { id: 93, title: 'LG C3 OLED TV', category: 'Entertainment' },
    { id: 94, title: 'Sony A95L TV', category: 'Entertainment' },
    { id: 95, title: 'TCL QM8 TV', category: 'Entertainment' },
    { id: 96, title: 'Apple TV 4K', category: 'Entertainment' },
    { id: 97, title: 'Nvidia Shield TV Pro', category: 'Entertainment' },
    { id: 98, title: 'Sennheiser Momentum 4', category: 'Audio' },
    { id: 99, title: 'B&W Px8', category: 'Audio' },
    { id: 100, title: 'Focal Bathys', category: 'Audio' },
    { id: 101, title: 'AirPods Pro 2', category: 'Audio' },
    { id: 102, title: 'Pixel Buds Pro', category: 'Audio' },
    { id: 103, title: 'Nothing Ear 2', category: 'Audio' },
    { id: 104, title: 'Jabra Elite 10', category: 'Audio' },
    { id: 105, title: 'Beats Fit Pro', category: 'Audio' },
    { id: 106, title: 'Google Pixel 8 Pro', category: 'Tech' },
    { id: 107, title: 'OnePlus 12', category: 'Tech' }
];

  const alphabet = "#ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const [activeLetter, setActiveLetter] = useState('A');

  // Grouping Logic
  const groupedReviews = alphabet.reduce((acc, letter) => {
    const matches = reviews.filter(rev => {
      const firstChar = rev.title.charAt(0).toUpperCase();
      if (letter === "#") return /\d/.test(firstChar); // Numbers
      return firstChar === letter;
    });
    if (matches.length > 0) acc[letter] = matches;
    return acc;
  }, {});

  const scrollToSection = (letter) => {
    setActiveLetter(letter);
    const element = document.getElementById(`section-${letter}`);
    if (element) {
      const offset = 100; // Account for sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-brand-bg min-h-screen">
      {/* Header & Search */}
      <div className="bg-white pt-6 pb-10 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-black text-brand-accent mb-6">Review <span className="text-brand">Index</span></h1>
          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text" 
              placeholder="Search 1,000+ expert reviews..." 
              className="w-full pl-12 pr-6 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all"
            />
          </div>
        </div>
      </div>

      {/* Sticky Alphabet Nav */}
      <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-100 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 overflow-x-auto no-scrollbar flex justify-between gap-2">
          {alphabet.map((letter) => (
            <button
              key={letter}
              onClick={() => scrollToSection(letter)}
              className={`min-w-[30px]  flex items-center justify-center rounded font-semibold transition-all ${
                activeLetter === letter 
                  ? 'bg-brand text-white shadow-lg shadow-brand/30 scale-110' 
                  : 'text-slate-400 hover:text-brand-accent hover:bg-brand-mute'
              }`}
            >
              {letter}
            </button>
          ))}
        </div>
      </nav>

      {/* Directory Content */}
      <main className="max-w-7xl mx-auto px-6 py-4">
        <div className="space-y-4">
          {alphabet.map((letter) => groupedReviews[letter] && (
            <section key={letter} id={`section-${letter}`} className="scroll-mt-32">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-6xl font-black text-slate-200 leading-none">{letter}</span>
                <div className="h-[2px] flex-grow bg-slate-100 mt-4"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {groupedReviews[letter].map((review) => (
                  <motion.a
                    href={`/reviews/${review.id}`}
                    key={review.id}
                    whileHover={{ x: 10 }}
                    className="group flex items-center justify-between p-3 bg-white rounded border border-slate-100 shadow-sm hover:shadow-md transition-all"
                  >
                    <div>
                      <h3 className="text-lg font-bold text-brand-accent group-hover:text-brand transition-colors">
                        {review.title}
                      </h3>
                      <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                        {review.category}
                      </span>
                    </div>
                    <ArrowRight className="text-brand opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" size={20} />
                  </motion.a>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ReviewDirectory;