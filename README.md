# BoredBee

BoredBee is a lightweight, static-first Next.js website for quick games, daily challenges, party prompts, useful tools, and beginner-friendly explainers.

Tagline: **Tiny games, smart tools, quick fixes for bored brains.**

## Tech

- Next.js App Router
- TypeScript
- Tailwind CSS
- Static-first pages with small client components for tools and games
- No authentication, database, or paid APIs
- localStorage for theme, streaks, scores, votes, and recent activity

## Run Locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

Useful checks:

```bash
npm run typecheck
npm run build
```

## Environment Variables

Copy `.env.example` to `.env.local`:

```bash
NEXT_PUBLIC_SITE_URL=https://example.com
NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-XXXXXXXXXXXXXXXX
NEXT_PUBLIC_ADSENSE_ENABLED=false
NEXT_PUBLIC_ADSENSE_DISPLAY_SLOT=
NEXT_PUBLIC_ADSENSE_IN_ARTICLE_SLOT=
NEXT_PUBLIC_ADSENSE_MULTIPLEX_SLOT=
```

Set `NEXT_PUBLIC_SITE_URL` to the production domain before deployment so canonical URLs, sitemap, and schema are correct. Production is configured for `https://boredbee.fun`.

## Ads

Ads are disabled by default. See `docs/ADS_SETUP.md`.

Publisher ID goes in `NEXT_PUBLIC_ADSENSE_CLIENT`.

Ad slot IDs go in environment variables:

- `NEXT_PUBLIC_ADSENSE_DISPLAY_SLOT`
- `NEXT_PUBLIC_ADSENSE_IN_ARTICLE_SLOT`
- `NEXT_PUBLIC_ADSENSE_MULTIPLEX_SLOT`

## Add a Game

1. Add metadata to `data/site.ts` in the `games` array.
2. Create a client component in `components/game/`.
3. Add a route under `app/play/your-game/page.tsx`.
4. Add FAQs to `data/faqs.ts` if the page needs them.
5. Add related links from existing pages where useful.

## Add a Tool

1. Add metadata to the `tools` array in `data/site.ts`.
2. Build the interactive tool as a small client component.
3. Create `app/tools/your-tool/page.tsx`.
4. Include intro copy, how it works, tips, FAQs, related links, and ad slots via `ToolGamePage`.

## Add an Explainer

1. Add an item to `explainItems` in `data/site.ts`.
2. Add the article to `data/articles.ts`.
3. The dynamic route `app/explain/[slug]/page.tsx` will statically generate it.

## Deploy to Vercel

1. Push the repo to GitHub.
2. Import the project in Vercel.
3. Add environment variables.
4. Deploy.

The app uses standard Next.js output and is Vercel-ready.

## Deploy to Netlify

The repo includes `netlify.toml` with:

```toml
[build]
command = "npm run build"
publish = ".next"
```

Netlify detects Next.js automatically and uses its Next runtime.
