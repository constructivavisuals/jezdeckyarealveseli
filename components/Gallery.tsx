import Photo from "./Photo";
import Reveal from "./Reveal";

const items = [
  { src: "/images/overview.jpg", alt: "Areál z výšky", caption: "Celkový pohled", span: "lg:col-span-2 lg:row-span-2" },
  { src: "/images/arial-1.jpg", alt: "Jízdárna a výběhy", caption: "Jízdárna a výběhy", span: "" },
  { src: "/images/arena.jpg", alt: "Jízdárna a stáje", caption: "Stáje a jízdárna", span: "" },
  { src: "/images/arial-2.jpg", alt: "Areál v podvečerním světle", caption: "Podvečerní světlo", span: "lg:col-span-2" },
  { src: "/images/house-arena.jpg", alt: "Dům a jízdárna", caption: "Dům a zázemí", span: "lg:col-span-2" },
  { src: "/images/lake.jpg", alt: "Okolí areálu", caption: "Okolní krajina", span: "lg:col-span-2" },
];

export default function Gallery() {
  return (
    <section id="galerie" className="bg-mist px-6 py-24 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="flex items-center gap-4 text-navy-400">
                <span className="index text-sm">08</span>
                <span className="h-px w-10 bg-navy-200" />
                <span className="text-[0.7rem] font-semibold uppercase tracking-[0.22em]">
                  Galerie
                </span>
              </div>
              <h2 className="mt-7 display-light text-4xl text-navy-900 sm:text-5xl">
                Prohlédněte si areál
              </h2>
            </div>
            <p className="text-[0.95rem] text-ink/55">
              Letecké snímky celého areálu a jeho okolí.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid auto-rows-[210px] grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <Reveal
              key={i}
              delay={(i % 4) * 80}
              className={`zoomable group relative overflow-hidden ${it.span}`}
            >
              <Photo src={it.src} alt={it.alt} />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-900/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="pointer-events-none absolute bottom-4 left-4 translate-y-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {it.caption}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
