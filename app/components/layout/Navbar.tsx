"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "About", action: "about" },
  { label: "Expertise", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Partners", href: "#clients" },
];

export default function Navbar({ onOpenAbout }: { onOpenAbout: () => void }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Handle Scroll Effect for background
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  // Smooth Scroll Handler
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setOpen(false); // Close mobile menu if open
    setActiveSection(href);

    const targetId = href.replace("#", "");
    const elem: HTMLElement | null = document.getElementById(targetId);

    if (elem) {
      const offsetTop: number =
        elem.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: offsetTop - 80, // -80px offset for the fixed header
        behavior: "smooth",
      });
    } else {
      // Fallback if ID not found (or if it's Home)
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b
        ${
          scrolled
            ? "bg-white/90 backdrop-blur-md border-neutral-200 py-4 shadow-sm"
            : "bg-transparent border-transparent py-6"
        }
      `}
      >
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
          {/* 1. Logo */}
          <a
            href="#"
            onClick={(e) => handleScroll(e, "#")}
            className="relative z-50 group"
          >
            <Image
              src="/brand/brazz2.svg"
              alt="BrazzPR"
              width={120}
              height={40}
              className="object-contain w-auto h-8 md:h-10 transition-opacity duration-300 hover:opacity-80"
            />
          </a>

          {/* 2. Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => {
              // ABOUT ACTION
              if (item.action === "about") {
                return (
                  <button
                    type="button"
                    key={item.label}
                    onClick={onOpenAbout}
                    className="text-sm font-bold uppercase tracking-[0.1em] text-neutral-600 hover:text-red-600 transition-colors"
                  >
                    {item.label}
                  </button>
                );
              }

              // STANDARD LINKS
              const isActive = activeSection === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href!)}
                  className="relative group py-2"
                >
                  <span
                    className={`text-sm font-bold uppercase tracking-[0.1em] transition-colors duration-300 ${
                      isActive
                        ? "text-red-600"
                        : "text-neutral-600 group-hover:text-red-600"
                    }`}
                  >
                    {item.label}
                  </span>

                  {/* The "Active" Red Dot */}
                  {isActive && (
                    <motion.div
                      layoutId="navDot"
                      className="absolute -bottom-1 left-0 right-0 h-1 w-1 bg-red-600 rounded-full mx-auto"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* 3. CTA & Mobile Toggle */}
          <div className="flex items-center gap-6 z-50">
            {/* Contact Button */}
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, "#contact")}
              className="hidden md:inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-red-600 text-xs font-bold uppercase tracking-widest text-white hover:bg-red-700 transition-all duration-300 shadow-md shadow-red-600/20"
            >
              Contact Us
            </a>

            {/* Blog Link - Added Just After Contact Button */}
            <a
              href="/blog"
              className="hidden md:inline-block text-xs font-bold uppercase tracking-widest text-neutral-900 hover:text-red-600 transition-colors"
            >
              Blog
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 group"
            >
              <span
                className={`w-6 h-0.5 bg-neutral-900 transition-all duration-300 ${
                  open ? "rotate-45 translate-y-2 bg-red-600" : ""
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-neutral-900 transition-all duration-300 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-neutral-900 transition-all duration-300 ${
                  open ? "-rotate-45 -translate-y-2 bg-red-600" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* 4. Editorial White Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-white z-40 flex flex-col justify-center px-6"
          >
            {/* Subtle background texture or gradient can go here if needed */}

            <nav className="flex flex-col gap-6 relative z-10">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.action || item.href}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.1 + index * 0.1,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                >
                  {item.action === "about" ? (
                    <button
                      onClick={() => {
                        onOpenAbout();
                        setOpen(false);
                      }}
                      className="group flex items-baseline gap-4 w-full text-left"
                    >
                      <span className="text-xs font-bold font-mono text-red-600">
                        0{index + 1}
                      </span>
                      <span className="text-5xl font-serif font-medium text-neutral-900 group-hover:text-red-600 group-hover:italic transition-all">
                        {item.label}
                      </span>
                    </button>
                  ) : (
                    <a
                      href={item.href}
                      onClick={(e) => handleScroll(e, item.href!)}
                      className="group flex items-baseline gap-4"
                    >
                      <span className="text-xs font-bold font-mono text-red-600">
                        0{index + 1}
                      </span>
                      <span className="text-5xl font-serif font-medium text-neutral-900 group-hover:text-red-600 group-hover:italic transition-all">
                        {item.label}
                      </span>
                    </a>
                  )}
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8 pt-8 border-t border-neutral-200 flex flex-col gap-4"
              >
                <a
                  href="#contact"
                  onClick={(e) => handleScroll(e, "#contact")}
                  className="text-xl font-medium text-neutral-500 hover:text-red-600 transition-colors flex items-center gap-2"
                >
                  Contact Us <span className="text-red-600">→</span>
                </a>

                {/* Mobile Blog Link */}
                <a
                  href="/blog"
                  className="text-xl font-medium text-neutral-500 hover:text-red-600 transition-colors flex items-center gap-2"
                >
                  Read our Blog <span className="text-red-600">→</span>
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
