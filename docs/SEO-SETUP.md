# SEO setup guide

## Current site sources

The root site at [https://br413.github.io/](https://br413.github.io/) is built from Next.js. Pushes to `main` run the Pages workflow and publish `out/`, including copies of the retained `articles/` and `assets/` directories.

| Setting | Source |
| --- | --- |
| Site URL, name, and contact details | `lib/constants.ts` |
| Global metadata, social previews, Person JSON-LD, and Google verification | `app/layout.tsx` |
| Page titles, descriptions, and canonical paths | The relevant `app/**/page.tsx` metadata |
| Blog content and publication dates | `lib/data.ts` |
| Published sitemap | `app/sitemap.ts` |
| Published robots rules | `app/robots.ts` |

The root `index.html`, `styles.css`, `robots.txt`, and `sitemap.xml` are retained legacy files. Editing them does not change the deployed Next.js pages or generated SEO files.

## Google Search Console

1. Sign in to [Google Search Console](https://search.google.com/search-console/welcome) with access to the existing property, or add a **URL-prefix** property for `https://br413.github.io/`.
2. Keep the existing Google verification value in `metadata.verification.google` in `app/layout.tsx`. If a new verification value is required, choose **HTML tag** in Search Console and put its `content` value in that field.
3. Run `npm run lint` and `npm run build`, then publish the reviewed change to `main` and wait for the Pages workflow to finish.
4. Open the deployed homepage's page source and confirm the `google-site-verification` meta tag appears in its `<head>`. Check the deployed page rather than the retained root `index.html`.
5. Click **Verify** in Search Console if verification is pending. Keep the verification value after verification succeeds; Google checks it periodically.
6. Submit [https://br413.github.io/sitemap.xml](https://br413.github.io/sitemap.xml) in the property's **Sitemaps** report.

See Google's [ownership verification instructions](https://support.google.com/webmasters/answer/9008080) and the [indexing guide](GSC-INDEXING.md).

## Article sources and Dev.to publishing

The original article Markdown in `articles/` and cover images in `assets/` remain available in GitHub and are copied into the published site at the same paths. They are retained source files, separate from the rendered Next.js blog content.

The PowerShell publishing scripts remain available. Obtain a Dev.to API key from [the account settings](https://dev.to/settings/extensions) and set `DEVTO_API_KEY` in the current shell without committing it. From the repository root, run a publishing command only when you intend to publish the article:

```powershell
.\scripts\publish-devto.ps1 -Article pipeline
```

Supported article selectors are `pipeline`, `contracts`, `retrospective`, and `versioning`. The script publishes to Dev.to and saves a response file in `articles/`. It also calls `update-devto-link.ps1`, which edits the retained legacy `index.html`; that edit does not add a link to the current Next.js site.

`update-devto-article.ps1` updates an existing Dev.to article, and `set-devto-cover.ps1` changes its cover image. Review the selected article ID or URL before running them. `apply-devto-updates.ps1` retains its original batch of article and cover updates.

For manual publishing, open [Dev.to's editor](https://dev.to/new), paste the selected article body without its YAML front matter, and use the article's tags. Add links or rendered posts to the active portfolio through the relevant Next.js page and `lib/data.ts`, then rebuild and redeploy.

`setup-gsc-verification.ps1` and `update-devto-link.ps1` operate on legacy `index.html`. The former does not configure current Google verification, and the latter does not update the current blog or homepage. Their source and earlier publishing workflow are preserved for reference.
