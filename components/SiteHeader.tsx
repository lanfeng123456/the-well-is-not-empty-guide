"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { routes, STEAM_URL } from "@/lib/config";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <div className="nav-shell">
      <Link className="brand" href="/" onClick={() => setOpen(false)}><Image className="brand-icon" src="/icon-512.png" width={36} height={36} alt="" priority/><span>The Well<br/><b>Is Not Empty</b></span></Link>
      <button className="menu-button" type="button" aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(!open)}>Menu</button>
      <nav id="main-nav" className={open ? "nav-links open" : "nav-links"} aria-label="Main navigation">
        {routes.filter((_, i) => [0, 1, 2, 4, 8].includes(i)).map((route) => <Link key={route.slug} href={`/${route.slug}/`} onClick={() => setOpen(false)}>{route.label}</Link>)}
        <a className="steam-link" href={STEAM_URL} target="_blank" rel="noopener noreferrer">Steam ↗</a>
      </nav>
    </div>
  </header>;
}
