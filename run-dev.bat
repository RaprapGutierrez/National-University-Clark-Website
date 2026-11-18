@echo off
setlocal

cd /d "%~dp0"
title National University Clark - Development Server

set "PORTABLE_NODE=C:\Users\wethe\AppData\Local\Temp\nu-clark-node\node-v24.13.0-win-x64"
if exist "%PORTABLE_NODE%\node.exe" (
    set "PATH=%PORTABLE_NODE%;%PATH%"
)

where node >nul 2>&1
if errorlevel 1 (
    echo Node.js was not found. Install Node.js or update PORTABLE_NODE in this file.
    pause
    exit /b 1
)

echo Starting National University Clark development server...
call npm.cmd run dev

if errorlevel 1 (
    echo.
    echo The development server could not start.
    pause
)
