# cheats-rust-.org

Rust Cheats marketing site (live: **cheaturust.org**) — Astro 7 static build.

### Cloudflare Pages

| Setting | Value |
|--------|--------|
| Build command | `npm run build` |
| Build output directory | `dist` |
| Deploy command | *(leave empty — Pages uploads `dist` automatically)* |

Do **not** set the deploy command to `npx wrangler deploy`. That targets Workers and can run `astro add cloudflare`, which breaks this static site. Optional CLI: `npx wrangler pages deploy dist` after a local build.
