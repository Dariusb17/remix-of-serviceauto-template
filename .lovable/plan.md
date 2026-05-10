## Direction

Push the site toward a cinematic Porsche/Tesla feel with moderate motion (3/5). Add depth, scroll-driven reveals, and two new content sections (stats + hours/location) so the page feels longer and more like a real business.

## Visual upgrades (global)

- **Hero**: add a slow Ken Burns zoom on the background photo, animated scan-line / gradient sweep, and a soft red radial glow that drifts. Subtitle/CTA enter staggered. Replace static chevron with a vertical animated line + "SCROLL" label.
- **Section headers**: add a small animated index marker (e.g. `01 — Servicii`) with a thin red line that draws in on scroll.
- **Cards (Services, Reviews, WhyUs)**: add a subtle red gradient border that appears on hover (conic-gradient mask trick), plus a parallax tilt of ~3° on mouse move (desktop only).
- **Background**: keep the noise texture; add a faint fixed red radial glow that follows scroll position to give cinematic depth.
- **Section dividers**: thin animated red line that draws across the viewport when entering each section.
- **Typography moments**: oversized faded watermark numerals behind a few section titles (00–05).

## New section: Stats counter strip

Placed between TrustBar and Services. Dark band, 4 columns:

- `15+` Ani de experiență
- `8.500+` Mașini reparate
- `98%` Clienți mulțumiți
- `24h` Timp mediu de răspuns

Numbers animate from 0 → final on scroll into view (IntersectionObserver + requestAnimationFrame, ~1.2s ease-out). Thin vertical red dividers between columns.

## New section: Program & Locație

Placed after Reviews / RatingBadge. Two-column layout (stacks on mobile):

- **Left — Program de lucru**: weekday list (Luni–Vineri 08:00–18:00, Sâmbătă 09:00–14:00, Duminică Închis), with a live "Deschis acum / Închis" pill computed from current time.
- **Right — Locație**: stylized dark map placeholder (CSS grid lines + red pin marker, no external map service) with city name and a "Deschideți în Maps" link → `https://www.google.com/maps/search/?api=1&query=Service+Auto+{city}`.

## New: Process strip (light addition)

Compact 4-step horizontal flow under the stats: `01 Programare → 02 Diagnoză → 03 Reparație → 04 Garanție`. Connected by a thin red line that draws in on scroll. Keeps page rhythm without a heavy section.

## Motion / interactivity additions

- New `<Reveal>` primitive (extends FadeIn) supporting `direction` (up/left/right) and `delay` for staggering.
- `<Counter>` component for animated numbers.
- `<TiltCard>` wrapper (mouse-tracked transform, disabled on touch).
- Smooth-scroll behavior already on; add `scroll-margin-top` for nav offset.
- Navbar: becomes more compact + adds a subtle bottom border glow once scrolled past 80px.

## Files

- New: `src/components/landing/Stats.tsx`, `Process.tsx`, `Hours.tsx`, `Counter.tsx`, `TiltCard.tsx`, `Reveal.tsx`, `SectionHeader.tsx`, `ScrollGlow.tsx`
- Edit: `Hero.tsx` (Ken Burns + staggered enter + new scroll indicator), `Navbar.tsx` (scroll state), `Services.tsx` / `WhyUs.tsx` / `Reviews.tsx` (use SectionHeader + TiltCard + watermark numerals), `routes/index.tsx` (insert new sections in order), `styles.css` (keyframes for ken-burns, draw-line, gradient sweep)

## Final page order

1. Navbar
2. Hero (cinematic)
3. TrustBar
4. **Stats** (new)
5. **Process** (new)
6. Services
7. WhyUs
8. Gallery (conditional)
9. About
10. Reviews
11. RatingBadge (conditional)
12. **Hours + Locație** (new)
13. ContactCTA
14. Footer

All existing URL param logic stays intact; new sections are static so they look great even with zero params.