import Photo from "./Photo";

const facts = [
  { k: "14", v: "stájových boxů" },
  { k: "≈ 5 ha", v: "rozloha areálu" },
  { k: "≈ 1000 m²", v: "venkovní jízdárna" },
  { k: "2v1", v: "byty nebo dům" },
];

export default function Hero() {
  return (
    <section id="hero" className="relative h-svh min-h-[680px] w-full overflow-hidden bg-navy-900">
      {/* Pozadí */}
      <div className="absolute inset-0">
        <div className="kenburns h-full w-full">
          <Photo src="/images/hero.jpg" alt="Jezdecký areál Vysoké Veselí z výšky" priority />
        </div>
      </div>

      {/* Ztmavení */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/70 via-navy-900/35 to-navy-900/90" />
      <div className="absolute inset-0 bg-navy-900/15" />

      {/* Obsah */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col px-6 lg:px-12">
        {/* Horní meta lišta */}
        <div className="pt-28 lg:pt-32" />

        {/* Hlavní nadpis – vertikálně na střed */}
        <div className="my-auto text-center">
          <p className="mb-7 text-sm font-semibold uppercase tracking-[0.3em] text-white sm:text-base">
            Jezdecký areál k pronájmu
          </p>
          <h1 className="display mx-auto max-w-5xl text-[3.4rem] text-white sm:text-6xl lg:text-7xl xl:text-[6.5rem]">
            Vlastní jezdecký
            <br />
            areál na dosah ráje
          </h1>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="#kontakt"
              className="rounded-none bg-white px-9 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-navy-900 transition-colors duration-300 hover:bg-navy-100"
            >
              Nezávazně poptat
            </a>
            <a
              href="#o-arealu"
              className="rounded-none border border-white/45 px-9 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white hover:text-navy-900"
            >
              Prohlédnout areál
            </a>
          </div>
        </div>

        {/* Spodní stat strip */}
        <div className="grid grid-cols-2 border-t border-white/15 py-6 sm:grid-cols-4">
          {facts.map((f, i) => (
            <div
              key={f.v}
              className={`px-1 py-2 sm:px-5 ${i !== 0 ? "sm:border-l sm:border-white/15" : ""}`}
            >
              <div className="display text-2xl text-white sm:text-3xl">{f.k}</div>
              <div className="mt-1 text-[0.62rem] uppercase tracking-[0.18em] text-white/60">
                {f.v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
