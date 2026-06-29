"use client";

import { useEffect, useRef, useState } from "react";

export default function VideoFrame() {
  const videoRef = useRef<HTMLVideoElement>(null);
  // Vybereme zdroj až na klientu — menší soubor pro mobil, ať se nestahuje 1080p.
  const [src, setSrc] = useState<string | null>(null);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 767px)").matches;
    setSrc(mobile ? "/video/areal-720p.mp4" : "/video/areal-1080p.mp4");
    setReduceMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v || !src || reduceMotion) return;

    // Přehrávej jen když je video v záběru — šetří CPU, data i baterii.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          v.play().catch(() => {});
        } else {
          v.pause();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(v);
    return () => observer.disconnect();
  }, [src, reduceMotion]);

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-navy-900 ring-1 ring-navy-100">
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        poster="/video/poster.jpg"
        muted
        loop
        playsInline
        preload="none"
        src={src ?? undefined}
      >
        Váš prohlížeč nepodporuje přehrávání videa.
      </video>

      <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-navy-900/45 px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm">
        Prohlídka z výšky
      </span>
    </div>
  );
}
