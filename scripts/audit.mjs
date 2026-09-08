import fs from "node:fs";
import path from "node:path";

const root = path.resolve(".next/server/app");
const guideRoutes = ["", "walkthrough", "village-before-the-well", "prison-walkthrough", "storage-surface-walkthrough", "battery-charge-station-puzzle", "nursery-julian-walkthrough", "finale-ending-explained", "controls", "achievements", "keys-and-progression-items"];
const legalRoutes = ["privacy", "terms", "disclaimer"];
const expected = [...guideRoutes, ...legalRoutes];
const forbidden = ["sheet-music-locations", "all-notes-collectibles", "mouse-camera-brightness-fix", "all-endings"];
const source = fs.readFileSync("content/site-content-en.md", "utf8");
const errors = [];
for (const slug of expected) {
  const dir = path.join(root, slug);
  const file = fs.existsSync(path.join(dir, "index.html")) ? path.join(dir, "index.html") : path.join(root, `${slug}.html`);
  if (!fs.existsSync(file)) errors.push(`missing route: /${slug}`);
}
for (const slug of forbidden) if (fs.existsSync(path.join(root, slug))) errors.push(`forbidden route shipped: ${slug}`);
if (/\b\d{7}\b/.test(source)) errors.push("battery copy contains a fixed seven-digit code");
if (!/There is no safe universal seven-digit code/.test(source)) errors.push("missing generated-code warning");
if (!/hidden/i.test(source.match(/### A New Age[\s\S]*?(?=###)/)?.[0] || "")) errors.push("A New Age is not marked hidden");
const files = ["public/icon-512.png", "public/favicon-32x32.png", "public/favicon.ico", "public/apple-touch-icon.png"];
for (const file of files) if (!fs.existsSync(file)) errors.push(`missing icon: ${file}`);
if (errors.length) { console.error(errors.join("\n")); process.exit(1); }
console.log(`PASS: ${guideRoutes.length} guide routes + ${legalRoutes.length} legal routes; forbidden topics absent; evidence boundaries present; icon files present.`);
