"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#o-arealu", label: "O areálu" },
  { href: "#vybaveni", label: "Vybavení" },
  { href: "#video", label: "Video" },
  { href: "#ustajeni", label: "Ustájení" },
  { href: "#ubytovani", label: "Ubytování" },
  { href: "#poloha", label: "Poloha" },
  { href: "#galerie", label: "Galerie" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/95 shadow-[0_1px_0_rgba(0,0,0,0.06)] backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a
          href="#hero"
          className={`font-serif text-xl leading-tight tracking-wide transition-colors duration-500 ${
            scrolled ? "text-navy-800" : "text-cream"
          }`}
        >
          Jezdecký areál
          <span className="block text-[0.7rem] font-sans uppercase tracking-[0.3em] opacity-80">
            Vysoké Veselí
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors duration-300 ${
                scrolled
                  ? "text-navy-900 hover:text-navy-500"
                  : "text-cream/90 hover:text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#kontakt"
            className={`rounded-full border px-5 py-2 text-sm font-medium uppercase tracking-wider transition-all duration-300 ${
              scrolled
                ? "border-navy-800 text-navy-800 hover:bg-navy-800 hover:text-cream"
                : "border-cream/70 text-cream hover:bg-cream hover:text-navy-800"
            }`}
          >
            Poptat
          </a>
        </div>

        <button
          type="button"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden ${scrolled ? "text-navy-800" : "text-cream"}`}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            {open ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobilní menu */}
      <div
        className={`overflow-hidden bg-navy-800 transition-[max-height] duration-500 lg:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-6 py-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-2 text-cream/90 hover:text-navy-200"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#kontakt"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full border border-navy-300 px-5 py-2 text-center text-sm font-medium uppercase tracking-wider text-navy-200"
          >
            Poptat areál
          </a>
        </div>
      </div>
    </header>
  );
}
