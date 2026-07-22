// Shared GSAP motion init for 77 Attackers subpages. Plain business-logic helper (no UI).
export function initPageMotion() {
  function run(tries = 0) {
    if (!window.gsap) {
      if (tries < 40) return setTimeout(() => run(tries + 1), 100);
      forceVisible();
      return;
    }
    const gsap = window.gsap;
    if (window.ScrollTrigger) gsap.registerPlugin(window.ScrollTrigger);

    gsap.from(".hl > span", { yPercent: 120, duration: 1.05, ease: "expo.out", stagger: 0.09, delay: 0.1 });

    const marq = document.querySelector(".js-marq");
    if (marq) gsap.to(marq, { xPercent: -50, duration: 22, ease: "none", repeat: -1 });

    if (window.ScrollTrigger) {
      gsap.utils.toArray(".rv").forEach((el) => {
        gsap.from(el, { y: 40, opacity: 0, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 90%" } });
      });
      gsap.utils.toArray(".js-num").forEach((el) => {
        const to = parseFloat(el.dataset.to);
        const pre = el.dataset.prefix || "";
        const suf = el.dataset.suffix || "";
        const obj = { v: 0 };
        gsap.to(obj, {
          v: to, duration: 1.5, ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 92%" },
          onUpdate: () => { el.textContent = pre + Math.round(obj.v) + suf; }
        });
      });
    }
  }
  function forceVisible() {
    document.querySelectorAll(".hl > span, .rv").forEach(el => { el.style.opacity = 1; el.style.transform = "none"; });
    document.querySelectorAll(".js-num").forEach(el => {
      el.textContent = (el.dataset.prefix || "") + el.dataset.to + (el.dataset.suffix || "");
    });
  }
  run();
  setTimeout(forceVisible, 2200);
}
