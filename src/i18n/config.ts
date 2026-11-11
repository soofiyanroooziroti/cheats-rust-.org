export const defaultLocale = 'en' as const;

export interface LocaleConfigEntry {
  code: string;
  urlPrefix: string;
  nativeName: string;
  shortLabel: string;
  hreflang: string;
  htmlLang: string;
  dir: 'ltr' | 'rtl';
  ogLocale: string;
}

/** Add languages here; routing, Astro i18n, and scripts read this list. */
export const localeConfig: LocaleConfigEntry[] = [
  {
    code: 'en',
    urlPrefix: '',
    nativeName: 'English',
    shortLabel: 'EN',
    hreflang: 'en',
    htmlLang: 'en',
    dir: 'ltr',
    ogLocale: 'en_US',
  },
];
