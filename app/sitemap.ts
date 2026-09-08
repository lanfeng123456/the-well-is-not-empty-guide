import type { MetadataRoute } from "next";
import { routes, SITE_URL } from "@/lib/config";
export default function sitemap(): MetadataRoute.Sitemap { if (!SITE_URL) return []; const updated = new Date("2026-09-08T00:00:00Z"); return [{ url: `${SITE_URL}/`, lastModified: updated, priority: 1 }, ...routes.map(({ slug }) => ({ url: `${SITE_URL}/${slug}/`, lastModified: updated, priority: slug === "walkthrough" ? 0.9 : 0.8 }))]; }
