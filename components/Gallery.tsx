import Photo from "./Photo";
import Reveal from "./Reveal";

const items = [
  { src: "/images/overview.jpg", alt: "Areál z výšky", span: "lg:col-span-2 lg:row-span-2" },
  { src: "/images/arial-1.jpg", alt: "Jízdárna a výběhy", span: "" },
  { src: "/images/arena.jpg", alt: "Jízdárna a stáje", span: "" },
  { src: "/images/arial-2.jpg", alt: "Areál v podvečerním světle", span: "lg:col-span-2" },
  { src: "/images/house-arena.jpg", alt: "Dům a jízdárna", span: "" },
  { src: "/images/lake.jpg", alt: "Okolí areálu", span: "" },
];

export default function Gallery() {
  return (
    <section id="galerie" className="bg-cream-dark px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-5">Galerie</p>
          <h2 className="font-serif text-3xl font-medium leading-tight text-forest-700 sm:text-4xl lg:text-5xl">
            Prohlédněte si areál
          </h2>
          <p className="mt-5 text-base text-ink/60">
            Letecké snímky celého areálu a jeho okolí.
          </p>
        </Reveal>

        <div className="mt-14 grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <Reveal
              key={i}
              delay={(i % 4) * 80}
              className={`relative overflow-hidden rounded-xl ${it.span}`}
            >
              <Photo src={it.src} alt={it.alt} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
