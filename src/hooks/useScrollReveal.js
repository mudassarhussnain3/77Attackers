import { useRef } from "react";
import gsap from "gsap";
import useGsapContext from "./useGsapContext.js";

// Fades+rises every `[data-reveal]` element inside the returned ref as it
// scrolls into view (trigger "top 90%").
export default function useScrollReveal(selector = "[data-reveal]") {
  const scopeRef = useRef(null);

  useGsapContext(() => {
    gsap.utils.toArray(selector).forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 90%" },
        }
      );
    });
  }, scopeRef);

  return scopeRef;
}
