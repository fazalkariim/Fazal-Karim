# Fazal Karim — MERN Portfolio (React + Vite + Tailwind)

Standalone JavaScript port of the Lovable-designed portfolio. Dark, blue-accented, fully responsive multi-page UI.

## Tech Stack
- React 18 + Vite 5 (JavaScript, no TypeScript)
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- React Router v6
- lucide-react icons
- tw-animate-css

## Folder Structure
```
portfolio/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx              # React entry, mounts <App/> + BrowserRouter
│   ├── App.jsx               # Routes (Home, About, Projects, 404)
│   ├── styles.css            # Tailwind v4 + design tokens (oklch theme)
│   ├── assets/
│   │   └── hero-portrait.jpg
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── PageHeader.jsx
│   │   ├── SectionHeader.jsx
│   │   └── sections/
│   │       ├── AboutPreview.jsx
│   │       ├── Skills.jsx
│   │       ├── Services.jsx
│   │       ├── Process.jsx
│   │       ├── Experience.jsx
│   │       ├── FeaturedProjects.jsx
│   │       ├── ProjectCard.jsx
│   │       ├── Testimonials.jsx
│   │       └── ContactCTA.jsx
│   └── pages/
│       ├── Home.jsx
│       ├── About.jsx
│       ├── Projects.jsx
│       └── NotFound.jsx
```

## Installation
```bash
npm install
npm run dev
```
Open http://localhost:5173

## Build
```bash
npm run build
npm run preview
```

## Dependencies
- react, react-dom, react-router-dom, lucide-react
- vite, @vitejs/plugin-react, tailwindcss, @tailwindcss/vite, tw-animate-css

## Environment Variables
None required.

## Routing
- `/` — Home (Hero + 8 sections)
- `/about` — About page
- `/projects` — Projects gallery with category filter
- `*` — 404

## Customization
- Colors / theme tokens: `src/styles.css` (`:root` block, all oklch).
- Replace `src/assets/hero-portrait.jpg` with your own photo.
- Edit data arrays inside each section component (skills, services, projects, testimonials, experience).
