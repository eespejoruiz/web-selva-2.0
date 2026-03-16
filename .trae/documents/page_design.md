# Page Design Document - Web Selva Ecomarketing

## 1. Global Layout
- **Header:** Sticky/Fixed, transparent initially, becomes solid/frosted on scroll. Logo left, Nav right (Hamburger on mobile).
- **Footer:** Minimal. Links to Privacy, Terms, Socials.
- **WhatsApp Button:** Fixed bottom-right (z-index: 50). Pulse animation on hover.

## 2. Page Specifications

### 2.1 Home (/)
- **Section 1 (Hero):**
  - **Type:** Fullscreen Video Background (Loop).
  - **Content:** "ECO MKT" mask text (huge font-size, e.g., 20vw).
  - **Interaction:** Parallax scroll reveals video through text.
  - **CTA:** "Scroll" indicator at bottom.

### 2.2 Quien Eres Hub (/quien-eres)
- **Layout:** Centered list container.
- **Content:**
  - Title: "Y tú, ¿Quién eres?"
  - List Items (8 options): Interactive rows. Hover expands row, shows arrow, maybe changes background color slightly.
  - Bottom CTAs: "Ver servicios" (Secondary), "Simulador" (Primary).
- **Animation:** Staggered entrance of list items.

### 2.3 Quien Eres Details (/quien-eres/[slug])
- **Layout:** Split screen or centered text focus.
- **Content:**
  - Giant Title (H1).
  - Large Paragraph (Lead text).
  - Contextual Buttons (e.g., Service chips for "thinking of working with us").
  - Navigation: "Back to list", "Back to Home".
- **Style:** High contrast, clean typography.

### 2.4 Nosotros (/nosotros)
- **Layout:** 50/50 Split.
- **Left:** Image placeholder (Parallax effect).
- **Right:** Text content (Title + Paragraph).
- **Animation:** Text reveals as user scrolls into view.

### 2.5 Servicios (/servicios)
- **Layout:** Horizontal scroll container (Carousel).
- **Cards:** 9 Service cards.
  - Image top, Title middle, Description bottom.
  - Hover: Scale up, shadow.
- **Interaction:** Drag/Swipe to navigate. Click to open detail page.

### 2.6 Servicios Details (/servicios/[slug])
- **Layout:** Standard Hero + Content + CTA.
- **Hero:** Title, short description.
- **Body:** "Qué incluye" list with checkmarks/bullets.
- **CTA:** "Hablemos" button linking to Contact.

### 2.7 Portafolio (/portafolio)
- **Layout:** 2-Column (Fixed Left, Scrollable Right).
- **Left (Sticky):** Title, Description, Filter Buttons.
- **Right (Scrollable):** Masonry Grid of project thumbnails.
- **Interaction:**
  - Hover on thumbnail: SVG Mask reveal effect.
  - Click: Opens Modal (Lightbox) with project details/images.

### 2.8 Clientes (/clientes)
- **Layout:** Fullscreen or large section.
- **Content:** Infinite Marquee of logos.
- **Style:** Monochromatic logos for consistency, color on hover (optional).

### 2.9 Contacto (/contacto)
- **Layout:** Split or Centered Form.
- **Form Fields:** Name, Company, Email, WhatsApp, Message, Source (Select).
- **Map:** Embedded Google Map (styled/grayscale).
- **Validation:** Client-side (Zod/React Hook Form).

## 3. UI Components & Tokens
- **Colors:**
  - Primary: #27AE60 (Green)
  - Secondary: #3BD280 (Light Green)
  - Background: #F5F5F5 (Light Grey)
  - Text: #1A1A1A (Dark Grey)
- **Typography:** Montserrat.
  - H1: 4rem - 8rem (Desktop), Bold.
  - H2: 2.5rem - 4rem.
  - Body: 1rem - 1.25rem.
- **Spacing:** Multiples of 4px (Tailwind standard).
- **Shadows:** Soft, diffuse shadows for cards.
