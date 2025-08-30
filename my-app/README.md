# Bookhub Library (Expo + Expo Router + Nativewind)

A small React Native / Expo app scaffold for a library management UI. This project was adapted into "Bookhub Library" — landing page, login, and dashboard UIs, styled with Nativewind (Tailwind for React Native) and filesystem routing using `expo-router`.

## What this repository contains
- `App.js` — root placeholder (shows app name). The app uses `expo-router` entry from `index.js` so the `app/` folder defines pages.
- `app/` — filesystem routes (index, login, dashboard, layout).
- `assets/` — icons and app images (app uses `assets/icon.png`).
- `babel.config.js`, `metro.config.js`, `tailwind.config.js` — configuration for Nativewind and Expo.

## Quick start (Windows / cmd.exe)
1. Install dependencies:

```cmd
cd "c:\Users\Acer\OneDrive - London Metropolitan University\LBMS Native\my-app"
npm install
```

2. Start the Expo dev server (non-interactive / CI mode recommended for scripts):

```cmd
set CI=1&& npx expo start --no-dev --minify
```

3. Open in Expo Go (mobile) or press `w` to open web (Metro will show the QR / web address).

Notes:
- If Metro prompts for a port, allow change or kill the conflicting process and restart.
- If you see a web 500 that returns JSON instead of JS, view the failing request in DevTools Network panel to read the error JSON (it contains the bundler stack trace).

## Project conventions
- Routing: `app/_layout.js` defines the router; pages live as `app/index.js`, `app/login.js`, `app/dashboard.js`.
- Styling: Tailwind classes are used via Nativewind. Global styles live in `global.css` (imports Tailwind base/components/utilities).
- Primary theme color: purple (`bg-purple-600`), matching the Bookhub logo.

## Common troubleshooting
- "Unable to resolve 'axios'": run `npm install axios --save`.
- Browser refuses to execute bundle (MIME type application/json): this usually means Metro returned a JSON error. Check Metro terminal output or open the failing bundle request in DevTools and paste the JSON error into search/issue reports.
- Nativewind issues: ensure `nativewind/babel` is in `babel.config.js` plugins and `metro.config.js` uses `withNativeWind(config)` (avoid passing unusual `input` options unless documented).

## How to customize
- Replace the logo: put a PNG/SVG into `assets/logo.png` (or overwrite `assets/icon.png`) and update imports in `app/index.js` and `app/dashboard.js`.
- Change app name or copy: edit strings in `App.js`, `app/index.js`, and `app/dashboard.js`.
- Add new routes/pages: create files under `app/` (for example `app/catalog.js`), and they'll automatically be available to the router.

## Next improvements you may want
- Connect stats and recent activity to a backend API.
- Replace emoji icons with SVG assets or a vector icon library.
- Add authentication flow and protected routes.

## License & notes
This is a small demo scaffold. Remove machine-specific `.expo/` files from VCS (they are gitignored by default).

If you want, I can:
- Add the provided logo file into `assets/` and wire it in, or
- Scaffold placeholder pages for `/members`, `/loans`, `/reservations`, `/reports` and wire the quick-action cards to them.

