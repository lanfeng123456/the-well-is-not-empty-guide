import Script from "next/script";

export function AdBanner() {
  return (
    <aside className="ad-banner" aria-label="Advertisement">
      <Script
        async
        data-cfasync="false"
        src="https://pl31400726.profitableratecpmnetwork.com/675685bbf8f317e5b9b6346d945ac6a9/invoke.js"
        strategy="afterInteractive"
      />
      <div id="container-675685bbf8f317e5b9b6346d945ac6a9"></div>
    </aside>
  );
}
