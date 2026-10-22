# Building Blocks

A static, read-only visual collection of 17 language-model research papers, displayed newest to oldest in a staggered building-block timeline. Ten selected release years span 2013–2025. Dates use the first arXiv release rather than later revisions. The selection is curated, not a complete history.

## Development

Use Node.js 22+ and pnpm 11.19.0.

- `pnpm install --frozen-lockfile`
- `pnpm dev`
- `pnpm build`
- `pnpm preview`

Development and build scripts generate one HTML entry per paper. D3 and GSAP are bundled locally. Cartoon illustrations are local WebP assets; original PNGs and generation prompts are retained (see IMAGE_CREDITS.md).

## Experience

The home page shows a dated wall of paper blocks. Related-earlier-idea links and a short connection section on each lesson explain conceptual relationships; they are not a complete citation or dependency graph. Detail pages have no side menus and have a back-to-home link at the top and bottom. All lessons include mechanics, worked examples, schematic diagrams, findings, limits, practical roles and industries, tasks, relevance, and source links. Motion respects reduced-motion preferences.

The five added lessons cover Chinchilla, FlashAttention, QLoRA, DPO, and DeepSeek-R1. Existing paper URLs are preserved.

## Official repository and GitHub Pages

Repository: [LazyBuilder/AI-Building-Blocks-KB](https://github.com/LazyBuilder/AI-Building-Blocks-KB)

Expected live site after deployment: [Building Blocks](https://lazybuilder.github.io/AI-Building-Blocks-KB/)

See [PUBLISH.md](PUBLISH.md) for the copy-and-publish instructions and required GitHub settings. Copy all source files, including the hidden `.github` folder, to the repository root. Select **Settings → Pages → Source → GitHub Actions**. The workflow supports default branches named `main` or `master`, verifies the build, uploads `dist/`, and deploys only the default branch. Pull requests run checks without deployment. No custom secrets are needed.

The relative Vite base and physical paper-page entry files support the `/AI-Building-Blocks-KB/` subpath, nested links, and page refreshes. No custom domain is configured.

## Privacy

No backend, forms, cookies, browser storage, analytics, tracking, remote fonts, or remotely loaded runtime scripts. External research links are opened only by visitor navigation.

## Verification

Production build passed for all 18 pages. Render and interaction-logic checks cover timeline order, 17 cards, 10 year tiers, menu removal, two home links per lesson, complete practical applications, diagram steps/replay, valid earlier-idea connections, and local links/assets. These checks do not establish pixel-level layout or real browser interaction quality. Visual browser QA remains unverified because the browser tool could not verify its admin-enforced security policy.

