import Reveal from "./Reveal";

const distances = [
  { city: "Jičín", km: "18 km", time: "20 min" },
  { city: "Poděbrady", km: "33 km", time: "35 min" },
  { city: "Hradec Králové", km: "38 km", time: "40 min" },
  { city: "Mladá Boleslav", km: "48 km", time: "45 min" },
  { city: "Praha", km: "95 km", time: "1 h 20 min" },
];

export default function Location() {
  return (
    <section id="poloha" className="bg-white px-6 py-24 lg:px-12 lg:py-36">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="flex items-center gap-4 text-navy-400">
            <span className="index text-sm">05</span>
            <span className="h-px w-10 bg-navy-200" />
            <span className="text-[0.7rem] font-semibold uppercase tracking-[0.22em]">
              Poloha
            </span>
          </div>
          <h2 className="mt-7 display-light text-4xl text-navy-900 sm:text-5xl lg:text-6xl">
            Na dosah Českého ráje
          </h2>
          <p className="mt-7 max-w-md text-lg leading-relaxed text-ink/70">
            Areál leží ve Vysokém Veselí (okres Jičín, Královéhradecký kraj) —
            v klidné, a přitom dobře dostupné lokalitě ideální pro chov a ustájení
            koní, s krásnými terény pro vyjížďky.
          </p>

          <div className="mt-12">
            <div className="text-[0.62rem] uppercase tracking-[0.22em] text-navy-400">
              Dojezdové vzdálenosti
            </div>
            <div className="mt-5 border-t border-navy-100">
              {distances.map((d) => (
                <div
                  key={d.city}
                  className="flex items-baseline justify-between gap-4 border-b border-navy-100 py-4"
                >
                  <span className="text-lg font-bold tracking-tight text-navy-900">
                    {d.city}
                  </span>
                  <span className="flex items-baseline gap-4 text-[0.95rem] text-ink/65">
                    <span className="index text-navy-500">{d.km}</span>
                    <span className="h-3 w-px self-center bg-navy-200" />
                    <span className="tabular-nums">{d.time}</span>
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-ink/45">
              Vzdálenosti jsou orientační (po silnici, osobním autem).
            </p>
          </div>
        </Reveal>

        <Reveal delay={150} className="overflow-hidden ring-1 ring-navy-100 lg:mt-2">
          <iframe
            title="Mapa okolí — Vysoké Veselí"
            src="https://www.google.com/maps?q=Vysok%C3%A9%20Vesel%C3%AD&z=9&output=embed"
            className="h-[440px] w-full grayscale-[0.15] lg:h-full lg:min-h-[620px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </div>
    </section>
  );
}
