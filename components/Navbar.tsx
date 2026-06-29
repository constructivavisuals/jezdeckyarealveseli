"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#o-arealu", label: "Areál" },
  { href: "#plan-arealu", label: "Plán" },
  { href: "#vybaveni", label: "Vybavení" },
  { href: "#ustajeni", label: "Ustájení" },
  { href: "#poloha", label: "Poloha" },
  { href: "#galerie", label: "Galerie" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scrollspy — zvýrazni odkaz na sekci, která je právě v zorném poli.
  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive("#" + visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Zavři menu Escapem a zamkni scroll pozadí, dokud je otevřené.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-navy-100 bg-white/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
        <a
          href="#hero"
          className={`text-sm font-bold uppercase leading-none tracking-[0.12em] transition-colors duration-500 ${
            scrolled ? "text-navy-900" : "text-white"
          }`}
        >
          Areál Vysoké Veselí
          <span
            className={`mt-1 block text-[0.6rem] font-medium tracking-[0.3em] ${
              scrolled ? "text-navy-400" : "text-white/60"
            }`}
          >
            Jezdecký areál
          </span>
        </a>

        <div className="hidden items-center gap-9 lg:flex">
          {links.map((l) => {
            const isActive = active === l.href;
            return (
              <a
                key={l.href}
                href={l.href}
                aria-current={isActive ? "true" : undefined}
                className={`relative text-[0.72rem] font-medium uppercase tracking-[0.14em] transition-colors duration-300 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:bg-current after:transition-[width] after:duration-300 hover:after:w-full ${
                  isActive ? "after:w-full" : "after:w-0"
                } ${
                  scrolled
                    ? isActive
                      ? "text-navy-900"
                      : "text-navy-600 hover:text-navy-900"
                    : isActive
                      ? "text-white"
                      : "text-white/80 hover:text-white"
                }`}
              >
                {l.label}
              </a>
            );
          })}
          <a
            href="#kontakt"
            className={`px-5 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.14em] transition-all duration-300 ${
              scrolled
                ? "bg-navy-900 text-white hover:bg-navy-700"
                : "border border-white/50 text-white hover:bg-white hover:text-navy-900"
            }`}
          >
            Poptat
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Zavřít menu" : "Otevřít menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden ${scrolled ? "text-navy-900" : "text-white"}`}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            ) : (
              <path d="M3 7h18M3 12h18M3 17h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobilní menu */}
      <div
        id="mobile-menu"
        className={`overflow-hidden bg-navy-900 transition-[max-height] duration-500 lg:hidden ${
          open ? "max-h-[420px]" : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-6 py-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-white/10 py-3.5 text-sm uppercase tracking-[0.14em] text-white/85 hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#kontakt"
            onClick={() => setOpen(false)}
            className="mt-4 bg-white px-5 py-3.5 text-center text-xs font-semibold uppercase tracking-[0.16em] text-navy-900"
          >
            Poptat areál
          </a>
        </div>
      </div>
    </header>
  );
}
