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
  "/clients/10.svg",
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
      className="bg-white text-neutral-900 py-32 border-t border-neutral-200 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-xs font-bold uppercase tracking-[0.2em] text-red-600 mb-4"
        >
          Trusted Partners
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold tracking-tight text-neutral-900 max-w-2xl mx-auto"
        >
          In Good{" "}
          <span className="italic font-serif text-neutral-500">Company.</span>
        </motion.h2>
      </div>

      {/* --- LOGO GRID --- */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-12 gap-y-16 items-center justify-items-center">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="relative w-full h-16 md:h-20 flex items-center justify-center group"
            >
              {/* NOTE: 'grayscale' makes logos black/white. 
                 'group-hover:grayscale-0' reveals color on hover. 
                 Remove 'grayscale' if you want them always colored.
              */}
              <Image
                src={logo}
                alt="Client Logo"
                width={140}
                height={80}
                className="object-contain w-full h-full max-w-[140px] opacity-90  group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 cursor-pointer"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- IMPACT LIST --- */}
      <div className="max-w-7xl mx-auto px-6 mt-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-t border-neutral-200 pt-12">
          {impacts.map((text, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              {/* Decorative dot (Red on hover) */}
              <div className="w-2 h-2 rounded-full bg-neutral-300 mb-4 group-hover:bg-red-600 transition-colors duration-300"></div>
              <p className="text-neutral-600 text-sm font-medium leading-relaxed group-hover:text-neutral-900 transition-colors">
                {text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
