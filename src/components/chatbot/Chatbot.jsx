import { useEffect, useRef, useState } from "react";
import { COLORS, FONTS } from "../../styles/tokens.js";
import { getBotReply, OPENING_MESSAGE } from "./replies.js";
import { onRequestOpenChat } from "./chatEvents.js";
import { askAssistant } from "./api.js";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([{ from: "bot", text: OPENING_MESSAGE }]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const listRef = useRef(null);

  useEffect(() => onRequestOpenChat(() => setOpen(true)), []);

  function scrollToBottom() {
    requestAnimationFrame(() => {
      if (listRef.current) listRef.current.scrollTop = listRef.current.scrollHeight;
    });
  }

  async function send(text) {
    const trimmed = text.trim();
    if (!trimmed) return;
    const history = [...messages, { from: "user", text: trimmed }];
    setMessages(history);
    setInput("");
    setTyping(true);
    scrollToBottom();

    // ponytail: LLM reply with the old keyword bot as a fallback, so the
    // widget still answers something if the API key or provider is down.
    let reply;
    try {
      reply = await askAssistant(history);
    } catch {
      reply = getBotReply(trimmed);
    }

    setTyping(false);
    setMessages((prev) => [...prev, { from: "bot", text: reply }]);
    scrollToBottom();
  }

  return (
    <div style={{ position: "fixed", bottom: "1.5rem", right: "1.5rem", zIndex: 1000 }}>
      {open && (
        <div
          style={{
            width: "min(380px, 90vw)",
            height: "min(560px, 70vh)",
            background: COLORS.white,
            borderRadius: "16px",
            boxShadow: "0 12px 40px rgba(10,25,47,.25)",
            display: "flex",
            flexDirection: "column",
            marginBottom: "1rem",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              background: COLORS.navy,
              color: COLORS.white,
              padding: "1rem",
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
            }}
          >
            <span
              style={{
                background: COLORS.gold,
                color: COLORS.navy,
                fontFamily: FONTS.mono,
                fontWeight: 700,
                width: "2.2rem",
                height: "2.2rem",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.85rem",
                flexShrink: 0,
              }}
            >
              77
            </span>
            <div>
              <div style={{ fontWeight: 700, fontSize: "0.9rem" }}>
                77 Attackers Assistant
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  fontSize: "0.75rem",
                  color: "rgba(255,255,255,.7)",
                }}
              >
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "#22c55e",
                    display: "inline-block",
                  }}
                />
                Online — replies instantly
              </div>
            </div>
          </div>

          <div
            ref={listRef}
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "1rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.6rem",
              background: COLORS.platinum,
            }}
          >
            {messages.map((m, i) => (
              <div
                key={i}
                style={{
                  alignSelf: m.from === "user" ? "flex-end" : "flex-start",
                  maxWidth: "80%",
                  padding: "0.6rem 0.9rem",
                  borderRadius: "12px",
                  fontSize: "0.85rem",
                  lineHeight: 1.4,
                  background: m.from === "user" ? COLORS.gold : COLORS.white,
                  color: m.from === "user" ? COLORS.navy : COLORS.charcoal,
                  border: m.from === "bot" ? `1px solid #e2e8f0` : "none",
                }}
              >
                {m.text}
              </div>
            ))}
            {typing && (
              <div
                style={{
                  alignSelf: "flex-start",
                  padding: "0.6rem 0.9rem",
                  borderRadius: "12px",
                  fontSize: "0.85rem",
                  background: COLORS.white,
                  border: "1px solid #e2e8f0",
                  color: "#94a3b8",
                }}
              >
                …
              </div>
            )}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            style={{ display: "flex", gap: "0.5rem", padding: "1rem" }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              style={{
                flex: 1,
                border: "1px solid #e2e8f0",
                borderRadius: "999px",
                padding: "0.6rem 1rem",
                fontFamily: FONTS.body,
                fontSize: "0.85rem",
              }}
            />
            <button
              type="submit"
              style={{
                background: COLORS.gold,
                color: COLORS.navy,
                border: "none",
                borderRadius: "50%",
                width: "2.4rem",
                height: "2.4rem",
                flexShrink: 0,
              }}
              aria-label="Send"
            >
              ➤
            </button>
          </form>
        </div>
      )}

      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close chat" : "Open chat"}
        style={{
          width: "3.5rem",
          height: "3.5rem",
          borderRadius: "50%",
          background: COLORS.gold,
          border: "none",
          fontSize: "1.5rem",
          boxShadow: "0 6px 20px rgba(10,25,47,.3)",
          float: "right",
        }}
      >
        {open ? "✕" : "💬"}
      </button>
    </div>
  );
}
