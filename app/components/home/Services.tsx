"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    id: "01",
    title: "360° Marketing Strategy",
    shortDesc: "Build strategies that connect, convert, and scale.",
    description:
      "We build strategies that connect your brand to the right people at the right moment, and convert attention into action.",
    features: [
      "Full-funnel marketing strategy (awareness → conversion)",
      "Market, audience, and competitor insights",
      "Campaign planning, management, and reporting",
      "Multichannel integration: digital, outdoor, experiential, influencer marketing",
      "Clear KPIs, milestones, and measurable outcomes",
    ],
    perfectFor:
      "Brands ready to scale and dominate their category with intentional, structured marketing.",
  },
  {
    id: "02",
    title: "Public Relations & Media Relations",
    shortDesc: "Control your narrative and amplify your story.",
    description:
      "Control your narrative, amplify your story, and get in front of the people who matter.",
    features: [
      "Press features in top-tier newspapers, blogs, TV, digital media",
      "Press releases and strategic communications",
      "Media pitching and relationship management",
      "Reputation building and crisis communication support",
      "Executive thought-leadership positioning",
      "Crisis management",
    ],
    perfectFor:
      "Founders, brands, and organizations that want media visibility, industry credibility, and public trust.",
  },
  {
    id: "03",
    title: "Traditional Marketing",
    shortDesc: "High-impact Print, TV, Radio, and OOH campaigns.",
    description:
      "We leverage traditional channels to drive mass awareness and credibility in ways digital sometimes can't.",
    features: [
      "OOH (Out of Home) advertising; Billboards, Road & Transit vehicles (Buses & Inflights). ",
      "TV & Radio commercial production and placement",
      "Print media campaigns (Magazines, Newspapers)",
      "BTL(Below the Line) Experiential Marketing and activations",
      "Direct marketing activations",
      "Media buying and negotiation",
    ],
    perfectFor:
      "Brands looking for mass market penetration and high-visibility physical presence.",
  },
  {
    id: "04",
    title: "Events & Experiential Marketing",
    shortDesc: "Create experiences that people talk about online and offline.",
    description:
      "We create experiences that people talk about online and offline.",
    features: [
      "Full event conceptualization and production",
      "Launch events, pop-ups, activations, red carpets",
      "Vendor management, logistics, and talent coordination",
      "Guest experience and PR coverage",
      "Post-event visibility (press, content, social media)",
    ],
    perfectFor:
      "Brands launching a product, celebrating milestones, or aiming to create buzz.",
  },
  {
    id: "05",
    title: "Influencer Marketing & Creative Campaigns",
    shortDesc: "Curated storytelling that moves culture.",
    description:
      "We don’t just find influencers; we curate creators whose storytelling moves culture.",
    features: [
      "Influencer mapping (nano → celebrity)",
      "Campaign strategy, scripting, and creative direction",
      "Negotiations, contracts, and full execution",
      "TikTok, Instagram & Twitter campaigns",
      "Performance tracking and ROI reports",
    ],
    perfectFor:
      "Lifestyle, entertainment, food, tech, and consumer brands targeting digital-native audiences.",
  },
  {
    id: "06",
    title: "Branding & Creative Direction",
    shortDesc:
      "Brands that stand out, stay memorable, and communicate confidence.",
    description:
      "We build brands that stand out, stay memorable, and communicate confidence.",
    features: [
      "Brand identity development (logo, colors, typography)",
      "Brand messaging & tone of voice creation",
      "Website and digital asset direction",
      "Creative storytelling & campaign visuals",
      "Consistent brand experience across all platforms",
    ],
    perfectFor:
      "New or existing brands needing a strong, cohesive, compelling visual and narrative identity.",
  },
  {
    id: "07",
    title: "Digital Content & Video Production",
    shortDesc: "Storytelling that captures attention and emotion.",
    description:
      "Storytelling that captures attention, emotion, and engagement across all formats.",
    features: [
      "Promo videos, brand films, interviews, documentaries",
      "Short-form content (Reels, TikTok, YouTube Shorts)",
      "Scriptwriting and creative storyboarding",
      "Location, production, lighting, and editing",
      "Social media content calendars",
    ],
    perfectFor:
      "Brands that want consistent, professional content that drives engagement and conversions.",
  },
  {
    id: "08",
    title: "Executive Profiling",
    shortDesc: "Positioning leaders as industry authorities.",
    description:
      "We position executives, founders, and creators as industry authorities.",
    features: [
      "Media positioning and interviews",
      "Personal brand messaging and digital presence strategy",
      "Speaking opportunities and thought-leadership content",
      "LinkedIn optimization",
      "Organic credibility growth",
    ],
    perfectFor:
      "Leaders who want influence, authority, and visibility in their industry.",
  },
  {
    id: "09",
    title: "Digital Marketing",
    shortDesc: "Turning digital attention into conversions.",
    description:
      "We turn digital attention into conversions, engagement, and brand loyalty.",
    features: [
      "Social media strategy & management",
      "Paid ads (Meta, Google, YouTube, TikTok)",
      "SEO content & website optimization",
      "Email marketing & automated flows",
      "Funnel development and performance tracking",
      "Community management & social listening",
    ],
    perfectFor:
      "Brands aiming to grow online visibility, attract customers, and build digital communities with measurable ROI.",
  },
];

export default function Services() {
  const [openService, setOpenService] = useState<number | null>(null);

  const toggleService = (index: number) => {
    setOpenService(openService === index ? null : index);
  };

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

        {/* The List (Accordion Style) */}
        <div className="flex flex-col border-b border-neutral-200">
          {services.map((service, index) => {
            const isOpen = openService === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`group border-t border-neutral-200 transition-colors duration-500 ${
                  isOpen ? "bg-neutral-50/50" : "hover:bg-neutral-50"
                }`}
              >
                {/* Clickable Header */}
                <div
                  onClick={() => toggleService(index)}
                  className="py-10 flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer"
                >
                  {/* Left Side: ID & Title */}
                  <div className="flex items-baseline gap-6 md:gap-12 flex-1">
                    <span
                      className={`text-sm font-bold font-mono transition-colors duration-300 ${
                        isOpen ? "text-red-600" : "text-neutral-400"
                      }`}
                    >
                      /{service.id}
                    </span>

                    <div className="flex flex-col">
                      <h3
                        className={`text-2xl md:text-4xl font-medium tracking-tight transition-all duration-300 ${
                          isOpen ? "text-red-600" : "text-neutral-900"
                        }`}
                      >
                        {service.title}
                      </h3>
                      {/* Short Desc */}
                      {!isOpen && (
                        <p className="text-neutral-500 text-sm mt-2 font-light hidden md:block">
                          {service.shortDesc}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Right Side: Arrow Icon */}
                  <div className="flex items-center justify-end">
                    <motion.div
                      animate={{
                        rotate: isOpen ? 90 : 0,
                        scale: isOpen ? 1.2 : 1,
                      }}
                      className={`text-2xl transition-colors duration-300 ${
                        isOpen ? "text-red-600" : "text-neutral-300"
                      }`}
                    >
                      →
                    </motion.div>
                  </div>
                </div>

                {/* Expanded Content */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pl-0 md:pl-[calc(3rem+12px)] pb-12 pr-4 md:pr-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Column 1: Description & What You Get */}
                        <div>
                          <p className="text-lg text-neutral-800 leading-relaxed mb-8 font-light">
                            {service.description}
                          </p>
                          <h4 className="text-xs font-bold uppercase tracking-widest text-red-600 mb-6">
                            What You Get
                          </h4>
                          <ul className="space-y-4">
                            {service.features.map((feature, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-600 flex-shrink-0" />
                                <span className="text-neutral-600 text-sm leading-relaxed">
                                  {feature}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Column 2: Perfect For */}
                        <div className="bg-white border border-neutral-100 p-8 rounded-2xl h-fit shadow-sm">
                          <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4">
                            Perfect For
                          </h4>
                          <p className="text-xl md:text-2xl font-serif italic text-neutral-800 leading-relaxed">
                            {service.perfectFor}
                          </p>
                          <div className="mt-8 pt-8 border-t border-neutral-100">
                            <a
                              href="#contact"
                              className="inline-flex items-center gap-2 text-sm font-bold text-red-600 hover:text-red-700 transition-colors uppercase tracking-wider"
                            >
                              Discuss this service <span>→</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* --- PORTFOLIO DOWNLOAD BUTTON --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 flex justify-center"
        >
          {/* NOTE: Ensure 'BrazzPR_Portfolio.pdf' exists in your 'public' folder.
            The 'download' attribute ensures the file is downloaded rather than opened.
          */}
          <a
            href="/BrazzPR and Comms Company Profile.pdf"
            download="BrazzPR and Comms Company Profile.pdf"
            className="group relative px-10 py-5 bg-neutral-900 text-white overflow-hidden rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            {/* Hover Background Animation */}
            <div className="absolute inset-0 bg-red-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>

            <span className="relative z-10 flex items-center gap-3 text-sm font-bold uppercase tracking-widest">
              View Our Portfolio
              <svg
                className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                ></path>
              </svg>
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
