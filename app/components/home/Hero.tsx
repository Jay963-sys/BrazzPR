"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// 1. YOUR IMAGES
const backgroundImages = ["/brand/1.jpg", "/brand/2.jpg"];

// 2. CASE STUDIES DATA
const caseStudies = [
  {
    id: 1,
    category: "Tech Startup Visibility Campaign",
    highlight: "$75,000 Raised",
    description:
      "Secured national media attention and investor trust for Wrkman.",
  },
  {
    id: 2,
    category: "Entertainment Brand Growth",
    highlight: "+40% Audience Growth",
    description:
      "Executed a viral 360° marketing strategy for major industry players.",
  },
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentCaseIndex, setCurrentCaseIndex] = useState(0);

  // Cycle background images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Cycle Case Studies every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCaseIndex((prev) => (prev + 1) % caseStudies.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    // FIX 1: Changed h-screen to min-h-screen (or min-h-[100dvh])
    // This allows the section to stretch if content is too tall on mobile
    <section className="relative min-h-[100dvh] w-full flex flex-col justify-center items-center overflow-hidden bg-white">
      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-30">
        <motion.div
          className="absolute inset-0"
          animate={{ scale: 1.05 }}
          transition={{ duration: 30, ease: "linear" }}
        >
          <AnimatePresence initial={false}>
            <motion.img
              key={currentImageIndex}
              src={backgroundImages[currentImageIndex]}
              alt="Hero Background"
              className="absolute inset-0 w-full h-full object-cover grayscale"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                opacity: { duration: 2.0, ease: "easeInOut" },
              }}
            />
          </AnimatePresence>
        </motion.div>
      </div>

      {/* --- WHITE OVERLAYS --- */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-white via-white/80 to-white" />

      {/* --- FLOATING WARNING (Hidden on Mobile) --- */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-12 left-10 hidden lg:flex items-center gap-4 z-30"
      >
        <div className="w-12 h-12 rounded-full border border-neutral-200 bg-white/50 backdrop-blur-sm flex items-center justify-center">
          <motion.span
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            className="text-red-600 text-lg"
          >
            ★
          </motion.span>
        </div>
        <p className="text-xs font-medium text-neutral-500 max-w-[160px] leading-tight text-left">
          <span className="text-red-600 font-bold uppercase tracking-wider block text-[10px]">
            Warning:
          </span>
          Content may cause rapid brand growth.
        </p>
      </motion.div>

      {/* --- CONTENT LAYER --- */}
      {/* FIX 2: Added py-32 md:py-0 to ensure top text isn't cut off by navbar on mobile */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 text-center flex flex-col items-center py-32 md:py-0">
        {/* 1. Tagline */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 relative flex items-center gap-4"
        >
          <span className="h-[1px] w-8 bg-red-600 hidden md:block"></span>
          <span className="text-xs font-bold text-red-600 tracking-[0.25em] uppercase">
            Since 2018
          </span>
          <span className="h-[1px] w-8 bg-red-600 hidden md:block"></span>
        </motion.div>

        {/* 2. Main Headline */}
        <div className="relative mb-6">
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            // FIX 3: Adjusted font size to start at text-4xl on mobile to save space
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-sans font-black tracking-tighter text-neutral-900 leading-[1.1] md:leading-[0.95]"
          >
            WE DON&apos;T DO QUIET. <br />
            WE MAKE BRANDS <br />
            <span className="text-red-600 relative inline-block mt-1 md:mt-2">
              IMPOSSIBLE TO IGNORE
              <svg
                className="absolute w-full h-3 -bottom-2 left-0 text-red-200"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 5 Q 50 10 100 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </span>
            <span className="text-neutral-900">.</span>
          </motion.h1>
        </div>

        {/* 3. Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base md:text-xl text-neutral-600 max-w-3xl font-light leading-relaxed mb-8"
        >
          Strategic PR, 360° marketing, and creative communications that cut
          through the noise and put your brand exactly where it belongs: in the
          spotlight.
        </motion.p>

        {/* 4. DYNAMIC CASE STUDIES */}
        <div className="w-full max-w-2xl mb-10 h-32 md:h-28 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCaseIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center border-y border-neutral-200 py-4"
            >
              <p className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase mb-2">
                Case Studies That Speak Louder Than Words
              </p>
              {/* Responsive Text Size for Highlights */}
              <h3 className="text-xl md:text-3xl font-bold text-red-600 mb-1">
                {caseStudies[currentCaseIndex].highlight}
              </h3>
              <p className="text-xs md:text-sm text-neutral-600 font-medium px-4 md:px-0">
                <span className="text-neutral-900 mr-2 block md:inline">
                  {caseStudies[currentCaseIndex].category}
                </span>
                <span className="hidden md:inline text-neutral-400">|</span>
                <span className="block md:inline mt-1 md:mt-0 md:ml-2 font-light italic">
                  {caseStudies[currentCaseIndex].description}
                </span>
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 5. BUTTONS & BLOG LINK */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col items-center gap-4 pb-12 md:pb-0" // Extra padding bottom for mobile scroll
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <a
              href="#contact"
              className="group relative px-8 py-4 bg-red-600 overflow-hidden min-w-[180px] shadow-lg shadow-red-600/20 transition-all hover:shadow-red-600/40"
            >
              <div className="absolute inset-0 bg-black/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
              <span className="relative z-10 text-sm font-bold tracking-widest uppercase text-white">
                Start Project
              </span>
            </a>

            <a
              href="#services"
              className="group flex items-center gap-3 text-neutral-900 transition-all hover:text-red-600"
            >
              <div className="relative w-10 h-10 border border-neutral-300 rounded-full flex items-center justify-center overflow-hidden group-hover:border-red-600 transition-colors duration-300">
                <span className="relative z-10 text-lg group-hover:-translate-y-10 group-hover:translate-x-10 transition-transform duration-300">
                  ↓
                </span>
                <span className="absolute text-lg translate-y-10 -translate-x-10 group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-300 text-red-600">
                  →
                </span>
              </div>
              <span className="text-sm uppercase tracking-widest font-bold">
                Our Work
              </span>
            </a>
          </div>

          <a
            href="https://punchng.com/brazzpr-secures-75000-for-tech-startup/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 text-xs font-mono text-neutral-400 hover:text-red-600 underline decoration-neutral-300 hover:decoration-red-600 underline-offset-4 transition-all"
          >
            Read full case studies →
          </a>
        </motion.div>
      </div>

      {/* --- SCROLL INDICATOR --- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 z-20"
      >
        <div className="w-[1px] h-12 bg-neutral-300 relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full h-1/2 bg-red-600"
            animate={{ y: [-50, 50] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
