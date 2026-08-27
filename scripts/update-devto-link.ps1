# Update portfolio with published Dev.to article URL
# Usage:
#   .\scripts\update-devto-link.ps1 -Article pipeline -ArticleUrl "https://dev.to/..."
#   .\scripts\update-devto-link.ps1 -Article versioning -ArticleUrl "https://dev.to/..."

param(
    [ValidateSet("pipeline", "contracts", "retrospective", "versioning")]
    [string]$Article = "pipeline",
    [Parameter(Mandatory = $true)]
    [string]$ArticleUrl
)

$articles = @{
    pipeline = @{
        Title = "Building a Production Data Pipeline with Incremental Loading and dbt"
        DraftPattern = '<h3><a href="[^"]*">Building a Production Data Pipeline with Incremental Loading and dbt</a>(?:\s*<span class="badge open">ready to publish</span>)?</h3>'
    }
    contracts = @{
        Title = "Data Quality Contracts in Production Pipelines (Without a Separate Platform Team)"
        DraftPattern = '<h3><a href="[^"]*">Data Quality Contracts in Production Pipelines \(Without a Separate Platform Team\)</a>(?:\s*<span class="badge open">(?:ready to publish|draft)</span>)?</h3>'
    }
    retrospective = @{
        Title = "What I Learned Contributing to Prefect, dbt, and Airflow (An Honest OSS Retrospective)"
        DraftPattern = '<h3><a href="[^"]*">What I Learned Contributing to Prefect, dbt, and Airflow \(An Honest OSS Retrospective\)</a>(?:\s*<span class="badge open">draft</span>)?</h3>'
    }
    versioning = @{
        Title = "Contract Versioning in Production Pipelines: Registry, CLI, and Run History"
        DraftPattern = '<h3><a href="[^"]*">Contract Versioning in Production Pipelines: Registry, CLI, and Run History</a>(?:\s*<span class="badge open">draft</span>)?</h3>'
    }
}

$config = $articles[$Article]
$indexPath = Join-Path $PSScriptRoot "..\index.html"
$html = Get-Content $indexPath -Raw

$newLink = "<h3><a href=`"$ArticleUrl`">$($config.Title)</a></h3>"

if ($html -match [regex]::Escape($config.Title)) {
    $html = $html -replace $config.DraftPattern, $newLink
    $html = $html -replace '<p class="writing-meta">.*?</p>\s*', ''
    $html = $html -replace '\s*<span class="badge open">(?:ready to publish|draft)</span>', ''
    Set-Content $indexPath $html -NoNewline
    Write-Host "Updated index.html with Dev.to link ($Article): $ArticleUrl"
} else {
    Write-Error "Could not find Writing section article link for '$($config.Title)' in index.html"
    exit 1
}
