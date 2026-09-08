import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { SITE_URL } from "@/lib/config";

export function legalMetadata(title: string, description: string, path: string): Metadata {
  return { title, description, robots: { index: false, follow: true }, alternates: SITE_URL ? { canonical: `${SITE_URL}${path}` } : undefined };
}

export default function LegalPage({ title, intro, children }: { title: string; intro: string; children: ReactNode }) {
  return <main id="main" className="legal-shell"><span className="eyebrow red">Site information</span><h1>{title}</h1><p className="legal-intro">{intro}</p><div className="legal-copy">{children}</div><Link className="button red-button" href="/">Return to the guide</Link></main>;
}
