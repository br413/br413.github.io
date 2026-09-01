# Apply pending Dev.to updates (retrospective content + cover images for articles #2-#4)
# Requires: $env:DEVTO_API_KEY
#
# Usage:
#   $env:DEVTO_API_KEY = "your-key"
#   .\scripts\apply-devto-updates.ps1

param(
    [string]$ApiKey = $env:DEVTO_API_KEY
)

if (-not $ApiKey) {
    Write-Error "Set DEVTO_API_KEY environment variable"
    Write-Host "Get your key: https://dev.to/settings/extensions"
    exit 1
}

$covers = @(
    @{ Article = "contracts";      Id = 4455596 },
    @{ Article = "retrospective";  Id = 4456669 },
    @{ Article = "versioning";     Id = 4502866 }
)

Write-Host "Updating OSS retrospective article body..."
& (Join-Path $PSScriptRoot "update-devto-article.ps1") -Article retrospective -ArticleId 4456669 -ApiKey $ApiKey

foreach ($item in $covers) {
    Write-Host "Setting cover for $($item.Article)..."
    & (Join-Path $PSScriptRoot "set-devto-cover.ps1") -Article $item.Article -ArticleId $item.Id -ApiKey $ApiKey
}

Write-Host ""
Write-Host "Done. Verify on Dev.to:"
Write-Host "  https://dev.to/bobby_ray_581732c715283b2/what-i-learned-contributing-to-prefect-dbt-and-airflow-an-honest-oss-retrospective-1ki8"
