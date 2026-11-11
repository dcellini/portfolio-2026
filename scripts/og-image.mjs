// Regenerates public/og-image.png (1200x630) from scripts/og-image.html.
// Needs Playwright with Chromium, which isn't a project dependency. Install it
// globally (npm i -g playwright && npx playwright install chromium), then run:
//   NODE_PATH=$(npm root -g) node scripts/og-image.mjs
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const { chromium } = createRequire(import.meta.url)('playwright');

const html = new URL('./og-image.html', import.meta.url);
const out = fileURLToPath(new URL('../public/og-image.png', import.meta.url));

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.goto(html.href);
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: out, clip: { x: 0, y: 0, width: 1200, height: 630 } });
await browser.close();
console.log(`Wrote ${out}`);
