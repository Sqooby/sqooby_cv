# Loop — Portfolio Design System

A design system for **one-page personal / studio portfolios with a 3D feel**. Warm paper background, ink outlines, candy-flat accents, very heavy display type, blurred gradient blobs and pointer-tracked 3D tilt on the work grid.

Loop is a **from-scratch system**. There was no codebase, Figma file or brand kit to import — the brief was "a one-page portfolio with visual effects like 3D, where I can show my portfolio and other stuff", plus two screenshots supplied as *mood references*:

| Source | Path | How it was used |
| --- | --- | --- |
| Reference A — warm editorial hero | `assets/references/reference-warm-editorial.png` | Cream/paper base, soft pastel accents, floating pill nav, thin-outline illustration language. |
| Reference B — bold 3D hero | `assets/references/reference-bold-3d.png` | Oversized black display type, uppercase pill buttons, outlined sticker objects, glossy 3D form behind the type. |

Those screenshots are third-party marketing pages. They are stored as inspiration only — **no logo, wordmark, illustration or proprietary asset from either was copied or reconstructed.** Everything in Loop is original.

## Index

| Path | What's there |
| --- | --- |
| `styles.css` | The single entry point consumers link. `@import` lines only. |
| `tokens/` | `colors`, `typography`, `spacing`, `radii`, `shadows`, `motion`, `dimension`, `base`. |
| `components/core/` | Button, IconButton, Icon, Pill, Tag, Badge, Card, SectionHeading, Marquee, Blob, Sticker. |
| `components/forms/` | Input, Textarea, Select, Checkbox, Switch. |
| `components/portfolio/` | NavBar, MediaFrame, TiltCard, ProjectCard, StatBlock, TestimonialCard, ContactCTA, Footer. |
| `ui_kits/portfolio-site/` | The interactive one-page portfolio + case-study view. Start here. |
| `guidelines/` | Foundation specimen cards (colour, type, spacing, brand). |
| `assets/references/` | The two supplied mood screenshots. |
| `thumbnail.html` | Homepage tile. |
| `SKILL.md` | Agent-skill wrapper for use outside this project. |

### Components
**Core** — `Button`, `IconButton`, `Icon`, `Pill`, `Tag`, `Badge`, `Card`, `SectionHeading`, `Marquee`, `Blob`, `Sticker`.
**Forms** — `Input`, `Textarea`, `Select`, `Checkbox`, `Switch`.
**Portfolio** — `NavBar`, `MediaFrame`, `TiltCard`, `ProjectCard`, `StatBlock`, `TestimonialCard`, `ContactCTA`, `Footer`.

Every component has a sibling `.d.ts` (props contract) and `.prompt.md` (when to use it).

Because no source defined a component inventory, this set was authored to the brief. **Intentional additions** worth calling out: `Icon` (wrapper over the substituted Lucide set), `Blob` and `TiltCard` (the two components that carry the requested "3D" quality), `MediaFrame` (so layouts hold their shape before real imagery exists).

---

## Content fundamentals

**Voice: first person, singular, unbothered.** The page is written by one designer, so it says *I*, not *we*, and addresses the reader as *you* only in the calls to action. Confident but never boastful — claims are specific and checkable.

- **Headlines** are short, declarative and slightly provocative: "Design that refuses to be quiet", "Let's make something loud". Three to six words. No colons, no "Elevate your…", no questions.
- **Body copy** is plain and concrete. "Nine years of shipping work that is loud on the outside and precise underneath." Numbers are written out when small ("Nine years"), numeric when they're proof ("48 projects", "3.2×").
- **Micro-copy** is dry and human: "I read everything and reply within two working days, even if it's a no." "Built with too much coffee."
- **Buttons** are UPPERCASE and verb-led: SEE THE WORK, BOOK A CALL, SEND IT, HIRE ME. Never "Learn more", never "Submit".
- **Eyebrows** are numbered mono caps: `01 / WORK`, `02 / ABOUT`, `03 / CONTACT`.
- **Tags and metadata** are mono uppercase, single words where possible: BRAND · 3D · MOTION · 2026.
- **Casing:** sentence case for headlines and body; UPPERCASE for buttons, pills, tags, eyebrows and badges; never Title Case.
- **Punctuation:** em dashes for asides, no exclamation marks, curly quotes in pull quotes.
- **Emoji: no.** The playful register comes from stickers, colour and the ✳ marquee separator, not emoji.
- **Empty states** stay in voice: "Nothing filed under 'Motion' yet."

---

## Visual foundations

**Overall vibe.** Warm printed-paper ground, hard black outlines like a sticker sheet, four or five saturated flat colours, one oversized display face, and — floating behind all of it — soft blurred gradient orbs that give the page depth. Loud and graphic, but structured: everything sits on a 4px grid inside a 1280px page.

**Colour.** The page is never white — `--paper-200` (#F7EFE5) is the default background and `--paper-000` (#FFFDF9) is the card surface. Text and every border are `--ink-900` (#0D0C0B). Accents are flat, high-chroma and used at three steps (500 fill, 300 soft fill, 100 tint): blue, mint, lilac, blush, butter, clay. Rule of thumb: **one accent per section**, always enclosed by an ink outline; tints (100) for large fills, 500s for small ones. Exactly one dark section per page — the closing `ContactCTA` slab.

**Type.** Archivo (variable, weight 900, `wdth` 112–125) for anything display; DM Sans for text; JetBrains Mono for eyebrows, tags and metadata. Display tracking is aggressively negative (−0.045em at hero size) and leading is sub-1 (0.86). Body copy is 17px/1.55 and capped at 64ch. Hero type is the loudest element on the page and is never competed with.

**Spacing & layout.** 4px base scale, `--section-y` between sections (72→160px fluid), 24px gutters inside cards. Page max width 1280px. Layout is flex/grid with `gap` — never margins between siblings. The nav is the only fixed element: a floating blurred pill with a 16px inset, sticky at the top; it is never full-bleed.

**Backgrounds.** Flat paper colour plus 1–3 absolutely-positioned `Blob`s (blurred radial gradients, 48px blur, 24s rotate-and-breathe) bleeding off the edges at 40–55% opacity. No photographic backgrounds, no repeating patterns. An optional `.loop-grain` class adds a 5% dotted multiply texture over media wells — the only texture in the system.

**Borders & radii.** 2px solid ink on every interactive or contained element; 1px only on small tags. Radii: 6 / 10 / 16 / 24 / 36 / 48 / pill. Controls are always pills; cards are 24px; media wells are 36px.

**Shadows.** Two families, never mixed on one element. *Sticker* — hard offsets with no blur (`2px 2px 0`, `4px 4px 0`, `8px 8px 0` in ink) on everything outlined. *Soft* — ambient blur (`0 12px 32px -12px`) reserved for objects that are meant to read as floating in 3D (tilted media, blobs). Plus `--shadow-inner-lip` for a subtle pressed edge.

**Animation.** Fast and springy, never floaty. `--dur-fast` 120ms for controls, `--dur-base` 220ms for state, `--dur-slow` 420ms for tilt release. Easing is `--ease-spring` (cubic-bezier(.34,1.56,.64,1)) for anything that moves toward the pointer and `--ease-out` for everything else. Continuous motion is slow: the marquee is 28s, blobs 24s, stickers bob 6s. Fades alone are not used — things move as well as fade.

**Hover states.** Elements *lift toward the reader*: `translate(-2px,-2px)` with the offset shadow growing from 4px to 8px. Colour does not change on hover; geometry does. Links change colour (blue → lilac). Project tiles additionally tilt in 3D and pick up a specular glare that tracks the pointer.

**Press states.** The mirror image: `translate(2px,2px)` and the shadow collapses to 1px, so the element visually sinks onto the page. No colour darkening, no scale-down.

**Focus.** 3px `--lilac-500` outline at 3px offset, on top of whatever shadow the element already has. Never removed.

**Transparency & blur.** Used in exactly two places: the nav (82% paper + 14px backdrop blur) and the blob layer. Cards are always opaque — the outline/shadow language falls apart on glass.

**Imagery.** Warm, saturated, high-contrast; slight grain. Every image sits inside a `MediaFrame` — outlined, radius 36, cropped to 4:3 / 16:10 / 16:9. When there is no image yet, the frame shows a brand gradient with a mono-caps label rather than a grey box, so the layout is honest about the gap.

**Cards.** Paper (or a 100-tint) fill, 2px ink border, 24px radius, 4px hard offset shadow, 32px padding, contents stacked with a 24px gap. Tinted cards carry the accent; ink cards invert text to paper.

---

## Iconography

**There is no bespoke icon set** — none was supplied, and drawing one would be inventing brand material. Loop uses **[Lucide](https://lucide.dev)** (2px stroke, round caps, 24px grid), loaded per-icon from the `lucide-static` CDN through the `Icon` component:

```jsx
<Icon name="arrow-up-right" size={18} />       // ink
<Icon name="arrow-right" tone="inverse" />     // on ink / blue fills
```

> ⚠️ **Substitution flagged.** Lucide is a stand-in chosen because its 2px outline weight matches the system's 2px borders. If you have a real icon set, drop the SVGs into `assets/icons/` and repoint `components/core/Icon.jsx`.

Rules:
- Icons are **monochrome ink** (or paper on dark). Never coloured, never filled.
- Size to the text: 14px beside captions, 16–18px in buttons, 20px standalone.
- Directional icons only in CTAs (`arrow-right`, `arrow-up-right`, `arrow-down`, `arrow-left`).
- Round `IconButton` for anything icon-only; always with an `aria-label`.
- **No emoji as icons.** The one decorative glyph in the system is the ✳ marquee separator.
- Social links use Lucide brand glyphs (`twitter`, `github`, `dribbble`, `mail`).

## Fonts

All three families are Google Fonts, loaded via the `@import` at the top of `styles.css`: **Archivo** (variable wght+wdth), **DM Sans**, **JetBrains Mono**. No font binaries are vendored — if you need offline builds, download the woff2 files into `assets/fonts/` and swap the `@import` for `@font-face` rules.

## Logo

**No logo was provided, and none was invented.** Wherever a mark would go, the brand name is set in Archivo Black at `wdth` 125 with −0.04em tracking (see `guidelines/wordmark.html` and the `brand` prop on `NavBar`/`Footer`). Replace the wordmark with a real mark when one exists.
