import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";

const FORCE_VISIBLE_SELECTOR = "[data-reveal], .hero-line-inner";
const FORCE_VISIBLE_DELAY = 2200;

// Scopes GSAP selectors/animations to `scopeRef` and reverts them on unmount
// or route change, so ScrollTriggers never leak/duplicate across navigations.
//
// Also mirrors the mockup's site-motion.js failsafe: force every reveal
// target to its visible end-state after a fixed delay regardless of scroll
// position, so content below the fold isn't stuck invisible indefinitely
// just because the user hasn't scrolled to it yet.
export default function useGsapContext(callback, scopeRef, deps = []) {
  const { pathname } = useLocation();

  useEffect(() => {
    if (!scopeRef.current) return undefined;
    const ctx = gsap.context(callback, scopeRef);

    const failsafe = setTimeout(() => {
      scopeRef.current?.querySelectorAll(FORCE_VISIBLE_SELECTOR).forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "none";
      });
    }, FORCE_VISIBLE_DELAY);

    return () => {
      clearTimeout(failsafe);
      ctx.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, ...deps]);
}
