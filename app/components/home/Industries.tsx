"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const industries = [
  {
    id: 1,
    title: "Corporate Giants",
    desc: "Reputation management for the Fortune 500.",
    meta: "Finance · Tech · FMCG",
    // Corporate/Skyscraper Image
    src: "/brand/9.jpg",
    color: "from-blue-900/80 to-slate-900/80",
  },
  {
    id: 2,
    title: "Public Figures",
    desc: "Crafting narratives for those in the spotlight.",
    meta: "Leadership · Speaking · Image",
    // Spotlight/Stage Image
    src: "/brand/10.jpg",
    color: "from-purple-900/80 to-neutral-900/80",
  },
  {
    id: 3,
    title: "Luxury & Lifestyle",
    desc: "Story-driven campaigns for premium brands.",
    meta: "Fashion · Arts · Hospitality",
    // Fashion/Runway vibe
    src: "/brand/8.jpg",
    color: "from-pink-900/80 to-rose-900/80",
  },
  {
    id: 4,
    title: "Disruptors",
    desc: "Scalable PR for high-growth startups.",
    meta: "Growth · Launches · Entry",
    // Startup/Creative vibe
    src: "/brand/11.jpg",
    color: "from-orange-900/80 to-amber-900/80",
  },
];

export default function Industries() {
  const [activeId, setActiveId] = useState(1);

  return (
    <section
      id="industries"
      className="bg-[#050505] py-24 px-4 md:px-8 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row justify-between items-end">
          <div>
            <span className="text-yellow-500 font-mono text-xs uppercase tracking-widest">
              Who We Serve
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-white mt-4">
              Industry{" "}
              <span className="italic text-neutral-500">Expertise</span>
            </h2>
          </div>
          <p className="text-neutral-400 max-w-sm mt-4 md:mt-0 text-sm">
            We adapt our voice to fit the boardroom, the runway, and the server
            room.
          </p>
        </div>

        {/* The Accordion */}
        <div className="flex flex-col md:flex-row gap-2 h-[600px] w-full">
          {industries.map((item) => (
            <motion.div
              key={item.id}
              layout
              onClick={() => setActiveId(item.id)}
              onMouseEnter={() => setActiveId(item.id)}
              className={`relative cursor-pointer overflow-hidden rounded-3xl transition-all duration-700 ease-out 
                ${activeId === item.id ? "flex-[3]" : "flex-1"} 
                h-[200px] md:h-auto
              `}
            >
              {/* Background Image */}
              <motion.img
                layoutId={`img-${item.id}`}
                src={item.src}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700"
                animate={{ scale: activeId === item.id ? 1.1 : 1 }}
                transition={{ duration: 0.7 }}
              />

              {/* Gradient Overlay - Changes based on "Vibe" */}
              <div
                className={`absolute inset-0 bg-gradient-to-t ${item.color} mix-blend-multiply opacity-90`}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90" />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                {/* Vertical Text when inactive (Desktop only) */}
                {activeId !== item.id && (
                  <div className="hidden md:block absolute bottom-12 left-8 origin-bottom-left -rotate-90">
                    <h3 className="text-2xl font-bold text-white/70 whitespace-nowrap tracking-wider uppercase">
                      {item.title}
                    </h3>
                  </div>
                )}

                {/* Active Content */}
                <AnimatePresence mode="wait">
                  {activeId === item.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ delay: 0.1, duration: 0.4 }}
                    >
                      <h3 className="text-3xl md:text-5xl font-serif text-white mb-4 leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-neutral-300 text-lg mb-6 max-w-md font-light">
                        {item.desc}
                      </p>
                      <div className="flex gap-3 text-xs font-mono text-yellow-500 uppercase tracking-wider">
                        <span>{item.meta}</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
