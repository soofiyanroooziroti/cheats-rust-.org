import { PRODUCT_CATALOG, PRODUCT_ITEM_BASE } from '../config/site';
import { defaultLocale, type Locale } from '../i18n/locales';
import { localePath as i18nLocalePath } from '../i18n/routing';
import { normalizeInternalPath } from './internal-path';

export const ROUTES = {
  home: '/',
  blog: '/blog/',
  forum: '/forum/',
  products: PRODUCT_CATALOG,
  faq: '/faq/',
  terms: '/terms/',
  about: '/about/',
  support: '/support/',
  privacy: '/privacy/',
  status: '/status/',
} as const;

export function localizedPath(href: string, locale: Locale): string {
  return i18nLocalePath(normalizeInternalPath(href), locale);
}

const PRODUCT_SLUG_ALIASES: Record<string, string> = {
  'hwid-spoofer': 'spoofer',
};

export function productPath(slug: string, locale: Locale = defaultLocale): string {
  const resolved = PRODUCT_SLUG_ALIASES[slug] ?? slug;
  return localizedPath(`${PRODUCT_ITEM_BASE}${resolved}/`, locale);
}

export function cheatPath(slug: string, locale: Locale = defaultLocale): string {
  return productPath(slug, locale);
}

export function localizedRoutes(locale: Locale = defaultLocale) {
  return {
    home: localizedPath('/', locale),
    blog: localizedPath('/blog/', locale),
    forum: localizedPath('/forum/', locale),
    products: localizedPath(PRODUCT_CATALOG, locale),
    faq: localizedPath('/faq/', locale),
    terms: localizedPath('/terms/', locale),
    about: localizedPath('/about/', locale),
    support: localizedPath('/support/', locale),
    privacy: localizedPath('/privacy/', locale),
    status: localizedPath('/status/', locale),
  } as const;
}

export { normalizeInternalPath, LEGACY_PATH_MAP, withTrailingSlash } from './internal-path';
