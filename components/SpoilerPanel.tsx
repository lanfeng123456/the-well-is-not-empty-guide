"use client";

import { useState } from "react";

export function SpoilerPanel({ html }: { html: string }) {
  const [revealed, setRevealed] = useState(false);
  return <div className="spoiler-panel">
    <div><span className="eyebrow red">Full spoilers</span><h2>The observed ending</h2><p>The research confirms one broad ending path across two launch-day runs. Reveal only when you are ready.</p></div>
    <button className="button red-button" onClick={() => setRevealed(!revealed)} aria-expanded={revealed}>{revealed ? "Hide explanation" : "Reveal ending"}</button>
    {revealed && <div className="guide-copy spoiler-copy" dangerouslySetInnerHTML={{ __html: html }} />}
  </div>;
}
