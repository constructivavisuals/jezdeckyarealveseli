import Reveal from "./Reveal";

const features = [
  {
    title: "Ustájení — 14 boxů",
    text: "12 vnitřních a 2 venkovní boxy s veškerým zázemím pro každodenní péči o koně.",
    icon: (
      <path d="M3 21V8l9-5 9 5v13M9 21v-6h6v6M7 11h.01M17 11h.01" />
    ),
  },
  {
    title: "Jízdárna",
    text: "Prostor pro každodenní trénink, výcvik i práci s koňmi za každého počasí.",
    icon: <path d="M3 18h18M5 18V9l7-4 7 4v9M9 18v-4h6v4" />,
  },
  {
    title: "Výběhy",
    text: "Travnaté výběhy pro volný pohyb a relaxaci koní v bezprostřední blízkosti stájí.",
    icon: <path d="M4 20V7M9 20V4M14 20v-9M19 20V6" />,
  },
  {
    title: "Seník & slamník",
    text: "Krytá kapacita pro skladování sena a slámy (stany) — zásoby po ruce po celý rok.",
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
    icon: <path d="M3 17h13v-5H8L3 17zM16 17h5v-3l-3-1M6 20a2 2 0 100-4 2 2 0 000 4zM18 20a2 2 0 100-4 2 2 0 000 4z" />,
  },
];

export default function Features() {
  return (
    <section id="vybaveni" className="bg-cream-dark px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-5">Vybavení</p>
          <h2 className="font-serif text-3xl font-medium leading-tight text-forest-700 sm:text-4xl lg:text-5xl">
            Vše, co kompletní jezdecký provoz potřebuje
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-forest-200 bg-forest-200 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal
              key={f.title}
              delay={(i % 3) * 100}
              className="group bg-cream p-8 transition-colors duration-300 hover:bg-forest-50 lg:p-10"
            >
              <div className="mb-5 text-gold-500">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {f.icon}
                </svg>
              </div>
              <h3 className="font-serif text-2xl text-forest-700">{f.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-ink/70">{f.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
