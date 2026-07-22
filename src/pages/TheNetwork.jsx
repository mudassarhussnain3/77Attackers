import Hero from "../components/blocks/Hero.jsx";
import SectionLabel from "../components/blocks/SectionLabel.jsx";
import useScrollReveal from "../hooks/useScrollReveal.js";
import { COLORS, FONTS } from "../styles/tokens.js";
import { IMAGES } from "../data/media.js";
import { SERVICES_360 } from "../data/network.js";

export default function TheNetwork() {
  const revealRef = useScrollReveal();

  return (
    <div ref={revealRef}>
      <Hero
        variant="navy"
        minHeight="60vh"
        media={{ type: "photo", src: IMAGES.floodlightsNetworkHero }}
        scrim="linear-gradient(180deg, rgba(10,25,47,.78), rgba(10,25,47,.94))"
        label="International coverage, local expertise."
        heading={["The 77 Network"]}
      />

      <section style={{ padding: "clamp(56px,8vw,100px) clamp(20px,5vw,72px)" }}>
        <div data-reveal style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: "clamp(1.05rem, 1.8vw, 1.3rem)", lineHeight: 1.7, color: COLORS.charcoal, margin: 0 }}>
            77 Attackers forms part of a network which is the first Global Independent Network of Football Agents.
            We believe that together we are stronger – by pooling our forces we can provide new and better
            opportunities for our players.
          </p>
        </div>
      </section>

      <section style={{ padding: "0 clamp(20px,5vw,72px) clamp(64px,9vw,110px)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div data-reveal style={{ marginBottom: "2rem" }}>
            <SectionLabel style={{ color: "#64748b" }}>A 360º service</SectionLabel>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.6, color: "#475569", margin: "0.75rem 0 0", maxWidth: "640px" }}>
              The Group strives to provide a 360º service including:
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "0.875rem",
            }}
          >
            {SERVICES_360.map((name, i) => (
              <div
                key={name}
                data-reveal
                style={{
                  background: COLORS.white,
                  border: "1px solid rgba(10,25,47,.1)",
                  borderRadius: "8px",
                  padding: "1.4rem",
                }}
              >
                <span style={{ fontFamily: FONTS.mono, fontSize: "0.7rem", color: COLORS.navy, opacity: 0.5 }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p style={{ fontFamily: FONTS.body, fontWeight: 600, fontSize: "0.95rem", lineHeight: 1.4, margin: "0.6rem 0 0", color: COLORS.navy }}>
                  {name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
