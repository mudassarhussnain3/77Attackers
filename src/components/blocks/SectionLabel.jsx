import { COLORS, FONTS } from "../../styles/tokens.js";

export default function SectionLabel({ children, style }) {
  return (
    <span
      style={{
        display: "inline-block",
        fontFamily: FONTS.mono,
        textTransform: "uppercase",
        letterSpacing: "2px",
        fontSize: "0.8rem",
        color: COLORS.gold,
        marginBottom: "0.75rem",
        ...style,
      }}
    >
      {children}
    </span>
  );
}
