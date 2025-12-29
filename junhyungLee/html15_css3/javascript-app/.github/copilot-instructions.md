# Copilot instructions — javascript-app

Purpose
-------
This repository is a small Vite + React TypeScript front-end used for teaching basic JS/TS concepts. The guidance below highlights the repository structure, run/build workflows, and code conventions that an AI code agent should follow when making changes.

Quick commands
--------------
- `npm run dev` — start Vite dev server
- `npm run build` — runs `tsc -b` (project references) then `vite build`
- `npm run preview` — preview built output
- `npm run lint` — run ESLint across the repo

Big picture / architecture
--------------------------
- Single-page front-end (no backend). Entry: `index.html` -> `src/main.tsx` -> `App`.
- Built with Vite and React plugin (`vite.config.ts`). TypeScript build uses composite projects (`tsc -b`) referenced from `tsconfig.json`.
- Code is organized by topic folders under `src/` (e.g. `math_operation/`, `data_type/`). Files contain small, self-contained example components used by `App`.

Key files (edit with care)
-------------------------
- `index.html` — root element (`<div id="root">`) and module entry.
- `src/main.tsx` — bootstraps React (`createRoot`) and imports `index.css`.
- `src/App.tsx` — app container; default export. Adds example components.
- Example components: `src/math_operation/CalculationExample.tsx`, `src/data_type/VariableAndDataTypes.tsx` — pedagogical examples, keep comments and structure intact.
- `package.json`, `vite.config.ts`, `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json` — build, plugin and TypeScript references.

Project-specific conventions
---------------------------
- Component style: many example components follow the pattern `export const Name = () => { ... }` (named exports). `App` is a default export — follow local patterns when adding components.
- Import style: existing imports sometimes include the `.tsx` extension (e.g. `import App from './App.tsx'`). Match the repository's import style where present.
- Folder-by-concept: add new examples under a topical folder in `src/` to match current grouping.
- Preserve pedagogical comments (many are in Korean) and examples; changes should not remove explanatory code unless explicitly requested.

TypeScript & build notes
------------------------
- `npm run build` triggers a TypeScript composite build (`tsc -b`) before `vite build`. For type-only changes, run `tsc -b` locally to validate.
- There are no test runners configured; do not add test framework dependencies without discussion.

Linting & dependencies
----------------------
- ESLint is configured and runnable via `npm run lint`. No formatter (Prettier) is present by default.
- Dev dependencies are declared in `package.json`. Add packages only after ensuring `vite.config.ts` and TypeScript config stay consistent.

How to add a new example component (example)
-------------------------------------------
1. Create `src/<topic>/MyExample.tsx`.
2. Use the existing export pattern:

```tsx
export const MyExample = () => {
  return <div>Example</div>
}
```

3. Import into `src/App.tsx` using the same import style as other components:

```ts
import { MyExample } from './<topic>/MyExample'
```

Files to check before PR
------------------------
- `package.json` — scripts and dependency changes
- `vite.config.ts` — plugin/config changes
- `tsconfig*.json` — ensure project references remain valid
- `src/main.tsx` and `index.html` — verify entrypoint remains consistent

If anything here is unclear or you'd like more detail (tests, CI setup, or contributor rules), tell me which area to expand.
