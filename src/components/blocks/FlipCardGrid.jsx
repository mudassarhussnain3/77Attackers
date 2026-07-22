import { useState } from "react";
import { Link } from "react-router-dom";
import { COLORS, FONTS } from "../../styles/tokens.js";

export default function FlipCardGrid({ cards }) {
  const [flipped, setFlipped] = useState(null);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: "1rem",
      }}
    >
      {cards.map((card, i) => {
        const isExternal = card.href?.startsWith("http");
        const Wrapper = isExternal ? "a" : Link;
        const wrapperProps = isExternal
          ? { href: card.href, target: "_blank", rel: "noopener noreferrer" }
          : { to: card.href };

        return (
          <Wrapper
            key={card.num}
            data-reveal
            {...wrapperProps}
            onMouseEnter={() => setFlipped(i)}
            onMouseLeave={() => setFlipped(null)}
            style={{
              display: "block",
              minHeight: "230px",
              perspective: "1200px",
              color: COLORS.charcoal,
              textDecoration: "none",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "230px",
                transition: "transform 0.55s cubic-bezier(.2,.8,.2,1)",
                transformStyle: "preserve-3d",
                transform: flipped === i ? "rotateY(180deg)" : "none",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: "1.5rem",
                  background: COLORS.white,
                  border: "1px solid rgba(10,25,47,.1)",
                  borderRadius: "8px",
                  backfaceVisibility: "hidden",
                }}
              >
                <span style={{ fontFamily: FONTS.mono, fontSize: "0.75rem", color: COLORS.navy }}>
                  {card.num}
                </span>
                <h3
                  style={{
                    fontFamily: FONTS.display,
                    fontSize: "clamp(1.35rem, 2.4vw, 1.8rem)",
                    lineHeight: 1.02,
                    letterSpacing: "0.3px",
                    margin: 0,
                    textTransform: "uppercase",
                    color: COLORS.navy,
                  }}
                >
                  {card.title}
                </h3>
              </div>

              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: "1.5rem",
                  background: COLORS.navy,
                  border: `1px solid ${COLORS.gold}`,
                  borderRadius: "8px",
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <span style={{ fontFamily: FONTS.mono, fontSize: "0.75rem", color: COLORS.gold }}>
                    {card.num}
                  </span>
                  <span style={{ fontSize: "1.1rem", color: COLORS.gold }}>↗</span>
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: FONTS.display,
                      fontSize: "clamp(1.25rem, 2.1vw, 1.55rem)",
                      lineHeight: 1.02,
                      letterSpacing: "0.3px",
                      margin: "0 0 0.6rem",
                      textTransform: "uppercase",
                      color: COLORS.white,
                    }}
                  >
                    {card.title}
                  </h3>
                  <p style={{ fontSize: "0.9rem", lineHeight: 1.55, color: "#cbd5e1", margin: 0 }}>
                    {card.desc}
                  </p>
                </div>
              </div>
            </div>
          </Wrapper>
        );
      })}
    </div>
  );
}
