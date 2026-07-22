import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { COLORS, FONTS } from "../../styles/tokens.js";

export default function Loader() {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    setVisible(true);
    setFading(false);
    const fadeTimer = setTimeout(() => setFading(true), 350);
    const hideTimer = setTimeout(() => setVisible(false), 650);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, [pathname]);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: COLORS.navy,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.5rem",
        opacity: fading ? 0 : 1,
        transition: "opacity 300ms ease",
        pointerEvents: fading ? "none" : "auto",
      }}
    >
      <span
        style={{
          fontFamily: FONTS.display,
          color: COLORS.gold,
          fontSize: "4rem",
          lineHeight: 1,
          textTransform: "uppercase",
        }}
      >
        77
      </span>
      <span
        style={{
          fontFamily: FONTS.mono,
          color: COLORS.white,
          fontSize: "0.85rem",
          letterSpacing: "3px",
          textTransform: "uppercase",
        }}
      >
        Attackers
      </span>
    </div>
  );
}
