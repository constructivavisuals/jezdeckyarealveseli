"use client";

import { useState } from "react";
import Reveal from "./Reveal";

// TODO: doplň reálné kontaktní údaje
const CONTACT_EMAIL = "info@example.cz";
const CONTACT_PHONE = "+420 000 000 000";
const CONTACT_PERSON = "Jméno Příjmení";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    term: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      "Poptávka pronájmu — Jezdecký areál Vysoké Veselí"
    );
    const body = encodeURIComponent(
      `Jméno: ${form.name}\nKontakt: ${form.contact}\nPreferovaný termín: ${form.term}\n\nZpráva:\n${form.message}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  const inputClass =
    "w-full rounded-lg border border-forest-200 bg-cream px-4 py-3 text-ink placeholder:text-ink/40 focus:border-forest-500 focus:outline-none focus:ring-1 focus:ring-forest-500";

  return (
    <section id="kontakt" className="bg-forest-700 px-6 py-24 text-cream lg:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Levá strana — text a kontakty */}
        <Reveal>
          <p className="eyebrow mb-5 text-gold-300">Kontakt</p>
          <h2 className="font-serif text-3xl font-medium leading-tight sm:text-4xl lg:text-5xl">
            Máte zájem o pronájem areálu?
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-cream/80">
            Napište nám pár řádků o vašem záměru a my se vám co nejdříve ozveme.
            Rádi vás areálem provedeme osobně.
          </p>

          <div className="mt-10 space-y-5 text-cream/90">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-gold-300">
                Kontaktní osoba
              </div>
              <div className="mt-1 font-serif text-xl">{CONTACT_PERSON}</div>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row sm:gap-8">
              <a
                href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`}
                className="transition-colors hover:text-gold-300"
              >
                {CONTACT_PHONE}
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="transition-colors hover:text-gold-300"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>
        </Reveal>

        {/* Pravá strana — formulář */}
        <Reveal delay={150}>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm text-cream/80">
                Jméno
              </label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className={inputClass}
                placeholder="Vaše jméno"
              />
            </div>
            <div>
              <label htmlFor="contact" className="mb-1.5 block text-sm text-cream/80">
                Telefon nebo e-mail
              </label>
              <input
                id="contact"
                name="contact"
                value={form.contact}
                onChange={handleChange}
                required
                className={inputClass}
                placeholder="Kam se vám ozveme"
              />
            </div>
            <div>
              <label htmlFor="term" className="mb-1.5 block text-sm text-cream/80">
                Preferovaný termín
              </label>
              <input
                id="term"
                name="term"
                value={form.term}
                onChange={handleChange}
                className={inputClass}
                placeholder="Od kdy by vás pronájem zajímal"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm text-cream/80">
                Zpráva
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                className={inputClass}
                placeholder="Napište nám o vašem záměru…"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-gold-500 px-8 py-3.5 text-sm font-medium uppercase tracking-wider text-navy-900 transition-colors duration-300 hover:bg-gold-400"
            >
              Odeslat poptávku
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
