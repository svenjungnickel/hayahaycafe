# AGENTS

This repository is a Gatsby + React site (Node >= 20). Use the guidance below when coding or running tasks.

## Commands (build/lint/test)

Install dependencies:

```sh
npm install
```

Development:

```sh
npm run develop
```

Clean + develop (binds to 0.0.0.0:8000):

```sh
npm run clean:develop
```

Production build:

```sh
npm run build
```

Serve the production build (http://localhost:9090):

```sh
npm run serve
```

Clean + build + serve:

```sh
npm run clean:serve
```

Lint:

```sh
npm run lint
```

Lint + autofix:

```sh
npm run lint:fix
```

Format (Prettier):

```sh
npm run format
```

Unit tests (Jest):

```sh
npm run test
```

Watch unit tests:

```sh
npx jest --watch
```

Watch all unit tests:

```sh
npx jest --watchAll
```

Run a single Jest test file:

```sh
npx jest src/components/__tests__/Header.test.js
```

Run a single test by name:

```sh
npx jest -t "renders header"
```

You can also pass Jest args through npm:

```sh
npm run test -- src/components/__tests__/Header.test.js
```

E2E tests (Cypress, against local production server):

```sh
npm run test:e2e
```

E2E headless:

```sh
npm run test:e2e:ci
```

Run a single Cypress spec:

```sh
npx cypress run --spec "cypress/e2e/contact.test.js"
```

Open Cypress UI:

```sh
npm run cypress:open
```

Lighthouse CI:

```sh
npm run lighthouse
```

Mutation tests (Stryker):

```sh
npm run stryker:run
```

Netlify CMS proxy (local CMS editing):

```sh
npm run netlifycms:proxyserver
```

CI checks (DDEV):

```sh
ddev ci
```

CI checks (manual, DDEV container):

```sh
ddev exec --dir="/var/www/html" bash -c "npm run lint && npm run test && npm run build && npm run lighthouse"
```

DDEV Cypress:

```sh
ddev cypress-open
ddev cypress-run
```

DDEV Stryker:

```sh
ddev stryker
```

## Environment setup

- Copy `.env.dist` to `.env.development` and fill in values as needed.
- For Cypress E2E, copy `cypress.env.json.dist` to `cypress.env.json` and provide credentials.
- Also copy `.env.development` to `.env.production` for E2E (tests hit a local production server).

## DDEV setup

- DDEV config lives under `.ddev/` and runs Node 24 with a Gatsby dev daemon.
- Start/restart: `ddev start` / `ddev restart`.
- Run npm commands in the container:

```sh
ddev exec --dir="/var/www/html" bash -c "npm install --prefer-offline --no-audit --legacy-peer-deps"
ddev exec --dir="/var/www/html" bash -c "npm run develop"
```

- Gatsby dev server runs on `0.0.0.0:8000` in the container and is exposed via `https://hayahaycafe.ddev.site`.
- The DDEV Gatsby daemon auto-runs `npm install --prefer-offline --no-audit --legacy-peer-deps` when `package.json` or `package-lock.json` changes.
- DDEV disables the webpack ESLint plugin via `GATSBY_DISABLE_ESLINT=true` (lint still works via `npm run lint`).
- Lighthouse in DDEV uses Chromium at `/usr/bin/chromium` with `--no-sandbox` (see `lighthouserc.json`).

## Code style and conventions

General:

- Language: JavaScript (ES modules), React 18, Gatsby 5.
- Indentation: 4 spaces.
- Quotes: single quotes for JS/JSX strings.
- Semicolons: required.
- Max line length: 120.
- Trailing commas: ES5 style.
- End-of-line: LF.

Imports:

- Prefer ES `import` syntax; avoid `require` in app code.
- Order imports: external packages, Gatsby/React libraries, local components, styles.
- Keep CSS module imports co-located with component usage.

Components:

- Prefer function components and hooks.
- PropTypes are used throughout; add/maintain `propTypes` for components that accept props.
- Export default component per file; named exports used for templates (e.g. `StartPageTemplate`).
- Use `data-cy` attributes for E2E hooks where needed.

Hooks:

- Follow React hook rules (linted as errors).
- Keep effects minimal; avoid missing dependency warnings unless intentional.

Styling:

- SCSS modules under `src/styles/**`.
- Import SCSS module classes and use camelCase or BEM-like names as defined.
- Global styles live in `src/styles/style.scss`.

Gatsby data:

- Page templates use `graphql` queries at the bottom of the file.
- Prefer `useStaticQuery` for global settings.
- GraphQL query names must be unique per file.

Naming:

- Components: PascalCase (`ContactForm`, `NavBar`).
- Hooks/state: camelCase (`smallNavBar`, `setSmallNavBar`).
- Files: match component name for React components; tests use `*.test.js`.

Testing:

- Unit tests live alongside components in `__tests__`.
- Use existing patterns in `src/components/__tests__` and `src/templates/__tests__`.
- Jest config: `jest.config.js` with jsdom environment and coverage enabled.

Error handling:

- Prefer early returns for invalid state.
- Network calls should surface errors (e.g., show UI feedback instead of silent failures).
- Avoid throwing inside render; use guards for optional data (`!!data && ...`).

Formatting and linting:

- Prettier config in `.prettierrc` enforces style.
- ESLint rules in `.eslintrc` (React + Jest + Cypress + Prettier).
- `react/react-in-jsx-scope` is disabled (Gatsby handles React scope).

## When things are unclear

- Start by inspecting similar files and matching existing patterns and conventions.
- Check `README.md`, `package.json` scripts, and config files before assuming new tooling.
- Prefer the smallest, least risky change that fits established behavior.
- If ambiguity remains, do all non-blocking work first, then ask one targeted question with a recommended default and
  what would change based on the answer.
- Document new conventions in `AGENTS.md`.

## Repository-specific notes

- Jest transforms use `jest-preprocess.js` and `babel-preset-gatsby`.
- Coverage output is in `coverage/index.html`.
- Cypress specs are in `cypress/e2e/*.test.js`.
- Mutation tests exclude `__tests__`, `__mocks__`, and `__fixtures__`.

## Cursor/Copilot rules

- No `.cursor/rules/`, `.cursorrules`, or `.github/copilot-instructions.md` found in this repo.
