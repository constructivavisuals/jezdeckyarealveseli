"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Photo from "./Photo";
import Reveal from "./Reveal";

const items = [
  { src: "/images/overview.jpg", preview: "/images/lightbox/overview.jpg", alt: "Areál z výšky", caption: "Celkový pohled", span: "lg:col-span-2 lg:row-span-2" },
  { src: "/images/arial-1.jpg", preview: "/images/lightbox/arial-1.jpg", alt: "Jízdárna a výběhy", caption: "Jízdárna a výběhy", span: "" },
  { src: "/images/arena.jpg", preview: "/images/lightbox/arena.jpg", alt: "Jízdárna a stáje", caption: "Stáje a jízdárna", span: "" },
  { src: "/images/arial-2.jpg", preview: "/images/lightbox/arial-2.jpg", alt: "Areál v podvečerním světle", caption: "Podvečerní světlo", span: "lg:col-span-2" },
  { src: "/images/house-arena.jpg", preview: "/images/lightbox/house-arena.jpg", alt: "Dům a jízdárna", caption: "Dům a zázemí", span: "" },
  { src: "/images/arial-3.jpg", preview: "/images/lightbox/arial-3.jpg", alt: "Areál z ptačí perspektivy", caption: "Areál a okolí", span: "lg:col-span-2" },
  { src: "/images/house.jpg", preview: "/images/lightbox/house.jpg", alt: "Dům v podvečerním světle", caption: "Dům k ubytování", span: "" },
];

export default function Gallery() {
  const [open, setOpen] = useState<number | null>(null);

  const touchX = useRef<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const next = useCallback(
    () => setOpen((i) => (i === null ? i : (i + 1) % items.length)),
    []
  );
  const prev = useCallback(
    () => setOpen((i) => (i === null ? i : (i - 1 + items.length) % items.length)),
    []
  );

  useEffect(() => {
    if (open === null) return;
    // Přednačti všechny zmenšené náhledy, ať je proklikávání okamžité.
    items.forEach((it) => {
      const img = new window.Image();
      img.src = it.preview;
    });
    // Zámek scrollu na pozadí.
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close, next, prev]);

  const active = open === null ? null : items[open];

  return (
    <section id="galerie" className="bg-mist px-6 py-24 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="flex items-center gap-4 text-navy-400">
                <span className="index text-sm">07</span>
                <span className="h-px w-10 bg-navy-200" />
                <span className="text-[0.7rem] font-semibold uppercase tracking-[0.22em]">
                  Galerie
                </span>
              </div>
              <h2 className="mt-7 display-light text-4xl text-navy-900 sm:text-5xl">
                Prohlédněte si areál
              </h2>
            </div>
            <p className="text-[0.95rem] text-ink/55">
              Letecké snímky celého areálu a jeho okolí.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid auto-rows-[210px] grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal
              key={i}
              delay={(i % 4) * 80}
              className={`group relative ${it.span}`}
            >
              <button
                type="button"
                onClick={() => setOpen(i)}
                aria-label={`Zvětšit fotku: ${it.caption}`}
                className="zoomable relative block h-full w-full cursor-zoom-in overflow-hidden"
              >
                <Photo
                  src={it.src}
                  alt={it.alt}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-900/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="pointer-events-none absolute bottom-4 left-4 translate-y-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {it.caption}
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {active && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-900/95 p-4 backdrop-blur-sm sm:p-8"
          onClick={close}
          onTouchStart={(e) => {
            touchX.current = e.touches[0].clientX;
          }}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            if (dx > 45) prev();
            else if (dx < -45) next();
            touchX.current = null;
          }}
          role="dialog"
          aria-modal="true"
          aria-label={active.caption}
        >
          {/* Počítadlo */}
          <span className="absolute left-1/2 top-5 -translate-x-1/2 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-white/60 sm:top-6">
            {(open ?? 0) + 1} / {items.length}
          </span>

          <button
            type="button"
            onClick={close}
            aria-label="Zavřít"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center text-white/80 transition-colors hover:text-white sm:right-6 sm:top-6"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Předchozí"
            className="absolute left-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-white/70 transition-colors hover:text-white sm:left-5"
          >
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Další"
            className="absolute right-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-white/70 transition-colors hover:text-white sm:right-5"
          >
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <figure
            className="relative flex max-h-full w-full max-w-5xl flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Plný <img> přímo na zmenšený náhled — bez serverové optimalizace, rychlé proklikávání. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              key={active.preview}
              src={active.preview}
              alt={active.alt}
              decoding="async"
              className="max-h-[78vh] w-auto max-w-full object-contain"
            />
            <figcaption className="mt-4 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white/70">
              {active.caption}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
