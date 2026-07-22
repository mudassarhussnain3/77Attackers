import Hero from "../components/blocks/Hero.jsx";
import NumberedList from "../components/blocks/NumberedList.jsx";
import useScrollReveal from "../hooks/useScrollReveal.js";
import { IMAGES } from "../data/media.js";
import { FRANCHISE_ITEMS } from "../data/franchise.js";

export default function Franchise() {
  const revealRef = useScrollReveal();

  return (
    <div ref={revealRef}>
      <Hero
        variant="light"
        minHeight="55vh"
        media={{ type: "photo", src: IMAGES.franchiseHero }}
        scrim="radial-gradient(ellipse 65% 60% at 50% 40%, rgba(244,246,249,.96) 0%, rgba(244,246,249,.86) 45%, rgba(244,246,249,.4) 75%, rgba(244,246,249,.12) 100%)"
        heading={["Franchise Opportunity"]}
        body="'77 Attackers' franchise opportunities are available in order to provide the franchisee access to:"
      />

      <section style={{ padding: "0 clamp(20px,5vw,72px) clamp(70px,9vw,110px)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <NumberedList items={FRANCHISE_ITEMS} />
        </div>
      </section>
    </div>
  );
}
