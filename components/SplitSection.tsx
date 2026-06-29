import Photo from "./Photo";
import Reveal from "./Reveal";

type SplitSectionProps = {
  id?: string;
  index?: string;
  eyebrow: string;
  title: React.ReactNode;
  children: React.ReactNode;
  imageSrc?: string;
  imageAlt: string;
  imageLabel?: string;
  /** Když true, fotka je vpravo (text vlevo). */
  reverse?: boolean;
  dark?: boolean;
};

export default function SplitSection({
  id,
  index,
  eyebrow,
  title,
  children,
  imageSrc,
  imageAlt,
  imageLabel,
  reverse = false,
  dark = false,
}: SplitSectionProps) {
  return (
    <section id={id} className={dark ? "bg-navy-900 text-white" : "bg-white text-ink"}>
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-stretch lg:grid-cols-2">
        {/* Fotka */}
        <div
          className={`zoomable relative min-h-[360px] overflow-hidden lg:min-h-[680px] ${
            reverse ? "lg:order-2" : "lg:order-1"
          }`}
        >
          <Photo src={imageSrc} alt={imageAlt} label={imageLabel} />
        </div>

        {/* Text */}
        <div
          className={`flex items-center px-6 py-16 sm:px-12 lg:px-20 lg:py-32 ${
            reverse ? "lg:order-1" : "lg:order-2"
          }`}
        >
          <Reveal className="max-w-xl">
            <div
              className={`flex items-center gap-4 ${dark ? "text-navy-300" : "text-navy-400"}`}
            >
              {index && <span className="index text-sm">{index}</span>}
              <span
                className={`h-px w-10 ${dark ? "bg-white/25" : "bg-navy-200"}`}
              />
              <span className="text-[0.7rem] font-semibold uppercase tracking-[0.22em]">
                {eyebrow}
              </span>
            </div>
            <h2
              className={`mt-7 display-light text-4xl sm:text-5xl lg:text-[3.4rem] ${
                dark ? "text-white" : "text-navy-900"
              }`}
            >
              {title}
            </h2>
            <div
              className={`mt-7 space-y-5 text-lg leading-relaxed ${
                dark ? "text-white/75" : "text-ink/70"
              }`}
            >
              {children}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
