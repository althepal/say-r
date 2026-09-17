# Say R Illustration Notes

This file preserves the visual recipe for the illustrations currently used by
the app. It is intended as a handoff for a future Codex session.

## Current state

- The approved 15-image base is commit `17cd61d` on `main`.
- A second batch added 15 matched images, and the latest batch added 30 more.
- There are 60 matched illustrations: 20 Easy, 20 Mixed, and 20 Hard.
- Final assets live in `assets/illustrations/`.
- Every final asset is a 640 x 640 WebP.
- The second batch's source PNGs remain under
  `~/.codex/generated_images/01a0ade3-c1f0-75a3-9e06-520c0b4684d4/`.
- The latest batch's source PNGs remain under
  `~/.codex/generated_images/01a0afdb-979a-7b03-a9e3-734f0b1cb863/`.
- `index.html` maps each asset directly to its exact sentence in the
  `illustrations` array.
- The images appear in a square side panel on desktop and below the sentence on
  smaller screens.

## Reusable generation prompt

Use the built-in image generator, one call per illustration. Replace the exact
sentence and scene-specific subject description for each image.

```text
Use case: illustration-story
Asset type: square side illustration in a children's speech-practice web app
Primary request: Illustrate this silly sentence: "[EXACT SENTENCE]" [Describe the characters, action, and important joke props plainly.]
Scene/backdrop: a whimsical, uncluttered setting appropriate to the sentence
Subject: [List every character and prop that must be visible.]
Style/medium: polished modern children's-book illustration, expressive rounded characters, warm hand-drawn detail, lightly textured, not overly babyish
Composition/framing: square-safe compact medium shot. Keep every essential character, face, action, and prop completely inside the central 60-70% of the canvas. Group the subjects closely. Leave only expendable scenery near the outer edges. The image must remain understandable when displayed as a small square web tile.
Lighting/mood: bright, cheerful, absurd, and friendly
Color palette: warm cheerful colors with clear contrast
Constraints: no text, letters, speech bubbles, logos, or watermark; no collision, injury, or frightening imagery; no unnecessary characters or duplicate props
```

The generator may initially return a 1536 x 1024 landscape PNG. Compose it for
a central square crop from the outset. Inspect the square crop before accepting
the result; important props must not merely exist in the wide source—they must
remain obvious in the final square.

## Current sentence-to-file mappings

### Easy

- `teacher-hamster-freezer.webp` — “The teacher heard a hamster whisper, ‘The burger is in the freezer.’” Show a friendly teacher leaning toward a whispering hamster, with one burger clearly visible in an open freezer.
- `monster-butter-mirror.webp` — “A furry monster put butter on a mirror and called it dinner.” Show one lovable furry monster proudly spreading butter onto a standing mirror, with a plate and butter dish nearby.
- `drummer-turnip-dessert.webp` — “The weird drummer discovered a turnip under his dessert.” Make the drummer, dessert, and revealed turnip unmistakable.
- `surfer-hamster-shelter.webp` — “The bearded surfer turned his sweater into a hamster shelter.” Clearly show the bearded surfer, sweater shelter, and hamster together.
- `hamster-burger-fern.webp` — “A purple hamster discovered a tiny burger beneath the fern.” Clearly show the purple hamster finding a miniature burger under a fern.
- `deer-sweater-freezer.webp` — “The nervous deer wore a purple sweater and curled up by the freezer.” Show the deer enjoying the cold beside an open freezer while wearing the purple sweater.
- `mermaid-cereal-bird-earrings.webp` — “A cheerful mermaid served cereal to a bird with earrings.” Make the cereal and the bird's earrings clearly visible.
- `wizard-theater-fern.webp` — “A thirsty wizard searched the theater and found a missing fern.” Show the wizard searching a theater, with the fern visible in the scene.
- `sister-burger-earring.webp` — “My sister measured a burger with an earring and seemed surprised.” Use an oversized hoop earring so the measuring joke reads clearly.
- `deer-fern-birdhouse.webp` — “The thirsty deer turned a fern into a perfect birdhouse.” Show the deer presenting a birdhouse made from recognizable fern leaves.
- `deer-steer-monster-pier.webp` — “The deer heard a steer whisper, ‘There's a monster by the pier.’” Show the deer listening to the whispering steer while a friendly monster peeks from beside the pier.
- `bird-teacher-dessert.webp` — “A nervous bird cheered when the teacher dropped her dessert.” Show the cheering bird, surprised teacher, and fallen dessert.
- `drummer-cereal-mitten.webp` — “The perfect drummer served cereal in a winter mitten.” Show the proud drummer presenting cereal inside an oversized knitted mitten.
- `hamster-fern-dinner.webp` — “A purple hamster served ferns to its dinner guests.” Show the purple hamster serving fern leaves to two amused animal guests.
- `hamster-monster-sneeze.webp` — “The fearful hamster cheered when the furry monster sneezed.” Show one hamster cheering beside one lovable sneezing monster.
- `mermaid-deer-butter.webp` — “A mermaid whispered to the deer during dinner, ‘Please pass the butter.’” Show the mermaid and deer at dinner with the butter dish clearly centered between them.
- `wizard-bird-mirror.webp` — “The bearded wizard heard a bird singing inside the mirror.” Show the wizard listening to a bird visibly contained inside the mirror.
- `teacher-sweater-fern.webp` — “The teacher turned her sweater inside out and found a fern.” Show the teacher holding the inside-out sweater with a fern emerging from it.
- `cereal-mirror-sister.webp` — “Cereal by the mirror made my sister nervous.” Show the nervous young woman, cereal bowl, and standing mirror together.
- `teacher-earring-hamster.webp` — “The teacher found her earring inside the hamster's dinner.” Show the teacher lifting a visible earring from the hamster's dinner bowl.

### Mixed

- `pirate-pear-ticket.webp` — “A nervous pirate parked his cart at the fair and made a pear buy a ticket.” Show the pirate, parked wooden cart, and anthropomorphic pear receiving a fair ticket.
- `hairy-pear-haircut.webp` — “The teacher found a hairy pear hiding under a chair and gave it a haircut.” Show the teacher giving a comically hairy pear a careful haircut beside the chair.
- `shark-scarf-burger.webp` — “A furry shark wore a scarf to dinner to impress a burger.” Place the friendly furry shark in a fancy scarf and the smiling burger together at a tiny restaurant table like a silly dinner date.
- `dinosaur-pear-silverware.webp` — “The bearded dinosaur shared a pear with my sister, then ate the silverware.” Keep the scene playful and harmless; make the bearded dinosaur, pear, girl, and silverware readable.
- `fairy-purple-carousel.webp` — “A scary fairy steered a cart through the park toward a purple carousel.” Keep the fairy child-friendly rather than frightening, and clearly show the cart and purple carousel.
- `bear-burgers-food-critic.webp` — “The cheerful bear served burgers at the fair, but a food critic gave them one star.” Show the bear's burger stand and the critic holding one star-shaped rating token, with no written rating.
- `farmer-corn-sweater-scarecrow.webp` — “A cheerful farmer discovered corn in his sweater and blamed the scarecrow.” Show the farmer pulling an ear of corn from the sweater and pointing at the scarecrow.
- `teacher-cake-fire-extinguisher.webp` — “A teacher carried a fiery cake onto the porch, and the candles ordered a fire extinguisher.” Show the expressive candles gesturing toward a visible extinguisher.
- `mermaid-square-hat-reporter.webp` — “A mermaid wore a square hat on the pier, and a fashion reporter called it perfect.” Make the square hat, reporter, microphone, and camera readable.
- `bear-bird-earplugs.webp` — “A tired bear heard a bird by the barn and ordered fluffy earplugs.” Show the sleepy bear, singing bird, barn, and oversized fluffy earplugs.
- `deer-cart-pier.webp` — “The deer parked a cart near the pier, and its wheels feared sand.” Show the deer, cart, pier, sand, and worried expressive wheels.
- `vampire-fire-candles.webp` — “The purple vampire feared the fire, but even the candles grew nervous.” Keep the purple vampire child-friendly and show the fireplace and two nervous candles.
- `horse-burger-wrapper.webp` — “A thirsty horse carried a burger to the barn, then ate the wrapper.” Show the horse holding the burger and chewing its wrapper beside a barn and water pail.
- `pirate-cart-fire.webp` — “The weird pirate parked a cart by the fire, and it demanded a driver.” Show the friendly pirate, expressive cart, and small campfire together.
- `sister-bear-air-jar.webp` — “My sister scared a bear with a sparkly jar labeled ‘Fresh Air.’” Show a young woman presenting a sparkling jar to a comically surprised bear; the illustration intentionally has no written label.
- `hamster-scarf-fair.webp` — “The nervous hamster wore a scarf to the fair because its tail felt bare.” Show the scarf wrapped around the hamster and its tail at a colorful fair.
- `bird-vampire-campfire.webp` — “A bird stared at a vampire by the campfire until they both felt awkward.” Show the bird and child-friendly vampire exchanging an awkward stare across the fire.
- `monster-storm-popcorn.webp` — “The furry monster snored through a stormy morning, waking the popcorn.” Show the sleeping monster and surprised, expressive popcorn during a rainstorm.
- `surfer-hair-burger.webp` — “The surfer found a hair in his burger at the park and asked for its manager.” Show the surfer lifting the hair from a burger that wears a tiny manager's tie.
- `purple-horse-star-dessert.webp` — “A purple horse admired a star at dinner until dessert arrived.” Show the horse, star, dinner setting, and spectacular dessert arriving on a cart.

### Hard

- `squirrel-walrus.webp` — “The world's worst squirrel hurled a pearl at a walrus in a bathrobe.” Cluster one expressive squirrel, one surprised friendly walrus in a cozy bathrobe, and one pearl in midair. The pearl must be clearly visible between them. Use playful slapstick with no impact or injury.
- `girl-pearls-cereal.webp` — “The girl tried to twirl thirty pearls, and the cereal was the winner.” Clearly show the girl, many twirling pearls, and winning cereal as the visual payoff.
- `early-bird-corn-earth.webp` — “An early bird hurled corn across the world and missed the Earth.” Use playful fantasy: cluster one determined bird, one clearly visible ear of corn in flight, a small globe, and a friendly Earth. The corn must be large enough to recognize in the square crop.
- `squirrel-burger-airmail.webp` — “The squirrel hurled a burger past the world's smallest barn and called it airmail.” Arrange one enthusiastic squirrel, one flying burger, and one extremely tiny red barn as a tight central group. The burger and barn must both be unmistakable.
- `squirrel-fork-corn.webp` — “The squirrel twirled a fork while stirring corn, and the server ducked.” Clearly show the squirrel, twirling fork, corn, and ducking server in one compact scene.
- `girl-world-skirt.webp` — “A curly-haired girl twirled around the world, got dizzy, and blamed her skirt.” Show the dizzy girl beside a small globe, pointing at her swishing skirt.
- `squirrel-surfboard-encore.webp` — “The world's curliest squirrel twirled on a surfboard while the waves demanded an encore.” Show the curly squirrel performing while expressive waves applaud.
- `squirrel-purple-jar-resort.webp` — “The squirrel curled up in a purple jar, a private resort.” Make the transparent purple jar look like a tiny vacation resort.
- `girl-popcorn-squirrel-pearls.webp` — “The girl hurled popcorn at a squirrel wearing pearls, and it asked for more.” Keep the toss playful and show the squirrel's pearls and bowl clearly.
- `tiny-squirrel-fire-burger.webp` — “The world's smallest squirrel curled up beside the fire and ordered a tiny burger.” Make the miniature scale of both squirrel and burger obvious.
- `squirrel-pearl-thunderstorm.webp` — “The squirrel curled around a pearl during a thunderstorm because the weather felt personal.” Show the squirrel hugging the pearl and glaring at an expressive storm cloud from a cozy tree hollow.
- `squirrel-pearls-burger.webp` — “A purple squirrel wore a pearl necklace but preferred a burger.” Show the purple squirrel wearing pearls and happily choosing the burger.
- `girl-pearl-cereal-server.webp` — “A curly-haired girl found a pearl in her cereal and blamed the server.” Show the girl holding the pearl above her cereal and pointing at the surprised server.
- `bird-scarf-farmer.webp` — “An early bird twirled a scarf around a farmer, and he thanked the weather.” Show the bird flying in a circle and wrapping the scarf around the farmer at sunrise.
- `girl-pearl-storm-purse.webp` — “A curly-haired girl carried a pearl through the storm because the purse was full.” Show the girl carrying the oversized pearl beside her visibly stuffed purple purse.
- `pearl-world-squirrel-adventure.webp` — “A pearl crossed the world while the squirrel snored through the entire adventure.” Show the traveling pearl crossing a friendly globe while the squirrel sleeps in a basket. The small Z sleep symbols are approved.
- `squirrel-world-fire.webp` — “The curly squirrel twirled beside the world's largest fire.” Show the curly squirrel twirling beside an enormous but safely contained festival fire.
- `girl-pearls-cart.webp` — “The girl wore thirty pearls while steering a cart, and the cart demanded turning lessons.” Show the pearl-covered girl steering a cart with expressive eyes and crooked wheels.
- `squirrel-pearl-farmer-corn.webp` — “The squirrel hurled a pearl into the farmer's corn and shocked the world.” Show the airborne pearl, squirrel, surprised farmer with corn, and expressive globe.
- `early-bird-fire-weather.webp` — “The world's earliest bird curled up near the fire and blamed the weather for oversleeping.” Show the sleepy bird pointing at an annoyed raincloud beside the fire and sunrise clock.

## Finishing workflow

1. Generate each scene separately so one rejected result cannot cancel a batch.
2. Inspect the full source and its intended square crop.
3. Regenerate any scene whose joke or important prop is missing, ambiguous, or
   outside the square-safe center.
4. Crop to the best central 1:1 region, resize to 640 x 640, and export as WebP
   at approximately quality 82.
5. Save it under `assets/illustrations/` with a short descriptive filename.
6. Add the exact sentence mapping to the `illustrations` array in `index.html`.
7. Verify that Pictures Only shows the correct matching image and that each
   difficulty has 20 illustrated sentences.

The key lesson from the first pass: do not generate edge-to-edge landscape
compositions and hope to crop them later. Put every joke-critical subject and
prop near the center during generation.
