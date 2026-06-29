import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Features from "@/components/Features";
import SplitSection from "@/components/SplitSection";
import Location from "@/components/Location";
import Possibilities from "@/components/Possibilities";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StickyCta from "@/components/StickyCta";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Jezdecký areál Vysoké Veselí",
  description:
    "Kompletní jezdecký areál ve Vysokém Veselí k pronájmu jako celek — 14 stájových boxů, venkovní jízdárna, výběhy, zázemí a ubytování.",
  url: "https://jezdeckyarealveseli.cz",
  telephone: "+420739630737",
  email: "info@jezdeckyarealveseli.cz",
  image: "https://jezdeckyarealveseli.cz/opengraph-image.jpg",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Vysoké Veselí",
    postalCode: "507 03",
    addressRegion: "Královéhradecký kraj",
    addressCountry: "CZ",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 50.3117,
    longitude: 15.4036,
  },
  areaServed: "Český ráj",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Features />

        <SplitSection
          id="ustajeni"
          index="03"
          eyebrow="Ustájení"
          title="14 boxů připravených pro vaše koně"
          imageSrc="/images/stable.jpg"
          imageAlt="Interiér stáje — prostorná ulička s boxy"
        >
          <p>
            Areál nabízí celkem <strong>14 stájových boxů</strong> — 12 vnitřních
            a 2 venkovní. Stáje jsou navržené pro pohodlnou každodenní péči i
            bezpečné ustájení koní po celý rok.
          </p>
          <p>
            K dispozici je seník a slamník (stany) pro uskladnění sena a slámy,
            takže máte zásoby vždy po ruce.
          </p>
        </SplitSection>

        <SplitSection
          id="ubytovani"
          index="04"
          eyebrow="Ubytování"
          title="Bydlení přímo v areálu"
          imageSrc="/images/house.jpg"
          imageAlt="Dům s ubytováním v areálu"
          reverse
          dark
        >
          <p>
            Součástí areálu je dům s možností ubytování — buď jako celek, nebo jako{" "}
            <strong>2 samostatné byty</strong>. Provozovatel tak může bydlet přímo na
            místě, případně nabídnout ubytování dalším.
          </p>
          <p>
            Areál navíc nabízí prostor pro rozšíření ubytovacích kapacit do budoucna.
          </p>
        </SplitSection>

        <Location />
        <Possibilities />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
