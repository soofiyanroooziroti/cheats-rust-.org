/** Static path redirects (301). Keys are pathname without query/hash. */
export const PATH_REDIRECTS = new Map([
  ['/blog', '/blog/'],
  ['/about', '/about/'],
  ['/contact', '/support/'],
  ['/contact/', '/support/'],
  ['/support', '/support/'],
  ['/privacy', '/privacy/'],
  ['/terms', '/terms/'],
  ['/faq', '/faq/'],
  ['/cheats', '/products/'],
  ['/cheats/', '/products/'],
  ['/products/rust-cheats', '/products/'],
  ['/products/rust-cheats/', '/products/'],
  ['/products/rust-cheats/rust-cheat', '/product/rust-cheat/'],
  ['/products/rust-cheats/rust-cheat/', '/product/rust-cheat/'],
  ['/products/rust-cheats/spoofer', '/product/spoofer/'],
  ['/products/rust-cheats/spoofer/', '/product/spoofer/'],
  ['/products/rust-cheats/hwid-spoofer', '/product/spoofer/'],
  ['/products/rust-cheats/hwid-spoofer/', '/product/spoofer/'],
  ['/products/rust-cheats/ugc', '/product/ugc/'],
  ['/products/rust-cheats/ugc/', '/product/ugc/'],
  ['/products/rust-cheats/utilities', '/products/'],
  ['/products/rust-cheats/utilities/', '/products/'],
]);

/** Paths that should not receive a forced trailing slash. */
export const TRAILING_SLASH_SKIP = /\.[a-z0-9]+$/i;

export function resolvePathRedirect(pathname) {
  const direct = PATH_REDIRECTS.get(pathname);
  if (direct) return direct;

  if (pathname !== '/' && !pathname.endsWith('/') && !TRAILING_SLASH_SKIP.test(pathname)) {
    return `${pathname}/`;
  }

  return null;
}
