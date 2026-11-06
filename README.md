# NeighbourHub — Local Community Noticeboard
A responsive, static Cloud Computing mini-project. It runs in the browser and can be deployed to a static hosting platform (GitHub Pages, Netlify, or Vercel).

## Features
- Responsive landing page and community notice feed
- Category filters (Events, Services, Announcements, Lost & Found)
- Search across notices
- Post notice form with validation
- Browser `localStorage` persistence for posts (demo/local device only)
- Upcoming events section and project/about section
- No backend or database (as requested)

## Run locally
1. Extract the ZIP.
2. Open `index.html` in a browser.
   - Recommended: VS Code → install Live Server → right-click `index.html` → **Open with Live Server**.

## Cloud deployment (GitHub Pages)
1. Create a GitHub repository, e.g. `local-community-noticeboard`.
2. Upload `index.html`, `styles.css`, and `script.js` to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Select `main` and `/ (root)`, then Save.
6. Wait for the deployment and open the generated Pages URL.

Alternative: drag the project folder to Netlify Drop, or import the GitHub repository into Vercel.

## Important project note
This is a frontend-only prototype. Notices added by a visitor are saved only in that visitor's browser and are not shared with other people or devices. A real public multi-user noticeboard would require a backend/API and shared data storage; those are intentionally not included in this version.

## Suggested academic project title
**Local Community Noticeboard: A Cloud-Deployed Web Application**

## Suggested project objectives
- To provide a centralized online place for local announcements and events.
- To make community information searchable and organized by category.
- To demonstrate cloud hosting and deployment of a web application.
- To design an accessible and responsive interface for mobile and desktop users.

## Technology used
HTML5, CSS3, JavaScript, browser Local Storage, GitHub Pages (cloud static hosting).

## Folder structure
```
Local_Community_Noticeboard/
├── index.html
├── styles.css
├── script.js
└── README.md
```
