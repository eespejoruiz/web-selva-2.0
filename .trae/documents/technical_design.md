# Technical Design Document - Web Selva Ecomarketing

## 1. Architecture Overview
- **Framework:** Next.js 14+ (App Router).
- **Language:** TypeScript.
- **Styling:** TailwindCSS with PostCSS.
- **State Management:** React Context (for global UI states like transitions, menu) + Local State. Zustand is not strictly necessary for this scale unless complexity grows, but allowed.
- **Animation Engine:** GSAP (GreenSock) + ScrollTrigger + Lenis (Smooth Scroll).
- **Deployment:** Static Export (SSG) or ISR, deployed to Netlify.

## 2. Directory Structure
```
/app
  /layout.tsx       # Global layout, providers (Lenis, Transition)
  /page.tsx         # Home page
  /quien-eres/      # Hub page
    /page.tsx
    /[slug]/page.tsx # Dynamic pages
  /nosotros/        # About Us
  /servicios/       # Services Hub
    /page.tsx
    /[slug]/page.tsx # Dynamic service pages
  /portafolio/      # Portfolio
  /clientes/        # Clients
  /contacto/        # Contact
/components
  /ui/              # Reusable UI components (Buttons, Cards, Inputs)
  /layout/          # Header, Footer, Navigation
  /animations/      # Transition overlays, specialized GSAP components
  /sections/        # Page-specific sections (Hero, Features)
/lib
  /utils.ts         # Helper functions (cn, formatters)
  /constants.ts     # Configuration data (nav links, service list)
  /gsap.ts          # GSAP configuration and register plugins
  /types.ts         # TypeScript interfaces
/public
  /assets/          # Images, videos, fonts
/styles
  /globals.css      # Tailwind imports and base styles
```

## 3. Key Technical Components

### 3.1 Smooth Scroll & Animations
- **Lenis:** Initialize in a client component provider (`SmoothScrollProvider`).
- **GSAP:** Register ScrollTrigger in a `useLayoutEffect` within the provider or specific components.
- **Transition:** A `TransitionProvider` will wrap the children in `layout.tsx`. It will intercept route changes (using `usePathname` effect or a custom link component) to play an exit animation before navigating and an enter animation after mounting.

### 3.2 Dynamic Routing & Content
- **Data Source:** Since there is no CMS, content will be stored in structured JSON/TS objects in `/lib/data.ts`.
- **Slug Handling:** `generateStaticParams` will be used for `/quien-eres/[slug]` and `/servicios/[slug]` to ensure static generation at build time.

### 3.3 Components Strategy
- **Atomic Design:** Small, reusable components (Buttons, Inputs).
- **Compound Components:** For complex UI like the "Who Are You" list or Portfolio Grid.
- **Lazy Loading:** `next/dynamic` for heavy components below the fold if necessary.
- **Images:** `next/image` for automatic optimization.

## 4. Performance & Accessibility
- **Lighthouse Targets:** 90+ in all categories.
- **A11y:** Semantic HTML5 (main, section, nav), proper heading hierarchy, aria-labels for interactive elements without text, `prefers-reduced-motion` queries in CSS/JS.

## 5. Deployment Pipeline
- **Build Command:** `next build`
- **Output:** `.next` folder (or `out` if using `output: 'export'`).
- **Netlify:** Configure `netlify.toml` for build settings and caching.
