---
title: System Architecture
last_updated: 2026-05-02
---

# System Architecture

## Architectural Pattern
- **Static Multi-Page Application (MPA)**: Independent HTML pages for different modules.
- **Client-Side Data Fetching**: Direct interaction with Supabase from the browser.
- **Global Configuration**: `js/config.js` acts as a service locator and state initializer for the App context.

## Design System (Ethereal Glass)
- **Grid System**: Bento-style grid with utility classes (`span-12`, `span-8`, etc.).
- **Mobile-First Stack**: Strict vertical stacking for mobile devices (defined in `style.css`).
- **Glassmorphism**: Heavy use of semi-transparent backgrounds and blurs.

## Data Flow
1. **Initialization**: Page loads `App.init()` from `js/config.js`.
2. **Authentication**: Redirects to `index.html` if no session is found.
3. **Fetching**: Components fetch data from Supabase tables (`profiles`, `sales`, `assessments`).
4. **Rendering**: Dynamic DOM manipulation using Vanilla JS.
