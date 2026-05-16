import Script from "next/script";

export function adsEnabled() {
  return process.env.NEXT_PUBLIC_ADSENSE_ENABLED === "true" && Boolean(process.env.NEXT_PUBLIC_ADSENSE_CLIENT);
}

export function AdSenseScript() {
  if (!adsEnabled()) return null;
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;
  return (
    <Script
      id="adsense-script"
      strategy="afterInteractive"
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${client}`}
      crossOrigin="anonymous"
    />
  );
}
