import Reveal from "./Reveal";

const items = [
  {
    title: "Rozšíření ubytování",
    text: "Areál nabízí prostor pro navýšení ubytovacích kapacit — vhodné pro penzion, soustředění nebo agroturistiku.",
  },
  {
    title: "Pronájem manipulační techniky",
    text: "K areálu je možné domluvit i pronájem manipulační techniky pro každodenní provoz a údržbu.",
  },
  {
    title: "Vlastní koncept provozu",
    text: "Areál je k pronájmu jako celek — nový provozovatel si může nastavit vlastní provoz, ať už jde o ustájení nájemních koní, výcvik nebo chov.",
  },
];

export default function Possibilities() {
  return (
    <section className="bg-cream px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-5">Možnosti</p>
          <h2 className="font-serif text-3xl font-medium leading-tight text-forest-700 sm:text-4xl lg:text-5xl">
            Prostor, který roste s vašimi plány
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {items.map((it, i) => (
            <Reveal
              key={it.title}
              delay={i * 120}
              className="rounded-2xl border border-forest-200 bg-cream-dark/40 p-8 lg:p-10"
            >
              <div className="font-serif text-5xl text-gold-300">0{i + 1}</div>
              <h3 className="mt-5 font-serif text-2xl text-forest-700">{it.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-ink/70">{it.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
