# Xuro CreativeLabs Website

Production-ready multi-page React + Vite website for **Xuro CreativeLabs**, built with a neon-dark visual system, reusable component architecture, SEO foundation, and performance-focused frontend patterns.

## 1. Project Overview

Xuro CreativeLabs is designed as a premium creative agency website with:

- Futuristic neon-dark brand language
- Multi-page routing (`/`, `/about`, `/services`, `/projects`, `/contact`)
- Framer Motion-driven animations
- Reusable glassmorphism components
- SEO metadata and schema support
- Contact workflow with EmailJS fallback to `mailto`
- Vercel-ready deployment config

## 2. Tech Stack

- React 18
- Vite 5
- React Router DOM 6
- Tailwind CSS 3
- Framer Motion
- React Helmet Async
- EmailJS browser SDK

## 3. Folder Structure

```text
xuro-creativelabs/
  public/
    logofav.png
    logo.png
    logo.svg
    og-image.svg
    robots.txt
    site.webmanifest
    sitemap.xml

  src/
    animations/
      motionVariants.js

    assets/
      diva.png
      favi icon.png
      Gokul.png
      ja.png
      logo.png
      logofav.png

    components/
      ContactForm.jsx
      CustomCursor.jsx
      Footer.jsx
      Hero.jsx
      HeroRobotScene.jsx
      Navbar.jsx
      ProjectCard.jsx
      SectionWrapper.jsx
      ServiceCard.jsx
      Stats.jsx
      TeamCard.jsx
      TestimonialCard.jsx

    hooks/
      useParallax.js
      useScrollToTop.js

    pages/
      About.jsx
      Contact.jsx
      Home.jsx
      Projects.jsx
      Services.jsx

    seo/
      schema.js
      SEO.jsx

    styles/
      index.css

    utils/
      content.js

    App.jsx
    main.jsx

  index.html
  package.json
  postcss.config.js
  tailwind.config.js
  vercel.json
  vite.config.js
  README.md
```

## 4. Setup and Local Development

### Prerequisites

- Node.js 18+ (recommended)
- npm 9+

### Install

```bash
npm install
```

### Start development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## 5. Available Scripts

- `npm run dev`: Starts Vite dev server
- `npm run build`: Creates optimized production build
- `npm run preview`: Serves production build locally
- `npm run lint`: Runs ESLint across JS/JSX files

## 6. Environment Variables

Create a `.env` file in the project root when enabling EmailJS:

```bash
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Behavior:

- If EmailJS variables are present: form submits through EmailJS.
- If missing: form gracefully falls back to `mailto:hello@xuro.studio`.

## 7. Routing and Page Architecture

Routes are lazy-loaded in `src/App.jsx` for code splitting:

- `/` -> `Home`
- `/about` -> `About`
- `/services` -> `Services`
- `/projects` -> `Projects`
- `/contact` -> `Contact`

Shared layout composition:

- Global background layers
- Custom cursor
- Sticky navbar
- Footer

## 8. Component System

Core reusable blocks:

- `Navbar`: sticky, blur-on-scroll, active route states, mobile menu
- `Footer`: brand, links, social/contact actions
- `SectionWrapper`: consistent section shell with heading system
- `Hero`: animated flagship section
- `Stats`: quick credibility metrics
- `ServiceCard`, `ProjectCard`, `TestimonialCard`: reusable content cards
- `TeamCard`: reusable member card with image + LinkedIn/Instagram icon links
- `ContactForm`: validated lead form with async submission
- `CustomCursor`: desktop glow cursor + trail interactions

## 9. Styling and Theming

Defined in `tailwind.config.js` and `src/styles/index.css`:

- Brand colors:
  - `#050812` (base)
  - `#E6F21D` (neon highlight)
  - `#1F3CDE` (electric primary)
  - `#FF3B2F` (CTA accent)
- Fonts:
  - Syne (headings)
  - DM Sans (body)
- Utility classes:
  - glass panels
  - button styles
  - section shells
  - glow shadows
  - custom keyframes

## 10. Animation System

Animation layers:

- Framer Motion variants in `src/animations/motionVariants.js`
- Scroll reveal and stagger patterns in sections/cards
- Three.js hero robot animation in `src/components/HeroRobotScene.jsx`
- Motion safety support via `prefers-reduced-motion` CSS rules

### Hero 3D logic order

`HeroRobotScene.jsx` is intentionally organized in this order:

1. Scene constants (`MODEL_URL`, `CAMERA`, `ROBOT`, `LIGHTS`)
2. Material and animation helpers
3. React lifecycle (`useEffect`) setup:
4. Scene, camera, renderer
5. Lighting
6. Model loading + recolor pass
7. Animation mixer + default action (`Dance`)
8. Render loop + resize handler
9. Cleanup/dispose

Camera angle can be tuned in `CAMERA.position` and `CAMERA.lookAt`.

## 11. SEO and Metadata

SEO implementation includes:

- Per-page title/description/keywords via `src/seo/SEO.jsx`
- Canonical tags
- Open Graph tags
- Twitter card tags
- `robots.txt`
- `sitemap.xml`
- JSON-LD structured data in `src/seo/schema.js`:
  - Organization schema
  - Services schema

## 12. Accessibility

Implemented baseline a11y features:

- Semantic headings and section structure
- Alt text for brand assets
- Skip-link to main content
- Keyboard-accessible navigation and controls
- Mobile menu with `aria-expanded`

Recommended next enhancements:

- Focus-visible ring standardization for all controls
- Color contrast testing for all small text states
- Screen reader QA across NVDA/VoiceOver

## 13. Performance Notes

Current performance-oriented choices:

- Route-based code splitting
- Lazy page loading with suspense fallback
- Async image decoding where relevant
- Reduced-motion handling

Recommended next enhancements:

- Generate optimized image variants (WebP/AVIF)
- Add responsive `srcset` for large image assets
- Run Lighthouse and tune CLS/LCP targets

## 14. Favicon and Brand Assets

Current active favicon:

- `public/logofav.png`
- Referenced in `index.html`
- Included in `public/site.webmanifest`

Brand logo usage:

- Navbar and footer import `src/assets/logo.png`

## 15. Deployment (Vercel)

### One-time setup

1. Push project to GitHub/GitLab/Bitbucket
2. Import repository into Vercel
3. Set framework preset to **Vite** (auto-detected in most cases)
4. Add environment variables (if using EmailJS)

### Build settings

- Build command: `npm run build`
- Output directory: `dist`

### SPA routing support

`vercel.json` includes rewrite rules to route all paths to `index.html` for React Router.

### Domain and SSL

- Attach custom domain in Vercel dashboard
- SSL is auto-provisioned by Vercel

## 16. Content Management Guidance

Primary editable content source:

- `src/utils/content.js`

Update this file to change:

- Nav labels
- Stats
- Timeline entries
- Services list
- Projects and testimonials
- Contact links
- Team members and social links (`teamMembers`)

## 17. Team Section Setup

The About page includes a team showcase section powered by:

- `src/components/TeamCard.jsx`
- `teamMembers` array in `src/utils/content.js`

Each member object supports:

- `name`
- `role`
- `image`
- `linkedin`
- `instagram`

Current member images are imported from:

- `src/assets/diva.png`
- `src/assets/Gokul.png`
- `src/assets/ja.png`

To update team profiles:

1. Replace or add member image files in `src/assets`.
2. Update imports and `teamMembers` entries in `src/utils/content.js`.
3. Replace placeholder social URLs with actual profile links.

## 18. QA Checklist Before Launch

1. Run `npm run build` successfully
2. Check all route URLs directly (hard refresh on each route)
3. Validate contact form flow (EmailJS or mailto fallback)
4. Confirm OG preview image and meta on social validators
5. Confirm favicon appears across desktop/mobile browsers
6. Validate mobile nav and touch interactions
7. Run Lighthouse (desktop + mobile)

## 19. Future Roadmap

Potential production upgrades:

- CMS integration (Sanity/Contentful/Strapi)
- Real backend lead capture + CRM integration
- Case study detail pages with dynamic routes
- Blog/resources section for long-term SEO
- Analytics instrumentation (GA4, PostHog, Plausible)
- Automated sitemap generation in CI

## 20. Ownership Notes

This codebase is structured to support team scaling:

- Components are modular and reusable
- SEO logic is centralized
- Content is separated from UI rendering
- Styling system is consistent and token-driven

For larger teams, add:

- Strict ESLint + Prettier config
- Husky pre-commit hooks
- CI pipeline for lint/build/test/deploy gates
