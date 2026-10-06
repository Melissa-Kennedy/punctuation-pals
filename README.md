# Punctuation Pals

**Live app: [punctuation-pals-playground.lovable.app](https://punctuation-pals-playground.lovable.app)**

A kid-friendly punctuation explorer for a grade 4 reader. Type a punctuation
mark (or its name, like "comma") and it shows up on a card that explains:

- **What it does:** a short job label and a plain-language definition.
- **How it feels:** three emojis, each paired with a feeling word, because
  emojis are how she connects with tone.
- **How it sounds:** a small line showing whether your voice goes up, down,
  louder or fades out, plus a four-step meter for how long to pause.
- **What it looks like in use:** an example sentence written on primary
  handwriting paper (solid top line, dashed midline, solid baseline), with
  the mark highlighted, and a tip.

All 12 marks are also listed as buttons at the bottom, and a "Surprise me"
button picks one at random.

## The 12 marks

Period, question mark, exclamation mark, comma, apostrophe, quotation marks,
colon, semicolon, hyphen, dash, ellipsis and parentheses.

## Friendly input checking

- Letters, numbers and emojis get a kind message explaining what punctuation is.
- `!!!` or `???` shows the single mark, with a note that one is enough.
- `....` shows the ellipsis (always three dots), and `--` shows the dash.
- Curly and straight quotes and apostrophes are both recognized.

The live app also has a **Listen** button that reads the example sentence
aloud.

## What's in this repo

| Path | What it is |
|---|---|
| [`app/`](./app) | Source for the live app, copied from the [Lovable project](https://lovable.dev/projects/bc399feb-7844-4b5b-af07-d893e0682c12). TanStack Start, React, TypeScript and Tailwind. The content and lookup rules are in `src/lib/punctuation.ts`, and the page is `src/routes/index.tsx`. |
| [`prototype/`](./prototype) | The original single-file HTML version that the Lovable app was built from. No build step and no dependencies other than Google Fonts. Open `index.html` in a browser. |

`app/` is a one-time copy. Lovable is still the source of truth, so edits
made in Lovable won't show up here until they're copied again (or until the
project is connected to GitHub from Lovable).

### Running the app locally

```sh
cd app
npm install --legacy-peer-deps
npm run dev     # local dev server
npm test        # lookup-rule and routing tests
```

`--legacy-peer-deps` works around an npm 10 bug with this dependency tree.
`bun install` also works. The **Listen** button needs a `LOVABLE_API_KEY`
environment variable, so it only works on the hosted app.

## Design notes

- **Live app:** a "sticker sheet" look, with thick black outlines and hard
  shadows on a cyan background, using a yellow, coral and cyan palette.
  Outfit is used for headings, Figtree for the interface and Andika for the
  example sentences. The live app is light mode only.
- **Prototype:** Fraunces for the big marks and headings, Lexend for the
  interface (it was designed to make reading easier), and Andika for the
  example sentences (made for beginning readers, with a classroom-style "a").
  Each mark has its own color, with matching light and dark modes.
- **Accessibility (both):** works at phone width, has visible keyboard focus,
  and turns off animation for anyone who has reduced motion switched on.
