import { Link } from "react-router-dom";
import Hero from "../components/blocks/Hero.jsx";
import Marquee from "../components/blocks/Marquee.jsx";
import StatGrid from "../components/blocks/StatGrid.jsx";
import FlipCardGrid from "../components/blocks/FlipCardGrid.jsx";
import SectionLabel from "../components/blocks/SectionLabel.jsx";
import LazyVideo from "../components/common/LazyVideo.jsx";
import LazyImage from "../components/common/LazyImage.jsx";
import useScrollReveal from "../hooks/useScrollReveal.js";
import { requestOpenChat } from "../components/chatbot/chatEvents.js";
import { COLORS, FONTS } from "../styles/tokens.js";
import { VIDEOS, IMAGES } from "../data/media.js";
import { GALLERY, FACTS, AGENCY_CARDS } from "../data/home.js";

export default function Home() {
  const revealRef = useScrollReveal();

  return (
    <>
      <Hero
        variant="light"
        minHeight="100vh"
        media={{ type: "video", video: VIDEOS.heroMatch }}
        scrim="radial-gradient(ellipse 60% 55% at 50% 42%, rgba(244,246,249,.97) 0%, rgba(244,246,249,.9) 45%, rgba(244,246,249,.5) 70%, rgba(244,246,249,.18) 100%)"
        glow
        label="We connect football players, football clubs and investors."
        heading={[
          "Clubs &",
          "Attackers",
          [{ text: "Meet", gold: true }, { text: " here" }],
        ]}
        headingSize="clamp(2rem, 5vw, 3.8rem)"
        bodyDivider
        body="We help promising attackers connect to growing football clubs. A football agency specialised in sourcing attackers for football clubs and vice-versa. Presently we form part of a Group of football intermediaries based all over the world."
        cta={{ label: "Subscribe to get connected →", onClick: requestOpenChat }}
      />

      <Marquee items={["AUCTIONS", "SPONSORSHIP", "ATTACKERS", "CLUBS", "INVESTORS", "LOANS"]} />

      <div ref={revealRef}>
        {/* DRONE / GLOBAL REACH BREAK */}
        <section
          data-reveal
          style={{
            position: "relative",
            height: "min(78vh, 620px)",
            overflow: "hidden",
            margin: "clamp(24px,3vw,36px) clamp(20px,5vw,72px) 0",
            borderRadius: "14px",
          }}
        >
          <LazyVideo
            sources={VIDEOS.droneStadium.sources}
            poster={VIDEOS.droneStadium.poster}
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(10,25,47,.15) 0%, rgba(10,25,47,.2) 55%, rgba(10,25,47,.82) 100%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              padding: "clamp(28px,4vw,56px)",
              color: COLORS.white,
            }}
          >
            <SectionLabel>From the pitch to the boardroom</SectionLabel>
            <h2
              style={{
                fontFamily: FONTS.display,
                fontSize: "clamp(1.9rem, 5.5vw, 4.5rem)",
                lineHeight: 0.96,
                letterSpacing: "-0.5px",
                margin: 0,
                textTransform: "uppercase",
                maxWidth: "820px",
              }}
            >
              A global network,
              <br />
              watching every match
            </h2>
          </div>
        </section>

        {/* FACTS BAND */}
        <section style={{ padding: "clamp(48px,7vw,90px) clamp(20px,5vw,72px)" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <StatGrid cells={FACTS} />
          </div>
        </section>

        {/* MEDIA GALLERY */}
        <section style={{ padding: "clamp(40px,6vw,70px) clamp(20px,5vw,72px)" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div data-reveal style={{ marginBottom: "clamp(24px,3vw,36px)" }}>
              <SectionLabel style={{ color: "#64748b" }}>On the ground</SectionLabel>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "1.25rem",
              }}
            >
              {GALLERY.map((item) => (
                <div key={item.key} data-reveal style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                  <div
                    style={{
                      position: "relative",
                      aspectRatio: "4 / 5",
                      borderRadius: "10px",
                      overflow: "hidden",
                      border: "1px solid rgba(10,25,47,.1)",
                    }}
                  >
                    <LazyImage
                      src={IMAGES[item.key]}
                      alt={item.caption}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>
                  <span style={{ fontFamily: FONTS.mono, fontSize: "0.7rem", letterSpacing: "0.5px", color: "#64748b" }}>
                    {item.caption}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT WE DO */}
        <section style={{ padding: "clamp(24px,4vw,40px) clamp(20px,5vw,72px) clamp(60px,8vw,110px)" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div
              data-reveal
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                alignItems: "flex-end",
                gap: "1.25rem",
                marginBottom: "clamp(28px,4vw,48px)",
              }}
            >
              <h2
                style={{
                  fontFamily: FONTS.display,
                  fontSize: "clamp(1.9rem, 5vw, 3.6rem)",
                  lineHeight: 0.98,
                  letterSpacing: "-0.5px",
                  margin: 0,
                  textTransform: "uppercase",
                  maxWidth: "640px",
                  color: COLORS.navy,
                }}
              >
                A 360° football
                <br />
                agency &amp; brokerage
              </h2>
              <p
                style={{
                  fontFamily: FONTS.mono,
                  fontSize: "0.75rem",
                  letterSpacing: "1px",
                  color: "#64748b",
                  maxWidth: "300px",
                  textTransform: "uppercase",
                  lineHeight: 1.7,
                }}
              >
                Six ways we move clubs, attackers and investors forward.
              </p>
            </div>

            <FlipCardGrid cards={AGENCY_CARDS} />
          </div>
        </section>

        {/* FEATURED OPPORTUNITY */}
        <section style={{ padding: "0 clamp(20px,5vw,72px) clamp(60px,9vw,120px)" }}>
          <Link
            to="/the-77-auctions"
            data-reveal
            style={{
              display: "block",
              maxWidth: "1280px",
              margin: "0 auto",
              color: COLORS.white,
              textDecoration: "none",
            }}
          >
            <div
              style={{
                position: "relative",
                display: "grid",
                gridTemplateColumns: "1.25fr 1fr",
                borderRadius: "12px",
                overflow: "hidden",
                background: COLORS.navy,
              }}
            >
              <div
                style={{
                  padding: "clamp(28px,4vw,56px)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: "1.75rem",
                }}
              >
                <SectionLabel>Featured Opportunity — The 77 Auctions</SectionLabel>
                <h2
                  style={{
                    fontFamily: FONTS.display,
                    fontSize: "clamp(1.75rem, 3.6vw, 3.1rem)",
                    lineHeight: 1,
                    letterSpacing: "-0.3px",
                    margin: 0,
                    textTransform: "uppercase",
                  }}
                >
                  Front Of Jersey Space Opportunity
                </h2>
                <p style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)", lineHeight: 1.55, color: "#cbd5e1", margin: 0, maxWidth: "520px" }}>
                  Your chance to become the official sponsor of a Football Club in Brazil.
                </p>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    fontFamily: FONTS.mono,
                    fontWeight: 700,
                    fontSize: "0.8rem",
                    letterSpacing: "1px",
                    color: COLORS.gold,
                    textTransform: "uppercase",
                  }}
                >
                  View the auction →
                </span>
              </div>
              <div style={{ position: "relative", minHeight: "280px" }}>
                <LazyImage
                  src={IMAGES.brazilStadium}
                  alt="Football stadium in Brazil"
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: `linear-gradient(90deg, ${COLORS.navy}, transparent 45%)`,
                    pointerEvents: "none",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "20px",
                    right: "22px",
                    fontFamily: FONTS.display,
                    color: COLORS.gold,
                    fontSize: "clamp(1.9rem, 4vw, 3.6rem)",
                    letterSpacing: "1px",
                    pointerEvents: "none",
                  }}
                >
                  BRAZIL
                </div>
              </div>
            </div>
          </Link>
        </section>
      </div>
    </>
  );
}
