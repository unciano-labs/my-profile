import type { Metadata } from "next";
import { Atkinson_Hyperlegible, Caveat, Fraunces } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const atkinson = Atkinson_Hyperlegible({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-body",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-hand",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Freddie Unciano Jr — Full-Stack Developer",
  description:
    "Freddie Unciano Jr is a full-stack developer from Antipolo City with 8+ years building and maintaining reliable web applications for teams in the Philippines, US and Europe.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`js ${fraunces.variable} ${atkinson.variable} ${caveat.variable}`}
    >
      <body
        id="top"
        className="bg-cream text-ink font-body antialiased leading-relaxed"
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[100] focus:bg-amber focus:text-ink focus:font-bold focus:px-5 focus:py-3 focus:rounded-lg"
        >
          Skip to main content
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
