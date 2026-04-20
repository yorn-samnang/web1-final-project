# Kamsan Cambodia Travel Guide

Kamsan is a multi-page static website built for a Web Development I final project at the American University of Phnom Penh. The site presents Cambodia as a travel destination through curated sections for destinations, food, activities, travel planning, and contact information.

## Project Overview

The project is designed as a lightweight front-end website using only HTML, CSS, and vanilla JavaScript. It focuses on:

- a responsive multi-page layout
- a shared navigation bar and footer across all pages
- a warm glass-style visual theme inspired by travel and hospitality
- consistent button, card, and typography styling

## Pages

- `index.html`  
  Homepage with a hero section, trip planner form, feature cards, and a travel guide call-to-action.

- `destinations.html`  
  Destination overview page with starter cards for places such as Siem Reap, Koh Rong, and Kampot.

- `food.html`  
  Khmer food highlights page with sample dishes including Amok, Lok Lak, and Nom Banh Chok.

- `things-to-do.html`  
  Activities page with starter content for sightseeing, beaches, and culture-focused experiences.

- `travel-guide.html`  
  Practical travel page with quick sections for transportation, timing, and tips.

- `contact.html`  
  Basic contact form page for visitor inquiries.

## Features

- Shared responsive navigation with mobile menu toggle
- Custom logo treatment in the navbar
- Elegant Glass button system with primary and secondary variants
- Redesigned themed footer reused across all pages
- Reusable card and section layout styles
- Hero background image and branded color system

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript

No framework, package manager, or build step is required.

## Project Structure

```text
web1-final-project/
|-- index.html
|-- destinations.html
|-- food.html
|-- things-to-do.html
|-- travel-guide.html
|-- contact.html
|-- README.md
|-- css/
|   `-- style.css
|-- js/
|   `-- main.js
|-- images/
|   |-- angkorwat.jpg
|   `-- kamsan-logo.png
`-- doc/
    `-- Final Project Proposal.pdf
```

## Design Notes

The current interface uses a shared visual system built around:

- ivory, teal, and seafoam gradients
- soft glassmorphism surfaces
- rounded cards and pill-shaped navigation
- reusable button classes: `btn`, `btn-primary`, and `btn-secondary`

Most of the visual styling is centralized in `css/style.css`, making it easier to keep the pages consistent.

## JavaScript Behavior

The only JavaScript file is `js/main.js`. It handles the mobile navigation menu by:

- toggling the menu open and closed
- updating `aria-expanded` for accessibility
- closing the menu after a nav link is clicked
- resetting the mobile menu when the viewport becomes wide again

## How to Run Locally

Using a local server is recommended for cleaner testing and navigation.

```bash
python -m http.server
```

Then open `http://localhost:8000`.

## Current Limitations

- Several inner pages still use simple placeholder card content rather than fully developed sections.
- The contact form is presentational only and does not submit data to a backend.
- There is no database, authentication, or CMS integration.

## Future Improvements

- Expand the content on each destination and guide page
- Add form validation and backend handling for contact submissions
- Improve semantic structure and SEO metadata in the HTML `<head>`
- Add more images and richer travel content
- Introduce active-state handling for footer links and deeper navigation patterns

## Course Context

This repository includes a proposal document in `doc/Final Project Proposal.pdf`, which supports the final project submission context.
