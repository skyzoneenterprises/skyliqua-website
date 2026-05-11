# Skyliqua Premium E-Commerce & Brand Website

The goal is to build an ultra-premium, modern, and high-conversion website for **Skyliqua** water purifiers using Next.js, Tailwind CSS, and Framer Motion. The site will heavily utilize the provided assets, product specifications (Prime, Zen, Elite), and the brand color scheme to create an immersive user experience.

> [!NOTE]
> The site will be built using the `ui-ux-pro-max` guidelines for premium interactions, `responsive-design` for fluid scaling across devices, and `web-design-guidelines` for accessibility and performance.

## Open Questions

> [!IMPORTANT]
> 1. **Framework Initialization**: Are you comfortable with me initializing the Next.js project using `npx create-next-app` in the current directory? I will move the existing files (`Comparision doc.pdf`, `skyliqua.docx`, `color-scheme.jpeg`, `brand-identity`, and `assets`) into a `public/docs` and `public/assets` folder respectively to keep the root clean.
> 2. **Animations**: I plan to use Framer Motion for scroll-based reveal animations, parallax effects on product images, and smooth page transitions. Does this align with your vision for the "best elements and animations"?
> 3. **Hosting/Deployment**: The project will be built with Vercel deployment in mind. Let me know if you have other requirements.

## Design System & UX Guidelines

Based on the brand scheme and `ui-ux-pro-max` guidelines for a modern, luxury hardware product (similar to Apple or Dyson):

### Typography & Color Palette
- **Primary Color**: `#138b8c` (Teal) - Used for primary CTAs and brand highlights.
- **Accent Color**: `#8b6c3e` (Gold) / `#e9d39a` (Light Gold) - Used specifically for the "Elite" tier and premium accents.
- **Background**: `#f1f3f2` (Off-white) for the main clean background, and `#000e00` (Dark/Black) for contrast sections (like the Elite product showcase).
- **Typography**: Inter or Outfit (Google Fonts) for a clean, sans-serif, modern look.

### Layout & Spacing
- **Container**: `max-w-7xl` for desktop consistency.
- **Responsive**: Fluid typography and grid layouts transitioning from 1-column (mobile) to 2/3-columns (desktop).

### Animations (Framer Motion)
- **Hero**: Smooth stagger fade-in for headlines.
- **Scroll**: Sections fade up and scale slightly as they enter the viewport.
- **Interactions**: Button hover states with scale and shadow changes (150-300ms transitions).

## Proposed Changes

### Project Setup
- [NEW] Initialize Next.js 14 App Router project.
- [NEW] Install dependencies: `tailwindcss`, `framer-motion`, `lucide-react`, `clsx`, `tailwind-merge`.
- [MODIFY] `tailwind.config.ts` to include brand colors and custom fonts.

### Core Components
- **Navbar**: Sticky, translucent header with logo and navigation links.
- **Footer**: Brand information, links, and contact details.
- **HeroSection**: High-impact split-screen or large image background with a strong CTA ("Discover Puresense").
- **ProductShowcase**: An interactive accordion or tabbed section to compare Prime, Zen, and Elite models smoothly.
- **FeatureGrid**: Highlighting 12-stage purification, copper/alkaline, and smart LED features.

### Page Structure
- `/` (Home): The main landing page orchestrating the components.

## Verification Plan

### Automated Tests
- Run `npm run build` to ensure Next.js compiles without TypeScript or ESLint errors.
- Verify responsive layout using browser developer tools.

### Manual Verification
- Review the aesthetic feel against the "luxury and modern" requirement.
- Ensure all Framer Motion animations trigger correctly on scroll.
- Verify colors and assets correctly match the provided `color-scheme.jpeg` and `Comparision doc.pdf`.
