#!/usr/bin/env bash
# Rebuilds public/share/*.png. Run after adding a guide or topic, then commit the new images.
set -euo pipefail
cd "$(dirname "$0")/.."
npx esbuild scripts/cards-data.ts --bundle --platform=node --format=esm --outfile=/tmp/cards-data.mjs --log-level=error
node /tmp/cards-data.mjs | python3 scripts/make-share-cards.py
