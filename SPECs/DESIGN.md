---
name: Ember & Steel Churrasco
colors:
  surface: '#1d100a'
  surface-dim: '#1d100a'
  surface-bright: '#47352e'
  surface-container-lowest: '#180b06'
  surface-container-low: '#271812'
  surface-container: '#2b1c16'
  surface-container-high: '#362620'
  surface-container-highest: '#42312a'
  on-surface: '#f9ddd2'
  on-surface-variant: '#d9c2ba'
  inverse-surface: '#f9ddd2'
  inverse-on-surface: '#3d2d26'
  outline: '#a18c85'
  outline-variant: '#53433d'
  surface-tint: '#ffb599'
  primary: '#ffb599'
  on-primary: '#552008'
  primary-container: '#e69373'
  on-primary-container: '#652c13'
  inverse-primary: '#8f4c31'
  secondary: '#74d4e7'
  on-secondary: '#00363e'
  secondary-container: '#369daf'
  on-secondary-container: '#002f36'
  tertiary: '#84d998'
  on-tertiary: '#003919'
  tertiary-container: '#65b97b'
  on-tertiary-container: '#004721'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdbce'
  primary-fixed-dim: '#ffb599'
  on-primary-fixed: '#370e00'
  on-primary-fixed-variant: '#72351c'
  secondary-fixed: '#a1efff'
  secondary-fixed-dim: '#74d4e7'
  on-secondary-fixed: '#001f25'
  on-secondary-fixed-variant: '#004e5a'
  tertiary-fixed: '#9ff6b2'
  tertiary-fixed-dim: '#84d998'
  on-tertiary-fixed: '#00210c'
  on-tertiary-fixed-variant: '#005227'
  background: '#1d100a'
  on-background: '#f9ddd2'
  surface-variant: '#42312a'
typography:
  display-lg:
    fontFamily: Poppins
    fontSize: 40px
    fontWeight: '800'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Poppins
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Poppins
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Poppins
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
  headline-sm:
    fontFamily: Poppins
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  title-md:
    fontFamily: Poppins
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 22px
  body-lg:
    fontFamily: Open Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Open Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Open Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
  label-lg:
    fontFamily: Poppins
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 18px
    letterSpacing: 0.02em
  label-md:
    fontFamily: Poppins
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.04em
  label-sm:
    fontFamily: Poppins
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.06em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  space-2xs: 0.25rem
  space-xs: 0.5rem
  space-sm: 0.75rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
  space-2xl: 3rem
  gutter-mobile: 1rem
  gutter-desktop: 1.5rem
  container-max: 1200px
---

## Brand & Style
This design system powers a modern digital menu (*cardápio digital*) tailored for authentic Brazilian steakhouse dining and direct-to-table culinary exploration. The visual tone marries the primal warmth of woodfire grilling with contemporary digital precision: deep smoky charcoals, smoldering ember tones, and vibrant electric teal accents that mimic heat-tempered steel.

### Design Aesthetic
- **Style:** High-Contrast Dark Modernism with tactile culinary warmth.
- **Atmosphere:** Dark barbecue smokehouse, nocturnal ambient dining, appetizing clarity, and effortless interactive ordering.
- **Key Emotional Drivers:** Hunger-inducing rich contrasts, premium craftsmanship, intuitive speed for fast-paced dining environments, and polished readability in low-light restaurant lighting.

## Colors
The color architecture resolves the challenge of dark-mode food ordering: avoiding sterile gloom while keeping vivid imagery appetizing and legible.

- **Background Canvas (`#140804`)**: Deep ember charcoal that evokes smoldering iron pits and Brazilian wood charcoal.
- **Card Surfaces (`#23110A` to `#341B12`)**: Rich, roasted brown tones that layer cards above the base canvas with distinct chromatic warmth.
- **Primary Accent (`#E69373`)**: Terracotta ember orange used for primary actions, order highlights, price callouts, and meat cut classifications.
- **Interactive Highlight (`#73D3E6`)**: Vibrant electric cyan providing crisp complementary pop against fiery backgrounds for interactive selections, badges, and modifiers.
- **Deep Tonal Supports (`#671E00`, `#005666`)**: Heavy anchor tones for active toggle states, pill fills, and banner backgrounds.
- **Grill Green (`#006632` / `#25D366`)**: Reserved for dietary indicators, WhatsApp integration, live orders, and preparation statuses.

## Typography
Typographic rhythm balances the energetic punch of rounded sans-serif display headers with the supreme scanning comfort of a balanced humanist body face.

- **Headlines & Labels (`Poppins`)**: Bold, geometrically rounded forms mirror fire badges, signage, and cut numbers with unmistakable presence. Used for food item names, category tab navigation, currency sums, and sticky call-to-actions.
- **Body & Descriptions (`Open Sans`)**: Provides open counters and clean apertures for reading ingredient compositions, cooking points (*mal passado, ao ponto, bem passado*), and portion weights even on dim mobile devices.
- **Iconography**: Google Material Symbols Outlined & Rounded, mapped to match the stroke weight of adjacent typography (20px to 24px default).

## Layout & Spacing
The layout system caters to handheld scanning at table-side while scaling gracefully to tablets and widescreen bar terminals.

- **Layout Structure**: 
  - Mobile (320px–599px): Single fluid column with a continuous horizontal sticky category navigation bar. 16px screen edges.
  - Tablet / POS (600px–1023px): Two-column catalog grid with 16px gutter and persistent ordering tray.
  - Desktop / Kiosk (1024px+): Centered container maxing at 1200px, 3-column menu grid, 24px gutters, with fixed left-hand rail navigation and right-hand live cart.
- **Vertical Rhythm**: Strictly based on multiples of 4px and 8px to keep food photos, titles, and quantity controllers compact without feeling crowded.

## Elevation & Depth
In this design system, elevation is conveyed through warm chromatic stacking rather than cold grayscale drop shadows.

- **Level 0 (Canvas)**: Solid deep charcoal-brown `#140804`.
- **Level 1 (Card & Category Pills)**: `#23110A` with a 1px perimeter border of `#462214` (ember trace).
- **Level 2 (Modals, Overlays & Expanded Food Detail)**: `#341B12` accented with an ambient radiant glow: `0 12px 32px rgba(103, 30, 0, 0.35)`.
- **Level 3 (Floating Order Bar & Quick View Bottom Sheets)**: `#1F0E08` with top boundary border `#E69373` at 40% opacity, backdropped by `backdrop-filter: blur(12px)`.
- **Interactive Focus & Press**: Elements glow outward with a subtle 2px ring in cyan `#73D3E6` or ember `#E69373`.

## Shapes
Roundedness level 2 delivers smooth, organic borders that soften the visual weight of dark surfaces while keeping interactive targets friendly.

- **Standard Containers & Cards**: `rounded-lg` (1rem / 16px) creates a polished frame around photography of skewers and meats.
- **Buttons, Steppers, & Tags**: `rounded-full` (pill shape) for category selectors, doneness pills, and cart counters.
- **Form Inputs & Quantity Adjusters**: `rounded-md` (0.5rem / 8px) to establish firm mechanical utility.
- **Bottom Sheets & Modal Corners**: `rounded-t-2xl` (1.5rem / 24px) for tactile pull-up sheets.

## Components

### Buttons
- **Primary Action (Add to Cart, Finalize Order)**: Background `#E69373`, text `#140804` in `Poppins` SemiBold. Hover/active scales smoothly with subtle ember back-glow.
- **Secondary / Ghost Action**: Border 1.5px solid `#73D3E6`, text `#73D3E6`, transparent fill. Active state fills with `#005666` at 30% opacity.
- **WhatsApp Direct Order Button**: Background `#006632`, text `#FFFFFF`, Google Material Symbol `chat` icon on the leading edge.

### Food Menu Item Cards
- **Structure**: Surface `#23110A` with fine 1px border `#462214`. Aspect-ratio 16:10 rich food photo with dark gradient overlay (`rgba(20,8,4,0.7)`) at the bottom.
- **Content**: Title in `headline-sm` (`#FFF4ED`), cut description in `body-sm` (`#D7B9AE`), price in `title-md` (`#E69373`). Includes a quick-add floating circular '+' icon button anchored to the bottom-right corner in `#E69373`.

### Category & Doneness Chips
- **Inactive**: Surface `#341B12`, text `#D7B9AE`, border 1px solid `#462214`.
- **Active Category**: Background `#73D3E6`, text `#140804`, font weight 700.
- **Active Doneness Level (*Ponto da Carne*)**: Background `#671E00`, text `#E69373`, border 1.5px solid `#E69373`.

### Quantity Selectors & Steppers
- Horizontal compact pill container `#140804` with minus/plus icons in `#73D3E6` and current quantity count in `#FFF4ED`.

### Input Fields & Special Requests
- Dark recessed background `#140804`, placeholder text `#9E7A6E`, active border `#E69373`. Dedicated preset tag list below input for fast kitchen notes (e.g., "Sem cebola", "Carne bem passada", "Talher extra").

### Floating Cart & Table Status Bar
- Sticky mobile bottom bar floating 12px above the viewport edge. Background `#23110A` with blur effect, showing live item counter chip in `#73D3E6`, total value in `#FFF4ED`, and immediate checkout button in `#E69373`.