# CaseMaster — Strategy & PM Case Dossier

An independent, calm editorial Consulting & Product Management case study coaching app packed with **147 solved case dossiers** (RCA, GTM, Product Design, Metrics, Improvement, Critique, Pricing, Profitability, Market Entry, Growth, M&A, and Unconventional), **20 Industry Primers**, **8 App User Flows**, **60 Flashcards**, **45 Case Reflex Drills**, Guided Coach, and Mock Interview Studio.

---

## Highlights & Keyboard Workflow

- **Independent Standalone PWA (`id: /case-master-pro/`)**: Installs cleanly as its own standalone desktop/mobile app on GitHub Pages without conflicting with sibling apps on the same `github.io` domain.
- **Collapsible Left Rail**: Click the CaseMaster logo in the sidebar or topbar — or press `[` / `Ctrl+B` — to fold or expand the navigation rail.
- **Command Palette (`Ctrl+K`)**: Jump immediately to any of the 147 cases, 6 views, or workspace actions.
- **Calm Progressive Disclosure**:
  - **Warm Paper** default theme (`Midnight Slate` dark option via `Shift+T`) with **11.5px** comfortable editorial typography.
  - **Zen Reading Mode** (`Shift+D`), **Brief vs Full vs Step-by-Step** dossier reader (`p` / `n`), single-step **Approach Guide** (`←` / `→`), **j** / **k** library navigation (`m` mastered, `s` save), **Flashcards** (`Space` / `f`, `g`, `r`), and **60s Reflex Drills** (`A`–`D` or `1`–`4`).
  - Press `?` anytime to view the full keyboard shortcuts guide.

---

## Option 1: Push & Host on GitHub Pages (Free)

This folder (`casemaster-app`) is a Git repository configured with `.github/workflows/deploy-pages.yml`:

1. Double-click **`push-to-github.bat`** (or run `./push-to-github.ps1` in PowerShell) to commit and push updates to `main`.
2. On GitHub, go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
3. If you previously installed GuessMaster Pro and the older CaseMaster manifest on the same `github.io` origin before the `/case-master-pro/` ID split, refresh both tabs cleanly (or uninstall any merged shortcut once and reinstall each from its address bar) so Chrome registers both standalone apps separately.

---

## Option 2: Host on Vercel

Push to GitHub and import the repository on [Vercel](https://vercel.com/new) (`vercel.json` is pre-configured), or deploy with `npx vercel --prod`.

---

## Running Locally

- Open **`index.html`** directly in Chrome/Edge (works offline over `file://`), or run `npx serve .` for local HTTP + PWA testing.
