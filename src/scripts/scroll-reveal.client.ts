/**
 * Apple Motion Architecture - Scroll-Driven Staggered Engine
 * Sektör Standardı: 80ms domino gecikmesi, 24px -> 0px süzülme, donanım hızlandırma
 */

export function initScrollReveal() {
  if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
    // Fallback: Eski tarayıcılarda tüm elemanları görünür yap
    document.querySelectorAll(".scroll-reveal, [data-scroll-reveal]").forEach((el) => {
      el.classList.add("is-revealed");
    });
    return;
  }

  // Kullanıcı hareketi kısıtlamışsa doğrudan görünür yap
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.querySelectorAll(".scroll-reveal, [data-scroll-reveal], .stagger-container > *").forEach((el) => {
      el.classList.add("is-revealed");
    });
    return;
  }

  // 1. Grid ve Kart Gruplarına Kademeli (Stagger) Index Atama
  const gridContainers = document.querySelectorAll<HTMLElement>(
    ".grid, .stagger-container, [data-stagger]"
  );

  gridContainers.forEach((container) => {
    const items = Array.from(container.children) as HTMLElement[];
    items.forEach((item, index) => {
      // Sadece görünür ve önemli kartlara stagger ver
      if (!item.classList.contains("scroll-reveal") && !item.hasAttribute("data-scroll-reveal")) {
        item.classList.add("scroll-reveal");
      }
      // 80ms aralıklı kademeli index (satır başı sıfırlama veya domino etkisi)
      const staggerIndex = index % 8; // Her satırda dengeli akış
      item.style.setProperty("--stagger-index", staggerIndex.toString());
    });
  });

  // 2. IntersectionObserver Motoru
  const observerOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: "0px 0px -50px 0px", // Kullanıcı elemana yaklaşırken tetikle
    threshold: 0.08
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target as HTMLElement;
        target.classList.add("is-revealed");
        obs.unobserve(target); // Bir kez tetiklendikten sonra dinleyiciyi kaldır (performans)
      }
    });
  }, observerOptions);

  // 3. Gözlemlenecek Tüm Elemanları Bağla
  const revealElements = document.querySelectorAll<HTMLElement>(
    ".scroll-reveal, [data-scroll-reveal], .apple-card, .td-card-spring, .gsap-reveal"
  );

  revealElements.forEach((el) => {
    if (!el.classList.contains("scroll-reveal")) {
      el.classList.add("scroll-reveal");
    }
    observer.observe(el);
  });
}

// Astro Sayfa Yükleme & Geçiş Entegrasyonu
if (typeof document !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initScrollReveal);
  } else {
    initScrollReveal();
  }
  document.addEventListener("astro:page-load", initScrollReveal);
}
