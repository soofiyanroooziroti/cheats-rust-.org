import type { AcquisitionStep, ProductSlide, SystemRequirement } from './product-types';
import type { Block } from './product-locale-types';
import { RUST_CHEAT_FEATURE_GROUPS } from './rust-cheat-feature-groups';
import { SPOOFER_FEATURE_GROUPS } from './spoofer-feature-groups';

const placeholder = '/images/placeholder.png';
const RUST_CHEAT_GALLERY = '/images/products';

const rustCheatGallerySlides = {
  visuals: {
    src: `${RUST_CHEAT_GALLERY}/zadeyo-rust-1-visuals.webp`,
    alt: 'Rust Cheats loader – Visual ESP menu on Windows PC',
    caption: 'Visual ESP',
    captionDesc: 'Player, scientist, and world label toggles in the loader.',
  },
  world: {
    src: `${RUST_CHEAT_GALLERY}/zadeyo-rust-2-world.webp`,
    alt: 'Rust Cheats loader – world and resource ESP on Windows PC',
    caption: 'World ESP',
    captionDesc: 'Ores, collectables, traps, and vehicles in one overlay.',
  },
  aim: {
    src: `${RUST_CHEAT_GALLERY}/zadeyo-rust-3-aimbot.webp`,
    alt: 'Rust Cheats loader – aimbot options on Windows PC',
    caption: 'Aimbot options',
    captionDesc: 'FOV, smoothing, and target rules for PvP.',
  },
  weapon: {
    src: `${RUST_CHEAT_GALLERY}/zadeyo-rust-4-weapon.webp`,
    alt: 'Rust Cheats loader – weapon options on Windows PC',
    caption: 'Weapon options',
    captionDesc: 'Recoil, spread, sway, and bow helpers.',
  },
  misc: {
    src: `${RUST_CHEAT_GALLERY}/zadeyo-rust-5-misc.webp`,
    alt: 'Rust Cheats loader – misc and config options on Windows PC',
    caption: 'Misc & config',
    captionDesc: 'Movement, view, and config save/load rows.',
  },
} as const satisfies Record<string, ProductSlide>;

function rustCheatGallery(...keys: (keyof typeof rustCheatGallerySlides)[]): ProductSlide[] {
  return keys.map((k) => rustCheatGallerySlides[k]);
}

const slide = (alt: string, caption: string, captionDesc: string): ProductSlide => ({
  src: placeholder,
  alt,
  caption,
  captionDesc,
});

/** Home hero slider only — not the cheats product gallery. */
export const cheatHomeHeroSlides: ProductSlide[] = [
  slide(
    'Rust Cheats – placeholder hero screenshot for the Windows PC loader',
    'Loader preview',
    'Screenshot slot for the Rust cheat menu.',
  ),
  slide(
    'Rust Cheats – placeholder second hero slide for player overlays',
    'Overlay preview',
    'Screenshot slot for player awareness tools.',
  ),
  slide(
    'Rust Cheats – placeholder third hero slide for base and world tools',
    'World tools',
    'Screenshot slot for resource and base helpers.',
  ),
  slide(
    'Rust Cheats – placeholder fourth hero slide for config presets',
    'Config save',
    'Screenshot slot for saved presets.',
  ),
  slide(
    'Rust Cheats – placeholder fifth hero slide for raid encounters',
    'Raid read',
    'Screenshot slot for close-range fights.',
  ),
  slide(
    'Rust Cheats – placeholder sixth hero slide for long-range tuning',
    'Range tuning',
    'Screenshot slot for distance engagements.',
  ),
];

export const acquisitionSteps: AcquisitionStep[] = [
  {
    num: '01',
    title: 'Check status',
    desc: 'Confirm modules are online on cheatrust.org before you buy—especially after a Rust or EasyAnti-Cheat update.',
  },
  {
    num: '02',
    title: 'Pick a plan',
    desc: 'Choose monthly or lifetime—same USD pricing on every product in the lineup.',
  },
  {
    num: '03',
    title: 'Secure checkout',
    desc: 'Complete checkout on the portal. Your license unlocks with instant delivery.',
  },
  {
    num: '04',
    title: 'Install & verify',
    desc: 'Follow the setup guide, load a conservative preset, and test on a low-stakes server before main play.',
  },
];

export const utilitySlides = {
  spoofer: [
    {
      src: '/images/products/rust-hwid-spoofer-hero.webp',
      alt: 'HWID spoofer on Windows PC',
      caption: 'HWID spoofer',
      captionDesc: 'Hardware fingerprint tools before you relaunch.',
    },
    {
      src: '/images/products/rust-hwid-spoofer-board.webp',
      alt: 'Phoenix Satano HWID spoofer hardware fingerprint rotation on Windows PC',
      caption: 'Phoenix board',
      captionDesc: 'Disk, MAC, and GPU ID rotation.',
    },
    {
      src: '/images/products/rust-hwid-spoofer-wh.webp',
      alt: 'Phoenix WH-Satano spoofer branding on Windows PC',
      caption: 'Phoenix WH',
      captionDesc: 'Spoofer workspace used on every store.',
    },
  ],
  ugc: [
    {
      src: '/images/products/ugc-account-recovery.webp',
      alt: 'Rust unban tool workspace preview on Windows PC',
      caption: 'Account recovery',
      captionDesc: 'Templates, evidence lists, and follow-up in one workspace.',
    },
  ],
} as const;

export const cheatsContent = {
  images: rustCheatGallery('visuals', 'world', 'aim', 'weapon', 'misc'),
  goodToKnow:
    'Rust and EasyAnti-Cheat (EAC) update often. Confirm availability on cheatrust.org before you launch. Overlay behavior may differ in menus or spectator views after patches.',
  limitations:
    'Third-party software can violate game terms and lead to bans. You use this software at your own risk. Compatibility can change after game, EAC, or Windows updates without notice.',
  systemRequirements: [
    { icon: 'reqWindows', text: 'Windows 10/11' },
    { icon: 'reqCpu', text: 'Intel/AMD' },
    { icon: 'reqShieldGuide', text: 'HVCI ON' },
    { icon: 'reqSettings', text: 'CORE ISOLATION ON' },
    { icon: 'shieldCheck', text: 'TPM ON' },
    { icon: 'reqShieldAccount', text: 'SECURE BOOT ON' },
  ] as SystemRequirement[],
  featureGroups: RUST_CHEAT_FEATURE_GROUPS,
  overview: {
    title: 'Built for Rust on Windows PC',
    paragraphs: [
      'Rust cheat loader ships Visual ESP, weapon, aimbot, misc, and config modules listed on this page for vanilla and modded servers. Updates ship while your key is active, with Discord help for setup.',
      'Always check availability on cheatrust.org before you launch, especially after an EasyAnti-Cheat (EAC) or Rust client patch.',
    ],
  },
  body: [
    { type: 'h2', text: 'Modules included' },
    {
      type: 'p',
      text: 'Visual ESP Features (two groups), Weapon Options, Aimbot Options, Misc Options, and Config Options. The full list with a short note on each menu line is in the feature section on this page.',
    },
    { type: 'h2', text: 'Plans' },
    {
      type: 'p',
      text: 'Monthly $35 USD (P30D) or lifetime $150 USD (P99Y). Instant digital delivery worldwide after checkout.',
    },
  ] as Block[],
};

export const spooferContent = {
  images: [...utilitySlides.spoofer],
  goodToKnow:
    'HWID tools change how your PC fingerprint appears—they do not remove account bans by themselves. Follow portal guides before launching Rust again.',
  limitations:
    'Spoofing carries technical risk and may violate game terms. Results vary by ban type and driver setup. Use only on systems you own.',
  systemRequirements: [
    { icon: 'reqWindows', text: 'Windows 10 or 11 64-bit with administrator rights.' },
    { icon: 'reqRestorePoint', text: 'Create a restore point before running hardware tools.' },
    { icon: 'reqWifi', text: 'Stable internet for activation and verification steps.' },
  ] as SystemRequirement[],
  fullFeatures: SPOOFER_FEATURE_GROUPS.flatMap((group) => group.items.map((item) => item.name)),
  featureGroups: SPOOFER_FEATURE_GROUPS,
  overview: {
    title: 'Rust HWID spoofer workflow',
    paragraphs: [
      'Rust HWID spoofer focuses on hardware profile rotation when you need a clean machine context before relaunching Rust after a hardware flag.',
      'Monthly and lifetime USD plans use the same checkout flow as the rest of the lineup.',
    ],
  },
  body: [
    { type: 'h2', text: 'When to use it' },
    {
      type: 'p',
      text: 'Use when fresh accounts fail on one PC but work elsewhere—not for account-only bans. Pair with conservative cheat presets after verification.',
    },
    { type: 'h2', text: 'Plans' },
    { type: 'p', text: 'Monthly $50 USD (P30D) or lifetime $150 USD (P99Y).' },
  ] as Block[],
};

export const ugcContent = {
  images: [...utilitySlides.ugc],
  goodToKnow:
    'Gather order details, account facts, and restriction screenshots before opening a ticket. The rust unban tool structures appeals—it does not bypass platform review.',
  limitations:
    'The rust unban tool does not guarantee account restoration. Results vary by case type and platform policy.',
  systemRequirements: [
    { icon: 'reqWindows', text: 'Windows 10 or 11 (64-bit).' },
    { icon: 'reqWifi', text: 'Internet access for workflow sync and updates.' },
    { icon: 'reqSettings', text: 'Administrator access for installation.' },
  ] as SystemRequirement[],
  fullFeatures: [
    'Custom appeal workflows',
    'Multi-platform recovery workspace',
    'Template library',
    'Automation for repetitive steps',
    'Restriction tracking dashboard',
    'Secure portal delivery',
    'Monthly and lifetime USD plans',
  ],
  overview: {
    title: 'Rust unban tool workspace',
    paragraphs: [
      'Rust unban tool helps organize ban appeals and recovery cases with templates, evidence lists, and follow-up reminders.',
      'Instant digital delivery after secure checkout, with Discord support for setup questions.',
    ],
  },
  body: [
    { type: 'h2', text: 'Rust unban appeals' },
    {
      type: 'p',
      text: 'Build custom rust unban appeal paths, automate dispute steps, and track case status when Rust accounts are locked or restricted.',
    },
    { type: 'h2', text: 'Rust unban evidence' },
    {
      type: 'p',
      text: 'Use checklists so each rust unban packet includes screenshots, timestamps, and the policy section you are citing.',
    },
    { type: 'h2', text: 'Plans' },
    { type: 'p', text: 'Monthly $35 USD (P30D) or lifetime $150 USD (P99Y).' },
  ] as Block[],
};
