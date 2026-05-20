# Next.js scaffold — agent guide

This is the brAInwave feature scaffold. Agents modify it on demand.
Read this file, PATTERNS.md, and STYLE.md before writing any code.

## Stack

- Next.js 16, App Router (NOT Pages Router)
- TypeScript, strict mode — no `any`
- Tailwind CSS v4 — utility classes only, no custom CSS files
- shadcn/ui — pre-installed primitives in `components/ui/`

## Where things live

- `app/` — routes and pages. Each route is a folder with `page.tsx`.
- `components/ui/` — shadcn primitives. Do not edit these; import them.
- `components/` — our own components. Add new ones here.
- `lib/` — utilities. `lib/utils.ts` exports `cn()` for class merging.

## How to add a page

- Create `app/<route>/page.tsx`. It is a Server Component by default.
- Add `"use client"` at the top ONLY when the page needs browser-only
  features (state, effects, event handlers, browser APIs).
- Keep pages thin: compose components, do not inline large markup.

## How to add a component

- Create `components/<Name>.tsx` (PascalCase file for components).
- Build it from shadcn primitives — Button, Card, Input, Label,
  Textarea, Badge, Tabs are already installed.
- Tailwind classes only. No custom CSS, no inline `style={}`.

## How to add an API endpoint

- Prefer a Server Action over an API route when handling form input
  or mutations (see PATTERNS.md).
- If a real endpoint is needed: `app/api/<route>/route.ts` with named
  exports — `GET`, `POST`, etc. — each `(req: Request) => Response`.

## Naming

- Components: PascalCase (`TodoList` in `components/TodoList.tsx`).
- Functions and variables: camelCase (`addTodo`, `handleSubmit`).
- Route folders and files: kebab-case (`app/user-settings/page.tsx`).

## Verify before finishing

- Run `npm run build`. It must pass with no type errors.
- Do NOT install new dependencies (see the feature-builder skill for
  the narrow allowlist if one is truly unavoidable).
