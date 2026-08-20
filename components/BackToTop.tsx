"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    function onScroll() {
      setShow(window.scrollY > 600);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      id="toTop"
      aria-label="Back to top"
      onClick={() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          window.scrollTo(0, 0);
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }}
      className={`fixed bottom-6 right-[5.5rem] z-40 w-[52px] h-[52px] rounded-full bg-amber text-ink text-2xl font-black shadow-lg hover:bg-amber-soft ${
        show ? "show" : ""
      }`}
    >
      ↑
    </button>
  );
}
