import LegalPage, { legalMetadata } from "@/components/LegalPage";

export const metadata = legalMetadata("Fan Site Disclaimer", "Independent fan-site and trademark disclaimer for THE WELL IS NOT EMPTY Guide.", "/disclaimer/");

export default function DisclaimerPage() { return <LegalPage title="Fan Site Disclaimer" intro="THE WELL IS NOT EMPTY Guide is an independent fan-made reference site."><h2>No affiliation</h2><p>This site is not affiliated with, endorsed by or operated by tweakEra or Valve.</p><h2>Names and trademarks</h2><p>THE WELL IS NOT EMPTY, Steam and related names, artwork and trademarks belong to their respective owners. Official promotional images are identified where used.</p><h2>Editorial boundary</h2><p>The site publishes verified launch routes and clearly withholds incomplete collectible, troubleshooting and ending claims.</p></LegalPage>; }
