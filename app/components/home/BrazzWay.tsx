"use client";

import { motion } from "framer-motion";

const principles = [
  {
    title: "Human-Led Approach",
    desc: "We build genuine relationships and deliver personalized, white-glove service to every client.",
  },
  {
    title: "Founder-Led Expertise",
    desc: "Hands-on leadership backed by years of industry experience and deep-rooted influence.",
  },
  {
    title: "Global Perspective, Local Insight",
    desc: "International standards anchored in cultural relevance across African and global markets.",
  },
  {
    title: "Excellence Without Compromise",
    desc: "Unwavering commitment to quality, integrity, and innovation in every engagement.",
  },
];

export default function BrazzWay() {
  return (
    <section className="bg-[#111114] text-white py-28 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-sm uppercase tracking-widest text-neutral-400">
              The BrazzPR Way
            </p>
            <h2 className="mt-4 text-3xl md:text-4xl font-serif leading-tight">
              Human-Led. Strategy-Driven. Globally Informed.
            </h2>
            <p className="mt-6 text-lg text-neutral-300 max-w-xl">
              Our approach blends deep relationships, cultural intelligence, and
              world-class strategy to deliver communications that endure.
            </p>
          </motion.div>

          <div className="space-y-10">
            {principles.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-medium">{item.title}</h3>
                <p className="mt-3 text-neutral-400 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
