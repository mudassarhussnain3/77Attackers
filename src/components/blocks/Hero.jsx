import { useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import useGsapContext from "../../hooks/useGsapContext.js";
import { COLORS, FONTS } from "../../styles/tokens.js";
import LazyVideo from "../common/LazyVideo.jsx";
import LazyImage from "../common/LazyImage.jsx";

const CTA_STYLE = {
  marginTop: "0.5rem",
  display: "inline-flex",
  alignItems: "center",
  gap: "0.6rem",
  background: COLORS.navy,
  color: COLORS.white,
  border: "none",
  borderRadius: "999px",
  padding: "0.9rem 1.75rem",
  fontFamily: FONTS.mono,
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: "0.5px",
  fontSize: "0.85rem",
  whiteSpace: "nowrap",
  transition: "transform 0.2s, background 0.2s, color 0.2s",
};

export default function Hero({
  variant = "navy",
  minHeight = "80vh",
  media,
  scrim,
  label,
  heading = [],
  body,
  cta,
  align = "center",
  glow = false,
  bodyDivider = false,
  headingSize = "clamp(2.4rem, 6vw, 5rem)",
  headingLineHeight = 1.05,
  headingLetterSpacing = "-0.5px",
}) {
  const scopeRef = useRef(null);

  useGsapContext(() => {
    gsap.fromTo(
      ".hero-line-inner",
      { yPercent: 110 },
      { yPercent: 0, duration: 0.9, stagger: 0.1, ease: "expo.out", delay: 0.2 }
    );
  }, scopeRef);

  const isDarkText = variant === "navy";

  return (
    <section
      ref={scopeRef}
      style={{
        position: "relative",
        minHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: align === "center" ? "center" : "flex-start",
        textAlign: align,
        overflow: "hidden",
        background: variant === "navy" ? COLORS.navy : COLORS.platinum,
        color: isDarkText ? COLORS.white : COLORS.charcoal,
      }}
    >
      {media?.type === "video" && (
        <LazyVideo
          sources={media.video.sources}
          poster={media.video.poster}
          priority
          style={{ position: "absolute", inset: 0, zIndex: 0 }}
        />
      )}
      {media?.type === "photo" && (
        <LazyImage
          src={media.src}
          alt=""
          priority
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        />
      )}
      {glow && (
        <div
          style={{
            position: "absolute",
            top: "30%",
            left: "38%",
            width: "560px",
            height: "560px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(212,175,55,.22), transparent 66%)",
            animation: "glowPulse 8s ease-in-out infinite",
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
            zIndex: 1,
          }}
        />
      )}
      {(media || scrim) && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            background:
              scrim ||
              (variant === "navy"
                ? "linear-gradient(rgba(10,25,47,.75), rgba(10,25,47,.9))"
                : "radial-gradient(ellipse at center, rgba(244,246,249,.55), rgba(244,246,249,.85))"),
          }}
        />
      )}

      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "900px",
          padding: "1rem 1.5rem 1rem",
          display: "flex",
          flexDirection: "column",
          alignItems: align === "center" ? "center" : "flex-start",
          gap: "0.85rem",
        }}
      >
        {label && (
          <span
            style={{
              fontFamily: FONTS.mono,
              textTransform: "uppercase",
              letterSpacing: "2px",
              fontSize: "0.85rem",
              color: isDarkText ? "rgba(255,255,255,.8)" : COLORS.charcoal,
            }}
          >
            {label}
          </span>
        )}

        <h1
          style={{
            fontFamily: FONTS.display,
            textTransform: "uppercase",
            lineHeight: headingLineHeight,
            letterSpacing: headingLetterSpacing,
            fontSize: headingSize,
            margin: 0,
            color: isDarkText ? COLORS.white : COLORS.navy,
          }}
        >
          {heading.map((line, i) => (
            <span
              key={i}
              style={{ display: "block", overflow: "hidden" }}
            >
              <span className="hero-line-inner" style={{ display: "block" }}>
                {typeof line === "string"
                  ? line
                  : line.map((segment, j) =>
                      segment.gold ? (
                        <span key={j} style={{ color: COLORS.gold }}>
                          {segment.text}
                        </span>
                      ) : (
                        <span key={j}>{segment.text}</span>
                      )
                    )}
              </span>
            </span>
          ))}
        </h1>

        {bodyDivider && (
          <span style={{ display: "block", width: "56px", height: "3px", background: COLORS.gold }} />
        )}

        {body && (
          <p
            style={{
              fontFamily: FONTS.body,
              fontSize: "1.05rem",
              lineHeight: 1.6,
              maxWidth: "640px",
              color: isDarkText ? "rgba(255,255,255,.85)" : COLORS.charcoal,
            }}
          >
            {body}
          </p>
        )}

        {cta &&
          (cta.href ? (
            <a href={cta.href} className="cta-pill" style={CTA_STYLE}>
              {cta.label}
            </a>
          ) : cta.onClick ? (
            <button onClick={cta.onClick} className="cta-pill" style={{ ...CTA_STYLE, cursor: "pointer" }}>
              {cta.label}
            </button>
          ) : (
            <Link to={cta.to} className="cta-pill" style={CTA_STYLE}>
              {cta.label}
            </Link>
          ))}
      </div>
    </section>
  );
}
