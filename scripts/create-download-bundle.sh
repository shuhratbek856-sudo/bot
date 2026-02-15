#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
OUT_DIR="${ROOT_DIR}/dist"
STAMP="$(date +%Y%m%d-%H%M%S)"
ARCHIVE="${OUT_DIR}/codestudio-${STAMP}.tar.gz"

mkdir -p "${OUT_DIR}"

# Create a portable source bundle without VCS metadata and dependency folders.
tar \
  --exclude='.git' \
  --exclude='node_modules' \
  --exclude='dist' \
  -czf "${ARCHIVE}" \
  -C "${ROOT_DIR}" .

echo "Bundle created: ${ARCHIVE}"
