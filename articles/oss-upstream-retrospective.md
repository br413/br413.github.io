---
title: "What I Learned Contributing to Prefect, dbt, and Airflow (An Honest OSS Retrospective)"
published: false
description: "Two merges, four open PRs, and ninety days of building in public — what actually worked for upstream contributions as a senior data engineer."
tags: dataengineering, opensource, career, airflow
series: Cloud Data Platform Patterns
canonical_url: https://github.com/br413/br413
---

Portfolio repos prove you can build. **Upstream merges** prove you can collaborate with teams that maintain the tools production platforms run on. Over roughly ninety days I ran both tracks in parallel — portfolio releases, Dev.to writing, and OSS contributions to Prefect, dbt docs, Airflow, and Meltano — without backdating history or republishing private employer work.

> **Portfolio:** [br413.github.io](https://br413.github.io/) · **90-day plan:** [github.com/br413/br413](https://github.com/br413/br413/blob/main/docs/90-day-contribution-plan.md)

## Why upstream, not just portfolio

A strong GitHub profile needs more than greenfield demos:

- **Hiring signal** — judgment inside someone else's codebase, not only your own repo boundaries
- **Operational credibility** — fixes that reflect how platforms fail at 2 AM, not tutorial happy paths
- **Collaboration proof** — you can respond to review feedback and respect maintainer direction

My portfolio stack — [production-data-pipeline](https://github.com/br413/production-data-pipeline), [data-quality-observability](https://github.com/br413/data-quality-observability), [lakehouse-platform-starter](https://github.com/br413/lakehouse-platform-starter) — gave **real context** for what to fix upstream. The rule I followed: **comment on the issue before opening the PR.**

## What merged (and why those landed)

| PR | Project | Change | Why it merged |
|----|---------|--------|---------------|
| [Prefect #22500](https://github.com/PrefectHQ/prefect/pull/22500) | Prefect | Kubernetes readiness vs liveness probes | Small, verifiable ops detail; maintainer-aligned |
| [dbt docs #9606](https://github.com/dbt-labs/docs.getdbt.com/pull/9606) | dbt docs | Prefixed custom schema troubleshooting | Deployment pitfall many teams hit silently |

**Pattern:** documentation and operational clarity beat drive-by feature PRs for early upstream contributions. Both changes were easy to review, tied to real production confusion, and did not require deep codebase archaeology.

## What's still open (and what that teaches)

As of mid-August 2026, four PRs remain in flight:

| PR | Status | Lesson |
|----|--------|--------|
| [Airflow #71158](https://github.com/apache/airflow/pull/71158) | Approved — needs second reviewer | Merge policy matters as much as code quality on large projects |
| [dbt docs #9781](https://github.com/dbt-labs/docs.getdbt.com/pull/9781) | Awaiting review | Issue-linked docs fixes still wait on maintainer bandwidth |
| [Meltano #10253](https://github.com/meltano/meltano/pull/10253) | Awaiting review | Tie PRs to maintainer-requested issues ([#6289](https://github.com/meltano/meltano/issues/6289)) |
| [Prefect #22533](https://github.com/PrefectHQ/prefect/pull/22533) | Changes requested → addressed | Automated review catches doc accuracy gaps; respond precisely |
| [Airflow #70171](https://github.com/apache/airflow/pull/70171) | Open | Provider PRs need patience; keep CI green, don't churn |

**Airflow [#70185](https://github.com/apache/airflow/pull/70185)** was closed when the maintainer wanted a proper OpenLineage facet instead of my initial approach. That was the right outcome — don't force the wrong abstraction to keep a PR open.

## What I would do differently

1. **Fewer open PRs at once** — after ~4 in flight, review bandwidth becomes the bottleneck, not ideas
2. **Rebase early** — Airflow moves fast; waiting weeks breaks CI on unrelated upstream changes
3. **Portfolio first, then upstream narrative** — shipping quarantine/DLQ in [production-data-pipeline v0.2.1](https://github.com/br413/production-data-pipeline/releases/tag/v0.2.1) made the [data quality contracts article](https://dev.to/bobby_ray_581732c715283b2/data-quality-contracts-in-production-pipelines-without-a-separate-platform-team-f3) credible
4. **Close gracefully** — a withdrawn or closed PR with a clear maintainer reason is better than a stale open one

## The weekly rhythm that worked

| Day | Activity |
|-----|----------|
| **Mon** | One upstream comment + one small portfolio commit (docs/tests) |
| **Wed** | OSS PR work, rebase, or CI fix |
| **Fri** | README/ADR cross-link, plan update, or writing |

**Minimum bar:** three public commit days per week. Consistency beats hero days for both the contribution graph and maintainer trust.

## How portfolio and OSS reinforce each other

```text
production-data-pipeline (ingestion + quarantine)
    ↔ data-quality-observability (contracts)
    ↔ Dev.to articles (public narrative)
    ↔ upstream fixes (Prefect / Airflow / dbt / Meltano ops + docs)
```

Each layer answers a different reviewer question:

- **Portfolio** — Can you design and ship a production-style stack?
- **Writing** — Can you explain trade-offs clearly?
- **Upstream** — Can you improve tools other teams already depend on?

## Honest scorecard (mid-plan)

| Outcome | Target | Status |
|---------|--------|--------|
| Upstream merges | 5+ | **2** — in progress |
| Dev.to articles | 2 | **2** ✓ |
| Portfolio release | v0.2.1 + quarantine | ✓ |
| Green contribution weeks | 10+ consecutive | On track with Mon/Wed/Fri rhythm |

The merge count is below target. That is worth stating plainly. The work is still credible because the open PRs are real, issue-linked, and actively maintained — not abandoned drive-bys.

## Rules I kept (and recommend)

1. **Never backdate commits** — the activity graph reflects real work only
2. **Comment before PR** on upstream issues
3. **Prefer data-platform repos** (dbt, Airflow, Prefect, Meltano) over unrelated forks
4. **One meaningful merge beats five cosmetic self-PRs**
5. **Profile, portfolio site, and resume must agree**

## If you're starting a similar push

Pick one upstream project you already use in production. Find a docs gap or ops footgun you have actually hit. Comment on the issue. Open a small PR. Ship one portfolio release that gives you standing to write about the same problem space.

Then repeat on a weekly cadence for ninety days.

---

**Related writing**

- [Building a Production Data Pipeline with Incremental Loading and dbt](https://dev.to/bobby_ray_581732c715283b2/building-a-production-data-pipeline-with-incremental-loading-and-dbt-2e2c)
- [Data Quality Contracts in Production Pipelines](https://dev.to/bobby_ray_581732c715283b2/data-quality-contracts-in-production-pipelines-without-a-separate-platform-team-f3)
- [Portfolio site](https://br413.github.io/) · [GitHub profile](https://github.com/br413)

If this helped, leave a comment — I am interested in how other data engineers approach upstream contributions without turning it into performance theater.
