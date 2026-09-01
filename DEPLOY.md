# Deploy Your Portfolio — Quick Guide

This `dist/` folder is your **production build** — the finished site, ready to go live.

## Option 1 — Drag & Drop (easiest)
1. Go to **Netlify Drop**: https://app.netlify.com/drop
2. Drag the `dist` folder onto the page.
3. Done — you get a live URL instantly (e.g. `https://yourname.netlify.app`).

## Option 2 — Vercel
```bash
npm i -g vercel
cd dist
vercel --prod
```

## Option 3 — Any static host (GitHub Pages, Cloudflare Pages, cPanel…)
Upload **everything inside `dist/`** to your host's web root. No server code needed — it's pure HTML/CSS/JS.

---

## 📁 What's inside `dist/`
```
dist/
├── index.html          ← the whole site (one page)
├── profile.jpg         ← hero background photo
├── profile2.jpg        ← vision section photo
└── assets/
    ├── index-*.css     ← styles
    └── index-*.js      ← React + Framer Motion bundle
```

## ✏️ Want to change content later?
Edit **`src/data.js`** (name, phone, Instagram, services, projects, testimonials, stats…),
then rebuild:
```bash
cd portfolio
npm install
npm run build        # regenerates dist/
```

## 🔧 Customising photos
Replace `public/profile.jpg` and `public/profile2.jpg` (keep the same filenames),
then `npm run build` again.
