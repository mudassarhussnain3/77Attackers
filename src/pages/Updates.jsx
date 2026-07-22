import Hero from "../components/blocks/Hero.jsx";
import SectionLabel from "../components/blocks/SectionLabel.jsx";
import LikeButton from "../components/blocks/LikeButton.jsx";
import LazyImage from "../components/common/LazyImage.jsx";
import useScrollReveal from "../hooks/useScrollReveal.js";
import { COLORS, FONTS } from "../styles/tokens.js";
import { IMAGES } from "../data/media.js";
import { ISSUES } from "../data/updates.js";

export default function Updates() {
  const revealRef = useScrollReveal();

  return (
    <div ref={revealRef}>
      <Hero
        variant="light"
        minHeight="55vh"
        media={{ type: "photo", src: IMAGES.updatesHero }}
        scrim="radial-gradient(ellipse 65% 60% at 50% 40%, rgba(244,246,249,.96) 0%, rgba(244,246,249,.86) 45%, rgba(244,246,249,.4) 75%, rgba(244,246,249,.12) 100%)"
        heading={["Subscribe and get the", "updates via email!"]}
      />

      <section style={{ padding: "0 clamp(20px,5vw,72px) clamp(70px,9vw,110px)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div data-reveal style={{ marginBottom: "1.5rem" }}>
            <SectionLabel style={{ color: "#64748b" }}>Newsletter archive</SectionLabel>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {ISSUES.map(({ n, imageKey }) => (
              <div
                key={n}
                data-reveal
                style={{
                  background: COLORS.white,
                  border: "1px solid rgba(10,25,47,.1)",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
              >
                <button
                  onClick={() => window.open("", "_blank")}
                  style={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: "3 / 4",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "1.4rem",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    overflow: "hidden",
                  }}
                >
                  <LazyImage
                    src={IMAGES[imageKey]}
                    alt=""
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(160deg, rgba(10,25,47,.75), rgba(19,42,74,.85))",
                    }}
                  />
                  <span style={{ position: "relative", fontFamily: FONTS.mono, fontSize: "0.7rem", letterSpacing: "2px", color: COLORS.gold, textTransform: "uppercase" }}>
                    77 Updates
                  </span>
                  <span style={{ position: "relative", fontFamily: FONTS.display, fontSize: "clamp(1.9rem, 4vw, 2.75rem)", color: COLORS.white, textTransform: "uppercase" }}>
                    Issue #{n}
                  </span>
                </button>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.9rem 1rem" }}>
                  <button
                    onClick={() => window.open("", "_blank")}
                    style={{
                      background: "none",
                      border: "1px solid rgba(10,25,47,.2)",
                      color: COLORS.navy,
                      cursor: "pointer",
                      fontFamily: FONTS.mono,
                      fontSize: "0.7rem",
                      letterSpacing: "0.5px",
                      padding: "0.5rem 0.85rem",
                      borderRadius: "999px",
                    }}
                  >
                    View / zoom
                  </button>
                  <LikeButton />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
