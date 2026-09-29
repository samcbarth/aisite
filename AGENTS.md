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
- Add three relevant photos that are unique across the site and do not reuse the same base image inside one post.
- Keep the current featured post unless Sam requests a change.
- Avoid generic AI language, filler, hype, and repetitive conclusions.

## Site Architecture

- `posts.js` is the post source of truth.
- `index.html` contains matching static homepage cards.
- `tools/build.js` contains inline media, quote cards, and SamCBarth.com context.
- New posts must update all three surfaces.
- Public site: https://blog.samcbarth.com (GitHub Pages custom domain).
- Categories (use exactly one): HubSpot & CRM, RevOps & Ops, AI Adoption, AI Cost & Infrastructure, Security & Governance, Business & Markets.
- Tags: Analysis (tag-cyan), Opinion (tag-amber), Timeless (tag-purple).
- Set `hub` to one of the `HUBS` keys in posts.js (hubspot-ai, ai-costs, ai-adoption, ai-infrastructure) when the post fits one. Hub pages, related posts, and Start Here are generated from it.
- `noindex: true` keeps a page live but out of lists, sitemap, and feed. `mergedInto: 'postN'` turns a post into a redirect; remove it from POST_ORDER.
- Every post page gets two build-time link cards (samcbarth.com and the free workshop booking link). Do not add a generic samcbarth.com sign-off in the body; link samcbarth.com only where it fits the point.

## Publishing

- Run `npm run qa`.
- Commit intentionally and push `main`.
- Poll the GitHub Pages workflow.
- Verify the public homepage card, article URL, sources, images, quotes, and sitemap.
- Search image bases before publishing. A hero image must not be reused for inline or support art in the same post.
- Use photography for post art. Do not use generated SVGs or illustration-style stand-ins.
- Do not claim a post is live until public verification succeeds.

## Safety

- Never expose credentials or secrets.
- Do not overwrite unrelated user changes.
