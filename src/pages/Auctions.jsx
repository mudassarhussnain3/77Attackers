import Hero from "../components/blocks/Hero.jsx";
import SectionLabel from "../components/blocks/SectionLabel.jsx";
import StatGrid from "../components/blocks/StatGrid.jsx";
import NavyCTACard from "../components/blocks/NavyCTACard.jsx";
import WhatsAppLink from "../components/common/WhatsAppLink.jsx";
import useScrollReveal from "../hooks/useScrollReveal.js";
import { COLORS, FONTS } from "../styles/tokens.js";
import { IMAGES } from "../data/media.js";
import { AUDIENCE_STATS, CLUB_LINKS } from "../data/auctions.js";

export default function Auctions() {
  const revealRef = useScrollReveal();

  return (
    <div ref={revealRef}>
      <Hero
        variant="navy"
        minHeight="55vh"
        media={{ type: "photo", src: IMAGES.brazilStadium }}
        scrim="linear-gradient(180deg, rgba(10,25,47,.78), rgba(10,25,47,.94))"
        label="Exclusive promotional opportunities"
        heading={["The 77 Auctions"]}
      />

      {/* CASE STUDY */}
      <section style={{ padding: "clamp(48px,7vw,80px) clamp(20px,5vw,72px) 0" }}>
        <div data-reveal style={{ maxWidth: "1100px", margin: "0 auto", textAlign: "center" }}>
          <SectionLabel style={{ color: "#64748b" }}>Case study — how our auctions work</SectionLabel>
          <h2
            style={{
              fontFamily: FONTS.display,
              fontSize: "clamp(1.5rem, 3.6vw, 2.75rem)",
              letterSpacing: "-0.3px",
              margin: "1rem 0 0",
              textTransform: "uppercase",
              color: COLORS.navy,
              lineHeight: 1.1,
            }}
          >
            Reach this audience in Brazil
            <br />
            with a Front Of Jersey Space
          </h2>
          <p style={{ fontSize: "0.95rem", lineHeight: 1.65, color: "#475569", margin: "1.25rem auto 0", maxWidth: "720px" }}>
            Sold to the highest bidder via auction at no reserve price. Bids were accepted until 5th April 2022 at
            12pm CET, though the football club could opt to close a deal with any bidder prior to the deadline —
            illustrating how a 77 Auctions listing runs in practice.
          </p>
        </div>
      </section>

      {/* AUDIENCE DETAILS */}
      <section style={{ padding: "clamp(40px,6vw,60px) clamp(20px,5vw,72px) 0" }}>
        <div data-reveal style={{ maxWidth: "1200px", margin: "0 auto 1.25rem" }}>
          <SectionLabel style={{ color: "#64748b" }}>Audience Details</SectionLabel>
        </div>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <StatGrid cells={AUDIENCE_STATS} gridClassName="audience-stats-grid" />
        </div>
      </section>

      {/* CLUB LINKS + BUYER'S PREMIUM */}
      <section style={{ padding: "clamp(40px,6vw,60px) clamp(20px,5vw,72px)" }}>
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1rem",
          }}
        >
          <div
            data-reveal
            style={{
              background: COLORS.white,
              border: "1px solid rgba(10,25,47,.1)",
              borderRadius: "8px",
              padding: "1.6rem",
            }}
          >
            <SectionLabel>Club links</SectionLabel>
            <div style={{ display: "grid", gap: "0.85rem", marginTop: "0.85rem", fontSize: "0.9rem" }}>
              {CLUB_LINKS.map((link) => (
                <div key={link.label}>
                  <span
                    style={{
                      display: "block",
                      fontFamily: FONTS.mono,
                      fontSize: "0.65rem",
                      color: "#64748b",
                      textTransform: "uppercase",
                      marginBottom: "0.15rem",
                    }}
                  >
                    {link.label}
                  </span>
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.text}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <NavyCTACard
            label="Buyer's premium"
            body="12% of the bid, plus 18% Value Added Tax. If the highest bidder has two or more bids, no premium is charged on the opening bid — only on the difference between the opening bid and the highest bid. So it's in everyone's interest that the opening bid is as high as possible."
          />
        </div>
      </section>

      {/* MARKETING AGENCIES + CONTACT */}
      <section style={{ padding: "0 clamp(20px,5vw,72px) clamp(70px,9vw,110px)" }}>
        <div style={{ maxWidth: "820px", margin: "0 auto", display: "grid", gap: "1rem" }}>
          <div data-reveal style={{ textAlign: "center" }}>
            <SectionLabel style={{ color: "#64748b" }}>Marketing Agencies</SectionLabel>
            <p style={{ fontSize: "0.9rem", color: "#475569", margin: "0.5rem 0 0" }}>
              Marketing Agencies are welcome to contact us.
            </p>
          </div>
          <div data-reveal style={{ textAlign: "center" }}>
            <SectionLabel style={{ color: "#64748b" }}>Contact Info</SectionLabel>
            <p style={{ fontFamily: FONTS.mono, fontSize: "0.9rem", color: COLORS.navy, margin: "0.5rem 0 0" }}>
              For further information, kindly contact Dr Carl Peralta on WhatsApp:{" "}
              <WhatsAppLink>(00356) 9944 7444</WhatsAppLink>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
