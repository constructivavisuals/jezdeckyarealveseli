"use client";

import { useEffect, useState } from "react";

export default function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Zobraz až po odscrollování přes hero…
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.9);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // …ale schovej, když je sekce kontaktu na obrazovce (tlačítko by bylo duplicitní).
    const contact = document.getElementById("kontakt");
    let inContact = false;
    const observer = contact
      ? new IntersectionObserver(
          ([e]) => {
            inContact = e.isIntersecting;
            setVisible(window.scrollY > window.innerHeight * 0.9 && !inContact);
          },
          { threshold: 0.05 }
        )
      : null;
    if (contact && observer) observer.observe(contact);

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer?.disconnect();
    };
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 p-3 transition-all duration-300 lg:hidden ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0"
      }`}
    >
      <a
        href="#kontakt"
        className="block bg-navy-900 px-6 py-4 text-center text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-lg shadow-navy-900/30"
      >
        Nezávazně poptat areál
      </a>
    </div>
  );
}
