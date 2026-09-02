# Eltagwuide — Tajweed Learning Website

A clean, static front-end for an Arabic Tajweed (تجويد) learning site with lessons, quizzes, and simple account pages. Built as a client-side prototype (HTML, CSS, JavaScript) intended as the UI for a future learning platform and teacher/student flows.

موقع تعليمي لتعلم التجويد باللغة العربية، يتضمن دروسًا تفاعلية، اختبارات قصيرة، وصفحات تسجيل وتسجيل دخول.

---

## Stack
- **Language(s):** HTML, CSS, JavaScript
- **Framework / runtime:** Static frontend (Bootstrap for layout)
- **Notable libraries/assets included:** Bootstrap (local files), Font Awesome (local copy), Google Fonts

---

## What this repo contains (high level)
This repository is a static website project containing the UI and client-side logic for a Tajweed learning experience. It provides content pages (lessons), simple quizzes driven by JavaScript, and forms for registration/login intended to be connected to a backend later.

---

## How it's organized
Top-level structure (relevant entries):

```
Html/                # Site pages (entry points). Example files:
  Home.html          # Landing / home page
  TajweedLessons.html# Lessons with quizzes and sidebar navigation
  Login.html         # Login form (client-side)
  Registration.html  # Registration form (client-side)

CSS/                 # Site styles and vendor CSS (Bootstrap, normalize, FontAwesome)
  HomeStyle.css
  TajweedLessons.css
  LoginStyle.css
  RegisterStyle.css
  bootstrap.min.css
  normalize.css
  all.min.css        # Font Awesome (local copy)

JS/                  # Client-side scripts and vendor JS
  home.js
  TajweedLessons.js
  LoginPage.js
  RegisterPage.js
  bootstrap.bundle.min.js
  all.min.js         # Font Awesome JS (local copy)

Images/              # Logos and images used by pages (Logo.png, etc.)
Json/                # (Empty/placeholder - available for use)
webfonts/            # Local webfont files (if present)
README.md            # (this file)
```

How it fits together:
- Each top-level HTML file (Html/*.html) loads CSS from CSS/ and scripts from JS/ and is an independent entry point for that view.
- TajweedLessons.html contains lesson content and small interactive quizzes handled by TajweedLessons.js. Home.html provides marketing/feature sections and a students table (client-side).
- Login and Registration pages are currently client-side forms that would post to a server when a backend is added.

---

## Quick start — run locally (shortest path)
This is a static site. The quickest ways to view it:

Option A — Open in browser (not recommended if you rely on relative-path JS/CSS or want correct MIME handling)
- Open `Html/Home.html` directly in your browser.

Option B — Serve from a simple HTTP server (recommended)
- Python 3:
  ```bash
  # from repository root
  python3 -m http.server 8000
  # then open http://localhost:8000/Html/Home.html
  ```
- Node (serve):
  ```bash
  npx serve .
  # or
  npx http-server .
  ```
- VS Code: Use the "Live Server" extension and open `Html/Home.html`.

Notes:
- Paths in HTML use relative links like `../CSS/...` and `../JS/...`. Serve from repo root to preserve those relative links (open the Html/ pages via a server or adjust paths).
- Forms currently submit to no backend. Use browser devtools to see client-side behavior or wire endpoints when adding a server.

---

## Main features
- Arabic-language Tajweed lessons covering common rules (نون الساكنة، الإدغام، المدود، إلخ).
- Interactive multiple-choice quizzes embedded in lessons (client-side grading / result display).
- Simple registration and login pages (forms present — no server-side authentication yet).
- Responsive layout using Bootstrap with local vendor files included.

---

## Development notes & recommended improvements
Short list of practical next steps if you plan to continue development:
- Add a small backend (Node/Express, Flask, or similar) to handle:
  - User registration & authentication (secure password storage, sessions/JWT).
  - Persisting quiz results and student progress.
  - Serving dynamic student lists for the Home page table.
- Fix/standardize asset paths:
  - Some pages reference JS using `/JS/...` while others use `../JS/...`. Use consistent relative paths.
- Accessibility & i18n:
  - Add ARIA attributes and ensure correct lang attributes (some pages use `lang="AR"` vs `lang="ar"`).
  - Ensure readable contrast and keyboard navigation for forms and interactive quizzes.
- Performance/security:
  - Remove large vendor map files from production or move them to a vendor CDN.
  - Audit included third-party files (Font Awesome & Bootstrap) for license compatibility and update versions as needed.
- Tests & CI:
  - Add a basic build or lint step (prettier, stylelint) and a GitHub Actions workflow to validate HTML/CSS/JS.

---

## Known issues / TODO
- Forms do not connect to a backend yet — registration/login are client-side placeholders.
- Inconsistent script paths may cause 404s when pages are opened from different locations.
- Some vendor files (bootstrap, FontAwesome) are included locally as .map and large minified files — consider using CDN or pruning unneeded assets.
- Html/TajweedLessons.html and other files are long; consider splitting lesson content into modular JSON or markdown and rendering with a small client renderer.

---

## Contributing
- Create an issue describing the feature/bug.
- Fork -> feature branch -> PR with a clear description and screenshots (if UI change).
- Keep commits small and focused. Use semantic commit messages.

Suggested quick tasks for contributors:
- Wire up a minimal backend to accept registration/login requests.
- Add persistent storage for quiz results (e.g., a file-based JSON or SQLite for a quick prototype).
- Make asset paths consistent and verify pages work both from disk and from a static server.

---

## License
Suggested: MIT (add LICENSE file if you want to open-source under MIT). If you prefer another license, replace this section and add the chosen LICENSE file.

---

## Contact
- Maintainer: Omar Gomaa and Ahmed Elzamly
---

## Try asking (examples)
- "Should Login.html POST to /api/auth/login and what payload should it send?"
- "Can you add a minimal Express backend (routes + user model) to accept registration and login for this repo?"
- "Please fix the inconsistent JS/CSS paths so pages work when opened from the repository root server."
