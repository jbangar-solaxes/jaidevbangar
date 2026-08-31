"use client";

import { useEffect, useState } from "react";
import { rotatingTitles } from "@/lib/site";

export function TypedRoles() {
  const [index, setIndex] = useState(0);
  const [shown, setShown] = useState(true);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const timer = window.setInterval(() => {
      setShown(false);
      window.setTimeout(() => {
        setIndex((current) => (current + 1) % rotatingTitles.length);
        setShown(true);
      }, 280);
    }, 2800);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <span
      className="inline-block text-accent transition-all duration-300"
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : "translateY(10px)",
      }}
    >
      {rotatingTitles[index]}
    </span>
  );
}
