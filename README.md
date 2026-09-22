# Kamsan — Cambodia Travel Guide

Kamsan is a Web Development II final project for the American University of Phnom Penh. It extends a six-page Web I travel website into an interactive travel-planning application for visitors to Cambodia.

## Project Goals

The application helps tourists explore Cambodian destinations, food, activities, culture, and practical travel information. It will use vanilla JavaScript to add dynamic client-side features while keeping the existing responsive HTML and CSS experience.

## Pages

- `index.html` — home page, trip planner, and optional recommendation quiz
- `destinations.html` — destination discovery, weather, search, and favorites
- `food.html` — Khmer food browsing and filtering
- `things-to-do.html` — activity discovery and filtering
- `travel-guide.html` — transport, timing, and practical visitor guidance
- `contact.html` — visitor contact and project information

## Planned Web II Features

- Current weather for Phnom Penh, Siem Reap, Kampot, and Koh Rong via Open-Meteo
- Tourist review CRUD using JSONPlaceholder (`GET`, `POST`, `PUT`, and `DELETE`)
- Immediate search and filtering for destinations, food, and activities
- Browser-persisted favorite destinations with `localStorage`
- A trip planner where visitors can add, remove, and rearrange destinations and activities
- An optional travel-recommendation quiz
- Loading states, error messages, form validation, and accessible DOM updates

Open-Meteo and JSONPlaceholder do not require an API key for the planned basic use. JSONPlaceholder is a demonstration API, so review updates are reflected in the browser but are not permanently stored by the service.

## Technology

- HTML5 and semantic markup
- CSS3 and responsive design
- Vanilla JavaScript (ES6+)
- `fetch()` and `async`/`await`
- Browser APIs: DOM, events, `localStorage`, and `IntersectionObserver`

Node.js is used only for development tooling; there is no application build step or runtime server.

## Project Structure

```text
web1-final-project/
├── css/                 # page and shared styles
├── doc/                 # proposal and course documents
├── images/              # website images
├── js/
│   ├── features/        # weather, reviews, favorites, planner, filters, quiz
│   ├── services/        # Open-Meteo and JSONPlaceholder requests
│   ├── ui/              # shared navigation and interaction helpers
│   ├── utils/           # DOM, validation, and reveal helpers
│   └── main-*.js        # page entry points
├── tests/               # Jest tests
└── .github/workflows/   # CI checks
```

## Local Development

Use Node 20 to match CI. If you use a version manager, `.nvmrc` selects it.

```bash
npm ci
npm run check
python -m http.server
```

Open `http://localhost:8000` in a browser. Run the check command before committing:

```bash
npm run check
```

It verifies Prettier formatting, ESLint rules, and Jest tests. A pre-commit hook runs the same command. GitHub Actions runs these checks, a high-severity dependency audit, and a secret scan on pull requests and pushes to `main`.

## Project Status

The static pages and shared client-side interactions are in place. The Web II feature modules are organized in `js/` and are the next development phase; API integration, CRUD, persistence, and the remaining interactive features still need implementation.
