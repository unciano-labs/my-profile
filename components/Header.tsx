"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePhilippineClock } from "@/lib/hooks";
import { NAV_LINKS } from "@/lib/data";
import ChatBubble from "@/components/ChatBubble";

const ICONS: Record<string, React.ReactNode> = {
  "#about": (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
  ),
  "#experience": (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
  ),
  "#projects": (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/></svg>
  ),
  "#lab": (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 2v7.31"/><path d="M14 9.3V1.99"/><path d="M8.5 2h7"/><path d="M14 9.3a6.5 6.5 0 1 1-4 0"/><path d="M5.52 16h12.96"/></svg>
  ),
  "#skills": (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
  ),
  "#gallery": (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
  ),
  "#contact": (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
  )
};

export default function Header() {
  const clock = usePhilippineClock();
  const [scrolled, setScrolled] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    function onScroll() {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 8);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsScrollingDown(true);
      } else if (currentScrollY < lastScrollY) {
        setIsScrollingDown(false);
      }

      lastScrollY = currentScrollY;
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Minimal Top Bar (macOS style menu bar) */}
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          scrolled ? "bg-cream/85 backdrop-blur-lg shadow-[0_4px_24px_-4px_rgba(0,0,0,0.05)]" : "bg-transparent"
        }`}
      >
        <div className="max-w-content mx-auto px-5 sm:px-8">
          <div className="flex items-center justify-between h-12">
            <Link
              href="#top"
              className={`flex items-baseline gap-1 font-display font-black text-lg transition-colors duration-300 ${
                scrolled ? "text-ink hover:text-pine" : "text-cream hover:text-cream/80"
              }`}
            >
              Freddie<span className="text-pine">·</span>Unciano
            </Link>
            <span
              className={`text-[14px] font-bold tabular-nums transition-colors duration-300 ${
                scrolled ? "text-ink-soft/80" : "text-cream/90"
              }`}
              aria-label="Current time in the Philippines"
            >
              <span className="ph-clock">{clock}</span>
            </span>
          </div>
        </div>
      </header>

      {/* macOS-style Bottom Dock */}
      <div
        className={`fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
          isScrollingDown ? "translate-y-32 opacity-0 pointer-events-none" : "translate-y-0 opacity-100"
        }`}
      >
        <nav
          aria-label="Main"
          className="flex items-center gap-1 sm:gap-2 px-3 py-2 bg-cream/70 backdrop-blur-2xl shadow-[0_12px_48px_-12px_rgba(0,0,0,0.2)] rounded-2xl"
        >
          {NAV_LINKS.map((link) => (
            <div key={link.href} className="relative group flex items-center justify-center">
              {/* Tooltip */}
              <div
                className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-ink text-cream text-[13px] font-bold rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg"
              >
                {link.label}
                {/* Arrow */}
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-ink rotate-45"></div>
              </div>

              {/* Icon Link */}
              <Link
                href={link.href}
                aria-label={link.label}
                className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl text-ink-soft hover:text-pine hover:bg-paper/60 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              >
                {ICONS[link.href]}
              </Link>
            </div>
          ))}



          <ChatBubble />
        </nav>
      </div>
    </>
  );
}
