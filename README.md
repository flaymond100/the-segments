# THE SEGMENTS - Band Website

A minimal, dark, post-punk band website built with React, Vite, and Tailwind CSS.

## Features

- **Single-page design** with smooth scrolling navigation
- **Dark aesthetic** with subtle sepia accents
- **Fully responsive** - looks great on mobile and desktop
- **Content-driven** - all content managed via `src/content/siteContent.ts`
- **Performance optimized** - lazy loading, modern formats
- **Accessible** - keyboard navigation, focus states, reduced motion support

## Getting Started

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm run dev
```

The site will be available at `http://localhost:5173`

### Build

```bash
pnpm run build
```

### Preview Production Build

```bash
pnpm run preview
```

## Customization

All content is managed in `src/content/siteContent.ts`. Simply update this file to change:

- Band name and tagline
- Hero image
- Release information
- Tour dates
- About text
- Social media links
- Newsletter form action URL
- Contact emails

## Color Palette

- Background: `#0A0A0B` (near-black)
- Panels: `#111113`
- Text: `#E7E3DA` (off-white)
- Muted: `#A9A39A`
- Sepia: `#A67C52`
- Sepia Hover: `#C49A6C`

## Sections

1. **Hero** - Full viewport hero with band name and CTAs
2. **Release** - Album/EP information with streaming links
3. **Listen** - Spotify embed and featured tracks
4. **Video** - YouTube video embed
5. **Tour** - Upcoming tour dates
6. **About** - Band bio and "For Fans Of"
7. **Newsletter** - Mailing list signup
8. **Contact** - Email addresses and social links

## Newsletter Integration

Update the `formActionUrl` in `siteContent.ts` with your Mailchimp (or other provider) form action URL. The form is configured to work with Mailchimp by default.

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- React Icons

## License

All rights reserved.
