# Requirements Document - Web Selva Ecomarketing

## 1. Project Overview
- **Project Name:** Web Selva Ecomarketing
- **Type:** Website for a sustainable/green marketing agency.
- **Goal:** Create an ultra-creative, fluid, high-performance website with cinematic transitions and parallax effects.
- **References:**
  - Fluidity/Transitions: [Rockstar Games VI](https://www.rockstargames.com/VI)
  - Hero Mask: [Good Agency](https://www.goodagency.co.uk/)

## 2. Core Principles ("Golden Rules")
- **Clean Code:** Modular, scalable, no spaghetti code.
- **UX First:** Smooth transitions, no jank. Parallax/animations must degrade gracefully on mobile/low-end devices.
- **Accessibility:** Keyboard navigation, ARIA labels, visible focus, minimum contrast.
- **Performance:** Fast LCP, lazy-loading, compressed assets, optimized fonts.
- **No CMS:** Static site / SPA with modern routing.
- **Content:** Use exact provided text. Use placeholders for missing content.
- **Images:** Use placeholders (picsum/unsplash) and gradients until replaced.
- **Floating WhatsApp:** Must be visible at all times.

## 3. Tech Stack (Mandatory)
- **Framework:** Next.js (App Router) + TypeScript.
- **Styling:** TailwindCSS.
- **Animations:** GSAP + ScrollTrigger (primary). Framer Motion (optional, only for micro-interactions).
- **Smooth Scroll:** Lenis integrated with GSAP ticker.
- **Carousels:** Embla Carousel (preferred) or Swiper.
- **Deployment:** Netlify (static/ISR priority). CI-ready structure.

## 4. Branding & Style
- **Typography:** Montserrat (Google Fonts) - Regular, Medium, SemiBold, Bold.
- **Palette:** Background #F5F5F5 or white; Text very dark gray; Accents #27AE60 / #3BD280.
- **Aesthetic:** "Nature + Data" - subtle jungle textures + UI/data overlays (lines, grids, cards, linear micro-icons).
- **Layout:** Modern, airy, lots of white space.

## 5. Pages & Architecture
### Main Routes
1. `/` (Home)
2. `/quien-eres` (Who are you? - Interactive Hub)
3. `/nosotros` (About Us)
4. `/servicios` (Services)
5. `/portafolio` (Portfolio)
6. `/clientes` (Clients)
7. `/contacto` (Contact)

### Dynamic Routes
- `/quien-eres/[opcion]` (8 specific options)
- `/servicios/[slug]` (9 services)

## 6. Global Features
- **Header:** Minimal, navigation (hamburger on mobile), auto-hide on scroll optional.
- **Footer:** Simple with basic links.
- **WhatsApp Button:** Floating, bottom-right, always visible.
- **Transitions:** Cinematic route transitions (fade + slide + blur, 120-220ms), continuity maintained.
- **Cursor:** Custom cursor (optional) with hover states.

## 7. Detailed Page Requirements
### Home (`/`)
- Full screen Hero.
- Background: Looping video (placeholder).
- Foreground: Giant typographic mask "ECO MKT".
- Parallax effect on scroll.

### Who Are You (`/quien-eres`)
- Interactive list of 8 options.
- Hover effects.
- Links to `/quien-eres/[slug]`.
- Bottom buttons: "View Services" and "Simulator" (MVP/Modal).

### Who Are You Details (`/quien-eres/[slug]`)
- 8 specific variations with unique copy.
- Giant title and paragraph.
- Navigation buttons at the bottom.
- Entrance animation: Split text + fade + stagger.

### Services (`/servicios`)
- Horizontal slider (cards).
- 9 Service cards.
- Click to `/servicios/[slug]`.

### Service Details (`/servicios/[slug]`)
- Hero with title/microcopy.
- "What's included" section.
- CTA to Contact.

### Portfolio (`/portafolio`)
- 2-column layout.
- Left: Text + Filters (Webs, Products, Advertising).
- Right: Dynamic gallery (masonry/grid).
- Hover effect: Custom SVG mask reveal.
- Lightbox modal on click.

### Clients (`/clientes`)
- Infinite marquee loop of logos.

### Contact (`/contacto`)
- Form with fields: Name, Company, Email, WhatsApp, Message, Source.
- Embedded map.

## 8. Animations
- **Route Transitions:** Overlay, scroll block, smooth entry/exit.
- **Parallax:** ScrollTrigger for backgrounds and depth.
- **Micro-interactions:** Hover states, split text.
- **Mobile:** Reduced motion/animations.
