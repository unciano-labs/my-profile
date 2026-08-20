"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ProjectCarousel from "@/components/ProjectCarousel";
import { PROJECTS } from "@/lib/data";

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === PROJECTS.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? PROJECTS.length - 1 : prev - 1));
  };

  return (
    <section
      id="projects"
      aria-labelledby="proj-title"
      className="scroll-mt-[84px] bg-cream py-24 lg:pb-32 overflow-hidden"
    >
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <Reveal
          as="p"
          className="font-bold uppercase tracking-[.18em] text-pine text-[16px]"
        >
          03 · Projects
        </Reveal>
        <Reveal
          as="h2"
          id="proj-title"
          className="mt-3 font-display font-black text-4xl sm:text-5xl"
        >
          Selected work.
        </Reveal>
        <Reveal as="div" delay={1} className="relative mt-16 w-full group">
          {/* Carousel Track Wrapper */}
          <div 
            className="w-full overflow-hidden px-1 py-4"
            style={{ 
              WebkitMaskImage: "linear-gradient(to right, transparent, black 2%, black 98%, transparent)", 
              maskImage: "linear-gradient(to right, transparent, black 2%, black 98%, transparent)" 
            }}
          >
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {PROJECTS.map((project) => (
                <div key={project.title} className="w-full shrink-0 px-2 sm:px-4">
                  <article className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center h-full">
                    <div className={project.imageSide === "right" ? "lg:order-2" : ""}>
                      <ProjectCarousel
                        images={project.images}
                        rotate={project.rotate}
                      />
                    </div>
                    
                    <div
                      className={`${
                        project.textCard
                          ? "bg-sage rounded-3xl p-8 sm:p-10 shadow-[0_12px_48px_-12px_rgba(0,0,0,0.1)] "
                          : ""
                      }${project.imageSide === "right" ? "lg:order-1" : ""}`}
                    >
                      <p className="font-bold text-[15px] uppercase tracking-wide text-ink-soft">
                        {project.meta}
                      </p>
                      <h3 className="mt-2 font-display font-black text-4xl">
                        {project.title}
                      </h3>
                      <p className="mt-4 text-[19px] leading-8 text-ink/90">{project.description}</p>
                      <ul className="mt-6 space-y-3 text-[19px]">
                        {project.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-4">
                            <span aria-hidden="true" className="text-pine font-black mt-1">
                              →
                            </span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="mt-8 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="bg-paper shadow-sm rounded-full px-4 py-1.5 text-[15px] font-bold"
                          >
                            {tag}
                          </span>
                        ))}
                      </p>
                      <div className="mt-10 flex flex-wrap items-center gap-5">
                        <Link
                          href={project.ctaPrimary.href}
                          className="inline-flex items-center justify-center min-h-[52px] px-8 rounded-xl bg-pine text-cream font-bold text-[17px] shadow-md hover:bg-pine-dark transition-all hover:scale-105 active:scale-95"
                        >
                          {project.ctaPrimary.label}
                        </Link>
                        <a
                          href={project.ctaSecondary.href}
                          className="font-bold text-[17px] text-pine underline decoration-2 underline-offset-4 hover:text-pine-dark transition-colors"
                        >
                          {project.ctaSecondary.label}
                        </a>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          {/* Controls (Below Carousel) */}
          <div className="flex justify-center items-center gap-6 mt-12">
            <button
              onClick={prevSlide}
              className="w-14 h-14 flex items-center justify-center bg-paper border border-ink/5 rounded-full shadow-[0_4px_16px_-4px_rgba(0,0,0,0.1)] text-ink hover:text-pine hover:scale-110 active:scale-95 transition-all"
              aria-label="Previous Project"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex items-center gap-2.5 px-4">
              {PROJECTS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`transition-all duration-500 rounded-full ${
                    i === activeIndex
                      ? "w-8 h-2.5 bg-pine shadow-sm"
                      : "w-2.5 h-2.5 bg-pine/20 hover:bg-pine/40"
                  }`}
                  aria-label={`Go to project slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-14 h-14 flex items-center justify-center bg-paper border border-ink/5 rounded-full shadow-[0_4px_16px_-4px_rgba(0,0,0,0.1)] text-ink hover:text-pine hover:scale-110 active:scale-95 transition-all"
              aria-label="Next Project"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
