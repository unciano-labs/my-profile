"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/Reveal";
import { JOBS } from "@/lib/data";

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onScroll() {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      // Calculate how far down we've scrolled inside the container
      // (viewport height is roughly the size of one "slide")
      const scrollProgress = -rect.top / window.innerHeight;
      
      let index = Math.floor(scrollProgress + 0.5);
      if (index < 0) index = 0;
      if (index >= JOBS.length) index = JOBS.length - 1;
      
      setActiveIndex(index);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="experience"
      aria-labelledby="exp-title"
      className="scroll-mt-[84px] bg-sage pt-28"
    >
      <div className="max-w-content mx-auto px-5 sm:px-8 pb-12">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Reveal
              as="p"
              className="font-bold uppercase tracking-[.18em] text-pine text-[16px]"
            >
              02 · Experience
            </Reveal>
            <Reveal
              as="h2"
              id="exp-title"
              className="mt-3 font-display font-black text-4xl sm:text-5xl"
            >
              Where I've worked.
            </Reveal>
          </div>
          <Reveal
            as="p"
            delay={1}
            className="font-hand text-3xl text-pine rotate-[-1.5deg]"
          >
            three teams, one habit: leave it better ✎
          </Reveal>
        </div>
        <Reveal as="p" delay={1} className="mt-4 text-xl text-ink-soft max-w-xl">
          2018 to today — two remote, one local. Each stop taught me something I
          still use every week.
        </Reveal>
      </div>

      {/* The Scroll Track Container */}
      <div 
        ref={containerRef} 
        style={{ height: `${JOBS.length * 100}vh` }} 
        className="relative"
      >
        {/* The Sticky Viewport */}
        <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
          <div className="max-w-5xl w-full mx-auto px-5 sm:px-8 flex flex-col items-center">
            
            {/* Top Row: Static Year / Meta (Cross-Fading Headers) */}
            <div className="relative z-10 mb-2 lg:mb-6 w-full h-[180px] sm:h-[190px] lg:h-[220px] pt-16 sm:pt-0">
              {JOBS.map((job, index) => {
                const isActive = index === activeIndex;
                return (
                  <div 
                    key={`header-${job.year}`} 
                    className={`absolute inset-x-0 bottom-0 text-center transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                      isActive ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"
                    }`}
                  >
                    <p className="font-display font-black text-6xl sm:text-7xl lg:text-8xl text-pine/20 leading-none">
                      {job.year}
                    </p>
                    <div className="mt-4 flex items-center justify-center">
                      <p className="font-bold text-[14px] sm:text-[16px] uppercase tracking-wide text-ink-soft">
                        {job.meta}
                      </p>
                    </div>
                    <div className="mt-2 flex items-center justify-center">
                      <p
                        className={`font-hand text-2xl sm:text-3xl text-pine inline-block ${
                          job.mirrored ? "rotate-[3deg]" : "rotate-[-3deg]"
                        }`}
                      >
                        {job.hand}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Simple Dots Counter */}
            <div className="flex justify-center items-center gap-2 mb-8 lg:mb-12 z-10">
              {JOBS.map((_, i) => (
                <div
                  key={i}
                  className={`transition-all duration-500 rounded-full ${
                    i === activeIndex
                      ? "w-8 h-2 bg-pine shadow-sm"
                      : "w-2 h-2 bg-pine/20"
                  }`}
                  aria-hidden="true"
                />
              ))}
            </div>

            {/* Bottom Row: Cross-Fading Carousel */}
            <div className="w-full relative">
              <div className="grid w-full">
                {JOBS.map((job, index) => {
                  const isActive = index === activeIndex;
                  return (
                    <article 
                      key={job.year} 
                      className={`w-full py-2 flex flex-col justify-start transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                        isActive ? "opacity-100 translate-y-0 scale-100 z-10 pointer-events-auto" : "opacity-0 translate-y-12 scale-[0.97] z-0 pointer-events-none"
                      }`}
                      style={{ gridArea: "1 / 1" }}
                    >
                      {/* The Card */}
                      <div className="w-full bg-paper/90 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 lg:p-10 shadow-[0_24px_64px_-12px_rgba(0,0,0,0.15)] relative">
                        {job.badge && (
                          <span className="inline-block mb-4 bg-amber text-ink font-bold text-[14px] px-4 py-1.5 rounded-lg shadow-sm">
                            {job.badge}
                          </span>
                        )}
                        <h3 className="font-display font-black text-3xl lg:text-4xl">
                          {job.company}
                        </h3>
                        <p className="mt-2 font-bold text-pine text-xl">
                          {job.title}
                        </p>
                        <ul className="mt-6 space-y-3 text-lg leading-7 text-ink/90">
                          {job.points.map((point) => (
                            <li key={point} className="flex gap-4">
                              <span aria-hidden="true" className="text-pine font-black mt-1">
                                →
                              </span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                        <p className="mt-8 border-l-4 border-pine/30 pl-5 font-hand text-2xl text-ink-soft">
                          {job.takeaway}
                        </p>
                        <div className="mt-8 flex flex-wrap gap-2">
                          {job.tags.map((tag) => (
                            <span
                              key={tag}
                              className="bg-cream/60 rounded-full px-4 py-2 text-[15px] font-bold shadow-sm"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Show "...and counting." only on the last card */}
                      {index === JOBS.length - 1 && (
                        <div className="mt-6 sm:mt-10 mb-4 flex justify-center">
                          <p className="font-hand text-3xl sm:text-4xl text-pine rotate-[-2deg]">
                            …and counting.
                          </p>
                        </div>
                      )}
                    </article>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
