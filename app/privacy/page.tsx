import LegalPage, { legalMetadata } from "@/components/LegalPage";

export const metadata = legalMetadata("Privacy Policy", "How THE WELL IS NOT EMPTY Guide handles visitor data.", "/privacy/");

export default function PrivacyPage() { return <LegalPage title="Privacy Policy" intro="This guide does not require an account and does not collect personal details through forms."><h2>Site data</h2><p>The interactive signal checklist runs in your browser and is not connected to an account or Steam profile.</p><h2>Hosting and outbound services</h2><p>The hosting provider may process standard request logs needed to serve and protect the site. Links to Steam leave this site and are governed by Steam’s privacy terms.</p><h2>Changes</h2><p>If analytics, accounts or new data collection are added later, this page must be updated before those features are enabled.</p></LegalPage>; }
