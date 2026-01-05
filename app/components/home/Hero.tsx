"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// 1. YOUR IMAGES
const backgroundImages = [
  "/brand/1.jpg",
  "/brand/2.jpg",
  "/brand/3.jpg",
  "/brand/4.jpg",
  "/brand/5.jpg",
  "/brand/6.jpg",
  "/brand/7.jpg",
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Cycle images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-[#050505]">
      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={currentImageIndex}
            src={backgroundImages[currentImageIndex]}
            alt="Hero Background"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Cinematic Overlay: Darkens the image for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Gradient Fade at the bottom to blend into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent"></div>
      </div>

      {/* --- CONTENT LAYER --- */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center flex flex-col items-center">
        {/* 1. Small Top Tagline (The "Magazine Header") */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 overflow-hidden"
        >
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/20 bg-black/20 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse"></span>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/90">
              Est. 2018 · Global PR
            </span>
          </div>
        </motion.div>

        {/* 2. Main Headline (Centered & Massive) */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl lg:text-9xl font-sans font-medium tracking-tighter text-white leading-[0.9] mix-blend-overlay"
        >
          MAKE IT <br />
          <span className="font-serif italic font-light opacity-90">
            LOUDER.
          </span>
        </motion.h1>

        {/* 3. Subtext (Clean & Narrow) */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 text-lg md:text-xl text-white/80 max-w-2xl font-light leading-relaxed drop-shadow-md"
        >
          Strategic storytelling for brands that refuse to blend in. We turn
          passive attention into cultural obsession.
        </motion.p>

        {/* 4. Premium Buttons (Centered) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 flex flex-col sm:flex-row items-center gap-6"
        >
          {/* Primary Button: Glass/White */}
          <a
            href="#contact"
            className="group relative px-10 py-4 rounded-full bg-white text-black font-medium text-sm tracking-widest uppercase overflow-hidden transition-all hover:scale-105"
          >
            <span className="relative z-10">Start Project</span>
          </a>

          {/* Secondary Button: Minimal Link */}
          <a
            href="#services"
            className="group flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm uppercase tracking-widest font-medium"
          >
            <span>What We Do</span>
            <span className="group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </a>
        </motion.div>
      </div>

      {/* --- SCROLL INDICATOR --- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <span className="text-[10px] uppercase tracking-widest text-white/50">
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
      </motion.div>
    </section>
  );
}
