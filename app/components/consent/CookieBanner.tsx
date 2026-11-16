"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getConsent, setConsent } from "../../lib/pixel";

export default function CookieBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(getConsent() === null);
  }, []);

  if (!open) return null;

  const choose = (value: "granted" | "denied") => {
    setConsent(value);
    setOpen(false);
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-[60] p-4 md:p-6"
    >
      <div className="mx-auto max-w-3xl bg-[#111] text-white border border-white/10 shadow-2xl p-5 md:p-6 flex flex-col md:flex-row md:items-center gap-4">
        <p className="text-sm text-neutral-300 leading-relaxed flex-1">
          We use cookies, including the Meta Pixel, to measure and improve our
          advertising. You can accept or decline. See our{" "}
          <Link href="/privacy" className="underline underline-offset-4 hover:text-white">
            Privacy Policy
          </Link>
          .
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            type="button"
            onClick={() => choose("denied")}
            className="px-5 py-2.5 text-xs font-bold uppercase tracking-widest border border-white/20 hover:border-white transition-colors"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => choose("granted")}
            className="px-5 py-2.5 text-xs font-bold uppercase tracking-widest bg-red-600 hover:bg-red-700 transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
