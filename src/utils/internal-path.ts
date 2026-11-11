import { PRODUCT_CATALOG } from '../config/site';

export function withTrailingSlash(path: string): string {
  if (!path || path.startsWith('http') || path.startsWith('#') || path.startsWith('mailto:')) {
    return path;
  }
  const [pathname, hash = ''] = path.split('#');
  const normalized = pathname === '/' || pathname.endsWith('/') ? pathname : `${pathname}/`;
  return hash ? `${normalized}#${hash}` : normalized;
}

export const LEGACY_PATH_MAP: Record<string, string> = {
  '/cheats': PRODUCT_CATALOG,
  '/cheats/': PRODUCT_CATALOG,
  '/cheats/lite': PRODUCT_CATALOG,
  '/cheats/lite/': PRODUCT_CATALOG,
  '/cheats/pro': PRODUCT_CATALOG,
  '/cheats/pro/': PRODUCT_CATALOG,
  '/cheats/elite': '/product/rust-cheat/',
  '/cheats/elite/': '/product/rust-cheat/',
  '/cheats/compare': '/blog/cheap-rust-cheats/',
  '/cheats/compare/': '/blog/cheap-rust-cheats/',
  '/contact': '/support/',
  '/contact/': '/support/',
};

export function normalizeInternalPath(href: string): string {
  if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('/go/')) {
    return href;
  }

  const hashIndex = href.indexOf('#');
  const rawPath = hashIndex >= 0 ? href.slice(0, hashIndex) : href;
  const hash = hashIndex >= 0 ? href.slice(hashIndex) : '';

  let pathname = rawPath.startsWith('/') ? rawPath : `/${rawPath}`;
  pathname = LEGACY_PATH_MAP[pathname] ?? pathname;

  return withTrailingSlash(pathname) + hash;
}
