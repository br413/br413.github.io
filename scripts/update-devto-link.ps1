# Update portfolio with published Dev.to article URL
# Usage:
#   .\scripts\update-devto-link.ps1 -Article pipeline -ArticleUrl "https://dev.to/..."
#   .\scripts\update-devto-link.ps1 -Article contracts -ArticleUrl "https://dev.to/..."

param(
    [ValidateSet("pipeline", "contracts")]
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
        DraftPattern = '<h3><a href="[^"]*">Data Quality Contracts in Production Pipelines \(Without a Separate Platform Team\)</a>(?:\s*<span class="badge open">ready to publish</span>)?</h3>'
    }
}

$config = $articles[$Article]
$indexPath = Join-Path $PSScriptRoot "..\index.html"
$html = Get-Content $indexPath -Raw

$newLink = "<h3><a href=`"$ArticleUrl`">$($config.Title)</a></h3>"

if ($html -match [regex]::Escape($config.Title)) {
    $html = $html -replace $config.DraftPattern, $newLink
    if ($Article -eq "contracts") {
        $html = $html -replace '<p class="writing-meta">Publish with.*?contracts.*?</p>\s*', ''
    }
    Set-Content $indexPath $html -NoNewline
    Write-Host "Updated index.html with Dev.to link ($Article): $ArticleUrl"
} else {
    Write-Error "Could not find Writing section article link for '$($config.Title)' in index.html"
    exit 1
}
