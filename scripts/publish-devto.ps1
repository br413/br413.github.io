# Publish article to Dev.to
# Usage:
#   $env:DEVTO_API_KEY = "your-key"
#   $env:DEVTO_COVER_IMAGE = "https://optional-cover-image.png"  # optional
#   .\scripts\publish-devto.ps1                          # article #1 (default)
#   .\scripts\publish-devto.ps1 -Article contracts       # article #2
#   .\scripts\publish-devto.ps1 -Article retrospective  # article #3

param(
    [ValidateSet("pipeline", "contracts", "retrospective")]
    [string]$Article = "pipeline",
    [string]$ApiKey = $env:DEVTO_API_KEY,
    [string]$CoverImage = $env:DEVTO_COVER_IMAGE
)

if (-not $ApiKey) {
    Write-Error "Set DEVTO_API_KEY environment variable or pass -ApiKey"
    Write-Host "Get your key: https://dev.to/settings/extensions -> DEV Community API Keys"
    exit 1
}

$articleFiles = @{
    pipeline       = "building-production-data-pipeline.md"
    contracts      = "data-quality-contracts-production-pipelines.md"
    retrospective  = "oss-upstream-retrospective.md"
}

$defaultTags = @{
    pipeline       = @("dataengineering", "python", "dbt", "airflow")
    contracts      = @("dataengineering", "python", "dbt", "dataquality")
    retrospective  = @("dataengineering", "opensource", "career", "airflow")
}

$articleFile = $articleFiles[$Article]
$articlePath = Join-Path $PSScriptRoot "..\articles\$articleFile"
if (-not (Test-Path $articlePath)) {
    Write-Error "Article file not found: $articlePath"
    exit 1
}

$content = Get-Content $articlePath -Raw
$tags = $defaultTags[$Article]

# Parse YAML front matter
$title = "Untitled"
$description = ""
$canonicalUrl = "https://github.com/br413"
$series = "Cloud Data Platform Patterns"

if ($content -match '(?s)^---\r?\n(.*?)\r?\n---\r?\n(.*)$') {
    $frontMatter = $Matches[1]
    $bodyMarkdown = $Matches[2].Trim()

    if ($frontMatter -match 'title:\s*"(.*)"') { $title = $Matches[1] }
    if ($frontMatter -match 'description:\s*"(.*)"') { $description = $Matches[1] }
    if ($frontMatter -match 'canonical_url:\s*(\S+)') { $canonicalUrl = $Matches[1] }
    if ($frontMatter -match 'series:\s*(.+)') { $series = $Matches[1].Trim() }
    if ($frontMatter -match 'cover_image:\s*(\S+)') { $CoverImage = $Matches[1] }
    if ($frontMatter -match 'tags:\s*(.+)') {
        $tagLine = $Matches[1].Trim()
        $parsedTags = $tagLine -split '[,\s]+' | Where-Object { $_ -ne "" }
        if ($parsedTags.Count -gt 0 -and $parsedTags.Count -le 4) {
            $tags = @($parsedTags)
        }
    }
} else {
    $bodyMarkdown = $content.Trim()
}

# Strip internal publish tooling references that should never appear on Dev.to
$bodyMarkdown = ($bodyMarkdown -split "`r?`n" | Where-Object {
    $_ -notmatch 'publish-devto\.ps1|DEVTO_API_KEY|DEVTO_COVER_IMAGE'
}) -join "`n"

# Portfolio cross-link is already in the article body; ensure it is present
if ($bodyMarkdown -notmatch 'br413\.github\.io') {
    $repoName = switch ($Article) {
        "contracts"     { "data-quality-observability" }
        "retrospective" { "br413" }
        default         { "production-data-pipeline" }
    }
    $repoLink = switch ($Article) {
        "contracts"     { "https://github.com/br413/data-quality-observability" }
        "retrospective" { "https://github.com/br413/br413" }
        default         { "https://github.com/br413/production-data-pipeline" }
    }
    $bodyMarkdown = @"
> **Portfolio:** [br413.github.io](https://br413.github.io/) · **Source code:** [$repoName]($repoLink)

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
Write-Host "  Article: $Article ($articleFile)"
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
$responseFile = "devto-response-$Article.json"
$response | ConvertTo-Json -Depth 3 | Out-File (Join-Path $PSScriptRoot "..\articles\$responseFile")
Write-Host "Response saved to articles/$responseFile"

& (Join-Path $PSScriptRoot "update-devto-link.ps1") -Article $Article -ArticleUrl $response.url

Write-Host ""
Write-Host "Next steps:"
Write-Host "  1. Open the Dev.to editor and upload a cover image if you skipped DEVTO_COVER_IMAGE"
Write-Host "  2. Pin the post on your Dev.to profile"
Write-Host "  3. git add index.html articles/$responseFile"
Write-Host "  4. git commit -m 'docs: link published Dev.to $Article article'"
Write-Host "  5. git push"
