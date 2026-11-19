# Jagadish Reddy — React website

This is the **editable React source project** (JSX + CSS). The matching ready-to-open website is at the ZIP's top-level `index.html`.

## Open without installing anything

Go up one directory and **double-click `index.html`**. It runs React locally and does not require internet or npm.

## Edit / develop in VS Code

1. Open this `react-source` folder in VS Code.
2. Install Node.js if needed.
3. In Terminal, run `npm install` followed by `npm run dev`.
4. Open the address Vite prints (normally http://localhost:5173).
5. Edit `src/App.jsx` to change text, sections, projects or links.
6. Edit `src/App.css` for all colours, background and photo sizes.
7. After editing, run `npm run build:offline` to regenerate the top-level, double-clickable `index.html` and its compiled JavaScript.

## Photo styling

Desktop `.portrait { width: 248px; aspect-ratio: 675/875 }`. Mobile photo widths are 205px / 191px. The image uses `object-fit: contain` to prevent cropping and stretching.

## Contents

- `src/App.jsx` — complete React UI and interaction logic (navigation and projects filter)
- `src/App.css` — full responsive theme and photo styling
- `src/main.jsx` — React application entry
- `public/assets` — original photo, résumé and favicon
- `scripts/build-offline.mjs` — offline React compilation script
- `vendor` — bundled React runtime for the offline build

The UI doesn't display “Digital Portfolio”. The title in the browser tab is “Jagadish Reddy | Software Engineer”.
