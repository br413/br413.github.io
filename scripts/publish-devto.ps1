# Publish article to Dev.to
# Usage:
#   $env:DEVTO_API_KEY = "your-key"
#   $env:DEVTO_COVER_IMAGE = "https://optional-cover-image.png"  # optional
#   .\scripts\publish-devto.ps1

param(
    [string]$ApiKey = $env:DEVTO_API_KEY,
    [string]$CoverImage = $env:DEVTO_COVER_IMAGE
)

if (-not $ApiKey) {
    Write-Error "Set DEVTO_API_KEY environment variable or pass -ApiKey"
    Write-Host "Get your key: https://dev.to/settings/extensions -> DEV Community API Keys"
    exit 1
}

$articlePath = Join-Path $PSScriptRoot "..\articles\building-production-data-pipeline.md"
$content = Get-Content $articlePath -Raw

# Parse YAML front matter
$title = "Building a Production Data Pipeline with Incremental Loading and dbt"
$description = "How to design idempotent API ingestion, checkpoint recovery, medallion layering, and Airflow orchestration with explicit failure modes."
$canonicalUrl = "https://github.com/br413/production-data-pipeline"
$series = "Cloud Data Platform Patterns"
$tags = @("dataengineering", "python", "dbt", "airflow")

if ($content -match '(?s)^---\r?\n(.*?)\r?\n---\r?\n(.*)$') {
    $frontMatter = $Matches[1]
    $bodyMarkdown = $Matches[2].Trim()

    if ($frontMatter -match 'title:\s*"(.*)"') { $title = $Matches[1] }
    if ($frontMatter -match 'description:\s*"(.*)"') { $description = $Matches[1] }
    if ($frontMatter -match 'canonical_url:\s*(\S+)') { $canonicalUrl = $Matches[1] }
    if ($frontMatter -match 'series:\s*(.+)') { $series = $Matches[1].Trim() }
    if ($frontMatter -match 'cover_image:\s*(\S+)') { $CoverImage = $Matches[1] }
} else {
    $bodyMarkdown = $content.Trim()
}

# Portfolio cross-link is already in the article body; ensure it is present
if ($bodyMarkdown -notmatch 'br413\.github\.io') {
    $bodyMarkdown = @"
> **Portfolio:** [br413.github.io](https://br413.github.io/) · **Source code:** [production-data-pipeline](https://github.com/br413/production-data-pipeline)

$bodyMarkdown
"@
}

$articlePayload = @{
    title          = $title
    body_markdown  = $bodyMarkdown
    published      = $true
    tags           = $tags
    canonical_url  = $canonicalUrl
    description    = $description
    series         = $series
}

if ($CoverImage) {
    $articlePayload.main_image = $CoverImage
}

$payload = @{ article = $articlePayload } | ConvertTo-Json -Depth 10 -Compress
$payloadBytes = [System.Text.Encoding]::UTF8.GetBytes($payload)

Write-Host "Publishing to Dev.to..."
Write-Host "  Title: $title"
Write-Host "  Tags: $($tags -join ', ')"
Write-Host "  Series: $series"
if ($CoverImage) {
    Write-Host "  Cover: $CoverImage"
} else {
    Write-Host "  Cover: (none - add in Dev.to editor after publish, or set DEVTO_COVER_IMAGE)"
}

$response = Invoke-RestMethod `
    -Uri "https://dev.to/api/articles" `
    -Method Post `
    -Headers @{
        "api-key"      = $ApiKey
        "Content-Type" = "application/json; charset=utf-8"
        "Accept"       = "application/vnd.forem.api-v1+json"
        "User-Agent"   = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    } `
    -Body $payloadBytes

if (-not $response.url) {
    Write-Error "Dev.to publish succeeded but no article URL was returned."
    exit 1
}

Write-Host ""
Write-Host "Published: $($response.url)"
Write-Host "Article ID: $($response.id)"
$response | ConvertTo-Json -Depth 3 | Out-File (Join-Path $PSScriptRoot "..\articles\devto-response.json")
Write-Host "Response saved to articles/devto-response.json"

& (Join-Path $PSScriptRoot "update-devto-link.ps1") -ArticleUrl $response.url

Write-Host ""
Write-Host "Next steps:"
Write-Host "  1. Open the Dev.to editor and upload a cover image if you skipped DEVTO_COVER_IMAGE"
Write-Host "  2. Pin the post on your Dev.to profile"
Write-Host "  3. git add index.html articles/devto-response.json"
Write-Host "  4. git commit -m 'docs: link published Dev.to pipeline article'"
Write-Host "  5. git push"
