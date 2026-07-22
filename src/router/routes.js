import { lazy } from "react";

export const ROUTES = [
  { path: "/", title: "Clubs & Attackers Meet Here", Component: lazy(() => import("../pages/Home.jsx")) },
  {
    path: "/the-77-network",
    title: "The 77 Network",
    Component: lazy(() => import("../pages/TheNetwork.jsx")),
  },
  {
    path: "/company-services",
    title: "Company & Services",
    Component: lazy(() => import("../pages/CompanyServices.jsx")),
  },
  {
    path: "/clubs-for-sale",
    title: "Football Clubs for Sale",
    Component: lazy(() => import("../pages/ClubsForSale.jsx")),
  },
  {
    path: "/football-loans",
    title: "Football Loans",
    Component: lazy(() => import("../pages/FootballLoans.jsx")),
  },
  {
    path: "/advertising",
    title: "Advertising in Football",
    Component: lazy(() => import("../pages/Advertising.jsx")),
  },
  {
    path: "/the-77-auctions",
    title: "The 77 Auctions",
    Component: lazy(() => import("../pages/Auctions.jsx")),
  },
  {
    path: "/referral-brokers",
    title: "Referral Brokers, Scouts & Intermediaries",
    Component: lazy(() => import("../pages/ReferralBrokers.jsx")),
  },
  {
    path: "/franchise",
    title: "Franchise Opportunity",
    Component: lazy(() => import("../pages/Franchise.jsx")),
  },
  { path: "/investors", title: "Investors", Component: lazy(() => import("../pages/Investors.jsx")) },
  { path: "/updates", title: "The 77 Updates", Component: lazy(() => import("../pages/Updates.jsx")) },
];
