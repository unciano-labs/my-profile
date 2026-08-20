"use client";

import { useState } from "react";
import type { ProjectImage } from "@/lib/data";

interface ProjectCarouselProps {
  images: ProjectImage[];
  /** Rotation applied to the whole image frame (e.g. "rotate-[.8deg]"). */
  rotate: string;
}

/**
 * Project screenshot gallery.
 * - 1 image  → renders a plain <img> (no controls).
 * - 2+ images → slide-through carousel (‹ › buttons + dot indicators).
 * Hand-rolled (no library) to match the site's design language.
 */
export default function ProjectCarousel({
  images,
  rotate,
}: ProjectCarouselProps) {
  const [index, setIndex] = useState(0);
  const count = images.length;

  if (count === 1) {
    return (
      <img
        src={images[0].src}
        width={900}
        height={560}
        loading="lazy"
        alt={images[0].alt}
        className={`w-full h-auto rounded-lg border-[6px] border-paper shadow-xl ${rotate}`}
      />
    );
  }

  const prev = () => setIndex((i) => (i - 1 + count) % count);
  const next = () => setIndex((i) => (i + 1) % count);

  return (
    <div
      role="group"
      aria-roledescription="carousel"
      aria-label="Project screenshots"
      className={`relative overflow-hidden rounded-lg border-[6px] border-paper shadow-xl ${rotate}`}
    >
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((img, i) => (
          <img
            key={img.src}
            src={img.src}
            width={900}
            height={560}
            loading="lazy"
            alt={img.alt}
            aria-hidden={i !== index}
            className="w-full h-auto shrink-0"
          />
        ))}
      </div>

      <button
        type="button"
        onClick={prev}
        aria-label="Previous image"
        className="absolute left-3 top-1/2 -translate-y-1/2 min-h-[40px] min-w-[40px] rounded-full bg-cream/90 border-2 border-ink/10 text-ink font-black text-xl shadow-md hover:bg-cream"
      >
        ‹
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next image"
        className="absolute right-3 top-1/2 -translate-y-1/2 min-h-[40px] min-w-[40px] rounded-full bg-cream/90 border-2 border-ink/10 text-ink font-black text-xl shadow-md hover:bg-cream"
      >
        ›
      </button>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Go to image ${i + 1}`}
            aria-current={i === index}
            className={`w-2.5 h-2.5 rounded-full border border-ink/30 transition-colors ${
              i === index ? "bg-pine" : "bg-cream/80 hover:bg-cream"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
