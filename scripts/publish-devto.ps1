# Publish article to Dev.to
# Usage: $env:DEVTO_API_KEY = "your-key"; .\scripts\publish-devto.ps1

param(
    [string]$ApiKey = $env:DEVTO_API_KEY
)

if (-not $ApiKey) {
    Write-Error "Set DEVTO_API_KEY environment variable or pass -ApiKey"
    Write-Host "Get your key: https://dev.to/settings/extensions -> DEV Community API Keys"
    exit 1
}

$articlePath = Join-Path $PSScriptRoot "..\articles\building-production-data-pipeline.md"
$content = Get-Content $articlePath -Raw

# Strip YAML front matter
if ($content -match '(?s)^---\r?\n.*?\r?\n---\r?\n(.*)$') {
    $bodyMarkdown = $Matches[1].Trim()
} else {
    $bodyMarkdown = $content.Trim()
}

# Add portfolio cross-link at top
$bodyMarkdown = @"
> **Portfolio:** [br413.github.io](https://br413.github.io/) · **Source code:** [production-data-pipeline](https://github.com/br413/production-data-pipeline)

$bodyMarkdown
"@

$payload = @{
    article = @{
        title          = "Building a Production Data Pipeline with Incremental Loading and dbt"
        body_markdown  = $bodyMarkdown
        published      = $true
        tags           = @("dataengineering", "python", "dbt", "airflow", "etl")
        canonical_url  = "https://github.com/br413/production-data-pipeline"
        description    = "A practical walkthrough of incremental API ingestion, checkpoint stores, bronze/silver/gold layering, and Airflow orchestration."
    }
} | ConvertTo-Json -Depth 5

$response = Invoke-RestMethod `
    -Uri "https://dev.to/api/articles" `
    -Method Post `
    -Headers @{ "api-key" = $ApiKey; "Content-Type" = "application/json" } `
    -Body $payload

Write-Host "Published: $($response.url)"
Write-Host "Article ID: $($response.id)"
$response | ConvertTo-Json -Depth 3 | Out-File (Join-Path $PSScriptRoot "..\articles\devto-response.json")
Write-Host "Response saved to articles/devto-response.json"

& (Join-Path $PSScriptRoot "update-devto-link.ps1") -ArticleUrl $response.url
Write-Host "Run: git add index.html; git commit -m 'docs: link Dev.to article'; git push"
