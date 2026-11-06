# ABC Grand Hotel — React Router Lab Practical

A polished, responsive hotel website with four pages:
- Home
- Rooms
- Bookings
- Contact

It also includes a custom 404 page.

## React concepts demonstrated
- `BrowserRouter`: wraps the app and enables browser-based routing (`src/main.jsx`).
- `Routes`: groups the route definitions (`src/App.jsx`).
- `Route`: maps each URL to a page component.
- `Link`: navigates between pages without a full browser reload.
- `NavLink`: navigation links with an active-page style.
- `useState`: manages the booking and contact form input and confirmation messages.

## Run locally

Install Node.js, extract this ZIP, open a terminal in this folder, and run:

```bash
npm install
npm run dev
```

Open the local address printed by Vite.

To check the production build:

```bash
npm run build
```

## Important lab note
The booking and contact forms are front-end demonstrations only. They show a confirmation message but do not send data to a server or create a real reservation.

Room photography and Google Fonts load from external URLs, so an internet connection is needed for those visual assets. The app itself runs locally.
