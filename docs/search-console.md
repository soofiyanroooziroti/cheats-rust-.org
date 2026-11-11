# Search Console workflow (cheaturust.org)

You verify the domain at your DNS provider—no HTML meta tags in the repo.

## Setup (once)

1. Open [Google Search Console](https://search.google.com/search-console) and add the **domain** property for `cheaturust.org` if it is not already there.
2. Under **Sitemaps**, submit: `https://cheaturust.org/sitemap.xml`
3. Repeat in [Bing Webmaster Tools](https://www.bing.com/webmasters) if you use Bing.

## Monthly tune (15 minutes)

1. Search Console → **Performance** → **Search results**.
2. Sort by **Impressions** (last 28 days).
3. For each query that already maps to a page on your site, open the matching path in [`src/config/pageSeo.ts`](../src/config/pageSeo.ts).
4. Adjust `title` and `description` so the primary query appears naturally in the title (keep the title between 50 and 60 characters where possible). The homepage title stays **Rust Cheats**.
5. Deploy. Allow 1–2 weeks before judging click-through changes.

## Path cheat sheet

| Common query intent | Edit path in `pageSeo.ts` |
| ------------------- | ------------------------- |
| rust cheats (broad) | `/` |
| plans, spoofer, UGC | `/products/` |
| aim, ESP, loot, modules | blog posts (titles set per article) |
| hwid / spoofer | `/product/spoofer/` |
| purchase / refund | `/terms/`, `/support/` |

Product and blog article pages still use their own titles from content; add entries to `PAGE_SEO` only when you want a fixed override for a specific pathname.
