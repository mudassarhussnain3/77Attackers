import Hero from "../components/blocks/Hero.jsx";
import ContactForm from "../components/blocks/ContactForm.jsx";
import useScrollReveal from "../hooks/useScrollReveal.js";
import { COLORS, FONTS } from "../styles/tokens.js";
import { IMAGES } from "../data/media.js";
import { INVESTMENT_POINTS } from "../data/clubsForSale.js";

export default function ClubsForSale() {
  const revealRef = useScrollReveal();

  return (
    <div ref={revealRef}>
      <Hero
        variant="navy"
        minHeight="55vh"
        media={{ type: "photo", src: IMAGES.brazilStadium }}
        scrim="linear-gradient(180deg, rgba(10,25,47,.78), rgba(10,25,47,.94))"
        label="Exclusive investment opportunities"
        heading={["Football Clubs for Sale"]}
        cta={{ label: "Get access to investment opportunities in Football Clubs →", href: "#invest-form" }}
      />

      <section style={{ padding: "clamp(56px,8vw,100px) clamp(20px,5vw,72px)" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1rem",
          }}
        >
          {INVESTMENT_POINTS.map((text, i) => (
            <div
              key={i}
              data-reveal
              style={{
                background: COLORS.white,
                border: "1px solid rgba(10,25,47,.1)",
                borderRadius: "8px",
                padding: "1.6rem",
              }}
            >
              <span style={{ fontFamily: FONTS.mono, fontSize: "0.75rem", color: COLORS.gold }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.55, color: "#334155", margin: "0.75rem 0 0" }}>
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="invest-form" style={{ padding: "0 clamp(20px,5vw,72px) clamp(70px,9vw,110px)", scrollMarginTop: "5rem" }}>
        <div style={{ maxWidth: "640px", margin: "0 auto" }}>
          <div data-reveal>
            <h2
              style={{
                fontFamily: FONTS.display,
                fontSize: "clamp(1.4rem, 2.6vw, 1.9rem)",
                letterSpacing: "-0.2px",
                margin: "0 0 0.5rem",
                textTransform: "uppercase",
                color: COLORS.navy,
              }}
            >
              Register your interest
            </h2>
            <p style={{ fontSize: "0.9rem", color: "#64748b", margin: "0 0 1.5rem" }}>
              Tell us about your investment interest — we'll follow up directly.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
