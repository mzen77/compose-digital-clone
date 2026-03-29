# Behaviors — compose-digital.framer.website

## Global Behaviors

### Sticky Header
- **Trigger:** Scroll position > 0
- **Mechanism:** CSS `position: sticky; top: 0; z-index: 8`
- **Behavior:** Header stays at top of viewport while scrolling
- **No visual change on scroll** — no shrinking, shadow, or background change detected

### Framer Motion Appear Animations
- **Mechanism:** `data-framer-appear-id` attributes (1 detected)
- **Behavior:** Elements animate in on page load (opacity/transform)
- **Implementation:** Use CSS animations or framer-motion library

## Section-Specific Behaviors

### Hero Marquee (Project Cards)
- **Type:** Auto-scrolling horizontal marquee
- **Mechanism:** Framer built-in scroll component (not CSS animation)
- **Content:** 4 unique project cards repeated 3x (12 total visible)
- **Cards:** EcoSolutions, Travelista, FitLife Studios, FreshNest
- **Card size:** 450px × 370px each
- **Scroll direction:** Left-to-right continuous scroll
- **Implementation:** CSS `@keyframes` infinite scroll animation with `translateX`

### Services Accordion
- **Type:** Click-driven accordion
- **Default state:** "Branding and Strategy" is expanded (showing description + "More Details" link)
- **Collapsed state:** Other items show only title + expand icon
- **Trigger:** Click on service item
- **Animation:** Height transition (expand/collapse)
- **Items:** 6 services with expand/collapse
- **Each expanded item shows:** Title, description paragraph, "More Details" link

### Footer Services Marquee
- **Type:** Auto-scrolling text marquee (2 rows)
- **Row 1 (left-to-right):** Branding and Strategy, Analytics and Reporting, Website Development, Email Marketing
- **Row 2 (right-to-left):** Pay-Per-Click Advertising, Content Marketing, Social Media Marketing, Search Engine Optimization
- **Mechanism:** CSS infinite scroll animation
- **Text style:** Large bold text with bullet separators

### Fixed "Free Call" CTA
- **Position:** Fixed bottom-right corner
- **z-index:** 5
- **Behavior:** Always visible, floats above content
- **Click:** Links to /contact page
- **Likely:** Chat/contact bubble icon

## Hover States

### Nav Items
- **Default:** Transparent background, pill-shaped
- **Active:** bg rgb(179, 255, 0), border-radius 50px
- **Hover:** Likely subtle background change (needs verification)

### CTA Buttons
- **"Book a call" button:** Likely has hover scale or color transition
- **"Contact Us" nav button:** Arrow icon, likely hover effect
- **"More Details" links:** Likely underline or color change on hover

### Project Cards (Projects Section)
- **Likely:** Scale, shadow, or overlay transition on hover

### Blog Cards
- **Likely:** Hover reveals more content or image zoom effect

## Responsive Behavior
- **Desktop (1440px):** Full layout as described
- **Tablet (~768px):** Expected column stacking, reduced padding
- **Mobile (390px):** Single column, hamburger nav, stacked content
- **Nav:** Pill nav likely converts to hamburger menu on mobile
- **Marquee:** Continues at reduced width
- **Project cards:** Stack vertically on mobile
- **Blog cards:** Stack to single column
