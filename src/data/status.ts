/** ISO date (YYYY-MM-DD) — edit when you publish a status refresh. */
export const STATUS_LAST_UPDATED = '2026-11-10';

export type StatusTone = 'green' | 'red' | 'blue';

export interface StatusLegendItem {
  tone: StatusTone;
  label: string;
  meaning: string;
}

export interface StatusUpdateEntry {
  title: string;
  /** Display range or date, e.g. 5 Nov 2026 */
  when: string;
  summary: string;
}

/** Current store state. Green = updated and usable. */
export const STATUS_TONE: StatusTone = 'green';
export const STATUS_LABEL = 'Updated';

export const STATUS_LEGEND: StatusLegendItem[] = [
  { tone: 'green', label: 'Green', meaning: 'Updated. You can use it.' },
  { tone: 'red', label: 'Red', meaning: 'Not updated. Do not use it.' },
  { tone: 'blue', label: 'Blue', meaning: 'Updating. Developers are working. It is not ready yet.' },
];

/** Newest first. */
export const STATUS_RECENT_UPDATES: StatusUpdateEntry[] = [
  {
    title: 'Scripting ban wave',
    when: '5 Nov 2026',
    summary:
      'With the November 2026 patch, Facepunch banned more than 3,000 accounts tied to public and private third-party scripting providers.',
  },
  {
    title: 'Secure Boot and TPM 2.0',
    when: 'Feb–Mar 2026',
    summary:
      'Facepunch let server owners require Secure Boot and TPM 2.0 through Easy Anti-Cheat. The check targets kernel-level tools and makes hardware-ban evasion harder. Player reaction is mixed: some want the extra bar, others say older PCs get hit while some providers still adapt.',
  },
  {
    title: 'EAC enforcement',
    when: 'Ongoing',
    summary:
      'Facepunch Support says EAC bans for third-party software, injected code, aimbots, and ESP stay permanent and are often delayed so detection timing stays unclear. New accounts used to dodge an active ban are treated as ban evasion.',
  },
];

export const STATUS_GAME_NOTES: StatusUpdateEntry[] = [
  {
    title: 'System and platform',
    when: '5 Nov 2026',
    summary:
      'Printed and Polished dropped Intel Mac support (Apple Silicon only), removed the option to turn volumetric clouds off after optimizing them, and turned multithreaded player update jobs on by default.',
  },
  {
    title: 'Combat and monuments',
    when: '5 Nov 2026',
    summary:
      'Military Tunnels entrance blockers now need explosives. Handmade SMG damage went from 20 to 21. Sprinting costs 10% more calories and hydration.',
  },
  {
    title: 'Loot and vehicles',
    when: '5 Nov 2026',
    summary:
      'Loot panels close when you walk out of range. Diving propulsion vehicles accelerate faster and burn less fuel. PT boat turret handling was improved.',
  },
];

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** Format YYYY-MM-DD as "10 Nov 2026". */
export function formatStatusUpdated(isoDate: string = STATUS_LAST_UPDATED): string {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(isoDate);
  if (!match) return isoDate;
  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  const label = MONTHS[month - 1];
  if (!label) return isoDate;
  return `${day} ${label} ${year}`;
}

/** Shared line for /status/ and the home setup strip. */
export function formatActiveStatusLine(isoDate: string = STATUS_LAST_UPDATED): string {
  return `Updated · ${formatStatusUpdated(isoDate)}`;
}
