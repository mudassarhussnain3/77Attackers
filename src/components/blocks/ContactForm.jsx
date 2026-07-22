import { useState } from "react";
import { COLORS, FONTS } from "../../styles/tokens.js";

// ponytail: placeholder Formspree form ID — replace with the real endpoint
// (https://formspree.io) before launch, this one will 404 on submit.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xrgpvzva";

const inputStyle = {
  width: "100%",
  padding: "0.85rem 1rem",
  borderRadius: "8px",
  border: "1px solid rgba(255,255,255,.2)",
  background: "rgba(255,255,255,.06)",
  color: COLORS.white,
  fontFamily: FONTS.body,
  fontSize: "0.95rem",
};

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    const form = e.target;
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        data-reveal
        style={{
          background: COLORS.navy,
          color: COLORS.white,
          borderRadius: "12px",
          padding: "clamp(1.75rem, 4vw, 3rem)",
          textAlign: "center",
        }}
      >
        <p style={{ fontFamily: FONTS.display, textTransform: "uppercase", fontSize: "1.5rem", margin: 0 }}>
          Thanks — we'll be in touch
        </p>
        <p style={{ color: "#cbd5e1", marginTop: "0.75rem" }}>
          Your enquiry has been sent to the 77 Attackers team.
        </p>
      </div>
    );
  }

  return (
    <form
      data-reveal
      onSubmit={handleSubmit}
      style={{
        background: COLORS.navy,
        color: COLORS.white,
        borderRadius: "12px",
        padding: "clamp(1.75rem, 4vw, 3rem)",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <input name="name" type="text" autoComplete="name" placeholder="Name" required style={inputStyle} />
      <input name="email" type="email" autoComplete="email" placeholder="Email" required style={inputStyle} />
      <input name="phone" type="tel" autoComplete="tel" placeholder="Phone (with country prefix)" required style={inputStyle} />
      <textarea
        name="message"
        placeholder="Message"
        required
        rows={5}
        style={{ ...inputStyle, resize: "vertical", fontFamily: FONTS.body }}
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="cta-pill"
        style={{
          alignSelf: "flex-start",
          background: COLORS.gold,
          color: COLORS.navy,
          border: "none",
          borderRadius: "999px",
          padding: "0.9rem 1.75rem",
          fontFamily: FONTS.mono,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.5px",
          fontSize: "0.85rem",
          cursor: "pointer",
        }}
      >
        {status === "sending" ? "Sending…" : "Send enquiry"}
      </button>
      {status === "error" && (
        <p style={{ color: "#f87171", fontSize: "0.85rem", margin: 0 }}>
          Something went wrong — please try again or WhatsApp us directly.
        </p>
      )}
    </form>
  );
}
