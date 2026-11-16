import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How BrazzPR and Comms collects and uses personal data from our advertising, website and enquiries.",
};

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-xl md:text-2xl font-bold text-white mt-12 mb-4">
    {children}
  </h2>
);

const A = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-white underline underline-offset-4 decoration-neutral-600 hover:decoration-red-600"
  >
    {children}
  </a>
);

export default function PrivacyPage() {
  return (
    <main className="bg-[#050505] min-h-screen text-neutral-300">
      <div className="mx-auto max-w-3xl px-6 py-20 md:py-28 leading-relaxed text-[15px]">
        <Link
          href="/"
          className="inline-block text-xs uppercase tracking-[0.2em] text-neutral-500 hover:text-white transition-colors mb-12"
        >
          ← Back to home
        </Link>

        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Privacy Policy – BrazzPR and Comms
        </h1>
        <p className="mb-6">
          <strong className="text-white">Last updated:</strong> 16 November 2026
        </p>
        <p>
          BrazzPR and Comms (&quot;we&quot;, &quot;us&quot;) is a public
          relations and communications business based in Nigeria. This policy
          explains what personal data we collect when you see or respond to our
          advertising on Facebook and Instagram, or contact us, and how we use
          it. We follow the Nigeria Data Protection Act 2023.
        </p>

        <H2>1. Who is responsible</H2>
        <p>
          BrazzPR and Comms, Nigeria. Contact for privacy questions:{" "}
          <A href="mailto:temibrazzmediahouse@gmail.com">
            temibrazzmediahouse@gmail.com
          </A>
        </p>

        <H2>2. What data we collect</H2>
        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong className="text-white">Data you give us:</strong> your name,
            phone number, email address and the content of messages you send us
            on Facebook, Instagram, WhatsApp or by email.
          </li>
          <li>
            <strong className="text-white">Advertising data from Meta:</strong>{" "}
            when you see or interact with our ads, Meta Platforms provides us
            with aggregated reports (for example reach, clicks and results).
            These reports do not identify you personally.
          </li>
          <li>
            <strong className="text-white">
              Website and pixel data (if we use a website):
            </strong>{" "}
            if we run a website with the Meta Pixel, it may record pages you
            visit and actions you take (such as submitting a form) to measure
            and improve our ads.
          </li>
        </ul>

        <H2>3. Why we use it</H2>
        <ul className="list-disc pl-6 space-y-3">
          <li>To reply to your enquiries and provide our services.</li>
          <li>
            To measure how well our advertising works and to show our ads to
            people likely to be interested.
          </li>
          <li>To meet legal and accounting obligations.</li>
        </ul>
        <p className="mt-4">
          Our legal bases are your consent, the steps needed to provide a
          service you asked for, and our legitimate interest in promoting our
          business.
        </p>

        <H2>4. Who we share it with</H2>
        <p>
          We do not sell your personal data. We use Meta Platforms (Facebook,
          Instagram, WhatsApp) to run and measure our ads and to communicate
          with you; their own privacy policy applies to data they process:{" "}
          <A href="https://www.facebook.com/privacy/policy">
            https://www.facebook.com/privacy/policy
          </A>
          . We may share data with authorities where the law requires it.
        </p>

        <H2>5. How long we keep it</H2>
        <p>
          We keep enquiry and customer data for as long as needed to serve you
          and to meet legal obligations, and then delete it. Advertising
          reports are kept in aggregated form.
        </p>

        <H2>6. Your rights</H2>
        <p>
          You can ask us to access, correct or delete your personal data,
          withdraw consent, or object to its use for marketing. Email{" "}
          <A href="mailto:moshgbotemi@gmail.com">moshgbotemi@gmail.com</A> and
          we will reply within 30 days. You may also complain to the Nigeria
          Data Protection Commission (
          <A href="https://ndpc.gov.ng">ndpc.gov.ng</A>).
        </p>

        <H2>7. Ad preferences</H2>
        <p>
          You can control the ads you see on Facebook and Instagram in your
          Meta Accounts Center under &quot;Ad preferences&quot;.
        </p>

        <H2>8. Data deletion</H2>
        <p>
          To have your data deleted, email{" "}
          <A href="mailto:temibrazzmediahouse@gmail.com?subject=Delete%20my%20data">
            temibrazzmediahouse@gmail.com
          </A>{" "}
          with the subject &quot;Delete my data&quot;. We will confirm when it
          is done.
        </p>

        <H2>9. Changes</H2>
        <p>We may update this policy. The date at the top shows the latest version.</p>
      </div>
    </main>
  );
}
