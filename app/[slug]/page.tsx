import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BatteryChecklist } from "@/components/BatteryChecklist";
import { SpoilerPanel } from "@/components/SpoilerPanel";
import { canonical, getGuide, routes, REVIEW_DATE, SITE_NAME } from "@/lib/site";

export const dynamicParams = false;
export function generateStaticParams() { return routes.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const guide = getGuide(slug); if (!guide) return {};
  const path = `/${slug}/`;
  const label = routes.find((route) => route.slug === slug)?.label ?? guide.h1;
  return { title: guide.title, description: guide.description, keywords: [`THE WELL IS NOT EMPTY ${label.toLowerCase()} guide`, "THE WELL IS NOT EMPTY walkthrough"], alternates: canonical(path) ? { canonical: canonical(path) } : undefined,
    openGraph: { title: guide.title, description: guide.description, url: canonical(path), type: "article", siteName: SITE_NAME, images: canonical(path) ? [{ url: "/official-media/screenshot-01.jpg", width: 1920, height: 1080, alt: "THE WELL IS NOT EMPTY official Steam promotional screenshot" }] : undefined },
    twitter: { card: "summary_large_image", title: guide.title, description: guide.description, images: canonical(path) ? ["/official-media/screenshot-01.jpg"] : undefined } };
}

const imageBySlug: Record<string, string> = {
  walkthrough: "screenshot-08.jpg", "village-before-the-well": "screenshot-02.jpg", "prison-walkthrough": "screenshot-05.jpg",
  "storage-surface-walkthrough": "screenshot-10.jpg", "battery-charge-station-puzzle": "screenshot-11.jpg", "nursery-julian-walkthrough": "screenshot-16.jpg",
  "finale-ending-explained": "screenshot-20.jpg", controls: "screenshot-06.jpg", achievements: "screenshot-04.jpg", "keys-and-progression-items": "screenshot-13.jpg"
};

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const guide = getGuide(slug); if (!guide) notFound();
  const schemaGraph: Record<string, unknown>[] = [
    { "@type": "Article", headline: guide.h1, description: guide.description, datePublished: "2026-09-08", dateModified: "2026-09-08", author: { "@type": "Organization", name: SITE_NAME }, mainEntityOfPage: canonical(`/${slug}/`) },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Guide Home", item: canonical("/") }, { "@type": "ListItem", position: 2, name: guide.h1, item: canonical(`/${slug}/`) }] }
  ];
  if (slug === "battery-charge-station-puzzle") schemaGraph.push({ "@type": "HowTo", name: guide.h1, description: "Reset seven generated signals and charge the capacitor without relying on a fixed code.", step: [
    "Bring the Uncharged Capacitor", "Pull the main lever", "Wait for the current signal", "Compare it with the room clue", "Send one matching digit", "Repeat until seven signals pass", "Charge and retrieve the capacitor"
  ].map((text, index) => ({ "@type": "HowToStep", position: index + 1, text })) });
  const jsonLd = { "@context": "https://schema.org", "@graph": schemaGraph };
  return <main id="main">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}/>
    <section className="article-hero">
      <Image src={`/official-media/${imageBySlug[slug]}`} alt={`Official Steam promotional screenshot for ${guide.h1}`} fill priority sizes="100vw" className="article-hero-image"/>
      <div className="article-overlay"/><div className="article-hero-inner"><nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Guide home</Link><span>/</span><span>{routes.find(r => r.slug === slug)?.label}</span></nav><span className="eyebrow">Verified launch-build route</span><h1>{guide.h1}</h1><p>{guide.description}</p></div><span className="image-credit">Official Steam promotional screenshot</span>
    </section>
    <div className="article-layout section-shell">
      <aside className="article-aside"><span className="aside-line"/><p><b>Evidence status</b><br/>Release route verified across two independent launch-day runs.</p><p><b>Reviewed</b><br/>{REVIEW_DATE}</p><Link href="/walkthrough/">Full route overview →</Link></aside>
      <article>
        {slug === "battery-charge-station-puzzle" && <BatteryChecklist/>}
        {slug === "finale-ending-explained" ? <SpoilerPanel html={guide.html}/> : <div className="guide-copy" dangerouslySetInnerHTML={{ __html: guide.html }}/>} 
        <div className="evidence-note"><b>Evidence boundary</b><p>This guide covers the released launch route. It does not turn incomplete collectible reports, Demo-only details or unverified fixes into confirmed instructions.</p></div>
        <nav className="related" aria-label="Related guides"><span className="eyebrow red">Continue through the well</span><div>{guide.related.map(route => <Link href={`/${route.slug}/`} key={route.slug}>{route.label}<span>→</span></Link>)}</div><Link className="home-return" href="/">← All guides</Link></nav>
      </article>
    </div>
  </main>;
}
