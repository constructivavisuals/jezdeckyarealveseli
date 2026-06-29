import Photo from "./Photo";
import Reveal from "./Reveal";

type SplitSectionProps = {
  id?: string;
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
    <section
      id={id}
      className={dark ? "bg-navy-800 text-cream" : "bg-cream text-ink"}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-stretch lg:grid-cols-2">
        {/* Fotka */}
        <div
          className={`relative min-h-[340px] lg:min-h-[600px] ${
            reverse ? "lg:order-2" : "lg:order-1"
          }`}
        >
          <Photo src={imageSrc} alt={imageAlt} label={imageLabel} />
        </div>

        {/* Text */}
        <div
          className={`flex items-center px-6 py-16 sm:px-12 lg:px-16 lg:py-28 ${
            reverse ? "lg:order-1" : "lg:order-2"
          }`}
        >
          <Reveal className="max-w-xl">
            <p
              className={`eyebrow mb-5 ${dark ? "text-navy-200" : "text-navy-400"}`}
            >
              {eyebrow}
            </p>
            <h2
              className={`font-serif text-3xl font-medium leading-tight sm:text-4xl lg:text-5xl ${
                dark ? "text-cream" : "text-navy-800"
              }`}
            >
              {title}
            </h2>
            <div
              className={`mt-6 space-y-4 text-base leading-relaxed ${
                dark ? "text-cream/85" : "text-ink/75"
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
