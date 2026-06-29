"use client";

import { useRef, useState } from "react";

export default function VideoFrame() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  function play() {
    const v = videoRef.current;
    if (!v) return;
    v.play();
    setPlaying(true);
  }

  return (
    <div className="relative aspect-video w-full overflow-hidden bg-navy-900 ring-1 ring-navy-100">
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
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
          className="group absolute inset-0 flex items-center justify-center bg-navy-900/25 transition-colors duration-300 hover:bg-navy-900/10"
        >
          <span className="absolute left-4 top-4 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-white/90">
            Video — prohlídka z výšky
          </span>
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-navy-900 shadow-xl transition-transform duration-300 group-hover:scale-105">
            <svg width="22" height="26" viewBox="0 0 28 32" fill="currentColor" className="ml-1">
              <path d="M0 2.5C0 0.96 1.66 0 3 0.77l22 12.73c1.33 0.77 1.33 2.69 0 3.46L3 31.23C1.66 32 0 31.04 0 29.5V2.5z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
