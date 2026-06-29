"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const CONTACT_EMAIL = "info@jezdeckyarealveseli.cz";
const CONTACT_PHONE = "+420 739 630 737";
const CONTACT_PERSON = "Aneta Bartková";

// Klíč z web3forms.com (zdarma). Nastav v Vercelu jako NEXT_PUBLIC_WEB3FORMS_KEY.
// Dokud není vyplněný, formulář odešle přes e-mailového klienta (mailto).
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

const params = [
  { k: "Rozloha areálu", v: "≈ 5 ha" },
  { k: "Venkovní jízdárna", v: "≈ 1000 m²" },
  { k: "Ustájení", v: "14 boxů (12 vnitřních, 2 venkovní)" },
  { k: "Cena", v: "na vyžádání" },
  { k: "K nastěhování", v: "léto 2026" },
];

type Status = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    term: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const sendViaMail = () => {
    const subject = encodeURIComponent(
      "Poptávka pronájmu — Jezdecký areál Vysoké Veselí"
    );
    const body = encodeURIComponent(
      `Jméno: ${form.name}\nKontakt: ${form.contact}\nPreferovaný termín: ${form.term}\n\nZpráva:\n${form.message}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Bez backendového klíče → fallback na e-mailového klienta.
    if (!WEB3FORMS_KEY) {
      sendViaMail();
      return;
    }

    // Honeypot proti spamu.
    const honeypot = (
      e.currentTarget.elements.namedItem("botcheck") as HTMLInputElement | null
    )?.checked;
    if (honeypot) return;

    setStatus("submitting");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: "Poptávka pronájmu — Jezdecký areál Vysoké Veselí",
          from_name: "Web — Jezdecký areál Vysoké Veselí",
          Jméno: form.name,
          "Telefon nebo e-mail": form.contact,
          "Preferovaný termín": form.term || "—",
          Zpráva: form.message || "—",
          replyto: form.contact,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setForm({ name: "", contact: "", term: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full border-b border-white/25 bg-transparent py-3 text-white placeholder:text-white/35 focus:border-white focus:outline-none transition-colors";

  return (
    <section
      id="kontakt"
      className="bg-navy-900 px-6 py-24 text-white lg:px-12 lg:py-36"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex items-center gap-4 text-navy-300">
            <span className="index text-sm">09</span>
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
              Napište nám pár řádků o vašem záměru a my se vám co nejdříve
              ozveme. Rádi vás areálem provedeme osobně.
            </p>

            {/* Parametry areálu */}
            <dl className="mt-12 border-t border-white/15">
              {params.map((p) => (
                <div
                  key={p.k}
                  className="flex items-baseline justify-between gap-4 border-b border-white/15 py-3.5"
                >
                  <dt className="text-[0.7rem] uppercase tracking-[0.18em] text-navy-300">
                    {p.k}
                  </dt>
                  <dd className="text-right text-[0.95rem] font-medium text-white">
                    {p.v}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-10 space-y-5">
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

          {/* Pravá strana — formulář / poděkování */}
          <Reveal delay={150}>
            {status === "success" ? (
              <div className="flex h-full flex-col justify-center border border-white/15 p-10 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white text-navy-900">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path
                      d="M5 13l4 4L19 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="mt-6 text-2xl font-bold tracking-tight">
                  Děkujeme za poptávku!
                </h3>
                <p className="mt-3 text-white/70">
                  Ozveme se vám co nejdříve. V naléhavém případě nám zavolejte na{" "}
                  <a
                    href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`}
                    className="underline hover:text-white"
                  >
                    {CONTACT_PHONE}
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-7">
                {/* Honeypot proti spamu — skryté pole */}
                <input
                  type="checkbox"
                  name="botcheck"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden
                />
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1 block text-[0.62rem] uppercase tracking-[0.22em] text-white/50"
                  >
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
                  <label
                    htmlFor="contact"
                    className="mb-1 block text-[0.62rem] uppercase tracking-[0.22em] text-white/50"
                  >
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
                  <label
                    htmlFor="term"
                    className="mb-1 block text-[0.62rem] uppercase tracking-[0.22em] text-white/50"
                  >
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
                  <label
                    htmlFor="message"
                    className="mb-1 block text-[0.62rem] uppercase tracking-[0.22em] text-white/50"
                  >
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

                {status === "error" && (
                  <p className="text-sm text-red-300">
                    Odeslání se nezdařilo. Zkuste to prosím znovu, nebo nám
                    napište přímo na{" "}
                    <a href={`mailto:${CONTACT_EMAIL}`} className="underline">
                      {CONTACT_EMAIL}
                    </a>
                    .
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full bg-white px-8 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-navy-900 transition-colors duration-300 hover:bg-navy-100 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "submitting" ? "Odesílám…" : "Odeslat poptávku"}
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
