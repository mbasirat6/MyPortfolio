# Mahmood Basirat — Portfolio

## Local development

Run `npm ci`, then `npm run dev`. Use `npm run build` and `npm run lint` to validate changes; `npm run preview` serves the production build locally.

## Pages

- `/` — portfolio overview with compact project cards.
- `/projects/marif/` — standalone Marif case study with its own title and description, section links, six application screenshots, and links back to the project overview.

Vite builds both HTML entry points. Deploy the complete `dist/` directory: the case study is emitted as `dist/projects/marif/index.html`, so direct links and refreshes do not require an SPA catch-all rewrite on a static host that serves directory index files. The current asset URLs assume hosting at the domain root.

## Template information

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
