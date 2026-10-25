# Competitive Programming Hub

A web app for competitive programmers to track progress, browse curated problems, and study algorithm notes — all in one place.

> Status: MVP v0.1 — the interface is built and backed by static sample data. No database, auth, or code execution yet.

## Features

- **Landing page** — overview of the platform with quick links into the app.
- **Dashboard** — rating history chart, activity heatmap, summary stats, and recent submissions.
- **Problems** — searchable, filterable problem list (by difficulty and tag) with per-problem detail pages.
- **Notes** — searchable algorithm reference notes grouped by category.

## Tech stack

- [Next.js](https://nextjs.org) 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # production build
npm run start   # run the production build
npm run lint    # lint
```

## Project structure

```text
src/
├── app/
│   ├── page.tsx              # landing page
│   ├── layout.tsx            # root layout and fonts
│   └── (app)/                # authenticated-style app shell (sidebar layout)
│       ├── dashboard/        # progress dashboard
│       ├── problems/         # problem list + [id] detail page
│       └── notes/            # algorithm notes
├── components/               # shared UI (charts, badges, cards, sidebar, …)
├── data/                     # static sample data
└── lib/types.ts              # shared types
```

All content currently comes from the modules in `src/data/`. Swapping those for real API calls is the next step toward a functional app.
