---
title: Technical Concerns
last_updated: 2026-05-02
---

# Technical Concerns

## Critical
- **Security**: Supabase keys are client-side. Strict Row-Level Security (RLS) is the only barrier. Must verify all tables have non-permissive default policies.
- **Dependency Risk**: External CDNs are used for core logic. A CDN failure or breaking update would disable the entire platform.

## Maintenance
- **Refactoring Debt**: Several pages recently underwent mobile-first refactoring. Residual legacy styles may exist in less-visited modules (e.g., `calculadora.html`).
- **Asset Size**: PNG files for BMI status are large (~500KB each). Should be optimized to WebP or SVG to improve mobile Load Time (LCP).

## Scalability
- **MPA Limitations**: As the number of pages grows, shared logic management becomes complex. Consider migrating to a single-page approach (Svelte/React) if the project expands significantly.
- **Lead Sync**: Potential race conditions in lead capture if multiple mentors access shared assets in Collab Market.
