import Reveal from "./Reveal";

const features = [
  {
    title: "Ustájení — 14 boxů",
    text: "12 vnitřních a 2 venkovní boxy s veškerým zázemím pro každodenní péči o koně.",
    icon: <path d="M3 21V8l9-5 9 5v13M9 21v-6h6v6M7 11h.01M17 11h.01" />,
  },
  {
    title: "Venkovní jízdárna",
    text: "Prostorná jízdárna o rozloze přibližně 1000 m² pro každodenní trénink, výcvik i práci s koňmi v přírodním prostředí.",
    icon: <path d="M3 18h18M5 18V9l7-4 7 4v9M9 18v-4h6v4" />,
  },
  {
    title: "Výběhy",
    text: "Travnaté výběhy pro volný pohyb a relaxaci koní v bezprostřední blízkosti stájí.",
    icon: <path d="M4 20V7M9 20V4M14 20v-9M19 20V6" />,
  },
  {
    title: "Seník a slamník",
    text: "Krytá kapacita pro uskladnění sena a slámy (stany) — zásoby po ruce po celý rok.",
    icon: <path d="M3 21V10l9-6 9 6v11M3 21h18M8 21v-6h8v6" />,
  },
  {
    title: "Zázemí pro jezdce",
    text: "Sociální i provozní zázemí pro pohodlné fungování celého areálu.",
    icon: <path d="M12 12a4 4 0 100-8 4 4 0 000 8zM5 21v-1a7 7 0 0114 0v1" />,
  },
  {
    title: "Manipulační technika",
    text: "Možnost pronájmu manipulační techniky pro provoz a údržbu areálu.",
    icon: (
      <path d="M3 17h13v-5H8L3 17zM16 17h5v-3l-3-1M6 20a2 2 0 100-4 2 2 0 000 4zM18 20a2 2 0 100-4 2 2 0 000 4z" />
    ),
  },
  {
    title: "Solární panely",
    text: "Fotovoltaika na střechách objektů — úspora nákladů na energie v každodenním provozu areálu.",
    wide: true,
    icon: (
      <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M18.4 5.6 17 7M7 17l-1.4 1.4M12 8a4 4 0 100 8 4 4 0 000-8z" />
    ),
  },
];

export default function Features() {
  return (
    <section id="vybaveni" className="bg-mist px-6 py-24 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex items-center gap-4 text-navy-400">
            <span className="index text-sm">02</span>
            <span className="h-px w-10 bg-navy-200" />
            <span className="text-[0.7rem] font-semibold uppercase tracking-[0.22em]">
              Vybavení
            </span>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-8 max-w-3xl display-light text-4xl text-navy-900 sm:text-5xl">
            Vše, co kompletní jezdecký provoz potřebuje
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 border-l border-t border-navy-100 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal
              key={f.title}
              delay={(i % 3) * 90}
              className={`group relative border-b border-r border-navy-100 bg-mist p-8 transition-colors duration-300 hover:bg-white lg:p-10 ${
                "wide" in f && f.wide ? "sm:col-span-2 lg:col-span-3" : ""
              }`}
            >
              <div className="flex items-start justify-between">
                <span className="index text-sm text-navy-300">0{i + 1}</span>
                <span className="text-navy-400 transition-transform duration-300 group-hover:-translate-y-0.5">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {f.icon}
                  </svg>
                </span>
              </div>
              <h3 className="mt-12 text-xl font-bold tracking-tight text-navy-900">
                {f.title}
              </h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-ink/65">
                {f.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
