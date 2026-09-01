# AGENTS.md — web-manus-typos-inc

## What This App Is

Typos_Inc "humanizes" AI-generated text by injecting realistic human errors — typos, grammatical slips, spelling mistakes, punctuation variation — at an adjustable error density, with a bureaucratic/redacted-document aesthetic. Paste text, process, copy the result. Fully client-side.

## Tech Stack

- **Frontend**: React 19 + TypeScript, Vite 7, Tailwind CSS 4, shadcn/ui (Radix primitives), wouter (routing), framer-motion, react-hook-form + zod
- **Backend**: Express (static file serving only — no API layer)
- **Tooling**: pnpm (required — `pnpm-lock.yaml` + patched deps), Prettier, esbuild

## Commands

| Command | Purpose |
|---|---|
| `pnpm install` | Install dependencies (pnpm only) |
| `pnpm dev` | Vite dev server (`vite --host`) at http://localhost:5173 |
| `pnpm build` | `vite build` + esbuild server bundle → `dist/` |
| `pnpm start` | Production server (serves `dist/public`, SPA fallback) on `PORT` (default 3000) |
| `pnpm preview` | Vite preview |
| `pnpm check` | TypeScript type check |
| `pnpm format` | Prettier write |

Prerequisites: Node 18+, pnpm.

**No test script is configured** — vitest may be in devDependencies but there is no `test` script and no test files. ESLint is not configured (Prettier only).

## Architecture & Directory Map

```
client/
  index.html
  public/                       Static assets
  src/
    main.tsx / App.tsx          Entry + wouter routes (Home, NotFound)
    pages/Home.tsx              Text transformation UI (input, density, output, copy)
    components/                 ErrorBoundary, AppDialog, Map (template leftovers)
    components/ui/              shadcn primitives (generated — compose, don't hand-edit)
    hooks/                      useComposition, useMobile, usePersistFn
    contexts/ThemeContext.tsx
    lib/utils.ts                cn() helper
server/
  index.ts                      Express: static serving + SPA fallback only (no API)
shared/const.ts                 Client+server constants
patches/wouter@3.7.1.patch      Applied via pnpm patchedDependencies — do not delete
docs: API.md, ARCHITECTURE.md (root)
ideas.md, .github/ (issue/PR templates)
```

**Data flow**: entirely client-side — error-injection logic runs in the browser; no persistence and no backend API.

## Where to Make Changes (Conventions)

- **Error-injection logic**: the humanization engine called from `client/src/pages/Home.tsx` (error-type tables, density mapping)
- **New pages**: `client/src/pages/` + wouter route in `client/src/App.tsx`
- **Server changes are rarely needed** — no API layer exists
- **Do NOT delete `patches/wouter@3.7.1.patch`**
- Design language is "bureaucratic brutalism" (analog paperwork/redaction motifs) — see `ideas.md`

## Environment Variables

No `.env.example`; nothing beyond `PORT`/`NODE_ENV` is read.

## Ports & URLs

- Dev: http://localhost:5173 (Vite)
- Production: http://localhost:3000 (Express; `PORT` overridable)

## Build & Deploy

`pnpm build` → `dist/public` (client) + `dist/index.js` (server); `pnpm start` serves production.

## Repo-Specific Notes

- Pure client-side toy app: no database, no auth, no telemetry
- Package.json already carries the author field (`Rajantha R Ambegala`)
- `Map.tsx` / `AppDialog.tsx` are unused template leftovers
