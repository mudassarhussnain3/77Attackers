import { Link } from "react-router-dom";
import { COLORS, FONTS, WHATSAPP_URL } from "../../styles/tokens.js";
import { FOOTER_EXPLORE_LINKS, FOOTER_MORE_LINKS } from "../../data/navItems.js";

const SOCIALS = [
  { label: "f", href: "https://facebook.com" },
  { label: "in", href: "https://linkedin.com" },
  { label: "▶", href: "https://youtube.com" },
  { label: "X", href: "https://x.com" },
];

function FooterLink({ item }) {
  const style = {
    color: "rgba(255,255,255,.7)",
    fontFamily: FONTS.body,
    fontSize: "0.95rem",
  };
  if (item.external) {
    return (
      <a href={item.path} target="_blank" rel="noopener noreferrer" style={style}>
        {item.label}
      </a>
    );
  }
  return (
    <Link to={item.path} style={style}>
      {item.label}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer style={{ background: COLORS.navy, color: COLORS.white }}>
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "4rem 1.5rem 2.5rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: "1.5rem",
          borderBottom: `1px solid rgba(212,175,55,.3)`,
        }}
      >
        <h2
          style={{
            fontFamily: FONTS.display,
            textTransform: "uppercase",
            fontSize: "clamp(1.8rem, 5vw, 3rem)",
            margin: 0,
          }}
        >
          Ready to move on together?
        </h2>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="footer-whatsapp-pill"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            background: COLORS.gold,
            color: COLORS.navy,
            fontFamily: FONTS.mono,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "1px",
            fontSize: "0.85rem",
            padding: "0.85rem 1.75rem",
            borderRadius: "999px",
            transition: "transform 0.2s",
          }}
        >
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: COLORS.navy,
              display: "inline-block",
            }}
          />
          WhatsApp · +356 9944 7444
        </a>
      </div>

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "3rem 1.5rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "2rem",
        }}
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
            <span
              style={{
                background: COLORS.gold,
                color: COLORS.navy,
                fontFamily: FONTS.mono,
                fontWeight: 700,
                width: "2rem",
                height: "2rem",
                borderRadius: "4px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.85rem",
              }}
            >
              77
            </span>
            <span style={{ fontFamily: FONTS.display, textTransform: "uppercase" }}>
              Attackers
            </span>
          </div>
          <p style={{ color: "rgba(255,255,255,.7)", fontSize: "0.9rem", lineHeight: 1.6 }}>
            We connect football players, football clubs and investors.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          <span style={{ fontFamily: FONTS.mono, color: COLORS.gold, fontSize: "0.75rem", letterSpacing: "2px", textTransform: "uppercase" }}>
            Explore
          </span>
          {FOOTER_EXPLORE_LINKS.map((item) => (
            <FooterLink key={item.number} item={item} />
          ))}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          <span style={{ fontFamily: FONTS.mono, color: COLORS.gold, fontSize: "0.75rem", letterSpacing: "2px", textTransform: "uppercase" }}>
            More
          </span>
          {FOOTER_MORE_LINKS.map((item) => (
            <FooterLink key={item.number} item={item} />
          ))}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          <span style={{ fontFamily: FONTS.mono, color: COLORS.gold, fontSize: "0.75rem", letterSpacing: "2px", textTransform: "uppercase" }}>
            Follow
          </span>
          <div style={{ display: "flex", gap: "0.75rem" }}>
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon"
                style={{
                  width: "2.4rem",
                  height: "2.4rem",
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: FONTS.mono,
                  fontSize: "0.8rem",
                  color: COLORS.white,
                }}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "1.5rem",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "0.5rem",
          fontFamily: FONTS.mono,
          fontSize: "0.75rem",
          letterSpacing: "1px",
          color: "rgba(255,255,255,.5)",
        }}
      >
        <span>Copyright 77 Ltd</span>
        <span>Malta, EU</span>
      </div>
    </footer>
  );
}
