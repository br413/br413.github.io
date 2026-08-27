---
title: "Contract Versioning in Production Pipelines: Registry, CLI, and Run History"
published: false
description: "How a git-native contract registry, semver pins, and versioned run history make dataset quality auditable — without a separate platform team or schema registry service."
tags: dataengineering, python, dataquality, airflow
series: Cloud Data Platform Patterns
# Cover image: upload in Dev.to editor after publish
---

Dataset contracts are easy to write once. They are hard to **operate** when you cannot answer: which version failed, who pinned it, and whether the registry agrees with the YAML on disk.

This article closes the loop on [Data Quality Contracts in Production Pipelines](https://dev.to/bobby_ray_581732c715283b2/data-quality-contracts-in-production-pipelines-without-a-separate-platform-team-f3) — registry → CLI resolution → Airflow scheduling → versioned run history, with ingestion quarantine in [production-data-pipeline](https://github.com/br413/production-data-pipeline).

> **Portfolio:** [br413.github.io](https://br413.github.io/) · **Quality layer:** [data-quality-observability](https://github.com/br413/data-quality-observability) · **Ingestion:** [production-data-pipeline v0.2.1](https://github.com/br413/production-data-pipeline/releases/tag/v0.2.1)

## Why versioning matters at the dataset boundary

Row-level quarantine catches poison pills during API ingestion. Dataset contracts catch **schema drift, stale facts, and broken foreign keys** before promote.

Without versioning you get:

- A contract file changes; scheduled runs still report failures against an unknown baseline
- On-call cannot tell whether freshness regressed on **v1.0** or **v1.1**
- Reviewers cannot see breaking changes without diffing YAML by hand

A lightweight registry fixes discoverability and pins — without standing up Confluent Schema Registry for a portfolio-scale stack.

## Layer 1: File-based registry

`contracts/registry.yml` is the canonical catalog:

```yaml
contracts:
  orders:
    current: "1.0"
    path: orders.yml
  customers:
    current: "1.0"
    path: customers.yml
```

Semver policy (PATCH / MINOR / MAJOR) lives in [ADR 0002](https://github.com/br413/data-quality-observability/blob/main/docs/adr/0002-schema-registry-and-contract-versioning.md). Breaking changes require:

1. Major bump in the contract YAML
2. `current` update in the **same PR**
3. Entry in `contracts/CHANGELOG.md`

## Layer 2: CLI resolves by name

Operators no longer pass file paths:

```bash
python -m src.dqo.cli run \
  --contract orders \
  --data data/samples/orders.csv \
  --references data/samples
```

The CLI loads `registry.yml`, resolves `orders.yml`, and runs schema / null / freshness / RI checks.

## Layer 3: Airflow uses registry names

The `dqo_contract_checks` DAG runs registry-backed tasks:

```text
run_orders_checks    → --contract orders
run_customers_checks → --contract customers
```

Optional `DQO_WEBHOOK_URL` routes contract failures the same way ingestion alerts work in the pipeline repo.

## Layer 4: Versioned run history

Each run persists **which contract version was evaluated**:

```text
2026-07-14T10:00:00+00:00  run-id  v1.0  passed
```

On-call can correlate freshness regressions to a semver pin instead of guessing from git history.

## Layer 5: Cross-repo pins from ingestion

Ingestion quarantine and dataset contracts are separate boundaries. `production-data-pipeline` declares pins in config:

```yaml
pins:
  orders: orders@1.0
  customers: customers@1.0

dqo:
  project_root: ../data-quality-observability
```

This makes the full-stack demo config-driven — not buried in a README footnote.

## CI guards (the part teams skip)

Registry consistency runs in CI:

- Every registry path exists on disk
- `current` matches the contract YAML `version`
- CHANGELOG documents the active version
- PRs that bump `version` must update registry **and** CHANGELOG

```bash
python scripts/validate_registry.py
```

Skipping this step is how "silent schema drift" returns — with extra YAML files.

## How this fits the portfolio stack

```text
production-data-pipeline (ingestion + quarantine + contract pins)
    ↔ data-quality-observability (registry + CLI + history)
    ↔ Airflow DAGs (scheduled checks)
    ↔ Dev.to series (public narrative)
```

Each layer answers a different reviewer question:

- **Quarantine** — Can you isolate bad rows without aborting the batch?
- **Contracts** — Can you define dataset quality explicitly?
- **Versioning** — Can you operate those contracts over time?

## What I would add next

- Export landed tables to CSV/Parquet and wire dqo into the pipeline Airflow DAG after dbt
- `registry_revision` (git SHA) in run history for full audit trails
- One upstream merge on Airflow or dbt docs to balance portfolio depth with OSS signal

## Related writing

- [Building a Production Data Pipeline with Incremental Loading and dbt](https://dev.to/bobby_ray_581732c715283b2/building-a-production-data-pipeline-with-incremental-loading-and-dbt-2e2c)
- [Data Quality Contracts in Production Pipelines](https://dev.to/bobby_ray_581732c715283b2/data-quality-contracts-in-production-pipelines-without-a-separate-platform-team-f3)
- [Portfolio site](https://br413.github.io/) · [GitHub profile](https://github.com/br413)

If you operate contract versioning differently — Glue Registry, Data Contract CLI, or dbt exposures only — I am interested in how you draw the boundary between row-level and dataset-level gates.
