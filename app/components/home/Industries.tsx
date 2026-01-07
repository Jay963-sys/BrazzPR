"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// Placeholder Data for Case Studies
const caseStudies = [
  {
    id: 1,
    title: "Project Alpha",
    category: "Tech & SaaS",
    desc: "A viral launch campaign that secured 50k users in 30 days.",
    stats: "2.5M Reach · 50k Signups",
    src: "/brand/9.jpg", // Placeholder image path
    color: "from-blue-900/80 to-slate-900/80",
  },
  {
    id: 2,
    title: "The Rebrand",
    category: "FMCG / Retail",
    desc: "Revitalizing a heritage brand for the Gen-Z market.",
    stats: "+200% Engagement · Brand Refresh",
    src: "/brand/10.jpg",
    color: "from-red-900/80 to-rose-900/80",
  },
  {
    id: 3,
    title: "Global Summit",
    category: "Events & Experiential",
    desc: "End-to-end production for a 5,000 attendee conference.",
    stats: "Sold Out · Global PR Coverage",
    src: "/brand/8.jpg",
    color: "from-purple-900/80 to-indigo-900/80",
  },
  {
    id: 4,
    title: "Crisis Control",
    category: "Corporate Comms",
    desc: "Strategic reputation management during a high-profile merger.",
    stats: "Sentiment Shift · Stakeholder Trust",
    src: "/brand/11.jpg",
    color: "from-emerald-900/80 to-teal-900/80",
  },
];

export default function CaseStudies() {
  const [activeId, setActiveId] = useState(1);

  return (
    <section
      id="case-studies"
      className="bg-white py-24 px-4 md:px-8 border-t border-neutral-200"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row justify-between items-end">
          <div>
            <span className="text-red-600 font-bold text-xs uppercase tracking-[0.2em]">
              Our Proven Results
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-sans text-neutral-900 mt-4 tracking-tight">
              Selected{" "}
              <span className="italic text-red-600 font-serif">
                Case Studies
              </span>
            </h2>
          </div>
          <p className="text-neutral-500 max-w-sm mt-4 md:mt-0 text-sm font-medium">
            Real problems. Real strategies. Real ROI. <br />
            See how we move the needle for our clients.
          </p>
        </div>

        {/* The Accordion */}
        <div className="flex flex-col md:flex-row gap-4 h-[600px] w-full">
          {caseStudies.map((item) => (
            <motion.div
              key={item.id}
              layout
              onClick={() => setActiveId(item.id)}
              onMouseEnter={() => setActiveId(item.id)}
              className={`relative cursor-pointer overflow-hidden rounded-3xl transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] 
                ${activeId === item.id ? "flex-[3]" : "flex-1"} 
                h-[200px] md:h-auto group
              `}
            >
              {/* Background Image */}
              <motion.img
                layoutId={`img-${item.id}`}
                src={item.src}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                animate={{ scale: activeId === item.id ? 1.05 : 1 }}
                transition={{ duration: 0.7 }}
              />

              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/90 opacity-90 transition-opacity duration-500" />

              {/* Hover Tint (Red when inactive) */}
              {activeId !== item.id && (
                <div className="absolute inset-0 bg-red-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              )}

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                {/* Vertical Text when inactive (Desktop only) */}
                {activeId !== item.id && (
                  <div className="hidden md:block absolute bottom-12 left-8 origin-bottom-left -rotate-90">
                    <h3 className="text-2xl font-bold text-white/90 whitespace-nowrap tracking-wider uppercase">
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
                      <span className="inline-block px-3 py-1 mb-4 text-[10px] font-bold uppercase tracking-widest text-white bg-red-600 rounded-full">
                        {item.category}
                      </span>
                      <h3 className="text-3xl md:text-5xl font-serif text-white mb-4 leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-neutral-200 text-lg mb-6 max-w-md font-light">
                        {item.desc}
                      </p>

                      {/* Stats / Meta */}
                      <div className="flex items-center gap-4 border-t border-white/20 pt-4">
                        <span className="text-xs font-mono text-white/80 uppercase tracking-wider">
                          {item.stats}
                        </span>
                        <span className="ml-auto text-white text-xl">→</span>
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
