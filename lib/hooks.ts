"use client";

import { useEffect, useState } from "react";

/**
 * Live Philippine clock (Asia/Manila), refreshed every 30 seconds.
 * Mirrors the reference HTML's jQuery `updateClock()` behaviour exactly.
 */
export function usePhilippineClock(): string {
  const [time, setTime] = useState("--:--");

  useEffect(() => {
    function update() {
      try {
        const t = new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Manila",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }).format(new Date());
        setTime(t.toUpperCase() + " PH");
      } catch {
        setTime("--:-- PH");
      }
    }
    update();
    const id = setInterval(update, 30000);
    return () => clearInterval(id);
  }, []);

  return time;
}

// Note: prefers-reduced-motion is handled purely in CSS — see globals.css
// (@media (prefers-reduced-motion: reduce)).

