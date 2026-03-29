# Page Topology — compose-digital.framer.website

## Overall Layout
- Single-column page, full viewport width (1440px max content)
- Body background: rgb(252, 252, 252)
- Font: DM Sans (Google Fonts)
- No smooth scroll library (no Lenis/Locomotive)
- No scroll-snap
- Framer Motion used for appear animations

## Section Order (top to bottom)

### 1. Header (sticky, z-index 8)
- **Component:** `Header`
- **Framer name:** "Header"
- **Class:** `framer-17z2umn`
- **Position:** sticky, top: 0
- **Height:** 112px
- **Type:** Pill-shaped navigation bar, centered
- **Interaction model:** Static nav with active state highlight (lime green pill)
- **Content:** Logo + nav links (Home, Services, Projects, About, Blog) + Contact Us button
- **Nav bg:** rgb(217, 217, 217), border-radius: 100px, padding: 6px
- **Active item:** bg rgb(179, 255, 0), border-radius: 50px
- **Contact Us:** separate button with arrow icon

### 2. Hero Section
- **Component:** `HeroSection`
- **Framer name:** "Hero"
- **Class:** `framer-1ol8v8t`
- **Height:** ~895px
- **Padding:** 50px 40px 100px
- **Type:** Centered hero with heading, rating, description, CTA, and scrolling project marquee
- **Interaction model:** Marquee is auto-scrolling (Framer built-in), rest is static
- **Sub-components:**
  - Main heading: "The Digital Marketing Agency For Higher ROI"
  - Rating badge: "4.9 / 5.0" with star icons + user avatars
  - Description paragraph + "Book a call" CTA
  - "Our Services" label at bottom
  - Scrolling marquee of project cards (EcoSolutions, Travelista, FitLife Studios, FreshNest)

### 3. About Section
- **Component:** `AboutSection`
- **Framer name:** "About"
- **Class:** `framer-qrwkj2`
- **Height:** ~901px
- **Type:** Two-column layout with text left, images right
- **Interaction model:** Static
- **Content:**
  - "Who are we?" label
  - Heading + multi-paragraph description
  - "More about us" CTA link
  - Two images (one landscape on top, one portrait below)
  - "Our Projects" navigation labels on left side

### 4. Quotes Section
- **Component:** `QuotesSection`
- **Framer name:** "Quotes"
- **Class:** `framer-nndpah`
- **Height:** ~648px
- **Type:** Full-width quote with large background image
- **Interaction model:** Static
- **Content:**
  - Large founder quote (Davide Gotlieb)
  - Background image (landscape photo)

### 5. Services Section
- **Component:** `ServicesSection`
- **Framer name:** "Service"
- **Class:** `framer-b7p4f2`
- **Height:** ~762px
- **Type:** Two-column: left side has heading + description, right side has accordion list
- **Interaction model:** Click-driven accordion (expand/collapse service items)
- **Content:**
  - "Our services" label
  - "Empowering Clients to Embrace Transformation" heading
  - Description text
  - Accordion items: Branding and Strategy (expanded by default), Analytics and Reporting, Website Development, Email Marketing, Pay-Per-Click Advertising, Content Marketing
  - "More Services" CTA link

### 6. "More Services" Link (small divider)
- **Framer name:** "Desktop"
- **Class:** `framer-L8p9I`
- **Height:** 41px
- **Type:** Simple "More Services" navigation link

### 7. Projects Section
- **Component:** `ProjectsSection`
- **Framer name:** "Project"
- **Class:** `framer-1ur7ad9`
- **Height:** ~2744px (very tall - multiple project cards)
- **Type:** Alternating left/right project case study cards
- **Interaction model:** Static layout, hover effects on cards likely
- **Content:** 5 project cards:
  1. FreshNest (2023) - Digital Strategy
  2. LuxeFit (2022) - Brand Engagement
  3. Tech Innovators (2023) - Digital Presence
  4. GreenLeaf Organics (2022) - Content & Social Media
  5. Bright Horizons (2023) - Education Marketing
- Each card has: image, year badge, title, description, client quote, CTA

### 8. Blog Section
- **Component:** `BlogSection`
- **Framer name:** "Blog"
- **Class:** `framer-1ora8mi`
- **Height:** ~994px
- **Type:** Section heading + 3-column blog card grid
- **Interaction model:** Static with hover effects
- **Content:** 3 blog posts with date, title, excerpt

### 9. Footer Section (includes marquee + footer)
- **Component:** `FooterSection`
- **Framer name:** "Desktop" (the large one, ~1131px)
- **Type:** Services marquee rows (2 rows, auto-scrolling) + large "TELL US YOUR NEW IDEAS" heading + footer links grid + contact info
- **Interaction model:** Marquee auto-scrolling, rest static
- **Content:**
  - Two marquee rows of service labels
  - "Tell Us Your New Ideas" uppercase heading (20px)
  - "Optimize your success..." subtitle
  - Links columns: Links (Home, About, Services, Projects), Support (Contact, Book a Call, Blog, Careers), Social Media (Instagram, Twitter, Facebook, Behance)
  - Bottom: copyright, phone, email, address
  - Logo repeated

### 10. Free Call CTA (fixed overlay)
- **Component:** `FreeCallButton`
- **Framer name:** "Free Call"
- **Class:** `framer-1ars1va`
- **Position:** fixed, z-index: 5
- **Height:** 60px
- **Type:** Floating action button for booking a call
- **Interaction model:** Click → navigates to /contact

### 11. Theme Toggle (small)
- **Framer name:** "Light"
- **Height:** 38px
- **Type:** Small theme/dark mode toggle widget (Framer default)
- **Note:** This is a Framer template element, may skip in clone

## Z-Index Layers
1. Header: z-index 8 (sticky)
2. Free Call CTA: z-index 5 (fixed)
3. All other sections: default stacking
