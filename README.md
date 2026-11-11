# davidcellini.co.uk

David Cellini's portfolio site. Built with [Astro](https://astro.build/) on the [Maria theme](https://github.com/xocothemes/maria) by Andrei Alba.

## Develop

Uses Node 24 (see `.nvmrc`).

```bash
npm install
npm run dev      # http://localhost:4321
npm run check    # type check
npm run build    # static site in dist/
```

## CI

`.github/workflows/ci.yml` runs on every pull request and push to `master`: `npm ci`, type check, formatting, build, then Lighthouse CI (`lighthouserc.json`) on the homepage and one case study. It fails below 90 for performance and best practices, 95 for SEO and 100 for accessibility.

## Deploy

Cloudflare Workers Builds deploys every push to `master` to https://davidcellini.co.uk. Other branches get preview URLs.

## Licences

The Maria theme is MIT licensed (see `LICENSE`). Fonts are under the SIL Open Font License (`public/fonts/*/OFL.txt`). Icons are from Lucide and Bootstrap Icons (`src/icons/*/LICENSE*`).
