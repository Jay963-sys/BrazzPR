"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  {
    label: "Years Experience",
    stat: "7",
    suffix: "+",
    desc: "Defining the standard.",
  },
  {
    label: "Global Cities",
    stat: "10",
    suffix: "+",
    desc: "Lagos, London, New York.",
  },
  {
    label: "VIP Clients",
    stat: "100",
    suffix: "+",
    desc: "Trusted by the 1%.",
  },
  {
    label: "Success Rate",
    stat: "98",
    suffix: "%",
    desc: "We don&apos;t miss.",
  },
];

function useCountUp(end: string | number, duration = 2000) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView || hasAnimated) return;

    setHasAnimated(true);

    let startTime: number | null = null;
    const startValue = 0;
    const numericEnd = parseFloat(end.toString().replace(/[^0-9.]/g, ""));

    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(startValue + (numericEnd - startValue) * eased);

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration, hasAnimated]);

  return { ref, value: Math.floor(count) };
}

function StatItem({
  label,
  stat,
  suffix,
  desc,
  index,
}: {
  label: string;
  stat: string;
  suffix: string;
  desc: string;
  index: number;
}) {
  const counter = useCountUp(stat, 2500);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.8 }}
      className={`
        relative py-10 md:py-0 px-6 flex flex-col justify-between h-48
        border-t border-white/10 md:border-t-0
        ${index !== 0 ? "lg:border-l lg:border-white/10" : ""}
      `}
    >
      <span className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500 mb-4">
        {label}
      </span>

      <div className="flex-1 flex items-end mb-4" ref={counter.ref}>
        <div className="flex items-start leading-none">
          <span className="text-7xl md:text-8xl font-light tracking-tighter tabular-nums">
            {counter.value}
          </span>
          <span className="text-2xl md:text-3xl font-light text-neutral-500 mt-2 ml-1">
            {suffix}
          </span>
        </div>
      </div>

      <p className="text-sm text-neutral-400 font-medium border-t border-white/5 pt-4 mt-auto">
        {desc}
      </p>
    </motion.div>
  );
}

export default function TrustSection() {
  return (
    <section className="relative bg-[#050505] text-white py-32 overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-light tracking-tight leading-tight"
          >
            Impact by the <br />
            <span className="font-serif italic text-neutral-400">Numbers.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 md:mt-0 max-w-xs text-neutral-500 text-sm leading-relaxed"
          >
            Data-driven results for brands that define culture.
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => (
            <StatItem key={item.label} {...item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
