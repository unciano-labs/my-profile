"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import { FILTERS, ITEMS, type GalleryFilter } from "@/lib/data";

export default function Gallery() {
  const [filter, setFilter] = useState<GalleryFilter>("all");

  return (
    <section
      id="gallery"
      aria-labelledby="gallery-title"
      className="scroll-mt-[84px] bg-cream py-24"
    >
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <Reveal
          as="p"
          className="font-bold uppercase tracking-[.18em] text-pine text-[16px]"
        >
          06 · Off-screen
        </Reveal>
        <Reveal
          as="h2"
          id="gallery-title"
          className="mt-3 font-display font-black text-4xl sm:text-5xl"
        >
          Life away from the keyboard.
        </Reveal>

        <Reveal
          as="div"
          delay={1}
          className="mt-8 flex flex-wrap gap-3"
          role="group"
          aria-label="Filter gallery"
        >
          {FILTERS.map((f) => {
            const active = filter === f.key;
            return (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                aria-pressed={active}
                className={`min-h-[48px] px-6 rounded-full border-2 border-pine font-bold text-lg ${
                  active ? "bg-pine text-cream" : "text-pine hover:bg-pine/10"
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </Reveal>

        <div
          id="galleryGrid"
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {ITEMS.map((item) => {
            const hidden = filter !== "all" && filter !== item.cat;
            return (
              <Reveal
                key={item.src}
                as="figure"
                delay={item.delay}
                className={`gallery-item ${item.span ?? ""} ${
                  hidden ? "hidden" : ""
                }`}
              >
                <img
                  src={item.src}
                  width={item.width}
                  height={item.height}
                  loading="lazy"
                  alt={item.alt}
                  className={`w-full ${
                    item.fill ? "h-full" : "h-auto"
                  } object-cover rounded-lg border-[5px] border-paper shadow-lg ${
                    item.rotate ?? ""
                  }`}
                />
                <figcaption className="mt-3">
                  <span className="font-bold text-lg block">{item.title}</span>
                  <span className="font-hand text-2xl text-pine">
                    {item.caption}
                  </span>
                </figcaption>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
