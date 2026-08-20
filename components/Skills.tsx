"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/Reveal";
import { BARS, GROUPS } from "@/lib/data";

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const [filled, setFilled] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setFilled(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    io.observe(section);
    return () => io.disconnect();
  }, []);

  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="scroll-mt-[84px] bg-sage py-28"
      ref={sectionRef}
    >
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <Reveal
          as="p"
          className="font-bold uppercase tracking-[.18em] text-pine text-[16px]"
        >
          05 · Skills
        </Reveal>
        <Reveal
          as="h2"
          id="skills-title"
          className="mt-3 font-display font-black text-4xl sm:text-5xl"
        >
          What I work with.
        </Reveal>

        <div className="mt-14 grid lg:grid-cols-[1fr_1.1fr] gap-14 items-start">
          <Reveal as="div">
            <h3 className="font-display font-bold text-2xl">
              Where my time goes, by language
            </h3>
            <div className="mt-7 space-y-6">
              {BARS.map((bar) => (
                <div key={bar.name}>
                  <div className="flex justify-between font-bold text-lg">
                    <span>{bar.name}</span>
                    <span>{bar.pct}%</span>
                  </div>
                  <div className="mt-2 h-4 bg-ink/10 rounded-full overflow-hidden">
                    <div
                      className="skill-fill h-full bg-pine rounded-full"
                      style={{ width: filled ? `${bar.pct}%` : "0%" }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal as="div" delay={1} className="space-y-9">
            {GROUPS.map((group) => (
              <div key={group.title}>
                <h3 className="font-display font-bold text-2xl">{group.title}</h3>
                <p className="mt-4 flex flex-wrap gap-2">
                  {group.tags.map((tag) => (
                    <span
                      key={tag.label}
                      className={`${
                        tag.accent ? "bg-amber/25" : "bg-paper"
                      } border border-ink/10 rounded-full px-4 py-2 text-[17px] font-bold`}
                    >
                      {tag.label}
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
