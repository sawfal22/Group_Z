# Run after opening D:\projects\Group_z in Cursor (not the OneDrive folder).
$path = Join-Path $env:USERPROFILE "OneDrive\Documents\GitHub\Group_Z"
if (-not (Test-Path -LiteralPath $path)) {
    Write-Host "OneDrive clone already removed: $path"
    exit 0
}
Remove-Item -LiteralPath $path -Recurse -Force
if (Test-Path -LiteralPath $path) {
    Write-Error "Could not remove $path. Close Cursor completely, reopen D:\projects\Group_z, run again."
    exit 1
}
Write-Host "Removed: $path"
