// Meta Pixel helpers. The pixel only loads after the visitor accepts cookies
// (see components/consent), so every call here is a safe no-op until then.

export const META_PIXEL_ID = "1471038278456184";

export const CONSENT_KEY = "brazz-cookie-consent";
export const CONSENT_EVENT = "brazz-consent-change";

export type Consent = "granted" | "denied";

type Fbq = (...args: unknown[]) => void;

declare global {
  interface Window {
    fbq?: Fbq;
  }
}

export function getConsent(): Consent | null {
  try {
    const v = localStorage.getItem(CONSENT_KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
}

export function setConsent(value: Consent) {
  try {
    localStorage.setItem(CONSENT_KEY, value);
  } catch {
    /* storage blocked — banner will simply show again next visit */
  }
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: value }));
}

/** Fire a standard Meta event, e.g. trackEvent("Contact", { method: "email" }). */
export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined" || !window.fbq) return;
  window.fbq("track", name, params);
}
