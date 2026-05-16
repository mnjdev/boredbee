# BoredBee AdSense Setup

BoredBee ships with ads disabled and safe placeholder structure in place.

## Apply for AdSense

1. Publish the site with original content, navigation, privacy page, terms page, and contact page.
2. Apply at Google AdSense with your real domain.
3. Wait for approval before enabling live ad rendering.

## Publisher ID

The publisher ID looks like `ca-pub-1234567890123456`.

Add it to your deployment environment:

```bash
NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-1234567890123456
NEXT_PUBLIC_ADSENSE_ENABLED=true
NEXT_PUBLIC_ADSENSE_DISPLAY_SLOT=1234567890
NEXT_PUBLIC_ADSENSE_IN_ARTICLE_SLOT=2345678901
NEXT_PUBLIC_ADSENSE_MULTIPLEX_SLOT=3456789012
```

For local development, copy `.env.example` to `.env.local` and edit values there.

## Ad slot IDs

Publisher ID and ad slot ID are different:

- Publisher ID identifies your AdSense account.
- Slot ID identifies a specific ad unit created inside AdSense.

After creating ad units in AdSense, add their slot IDs to your environment variables:

- `NEXT_PUBLIC_ADSENSE_DISPLAY_SLOT`
- `NEXT_PUBLIC_ADSENSE_IN_ARTICLE_SLOT`
- `NEXT_PUBLIC_ADSENSE_MULTIPLEX_SLOT`

The components read these values dynamically. Do not hardcode fake production slot IDs.

## How ads load

`components/ads/AdSenseScript.tsx` loads the AdSense script once from the root layout only when `NEXT_PUBLIC_ADSENSE_ENABLED=true`.

`components/ads/AdSlot.tsx` renders:

- development placeholders when ads are disabled during `next dev`
- nothing in production when ads are disabled
- AdSense-compatible `<ins class="adsbygoogle">` containers when enabled

## Safe placement reminders

- Keep ads clearly labelled.
- Do not place ads next to game action buttons.
- Do not use pop-unders, forced redirects, fake downloads, or deceptive buttons.
- Leave enough spacing around interactive controls.
- Keep pages useful even when ads are disabled.
