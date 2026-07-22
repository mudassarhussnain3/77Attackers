import { useRef } from "react";
import { COLORS, FONTS } from "../../styles/tokens.js";
import useCountUp from "../../hooks/useCountUp.js";

function StatValue({ cell, color, valueSize }) {
  const ref = useRef(null);
  useCountUp(ref, cell.countTo ?? null, { prefix: cell.prefix, suffix: cell.suffix, decimals: cell.decimals ?? 0 });

  return (
    <div
      ref={ref}
      style={{
        fontFamily: FONTS.display,
        fontSize: valueSize,
        lineHeight: 1,
        color,
      }}
    >
      {cell.countTo != null ? `${cell.prefix || ""}${(0).toFixed(cell.decimals ?? 0)}${cell.suffix || ""}` : cell.value}
    </div>
  );
}

export default function StatGrid({ cells, minWidth = "200px", valueSize = "clamp(2rem, 5vw, 3.5rem)", gridClassName }) {
  return (
    <div
      className={gridClassName}
      style={{
        display: "grid",
        ...(gridClassName ? {} : { gridTemplateColumns: `repeat(auto-fit, minmax(${minWidth}, 1fr))` }),
        gap: "1px",
        background: "rgba(10,25,47,.1)",
        border: "1px solid rgba(10,25,47,.1)",
      }}
    >
      {cells.map((cell, i) => (
        <div
          key={i}
          data-reveal
          style={{
            background: cell.accent ? COLORS.navy : COLORS.platinum,
            padding: "clamp(1.5rem, 3vw, 2.5rem)",
          }}
        >
          <StatValue cell={cell} color={cell.accent ? COLORS.gold : COLORS.navy} valueSize={valueSize} />
          <div
            style={{
              fontFamily: FONTS.mono,
              fontSize: "0.75rem",
              letterSpacing: "1px",
              textTransform: "uppercase",
              color: cell.accent ? "rgba(255,255,255,.65)" : "#64748b",
              marginTop: "0.6rem",
            }}
          >
            {cell.label}
          </div>
        </div>
      ))}
    </div>
  );
}
