import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { canonical, homeGuide, routes, REVIEW_DATE, SITE_NAME, STEAM_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: homeGuide.title,
  description: homeGuide.description,
  keywords: ["THE WELL IS NOT EMPTY guide", "walkthrough", "achievements"],
  alternates: canonical("/") ? { canonical: canonical("/") } : undefined,
  openGraph: { title: homeGuide.title, description: homeGuide.description, url: canonical("/"), type: "website", siteName: SITE_NAME, images: canonical("/") ? [{ url: "/official-media/screenshot-01.jpg", width: 1920, height: 1080, alt: "THE WELL IS NOT EMPTY official Steam promotional screenshot" }] : undefined },
  twitter: { card: "summary_large_image", title: homeGuide.title, description: homeGuide.description, images: canonical("/") ? ["/official-media/screenshot-01.jpg"] : undefined },
};

const heroStats = [
  { label: "Released", value: "Sep 7, 2026" },
  { label: "Steam achievements", value: "8" },
  { label: "Verified build", value: "25157827" },
];

const startCards = [
  { slug: "walkthrough", type: "Beginner route", title: "Full Walkthrough", description: "Follow the verified village-to-finale route with spoilers clearly separated." },
  { slug: "village-before-the-well", type: "Missable", title: "Before Entering the Well", description: "Clear every opening conversation before the Social Network cutoff." },
  { slug: "prison-walkthrough", type: "Survival", title: "Prison & Generators", description: "Use the Rusty Spoon, prepare each light route and handle changing QTEs." },
  { slug: "battery-charge-station-puzzle", type: "Puzzle", title: "Battery Charge Station", description: "Read seven generated signals without copying a fixed code from another run." },
];

const aboutStats = [
  { label: "Developer", value: "tweakEra" },
  { label: "Platform", value: "Windows" },
  { label: "Genres", value: "Action · Adventure" },
  { label: "Controller", value: "Full controller support" },
];

const faqs = [
  { question: "What should I do before entering the Well?", answer: "Finish every available village conversation before descending. The Social Network achievement is tied to this opening section and becomes missable once you leave it behind." },
  { question: "Is there a fixed code for the Battery Charge Station?", answer: "No. The station presents seven generated signals, so a code copied from another run may fail. Read and enter the sequence shown in your own game, then use the charged capacitor to continue." },
  { question: "How do the temporary generators work?", answer: "Treat each generator as a short light window. Clear nearby rubble, learn the route and prepare the needed item before activating it so you spend less of that window searching in the dark." },
  { question: "Are the quick-time events always the same?", answer: "The checked launch route shows changing prompts, so memorizing one recorded sequence is unreliable. Watch the prompt shown in your current attempt and respond to that input." },
  { question: "How many Steam achievements are in the game?", answer: "The release build has eight Steam achievements. Complete the village conversations before the Well and use the achievement guide for the remaining route and ending requirements." },
];

export default function Home() {
  return <main id="main">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": [
      { "@type": "WebSite", name: SITE_NAME, url: canonical("/"), description: homeGuide.description },
      { "@type": "Organization", name: SITE_NAME, url: canonical("/"), description: "Independent fan-made guide; not affiliated with the game creators." },
      { "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) }
    ] }).replace(/</g, "\\u003c") }}/>
    <section className="hero">
      <Image src="/official-media/screenshot-01.jpg" alt="Dark underground scene from THE WELL IS NOT EMPTY" fill priority sizes="100vw" className="hero-image"/>
      <div className="hero-shade"/>
      <div className="hero-content">
        <span className="eyebrow">Independent launch-build guide</span>
        <h1>THE WELL<br/>IS NOT <em>EMPTY</em></h1>
        <p>Descend through a dry well into a buried prison, survive timed darkness and piece together a route through an abandoned underground facility.</p>
        <dl className="hero-stats">{heroStats.map((stat) => <div key={stat.label}><dt>{stat.label}</dt><dd>{stat.value}</dd></div>)}</dl>
        <div className="hero-actions"><Link className="button red-button" href="/walkthrough/">Enter the walkthrough</Link><Link className="button dark-button" href="/village-before-the-well/">Start spoiler-light</Link><Link className="button dark-button" href="/achievements/">Track achievements</Link></div>
        <a className="video-label" href={STEAM_URL} target="_blank" rel="noopener noreferrer"><span>▶</span> Official video · Launch Trailer</a>
        <div className="verified"><span>✓</span><p><b>Verified launch route</b><br/>Build 25157827 · Reviewed {REVIEW_DATE}</p></div>
      </div>
      <p className="image-credit">Official Steam promotional screenshot</p>
    </section>

    <section className="start-section section-shell" aria-labelledby="start-title"><div className="section-heading"><span className="eyebrow red">Start here</span><h2 id="start-title">The first descent, mapped.</h2><p>Choose the kind of obstacle in front of you: route, missable, survival mechanic or puzzle.</p></div><div className="start-grid">{startCards.map((card, index) => <Link href={`/${card.slug}/`} key={card.slug}><span>{String(index + 1).padStart(2, "0")}</span><small>{card.type}</small><h3>{card.title}</h3><p>{card.description}</p><b>Open guide →</b></Link>)}</div></section>

    <section className="about-game section-shell" aria-labelledby="about-title"><div><span className="eyebrow red">About the game</span><h2 id="about-title">What is THE WELL IS NOT EMPTY?</h2></div><div className="about-copy"><p>THE WELL IS NOT EMPTY is a first-person horror adventure about descending into a dry village well and discovering an abandoned prison and facility below. Progress comes from breaking rubble, restoring temporary light, finding keys and reading the environment.</p><p>The route mixes exploration, changing QTEs, balance sections and item-based puzzles. Its launch build continues beyond the original underground prison into Storage, Surface, the Nursery and a story-driven finale.</p><dl className="fact-grid">{aboutStats.map((stat) => <div key={stat.label}><dt>{stat.label}</dt><dd>{stat.value}</dd></div>)}</dl></div></section>

    <section className="all-guides section-shell"><div className="section-heading"><span className="eyebrow red">10 focused routes</span><h2>Follow the evidence.</h2></div><div className="guide-index">{routes.map((route, index) => <Link href={`/${route.slug}/`} key={route.slug}><span>{String(index + 1).padStart(2, "0")}</span>{route.label}<b>→</b></Link>)}</div></section>

    <section className="faq-section section-shell" aria-labelledby="faq-title"><div className="section-heading"><span className="eyebrow red">Quick answers</span><h2 id="faq-title">THE WELL IS NOT EMPTY FAQ</h2><p>Verified answers for the mechanics and missables that stop the first descent.</p></div><div className="faq-list">{faqs.map((faq, index) => <details key={faq.question}><summary><span>{String(index + 1).padStart(2, "0")}</span>{faq.question}</summary><p>{faq.answer}</p></details>)}</div></section>

    <section className="final-cta section-shell"><span className="eyebrow">The route is waiting</span><h2>Go below with a plan.</h2><p>Use the verified walkthrough for the full route, or check the official Steam page before you descend.</p><div><Link className="button red-button" href="/walkthrough/">Open the walkthrough</Link><a className="button dark-button" href={STEAM_URL} target="_blank" rel="noopener noreferrer">View on Steam ↗</a></div></section>
  </main>;
}
