# HeroSection Specification

## Overview
- **Target file:** `src/components/HeroSection.tsx`
- **Interaction model:** Static content with auto-scrolling marquee at bottom

## DOM Structure
- Section container: flex center, padding 50px 40px 100px, overflow hidden
  - Inner: max-width 1360px, flex column, align-center, gap 50px
    - Top area: flex column, align-center, gap 30px
      - Heading h1: "The Digital Marketing Agency For Higher ROI"
      - Rating row: flex row, align-center, gap 16px
        - Large number "4.9" (h2, 42px)
        - Divider "/"
        - "5.0" smaller
        - "Trusted by 500+ Brands Globally" text
      - Star icons row: 5 filled stars
      - User avatars row: 4 circular avatar images overlapping
    - Middle: paragraph + CTA
      - Description text
      - "Book a call" button (dark bg, white text, arrow icon)
    - Bottom label: "Our Services" (small uppercase)
  - Marquee: overflow hidden, full width below the inner content
    - Scrolling row of 4 project cards repeated for infinite scroll

## Computed Styles
### Section Container
- padding: 50px 40px 100px
- width: 100%
- display: flex
- justify-content: center
- align-items: center
- overflow: hidden

### Heading (h1)
- font-size: 72px
- font-weight: 500
- font-family: DM Sans
- line-height: 86.4px (1.2)
- letter-spacing: -2.88px (-0.04em)
- color: #101010
- text-align: center
- max-width: 900px

### Rating "4.9"
- font-size: 42px
- font-weight: 500
- line-height: 50.4px
- color: #101010

### Description Paragraph
- font-size: 16px
- font-weight: 400
- line-height: 22.4px (1.4)
- color: #595959
- text-align: center
- max-width: 600px

### "Book a call" Button
- background-color: #101010
- color: #fcfcfc
- padding: 12px 24px
- border-radius: 50px
- font-size: 14px
- font-weight: 500
- display: flex
- align-items: center
- gap: 8px
- cursor: pointer

### "Our Services" Label
- font-size: 13px
- font-weight: 500
- letter-spacing: 0.39px (0.03em)
- text-transform: uppercase
- color: #101010

### Marquee Container
- width: 100%
- overflow: hidden
- margin-top: 50px

### Marquee Track (inner)
- display: flex
- gap: 20px
- animation: marquee-left 30s linear infinite
- width: fit-content (doubled content for seamless loop)

### Project Card (in marquee)
- width: 450px
- height: 370px
- border-radius: 16px
- overflow: hidden
- position: relative
- flex-shrink: 0

### Project Card Image
- width: 100%
- height: ~300px
- object-fit: cover
- border-radius: 16px

### Project Card Details
- padding: 16px 0
- display: flex
- justify-content: space-between
- align-items: center

### Project Card Title (h6)
- font-size: 16px
- font-weight: 500
- color: #101010

### Project Card Category
- font-size: 13px
- font-weight: 400
- color: #595959

## States & Behaviors
### Marquee
- Infinite scroll left using CSS animation
- Duration: ~30s, linear, infinite
- Content duplicated for seamless loop

## Assets
- User avatars: `/images/user-avatar-1.svg` through `user-avatar-4.svg`
- Project images:
  - EcoSolutions: `/images/project-ecosolutions.jpg`
  - Travelista: `/images/project-travelista.jpg`
  - FitLife Studios: `/images/project-fitlife.jpg`
  - FreshNest: `/images/project-freshnest.jpg`
- Icons: StarFilledIcon, ArrowRightIcon from icons.tsx

## Text Content
- Heading: "The Digital Marketing Agency For Higher ROI"
- Rating: "4.9 / 5.0"
- Trust line: "Trusted by 500+ Brands Globally"
- Description: "Choose success with our digital marketing agency, dedicated to delivering higher ROI that propels your business to new heights."
- CTA: "Book a call"
- Bottom label: "Our Services"
- Marquee cards:
  1. EcoSolutions — Content Marketing
  2. Travelista — Content Marketing
  3. FitLife Studios — Social Media Marketing
  4. FreshNest — Social Media Marketing

## Responsive Behavior
- **Desktop (1440px):** Full layout, 72px heading, wide marquee
- **Mobile (390px):** Heading ~36px, stacked layout, marquee continues
- **Breakpoint:** ~768px
