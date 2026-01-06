"use client";

const socialLinks = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/brazzprandcomms?igsh=MTVncWh0MWJhczM5eA==",
    icon: (
      <svg
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.153 1.772c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.468.93c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "X (Twitter)",
    url: "https://x.com/brazzpr?s=21",
    icon: (
      <svg
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/brazzpr-and-comms/",
    icon: (
      <svg
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];

// Updated Link Array: 'About' uses 'action' instead of 'href'
const exploreLinks = [
  { name: "About", action: "about" },
  { name: "Expertise", href: "#services" },
  { name: "Industries", href: "#industries" },
  { name: "Partners", href: "#clients" },
  { name: "Contact", href: "#contact" },
  { name: "Blog", href: "#blog" },
];

interface FooterProps {
  onOpenAbout: () => void;
}

export default function Footer({ onOpenAbout }: FooterProps) {
  // Smooth Scroll Helper
  const handleScroll = (e: React.MouseEvent<HTMLElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);

    if (elem) {
      const offsetTop = elem.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: offsetTop - 80,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  return (
    <footer className="bg-[#050505] text-white border-t border-white/5 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 pb-12">
        {" "}
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-24">
          {/* Column 1: Brand (Spans 4 columns) */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <a
                href="#"
                onClick={(e) => handleScroll(e, "#")}
                className="inline-block mb-6"
              >
                <span className="text-2xl font-serif font-bold tracking-tight">
                  BrazzPR and comms.
                </span>
              </a>
              <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
                Strategic communications for the bold. We build narratives that
                define culture and leadership across Africa and the globe.
              </p>
            </div>
          </div>

          {/* Column 2: Navigation (Spans 2) */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-6">
              Explore
            </h4>
            <ul className="space-y-4">
              {exploreLinks.map((item) => (
                <li key={item.name}>
                  {item.action === "about" ? (
                    // IF ACTION IS ABOUT: Use Button with onOpenAbout
                    <button
                      type="button"
                      onClick={onOpenAbout}
                      className="text-sm text-neutral-400 hover:text-white transition-colors text-left cursor-pointer"
                    >
                      {item.name}
                    </button>
                  ) : (
                    // ELSE: Use Anchor with Smooth Scroll
                    <a
                      href={item.href}
                      onClick={(e) => handleScroll(e, item.href!)}
                      className="text-sm text-neutral-400 hover:text-white transition-colors"
                    >
                      {item.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact (Spans 3) */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-6">
              Contact
            </h4>
            <ul className="space-y-4 text-sm text-neutral-400">
              <li>
                <a
                  href="mailto:hello@brazzprandcomms.com"
                  className="hover:text-white transition-colors"
                >
                  hello@brazzprandcomms.com
                </a>
              </li>
              <li>+234 809 854 6762</li>
              <li>+44 749 898 7137</li>
            </ul>
          </div>

          {/* Column 4: Socials (Spans 3) */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-6">
              Follow
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:text-black hover:bg-white hover:border-white transition-all duration-300"
                  aria-label={item.name}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-600">
          <p>© {new Date().getFullYear()} BrazzPR. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-neutral-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-neutral-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* THE GIANT FOOTER TEXT */}
      <div className="w-full overflow-hidden leading-none select-none pointer-events-none">
        <h1 className="text-[15vw] font-black text-[#111] text-center tracking-tighter -mb-[4vw]">
          BRAZZPR
        </h1>
      </div>
    </footer>
  );
}
