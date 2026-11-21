# Delamore Cove UX/UI facelift plan

Status: implemented on `ux-ui-facelift`  
Branch: `ux-ui-facelift`  
Scope: complete site, responsive behavior, accessibility, content hierarchy, and performance

## Implementation record

Implemented on 21 November 2026:

- Rebuilt the shared header, mobile navigation, booking handoff, and footer.
- Introduced the mineral colour system and self-hosted Manrope/Newsreader typography.
- Reframed the home page around one local hero image, a concise property story, orientation facts, suite discovery, and sense of place.
- Added shareable suite routes and replaced the old popup with an accessible, image-led gallery dialog.
- Reworked Experiences into a curated Wine, Food, and Walks edit without brittle pricing.
- Reworked Getting here into a sea, air, and on-island arrival guide with an actionable address and map.
- Removed Slick and its carousel dependencies, added below-the-fold lazy loading, reduced font payloads, and generated web-sized versions of the two largest editorial images.
- Added route and dialog interaction tests; production build and dependency audit pass.

Owner verification is still recommended before launch for current suite amenities/accessibility, third-party recommendations, travel operators, and final booking copy.

## Design thesis

Delamore Cove should feel inseparable from its place: a quiet coastal retreat above Matiatia Bay, surrounded by bush, sea, dark timber, shifting light, and long western views. The interface should not compete with that setting. It should frame it.

The proposed direction is a deliberately light interpretation of the restraint, precision, soft geometry, and material sensitivity associated with Jony Ive, Marc Newson, and LoveFrom. It is an influence, not an imitation. The result should still feel distinctly Waiheke and unmistakably Delamore Cove.

In practical terms:

- Let photography and landscape carry the emotion.
- Use fewer interface elements, but make each one feel considered.
- Replace visual noise with proportion, rhythm, and excellent typography.
- Introduce gentle curves and tactile details without turning the site into a product catalogue.
- Preserve the warmth of a privately owned island retreat; avoid cold technology minimalism.
- Make booking feel clear and effortless rather than aggressive.

The desired impression is **quiet confidence, shaped by place**.

## The place as the visual system

The setting should directly inform the design language rather than appearing only in photographs.

### Matiatia Bay and the western horizon

Use wide compositions, generous horizontal spacing, low visual clutter, and restrained gradients that recall open water and distant evening light. Important sections should feel panoramic rather than boxed into repeated cards.

### Native bush and local suite names

Kauri, Manuka, Karaka, and Kowhai already provide a strong naming system. Treat each suite as a distinct character within one landscape. Use subtle botanical or material cues through color, image sequencing, and copy—not literal leaf icons or decorative illustrations.

### Dark timber and architecture

Use deep charcoal-green and near-black details as structural elements. These can echo the property’s dark exterior timber and create a grounded counterpoint to the sea and sky.

### Sea light

Replace the current dominant turquoise field with a quieter off-white and mineral palette. Reserve sea-glass color for meaningful highlights, selected states, and transitions.

### Arrival and release

The visitor journey should mirror arrival on Waiheke: orientation first, then a gradual release into views, rooms, experiences, and practical travel details. The website should become calmer as visitors move through it.

## What is working today

- Strong original property and island photography.
- Clear four-route information architecture.
- Direct access to suites, local experiences, and travel information.
- A consistent booking destination through Stay Waiheke.
- Suite names and local context give the property a distinct identity.
- The current logo is recognizable and can anchor the refreshed system.

These assets should be refined and elevated, not discarded.

## Primary issues found in the audit

### Visual hierarchy

- The bright turquoise background dominates nearly every route and competes with the scenery.
- Large blocks of centered text make important information difficult to scan.
- Many sections rely on the same pale card treatment, so content lacks rhythm and priority.
- The current typefaces are declared but not reliably loaded, producing inconsistent fallbacks.
- Heading sizes and line lengths become oversized or clipped on narrow mobile screens.
- Several desktop sections use internal scrolling panels, creating scroll-within-scroll friction.

### Navigation and conversion

- Desktop navigation is hidden behind a hamburger even when there is room for the four primary destinations.
- The hamburger is a clickable `div`, so it is not keyboard accessible by default.
- The mobile header does not surface a persistent booking action.
- Booking links trigger a browser confirmation dialog, interrupting a high-intent action and feeling unpolished.
- Current pages do not consistently show where the visitor is within the site.

### Interaction and accessibility

- Suite cards are clickable `div` elements rather than links or buttons.
- The suite gallery lacks dialog semantics, focus trapping, Escape-key handling, body scroll locking, and a descriptive title.
- Carousel images use generic alt text such as “Slide 1.”
- Autoplay has no visible pause control and does not account for reduced-motion preferences.
- Focus states are not intentionally designed.
- Some controls and labels are smaller than comfortable touch or reading sizes.

### Content and trust

- The home introduction is too long for an opening narrative and repeats similar ideas.
- Suite cards hide core decision information such as bed configuration, guest capacity, and defining feature.
- Experience prices and provider details can become stale and need an ownership/review policy.
- Contact details are plain text rather than actionable email and telephone links.
- The relationship with Stay Waiheke is visible, but the booking handoff could be explained more gracefully.
- Several phrases and labels need proofreading, including “Vehical Rentals,” “vinyard,” and travel/location wording that should be verified with the owners.

### Performance

- The hero depends on a large remote image carousel, making the most important visual experience vulnerable to slow or unavailable network requests.
- The production bundle currently includes individual images around 1.9 MB and 4.1 MB.
- Many gallery images load as part of the initial application experience even when they are not immediately visible.
- The carousel dependency adds complexity for an interaction that can be simpler and more purposeful.

## Proposed design system

### Color

Use color as a landscape-derived material rather than a page-filling brand effect.

| Role | Direction | Suggested starting value |
| --- | --- | --- |
| Canvas | warm mineral white | `#F5F5F0` |
| Surface | clean soft white | `#FBFCF9` |
| Ink | deep green-black | `#12201D` |
| Secondary ink | softened slate | `#53605C` |
| Tidal | deep coastal teal | `#1C5B58` |
| Sea glass | muted aqua highlight | `#A7D2CD` |
| Mist | pale blue-green divider | `#DDE9E6` |
| Sunset | restrained warm accent | `#C98E67` |

The exact palette should be sampled against the final hero and property photography. Turquoise remains part of the identity, but in a quieter and more selective role.

### Typography

Use a two-family system:

- A precise humanist sans for navigation, controls, facts, prices, and body copy.
- A restrained editorial serif for destination-led headlines and occasional pull quotes.

Suggested open-source starting pair: **Manrope** with **Newsreader**. Confirm licensing and final visual fit before implementation.

Guidelines:

- Body copy: 17–19px, 1.55–1.7 line height, maximum 65–72 characters per line.
- Navigation and control labels: minimum 14px; primary controls 15–17px.
- Fluid headings with `clamp()` rather than abrupt breakpoint jumps.
- Sentence case for most headings and buttons.
- Use uppercase only for short, quiet eyebrow labels with generous tracking.

### Spacing and composition

- Adopt an 8px spacing foundation with a small set of responsive section gaps.
- Use a shared content width of approximately 1200–1280px.
- Give editorial copy a narrower measure inside that width.
- Alternate immersive full-bleed imagery with calm, contained information.
- Avoid wrapping every section in a card.
- Use asymmetry carefully: aligned edges, offset imagery, and open negative space.

### Shape and material

- Use soft 18–28px radii for image frames, sheets, and high-value panels.
- Use capsule shapes selectively for primary actions and compact facts.
- Prefer one-pixel mineral borders and soft tonal separation over heavy shadows.
- When elevation is necessary, use broad, low-opacity shadowing that feels atmospheric.
- Avoid ornamental glass effects and excessive blur.

### Motion

- Use short 180–300ms control transitions and slower 500–700ms editorial reveals.
- Animate opacity and small translations; avoid large parallax or constant motion.
- Respect `prefers-reduced-motion` everywhere.
- Replace or pause autoplay by default. Visitors should control galleries.
- Use motion to clarify navigation, gallery state, and content hierarchy—not as decoration.

## Shared site recommendations

### Header

- Keep the logo left aligned at a calmer scale.
- Show `Suites`, `Experiences`, and `Getting here` as visible desktop navigation.
- Use one clear `Book your stay` action on the right.
- Give the header a translucent mineral surface only after scrolling; begin transparently over compatible hero imagery when contrast allows.
- On mobile, use an accessible menu button and a full-height navigation sheet with a visible booking action.
- Add an active-route state and robust keyboard/focus behavior.

### Booking handoff

- Remove native confirmation dialogs.
- Open Stay Waiheke directly in a new tab with concise adjacent copy such as “Secure booking via Stay Waiheke.”
- Keep one consistent primary label across the site: either `Check availability` or `Book your stay`.
- Retain suite-specific booking links when the visitor has selected a suite.

### Footer

- Consolidate logo, address, contact information, booking manager, and essential navigation.
- Make email and phone numbers actionable.
- Add a concise location line: Waiheke Island, Aotearoa New Zealand.
- Include copyright and an optional privacy link if analytics or marketing tools are introduced.
- Reduce the visual weight so the footer feels like a graceful close rather than another content block.

## Route-by-route redesign

### Home

#### Hero

- Lead with one exceptional, locally hosted still image or a very restrained two-to-three-image sequence.
- Prioritize the view, architecture, and sense of arrival rather than showing fifteen images immediately.
- Add a concise destination proposition. Working direction: `A quieter side of Waiheke.`
- Supporting line should locate the property and communicate the stay in one sentence.
- Provide two actions: `Explore the suites` and `Check availability`.
- Ensure the first image is responsive, optimized, preloaded, and art-directed for mobile.

#### Orientation strip

Introduce four concise facts immediately after the hero:

- Four private suites
- Views across Matiatia Bay
- Minutes from Oneroa
- On-site parking

Only use claims already confirmed by the owners.

#### Property story

- Replace the two very long paragraphs with a short editorial introduction and one secondary detail block.
- Use the landscape sequence—bay, bush, sunset, stars—to create emotional progression.
- Move practical amenities into suite content rather than repeating them in the property introduction.

#### Suite preview

- Present the four suites as an editorial collection rather than identical cards.
- Each preview should show name, guest count, bed arrangement, setting, and one defining quality.
- Make the entire item a semantic link.
- Use a consistent primary photograph ratio and an intentional mobile horizontal sequence or stacked layout.

#### Sense of place

- Add a short section connecting Delamore Cove to Oneroa, vineyards, walking tracks, and the ferry arrival.
- Use one strong landscape photograph and two routes onward: `Explore Waiheke` and `Plan your arrival`.

### Suites

- Shorten the opening copy to a two-to-three sentence orientation.
- Introduce a compact comparison row for guests, beds, outdoor space, kitchenette, and accessibility.
- Give each suite an editorial section with a distinctive image sequence rather than repeating one rigid card template.
- Keep price ranges only if the owners can maintain them; otherwise use `Check current rates`.
- Replace “Tap to Open” with a clear action such as `View Kauri` or `See suite details`.
- Add room-specific availability actions without triggering confirmation dialogs.
- Consider dedicated suite URLs (`/suites/kauri`) for sharing, search visibility, and browser history.

#### Gallery sheet

- Show suite name, image count, current position, amenities, and booking action.
- Use icon buttons with accessible labels for previous, next, and close.
- Support keyboard navigation, swipe, Escape, focus trapping, and focus return.
- Preserve image aspect ratios and avoid aggressive cropping.
- Add descriptive image alt text or intentionally empty alt text for redundant decorative views.

### Experiences

- Retitle as a local, personal edit rather than a directory. Working direction: `Our Waiheke edit.`
- Open with one concise statement explaining that the list reflects places and experiences the owners value.
- Organize into `Wine`, `Food`, and `Walks` with a consistent editorial rhythm.
- Remove internal scrolling regions; let the page use one natural document scroll.
- Use fewer, stronger images and compact provider entries.
- Consider optional practical metadata only when verified: area, approximate travel time, reservation note.
- Avoid hard-coded tasting prices unless there is a documented update process.
- Add a final route to `Plan your arrival` or `Book your stay`.

### Getting here

- Treat this page as a calm arrival guide, not a wall of links.
- Lead with the geographic relationship: Auckland → Waiheke → Matiatia → Delamore Cove.
- Use a three-step arrival sequence with sea, air, and on-island transport options.
- Make the address and `Open in Google Maps` action prominent.
- Replace the low-resolution map image with a cleaner, accessible map treatment or a well-designed static map linked to Google Maps.
- Separate ferry, flight, rental, parking, and accessibility information into scannable groups.
- Remove internal scrolling panels.
- Verify all operator names, travel times, airport wording, spelling, and external URLs with the owners before launch.

## Responsive direction

### Mobile

- Design the mobile composition independently rather than shrinking desktop layouts.
- Remove horizontal clipping visible in current headings and paragraphs.
- Keep primary content within 20–24px side margins.
- Use image crops selected for portrait and compact landscape viewports.
- Maintain 44px minimum interactive targets.
- Keep the booking action available without covering content.
- Use one natural scroll container per page.

### Tablet

- Treat tablet as a first-class hospitality browsing size.
- Use two-column suite and experience compositions only where copy remains readable.
- Avoid jumping directly from mobile stack to oversized desktop typography.

### Desktop

- Use the larger canvas for panoramic photography and editorial asymmetry.
- Keep body copy narrow enough to read comfortably.
- Avoid giant text purely to fill space.
- Make primary navigation visible rather than hiding it behind a menu.

## Accessibility acceptance criteria

- Semantic landmarks and one logical `h1` per route.
- All actions reachable and operable by keyboard.
- Visible focus states that belong to the visual system.
- Menu and modal expose appropriate names, roles, and expanded/open states.
- Modal traps focus, closes with Escape, and returns focus to its trigger.
- Carousel or gallery does not force autoplay; any motion can be paused.
- Minimum WCAG AA color contrast for text and interactive controls.
- Meaningful alt text for informative property imagery.
- Decorative images use empty alt attributes.
- Touch targets are at least 44×44px.
- Layout remains usable at 200% zoom and with larger browser text.
- Reduced-motion preferences are respected.

## Performance plan

- Move critical hero imagery under direct project/CDN control.
- Generate AVIF and WebP variants plus JPEG fallbacks.
- Create responsive `srcset` sizes for mobile, tablet, and desktop.
- Preload only the true largest-contentful image.
- Lazy-load below-the-fold and gallery images.
- Compress the 1.9 MB and 4.1 MB source images before launch.
- Avoid importing every suite gallery image into the initial route bundle where possible.
- Replace the current carousel with a lighter controlled gallery if the final design does not require Slick.
- Target a mobile LCP below 2.5 seconds on a typical 4G connection.
- Prevent layout shift by declaring image dimensions or aspect ratios.

## Recommended implementation order

### Phase 1: foundation

- Confirm owner content, booking behavior, and preferred hero images.
- Establish design tokens, typography, responsive container, focus styles, and motion rules.
- Rebuild the shared header, navigation sheet, booking action, and footer.
- Correct global semantics and obvious copy errors.

### Phase 2: home and suites

- Build the new home narrative and optimized hero.
- Create semantic suite previews and suite detail/gallery experience.
- Add dedicated suite routes if approved.
- Complete responsive and keyboard behavior before moving on.

### Phase 3: experiences and arrival

- Restructure experiences into a curated editorial guide.
- Rebuild the arrival page around a clear travel sequence and map action.
- Verify every third-party listing and travel statement.

### Phase 4: polish and validation

- Optimize all images and fonts.
- Run accessibility, performance, browser, and real-device checks.
- Review the full booking journey with the owners.
- Validate analytics and external-link behavior if analytics are added.
- Perform a final content proofread using New Zealand spelling and terminology.

## Owner decisions needed before visual implementation

- Which image best captures Delamore Cove as the primary hero?
- Should the primary action say `Book your stay` or `Check availability`?
- Are current suite price ranges intended to remain public?
- Are all suite descriptions, capacities, accessibility claims, and amenities current?
- Which local experiences are genuinely owner-recommended and still current?
- Which travel providers and travel-time claims should remain?
- Should each suite have a shareable dedicated URL?
- Is the existing logo fixed, or may spacing/color variants be prepared?
- Are there professional architectural or landscape photographs not currently in the repository?
- Is analytics currently installed or desired?

## Definition of success

The facelift succeeds when a visitor can answer these questions quickly and confidently:

1. Where is Delamore Cove, and what does it feel like to stay there?
2. Which suite is right for me?
3. How do I get there and what can I do nearby?
4. How do I check availability or book?

The final site should feel calm before it feels clever, local before it feels luxurious, and useful before it feels decorative.
