const OPEN_CHAT_EVENT = "77attackers:open-chat";

export function requestOpenChat() {
  window.dispatchEvent(new Event(OPEN_CHAT_EVENT));
}

export function onRequestOpenChat(handler) {
  window.addEventListener(OPEN_CHAT_EVENT, handler);
  return () => window.removeEventListener(OPEN_CHAT_EVENT, handler);
}
