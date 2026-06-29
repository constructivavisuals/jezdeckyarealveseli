"use client";

import { useEffect, useRef } from "react";

export default function VideoFrame() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

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
  }, []);

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
      >
        <source src="/video/areal-1080p.mp4" type="video/mp4" />
        Váš prohlížeč nepodporuje přehrávání videa.
      </video>

      <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-navy-900/45 px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm">
        Prohlídka z výšky
      </span>
    </div>
  );
}
