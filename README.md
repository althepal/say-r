# Say R!

Say R! is a small, kid-friendly speech-practice app for vocalic and
post-vocalic **R**. It shows one silly sentence at a time, highlights the
practice words, and pairs supported sentences with a matching illustration.

The app is intentionally simple: everything runs from `index.html`. There is
no package manager, dependency install, build step, server, or framework.

## Run the app

Open `index.html` in a browser. After changing the file, reload the page.

The page validates its content at startup and throws an error in the browser
console if a sentence deck or illustration mapping breaks a required rule.

## Speech target

The target is an **R after a vowel**, including sounds commonly represented by
words such as `car`, `deer`, `chair`, `bird`, `fork`, `fire`, and `teacher`.
Initial-R words such as `red`, `rabbit`, and `run` are not targets.

Asterisks in the source mark practice words:

```js
"The *bird* found *corn* by the *barn*."
```

The app converts those markers into highlighted text. Do not put asterisks
around ordinary emphasis or initial-R words.

## Writing sentences

Each difficulty contains exactly 24 hand-written sentences. Keep sentences:

- Clear enough for a child to understand on the first read.
- Short, playful, and genuinely funny rather than random or confusing.
- Focused on useful vocalic/post-vocalic R words, with little filler.
- Free of semicolons and unnecessarily advanced punctuation.
- At least three marked R targets, with every vocalic/post-vocalic R word marked.
- Finished with an R target in the final phrase or clause.

Use common, shorter words for Easy. Mixed can combine several R sound shapes
and slightly longer ideas. Hard may use denser sound combinations such as
`world`, `squirrel`, `twirl`, and `pearl`, but it should still make sense.

When changing a pictured sentence, keep the characters, action, and important
props consistent with its image. Update the matching text in
`IMAGE_GENERATION_NOTES.md` as well.

## Pictures and app modes

Final illustrations are 640 × 640 WebP files in `assets/illustrations/`.
The `illustrations` array in `index.html` maps each file to a sentence by using
the sentence's exact array entry.

- **Pictures Only** cycles through mapped sentences at the selected difficulty.
- Normal mode can show any sentence. An unpictured sentence receives a random
  illustration, so it must not be mistaken for an exact visual match.
- **Favorites only** uses the browser's local storage. Editing a sentence
  changes its stored identity, so an old favorite may disappear.
- **Highlight R words** only changes presentation; it does not change the deck.

Keep the sentence arrays and illustration mappings as the source of truth.
Generated source PNGs under `~/.codex/generated_images/` are optional working
files and are not required by the app.

## Adding illustrations

Use one illustration per exact sentence. Keep all joke-critical characters and
props near the center, because the final image is square and displayed fairly
small. Avoid text, letters, speech bubbles, logos, watermarks, frightening
imagery, and unnecessary extra characters.

After generating an image:

1. Check that the scene accurately matches the sentence.
2. Crop it to a square without losing important subjects or props.
3. Resize it to 640 × 640 and export it as WebP.
4. Save it in `assets/illustrations/` with a descriptive filename.
5. Add its sentence mapping to `illustrations` in `index.html`.
6. Update `IMAGE_GENERATION_NOTES.md`.
7. Reload the app and test Pictures Only at all three difficulties.

`IMAGE_GENERATION_NOTES.md` contains the established visual prompt, the current
sentence-to-file mappings, and more detailed image-production guidance.

## Content invariants

The current JavaScript validation expects:

- 24 unique sentences in each of Easy, Mixed, and Hard.
- At least three marked targets per sentence, with no missed vocalic-R words.
- An R target in the last phrase or clause.
- The configured pictured-sentence count for every difficulty.
- A unique image path for every illustration mapping.

If the illustration set grows, update the pictured-count and total-image
assertions in `validateContent()` together with the mappings.
