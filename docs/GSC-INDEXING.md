# Request Google Search Console indexing

GSC requires a signed-in Google account with access to the property. The site is already verified via the meta tag in `index.html`.

## URLs to submit (URL Inspection → Request indexing)

### Portfolio site (property: `https://br413.github.io/`)

- https://br413.github.io/
- https://br413.github.io/lakehouse-platform-starter/

### Dev.to articles (indexed under dev.to — submit from your Dev.to dashboard or wait for crawl)

- https://dev.to/bobby_ray_581732c715283b2/building-a-production-data-pipeline-with-incremental-loading-and-dbt-2e2c
- https://dev.to/bobby_ray_581732c715283b2/data-quality-contracts-in-production-pipelines-without-a-separate-platform-team-f3
- https://dev.to/bobby_ray_581732c715283b2/what-i-learned-contributing-to-prefect-dbt-and-airflow-an-honest-oss-retrospective-1ki8
- https://dev.to/bobby_ray_581732c715283b2/contract-versioning-in-production-pipelines-registry-cli-and-run-history-13el

## Steps

1. Open https://search.google.com/search-console
2. Select property `https://br413.github.io/`
3. Use **URL Inspection** for each portfolio URL above → **Request indexing**
4. Confirm sitemap is submitted: `https://br413.github.io/sitemap.xml`

## After publishing cover assets

Bump `sitemap.xml` lastmod when the portfolio site changes, then re-request indexing for `https://br413.github.io/`.
