# Isaac He's Personal Website

## User Experience (UX)

The user journey is linear but accessible:

Hero Section: Immediate establishment of the mission statement.

Navigation: Sticky navigation with active state tracking allows users to jump between "Innovation" and "Research" seamlessly.

Information Architecture: Content is chunked into digestible cards (Projects) and timelines (Education) to prevent cognitive overload while presenting a dense resume.

## 🛠 Technical Details

Tech Stack

Frontend Framework: React 18

Rationale: Chosen for its component-based architecture, allowing me to modularize sections (Hero, About, Projects) and manage state for the mobile navigation and scroll tracking efficiently.

Styling: Tailwind CSS

Rationale: Utility-first CSS enabled rapid prototyping and ensures design consistency (spacing, colors, typography) across the application without writing bloated custom CSS files.

Icons: Lucide React

Rationale: Lightweight SVG icons that provide visual cues for the different sections (e.g., CPU for Tech, Scroll/Book for History).

## Key Features

Responsive Design: The site utilizes a mobile-first approach. Grid systems in the "Innovation" section automatically adjust from 1 column (mobile) to 3 columns (desktop).

Scroll Spy Navigation: A custom useEffect hook tracks the user's scroll position to update the active state in the navigation bar, improving wayfinding.

Performance: The build is optimized for fast load times using lightweight assets and standard React build optimizations.

