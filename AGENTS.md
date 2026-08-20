<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Freddie Unciano Jr — Portfolio (Next.js)

## Project overview

Single-page personal portfolio for Freddie Unciano Jr (full-stack developer), converted 1:1 from the static reference file `reference/updated-profile-green.html` into a **Next.js (App Router) + TypeScript** project. The visual output is intended to match the reference pixel-for-pixel (layout, spacing, colors, fonts, breakpoints, interactions).

**Tech stack & why:**

- **Next.js 16 (App Router) + React 19 + TypeScript** — required by the task.
- **Tailwind CSS v3** (NOT v4) — the reference uses the Tailwind Play CDN, which is Tailwind **v3**, with an inline `tailwind.config`. v3's classic `tailwind.config.ts` maps 1:1 to that theme (custom colors `cream/paper/sand/sage/ink/pine/amber/brick`, fonts, `max-w-content`, and arbitrary values like `h-[76px]`, `rotate-[-2deg]`, `brightness-[.45]`, `grid-cols-[1.15fr_.85fr]`). v4's CSS-first `@theme` config has subtle behavioural differences → higher drift risk, so it was avoided.
- **`next/font/google`** (self-hosted) for Fraunces, Atkinson Hyperlegible and Caveat — same glyphs, no render-blocking external CSS. Exposed as `--font-display` / `--font-body` / `--font-hand` CSS variables wired into the Tailwind `fontFamily` config.
- **No runtime UI/animation/icon libraries** — the reference needs none (no carousels/sliders; icons are emoji + inline SVG; all animation is CSS transitions + IntersectionObserver). The reference's **jQuery was deliberately dropped** and reimplemented in React idioms.
- Dev deps added beyond the scaffold: `tailwindcss@^3.4`, `postcss`, `autoprefixer`.

## Setup

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # clean production build (static prerender of "/")
npm run lint    # ESLint (flat config)
```

Node 18.18+ required (tested on Node 24 / npm 11).

## Folder structure

```
app/
  layout.tsx      # fonts, metadata, <html class="js">, Header/Footer/BackToTop/ChatBubble shell
  page.tsx        # <main id="main"> → composes all 9 section components in order
  globals.css     # Tailwind directives + reference's custom CSS (reveal, skill-fill, scrolled, toTop, reduced-motion)
components/
  Header.tsx      # "use client" — sticky header, mobile menu, scrolled shadow, PH clock
  Hero.tsx        # server component (uses <Reveal>)
  About.tsx       # server component
  Experience.tsx  # server component — timeline (typed Job[])
  Projects.tsx    # server component — data-driven project articles (typed Project[], each with images: ProjectImage[])
  ProjectCarousel.tsx  # "use client" — slide-through carousel for projects with 2+ screenshots
  Lab.tsx         # server component — 3 experiment cards (typed LabCard[])
  Skills.tsx      # "use client" — animated skill bars (IntersectionObserver)
  Gallery.tsx     # "use client" — filter buttons + grid (typed GalleryItem[])
  KindWords.tsx   # server component — testimonials (typed Testimonial[])
  Contact.tsx     # "use client" — FAQ accordion, copy-email, validated form
  Footer.tsx      # "use client" — PH clock + footer nav
  BackToTop.tsx   # "use client" — scroll-driven visibility + smooth scroll-to-top
  ChatBubble.tsx  # "use client" — NEW floating chat widget (local state, stubbed)
  Reveal.tsx      # "use client" — polymorphic (<Reveal as="...">) scroll-reveal wrapper
lib/
  hooks.ts        # usePhilippineClock() hook
  data.ts         # ALL site content: typed interfaces + data arrays (JOBS, PROJECTS, LAB_CARDS, BARS/GROUPS, ITEMS, TESTIMONIALS, FAQS, nav links…) — single source of truth
```

Static sections stay server components and use the polymorphic `<Reveal as="p|li|figure|img|blockquote|...">` client component for scroll-reveal, preserving the original element types and layout.

## What was done

- Converted all 9 sections (Hero, About, Experience, Projects, Lab, Skills, Gallery/Off-Screen, Kind Words, Contact) + header/footer/back-to-top into typed React components. Repeated data (jobs, lab cards, skill bars/groups, gallery items, testimonials, FAQ, nav links) is driven by typed `interface`s + arrays, all centralized in `lib/data.ts`.
- Reimplemented every jQuery behaviour with React state/hooks:
  - scroll reveal → `Reveal` (IntersectionObserver, threshold 0.15, rootMargin `0 0 -40px 0`, `.d1`/`.d2` delays)
  - skill bar fill → `Skills` (IntersectionObserver + inline `width`)
  - PH clock → `usePhilippineClock` (`Intl.DateTimeFormat('en-US', { timeZone: 'Asia/Manila', … })`, 30s interval, `"8:45 AM PH"` format)
  - mobile menu toggle, sticky-header `.scrolled` shadow (y > 8), back-to-top `.show` (y > 600) → `useState` + scroll/resize listeners
  - FAQ accordion (single-open), gallery filter, copy-email (`navigator.clipboard` + `execCommand` fallback), form validation + success state → React state
- `next/link` used for same-page anchor navigation; `scroll-mt-[84px]` on each section reproduces the original −84px sticky-header scroll offset.
- Added `ChatBubble.tsx` (see below).
- Kept semantic tags (`header/nav/main/section/article/figure/blockquote/footer`), the skip link, `aria-label`s, `role="alert"`, and `aria-expanded`/`aria-pressed` states from the reference.

## Fidelity notes (deviations from the reference)

1. **`next/image` not used** — plain `<img>` kept for pixel fidelity (external `picsum.photos` placeholders, exact `object-cover`/transform/brightness behaviour). `@next/next/no-img-element` is disabled in `eslint.config.mjs`.
2. **Back-to-top repositioned** — moved from `bottom-6 right-6` to `right-[5.5rem]` so the new ChatBubble (bottom-right) doesn't overlap it. Small, intentional shift.
3. **Anchor scroll easing** — native CSS `scroll-behavior: smooth` replaces jQuery's 450ms "swing" `animate()`; same target and −84px offset, slightly different easing curve.
4. **Mobile menu & FAQ use show/hide** instead of jQuery's `slideToggle`/`slideUp` (~180ms slide). Final state is identical; the slide animation is a TODO.
5. **Reduced motion handled in CSS only** — `@media (prefers-reduced-motion: reduce)` in globals.css (reveal → opacity 1, transitions none). The reference also had a JS branch; the visual result is identical.
6. **`react/no-unescaped-entities` disabled** — the copy contains literal apostrophes/quotes in JSX text.
7. **A11y/semantics kept, no visual change** — alt text already present on meaningful images; decorative images keep `alt=""` + `aria-hidden`.
8. **Experience timeline restructured** — the reference uses a two-column split (date/left, card/right) around a center spine inside a `max-w-6xl` container. This was deliberately changed to a **centered year/date/caption block above each full-width card** (a small dot + short vertical line act as the connector). The section uses the **same `max-w-content` wrapper as the rest of the page**, so the card edges align with the other sections' content column. Visual theme (fonts/colors/badge/tags/blockquote) is unchanged.

## Chat bubble

`components/ChatBubble.tsx` — fixed bottom-right FAB (💬) that expands into a chat panel (message list + input + send). Styled with the site's design tokens (pine/cream/sage/amber, rounded corners, soft shadows), not a generic widget.

- **Currently:** all local component state — `messages: ChatMessage[]`, `input`, `typing`. Sending appends the user message, then after a 900ms fake delay a placeholder assistant reply from `stubReply()`.
- **A11y:** `role="dialog"`, `aria-expanded`, `aria-live="polite"` on the message list, Escape-to-close, click-outside-to-close, auto-scroll to newest.
- **To wire a real backend:** in `handleSend`, replace `stubReply(text)` with `fetch("/api/chat", { method: "POST", body: JSON.stringify({ messages }) })` (add `app/api/chat/route.ts`) or open a websocket. The `ChatMessage` shape is already backend-ready.

## TODO / known gaps

- Placeholder `href="#"` links (GitHub, LinkedIn, OnlineJobs, résumé PDF, "Code ↗", "Clips ↗") point nowhere — replace with real URLs.
- Images are `picsum.photos` placeholders — replace with real assets in `/public` when available.
- Chat replies are stubbed (no backend yet).
- Mobile menu / FAQ slide animation not yet replicated (could add a CSS max-height transition).
- `next/image` not adopted (intentional — see fidelity notes).

## How to verify

1. `npm install && npm run dev`, open http://localhost:3000.
2. Visually compare each section against `reference/updated-profile-green.html` at 375 / 768 / 1024 / 1280px widths (colors, spacing, fonts, rotations, breakpoints).
3. Test interactions: mobile menu toggle, scroll-reveal, skill bars filling on scroll, gallery filter, FAQ accordion, copy-email ("Copied ✓"), form validation + success state, back-to-top, chat bubble open/send, sticky-header shadow, PH clock.
4. Toggle the OS "reduce motion" setting and confirm reveals/bars are instant.
5. `npm run lint` (0 errors) and `npm run build` (clean, static prerender of `/`).
6. Grep the prerendered HTML `.next/server/app/index.html` for key markers (e.g. "Open to new work", "skill-fill", "ph-clock", "Open chat").


