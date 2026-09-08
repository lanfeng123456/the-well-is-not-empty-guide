import fs from "node:fs";
import path from "node:path";
import { marked } from "marked";
import { routes, SITE_NAME, SITE_URL } from "./config";
export { routes, SITE_NAME, SITE_URL, REVIEW_DATE, STEAM_URL } from "./config";

const related: Record<string, string[]> = {
  walkthrough: ["village-before-the-well", "prison-walkthrough", "storage-surface-walkthrough", "battery-charge-station-puzzle", "nursery-julian-walkthrough", "finale-ending-explained"],
  "village-before-the-well": ["achievements", "walkthrough", "prison-walkthrough"],
  "prison-walkthrough": ["controls", "walkthrough", "achievements"],
  "storage-surface-walkthrough": ["battery-charge-station-puzzle", "keys-and-progression-items", "nursery-julian-walkthrough"],
  "battery-charge-station-puzzle": ["storage-surface-walkthrough", "controls", "walkthrough"],
  "nursery-julian-walkthrough": ["controls", "achievements", "finale-ending-explained"],
  "finale-ending-explained": ["walkthrough", "achievements", "nursery-julian-walkthrough"],
  controls: ["prison-walkthrough", "battery-charge-station-puzzle", "nursery-julian-walkthrough"],
  achievements: ["village-before-the-well", "prison-walkthrough", "nursery-julian-walkthrough"],
  "keys-and-progression-items": ["storage-surface-walkthrough", "battery-charge-station-puzzle", "walkthrough"],
};

export type Guide = { slug: string; title: string; description: string; h1: string; html: string; related: typeof routes[number][] };

function parseDrafts(): Guide[] {
  const source = fs.readFileSync(path.join(process.cwd(), "content", "site-content-en.md"), "utf8");
  const sections = source.split(/^## \d+\. `/m).slice(1);
  return sections.map((section) => {
    const route = (section.match(/^\/(.*?)`/)?.[1] ?? "").replace(/\/$/, "");
    const slug = route || "home";
    const title = section.match(/\*\*SEO title:\*\* (.+)/)?.[1]?.trim() ?? SITE_NAME;
    const description = section.match(/\*\*Meta description:\*\* (.+)/)?.[1]?.trim() ?? "Independent launch-build guide.";
    const h1 = section.match(/\*\*H1:\*\* (.+)/)?.[1]?.trim() ?? title;
    const body = section
      .replace(/^.*\n/, "")
      .replace(/\*\*SEO title:\*\*.*\n/, "")
      .replace(/\*\*Meta description:\*\*.*\n/, "")
      .replace(/\*\*H1:\*\*.*\n/, "")
      .replace(/\*\*CTA links:\*\*.*\n?/g, "")
      .replace(/\*\*Related guides:\*\*.*\n?/g, "")
      .replace(/\*\*Source note:\*\*.*\n?/g, "")
      .replace(/^---\s*$/gm, "")
      .replace(/^### /gm, "## ")
      .trim();
    return {
      slug,
      title,
      description,
      h1,
      html: marked.parse(body, { async: false }) as string,
      related: (related[slug] || []).map((item) => routes.find((routeItem) => routeItem.slug === item)!).filter(Boolean),
    };
  });
}

export const guides = parseDrafts();
export const homeGuide = guides.find((guide) => guide.slug === "home")!;
export function getGuide(slug: string) { return guides.find((guide) => guide.slug === slug); }
export function canonical(pathname: string) { return SITE_URL ? `${SITE_URL}${pathname}` : undefined; }
