# UI kit — One-page portfolio

The product this design system exists for: a single scrolling portfolio page with a 3D-tilt work grid, plus an in-page case-study view.

| File | What it is |
| --- | --- |
| `index.html` | The interactive kit. Renders the whole page and swaps to a case study when a project tile is clicked. |
| `data.js` | Fake project data on `window.LOOP_DATA`. |
| `Hero.jsx` | Full-bleed hero: badge, hero type, two CTAs, tilted showreel frame, two blobs, two stickers. |
| `WorkGrid.jsx` | Filter pills + responsive grid of `TiltCard` → `ProjectCard`. |
| `About.jsx` | Bio column, capability tags, three stats, portrait frame, testimonial. |
| `ContactSection.jsx` | Ink `ContactCTA` slab + working (fake) contact form with a sent state. |
| `CaseStudy.jsx` | Project detail: tags, display title, hero media, three facts, narrative, detail images, next project. |

## Interactions to try
- Hover any project tile — pointer-tracked 3D tilt with a specular glare.
- Filter the grid with the pills (Brand / Product / 3D / Web).
- Click a tile → case study; "All work" returns.
- Submit the contact form → confirmation state.

Every visual comes from the design system components; nothing here re-implements a primitive.
