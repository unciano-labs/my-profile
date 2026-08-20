"use client";

import {
  ElementType,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

interface RevealProps {
  /** Element to render (defaults to `div`). */
  as?: ElementType;
  children?: ReactNode;
  className?: string;
  /** 1 → `.d1` (0.1s delay), 2 → `.d2` (0.2s delay). */
  delay?: 1 | 2;
  // Allow passing through element-specific props (src, alt, id, ...).
  [key: string]: unknown;
}

/**
 * Scroll-reveal wrapper that replicates the reference HTML's
 * IntersectionObserver reveal behaviour: it adds `.revealed` once the element
 * enters the viewport, honouring `.d1`/`.d2` transition delays.
 * (`prefers-reduced-motion` is handled purely in CSS — see globals.css.)
 *
 * Polymorphic via `as` so it can wrap `<p>`, `<li>`, `<figure>`, `<img>`, etc.
 * without altering the original DOM shape.
 */
export default function Reveal({
  as,
  children,
  className = "",
  delay,
  ...rest
}: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current as HTMLElement | null;
    // IntersectionObserver is guaranteed in the supported browser baseline;
    // prefers-reduced-motion is handled entirely via CSS (see globals.css).
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealed(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const classes = [
    "reveal",
    delay === 1 ? "d1" : delay === 2 ? "d2" : "",
    revealed ? "revealed" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag ref={ref} className={classes} {...rest}>
      {children}
    </Tag>
  );
}
