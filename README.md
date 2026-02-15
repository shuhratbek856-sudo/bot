# CodeStudio Fullstack Starter

CodeStudio is a fullstack SaaS studio prototype with:
- Independent landing page and dashboard UX
- React frontend
- Express backend
- Google OAuth entry endpoints
- Built-in assistant chat endpoint

## Quick start
1. `npm install`
2. `cp .env.example .env`
3. `npm run dev`

## Architecture
- `apps/frontend`: React app
- `apps/backend`: API server
- `packages/ui`: shared UI helpers


Repository note: this scaffold is kept at exactly 150 tracked files (including hidden files like `.gitignore`).

## Design asset packs
- Added 50 dedicated design token files under `apps/frontend/src/design`
  - `colors/` (10 files)
  - `typography/` (10 files)
  - `spacing/` (10 files)
  - `components/` (10 files)
  - `effects/` (10 files)

## Download as one file
If you cannot download many files one-by-one, create a single archive:

```bash
bash scripts/create-download-bundle.sh
```

After running, download the generated file from `dist/` (example: `dist/codestudio-YYYYMMDD-HHMMSS.tar.gz`).

## Language rule
All source code, comments, UI labels, and documentation are maintained in English only.
