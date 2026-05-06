# ⚙️ Portfolio Preferences — Technology Theme

## 🎨 Design System

### Color Palette

* **Primary Background:** `#0B0F19` (Deep Black)
* **Secondary Background:** `#111827` (Dark Slate)
* **Accent Blue:** `#2563EB` (Tech Blue)
* **Light Blue Highlight:** `#3B82F6`
* **Text Primary:** `#E5E7EB`
* **Text Secondary:** `#9CA3AF`

### Typography

* **Font Family:** Inter, JetBrains Mono (for code blocks)
* **Headings:** Bold, tight tracking
* **Body:** Medium weight, high readability

### UI Feel

* Minimal, grid-based layout
* Subtle glow/hover effects (blue accents)
* Card-based "Lego-style" modular components
* Dark mode default (no toggle required)

---

## 🧱 Architecture Preferences

### Code Philosophy

* Follow **SOLID principles**
* Strict **TypeScript typing** (no `any`)
* Separation of concerns:

  * Data layer (JSON/MD)
  * Logic layer (filters, parsing)
  * UI layer (components)

### Component Structure (Atomic Design)

* **Atoms:** Buttons, Badges, Tags
* **Molecules:** ProjectCard, NavLink, FilterItem
* **Organisms:** ProjectGrid, Navbar, Timeline
* **Layouts:** RootLayout with persistent nav/footer

---

## 📂 Data Handling Standards

### `projects.json` Rules

Each project must include:

```ts
interface Project {
  title: string;
  description: string;
  techStack: string[];
  completionDate: string;
  category: "SEO Audit" | "Frontend" | "Research" | "Other";
}
```

### Markdown / MDX Logs

* Stored in `/content/logs`
* Filename = slug
* Must include:

  * Title
  * Date
  * Summary
* Parsed at build time using static generation

---

## 🧭 Navigation Behavior

### Pages

* `/` → Hero + Featured Work + Timeline
* `/work` → Filterable Project Gallery
* `/logs/[slug]` → Dynamic log pages

### UX Rules

* Active link highlighting (blue underline/glow)
* Smooth transitions between routes
* Skeleton loaders (`loading.tsx`) for async states

---

## 🔍 Filtering System

* Filter by:

  * Tech Stack
  * Category
* Logic must be:

  * Independent from UI
  * Reusable
* No hardcoded filters in components

---

## ⚡ Performance & SEO Standards

### Performance

* Lighthouse Score: **90+**
* No layout shifts (CLS = 0)
* Optimized images using `next/image`

### SEO

* Dynamic metadata via `generateMetadata`
* Unique titles for each log page
* Semantic HTML structure

---

## 📱 Responsiveness

* Mobile-first design
* Grid behavior:

  * 1 column (mobile)
  * 2 column (tablet)
  * 3 column (desktop)
* Touch targets ≥ 44px
* No overflow or horizontal scroll

---

## 🚀 Deployment Preferences

* Platform: Vercel (preferred) or Netlify
* Continuous deployment from GitHub
* Environment kept minimal (static-first approach)

---

## ✅ Success Rules

* New projects added ONLY via `projects.json`
* No UI changes required for content updates
* Fully accessible (ARIA labels, semantic tags)
* Clean, maintainable, scalable codebase

---

## 🧠 Developer Notes

* Treat components like **Lego blocks**
* Prioritize readability over cleverness
* Avoid over-engineering
* Keep everything modular and reusable

---

**Theme Motto:**

> Build fast. Stay modular. Ship clean.
