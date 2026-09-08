import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { DM_Sans, Libre_Caslon_Display } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { REVIEW_DATE, SITE_NAME, SITE_URL, STEAM_URL } from "@/lib/config";
import "./globals.css";
import "./sections.css";

const sans = DM_Sans({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const serif = Libre_Caslon_Display({ subsets: ["latin"], weight: "400", variable: "--font-serif", display: "swap" });

export const metadata: Metadata = {
  title: { default: "THE WELL IS NOT EMPTY Guide & Walkthrough", template: "%s | The Well Guide" },
  description: "Independent launch-build guides for THE WELL IS NOT EMPTY, with verified walkthrough steps, achievements, controls and evidence limits.",
  keywords: ["THE WELL IS NOT EMPTY guide", "walkthrough", "achievements"],
  robots: SITE_URL ? { index: true, follow: true } : { index: false, follow: false },
  ...(SITE_URL ? { metadataBase: new URL(SITE_URL) } : {}),
  icons: { icon: [{ url: "/favicon.ico" }, { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }], apple: "/apple-touch-icon.png" },
  openGraph: { type: "website", siteName: SITE_NAME, ...(SITE_URL ? { images: [{ url: "/official-media/screenshot-01.jpg", width: 1920, height: 1080, alt: "THE WELL IS NOT EMPTY official Steam promotional screenshot" }] } : {}) },
  twitter: { card: "summary_large_image", ...(SITE_URL ? { images: ["/official-media/screenshot-01.jpg"] } : {}) },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${sans.variable} ${serif.variable}`}>
    <a className="skip-link" href="#main">Skip to guide</a>
    <SiteHeader />
    {children}
    <footer>
      <div><Link className="brand footer-brand" href="/"><Image className="brand-icon" src="/icon-512.png" width={36} height={36} alt=""/><span>The Well <b>Is Not Empty</b></span></Link><p>Independent, evidence-aware guides for the released PC game.</p></div>
      <div><p><b>Launch-build review</b><br/>Public Build 25157827<br/>Reviewed {REVIEW_DATE}</p></div>
      <div><p><b>Official &amp; affiliation</b><br/><a href={STEAM_URL} target="_blank" rel="noopener noreferrer">Steam page ↗</a> · <a href="https://steamcommunity.com/app/4505150" target="_blank" rel="noopener noreferrer">Community ↗</a><br/>Official promotional images © their respective developer/publisher. This fan guide is not affiliated with the game creators.</p><nav className="footer-links" aria-label="Legal"><Link href="/privacy/">Privacy</Link><Link href="/terms/">Terms</Link><Link href="/disclaimer/">Disclaimer</Link></nav></div>
    </footer>
  </body></html>;
}
