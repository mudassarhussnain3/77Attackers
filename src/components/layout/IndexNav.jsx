import { Link } from "react-router-dom";
import { COLORS, FONTS, WHATSAPP_URL } from "../../styles/tokens.js";
import { NAV_ITEMS } from "../../data/navItems.js";

const SOCIALS = ["Facebook", "LinkedIn", "YouTube", "X"];

export default function IndexNav({ open, onClose }) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 900,
        background: "rgba(244,246,249,.62)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        opacity: open ? 1 : 0,
        visibility: open ? "visible" : "hidden",
        transform: open ? "translateY(0)" : "translateY(-24px)",
        transition: "opacity 0.35s ease, transform 0.45s cubic-bezier(.2,.8,.2,1)",
        display: "flex",
        flexDirection: "column",
        overflowY: "auto",
        padding: "4.75rem clamp(20px,5vw,72px) 2.25rem",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "clamp(24px,4vw,52px)",
        }}
      >
        <span
          style={{
            fontFamily: FONTS.mono,
            fontSize: "0.75rem",
            letterSpacing: "2px",
            color: "#64748b",
            textTransform: "uppercase",
          }}
        >
          Site Index — 77 Attackers
        </span>
        <button
          onClick={onClose}
          style={{
            background: "none",
            border: `1px solid rgba(10,25,47,.2)`,
            color: COLORS.navy,
            cursor: "pointer",
            fontFamily: FONTS.mono,
            fontSize: "0.75rem",
            letterSpacing: "1px",
            padding: "0.55rem 1rem",
            borderRadius: "999px",
            textTransform: "uppercase",
          }}
        >
          Close ✕
        </button>
      </div>

      <nav
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          borderTop: "1px solid rgba(10,25,47,.1)",
        }}
      >
        {NAV_ITEMS.map((item) => {
          const inner = (
            <span
              className="index-nav-row"
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: "1rem",
                padding: "1rem 0.5rem",
                borderBottom: "1px solid rgba(10,25,47,.1)",
                transition: "background 0.1s, padding 0.1s",
              }}
            >
              <span
                style={{
                  fontFamily: FONTS.mono,
                  fontSize: "0.75rem",
                  color: COLORS.navy,
                  minWidth: "1.6rem",
                }}
              >
                {item.number}
              </span>
              <span
                style={{
                  fontFamily: FONTS.display,
                  textTransform: "uppercase",
                  fontSize: "clamp(20px, 2.4vw, 27px)",
                  letterSpacing: "0.5px",
                  lineHeight: 1.05,
                  color: COLORS.navy,
                }}
              >
                {item.label}
              </span>
              <span style={{ marginLeft: "auto", fontSize: "0.95rem" }}>
                {item.external ? "↗" : "→"}
              </span>
            </span>
          );

          return item.external ? (
            <a
              key={item.number}
              href={item.path}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              {inner}
            </a>
          ) : (
            <Link
              key={item.number}
              to={item.path}
              onClick={onClose}
              style={{ textDecoration: "none" }}
            >
              {inner}
            </Link>
          );
        })}
      </nav>

      <div
        style={{
          marginTop: "auto",
          paddingTop: "2.25rem",
          display: "flex",
          flexWrap: "wrap",
          gap: "1.4rem",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: FONTS.mono,
            fontSize: "0.8rem",
            color: COLORS.navy,
          }}
        >
          WhatsApp · +356 9944 7444
        </a>
        <div
          style={{
            display: "flex",
            gap: "1.25rem",
            fontFamily: FONTS.mono,
            fontSize: "0.75rem",
            letterSpacing: "1px",
            textTransform: "uppercase",
          }}
        >
          {SOCIALS.map((s) => (
            <a key={s} href="#" style={{ color: "#64748b" }}>
              {s}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
