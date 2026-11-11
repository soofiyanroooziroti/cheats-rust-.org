import type { ProductFeatureGroup } from './product-types';

function spooferFeature(name: string, desc: string): ProductFeatureGroup {
  return { name, items: [{ name, desc }] };
}

export const SPOOFER_FEATURE_GROUPS: ProductFeatureGroup[] = [
  spooferFeature(
    'Hardware spoofer with cleaner',
    'Spoofer pass plus cleaner before you sign into Rust on this PC.',
  ),
  spooferFeature(
    'Disk serial and MAC rotation',
    'Rotates disk serials and MAC addresses the PC reports.',
  ),
  spooferFeature(
    'GPU ID profile tools',
    'Adjusts GPU identifiers when the scan flags a graphics profile.',
  ),
  spooferFeature(
    'Compatibility scan',
    'Checks Windows build, drivers, and security settings first.',
  ),
  spooferFeature(
    'Verification checklist',
    'Reboot if needed, confirm green steps, then test a spare account.',
  ),
  spooferFeature(
    'Portal step-by-step workflow',
    'Each on-screen step follows the portal order.',
  ),
  spooferFeature(
    'Discord setup support',
    'Discord help for errors—send your order email and the portal message.',
  ),
];
