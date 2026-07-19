# Update portfolio with published Dev.to article URL
# Usage: .\scripts\update-devto-link.ps1 -ArticleUrl "https://dev.to/br413/..."

param(
    [Parameter(Mandatory = $true)]
    [string]$ArticleUrl
)

$indexPath = Join-Path $PSScriptRoot "..\index.html"
$html = Get-Content $indexPath -Raw

$oldPattern = '<h3><a href="https://dev\.to/[^"]*">Building a Production Data Pipeline with Incremental Loading and dbt</a></h3>'
$newLink = "<h3><a href=`"$ArticleUrl`">Building a Production Data Pipeline with Incremental Loading and dbt</a></h3>"

if ($html -match 'Building a Production Data Pipeline with Incremental Loading and dbt') {
    $html = $html -replace '<h3><a href="[^"]*">Building a Production Data Pipeline with Incremental Loading and dbt</a></h3>', $newLink
    Set-Content $indexPath $html -NoNewline
    Write-Host "Updated index.html with Dev.to link: $ArticleUrl"
} else {
    Write-Error "Could not find Writing section article link in index.html"
    exit 1
}
