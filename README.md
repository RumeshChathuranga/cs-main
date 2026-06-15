# AIESEC in Colombo South — Website

Official marketing website for **AIESEC in Colombo South**, built as a modern single-page application. The site showcases exchange programs, member stories, and organizational values, with a Supabase-powered admin panel for managing blog content and contact form submissions.

**Live stack:** React 19 · TypeScript · Vite · Tailwind CSS 4 · Supabase

---

## Features

### Public website

| Page | Route | Description |
| --- | --- | --- |
| Home | `/` | Hero, about, stats, values, programs, testimonials, blog preview, CTA |
| Global Volunteer | `/programs/global-volunteer` | Volunteer exchange program details |
| Global Talent | `/programs/global-talent` | Professional internship program |
| Global Teacher | `/programs/global-teacher` | Teaching abroad program |
| Blog | `/blog` | Published articles (Supabase or static fallback) |
| Blog article | `/blog/:id` | Individual post with rich HTML content |
| About | `/about` | Team and organization information |
| Contact | `/contact` | Contact form — submissions stored in Supabase |

### Admin panel

Authenticated editors manage content through a protected admin area:

| Page | Route | Description |
| --- | --- | --- |
| Login | `/admin` | Email + password sign-in via Supabase Auth |
| Dashboard | `/admin/dashboard` | List, publish, unpublish, and delete blog posts |
| New post | `/admin/posts/new` | Create a post with TipTap rich text editor |
| Edit post | `/admin/posts/:id/edit` | Update an existing post |
| Messages | `/admin/messages` | Inbox for contact form submissions |
| Message detail | `/admin/messages/:id` | View and update message status |

Admin capabilities include direct image uploads to Supabase Storage, draft/published workflow, and contact message status tracking (`new` → `read` → `replied` → `archived`).

---

## Tech stack

| Layer | Technology |
| --- | --- |
| Framework | [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org) |
| Build tool | [Vite 8](https://vite.dev) |
| Routing | [React Router 7](https://reactrouter.com) |
| Styling | [Tailwind CSS 4](https://tailwindcss.com) with custom brand tokens |
| Backend | [Supabase](https://supabase.com) — Auth, PostgreSQL, Storage |
| Rich text | [TipTap](https://tiptap.dev) |
| Animation | [Framer Motion](https://www.framer.com/motion/) |
| Icons | [Lucide React](https://lucide.dev), [Tabler Icons](https://tabler.io/icons) |
| Linting / formatting | ESLint 10, Prettier |

---

## Project structure

```
src/
├── assets/          # Images and static media
├── components/
│   ├── admin/       # ProtectedRoute, RichTextEditor, ImageUploader
│   ├── layout/      # RootLayout, AdminLayout
│   └── ui/          # Reusable UI primitives (Button, Logo, Navbar, Map, …)
├── contexts/        # AuthContext (Supabase session management)
├── data/            # Static blog posts (fallback when Supabase is not configured)
├── hooks/           # useBlogPosts, useContactMessages
├── lib/             # Supabase client, database types, utilities
├── pages/           # Route-level page components
│   └── admin/       # Admin panel pages
└── router/          # React Router configuration
```

---

## Getting started

### Prerequisites

- **Node.js 20+** (matches CI)
- **npm** (or compatible package manager)

### 1. Clone and install

```bash
git clone <repository-url>
cd cs-main
npm install
```

### 2. Environment variables

Create `.env.local` in the project root:

```env
VITE_SUPABASE_URL=https://YOUR_PROJECT_ID.supabase.co
VITE_SUPABASE_ANON_KEY=YOUR_ANON_KEY_HERE
```

Without these values the site still runs locally — the blog falls back to static sample posts and admin features require a configured Supabase project.

### 3. Supabase setup

For blog management, image uploads, contact form storage, and admin authentication, follow the step-by-step guide in **[SUPABASE_SETUP.md](./SUPABASE_SETUP.md)**. It covers:

- Creating tables (`blog_posts`, `contact_messages`) with Row Level Security
- Configuring the `blog-images` storage bucket
- Creating editor accounts
- Transferring project ownership when handing over

### 4. Run locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

---

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Type-check and produce a production build in `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run typecheck` | Run TypeScript compiler without emitting files |
| `npm run lint` | Run ESLint |
| `npm run lint:ci` | Run ESLint with zero warnings allowed (used in CI) |
| `npm run format` | Format all files with Prettier |
| `npm run format:check` | Check formatting without writing |

---

## CI / CD

GitHub Actions runs on every push and pull request to `main`, `master`, and `develop`:

1. **Lint & Format** — Prettier + ESLint (`lint:ci`)
2. **TypeScript** — `tsc --noEmit`
3. **Build** — Production build; `dist/` artifact uploaded for 7 days

Workflow file: [`.github/workflows/ci.yml`](./.github/workflows/ci.yml)

---

## Deployment

The app is a static SPA. Build with `npm run build` and deploy the `dist/` folder to any static host (Vercel, Netlify, Cloudflare Pages, etc.).

Set the same `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` environment variables in your hosting provider so blog and contact features work in production.

For client-side routing, configure your host to serve `index.html` for all routes (SPA fallback).

---

## Design

- **Font:** Poppins (Google Fonts)
- **Primary brand color:** `#037ef3`
- **Layout:** Responsive navbar with mobile menu, shared footer on public pages, sidebar layout for admin

---

## Contributing

1. Create a feature branch from `main`
2. Make changes and ensure CI passes locally:

   ```bash
   npm run format:check
   npm run lint:ci
   npm run typecheck
   npm run build
   ```

3. Open a pull request

---

## License

Private — AIESEC in Colombo South. All rights reserved.
