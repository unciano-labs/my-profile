"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";
import { useState, useEffect } from "react";

const HERO_IMAGES = [
  "/me.png",
  "/20240126_051504.jpg",
  "/20240715_145410.jpg",
  "/IMG_20230119_014343.jpg"
];

export default function Hero() {
  const [activeImg, setActiveImg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImg((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      aria-label="Introduction"
      className="relative bg-pine-deep text-cream overflow-hidden"
    >
      <img
        src="https://picsum.photos/seed/calm-workspace-morning/1600/900"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover brightness-[.45]"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-pine-deep/55" aria-hidden="true"></div>

      <div className="relative max-w-content mx-auto px-5 sm:px-8 pt-20 pb-24 lg:pt-28 lg:pb-32 grid lg:grid-cols-[1.15fr_.85fr] gap-14 items-center">
        <div>
          <Reveal
            as="p"
            className="inline-block bg-amber text-ink font-bold px-4 py-1.5 rounded-md shadow-md rotate-[-2deg] text-[17px]"
          >
            ● Open to new work
          </Reveal>

          <Reveal
            as="h1"
            delay={1}
            className="mt-6 font-display font-black text-5xl sm:text-6xl lg:text-7xl leading-[1.05]"
          >
            Freddie
            <br />
            Unciano&nbsp;Jr.
            <svg
              className="mt-2 w-56 sm:w-72"
              viewBox="0 0 260 14"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M4 9 C 50 3, 105 12, 150 7 S 235 4, 256 8"
                stroke="#E9A13B"
                strokeWidth="5"
                strokeLinecap="round"
              />
            </svg>
          </Reveal>

          <Reveal
            as="p"
            delay={1}
            className="mt-4 font-display font-medium text-2xl sm:text-3xl text-amber-soft"
          >
            Full-stack developer. Calm, careful, shipped.
          </Reveal>

          <Reveal
            as="p"
            delay={2}
            className="mt-6 max-w-xl text-xl leading-8 text-cream/95"
          >
            For more than eight years I've built and looked after web
            applications for teams in the Philippines, the US and Europe. I test
            carefully, fix what's slow, and make sure things keep working long
            after launch.
          </Reveal>

          <Reveal
            as="div"
            delay={2}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="mailto:itsmefreddieunciano@gmail.com"
              className="inline-flex items-center justify-center min-h-[54px] px-8 rounded-lg bg-amber text-ink font-bold text-lg shadow-md hover:bg-amber-soft"
            >
              Email Me
            </a>
            <Link
              href="#projects"
              className="inline-flex items-center justify-center min-h-[54px] px-8 rounded-lg border-2 border-cream/80 text-cream font-bold text-lg hover:bg-cream/10"
            >
              See My Work ↓
            </Link>
          </Reveal>

          <p className="mt-4 font-hand text-2xl text-amber-soft rotate-[-1deg] inline-block">
            I usually reply within 24 hours ↗
          </p>

          <dl className="mt-12 grid grid-cols-3 gap-4 max-w-lg">
            <div className="border-l-4 border-amber pl-4">
              <dt className="text-[16px] font-bold text-cream/85">
                years building
              </dt>
              <dd className="font-display font-black text-3xl sm:text-4xl">8+</dd>
            </div>
            <div className="border-l-4 border-amber pl-4">
              <dt className="text-[16px] font-bold text-cream/85">companies</dt>
              <dd className="font-display font-black text-3xl sm:text-4xl">3</dd>
            </div>
            <div className="border-l-4 border-amber pl-4">
              <dt className="text-[16px] font-bold text-cream/85">
                teams served
              </dt>
              <dd className="font-display font-black text-2xl sm:text-3xl leading-tight pt-1">
                PH · US · EU
              </dd>
            </div>
          </dl>
        </div>

        <Reveal
          as="figure"
          delay={2}
          className="relative max-w-sm mx-auto lg:max-w-md xl:max-w-lg rotate-2"
        >
          <span
            aria-hidden="true"
            className="absolute -top-3 left-10 w-24 h-6 bg-amber-soft/80 rotate-[-5deg] shadow-sm z-10"
          ></span>
          <span
            aria-hidden="true"
            className="absolute -top-3 right-10 w-20 h-6 bg-amber-soft/80 rotate-[4deg] shadow-sm z-10"
          ></span>
          <div className="bg-cream p-4 pb-6 shadow-2xl">
            <div className="relative w-full aspect-[8/9] overflow-hidden bg-ink/5">
              {HERO_IMAGES.map((src, idx) => (
                <img
                  key={src}
                  src={src}
                  alt="Portrait of Freddie Unciano Jr."
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                    idx === activeImg ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
            <figcaption className="mt-4 text-center font-hand text-3xl text-ink">
              Freddie, somewhere in Antipolo
            </figcaption>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
