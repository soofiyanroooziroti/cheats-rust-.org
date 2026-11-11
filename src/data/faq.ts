import type { IconName } from '../components/icons/types';
import { normalizeInternalPath, productPath, ROUTES, localizedPath, localizedRoutes, cheatPath } from '../utils/path-core';

export type FaqTopic =
  | 'all'
  | 'plans'
  | 'esp'
  | 'scripts'
  | 'safety'
  | 'products'
  | 'blog'
  | 'setup';

export interface SiteFaqItem {
  id: string;
  topic: FaqTopic;
  icon: IconName;
  q: string;
  a: string;
  aHtml?: string;
  scopes?: string[];
}

function link(text: string, href: string): string {
  return `<a href="${normalizeInternalPath(href)}">${text}</a>`;
}

const cheats = link('Rust Cheats', productPath('rust-cheat'));
const productsHub = link('products page', ROUTES.products);
const hwid = link('HWID Spoofer', productPath('spoofer'));
const ugc = link('UGC Account recovery', productPath('ugc'));

export const siteFaqs: SiteFaqItem[] = [
  {
    id: 'status',
    topic: 'setup',
    icon: 'faqStatus',
    q: 'Where do I check if the loader is current?',
    a: 'Open the status page. Green means it is updated and can be used. Red means it is not updated and should not be used. Blue means developers are still updating it.',
  },
  {
    id: 'after-buy',
    topic: 'setup',
    icon: 'faqAfterBuy',
    q: 'What happens after I buy?',
    a: 'Checkout opens the portal with the loader for the product you paid for. Save a config after you tune it. HVCI, core isolation, TPM, and secure boot stay on.',
  },
  {
    id: 'ban-risk',
    topic: 'safety',
    icon: 'faqBanRisk',
    q: 'Can I get banned?',
    a: 'Yes. EasyAnti-Cheat can act on the account. Nothing on this site is a guarantee that a session stays clean.',
  },
  {
    id: 'hwid-ban-risk',
    topic: 'safety',
    icon: 'faqBanRisk',
    q: 'What is an HWID flag, and does the cheat key fix it?',
    a: `A hardware flag follows the PC. New accounts can fail on that machine and work on another. That is the ${hwid}, sold separately. It does not undo an account-only restriction, and lifetime on ${cheats} does not include it.`,
  },
  {
    id: 'platforms',
    topic: 'setup',
    icon: 'faqPlatforms',
    q: 'Which PCs are supported?',
    a: 'Windows 10 or 11 on Intel or AMD, with HVCI, core isolation, TPM, and secure boot on. macOS and Linux are not supported.',
  },
  {
    id: 'license-move',
    topic: 'products',
    icon: 'faqLicenseMove',
    q: 'Can I move a key to another PC?',
    a: 'Open support with the order email. A machine that fails new accounts is an HWID Spoofer purchase, not a free move of the cheat key.',
  },
  {
    id: 'products-page',
    topic: 'products',
    icon: 'faqProductsPage',
    q: 'What is for sale?',
    a: `${cheats} and ${ugc} are $35 for 30 days or $150 lifetime. ${hwid} is $50 for 30 days or $150 lifetime. All three are listed on the ${productsHub} as separate checkouts.`,
  },
  {
    id: 'plans-same-price',
    topic: 'plans',
    icon: 'faqComparePlans',
    q: 'Does $150 lifetime include the spoofer?',
    a: 'No. Lifetime on Rust Cheats is that product only. The HWID spoofer and UGC recovery are separate keys. The spoofer is $50 monthly or $150 lifetime; the cheat and UGC are $35 monthly or $150 lifetime. A monthly start does not promise a credit toward lifetime.',
    scopes: ['rust-cheat', 'hwid-spoofer', 'ugc'],
  },
  {
    id: 'aim-vs-camera',
    topic: 'esp',
    icon: 'faqWhatIsEsp',
    q: 'Is camera FOV the same slider as aim FOV?',
    a: 'No. Camera FOV changes how wide the view is. Aim FOV is only the cone the assist searches. Set the camera first, then retune aim FOV.',
    scopes: ['rust-cheat'],
  },
  {
    id: 'esp-clutter',
    topic: 'esp',
    icon: 'faqWhatIsEsp',
    q: 'Why does player ESP cover the fight?',
    a: 'Start with box or skeleton, health, and distance. Add gear levels only if you read them. A max distance drops far operators. Chams is a separate color pass, not a replacement for those labels.',
    scopes: ['rust-cheat'],
  },
  {
    id: 'not-dma',
    topic: 'scripts',
    icon: 'faqExternalLoader',
    q: 'Is this a DMA card?',
    a: 'No. Rust Cheats is a Windows loader from checkout. A DMA device is a different product and is not what this key delivers. Do not run a file that arrived from a search result.',
    scopes: ['rust-cheat'],
  },
  {
    id: 'ugc-scope',
    topic: 'products',
    icon: 'faqProductsPage',
    q: 'What does UGC Account recovery do?',
    a: `${ugc} is an appeal workspace: templates, evidence lists, and follow-up. It is not a guaranteed unban, and it is not the HWID spoofer.`,
    scopes: ['ugc'],
  },
  {
    id: 'spoofer-scope',
    topic: 'products',
    icon: 'faqProductsPage',
    q: 'When is the HWID spoofer the right buy?',
    a: `Use ${hwid} when a new account fails on one PC and works on another. It does not fix an account-only restriction. Buy ${ugc} for that case instead.`,
    scopes: ['hwid-spoofer'],
  },
  {
    id: 'stickiness-vs-smooth',
    topic: 'scripts',
    icon: 'faqExternalLoader',
    q: 'Is stickiness the same control as smooth?',
    a: 'No. Smooth slows how fast the crosshair closes the gap. Stickiness holds the assist on the current operator a little longer when they strafe or leave the edge of the cone. Speed is a third slider: how fast the assist moves once a target is already inside that cone. Change one, then save the config.',
    scopes: ['rust-cheat'],
  },
  {
    id: 'visible-check',
    topic: 'scripts',
    icon: 'faqWhatIsEsp',
    q: 'Does visible check stop labels through cover?',
    a: 'No. Visible check only gates aim assist: it engages when the operator is in line of sight, not through solid cover. Skeleton, box, and chams are separate toggles and can still draw when that check is on.',
    scopes: ['rust-cheat'],
  },
  {
    id: 'ignore-knocked',
    topic: 'esp',
    icon: 'faqWhatIsEsp',
    q: 'Why does the assist stay on a downed operator?',
    a: 'Turn on Ignore Knocked so aim assist skips operators who are already down. Show Knocked is only a visual switch that keeps those bodies on the overlay. One does not turn the other off.',
    scopes: ['rust-cheat'],
  },
  {
    id: 'bone-and-filter',
    topic: 'scripts',
    icon: 'faqExternalLoader',
    q: 'What does bone selection do if the aim filter is already on?',
    a: 'The aimbot filter limits which models the assist may pick. Bone selection then chooses Closest, Head, Neck, or Chest as the preferred hitbox on those models. Set the filter first, then the bone.',
    scopes: ['rust-cheat'],
  },
  {
    id: 'controller-binds',
    topic: 'setup',
    icon: 'faqPlatforms',
    q: 'Can I put aim assist on a controller without a remap tool?',
    a: 'Yes. This build has two aim keys, and one of them can be a native controller bind. You do not install a separate remap app for that second key.',
    scopes: ['rust-cheat'],
  },
  {
    id: 'squad-read',
    topic: 'esp',
    icon: 'faqWhatIsEsp',
    q: 'How do I tell squads apart without more boxes?',
    a: 'Use team number, hero name, and view direction. A head circle marks the head hitbox. Snaplines run from your view to a player. Leave helmet, armor, and chest-bag levels off until you actually read them.',
    scopes: ['rust-cheat'],
  },
  {
    id: 'loot-price-floor',
    topic: 'esp',
    icon: 'faqWhatIsEsp',
    q: 'Loot names still cover every container. What do I cut first?',
    a: 'Set a minimum price so cheap items drop off. Keep player corpses, AI corpses, and computers as their own markers instead of turning the whole loot group off. Color, size, transparency, and brightness sit on the player visual group, not on this price floor.',
    scopes: ['rust-cheat'],
  },
  {
    id: 'scale-and-crosshair',
    topic: 'scripts',
    icon: 'faqExternalLoader',
    q: 'Do arm scale and weapon scale move the same model?',
    a: 'No. Arms scale offset moves the arms on X, Y, and Z. Weapon scale offset moves the gun on its own axes. Enable Crosshair only draws a fixed center mark. Third person is a separate hotkey and does not change either scale.',
    scopes: ['rust-cheat'],
  },
  {
    id: 'combat-mode',
    topic: 'scripts',
    icon: 'faqExternalLoader',
    q: 'Does combat mode turn aim assist off?',
    a: 'No. Combat mode hides the markers you pick: player, AI, item, dead container, or computer. Aim assist, camera width, and chams stay on until you toggle those groups yourself.',
    scopes: ['rust-cheat'],
  },
  {
    id: 'encryption-bypass',
    topic: 'setup',
    icon: 'faqStatus',
    q: 'What is the encryption bypass toggle?',
    a: 'It is a Misc menu option in this build. It is not a second product and it is not a hardware card. Leave it off unless the current note on cheaturust.org says to use it for this client.',
    scopes: ['rust-cheat'],
  },
];

export function getLandingFaqs(): SiteFaqItem[] {
  return siteFaqs.filter((f) =>
    ['status', 'after-buy', 'ban-risk', 'hwid-ban-risk', 'platforms', 'license-move', 'products-page'].includes(f.id),
  );
}

export function getAllFaqs(): SiteFaqItem[] {
  return siteFaqs.filter((f) => f.topic !== 'all');
}

export const SITE_FAQ_SECTION_COPY = {
  eyebrow: 'All topics',
  title: 'Browse by category',
  subtitle: 'Plans, visuals, the loader, the spoofer, UGC, and setup.',
} as const;

export const SITE_FAQ_FILTER_TOPICS: FaqTopic[] = [
  'all',
  'plans',
  'esp',
  'scripts',
  'safety',
  'products',
  'blog',
  'setup',
];

export const CONTEXTUAL_FAQ_SECTION_COPY = {
  eyebrow: 'FAQ',
  title: 'Questions about this page',
  subtitle: 'Answers tied to what you are reading—visit the FAQ page for every topic.',
} as const;

export function faqFilterTopicsForItems(items: SiteFaqItem[]): FaqTopic[] {
  const present = new Set(items.map((item) => item.topic));
  const topics: FaqTopic[] = ['all'];
  for (const topic of SITE_FAQ_FILTER_TOPICS) {
    if (topic !== 'all' && present.has(topic)) topics.push(topic);
  }
  return topics;
}

export function getProductFaqs(slug: string, _kind: 'tier' | 'utility'): SiteFaqItem[] {
  const general = siteFaqs.filter((f) => !f.scopes);
  const scoped = siteFaqs.filter((f) => f.scopes?.includes(slug));
  const combined = [...scoped, ...general];
  const seen = new Set<string>();
  return combined.filter((item) => {
    if (seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  });
}

const defaultBlogFaqs: SiteFaqItem[] = [
  {
    id: 'blog-default-1',
    topic: 'blog',
    icon: 'faqBlogDefault1',
    q: 'Are blog guides official product documentation?',
    a: `Articles explain workflows and link to ${cheats}. The feature list on that page is the checkout source of truth.`,
  },
  {
    id: 'blog-default-2',
    topic: 'blog',
    icon: 'faqBlogDefault2',
    q: 'Need help applying this guide?',
    a: 'Open support with your order email and the article title. Include the exact loader text if something fails.',
  },
  {
    id: 'blog-default-3',
    topic: 'blog',
    icon: 'faqBlogDefault3',
    q: 'Will settings in this article work next patch?',
    a: 'Re-check after every Rust or EAC update. Reload a saved config instead of copying old slider values from a post.',
  },
];

export function getBlogFaqs(_tag: string, _slug: string): SiteFaqItem[] {
  return defaultBlogFaqs;
}

export const compareRows = [
  { feature: 'Aimbot options', icon: 'comparePlayerEsp' as const, lite: true, pro: true, elite: true },
  { feature: 'Player ESP', icon: 'compareWardLocator' as const, lite: true, pro: true, elite: true },
  { feature: 'Loot filter', icon: 'compareRuneTimer' as const, lite: true, pro: true, elite: true },
  { feature: 'Chams', icon: 'compareZoomHack' as const, lite: true, pro: true, elite: true },
  { feature: 'Camera FOV', icon: 'compareStreamproof' as const, lite: true, pro: true, elite: true },
  { feature: 'Config save', icon: 'compareCloudBackup' as const, lite: true, pro: true, elite: true },
];
