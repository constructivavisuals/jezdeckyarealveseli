import Reveal from "./Reveal";

const stats = [
  { value: "14", label: "ustajovacích boxů" },
  { value: "2", label: "byty + dům k ubytování" },
  { value: "1", label: "krytá jízdárna" },
  { value: "20 min", label: "do Českého ráje" },
];

export default function Intro() {
  return (
    <section id="o-arealu" className="bg-cream px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="eyebrow mb-6">O areálu</p>
          <h2 className="font-serif text-3xl font-medium leading-tight text-navy-800 sm:text-4xl lg:text-5xl">
            Funkční jezdecké zázemí připravené k převzetí jako celek
          </h2>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-ink/75">
            Jezdecký areál ve Vysokém Veselí nabízí kompletní podmínky pro ustájení
            koní i pohodlí jejich majitelů. Stáje, jízdárna, výběhy, seník, slamník
            i samostatné ubytování — vše na jednom místě a připravené k tomu, aby si
            sem nový provozovatel mohl rovnou nastěhovat koně.
          </p>
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-16 grid grid-cols-2 gap-8 border-t border-navy-100 pt-12 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-serif text-4xl text-navy-400 sm:text-5xl">
                  {s.value}
                </div>
                <div className="mt-2 text-xs uppercase tracking-[0.18em] text-ink/55">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
