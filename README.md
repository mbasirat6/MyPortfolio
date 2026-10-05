# Mahmood Basirat — Portfolio

## Local development

Run `npm ci`, then `npm run dev`. Use `npm run build` and `npm run lint` to validate changes; `npm run preview` serves the production build locally.

## Pages

- `/` — portfolio overview with compact project cards.
- `/projects/marif/` — standalone Marif case study with its own title and description, section links, six application screenshots, and links back to the project overview.

Vite builds both HTML entry points. Deploy the complete `dist/` directory: the case study is emitted as `dist/projects/marif/index.html`, so direct links and refreshes do not require an SPA catch-all rewrite on a static host that serves directory index files. The current asset URLs assume hosting at the domain root.

## Animated background

Both pages share a portfolio adaptation of Khwazon's procedural hexagon background in `src/HexagonBackground.jsx` and `src/lib/hexagon-field.js`, with smaller tiles, softer edges, blue-violet lighting, and extra dimming on mobile. Three.js loads separately from the page content. The light follows the mouse, drifts when idle, and runs at 30 fps on touch devices. Rendering pauses in hidden tabs, caps resolution, and uses a matching static SVG texture when reduced motion is enabled or WebGL is unavailable. The background does not intercept clicks; its CSS overlay keeps text readable above the moving light.

## Project details

Every project card uses the same Read more button to open a native modal reader. Cards stretch to match their row and keep the actions aligned; descriptions never expand the grid. The reader has a fixed header, its own scrolling, consistent explanation sections, and inline screenshots with links to full images. Marif also links to its full case-study page. Escape, the close button, or clicking outside dismisses the reader and returns focus to the originating card without moving the page. Both themes and reduced-transparency preferences are supported.

## Project previews

Project cards use CSS device frames in `src/ProjectDevices.jsx` and `src/ProjectDevices.css`. Atlas and portfolio previews combine actual desktop (1440 × 960) and mobile (390 × 844) captures from the local applications, stored in `public/screenshots/devices/`. Marif shows its library in a portrait tablet mockup alongside the mobile chapter map; Survey Dashboard pairs the desktop screenshot with a phone mockup of a cropped dashboard detail. These two compositions are labelled as mockups: their additional device views are CSS crops of existing screenshots, not captures of responsive layouts. Original images remain unchanged and are never stretched. Poetry Explorer uses its original desktop screenshot; workflow-only projects retain diagram previews. The `devicePreview` metadata in `src/App.jsx` records screen dimensions and optional frame ratios and crop positions.

The eKhayat card uses the six existing `public/ekhayat/*.webp` screenshots from the local Khwazon project, copied unchanged to `public/screenshots/ekhayat/`. Its phone mockup crops the measurement illustration; the full images are available in the screenshot gallery. The product link (`https://ekhayat.com/`) comes from Khwazon's `app/lib/products.ts`, and the existing Figma design link is retained.

## Themes

The header's Themes button offers Grey (the default) and Pearl Light. The choice is saved locally and shared by both pages. Previously saved choices for removed themes fall back to Grey. Pearl Light coordinates the hexagon scene, cards, navigation, links, and controls with dark text on pale surfaces. Photos and project images keep their colors. The static background also follows the selected theme when reduced motion is enabled or WebGL is unavailable. Palette options live in `src/portfolioTheme.js`, with Pearl Light color rules in `src/ThemePalettes.css`.

## Template information

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
