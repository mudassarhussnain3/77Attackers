import { COLORS, FONTS } from "../../styles/tokens.js";

export default function NumberedList({ items, dark = false }) {
  return (
    <ol
      data-reveal
      style={{
        listStyle: "none",
        margin: 0,
        padding: 0,
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      {items.map((item, i) => (
        <li
          key={i}
          style={{
            display: "flex",
            gap: "1rem",
            alignItems: "baseline",
            paddingBottom: "1rem",
            borderBottom: `1px solid ${dark ? "rgba(255,255,255,.12)" : "rgba(10,25,47,.1)"}`,
          }}
        >
          <span
            style={{
              fontFamily: FONTS.mono,
              fontSize: "0.85rem",
              color: COLORS.gold,
              minWidth: "1.75rem",
            }}
          >
            {String(i + 1).padStart(2, "0")}
          </span>
          <span
            style={{
              fontFamily: FONTS.body,
              fontSize: "1rem",
              lineHeight: 1.6,
              color: dark ? "#cbd5e1" : COLORS.charcoal,
            }}
          >
            {item}
          </span>
        </li>
      ))}
    </ol>
  );
}
