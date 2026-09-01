# Ruturaj Jadhav — Healthcare Marketing Portfolio

A senior-level, animated portfolio for a **healthcare videographer / video editor / digital marketing expert**.

Built with **React 18 + Vite + Framer Motion**, designed as a clean "healthcare-light" theme (white + teal).

## ▶ Run it

```bash
cd portfolio
npm install
npm run dev        # http://localhost:5173
npm run build      # production build → dist/
npm run preview    # serve the build locally
```

## ✏ Customise everything (no code needed)

All content lives in **`src/data.js`** — edit name, brand, tagline, stats,
services, portfolio items, testimonials, tools, and contact details in one place.

Your photos live in **`public/`**:
- `hero-bg-800.jpg/.webp` + `hero-bg-1600.jpg/.webp` — full-bleed hero background (responsive sizes)
- `portrait-840.jpg/.webp` — Vision section portrait

Replace them (same filenames + dimensions) to update your photos. The hero crops
toward the bottom-center of the image (`object-position` in `styles.css`).

## 🗂 Structure

```
portfolio/
├── index.html
├── vite.config.js
├── public/hero-bg-*.jpg/.webp  ← full-bleed hero background (responsive sizes)
│   public/portrait-840.jpg/.webp ← Vision section portrait
└── src/
    ├── main.jsx
    ├── App.jsx               ← section order
    ├── data.js               ← ALL editable content
    ├── styles.css            ← design system (tokens at the top)
    └── components/
        ├── Navbar.jsx        ← glass navbar + mobile menu
        ├── Hero.jsx          ← full-bleed hero, role rotator, morphing portrait
        ├── Marquee.jsx       ← services ticker
        ├── About.jsx
        ├── Services.jsx      ← 5 services + spotlight hover
        ├── Work.jsx          ← portfolio grid with play cards
        ├── Process.jsx
        ├── Testimonials.jsx
        ├── Contact.jsx       ← form + contact info
        ├── Footer.jsx
        ├── Icon.jsx          ← inline SVG icon set
        └── Extras.jsx        ← scroll progress, counters, magnetic buttons…
```

## 🎬 Motion & UX details

- Framer Motion scroll reveals, staggered grids, and parallax
- Morphing blob portrait + floating chips in the hero
- Animated role rotator ("Videographer → Video Editor → …")
- Count-up stats, magnetic buttons, scroll-progress bar, back-to-top
- Spotlight hover on service cards, play-button hover on portfolio cards
- Fully responsive (desktop / tablet / mobile) with reduced-motion support
