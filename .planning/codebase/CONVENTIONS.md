---
title: Coding Conventions
last_updated: 2026-05-02
---

# Coding Conventions

## Naming Standards
- **HTML Files**: Snake case (e.g., `leads_admin.html`).
- **CSS Classes**: Kebab case (e.g., `card-shell`, `bento-grid`).
- **JS Variables**: Camel case (e.g., `activeStudentId`).

## UI Component Patterns
- **Containers**: Every card follows the structure:
  ```html
  <div class="card-shell reveal span-X">
      <div class="card-core">
          <!-- Content -->
      </div>
  </div>
  ```
- **Icons**: Use Phosphor Icons with `ph-light` or `ph-fill` classes.
- **Buttons**: Consistent use of `.btn.btn-primary` with `.btn-icon` for action elements.

## JavaScript Patterns
- **Initialization**: Mandatory use of `App.init('page_name')` to verify session and build the navbar.
- **Error Handling**: Use `try/catch` with `showToast(error.message, 'error')` for user feedback.
- **Navigation**: Navbar is dynamically injected to ensure menu consistency across all modules.
