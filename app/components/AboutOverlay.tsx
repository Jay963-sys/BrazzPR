"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";

interface AboutOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AboutOverlay({ isOpen, onClose }: AboutOverlayProps) {
  // Lock body scroll when overlay is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const values = [
    {
      id: "01",
      title: "Excellence",
      desc: "Delivering unparalleled quality in every strategy and execution, setting the standard for industry performance.",
    },
    {
      id: "02",
      title: "Integrity",
      desc: "Building lasting partnerships through trust and transparency, ensuring our actions always align with our promises.",
    },
    {
      id: "03",
      title: "Innovation",
      desc: "Constantly pushing creative boundaries to deliver forward-thinking solutions that keep brands ahead of the curve.",
    },
  ];

  const pillars = [
    {
      title: "Expert Collective",
      desc: "A dedicated team of energetic industry experts and affiliates delivering cutting-edge strategies.",
    },
    {
      title: "Founder-Led Expertise",
      desc: "Unique blend of practical experience and deep-rooted relationships with influential individuals.",
    },
    {
      title: "Global Scale, African Roots",
      desc: "Global industry standards anchored in local cultural understanding to empower brands worldwide.",
    },
  ];

  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[100] bg-[#0E0E10] text-white overflow-y-auto"
    >
      {/* CLOSE BUTTON */}
      <button
        type="button"
        onClick={onClose}
        className="fixed top-8 right-8 z-50 group flex items-center gap-2 mix-blend-difference cursor-pointer"
      >
        <span className="text-xs font-bold uppercase tracking-widest group-hover:text-yellow-500 transition-colors">
          Close
        </span>
        <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </button>

      <div className="max-w-7xl mx-auto px-6 py-32">
        {/* --- HEADER: WHO WE ARE --- */}
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="inline-block px-3 py-1 rounded-full border border-yellow-500/30 text-yellow-500 text-xs font-mono uppercase tracking-widest mb-6">
              Who We Are
            </span>
            <h2 className="text-5xl md:text-7xl font-serif leading-tight mb-8">
              We don&apos;t do <br />
              <span className="italic text-neutral-500">vanilla.</span>
            </h2>
            <p className="text-lg md:text-xl text-neutral-300 leading-relaxed font-light">
              BrazzPR is Africa&apos;s leading strategic marketing and creative
              PR communications agency. We bridge the gap between brands and
              their audiences through impactful storytelling and strategic
              execution.
            </p>
          </motion.div>
        </div>

        {/* --- MISSION & VISION GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-stretch mb-32">
          {/* VISION */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="relative border border-white/10 p-10 rounded-3xl bg-white/[0.02]"
          >
            <h3 className="text-3xl font-serif italic mb-6 text-white">
              The Vision
            </h3>
            <p className="text-neutral-300 leading-relaxed font-light text-lg mb-6">
              To be the most trusted and innovative 360 marketing & PR agency.
            </p>
            <p className="text-neutral-400 leading-relaxed font-light text-sm border-t border-white/10 pt-6">
              Transforming communications and setting new standards of
              excellence globally by blending African roots with world-class
              strategy.
            </p>
          </motion.div>

          {/* MISSION */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="relative border border-white/10 p-10 rounded-3xl bg-white/[0.02]"
          >
            <h3 className="text-3xl font-serif italic mb-6 text-white">
              The Mission
            </h3>
            <p className="text-neutral-300 leading-relaxed font-light text-lg mb-6">
              To empower industry leaders and brands through innovative
              strategies.
            </p>
            <p className="text-neutral-400 leading-relaxed font-light text-sm border-t border-white/10 pt-6">
              Building lasting relationships and delivering excellence with
              integrity, ensuring every client resonates authentically with
              their audience.
            </p>
          </motion.div>
        </div>

        {/* --- CORE VALUES (01, 02, 03) --- */}
        <div className="mb-32">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center text-xs font-bold uppercase tracking-[0.3em] text-yellow-500 mb-16"
          >
            Core Values
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 border-l border-white/20 hover:border-yellow-500 hover:bg-white/[0.02] transition-colors duration-500"
              >
                <span className="text-4xl font-black text-white/10 group-hover:text-yellow-500/50 transition-colors block mb-6">
                  {item.id}
                </span>
                <h4 className="text-xl font-bold uppercase tracking-wider mb-4">
                  {item.title}
                </h4>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- THE BRAZZ FACTOR (Expertise) --- */}
        <div className="border-t border-white/10 pt-20 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <h4 className="text-lg font-bold text-white mb-3">
                  {pillar.title}
                </h4>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 
        <div className="mt-20">
          <p className="text-center text-xs font-mono uppercase tracking-widest text-neutral-500 mb-8">
            The Squad
          </p>
          <div className="flex gap-4 overflow-hidden opacity-50 hover:opacity-100 transition-opacity duration-500">
        
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-full h-64 bg-neutral-800 relative group"
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all" />
                <Image
                  src="/brand/12.jpg"
                  alt="Client"
                  width={120}
                  height={120}
                />
              </div>
            ))}
          </div>
        </div> */}

        {/* --- FOOTER ACTION --- */}
        <div className="mt-20 text-center border-t border-white/10 pt-8">
          <p className="text-neutral-500">Seen enough?</p>
          <button
            onClick={onClose}
            className="mt-4 text-yellow-500 border-b border-yellow-500 pb-1 hover:text-white hover:border-white transition-all"
          >
            Go back to homepage
          </button>
        </div>
      </div>
    </motion.div>
  );
}
