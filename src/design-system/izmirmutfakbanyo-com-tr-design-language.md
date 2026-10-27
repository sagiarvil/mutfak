# Design Language: İzmir Mutfak Banyo — Lüks Ada Mutfak, Banyo & Anahtar Teslim Tadilat | İzmir Mutfak Banyo

> Extracted from `https://izmirmutfakbanyo.com.tr` on October 27, 2026
> 547 elements analyzed

This document describes the complete design language of the website. It is structured for AI/LLM consumption — use it to faithfully recreate the visual design in any framework.

## Color Palette

### Primary Colors

| Role | Hex | RGB | HSL | Usage Count |
|------|-----|-----|-----|-------------|
| Primary | `#cb000f` | rgb(203, 0, 15) | hsl(356, 100%, 40%) | 74 |
| Secondary | `#25d366` | rgb(37, 211, 102) | hsl(142, 70%, 49%) | 2 |
| Accent | `#23323a` | rgb(35, 50, 58) | hsl(201, 25%, 18%) | 31 |

### Tonal Ramps

Generated in OKLCH from each role colour, so the steps are perceptually even. The site's own colour keeps its position in the ladder.

| Role | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|------|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|
| primary | `#ffd4c5` | `#ffc4b4` | `#ffad9d` | `#ff8b7b` | `#ff5d51` | `#e7332e` | **`#cb000f`** | `#a70005` | `#8d0000` | `#750000` | `#480000` |
| secondary | `#baffca` | `#a7ffba` | `#8bf5a3` | **`#25d366`** | `#0abf58` | `#00a035` | `#008820` | `#006f0d` | `#005c01` | `#004b00` | `#002b00` |
| accent | `#ecf7fe` | `#e0ecf3` | `#cedce3` | `#b4c3cc` | `#92a3ac` | `#74858e` | `#5f6f78` | `#4b5961` | `#3c4950` | **`#23323a`** | `#192024` |
| neutral | `#eff7fc` | `#e2ebf1` | `#d1dbe1` | `#b7c2c9` | **`#9aa7af`** | `#78848c` | `#626e75` | `#4e585f` | `#3f484e` | `#323a3f` | `#1a2023` |

### Semantic Pairs

| Role | Background | Foreground | Contrast | Level |
|------|------------|------------|----------|-------|
| `surface.page` | `#f8fafc` | `#18181b` | 16.93:1 | AAA |
| `surface.raised` | `#ffffff` | `#18181b` | 17.72:1 | AAA |
| `action.primary` | `#cb000f` | `#ffffff` | 5.92:1 | AA |
| `action.secondary` | `#25d366` | `#18181b` | 8.93:1 | AAA |
| `action.accent` | `#23323a` | `#ffffff` | 13.22:1 | AAA |

### Dominance

Share of painted background area — what the page looks like, as opposed to what it declares most often.

- `#ffffff` — 83%
- `#172127` — 9%
- `#23323a` — 6%
- `#000000` — 1%
- `#cb000f` — 0%
- `#041f14` — 0%

### Neutral Colors

| Hex | HSL | Usage Count |
|-----|-----|-------------|
| `#e5e7eb` | hsl(220, 13%, 91%) | 499 |
| `#ffffff` | hsl(0, 0%, 100%) | 205 |
| `#18181b` | hsl(240, 6%, 10%) | 195 |
| `#9aa7af` | hsl(203, 12%, 65%) | 44 |
| `#2d3e48` | hsl(202, 23%, 23%) | 27 |
| `#d1d5db` | hsl(216, 12%, 84%) | 16 |
| `#000000` | hsl(0, 0%, 0%) | 14 |
| `#7f8c8d` | hsl(184, 6%, 53%) | 13 |
| `#6b7280` | hsl(220, 9%, 46%) | 10 |
| `#555555` | hsl(0, 0%, 33%) | 7 |
| `#b2bfc7` | hsl(203, 16%, 74%) | 5 |
| `#4b5563` | hsl(215, 14%, 34%) | 4 |

### Background Colors

Used on large-area elements: `#f8fafc`, `#ffffff`, `#23323a`, `#172127`, `#f4f6f8`

### Text Colors

Text color palette: `#18181b`, `#23323a`, `#7f8c8d`, `#ffffff`, `#e5e7eb`, `#9ca3af`, `#cb000f`, `#34d399`, `#fde047`, `#d1d5db`

### Gradients

```css
background-image: linear-gradient(to right, rgba(23, 33, 39, 0.95), rgba(23, 33, 39, 0.6), rgba(0, 0, 0, 0));
```

```css
background-image: linear-gradient(to top, rgb(23, 33, 39), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3));
```

```css
background-image: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0));
```

```css
background-image: linear-gradient(to top, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0));
```

### Full Color Inventory

| Hex | Contexts | Count |
|-----|----------|-------|
| `#e5e7eb` | border, text | 499 |
| `#ffffff` | background, text, border | 205 |
| `#18181b` | text, background | 195 |
| `#cb000f` | background, border, text | 74 |
| `#9aa7af` | text | 44 |
| `#23323a` | text, background, border | 31 |
| `#2d3e48` | border | 27 |
| `#172127` | border, background, text | 22 |
| `#d1d5db` | text, border | 16 |
| `#059669` | text | 16 |
| `#000000` | background | 14 |
| `#7f8c8d` | text | 13 |
| `#6b7280` | text | 10 |
| `#555555` | text | 7 |
| `#c5a880` | border, text | 7 |
| `#b2bfc7` | text | 5 |
| `#4b5563` | text | 4 |
| `#041f14` | background | 4 |
| `#34d399` | text | 3 |
| `#00ff66` | text | 3 |
| `#25d366` | background, text | 2 |
| `#fde047` | text | 1 |
| `#44403c` | border | 1 |

## Typography

### Font Families

- **Montserrat** — used for all (226 elements)

### Type System

- **Scale ratio** — 1.2 (minor third), anchored at 18px · 73% of sizes sit on the ladder
- **Measure** — ~87 characters per line (wide)
- **Fluid type** — none; sizes are fixed per breakpoint

### Named Scale

| Role | Size | Weight | Line Height | Tracking |
|------|------|--------|-------------|----------|
| `h1` | 62px / 3.875rem | 900 | 62px | -1.55px |
| `h2` | 36px / 2.25rem | 900 | 40px | normal |
| `title-1` | 30px / 1.875rem | 900 | 36px | normal |
| `h3` | 18px / 1.125rem | 700 | 28px | normal |
| `title-2` | 16px / 1rem | 400 | 24px | normal |
| `h4` | 14px / 0.875rem | 400 | 20px | normal |
| `title-3` | 13px / 0.8125rem | 700 | 19.5px | 0.65px |
| `body` | 12px / 0.75rem | 700 | 16px | 0.6px |
| `body-sm` | 11px / 0.6875rem | 800 | 16.5px | 2.2px |
| `micro` | 10px / 0.625rem | 900 | 15px | normal |
| `sm-3` | 9px / 0.5625rem | 900 | 13.5px | 0.45px |

### Type Scale

| Size (px) | Size (rem) | Weight | Line Height | Letter Spacing | Used On |
|-----------|------------|--------|-------------|----------------|---------|
| 62px | 3.875rem | 900 | 62px | -1.55px | h1 |
| 36px | 2.25rem | 900 | 40px | normal | h2, br |
| 30px | 1.875rem | 900 | 36px | normal | h2 |
| 18px | 1.125rem | 700 | 28px | normal | a, span, p, h3 |
| 16px | 1rem | 400 | 24px | normal | html, head, script, meta |
| 14px | 0.875rem | 400 | 20px | normal | span, div, a, p |
| 13px | 0.8125rem | 700 | 19.5px | 0.65px | nav, a, div, span |
| 12px | 0.75rem | 700 | 16px | 0.6px | a, svg, path, span |
| 11px | 0.6875rem | 800 | 16.5px | 2.2px | span, div, a, p |
| 10px | 0.625rem | 900 | 15px | normal | span |
| 9px | 0.5625rem | 900 | 13.5px | 0.45px | span |

### Heading Scale

```css
h1 { font-size: 62px; font-weight: 900; line-height: 62px; }
h2 { font-size: 36px; font-weight: 900; line-height: 40px; }
h2 { font-size: 30px; font-weight: 900; line-height: 36px; }
h3 { font-size: 18px; font-weight: 700; line-height: 28px; }
h3 { font-size: 16px; font-weight: 400; line-height: 24px; }
h4 { font-size: 14px; font-weight: 400; line-height: 20px; }
h3 { font-size: 12px; font-weight: 700; line-height: 16px; }
```

### Body Text

```css
body { font-size: 12px; font-weight: 700; line-height: 16px; }
```

### Font Weights in Use

`400` (344x), `700` (110x), `900` (78x), `800` (10x), `500` (5x)

## Spacing

**Base unit:** 2px

| Token | Value | Rem |
|-------|-------|-----|
| spacing-2 | 2px | 0.125rem |
| spacing-32 | 32px | 2rem |
| spacing-40 | 40px | 2.5rem |
| spacing-48 | 48px | 3rem |
| spacing-56 | 56px | 3.5rem |
| spacing-64 | 64px | 4rem |
| spacing-80 | 80px | 5rem |
| spacing-192 | 192px | 12rem |
| spacing-240 | 240px | 15rem |

## Border Radii

| Label | Value | Count |
|-------|-------|-------|
| xs | 1px | 2 |
| sm | 4px | 35 |
| md | 8px | 8 |
| lg | 12px | 13 |
| lg | 16px | 10 |
| full | 9999px | 14 |

## Elevation

5 levels from 5 raw shadows · neutral tint

**xs** — blur 2px, y 1px, used 11× · 3 layers
```css
box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
```

**sm** — blur 6px, y 4px, used 3× · 4 layers
```css
box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.1) 0px 2px 4px -2px;
```

**md** — blur 15px, y 10px, used 4× · 4 layers
```css
box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px;
```

**lg** — blur 25px, y 20px, used 4× · 4 layers
```css
box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.1) 0px 8px 10px -6px;
```

**xl** — blur 50px, y 25px, used 6× · 3 layers
```css
box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
```

## CSS Custom Properties

### Colors

```css
--tw-ring-offset-shadow: 0 0 #0000;
--tw-ring-shadow: 0 0 #0000;
--tw-bg-opacity: 1;
--tw-ring-inset: ;
--tw-ring-offset-width: 0px;
--tw-border-spacing-x: 0;
--tw-shadow-colored: 0 0 #0000;
--tw-border-spacing-y: 0;
--tw-ring-color: rgb(59 130 246 / 0.5);
--tw-ring-offset-color: #fff;
```

### Spacing

```css
--tw-contain-size: ;
--tw-numeric-spacing: ;
```

### Typography

```css
--tw-text-opacity: 1;
```

### Shadows

```css
--tw-shadow: 0 0 #0000;
--tw-drop-shadow: ;
```

### Other

```css
--tw-contrast: ;
--tw-backdrop-sepia: ;
--tw-sepia: ;
--tw-skew-x: 0;
--tw-ordinal: ;
--tw-backdrop-saturate: ;
--tw-contain-style: ;
--tw-backdrop-blur: ;
--tw-translate-x: 0;
--tw-gradient-via-position: ;
--tw-backdrop-invert: ;
--tw-saturate: ;
--tw-scroll-snap-strictness: proximity;
--tw-grayscale: ;
--tw-scale-x: 1;
--tw-backdrop-hue-rotate: ;
--tw-gradient-to-position: ;
--tw-brightness: ;
--tw-numeric-fraction: ;
--tw-backdrop-grayscale: ;
--tw-hue-rotate: ;
--tw-scale-y: 1;
--tw-pan-y: ;
--tw-backdrop-contrast: ;
--tw-skew-y: 0;
--tw-backdrop-brightness: ;
--tw-slashed-zero: ;
--tw-blur: ;
--tw-invert: ;
--tw-pan-x: ;
--tw-translate-y: 0;
--tw-backdrop-opacity: ;
--tw-gradient-from-position: ;
--tw-numeric-figure: ;
--tw-rotate: 0;
--tw-pinch-zoom: ;
--tw-contain-paint: ;
--tw-contain-layout: ;
```

### Semantic

```css
--tw-shadow-colored: 0 0 #0000;
```

## Breakpoints

| Name | Value | Type |
|------|-------|------|
| sm | 640px | min-width |
| md | 768px | min-width |
| lg | 1024px | min-width |

## Transitions & Animations

**Easing functions:** `cubic-bezier(0.4, 0, 0.2, 1)`, `cubic-bezier(0, 0, 0.2, 1)`

**Durations:** `0.3s`, `0.15s`, `1s`, `0.2s`, `0.7s`, `0.5s`

### Common Transitions

```css
transition: all;
transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
transition: opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1);
transition: color 0.15s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), text-decoration-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), fill 0.15s cubic-bezier(0.4, 0, 0.2, 1), stroke 0.15s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.15s cubic-bezier(0.4, 0, 0.2, 1), transform 0.15s cubic-bezier(0.4, 0, 0.2, 1), filter 0.15s cubic-bezier(0.4, 0, 0.2, 1), backdrop-filter 0.15s cubic-bezier(0.4, 0, 0.2, 1), -webkit-text-decoration-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), -webkit-backdrop-filter 0.15s cubic-bezier(0.4, 0, 0.2, 1);
transition: transform 1s cubic-bezier(0, 0, 0.2, 1);
transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
transition: transform 0.7s cubic-bezier(0, 0, 0.2, 1);
transition: transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);
transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
```

### Keyframe Animations

**ping**
```css
@keyframes ping {
  75%, 100% { transform: scale(2); opacity: 0; }
}
```

**pulse**
```css
@keyframes pulse {
  50% { opacity: 0.5; }
}
```

## Component Patterns

Detected UI component patterns and their most common styles:

### Buttons (2 instances)

```css
.buttons {
  background-color: rgba(28, 25, 23, 0.9);
  color: rgb(35, 50, 58);
  font-size: 16px;
  font-weight: 400;
  padding-top: 8px;
  padding-right: 8px;
  border-radius: 0px;
}
```

### Cards (8 instances)

```css
.cards {
  background-color: rgb(23, 33, 39);
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  padding-top: 0px;
  padding-right: 0px;
}
```

### Links (72 instances)

```css
.links {
  color: rgb(229, 231, 235);
  font-size: 12px;
  font-weight: 700;
}
```

### Navigation (1 instances)

```css
.navigation {
  color: rgb(255, 255, 255);
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  position: static;
}
```

### Footer (1 instances)

```css
.footer {
  background-color: rgb(35, 50, 58);
  color: rgb(154, 167, 175);
  padding-top: 64px;
  padding-bottom: 0px;
  font-size: 12px;
}
```

## Component Clusters

Reusable component instances grouped by DOM structure and style similarity:

### Button — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgba(28, 25, 23, 0.9);
  color: rgb(255, 255, 255);
  padding: 0px 0px 0px 0px;
  border-radius: 9999px;
  border: 1px solid rgba(68, 64, 60, 0.8);
  font-size: 16px;
  font-weight: 400;
```

## Layout System

**7 grid containers** and **105 flex containers** detected.

### The System

- **Content column** — 1200px wide, 24px gutters (2% edge density)
  - Width ladder: 672px · 768px · 1200px · 1280px
- **Column system** — 4 columns (canonical page grid)
- **Section rhythm** — 64px vertical padding (ladder: 48px · 56px · 64px · 80px)
- **Gap scale** — 2px · 4px · 6px · 8px · 10px · 12px · 16px · 24px
- **Fluid layout** — 1 clamp/viewport declarations

```css
html, body { max-width: 100vw; }
```

### Container Widths

| Max Width | Padding |
|-----------|---------|
| 1280px | 0px |
| 100% | 0px |
| 1200px | 24px |
| 672px | 0px |
| 768px | 0px |

### Grid Column Patterns

| Columns | Usage Count |
|---------|-------------|
| 4-column | 3x |
| 3-column | 2x |
| 12-column | 2x |

### Grid Templates

```css
grid-template-columns: 368px 368px 368px;
gap: 24px;
grid-template-columns: 66.6562px 66.6562px 66.6562px 66.6562px 66.6562px 66.6562px 66.6562px 66.6562px 66.6562px 66.6562px 66.6562px 66.6562px;
gap: 32px;
grid-template-columns: 270px 270px 270px 270px;
gap: 24px;
grid-template-columns: 66.6562px 66.6562px 66.6562px 66.6562px 66.6562px 66.6562px 66.6562px 66.6562px 66.6562px 66.6562px 66.6562px 66.6562px;
gap: 32px;
grid-template-columns: 270px 270px 270px 270px;
gap: 24px;
```

### Flex Patterns

| Direction/Wrap | Count |
|----------------|-------|
| column/nowrap | 20x |
| row/nowrap | 85x |

**Gap values:** `2px`, `4px`, `6px`, `8px`, `10px`, `12px`, `16px`, `24px`, `32px`

## Accessibility (WCAG 2.1)

**Overall Score: 93%** — 28 passing, 2 failing color pairs

### Failing Color Pairs

| Foreground | Background | Ratio | Level | Used On |
|------------|------------|-------|-------|---------|
| `#cb000f` | `#1c282f` | 2.54:1 | FAIL | a (2x) |

### Passing Color Pairs

| Foreground | Background | Ratio | Level |
|------------|------------|-------|-------|
| `#ffffff` | `#cb000f` | 5.92:1 | AAA |
| `#cb000f` | `#ffffff` | 5.92:1 | AA |
| `#ffffff` | `#23323a` | 13.22:1 | AAA |
| `#fde047` | `#1c282f` | 11.43:1 | AAA |

## Design System Score

**Overall: 91/100 (Grade: A)**

| Category | Score |
|----------|-------|
| Color Discipline | 92/100 |
| Typography Consistency | 90/100 |
| Spacing System | 100/100 |
| Shadow Consistency | 100/100 |
| Border Radius Consistency | 90/100 |
| Accessibility | 93/100 |
| CSS Tokenization | 100/100 |

**Strengths:** Tight, disciplined color palette, Consistent typography system, Well-defined spacing scale, Clean elevation system, Consistent border radii, Strong accessibility compliance, Good CSS variable tokenization

**Issues:**
- 2 WCAG contrast failures
- 98% of CSS is unused — consider purging
- 394 duplicate CSS declarations

## Gradients

**4 unique gradients** detected.

| Type | Direction | Stops | Classification |
|------|-----------|-------|----------------|
| linear | to right | 3 | bold |
| linear | to top | 3 | bold |
| linear | to top | 3 | bold |
| linear | to top | 3 | bold |

```css
background: linear-gradient(to right, rgba(23, 33, 39, 0.95), rgba(23, 33, 39, 0.6), rgba(0, 0, 0, 0));
background: linear-gradient(to top, rgb(23, 33, 39), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3));
background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0));
background: linear-gradient(to top, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0));
```

## Z-Index Map

**3 unique z-index values** across 1 layers.

| Layer | Range | Elements |
|-------|-------|----------|
| sticky | 10,50 | div.r.e.l.a.t.i.v.e. .m.a.x.-.w.-.[.1.2.0.0.p.x.]. .m.x.-.a.u.t.o. .p.x.-.4. .s.m.:.p.x.-.6. .m.i.n.-.h.-.[.8.2.v.h.]. .f.l.e.x. .f.l.e.x.-.c.o.l. .j.u.s.t.i.f.y.-.c.e.n.t.e.r. .i.t.e.m.s.-.s.t.a.r.t. .z.-.1.0. .p.y.-.1.6, div.a.b.s.o.l.u.t.e. .b.o.t.t.o.m.-.0. .i.n.s.e.t.-.x.-.0. .b.g.-.[.#.2.3.3.2.3.A.]./.9.0. .b.a.c.k.d.r.o.p.-.b.l.u.r.-.m.d. .b.o.r.d.e.r.-.t. .b.o.r.d.e.r.-.w.h.i.t.e./.1.0. .p.y.-.3. .h.i.d.d.e.n. .m.d.:.b.l.o.c.k. .z.-.1.0, button.f.i.x.e.d. .b.o.t.t.o.m.-.2.2. .r.i.g.h.t.-.5. .s.m.:.b.o.t.t.o.m.-.2.4. .s.m.:.r.i.g.h.t.-.6. .z.-.4.0. .w.-.1.0. .h.-.1.0. .s.m.:.w.-.1.1. .s.m.:.h.-.1.1. .b.g.-.s.t.o.n.e.-.9.0.0./.9.0. .h.o.v.e.r.:.b.g.-.s.t.o.n.e.-.9.5.0. .t.e.x.t.-.w.h.i.t.e. .r.o.u.n.d.e.d.-.f.u.l.l. .s.h.a.d.o.w.-.x.l. .b.o.r.d.e.r. .b.o.r.d.e.r.-.s.t.o.n.e.-.7.0.0./.8.0. .f.l.e.x. .i.t.e.m.s.-.c.e.n.t.e.r. .j.u.s.t.i.f.y.-.c.e.n.t.e.r. .o.p.a.c.i.t.y.-.0. .p.o.i.n.t.e.r.-.e.v.e.n.t.s.-.n.o.n.e. .t.r.a.n.s.l.a.t.e.-.y.-.3. .t.r.a.n.s.i.t.i.o.n.-.a.l.l. .d.u.r.a.t.i.o.n.-.3.0.0. .b.a.c.k.d.r.o.p.-.b.l.u.r.-.x.s. .c.u.r.s.o.r.-.p.o.i.n.t.e.r. .g.r.o.u.p |

## SVG Icons

**5 unique SVG icons** detected. Dominant style: **outlined**.

| Size Class | Count |
|------------|-------|
| xs | 2 |
| sm | 2 |
| md | 1 |

**Icon colors:** `rgb(255, 255, 255)`, `currentColor`, `rgb(0, 255, 102)`

## Font Files

| Family | Source | Weights | Styles |
|--------|--------|---------|--------|
| Montserrat | google-fonts | 400, 600, 700, 800, 900 | normal |
| Open Sans | google-fonts | 300, 400, 600, 700 | normal |

**Google Fonts URL:** `https://fonts.googleapis.com/`

## Image Style Patterns

| Pattern | Count | Key Styles |
|---------|-------|------------|
| thumbnail | 14 | objectFit: contain, borderRadius: 0px, shape: square |
| general | 8 | objectFit: cover, borderRadius: 0px, shape: square |
| hero | 3 | objectFit: cover, borderRadius: 0px, shape: square |
| gallery | 1 | objectFit: cover, borderRadius: 0px, shape: square |

**Aspect ratios:** 4:3 (10x), 2.82:1 (8x), 1:1 (4x), 9.48:1 (2x), 1.95:1 (1x), 2.71:1 (1x)

## Motion Language

**Feel:** mixed · **Scroll-linked:** yes

### Duration Tokens

| name | value | ms |
|---|---|---|
| `xs` | `150ms` | 150 |
| `sm` | `200ms` | 200 |
| `md` | `300ms` | 300 |
| `lg` | `500ms` | 500 |
| `xl` | `1s` | 1000 |

### Easing Families

- **custom** (112 uses) — `cubic-bezier(0.4, 0, 0.2, 1)`
- **ease-out** (10 uses) — `cubic-bezier(0, 0, 0.2, 1)`

### Keyframes In Use

| name | kind | properties | uses |
|---|---|---|---|
| `ping` | reveal | transform, opacity | 1 |
| `pulse` | fade | opacity | 1 |

## Brand Voice

**Tone:** playful · **Pronoun:** third-person · **Headings:** Title Case (balanced)

### Sample Headings

> LÜKS MUTFAK, BANYO & TADİLAT.
> NELER ÜRETİYORUZ?
> LÜKS ADA MUTFAK
> MİMARİ BANYO
> GİYİNME ODASI & KAPI
> LÜKS MUTFAK, BANYO & TADİLAT.
> NELER ÜRETİYORUZ?
> LÜKS ADA MUTFAK
> MİMARİ BANYO
> GİYİNME ODASI & KAPI

## Page Intent

**Type:** `landing` (confidence 0.45)
**Description:** İzmir genelinde kişiye ve mekana özel lüks ada mutfak dolapları, lüks banyo renovasyonu, giyinme odaları ve anahtar teslim daire/villa taahhüdü. 28 yıllık üretim tecrübesi.

## Section Roles

Reading order (top→bottom): nav → nav → steps → content → steps → content → content → content → steps → content → footer

| # | Role | Heading | Confidence |
|---|------|---------|------------|
| 0 | nav | — | 0.4 |
| 1 | nav | — | 0.9 |
| 2 | steps | LÜKS MUTFAK, BANYO & TADİLAT. | 0.75 |
| 3 | content | LÜKS MUTFAK, BANYO & TADİLAT. | 0.3 |
| 4 | steps | NELER ÜRETİYORUZ? | 0.75 |
| 5 | content | KIRIM & MOLOZDAN KUSURSUZ LÜKSE | 0.3 |
| 6 | content | ESERLERİMİZ | 0.3 |
| 7 | content | SHOWROOM KOMİSYONU YOK.
DOĞRUDAN FABRİKADAN EVİNİZE. | 0.3 |
| 8 | steps | TADİLAT VE İMALATTA KULLANDIĞIMIZ 1. SINIF BOYA MARKALARI | 0.75 |
| 9 | content | EVİNİZİN TADİLATI NE KADAR TUTAR? | 0.3 |
| 10 | footer | — | 0.95 |

## Material Language

**Label:** `material-you` (confidence 0.45)

| Metric | Value |
|--------|-------|
| Avg saturation | 0.378 |
| Shadow profile | soft |
| Avg shadow blur | 0px |
| Max radius | 9999px |
| backdrop-filter in use | no |
| Gradients | 4 |

## Imagery Style

**Label:** `photography` (confidence 0.192)
**Counts:** total 26, svg 0, icon 4, screenshot-like 0, photo-like 8
**Dominant aspect:** square-ish
**Radius profile on images:** square

## Component Library

**Detected:** `tailwindcss` (confidence 0.782)

Evidence:
- tailwind-like class density 75%

## Quick Start

To recreate this design in a new project:

1. **Install fonts:** Add `Montserrat` from Google Fonts or your font provider
2. **Import CSS variables:** Copy `variables.css` into your project
3. **Tailwind users:** Use the generated `tailwind.config.js` to extend your theme
4. **Design tokens:** Import `design-tokens.json` for tooling integration
