#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
MCP_DIR="$(dirname "$SCRIPT_DIR")"
REPO_ROOT="$(dirname "$MCP_DIR")"
CONTENT_DIR="$MCP_DIR/content"

rm -rf "$CONTENT_DIR"
mkdir -p "$CONTENT_DIR"

for skill_dir in strategy-diagnostic strategy-map vrio-analysis environmental-radar market-position wardley-map culture-assessment first-principles-strategy playing-to-win pre-mortem protoloop-setup; do
  mkdir -p "$CONTENT_DIR/$skill_dir"
  cp "$REPO_ROOT/$skill_dir/SKILL.md" "$CONTENT_DIR/$skill_dir/"
done

cp "$REPO_ROOT/install/STRATEGY.md" "$CONTENT_DIR/"
cp "$REPO_ROOT/install/company-context.md" "$CONTENT_DIR/"

echo "Copied 11 skills + orchestrator + context template to $CONTENT_DIR"
