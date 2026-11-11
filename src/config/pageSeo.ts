export interface PageSeoEntry {
  title: string;
  description: string;
}

export const PAGE_SEO: Record<string, PageSeoEntry> = {
  '/': {
    title: 'Rust Cheats for Windows PC | Rust Cheats',
    description:
      'Rust cheats and best rust cheats for Windows PC—compare the loader, HWID spoofer, and unban tool with monthly or lifetime USD plans.',
  },
  '/products/': {
    title: 'Product Catalog | Loader, Spoofer, and Unban Tool',
    description:
      'Compare plans for the Rust menu, HWID spoofer and unban tool on Windows PC. Monthly and lifetime USD options, each with its own checkout. Each plan is separate.',
  },
  '/product/rust-cheat/': {
    title: 'Rust Cheat Loader for Windows PC',
    description:
      'Rust cheat loader for Windows PC with modular tools, portal delivery, and $35 monthly or $150 lifetime USD plans.',
  },
  '/product/spoofer/': {
    title: 'Rust HWID Spoofer | Spoofer Rust on Windows',
    description:
      'Rust HWID spoofer and spoofer rust workflow for hardware flags on Windows PC. Monthly $50 or lifetime $150 USD, separate from the cheat loader.',
  },
  '/product/ugc/': {
    title: 'Rust Unban Tool | Account Appeal Workspace',
    description:
      'Rust unban tool organizes account appeals and recovery steps for Rust on Windows PC. Monthly $35 or lifetime $150 USD.',
  },
  '/blog/': {
    title: 'Guides: Setup, EAC Notes, and Product Help',
    description:
      'Windows PC guides on loader setup, EAC patch days, spoofer checks, and plan pricing for customers.',
  },
  '/forum/': {
    title: 'Community Forum: Loader, Spoofer, and Plans',
    description:
      'Community threads on the loader, HWID spoofer, unban tool, and $35 versus $150 USD plans. Developer replies are marked.',
  },
  '/faq/': {
    title: 'FAQ — Plans, Setup, and EAC Risk Before Checkout',
    description:
      'Answers on checkout, EasyAnti-Cheat updates, Windows requirements, hardware flags, and how the loader, spoofer, and unban tool differ.',
  },
  '/support/': {
    title: 'Support: Loader and Checkout Help',
    description:
      'Support for the Windows loader, HWID spoofer, and unban tool on cheatrust.org. Use Discord with your order details and loader text.',
  },
  '/about/': {
    title: 'About the store, portal delivery, and risk',
    description:
      'What cheatrust.org sells, how checkout and portal delivery work, and the ban risk that stays on you when you use these tools on Windows PC.',
  },
  '/privacy/': {
    title: 'Privacy notes for analytics and cookies',
    description:
      'How cheatrust.org handles analytics and cookies. Payment card numbers stay on the checkout provider, not on this store.',
  },
  '/terms/': {
    title: 'License terms, refunds, and acceptable use rules',
    description:
      'License terms, acceptable use, and the no-refund rule for the loader, HWID spoofer, and unban tool sold through cheatrust.org.',
  },
  '/status/': {
    title: 'Rust Cheats Status',
    description:
      'Green means the Rust Cheats build is updated and can be used. Red means do not use it. Blue means developers are still updating it. Last updated 10 Nov 2026.',
  },
};

export function normalizeSeoPath(pathname: string): string {
  let path = pathname || '/';
  if (!path.startsWith('/')) path = `/${path}`;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;
  return path;
}

export function getPageSeoEntry(pathname: string): PageSeoEntry | undefined {
  return PAGE_SEO[normalizeSeoPath(pathname)];
}
