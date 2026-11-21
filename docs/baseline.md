# Existing site baseline

Recorded before the UX/UI redesign and after the Vite migration.

## Shared behavior

- Fixed header with the Delamore Cove logo, desktop booking button, and responsive menu.
- Booking actions ask for confirmation before opening Stay Waiheke in a new tab.
- Shared footer contains the Stay Waiheke management link and contact details.
- Page navigation uses client-side routes and each page scrolls to the top when mounted.

## Routes and interactions

### Home (`/`)

- Autoplay hero carousel with previous and next controls on tablet and larger screens.
- Property introduction with scroll-triggered paragraph fades.
- Four suite summary cards that navigate to `/suites` and open the selected suite gallery.
- Links to the suite overview and external booking manager.

### Suites (`/suites`)

- Four suite cards: Kauri, Manuka, Karaka, and Kowhai.
- Selecting a card opens a gallery and amenities modal.
- Each suite has its own external reservation link.

### Experiences (`/experiences`)

- Waiheke recommendations grouped into wineries, restaurants, and activities.
- Recommendation names link to external provider websites.

### Getting here (`/getting-here`)

- Hero, location map, ferry and flight options, car rentals, address, and Google Maps directions.

## Known baseline concerns for the redesign

- The hero relies on remote S3 images; the baseline browser capture showed the turquoise fallback while those images were unavailable or slow to load.
- Several local images are large, including assets around 1.9 MB and 4.1 MB in the production bundle.
- The suite modal lacks full dialog semantics, focus management, Escape-key handling, and body scroll locking.
- The menu trigger is a `div`, so it is not keyboard-accessible by default.
- Some copy and markup need editorial and accessibility cleanup.
