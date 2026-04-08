# Lumière Studio — Next.js Landing Page

A polished, production-ready Next.js landing site with three pages: Home, About Us, and Contact.

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📂 Project Structure

```
app/
├── layout.tsx          # Root layout (Navbar + Footer)
├── globals.css         # Design system (CSS variables, fonts)
├── page.tsx            # Home page
├── page.module.css
├── about/
│   ├── page.tsx        # About Us page
│   └── page.module.css
└── contact/
    ├── page.tsx        # Contact page (with form)
    └── page.module.css

components/
├── Navbar.tsx          # Sticky responsive navbar
├── Navbar.module.css
├── Footer.tsx          # Footer with links
└── Footer.module.css
```

## ✨ Features

- **Home** — Hero section, animated stats, services grid, manifesto quote, CTA
- **About Us** — Studio story, values list, team cards, sticky info column
- **Contact** — Info details, interactive form with success state
- Responsive design (mobile-first)
- Sticky + scroll-aware navbar
- Gold + dark luxury aesthetic with Fraunces + DM Sans fonts
- CSS animations and micro-interactions
- TypeScript throughout

## 🛠 Tech Stack

- Next.js 14 (App Router)
- TypeScript
- CSS Modules
- Google Fonts (Fraunces + DM Sans)

## 🎨 Design System

All design tokens live in `app/globals.css` as CSS custom properties:
- `--gold` / `--gold-light` — accent color
- `--cream` / `--cream-dim` — text colors
- `--bg` / `--bg-2` / `--bg-card` — background layers
- `--font-display` — Fraunces (serif headlines)
- `--font-body` — DM Sans (UI text)
