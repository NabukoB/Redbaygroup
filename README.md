# Redbay Group website

The website for Redbay Group (Redbay Construction Ltd) at https://redbaygroup.co.ke.
Next.js, exported as static files and hosted on Hostinger.

## Commands

```bash
npm run dev         # local preview at http://localhost:3000
npm run build       # builds the site into out/
npm run typecheck   # strict TypeScript check
npm test            # all tests (run a build first for the built-site tests)
npm run check       # everything: types, lint, build, tests. Run before every publish.
```

## Where things live

- `lib/` holds the content: projects (`site.ts`), guides (`insights*.ts`), designs, areas, services.
- `public/<projects|designs>/<slug>/` holds photos as `N-800.webp` and `N-1600.webp`.
- `public/hit.php` and `public/stats-*.php` are the cookie-free visit counter and its private stats page.
- `public/.htaccess` holds the security and caching rules.

## Tests (`tests/`)

- `logic.test.ts`: visitor-source detection, the perimeter wall calculator, the quote form message.
- `data.test.ts`: unique slugs, every photo file exists, every link points to a real page, nothing half-written,
  the SACCO client is never named, the wall rate is quoted consistently.
- `counter.test.ts`: runs the PHP counter and stats page on real PHP (needs `php` installed).
- `built-site.test.ts`: every built page has one h1, a title and description within Google's limits, a correct
  canonical address, share image, valid structured data, working links and images, and is in the sitemap.

## Publishing

Build, copy `out/` onto the `hostinger` branch (keeping older files in `_next/static` so pages saved on phones
keep working, and never committing `_stats/*.json`), push, then deploy from Hostinger.
