import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);

  window.addEventListener("DOMContentLoaded", () => {
    // Reveal animations for cards and sections
    const elements = document.querySelectorAll(".reveal-on-scroll");
    if (elements.length > 0) {
      gsap.from(elements, {
        opacity: 0,
        y: 24,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: elements[0],
          start: "top 85%",
          toggleActions: "play none none none"
        }
      });
    }
  });
}

export { gsap, ScrollTrigger };
