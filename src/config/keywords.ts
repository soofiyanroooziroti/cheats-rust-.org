/** Primary keyword per core URL (null = no dedicated keyword). Value may be an array when multiple phrases belong to one page. */
export const PAGE_KEYWORDS: Record<string, string | string[] | null> = {
  '/': 'rust cheats',
  '/products/': null,
  '/product/rust-cheat/': 'rust cheat',
  '/product/spoofer/': ['rust hwid spoofer', 'spoofer rust'],
  '/product/ugc/': 'rust unban tool',
  '/blog/': null,
  '/forum/': null,
  '/faq/': null,
  '/support/': null,
  '/about/': null,
  '/privacy/': null,
  '/terms/': null,
  '/status/': null,
};

/** noindex routes — not in the indexable keyword map; overlap with home primaries is fine. */
export const NOINDEX_CANNIBALISM_SKIP = new Set(['/status/', '/404/']);

export const PRODUCT_H1: Record<string, string> = {
  'rust-cheat': 'Rust cheat for Windows PC',
  spoofer: 'Rust HWID spoofer for Windows PC',
  ugc: 'Rust unban tool for Windows PC',
};

export const PRODUCT_PAGE_KEYWORDS: Record<string, string> = {
  spoofer: 'rust hwid spoofer',
  ugc: 'rust unban tool',
};

export function primaryKeywords(): string[] {
  const out: string[] = [];
  for (const value of Object.values(PAGE_KEYWORDS)) {
    if (!value) continue;
    if (Array.isArray(value)) out.push(...value);
    else out.push(value);
  }
  return out;
}

export function keywordsForPath(pathname: string): string[] {
  const entry = PAGE_KEYWORDS[pathname];
  if (!entry) return [];
  return Array.isArray(entry) ? entry : [entry];
}
