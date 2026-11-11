import type { Locale } from '../i18n/locales';
import type { ProductFeatureGroup, ProductOverview, ProductSlide, SystemRequirement } from './product-types';
import type { CatalogKind, ProductLocalePack } from './product-locale-types';

export type { CatalogKind, ProductLocalePack } from './product-locale-types';

export function acquisitionCopy(_locale: Locale, _productName: string) {
  return null;
}

export function localizeBundle<T extends {
  images: ProductSlide[];
  overview: ProductOverview;
  body: { type: 'h2' | 'p'; text: string }[];
  goodToKnow: string;
  limitations: string;
  systemRequirements: SystemRequirement[];
  featureGroups?: ProductFeatureGroup[];
  fullFeatures: string[];
}>(_locale: Locale, _kind: CatalogKind, source: T): T {
  return source;
}
