#!/bin/bash
# Stop hook: don't let a session finish on a broken production build.
# Exit 2 blocks the stop and feeds the error back to Claude to fix.
set -e

# Nothing to gate until the app exists.
[ ! -f package.json ] && exit 0

# Skip if there's no build script.
grep -qE '"build"[[:space:]]*:' package.json || exit 0

# Skip if deps aren't installed yet (early scaffolding).
[ ! -d node_modules ] && exit 0

if ! npm run build >/tmp/build.log 2>&1; then
  echo "BUILD FAILED — not done yet. Fix these before finishing:" >&2
  tail -n 25 /tmp/build.log >&2
  exit 2
fi

exit 0
