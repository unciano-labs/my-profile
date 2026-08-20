"use client";

import Link from "next/link";
import { usePhilippineClock } from "@/lib/hooks";
import { FOOTER_LINKS } from "@/lib/data";

export default function Footer() {
  const clock = usePhilippineClock();

  return (
    <footer className="bg-pine-night text-cream/90 py-12">
      <div className="max-w-content mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-lg">
          © 2026 Freddie Unciano Jr · Antipolo City, Philippines ·{" "}
          <span className="ph-clock">{clock}</span>
        </p>
        <nav
          aria-label="Footer"
          className="flex flex-wrap justify-center gap-x-6 gap-y-2 font-bold text-[16px]"
        >
          {FOOTER_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-amber">
              {link.label}
            </Link>
          ))}
        </nav>
        <p className="font-hand text-2xl text-amber-soft">
          hand-built with Tailwind — no template harmed
        </p>
      </div>
    </footer>
  );
}
