function barePath(pathname: string): string {
  if (pathname === '/' || pathname === '') return '/';
  return pathname.endsWith('/') ? pathname : `${pathname}/`;
}

/** One descriptive alt per audited URL so the logo is not an empty image. */
export function logoAltForPath(pathname: string): string {
  const path = barePath(pathname);

  if (path === '/') return 'Rust Cheats – logo';
  if (path === '/products/') return 'Rust – logo';
  if (path === '/product/rust-cheat/') return 'Rust Cheats – logo';
  if (path === '/blog/') return 'Guides – logo';
  if (path === '/forum/') return 'Forum – logo';
  if (path === '/faq/') return 'Faq – logo';
  if (path === '/support/') return 'Support – logo';
  return 'Rust Cheats logo';
}
