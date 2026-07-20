# Dev.to publish checklist

Use this file after reviewing `building-production-data-pipeline.md`.

## Cover image

**Recommended (included in this repo):** `assets/devto-cover-production-pipeline.png`

After pushing to GitHub, use this public URL when updating the post:

```text
https://raw.githubusercontent.com/br413/br413.github.io/main/assets/devto-cover-production-pipeline.png
```

**Option A — Dev.to editor (easiest for an already-published post):**

1. Open your [article on Dev.to](https://dev.to/bobby_ray_581732c715283b2/building-a-production-data-pipeline-with-incremental-loading-and-dbt-2e2c) → Edit
2. Upload `assets/devto-cover-production-pipeline.png` as the cover (1000×420 works best)

**Option B — API on next publish:**

```powershell
$env:DEVTO_COVER_IMAGE = "https://raw.githubusercontent.com/br413/br413.github.io/main/assets/devto-cover-production-pipeline.png"
.\scripts\publish-devto.ps1
```

**Other cover styles that fit this article:**

| Style | Idea |
|-------|------|
| Architecture flow | API → Bronze → Silver → Gold → Consumers (matches article diagram) |
| Failure modes | Split panel: "silent failure" vs "fail loudly" with checkpoint recovery callout |
| Code + ops | Terminal snippet of ingestion command beside a small medallion layer stack |
| Dark minimal | Navy background, one accent color, title only — matches [br413.github.io](https://br413.github.io/) |

## Before publishing

1. Get API key: [Dev.to settings → Extensions](https://dev.to/settings/extensions)
2. Push `assets/devto-cover-production-pipeline.png` to GitHub if using the hosted cover URL
3. Review title and tags in front matter (max 4 tags on Dev.to)

## Publish

```powershell
cd C:\Users\Administrator\Projects\br413.github.io
$env:DEVTO_API_KEY = "your-key-here"
.\scripts\publish-devto.ps1
```

The script will:
- Post the article as published
- Save response to `articles/devto-response.json`
- Update `index.html` Writing link automatically

## After publishing

1. Add or confirm the cover image in the Dev.to editor
2. Pin the post on your Dev.to profile
3. Cross-link from your [GitHub profile README](https://github.com/br413/br413) and [portfolio site](https://br413.github.io/)
4. Share in relevant Dev.to tags or GitHub Discussions if you want extra visibility

## Suggested Dev.to cross-post blurb (for comments or series intro)

> Production data pipelines are defined by how they handle failure, not the happy path.
>
> This walkthrough covers incremental checkpoints, idempotent loads, medallion layering with dbt, and Airflow orchestration with explicit failure modes.
>
> Source code: https://github.com/br413/production-data-pipeline

---

## Article body (also in building-production-data-pipeline.md)

> **Portfolio:** [br413.github.io](https://br413.github.io/) · **Source code:** [production-data-pipeline](https://github.com/br413/production-data-pipeline)

Operational analytics breaks when pipelines silently drop records, re-process duplicates, or push schema drift into dashboards. This article walks through a **production-style data pipeline** pattern: incremental API ingestion, explicit checkpoints, medallion-style layering, and orchestration with Apache Airflow and dbt.

> Full source code: [production-data-pipeline](https://github.com/br413/production-data-pipeline)

## The problem

Most demo pipelines assume APIs are always available, schemas never change, and re-runs are harmless. Production systems need:

- **Incremental loading** — fetch only new data since the last successful run
- **Idempotency** — duplicate deliveries must not inflate metrics
- **Separable layers** — raw landing, validated staging, and curated aggregates tested independently
- **Operational visibility** — know when a run ingested zero records or failed mid-page

## Architecture overview

```text
External API
    ↓
Ingestion connector (incremental, idempotent)
    ↓
Raw / bronze layer (PostgreSQL landing)
    ↓
Validated / silver layer (dbt stg_events)
    ↓
Curated / gold layer (fct_daily_event_metrics)
    ↓
Downstream consumers
```

Each boundary has a clear responsibility. Ingestion handles pagination and cursor advancement. Bronze stores append-only raw events. dbt owns transformation logic and data tests. Airflow schedules and retries the workflow.

## Key design decisions

| Decision | Why |
|----------|-----|
| Cursor + processed-ID checkpoints | Timestamp watermarks fail when APIs return out-of-order events |
| PostgreSQL bronze landing | DB constraints enforce idempotency; matches warehouse patterns |
| Quality gates before bronze | Block bad records at ingestion, not after they pollute raw history |
| dbt for silver/gold | Declarative transforms with built-in tests and clearer ownership |

## Incremental ingestion with checkpoints

The ingestion connector tracks cursor position in a **checkpoint store**. Two options:

1. **File-based checkpoints** — lightweight for local development
2. **PostgreSQL metadata tables** — durable for shared environments

```bash
# Local run with file checkpoint
python -m src.pipeline.ingestion \
  --source sample \
  --checkpoint .checkpoints/sample.json

# Production-style run with PostgreSQL
python -m src.pipeline.ingestion \
  --source sample \
  --storage postgres \
  --pipeline-name sample-ingestion
```

Key behaviors:

- **Cursor advances only after successful page processing** — a timeout mid-page does not skip data
- **Stable event IDs suppress duplicates** — re-delivered events are ignored via a processed-ID set
- **Quality gates run before landing** — schema validation, required fields, and freshness checks block bad records from bronze

## Bronze, silver, and gold with dbt

After landing in `bronze.raw_events`, dbt builds two layers:

| Layer | Model | Purpose |
|-------|-------|---------|
| Silver | `stg_events` | Validated staging with typed columns |
| Gold | `fct_daily_event_metrics` | Daily aggregates for analytics |

```bash
python -m src.pipeline.run_dbt --target dev
```

dbt tests enforce uniqueness, not-null constraints, and source freshness. When a test fails, the pipeline stops — downstream consumers never see broken data.

This is the **medallion architecture** in miniature: raw → validated → curated, each layer independently testable.

## Orchestration with Airflow

The `production_sample_ingestion` DAG runs two tasks:

1. **`ingest_sample_events`** — Python ingestion into bronze
2. **`run_dbt_models`** — dbt run + test for silver and gold

Default retry policy: 2 retries with a 5-minute delay. For local testing:

```bash
airflow dags test production_sample_ingestion 2026-07-14
```

## Failure modes and mitigations

| Failure | Mitigation |
|---------|------------|
| Duplicate delivery | Processed-ID set suppresses re-ingestion |
| Partial page read | Checkpoint advances only after full page success |
| API timeout | Airflow retry + documented manual rerun |
| Schema drift | Python quality gate blocks landing; dbt tests catch transform issues |
| dbt test failure | DAG stops before downstream use |
| Zero-record success | Webhook alerts for empty ingestion runs |

Document these in an operations runbook. Pipelines that cannot be recovered at 2 AM are not production-ready.

## Observability: metrics and alerts

Recent additions to the project include:

- **Structured ingestion summary metrics** — records fetched, inserted, skipped per run
- **Webhook alerts** for zero-record runs and Airflow task failures
- **Local validation script** (`scripts/check.ps1`) for pre-commit confidence

Observability is not optional. A pipeline that runs successfully but ingests zero records is often worse than one that fails loudly.

## What I would do differently at scale

This portfolio project targets a single API source and PostgreSQL landing. In a larger platform I would add:

- **Dead-letter queue** for records that fail quality gates
- **Schema registry** or contract versioning for API drift
- **Lineage tracking** from source through gold (see my [cloud-lakehouse-blueprint](https://github.com/br413/cloud-lakehouse-blueprint))
- **Separate quality observability layer** (see [data-quality-observability](https://github.com/br413/data-quality-observability))

## Try it yourself

```bash
git clone https://github.com/br413/production-data-pipeline.git
cd production-data-pipeline
python -m venv .venv
source .venv/bin/activate  # Windows: .\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
pytest
docker compose up -d
python -m src.pipeline.ingestion --source sample --storage postgres --pipeline-name sample-ingestion
python -m src.pipeline.run_dbt --target dev
```

The repo includes architecture docs, ADRs, CI with PostgreSQL service containers, and a [v0.1.0 release](https://github.com/br413/production-data-pipeline/releases/tag/v0.1.0).

## Summary

Production data pipelines are defined by how they handle failure, not how they handle the happy path. Incremental checkpoints, idempotent loads, medallion layering, and testable transformation boundaries give you a foundation that scales from portfolio projects to real cloud data platforms.

---

**Related projects**

- [data-quality-observability](https://github.com/br413/data-quality-observability) — contract-driven quality checks
- [cloud-lakehouse-blueprint](https://github.com/br413/cloud-lakehouse-blueprint) — medallion lakehouse with Terraform
- [Portfolio site](https://br413.github.io/) · [GitHub](https://github.com/br413) — more data engineering work

If this helped, **star the repo** on GitHub or leave a comment — I am interested in feedback from other data engineers and platform architects building similar systems.
