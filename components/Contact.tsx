"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const CONTACT_EMAIL = "info@jezdeckyarealveseli.cz";
const CONTACT_PHONE = "+420 739 630 737";
// TODO: doplň jméno kontaktní osoby (zatím skryto)
const CONTACT_PERSON = "";

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
    "w-full border-b border-white/25 bg-transparent py-3 text-white placeholder:text-white/35 focus:border-white focus:outline-none transition-colors";

  return (
    <section id="kontakt" className="bg-navy-900 px-6 py-24 text-white lg:px-12 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex items-center gap-4 text-navy-300">
            <span className="index text-sm">08</span>
            <span className="h-px w-10 bg-white/25" />
            <span className="text-[0.7rem] font-semibold uppercase tracking-[0.22em]">
              Kontakt
            </span>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-24">
          {/* Levá strana */}
          <Reveal>
            <h2 className="display text-5xl text-white sm:text-6xl lg:text-7xl">
              Máte zájem
              <br />o pronájem?
            </h2>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-white/70">
              Napište nám pár řádků o vašem záměru a my se vám co nejdříve ozveme.
              Rádi vás areálem provedeme osobně.
            </p>

            <div className="mt-12 space-y-6 border-t border-white/15 pt-8">
              {CONTACT_PERSON && (
                <div>
                  <div className="text-[0.62rem] uppercase tracking-[0.22em] text-navy-300">
                    Kontaktní osoba
                  </div>
                  <div className="mt-2 text-2xl font-bold tracking-tight">
                    {CONTACT_PERSON}
                  </div>
                </div>
              )}
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-12">
                <a
                  href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`}
                  className="text-lg transition-colors hover:text-navy-200"
                >
                  {CONTACT_PHONE}
                </a>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-lg transition-colors hover:text-navy-200"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
            </div>
          </Reveal>

          {/* Pravá strana — formulář */}
          <Reveal delay={150}>
            <form onSubmit={handleSubmit} className="space-y-7">
              <div>
                <label htmlFor="name" className="mb-1 block text-[0.62rem] uppercase tracking-[0.22em] text-white/50">
                  Jméno
                </label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                  className={inputClass}
                  placeholder="Vaše jméno"
                />
              </div>
              <div>
                <label htmlFor="contact" className="mb-1 block text-[0.62rem] uppercase tracking-[0.22em] text-white/50">
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
                <label htmlFor="term" className="mb-1 block text-[0.62rem] uppercase tracking-[0.22em] text-white/50">
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
                <label htmlFor="message" className="mb-1 block text-[0.62rem] uppercase tracking-[0.22em] text-white/50">
                  Zpráva
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={3}
                  className={inputClass}
                  placeholder="Napište nám o vašem záměru…"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-white px-8 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-navy-900 transition-colors duration-300 hover:bg-navy-100"
              >
                Odeslat poptávku
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
