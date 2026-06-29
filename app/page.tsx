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

export default function Home() {
  return (
    <>
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
    </>
  );
}
