import { Link } from "react-router-dom";
import Hero from "../components/blocks/Hero.jsx";
import SectionLabel from "../components/blocks/SectionLabel.jsx";
import useScrollReveal from "../hooks/useScrollReveal.js";
import { COLORS, FONTS } from "../styles/tokens.js";
import { IMAGES } from "../data/media.js";

const AUCTION_BULLETS = [
  "Stadium naming rights",
  "Front-of-jersey rights (even single-match)",
  "Other high-visibility advertising opportunities",
];

export default function Advertising() {
  const revealRef = useScrollReveal();

  return (
    <div ref={revealRef}>
      <Hero
        variant="light"
        minHeight="55vh"
        media={{ type: "photo", src: IMAGES.floodlightsNetworkHero }}
        scrim="radial-gradient(ellipse 65% 60% at 50% 40%, rgba(244,246,249,.96) 0%, rgba(244,246,249,.86) 45%, rgba(244,246,249,.4) 75%, rgba(244,246,249,.12) 100%)"
        heading={["Advertising in Football"]}
      />

      <section style={{ padding: "0 clamp(20px,5vw,72px) clamp(56px,8vw,90px)" }}>
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "1rem",
          }}
        >
          <div
            data-reveal
            style={{
              background: COLORS.white,
              border: "1px solid rgba(10,25,47,.1)",
              borderRadius: "8px",
              padding: "clamp(1.6rem, 3vw, 2.25rem)",
            }}
          >
            <SectionLabel>For Advertisers</SectionLabel>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.65, color: "#334155", margin: "1rem 0 0" }}>
              Our Firm enjoys clients such as Clubs who would like to sell the naming rights of football stadiums,
              sell the space on the front of jerseys etc. Players and ex-Legends are also available to endorse
              products/services on adverts and on their high profile social media channels.
            </p>
          </div>
          <div
            data-reveal
            style={{
              background: COLORS.navy,
              color: COLORS.white,
              borderRadius: "8px",
              padding: "clamp(1.6rem, 3vw, 2.25rem)",
            }}
          >
            <SectionLabel>For Clubs, Players &amp; Ex-Legends</SectionLabel>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.65, color: "rgba(244,246,249,.85)", margin: "1rem 0 0" }}>
              If you are either the Head of the Commercial Department of a Club or a player/ex-Legend, and are
              looking for advertisers/sponsors, please do not hesitate to contact us. We may auction, at no reserve
              price:
            </p>
            <div style={{ display: "grid", gap: "0.6rem", marginTop: "1rem" }}>
              {AUCTION_BULLETS.map((b) => (
                <div key={b} style={{ display: "flex", gap: "0.6rem", fontSize: "0.9rem" }}>
                  <span style={{ color: COLORS.gold }}>✦</span>
                  {b}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "0 clamp(20px,5vw,72px) clamp(70px,9vw,110px)" }}>
        <Link
          to="/the-77-auctions"
          data-reveal
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1.25rem",
            maxWidth: "1100px",
            margin: "0 auto",
            background: COLORS.navy,
            color: COLORS.white,
            borderRadius: "12px",
            padding: "clamp(1.9rem, 4vw, 3.1rem)",
            textDecoration: "none",
          }}
        >
          <div>
            <SectionLabel>Featured — The 77 Auctions</SectionLabel>
            <h2
              style={{
                fontFamily: FONTS.display,
                fontSize: "clamp(1.4rem, 3vw, 2.25rem)",
                letterSpacing: "-0.3px",
                margin: "0.75rem 0 0",
                textTransform: "uppercase",
              }}
            >
              Front Of Jersey Space Opportunity
            </h2>
            <p style={{ fontSize: "0.95rem", color: "#cbd5e1", margin: "0.6rem 0 0" }}>
              Your chance to become the official sponsor of a Football Club in Brazil.
            </p>
          </div>
          <span
            style={{
              fontFamily: FONTS.mono,
              fontWeight: 700,
              fontSize: "0.8rem",
              letterSpacing: "1px",
              color: COLORS.gold,
              textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}
          >
            View the auction →
          </span>
        </Link>
      </section>
    </div>
  );
}
