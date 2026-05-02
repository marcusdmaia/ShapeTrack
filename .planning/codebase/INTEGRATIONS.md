---
title: External Integrations
last_updated: 2026-05-02
---

# External Integrations

## Primary Integrations
- **Supabase**: 
  - **Database**: PostgreSQL for storing profiles, sales, assessments, and leads.
  - **Auth**: Email/Password authentication.
  - **Functions**: Referenced in `configuracoes.html` for Google Auth exchange.

## Third-Party APIs
- **Google Calendar API**: Integrated via Supabase functions for assessment scheduling (OAuth2 flow initiated in `configuracoes.html`).
- **YouTube**: Thumbnail integration for videos in `videos.html` and `parcerias.html`.

## Webhooks & Events
- **Lead Capture**: CRM system captures leads for mentor management.
