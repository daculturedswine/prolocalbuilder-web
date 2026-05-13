# CLAUDE.md

Developer guide for AI agents working in this monorepo.

## Repo layout

```
prolocalbuilder/
├── apps/
│   ├── web/            Next.js 15 marketing site (@prolocalbuilder/web)
│   └── game-server/    (future) WebSocket game server — sole writer of live match state
├── packages/
│   ├── engine/         (@optcg/engine) All game logic lives here, nowhere else
│   ├── cards/          (@optcg/cards) Card database and card data types
│   └── shared-types/   (@optcg/shared-types) Types shared across apps and packages
├── package.json        Workspace root (pnpm scripts)
├── pnpm-workspace.yaml Declares apps/* and packages/* as workspace members
└── tsconfig.json       Root TypeScript base config with @optcg/* path aliases
```

## Architectural rules

### Game logic (packages/engine)
- **All game logic lives only in `packages/engine`.** Do not implement rules, state machines, or
  card effects in `apps/web` or `apps/game-server` directly — import from `@optcg/engine` instead.
- `packages/engine` must be pure TypeScript with zero runtime dependencies on Node or browser APIs.

### Live match state (apps/game-server)
- **`apps/game-server` is the only process permitted to write live match state.**
- `apps/web` must never write match state directly; it reads via subscriptions or REST snapshots.

### Persisted data (Supabase)
- **Supabase is the source of truth for all persisted data** (user accounts, deck lists, match
  history, card catalog).
- `apps/game-server` writes match results to Supabase when a game ends.
- `apps/web` reads persisted data from Supabase (read-only from the browser).

## Package manager

This repo uses **pnpm workspaces**. Always use `pnpm`, never `npm` or `yarn`.

```bash
pnpm install            # install all workspace deps
pnpm dev:web            # run apps/web on port 3000
pnpm build:web          # production build of apps/web
pnpm -r typecheck       # typecheck all packages
pnpm -r lint            # lint all packages
pnpm --filter @prolocalbuilder/web <script>   # target apps/web specifically
pnpm --filter @optcg/engine <script>          # target packages/engine specifically
```

## TypeScript path aliases

The root `tsconfig.json` declares:

| Alias | Resolves to |
|---|---|
| `@optcg/engine` | `packages/engine/src/index.ts` |
| `@optcg/cards` | `packages/cards/src/index.ts` |
| `@optcg/shared-types` | `packages/shared-types/src/index.ts` |

`apps/web/tsconfig.json` also declares `@/*` → `apps/web/*` for Next.js imports.

## Working in apps/web

- Next.js 15 App Router. All pages live under `apps/web/app/`.
- Components under `apps/web/components/`, shared constants under `apps/web/lib/`.
- Run the dev server: `pnpm dev:web` (port 3000).
- Tailwind brand tokens are defined in `apps/web/tailwind.config.ts` — never use arbitrary values.
- CSP is strict in production; if you add a new external resource you must update
  `apps/web/next.config.mjs`.
