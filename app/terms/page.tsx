import LegalPage, { legalMetadata } from "@/components/LegalPage";

export const metadata = legalMetadata("Terms of Use", "Terms for using the independent THE WELL IS NOT EMPTY Guide.", "/terms/");

export default function TermsPage() { return <LegalPage title="Terms of Use" intro="Use this site as an independent reference for game information and walkthrough help."><h2>Guide accuracy</h2><p>Routes and facts reflect the evidence and game build identified on each page. Updates to the game may change controls, objectives or results.</p><h2>Permitted use</h2><p>You may read and link to these guides for personal use. Republishing substantial portions or presenting this work as official game documentation is not permitted.</p><h2>External links</h2><p>Steam and other external services control their own content, availability and terms. This site is not responsible for changes on those services.</p></LegalPage>; }
