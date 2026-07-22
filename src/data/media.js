// All video/photo sources are self-hosted under /public, downloaded at
// pre-compressed 720p (video) / compressed-JPEG (photo) renditions from
// Pexels (free-to-use, no attribution required) — see each comment for the
// original source if a rendition ever needs to be re-fetched at a different size.

export const VIDEOS = {
  // pexels.com/video/football-match-on-stadium-11918917/
  heroMatch: {
    sources: [{ src: "/videos/hero-match.mp4", type: "video/mp4" }],
    poster: "/videos/hero-match-poster.jpg",
  },
  // pexels.com/video/aerial-view-of-packed-stadium-during-a-soccer-match-31472390/
  droneStadium: {
    sources: [{ src: "/videos/drone-stadium.mp4", type: "video/mp4" }],
    poster: "/videos/drone-stadium-poster.jpg",
  },
};

export const IMAGES = {
  stadiumTunnel: "/images/stadium-tunnel.jpg",
  floodlightsNetworkHero: "/images/floodlights-network-hero.jpg",
  floodlightsGallery: "/images/floodlights-gallery.jpg",
  jerseyDetail: "/images/jersey-detail.jpg",
  attackerMidStrike: "/images/attacker-mid-strike.jpg",
  brazilStadium: "/images/brazil-stadium.jpg",
  referralBrokersHero: "/images/referral-brokers-hero.jpg",
  franchiseHero: "/images/franchise-hero.jpg",
  updatesHero: "/images/updates-hero.jpg",
  // pexels.com/photo/a-player-talking-to-a-referee-12628293/
  updatesIssue1: "/images/updates-issue-1.jpg",
  // pexels.com/photo/soccer-team-huddle-before-a-game-32424845/
  updatesIssue2: "/images/updates-issue-2.jpg",
  // pexels.com/photo/football-players-in-a-team-huddle-8289383/
  updatesIssue3: "/images/updates-issue-3.jpg",
};
