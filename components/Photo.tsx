import Image from "next/image";
import { blurData } from "@/lib/blurData";

type PhotoProps = {
  /** Cesta k fotce v /public, např. "/images/hero.jpg". Když chybí, zobrazí se placeholder. */
  src?: string;
  alt: string;
  /** Popisek placeholderu, dokud není fotka doplněná. */
  label?: string;
  className?: string;
  priority?: boolean;
  /** Když true, použije fill (rodič musí být relative). */
  fill?: boolean;
  width?: number;
  height?: number;
  /** Responsivní sizes pro next/image — ať se nestahuje zbytečně velká varianta. */
  sizes?: string;
};

export default function Photo({
  src,
  alt,
  label,
  className = "",
  priority = false,
  fill = true,
  width,
  height,
  sizes = "100vw",
}: PhotoProps) {
  if (src) {
    const blur = blurData[src];
    return (
      <Image
        src={src}
        alt={alt}
        fill={fill}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        priority={priority}
        sizes={sizes}
        placeholder={blur ? "blur" : undefined}
        blurDataURL={blur}
        className={`object-cover ${className}`}
      />
    );
  }

  // Placeholder — elegantní, dokud nedodáš fotky
  return (
    <div
      className={`flex h-full w-full items-center justify-center bg-gradient-to-br from-navy-700 via-navy-800 to-navy-900 ${className}`}
    >
      <div className="flex flex-col items-center gap-3 px-6 text-center text-cream/70">
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          aria-hidden
        >
          <rect x="3" y="6" width="18" height="14" rx="2" />
          <circle cx="12" cy="13" r="3.2" />
          <path d="M8 6l1.2-2h5.6L16 6" />
        </svg>
        <span className="font-sans text-xs uppercase tracking-[0.25em]">
          {label ?? "Místo pro fotku"}
        </span>
      </div>
    </div>
  );
}
