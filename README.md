# Balamugundan I — Portfolio (Vanilla HTML / CSS / JS)

No build step, no npm install — just three files:

- `index.html` — all markup
- `style.css` — all styling and design tokens
- `script.js` — all data + interactivity (intro, cursor, nav, particles,
  projects, achievements gallery, contact)

## Run it

Open `index.html` directly in a browser, or serve it locally so relative
paths and clipboard copy work reliably:

```bash
npx serve .
# or
python3 -m http.server 8000
```

## Where to edit things

- **Projects** → top of `script.js`, the `projects` array (screenshots go in
  `assets/projects/`)
- **Achievements & photos** → the `achievements` array in `script.js`
  (photos go in `assets/achievements/first-prize/`, `second-prize/`,
  `third-prize/` — see the README inside each folder for exact filenames)
- **Skills** → the `skillCategories` array in `script.js`
- **Resume** → `Balamugundan_Resume.pdf` — edit this file directly whenever your resume
  changes. The site links straight to it for both instant download and online viewing.
- **Colors, fonts, spacing** → the `:root` block at the top of `style.css`

## Notes

- Reduced-motion is respected; the custom cursor and particle drift are
  disabled on touch devices.
- The background particle field is plain canvas 2D — no Three.js or other
  runtime dependency required.
- Fonts (Fraunces, Inter, Space Mono) load from Google Fonts via `<link>`
  tags in `index.html` — swap or self-host if you need to work offline.
- No content was invented beyond what was provided — anything unspecified
  (project links, second/third-prize details, degree year) is left as a
  clearly marked placeholder.
