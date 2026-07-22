import gsap from "gsap";
import useGsapContext from "./useGsapContext.js";

// Animates the text of `ref` from 0 to `target` once it scrolls into view,
// preserving a prefix/suffix (e.g. "€", "M", "K") around the number.
export default function useCountUp(ref, target, { prefix = "", suffix = "", duration = 1.1, decimals = 0 } = {}) {
  useGsapContext(() => {
    if (!ref.current || target == null) return;
    const proxy = { value: 0 };
    gsap.to(proxy, {
      value: target,
      duration,
      ease: "power1.out",
      scrollTrigger: { trigger: ref.current, start: "top 90%", once: true },
      onUpdate: () => {
        ref.current.textContent = `${prefix}${proxy.value.toFixed(decimals)}${suffix}`;
      },
    });
  }, ref, [target]);
}
