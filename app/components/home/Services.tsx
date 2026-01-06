"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const services = [
  {
    id: "01",
    title: "360° Strategy",
    description:
      "Integrated execution and insights driving sustainable brand growth.",
  },
  {
    id: "02",
    title: "Experiential Marketing",
    description:
      "Immersive brand activations that create lasting emotional connections.",
  },
  {
    id: "03",
    title: "Event Production",
    description:
      "End-to-end management for launches, concerts, and corporate showcases.",
  },
  {
    id: "04",
    title: "Traditional Marketing",
    description:
      "High-impact Print, TV, radio, and OOH campaigns that drive mass awareness.",
  },
  {
    id: "05",
    title: "Media Relations",
    description:
      "Strategic storytelling and placement to shape global perception.",
  },
  {
    id: "06",
    title: "Digital & Content",
    description:
      "Data-driven creative content that engages, converts, and endures.",
  },
  {
    id: "07",
    title: "Brand Development",
    description:
      "Defining identity, positioning, and narrative for long-term relevance.",
  },
];

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="bg-white text-neutral-900 py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 border-b border-neutral-200 pb-8">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-neutral-900">
            OUR EXPERTISE
          </h2>
          <p className="text-neutral-500 mt-4 md:mt-0 max-w-sm text-right font-light">
            Comprehensive solutions for brands that demand attention.
          </p>
        </div>

        {/* The List */}
        <div className="flex flex-col">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative border-b border-neutral-200 transition-colors duration-500 hover:border-red-600"
            >
              <div className="py-10 flex flex-col md:flex-row items-baseline md:items-center justify-between gap-6 cursor-pointer">
                {/* Left Side: ID & Title */}
                <div className="flex items-baseline gap-8 md:gap-16">
                  <span
                    className={`text-sm font-bold font-mono transition-colors duration-300 ${
                      hoveredIndex === index
                        ? "text-red-600"
                        : "text-neutral-400"
                    }`}
                  >
                    /{service.id}
                  </span>

                  <h3
                    className={`text-3xl md:text-5xl font-medium tracking-tight transition-all duration-300 ${
                      hoveredIndex === index
                        ? "translate-x-4 text-neutral-900"
                        : "text-neutral-400"
                    }`}
                  >
                    {service.title}
                  </h3>
                </div>

                {/* Right Side: Description & Arrow */}
                <div className="flex items-center gap-8 md:w-1/3 justify-between">
                  <p
                    className={`text-sm md:text-base leading-relaxed transition-all duration-300 ${
                      hoveredIndex === index
                        ? "opacity-100 text-neutral-600"
                        : "opacity-0 -translate-x-4"
                    }`}
                  >
                    {service.description}
                  </p>

                  {/* Arrow Icon */}
                  <motion.div
                    animate={{
                      rotate: hoveredIndex === index ? -45 : 0,
                      scale: hoveredIndex === index ? 1.2 : 1,
                    }}
                    className={`text-2xl transition-colors duration-300 ${
                      hoveredIndex === index
                        ? "text-red-600"
                        : "text-neutral-300"
                    }`}
                  >
                    →
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
