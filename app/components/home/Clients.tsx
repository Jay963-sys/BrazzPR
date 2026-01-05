"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  "/clients/1.svg",
  "/clients/2.svg",
  "/clients/3.svg",
  "/clients/4.svg",
  "/clients/5.svg",
  "/clients/6.svg",
  "/clients/8.svg",
  "/clients/9.png",
  "/clients/10.jpeg",
  "/clients/11.svg",
  "/clients/12.svg",
  "/clients/13.png",
  "/clients/14.png",
  "/clients/15.png",
  "/clients/16.png",
  "/clients/17.png",
  "/clients/18.png",
  "/clients/19.png",
  "/clients/20.png",
  "/clients/21.png",
  "/clients/22.png",
  "/clients/23.svg",
  "/clients/24.png",
];

const impacts = [
  "Deep relationships with media gatekeepers.",
  "Global reach anchored in African insight.",
  "Proven track record across Finance & Tech.",
  "Elite network of founders & figures.",
];

export default function Clients() {
  return (
    <section
      id="clients"
      className="bg-[#050505] text-white py-32 border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-500 mb-4"
        >
          Trusted Partners
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-serif text-white max-w-2xl mx-auto"
        >
          In Good <span className="italic text-neutral-500">Company.</span>
        </motion.h2>
      </div>

      {/* --- STATIC GRID SECTION (Replaces Marquee) --- */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-12 items-center justify-items-center">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }} // Staggered fade-in
              className="relative w-full h-12 md:h-16 flex items-center justify-center opacity-70 hover:opacity-100 hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <Image
                src={logo}
                alt="Client Logo"
                width={120}
                height={60}
                className="object-contain w-full h-full max-w-[120px]"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Minimal Impact List */}
      <div className="max-w-7xl mx-auto px-6 mt-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-t border-white/10 pt-12">
          {impacts.map((text, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              {/* Little decorative dot */}
              <div className="w-1.5 h-1.5 rounded-full bg-neutral-700 mb-4 group-hover:bg-yellow-500 transition-colors"></div>
              <p className="text-neutral-400 text-sm font-medium leading-relaxed group-hover:text-white transition-colors">
                {text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
