"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative bg-white text-neutral-900 py-32 md:py-40 overflow-hidden"
    >
      {/* Background Decoration (Subtle Red Glow) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          {/* 1. The Hook */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-red-600 font-bold text-xs md:text-sm uppercase tracking-[0.3em] mb-8"
          >
            Ready for the Spotlight?
          </motion.span>

          {/* 2. The Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tighter mb-12"
          >
            LET&apos;S MAKE YOUR <br />
            BRAND <span className="text-red-600">LOUD.</span>
          </motion.h2>

          {/* 3. The Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col md:flex-row items-center gap-6 w-full justify-center mb-16"
          >
            {/* CTA 1: Start Your Project (Email) */}
            <a
              href="mailto:hello@brazzprandcomms.com"
              className="group relative inline-flex items-center justify-center px-10 py-5 overflow-hidden font-bold text-white transition-all duration-300 bg-red-600 hover:bg-red-700 min-w-[240px] shadow-lg shadow-red-600/30"
            >
              <span className="relative uppercase tracking-widest text-sm">
                Start Your Project
              </span>
              <svg
                className="w-4 h-4 ml-2 relative -mr-1 transition-all duration-300 group-hover:translate-x-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </a>

            {/* CTA 2: Book Strategy Call (Phone) */}
            <a
              href="tel:+2348098546762"
              className="group relative inline-flex items-center justify-center px-10 py-5 overflow-hidden font-bold text-neutral-900 transition-all duration-300 bg-white border border-neutral-200 hover:border-red-600 min-w-[240px]"
            >
              <span className="relative uppercase tracking-widest text-sm group-hover:text-red-600 transition-colors">
                Book a Strategy Call
              </span>
            </a>
          </motion.div>

          {/* 4. Custom Plan & Explicit Email Display */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="flex flex-col items-center gap-6"
          >
            {/* Custom Plan Link */}
            <a
              href="mailto:hello@brazzprandcomms.com?subject=Requesting%20Custom%20Plan"
              className="text-sm font-medium text-neutral-500 uppercase tracking-wider hover:text-red-600 transition-colors"
            >
              Request a Custom PR & Marketing Plan
            </a>

            {/* DIVIDER */}
            <div className="w-12 h-[1px] bg-neutral-200"></div>

            {/* EXPLICIT EMAIL DISPLAY */}
            <div className="flex flex-col items-center">
              <span className="text-xs text-neutral-400 mb-2">
                Direct Email
              </span>
              <a
                href="mailto:hello@brazzprandcomms.com"
                className="text-xl md:text-3xl font-serif italic text-neutral-900 border-b border-transparent hover:border-red-600 hover:text-red-600 transition-all duration-300"
              >
                hello@brazzprandcomms.com
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
