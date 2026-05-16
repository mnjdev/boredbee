import { AdSlot } from "./AdSlot";

export function DisplayAd({ className = "" }: { className?: string }) {
  return <AdSlot slot={process.env.NEXT_PUBLIC_ADSENSE_DISPLAY_SLOT} format="auto" className={className} label="Advertisement" />;
}
