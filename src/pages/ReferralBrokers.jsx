import Hero from "../components/blocks/Hero.jsx";
import SectionLabel from "../components/blocks/SectionLabel.jsx";
import NavyCTACard from "../components/blocks/NavyCTACard.jsx";
import useScrollReveal from "../hooks/useScrollReveal.js";
import { COLORS } from "../styles/tokens.js";
import { IMAGES } from "../data/media.js";
import { COOPERATION_GROUPS } from "../data/referralBrokers.js";

export default function ReferralBrokers() {
  const revealRef = useScrollReveal();

  return (
    <div ref={revealRef}>
      <Hero
        variant="light"
        minHeight="55vh"
        media={{ type: "photo", src: IMAGES.referralBrokersHero }}
        scrim="radial-gradient(ellipse 65% 60% at 50% 40%, rgba(244,246,249,.96) 0%, rgba(244,246,249,.86) 45%, rgba(244,246,249,.4) 75%, rgba(244,246,249,.12) 100%)"
        heading={["Referral Brokers, Scouts &", "Football Intermediaries"]}
        body="Our Firm looks forward to co-operating with third parties."
      />

      <section style={{ padding: "0 clamp(20px,5vw,72px) clamp(48px,6vw,70px)" }}>
        <div data-reveal style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <SectionLabel style={{ color: "#64748b" }}>About this co-operation</SectionLabel>
          <p style={{ fontSize: "0.95rem", lineHeight: 1.65, color: "#334155", margin: "1rem 0 0" }}>
            Usually we deal directly with football clubs, players and Coaches ("Managers"). Therefore, feel free to
            create WhatsApp group chats on 0035699447444 with:
          </p>
        </div>
      </section>

      <section style={{ padding: "0 clamp(20px,5vw,72px) clamp(56px,8vw,90px)" }}>
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1rem",
          }}
        >
          {COOPERATION_GROUPS.map((text, i) => (
            <div
              key={i}
              data-reveal
              style={{
                background: COLORS.white,
                border: "1px solid rgba(10,25,47,.1)",
                borderRadius: "8px",
                padding: "1.5rem",
              }}
            >
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.7rem", color: COLORS.gold }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <p style={{ fontSize: "0.9rem", lineHeight: 1.6, color: "#334155", margin: "0.6rem 0 0" }}>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "0 clamp(20px,5vw,72px) clamp(70px,9vw,110px)" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
          <NavyCTACard
            label="Referral commission"
            body='In return, we pay pre-agreed written "referral commissions" ranging from 10% to 30% of our commission/s.'
          />
        </div>
      </section>
    </div>
  );
}
