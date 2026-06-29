"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  /** Cílové číslo (např. 14, 5, 1000). */
  value: number;
  prefix?: string;
  suffix?: string;
  /** Délka animace v ms. */
  duration?: number;
};

export default function CountUp({
  value,
  prefix = "",
  suffix = "",
  duration = 1400,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let start = 0;
    const animate = (now: number) => {
      if (!start) start = now;
      const p = Math.min((now - start) / duration, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (reduce) setDisplay(value);
          else raf = requestAnimationFrame(animate);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {display.toLocaleString("cs-CZ")}
      {suffix}
    </span>
  );
}
