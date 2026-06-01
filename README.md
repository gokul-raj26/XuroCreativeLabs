# Xuro CreativeLabs

A premium neon-dark creative agency website built with React, Vite, Tailwind CSS, and Framer Motion.

## Fonts used

- **Syne** — used for headings and brand typography
- **DM Sans** — used for body copy and UI text

These fonts are loaded from Google Fonts in `index.html` and applied via `src/styles/index.css` and `tailwind.config.js`.

## Quick Overview

- React 18 + Vite 5 application
- Tailwind CSS 3 styling system
- Animated page sections with Framer Motion
- SEO-ready metadata and schema
- Lightweight responsive layout
- Glassmorphism + premium neon dark theme

## Project status

- Core site structure and responsive pages are implemented
- Animations, SEO metadata, and reusable component system are live
- Contact workflow supports EmailJS and `mailto` fallback
- Recommended next steps: finalize copy, production assets, and launch QA

## Quick Start

```bash
npm install
npm run dev
```

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## Project Structure

```text
src/
  animations/
    motionVariants.js
  assets/
    diva.png
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
tailwind.config.js
vite.config.js
README.md
```

## Core Pages

- `/` — Home
- `/about` — About
- `/services` — Services
- `/projects` — Projects
- `/contact` — Contact

## Styling and Design Tokens

### Brand colors

- `#050812` — page background
- `#E6F21D` — neon highlight
- `#1F3CDE` — electric primary
- `#FF3B2F` — CTA accent

### Font setup

- `body` uses `font-family: 'DM Sans', sans-serif;`
- `heading` classes use `font-heading` mapped to `['Syne', 'sans-serif']`
- Google Fonts import is in `index.html`

## How fonts are applied

- `index.html` imports the fonts from Google Fonts
- `src/styles/index.css` sets the default body font to DM Sans
- Tailwind `font-heading` in `tailwind.config.js` maps to Syne

## Useful Scripts

- `npm run dev` — start development server
- `npm run build` — production build
- `npm run preview` — preview the built app
- `npm run lint` — lint JS/JSX files

## Environment Variables

For EmailJS integration, create a `.env` file:

```bash
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

If these variables are not set, the contact form falls back to a `mailto:` action.

## Notes

- The project uses a reusable section system and premium glass-style components.
- Animations are centralized in `src/animations/motionVariants.js`.
- The site theme is intentionally minimal, futuristic, and highly responsive.

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

## Team Data Flow

- **Source of truth:** Team members are defined only in [src/utils/content.js](src/utils/content.js).
- **Rendering:** [src/components/TeamSection.jsx](src/components/TeamSection.jsx) imports `teamMembers` and maps them into UI.
- **Card UI:** [src/components/TeamCard.jsx](src/components/TeamCard.jsx) renders each member and their social links.
- **How to update:** Edit `teamMembers` in [src/utils/content.js](src/utils/content.js) (add `name`, `role`, `image`, `handle`, `linkedin`, `instagram`). Do not hardcode names or handles inside component files.

This ensures content edits are centralized and UI components remain purely presentational.
