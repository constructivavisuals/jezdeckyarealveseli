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
    <section className="bg-navy-900 px-6 py-24 text-white lg:px-12 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex items-center gap-4 text-navy-300">
            <span className="index text-sm">07</span>
            <span className="h-px w-10 bg-white/25" />
            <span className="text-[0.7rem] font-semibold uppercase tracking-[0.22em]">
              Možnosti
            </span>
          </div>
          <h2 className="mt-7 max-w-3xl display-light text-4xl text-white sm:text-5xl lg:text-6xl">
            Prostor, který roste s vašimi plány
          </h2>
        </Reveal>

        <div className="mt-16 border-t border-white/15">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 100}>
              <div className="group grid grid-cols-1 items-start gap-4 border-b border-white/15 py-9 transition-colors duration-300 hover:bg-white/[0.03] sm:grid-cols-12 sm:gap-8 sm:py-12">
                <div className="index text-2xl text-navy-300 sm:col-span-2 sm:text-3xl">
                  0{i + 1}
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-white sm:col-span-4 sm:text-3xl">
                  {it.title}
                </h3>
                <p className="text-lg leading-relaxed text-white/70 sm:col-span-6">
                  {it.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
