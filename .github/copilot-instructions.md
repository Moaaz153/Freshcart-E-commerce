# Copilot Instructions for FreshCart E-Commerce

## Project Overview
- **FreshCart** is a React-based e-commerce web app using Vite for fast builds and TailwindCSS for styling.
- The app is organized by feature: `src/components/` for UI, `src/pages/` for routes, `src/services/` for API logic, and `src/context/` for global state.
- Data flows from API services (Axios) → Context Providers → Components/Pages.

## Key Patterns & Conventions
- **Component Structure:**
  - UI is split into reusable components (e.g., `ProductCard`, `Navbar`, `CartItem`).
  - Pages in `src/pages/` compose these components for each route.
  - Layouts (e.g., `Layout.jsx`, `AccountLayout.jsx`) wrap pages for shared UI.
- **State Management:**
  - Use React Context (`src/context/`) for auth, cart, categories, and products.
  - Contexts fetch data via `src/services/` and provide it to components.
- **API Integration:**
  - All API calls are abstracted in `src/services/` (e.g., `product-service.js`, `auth-service.js`).
  - Use Axios for HTTP requests; endpoints are not hardcoded in components.
- **Routing:**
  - Uses React Router for navigation; routes are defined in `src/pages/`.
  - `ProtectedRoute.jsx` guards private routes.
- **Styling:**
  - TailwindCSS is used throughout. No CSS-in-JS or SCSS.
  - Some components have local CSS modules (e.g., `Loading/loading.module.css`).
- **Utilities:**
  - Common logic (e.g., countdowns, discounts, password strength) is in `src/utils/`.

## Developer Workflows
- **Start Dev Server:**
  - `npm run dev` (Vite-powered)
- **Build for Production:**
  - `npm run build`
- **No explicit test setup** detected; add tests in `src/` if needed.
- **Debugging:**
  - Use browser devtools; no custom debug scripts.

## Project-Specific Notes
- **Do not hardcode API URLs** in components—use service files.
- **Context Providers** must wrap the app in `main.jsx` for state to work.
- **Assets** (images, SVGs) are in `src/assets/` and referenced via import.
- **Offline/Loading States:**
  - Use `OflineScreen` and `Loading` components for network/async UI.

## Example: Adding a New Feature
1. Create a service in `src/services/` for API logic.
2. Add context logic in `src/context/` if global state is needed.
3. Build UI in `src/components/` and compose in a new/existing page in `src/pages/`.
4. Use Tailwind classes for styling.

---
For more, see `README.md` and explore the `src/` structure for patterns.
