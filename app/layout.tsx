import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Inter } from "next/font/google";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "500",
});
const satoshi = localFont({
  src: "../public/fonts/satoshi/Satoshi-Variable.woff",
  variable: "--font-satoshi",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "500",
});

const inter = Inter({
  display: "swap",
  variable: "--inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default:
      "BrazzPR and Comms | Public Relations & 360 Marketing Agency in Nigeria",
    template: "%s | BrazzPR",
  },
  description: "Reaching Endless Possibilities with Marketing and PR.",
  keywords: [
    "BrazzPR",
    "PR",
    "Marketing",
    "Advertising",
    "Branding",
    "Public Relations",
  ],

  icons: {
    icon: "/brand/brazz.svg",
  },

  openGraph: {
    title: "BrazzPR",
    description: "Reaching Endless Possibilities with Marketing and PR.",
    url: "https://brazzprandcomms.com",
    siteName: "BrazzPR",
    images: [
      {
        url: "/brazz0.png",
        width: 1200,
        height: 630,
        alt: "BrazzPR — Marketing & PR Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "BrazzPR",
    description: "Reaching Endless Possibilities with Marketing and PR.",
    images: ["/brazz0.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${satoshi.variable} ${inter.variable} antialiased`}
      >
        <ToastContainer
          autoClose={2000}
          hideProgressBar={true}
          theme="colored"
        />
        {children}
      </body>
    </html>
  );
}
