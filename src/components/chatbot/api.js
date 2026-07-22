export async function askAssistant(history) {
  const res = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      messages: history.map((m) => ({
        role: m.from === "user" ? "user" : "assistant",
        content: m.text,
      })),
    }),
  });

  if (!res.ok) throw new Error("Chat request failed");

  const data = await res.json();
  return data.reply;
}
