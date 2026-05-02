---
title: Testing Patterns
last_updated: 2026-05-02
---

# Testing Patterns

## Current State
- **Automated Tests**: None identified in the current codebase.
- **Verification**: Manual visual and functional verification on local browser and Vercel staging.

## Recommended Strategy
- **Visual Regression**: Manual check for mobile responsiveness (Single Column Stack).
- **Integration**: Verify Supabase connectivity via `diagnostico.html`.
- **E2E**: Future implementation of Playwright scripts for critical flows (Lead capture, Sales entry).
