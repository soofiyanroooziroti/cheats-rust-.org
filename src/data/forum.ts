export interface ForumComment {
  author: string;
  age: string;
  score: number;
  body: string;
  developer?: boolean;
  replies?: ForumComment[];
}

export interface ForumPost {
  slug: string;
  category: string;
  categoryTone: 'purple' | 'blue' | 'green' | 'orange';
  title: string;
  excerpt: string;
  /** Meta description. Cards keep the shorter excerpt. */
  description: string;
  author: string;
  age: string;
  date: string;
  commentsCount: number;
  upvotes: number;
  flair?: string;
  body: string[];
  comments: ForumComment[];
  sourceTitle?: string;
  sourcePath?: string;
  /** Answered threads that should show a closed badge. */
  closed?: boolean;
}

export const FORUM_DEVELOPER = 'cheatrust';

export const forumCategories = [
  { name: 'General', tone: 'purple', icon: 'users' },
  { name: 'Guides & Builds', tone: 'blue', icon: 'navBlog' },
  { name: 'Patch Talk', tone: 'orange', icon: 'refresh' },
  { name: 'Community', tone: 'green', icon: 'messageCircle' },
] as const;

/** Stable filter keys — always derived from English category names. */
export const FORUM_CATEGORY_KEYS: Record<string, string> = {
  General: 'general',
  'Guides & Builds': 'guidesbuilds',
  'Patch Talk': 'patchtalk',
  Community: 'community',
};

export function forumCategoryFilterKey(category: string): string {
  return FORUM_CATEGORY_KEYS[category] ?? category.toLowerCase().replace(/[^a-z0-9]/g, '');
}

function countComments(comments: ForumComment[]): number {
  return comments.reduce(
    (total, comment) => total + 1 + (comment.replies ? countComments(comment.replies) : 0),
    0,
  );
}

function withCounts(post: Omit<ForumPost, 'commentsCount'>): ForumPost {
  return { ...post, commentsCount: countComments(post.comments) };
}

export function forumLastReply(comments: ForumComment[]): { author: string; age: string } | null {
  let last: ForumComment | null = null;
  const walk = (list: ForumComment[]) => {
    for (const comment of list) {
      last = comment;
      if (comment.replies?.length) walk(comment.replies);
    }
  };
  walk(comments);
  return last ? { author: last.author, age: last.age } : null;
}

const rawPosts: Array<Omit<ForumPost, 'commentsCount'>> = [
  {
    slug: 'loader-just-sits-there',
    category: 'General',
    categoryTone: 'purple',
    title: 'wtf loader just sits there after the windows update',
    excerpt: 'Clicked launch, black window, nothing. Status is green. Am I cooked or is this a known thing?',
    description:
      'Loader stays on a black window after a Windows update while the status page is green. Staff point at the portal steps and a reboot.',
    author: 'nakedsprint',
    age: '6h ago',
    date: 'Nov 12, 2026',
    upvotes: 41,
    flair: 'Setup',
    sourceTitle: 'Rust Cheat Download: Setup Guide and How to Use It',
    sourcePath: '/blog/rust-cheat-download/',
    body: [
      'yo wtf 😭 updated windows last night and now the loader just sits there. no error, no menu, just a dead window.',
      'status is green so i thought we were good. did i brick it or is this a common L',
    ],
    comments: [
      {
        author: 'cheatrust',
        age: '5h ago',
        score: 38,
        developer: true,
        body: 'Green means the build is current. A stuck window after a Windows update is usually the PC, not a red build. Reboot, then follow the portal launch steps again and send support the exact line on screen if it still hangs.',
      },
      {
        author: 'roofcamper',
        age: '4h ago',
        score: 19,
        body: 'same thing tuesday. reboot plus the portal steps and it opened. thought i was cooked ngl 💀',
      },
      {
        author: 'nakedsprint',
        age: '3h ago',
        score: 7,
        body: 'W that actually fixed it. thanks both of you 👍',
      },
      {
        author: 'scrapyard',
        age: '2h ago',
        score: 4,
        body: 'if it still hangs, screenshot the portal step you are on. “it doesn’t work” is how tickets die lol',
      },
      {
        author: 'oilrigtim',
        age: '1h ago',
        score: 3,
        body: 'this thread saved me from buying a second key for no reason. appreciate it',
      },
    ],
  },
  {
    slug: 'green-red-blue-status',
    category: 'Patch Talk',
    categoryTone: 'orange',
    title: 'green vs red vs blue on the status page??',
    excerpt: 'Saw the big green label. What does red or blue mean before I queue.',
    description:
      'What the status colors mean: green is updated, red is not updated, blue means developers are still working.',
    author: 'banditcamp',
    age: '8h ago',
    date: 'Nov 10, 2026',
    upvotes: 56,
    flair: 'Status',
    sourceTitle: 'Best Rust Cheats Reddit Recommends in 2026: Features, Pricing & Value',
    sourcePath: '/blog/best-rust-cheats-reddit/',
    body: [
      'status dropped the big green UPDATED thing today (10 nov). cool.',
      'before i hop on, what is red and what is blue? i do not want to guess 😭',
    ],
    comments: [
      {
        author: 'cheatrust',
        age: '7h ago',
        score: 62,
        developer: true,
        body: 'Green = updated, you can use it. Red = not updated, do not use it. Blue = we are still updating it, so it is not ready yet.',
      },
      {
        author: 'banditcamp',
        age: '6h ago',
        score: 9,
        body: 'bet. green today so i am in. ty',
      },
      {
        author: 'snowball',
        age: '5h ago',
        score: 14,
        body: 'needed this written like i am 5. the old page was a novel 😂',
      },
      {
        author: 'heli_crash',
        age: '4h ago',
        score: 6,
        body: 'saved. if i see blue i am touching grass until it flips',
      },
      {
        author: 'zergling',
        age: '3h ago',
        score: 5,
        body: 'W explanation. linked this to my duo',
      },
      {
        author: 'boatbase',
        age: '2h ago',
        score: 2,
        body: 'red last month is why i waited. this layout is way clearer',
      },
      {
        author: 'ak_recycler',
        age: '1h ago',
        score: 8,
        body: 'this helped, i was about to launch on a guess. thanks admin',
      },
    ],
  },
  {
    slug: 'secure-boot-tpm-wont-boot',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    title: 'secure boot / tpm thing, pc says no',
    excerpt: 'After the Facepunch hardware check talk my bios is a mess. Does the loader skip that or not.',
    description:
      'Secure Boot and TPM stay required. The loader does not skip the Windows lines listed on the product page.',
    author: 'oldpcandy',
    age: '9h ago',
    date: 'Nov 6, 2026',
    upvotes: 33,
    flair: 'Windows',
    sourceTitle: 'Rust Cheat Download: Setup Guide and How to Use It',
    sourcePath: '/blog/rust-cheat-download/',
    body: [
      'read the nov notes about secure boot and tpm 2.0. my older board is being annoying.',
      'is there a “just turn it off and the loader still runs” option or am i actually stuck',
    ],
    comments: [
      {
        author: 'cheatrust',
        age: '8h ago',
        score: 29,
        developer: true,
        body: 'No skip. The product page lists HVCI, core isolation, TPM, and secure boot as on. If the PC cannot meet that, this is the wrong machine. We do not publish a bypass.',
      },
      {
        author: 'compoundkid',
        age: '6h ago',
        score: 11,
        body: 'yeah i tried to get cute with bios and just wasted an hour. requirements are the requirements 🤷‍♂️',
      },
      {
        author: 'oldpcandy',
        age: '4h ago',
        score: 4,
        body: 'fair. annoying but clear. thanks',
      },
    ],
  },
  {
    slug: 'bought-spoofer-account-still-locked',
    category: 'Community',
    categoryTone: 'green',
    title: 'bought the spoofer and the account is still locked??',
    excerpt: 'New name on the same pc works. The banned name does not. Did I buy the wrong thing.',
    description:
      'HWID spoofer is for a PC flag. An account-only restriction is the unban tool, sold separately.',
    author: 'duo_left',
    age: '7h ago',
    date: 'Nov 2, 2026',
    upvotes: 48,
    flair: 'Which product',
    sourceTitle: 'Discover What an HWID Spoofer Does in Rust',
    sourcePath: '/blog/spoofer-rust/',
    body: [
      'ok wtf. spoofer ran, fresh account gets in, old account still locked.',
      'did i just pay for the wrong product or is the spoofer broken',
    ],
    comments: [
      {
        author: 'cheatrust',
        age: '6h ago',
        score: 44,
        developer: true,
        body: 'That pattern is an account restriction, not a PC flag. The spoofer does not unlock a banned name. Account appeals are the unban tool, separate checkout. It organizes the case. It does not promise the platform will restore the account.',
      },
      {
        author: 'launch_site',
        age: '5h ago',
        score: 17,
        body: 'this is the post i needed last wipe. spoofer = pc, unban tool = the name. do not mix them lol',
      },
      {
        author: 'duo_left',
        age: '4h ago',
        score: 6,
        body: 'ahh. so i bought the pc one for an account problem. my bad 😬',
      },
      {
        author: 'quarry_main',
        age: '3h ago',
        score: 9,
        body: 'W reply. sending this to my trio before they double buy',
      },
      {
        author: 'night_farm',
        age: '2h ago',
        score: 3,
        body: 'helped. i was one click from a second spoofer key',
      },
    ],
  },
  {
    slug: 'no-key-in-email',
    category: 'General',
    categoryTone: 'purple',
    title: 'paid and the key email never showed',
    excerpt: 'Checkout said done. Inbox and spam are empty. Where is the key.',
    description: 'Missing key email after checkout. Staff ask for the order email and the portal receipt, not a screenshot of the menu.',
    author: 'mailbox_zero',
    age: '5h ago',
    date: 'Oct 28, 2026',
    upvotes: 27,
    flair: 'Checkout',
    sourceTitle: 'Where to Find Reliable and Cheap Rust Cheats This Wipe',
    sourcePath: '/blog/cheap-rust-cheats/',
    body: [
      'bought the 30 day loader. page said success. no mail. spam is empty. wtf do i do',
    ],
    comments: [
      {
        author: 'cheatrust',
        age: '4h ago',
        score: 24,
        developer: true,
        body: 'Open support with the order email and the portal receipt. A menu screenshot does not match a key. Check the same inbox you typed at checkout, including promotions.',
        replies: [
          {
            author: 'mailbox_zero',
            age: '3h ago',
            score: 5,
            body: 'it was in promotions 😭 i am actually stupid. ty',
          },
        ],
      },
      {
        author: 'recycler_rat',
        age: '2h ago',
        score: 8,
        body: 'promotions folder got me too. this comment helped more than my duo',
      },
    ],
  },
  {
    slug: 'status-was-blue-this-morning',
    category: 'Patch Talk',
    categoryTone: 'orange',
    title: 'status was blue this morning, can i play or not',
    excerpt: 'Blue label said updating. I waited. It is green now. Just confirming.',
    description: 'Blue status means developers are still updating the build. Wait until it is green before launching.',
    author: 'cargo_timer',
    age: '10h ago',
    date: 'Oct 22, 2026',
    upvotes: 22,
    flair: 'Status',
    sourceTitle: 'Best Rust Cheats Reddit Recommends in 2026: Features, Pricing & Value',
    sourcePath: '/blog/best-rust-cheats-reddit/',
    body: [
      'woke up, status was blue. “developers working” vibe.',
      'i did not launch. it is green now. that was the right call yeah?',
    ],
    comments: [
      {
        author: 'cheatrust',
        age: '9h ago',
        score: 21,
        developer: true,
        body: 'Yes. Blue means we are still updating it, so leave it closed. Green means that build can be used. You waited it out the right way.',
      },
      {
        author: 'cargo_timer',
        age: '8h ago',
        score: 4,
        body: 'W. queued after it flipped. all good',
      },
      {
        author: 'minicopter',
        age: '7h ago',
        score: 6,
        body: 'i launched on blue once and felt dumb. this is the reminder',
      },
      {
        author: 'tunnel_rat',
        age: '5h ago',
        score: 3,
        body: 'helped. i was mid download when i saw blue and just stopped',
      },
      {
        author: 'bradley',
        age: '4h ago',
        score: 2,
        body: 'pin this during patch days fr',
      },
      {
        author: 'teabag_tc',
        age: '3h ago',
        score: 7,
        body: 'same morning here. waited, green, loaded. thanks',
      },
      {
        author: 'outpost_camper',
        age: '2h ago',
        score: 1,
        body: 'blue = touch grass. noted 😂',
      },
      {
        author: 'samsite',
        age: '1h ago',
        score: 5,
        body: 'this thread is why i check status before the file. solid',
      },
    ],
  },
  {
    slug: 'config-didnt-save',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    title: 'config did not save and i am heated',
    excerpt: 'Closed the menu, reopened, sliders back to default. What did I miss.',
    description: 'Config save is a menu step. Closing the window is not the same as saving the preset.',
    author: 'slider_guy',
    age: '6h ago',
    date: 'Oct 18, 2026',
    upvotes: 18,
    flair: 'Config',
    sourceTitle: 'Rust Cheat Features: Menu, Config and Misc Options Explained',
    sourcePath: '/blog/rust-cheat-features/',
    body: [
      'spent 20 min on colors and distances. closed it. came back and it is default again. wtf',
      'is save a button or does it autosave because mine clearly does not',
    ],
    comments: [
      {
        author: 'cheatrust',
        age: '5h ago',
        score: 16,
        developer: true,
        body: 'Closing the menu is not a save. Use the config save in the menu, then reopen and confirm the preset name is the one you stored. If that preset will not load, ticket support with the order email.',
      },
      {
        author: 'slider_guy',
        age: '4h ago',
        score: 3,
        body: 'there is an actual save. i am blind. it stuck this time 👍',
      },
      {
        author: 'box_esp',
        age: '3h ago',
        score: 9,
        body: 'lol same. this comment helped. i was rage reinstalling',
      },
      {
        author: 'font_slider',
        age: '2h ago',
        score: 2,
        body: 'name the preset something you will recognize. “config1” is how you load the wrong one',
      },
    ],
  },
  {
    slug: 'discord-ticket-sitting',
    category: 'Community',
    categoryTone: 'green',
    title: 'discord ticket just sitting there',
    excerpt: 'Opened a ticket with “help” and a meme. No reply. What do they actually want.',
    description: 'Support tickets need the order email, product name, and the portal sentence that failed.',
    author: 'ticket_goblin',
    age: '4h ago',
    date: 'Oct 14, 2026',
    upvotes: 15,
    flair: 'Support',
    sourceTitle: 'Rust Cheat Download: Setup Guide and How to Use It',
    sourcePath: '/blog/rust-cheat-download/',
    body: [
      'ticket has been quiet. i wrote “loader wtf” and a skull emoji. maybe that was the problem 😂',
    ],
    comments: [
      {
        author: 'cheatrust',
        age: '3h ago',
        score: 14,
        developer: true,
        body: 'Send the order email, which product (loader, spoofer, or unban tool), and the exact portal or loader sentence. “It broke” with no detail is why a ticket sits.',
      },
      {
        author: 'ticket_goblin',
        age: '2h ago',
        score: 2,
        body: 'added the email and the red line. someone replied. i was the problem lol',
      },
    ],
  },
  {
    slug: 'hvci-already-on',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    title: 'hvci is already on, do i turn it off',
    excerpt: 'Product page says HVCI on. A random clip told me to disable it. Which one.',
    description: 'HVCI, core isolation, TPM, and secure boot stay on. Do not disable them to launch.',
    author: 'core_iso',
    age: '8h ago',
    date: 'Oct 10, 2026',
    upvotes: 36,
    flair: 'Windows',
    sourceTitle: 'Rust Cheat Download: Setup Guide and How to Use It',
    sourcePath: '/blog/rust-cheat-download/',
    body: [
      'requirements say hvci on, core isolation on, tpm on, secure boot on.',
      'some 2024 clip said turn hvci off. i am not trying to guess and nuke the pc',
    ],
    comments: [
      {
        author: 'cheatrust',
        age: '7h ago',
        score: 31,
        developer: true,
        body: 'Leave them on. The product page is the list that matters. Do not follow a clip that says to disable HVCI or secure boot.',
      },
      {
        author: 'core_iso',
        age: '6h ago',
        score: 4,
        body: 'left them on. loader opened. clip was cap',
      },
      {
        author: 'tpm_on',
        age: '5h ago',
        score: 12,
        body: 'this helped. i was one toggle from “fixing” a working pc 💀',
      },
      {
        author: 'secureboot',
        age: '4h ago',
        score: 6,
        body: 'W. bookmark the requirements block not a youtube short',
      },
      {
        author: 'iso_check',
        age: '3h ago',
        score: 3,
        body: 'same question in my discord. sending them here',
      },
      {
        author: 'win11_guy',
        age: '2h ago',
        score: 5,
        body: 'green status + those switches on. that is the whole pre-flight for me now',
      },
    ],
  },
];

export const forumPosts: ForumPost[] = rawPosts.map(withCounts);

export function getForumPost(slug: string) {
  return forumPosts.find((post) => post.slug === slug);
}
