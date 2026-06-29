"use client";

import { useCallback, useEffect, useState, type CSSProperties } from "react";
import Reveal from "./Reveal";

/* Rozměry zdrojového renderu — souřadnice zón jsou v této soustavě. */
const W = 1448;
const H = 1086;

type Zone = {
  id: string;
  n: number;
  color: string;
  title: string;
  desc: string;
  tag: string;
  /** Jeden či více polygonů (isometrické tvary budov / ploch). */
  polys?: number[][][];
  /** Kruhové prvky (kolotoč). */
  ellipse?: { cx: number; cy: number; rx: number; ry: number };
  /** Kotva špendlíku a popupu. */
  marker: [number, number];
};

const zones: Zone[] = [
  {
    id: "ubytovani",
    n: 1,
    color: "#e07a3e",
    title: "Ubytování",
    desc: "Bydlení přímo v areálu — buď dva samostatné byty, nebo celý dům. S možností dalšího rozšíření kapacity.",
    tag: "2v1 — byty nebo dům",
    polys: [
      [
        [330, 505],
        [415, 512],
        [412, 562],
        [345, 585],
        [325, 545],
      ],
      [
        [300, 600],
        [410, 612],
        [400, 675],
        [355, 712],
        [298, 690],
        [287, 635],
      ],
    ],
    marker: [352, 600],
  },
  {
    id: "jizdarna",
    n: 2,
    color: "#c0392b",
    title: "Venkovní jízdárna",
    desc: "Prostorná písková jízdárna o rozloze přibližně 1000 m² s parkurovým vybavením — výcvik i každodenní práce s koňmi.",
    tag: "≈ 1000 m²",
    polys: [
      [
        [416, 450],
        [659, 439],
        [688, 705],
        [427, 718],
      ],
    ],
    marker: [548, 575],
  },
  {
    id: "senik",
    n: 3,
    color: "#2563eb",
    title: "Seník a slamník",
    desc: "Kryté uskladnění sena a slámy hned vedle stájí — zásoby vždy po ruce po celý rok.",
    tag: "Sklad sena a slámy",
    polys: [
      [
        [652, 478],
        [690, 400],
        [745, 395],
        [808, 418],
        [778, 498],
        [700, 500],
      ],
    ],
    marker: [728, 450],
  },
  {
    id: "staj",
    n: 4,
    color: "#2f4468",
    title: "Stáj a zázemí",
    desc: "14 stájových boxů (12 vnitřních a 2 venkovní) a kompletní provozní zázemí. Na střeše fotovoltaika pro úsporu energií.",
    tag: "14 boxů + zázemí",
    polys: [
      [
        [843, 422],
        [893, 442],
        [912, 495],
        [950, 560],
        [955, 600],
        [932, 662],
        [905, 693],
        [872, 655],
        [848, 560],
        [836, 485],
      ],
    ],
    marker: [888, 558],
  },
  {
    id: "kolotoc",
    n: 5,
    color: "#7c3aed",
    title: "Kolotoč pro koně",
    desc: "Automatický kolotoč pro pravidelný pohyb, rozcvičení a kondiční trénink koní bez nutnosti lonžování.",
    tag: "Pohyb a kondice",
    ellipse: { cx: 780, cy: 628, rx: 68, ry: 46 },
    marker: [780, 628],
  },
  {
    id: "vybehy",
    n: 6,
    color: "#15a04a",
    title: "Výběhy",
    desc: "Rozlehlé travnaté výběhy rozdělené do více ohrad pro celodenní volný pohyb koní v bezprostřední blízkosti stájí.",
    tag: "Více travnatých ohrad",
    polys: [
      [
        [250, 300],
        [720, 150],
        [1150, 250],
        [1180, 430],
        [700, 460],
        [420, 450],
        [250, 360],
      ],
      [
        [965, 450],
        [1185, 435],
        [1310, 545],
        [1280, 775],
        [1000, 830],
        [965, 620],
      ],
      [
        [445, 722],
        [960, 718],
        [910, 858],
        [560, 872],
      ],
    ],
    marker: [720, 295],
  },
];

function ZoneShape({ zone, on }: { zone: Zone; on: boolean }) {
  const common = {
    fill: on ? zone.color : "transparent",
    fillOpacity: on ? 0.34 : 0,
    stroke: zone.color,
    strokeWidth: on ? 3 : 0,
    strokeLinejoin: "round" as const,
    style: { pointerEvents: "all" as const, transition: "fill-opacity .25s, stroke-width .25s" },
  };
  return (
    <>
      {zone.polys?.map((poly, i) => (
        <polygon key={i} points={poly.map((p) => p.join(",")).join(" ")} {...common} />
      ))}
      {zone.ellipse && (
        <ellipse cx={zone.ellipse.cx} cy={zone.ellipse.cy} rx={zone.ellipse.rx} ry={zone.ellipse.ry} {...common} />
      )}
    </>
  );
}

export default function AreaMap() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [active, setActive] = useState<string | null>(null);

  const close = useCallback(() => setActive(null), []);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  const activeZone = zones.find((z) => z.id === active) ?? null;

  return (
    <section id="plan-arealu" className="bg-white px-6 py-24 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex items-center gap-4 text-navy-400">
            <span className="index text-sm">02</span>
            <span className="h-px w-10 bg-navy-200" />
            <span className="text-[0.7rem] font-semibold uppercase tracking-[0.22em]">
              Plán areálu
            </span>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="max-w-2xl display-light text-4xl text-navy-900 sm:text-5xl">
              Prozkoumejte areál
            </h2>
            <p className="max-w-sm text-[0.95rem] leading-relaxed text-ink/55">
              Najeďte myší (nebo klepněte) na jednotlivé části areálu a zobrazí se
              vám detail.
            </p>
          </div>
        </Reveal>

        <Reveal fade delay={120}>
          <div
            className="relative mt-12 w-full overflow-hidden ring-1 ring-navy-100"
            style={{ aspectRatio: `${W} / ${H}` }}
            onClick={close}
            onMouseLeave={() => setHovered(null)}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/areal-3d.webp"
              alt="3D plán jezdeckého areálu Vysoké Veselí"
              width={W}
              height={H}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Vrstva zón */}
            <svg
              viewBox={`0 0 ${W} ${H}`}
              className="absolute inset-0 h-full w-full"
              style={{ pointerEvents: "none" }}
              aria-hidden
            >
              {zones.map((z) => (
                <g
                  key={z.id}
                  onMouseEnter={() => setHovered(z.id)}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActive((a) => (a === z.id ? null : z.id));
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <ZoneShape zone={z} on={hovered === z.id || active === z.id} />
                </g>
              ))}
            </svg>

            {/* Špendlíky */}
            {zones.map((z) => {
              const left = (z.marker[0] / W) * 100;
              const top = (z.marker[1] / H) * 100;
              const on = hovered === z.id || active === z.id;
              return (
                <button
                  key={z.id}
                  type="button"
                  aria-label={z.title}
                  onMouseEnter={() => setHovered(z.id)}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActive((a) => (a === z.id ? null : z.id));
                  }}
                  className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${left}%`, top: `${top}%` }}
                >
                  <span className="relative flex h-7 w-7 items-center justify-center sm:h-8 sm:w-8">
                    {!on && (
                      <span
                        className="map-pin-ring absolute inset-0 rounded-full"
                        style={{ background: z.color }}
                      />
                    )}
                    <span
                      className={`relative flex h-full w-full items-center justify-center rounded-full text-[0.7rem] font-bold text-white ring-2 ring-white transition-transform duration-300 sm:text-xs ${
                        on ? "scale-110 shadow-lg" : ""
                      }`}
                      style={{ background: z.color }}
                    >
                      {z.n}
                    </span>
                  </span>
                </button>
              );
            })}

            {/* Popup s detailem */}
            {activeZone &&
              (() => {
                const mx = activeZone.marker[0] / W;
                const my = activeZone.marker[1] / H;
                const flipX = mx > 0.6;
                const flipY = my > 0.45;
                const tx = flipX ? "calc(-100% - 16px)" : "16px";
                const ty = flipY ? "calc(-100% - 16px)" : "16px";
                // Pozice řešena čistě přes CSS: na mobilu spodní „sheet" nad
                // lištou StickyCta, od lg ukotvená karta u špendlíku (přes
                // CSS proměnné — žádný JS media-query, žádné riziko hydratace).
                return (
                  <div
                    role="dialog"
                    aria-label={activeZone.title}
                    onClick={(e) => e.stopPropagation()}
                    className="fixed inset-x-3 bottom-24 z-[60] bg-white p-6 shadow-2xl ring-1 ring-navy-100 lg:absolute lg:inset-x-auto lg:bottom-auto lg:z-20 lg:w-[19rem] lg:left-[var(--px)] lg:top-[var(--py)] lg:[transform:var(--tf)]"
                    style={
                      {
                        "--px": `${mx * 100}%`,
                        "--py": `${my * 100}%`,
                        "--tf": `translate(${tx}, ${ty})`,
                      } as CSSProperties
                    }
                  >
                    <button
                      type="button"
                      onClick={close}
                      aria-label="Zavřít"
                      className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center text-navy-400 transition-colors hover:text-navy-900"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                        <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                      </svg>
                    </button>
                    <div className="flex items-center gap-3">
                      <span
                        className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold text-white"
                        style={{ background: activeZone.color }}
                      >
                        {activeZone.n}
                      </span>
                      <span className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-navy-400">
                        {activeZone.tag}
                      </span>
                    </div>
                    <h3 className="mt-4 text-xl font-bold tracking-tight text-navy-900">
                      {activeZone.title}
                    </h3>
                    <p className="mt-2 text-[0.9rem] leading-relaxed text-ink/65">
                      {activeZone.desc}
                    </p>
                  </div>
                );
              })()}
          </div>
        </Reveal>

        {/* Legenda */}
        <Reveal delay={160}>
          <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
            {zones.map((z) => {
              const on = hovered === z.id || active === z.id;
              return (
                <button
                  key={z.id}
                  type="button"
                  onMouseEnter={() => setHovered(z.id)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => setActive((a) => (a === z.id ? null : z.id))}
                  className={`flex items-center gap-2.5 border px-3 py-3 text-left transition-colors duration-200 ${
                    on ? "border-navy-300 bg-mist" : "border-navy-100 hover:bg-mist"
                  }`}
                >
                  <span
                    className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[0.6rem] font-bold text-white"
                    style={{ background: z.color }}
                  >
                    {z.n}
                  </span>
                  <span className="text-[0.78rem] font-semibold tracking-tight text-navy-800">
                    {z.title}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
