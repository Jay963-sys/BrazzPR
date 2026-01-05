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
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const next =
      backgroundImages[(currentImageIndex + 1) % backgroundImages.length];
    const img = new Image();
    img.src = next;
  }, [currentImageIndex]);

  return (
    <section className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-[#050505]">
      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          animate={{ scale: 1.08 }}
          transition={{ duration: 40, ease: "linear" }}
        >
          <AnimatePresence initial={false}>
            <motion.img
              key={currentImageIndex}
              src={backgroundImages[currentImageIndex]}
              alt="Hero Background"
              className="absolute inset-0 w-full h-full object-cover will-change-opacity"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                opacity: { duration: 2.4, ease: "easeInOut" },
              }}
            />
          </AnimatePresence>
        </motion.div>

        {/* Overlays */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent" />
      </div>

      {/* --- CHEEKY / UNORTHODOX FLOATING ELEMENTS (Hidden on mobile) --- */}
      <div className="absolute inset-0 z-10 w-full h-full pointer-events-none hidden lg:block">
        {/* Top Left */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-10 left-10 font-mono text-xs text-white/60 tracking-widest"
        >
          <p>LAT: 40.7128° N</p>
          <p>VOL: 110% (MAX)</p>
        </motion.div>

        {/* Middle Right */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute right-8 top-1/2 -translate-y-1/2 origin-right rotate-90"
        >
          <p className="text-white/40 text-sm uppercase tracking-[0.3em] font-bold whitespace-nowrap">
            ( We don&apos;t do whispers )
          </p>
        </motion.div>

        {/* Bottom Left */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-12 left-10 flex items-center gap-4"
        >
          <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center animate-spin-slow">
            <span className="text-[8px] text-white">★</span>
          </div>
          <p className="text-xs text-white/70 max-w-[150px] leading-tight">
            Warning: Content may cause rapid brand growth.
          </p>
        </motion.div>
      </div>

      {/* --- CONTENT LAYER --- */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 text-center flex flex-col items-center">
        {/* 1. Tagline */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 relative"
        >
          <span className="absolute right-full mr-4 top-1/2 w-12 h-[1px] bg-white/30 hidden md:block"></span>

          <span className="text-xs font-mono text-yellow-400 tracking-[0.2em] uppercase">
            {"// Since 2018"}
          </span>

          <span className="absolute left-full ml-4 top-1/2 w-12 h-[1px] bg-white/30 hidden md:block"></span>
        </motion.div>

        {/* 2. Main Headline */}
        <div className="relative">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-9xl font-sans font-black tracking-tighter text-white leading-[0.85]"
          >
            MAKE IT <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
              LOUDER
            </span>
            <span className="text-yellow-500">.</span>
          </motion.h1>

          <motion.span
            initial={{ opacity: 0, rotate: -10 }}
            animate={{ opacity: 1, rotate: -6 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="absolute -top-6 -right-4 md:-right-12 text-sm md:text-xl font-serif italic text-white/80 bg-red-600/80 px-2 py-1 transform rotate-[-6deg]"
          >
            Sorry neighbors!
          </motion.span>
        </div>

        {/* 3. Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 text-lg md:text-xl text-white/80 max-w-xl font-light leading-relaxed"
        >
          Strategic storytelling for brands that refuse to blend in.
          <br className="hidden md:block" />
          <span className="text-white font-medium italic">
            Normal is not in our budget.
          </span>
        </motion.p>

        {/* --- 4. NEW UPGRADED BUTTONS --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 flex flex-col md:flex-row items-center gap-8"
        >
          {/* PRIMARY BUTTON: The "Slot Machine" Hover */}
          <a
            href="#contact"
            className="group relative px-8 py-4 bg-white overflow-hidden rounded-none min-w-[180px]"
          >
            {/* The sliding background (Black on hover) */}
            <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>

            {/* The Scrolling Text Container */}
            <div className="relative h-5 overflow-hidden w-full text-center">
              <div className="flex flex-col transition-transform duration-300 ease-in-out group-hover:-translate-y-[22px]">
                {/* Default Text */}
                <span className="text-sm font-bold tracking-widest uppercase text-black group-hover:text-transparent transition-colors">
                  Start Project
                </span>

                {/* Hover Text (Cheeky) */}
                <span className="text-sm font-bold tracking-widest uppercase text-yellow-400 pt-1">
                  Let&apos;s Make Noise
                </span>
              </div>
            </div>
          </a>

          {/* SECONDARY BUTTON: The "Orbit" Link */}
          <a
            href="#services"
            className="group flex items-center gap-3 text-white transition-all"
          >
            {/* The Circle Icon */}
            <div className="relative w-10 h-10 border border-white/30 rounded-full flex items-center justify-center overflow-hidden group-hover:border-yellow-400 transition-colors duration-300">
              {/* Arrow default */}
              <span className="relative z-10 text-lg group-hover:-translate-y-10 group-hover:translate-x-10 transition-transform duration-300">
                ↓
              </span>
              {/* Arrow hidden (appears on hover) */}
              <span className="absolute text-lg translate-y-10 -translate-x-10 group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-300 text-yellow-400">
                →
              </span>
            </div>

            <span className="text-sm uppercase tracking-widest font-mono group-hover:text-yellow-400 transition-colors">
              Our Work
            </span>
          </a>
        </motion.div>
      </div>

      {/* --- SCROLL INDICATOR --- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 right-10 hidden md:flex flex-col items-end gap-2 z-20"
      >
        <span className="text-[10px] uppercase tracking-widest text-white/50 text-right">
          Scroll to
          <br />
          disrupt
        </span>
        <div className="h-12 w-[1px] bg-white/30"></div>
      </motion.div>
    </section>
  );
}
