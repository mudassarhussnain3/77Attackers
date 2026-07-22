import { PORTFOLIO_URL } from "../styles/tokens.js";

export const NAV_ITEMS = [
  { number: "01", label: "Home", path: "/" },
  { number: "02", label: "The 77 Network", path: "/the-77-network" },
  { number: "03", label: "Company & Services", path: "/company-services" },
  { number: "04", label: "Football Clubs for Sale", path: "/clubs-for-sale" },
  { number: "05", label: "Football Loans", path: "/football-loans" },
  { number: "06", label: "Advertising in Football", path: "/advertising" },
  { number: "07", label: "The 77 Auctions", path: "/the-77-auctions" },
  {
    number: "08",
    label: "Referral Brokers, Scouts & Intermediaries",
    path: "/referral-brokers",
  },
  { number: "09", label: "Franchise Opportunity", path: "/franchise" },
  { number: "10", label: "Investors", path: "/investors" },
  { number: "11", label: "The 77 Updates", path: "/updates" },
  { number: "12", label: "Portfolio", path: PORTFOLIO_URL, external: true },
];

export const FOOTER_EXPLORE_LINKS = NAV_ITEMS.slice(0, 6);
export const FOOTER_MORE_LINKS = NAV_ITEMS.slice(6);
