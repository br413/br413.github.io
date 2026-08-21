# Dev.to publish checklist — article #2

Use this file after reviewing `data-quality-contracts-production-pipelines.md`.

## Cover image

No dedicated cover asset yet. Options:

**Option A — Dev.to editor (easiest):**

1. Create or upload a cover (1000×420) showing the mermaid flow: API → quarantine vs bronze → silver
2. Dark navy background matching [br413.github.io](https://br413.github.io/) works well

**Option B — API on publish:**

```powershell
$env:DEVTO_COVER_IMAGE = "https://raw.githubusercontent.com/br413/br413.github.io/main/assets/devto-cover-data-quality-contracts.png"
$env:DEVTO_API_KEY = "your-key-here"
.\scripts\publish-devto.ps1 -Article contracts
```

## Before publishing

1. Get API key: [Dev.to settings → Extensions](https://dev.to/settings/extensions)
2. Review title and tags in front matter (max 4 tags on Dev.to)
3. Confirm mermaid diagram renders in Dev.to preview (Dev.to supports mermaid in many cases; if not, the text flow diagram in article #1 style is the fallback)

## Publish

```powershell
cd C:\Users\Administrator\Projects\br413.github.io
$env:DEVTO_API_KEY = "your-key-here"
.\scripts\publish-devto.ps1 -Article contracts
```

The script will:
- Post the article as published
- Save response to `articles/devto-response-contracts.json`
- Update `index.html` Writing link automatically (removes "ready to publish" badge)

## After publishing

1. Add or confirm the cover image in the Dev.to editor
2. Pin the post on your Dev.to profile (alongside article #1)
3. Cross-link from [GitHub profile README](https://github.com/br413/br413) Writing section
4. Request GSC indexing for the new Dev.to URL
5. Update `docs/90-day-contribution-plan.md` Week 6 checkbox in profile repo

## Suggested Dev.to cross-post blurb

> Production pipelines fail loudly at 3 a.m. or quietly in dashboards. Data quality contracts give you a third path.
>
> This follow-up covers row-level quarantine at ingestion (production-data-pipeline v0.2.1) and YAML dataset contracts at the quality boundary (data-quality-observability).
>
> Part 1: https://dev.to/bobby_ray_581732c715283b2/building-a-production-data-pipeline-with-incremental-loading-and-dbt-2e2c
