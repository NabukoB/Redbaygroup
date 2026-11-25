#!/usr/bin/env bash
# Rebuilds public/downloads/building-contractor-checklist.pdf from lib/checklist.ts
set -euo pipefail
cd "$(dirname "$0")/.."
npx esbuild scripts/checklist-data.ts --bundle --platform=node --format=esm --outfile=/tmp/checklist-data.mjs --log-level=error
node /tmp/checklist-data.mjs | python3 scripts/make-checklist-pdf.py
