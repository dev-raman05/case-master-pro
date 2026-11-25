# CaseMaster Pro — Zero-to-Offer Case Study Prep Studio

An interactive, zero-dependency Consulting & Product Management case study coaching app packed with **147 solved cases** (RCA, GTM, Product Design, Metrics, Improvement, Critique, Pricing, Profitability, Market Entry, Growth, M&A, and Unconventional), **20 Industry Primers**, **8 App User Flows**, **60 Flashcards**, **45 Case Reflex Drills**, Guided Coach, and Timed Mock Workbench.

---

## Option 1: Push & Host on GitHub Pages (Free)

This folder (`casemaster-app`) is already initialized as a ready-to-push Git repository with `.github/workflows/deploy-pages.yml`!

1. Create a new empty repository on [GitHub](https://github.com/new) (e.g., `casemaster-pro` — do **not** initialize with README or `.gitignore`).
2. Double-click **`push-to-github.bat`** (or run `./push-to-github.ps1` in PowerShell) and paste your GitHub repo URL when prompted.
   Or run manually in PowerShell inside this folder:
   ```powershell
   git remote add origin https://github.com/YOUR_USERNAME/casemaster-pro.git
   git push -u origin main
   ```
3. On GitHub, go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions** — the included workflow deploys your site automatically on every push!

---

## Option 2: Host on Vercel (1-Click Auto-Deploy)

1. Push this folder to GitHub using the steps above.
2. Go to [Vercel](https://vercel.com/new), import your `casemaster-pro` GitHub repository, and click **Deploy** (no build step needed — `vercel.json` is pre-configured!).
   - Or deploy directly from your terminal:
     ```powershell
     npx vercel --prod
     ```

---

## Running Locally
- **Double-click `index.html`** directly in Chrome/Edge (works offline over `file://`), **OR**
- Run `npx serve .` for local HTTP + standalone PWA desktop install.
