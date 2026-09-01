# Set cover image on an existing Dev.to article
# Usage:
#   $env:DEVTO_API_KEY = "your-key"
#   .\scripts\set-devto-cover.ps1 -Article contracts -CoverImage "https://raw.githubusercontent.com/br413/br413.github.io/main/assets/devto-cover-data-quality-contracts.png"

param(
    [ValidateSet("pipeline", "contracts", "retrospective", "versioning")]
    [string]$Article,
    [string]$ApiKey = $env:DEVTO_API_KEY,
    [string]$CoverImage,
    [string]$ArticleId
)

$articleIds = @{
    pipeline       = 4450000  # placeholder - resolved from response file if missing
    contracts      = 4455596
    retrospective  = 4456669
    versioning     = 4502866
}

$defaultCovers = @{
    pipeline       = "https://raw.githubusercontent.com/br413/br413.github.io/main/assets/devto-cover-production-pipeline.png"
    contracts      = "https://raw.githubusercontent.com/br413/br413.github.io/main/assets/devto-cover-data-quality-contracts.png"
    retrospective  = "https://raw.githubusercontent.com/br413/br413.github.io/main/assets/devto-cover-oss-retrospective.png"
    versioning     = "https://raw.githubusercontent.com/br413/br413.github.io/main/assets/devto-cover-contract-versioning.png"
}

if (-not $ApiKey) {
    Write-Error "Set DEVTO_API_KEY environment variable or pass -ApiKey"
    exit 1
}

if (-not $CoverImage) {
    $CoverImage = $defaultCovers[$Article]
}

if (-not $ArticleId) {
    $responseFile = Join-Path $PSScriptRoot "..\articles\devto-response-$Article.json"
    if ($Article -eq "pipeline") {
        $responseFile = Join-Path $PSScriptRoot "..\articles\devto-response.json"
    }
    if (Test-Path $responseFile) {
        $saved = Get-Content $responseFile -Raw | ConvertFrom-Json
        $ArticleId = $saved.id
    } else {
        $ArticleId = $articleIds[$Article]
    }
}

$payload = @{
    article = @{
        main_image = $CoverImage
    }
} | ConvertTo-Json -Depth 5 -Compress

$response = Invoke-RestMethod `
    -Uri "https://dev.to/api/articles/$ArticleId" `
    -Method Put `
    -Headers @{
        "api-key"      = $ApiKey
        "Content-Type" = "application/json; charset=utf-8"
        "Accept"       = "application/vnd.forem.api-v1+json"
        "User-Agent"   = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
    } `
    -Body ([System.Text.Encoding]::UTF8.GetBytes($payload))

Write-Host "Cover set for: $($response.url)"
Write-Host "  main_image: $($response.cover_image)"
