import Hero from "../components/blocks/Hero.jsx";
import SectionLabel from "../components/blocks/SectionLabel.jsx";
import useScrollReveal from "../hooks/useScrollReveal.js";
import { IMAGES } from "../data/media.js";

export default function Investors() {
  const revealRef = useScrollReveal();

  return (
    <div ref={revealRef}>
      <Hero
        variant="navy"
        minHeight="55vh"
        media={{ type: "photo", src: IMAGES.brazilStadium }}
        scrim="linear-gradient(180deg, rgba(10,25,47,.78), rgba(10,25,47,.94))"
        label="International coverage, local expertise."
        heading={["Investors"]}
      />

      <section style={{ padding: "clamp(56px,8vw,100px) clamp(20px,5vw,72px)" }}>
        <div data-reveal style={{ maxWidth: "780px", margin: "0 auto" }}>
          <SectionLabel style={{ color: "#64748b" }}>About our investment opportunities</SectionLabel>
          <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "#334155", margin: "1.1rem 0 0" }}>
            77 Attackers enjoys signed mandates from various football clubs worldwide which are either for sale or
            which require business partners to invest in or sponsor their club.
          </p>
          <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "#334155", margin: "1rem 0 0" }}>
            Sponsorships in various forms such as naming rights of their stadium, front of jersey sponsorships,
            endorsements made by their players etc.
          </p>
        </div>
      </section>
    </div>
  );
}
