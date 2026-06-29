import Reveal from "./Reveal";

const points = [
  {
    t: "Vysoké Veselí, okres Jičín",
    d: "Klidná obec v srdci Východních Čech s dostatkem prostoru a klidu pro koně.",
  },
  {
    t: "Na dosah Českého ráje",
    d: "Turisticky atraktivní region s tradicí jezdectví a krásnými terény pro vyjížďky.",
  },
  {
    t: "Dobré silniční napojení",
    d: "Dostupná lokalita s pohodlným příjezdem i pro přepravu koní.",
  },
];

export default function Location() {
  return (
    <section id="poloha" className="bg-white px-6 py-24 lg:px-12 lg:py-36">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="flex items-center gap-4 text-navy-400">
            <span className="index text-sm">06</span>
            <span className="h-px w-10 bg-navy-200" />
            <span className="text-[0.7rem] font-semibold uppercase tracking-[0.22em]">
              Poloha
            </span>
          </div>
          <h2 className="mt-7 display-light text-4xl text-navy-900 sm:text-5xl lg:text-6xl">
            Na dosah Českého ráje
          </h2>
          <p className="mt-7 max-w-md text-lg leading-relaxed text-ink/70">
            Areál leží ve Vysokém Veselí — v dostupné, a přitom klidné lokalitě
            ideální pro chov a ustájení koní. Blízkost Českého ráje nabízí krásné
            terény pro vyjížďky i potenciál pro agroturistiku.
          </p>

          <div className="mt-12 border-t border-navy-100">
            {points.map((p, i) => (
              <div key={p.t} className="flex gap-6 border-b border-navy-100 py-6">
                <span className="index pt-1 text-sm text-navy-300">0{i + 1}</span>
                <div>
                  <h3 className="text-lg font-bold tracking-tight text-navy-900">
                    {p.t}
                  </h3>
                  <p className="mt-1.5 text-[0.95rem] leading-relaxed text-ink/65">
                    {p.d}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={150} className="overflow-hidden ring-1 ring-navy-100 lg:mt-2">
          <iframe
            title="Mapa — Vysoké Veselí"
            src="https://www.google.com/maps?q=Vysok%C3%A9%20Vesel%C3%AD&output=embed"
            className="h-[420px] w-full grayscale-[0.2] lg:h-full lg:min-h-[560px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </div>
    </section>
  );
}
