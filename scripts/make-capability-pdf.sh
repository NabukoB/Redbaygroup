#!/usr/bin/env bash
# Rebuilds public/downloads/redbay-capability-statement.pdf from lib/capability.ts
set -euo pipefail
cd "$(dirname "$0")/.."
npx esbuild scripts/capability-data.ts --bundle --platform=node --format=esm --outfile=/tmp/capability-data.mjs --log-level=error --alias:@=.
node /tmp/capability-data.mjs | python3 scripts/make-capability-pdf.py
