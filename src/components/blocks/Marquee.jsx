import { useRef } from "react";
import gsap from "gsap";
import useGsapContext from "../../hooks/useGsapContext.js";
import { COLORS, FONTS } from "../../styles/tokens.js";

function MarqueeContent({ items }) {
  return (
    <span>
      {items.map((item, i) => (
        <span key={i}>
          {item}
          &nbsp;<span style={{ color: COLORS.gold }}>✦</span>&nbsp;
        </span>
      ))}
    </span>
  );
}

export default function Marquee({ items }) {
  const scopeRef = useRef(null);

  useGsapContext(() => {
    gsap.to(".js-marq", { xPercent: -50, duration: 22, ease: "none", repeat: -1 });
  }, scopeRef);

  return (
    <div
      ref={scopeRef}
      style={{
        borderTop: "1px solid rgba(212,175,55,.18)",
        borderBottom: "1px solid rgba(212,175,55,.18)",
        padding: "0.95rem 0",
        overflow: "hidden",
        whiteSpace: "nowrap",
        background: COLORS.navy,
        color: COLORS.white,
      }}
    >
      <div
        className="js-marq"
        style={{
          display: "inline-flex",
          fontFamily: FONTS.display,
          fontSize: "clamp(1.25rem, 3vw, 1.9rem)",
          textTransform: "uppercase",
          letterSpacing: "1px",
        }}
      >
        <MarqueeContent items={items} />
        <MarqueeContent items={items} />
      </div>
    </div>
  );
}
