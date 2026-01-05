"use client";

import "./globals.css";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

// Components
import Hero from "./components/home/Hero";
import TrustSection from "./components/home/TrustSection";
import Services from "./components/home/Services";
import Industries from "./components/home/Industries";
import Clients from "./components/home/Clients";
import CTA from "./components/home/CTA";
import AboutOverlay from "./components/AboutOverlay"; // Make sure path matches where you saved it
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

export default function HomePage() {
  const [isAboutOpen, setAboutOpen] = useState(false);

  return (
    // CHANGED: Swapped blue for #050505 to match the seamless dark theme
    <main className="bg-[#050505] min-h-screen text-white">
      <Navbar onOpenAbout={() => setAboutOpen(true)} />

      <Hero />

      {/* Added IDs to these wrappers just in case the inner components missed them, 
          ensuring the smooth scroll always has a target */}
      <div id="services">
        <Services />
      </div>

      <TrustSection />

      <div id="industries">
        <Industries />
      </div>

      <div id="clients">
        <Clients />
      </div>

      <div id="contact">
        <CTA />
      </div>

      <Footer onOpenAbout={() => setAboutOpen(true)} />

      {/* The Cheeky Overlay */}
      <AnimatePresence>
        {isAboutOpen && (
          <AboutOverlay
            isOpen={isAboutOpen}
            onClose={() => setAboutOpen(false)}
          />
        )}
      </AnimatePresence>
    </main>
  );
}
