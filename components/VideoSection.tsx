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
    <section id="video" className="bg-navy-900 px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="text-center">
            <p className="eyebrow mb-6 text-gold-300">Prohlídka z výšky</p>
            <h2 className="font-serif text-3xl font-medium leading-tight text-cream sm:text-4xl lg:text-5xl">
              Celý areál na jeden pohled
            </h2>
            <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-cream/75">
              Letecký záběr ukazuje rozsah areálu — stáje, jízdárnu, výběhy i
              ubytování zasazené do krajiny nedaleko Českého ráje.
            </p>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="relative mt-14 overflow-hidden rounded-2xl shadow-2xl ring-1 ring-cream/10">
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
                className="group absolute inset-0 flex items-center justify-center bg-navy-900/30 transition-colors duration-300 hover:bg-navy-900/15"
              >
                <span className="flex h-20 w-20 items-center justify-center rounded-full bg-gold-500/95 text-navy-900 shadow-xl transition-transform duration-300 group-hover:scale-105">
                  <svg width="28" height="32" viewBox="0 0 28 32" fill="currentColor" className="ml-1">
                    <path d="M0 2.5C0 0.96 1.66 0 3 0.77l22 12.73c1.33 0.77 1.33 2.69 0 3.46L3 31.23C1.66 32 0 31.04 0 29.5V2.5z" />
                  </svg>
                </span>
              </button>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
