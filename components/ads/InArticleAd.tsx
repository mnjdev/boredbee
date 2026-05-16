import { AdSlot } from "./AdSlot";

export function InArticleAd({ className = "" }: { className?: string }) {
  return <AdSlot slot={process.env.NEXT_PUBLIC_ADSENSE_IN_ARTICLE_SLOT} format="fluid" className={className} label="Advertisement" />;
}
