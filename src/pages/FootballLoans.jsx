import Hero from "../components/blocks/Hero.jsx";
import StatGrid from "../components/blocks/StatGrid.jsx";
import NavyCTACard from "../components/blocks/NavyCTACard.jsx";
import useScrollReveal from "../hooks/useScrollReveal.js";
import { IMAGES } from "../data/media.js";
import { LOAN_TERMS } from "../data/footballLoans.js";

export default function FootballLoans() {
  const revealRef = useScrollReveal();

  return (
    <div ref={revealRef}>
      <Hero
        variant="light"
        minHeight="60vh"
        media={{ type: "photo", src: IMAGES.jerseyDetail }}
        scrim="radial-gradient(ellipse 65% 60% at 50% 40%, rgba(244,246,249,.96) 0%, rgba(244,246,249,.86) 45%, rgba(244,246,249,.4) 75%, rgba(244,246,249,.12) 100%)"
        heading={["Football Loans"]}
        body="Loan sourcing for football clubs worldwide, provided receivables originate from European clubs."
      />

      <section style={{ padding: "0 clamp(20px,5vw,72px) clamp(56px,8vw,90px)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <StatGrid cells={LOAN_TERMS} minWidth="180px" valueSize="clamp(1.4rem, 2.8vw, 2.1rem)" />
        </div>
      </section>

      <section style={{ padding: "0 clamp(20px,5vw,72px) clamp(70px,9vw,110px)" }}>
        <div style={{ maxWidth: "820px", margin: "0 auto" }}>
          <NavyCTACard
            label="Guarantee requirements"
            body="Guarantees are provided by club revenue streams (TV rights, sponsorships, ticketing) or outstanding player-transfer payments. For transfer-specific loans, the transfer agreement's installments serve as the guarantee."
          />
        </div>
      </section>
    </div>
  );
}
