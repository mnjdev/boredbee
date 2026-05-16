import { AdSlot } from "./AdSlot";

export function MultiplexAd({ className = "" }: { className?: string }) {
  return <AdSlot slot={process.env.NEXT_PUBLIC_ADSENSE_MULTIPLEX_SLOT} format="autorelaxed" className={className} label="Recommended" />;
}
