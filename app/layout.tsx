import type { Metadata } from "next";
import { Fraunces, Mona_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const monaSans = Mona_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Daniel Ojiezele — FullStack Engineer",
  description:
    "Building scalable, high-performance web applications for fintech and enterprise.",
  openGraph: {
    title: "Daniel Ojiezele — FullStack Engineer",
    description:
      "Building scalable, high-performance web applications for fintech and enterprise.",
    siteName: "Daniel Ojiezele",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Ojiezele — FullStack Engineer",
    description:
      "Building scalable, high-performance web applications for fintech and enterprise.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${monaSans.variable} ${ibmPlexMono.variable}`}
    >
      <body className="bg-ink text-bone antialiased">{children}</body>
    </html>
  );
}
