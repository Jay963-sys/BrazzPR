"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative bg-[#050505] text-white py-32 md:py-48 overflow-hidden border-t border-white/10"
    >
      {/* Background Gradient Spot - Adds a subtle "stage light" effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          {/* 1. The Hook - Small & Sharp */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-yellow-500 font-mono text-xs md:text-sm uppercase tracking-[0.3em] mb-6"
          >
            What&apos;s Next?
          </motion.span>

          {/* 2. The Headline - HUGE Editorial Serif */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-6xl md:text-8xl lg:text-9xl font-serif leading-[0.9] tracking-tight"
          >
            Ready to be <br />
            <span className="italic text-neutral-500">Unforgettable?</span>
          </motion.h2>

          {/* 4. The Giant Button - Minimalist Outline Style */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-16"
          >
            <a
              href="mailto:support@brazzpr.com"
              className="group relative inline-flex items-center justify-center px-12 py-6 overflow-hidden rounded-full border border-white/20 hover:border-white transition-all duration-500"
            >
              {/* Button Hover Fill Effect */}
              <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 bg-white transition-transform duration-500 ease-in-out mix-blend-difference" />

              <span className="relative z-10 text-xl font-light tracking-widest uppercase group-hover:text-black transition-colors duration-500">
                Start the Conversation
              </span>

              {/* Arrow Icon */}
              <svg
                className="relative z-10 ml-4 w-5 h-5 group-hover:text-black transition-colors duration-500 group-hover:translate-x-1 transform transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </motion.div>

          {/* 5. Direct Email Link (The "Luxury" touch) */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="mt-16"
          >
            <p className="text-sm text-neutral-600 mb-2">
              Or email us directly
            </p>
            <a
              href="mailto:hello@brazzpr.com"
              className="text-2xl md:text-3xl font-serif italic text-white/40 hover:text-white transition-colors duration-300 border-b border-white/10 hover:border-white pb-1"
            >
              support@brazzprandcomms.com
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
