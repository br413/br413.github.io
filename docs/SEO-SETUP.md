# SEO setup guide

## Google Search Console

1. Sign in at https://search.google.com/search-console/welcome
2. Add property: **URL prefix** → `https://br413.github.io`
3. Choose **HTML tag** verification
4. Copy the `content="..."` value from the meta tag
5. Run:

```powershell
cd C:\Users\Administrator\Projects\br413.github.io
.\scripts\setup-gsc-verification.ps1 -VerificationCode "YOUR_CODE_HERE"
git add index.html
git commit -m "chore: add Google Search Console verification"
git push
```

6. Click **Verify** in Search Console
7. Submit sitemap: `https://br413.github.io/sitemap.xml`

## Dev.to article

1. Get API key: https://dev.to/settings/extensions → **Generate API Key**
2. Publish:

```powershell
$env:DEVTO_API_KEY = "your-key-here"
cd C:\Users\Administrator\Projects\br413.github.io
.\scripts\publish-devto.ps1
```

3. Cross-link is applied automatically to `index.html` via `scripts/update-devto-link.ps1` after publish

## Manual Dev.to publish

1. Go to https://dev.to/new
2. Sign in with GitHub
3. Paste contents from `articles/building-production-data-pipeline.md` (skip YAML front matter)
4. Tags: `dataengineering`, `python`, `dbt`, `airflow`, `etl`
5. Share the published URL to update the portfolio Writing section
