import Link from "next/link";
export default function NotFound() { return <main id="main" className="not-found"><span className="eyebrow red">404 · route collapsed</span><h1>This tunnel goes nowhere.</h1><p>The requested guide does not exist or is being withheld until its evidence is complete.</p><Link className="button red-button" href="/">Return to the guide hub</Link></main>; }
