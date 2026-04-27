---
name: Scientific Precision
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#494454'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#7b7486'
  outline-variant: '#cbc3d7'
  surface-tint: '#6d3bd7'
  primary: '#6b38d4'
  on-primary: '#ffffff'
  primary-container: '#8455ef'
  on-primary-container: '#fffbff'
  inverse-primary: '#d0bcff'
  secondary: '#565e74'
  on-secondary: '#ffffff'
  secondary-container: '#dae2fd'
  on-secondary-container: '#5c647a'
  tertiary: '#4d5d73'
  on-tertiary: '#ffffff'
  tertiary-container: '#66768d'
  on-tertiary-container: '#fdfcff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e9ddff'
  primary-fixed-dim: '#d0bcff'
  on-primary-fixed: '#23005c'
  on-primary-fixed-variant: '#5516be'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#d3e4fe'
  tertiary-fixed-dim: '#b7c8e1'
  on-tertiary-fixed: '#0b1c30'
  on-tertiary-fixed-variant: '#38485d'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  headline-xl:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0.05em
  code-sm:
    fontFamily: monospace
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin: auto
  container-max-width: 1120px
  section-padding: 80px
---

## Brand & Style

This design system is tailored for a Research Scientist, prioritizing clarity, technical rigor, and modern elegance. The aesthetic is rooted in **Minimalism** with a **Corporate/Modern** finish, ensuring that complex data and research findings are presented with maximum legibility and professional authority.

The brand personality is intellectual yet accessible. It balances the cold precision of laboratory science with the vibrant energy of innovation, represented by the high-contrast interplay between stark white backgrounds and a single, electric purple accent. The interface should feel spacious, organized, and intentional, evoking a sense of calm reliability.

## Colors

The palette is anchored by a high-clarity white background to maintain a professional "lab-white" environment. 

- **Primary Purple (#8B5CF6):** Used sparingly for interactive elements, focus states, and key data highlights. It represents the "spark" of insight within the research.
- **Deep Slate (#0F172A):** Reserved for primary headings and body text to ensure WCAG AAA contrast compliance.
- **Cool Gray (#64748B):** Utilized for secondary information, metadata, and supporting icons.
- **Surface White (#FFFFFF):** The primary canvas, providing the "breathing room" necessary for dense technical content.

## Typography

The typographic system utilizes a dual-font approach to distinguish between structural hierarchy and narrative content. 

**Space Grotesk** is used for headlines to provide a technical, geometric edge that reflects the scientific nature of the work. Its distinct glyphs add a layer of modern personality. 

**Inter** is the workhorse for body text and interface labels. Chosen for its exceptional legibility and neutral tone, it ensures that long-form research papers and project descriptions remain readable across all device sizes. For technical snippets or data attributes, a standard system monospace is used to maintain a "code-like" aesthetic.

## Layout & Spacing

The layout follows a **Fixed Grid** model on desktop to preserve the precise alignment often found in scientific journals, transitioning to a fluid model for mobile.

- **Grid:** A 12-column grid with a 24px gutter provides the foundation for content organization.
- **Rhythm:** A 4px baseline unit governs all padding and margin increments, ensuring mathematical consistency.
- **Whitespace:** Generous section padding (80px+) is used to separate distinct research areas, preventing cognitive overload and emphasizing the importance of each individual study.

## Elevation & Depth

To maintain a clean, scientific aesthetic, this system avoids heavy shadows. Instead, it uses **Low-contrast outlines** and **Tonal layers** to establish hierarchy.

- **Flat Surfaces:** Most cards and containers are flat, defined by a 1px border in a light gray (#E2E8F0).
- **Subtle Lift:** On hover, interactive elements like project cards may utilize a very soft, diffused ambient shadow (0px 4px 20px rgba(15, 23, 42, 0.05)) to indicate interactivity without breaking the minimalist plane.
- **Z-Index:** Content is logically stacked, with navigation bars utilizing a backdrop-blur (glassmorphism) effect to maintain context of the scroll position without obscuring the background.

## Shapes

The shape language is **Soft (0.25rem)**. This subtle rounding removes the harshness of 90-degree angles while maintaining a structured, architectural feel. 

- **Components:** Buttons and input fields use the base 4px (0.25rem) radius.
- **Containers:** Larger elements like project cards or image containers may scale up to a "Large" radius (8px) to soften the visual impact of large blocks of content.
- **Icons:** Use a consistent stroke weight that matches the typography’s stems for a cohesive look.

## Components

### Buttons & Call-to-Action
- **Primary:** Solid Purple (#8B5CF6) with White text. Use for the main CTA (e.g., "View Publication").
- **Secondary:** Ghost style with a Purple border and Purple text. Use for secondary actions.
- **Iconography:** Use simple, linear icons (24px) to accompany text labels in buttons for better affordance.

### Project Cards
Cards should feature a subtle 1px border. The top section is reserved for a high-quality research image or a technical diagram. The bottom section contains the headline, a short abstract in Body-MD, and "tags" or "chips" for technology/methodology.

### Chips & Badges
Small, pill-shaped elements with a light purple background (10% opacity) and deep purple text. These are used to categorize research areas (e.g., "Machine Learning", "Bioinformatics").

### Section Headers
Headers should be preceded by a small, primary-colored horizontal line or a numerical index (e.g., "01.") to reinforce the organized, sequential nature of the research portfolio.

### Input Fields
Clean, minimalist inputs with a light gray border that transitions to the Primary Purple on focus. Labels should always be visible above the field using the Label-MD style.
