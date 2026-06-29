const nav = [
  { href: "#o-arealu", label: "Areál" },
  { href: "#vybaveni", label: "Vybavení" },
  { href: "#ustajeni", label: "Ustájení" },
  { href: "#galerie", label: "Galerie" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-900 px-6 py-16 text-white lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-end">
          <div>
            <div className="display text-4xl text-white sm:text-5xl">
              Areál
              <br />
              Vysoké Veselí
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/55">
              Kompletní jezdecký areál k pronájmu — Vysoké Veselí, na dosah
              Českého ráje.
            </p>
          </div>

          <div className="flex flex-col gap-4 lg:items-end">
            <nav className="flex flex-wrap gap-x-7 gap-y-2">
              {nav.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-[0.72rem] font-medium uppercase tracking-[0.16em] text-white/60 transition-colors hover:text-white"
                >
                  {l.label}
                </a>
              ))}
            </nav>
            {/* TODO: doplň reálný odkaz na FB */}
            <a
              href="#"
              className="text-[0.72rem] font-medium uppercase tracking-[0.16em] text-white/60 transition-colors hover:text-white"
            >
              Facebook ↗
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-7 text-[0.7rem] uppercase tracking-[0.14em] text-white/40 sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} Areál Vysoké Veselí</span>
          <span>Jezdecký areál k pronájmu</span>
        </div>
      </div>
    </footer>
  );
}
