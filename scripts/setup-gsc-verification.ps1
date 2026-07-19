# Add Google Search Console HTML tag verification to index.html
# Usage: .\scripts\setup-gsc-verification.ps1 -VerificationCode "abc123..."

param(
    [Parameter(Mandatory = $true)]
    [string]$VerificationCode
)

$indexPath = Join-Path $PSScriptRoot "..\index.html"
$html = Get-Content $indexPath -Raw

$metaTag = "  <meta name=`"google-site-verification`" content=`"$VerificationCode`">"

if ($html -match 'google-site-verification') {
    $html = $html -replace '<meta name="google-site-verification" content="[^"]*">', $metaTag
} else {
    $html = $html -replace '(<meta charset="UTF-8">)', "`$1`n$metaTag"
}

Set-Content $indexPath $html -NoNewline
Write-Host "Added verification meta tag to index.html"
Write-Host "Commit and push, then click Verify in Google Search Console."
