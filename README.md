# Web Selva Ecomarketing

Agencia de marketing sostenible / verde. Sitio web ultra-creativo, fluido y de alto rendimiento.

## Stack Tecnológico

- **Framework:** Next.js 14+ (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** TailwindCSS (v4)
- **Animaciones:** GSAP + ScrollTrigger
- **Scroll Suave:** Lenis (integrado con GSAP Ticker)
- **Carrusel:** Embla Carousel
- **Iconos:** Lucide React

## Estructura del Proyecto

- `/src/app`: Rutas de la aplicación (App Router).
- `/src/components`: Componentes reutilizables.
  - `/ui`: Componentes atómicos (TransitionLink, etc).
  - `/layout`: Header, Footer, WhatsAppButton.
  - `/sections`: Secciones complejas (HomeHero, ServicesSlider).
- `/src/context`: Contextos globales (TransitionContext).
- `/src/lib`: Utilidades y datos estáticos (data.ts).

## Setup & Desarrollo

1.  **Instalar dependencias:**
    ```bash
    npm install
    ```

2.  **Iniciar servidor de desarrollo:**
    ```bash
    npm run dev
    ```

3.  **Construir para producción:**
    ```bash
    npm run build
    ```

## Decisiones de Arquitectura

- **Transiciones de Página:** Se implementó un `TransitionProvider` con GSAP que maneja un overlay global. La navegación se intercepta mediante `TransitionLink` para permitir animaciones de salida (exit animations) antes de cambiar la ruta.
- **Scroll Suave:** Lenis se inicializa globalmente y se sincroniza con `ScrollTrigger` de GSAP para asegurar que las animaciones basadas en scroll sean fluidas y precisas.
- **Datos:** Al no usar CMS, todo el contenido textual se centraliza en `src/lib/data.ts` para facilitar la edición.
- **Performance:** Uso de `next/image` y carga diferida. Animaciones optimizadas con `will-change` y `gsap.ticker`.

## Personalización

- **Textos:** Editar `src/lib/data.ts`.
- **Imágenes:** Reemplazar URLs en `src/lib/data.ts` o en los componentes específicos (`HomeHero`, `NosotrosPage`, etc).
- **Colores/Fuentes:** Editar `src/app/globals.css` (Tailwind v4 theme).

## QA & Despliegue

El proyecto está listo para desplegarse en Netlify.
Asegúrese de configurar las variables de entorno si es necesario (actualmente no requiere secrets).
