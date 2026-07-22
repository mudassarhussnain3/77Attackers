import { useState } from "react";
import { Link } from "react-router-dom";
import { COLORS, FONTS } from "../../styles/tokens.js";
import IndexNav from "./IndexNav.jsx";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div onMouseLeave={() => setOpen(false)}>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 950,
          height: "4.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 1.5rem",
          background: "rgba(10,25,47,.9)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: `1px solid ${COLORS.gold}`,
        }}
      >
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.6rem",
            textDecoration: "none",
          }}
        >
          <span
            style={{
              background: COLORS.gold,
              color: COLORS.navy,
              fontFamily: FONTS.mono,
              fontWeight: 700,
              width: "2.1rem",
              height: "2.1rem",
              borderRadius: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "0.9rem",
            }}
          >
            77
          </span>
          <span
            style={{
              fontFamily: FONTS.display,
              color: COLORS.white,
              textTransform: "uppercase",
              fontSize: "1.15rem",
              letterSpacing: "1px",
            }}
          >
            Attackers
          </span>
        </Link>

        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <button
            onMouseEnter={() => setOpen(true)}
            aria-expanded={open}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
              background: COLORS.gold,
              border: "none",
              borderRadius: "999px",
              padding: "0.55rem 1.2rem",
              fontFamily: FONTS.mono,
              fontSize: "0.75rem",
              letterSpacing: "1px",
              textTransform: "uppercase",
              color: COLORS.navy,
            }}
          >
            Index
            <span style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
              <span style={{ width: "16px", height: "2px", background: COLORS.navy }} />
              <span style={{ width: "16px", height: "2px", background: COLORS.navy }} />
              <span style={{ width: "16px", height: "2px", background: COLORS.navy }} />
            </span>
          </button>
        </div>
      </header>

      <IndexNav open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
