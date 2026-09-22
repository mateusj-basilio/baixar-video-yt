---
name: Kinetic Dark Studio
colors:
  surface: '#111317'
  surface-dim: '#111317'
  surface-bright: '#37393d'
  surface-container-lowest: '#0c0e11'
  surface-container-low: '#1a1c1f'
  surface-container: '#1e2023'
  surface-container-high: '#282a2d'
  surface-container-highest: '#333538'
  on-surface: '#e2e2e6'
  on-surface-variant: '#e8bcbb'
  inverse-surface: '#e2e2e6'
  inverse-on-surface: '#2f3034'
  outline: '#ae8787'
  outline-variant: '#5e3f3e'
  surface-tint: '#ffb3b3'
  primary: '#ffb3b3'
  on-primary: '#680014'
  primary-container: '#ff525f'
  on-primary-container: '#5b0011'
  inverse-primary: '#bf002e'
  secondary: '#c0c1ff'
  on-secondary: '#1000a9'
  secondary-container: '#3131c0'
  on-secondary-container: '#b0b2ff'
  tertiary: '#00daf3'
  on-tertiary: '#00363d'
  tertiary-container: '#009fb2'
  on-tertiary-container: '#002f35'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdad9'
  primary-fixed-dim: '#ffb3b3'
  on-primary-fixed: '#400009'
  on-primary-fixed-variant: '#920021'
  secondary-fixed: '#e1e0ff'
  secondary-fixed-dim: '#c0c1ff'
  on-secondary-fixed: '#07006c'
  on-secondary-fixed-variant: '#2f2ebe'
  tertiary-fixed: '#9cf0ff'
  tertiary-fixed-dim: '#00daf3'
  on-tertiary-fixed: '#001f24'
  on-tertiary-fixed-variant: '#004f58'
  background: '#111317'
  on-background: '#e2e2e6'
  surface-variant: '#333538'
typography:
  display:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.025em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
    letterSpacing: -0.02em
  title-sm:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-base:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: -0.005em
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0em
  code-mono:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: -0.01em
  badge-mono:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system is engineered for a high-performance media extraction and indexing utility. The product bridges heavy-duty utility with the tactile polish of elite developer tooling. Built for creators, archivers, and video engineers, the UI rejects generic consumer downloader tropes in favor of an exacting, keyboard-first, studio-grade control surface.

The aesthetic synthesizes:
- **Linear/Raycast Precision:** Hyper-disciplined dark geometry, crisp 1px hair-thin structural dividers, micro-interactions, and tight spatial density where data matters.
- **Vercel Polish:** Monochromatic baseline, intentional typography hierarchy, subdued secondary metadata, and zero visual clutter.
- **Controlled Luminescence:** Deep void-black canvases punctured by a singular, intense crimson accent that signals execution, parsing, and state transformation, softened by cool auxiliary tints for passive monitoring states.

The interface should feel instantaneous, weighted, and engineered, evoking total reliability and mechanical precision.

## Colors

The palette relies on a pitch-black foundation stepping progressively through calibrated charcoal layers, anchored by an ultra-saturated crimson primary that mimics high-energy hardware indicators.

### Surface Architecture
- **Canvas Base:** `#0B0D10` — Infinite canvas background.
- **Surface Level 1:** `#12151B` — Structural cards, navigation sidebars, and control trays.
- **Surface Level 2:** `#1A1E26` — Nested cards, input containers, active queue rows, and dropdown menus.
- **Surface Level 3 / Hover:** `#222834` — Hover states, modal dialogs, and elevated popovers.

### Borders & Delimiters
- **Subtle (Structural):** `#242A35` — Default 1px boundary for cards, dividers, and table rows.
- **Interactive / Active:** `#2F3746` — Hovered borders, active inputs, and elevated container boundaries.
- **Highlight Edge:** `rgba(255, 255, 255, 0.08)` — Subtle top-edge inner shine on interactive cards and buttons.

### Accents & Indicators
- **Primary Accent (Crimson Core):** `#FF1744` — Download triggers, progress heads, YouTube stream selectors, error terminals, and active recording pulses.
- **Crimson Glow/Tint:** `rgba(255, 23, 68, 0.15)` — Translucent underlays for active states and focus rings.
- **Auxiliary Tech Indigo:** `#6366F1` — Playlist parsing, batch operation indicators, and structural metadata tags.
- **Auxiliary Cyan/Teal:** `#00E5FF` — Pure audio streams, lossless tags (WAV/FLAC), and completed transfer signals.

### Typography & Foreground
- **Text Primary:** `#F3F4F6` — Headlines, active media titles, primary button text.
- **Text Secondary:** `#94A3B8` — Metadata keys, subtitles, inactive nav items.
- **Text Muted:** `#4B5565` — Disabled actions, empty state captions, shortcut glyphs.

## Typography

The typography uses a tri-font hierarchy:
1. **Geist** for crisp, structural headings and heroic input fields. Its geometric construction brings contemporary developer tool rigor to media indexing.
2. **Inter** handles narrative copy, configuration panels, and complex property sheets where character distinction and reading speed at micro sizes are critical.
3. **JetBrains Mono** governs the data telemetry: file weights (e.g., `1.84 GB`), bitrates (`320 kbps`, `4K60 HDR`), durations (`02:44:12`), resolution tags, and live transfer network speeds.

All headings must utilize optical kerning with negative letter tracking to eliminate loose characters in dark viewports. Numerical data badges and status pills must always employ monospace tabular figures to eliminate horizontal jitter during live download updates.

## Layout & Spacing

The layout is built around a centralized utility canvas that defaults to an 8px modular cadence.
- **Desktop (1280px+):** Max-width content boundary capped at 1280px for queue lists and analytics dashboards, or 840px for single-stream command extraction views. 12-column layout with 24px gutters (`1.5rem`) and 32px canvas margins (`2rem`).
- **Tablet (768px – 1279px):** 8-column layout with 16px gutters (`1rem`) and 24px margins (`1.5rem`). Media panels compress, moving configuration options below media thumbnails.
- **Mobile (< 768px):** 4-column layout with 16px canvas padding. Action bars anchor to bottom safe areas as floating frosted sheets.

### Spacing Philosophy
Negative space is deliberately generous around container groupings (`space-xl`) to establish hierarchy, but tight and dense inside items (`space-xs` and `space-sm`) to maximize visible real estate for download queues, format chips, and stream selectors.

## Elevation & Depth

Visual depth is achieved through layered surface luminance, razor-thin outlines, and selective back-glows rather than traditional diffuse drop shadows.

### Elevation Hierarchy
- **Level 0 (Canvas):** Pure `#0B0D10` base without elevation.
- **Level 1 (Card/Container):** Flat `#12151B` fill encased by a 1px border of `#242A35`. Features a continuous inset box-shadow: `inset 0 1px 0 0 rgba(255, 255, 255, 0.05)` to create an engineered top-specular bevel.
- **Level 2 (Popovers, Flyouts, Queue Rows):** `#1A1E26` background, border `#2F3746`, paired with an ambient drop: `0 8px 24px -4px rgba(0, 0, 0, 0.6)`.
- **Level 3 (Modal Centerpieces):** Backed by an ultra-dark frosted shield (`backdrop-filter: blur(16px); background: rgba(11, 13, 16, 0.8)`), framed by a dual shadow: `0 24px 48px -12px rgba(0, 0, 0, 0.85), 0 0 0 1px #2F3746`.

### Crimson Luminescence
Primary actions, download triggers, and active stream nodes generate focused back-glows:
- **Glow Accent:** `0 0 24px -2px rgba(255, 23, 68, 0.35)` applied on hover or active processing states.
- **Status Rim:** Subtle perimeter glow used exclusively when an item is actively multiplexing or downloading.

## Shapes

The interface balances sharp technological precision with ergonomic software design. The base roundedness token is set to `2`:
- **Controls & Micro-elements:** Buttons, format tags, input pills, and metadata chips adopt `rounded-md` (8px / `0.5rem`).
- **Cards & Primary Modules:** Stream processing cards, batch containers, and URL capture boxes use `rounded-xl` (16px / `1rem`).
- **Dialogs & Overlay Trays:** Full modals and floating action bars use `rounded-2xl` (24px / `1.5rem`).

All borders on curved corners must render using continuous curves (squircle emulation via SVG/canvas or modern CSS border smoothing) to eliminate visual pinch points.

## Components

### Hero URL Command Bar
- Giant text field encapsulated in a 16px rounded surface (`#12151B`), bordered by `#242A35`.
- Contains integrated action accessories: a `⌘V` (Paste) pill badge, an automated URL format parser indicator (`YouTube Video`, `Short`, `Playlist`), and an instant "Fetch" button directly pinned inside the right margin.
- Focus state activates an outer ring glow of `0 0 0 1px #FF1744, 0 0 20px rgba(255, 23, 68, 0.15)`.

### Buttons
- **Primary (Execute / Download):** Background `#FF1744`, text `#FFFFFF`, top inner bevel `inset 0 1px 0 rgba(255, 255, 255, 0.25)`. Hover transition shifts luminance to `#FF3360` with a `0 0 20px rgba(255, 23, 68, 0.4)` glow. Active state initiates a 0.98 scale compression.
- **Secondary (Format Switching / Settings):** Surface `#1A1E26`, 1px border `#242A35`, text `#F3F4F6`. Hover triggers border transition to `#2F3746` and surface to `#222834`.
- **Ghost (Inline Tools / Copy):** Transparent base, text `#94A3B8`, switching to text `#F3F4F6` and background `rgba(255, 255, 255, 0.05)` on interaction.

### Format & Quality Selection Chips
- Compact pills utilizing `badge-mono` font sizing.
- Inactive: `#12151B` background with `#242A35` border and `#94A3B8` text.
- Active/Selected: Rich deep base (`rgba(255, 23, 68, 0.1)`), vibrant crimson text (`#FF1744`), and a crisp `#FF1744` hairline border.

### Media Stream Queue Cards
- Horizontal cards featuring a 16:9 thumbnail preview container with integrated duration pill (`08:42` in JetBrains Mono at bottom-right corner).
- Two-tier metadata display: Title rendered in Geist (Semi-bold, truncate at 2 lines), underneath which sits a telemetry track detailing format, resolution, audio codec, and real-time download velocity.
- Integrated background progress bar positioned at the card's baseline: a 2px track that illuminates in `#FF1744` as the stream is downloaded, written, and remuxed.

### Checkboxes & Toggle Controls
- Custom square selectors (18px) with 4px corner radii.
- Unchecked: `#12151B` with 1px border `#242A35`.
- Checked: Solid `#FF1744` background with a crisp white check vector mark.
- Toggles utilize a sliding pill architecture (20px height, 36px width) with a smooth ease-out spring physics transition.