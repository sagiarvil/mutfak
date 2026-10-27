# DESIGN.md — İzmir Mutfak Banyo Design System

## 1. Principles
- **Craft Floor Quality:** Sıfır yapay zeka klişesi (No generic AI slop, no purple-pink gradients, no floating glitter sparkles).
- **Zanaatkar Gerçekçiliği:** Gerçek imalat detayları, net kenarlar, hissedilebilir malzeme kalitesi (MDF, lake, akrilik, kuvars).
- **Hiyerarşik Netlik:** Tipografik kontrast güçlüdür; başlıklar cesur ve belirgin, gövde metinleri ferah ve yüksek okunabilirliktedir.

## 2. Color Palette (DTCG Tokens via designlang)
```css
:root {
  --color-primary: #cb000f;
  --color-secondary: #25d366;
  --color-accent: #23323a;
  --color-surface-bg: #f8fafc;
  --color-card-bg: #ffffff;
  --color-border: #e2e8f0;
  --color-text-main: #18181b;
  --color-text-muted: #64748b;
}
```

## 3. Typographic Hierarchy (Taste Skill Scale)
- **H1:** `clamp(2.25rem, 5vw, 3.5rem)` | `font-black` (Weight: 900) | `line-height: 1.15` | `letter-spacing: -0.025em`
- **H2:** `clamp(1.75rem, 3.5vw, 2.5rem)` | `font-extrabold` (Weight: 800) | `line-height: 1.2` | `letter-spacing: -0.02em`
- **H3:** `clamp(1.25rem, 2.5vw, 1.75rem)` | `font-bold` (Weight: 700) | `line-height: 1.3`
- **Body:** `1rem` (16px) | `font-normal` (Weight: 400) | `line-height: 1.625`
- **Caption / Meta:** `0.875rem` (14px) | `font-medium` (Weight: 500) | `text-slate-500`

## 4. Motion & Micro-Interactions (transitions.dev & GSAP)
- **Yay Fiziği (Spring Physics):** `cubic-bezier(0.22, 1, 0.36, 1)`
- **Süreler:** Kart hover: 300ms, Menü açılış: 250ms, Buton basış: 150ms
- **GSAP ScrollTrigger:** Sayfa kaydırıldıkça kartlar sırayla yükselir (`yPercent: 0`, `opacity: 1`), `will-change: transform`.
