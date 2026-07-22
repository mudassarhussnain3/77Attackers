import { Link } from "react-router-dom";
import { COLORS, FONTS } from "../../styles/tokens.js";
import SectionLabel from "./SectionLabel.jsx";

export default function NavyCTACard({ label, heading, body, cta, goldBorder = false }) {
  return (
    <div
      data-reveal
      style={{
        background: COLORS.navy,
        color: COLORS.white,
        borderRadius: "12px",
        border: goldBorder ? `1px solid ${COLORS.gold}` : "none",
        padding: "clamp(1.75rem, 4vw, 3rem)",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      {label && <SectionLabel>{label}</SectionLabel>}
      {heading && (
        <h3
          style={{
            fontFamily: FONTS.display,
            textTransform: "uppercase",
            fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
            lineHeight: 1.05,
            margin: 0,
          }}
        >
          {heading}
        </h3>
      )}
      {body && (
        <p style={{ fontSize: "1rem", lineHeight: 1.65, color: "#cbd5e1", margin: 0 }}>
          {body}
        </p>
      )}
      {cta &&
        (cta.href ? (
          <a
            href={cta.href}
            target={cta.href.startsWith("http") ? "_blank" : undefined}
            rel={cta.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="cta-pill"
            style={{
              alignSelf: "flex-start",
              marginTop: "0.5rem",
              background: COLORS.gold,
              color: COLORS.navy,
              borderRadius: "999px",
              padding: "0.85rem 1.5rem",
              fontFamily: FONTS.mono,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.5px",
              fontSize: "0.8rem",
            }}
          >
            {cta.label}
          </a>
        ) : (
          <Link
            to={cta.to}
            className="cta-pill"
            style={{
              alignSelf: "flex-start",
              marginTop: "0.5rem",
              background: COLORS.gold,
              color: COLORS.navy,
              borderRadius: "999px",
              padding: "0.85rem 1.5rem",
              fontFamily: FONTS.mono,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.5px",
              fontSize: "0.8rem",
            }}
          >
            {cta.label}
          </Link>
        ))}
    </div>
  );
}
