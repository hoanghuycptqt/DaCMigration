# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

DaC Migration Portal — a Bosch internal web application for migrating engineering artifacts (requirements, design specs, test specs) from legacy tools (DOORS, DNG, Rhapsody) into Doc-as-Code (RST) repositories on GitHub Enterprise. Currently a **frontend-only UI prototype** with mock data; no backend yet.

## Development Commands

All commands run from `frontend/`:

```bash
cd frontend
npm install       # install dependencies
npm run dev       # start Vite dev server (http://localhost:5173)
npm run build     # TypeScript check + Vite production build
npm run lint      # ESLint
```

No test framework is configured yet.

## Tech Stack

- **React 19** + **TypeScript 5.9** (strict mode, `noUnusedLocals`, `noUnusedParameters`)
- **Vite 8** with `@vitejs/plugin-react`
- **react-router-dom v7** — flat route config in `src/router.tsx`
- **Pure CSS** — no CSS-in-JS, no Tailwind. Component styles are co-located `.css` files
- **Material Symbols Outlined** icons via Google Fonts CDN

## Architecture

### Routing & Layout

- `src/router.tsx` — flat `createBrowserRouter` config, no nested routes
- `src/App.tsx` — minimal; just `<RouterProvider>`
- **AppShell** (`components/layout/AppShell.tsx`) — wraps all authenticated pages with header + sidebar + content area. Each page component renders `<AppShell>` itself (not via route nesting)
- **LoginPage** is the only page that does NOT use AppShell

### Key Directories

```
frontend/src/
  components/
    layout/       AppShell, AppHeader, Sidebar (app chrome)
    ui/           Button, Card, Badge (reusable primitives)
    feedback/     NotificationBanner
    wizard/       WizardStepper
  pages/
    wizard/
      WizardPage.tsx           8-step migration wizard container
      steps/                   Individual step components (SelectTypeStep, RepositoryStep, etc.)
      steps/source-configs/    Per-migration-type config forms (7 types)
    admin/                     Admin-only pages (dashboard, monitoring, health, stats, users)
  data/           Mock data and constants (migrations, users, health, wizard configs)
  hooks/          useWizard (step navigation state)
  types/          All TypeScript interfaces in index.ts
  styles/         bosch-tokens.css (design tokens)
```

### Data Layer

All data is currently **static mock data** in `src/data/`:
- `migrations.ts` — `MIGRATION_TYPES` (7 types) and `SAMPLE_REQUESTS`
- `users.ts` — `CURRENT_USER` and `ALL_USERS` (used for auth simulation)
- `wizard.ts` — `WIZARD_STEPS` definition + per-type module configs and mapping data
- `health.ts`, `statistics.ts`, `fileTree.ts` — mock data for admin pages

The current user is hardcoded as admin in `data/users.ts` (`CURRENT_USER`). The sidebar conditionally shows admin menu items based on `CURRENT_USER.role`.

### Migration Wizard Flow

The wizard (`WizardPage.tsx` + `useWizard` hook) has 8 steps:
1. Select Type → 2. Repository → 3. Source Config → 4. Upload/Export → 5. Mapping → 6. Review → 7. Execute → 8. Monitor

**Source Config (Step 3)** renders a different form component per migration type via `source-configs/` directory — one file per type (SwArchConfig, DoorsReqConfig, DngReqConfig, DoorsDsdConfig, DngDsdConfig, RhapsodyConfig, TestSpecConfig).

### 7 Migration Types

| ID | Type | Export Mode |
|---|---|---|
| `sw-architecture` | SW Architecture | Manual Upload |
| `doors-requirements` | DOORS Requirements | Automated |
| `dng-requirements` | DNG Requirements | Manual Upload |
| `doors-dsd` | DOORS DSD | Automated |
| `dng-dsd` | DNG DSD | Manual Upload |
| `rhapsody-dsd` | Rhapsody DSD | Manual Upload |
| `testspec` | TestSpec | Manual Upload |

## Design System Conventions

- **All `border-radius: 0`** — sharp corners everywhere (Bosch engineering aesthetic)
- CSS custom properties defined in `styles/bosch-tokens.css`, prefixed with `--bosch-*` (raw palette) and semantic aliases like `--primary`, `--surface-*`, `--text-*`
- BEM-like CSS class naming: `component__element--modifier` (e.g., `sidebar__item--active`)
- Primary action color: `#007bc0` (Bosch Corporate Blue). Bosch Red (`#ed0007`) is brand-only, never for buttons
- Refer to `DESIGN.md` in repo root for full visual specs, color roles, component styling rules, and page-by-page UI specifications
