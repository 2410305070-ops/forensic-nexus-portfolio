---
name: Digital Lab Archive
colors:
  surface: '#131314'
  surface-dim: '#131314'
  surface-bright: '#3a393a'
  surface-container-lowest: '#0e0e0f'
  surface-container-low: '#1c1b1c'
  surface-container: '#201f20'
  surface-container-high: '#2a2a2b'
  surface-container-highest: '#353436'
  on-surface: '#e5e2e3'
  on-surface-variant: '#c1c6d7'
  inverse-surface: '#e5e2e3'
  inverse-on-surface: '#313031'
  outline: '#8b90a0'
  outline-variant: '#414754'
  surface-tint: '#adc7ff'
  primary: '#adc7ff'
  on-primary: '#002e68'
  primary-container: '#4a8eff'
  on-primary-container: '#00285b'
  inverse-primary: '#005bc0'
  secondary: '#a5e7ff'
  on-secondary: '#003543'
  secondary-container: '#00d2ff'
  on-secondary-container: '#00566a'
  tertiary: '#c6c6cf'
  on-tertiary: '#2f3037'
  tertiary-container: '#909099'
  on-tertiary-container: '#282930'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc7ff'
  on-primary-fixed: '#001a41'
  on-primary-fixed-variant: '#004493'
  secondary-fixed: '#b6ebff'
  secondary-fixed-dim: '#47d6ff'
  on-secondary-fixed: '#001f28'
  on-secondary-fixed-variant: '#004e60'
  tertiary-fixed: '#e2e1eb'
  tertiary-fixed-dim: '#c6c6cf'
  on-tertiary-fixed: '#1a1b22'
  on-tertiary-fixed-variant: '#45464e'
  background: '#131314'
  on-background: '#e5e2e3'
  surface-variant: '#353436'
typography:
  display-lg:
    fontFamily: Space Grotesk
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  title-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style

This design system establishes a high-tech, forensic aesthetic that bridges the gap between biological science and digital innovation. The personality is clinical, precise, and authoritative, moving away from detective tropes toward a "Modern Laboratory" atmosphere.

The style is **Cyber-Minimalism** with **Glassmorphism** accents. It utilizes a deep, multi-layered dark mode architecture to simulate a high-end software interface used in forensic analysis. Visual interest is generated through light-refraction effects, subtle grid overlays, and "scanning" animations rather than traditional photography. The emotional response should be one of absolute trust, technical sophistication, and cutting-edge research.

## Colors

The palette is anchored in a near-black charcoal (`#0A0A0B`) to provide maximum depth and contrast. The primary "Electric Blue" functions as the "Action" color, while the "Cyan" secondary acts as a "Scan/Data" color, often used for data visualizations, borders, and active states.

**Functional Tints:**
- **Base Surface:** #0A0A0B (Absolute background)
- **Glass Surface:** RGBA(22, 22, 24, 0.7) (Translucent card backgrounds)
- **Accent Glow:** A subtle gradient from Electric Blue to Cyan, used sparingly for interactive highlights or "evidence" markers.
- **Data Grey:** Used for secondary metadata and technical annotations to prevent visual fatigue.

## Typography

The typographic hierarchy is built on a "Technical Precision" framework. **Space Grotesk** provides a geometric, futuristic feel for all headlines, utilizing its unique character shapes to emphasize the "Digital Science" theme.

**Inter** is the workhorse for body content, ensuring high legibility for long-form research papers and case studies. For technical metadata, DNA sequences, or case ID numbers, **JetBrains Mono** (or any monospaced alternative) is used to reinforce the laboratory data-entry aesthetic. All labels should be set in uppercase with slight tracking to evoke an institutional, categorized feel.

## Layout & Spacing

The layout follows a **Rigid Grid System** inspired by evidence spreadsheets and laboratory monitors. Use a 12-column grid for desktop with 24px gutters.

- **The Evidence Grid:** Content blocks should often be contained within visible but subtle 1px grid lines (Color: #161618), simulating a digital canvas or drafting board.
- **Sectioning:** Large vertical spacing (120px+) between major sections to allow the dark background to "breathe" and create a premium, gallery-like experience.
- **Mobile Reflow:** On mobile devices, the 12-column grid collapses to a single column with 16px margins. High-level headers should scale down to 32px to ensure no text wrapping issues.

## Elevation & Depth

Depth is conveyed through **Light Refraction and Translucency** rather than traditional drop shadows.

- **Glassmorphism:** All primary cards use a `backdrop-filter: blur(12px)` with a semi-transparent dark fill.
- **Layering:** Elements at higher z-indexes receive a subtle 1px "inner glow" border (Top/Left: white @ 10% opacity; Bottom/Right: Cyan @ 5% opacity).
- **Background Texture:** A subtle dot-matrix pattern or a very low-opacity fingerprint texture should be fixed to the background to provide microscopic detail as the user scrolls.
- **Shadows:** Use only one type of shadow—a "Deep Glow." Instead of black shadows, use a soft, large-radius blue glow (RGBA 0, 123, 255, 0.1) behind active components to simulate a backlit screen.

## Shapes

Shapes in the design system are **Architectural and Precise**. 

A "Soft" roundedness (4px - 8px) is applied to cards and containers to keep them professional and clinical. Avoid fully circular "Pill" shapes except for status indicators (e.g., "Active Case" tags). Buttons and input fields should maintain sharp or very slightly rounded corners to mimic professional hardware interfaces.

## Components

### Buttons
- **Primary:** Solid Electric Blue with white text. On hover, the background shifts to a Cyan gradient with a subtle outer glow.
- **Secondary:** Ghost style. 1px border in Cyan with a backdrop blur. No fill until hover.

### Glass Cards (Evidence Blocks)
Used for case studies. These must have a 1px border. The top-right corner of the card can feature a "Scan Line" animation—a horizontal cyan line that moves vertically across the card on scroll/hover.

### Data Chips
Small, monospaced labels used for categorization (e.g., [TOXICOLOGY], [DNA_ANALYSIS]). They should appear in a box with a 1px border, resembling printed lab labels.

### Input Fields
Darker than the background (`#000000`). When focused, the border glows Electric Blue and a small cursor-blink effect appears in the corner.

### Timeline/Process
A vertical line with "nodes" representing the forensic process. Nodes should pulse slightly with a Cyan glow when the user reaches that scroll point.

### DNA Scroll Indicator
A subtle, vertical DNA helix animation on the right margin of the screen that rotates as the user scrolls, serving as a progress bar.