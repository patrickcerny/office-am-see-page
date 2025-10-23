# Office am See Website

Office am See is a marketing presence for a bookkeeping and office-management service based in Bregenz. The site is a single-page React application written in TypeScript and styled with Sass.

## Features
- Responsive landing page with anchored navigation for Home, Über Uns, Services, Workflow, and Kontakt sections.
- Animated hero banner with parallax scrolling and interactive typography powered by custom hooks.
- Service overview, team profiles, and workflow steps with scroll-based animations via AOS.
- Contact form integrated with EmailJS, including validation, a feedback modal, and optional Google Maps embed.
- Legal pages (Impressum, Datenschutz) and configurable analytics snippet to support compliance requirements.
- Dockerfile and GitHub Actions workflow for container builds and automated deployment to a VPS.

## Tech Stack
- React 18 + TypeScript (Create React App tooling)
- React Router 6 for routing
- Sass for modular styling
- AOS for scroll animations and react-animate-height for responsive navigation
- EmailJS Browser SDK for form delivery

## Getting Started
1. Install dependencies: `npm install`
2. Start the development server: `npm start`
   - App runs at `http://localhost:3000`
   - Hot reload is enabled for components and styles
3. Run unit tests as needed: `npm test`
4. Create a production bundle: `npm run build` (outputs to `build/`)

Node.js 18+ is recommended. The project is known to work with Node 20 (used by the Docker image).

## Project Structure
```text
.
├─ src/
│  ├─ Components/      # Header, Footer, and other shared UI
│  ├─ Hooks/           # Custom hooks for scroll and viewport handling
│  ├─ Modules/         # Page sections such as LandingImage, OurTeam, Services
│  ├─ Pages/           # Static routes (Impressum, Datenschutz)
│  └─ Styles/          # Global Sass variables and base styles
├─ public/             # CRA static assets and index.html shell
├─ Dockerfile          # Multi-stage build (Node 20 + Nginx)
└─ .github/workflows/  # CI pipeline for building and deploying the container
```

## Configuration
- **EmailJS:** Update `service_id`, `template_id`, and `public_key` in `src/Modules/Contact/Contact.tsx` with your EmailJS credentials. For production, export them as environment variables (for example via `.env.local`) and reference `process.env.REACT_APP_*` to avoid hard-coding secrets.
- **Google Maps Embed:** Replace the `key` parameter in the iframe URL inside `Contact.tsx` with your own Google Maps Embed API key.
- **Analytics:** The header includes a Micro Analytics script tag. Remove or swap it in `src/Components/Header/Header.tsx` if you prefer a different analytics provider or do not want tracking.

## Docker Usage
```bash
docker build -t office-am-see .
docker run -d --name office-am-see -p 3000:80 office-am-see
```
The container serves the built static files through Nginx. Adjust the exposed port or add reverse proxy configuration as needed.

## Continuous Deployment
The workflow `.github/workflows/main.yml` builds and pushes an image to GitHub Container Registry on pushes to `master`, then redeploys it via SSH to a VPS. Set the following secrets in the repository before enabling it:
- `SSH_HOST`, `SSH_USER`, `SSH_PASSWORD`
- `GHCR_USERNAME`, `GHCR_TOKEN` (required if the image is private; PAT must include `read:packages`)

## Content Editing Tips
- Marketing copy and section layout live in `src/Modules/*`. Replace image assets in `src/Assets/` and update imports where used.
- Global colors, fonts, and spacing tokens are centralized in `src/Styles/_variables.scss`.
- When adding new sections, export them from `src/Modules/index.ts` and include them in the `/` route inside `src/App.tsx`.

## Troubleshooting
- If EmailJS calls fail locally, confirm that pop-up blockers are disabled and the correct origin is allowed in your EmailJS account.
- A missing Google Maps API key will render an empty iframe; check the browser console for `MapsEmbed` errors.
- After modifying deployment secrets, rerun the GitHub Actions workflow or push a new commit to trigger a fresh deployment.

---

Need help or want to extend the site? Open an issue or reach out to the maintainers.
