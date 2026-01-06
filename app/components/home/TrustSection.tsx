"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

// --- DATA ---
const reasons = [
  "We think differently and act decisively",
  "We combine creativity with strategy",
  "We understand culture, media, and influence",
  "We deliver outcomes, not activity",
  "We treat every brand like it’s our own",
  "We have built solid relationships",
];

const stats = [
  {
    label: "Years Experience",
    stat: "8",
    suffix: "+",
    desc: "Defining the standard.",
  },
  {
    label: "Global Cities",
    stat: "10",
    suffix: "+",
    desc: "Lagos, London, Africa.",
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
    desc: "We don't miss.",
  },
];

// --- HOOKS ---
interface UseCountUpReturn {
  ref: React.RefObject<HTMLDivElement | null>;
  value: number;
}

function useCountUp(
  end: string | number,
  duration: number = 2000
): UseCountUpReturn {
  const [count, setCount] = useState<number>(0);
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView: boolean = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView || hasAnimated) return;

    setHasAnimated(true);

    let startTime: number | null = null;
    const startValue: number = 0;
    const numericEnd: number = parseFloat(
      end.toString().replace(/[^0-9.]/g, "")
    );

    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const progress: number = Math.min((time - startTime) / duration, 1);
      const eased: number = 1 - Math.pow(1 - progress, 4);
      setCount(startValue + (numericEnd - startValue) * eased);

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration, hasAnimated]);

  return { ref, value: Math.floor(count) };
}

// --- COMPONENTS ---
interface StatItemProps {
  label: string;
  stat: string;
  suffix: string;
  desc: string;
  index: number;
}

function StatItem({ label, stat, suffix, desc, index }: StatItemProps) {
  const counter = useCountUp(stat, 2500);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.8 }}
      className={`
        relative py-10 md:py-0 px-6 flex flex-col justify-between h-40
        border-t border-white/10 md:border-t-0
        ${index !== 0 ? "lg:border-l lg:border-white/10" : ""}
      `}
    >
      <span className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500 mb-4">
        {label}
      </span>

      <div className="flex-1 flex items-end mb-4" ref={counter.ref}>
        <div className="flex items-start leading-none">
          <span className="text-6xl md:text-7xl font-light tracking-tighter tabular-nums text-white">
            {counter.value}
          </span>
          <span className="text-xl md:text-2xl font-bold text-red-600 mt-2 ml-1">
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
        {/* --- PART 1: WHY CHOOSE US --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-32">
          {/* Left: Headlines */}
          <div>
            <motion.h4
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-red-600 font-bold tracking-widest uppercase text-sm mb-6"
            >
              Why Brands Choose BrazzPR
            </motion.h4>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-sans font-bold leading-[1.1] tracking-tight"
            >
              Bold Ideas. <br />
              Real Results. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">
                Unmatched Execution.
              </span>
            </motion.h2>
          </div>

          {/* Right: The Checklist */}
          <div className="flex flex-col justify-center">
            <div className="space-y-6">
              {reasons.map((reason, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  {/* Custom Red Checkmark */}
                  <div className="mt-1 min-w-[20px] h-[20px] rounded-full bg-red-600/20 flex items-center justify-center">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 3L4.5 8.5L2 6"
                        stroke="#DC2626"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p className="text-lg text-neutral-300 font-light leading-snug">
                    {reason}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* --- PART 2: THE NUMBERS (Separator) --- */}
        <div className="w-full h-[1px] bg-white/10 mb-16"></div>

        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-neutral-500 uppercase tracking-widest text-xs font-bold mb-12"
        >
          Impact by the Numbers
        </motion.h3>

        {/* --- PART 3: STATS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 lg:gap-y-0">
          {stats.map((item, index) => (
            <StatItem key={item.label} {...item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
