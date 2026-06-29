import Reveal from "./Reveal";

const points = [
  "Vysoké Veselí, okres Jičín — klidná obec v srdci Východních Čech",
  "Kousek do Českého ráje — turisticky atraktivní region s tradicí jezdectví",
  "Dostupné silniční napojení i dostatek prostoru a klidu pro koně",
  "Skvělé podmínky pro vyjížďky do okolní krajiny",
];

export default function Location() {
  return (
    <section id="poloha" className="bg-navy-700 px-6 py-24 text-cream lg:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <p className="eyebrow mb-5 text-navy-200">Poloha</p>
          <h2 className="font-serif text-3xl font-medium leading-tight text-cream sm:text-4xl lg:text-5xl">
            Na dosah Českého ráje
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-cream/80">
            Areál leží ve Vysokém Veselí — v dostupné, a přitom klidné lokalitě
            ideální pro chov a ustájení koní. Blízkost Českého ráje nabízí krásné
            terény pro vyjížďky i potenciál pro agroturistiku.
          </p>
          <ul className="mt-8 space-y-4">
            {points.map((p) => (
              <li key={p} className="flex gap-3 text-cream/85">
                <svg
                  className="mt-1 shrink-0 text-navy-300"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={150} className="overflow-hidden rounded-2xl border border-navy-500 shadow-2xl">
          <iframe
            title="Mapa — Vysoké Veselí"
            src="https://www.google.com/maps?q=Vysok%C3%A9%20Vesel%C3%AD&output=embed"
            className="h-[380px] w-full lg:h-[460px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </div>
    </section>
  );
}
