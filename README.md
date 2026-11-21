# Delamore Cove

React 18 website for Delamore Cove on Waiheke Island. The local development and production build tooling use Vite.

## Requirements

- Node.js 24.x
- npm 11.x

## Local development

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (normally <http://localhost:5173>).

## Checks

```bash
npm test
npm run build
npm audit
```

To check the production bundle locally:

```bash
npm run preview
```

## Heroku deployment

Heroku builds the Vite production bundle and starts the static web process declared in `Procfile`. The server uses Heroku's assigned `PORT` and falls back to `3000` locally.

The GitHub deployment integration targets `main`; automatic deploys are disabled, so releases are triggered manually from the Heroku dashboard after changes are merged into `main`.

## Routes

- `/` — home, hero carousel, property introduction, and suite cards
- `/suites` — suite details, image galleries, amenities, and booking links
- `/experiences` — recommended Waiheke experiences
- `/getting-here` — transport options, map, and directions

The current pre-redesign behavior is recorded in [docs/baseline.md](docs/baseline.md).
