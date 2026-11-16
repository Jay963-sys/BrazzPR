"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  CONSENT_EVENT,
  META_PIXEL_ID,
  getConsent,
  type Consent,
} from "../../lib/pixel";

/**
 * Loads the Meta Pixel only once the visitor has accepted cookies
 * (NDPA 2023 / UK GDPR), and records a PageView on every client-side
 * navigation, not just the first page load.
 */
export default function MetaPixel() {
  const [consent, setConsentState] = useState<Consent | null>(null);
  const pathname = usePathname();
  const firstView = useRef(true);

  useEffect(() => {
    setConsentState(getConsent());
    const onChange = (e: Event) =>
      setConsentState((e as CustomEvent<Consent>).detail);
    window.addEventListener(CONSENT_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_EVENT, onChange);
  }, []);

  // The init snippet fires the first PageView; later route changes need one each.
  useEffect(() => {
    if (consent !== "granted") return;
    if (firstView.current) {
      firstView.current = false;
      return;
    }
    window.fbq?.("track", "PageView");
  }, [pathname, consent]);

  if (consent !== "granted") return null;

  return (
    <Script id="meta-pixel" strategy="afterInteractive">{`
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init','${META_PIXEL_ID}');fbq('track','PageView');
`}</Script>
  );
}
