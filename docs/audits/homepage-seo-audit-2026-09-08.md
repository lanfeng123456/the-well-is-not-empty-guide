# SEO Audit: THE WELL IS NOT EMPTY Guide — 2026-09-08

## Result

**Conditional pass.** The site is technically ready once the real production domain is supplied through `NEXT_PUBLIC_SITE_URL`. The local preview intentionally blocks indexing.

## Verified

- Production simulation generated self-referencing absolute canonicals with trailing slashes, indexable robots directives, absolute sitemap URLs and complete Open Graph URLs.
- Homepage has one H1, an unbroken heading hierarchy and 14 unique internal destinations.
- Homepage contains five visible accordion questions. The same five questions and answers appear in valid `FAQPage` JSON-LD inside the page graph.
- Guide pages expose `Article` and `BreadcrumbList`; the battery puzzle also exposes `HowTo`.
- All 11 guide URLs are static/SSG, sitemap-listed and internally reachable. The three legal pages are `noindex, follow` and excluded from the sitemap.
- All inspected indexable pages have unique titles and descriptions.
- Largest generated HTML file is 38.4 KB, below the 150 KB audit limit.
- Twitter large-image card and complete Open Graph metadata are present when the production origin is configured.
- Existing pre-FAQ local Lighthouse baseline: Performance 93, Accessibility 100, Best Practices 100; FCP 0.8 s, TBT 70 ms, CLS 0. The simulated LCP result was 3.2 s and needs a deployed-domain measurement.

## Findings

### P1 — Production domain must be configured before deployment

Without `NEXT_PUBLIC_SITE_URL`, the site correctly emits `noindex, nofollow`, omits canonicals and returns an empty sitemap. Set the final HTTPS origin in Vercel before the production build, then inspect the deployed HTML.

### P1 — Add a dedicated 1200×630 social image

The current Open Graph image is the 1920×1080 Steam screenshot. It loads, but its 16:9 crop differs from the recommended 1.91:1 social-card ratio. Create a dedicated 1200×630 composition with safe text margins and keep the screenshot attribution.

### P2 — Normalize three meta descriptions

The homepage description is 166 characters; `/nursery-julian-walkthrough/` is 107 and `/prison-walkthrough/` is 114. Bring these closer to 120–160 characters while keeping the verified route details.

### P2 — Review four title lengths

Three indexable titles are 45–47 characters and the walkthrough title is 62. They remain unique and descriptive, so adjust only where wording becomes clearer; do not add a false dynamic month.

### P2 — Confirm production LCP

The previous local Lighthouse simulation reported a 3.2 s LCP. Recheck the deployed URL with PageSpeed Insights, then optimize the hero screenshot delivery if field or repeat lab data stays above 2.5 s.

## Structured-data note

The FAQ markup is valid and matches visible content. Google currently limits regular FAQ rich results mainly to authoritative health and government sites, and HowTo rich-result support has also been reduced. Keep the markup for machine-readable meaning, without promising a rich result.

## Validation evidence

- `npm run build`: pass
- `npm run lint`: pass
- `npm run audit`: pass — 11 guide routes, 3 legal routes, no forbidden claims, evidence boundaries present
- Production simulation origin used only for testing: `https://the-well-is-not-empty.example`

