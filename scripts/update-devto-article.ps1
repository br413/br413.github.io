# Update an existing Dev.to article from local markdown (no Cursor/tooling text in body)
# Usage:
#   $env:DEVTO_API_KEY = "your-key"
#   .\scripts\update-devto-article.ps1 -Article pipeline -ArticleId 1234567
#   .\scripts\update-devto-article.ps1 -Article contracts -ArticleUrl "https://dev.to/..."

param(
    [ValidateSet("pipeline", "contracts", "retrospective", "versioning")]
    [string]$Article = "pipeline",
    [string]$ApiKey = $env:DEVTO_API_KEY,
    [string]$ArticleId,
    [string]$ArticleUrl
)

if (-not $ApiKey) {
    Write-Error "Set DEVTO_API_KEY environment variable or pass -ApiKey"
    exit 1
}

$articleFiles = @{
    pipeline       = "building-production-data-pipeline.md"
    contracts      = "data-quality-contracts-production-pipelines.md"
    retrospective  = "oss-upstream-retrospective.md"
    versioning     = "contract-versioning-production-pipelines.md"
}

$defaultTags = @{
    pipeline       = @("dataengineering", "python", "dbt", "airflow")
    contracts      = @("dataengineering", "python", "dbt", "dataquality")
    retrospective  = @("dataengineering", "opensource", "career", "airflow")
    versioning     = @("dataengineering", "python", "dataquality", "airflow")
}

$articlePath = Join-Path $PSScriptRoot "..\articles\$($articleFiles[$Article])"
$content = Get-Content $articlePath -Raw
$tags = $defaultTags[$Article]

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

$bodyMarkdown = ($bodyMarkdown -split "`r?`n" | Where-Object {
    $_ -notmatch 'publish-devto\.ps1|DEVTO_API_KEY|DEVTO_COVER_IMAGE'
}) -join "`n"

if (-not $ArticleId -and $ArticleUrl) {
    $articles = Invoke-RestMethod `
        -Uri "https://dev.to/api/articles/me?per_page=100" `
        -Headers @{
            "api-key" = $ApiKey
            "Accept"  = "application/vnd.forem.api-v1+json"
        }
    $match = $articles | Where-Object { $_.url -eq $ArticleUrl -or $_.canonical_url -eq $canonicalUrl } | Select-Object -First 1
    if (-not $match) {
        Write-Error "Could not find Dev.to article for URL: $ArticleUrl"
        exit 1
    }
    $ArticleId = $match.id
}

if (-not $ArticleId) {
    Write-Error "Pass -ArticleId or -ArticleUrl to identify the Dev.to post to update"
    exit 1
}

$payload = @{
    article = @{
        title         = $title
        body_markdown = $bodyMarkdown
        published     = $true
        tags          = $tags
        canonical_url = $canonicalUrl
        description   = $description
        series        = $series
    }
} | ConvertTo-Json -Depth 10 -Compress

$response = Invoke-RestMethod `
    -Uri "https://dev.to/api/articles/$ArticleId" `
    -Method Put `
    -Headers @{
        "api-key"      = $ApiKey
        "Content-Type" = "application/json; charset=utf-8"
        "Accept"       = "application/vnd.forem.api-v1+json"
    } `
    -Body ([System.Text.Encoding]::UTF8.GetBytes($payload))

Write-Host "Updated: $($response.url)"
