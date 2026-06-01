/*
 * posts.js — single source of truth for post data.
 *
 * Loaded directly in the browser (populates window.POSTS / window.POST_ORDER)
 * and required by tools/generate-seo.js at build time so the sitemap, RSS feed,
 * and JSON-LD structured data are generated from the same content. Add new posts
 * here only — everything downstream regenerates.
 */
const POSTS = {
  post11: {
    date: 'May 31, 2026',
    iso: '2026-05-31',
    title: "The Bricks & Minifigs Lego mess is a resale-business problem waiting to happen",
    category: 'Business Strategy',
    tag: 'Watch this space', tagClass: 'tag-amber',
    image: 'https://images.unsplash.com/photo-1606166325683-e6deb697d301?w=1160&h=440&fit=crop&q=80',
    body: `
      <p>There's a whole controversy going on right now with Bricks & Minifigs, the Lego resale chain, and one of their stores allegedly walking off with a man's father's lifetime collection of Star Wars Legos.</p>
      <p>The way I see it, this is one of the huge parts of the resale business, especially when it comes to franchises and franchise owners. I think it can really start to become super, super messy when it comes to reselling somebody else's collectibles, and then new franchise owners come in that change hands and change how things are done.</p>
      <p>And then it can leave somebody really kind of in the dust, which is kind of what's happening right now to this man's father's lifetime collection of Star Wars Legos. The family consigned it to a store in Oregon, the franchise changed ownership, and the new operators wouldn't honor the original arrangement or return what didn't sell.</p>
      <p>That's the part that should scare anybody in a consignment or resale model. The inventory on your shelves often isn't yours. It belongs to the people who trusted you with it. When the business changes hands, that trust doesn't automatically transfer, and the people who get hurt are the ones who were furthest from the paperwork.</p>
    `
  },
  post10: {
    featured: true,
    date: 'May 31, 2026',
    iso: '2026-05-31',
    title: "Costco's gas boom is a lesson in leveraging a great core business",
    category: 'Business Strategy',
    tag: 'Worth noting', tagClass: 'tag-emerald',
    image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=1160&h=440&fit=crop&q=80',
    body: `
      <p>Costco is a super cool type of business model, being able to have the wholesale prices for people, and as long as they buy enough of it and get enough savings, then it covers the membership fees. So in order to get the quote unquote savings, they have to spend a lot.</p>
      <p>It's a pretty good catch-22 that it's trapped a lot of, I would say, large families. I feel like they're the ones that are mostly utilizing it, because they do have to buy a lot.</p>
      <p>I think one big thing is them being able to take advantage of high gas prices and then being able to offer lower gas in the midst of that. I think it's kind of related to the kind of lateralness that you can have if you have a really, really, really successful central business model. You're able to piggyback off of that and be able to leverage a different type of one.</p>
      <p>And they're doing that in this case as a grocery store and also a gas station. They're not the first ones to do it, of course, but I think with their current boom that they're facing and seeing right now, they're definitely getting it to that point. It's very cool to see.</p>
    `
  },
  post7: {
    date: 'May 30, 2026',
    iso: '2026-05-30',
    title: "Dell's best day ever tells you where enterprise AI is actually going",
    category: 'AI & Automation',
    tag: 'Signal', tagClass: 'tag-cyan',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1160&h=440&fit=crop&q=80',
    // TODO: swap for your real short-video CDN URL (mp4/webm).
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    poster: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1160&h=440&fit=crop&q=80',
    body: `
      <p>Dell's stock had its best single day ever on Thursday — up 32%. The reason: AI server revenue.</p>
      <p>Not AI features. Not AI announcements. Not a partnership press release. Actual infrastructure revenue from enterprises buying servers to run AI workloads at scale. That's a materially different signal than most of what we've been watching.</p>
      <p>For the past two years, a lot of the AI conversation in business has been about the tool layer — Copilots, assistants, chatbots. What Dell's numbers tell you is that the infrastructure underneath all of that is being built out right now at serious, measurable scale. Companies aren't just experimenting anymore. They're buying hardware in volume.</p>
      <p>For RevOps and GTM teams, this matters more than it might seem on the surface. If your competitors are building AI infrastructure at this pace, the operational gap between teams running AI-native processes and teams still doing things manually is going to widen faster than most people expect.</p>
      <p>The window for getting ahead of this is still open. It won't be indefinitely.</p>
    `
  },
  post8: {
    date: 'May 30, 2026',
    iso: '2026-05-30',
    title: "Samsung just promised $400K bonuses. That's an AI story too.",
    category: 'RevOps',
    tag: 'Worth noting', tagClass: 'tag-emerald',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1160&h=440&fit=crop&q=80',
    body: `
      <p>Samsung Electronics just approved a profit-sharing deal that could pay semiconductor workers average bonuses of nearly $400,000. The agreement runs ten years and allocates 10.5% of the semiconductor division's operating profit directly to employees.</p>
      <p>That's a significant number. And it's an interesting counterpoint to the prevailing narrative that AI is purely a headcount reduction play.</p>
      <p>What Samsung is essentially saying is: the people who build and maintain the chips that power AI create enough value to warrant a meaningful share of the upside. That's a different model than "agents in, people out." It's closer to "AI creates value, and here's how we distribute it."</p>
      <p>For RevOps leaders thinking about their own organizations — this is worth sitting with. The companies that figure out how to share AI-driven productivity gains with the people doing the work are probably going to have an easier time retaining the talent that makes AI actually function inside a business. The ones that treat AI purely as a cost-reduction lever are going to feel that in attrition.</p>
      <p>AI creates value. The question of who captures it is going to define a lot of organizational dynamics over the next decade. Samsung just put a number on one answer.</p>
    `
  },
  post9: {
    date: 'May 30, 2026',
    iso: '2026-05-30',
    title: "AI is making cybersecurity harder — and that's a GTM problem too",
    category: 'AI & Automation',
    tag: 'Watch this space', tagClass: 'tag-amber',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1160&h=440&fit=crop&q=80',
    body: `
      <p>An award-winning ethical hacker made the rounds this week with a warning worth paying attention to: AI cybersecurity tools are approaching the point where they will outpace human researchers at finding vulnerabilities. AI systems are already accelerating how fast security flaws get discovered — on both sides of the equation.</p>
      <p>That means the attack surface is expanding faster than most security teams can respond to it.</p>
      <p>This isn't just a security team problem. For RevOps and GTM operations, it has direct implications. Your CRM holds customer data, deal history, email sequences, and contact records. Your integrations connect your marketing automation, your sales stack, your support tools, your data warehouse. If any of those systems have vulnerabilities that AI-assisted attackers can now find faster than ever, the blast radius for a breach hits the entire revenue operation — not just IT.</p>
      <p>The practical takeaway isn't to panic. It's to ask your IT and security counterparts a straightforward question: are we auditing the integrations in our GTM stack the same way we audit financial systems? Most of the time, the answer is no. Those integrations are where your most sensitive commercial data moves, and they're often the least scrutinized.</p>
      <p>As AI accelerates both sides of the security equation, that gap is worth closing before someone else finds it first.</p>
    `
  },
  post6: {
    date: 'May 29, 2026',
    iso: '2026-05-29',
    title: 'Where AI actually falls apart',
    category: 'AI & Automation',
    tag: 'Signal', tagClass: 'tag-cyan',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1160&h=440&fit=crop&q=80',
    // TODO: swap for your real short-video CDN URL (mp4/webm). `poster` shows instantly; the clip only loads when scrolled into view.
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    poster: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1160&h=440&fit=crop&q=80',
    body: `
      <p>I've been diving into Claude, Claude Co-Work, and Claude Dispatch this weekend, really trying to see how much of an agentic system process I can build to lessen my workload and focus on what I actually need to do.</p>
      <p>Today especially, I started to see what people mean when they say AI starts to fall apart.</p>
      <p>Context windows are a big factor. Gemini has one of the largest, a couple million tokens, but even then, the memory that an AI has to maintain reasoning is not persistent beyond those limits. At the end of the day, it's still predicting the next token. It simulates persistence and reasoning, but it doesn't actually have it.</p>
      <p>I think this is one of the biggest downfalls of AI right now. It's what's keeping it from being the fully disruptive, end-all tool that people are claiming it is.</p>
      <p>That said, LLMs have enabled non-developers to build applications and communicate with computers using natural language, which is huge.</p>
      <p>But it's not ready to just take the keys and go. Right now it's like: "Here are the keys, go drive." And it says "okay," but there are too many variables it can't account for.</p>
      <p>That's why a single prompt approach doesn't work. Everything needs to be piecemealed out into structured steps, with systems in place for validation, verification, and consistency.</p>
    `
  },
  post5: {
    date: 'May 29, 2026',
    iso: '2026-05-29',
    title: 'The shift from "AI tools" to AI with actual business context',
    category: 'CRM Strategy',
    tag: 'Watch this space', tagClass: 'tag-amber',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1160&h=440&fit=crop&q=80',
    body: `
      <p>One thing I'm watching closely in the HubSpot ecosystem right now is the shift from "AI tools" to AI with actual business context.</p>
      <p>HubSpot's recent Spring Spotlight updates around AEO, AI agents, and contextual CRM data feel less like simple AI features and more like the beginning of operational AI inside GTM teams.</p>
      <p>The interesting part isn't just automation. It's that the AI can understand customer history, deal movement, support conversations, and business processes all in one place.</p>
      <p>The companies that organize their CRM and operational data well are probably going to get disproportionately more value from AI over the next few years.</p>
      <p>Clean systems and good process design are becoming even more important, not less.</p>
    `
  },
  post4: {
    date: 'May 29, 2026',
    iso: '2026-05-29',
    title: 'HubSpot vs. Salesforce: two very different bets on AI agents',
    category: 'HubSpot',
    tag: 'Worth noting', tagClass: 'tag-emerald',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1160&h=440&fit=crop&q=80',
    body: `
      <p>Salesforce has been loud about what AI means for their workforce. Marc Benioff said they would not hire new engineers this year because AI is doing the work. They've since cut 4,000 customer service roles. The message is pretty clear: agents in, people out.</p>
      <p>HubSpot is taking a different approach. Their Spring 2026 release put AI agents directly inside the CRM, but the pitch isn't about reducing headcount. It's about using the context HubSpot already has: your deal history, your pipeline definitions, your customer interactions, to make the people using it faster and sharper. The Prospecting Agent monitors funding rounds and intent signals. Smart Deal Progression reads your call transcripts and suggests next steps. It's all built on top of data that's already there.</p>
      <p>That distinction matters. One model treats AI as a replacement. The other treats it as an upgrade to the system your team already runs on. For most SMBs and mid-market companies, HubSpot's version is the one that actually makes sense.</p>
    `
  },
  post1: {
    date: 'May 27, 2026',
    iso: '2026-05-27',
    title: "HubSpot's AI push is a signal every RevOps team should read",
    category: 'RevOps',
    tag: 'On my radar', tagClass: 'tag-orange',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1160&h=440&fit=crop&q=80',
    body: `
      <p>HubSpot continuing to invest heavily into AI-powered automation is a reminder that CRM platforms are turning into operational systems, not just databases of record.</p>
      <p>For RevOps teams, this matters. The tools are getting smarter, but the strategy still has to come from people who understand the business. Knowing how to configure, prompt, and govern these systems is a real skill now.</p>
      <p>The teams that will win aren't the ones waiting to see what happens. They're the ones building the right foundations today.</p>
    `
  },
  post2: {
    date: 'May 20, 2026',
    iso: '2026-05-20',
    title: 'Site is live, built and deployed with AI',
    category: 'AI & Automation',
    tag: 'In the wild', tagClass: 'tag-pink',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1160&h=440&fit=crop&q=80',
    body: `
      <p>I built this entire site using Claude Code, Anthropic's AI coding tool. Start to finish: under an hour. GitHub repo, GitHub Pages deployment, custom workflow, all of it.</p>
      <p>The workflow is simple: describe what you want, review the output, push. No boilerplate hunting, no getting lost in documentation.</p>
      <p>This is what I mean when I talk about AI changing the pace of building. It's not replacing engineers. It's giving everyone else a shot at shipping something.</p>
    `
  },
  post3: {
    date: 'May 12, 2026',
    iso: '2026-05-12',
    title: 'What 10 years in marketing ops actually teaches you',
    category: 'Marketing Ops',
    tag: 'Timeless', tagClass: 'tag-purple',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1160&h=440&fit=crop&q=80',
    body: `
      <p>I've spent over 10 years helping organizations market themselves online: generating leads, tracking attribution, managing CRMs, and turning raw data into reporting that actually drives decisions.</p>
      <p>The answer is always the same: garbage in, garbage out. The best automation in the world can't fix a dirty database or a broken handoff process.</p>
      <p>Good RevOps starts with clean systems and clear ownership. The tools, the dashboards, the AI, all of it builds on that foundation.</p>
    `
  }
};

const POST_ORDER = ['post11', 'post10', 'post7', 'post8', 'post9', 'post6', 'post5', 'post4', 'post1', 'post2', 'post3'];

// Dual export: browser globals + CommonJS for the build-time SEO generator.
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { POSTS, POST_ORDER };
}
if (typeof window !== 'undefined') {
  window.POSTS = POSTS;
  window.POST_ORDER = POST_ORDER;
}
