"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

// Case Studies Data
const caseStudies = [
  {
    id: 1,
    title: "Young Jonn",
    category: "UGC & Influencer Marketing",
    desc: "Songs: Normally, Xtracool, Currency Ft Olamide, Aquafina, Sokoto, Dada.",
    stats: "3M+ TikTok videos · Over 200M+ impressions generated",
    images: ["/cases/y1.jpg"],
    color: "from-blue-900/80 to-slate-900/80",
  },
  {
    id: 2,
    title: "Blaqbonez",
    category: "Album Marketing",
    desc: "Young Preacher Album, Emeka Must Shine Album",
    stats:
      "Averagely 766,000 streams daily after release · Emeka Must Shine - 205 Million streams across all platforms",
    images: ["/cases/b1.jpg"],
    color: "from-neutral-900/80 to-stone-900/80",
  },
  {
    id: 3,
    title: "Wrkman",
    category: "Influencers, Storytellers and Blogs Engagement",
    desc: "Rapid user acquisition through storytelling and blog engagement.",
    stats:
      "Over 10,000 new users Acquired in two minutes · $75K Pre-seed funding raised",
    images: ["/cases/w1.png"],
    color: "from-orange-900/80 to-red-900/80",
    link: "https://punchng.com/brazzpr-secures-75000-for-tech-startup/",
  },
  {
    id: 4,
    title: "Next Afrobeats Star",
    category: "Influencer marketing campaign and Competitors Onboarding",
    desc: "Ultima | Onerpm | MTN",
    stats:
      "40M+ Impressions across social media · Over 1,000 entries via university influencers leverage",
    images: ["/cases/n1.jpg", "/cases/n2.png"],
    color: "from-yellow-900/80 to-amber-900/80",
  },
  {
    id: 5,
    title: "Itel Mobile",
    category: "Itel 3X Superstar X Olamide",
    desc: "Mobilized over 3000 youths across Universities and Lagos at large to attend. Managed post event amplification across blogs. Mobilized over 1000 youths across UNILAG, Yabatech, FCE and Laspotech at large to attend.",
    stats: "",
    images: [
      "/cases/i2.jpg",
      "/cases/i1.jpg",
      "/cases/i3.jpg",
      "/cases/i4.jpg",
    ],
    color: "from-red-900/80 to-pink-900/80",
  },
  {
    id: 6,
    title: "Sterling Bank",
    category: "ICreate Skills Fest",
    desc: "Mobilized over 7000 youths and artisans for 3 days across to attend. Managed post event amplification across blogs.",
    stats: "",
    images: [
      "/cases/s1.jpg",
      "/cases/s2.jpg",
      "/cases/s3.jpg",
      "/cases/s4.jpg",
      "/cases/s5.jpg",
    ],
    color: "from-gray-900/80 to-slate-900/80",
  },
  {
    id: 7,
    title: "Joeboy",
    category: "Lavida Experience",
    desc: "Young Legend",
    stats:
      "Over 2,000 in attendance · Managed Billboard, online publicity, Youth Mobilization",
    images: [
      "/cases/j1.jpg",
      "/cases/j2.jpg",
      "/cases/j3.jpg",
      "/cases/j4.jpg",
      "/cases/j5.jpg",
      "/cases/j6.jpg",
    ],
    color: "from-purple-900/80 to-indigo-900/80",
  },
];

export default function CaseStudies() {
  const [activeId, setActiveId] = useState(1);
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mt-4 tracking-tight">
              Selected{" "}
              <span className="italic text-red-600 font-serif">
                Case Studies
              </span>
            </h2>
          </div>
          <p className="text-neutral-500 max-w-sm mt-4 md:mt-0 text-sm font-medium">
            Real problems. Real strategies. Real ROI.
          </p>
        </div>

        {/* Accordion */}
        <div className="flex flex-col md:flex-row gap-4 min-h-[600px] w-full">
          {caseStudies.map((item) => {
            const isActive = activeId === item.id;
            const currentImage = isActive
              ? item.images[slideIndex % item.images.length]
              : item.images[0];

            return (
              <motion.div
                key={item.id}
                layout
                onClick={() => setActiveId(item.id)}
                onMouseEnter={() => setActiveId(item.id)}
                className={`
                  relative cursor-pointer rounded-3xl transition-all duration-700
                  ease-[cubic-bezier(0.25,1,0.5,1)]
                  h-[260px] sm:h-[320px] md:h-auto
                  overflow-hidden group
                  ${isActive ? "md:flex-[3]" : "md:flex-[1.2]"}
                `}
              >
                {/* Image */}
                <AnimatePresence mode="popLayout">
                  <motion.img
                    key={currentImage}
                    src={currentImage}
                    alt={item.title}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 brightness-110"
                  />
                </AnimatePresence>

                {/* Overlays */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${item.color} mix-blend-multiply opacity-70`}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/90 opacity-70" />

                {!isActive && (
                  <div className="absolute inset-0 bg-red-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                )}

                {/* Content */}
                <div className="absolute inset-0 p-5 sm:p-8 flex flex-col justify-end bg-black/50 md:bg-transparent">
                  {/* Desktop vertical title */}
                  {!isActive && (
                    <div className="hidden md:block absolute inset-0 overflow-visible pointer-events-none">
                      <div className="absolute top-1/2 left-10 -translate-y-1/2 origin-left -rotate-90">
                        <h3 className="text-2xl font-bold text-white/90 uppercase tracking-wider whitespace-nowrap">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  )}

                  {/* Active content */}
                  <AnimatePresence mode="wait">
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.4 }}
                      >
                        <span className="inline-block px-3 py-1 mb-3 text-[10px] font-bold uppercase tracking-widest text-white bg-red-600 rounded-full">
                          {item.category}
                        </span>

                        <h3 className="text-2xl sm:text-3xl md:text-5xl font-serif text-white mb-3 leading-tight">
                          {item.title}
                        </h3>

                        <p className="text-neutral-200 text-sm sm:text-base md:text-lg mb-4 max-w-md font-light">
                          {item.desc}
                        </p>

                        {/* Fixed: Always render stats container, hide only if empty */}
                        {item.stats && (
                          <div className="flex items-center gap-4 border-t border-white/20 pt-4">
                            <span className="text-xs font-mono text-white/80 uppercase tracking-wider">
                              {item.stats}
                            </span>
                            <span className="ml-auto text-white text-xl">
                              →
                            </span>
                          </div>
                        )}

                        {item.link && (
                          <Link
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-white underline underline-offset-4 hover:text-red-400 transition-colors"
                          >
                            Read full story
                            <span className="text-lg">→</span>
                          </Link>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
