const FALLBACK =
  "Thanks — the best next step is a quick WhatsApp chat with Dr Carl Peralta on +356 9944 7444. What would you like to explore in the meantime?";

export function getBotReply(message) {
  const t = message.toLowerCase();
  if ((t.includes("club") && t.includes("sale")) || t.includes("buy") || t.includes("invest")) {
    return "We hold signed mandates from clubs worldwide that are for sale or seeking investment — with valuations, fair sale structures and thorough due diligence.";
  }
  if (t.includes("loan")) {
    return "We arrange football loans up to €500,000,000 (4–6.5% p.a., terms up to 10 years), provided receivables originate from European clubs.";
  }
  if (t.includes("attacker") || t.includes("player") || t.includes("scout")) {
    return "We concentrate on a few but capable attackers and coaching staff, and match them to the right clubs.";
  }
  if (t.includes("sponsor") || t.includes("advert") || t.includes("jersey") || t.includes("auction")) {
    return "Right now there's a Front Of Jersey Space opportunity with a club in Brazil, sold via our no-reserve 77 Auctions.";
  }
  if (t.includes("peralta") || t.includes("talk") || t.includes("contact") || t.includes("whatsapp")) {
    return "You can reach Dr Carl Peralta directly on WhatsApp: +356 9944 7444.";
  }
  if (t.includes("franchise")) {
    return "77 Attackers franchises give you a pool of mandated players, club requests, brokerage rights, IP and a ready website + social presence.";
  }
  return FALLBACK;
}

export const OPENING_MESSAGE =
  "Hi — I'm the 77 Attackers assistant. Whether you're a club, an attacker or an investor, I can point you the right way. What are you here for?";
