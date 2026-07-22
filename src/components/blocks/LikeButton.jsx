import { useState } from "react";
import { COLORS, FONTS } from "../../styles/tokens.js";

export default function LikeButton({ initialCount = 0, dark = false }) {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(initialCount);

  return (
    <button
      onClick={() => {
        setLiked((v) => !v);
        setCount((c) => (liked ? c - 1 : c + 1));
      }}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.4rem",
        background: "none",
        border: "none",
        padding: 0,
        color: liked ? COLORS.gold : dark ? "rgba(255,255,255,.65)" : "#64748b",
        fontFamily: FONTS.mono,
        fontSize: "0.8rem",
        cursor: "pointer",
      }}
    >
      <span>♥</span>
      {count}
    </button>
  );
}
