import Reveal from "./Reveal";

const pillars = [
  {
    t: "Připravené k převzetí",
    d: "Funkční provoz — stáje, jízdárna, výběhy i zázemí. Stačí přivézt koně a začít.",
  },
  {
    t: "Bydlení na místě",
    d: "Dům a dva samostatné byty umožní provozovateli bydlet přímo v areálu.",
  },
  {
    t: "Celek k pronájmu",
    d: "Areál se pronajímá jako jeden celek — vlastní koncept provozu bez kompromisů.",
  },
];

export default function Intro() {
  return (
    <section id="o-arealu" className="bg-white px-6 py-24 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex items-center gap-4 text-navy-400">
            <span className="index text-sm">01</span>
            <span className="h-px w-10 bg-navy-200" />
            <span className="text-[0.7rem] font-semibold uppercase tracking-[0.22em]">
              O areálu
            </span>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <h2 className="display-light text-4xl text-navy-900 sm:text-5xl lg:text-[3.7rem]">
              Funkční jezdecké zázemí připravené k převzetí jako&nbsp;celek
            </h2>
          </Reveal>
          <Reveal delay={120} className="flex items-end lg:col-span-5">
            <p className="text-lg leading-relaxed text-ink/70">
              Jezdecký areál ve Vysokém Veselí nabízí kompletní podmínky pro
              ustájení koní i pohodlí jejich majitelů. Stáje, jízdárna, výběhy,
              seník i samostatné ubytování — vše na jednom místě a připravené k
              tomu, aby si sem nový provozovatel mohl rovnou nastěhovat koně.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid grid-cols-1 border-t border-navy-100 sm:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal
              key={p.t}
              delay={i * 120}
              className={`py-9 sm:px-8 sm:py-10 ${
                i !== 0 ? "border-t border-navy-100 sm:border-l sm:border-t-0" : ""
              }`}
            >
              <div className="index text-sm text-navy-300">0{i + 1}</div>
              <h3 className="mt-4 text-xl font-bold tracking-tight text-navy-900">
                {p.t}
              </h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-ink/65">
                {p.d}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
