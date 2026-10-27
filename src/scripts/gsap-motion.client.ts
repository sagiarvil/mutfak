/**
 * MOTOR: GSAP Skills (Official GreenSock Suite Guidelines)
 * Performanslı, donanım ivmelendirmeli ve layout-thrashing yaratmayan sayfa animasyon orkestrasyonu
 */
import { gsap } from 'gsap';

export function initGsapMotion() {
  if (typeof window === 'undefined') return;

  // WCAG & Erişilebilirlik Kuralı: prefers-reduced-motion kontrolü
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  // DOM hazır olduğunda GSAP animasyonlarını başlat
  const runAnimations = () => {
    // 1. Reveal Elements (Staggered cards & banners)
    const revealTargets = document.querySelectorAll('.gsap-reveal');
    if (revealTargets.length > 0) {
      gsap.to(revealTargets, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        clearProps: 'transform' // Animasyon bitince GPU belleğini rahatlat
      });
    }

    // 2. Interactive stat counters if present
    const statCounters = document.querySelectorAll('[data-counter]');
    statCounters.forEach((counter) => {
      const targetVal = parseInt(counter.getAttribute('data-counter') || '0', 10);
      if (isNaN(targetVal)) return;

      const obj = { val: 0 };
      gsap.to(obj, {
        val: targetVal,
        duration: 1.5,
        ease: 'power2.out',
        onUpdate: () => {
          counter.textContent = Math.round(obj.val).toString();
        }
      });
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runAnimations);
  } else {
    runAnimations();
  }
}

// Otomatik başlatma
if (typeof window !== 'undefined') {
  initGsapMotion();
}
