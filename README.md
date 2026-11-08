# ASTRA-2026 — Official Event Website

Website for **ASTRA-2026**, an academic competition conducted by **Rural Development Society (RDS), Mudalgi** on the occasion of Children's Day.

**Event:** 15 November 2026 (Sunday) · RDS Campus, Laxmi Nagar, Near BEO Office, Mudalgi - 591312

## Stack

React 19 · Vite 6 · JavaScript · CSS3 · lucide-react icons · Google Forms (registration) · Vercel hosting. No backend — Google Forms saves responses straight into its linked Google Sheet.

## Quick start

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build -> dist/
npm run preview
```

## Edit all content in ONE file

**`src/data/content.js`** holds every piece of copy: event details, eligibility, prizes, exam pattern, instructions, contacts and links. Search for `[ADD:` marks — those are details still pending (reporting time, phone/email, payment instructions, EVS marks, Grade IX–X pattern).

### Registration form

1. Create the Google Form (name, grade, school, board, phone...).
2. Responses automatically land in a linked Google Sheet (Responses tab → Link to Sheets).
3. Paste the form URL into `CONTENT.links.registration`.
4. Every "Register Now" button on the site picks it up automatically.

## Deploy to Vercel

```bash
npx vercel
```
Or: push to GitHub → Vercel → Import project → Framework preset **Vite** → Deploy. `vercel.json` ships with rewrites and security headers already configured.

## Notes

- Fonts are loaded from Google Fonts (Fraunces + Manrope) in `index.html`.
- Countdown target in `CONTENT.event.dateISO` — adjust start time once announced.
- Instructions list is a draft; confirm the official list before launch.
