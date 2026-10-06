# Punctuation Pals

Recreate the supplied single-page reference faithfully at the home page.

- Preserve all 12 marks, aliases, definitions, feelings, examples, tips, and validation messages exactly.
- Match the layout, Fraunces/Lexend/Andika fonts, light and automatic dark palettes, handwriting paper, pitch lines, pause meters, chips, and animations.
- Implement lookup, random selection excluding the current mark, chip selection, and URL hash selection. Start with the question mark when no valid hash exists.
- Check phone and desktop layouts, keyboard focus, reduced motion, and the complete lookup flow.

## Technical details

Use React state with a shared punctuation data and lookup module, existing Button variants, and semantic OKLCH tokens in the global Tailwind v4 stylesheet. Add focused tests for aliases, repeated marks, validation categories, and random-selection exclusion. No login or Cloud service is needed.