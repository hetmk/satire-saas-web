#!/bin/bash
# Installs dependencies at the start of a cloud session.
# Cloud-only: skips local runs so it doesn't slow your laptop.
set -e

# Only run in Claude Code on the web (cloud) sessions.
if [ "$CLAUDE_CODE_REMOTE" != "true" ]; then
  exit 0
fi

# Nothing to install until the Next.js app exists.
if [ ! -f package.json ]; then
  exit 0
fi

# Skip if deps already present (env cache may have them).
if [ -d node_modules ]; then
  exit 0
fi

npm install
exit 0
