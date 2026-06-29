export default function Footer() {
  return (
    <footer className="bg-navy-900 px-6 py-12 text-cream/70">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <div className="font-serif text-lg text-cream">
            Jezdecký areál Vysoké Veselí
          </div>
          <div className="mt-1 text-sm">Kompletní jezdecký areál k pronájmu</div>
        </div>

        <div className="flex items-center gap-6 text-sm">
          {/* TODO: doplň reálný odkaz na FB */}
          <a href="#" className="transition-colors hover:text-navy-200">
            Facebook
          </a>
          <a href="#kontakt" className="transition-colors hover:text-navy-200">
            Kontakt
          </a>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-7xl border-t border-cream/10 pt-6 text-center text-xs text-cream/40">
        © {new Date().getFullYear()} Jezdecký areál Vysoké Veselí
      </div>
    </footer>
  );
}
