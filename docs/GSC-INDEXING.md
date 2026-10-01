# Request Google Search Console indexing

GSC requires a signed-in Google account with access to the property. The site is already verified via the meta tag in `index.html`.

## URLs to submit (URL Inspection → Request indexing)

### Portfolio site (property: `https://br413.github.io/`)

- https://br413.github.io/
- https://br413.github.io/lakehouse-platform-starter/

## Article sources

The portfolio links to these GitHub copies. Only submit URLs under the verified portfolio property above in Search Console.

- https://github.com/br413/br413.github.io/blob/main/articles/building-production-data-pipeline.md
- https://github.com/br413/br413.github.io/blob/main/articles/data-quality-contracts-production-pipelines.md
- https://github.com/br413/br413.github.io/blob/main/articles/oss-upstream-retrospective.md
- https://github.com/br413/br413.github.io/blob/main/articles/contract-versioning-production-pipelines.md

## Steps

1. Open https://search.google.com/search-console
2. Select property `https://br413.github.io/`
3. Use **URL Inspection** for each portfolio URL above → **Request indexing**
4. Confirm sitemap is submitted: `https://br413.github.io/sitemap.xml`

## After publishing cover assets

Bump `sitemap.xml` lastmod when the portfolio site changes, then re-request indexing for `https://br413.github.io/`.
