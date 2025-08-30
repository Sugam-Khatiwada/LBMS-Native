Project overview
Bookhub Library is a lightweight, responsive library-management UI built with Expo + React Native. It uses filesystem routing via expo-router and utility-first styling with Nativewind (Tailwind for RN) to provide a mobile-first interface for welcome, login, and a clean dashboard focused on members, loans, reservations, and reports. The app is front-end only (UI + placeholders); data hooks and APIs can be connected later.

Key points

Tech: Expo, React Native, expo-router (filesystem routes), Nativewind/Tailwind, Metro bundler, babel-preset-expo.
Purpose: fast, minimal admin UX — at-a-glance stats, quick actions, activity feed; intentionally no book list on the dashboard.
Structure: pages live under app/; assets and logo in assets/; global styles in global.css; config in babel.config.js, metro.config.js, tailwind.config.js.
Colors & branding: primary accent is the project purple (logo color); update assets/icon.png to swap the logo.
Quick start (Windows cmd):
cd to project root
npm install
set CI=1&& npx expo start
