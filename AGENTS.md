# AISite Instructions

## Communication

- Be concise.
- Do not use em dashes or emojis.
- Complete work without unnecessary questions.

## Article Work

- Use the `publish-aisite-article` skill for new posts and major rewrites.
- Write in Sam Barth's direct, conversational, practical voice.
- Preserve Sam's opinions and wording. Clean dictation without making it corporate.
- Do not invent opinions, experience, quotes, facts, or client stories.
- Use current, credible sources for factual claims.
- Use exact sourced quotes. Never present a paraphrase as a quote.
- Add three relevant images that are unique across the site.
- Keep the current featured post unless Sam requests a change.
- Avoid generic AI language, filler, hype, and repetitive conclusions.

## Site Architecture

- `posts.js` is the post source of truth.
- `index.html` contains matching static homepage cards.
- `tools/build.js` contains inline media, quote cards, and SamCBarth.com context.
- New posts must update all three surfaces.

## Publishing

- Run `npm run qa`.
- Commit intentionally and push `main`.
- Poll the GitHub Pages workflow.
- Verify the public homepage card, article URL, sources, images, quotes, and sitemap.
- Do not claim a post is live until public verification succeeds.

## Safety

- Never expose credentials or secrets.
- Do not overwrite unrelated user changes.
