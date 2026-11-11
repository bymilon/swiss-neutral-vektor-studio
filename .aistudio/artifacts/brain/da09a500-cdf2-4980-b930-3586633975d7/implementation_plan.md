# Swiss Neutral — Landing Page Design System (Vektor Studio)

A quiet, mathematically precise Swiss-grotesk landing page for **Vektor Studio**—an autonomous AI software engineering and terminal studio. Built strictly around the Swiss Neutral design system: near-black Inter Tight typography with mid-sentence drops to pale gray, hairline borders instead of shadows, one white shell on a warm-gray page, and a single iridescent brand gradient saved for moments that matter.

---

### User Review & Critical Decisions

> [!IMPORTANT]
> The architectural and design decisions below incorporate the selections confirmed during Phase 1:
> - **Product Domain**: Autonomous AI software engineering and terminal studio (**Vektor Studio**).
> - **Hero Mockup**: Live app-window mockup featuring multi-artboard canvas (agent terminal stream, streaming code generation frame with CSS reveal sweep, and live preview) rather than floating detached elements.
> - **Interactive Controls**: Functional interactive controls integrated directly into the living demo window (sweep speed/pause toggle, zoom scaler, and live agent task inspector).

---

## 1. Overview & Core Concept

- **Product**: **Vektor Studio** — an autonomous software engineering and terminal studio that plans, writes, verifies type invariants, and deploys full-stack services with verified autonomy.
- **Target Audience**: Senior engineers, technical founders, and systems architects who want high-rigor, deterministic autonomous dev tools without cheesy chatbot gimmicks or visual clutter.
- **Value Proposition**: "Engineering without the ceremony" — agents that autonomously inspect repositories, run headless test suites, resolve build failures, and deploy preview environments while keeping developers in full authorial control.

---

## 2. User Experience & Visual Design

### Visual Identity & Theme Tokens

| Token | Hex / Value | Role in Vektor Studio |
|---|---|---|
| `page` | `#e9e9e6` | Outer page background surround |
| `card / shell` | `#ffffff` | Single white 18px-radius shell container and inner cards |
| `line-1` | `#f0f0ec` | Full-height inner rails (44px inset) and section dividers |
| `line-2` | `#e6e6e2` / `#e3e3df` | Card borders, window outlines, hairline frames |
| `ink` | `#161614` | Primary headlines, primary action pills, dark UI |
| `body` | `#71716b` | High-legibility technical body copy (13–14px / 1.65 line-height) |
| `headline-gray` | `#b9b9b2` | De-emphasized second line / trailing clause of headlines |
| `brand gradient` | `#ff5bd6 → #8b5cf6 → #38bdf8` | Reveal sweep line, logo mark highlight, testimonial accent |
| `accent-warm` | `#d97757` | Agent presence (Codex cursor, active task badges) |
| `accent-state` | `#8b5cf6` | Active streaming state, border highlights (`#a78bfa`) |
| `positive` | `#16a34a` / `#22c55e` | Live execution status, passing compiler checks |

### Typography & Strict Hierarchy

- **Inter Tight (400, 500, 600, 700)**: Loaded via Google Fonts.
  - Headlines: Weight 600, `letter-spacing: -0.045em`, `text-wrap: balance`. Two-tone color split: first line in `#161614`, second phrase dropped to `#b9b9b2`.
  - Body: 13.5px, line-height 1.65, `#71716b`.
  - Inside App Mockup: Sentence case, 10–12px, weight 500–600, frame labels 10.5px / 500 / `#a3a39c`. No monospace or all-caps inside product UI.
- **IBM Plex Mono (400, 500)**: 10px, `letter-spacing: 0.16em`, uppercase, color `#8f8f88`. Strictly reserved for page-level section eyebrows and footer metadata.

### Page Structure & Canonical Section Order

```
┌──────────────────────────────────────────────────────────────────┐  #e9e9e6 Page Background
│  ┌────────────────────────────────────────────────────────────┐  │  20px Margin, 18px Radius
│  │ 44px Rail │                                    │ 44px Rail │  │  #ffffff Shell (#e3e3df border)
│  │     │     ├────────────────────────────────────┤     │     │  │
│  │     │     │ 1. Navigation Bar (Top Bar Contract)│     │     │  │
│  │     │     ├────────────────────────────────────┤     │     │  │
│  │     │     │ 2. Hero Section                    │     │     │  │
│  │     │     │    - Two-Tone Headline & Subtitle  │     │     │  │
│  │     │     │    - Primary Ink & Ghost CTAs      │     │     │  │
│  │     │     │    - Living App-Window Mockup      │     │     │  │
│  │     │     │      * Active Sweep & Drifting Pins│     │     │  │
│  │     │     │      * Interactive Zoom & Controls │     │     │  │
│  │     │     │    - Logo Bar (Hairline Cells)     │     │     │  │
│  │     │     ├────────────────────────────────────┤     │     │  │
│  │     │     │ 3. Workflow Steps (01, 02, 03)     │     │     │  │
│  │     │     ├────────────────────────────────────┤     │     │  │
│  │     │     │ 4. Centered "One Command" Moment   │     │     │  │
│  │     │     ├────────────────────────────────────┤     │     │  │
│  │     │     │ 5. Attributable Testimonial Quote  │     │     │  │
│  │     │     ├────────────────────────────────────┤     │     │  │
│  │     │     │ 6. Capabilities Bento Grid (Cards) │     │     │  │
│  │     │     ├────────────────────────────────────┤     │     │  │
│  │     │     │ 7. Interactive Accordion FAQ       │     │     │  │
│  │     │     ├────────────────────────────────────┤     │     │  │
│  │     │     │ 8. Closing CTA (Brand Glow)        │     │     │  │
│  │     │     ├────────────────────────────────────┤     │     │  │
│  │     │     │ 9. Engineered Footer & Microlabels │     │     │  │
│  │     │     └────────────────────────────────────┘     │     │  │
│  └────────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────────┘
```

---

## 3. Product Demo (Living App-Window Mockup)

The living app window serves as the hero centerpiece, demonstrating real autonomous engineering in action:

1. **Window Container**:
   - 12px border radius, `1px solid #e3e3df`, whisper shadow (`0 1px 2px rgba(20,20,15,.04), 0 12px 32px rgba(20,20,15,.05)`), seated directly on `#ffffff`.
   - Window Titlebar (34px): three pastel traffic dots (`#fca5a5`, `#fcd34d`, `#86efac`), workspace path label `vektor / runtime-agent-cluster`.
2. **App Toolbar (44px)**:
   - Left: Vektor brand mark + workspace name (`vektor-core / v1.4`) + green live dot with pulsing ring.
   - Right: Active actor avatars (Claude, Codex, and Lead Engineer), ghost "Share" pill, ink "Deploy" pill.
3. **Canvas Area (Dot Grid)**:
   - `#fcfcfb` with `radial-gradient(#e5e5e0 1px, transparent 1px) 22px 22px`.
   - **Artboard A (Terminal & Prober)**: Headless test runner output, compiler checks, 14 test suites passed.
   - **Artboard B (The Active Streaming Frame)**: Soft accent border (`1px solid #a78bfa`), header pill `Codex is generating schema.ts…` (`#d97757`), continuous CSS reveal sweep wiping down with glowing 2px gradient line (`#ff5bd6 → #8b5cf6 → #38bdf8`), blinking cursor.
   - **Artboard C (Verified Production Preview)**: Clean UI card showing the generated service dashboard.
4. **Docked 220px Tasks / Activity Panel**:
   - Right rail showing queued agent actions, task status chips, and an inset human-in-the-loop review card (`#fafaf8`).
5. **Drifting Actor Cursors & Presence**:
   - SVG arrow cursors with attached name labels for "Codex" (`#d97757`) and "Alex (Tech Lead)" (`#8b5cf6`) drifting smoothly via CSS keyframes.
6. **Interactive Window Controls**:
   - Sweep Play / Pause / Replay toggle.
   - Zoom scale selector (`90%`, `100%`, `110%`).
   - Switchable inspector tab between "Terminal Logs" and "Type Invariants".

---

## 4. Key Sections Breakdown

### 1. Header (Top Bar Contract)
- Zone 1: Wordmark `Vektor` with 8px iridescent brand gradient glyph.
- Zone 2: Navigation links (`Architecture`, `Workflow`, `Capabilities`, `Benchmarks`, `Docs`) with subtle hover lines.
- Zone 3: Primary action pill (Ink background `#161614`, white text, 999px radius, `Start Sandbox ↗`).

### 2. Hero Section
- Two-tone headline:
  `Autonomous engineering.` (ink)
  `Verified at the compiler level.` (headline-gray `#b9b9b2`)
- Copy: "Vektor orchestrates autonomous coding agents with deterministic invariant checks. No hallucinated migrations, no silent failures, no broken builds."
- CTAs: Primary ink pill `Deploy your first cluster` + ghost pill `View documentation`.
- Living Demo: Embedded app-window mockup with full motion rules.
- Hairline Logo Bar: Equal hairline cells with leading engineering logos (Vercel, Supabase, Cloudflare, Linear, GitHub, Stripe), with the featured cell `#f6f6f3` and inline SVG `↗`.

### 3. Workflow Steps
- Three numbered editorial steps (`01. Repository Ingest & AST Analysis`, `02. Headless Prober & Type Invariant Loop`, `03. Atomic Git Commit & Deployment`).
- Clean hairline cards with code snippets and real execution timelines.

### 4. Centered "One Command" Moment
- Centered terminal prompt: `$ npx vektor run --cluster=production` with interactive "Copy" feedback, live syntax coloring, and simulated instant autonomous bootstrap.

### 5. Attributable Testimonial
- Single quote from VP of Infrastructure: "Vektor eliminated 80% of our routine migration and type sync toil. The agents don't guess—they test before they commit."
- Signature text highlight: `background: linear-gradient(90deg, #fbc7f0, #ddd6fe)` on the key outcome phrase.

### 6. Capabilities Bento Grid
- Asymmetric 3-card grid:
  1. *Sub-second Type Verification*: Instant AST analysis with tabular latency figures (120ms).
  2. *Deterministic Rollbacks*: Git-native immutable checkpoints.
  3. *Zero-Privilege Sandboxes*: Ephemeral microVMs running every test suite in isolation.

### 7. Interactive FAQ
- Accordion component with smooth expansion and zero layout shift, answering questions on sandbox security, model selection, git workflows, and enterprise compliance.

### 8. Closing CTA
- Minimalist conversion block with soft blurred brand gradient glow (`filter: blur(34px)`, opacity 0.35) behind ink button.

### 9. Engineered Footer
- Quiet copyright, IBM Plex Mono microlabels, system status marker (all systems nominal), and documentation links.

---

## 5. Technical Architecture & Component Tree

```
┌────────────────────────────────────────────────────────┐
│ App.tsx (Root Container: #e9e9e6 bg, #ffffff shell)   │
├────────────────────────────────────────────────────────┤
│ ├── Navigation.tsx (3-Zone Top Bar Contract)           │
│ ├── Hero.tsx                                           │
│ │   ├── HeroHeadlines.tsx (Two-tone Inter Tight)       │
│ │   ├── DemoWindow.tsx (Mockup with Canvas & Rails)    │
│ │   │   ├── WindowToolbar.tsx                          │
│ │   │   ├── CanvasGrid.tsx (Dot grid & 3 Artboards)    │
│ │   │   │   ├── TerminalArtboard.tsx                   │
│ │   │   │   ├── RevealSweepArtboard.tsx (CSS Sweep)    │
│ │   │   │   └── PreviewArtboard.tsx                    │
│ │   │   ├── SidePanel.tsx (Agent queue & feedback)     │
│ │   │   ├── DriftingCursors.tsx (Keyframe drift)       │
│ │   │   └── MockupControls.tsx (Zoom & Sweep trigger)  │
│ │   └── LogoBar.tsx (Hairline brand row)               │
│ ├── WorkflowSection.tsx (01-03 Editorial Steps)        │
│ ├── CommandSection.tsx (One-action terminal trigger)   │
│ ├── TestimonialSection.tsx (Gradient highlight)        │
│ ├── CapabilitiesGrid.tsx (Asymmetric Bento cards)      │
│ ├── FaqSection.tsx (Interactive accordion)             │
│ ├── ClosingCta.tsx (Blurred brand glow moment)         │
│ └── Footer.tsx (Mono microlabels, hairline rail links) │
└────────────────────────────────────────────────────────┘
```

---

## 6. Verification Plan

1. **Compilation & Linting**: Run `compile_applet` and `lint_applet` together to verify zero TypeScript errors, clean imports, and standard Tailwind v4 rules.
2. **Design System Adherence**:
   - Verify page background `#e9e9e6` with 20px margin white shell (`#ffffff`) and `#e3e3df` border.
   - Verify 44px vertical hairlines (`#f0f0ec`) running the length of the page.
   - Verify Inter Tight typography with `letter-spacing: -0.045em` on headlines and two-tone color drop.
   - Verify IBM Plex Mono used exclusively for page-level microlabels (never inside mockup UI).
   - Verify CSS reveal sweep animation (gradient line, blank below, revealed above).
   - Verify drifting cursors with natural translation loops.
3. **Interactive Handlers**:
   - Verify interactive zoom control scales canvas smoothly.
   - Verify sweep pause/play controls.
   - Verify FAQ accordion expansion without visual jumps.
   - Verify command copy-to-clipboard button with visual feedback.
