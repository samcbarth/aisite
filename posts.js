/*
 * posts.js — single source of truth for post data.
 *
 * Loaded directly in the browser (populates window.POSTS / window.POST_ORDER)
 * and required by tools/generate-seo.js at build time so the sitemap, RSS feed,
 * and JSON-LD structured data are generated from the same content. Add new posts
 * here only — everything downstream regenerates.
 */
const POSTS = {
  post25: {
    featured: false,
    date: 'June 11, 2026',
    iso: '2026-06-11',
    title: "Anthropic's compute deal shows AI is turning into balance-sheet infrastructure",
    category: 'AI & Automation',
    tag: 'Signal', tagClass: 'tag-cyan',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1160&h=440&fit=crop&q=80',
    body: `
      <p><a href="https://www.axios.com/2026/06/10/apollo-anthropic-blackstone-broadcom" target="_blank" rel="noopener noreferrer">Axios reported</a> that Apollo and Blackstone are leading a $35 billion debt deal to help finance Anthropic's compute. That is a very different kind of AI story than a model launch or a product demo. This is AI being financed like infrastructure.</p>

      <p>I think that is the part worth paying attention to. Once compute starts getting funded through huge debt structures, special purpose vehicles, and long-term leasing arrangements, the market is telling you that AI is not being treated like a normal software cycle anymore. It is being treated like something closer to railroads, telecom, cloud, or energy.</p>

      <p>That does not automatically mean the economics are good. It means the stakes are getting bigger. If these companies need this much capital just to stay competitive, then the winners are not only going to be the companies with the best models. The winners are going to be the ones that can secure compute, structure financing intelligently, and keep customers growing fast enough to justify the buildout.</p>

      <p>My hesitation is that this is where hype can get dressed up as financial engineering. Off-balance-sheet structures can make the story look cleaner than it feels underneath. The demand might be real, but the risk is also real. If customers slow down, if margins compress, or if compute gets cheaper faster than expected, these deals start to look a lot less elegant.</p>

      <p>For business operators, the lesson is not to copy the scale. It is to understand the direction. AI is moving from a tool budget into an infrastructure decision. That means the teams adopting it need to think harder about where the cost shows up, who owns the risk, and whether the workflow value is real enough to justify the expense.</p>
    `
  },
  post24: {
    featured: false,
    date: 'June 11, 2026',
    iso: '2026-06-11',
    title: "Amazon's new AI loan makes the spending story impossible to ignore",
    category: 'Business Strategy',
    tag: 'Watch this space', tagClass: 'tag-amber',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1160&h=440&fit=crop&q=80',
    body: `
      <p><a href="https://www.marketwatch.com/story/amazon-lines-up-another-17-5-billion-for-ai-as-its-debt-pile-grows-further-5f16be9c" target="_blank" rel="noopener noreferrer">MarketWatch reported</a> that Amazon has lined up another $17.5 billion loan tied to its AI expansion. That is the kind of number that makes it hard to keep treating AI spending like a normal tech investment cycle.</p>

      <p>Amazon has a real business underneath this. AWS is not some speculative science project. It is one of the strongest cloud businesses in the world. But even for Amazon, the scale of this spending starts to change the conversation. When a company that large has to keep raising more capital to support AI infrastructure, the market has to ask what the return profile actually looks like.</p>

      <p>I do not think this is automatically a bubble. I also do not think it is automatically brilliant. It is probably both, depending on the customer, the workload, and how much of this demand turns into durable revenue instead of one big race to keep up with everyone else. That is what makes it hard to read.</p>

      <p>The scary part is that everybody is moving at once. If Amazon, Microsoft, Google, Meta, Oracle, and the model companies all keep spending this aggressively, then a lot of the upside depends on enterprise customers adopting AI fast enough to absorb the capacity. That is a big assumption. Enterprises do not move just because infrastructure is available. They move when the workflow value becomes obvious.</p>

      <p>My view is that Amazon can probably carry the weight better than most companies. But the bigger lesson is that AI is starting to look less like software margin expansion and more like a capital allocation test. The companies that win will be the ones that can turn expensive infrastructure into practical customer outcomes.</p>
    `
  },
  post23: {
    featured: false,
    date: 'June 11, 2026',
    iso: '2026-06-11',
    title: "Texas telling data centers to pay their own way is where this gets real",
    category: 'Business Strategy',
    tag: 'Watch this space', tagClass: 'tag-amber',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1160&h=440&fit=crop&q=80',
    body: `
      <p><a href="https://www.businessinsider.com/texas-governor-proposes-new-data-center-regulations-2026-6" target="_blank" rel="noopener noreferrer">Business Insider reported</a> that Texas Governor Greg Abbott wants data centers to pay more of their own way when it comes to power, water, and infrastructure. That is a big signal because Texas is not exactly known for being hostile to business.</p>

      <p>This is where the data center story starts to feel very practical. It is one thing for investors to talk about AI demand and cloud growth. It is another thing for people living near these projects to ask why their grid, water supply, or local tax base should carry the burden for a private infrastructure boom.</p>

      <p>I think this is the natural next phase of the pushback. Small towns and state governments have watched these projects get announced with huge dollar amounts attached, but the local tradeoff is not always clear. If the data center creates stress on the grid, uses a meaningful amount of water, and gets tax breaks on top of that, people are going to ask a pretty basic question: what are we actually getting back?</p>

      <p>That does not mean the projects should stop. It means the economics have to be more honest. If these companies believe the AI opportunity is worth hundreds of billions of dollars, then they should be able to build in a way that covers the real costs of power, water, roads, and community impact.</p>

      <p>The companies that figure this out will have a real advantage. Not because they are better at PR, but because they will be able to keep building while everyone else is fighting local backlash. Being a good neighbor is starting to look like an infrastructure strategy.</p>
    `
  },
  post22: {
    featured: false,
    date: 'June 11, 2026',
    iso: '2026-06-11',
    title: "OpenAI's data center influence warning shows the AI fight is bigger than zoning",
    category: 'AI & Automation',
    tag: 'Signal', tagClass: 'tag-cyan',
    image: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=1160&h=440&fit=crop&q=80',
    body: `
      <p><a href="https://www.businessinsider.com/openai-china-data-centers-influence-campaign-2026-6" target="_blank" rel="noopener noreferrer">Business Insider reported</a> that OpenAI disrupted a suspected China-linked influence operation trying to shape the conversation around US data centers. That is a strange story on the surface, but it makes sense once you think about where the AI race is heading.</p>

      <p>Data centers are no longer just local construction projects. They are strategic infrastructure. They sit at the intersection of power, chips, cloud capacity, national competitiveness, and public opinion. If a country can slow down another country's AI infrastructure buildout by amplifying local resistance or creating confusion, that becomes part of the game.</p>

      <p>I do not think this means every concern about data centers is manufactured. A lot of the concerns are very real. Power bills, water use, land use, and transparency all matter. But this story does show that the debate is going to get harder to read. Some pushback will be local and legitimate. Some will be political. Some might be shaped by outside actors trying to use real concerns for a different purpose.</p>

      <p>That puts more responsibility on the companies building these projects. If they are vague, secretive, or dismissive, they leave a vacuum that other people can fill. If they are transparent and specific about costs, benefits, and environmental impact, they give communities something real to evaluate.</p>

      <p>My takeaway is that the AI infrastructure story has moved into a much more complicated phase. It is not just a Wall Street story and it is not just a zoning story. It is a trust story, an information story, and increasingly a national strategy story.</p>
    `
  },
  post21: {
    featured: false,
    date: 'June 11, 2026',
    iso: '2026-06-11',
    title: "HubSpot's agentic AI bet is really about whether CRM becomes the operating layer",
    category: 'HubSpot',
    tag: 'Worth noting', tagClass: 'tag-emerald',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1160&h=440&fit=crop&q=80',
    body: `
      <p><a href="https://futurumgroup.com/insights/can-hubspots-agentic-ai-bet-disrupt-enterprise-crms-old-guard/" target="_blank" rel="noopener noreferrer">Futurum's analysis</a> of HubSpot's agentic AI push gets at the real question for CRM right now: can the CRM become the operating layer for the business, or is it still just the place where teams log activity after the real work happens somewhere else?</p>

      <p>That is why I think HubSpot's AI direction matters. If AI agents are going to be useful, they need context. They need to know the customer, the lifecycle stage, the deal history, the support issues, the last conversation, and the next best action. A generic chatbot cannot do that well. A CRM with clean data and good workflow design actually can.</p>

      <p>This is also where HubSpot has an interesting opening. Salesforce has the enterprise depth, but it can also get heavy fast. HubSpot's advantage has always been that teams can understand it, adopt it, and actually use it. If they can keep that simplicity while adding agentic workflows, that is a meaningful position.</p>

      <p>The risk is that AI agents sound better in a launch than they perform in a messy portal. Bad lifecycle stages, duplicate records, inconsistent properties, and unclear ownership will make any agent look worse than it is. That is why I keep coming back to operations. The quality of the AI output will depend on the quality of the system underneath it.</p>

      <p>My view is that this is the right direction for HubSpot, but the winner will not be the platform with the loudest AI branding. It will be the platform that helps teams turn messy customer data into clear next steps without making the business harder to run.</p>
    `
  },
  post20: {
    featured: false,
    date: 'June 10, 2026',
    iso: '2026-06-10',
    title: "Wall Street is flooding the hyperscalers with cash, but the real bill is still ahead",
    category: 'AI & Automation',
    tag: 'Signal', tagClass: 'tag-cyan',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1160&h=440&fit=crop&q=80',
    body: `
      <p>I think the hyperscaler investment story is one of the hardest ones to read right now, because the numbers are so large that they almost stop meaning anything on first pass. When you see investors pouring unprecedented cash into AI infrastructure, it is hard to tell whether that is the market seeing something real or just chasing the trade.</p>

      <p>My honest read is that it is probably both. There is real demand behind this, and there is also a lot of hype layered on top of it. That is what makes it messy. Every new model launch, every new funding round, and every new warning gets treated like it is either the beginning of the future or the beginning of the end.</p>

      <p>I do think some of the fear around these tools gets exaggerated. People have been warning that the latest release will break everything for a long time now, and we have heard versions of that before with earlier chatbot generations. The technology is obviously more capable than it was a few years ago, but it is also still miles away from the simplistic panic cycle people keep projecting onto it.</p>

      <p>What does feel real is the infrastructure problem underneath all of this. If the hyperscalers are going to keep spending at this pace, then they are going to have to figure out how to build data centers that are actually feasible at scale. That means power, water, land, cooling, and probably a much more serious conversation about sustainability than most of the market is having right now.</p>

      <p>I do not know if the answer is space, underground construction, vertical buildouts, or something else entirely. But I do know the companies that are serious about this will not be able to treat it like a temporary software trend. If the AI spending cycle keeps expanding, they will need to prove that the physical footprint can be built responsibly too.</p>
    `
  },
  post19: {
    featured: false,
    date: 'June 10, 2026',
    iso: '2026-06-10',
    title: "HubSpot's new AI pricing makes the product story feel more real",
    category: 'HubSpot',
    tag: 'Worth noting', tagClass: 'tag-emerald',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1160&h=440&fit=crop&q=80',
    body: `
      <p>The interesting part of HubSpot's Customer Agent and Prospecting Agent announcement is not just that they exist. It is the way HubSpot is pricing them. That tells you a lot about where the company thinks AI is actually useful.</p>

      <p>Instead of treating these like shiny add-ons, HubSpot is tying them to outcomes. That is a much cleaner story for teams that want to test AI without feeling like they are buying another seat-based promise they may or may not use.</p>

      <p>What stands out to me most:</p>
      <ul>
        <li><strong>Customer Agent</strong> is designed to handle routine support work and work alongside the human team instead of trying to replace it.</li>
        <li><strong>Prospecting Agent</strong> is built to help reps find better-fit accounts, spot signals, and get outreach moving faster.</li>
        <li><strong>Task-complete pricing</strong> is the real signal here. HubSpot wants buyers to think about output, not just access.</li>
        <li><strong>Lower-risk adoption</strong> makes the pitch easier for small and mid-sized teams that want to test AI without a huge commitment up front.</li>
        <li><strong>Operational value</strong> is the point. These tools are supposed to save time on real work, not just look impressive in a demo.</li>
      </ul>

      <p>I think that matters because it makes the product feel more tangible. HubSpot is not just saying it has AI. It is saying, in effect, here is what the agent did, here is what it saved you, and here is what you paid for the result.</p>

      <p>That is a much stronger position than vague AI branding. It is more measurable, easier to explain internally, and probably much easier to sell to teams that are already skeptical of software that promises too much and delivers too little.</p>
    `
  },
  post18: {
    featured: false,
    date: 'June 9, 2026',
    iso: '2026-06-09',
    title: "HubSpot's Spring 2026 Spotlight is all about making AI actually useful",
    category: 'HubSpot',
    tag: 'Signal', tagClass: 'tag-cyan',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1160&h=440&fit=crop&q=80',
    body: `
      <p>HubSpot's Spring 2026 Spotlight reads like a company trying to make one very clear point: AI is only helpful if it knows enough about the business to do something useful with it.</p>

      <p>That is what I think makes this release more interesting than a normal product update. It is not just a feature dump. It is HubSpot leaning hard into context, and context is what separates real workflow value from generic AI output.</p>

      <p>Here is the short version of what they pushed:</p>
      <ul>
        <li><strong>HubSpot AEO</strong> is their answer engine optimization play, built to help customers show up in AI search results instead of only traditional search.</li>
        <li><strong>Breeze Assistant</strong> is being trained on Loop Marketing so it can help teams build ICPs, brand guides, and campaign briefs with more context.</li>
        <li><strong>Smart Deal Progression</strong> takes the transcript plus CRM history and turns it into follow-up actions, CRM suggestions, and next-step guidance.</li>
        <li><strong>Prospecting Agent</strong> looks at job posts, funding rounds, tech adoption, and other signals to surface better leads and accounts.</li>
        <li><strong>Customer Agent</strong> is meant to handle routine support questions and let the human team stay focused on the harder problems.</li>
      </ul>

      <p>The part I keep coming back to is the benefit side of it. HubSpot is basically saying the same thing over and over in different forms: less generic AI, more business context, fewer random outputs, better outcomes.</p>

      <p>That is a good direction for them. It feels more practical, more grounded, and more in line with how real teams actually work. Most people do not need another chatbot. They need software that understands the customer, the pipeline, and the next thing that should happen.</p>
    `
  },
  post14: {
    featured: true,
    date: 'June 8, 2026',
    iso: '2026-06-08',
    title: "SpaceX's IPO story is really a story about what the market will pay for momentum",
    category: 'Business Strategy',
    tag: 'Signal', tagClass: 'tag-cyan',
    image: 'https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?w=1160&h=440&fit=crop&q=80',
    body: `
      <p>I think the SpaceX IPO story is bigger than the IPO itself. It is really a test of how much confidence the market is willing to put behind a company that has spent years turning ambition into a brand.</p>

      <p>That is not a criticism. SpaceX has earned a lot of credibility by actually shipping. It has become one of those companies where people assume execution before the filing is even finished. That kind of reputation is hard to build and even harder to fake.</p>

      <p>SpaceX also has a very real and established business model, which is part of why the IPO story matters so much. But Elon Musk clearly wants to connect it to xAI and a handful of other valuation stories in a way that feels aimed at building the first trillion-dollar company. That is where the whole thing gets both fascinating and unsettling. The upside is obvious if it works, but it also turns the whole structure into something a lot more fragile if the market stops believing the story all at once.</p>

      <p>But once a company like this goes public, the conversation changes. Private market hype is one thing. Public market accountability is another. Investors will want cleaner numbers, clearer margins, and a better explanation for how the story translates into real cash flow over time.</p>

      <p>I also think there is a broader lesson here for the rest of the market. A lot of businesses are being valued off future promise right now. SpaceX just happens to be the most visible example. When a company with this much momentum enters the public market, it raises the same question for everyone else: what is the actual business underneath the excitement?</p>
    `
  },
  post13: {
    featured: false,
    date: 'June 6, 2026',
    iso: '2026-06-06',
    title: "Oracle's AI infrastructure rally is about to meet the real world",
    category: 'AI & Automation',
    tag: 'Watch this space', tagClass: 'tag-amber',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1160&h=440&fit=crop&q=80',
    body: `
      <p>Oracle has clearly benefited from the AI infrastructure trade, and I understand why investors have been willing to reward that story. The market loves a clean narrative, and right now the narrative is simple: build data centers, support the AI buildout, and let the demand follow.</p>

      <p>But I think we are getting to the point where the real-world bill starts to show up. The more these projects move into smaller towns and rural counties, the more people are asking what they are giving up in return. Power demand, water use, land, traffic, and noise tend to become very real once the construction actually starts.</p>

      <p>What worries me most is how often communities are left in the dark until the project is already moving. I have heard enough stories about NDAs, vague descriptions, and misleading early conversations to know that trust can disappear fast when a town realizes it is getting a data center instead of the economic development project it thought was being discussed.</p>

      <p>If these companies want to keep growing, they are going to have to become better neighbors. That means cleaner operations, more honest environmental planning, real communication with residents, and actual local benefits that people can point to. If a company wants long-term permission to expand, it has to earn it.</p>

      <p>I am not pretending the upside is not real. The AI infrastructure wave has helped the broader market, and it has helped my portfolio too. But I do think there needs to be a reckoning on valuation, on impact, and on whether this next phase of growth can be built in a way communities will still accept five years from now.</p>
    `
  },
  post15: {
    featured: false,
    date: 'June 5, 2026',
    iso: '2026-06-05',
    title: 'Stargate is the clearest sign that AI is now a utility-scale business',
    category: 'AI & Automation',
    tag: 'Signal', tagClass: 'tag-cyan',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1160&h=440&fit=crop&q=80',
    body: `
      <p>The Stargate buildout is what happens when an AI story stops being about features and starts being about infrastructure. Once you get to five new data centers, you are not talking about software anymore. You are talking about land, power, permits, cooling, financing, and whether the country actually has enough grid capacity to support the plan.</p>

      <p>That is why I think this matters. A lot of people still talk about AI like it is mostly a product layer. But the companies making the biggest bets know it is becoming a utility-scale business. The winners are not just the ones with the best model. They are the ones who can secure the physical resources to run it at scale.</p>

      <p>There is also a risk hiding inside the optimism. Big infrastructure bets are easy to celebrate when everyone is expecting growth. They are a lot less comfortable when the economics tighten, the buildout slows, or the public starts asking why one of these projects needs so much water, electricity, and land in the first place.</p>

      <p>So to me, Stargate is both a signal and a warning. It shows how serious the AI race has become, but it also shows how expensive the race is going to be for everyone involved. The next phase is not about who can make the flashiest demo. It is about who can keep the lights on.</p>
    `
  },
  post16: {
    featured: false,
    date: 'June 3, 2026',
    iso: '2026-06-03',
    title: "The AI data center boom is running into a political problem",
    category: 'Business Strategy',
    tag: 'Watch this space', tagClass: 'tag-amber',
    image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1160&h=440&fit=crop&q=80',
    body: `
      <p>I think one of the biggest changes in the AI story right now is that communities are no longer reacting like they did at the beginning of the boom. People have seen what these projects can do to power demand, water use, traffic, and local politics, and they are much less willing to just trust the pitch.</p>

      <p>That creates a real problem for the companies and the politicians who want the buildout to keep moving. You can announce as many data centers as you want, but if the towns and counties have to live with the side effects, they are going to start asking harder questions about who benefits and who pays.</p>

      <p>The part that makes this even more sensitive is how little transparency some of these communities get. When residents feel like the details were hidden until the deal was already moving, it turns what should have been a development conversation into a trust conversation. Once that happens, the backlash usually gets a lot bigger.</p>

      <p>My view is pretty simple. If these companies want to keep building, they need to act like they actually plan to stay. That means cleaner projects, honest communication, and some real return for the places taking on the burden. Without that, I think the political pushback is only going to get stronger.</p>
    `
  },
  post17: {
    featured: false,
    date: 'June 2, 2026',
    iso: '2026-06-02',
    title: "China's space-based AI plan says a lot about where this race is headed",
    category: 'AI & Automation',
    tag: 'Signal', tagClass: 'tag-cyan',
    image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1160&h=440&fit=crop&q=80',
    body: `
      <p>I do not think space-based AI data centers are the near-term answer for most companies. But I do think the idea says a lot about where the competition is heading. When people start talking seriously about putting compute in orbit, that tells you the power and cooling problem on Earth is already getting extreme.</p>

      <p>This is one of those stories that sounds futuristic until you realize it is just the logical end point of the infrastructure race. If demand keeps climbing, companies and governments will keep looking for places with more room, more energy, and fewer local constraints. Space is the most dramatic version of that thinking.</p>

      <p>What stands out to me is that this is no longer just a Silicon Valley story. It is becoming a global infrastructure story. Countries are competing over chips, power, land, and long-term strategic control over the systems that run AI. That is a much bigger conversation than model quality or product launches.</p>

      <p>My takeaway is that the AI buildout is not slowing down. It is just getting more physical, more expensive, and more political. The real question is not whether the race continues. It is where the next bottleneck shows up first.</p>
    `
  },
  post12: {
    featured: true,
    date: 'May 31, 2026',
    iso: '2026-05-31',
    title: "The most valuable AI use case isn't a product. It's a personal tool.",
    category: 'AI & Automation',
    tag: 'In the wild', tagClass: 'tag-pink',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1160&h=440&fit=crop&q=80',
    body: `
      <p>There is a version of AI that gets a lot of attention and a version that does not. The one that gets the attention is commercial: AI copilots, AI add-ons, AI agents that companies can license. The one that does not is quieter and, honestly, more genuinely useful.</p>

      <p>It is people building their own small tools that connect directly to the browser-based apps they already live in every day. Run them locally on their own machines. Drop a keyboard shortcut on the desktop to access them in seconds. No new subscriptions. No vendor lock-in. No waiting for a product team to build the feature you actually want.</p>

      <p>I have been watching this pattern grow for the past year, and what strikes me is how many different kinds of people are doing it. The insight driving them is usually the same: you already have a set of tools that run your actual work and life. Gmail. Google Calendar. Notion. Slack. Todoist. And most people are still interacting with those tools entirely by hand, the same way they always have.</p>

      <p>What the more technically inclined figured out is that you can build a bridge between an AI and those tools, run it on your own machine, and create a desktop launcher to trigger it whenever you need it. Then they went ahead and did it.</p>

      <p>Simon Willison, the developer behind the open-source Datasette project, built a command-line tool called <em>llm</em> that now has over 12,000 GitHub stars. It lets you send files, clipboard contents, or any text directly to major AI models from your terminal. His personal tools repository has over 77 small apps and scripts, most of them AI-generated, and he adds new ones at a rate of several per week. That pace does not come from a chat interface. It comes from having purpose-built tools wired into an actual workflow.</p>

      <p>Marc Bara documented a more elaborate version earlier this year in a detailed Medium post. He built what he calls MarcOS: a personal system running on SQLite that syncs bidirectionally with Gmail, Google Calendar, and Outlook, with a local HTML dashboard that costs zero AI tokens to read. His operating principle is blunt: "Every operation I do more than once a day should cost zero tokens." Claude Code handles the judgment-requiring work. Everything repetitive runs locally.</p>

      <p>Alex Honchar connected Claude Code to Gmail, Google Calendar, Slack, Notion, and Clay and built something he describes as a personal AI Chief of Staff. The system generates weekly briefs from upcoming meetings, pulling in relevant context from each of those tools automatically. Where no native integration exists, he built a Chrome Extension to bridge the gap. The whole setup is documented on GitHub and Medium.</p>

      <p>Talha Tahir put a dollar figure on his version: $26 a month total. A $20 Claude Pro subscription plus a small VPS. His AI assistant runs 24 hours a day, delivers daily calendar briefings, and uses Discord as the chat interface. The machine runs in Helsinki and he accesses it from anywhere.</p>

      <p>Stephen Jayakar's take was simpler but pointed. He had 451 Notion journal entries he wanted auto-tagged. Notion's AI add-on costs $8 a month on top of the base subscription. He built his own tagger using GPT-4o and the Notion API, published the whole project on GitHub, and got the same result for almost nothing in API costs. His framing was direct: why pay for a feature when you can build it in a week and own it outright?</p>

      <p>The technology making most of this possible is Anthropic's Model Context Protocol, or MCP. It is an open standard released in late 2024 that lets Claude and other AI systems connect to external services in a structured, consistent way. Since it launched, developers have built community MCP servers for nearly everything. Taylor Wilson's Google Workspace MCP has over 2,600 GitHub stars and gives Claude full access to Gmail, Calendar, Drive, Docs, and Sheets. Nate Spady's standalone Google Calendar MCP has over 1,100 stars and installs in Claude Desktop with a single line in a config file. The tooling has gotten genuinely accessible to anyone willing to spend an afternoon on it.</p>

      <p>On the desktop launcher side, Raycast has become the go-to tool on macOS for wiring all of this together. The app, which raised a $30 million Series B in 2024, has built-in AI with Claude, GPT, and others, plus an extension marketplace covering Notion, Todoist, Linear, GitHub, Slack, and dozens more. You can write a custom AI command, bind it to a hotkey, and trigger it on selected text or clipboard content from anywhere on your machine. The community-built raycast-g4f extension alone has over 1,100 GitHub stars. Robert Oberg published an Alfred workflow called Kiki that does something similar for that launcher, with hotkey triggers, text transformation presets, and voice input via Whisper, all running locally on macOS.</p>

      <p>For a more complete desktop application, PyGPT is an open-source app running on Windows, Mac, and Linux that connects to Gmail, Calendar, and Slack through plugins while supporting every major AI model including local ones. Leon, another open-source personal assistant with over 17,000 GitHub stars, runs entirely on your own machine with local model support and a skills system you extend yourself.</p>

      <p>Paco Cantero built something he calls Mindset: a personal knowledge assistant running on SQLite with twelve specialized agents and a Slack bot as the interface. His description of it captures the appeal of this entire category well: "It is fast, private, and entirely mine." The system never sends his data anywhere he has not explicitly approved.</p>

      <p>What all of these projects share is ownership. The builder controls the tool. There is no vendor who can raise the price, deprecate the integration, or change what data gets sent where. The cost is transparent. The behavior is exactly what you configured it to be.</p>

      <p>The commercial AI tools have their place. Some of them are genuinely useful. But the people getting the most out of AI right now are not primarily the ones subscribing to the most AI-enhanced SaaS. They are the ones who spent a weekend building something specific, wired it into the tools that already run their day, and dropped a shortcut on their desktop.</p>

      <p>That is a different kind of leverage. And it compounds in a way that a monthly subscription never really does.</p>
    `
  },
  post11: {
    date: 'May 29, 2026',
    iso: '2026-05-29',
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
    date: 'May 27, 2026',
    iso: '2026-05-27',
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
    date: 'May 25, 2026',
    iso: '2026-05-25',
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
    date: 'May 24, 2026',
    iso: '2026-05-24',
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
    date: 'May 22, 2026',
    iso: '2026-05-22',
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
    date: 'May 20, 2026',
    iso: '2026-05-20',
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
    date: 'May 18, 2026',
    iso: '2026-05-18',
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
    date: 'May 16, 2026',
    iso: '2026-05-16',
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
    date: 'May 15, 2026',
    iso: '2026-05-15',
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
    date: 'May 13, 2026',
    iso: '2026-05-13',
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

const POST_ORDER = ['post14', 'post25', 'post24', 'post23', 'post22', 'post21', 'post20', 'post19', 'post18', 'post13', 'post15', 'post16', 'post17', 'post12', 'post11', 'post10', 'post7', 'post8', 'post9', 'post6', 'post5', 'post4', 'post1', 'post2', 'post3'];

// Dual export: browser globals + CommonJS for the build-time SEO generator.
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { POSTS, POST_ORDER };
}
if (typeof window !== 'undefined') {
  window.POSTS = POSTS;
  window.POST_ORDER = POST_ORDER;
}
