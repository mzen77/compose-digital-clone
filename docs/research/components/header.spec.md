# Header Specification

## Overview
- **Target file:** `src/components/Header.tsx`
- **Interaction model:** Static sticky nav with active state highlight

## DOM Structure
- Outer container: sticky, z-index 8, flex center, height 112px, full width
  - Inner wrapper: flex row, justify-between, align-center, max-width 1360px, padding 0 40px
    - Logo: SVG image, 127×40px, from `/images/logo.svg`
    - Nav: pill-shaped bar, flex row, gap 10px, bg #d9d9d9, border-radius 100px, padding 6px
      - Nav links (5): Home (active), Services, Projects, About, Blog
        - Each: flex center, padding 6px 12px, border-radius 50px, font-size 14px, font-weight 500, DM Sans
        - Active: bg #b3ff00 (lime green)
        - Inactive: bg transparent, hover bg rgba(255,255,255,0.5)
    - Action area: flex row, gap 6px
      - "Contact Us" text link: padding 10px 18px, border-radius 50px, font-size 14px, font-weight 500, border 1px solid #e5e5e5
      - Arrow icon button: 40×40px circle, bg #b3ff00, border-radius 50px, contains ArrowUpRightIcon

## Computed Styles
### Outer Container
- position: sticky
- top: 0
- z-index: 8
- width: 100%
- height: 112px (content height, includes padding)
- display: flex
- justify-content: center
- align-items: flex-start
- padding-top: 20px

### Nav Bar
- background-color: #d9d9d9
- border-radius: 100px
- padding: 6px
- display: flex
- align-items: center
- gap: 0 (items are flush)
- overflow: hidden

### Nav Link (inactive)
- font-size: 14px
- font-weight: 500
- font-family: DM Sans
- color: #101010
- padding: 6px 12px
- border-radius: 50px
- cursor: pointer
- transition: background-color 0.2s

### Nav Link (active — "Home")
- background-color: #b3ff00
- color: #101010

### Contact Us Button
- font-size: 14px
- font-weight: 500
- color: #101010
- padding: 10px 18px
- border-radius: 50px
- border: 1px solid #e5e5e5
- cursor: pointer

### Arrow Icon Button
- width: 40px
- height: 40px
- background-color: #b3ff00
- border-radius: 50px (circle)
- display: flex
- justify-content: center
- align-items: center
- cursor: pointer

## States & Behaviors
### Hover on nav links
- Inactive links: bg changes to rgba(255,255,255,0.5) on hover
- Transition: background-color 0.2s ease

## Assets
- Logo: `/images/logo.svg` (127×40)
- Icons: ArrowUpRightIcon from icons.tsx

## Text Content
- Nav links: Home, Services, Projects, About, Blog
- CTA: "Contact Us"

## Responsive Behavior
- **Desktop (1440px):** Full pill nav visible
- **Mobile (390px):** Nav converts to hamburger menu (simplified — show logo + hamburger icon)
- **Breakpoint:** ~768px
