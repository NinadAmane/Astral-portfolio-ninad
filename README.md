# 🧠 Ninad Amane - Developer Portfolio

Welcome to the source code of my personal developer portfolio — a sleek, responsive, and modern website built with performance and aesthetics in mind.

## 🌐 Live Site

**URL**: [https://astral-portfolio-ninad.vercel.app/]

## 🚀 Features

- ⚛️ Built with **React** + **TypeScript**
- ⚡ Fast & optimized with **Vite**
- 🎨 Designed using **Tailwind CSS** and **shadcn/ui**
- 📱 Fully responsive across all devices
- 🧩 Modular structure with reusable components
- 🌙 Dark theme with interactive animations
- 🧠 Showcases my projects, skills, contact info, and resume

---

## 🗂 Managing Projects (Edit without touching code)

- Data source: `public/projects.json`
- The app fetches `/projects.json` at runtime via `useProjects()`.
- To update projects:
  1. Edit `public/projects.json`
  2. Commit and deploy to Vercel
  3. Refresh the site

Schema example:
```json
[
  {
    "id": "1",
    "title": "AI Course Builder Platform",
    "description": "One‑liner about the project.",
    "tags": ["MERN", "Vite", "Gemini API", "YouTube Data API", "TailwindCSS"],
    "image": "/images/ai-course-builder.png",
    "liveUrl": "https://example.com",
    "githubUrl": "https://github.com/your/repo",
    "icon": "Globe"
  }
]
```
Notes:
- Place thumbnails in `public/images/` and reference with a leading slash.
- Empty `liveUrl` or `githubUrl` will still render buttons; we can make them conditional if you prefer.

---

## 🎯 Supported Project Icons

Icons are rendered using `lucide-react`. The following names work out of the box:

- Globe
- Code
- Palette
- Database
- Cloud

Use one of these in your JSON `icon` field, e.g. `"icon": "Cloud"`.

### Add more icons
1. Import the icon in `src/hooks/useProjects.ts`:
```ts
import { Server } from "lucide-react";
```
2. Add it to `iconMap` and/or normalize names in `resolveIcon`:
```ts
const iconMap = { Globe, Code, Palette, Database, Cloud, Server } as const;
// optional aliasing
const normalized = iconName === 'Servers' ? 'Server' : iconName;
```
3. Use it in your JSON: `"icon": "Server"`.

> Tip: Check all available icons here: https://lucide.dev/icons

---

## 🛠️ Tech Stack

| Technology   | Purpose                      |
| ------------ | ---------------------------- |
| React        | Frontend framework           |
| TypeScript   | Static typing                |
| Vite         | Fast build tool + dev server |
| Tailwind CSS | Utility-first CSS framework  |
| shadcn/ui    | UI components                |
| Lucide Icons | Icon library                 |
| Vercel       | Deployment platform          |

---

## 🚧 Local Development

> Prerequisites: [Node.js](https://nodejs.org/) and npm installed

```bash
# Clone the repository
git clone https://github.com/NinadAmane/Astral-portfolio-ninad.git

# Navigate into the project
cd Astral-portfolio-ninad

# Install dependencies
npm install

# Start development server
npm run dev

# Visit the app
# Typically http://localhost:5173 (Vite will print the exact port)
```

---

## 🔁 Deployment Notes (Vercel)

- Static files (including `public/projects.json`) are bundled per deployment.
- To update projects on production: edit `public/projects.json` → commit → redeploy.
- Optional advanced: point `VITE_PROJECTS_JSON_URL` to a remote JSON to update without redeploys.

© 2024 Ninad Amane. Built with 💻 and ☕
