"use client";

import { useRef, useState } from "react";
import Reveal from "./Reveal";

export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  function play() {
    const v = videoRef.current;
    if (!v) return;
    v.play();
    setPlaying(true);
  }

  return (
    <section id="video" className="bg-navy-900 px-6 py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="flex items-center gap-4 text-navy-300">
                <span className="index text-sm">03</span>
                <span className="h-px w-10 bg-white/25" />
                <span className="text-[0.7rem] font-semibold uppercase tracking-[0.22em]">
                  Prohlídka z výšky
                </span>
              </div>
              <h2 className="mt-7 display-light text-4xl text-white sm:text-5xl lg:text-6xl">
                Celý areál na jeden pohled
              </h2>
            </div>
            <p className="max-w-xs text-[0.95rem] leading-relaxed text-white/60">
              Letecký záběr ukazuje rozsah areálu — stáje, jízdárnu, výběhy i
              ubytování zasazené do krajiny nedaleko Českého ráje.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative mt-12 overflow-hidden ring-1 ring-white/15">
            <video
              ref={videoRef}
              className="aspect-video h-full w-full bg-navy-900 object-cover"
              poster="/video/poster.jpg"
              controls={playing}
              preload="none"
              playsInline
              onPause={() => setPlaying(false)}
              onPlay={() => setPlaying(true)}
            >
              <source src="/video/areal-1080p.mp4" type="video/mp4" />
              Váš prohlížeč nepodporuje přehrávání videa.
            </video>

            {!playing && (
              <button
                type="button"
                onClick={play}
                aria-label="Přehrát video areálu"
                className="group absolute inset-0 flex flex-col items-center justify-center gap-5 bg-navy-900/25 transition-colors duration-300 hover:bg-navy-900/10"
              >
                <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-navy-900 shadow-xl transition-transform duration-300 group-hover:scale-105">
                  <svg width="26" height="30" viewBox="0 0 28 32" fill="currentColor" className="ml-1">
                    <path d="M0 2.5C0 0.96 1.66 0 3 0.77l22 12.73c1.33 0.77 1.33 2.69 0 3.46L3 31.23C1.66 32 0 31.04 0 29.5V2.5z" />
                  </svg>
                </span>
                <span className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-white">
                  Přehrát video
                </span>
              </button>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
