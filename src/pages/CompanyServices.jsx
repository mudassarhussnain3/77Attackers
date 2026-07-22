import Hero from "../components/blocks/Hero.jsx";
import SectionLabel from "../components/blocks/SectionLabel.jsx";
import NumberedList from "../components/blocks/NumberedList.jsx";
import useScrollReveal from "../hooks/useScrollReveal.js";
import { COLORS, FONTS } from "../styles/tokens.js";
import { IMAGES } from "../data/media.js";
import { OUR_STORY, MISSION, ATTACKER_SERVICES } from "../data/companyServices.js";

export default function CompanyServices() {
  const revealRef = useScrollReveal();

  return (
    <div ref={revealRef}>
      <Hero
        variant="light"
        minHeight="60vh"
        media={{ type: "photo", src: IMAGES.stadiumTunnel }}
        scrim="radial-gradient(ellipse 65% 60% at 50% 40%, rgba(244,246,249,.96) 0%, rgba(244,246,249,.86) 45%, rgba(244,246,249,.4) 75%, rgba(244,246,249,.12) 100%)"
        heading={["We help football clubs and", "attackers move on together"]}
        body="A football agency specializing in sourcing attackers for football clubs and vice-versa. Presently we enjoy exclusive representatives in several countries."
      />

      {/* OUR STORY */}
      <section style={{ padding: "clamp(40px,6vw,64px) clamp(20px,5vw,72px)", background: COLORS.navy, color: COLORS.white }}>
        <div data-reveal style={{ maxWidth: "820px", margin: "0 auto" }}>
          <SectionLabel>Our story</SectionLabel>
          <p style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)", lineHeight: 1.75, color: "rgba(244,246,249,.88)", margin: "1.1rem 0 0" }}>
            {OUR_STORY}
          </p>
        </div>
      </section>

      {/* MISSION */}
      <section style={{ padding: "clamp(48px,7vw,80px) clamp(20px,5vw,72px)" }}>
        <div
          data-reveal
          style={{
            maxWidth: "820px",
            margin: "0 auto",
            textAlign: "center",
            padding: "clamp(1.75rem, 4vw, 2.75rem)",
            border: "1px solid rgba(212,175,55,.4)",
            borderRadius: "8px",
            background: COLORS.white,
          }}
        >
          <SectionLabel>Our mission</SectionLabel>
          <p
            style={{
              fontFamily: FONTS.display,
              fontSize: "clamp(1.25rem, 2.6vw, 1.9rem)",
              lineHeight: 1.3,
              letterSpacing: "-0.2px",
              margin: "0.9rem 0 0",
              color: COLORS.navy,
              textTransform: "none",
            }}
          >
            {MISSION}
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "0 clamp(20px,5vw,72px) clamp(64px,9vw,110px)" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr",
            gap: "2.5rem",
          }}
        >
          <div>
            <div data-reveal style={{ marginBottom: "1.1rem" }}>
              <SectionLabel style={{ color: "#64748b" }}>Services for attackers</SectionLabel>
            </div>
            <NumberedList items={ATTACKER_SERVICES} />
          </div>
          <div>
            <div data-reveal style={{ marginBottom: "1.1rem" }}>
              <SectionLabel style={{ color: "#64748b" }}>Services for clubs</SectionLabel>
            </div>
            <div
              data-reveal
              style={{
                background: COLORS.navy,
                color: COLORS.white,
                borderRadius: "8px",
                padding: "1.5rem",
              }}
            >
              <span style={{ fontFamily: FONTS.mono, fontSize: "0.75rem", color: COLORS.gold }}>01</span>
              <p style={{ fontSize: "0.95rem", fontWeight: 500, margin: "0.6rem 0 0" }}>Source suitable Attackers</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
