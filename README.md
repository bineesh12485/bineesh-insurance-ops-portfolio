# Bineesh P B: Insurance Operations Portfolio

Suggested GitHub repository name: `bineesh-insurance-ops-portfolio`

## Overview
A single-page portfolio for a general insurance operations manager. The hero is an interactive policy lifecycle (issuance to renewal), and the work section is written as operations case studies rather than code projects. All content comes from the CV and LinkedIn profile; no metrics were invented.

## Tech stack
Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS 3. Fonts: Source Serif 4 and IBM Plex Sans via `next/font`. Light and dark themes. No API keys or environment variables.

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000. The first run needs internet access to download the Google fonts.

## Customize
- All text lives in `data/profile.ts`: contact details, lifecycle stages, case studies, experience, skills and credentials.
- Replace `public/Bineesh_P_B_CV.pdf` to update the CV download.
- Colors are CSS variables at the top of `app/globals.css`.

## Items to verify in the source documents
- Team size: the LinkedIn summary says 7 and the Vizza entry says 10. The site says 7 at Everguard only.
- Titles differ between CV and LinkedIn (Digit: Operations Manager vs Senior Associate to Deputy Manager; Bajaj Allianz Bancassurance: Sales Manager vs Relationship Manager). The site uses the LinkedIn progression for Digit and the CV title for Bajaj.
- The LinkedIn entry for Everguard contains a placeholder, "[add metric]". It was left out. Add the real figure to `data/profile.ts` if available.
