import Photo from "./Photo";

export default function Hero() {
  return (
    <section id="hero" className="relative h-svh min-h-[640px] w-full overflow-hidden">
      {/* Fotka / placeholder na pozadí */}
      <div className="absolute inset-0">
        <div className="kenburns h-full w-full">
          <Photo src="/images/hero.jpg" alt="Jezdecký areál Vysoké Veselí z výšky" priority />
        </div>
      </div>

      {/* Ztmavení pro čitelnost textu */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/55 via-navy-900/30 to-navy-900/70" />

      {/* Obsah */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <p className="eyebrow mb-6 text-gold-300">Jezdecký areál k pronájmu</p>
        <h1 className="max-w-4xl font-serif text-4xl font-medium leading-[1.05] text-cream sm:text-6xl lg:text-7xl">
          Vlastní jezdecký areál
          <span className="block italic text-cream/95">na dosah Českého ráje</span>
        </h1>
        <p className="mt-7 max-w-xl text-base leading-relaxed text-cream/85 sm:text-lg">
          Kompletní zázemí pro koně i jezdce ve Vysokém Veselí — 14 boxů, jízdárna,
          výběhy a ubytování. K pronájmu jako celek.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#kontakt"
            className="rounded-full bg-gold-500 px-8 py-3.5 text-sm font-medium uppercase tracking-wider text-navy-900 transition-colors duration-300 hover:bg-gold-400"
          >
            Nezávazně poptat
          </a>
          <a
            href="#o-arealu"
            className="rounded-full border border-cream/60 px-8 py-3.5 text-sm font-medium uppercase tracking-wider text-cream transition-colors duration-300 hover:bg-cream hover:text-forest-700"
          >
            Prohlédnout areál
          </a>
        </div>
      </div>

      {/* Scroll indikátor */}
      <a
        href="#o-arealu"
        aria-label="Posunout dolů"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-cream/70 transition-colors hover:text-cream"
      >
        <svg width="24" height="38" viewBox="0 0 24 38" fill="none">
          <rect
            x="1"
            y="1"
            width="22"
            height="36"
            rx="11"
            stroke="currentColor"
            strokeWidth="1.2"
          />
          <circle cx="12" cy="11" r="2.5" fill="currentColor">
            <animate
              attributeName="cy"
              values="11;20;11"
              dur="1.8s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      </a>
    </section>
  );
}
