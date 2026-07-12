/*
 * posts.js - single source of truth for post data.
 *
 * Loaded directly in the browser (populates window.POSTS / window.POST_ORDER)
 * and required by tools/generate-seo.js at build time so the sitemap, RSS feed,
 * and JSON-LD structured data are generated from the same content. Add new posts
 * here only - everything downstream regenerates.
 */
const POSTS = {
  post85: {
    featured: false,
    date: 'July 12, 2026', iso: '2026-07-12',
    title: 'The real AI race is for context',
    category: 'AI & Automation', tag: 'Signal', tagClass: 'tag-cyan',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/New_office.jpg/1280px-New_office.jpg',
    body: `
      <p>The ugly part of office work is not the typing. It is the handoff. A number starts in Excel, gets summarized in Word, turns into slides, and then gets explained again in chat because the first three versions lost something.</p>

      <p>That is why the latest moves from <a href="https://openai.com/index/gpt-5-6/" target="_blank" rel="noopener noreferrer">OpenAI</a> and Microsoft matter. They are both aimed at the same problem: keeping context alive long enough for work to actually move. Not just answer a question. Not just draft a paragraph. Keep the task moving.</p>

      <p>OpenAI says GPT-5.6 brings "more intelligence from every token, stronger performance per dollar, and more capability on demand for your hardest work." In the <a href="https://openai.com/index/chatgpt-for-your-most-ambitious-work/" target="_blank" rel="noopener noreferrer">ChatGPT Work</a> launch, the company says the agent can "take action across your apps and files" and "turn a goal into finished work." That is a different pitch than a chat box. It is a pitch about persistence.</p>

      <p>Microsoft made the same bet from the other side of the stack. Its Copilot update says GPT-5.6 is now the <a href="https://techcommunity.microsoft.com/blog/microsoft365copilotblog/available-today-openai%E2%80%99s-gpt-5-6-in-microsoft-365-copilot/4533152" target="_blank" rel="noopener noreferrer">preferred model in Microsoft 365 Copilot</a> across Word, Excel, PowerPoint, Chat and Cowork. That matters because those are the places where office work already lives. If the model sits in the file, the message thread, and the presentation deck, the question changes from "can it answer" to "can it keep the work moving without breaking the format."</p>

      <p>This is where the product story gets more interesting than the benchmark story. Microsoft is tying GPT-5.6 to Work IQ, Microsoft 365 apps, and enterprise-grade security, compliance, and privacy. OpenAI is tying ChatGPT Work to Codex, apps, files, and longer tasks. Both companies are making the same bet: the winner is not the model that sounds smartest in a demo. It is the one that can carry context forward without losing the thread.</p>

      <p>That is the part AI demos still struggle with. They are usually fine at the first pass. They draft. They summarize. They generate a clean-looking answer. Then the work needs a second pass, a template, a permission check, or a handoff to another person, and the seams show. The business value is not in the first response. It is in the second and third steps that keep the work from stalling.</p>

      <p>The useful version of this is easy to picture. A finance team can ask for a month-end variance summary and then ask for slides that still match the same numbers. A sales manager can turn meeting notes into next steps by owner. A marketing lead can turn a rough brief into a cleaner campaign doc without starting from scratch every time. None of that removes judgment. It just cuts down the junk between the idea and the usable draft.</p>

      <p>The risk is just as obvious. If the file is messy, the permissions are wrong, or the source of truth is not clear, GPT-5.6 just makes a bad workflow move faster. The model does not fix the operating system around it. It amplifies it. That is true whether you are inside ChatGPT Work or inside Microsoft 365 Copilot.</p>

      <p>This release feels more important than another round of benchmark bragging because it changes where the value sits. OpenAI is trying to own the agent that moves across apps. Microsoft is trying to own the place where those apps already live. The real fight is not who talks better. It is who can hold context long enough to finish something people can actually ship.</p>

      <p>In a spreadsheet or a deck, the win is not a clever response. It is the moment the file is ready, the numbers still line up, and nobody has to rebuild the whole thing by hand.</p>
    `
  },
  post84: {
    featured: false,
    date: 'July 11, 2026', iso: '2026-07-11',
    title: 'Midmarket AI is stuck at the handoff',
    category: 'Business Strategy', tag: 'Signal', tagClass: 'tag-cyan',
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/70/Business_professional_working_on_laptop_in_a_bright_office_space.jpg',
    body: `
      <p>A midmarket company can buy a pilot. What it usually cannot buy is the spare staff to turn that pilot into a real system.</p>

      <p>That is the gap Accenture and Google Cloud are aiming at with their July 7 announcement of <a href="https://www.googlecloudpresscorner.com/2026-07-07-Accenture-Edge-and-Google-Cloud-Bring-Scalable-Agentic-AI-Solutions-to-Mid-Market-Companies" target="_blank" rel="noopener noreferrer">Accenture Edge</a>. The package is built for companies with annual revenue between $300 million and $3 billion. It combines prebuilt, industry-specific agents with Gemini Enterprise, Agentic Data Cloud, AI Threat Defense, and forward deployed engineers from Accenture.</p>

      <p>That mix matters because midmarket AI usually does not fail on a missing model. It fails on the middle layer nobody budgets for. The first demo works. The integration work starts. The data gets messy. The workflow owner gets busy. The pilot sits there looking promising while the business keeps paying for the old process.</p>

      <p><a href="https://www.klarus.com/news/the-state-of-ai-in-the-mid-market" target="_blank" rel="noopener noreferrer">Klarus</a> put numbers on that problem in new research from the UK and Ireland. It found that 73% of midmarket companies have partially or fully deployed AI, but only 10% have scaled every initiative beyond the pilot stage. Ninety-one percent say they are confident in their internal expertise, yet 83% report poor data quality and 59% still do not have a comprehensive governance framework.</p>

      <p>That is the real market signal in this story. AI is not scarce anymore. Operational follow-through is. Accenture and Google Cloud are not just selling software. They are selling a path through the part of the rollout that usually gets hand-waved in the deck.</p>

      <p>The Google Cloud side is not subtle about it. Its release says the partnership is meant to help midmarket companies move from AI pilots to production faster. Accenture says the goal is to give customers prebuilt solutions designed for the speed and scale this segment actually needs. In plain English, both companies are trying to compress the distance between interest and usable output.</p>

      <p>The quote from Accenture is the cleanest version of that pitch: "Accenture Edge offerings built with Google Cloud technology help mid-market organizations do exactly that. They can deploy solutions in weeks and get measurable outcomes at the scale, budget and speed that they need to grow."</p>

      <p>Google Cloud is making the same point from a different angle: "We’re seeing tremendous demand as mid-market enterprises adopt AI agents to fundamentally reinvent their business workflows."</p>

      <p><a href="https://www.klarus.com/news/the-state-of-ai-in-the-mid-market" target="_blank" rel="noopener noreferrer">Klarus CTO Alper Gunaydin</a> gets closer to the trap companies keep falling into: "too many pilots stall because companies lack AI expertise, quality data and effective governance."</p>

      <p>That is the middle of the story, and it is the part that matters to the business. Midmarket firms are usually agile enough to move faster than giant enterprises, but they do not have endless specialist headcount. They need a product that comes with process. They need help wiring the data, naming the owner, setting the control points, and making the rollout repeatable.</p>

      <p>That is the same question I keep coming back to at <a href="https://samcbarth.com" target="_blank" rel="noopener noreferrer">SamCBarth.com</a>. If the workflow is not clear, if the data owner is not clear, and if the review step is not clear, the AI layer just creates a fancier version of the same confusion. Good tools still need a clean operating path.</p>

      <p>Accenture Edge is built around six solution areas, from customer intelligence and customer experience to cybersecurity, business operations, industry solutions, and workforce enablement. That spread tells you what the market wants. Companies do not want another raw AI platform to assemble themselves. They want packaged work that lands inside a known business function and starts producing something measurable.</p>

      <p>The forward deployed engineers are part of that bet. They are there because midmarket customers usually need implementation judgment, not just licenses. If the model is the engine, the FDEs are the mechanics who help get it into the car and keep it from stalling on the way out of the lot.</p>

      <p>The risk is obvious. If the stack still needs too much custom work, the pitch turns back into consulting with better branding. If the stack really can move a customer from pilot to production in weeks, then this is a useful template for the part of AI adoption that has been hardest to scale. The companies that can make that handoff feel routine will own the middle of the market.</p>
    `
  },
  post83: {
    featured: false,
    date: 'July 11, 2026', iso: '2026-07-11',
    title: 'IBM shrank the mainframe to fit the rack',
    category: 'Infrastructure', tag: 'Signal', tagClass: 'tag-cyan',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Columbia_Supercomputer_-_NASA_Advanced_Supercomputing_Facility.jpg/960px-Columbia_Supercomputer_-_NASA_Advanced_Supercomputing_Facility.jpg',
    body: `
      <p>The old mainframe rule was simple. If the machine mattered enough, you gave it a room.</p>

      <p>IBM just spent July making that room less special. On July 7, the company announced new z17 and LinuxONE 5 configurations, and for the first time the full Z and LinuxONE portfolio includes rack-mount options alongside single-frame systems. IBM says the new systems keep the same flagship performance, security, and ecosystem standards while giving buyers more places to put the hardware.</p>

      <p>That sounds like a packaging change. It is really a response to where data center economics have gone. IBM's <a href="https://newsroom.ibm.com/z17-linuxone-single-frame-and-rack-mount" target="_blank" rel="noopener noreferrer">release</a> points to CBRE's 2026 Global Data Center Trend Report, which describes record-low vacancy and rental rates above $400 per kW/month for sensitive workloads at scale. When floor space gets that expensive, a special-purpose room stops being a neutral detail and starts becoming part of the bill.</p>

      <p>IBM says the new configs are meant to "reclaim space, improve energy efficiency" and let clients co-locate IBM and non-IBM gear. The rack mount is the practical move here. It means a mainframe can sit directly in an industry-standard rack instead of demanding a separate enclosure. For shops already running mixed infrastructure, that lowers the argument against keeping mission-critical workloads on IBM hardware.</p>

      <p>The numbers are still the numbers. The expanded portfolio supports up to 82 cores and 18 TB of memory across two processor drawers, about a 20% increase in core count and 12% more memory capacity. That is not small. But IBM is not just selling bigger boxes. It is selling fit.</p>

      <p>There are three product layers in the release. The z17 single frame is a complete enclosed unit with iPDUs. The z17 rack mount lets customers install IBM Z components inside their own rack. LinuxONE Rockhopper 5 brings the same idea to high-density Linux workloads, with on-chip AI acceleration, confidential computing, and post-quantum cryptography. LinuxONE 5 Express shrinks the entry point further into an 18U package aimed at smaller workloads that still need enterprise-grade controls.</p>

      <p>That last part matters. Mainframe economics used to read like a bank-only story. IBM and University College London made the case more broadly by pointing out that the new LinuxONE 5 models can give organizations "access advanced technologies at cost-effective prices." The point is not that a university or midmarket team needs a relic. It is that some workloads still need this level of reliability, isolation, and transaction handling, and they need it without swallowing a whole room.</p>

      <p>The software update tells the same story. IBM is adding Infrastructure Management for Z and LinuxONE, COBOL Elevate for z/OS, standard post-quantum cryptography on z17 and LinuxONE Rockhopper 5, and new crypto discovery tools. That is a reminder that the mainframe pitch is now part hardware, part operating model. IBM wants less specialist friction, better automation, and a clearer path from old applications to newer security rules.</p>

      <p><a href="https://www.datacenterdynamics.com/en/news/ibm-expands-mainframe-portfolio-with-new-z17-and-linuxone-systems-offerings/" target="_blank" rel="noopener noreferrer">Data Center Dynamics</a> framed the launch as IBM trying to address cost and space constraints within data center environments. That is the cleanest summary of the market reality. The machine is still about resilience, security, and throughput. What changed is the aisle it has to fit into.</p>

      <p>The timing is important too. IBM says the z17 single frame, rack mount, LinuxONE Rockhopper 5, and LinuxONE 5 Express are generally available on August 12. Infrastructure Management follows on August 14, and COBOL Elevate lands September 18. If those dates hold, buyers will have a quick answer to a practical question: can the most conservative class of enterprise compute now be deployed like a normal piece of infrastructure, or does it still need its own carve-out every time?</p>

      <p>The real test is not whether IBM made the mainframe smaller. It is whether a bank, insurer, or public-sector shop can keep the workload, keep the controls, and stop paying the penalty for a room built around one machine.</p>
    `
  },
  post82: {
    featured: false,
    date: 'July 11, 2026', iso: '2026-07-11',
    title: 'Cloudflare gave the web a third door',
    category: 'Digital Business', tag: 'Signal', tagClass: 'tag-cyan',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1160&h=440&fit=crop&q=80',
    body: `
      <p>A site used to have two choices. Let a crawler in, or block it. Cloudflare just made that binary look dated.</p>

      <p>On July 1, <a href="https://blog.cloudflare.com/content-independence-day-ai-options/" target="_blank" rel="noopener noreferrer">Cloudflare</a> introduced new controls for AI traffic and said websites can now treat Search, Agent, and Training crawlers differently. Cloudflare says "not all AI traffic is the same," which is the cleanest way to describe the change. A search crawler can send people back to the source. An agent may be acting on a person's behalf in real time. A training crawler takes content to build a model that may never send a reader back.</p>

      <p>The practical detail is the important one. Cloudflare's changelog says all customers, including Free plans, can choose to block AI crawlers on all pages, only on pages with ads, or not block them at all. Starting September 15, new domains will see Training and Agent blocked by default on ad pages, while Search stays allowed. That is not a tiny settings tweak. It is a policy change about what kind of machine traffic a publisher wants to treat like a customer and what kind it wants to keep out of the room.</p>

      <p>Cloudflare frames the tradeoff bluntly. It wants site owners to "keep the automated traffic that sends readers and revenue back to you" and block the traffic that only takes from the content. That matters because the old web bargain was simple: index my page, send me a click. AI has broken that exchange. The crawler still arrives. The reader often does not.</p>

      <p>The company backs that view with traffic data. In its Cloudflare Radar report, it says 52% of crawler requests are now for AI training as of June 2026, up from 22% in spring 2025. Mixed-use crawlers make up more than 36% of activity, and pure search crawling is becoming a smaller slice of the total. That is why Cloudflare keeps talking about taxonomy instead of a single block button. The traffic is no longer one thing.</p>

      <p>That split also explains why the new defaults favor ad pages. A page with ads is a business signal. The owner is not just publishing for fun. It is trying to fund the work. Cloudflare's default policy says the site should not hand that attention to bots that do not return value. Search gets a different treatment because, in Cloudflare's view, it still funnels readers back.</p>

      <p>The new controls are only half of the story. Cloudflare also says BotBase will give Enterprise customers a searchable view of known bots and agents, so they can see what is visiting before deciding what to do about it. That is the operating reality here. You cannot govern what you cannot name. Once bots blur together, a blanket allow or block setting stops being enough.</p>

      <p>This is where the business story gets bigger than publishing. Retail, software, finance, and media all depend on content that used to earn value through discovery. If AI systems turn answers into the destination, the owner has to decide whether to supply content for free, block access, charge for it, or selectively allow only the traffic that still creates return. Cloudflare's new controls are basically a business model menu disguised as a security setting.</p>

      <p>The company has been moving this direction for a while. Its docs already point to managed robots.txt and pay-per-crawl style controls, and the new AI traffic presets sit on top of that work. The direction is clear: content owners want a way to say yes to useful discovery, no to extraction, and maybe to direct monetization where the economics justify it.</p>

      <p>That is why the old binary feels wrong now. Search is discovery. Training is extraction. Agent traffic is something in between, but not the same as a human reader. If a site depends on ads, subscriptions, or lead flow, the next question is not whether AI touched it. The question is which kind of machine touched it, what came back, and whether the owner got anything in return.</p>

      <p>Cloudflare did not solve the agentic web. It just gave publishers a way to stop pretending every bot means the same thing. That is the real shift. The web is moving from a simple crawl-and-click loop to a traffic policy problem, and the owners who understand the difference between search, agents, and training will have a much better shot at keeping the economics intact.</p>
    `
  },
  post81: {
    featured: false,
    date: 'July 11, 2026', iso: '2026-07-11',
    title: 'A memory chip company just raised Wall Street money',
    category: 'AI Infrastructure', tag: 'Signal', tagClass: 'tag-cyan',
    image: 'https://images.unsplash.com/photo-1634979150028-39f84c54d007?w=1160&h=440&fit=crop&q=80',
    body: `
      <p>SK Hynix did not need an American listing to prove it matters. Its memory already sits beside the processors running much of the AI boom. The company is profitable, established in South Korea, and one of the few suppliers capable of producing high-bandwidth memory at scale.</p>

      <p>What it wanted from Wall Street was money, access, and a closer seat at the same table as its largest customers.</p>

      <p>On Friday, SK Hynix began trading on Nasdaq after selling 177.9 million American depositary receipts at $149 each. The offering raised $26.5 billion, according to the <a href="https://apnews.com/article/sk-hynix-nasdaq-memory-chips-nvidia-73f13a85ae00e30bad0540281bbe44f3" target="_blank" rel="noopener noreferrer">Associated Press</a>, making it the largest initial U.S. share sale by a foreign company. The receipts opened at $170 and closed at $168.01, a 12.8% first-day gain.</p>

      <p>This was not a small chip startup asking investors to fund a prototype. SK Hynix reported nearly $65 billion in 2025 revenue and about $28 billion in profit. The United States accounted for 68.8% of revenue. The company already trades in Seoul. Each Nasdaq receipt simply represents one-tenth of a Korean common share.</p>

      <p>The scale is the story. AI infrastructure is consuming enough capital that a mature supplier can raise more money in one listing than most technology companies will ever be worth.</p>

      <p>The reason sits next to the GPU. High-bandwidth memory, or HBM, stacks memory close to an accelerator so data can move at much higher speed. A powerful processor waiting on data is expensive idle equipment. As models grow and inference volume rises, memory bandwidth becomes part of the performance limit.</p>

      <p>That has changed the status of memory. It was once discussed mainly as a cyclical commodity where suppliers added capacity, prices fell, and the market corrected. HBM is still exposed to cycles, but it requires difficult manufacturing, advanced packaging, close work with accelerator companies, and large investments made before the demand is fully visible.</p>

      <p>SK Hynix is using the listing to help fund that buildout. Its <a href="https://www.sec.gov/Archives/edgar/data/2120882/000119312526295501/d32785df1a.htm" target="_blank" rel="noopener noreferrer">SEC prospectus</a> estimated about $28 billion in net proceeds before final pricing. The filing says the company plans to use the money for production facilities, research and development, and general corporate purposes. It also describes a planned advanced packaging facility in Indiana, the company's first U.S. production site.</p>

      <p>That Indiana project puts the financial decision into physical terms. SK Hynix is not raising money to build a generic cloud service that can be expanded with a software update. Semiconductor capacity takes land, equipment, suppliers, skilled labor, permits, power, water, and years of execution. A bad forecast leaves costly factories underused. A cautious forecast leaves customers short of a component they cannot easily replace.</p>

      <p>The company is also moving toward the center of its customer base. At the Nasdaq ceremony, CEO Kwak Noh-Jung said, "The customers leading AI innovation are here, the partners building the ecosystem are here, and the talent driving the industry is here." That is a better explanation for the listing than the opening-day stock move.</p>

      <p>American investors now get easier access to the shares in dollars and through familiar settlement systems. SK Hynix gets a broader investor base, more visibility among U.S. technology funds, and a currency it can potentially use for future deals or employee compensation. The listing also makes comparisons with Micron and other U.S.-traded infrastructure companies much more direct.</p>

      <p>There is a strategic signal for customers too. Nvidia and other accelerator makers need suppliers that can finance capacity before every purchase order is guaranteed. Cloud companies need a credible path from announced clusters to delivered machines. A $26.5 billion capital raise tells the market that memory supply is no longer a supporting detail in those plans.</p>

      <p>It does not remove the risk. The prospectus is clear about customer concentration, export controls, geopolitical tension, manufacturing complexity, and the industry's history of price swings. Demand tied to a handful of AI buyers can look durable right up until one customer changes architecture, delays a data center, or qualifies another supplier.</p>

      <p>Investors also need to separate a strong first trading day from a strong long-term return. The shares arrived after SK Hynix had already more than tripled in Seoul this year. The offering funds capacity, but more capacity across the industry can eventually pressure prices. Capital solves the shortage only by creating the possibility of the next surplus.</p>

      <p>For businesses buying AI systems, this financing explains why hardware roadmaps deserve the same attention as model roadmaps. A promised agent, search tool, or analytics product may depend on memory supply negotiated years earlier. The operating work at <a href="https://samcbarth.com" target="_blank" rel="noopener noreferrer">SamCBarth.com</a> starts with the workflow, but its cost and timing still inherit constraints from the physical stack underneath it.</p>

      <p>The closing bell gave SK Hynix a new ticker. The more important clock is running inside its factories. The company now has billions more to turn into clean-room capacity, packaging lines, qualified parts, and delivered memory. Wall Street priced the promise in one morning. SK Hynix has to manufacture it one stack at a time.</p>
    `
  },
  post80: {
    featured: false,
    date: 'July 11, 2026', iso: '2026-07-11',
    title: 'Reddit cannot sell a conversation nobody trusts',
    category: 'Digital Business', tag: 'Signal', tagClass: 'tag-cyan',
    image: 'https://images.unsplash.com/photo-1600267185393-e158a98703de?w=1160&h=440&fit=crop&q=80',
    body: `
      <p>Picture the ordinary Reddit thread that starts with a simple question: Which accounting tool works for a five-person company? The answers look personal. One person describes a clean migration. Another warns about support. A third mentions a product nobody else has considered.</p>

      <p>Now remove the assumption that those people are real. The thread still looks useful, but its value collapses.</p>

      <p>That is the business problem behind Reddit's <a href="https://redditinc.com/news/how-were-keeping-reddit-real-and-safe-in-the-ai-era" target="_blank" rel="noopener noreferrer">July 6 safety update</a>. The company says it is using large language models to detect coordinated fake behavior and artificial hype that older systems missed. It is fighting machine-made persuasion with more machines because authentic conversation has become part of the product it sells.</p>

      <p>Reddit reports that its updated systems block 23 million spam views each day, catch about 25,000 new spam posts and comments, and revoke nearly two million inauthentic votes daily. From January through March, user exposure to spam fell about 20% compared with the prior three months.</p>

      <p>Those are company-reported figures, not an independent audit. They also show the scale of the contest. A fake post does not need to stay online for long to influence a purchase, seed a talking point, or become source material for an AI answer. Reddit says its best enforcement happens before a human sees the content.</p>

      <p>The old spam problem was usually easy to understand. Someone wanted a click, a sale, or a stolen password. Generative AI changes the cost and texture. A marketer can produce dozens of accounts with different writing styles, build histories for them, and stage a discussion that looks like several unrelated customers reaching the same conclusion.</p>

      <p>Votes can make that conclusion appear popular. Replies can supply objections and convenient rebuttals. Once the exchange looks organic, it can travel beyond Reddit through screenshots, search results, summaries, and AI assistants that treat public discussion as evidence.</p>

      <p>This is why Reddit's announcement matters outside social media. The company is protecting two connected markets. Users come for useful human discussion. Advertisers come because those users reveal what they care about. AI companies and search products value the same archive because it contains language, preferences, troubleshooting, and firsthand judgment that polished web pages often lack.</p>

      <p>If synthetic promotion contaminates that archive, all three groups receive a weaker product. Users lose confidence. Advertisers pay to appear beside conversations that may be manufactured. AI systems learn from or cite material created to manipulate them.</p>

      <p>Reddit describes a layered defense. Sitewide policies and internal safety teams sit above community moderators, reputation filters, crowd control, ban-evasion detection, and user voting. The company says it has also cut average enforcement time for detected hateful or violent English content to under five seconds while reducing false positives by more than 40%.</p>

      <p>The architecture makes sense because authenticity is contextual. A brand-new account posting the same product link across 20 communities is an obvious signal. Ten established accounts quietly reinforcing one claim is harder. A joke that belongs in one subreddit may look hostile in another. Reddit needs platform-scale pattern detection without erasing the local judgment that gives each community its character.</p>

      <p>The hard question is error cost. A system tuned to stop manipulation before anyone sees it will sometimes stop legitimate speech. Reddit says its false-positive rate improved, but it does not publish enough detail to judge performance by language, community, topic, or account type. A global average can hide serious misses in smaller communities.</p>

      <p>There is also a labor issue. Automated detection may reduce what reaches moderators, but every uncertain case still creates review work. A <a href="https://arxiv.org/abs/2607.04003" target="_blank" rel="noopener noreferrer">new study of AI-generated contributions in open-source software</a> gives that burden a useful name: AI-DDoS. The researchers describe a denial-of-service effect in which plausible, low-quality submissions consume scarce community attention.</p>

      <p>The study examined 294 repositories and more than two million pull requests and issues. It found that pull-request volume rose in 2025 while merge rates declined. One-time contributors saw an 18.18% drop in merge rates relative to the researchers' estimated counterfactual. The setting is different, but the economic pattern is familiar. Generation gets cheap. Verification does not.</p>

      <p>That pattern should be on every company's risk register. Customer reviews, sales leads, support tickets, job applications, vendor questionnaires, code contributions, expense receipts, and market research can all be produced faster than a human team can validate them. The bottleneck moves from creating information to deciding which information deserves attention.</p>

      <p>This connects directly to the operating work at <a href="https://samcbarth.com" target="_blank" rel="noopener noreferrer">SamCBarth.com</a>. A business cannot solve the problem with a blanket rule that says “use AI carefully.” It needs signals, thresholds, evidence, ownership, and an appeal path. Which actions can happen automatically? Which claims need a second source? Which anomalies stop a workflow? Who reviews a false positive?</p>

      <p>Reddit is now maintaining something closer to a trust ledger than a content feed. Every blocked campaign, restored account, suspicious vote, moderator decision, and user report updates its estimate of what deserves distribution. That ledger is becoming as important as the posts themselves.</p>

      <p>The accounting-tool thread only has value while a reader believes it records real experience. Reddit can improve its models and publish bigger enforcement numbers, but its real inventory is that belief. Once a staged conversation becomes indistinguishable from an honest one, there is no ad format, data license, or AI search feature that can put the missing person back into the room.</p>
    `
  },
  post79: {
    featured: false,
    date: 'July 11, 2026', iso: '2026-07-11',
    title: 'The model is no longer the whole agent',
    category: 'AI Engineering', tag: 'Signal', tagClass: 'tag-cyan',
    image: 'https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=1160&h=440&fit=crop&q=80',
    body: `
      <p>An AI agent can fail while using a perfectly capable model. It can stop reading a file too early, call the wrong tool, carry the wrong context forward, or take an action outside the boundary a company intended.</p>

      <p>That is why the most interesting part of a new LangChain and NVIDIA release is not the model at its center. It is the argument that the surrounding harness and runtime are becoming products companies need to own.</p>

      <p>On July 8, the companies <a href="https://www.langchain.com/blog/langchain-and-nvidia-launch-the-nemoclaw-deep-agents-blueprint" target="_blank" rel="noopener noreferrer">released the NemoClaw for LangChain Deep Agents blueprint</a>. It combines NVIDIA's open Nemotron 3 Ultra model, LangChain's Deep Agents Code harness, and NVIDIA OpenShell, a sandboxed runtime that applies policies to tools, systems, and data.</p>

      <p>The three layers do different jobs. The model reasons. The harness plans tasks, manages context and memory, and decides how tools are used. The runtime controls where the agent runs and what it is allowed to touch. That separation gives a business more places to improve a system without retraining the model or replacing the entire stack.</p>

      <p>LangChain reported an aggregate score of 0.86 at a cost of $4.48 for Nemotron 3 Ultra with its tuned harness. The next closest model in its evaluation cost $43.48. That is a large gap, but it needs the right label. This was LangChain's own agent evaluation suite, not an independent measure of every enterprise workload.</p>

      <p>The useful result is not simply “10 times cheaper.” It is evidence that agent economics can change when a team tunes the system around a model. LangChain says the main lesson is that “agent performance improves when the model, harness, evals, and runtime are tuned together.”</p>

      <p>NVIDIA's technical walkthrough makes the point concrete. In one evaluation, the agent was asked for the last non-empty line in a large file. The first read returned a full page, but the answer was farther down. The model answered early instead of continuing with another offset.</p>

      <p>The fix did not require new model weights. Developers added middleware that tells the agent when a file result probably continues and instructs it to keep paging. The failing read test moved from zero passes in three runs to three passes. The broader benchmark improved from 94 to 96 correct results out of 127.</p>

      <p>That example is small enough to understand and important enough to generalize. Many agent failures are not pure intelligence failures. They are interface failures. The model does not know that a tool response was truncated, that an approval is required before a write, or that a customer record came from a stale source unless the surrounding system makes those facts visible.</p>

      <p>Companies already encode operating knowledge in procedures, permissions, quality checks, and exceptions. An agent harness turns some of that knowledge into software. Its prompts, tool descriptions, traces, evaluation cases, routing rules, and memory design become a record of how the company wants work done.</p>

      <p>LangChain calls those assets valuable intellectual property. That is a fair description. A generic model can be rented by every competitor. A tested harness that knows when to ask for clarification, which system owns a field, how to recover from a partial response, and when to stop is much harder to copy.</p>

      <p>OpenShell adds the other half of the argument. An agent that can act needs boundaries outside its own instructions. NVIDIA describes NemoClaw as a path from prototype to governed deployment, with model routing, skill execution, state, observability, and runtime controls in one setup. The runtime can sandbox execution and apply policy to data access and sensitive actions.</p>

      <p>That matters because a prompt is not a security boundary. Telling an agent not to access a directory or send data to an unapproved service is weaker than preventing that connection at runtime. Businesses need both behavioral instructions and enforced limits, especially for long-running agents working with code, financial records, customer data, or production systems.</p>

      <p>The open label also deserves scrutiny. The blueprint gives teams more control over model, harness, and runtime choices, and NVIDIA says it can run anywhere. But the stack still creates dependencies. Teams must understand the licenses, hosting requirements, NVIDIA infrastructure options, LangChain interfaces, and the work required to operate the components themselves.</p>

      <p>Ownership is not the same as simplicity. A company can avoid one closed platform and still end up maintaining a complicated collection of open parts. The deciding question is whether that control produces better reliability, lower total cost, or a real compliance advantage for the workload.</p>

      <p>This is where the process work at <a href="https://samcbarth.com" target="_blank" rel="noopener noreferrer">SamCBarth.com</a> connects. The business value sits in making the hidden operating rules explicit: what the agent may read, what it may change, how success is checked, and what evidence triggers a human review. The model is one component inside that design.</p>

      <p>NemoClaw will be tested less by its launch benchmark than by the failure records companies build around it. Every truncated file, rejected tool call, policy block, and corrected answer can become a reusable test. Over time, that collection may be more valuable than the original agent prompt because it captures what the business learned the hard way. The companies that keep that learning in their own harness will own more than an AI agent. They will own the instructions for making it dependable.</p>
    `
  },
  post78: {
    featured: false,
    date: 'July 11, 2026', iso: '2026-07-11',
    title: 'Cognizant put itself inside the AI sales pitch',
    category: 'Business Strategy', tag: 'Signal', tagClass: 'tag-cyan',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1160&h=440&fit=crop&q=80',
    body: `
      <p>Cognizant wants companies to trust it with a large AI rollout. So it is making its own workforce the first large reference account.</p>

      <p>On July 7, the technology services company <a href="https://investors.cognizant.com/news-and-events/news/news-details/2026/Cognizant-expands-partnership-with-Google-Cloud-to-accelerate-enterprise-AI-adoption-with-Gemini-Enterprise-and-Google-Workspace/default.aspx" target="_blank" rel="noopener noreferrer">expanded its Google Cloud partnership</a> and laid out an unusually specific internal plan. Cognizant aims to deploy Gemini Enterprise to 100,000 associates this year, scale that to 200,000, and certify at least 10,000 professionals on the platform.</p>

      <p>Those numbers matter less as a license count than as a test environment. Cognizant sells implementation work. If its own engineers, project managers, support teams, and delivery staff cannot turn Gemini into better operating results, the client pitch gets much harder. If they can, every internal workflow becomes training material for the next engagement.</p>

      <p>The rollout covers software engineering, delivery operations, workforce tools, and customer support. Cognizant says its engineers are using Antigravity 2.0 and Gemini Enterprise for code explanation, automated test generation, and legacy application modernization. Internal benchmarks show development velocity improving by up to 30%.</p>

      <p>Elsewhere, the company is deploying role-based agents that it says can automate 60% to 70% of manual effort in selected workflows. Project managers and delivery teams are using the tools to track milestones, streamline processes, and produce documentation.</p>

      <p>That is the reported progress. The missing details are just as useful. Cognizant did not publish the baseline behind the development benchmark, the number of teams measured, the review work added by generated code, or whether the 60% to 70% estimate represents time saved, steps automated, or tasks completed without human correction.</p>

      <p>A serious internal rollout should eventually answer those questions. Adoption is easy to count. A company can distribute licenses, announce a certification target, and report how many agents it built. The harder measurement is whether work finishes faster with equal or better quality, whether errors move downstream, and whether the same result survives outside the team that designed the workflow.</p>

      <p>Cognizant is also changing how it delivers the work. Its Frontier Certified Engineers are meant to combine technical skill with industry and operating context. They audit workflows, evaluate agents, and deploy them inside client environments. CEO Ravi Kumar S said the company has "built this capability, proven it inside our own business, and are now bringing it to joint clients at scale."</p>

      <p>Google Cloud gets something valuable from that model. Gemini Enterprise reaches customers with an implementation team attached, while Cognizant gets a large platform around which it can build repeatable services. Google Cloud executive Karthik Narain called Cognizant's first-hand experience something that "uniquely positions Cognizant to help our joint customers scale agentic AI solutions."</p>

      <p>The two companies are taking packaged offers into retail, healthcare, communications, media, technology, and financial services. Cognizant says its Agent Foundry has built more than 2,000 agents and can shorten some development cycles into two-week sprints. A separate July 7 <a href="https://www.googlecloudpresscorner.com/2026-07-07-Accenture-Edge-and-Google-Cloud-Bring-Scalable-Agentic-AI-Solutions-to-Mid-Market-Companies" target="_blank" rel="noopener noreferrer">Google Cloud announcement with Accenture Edge</a> used a similar playbook: industry agents, forward deployed engineers, and preconfigured solutions intended to move mid-market customers from pilots into production.</p>

      <p>That overlap is important. Google Cloud is building a delivery channel through several large services firms. The platform will not be the only differentiator. Cognizant has to show that its internal learning becomes better templates, evaluations, controls, and deployment speed than another partner can offer on the same underlying technology.</p>

      <p>There is one customer example in the announcement. A U.S. communications and entertainment provider reportedly raised first-contact resolution by 17% against its pre-deployment baseline and automated nearly one-third of appointment requests. The agents went live in three months and received more than 500 model optimizations during the first year.</p>

      <p>That last number should slow down anyone expecting a two-week sprint to produce a finished system. Fast development can get an agent into a workflow. Five hundred optimizations show how much operating work can follow. Someone still has to study failures, update instructions, test changes, protect customer data, watch for regressions, and decide when a human should take over.</p>

      <p>This is where the workflow focus at <a href="https://samcbarth.com" target="_blank" rel="noopener noreferrer">SamCBarth.com</a> fits the story. The useful asset is not a library of 2,000 agent demos. It is a record of which steps were safe to automate, what evidence proved the result, where review stayed necessary, and how the team kept improving the system after launch.</p>

      <p>Cognizant now has a rare chance to make its own operations part of the product. The 100,000-person rollout will be convincing when the company publishes comparable results across roles, including quality and rework instead of adoption alone. Until then, the strongest part of the pitch is not that Cognizant knows Gemini. It is that Cognizant has volunteered to find the difficult parts before its clients do.</p>
    `
  },
  post77: {
    featured: false,
    date: 'July 11, 2026', iso: '2026-07-11',
    title: 'OpenAI is buying the people who make AI stick',
    category: 'Business Strategy', tag: 'Signal', tagClass: 'tag-cyan',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1160&h=440&fit=crop&q=80',
    body: `
      <p>In May, OpenAI launched a new company with more than $4 billion to spend and about 150 deployment specialists arriving through its planned acquisition of Tomoro. Less than two months later, that company is buying again.</p>

      <p>On July 8, Axios <a href="https://www.axios.com/2026/07/08/openai-deployment-company-northslope-acquisition" target="_blank" rel="noopener noreferrer">reported</a> that the OpenAI Deployment Company agreed to acquire Northslope, an applied AI firm founded by former Palantir employees. Terms were not disclosed. The deal still needs customary regulatory approval, but the sequence already tells us something important about where enterprise AI is going.</p>

      <p>OpenAI is not only trying to sell companies a better model. It is buying the people who can sit inside a company, find the work that matters, connect the model to existing systems, and stay long enough to make the result usable.</p>

      <p>That is a different business from handing over an API key. It looks closer to a mix of software company, systems integrator, and consulting firm. The model may start the conversation, but deployment is becoming the part that protects the account.</p>

      <p>The timeline is worth following. OpenAI <a href="https://openai.com/index/openai-launches-the-deployment-company/" target="_blank" rel="noopener noreferrer">announced the Deployment Company on May 11</a> as a majority-owned and controlled business. It said forward deployed engineers would work inside customer organizations to design, build, test, and deploy production systems connected to company data, tools, controls, and business processes.</p>

      <p>The stated goal was to help organizations "build and deploy AI systems they can rely on every day." That wording puts reliability and daily use ahead of a model demonstration. It also admits where a lot of enterprise projects get stuck. A capable model is easy to show. A dependable workflow has owners, permissions, exceptions, measurements, and someone responsible when it fails.</p>

      <p>Northslope fits that operating model. Its <a href="https://www.northslope.com/" target="_blank" rel="noopener noreferrer">own site</a> says, "At Northslope we are all Forward Deployed Engineers." The firm builds production applications around specific operating problems, including inventory, supply chain, and planning work. Its examples are not generic chat assistants. They are applications tied to decisions, data, and the economics of a business.</p>

      <p>That Palantir background matters. Palantir has spent years sending technical teams close to customers and using the resulting work to turn a broad platform into something specific enough to run an operation. OpenAI is now assembling a similar capability around frontier models, but at acquisition speed.</p>

      <p>The first deal brought an existing deployment team. The second adds hundreds more engineers, according to Axios. OpenAI is using capital to compress what would otherwise be a long hiring and training cycle. It can buy teams that already know how to translate between executives, operators, data systems, and software.</p>

      <p>There is a clear reason to move quickly. Model access is spreading. Businesses can compare products from OpenAI, Anthropic, Google, Microsoft, and open-source providers. Performance differences still matter, but they do not answer the hardest customer question: what should this system do inside our company on Monday morning?</p>

      <p>A forward deployed engineer can help answer that question, but the model creates tradeoffs. Custom work can produce a strong first result while making every customer expensive to serve. A deployment team can become a permanent layer of manual integration. The most useful knowledge can remain in a few engineers' heads instead of becoming a repeatable product.</p>

      <p>OpenAI has to turn field work into leverage. When an engineer solves an approval problem, connects a common business system, or builds a reliable evaluation, the next customer should benefit. Otherwise the Deployment Company grows revenue by adding people at roughly the same rate it adds customers, which is consulting economics with an AI label.</p>

      <p>Customers have their own risk to manage. An embedded team will see workflows, permissions, data quality problems, and internal politics that a software vendor normally sees from farther away. That access can speed delivery. It can also deepen dependence on one provider's models and operating approach.</p>

      <p>The right contract is not only about model price. Businesses need to know who owns the application code, how data is separated, whether another model can be substituted, what happens when the deployed engineers leave, and which internal team can operate the system afterward. A successful pilot that cannot survive its original builders is still a pilot.</p>

      <p>This is where the workflow work I follow at <a href="https://samcbarth.com" target="_blank" rel="noopener noreferrer">SamCBarth.com</a> connects to the acquisition. The valuable step is usually not generating one good answer. It is putting that answer into a process with the right context, review, handoff, and measurement. Northslope gives OpenAI more people who know how to do that work in the field.</p>

      <p>Watch what happens after those teams leave the conference room. If their fixes become reusable products, OpenAI will have built a distribution advantage that model benchmarks cannot show. If each deployment remains a custom engagement held together by the people assigned to it, the company will have bought an impressive bench of engineers and a very expensive way to keep every customer different.</p>
    `
  },
  post76: {
    featured: false,
    date: 'July 11, 2026', iso: '2026-07-11',
    title: 'What $3.1 billion buys inside an industrial plant',
    category: 'Business Strategy', tag: 'Signal', tagClass: 'tag-cyan',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1160&h=440&fit=crop&q=80',
    body: `
      <p>A factory already knows a lot about itself. Sensors record pressure, temperature, vibration, flow, energy use, alarms, and equipment states. Engineering systems know how the plant was designed. Maintenance systems know what broke and what was replaced. The problem is that those records often describe the same asset in different ways.</p>

      <p>Schneider Electric is spending $3.1 billion to close that gap. On June 30, it signed an all-cash agreement to buy Cognite, an industrial data and AI software company. The deal is less about adding another AI model and more about giving software a dependable map of what is happening inside a real operation.</p>

      <p>That distinction matters. A general AI assistant can summarize a maintenance manual. An industrial system has to connect that manual to the correct pump, its live sensor history, the work orders attached to it, the process it supports, and the operating limits that keep people and equipment safe.</p>

      <p>Cognite's core product, Data Fusion, is built to connect those records and add context. Its knowledge graph models the relationships among physical assets, time-series data, documents, diagrams, maintenance events, and business systems. Atlas AI then uses that organized layer to support generative and agent-based applications.</p>

      <p>Schneider already owns many of the other pieces. Its energy management and automation products sit in buildings, data centers, factories, and infrastructure. AVEVA, the industrial software company Schneider fully acquired in 2023, covers engineering, operations, information management, and optimization. Cognite adds a data layer designed to work across existing vendor systems instead of assuming the plant starts clean.</p>

      <p>The <a href="https://www.se.com/ww/en/assets/pdf/Schneider-Electric-announces-agreement-to-acquire-Cognite" target="_blank" rel="noopener noreferrer">Schneider announcement</a> describes industrial AI moving from analysis toward execution. CEO Olivier Blum called Cognite "a truly industrial grade AI platform that turns the complexity of operational data into a competitive advantage." That is the promise. It is also the integration test.</p>

      <p>Industrial buyers have heard platform stories before. A combined product diagram can look complete while customers still spend months reconciling asset names, permissions, data quality, network boundaries, and ownership. The purchase only becomes more than a large software deal if Schneider can reduce that work without forcing plants to abandon equipment and systems that may run for decades.</p>

      <p>The price shows how much Schneider values that position. Cognite reported more than $170 million in 2025 revenue and 36% growth in annual recurring revenue bookings. A $3.1 billion enterprise value is more than 18 times that reported revenue. This is not a purchase priced around current earnings. Schneider is paying for growth, industrial specialization, and a place between operational data and future AI actions.</p>

      <p>The seller's numbers make the deal even clearer. In its <a href="https://live.euronext.com/en/products/equities/company-news/2026-06-30-aker-asa-agreement-sell-cognite-schneider-electric" target="_blank" rel="noopener noreferrer">regulated market notice</a>, Aker said it expects about $1.48 billion in cash proceeds and roughly 20 times its invested capital. Aker CEO Oyvind Eriksen said the combination creates "a highly complementary platform with a broad software offering." Investors can already see value realized. Customers still need to see value delivered.</p>

      <p>There are three places to look for that delivery. First is speed. If contextualized industrial data really becomes reusable across engineering, maintenance, energy, and operations, each new use case should require less integration work than the last.</p>

      <p>Second is openness. Cognite has built its position partly by connecting data from mixed environments. Schneider will want the platform to strengthen AVEVA CONNECT and the rest of its portfolio. Customers will want proof that connections to competing automation, cloud, and analytics products remain first-class. Turning an open data layer into a sales funnel would weaken the thing Schneider paid for.</p>

      <p>Third is control. Recommending that an operator inspect a pump is different from changing a set point or scheduling a shutdown. As AI moves from describing operations to acting on them, plants need clear authorization, simulation, approval, logging, rollback, and human escalation. Context makes an action more informed. It does not make every action safe.</p>

      <p>The transaction still needs regulatory approval and is expected to close in the coming quarters. After closing, Cognite will sit inside Schneider's Industrial Automation business and be integrated with AVEVA. That reporting structure makes sense, but product integration will be harder than financial consolidation.</p>

      <p>This connects to the systems work I follow at <a href="https://samcbarth.com" target="_blank" rel="noopener noreferrer">SamCBarth.com</a> because the same rule applies outside a factory: automation is only as useful as the context underneath it. In a plant, the cost of bad context is simply higher. The wrong asset, stale reading, or missing constraint can turn a confident answer into downtime or danger.</p>

      <p>Schneider has bought the layer that can tell software what a plant's data means. Now it has to preserve Cognite's openness while connecting that meaning to AVEVA and Schneider controls. If the first combined deployments require less cleanup and produce safer actions, the $3.1 billion will look like infrastructure. If they create another closed stack, it will look like an expensive new silo beside the old ones.</p>
    `
  },
  post75: {
    featured: false,
    date: 'July 11, 2026', iso: '2026-07-11',
    title: 'Geneva gave AI governance a room, not a rulebook',
    category: 'AI Governance', tag: 'Signal', tagClass: 'tag-cyan',
    image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=1160&h=440&fit=crop&q=80',
    body: `
      <p>For two days in Geneva, governments, researchers, companies, and civil society sat inside the same United Nations process to talk about AI. Then the meeting ended without a treaty, a regulator, or a global list of prohibited uses.</p>

      <p>That does not make the first <a href="https://www.un.org/global-dialogue-ai-governance/en" target="_blank" rel="noopener noreferrer">Global Dialogue on AI Governance</a> irrelevant. It makes the purpose easier to see. The UN has created a recurring place where countries that disagree on AI rules still have to show their work in front of each other.</p>

      <p>The dialogue met July 6 and 7, immediately before the ITU's AI for Good Global Summit. It grew out of the Global Digital Compact adopted in 2024 and a General Assembly resolution passed in 2025. A second session is scheduled for May 2027 in New York.</p>

      <p>The timing matters because AI policy is splitting into different systems. The European Union is building detailed product and risk rules. The United States has leaned more heavily on sector regulators, procurement, state laws, and voluntary commitments. China has its own requirements for algorithms, generated content, and security. Many smaller countries are being asked to govern systems they did not build with technical and regulatory capacity they do not yet have.</p>

      <p>A single global rulebook was never a realistic two-day outcome. The useful first step was more basic: get every country into one formal conversation, put scientific evidence on the agenda, and let governments, companies, researchers, and public-interest groups challenge each other's assumptions.</p>

      <p>The UN says six months of consultation produced more than 1,500 written submissions. The meeting also received the first public presentation from the 40-member Independent International Scientific Panel on AI. That panel is designed to publish an annual evidence base for the governance discussion, with members selected across regions and disciplines.</p>

      <p>This separation between science and negotiation is worth keeping. Governments will argue about policy, trade, national security, and economic advantage. A standing scientific panel cannot remove those conflicts, but it can make it harder to pretend the underlying capabilities and risks are whatever happens to fit a country's position that week.</p>

      <p>UN Secretary-General António Guterres framed the choice directly: "The question is whether we will govern this transformation together, or let it govern us." The line is broad, but the structure behind it is specific. The dialogue is meant to meet every year, accept input from more than governments, and connect that discussion to an independent scientific assessment.</p>

      <p>The hard part starts after the meeting. A dialogue can identify common language without creating common enforcement. Countries can agree that AI should be safe, inclusive, transparent, and compatible with human rights while disagreeing sharply about surveillance, military use, model access, copyright, data localization, and who gets to inspect a powerful system.</p>

      <p>Business leaders should not wait for those arguments to settle. Global companies already face overlapping requirements from customers, regulators, insurers, boards, and procurement teams. A model or agent may be acceptable in one market, restricted in another, and subject to a different documentation standard in a third.</p>

      <p>That turns international governance into an architecture problem. Companies need an inventory of models and automated decisions, clear data boundaries, testing records, human escalation paths, and the ability to change a control by geography or use case. A policy PDF cannot do that job. The controls have to exist inside procurement, development, deployment, and monitoring.</p>

      <p>The dialogue's own <a href="https://www.un.org/global-dialogue-ai-governance/en/programme" target="_blank" rel="noopener noreferrer">program</a> shows how wide the unfinished work is. Sessions covered scientific understanding, capacity building, inclusive participation, interoperability, and links between existing governance initiatives. That breadth helps countries enter the conversation. It also creates a risk that the process becomes a catalog of concerns without choosing which problems need action first.</p>

      <p>Capacity may be the most concrete test. A country cannot enforce an AI procurement standard or investigate an automated decision if it lacks technical staff, testing tools, access to documentation, or leverage with a foreign vendor. If the global process only produces principles, the countries with the fewest resources will remain rule takers.</p>

      <p>The UN's description of the dialogue is careful. It calls it a platform to discuss cooperation, share practices, and support "open, transparent and inclusive discussions." That is not the language of a global AI regulator. It is the language of coordination, and coordination can still matter when systems cross borders faster than laws do.</p>

      <p>This is where the operating work I follow at <a href="https://samcbarth.com" target="_blank" rel="noopener noreferrer">SamCBarth.com</a> meets policy. A company does not need to predict the final international agreement. It needs enough visibility into its own AI use to respond when two markets reach different answers.</p>

      <p>Geneva did not close the gap between those answers. It created a place to measure it in public. By the New York session next May, the useful question will be whether the dialogue can turn one shared evidence base into a short list of actions countries can actually implement. If it returns with another broad set of principles, the room will exist, but the rulebook will still be written somewhere else.</p>
    `
  },
  post74: {
    featured: false,
    date: 'July 11, 2026', iso: '2026-07-11',
    title: 'The next AI bottleneck sits underneath the processor',
    category: 'Infrastructure', tag: 'Signal', tagClass: 'tag-cyan',
    image: 'assets/images/post74-hero.jpg',
    body: `
      <p>Look at an AI server from the top and the expensive processor gets all the attention. Look underneath it and a less glamorous problem appears: how do you deliver a huge amount of power to that chip without wasting space, losing energy, or missing a sudden change in demand?</p>

      <p>Analog Devices just bought its way deeper into that problem. On July 7, the company <a href="https://investor.analog.com/news-releases/news-release-details/analog-devices-completes-acquisition-empower-semiconductor" target="_blank" rel="noopener noreferrer">completed its acquisition of Empower Semiconductor</a>. The price was not disclosed. The strategic target was clear. ADI wants to own more of the path that moves electricity from the grid all the way to the core of an AI processor.</p>

      <p>That path is becoming part of compute performance. New accelerators can consume enormous power and change their load quickly. The server has to take rack-level power, convert it into precise voltages often below one volt, and deliver it close enough to the processor that resistance and response time do not eat into performance.</p>

      <p>The traditional approach places voltage regulators and banks of capacitors around the processor on the circuit board. That works until the processor, memory, cooling hardware, and power components all compete for the same limited area. Longer electrical paths also create loss and make it harder to respond when a chip moves quickly from idle to full work.</p>

      <p>Empower changes the geometry. Its <a href="https://www.empowersemi.com/solutions/" target="_blank" rel="noopener noreferrer">vertical power delivery architecture</a> moves regulation beneath or much closer to the processor. Its Crescendo platform is built for kilowatt-class AI and high-performance computing chips. The company says this placement reduces losses, improves transient response, and removes bulky external components.</p>

      <p>In plain English, electricity takes a shorter trip. The board can devote more room to the processor, memory, and connections that move data. Power can react faster when the workload changes. Those gains are small at the level of one conversion step, but they compound across racks full of accelerators running around the clock.</p>

      <p>ADI CEO Vincent Roche described energy as "one of the most persistent constraints to scaling next-generation systems." That is useful wording because it avoids pretending the acquisition solves the whole data center power problem. Grid connections, transformers, cooling, generation, and transmission still set hard boundaries. Empower works much closer to the chip, where delivered electricity can still be lost or limited before it becomes useful compute.</p>

      <p>A recent <a href="https://www.semiconductors.org/wp-content/uploads/2026/05/Powering-AI_The-Semiconductor-Ecosystem-at-the-Foundation-of-Data-Centers_report.pdf" target="_blank" rel="noopener noreferrer">Semiconductor Industry Association and Deloitte report</a> shows why this layer matters. It describes an advanced compute tray taking in 48 volts or more and delivering tightly regulated voltages, often below one volt, to processors, memory, and other components. It also says the architecture of AI data center power delivery is changing almost annually and governs how much compute is extracted from each watt.</p>

      <p>That makes this acquisition different from a simple product extension. Analog Devices already sells power management, sensing, conversion, and connectivity technology across industrial, automotive, communications, and data center markets. Empower brings specialized integrated voltage regulators, silicon capacitors, advanced packaging, and magnetics. ADI can now approach customers with more of the power chain and help design the pieces together.</p>

      <p>The commercial advantage is co-design. A processor company does not want to discover late in development that the power system cannot fit, cannot respond fast enough, or creates too much heat. Bringing power architecture into the package and board design earlier can shorten redesign cycles and make a new accelerator easier to deploy at scale.</p>

      <p>There is also integration risk. Empower's value comes from specialized engineering and close relationships with the companies designing advanced compute systems. ADI has to keep that speed while adding its own manufacturing reach, sales organization, product process, and customer base. A larger catalog only matters if the combined team can get designed into the next generation of hardware.</p>

      <p>The acquisition price being undisclosed leaves another question open. Investors cannot directly compare the purchase cost with Empower's current revenue or customer commitments. ADI is asking the market to judge the deal through future design wins and an expanded addressable market. Those results will take longer to see than the closing announcement.</p>

      <p>For businesses buying AI infrastructure, this is a reminder that processor specifications are not system economics. Performance per watt, rack density, cooling demand, utilization, and electrical losses determine how much useful work a facility can actually produce. A faster chip that forces a costly redesign of power and cooling may be the worse purchase.</p>

      <p>That wider system view connects naturally to the technology decisions I follow at <a href="https://samcbarth.com" target="_blank" rel="noopener noreferrer">SamCBarth.com</a>. AI capacity is not one procurement line. It is a chain of constraints, and the weakest link decides how much of the headline compute a business can use.</p>

      <p>Empower's technology will mostly disappear beneath processors and inside packages. That is exactly why the deal matters. If ADI can turn a shorter electrical path into denser, cooler, more responsive systems, some of the next major AI performance gains will arrive from a component most users never see.</p>
    `
  },
  post73: {
    featured: false,
    date: 'July 11, 2026', iso: '2026-07-11',
    title: 'GitHub found the security control hiding in its org chart',
    category: 'Cybersecurity', tag: 'Signal', tagClass: 'tag-cyan',
    image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1160&h=440&fit=crop&q=80',
    body: `
      <p>A secret scanner can find an exposed credential in seconds. The awkward part starts when nobody knows who can safely rotate it.</p>

      <p>GitHub ran into that problem inside its own company. Its primary internal organization held more than 14,000 repositories, but fewer than half had clear ownership. Security teams could identify a problem and still lose time reading commit history, checking documentation, asking in Slack, or guessing which team should make the change.</p>

      <p>On July 9, GitHub published <a href="https://github.blog/security/application-security/how-github-gave-every-repository-a-durable-owner/" target="_blank" rel="noopener noreferrer">the system it built to close that gap</a>. In under 45 days, the company gave every active repository a validated owner and archived the rest. The result was about 3,000 active repositories and 11,000 archived ones.</p>

      <p>The archive count is striking, but the ownership model is the more useful business story. GitHub did not treat ownership as a spreadsheet cleanup. It turned ownership into structured data, validated that data against real teams and services, and made it mandatory when a repository was created.</p>

      <p>Two custom properties carried the model: an ownership type and an ownership name. A repository could belong to a service, a team, or an individual employee. Service records were checked against GitHub's internal catalog. Teams had to exist and have at least two members. Individual handles had to belong to a current employee.</p>

      <p>That validation matters. A free-text owner field can create the appearance of accountability while pointing to a former employee, a misspelled team, or a group that no longer exists. GitHub wanted the entry process to be easy, but the underlying owner had to be real.</p>

      <p>The rollout also avoided pretending that every old repository deserved a meeting. GitHub opened an issue on unowned repositories and gave people 30 days to claim them. Anything still unclaimed was archived. Archiving was reversible and non-destructive, so the company could reduce risk without deleting years of work.</p>

      <p>That choice exposed dependencies the repository list did not show. One archived repository had been receiving monitoring issues from Datadog. When Datadog could no longer write to it, an internal monitor paged a team. GitHub fixed the notification path by mentioning repository administrators and assigning people with write access when no owner was available.</p>

      <p>A second incident was more serious. GitHub realized a stale or corrupted service catalog could make valid repositories look abandoned. At that scale, a bad data source could trigger a mass archive. The team added a low-water-mark guardrail that stops the job and raises an alert when the proposed action count crosses a conservative threshold.</p>

      <p>GitHub's advice is blunt: "assume your data sources will occasionally be wrong, and your notifications will sometimes get lost." That is the difference between a cleanup script and an operating control. The automation needs a limit that protects the company when its own inputs fail.</p>

      <p>The broader security logic lines up with the <a href="https://csrc.nist.gov/projects/ssdf" target="_blank" rel="noopener noreferrer">NIST Secure Software Development Framework</a>. NIST puts "Prepare the Organization" first and describes it as ensuring that people, processes, and technology are ready to perform secure development. Tools can surface risk, but a company still needs named roles that can decide, act, and be held accountable.</p>

      <p>NIST also describes the framework as "a common language for describing secure software development practices." GitHub's custom properties turn part of that language into queryable company data. Security policy can now target repositories by ownership type, incidents can reach a durable team, and compliance work can start from an inventory that reflects what is actually active.</p>

      <p>There is a cost hiding in every unowned asset. It appears as investigation time during an incident, delayed patching, duplicate infrastructure, inactive automation, unnecessary licenses, and uncertainty during an audit. None of those costs look dramatic alone. Across thousands of repositories, they become an operating tax.</p>

      <p>This is also a useful warning for the agent era. More AI-generated code means more repositories, branches, experiments, and automated actions. If creation gets cheaper while ownership stays optional, the inventory grows faster than the company can govern it. The right control is not another cleanup every year. It is making ownership part of creation and checking continuously that the owner still exists.</p>

      <p>The workflow work I track at <a href="https://samcbarth.com" target="_blank" rel="noopener noreferrer">SamCBarth.com</a> usually starts with handoffs, and this story shows why. A finding without an accountable destination is just a notification. GitHub improved the scanner's value without changing the scanner. It made sure every result had somewhere valid to go.</p>

      <p>GitHub's 11,000 archived repositories are not the win by themselves. The win is that the next exposed secret, broken dependency, or policy exception no longer begins with a search for a person. The repository already knows who answers.</p>
    `
  },
  post72: {
    featured: false,
    date: 'July 11, 2026', iso: '2026-07-11',
    title: '84.6% is the number to watch in CommBank\'s AI rollout',
    category: 'Artificial Intelligence', tag: 'Signal', tagClass: 'tag-cyan',
    image: 'assets/images/post72-hero.jpg',
    body: `
      <p>84.6%.</p>

      <p>That is the share of Commonwealth Bank self-service messaging conversations resolved inside the messaging channel in May. It is a better number than another announcement about an AI banking assistant because it measures whether customers actually got through the work.</p>

      <p>CommBank and Microsoft published the result on July 9 as part of a deeper look at the bank's new customer service architecture. The platform handles more than two million voice and messaging conversations each month. It also supports a contact center receiving about 50,000 calls a day.</p>

      <p>The volume makes this different from a controlled chatbot pilot. A small error rate becomes a lot of bad customer experiences when a system is touching millions of conversations, especially in banking.</p>

      <p>The architecture is the useful part. CommBank built a central orchestration agent with Microsoft Copilot Studio and Microsoft Foundry. Instead of putting separate AI logic inside chat, voice, and every other channel, the central layer reads the customer's intent and routes the request to the right response path.</p>

      <p>A basic question can go to conversational AI. A question about public bank information can use retrieval-augmented generation to pull current content. A regulated process such as a fraud dispute follows a defined path with guardrails. A sensitive conversation moves to a human specialist in Dynamics 365 with the context and summary attached.</p>

      <p>CommBank engineering leader Shashank Verma calls the design "separating intelligence from channels." That choice matters because a bank should not have to rebuild its decision logic every time customers move from messaging to voice or a new interface appears.</p>

      <p>It also makes governance more visible. The company can define which requests are suitable for a flexible AI answer, which require a deterministic workflow, and which need a person. Those are operating decisions, not model settings.</p>

      <p>The human handoff deserves as much attention as the 84.6% resolution rate. Rachel Round, who leads CommBank's self-service customer capabilities, said the bank is intentional about involving people "where trust and nuance are important." That includes language suggesting vulnerability, where empathy and deeper support matter more than completing a transaction with fewer steps.</p>

      <p>This is a useful boundary. The goal is not 100% automation. Pushing every conversation toward self-service would make the metric look efficient while making difficult cases worse. A good orchestration system should resolve routine work quickly and recognize the moment routine work stops being routine.</p>

      <p>CommBank did not get here by adding one chat window. The team migrated nearly 700 existing chatbot topics into Copilot Studio. Engineers spent three weeks at Microsoft headquarters testing new capabilities against banking scenarios. Microsoft then sent product engineers to Sydney to work beside the bank's team in a live production environment.</p>

      <p>That level of co-engineering says something about the real cost. The published story does not give a project budget, model accuracy rate, or comparison with the previous channel resolution rate. It does show that production AI required product access, embedded engineers, operational-readiness criteria, deployment safeguards, and automated escalation paths.</p>

      <p>CommBank's own <a href="https://www.commbank.com.au/content/dam/commbank-assets/investors/docs/results/fy25/2025-annual-report-print-friendly.pdf" target="_blank" rel="noopener noreferrer">2025 annual report</a> provides earlier context. It said generative AI messaging had increased customer interactions through unassisted channels by about 20%. The bank's <a href="https://news.microsoft.com/source/asia/features/how-commonwealth-bank-and-microsoft-are-reimagining-the-future-of-customer-service/" target="_blank" rel="noopener noreferrer">new Microsoft case study</a> moves the evidence forward with a current resolution number.</p>

      <p>The next measurement should be harder. How often does the 15.4% that leaves self-service reach the correct human on the first handoff? How many customers repeat information? What happens to complaint rates, fraud dispute time, abandonment, and cost per resolved conversation? A channel resolution percentage is useful, but customer service is only finished when the customer's issue is finished.</p>

      <p>This connects to the workflow work I follow at <a href="https://samcbarth.com" target="_blank" rel="noopener noreferrer">SamCBarth.com</a> because orchestration is where AI stops being a feature and starts becoming an operating model. The value comes from knowing which system should answer, which rules apply, when a person takes over, and what context follows the handoff.</p>

      <p>CommBank's 84.6% gives the industry a real production marker. The more revealing number will come from the remaining 15.4%. If those customers reach the right person with the right context and no restart, the bank has built more than a capable bot. It has built a customer service system that knows its own limits.</p>
    `
  },
  post71: {
    featured: false,
    date: 'July 11, 2026', iso: '2026-07-11',
    title: 'AWS is closing the door on its first enterprise AI stack',
    category: 'Business Strategy', tag: 'Signal', tagClass: 'tag-cyan',
    image: 'assets/images/post71-hero.jpg',
    body: `
      <p>A company bought Amazon Kendra to search its internal knowledge. It added Amazon Q Business so employees could ask questions against that information. It started testing Bedrock Agents to move from answers into actions. Each decision made sense on its own. Now all three products are being moved out of the path AWS wants new customers to take.</p>

      <p>On June 30, AWS published a broad <a href="https://aws.amazon.com/about-aws/whats-new/2026/06/aws-service-availability/" target="_blank" rel="noopener noreferrer">service availability update</a>. Starting July 30, new customers will no longer be able to access Amazon Kendra, Amazon Q Business, or the original Bedrock Agents, which has been renamed Bedrock Agents Classic. Existing customers can keep using them, and AWS says it will continue operating and supporting the services.</p>

      <p>This is not a shutdown notice. It is still a major product signal. AWS is clearing three recognizable pieces of its first enterprise AI stack from the front door while directing new work toward Amazon Quick and Bedrock AgentCore.</p>

      <p>The sequence tells the story. Kendra launched as enterprise search. Q Business wrapped generative AI around company data and gave employees a conversational interface. Bedrock Agents added task execution. Amazon Quick now pulls search, analytics, apps, and autonomous agents into one workspace. AgentCore provides the runtime, identity, memory, monitoring, and policy layer for agents built outside that workspace.</p>

      <p>AWS is not leaving enterprise AI. It is collapsing several product paths into fewer operating systems.</p>

      <p>The <a href="https://aws.amazon.com/q/business/" target="_blank" rel="noopener noreferrer">Q Business product page</a> makes that direction explicit. It calls Quick the next evolution of Q Business and says existing customers can use their current Q index inside Quick. That can protect some of the work already done connecting documents and permissions. It does not mean the move is automatic or free of design choices.</p>

      <p>Q Business was centered on finding information, generating content, and creating lightweight applications. Quick is positioned around a broader promise: connect to business data, analyze it, and let agents perform recurring work. AWS describes the change as moving from answers to actions. That sounds clean on a product page. Inside a company, the distance between those two things contains approvals, audit logs, failure handling, process ownership, and a lot of security review.</p>

      <p>That is why maintenance mode matters even when support continues. A customer can leave a working Kendra or Q Business deployment alone for now. But any expansion decision changes. Should another department be added to a product that new customers can no longer buy? Should a partner keep developing a Kendra-based solution? Should an internal team build another Q App when AWS is putting its newest agent features into Quick?</p>

      <p>Partners will feel this quickly. Persistent Systems still markets customer service and sales solutions powered by Kendra. Its <a href="https://www.persistent.com/services/data-and-analytics/data-science-and-machine-learning/intelligent-search/elevate-sales-engagement-outcomes-with-intelligent-search/" target="_blank" rel="noopener noreferrer">sales engagement offer</a> promises users "accurate and contextual recommendations" inside Salesforce. The business need has not disappeared. The product underneath that promise now has a lifecycle question attached to it.</p>

      <p>Migration services are already appearing in AWS Marketplace for moving Q Business workloads into Quick. That is another useful signal. When a platform change creates a consulting category, the technical reuse is probably real, but so is the implementation work.</p>

      <p>The right response is not to panic and rip out a stable deployment. It is to inventory what the old service is actually doing. Map the connectors, indexes, permissions, applications, custom actions, usage levels, and contracts. Then separate the parts that can carry forward from the parts tied to one product interface.</p>

      <p>For Q Business, the reusable index may reduce the data migration burden. The harder questions sit above it. Quick has a different user experience and a larger action surface. Teams need to test whether answers remain accurate, whether document-level access still behaves as expected, and whether agent actions can be limited to the right systems and people.</p>

      <p>For Kendra, the decision may be less direct. Some deployments support customer-facing search, embedded applications, or retrieval pipelines that do not need an employee agent workspace. Moving those jobs into Quick may not fit. A team may need another search architecture, or it may decide that continuing on Kendra is safer until AWS provides a clearer destination.</p>

      <p>Bedrock Agents Classic creates a similar split. Existing agents can continue running, but new agent development will naturally move toward AgentCore. That means comparing memory, identity, tool integration, observability, and runtime behavior instead of treating the newer name as a drop-in upgrade.</p>

      <p>AWS says, "Customers already using these services and features can continue to do so." That sentence protects continuity. It should not be confused with a roadmap. Businesses need both.</p>

      <p>This is the kind of platform change I watch at <a href="https://samcbarth.com" target="_blank" rel="noopener noreferrer">SamCBarth.com</a> because architecture decisions eventually become operating decisions. The question is no longer whether the old stack works. It is how much more process, data, and customer experience a company wants to attach to products AWS has removed from the new-customer path.</p>

      <p>The July 30 cutoff gives teams a date, but not a reason to rush into a new logo. The useful work is tracing every answer, search result, and agent action back to the system that produces it. Once that map exists, AWS's consolidation becomes a migration that can be priced and tested instead of a surprise hidden inside the next renewal.</p>
    `
  },
  post70: {
    featured: false,
    date: 'July 11, 2026', iso: '2026-07-11',
    title: 'The forecast businesses need is a range, not a number',
    category: 'Business Strategy', tag: 'Signal', tagClass: 'tag-cyan',
    image: 'https://images.unsplash.com/photo-1561484930-998b6a7b22e8?w=1160&h=440&fit=crop&q=80',
    body: `
      <p>An energy trader sees clouds moving toward a solar farm. A shipping operator sees a storm forming near a port. A utility sees heat building across its service area. None of them only needs the most likely forecast. They need to know how wrong that forecast could be, and what the expensive version of wrong looks like.</p>

      <p>That is the useful change in Microsoft's new Aurora 1.5 weather model. The headline is not simply that AI can produce another weather forecast. Aurora can now produce a range of plausible outcomes, attach probabilities to them, and update at hourly resolution. That turns weather from a number on a screen into an input for an operating decision.</p>

      <p>Microsoft <a href="https://www.microsoft.com/en-us/research/blog/aurora-1-5-extending-open-foundation-models-for-weather-and-earth-system-applications/" target="_blank" rel="noopener noreferrer">released Aurora 1.5 on July 9</a> as an open-source model, with checkpoints available through Hugging Face and access through Microsoft Foundry. The update expands Aurora from four weather variables to 26. It adds fields for wind, temperature, humidity, precipitation, radiation, and other conditions that matter across energy, agriculture, transportation, and climate planning.</p>

      <p>The ensemble capability is the bigger business story. Traditional deterministic output gives one expected path. An ensemble runs multiple simulations with controlled variations, creating a distribution of possible paths. A company can then plan against both the likely result and the uncertainty around it.</p>

      <p>Consider a renewable energy operator. A single forecast might predict a certain amount of solar generation tomorrow afternoon. A range can show whether that estimate is tightly clustered or whether cloud uncertainty creates a meaningful chance of a shortfall. The operator can decide whether to buy backup power, hold battery capacity, or accept the risk. The forecast does not make the decision. It gives the decision a better price.</p>

      <p>Microsoft says Aurora 1.5 outperformed the European Centre for Medium-Range Weather Forecasts ensemble on 88.9% of the variable and lead-time targets it evaluated. Across tropical cyclones in 2024 and 2025, Microsoft reports that the ensemble median reduced track error by roughly one-third compared with the original Aurora by day five.</p>

      <p>Those results are strong, but they need the right boundary. The tropical cyclone result measures track position, not every consequence of a storm. The broader evaluation comes from the team releasing the model. Open weights and checkpoints make independent testing possible, which matters more than treating one benchmark as a finished verdict.</p>

      <p>Independent research already shows why that testing is necessary. A <a href="https://arxiv.org/abs/2603.06516" target="_blank" rel="noopener noreferrer">March study of Aurora and extreme weather</a> found strong skill across several event types at one to seven days. At 14 to 21 days, the model often kept the large weather pattern while losing the intensity of threshold-based extremes. In plain English, it could still see the setup while smoothing away how severe the event might become.</p>

      <p>That is not a reason to dismiss the model. It is a reason to match the decision to the forecast horizon. A logistics team rerouting trucks tomorrow is making a different bet from an insurer estimating regional exposure three weeks out. Both can use AI weather intelligence, but they should not use the same confidence threshold or fallback plan.</p>

      <p>Microsoft is also making a deliberate open-plus-managed move. Researchers and companies can inspect and adapt Aurora 1.5 themselves. Microsoft Weather is offering the data, cloud infrastructure, integrations, and operational support needed to put it into production. The open model expands the developer base. The managed path creates the commercial product.</p>

      <p>Sridhar Iyer of Microsoft AI called the release "a meaningful step toward making weather foundation models more open, useful, and practical." Doug McNeall of the UK Met Office called Aurora "a great platform for learning how to translate these tools for use in climate projection." Both descriptions are careful. This is a platform to test and apply, not permission to remove meteorologists or established physics-based systems from the process.</p>

      <p>That distinction will matter in procurement. A buyer should ask which historical periods and regions were used for evaluation, how forecast uncertainty is calibrated, when the model falls back to another system, and who is accountable when the outputs disagree. It should also measure the cost of acting too early against the cost of waiting. Better forecast skill only creates value when it changes a real decision.</p>

      <p>BKW, a Swiss energy company, is an early example. Microsoft says BKW is using Aurora 1.5 alongside existing operational weather models to manage renewable generation and infrastructure planning. The phrase "alongside" is important. Weather is too consequential for a clean replacement story. The practical path is comparison, calibration, and then a measured increase in trust.</p>

      <p>This fits the work I think about at <a href="https://samcbarth.com" target="_blank" rel="noopener noreferrer">SamCBarth.com</a> because uncertainty is often where a workflow becomes real. A dashboard that says rain is likely is information. A system that shows the range, connects it to inventory or capacity, and defines the action threshold is an operating tool.</p>

      <p>Aurora 1.5 will matter if companies stop asking it for one confident answer and start using it to make better bets. For a solar farm, port, farm, insurer, or emergency planner, the most valuable forecast may be the one that admits several futures and makes the cost of each one visible.</p>
    `
  },
  post69: {
    featured: false,
    date: 'July 11, 2026', iso: '2026-07-11',
    title: "Inside Accenture's plan to make enterprise AI fit the middle market",
    category: 'Business Strategy', tag: 'Signal', tagClass: 'tag-cyan',
    image: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=1160&h=440&fit=crop&q=80',
    body: `
      <p>Accenture drew a line around a market that large consulting firms have often struggled to serve efficiently. The new Accenture Edge business is aimed at companies with annual revenue between $300 million and $3 billion. Now Google Cloud is helping fill that business with prebuilt AI offers.</p>

      <p>The sequence matters. Accenture launched Edge on June 23, defining the customer and the delivery model first. On July 7, it announced a suite of Google Cloud solutions across customer growth, customer experience, cybersecurity, business operations, industry workflows, and workforce productivity. This is consulting being turned into something closer to a repeatable product.</p>

      <p>That is not how most large transformation programs are sold. The familiar model starts with a broad assessment, builds a custom roadmap, assembles a large team, and runs for years. It can work for a global enterprise with a large budget and enough people to manage the program. A middle-market company may face the same data, security, ERP, and AI problems without having the same staff or tolerance for a long discovery phase.</p>

      <p>Accenture is trying to remove some of that mismatch. Its <a href="https://newsroom.accenture.com/news/2026/accenture-launches-accenture-edge-to-help-mid-market-companies-harness-ai-and-reinvent-how-they-operate" target="_blank" rel="noopener noreferrer">Edge launch announcement</a> describes platform-led, ready-to-deploy solutions that are faster, more repeatable, and sized for this segment. Accenture says the addressable market is about $240 billion and growing at a high-single-digit rate.</p>

      <p>Google Cloud gives the offer a defined technology base. The <a href="https://www.googlecloudpresscorner.com/2026-07-07-Accenture-Edge-and-Google-Cloud-Bring-Scalable-Agentic-AI-Solutions-to-Mid-Market-Companies" target="_blank" rel="noopener noreferrer">joint announcement</a> names Gemini Enterprise, the Gemini Enterprise Agent Platform, Agentic Data Cloud, Google Workspace, and AI Threat Defense, which includes Gemini, Mandiant, and Wiz. Accenture forward-deployed engineers will work alongside those products.</p>

      <p>That packaging can shorten the path to production. Customer intelligence does not need to begin with a blank architecture diagram. A security project can arrive with threat analysis, monitoring, and response components already connected. Industry offers can reuse workflows across retail, banking, telecommunications, consumer goods, and supply chains.</p>

      <p>Rajendra Prasad of Accenture said customers can deploy the solutions "in weeks and get measurable outcomes at the scale, budget and speed that they need to grow." Kevin Ichhpurani of Google Cloud said the partnership brings its full portfolio "directly to this sector." Those are strong promises. The next step is proving how much of the package is actually standard.</p>

      <p>A repeatable offer has to make several decisions before the customer arrives. It needs a clear data model, defined integrations, security controls, operating roles, and a way to measure the result. If every implementation still needs months of custom work to clean data and settle ownership, the package may be easier to buy without being much faster to run.</p>

      <p>There is also a real tradeoff in choosing one technology foundation. Standardizing on Google Cloud can reduce design work and make support cleaner. It can also create friction for companies already committed to Microsoft, AWS, Oracle, or a mix of systems built through years of acquisitions. Accenture Edge says its partner lineup will expand, and Avanade will continue serving Microsoft platform work. Buyers still need to know whether the solution is right-sized for their environment or simply right-sized for one vendor stack.</p>

      <p>The revenue band is useful, but it does not make these companies alike. A $500 million manufacturer with plants, operational technology, and a small IT team has different constraints from a $500 million digital services firm. Prebuilt industry workflows help, but the operating model around them still needs local judgment. That is where the forward-deployed engineers may matter more than the agents.</p>

      <p>Accenture's own Edge site is unusually direct about where projects stall. It says the proof comes after the pilot, when integration, change management, and iteration begin. It also promises clear ROI before commitment and results in months rather than years. Those claims create a useful standard for judging the new business. Customers should be able to see the baseline, the implementation boundary, the recurring service cost, and the metric that is expected to move before signing.</p>

      <p>This model also changes Accenture's economics. Repeatable delivery can spread product development and specialized talent across more accounts. Managed services can keep Accenture involved after deployment. The company gets access to a large market that may have been too small for its traditional project structure, while Google Cloud gets a scaled route into customers that often rely on partners to make major platform decisions.</p>

      <p>At <a href="https://samcbarth.com" target="_blank" rel="noopener noreferrer">SamCBarth.com</a>, I keep coming back to the point where a sales promise becomes an operating system. Accenture Edge will be convincing when a middle-market customer can recognize the solution, understand the price and ownership, and get it running without recreating a Global 2000 transformation program. The revenue band opened the door. Repeatability has to make the room fit.</p>
    `
  },
  post68: {
    featured: false,
    date: 'July 11, 2026', iso: '2026-07-11',
    title: 'A $4.48 agent run changes where teams should look for savings',
    category: 'Business Strategy', tag: 'Signal', tagClass: 'tag-cyan',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1160&h=440&fit=crop&q=80',
    body: `
      <p>$4.48 versus $43.48 is the kind of gap that changes a buying conversation. It is also the kind of benchmark result that needs to be read carefully.</p>

      <p>LangChain says NVIDIA's Nemotron 3 Ultra scored 0.86 on its agent evaluation suite when paired with a tuned Deep Agents harness. The next closest model cost $43.48 on the same evaluation. That makes the Nemotron setup roughly ten times cheaper in this test, without giving up the top aggregate score.</p>

      <p>The result comes from the new <a href="https://www.langchain.com/blog/langchain-and-nvidia-launch-the-nemoclaw-deep-agents-blueprint" target="_blank" rel="noopener noreferrer">NemoClaw for LangChain Deep Agents blueprint</a>, announced July 8. It combines LangChain Deep Agents Code, NVIDIA Nemotron 3 Ultra, and NVIDIA OpenShell. The package is open, customizable, and meant to give companies a governed path from an agent experiment to something they can operate.</p>

      <p>The important detail is where the savings came from. LangChain did not just swap one model for another. Its team tuned how the agent uses tools, manages context, and checks intermediate steps. The benchmark is evidence that the system around a model can affect cost and quality as much as the model selection itself.</p>

      <p>LangChain puts it directly: "model choice is only one part of improving agent performance." That is a useful correction for companies still treating model comparison as the entire AI strategy. A model can be strong and still waste money if the agent repeats searches, carries unnecessary context, calls the wrong tool, or keeps working after it has enough information.</p>

      <p>A harness controls that behavior. It gives the agent a planning method, access to files and tools, rules for delegating work, and a way to preserve or trim context. Tuning the harness means adjusting the operating process around the intelligence. That sounds less exciting than a new frontier model, but it is much closer to normal process improvement.</p>

      <p>The business implication is not that every company should move to Nemotron tomorrow. The published number comes from LangChain's own evaluation suite, using a profile LangChain tuned for this model. It does not prove the same tenfold difference will appear in customer support, finance operations, research, or software development. Workloads have different tool calls, context sizes, latency requirements, and definitions of success.</p>

      <p>It does show what teams should measure. Instead of asking only which model produced the best answer, measure the full run: task completion, inference cost, time, tool failures, retries, human corrections, and the number of steps required. A cheaper token price can lose quickly if the agent needs three attempts. A more expensive model can be economical if it finishes cleanly the first time.</p>

      <p>The OpenShell layer handles a different cost, which is risk. <a href="https://build.nvidia.com/nvidia/nemoclaw-for-langchain-deep-agents-code/architecture" target="_blank" rel="noopener noreferrer">NVIDIA's blueprint architecture</a> says the agent runs in a sandbox with controlled network access, policy presets, logs, and snapshots. It also states that "Network access is denied by default." Credentials are handled outside the agent configuration, and teams can audit the plan, commands, test results, and code changes.</p>

      <p>Those controls matter because a low-cost agent that can reach the wrong system is not cheap. One bad command, exposed credential, or unreviewed change can erase months of inference savings. The blueprint makes governance part of the runtime instead of asking every development team to bolt it on after the agent works.</p>

      <p>There is a commercial move here for both companies. LangChain gets its agent framework into a packaged enterprise deployment path. NVIDIA makes Nemotron and OpenShell the engine and control layer underneath that path. The blueprint may be open, but successful deployments still create demand for NVIDIA inference, tooling, and infrastructure.</p>

      <p>Buyers should also notice that the stack remains modular. The harness, model, and runtime are separate layers. That gives a company room to tune one without rebuilding everything else. It also creates real integration work. Version changes, evaluation drift, policy maintenance, and debugging across three layers do not disappear because the initial blueprint is easy to install.</p>

      <p>This connects with the operating questions I work through at <a href="https://samcbarth.com" target="_blank" rel="noopener noreferrer">SamCBarth.com</a>. If an AI project has no agreed task, success measure, owner, or review point, a better model will not fix the process. The harness forces those decisions into the system. What can the agent do? What context should it keep? When should it stop? Who reviews the result?</p>

      <p>The $4.48 result is useful because it moves the conversation away from model rankings and toward unit economics. Now the work is to reproduce that result on a real company task, with its actual data, tools, policies, and failure costs. If the gap holds there, the winning AI stack may not be the one with the most powerful model. It may be the one that wastes the fewest moves.</p>
    `
  },
  post67: {
    featured: false,
    date: 'July 11, 2026', iso: '2026-07-11',
    title: 'One identity console could change the economics of managed security',
    category: 'Cybersecurity', tag: 'Signal', tagClass: 'tag-cyan',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1160&h=440&fit=crop&q=80',
    body: `
      <p>A managed service provider does not have one identity system to protect. It may have hundreds, spread across customers with different tools, rules, users, and risk levels. Every extra console adds another login, another alert queue, and another place for a small mistake to become a large problem.</p>

      <p>That is the operating problem behind <a href="https://www.barracuda.com/company/news/2026/barracuda-acquires-evo-security-complete-identity-resilience" target="_blank" rel="noopener noreferrer">Barracuda's acquisition of Evo Security</a>. The deal was announced July 7. Financial terms were not disclosed, which makes this less of a valuation story and more of a product strategy story. Barracuda is buying identity and privileged access technology built specifically for the people managing security across many separate businesses.</p>

      <p>Evo combines identity and access management with privileged access management in one multi-tenant platform. In plain English, an MSP can control who gets into a customer environment, what an administrator can do after getting in, and how that access is reviewed without treating every customer like a separate internal IT department.</p>

      <p>That multi-tenant design is the key. Large enterprise identity products can be powerful, but they are usually built around one organization. An MSP needs separation between customers and one operating view across them. It needs to apply a policy to 100 clients without mixing their data, then make an exception for one client without breaking the other 99.</p>

      <p>Barracuda plans to put Evo inside BarracudaONE, its broader platform for email, data, network, cloud, and managed detection security. That gives partners a path to manage access control, privileged accounts, identity protection, and identity threat response beside the other security work they already sell.</p>

      <p>Barracuda CEO Rohit Ghai said existing identity products "fail to meet the needs of MSPs that must scale to securely manage millions of identities across thousands of customer environments." Evo founder Michael Roth described the product as "designed from day one for MSP operations." Both quotes are acquisition messaging, but the distinction is real. A tool can have the right security features and still have the wrong operating model.</p>

      <p>The immediate business case is fewer disconnected products. Every point solution has a license, an integration, a training requirement, and a support burden. Consolidation can reduce that overhead. It can also give the MSP a clearer service to package and sell: identity controls, privileged access, and threat monitoring managed from one place.</p>

      <p>There is a revenue argument too. Barracuda already has a channel of managed service providers selling its products. Evo adds a new identity layer those partners can take into existing accounts. The MSP does not have to find a new customer before it can create new recurring revenue. It can expand the security program around customers it already supports.</p>

      <p>The risk is that platform consolidation can hide weak integration. One invoice and one dashboard do not automatically create one useful workflow. Alerts still need consistent context. Policies need to move cleanly between access, email, endpoint, and response tools. If an identity signal appears in BarracudaONE but still requires three separate investigations, the platform has consolidated the screen, not the work.</p>

      <p>Barracuda also has to preserve what made Evo useful to MSPs. Acquisitions often pull a focused product toward the parent company's broader roadmap. Existing Evo customers will watch pricing, support, integrations, and product pace. The promise is more scale without losing the partner-first design. That balance will matter more than how quickly the Evo logo disappears.</p>

      <p>The threat data supports the need for a wider view, but it also adds an important warning. <a href="https://www.verizon.com/about/news/breach-industry-wide-dbir-finds" target="_blank" rel="noopener noreferrer">Verizon's 2026 Data Breach Investigations Report summary</a> says exploitation of vulnerabilities passed stolen credentials as the leading initial breach route for the first time in the report's 19-year history. Third-party involvement also rose sharply. Identity still matters, but it cannot become the only control an MSP sells while exposed software and supplier access keep opening other doors.</p>

      <p>AI makes the identity model wider again. Companies now have human users, service accounts, API keys, bots, and agents that may act across several systems. Barracuda calls these human and non-human identities. The useful question is not whether an agent has a login. It is who authorized it, what it can reach, how long that authority lasts, and whether the MSP can explain its actions after something goes wrong.</p>

      <p>That connects directly to the operating work I care about at <a href="https://samcbarth.com" target="_blank" rel="noopener noreferrer">SamCBarth.com</a>. Access rules only help when ownership and handoffs are clear. If nobody owns the privileged account, the exception process, or the response after a risky login, more automation just moves the confusion faster.</p>

      <p>Barracuda did not disclose what it paid for Evo, so the clearest way to judge this deal will be inside the MSP's day. If one technician can protect more customers without losing separation or context, the acquisition improves the economics of managed security. If BarracudaONE becomes one more place to check before opening the same old consoles, it has bought features without removing the real cost.</p>
    `
  },
  post66: {
    featured: false,
    date: 'July 11, 2026', iso: '2026-07-11',
    title: 'Akamai paid $205 million to put AI policy inside the browser',
    category: 'Cybersecurity', tag: 'Signal', tagClass: 'tag-cyan',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1160&h=440&fit=crop&q=80',
    body: `
      <p>An employee pastes a customer record into an AI tool, uploads a contract for a summary, or lets an agent work through a SaaS application. The company firewall may be working exactly as designed. The data can still leave through the browser.</p>

      <p>That gap explains why Akamai spent approximately $205 million on LayerX. The acquisition, <a href="https://www.globenewswire.com/news-release/2026/07/02/3321349/0/en/akamai-completes-acquisition-of-secure-enterprise-browser-provider-layerx.html" target="_blank" rel="noopener noreferrer">completed July 2</a>, gives Akamai a way to see and control prompts, file uploads, web content, and SaaS activity at the point where a person or AI agent actually uses them.</p>

      <p>The price is the first useful number. Akamai said in May that LayerX was expected to finish 2026 with about $10 million in annual recurring revenue. That puts the purchase price near 20 times that expected run rate. Akamai is not paying for a mature revenue stream. It is paying for a control point it believes will become much more important as AI moves into normal work.</p>

      <p>LayerX does not require a company to replace Chrome, Edge, Safari, or another familiar browser. Its technology adds security controls to the browsers employees already use. That matters because security projects often fail at the adoption layer. A new corporate browser may give the security team more control, but it also creates another rollout, another support problem, and another reason for employees to find a workaround.</p>

      <p>Akamai is taking the lighter path. Its <a href="https://www.akamai.com/resources/solution-brief/secure-enterprise-browser" target="_blank" rel="noopener noreferrer">secure enterprise browser brief</a> says the combined product can apply real-time content analysis, sensitive-data masking, and policy enforcement across SaaS applications, ordinary web activity, and AI models. The browser becomes a place to enforce rules without rebuilding the network around every new tool.</p>

      <p>Mani Sundaram, who leads Akamai's Security Technology Group, said customers report that existing controls "cannot see how employees are interacting with AI tools." LayerX CEO Or Eshed called securing human and agentic AI usage "one of the defining challenges in enterprise security." Those statements are sales language, but they point at a real operational change.</p>

      <p>Traditional access security asks whether this user and device should reach an application. AI use adds harder questions after access is granted. Which data can go into a model? Can the output be copied into another system? Is a personal AI account allowed? Can an agent download a file, approve an action, or follow a link on the user's behalf? The decision is no longer only about entering the application. It is about what happens inside the session.</p>

      <p>This gives Akamai a more complete Zero Trust story. It already sells access controls for private applications, network segmentation, DNS security, and protection for AI applications and workloads. LayerX extends that coverage to the last few feet between the user, the browser, and the tool. Akamai can now pitch one policy chain across identity, application access, browser activity, and infrastructure.</p>

      <p>The commercial logic is clear. Akamai has thousands of security customers and a large global network. LayerX brings a younger product and specialized browser telemetry. Akamai can put that product in front of a much larger customer base, while LayerX gives Akamai a reason to expand existing Zero Trust accounts instead of competing only on network access and segmentation.</p>

      <p>The integration risk is just as clear. A browser control can become noisy fast. If it blocks harmless prompts, breaks common SaaS workflows, or forces employees through constant warnings, people will route around it. If the policy is too loose, the company gets a dashboard full of activity but no meaningful reduction in risk. The product has to know the difference between sensitive business data and ordinary work without becoming another approval queue.</p>

      <p>Agents make that balance harder. A person pauses, notices an unusual page, or questions a request. An agent can move through several browser steps quickly and repeat the same mistake at scale. Security teams will need rules based on the action, the data, the agent, and the destination. They will also need a record that explains why an action was allowed or stopped.</p>

      <p>That is where this story connects with the work I follow at <a href="https://samcbarth.com" target="_blank" rel="noopener noreferrer">SamCBarth.com</a>. AI governance becomes useful when it sits inside the workflow and can make a specific decision. A policy document that says employees should protect customer data does not stop a spreadsheet upload. A browser control can, assuming the company has defined the data, exceptions, and ownership clearly enough.</p>

      <p>Akamai paid a rich multiple because it believes the browser is becoming an enforcement layer for both people and agents. The acquisition will earn that price only if LayerX can stay nearly invisible during normal work and become precise when data or automated actions cross a real boundary. If employees have to fight the control, they will find another route. If they barely notice it while risky actions stop, Akamai will have bought the right place in the stack.</p>
    `
  },
  post65: {
    featured: false,
    date: 'July 11, 2026', iso: '2026-07-11',
    title: 'WBD wants one advertising market across television and streaming',
    category: 'Business Strategy', tag: 'Signal', tagClass: 'tag-cyan',
    image: 'assets/images/post65-hero.jpg',
    body: `
      <p>Warner Bros. Discovery sells audiences across HBO Max, CNN, TNT, Discovery, and a long list of other brands. The problem is that an advertiser has not been buying all of that as one clean market. Linear television and digital inventory still come with different planning systems, order flows, measurements, and operating teams.</p>

      <p>WBD is now trying to collapse those divisions into one advertising platform built on AWS. The company wants buyers to plan across television and streaming, let software recommend where inventory should go, and keep optimizing a campaign after it starts. That could change more than how an ad gets placed. It could change what WBD is able to sell.</p>

      <p>The companies described the work in a <a href="https://press.aboutamazon.com/aws/2026/7/warner-bros-discovery-announces-agentic-ai-powered-advertising-technology-built-on-aws-its-preferred-cloud-provider" target="_blank" rel="noopener noreferrer">July 8 announcement</a>. WBD says it began rolling out direct-response automation, audience forecasting, and better measurement earlier this year. Unified media planning is scheduled for the third quarter, followed by a phased rollout of order management, pricing, and stewardship in the fourth.</p>

      <p>The sequence matters. This is not a chatbot sitting beside the old ad stack. WBD is replacing the path from planning through pricing, activation, optimization, and measurement. AI agents are supposed to use campaign results and audience signals to recommend inventory across linear and digital channels while the campaign is running.</p>

      <p>That addresses a real commercial weakness in television. A streaming platform can target and measure an audience with software. Traditional TV still carries large audiences and premium events, but much of the buying process was designed around fixed schedules, broad demographics, and negotiations completed before the ad ran. Combining those models gives WBD a chance to sell the reach of television with more of the flexibility buyers expect from digital advertising.</p>

      <p>Dr. Nage Sethu, WBD's SVP of Technology for converged advertising and linear systems, called the goal "the fluidity to plan, package, and optimize across both." AWS executive Samira Panah Bakhtiar said the platform should produce "better outcomes for brands and viewers alike." Those are useful ambitions, but they are not the same thing as proven results.</p>

      <p>The hard part will be deciding what optimization means. An advertiser may care about sales, reach, attention, frequency, or the cost of finding a specific audience. WBD also needs to protect the price of premium inventory and avoid showing the same viewer too many ads across several services. A system can optimize the wrong number very efficiently if the commercial rules are vague.</p>

      <p>WBD is building a composable data and interoperability layer underneath the agents. Amazon Bedrock AgentCore handles agent infrastructure, Bedrock hosts the models, SageMaker supports custom models, S3 stores the data lake in Apache Iceberg, and Amazon Quick gives ad-sales employees a natural-language interface to the data. The architecture tells us the company expects several models and applications to share one governed source of campaign context.</p>

      <p>That shared context may be the most valuable part. Sales teams cannot make one cross-platform promise if inventory, audience definitions, pricing, and campaign results live in separate systems. The agent label will get attention, but the business gain depends on whether WBD can make those systems agree quickly enough for a buyer to trust the recommendation.</p>

      <p>Transparency matters too. A recommendation engine that moves budget between CNN, HBO Max, TNT, and Discovery affects both the advertiser and WBD's own brands. Buyers need to know why the allocation changed and what result it produced. Internal teams need rules for conflicts, scarce inventory, data use, and pricing. Automation does not remove those decisions. It puts them into software where they need to be explicit and auditable.</p>

      <p>There is also a broader competitive point. WBD is not just competing with other television networks. It is competing for advertising budgets that can move to YouTube, Amazon, social platforms, retail media, and programmatic marketplaces. Those companies trained buyers to expect fast audience selection, automated purchasing, and continuous measurement. WBD's content gives it differentiated supply. A unified platform is an attempt to remove the operational penalty attached to buying that supply.</p>

      <p>This is the kind of system question I care about at <a href="https://samcbarth.com" target="_blank" rel="noopener noreferrer">SamCBarth.com</a>: can the company connect its data, commercial rules, and teams well enough for the automation to make a better decision? By the end of the year, WBD should have enough of the order, pricing, and stewardship stack in market to show whether one advertising market is real. If buyers still need separate plans and explanations for television and streaming, the agents will only be moving the old silos faster.</p>
    `
  },
  post64: {
    featured: false,
    date: 'July 11, 2026', iso: '2026-07-11',
    title: 'Presidio has put a $6 million price tag on escaping AI pilot mode',
    category: 'Business Strategy', tag: 'Signal', tagClass: 'tag-cyan',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1160&h=440&fit=crop&q=80',
    body: `
      <p>What does it actually cost to move a company beyond AI pilots? Presidio just gave us one answer: 18 months and $6 million for a large investment firm.</p>

      <p>That number is more interesting than the usual promise that a new framework will help companies scale AI. It turns an abstract transformation into a real consulting engagement, with more than 25 back-office use cases and a stated goal of helping the client add $10 billion in assets under management without adding headcount.</p>

      <p>Presidio disclosed the project in its <a href="https://www.globenewswire.com/news-release/2026/07/09/3325086/0/en/Presidio-Addresses-AI-Value-Paradox-with-New-Investments-Dedicated-AI-Consulting-Group-AI-Blueprint-and-Innovation-Lab.html" target="_blank" rel="noopener noreferrer">July 9 announcement</a> of its largest AI investment to date. The company is launching a dedicated consulting group called Lighthouse, formalizing an AI Blueprint, and expanding the role of its P.A.T.H. validation lab.</p>

      <p>Together, those pieces create a clear commercial offer. Presidio can help decide which use cases matter, build and test them, then stay involved through governance, monitoring, compliance, and managed services. This is not a software license. It is a long-term services relationship built around getting AI into production and keeping it there.</p>

      <p>The timing makes sense. A <a href="https://www.mckinsey.com/capabilities/strategy-and-corporate-finance/our-insights/where-ai-will-create-value-and-where-it-wont" target="_blank" rel="noopener noreferrer">McKinsey analysis published in April</a> said nearly nine out of ten surveyed companies had deployed AI in at least one business function by the end of 2025, while 94% reported that they were not seeing significant value. Adoption is not the scarce thing anymore. Turning adoption into operating results is.</p>

      <p>Presidio has organized its method into three stages: clarify, realize, and scale. Clarify connects the AI plan to business value and governance. Realize is where teams build and validate production-ready systems. Scale covers monitoring, regulatory compliance, agent operations, and continuous improvement.</p>

      <p>The names are simple. The handoffs are not. A company can identify a strong use case and still fail because its data cannot support it, the security team gets involved too late, nobody owns the new workflow, or the pilot depends on people and tools that cannot survive a production rollout. Presidio is selling one accountable path across those gaps.</p>

      <p>CEO Bob Cagnazzi said customers are "done experimenting with AI." CTO Rob Kim described the change as "an operating model redesign, not a technology project." Those statements explain why Presidio is investing in consulting and validation at the same time. The company is betting that the hard part has shifted from showing what AI can do to changing the business around it.</p>

      <p>There is some evidence behind the offer. Presidio says its own employees use an internal agent platform in a governed environment, giving the company direct experience with testing and adoption. Its P.A.T.H. lab, <a href="https://www.presidio.com/news/presidio-launches-new-ai-technology-hub-to-spark-enterprise-innovation-and-transformation/" target="_blank" rel="noopener noreferrer">introduced in 2025</a>, combines Cisco compute and networking, NVIDIA software and GPUs, Vertiv power systems, cloud capacity, and private deployment options. Customers can test an architecture before committing it to their own environment.</p>

      <p>That is useful, but the proof still needs scrutiny. Presidio did not name the investment firm in the $6 million engagement, publish a baseline for the 25 use cases, or say how much of the $10 billion growth target has been reached. The goal may be credible. It is not yet a verified result.</p>

      <p>The headcount claim also deserves a careful reading. Growing assets without adding employees does not mean the system removes all human work. It means Presidio and the client expect automation to absorb more volume while people manage exceptions, judgment, client relationships, controls, and the workflows around the agents. That can improve the operating model, but only if the work is measured beyond hours saved.</p>

      <p>For buyers, the better questions are specific. Which business metric changes? Who owns the process after launch? How are errors found? What happens when a model, vendor, policy, or data source changes? How much of the work becomes reusable, and how much remains custom consulting?</p>

      <p>Those are the same implementation questions I focus on at <a href="https://samcbarth.com" target="_blank" rel="noopener noreferrer">SamCBarth.com</a>, especially when a technology project crosses sales, operations, data, and governance. Presidio now has a neat structure for answering them. The investment-firm engagement will tell us whether that structure can do more than organize a pilot. If the client reaches meaningful progress toward $10 billion in new assets without matching headcount growth, Presidio will have a case study worth much more than another AI blueprint.</p>
    `
  },
  post63: {
    featured: false,
    date: 'July 11, 2026', iso: '2026-07-11',
    title: 'Rackspace is trading today\'s revenue for an AI infrastructure bet',
    category: 'Business Strategy', tag: 'Signal', tagClass: 'tag-cyan',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1160&h=440&fit=crop&q=80',
    body: `
      <p>Rackspace just put a price on its AI pivot. The company lowered its 2026 revenue outlook by $150 million and adjusted EBITDA outlook by $20 million while it redirects capacity, people, and capital toward enterprise AI.</p>
      <p>That is more useful than another announcement about an AI partnership. It shows the cost of changing the business before the new revenue arrives.</p>
      <p>In its <a href="https://www.globenewswire.com/news-release/2026/07/09/3324723/0/en/Rackspace-Technology-Announces-Plans-to-Accelerate-Enterprise-AI-Growth-Vector-Provides-Preliminary-2Q26-Results-and-Updates-FY26-Outlook.html" target="_blank" rel="noopener noreferrer">July 9 strategy and financial update</a>, Rackspace said it is leaving some colocation and basic hosting revenue behind so it can reserve private-cloud capacity for enterprise AI. It is also stepping away from low-margin public-cloud resale as hyperscalers move more customers to direct contracts.</p>
      <p>Those are two different exits with the same logic. Rackspace does not want to be paid mainly for space, servers, or somebody else's cloud contract. It wants to operate the governed layer where a customer controls compute, models, identity, policy, and data across private and public infrastructure.</p>
      <p>The old model may be shrinking, but it still produces real revenue now. Rackspace cut the midpoint of its public-cloud outlook from $1.6 billion to $1.475 billion. It cut private cloud from $1.05 billion to $1.025 billion. The company expects overall 2026 revenue to decline between 5% and 9% year over year.</p>
      <p>The replacement is still mostly a forecast. Rackspace plans to reach 15 megawatts of enterprise AI capacity by the end of 2027 and 30 megawatts by the end of 2028. At full deployment, it estimates $450 million to $600 million in annual revenue and adjusted EBITDA margins above 50%. The company clearly labels those numbers as illustrative and dependent on GPU mix, contracts, demand, and hardware timing.</p>
      <p>That distinction matters. Management is giving up lower-quality revenue it can see today for higher-margin revenue it expects tomorrow. The strategy can be right and the timing can still hurt.</p>
      <p>Rackspace does have an early proof point. Its Palantir partnership has produced about 400 certifications across sales, engineering, delivery, and operations. The companies say their first joint deployment closed in under two months and cut quote-cycle time by 94% for a U.S. solar-tracking manufacturer.</p>
      <p>I would not turn one customer result into a broad promise. But it shows what Rackspace is trying to sell. The product is not a GPU by itself. It is a team that can put governed AI into a regulated or operationally sensitive environment and connect the technology to a measurable workflow.</p>
      <p>CEO Gajen Kandiah said the capital raise will let Rackspace "expedite our AI Enterprise strategy." Apollo partner Aaron Sobel said the company is taking "the right steps to fund its next phase of growth." Both quotes point back to financing. This pivot needs capacity before it creates revenue, and capacity is expensive.</p>
      <p>The investor math and the customer math now have to meet. Investors need the AI business to replace declining resale revenue fast enough to justify the upfront cost. Customers need the governed stack to deliver better control without recreating the lock-in they were trying to avoid. Rackspace says it will stay model-agnostic and use private cloud where control matters and public cloud where elasticity matters. Execution will decide whether that remains a useful design or becomes another complicated bundle.</p>
      <p>This is the kind of business transition I watch at <a href="https://samcbarth.com" target="_blank" rel="noopener noreferrer">SamCBarth.com</a> because the tradeoff is visible. Rackspace is not hiding the revenue it is walking away from or the capital it needs to spend. By the end of 2027, those 15 megawatts need to show that governed AI can become a better business than reselling cloud capacity. Until then, the gap between the lowered outlook and the promised margins is the whole Rackspace story.</p>
    `
  },
  post62: {
    featured: false,
    date: 'July 11, 2026',
    iso: '2026-07-11',
    title: 'Microsoft cut 4,800 jobs while rebuilding how it sells AI',
    category: 'Business Strategy',
    tag: 'Signal', tagClass: 'tag-cyan',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1160&h=440&fit=crop&q=80',
    body: `
      <p>Microsoft eliminated about 4,800 roles this week, roughly 2.1% of its workforce. The number matters. The reason matters more. The cuts landed mostly in Microsoft's commercial and Xbox organizations while the company is rebuilding its commercial business around AI deployment.</p>

      <p>That makes this more than another technology layoff. Microsoft is changing the shape of the team that takes its products into customers. In its <a href="https://blogs.microsoft.com/blog/2026/07/06/the-latest-in-our-company-transformation/" target="_blank" rel="noopener noreferrer">July 6 employee note</a>, the company said the commercial changes build on its new Frontier Company and involve "embedding our engineering experts alongside customers." That is a very different delivery model from selling licenses, handing the account to a partner, and waiting for renewal.</p>

      <p>Four days earlier, Microsoft <a href="https://news.microsoft.com/signal/?link_id=714&threads=" target="_blank" rel="noopener noreferrer">introduced Microsoft Frontier Company</a> as a new operating business. It combines industry knowledge, change management, continuous improvement, and enterprise AI engineering. The pitch is that customers have moved past experimentation and now want measurable results from AI.</p>

      <p>The important word is operating. Microsoft is not describing a product bundle or a new consulting badge. It is putting technical delivery closer to the customer and tying that work to business outcomes. That suggests the old lines between sales, services, engineering, and customer success are becoming less useful.</p>

      <p>This is where the cuts get harder to separate from the strategy. Microsoft did not publish a role-by-role breakdown, so it would be wrong to claim every eliminated job was replaced by an engineer or an agent. The company did say it is moving people and investment toward its highest priorities, and that other parts of the business will change too. The direction is clear even if the final org chart is not.</p>

      <p>For customers, this model could fix a real problem. Enterprise AI projects rarely fail because nobody can buy a model. They fail because the data is scattered, security ownership is unclear, the workflow was never redesigned, or the pilot cannot survive contact with production. An engineer working beside the customer can find those problems faster than a sales team working through a slide deck.</p>

      <p>It also raises the bar for Microsoft. If the company puts engineering talent inside customer deployments, it is taking more responsibility for whether the software creates value. That is better than leaving the customer to connect a stack of products alone. It also makes weak adoption, unclear ROI, and bad implementation harder to dismiss as somebody else's problem.</p>

      <p>The economics are different too. A traditional software sale can recognize value when seats are provisioned. A deployment-led model has to spend scarce technical time before the customer reaches a useful result. Microsoft will need to decide which accounts get that attention, how much work becomes repeatable, and when a customer is ready to move back to normal support. Otherwise, the new structure can create expensive custom projects that do not scale.</p>

      <p>Partners should watch this closely. Microsoft still needs its partner ecosystem, especially for industry depth, local delivery, and the long tail of small and midmarket customers. But a vendor that brings its own engineers closer to strategic accounts can change who owns the customer relationship and who captures the highest-value work. The clean version is shared delivery. The messy version is channel conflict with a new name.</p>

      <p>Employees are carrying the immediate cost of that transition. Microsoft's note says it will try to place people into roles aligned with new priorities and invest in AI skills, but 4,800 eliminated roles are still 4,800 disrupted careers. A strategy can make business sense and still deserve a direct accounting of the human cost.</p>

      <p>The question I would ask at <a href="https://samcbarth.com" target="_blank" rel="noopener noreferrer">SamCBarth.com</a> is whether the delivery model changes the result after the contract is signed. Microsoft is betting that fewer handoffs and more engineering inside the account will get AI into production faster. If Frontier Company cannot shorten that distance, the reorganization will look like a cost cut wrapped around an AI story. If it can, Microsoft will have changed what customers are actually buying from it.</p>
    `
  },
  post61: {
    featured: false,
    date: 'July 11, 2026',
    iso: '2026-07-11',
    title: "Microsoft's AI report is really a workflow redesign story",
    category: 'Business Strategy',
    tag: 'Signal', tagClass: 'tag-cyan',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1160&h=440&fit=crop&q=80',
    body: `
      <p><a href="https://news.microsoft.com/source/emea/2026/07/swiss-ai-users-outperform-global-peers-on-productivity/" target="_blank" rel="noopener noreferrer">Microsoft's July 9 Swiss AI note</a> and the linked <a href="https://www.microsoft.com/en-us/worklab/work-trend-index/agents-human-agency-and-the-opportunity-for-every-organization" target="_blank" rel="noopener noreferrer">2026 Work Trend Index Annual Report</a> say the same thing in different words. AI value does not come from stacking on more tools. It comes from changing how work gets done.</p>

      <p>The numbers are the useful part. 65% of Swiss AI users say they can now do work they could not do a year ago, versus 58% globally. Among Frontier Professionals, that jumps to 83%. That is real progress, but it is not automatic.</p>

      <p>The gap is leadership. Only 24% of Swiss AI users say leadership is clearly and consistently aligned on AI. That is where a lot of these projects stall. If the team is still using old approvals, old handoffs, and old ownership, the tool just speeds up the mess.</p>

      <p>Microsoft's own framing is blunt, and it is the right one. The work has to be redesigned, and human judgment still has to sit at the center of it. That is the part a lot of companies want to skip.</p>

      <p>My read is simple. The teams that win will not be the ones with the most copilots on the shelf. They will be the ones that clean up the operating model so AI can actually move the work forward. That is the business question I keep coming back to at <a href="https://samcbarth.com" target="_blank" rel="noopener noreferrer">SamCBarth.com</a>.</p>
    `
  },
  post60: {
    featured: false,
    date: 'July 11, 2026',
    iso: '2026-07-11',
    title: 'IBM Bob is the workflow control story',
    category: 'Business Strategy',
    tag: 'Signal', tagClass: 'tag-cyan',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Mobile_developer_at_work_%28Unsplash%29.jpg',
    body: `
      <p><a href="https://newsroom.ibm.com/2026-07-09-ibm-advances-enterprise-ai-software-development-with-multi-agent-capabilities-and-specialized-modernization-workflows" target="_blank" rel="noopener noreferrer">IBM's July 9 Bob update</a> is not about a better autocomplete box. It is IBM trying to sell control over how enterprise software gets written, checked, and modernized.</p>

      <p>The company says the bottleneck has moved from writing code to reviewing and validating it. That is the real shift. Once AI can draft fast, the value moves to orchestration, auditability, and the tools that keep the work from turning into a mess.</p>

      <p>IBM is adding multi-agent capabilities, built-in cost and usage analytics, and prebuilt workflows for IBM Z, IBM i, and Java modernization. That matters because the hardest modernization work still lives inside old systems that companies cannot just replace. If Bob can make that work repeatable, IBM gets closer to owning the process, not just the prompt.</p>

      <p>Neel Sundaresan, IBM's GM for Automation and AI, is saying the bar is no longer a better coding assistant. IBM's own Bob blog makes the same point a different way: the work has to keep repeating cleanly. Those two lines are the whole story.</p>

      <p>Jack Henry says its developers can "accelerate RPG development workflows, improve code quality, and gain deeper insights into decades of accumulated system knowledge." Blue Pearl says a legacy modernization program that was supposed to take nine months with 14 engineers was finished in three days. I would treat that as a proof point, not a promise, but the direction is clear.</p>

      <p>My read is simple. IBM is trying to turn AI development into something enterprises can measure, govern, and budget. That is the business question I keep coming back to at <a href="https://samcbarth.com" target="_blank" rel="noopener noreferrer">SamCBarth.com</a>. The winner here is not the prettiest coding assistant. It is the one that makes legacy change less risky and less expensive.</p>
    `
  },
  post59: {
    featured: false,
    date: 'July 11, 2026',
    iso: '2026-07-11',
    title: 'Crusoe is selling an exit door with its AI cloud',
    category: 'Business Strategy',
    tag: 'Signal', tagClass: 'tag-cyan',
    image: 'assets/images/post59-hero.jpg',
    body: `
      <p><a href="https://www.globenewswire.com/news-release/2026/07/07/3323398/0/en/Crusoe-Launches-Serverless-Fine-Tuning-and-Self-Serve-Inference-Deployments-Accelerating-Open-Model-Development-From-Experiment-to-Production.html" target="_blank" rel="noopener noreferrer">Crusoe launched serverless fine-tuning and self-serve inference on July 7</a>. The interesting part is not that another cloud can customize an open model. It is that Crusoe is trying to make the managed experience easier without taking ownership of the model away from the customer.</p>

      <p>That is a real tension in AI infrastructure. Teams want somebody else to handle failed hardware, idle clusters, restarts, and deployment plumbing. They do not want that convenience to turn into a permanent dependency on one provider.</p>

      <p>Crusoe's answer is portability. A team can choose an open-weight model, upload its own data, run a tuning job, and receive the finished weights in the portable .safetensors format. It can deploy those weights inside Crusoe with one click or download them and run them somewhere else.</p>

      <p>Erwan Menard, Crusoe Cloud's senior vice president of product, put the pitch clearly: "You shouldn't have to choose between a managed experience and ownership of your model." That is the strongest part of the announcement. The exit door is part of the product.</p>

      <p>The pricing model is just as important. Fine-tuning is billed by the million tokens processed, and billing stops when the model stops improving. Production inference is billed by GPU hour. Those are different meters for different stages of the work, which gives a team a cleaner way to separate experimentation from a steady production workload.</p>

      <p>Cleaner does not mean automatically cheaper. Token billing removes the need to reserve a training cluster, but a team still has to know how often it will tune, how large the data set is, and whether each new version creates enough value to justify another run. GPU-hour pricing is predictable only when demand is predictable.</p>

      <p>The customer quote in the release gets to the practical goal. AI researchers at StackOne said they expect to use the service to "optimize the latency and cost of our AI agents as we scale our infrastructure." That is the test. A custom model is only useful if it improves the operating math after it reaches production.</p>

      <p>There is also a governance benefit hiding in the technical details. Crusoe says every tuned artifact can be traced back to the exact data and configuration that produced it. That kind of lineage matters when a company needs to explain why one model version behaves differently from another, or prove which data went into a release.</p>

      <p>I like the direction because it treats model ownership as leverage, not a developer preference. Managed infrastructure can save time. Portable weights keep the provider honest. Clear lineage makes the work easier to govern. The buyer still has to test whether the promised convenience holds up under real usage, but at least the tradeoff is visible.</p>

      <p>That is the business question I would keep in front of the technical one. Who owns the model, what makes the bill move, and how hard is it to leave? Those are the practical AI operating questions I keep coming back to at <a href="https://samcbarth.com" target="_blank" rel="noopener noreferrer">SamCBarth.com</a>. Crusoe is making a useful bet that customers will pay for convenience when control stays with them.</p>
    `
  },
  post58: {
    featured: false,
    date: 'July 11, 2026',
    iso: '2026-07-11',
    title: 'Lumen is buying control of the AI network',
    category: 'Business Strategy',
    tag: 'Signal', tagClass: 'tag-cyan',
    image: 'assets/images/post58-hero.jpg',
    body: `
      <p><a href="https://ir.lumen.com/news/news-details/2026/Lumen-Completes-Alkira-Acquisition-Accelerating-Its-Unified-Digital-Platform-for-AI-Era-Networking/default.aspx" target="_blank" rel="noopener noreferrer">Lumen completed its acquisition of Alkira on July 7</a>. The useful part is not another company attaching AI to a press release. Lumen owns a large fiber network. Alkira gives it software that can control how traffic moves across clouds, data centers, partners, and AI workloads.</p>

      <p>That combination matters because enterprise infrastructure is getting harder to see and slower to change. A company might have private circuits from one provider, workloads in several clouds, security rules in another system, and an AI project pulling data across all of it. Every handoff adds another place for cost, delay, or risk to hide.</p>

      <p>Lumen says the combined platform will let customers apply consistent security policies, improve visibility, and cut manual provisioning. CEO Kate Johnson described the goal as making "complex environments simpler for customers." That is the right promise. The network should feel like one operating layer even when the infrastructure underneath it is spread everywhere.</p>

      <p>The acquisition also gives Lumen a better product story. Fiber alone can look like a commodity. A control plane that lets a customer build, change, and monitor connections on demand gives Lumen something more valuable to sell on top of that fiber. It moves the company closer to cloud-style consumption for networking, where the customer buys an outcome instead of waiting on a chain of tickets.</p>

      <p>That changes the sales motion too. Network deals have traditionally been shaped by locations, circuits, term lengths, and installation dates. A programmable layer creates room to sell speed, visibility, and policy control as ongoing value. If Lumen can make changes easier after the initial install, it has a better chance of turning a fixed connectivity contract into a broader operating relationship.</p>

      <p>There is a real integration test ahead. Lumen says Alkira is expected to become part of Lumen Connect, bringing its multi-cloud gateway, cloud on-ramps, and other connectivity into one experience. Expected is doing work in that sentence. The value only shows up if customers can manage the combined product without inheriting another portal, another contract layer, and another set of exceptions.</p>

      <p>The outside signal is useful too. Lumen cites Gartner's June assessment that the combination "strengthens its ability to extend its leadership into enterprise AI WAN and connectivity services." That does not prove execution, but it explains why Lumen made the deal. AI workloads create more traffic across more locations, and the company wants to own both the physical path and the software that programs it.</p>

      <p>Customers should still keep one eye on lock-in. A single control layer can remove a lot of friction, but it can also make the provider harder to replace. The best version of this deal gives teams one view without taking away their choice of cloud, carrier, or security tool. Alkira's carrier-agnostic design is important for that reason. Lumen needs to preserve it while connecting the software to its own network.</p>

      <p>My takeaway is that the control point is moving. AI infrastructure is not only about models, chips, and data centers. It is also about who can move the data, enforce the rules, and show the customer what is happening without slowing the work down. That is the practical systems question I keep coming back to at <a href="https://samcbarth.com" target="_blank" rel="noopener noreferrer">SamCBarth.com</a>. Lumen has bought a stronger position. Now it has to make the network feel like one product.</p>
    `
  },
  post57: {
    featured: false,
    date: 'July 11, 2026',
    iso: '2026-07-11',
    title: 'Deutsche Telekom is the real AI-native story',
    category: 'Business Strategy',
    tag: 'Signal', tagClass: 'tag-cyan',
    image: 'https://news.microsoft.com/source/asia/wp-content/uploads/2026/05/260422-CommBank-HR-005-1900x1268.jpg',
    body: `
      <p><a href="https://openai.com/index/deutsche-telekom/" target="_blank" rel="noopener noreferrer">OpenAI's July 10 Deutsche Telekom writeup</a> is not a chatbot story. It is an operating-model story. Deutsche Telekom is trying to become AI-native, and that is the right frame.</p>

      <p>The real point is not the model. It is where the work moves. OpenAI says it is bringing AI directly into customer interactions through live translation, in-call assistants, and post-call summaries. That matters because it cuts handoffs and clears dead time out of support.</p>

      <p>For telecom, that is the part worth watching. Customer care, employee workflows, and network ops are all different sides of the same machine. If AI does not change those paths, it is just another layer on top.</p>

      <p>My read is simple. AI only gets real when it changes the operating model. The companies that win will decide where to let machines take over, where to keep a human check, and how to keep the whole thing secure enough to trust.</p>
    `
  },
  post56: {
    featured: false,
    date: 'July 10, 2026',
    iso: '2026-07-10',
    title: "Microsoft's Cobalt 200 is really a cloud economics story",
    category: 'Business Strategy',
    tag: 'Signal', tagClass: 'tag-cyan',
    image: 'assets/images/post56-hero.jpg',
    body: `
      <p>Microsoft's Cobalt 200 is not just another chip announcement. It is Microsoft saying agentic AI is turning cloud buying into a price-performance problem again.</p>

      <p><a href="https://news.microsoft.com/build-2026/" target="_blank" rel="noopener noreferrer">Microsoft says</a> "AI alone won’t change your business. The system running it will." That is the right frame. The system now includes the CPUs, the servers, the networking, and the workflow that keeps agents busy.</p>

      <p><a href="https://azure.microsoft.com/en-us/blog/new-azure-cobalt-200-vms-deliver-50-performance-improvement-fully-optimized-for-modern-agentic-ai-workloads/" target="_blank" rel="noopener noreferrer">Azure says</a> the new Arm-based VMs are built for scale-out, cloud-native, Linux-based agentic AI workloads, and they offer "up to 50% better generational performance over Cobalt 100." That is a pricing story hiding inside a hardware story.</p>

      <p>The detail I keep coming back to is Microsoft’s line that "agents are unique from traditional workloads." That is useful because the work does not behave like a normal request-response app. If agents reason, make sequential decisions, and run continuously at scale, the infrastructure has to be built for that pattern too.</p>

      <p>My read is simple. The companies that win here will not just ask what model to buy. They will ask what the work costs per run, what the infra costs per hour, and whether the stack can stay boring as usage grows. That is the part I keep coming back to at <a href="https://samcbarth.com" target="_blank" rel="noopener noreferrer">SamCBarth.com</a>. AI only matters when the operating math works.</p>
    `
  },
  post55: {
    featured: false,
    date: 'July 10, 2026',
    iso: '2026-07-10',
    title: "Cloudflare's Meerkat is really a control-plane story",
    category: 'Business Strategy',
    tag: 'Signal', tagClass: 'tag-cyan',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/CERN_Server_03.jpg',
    body: `
      <p>Cloudflare's Meerkat is not a shiny product launch. It is Cloudflare saying its control plane has become too important to leave on a leader-and-timeout setup.</p>

      <p><a href="https://blog.cloudflare.com/meerkat-introduction/" target="_blank" rel="noopener noreferrer">Cloudflare says</a> the service is needed because internal systems across its 330+ data centers have to read and modify the same state. The company says Meerkat is designed so "all replicas can perform writes at all times." That is the real business point. Global software only feels simple when the failure modes stay hidden.</p>

      <p>Cloudflare also says "progress is never halted due to a timeout." That is the line I keep coming back to. The company is not trying to make distributed systems cute. It is trying to keep the work moving when links wobble, data centers fail, and the network stops behaving.</p>

      <p>The paper behind QuePaxa says it is "the first protocol offering state-of-the-art normal-case efficiency without depending on timeouts." That is the useful tradeoff. Keep the common case fast, but do not let one slow leader or one bad link freeze the whole system.</p>

      <p>My read is simple. This is still experimental and internal-only, but it is a real business story because it shows where the hard work sits in global software. Consensus is part of the operating stack now, not just academic plumbing. That is the kind of system-level problem I keep coming back to at <a href="https://samcbarth.com" target="_blank" rel="noopener noreferrer">SamCBarth.com</a>.</p>
    `
  },
  post54: {
    featured: false,
    date: 'July 10, 2026',
    iso: '2026-07-10',
    title: "Microsoft's annual cloud pricing update is really a budgeting story",
    category: 'Business Strategy',
    tag: 'Signal', tagClass: 'tag-cyan',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Desktop_with_laptop_and_calculator_%28Unsplash%29.jpg/1280px-Desktop_with_laptop_and_calculator_%28Unsplash%29.jpg',
    body: `
      <p>Microsoft's annual cloud pricing update is not just currency housekeeping. It is Microsoft telling finance teams that cloud spend now needs a calendar.</p>

      <p><a href="https://news.microsoft.com/source/2026/07/08/microsoft-announces-moving-to-annual-local-currency-pricing-updates-for-commercial-cloud-services-every-january/" target="_blank" rel="noopener noreferrer">Microsoft says</a> it will move to annual local currency pricing updates every January because it wants "greater pricing predictability" while still accounting for foreign exchange swings. That is the real story. The vendor is making planning easier by making the adjustment cadence more regular.</p>

      <p>It also says the next update lands on January 1, 2027, and that guidance will go out every November. That matters more than people think. Renewal math gets cleaner when finance knows when the price check is coming and when it is not.</p>

      <p>Microsoft adds that this is meant to help customers and partners "plan with confidence and invest in the technologies they need to grow and adapt." I take that as a signal that cloud bills are becoming a budgeting input, not just an IT detail. Product-specific changes can still happen separately, which is another reason procurement has to stay awake.</p>

      <p>My read is simple. The useful question is not whether the software is worth it. The question is whether the company can model the spend, the renewal, and the currency risk without surprise. That is the kind of operating problem I keep coming back to at <a href="https://samcbarth.com" target="_blank" rel="noopener noreferrer">SamCBarth.com</a>.</p>
    `
  },
  post53: {
    featured: false,
    date: 'July 10, 2026',
    iso: '2026-07-10',
    title: "Meta's Alberta data center is really a power and policy story",
    category: 'Business Strategy',
    tag: 'Signal', tagClass: 'tag-cyan',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/98/Cern_datacenter.jpg',
    body: `
      <p>Meta's Alberta data center is not just a capacity announcement. It is Meta saying AI now lives or dies on power, permitting, and site control.</p>

      <p><a href="https://about.fb.com/news/2026/07/breaking-ground-on-metas-first-data-center-in-canada/" target="_blank" rel="noopener noreferrer">Meta says</a> the site will "help power our AI innovations and core products." It is also a 1GW, AI-optimized data center in Sturgeon County, which makes this a serious infrastructure build, not a small campus upgrade.</p>

      <p><a href="https://www.alberta.ca/release.cfm?xID=964679A5BC522-A153-A52F-1F8CC3D418C55411" target="_blank" rel="noopener noreferrer">Alberta says</a> Meta will invest more than $13 billion in the province, create thousands of jobs, and support new provincial revenue. That is why the province framed the deal as a policy win, not just a construction project.</p>

      <p>The part I watch is the control stack. Alberta says large AI data centres have to bring their own power, pay for the infrastructure they need, and meet strict water rules. Meta says the site will use a closed-loop, liquid-cooled system with dry cooling. That tells me the real work is in how the project fits the grid, the water system, and the local permit path.</p>

      <p>My read is simple. This is not just cloud capacity. It is a test of whether AI infrastructure can be built where the rules are clear enough, the power plan is real, and the public side can see a benefit. That is the kind of operating question I keep coming back to at <a href="https://samcbarth.com" target="_blank" rel="noopener noreferrer">SamCBarth.com</a>. The hard part is not announcing compute. The hard part is making the whole stack hold together.</p>
    `
  },
  post52: {
    featured: false,
    date: 'July 10, 2026',
    iso: '2026-07-10',
    title: "Google's bid update is really a budget control story",
    category: 'Business Strategy',
    tag: 'Signal', tagClass: 'tag-cyan',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Startup_Business_People_Working_on_Laptop_Copy_Space_%2826666483257%29.jpg',
    body: `
      <p>Google's bid update is not a small settings tweak. It is Google telling advertisers that target CPA and target ROAS need tighter discipline when budgets move.</p>

      <p><a href="https://support.google.com/google-ads/answer/17061251?hl=en" target="_blank" rel="noopener noreferrer">Google says</a> the change will make bidding systems deliver "more consistent and predictable performance" based on the targets you set. The new Bid Target Adjustment Tool is available July 6, and the actual behavior change starts August 17. That gives teams a short window to review campaigns before the system gets stricter.</p>

      <p>That is the part that matters. Google also says campaigns that are limited by budget and have historically overachieved their target may see volatility if they do nothing. It is blunt about the next step too: "Google will not automatically adjust your bidding targets or budgets." If the target is wrong, the marketer owns it.</p>

      <p>The bigger picture is on the <a href="https://blog.google/products/ads-commerce/bidding-budgeting-google-marketing-live-2026/" target="_blank" rel="noopener noreferrer">Google Marketing Live</a> side. Google says the new tools help advertisers "manage your budgets and stay ahead of shifting consumer behavior." It is also pushing "journey-aware bidding" and demand-led pacing, which is just Google saying it wants cleaner signals and less manual babysitting.</p>

      <p>My read is simple. This is a budget control story, not just an ads story. The teams with clean funnels, honest targets, and someone who actually owns the spend will adjust fast. The teams that have been letting the algorithm hide bad planning are about to feel it. That is the kind of practical workflow change I keep coming back to at <a href="https://samcbarth.com" target="_blank" rel="noopener noreferrer">SamCBarth.com</a>.</p>
    `
  },
  post51: {
    featured: false,
    date: 'July 10, 2026',
    iso: '2026-07-10',
    title: "Meta's Muse Image is really a monetization story",
    category: 'Business Strategy',
    tag: 'Signal', tagClass: 'tag-cyan',
    image: 'assets/images/post3-marketing-team-1200.jpg',
    body: `
      <p>Meta's Muse Image is not just another AI feature. It is Meta trying to own the part of image generation that turns ideas into posts, ads, and product work people actually use.</p>

      <p><a href="https://about.fb.com/news/2026/07/introducing-muse-image-meta-ai/" target="_blank" rel="noopener noreferrer">Meta says</a> Muse Image is "the first image generation model from Meta Superintelligence Labs, now available in Meta AI." That matters because Meta is putting the tool inside the same apps where attention already lives. This is distribution first, model second.</p>

      <p>Meta also says the model "uses advanced reasoning to understand complex prompts, seamlessly blending multiple photos into high-quality creations you can download and share anywhere." That is a better business pitch than a novelty demo. It says the output is meant to be usable in feeds, stories, chats, and campaigns without a lot of cleanup.</p>

      <p>The monetization part is plain. Meta says Muse Image is free for everyday creation, but "for people who want to create even more, it's available as part of Meta's subscription plans." It also says "advertisers and agencies will be able to tap into Muse Image through Advantage+ creative." That is the real play: free usage on the front end, paid usage on the back end, and ad tooling in the middle.</p>

      <p>My read is simple. The model matters, but the business model matters more. If Meta can make image creation feel native to its apps, it keeps the work inside its ecosystem and gives businesses one more reason to stay there too. This is the kind of workflow and customer behavior shift I keep coming back to at <a href="https://samcbarth.com" target="_blank" rel="noopener noreferrer">SamCBarth.com</a>. The tool is the headline. The distribution is the business.</p>
    `
  },
  post50: {
    featured: false,
    date: 'July 10, 2026',
    iso: '2026-07-10',
    title: "Meta's Business Agent is really a service business story",
    category: 'Business Strategy',
    tag: 'Signal', tagClass: 'tag-cyan',
    image: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=1160&h=440&fit=crop&q=80',
    body: `
      <p>Meta's Business Agent is not really a chatbot launch. It is Meta trying to package first-line customer work as a product. The company says it can be set up in minutes or plugged directly into existing enterprise infrastructure so you can "10X or 100X output." That is a service business, not a demo.</p>

      <p>More than one million businesses are already using a Meta Business Agent on WhatsApp and Messenger to respond around the clock. That is the part worth paying attention to. Meta already owns the place where a lot of customer conversations start. Now it is trying to monetize the handling of those conversations.</p>

      <p>The site says the agent "handles customer conversations 24/7 in your brand voice." That is the line small business owners will understand fastest. They do not buy AI because they want AI. They buy it because they want someone to answer, qualify, book, and follow up when they are busy doing the actual work.</p>

      <p>Meta says the platform can connect to a growing suite of hundreds of systems like Shopify, Zendesk, and Shopee. That is where this becomes more than auto-replies. Once the agent can touch the catalog, support system, and booking flow, it starts acting like a front-end operating layer.</p>

      <p>My read is simple. If this works, Meta gets a new paid layer on top of messaging and a stronger hold on small-business revenue operations. If it does not, it is just another bot that sounds polished until a real customer needs a real answer. This is the kind of workflow and handoff problem I keep coming back to at <a href="https://samcbarth.com" target="_blank" rel="noopener noreferrer">SamCBarth.com</a>. The tech matters, but the process around it matters just as much.</p>
    `
  },
  post49: {
    featured: false,
    date: 'July 10, 2026',
    iso: '2026-07-10',
    title: "Microsoft's Frontier Company is the AI install phase",
    category: 'Business Strategy',
    tag: 'Signal', tagClass: 'tag-cyan',
    image: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=1160&h=440&fit=crop&q=80',
    body: `
      <p>Microsoft's Frontier Company is not a normal product launch. It is Microsoft admitting the hard part of AI is now installation.</p>

      <p><a href="https://blogs.microsoft.com/blog/2026/07/02/microsoft-frontier-company-ai-engineering-that-amplifies-and-protects-your-intelligence/" target="_blank" rel="noopener noreferrer">Microsoft says</a> it is putting $2.5 billion into the effort and embedding more than 6,000 industry and engineering experts inside customer organizations. That is not a demo. That is deployment labor.</p>

      <p>The line that matters is "measurable business outcomes." That is the test now. If AI does not change throughput, quality, or cost, it is just another expensive pilot with better branding.</p>

      <p>Microsoft also says, "Customers shouldn't be locked into a single model any more than they should be locked into a single technology vendor." That is the real market shift. Enterprises want model choice, data control, and a team that can wire the thing into the actual workflow.</p>

      <p>Microsoft names LSEG, Unilever, and Novo Nordisk as early work. That tells me the pitch is simple: keep the data private, keep the options open, and move from proof of concept to production without making every customer build the same plumbing twice.</p>

      <p>My read is simple. The useful AI business is moving from model access to managed installation. The winners will be the ones who can make implementation feel boring, repeatable, and safe.</p>
    `
  },
  post48: {
    featured: false,
    date: 'July 10, 2026',
    iso: '2026-07-10',
    title: "IBM and OpenAI's cyber deal is really about control",
    category: 'Business Strategy',
    tag: 'Signal', tagClass: 'tag-cyan',
    image: 'https://fastly.picsum.photos/id/7/1200/630.jpg?hmac=Ly6Ie4eKcj-GNPD3gR1va_3mQIsWSPKxF0QEF6Zj_ss',
    body: `
      <p>IBM and OpenAI's cyber deal is not really about model bragging rights. It is about whether enterprise security can move faster without giving up control.</p>

      <p><a href="https://newsroom.ibm.com/2026-06-22-ibm-and-openai-bring-frontier-ai-to-cyber-defense-helping-enterprises-keep-pace-with-machine-speed-threats" target="_blank" rel="noopener noreferrer">IBM says</a> it has launched a new application security service that uses OpenAI's cyber capabilities to help organizations identify and validate software vulnerabilities with more speed and precision. That is the real pitch. Not more noise. Less time between finding a hole and proving it matters.</p>

      <p>The important detail is the setup. IBM says the work runs inside the client's environment, with read-only access and bounded execution. That is the part that makes this an enterprise story instead of a demo story. If AI is touching security, the conversation has to be about governance as much as capability.</p>

      <p><a href="https://openai.com/daybreak/" target="_blank" rel="noopener noreferrer">OpenAI says</a> the point is "trusted, AI-powered cyber defense" for more organizations. That is the right frame. Attackers are already using AI. Defenders do not need a demo. They need a faster way to surface the risks that matter and act without handing over the keys.</p>

      <p>My read is simple. This is what useful AI looks like in security: shorter vulnerability windows, clearer governance, and less chaos around the workflow. The model matters. The controls matter more.</p>
    `
  },
  post47: {
    featured: false,
    date: 'July 10, 2026',
    iso: '2026-07-10',
    title: "SAP's Dremio deal is really a data context play",
    category: 'Business Strategy',
    tag: 'Signal', tagClass: 'tag-cyan',
    image: 'assets/images/post47-hero.jpg',
    body: `
      <p>SAP buying Dremio is not really a headline about M&amp;A. It is a headline about the part of enterprise AI most teams still skip: the data layer.</p>

      <p><a href="https://news.sap.com/2026/07/sap-completes-dremio-acquisition/" target="_blank" rel="noopener noreferrer">SAP says</a> the deal is meant to accelerate agentic AI and combine SAP and non-SAP data in real time. That is the right problem. Most AI projects do not fail because the model is dumb. They fail because the data is messy, duplicated, and missing the context people need to trust it.</p>

      <p><a href="https://news.sap.com/2026/05/sap-to-acquire-dremio-unify-sap-and-non-sap-data-power-agentic-ai/" target="_blank" rel="noopener noreferrer">SAP's original acquisition note</a> said, "Enterprise AI doesn’t stall because the models aren’t good enough; it stalls because the data isn’t ready for AI agents." That is the cleanest line in the whole story. It is also the part most vendors keep dancing around.</p>

      <p><a href="https://www.dremio.com/blog/sap-intends-to-acquire-dremio/" target="_blank" rel="noopener noreferrer">Dremio said</a> it wants to deliver "one open platform where agents reason over all enterprise data, decide, and act." That is the real pitch. Not another dashboard. Not another copy job. A governed place where business context stays intact.</p>

      <p>That matters because AI gets expensive when every team keeps moving the same data around to make a new tool work. If SAP can make the stack more open, more governed, and less dependent on data movement, that is a practical win. It cuts friction where enterprise software usually creates it.</p>

      <p>My read is simple. The next useful AI stack is probably less about the model and more about how cleanly the company can unify data, lineage, access, and context. That is not flashy. But it is where the real money is.</p>
    `
  },
  post46: {
    featured: false,
    date: 'July 9, 2026',
    iso: '2026-07-09',
    title: "OpenAI's partner network is the real enterprise AI channel",
    category: 'Business Strategy',
    tag: 'Signal', tagClass: 'tag-cyan',
    image: 'assets/images/post46-hero.jpg',
    body: `
      <p>OpenAI's partner network is the part of this week's news I would watch. It says the company knows enterprise AI is no longer just a model problem. It is a delivery problem.</p>

      <p><a href="https://openai.com/index/introducing-openai-partner-network/" target="_blank" rel="noopener noreferrer">OpenAI says</a> the limiting factor is not model capability anymore. The harder work is finding the right use cases, redesigning workflows, integrating with existing systems, and driving adoption. That is the honest version of the market.</p>

      <p>OpenAI is putting <a href="https://openai.com/index/introducing-openai-partner-network/" target="_blank" rel="noopener noreferrer">$150 million behind the network</a> and says it wants to train 300,000 certified consultants by the end of 2026. That is not a tiny side project. That is a serious channel bet.</p>

      <p>The interest form makes the filter obvious. OpenAI says it wants partners with <a href="https://openai.com/form/partner-network-interest/" target="_blank" rel="noopener noreferrer">strong customer relationships, proven AI implementation experience, and a clear commitment to building with OpenAI</a>. That is not flashy, but it is the right filter. Enterprises buy trust and execution before they buy hype.</p>

      <p><a href="https://openai.com/index/openai-launches-the-deployment-company/" target="_blank" rel="noopener noreferrer">The deployment company announcement</a> says the same thing another way. OpenAI says it wants organizations to help customers build and deploy AI systems they can rely on every day across important work. That is the whole story. AI is moving from demo to delivery, and the real winner will be the company that can make the work stick.</p>
    `
  },
  post45: {
    featured: false,
    date: 'July 9, 2026',
    iso: '2026-07-09',
    title: 'IBM Bob is the real enterprise AI development story',
    category: 'Business Strategy',
    tag: 'Signal', tagClass: 'tag-cyan',
    image: 'assets/images/post45-hero.jpg',
    body: `
      <p>IBM Bob is not a coding toy. It is IBM trying to sell enterprise AI around the part of software work that actually costs money: review, validation, modernization, and cleanup.</p>

      <p><a href="https://newsroom.ibm.com/2026-07-09-ibm-advances-enterprise-ai-software-development-with-multi-agent-capabilities-and-specialized-modernization-workflows" target="_blank" rel="noopener noreferrer">IBM says</a> the bottleneck has moved from writing code to reviewing and validating it. That is the right problem to chase. Bob adds multi-agent work, cost analytics, and prebuilt workflows for IBM Z, IBM i, and Java modernization.</p>

      <p>The customer examples matter more than the launch copy. Jack Henry and Blue Pearl are the kind of proof IBM needs here. Enterprises do not need more demo output. They need repeatable work inside systems they already run.</p>

      <p>That is the part most teams miss. Legacy modernization is where AI usually turns into a mess of half-finished work and hidden cleanup. If Bob can keep context clean, make the steps repeatable, and show cost in the open, that is more useful than another faster autocomplete box.</p>

      <p>My takeaway is simple. Enterprise AI gets real when it helps teams move legacy work, keep spend visible, and ship with fewer handoffs. The winners will package that into process. The rest will keep selling a clever prompt box and call it transformation.</p>
    `
  },
  post44: {
    featured: false,
    date: 'July 9, 2026',
    iso: '2026-07-09',
    title: 'ChatGPT Work is the real workflow shift',
    category: 'Business Strategy',
    tag: 'Signal', tagClass: 'tag-cyan',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1160&h=440&fit=crop&q=80',
    body: `
      <p><a href="https://openai.com/index/chatgpt-for-your-most-ambitious-work/" target="_blank" rel="noopener noreferrer">OpenAI's July 9 ChatGPT Work announcement</a> is not a chatbot story. It is a workflow story. The company is trying to move the product from answering questions to finishing repeatable work across the apps and files people already use.</p>

      <p>That is why the pitch matters. OpenAI says ChatGPT Work can "take action across your apps and files" and "turn a goal into finished work." That is a different sales pitch. The buyer is not just a person who wants nicer writing. It is a team that wants less handoff pain.</p>

      <p><a href="https://help.openai.com/en/articles/6825453-chatgpt-release-notes" target="_blank" rel="noopener noreferrer">The release notes make the control point clearer</a>. OpenAI says you can "follow its progress, answer questions, change direction, and approve important actions as it works." That is the line business teams should focus on. Useful AI is not magic. It is delegated work with guardrails.</p>

      <p>My read is simple. This will matter most anywhere the work is already repeatable: sales ops, finance, marketing ops, admin, reporting, and the kind of internal tasks that eat hours because nobody owns the whole path. The companies that win will know what to hand off and what still needs a human. The companies that lose will use AI to speed up messy process and call it transformation.</p>
    `
  },
  post43: {
    featured: false,
    date: 'July 9, 2026',
    iso: '2026-07-09',
    title: 'GPT-5.6 is a price-per-task story',
    category: 'Business Strategy',
    tag: 'Signal', tagClass: 'tag-cyan',
    image: 'https://images.unsplash.com/photo-1758518730151-cf64fddb4f0a?w=1160&h=440&fit=crop&q=80',
    body: `
      <p>GPT-5.6 is not really a hype story. It is a cost story. OpenAI and Microsoft are both pushing the same idea: the win is more useful work for the same spend.</p>

      <p><a href="https://openai.com/index/gpt-5-6/" target="_blank" rel="noopener noreferrer">OpenAI said GPT-5.6 brings "more intelligence from every token"</a>. That is the right lens. The company also split the family into Sol, Terra, and Luna, which tells me this release is about matching model strength to the job, not just chasing one giant benchmark number.</p>

      <p><a href="https://techcommunity.microsoft.com/blog/microsoft365copilotblog/available-today-openai%E2%80%99s-gpt-5-6-in-microsoft-365-copilot/4533152" target="_blank" rel="noopener noreferrer">Microsoft said Copilot users will get "more useful work from every token"</a>. That matters more than the demo clips. It means the model is being sold as part of the workflow, not as a standalone novelty.</p>

      <p>Once GPT-5.6 shows up in Word, Excel, PowerPoint, Chat, and Cowork, the question gets very practical. Does it cut rewrites. Does it reduce cleanup. Does it move a task from half-done to done without a human having to fix the same thing three times.</p>

      <p>That is the part people miss when they talk about model launches. The useful question is not whether the model sounds smart. It is whether each useful task gets cheaper, faster, and more repeatable.</p>

      <p>My read is simple. AI is moving from a feature test to a unit-economics test. The teams that win will have clean process, good context, and a clear reason to use the model. The rest will keep paying for clever output they still have to clean up.</p>

    `
  },
  post42: {
    featured: false,
    date: 'July 9, 2026',
    iso: '2026-07-09',
    title: 'IBM and Red Hat are turning open source security into an AI business',
    category: 'Business Strategy',
    tag: 'Signal', tagClass: 'tag-cyan',
    image: 'https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?w=1160&h=440&fit=crop&q=80',
    body: `
      <p>AI makes code faster. That is not the hard part anymore. The hard part is making sure the code can be trusted, patched, and shipped without breaking the system around it.</p>

      <p><a href="https://newsroom.ibm.com/2026-07-08-ibm-and-red-hat-expand-lightwell-with-new-commercial-offerings-to-build-the-trust-infrastructure-for-ai-era-open-source" target="_blank" rel="noopener noreferrer">IBM and Red Hat said on July 8</a> they are commercializing Lightwell, which starts with automated vulnerability remediation and a catalog of 6,500+ remediated, digitally signed dependencies. They say the first rollout is limited to financial services. That is not a consumer AI story. That is an enterprise trust story.</p>

      <p>This builds on the <a href="https://newsroom.ibm.com/2026-05-28-ibm-and-red-hat-commit-5-billion-to-redefine-the-future-of-open-source-in-the-ai-era" target="_blank" rel="noopener noreferrer">$5 billion commitment</a> IBM and Red Hat announced in May to push open source security deeper into the AI era. The signal is pretty clear. The more AI speeds up software work, the more value shows up in the layer that keeps that software safe.</p>

      <p>Matt Hicks called Lightwell a "fundamental structural shift." I think that is right. Enterprises do not just need more scans and more alerts. They need a way to get validated fixes into production without turning every patch into a migration project.</p>

      <p>Rob Thomas said IBM and Red Hat are giving enterprises "certified fixes they can pull straight into the systems they already run, with no retooling or disruption." That is the business model in one sentence. Reduce friction. Reduce downtime. Keep the stack moving.</p>

      <p>The interesting part is not the branding. It is the control point. If this works, IBM and Red Hat are not just helping companies patch old code. They are trying to own a piece of the trust layer around modern software supply chains. In regulated industries, that is worth real money.</p>

      <p>My read is simple. AI is making software creation cheaper. That makes validation, remediation, and governance more valuable, not less. The companies that can package that pain into a clean product will have a real business. The ones that only sell speed will keep running into the same security wall.</p>
    `
  },
  post41: {
    featured: false,
    date: 'July 9, 2026',
    iso: '2026-07-09',
    title: "Microsoft's Frontier Company is the real AI services story",
    category: 'Business Strategy',
    tag: 'Signal', tagClass: 'tag-cyan',
    image: 'https://images.unsplash.com/photo-1496843916299-590492c751f4?w=1160&h=440&fit=crop&q=80',
    body: `
      <p>Microsoft's Frontier Company is not a normal product launch. It is Microsoft admitting that enterprise AI now needs people inside the customer workflow, not just another model to test.</p>

      <p><a href="https://blogs.microsoft.com/blog/2026/07/02/microsoft-frontier-company-ai-engineering-that-amplifies-and-protects-your-intelligence/" target="_blank" rel="noopener noreferrer">In its July 2 announcement</a>, Microsoft said it is making a $2.5 billion investment and embedding 6,000 industry and engineering experts at customers. That is not a little pilot program. That is a services business built around AI deployment.</p>

      <p>The line that matters most is simple: "measurable business outcomes." That is the whole game now. Most AI projects do not fail because the demo is bad. They fail because nobody can tie the work to a real business result.</p>

      <p>The other line is even more blunt: "Customers shouldn't be locked into a single model any more than they should be locked into a single technology vendor." That tells me Microsoft knows the market is already multi-model. The winning stack will be the one that fits the workflow, not the one that sounds the coolest in a keynote.</p>

      <p>Microsoft says early work with LSEG, Unilever, and Novo Nordisk is already producing results. That is the part I would watch closely. If the company can keep turning those examples into repeatable deployments, Frontier Company becomes more than a press release.</p>

      <p>My read is simple. The AI market is moving from access to implementation. The hard part now is not getting a model. It is stitching the model into real work, protecting customer data, and proving the outcome was worth the spend.</p>
    `
  },
  post40: {
    featured: false,
    date: 'July 9, 2026',
    iso: '2026-07-09',
    title: 'OpenAI and Broadcom are pulling AI economics in-house',
    category: 'Business Strategy',
    tag: 'Signal', tagClass: 'tag-cyan',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1160&h=440&fit=crop&q=80',
    body: `
      <p>OpenAI and Broadcom said on June 24 that they are building Jalapeño, OpenAI's first Intelligence Processor, for LLM inference. That is the part that matters. It is not just a faster chip. It is OpenAI pushing deeper into the infrastructure underneath ChatGPT, Codex, and the API.</p>

      <p><a href="https://openai.com/index/openai-broadcom-jalapeno-inference-chip/" target="_blank" rel="noopener noreferrer">OpenAI said</a> the chip is "to be deployed at gigawatt scale with data center partners, over multiple generations." That is not startup language. That is utility-scale language. It tells me the company is thinking about power, racks, networking, and capital like a real infrastructure business.</p>

      <p>The quote that stands out is Greg Brockman's: "The world is moving to a compute-powered economy." He is right. Once compute becomes the bottleneck, the winner is not just the company with the best model. It is the company that can deliver enough intelligence at a cost customers will actually pay for.</p>

      <p>Broadcom's framing is just as telling. Hock Tan said, "This is just the beginning of a multi-generation roadmap." That sounds like a company expecting a long run of demand, not a one-off custom order. The economics of AI are moving from renting compute to owning more of the stack underneath it.</p>

      <p>That matters because inference is where AI meets customers. Training gets the headlines. Inference is where the bills show up. If OpenAI can lower serving cost, it gets more room to price products, absorb demand spikes, and keep expanding without leaning quite so hard on someone else's hardware roadmap.</p>

      <p>I also think this says something about where the market is headed. The companies with the biggest AI ambitions are no longer satisfied with being app layer buyers. They want control over chips, networking, data centers, and the software that ties all of it together. That is vertical integration with a very modern label on it.</p>

      <p>My take is simple. This is a business story first and a chip story second. The chip is proof that the AI race is now about cost structure, supply chain control, and how much of the stack a company can own before the economics get too crowded.</p>
    `
  },
  post39: {
    featured: false,
    date: 'July 9, 2026',
    iso: '2026-07-09',
    title: 'Streaming changed movies, and theaters are rewarding smaller bets',
    category: 'Business Strategy',
    tag: 'Signal', tagClass: 'tag-cyan',
    image: 'https://images.unsplash.com/photo-1595769816263-9b910be24d5f?w=1160&h=440&fit=crop&q=80',
    body: `
      <p>Streaming changed movies. It did not kill them. It just changed what people will show up for, what they will wait to watch at home, and what kind of movie can still feel like a win.</p>

      <p>Netflix is still a big part of that story. In its <a href="https://ir.netflix.net/files/doc_financials/2026/q1/FINAL-Q1-26-Shareholder-Letter.pdf" target="_blank" rel="noopener noreferrer">Q1 2026 shareholder letter</a>, the company said revenue grew 16% year over year and that advertising revenue was on track to reach $3B in 2026. That is a streaming business still growing, still changing the rules, and still making more room for convenience.</p>

      <p>The theater side is changing too. <a href="https://www.boxofficepro.com/art-house-convergence-releases-results-of-2026-national-audience-survey/" target="_blank" rel="noopener noreferrer">Art House Convergence's 2026 survey</a> said independent cinemas were up 8.8% year over year and 38% over 2019. That matters because it tells me people are not just staying home. They are choosing more specific movie experiences when the movie is worth the trip.</p>

      <p>That is the part I keep coming back to. The old model wanted a giant budget, a giant opening weekend, and a giant marketing push to make everybody care at once. Now the better movie is often the one that knows exactly what it is and does not need to apologize for being smaller.</p>

      <p>That is why movies like <em>Obsession</em> and <em>Backrooms</em> keep coming up in the conversation. People are responding to movies that feel more direct, more personal, and less like they were designed by committee. Lower budgets do not automatically make a movie good, but they do force a kind of discipline that expensive projects often lose.</p>

      <p>I think that is where the industry is heading. Not away from big movies entirely, but away from the idea that big spending alone can carry weak ideas. The market is giving more room to films with a point of view, especially when the story is sharp enough that it can travel without a giant machine behind it.</p>

      <p>That does not mean every movie needs to be tiny. It means the business is rewarding clarity. If the movie is interesting, people will still show up. If it is generic, the audience has more options than ever and no reason to be loyal to a bloated budget.</p>

      <p>My read is simple. Streaming trained people to be selective. Theaters are adapting by leaning harder into movies that feel worth leaving home for. The winners are the projects that know how to do more with less and still feel like real art.</p>
    `
  },
  post38: {
    featured: false,
    date: 'July 9, 2026',
    iso: '2026-07-09',
    title: 'RAM prices are turning into an electronics problem',
    category: 'Business Strategy',
    tag: 'Watch this space', tagClass: 'tag-amber',
    image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=1160&h=440&fit=crop&q=80',
    body: `
      <p>RAM is not just getting annoying. It is getting expensive in a way that can spill into phones, laptops, PCs, and anything else that needs memory to work.</p>

      <p><a href="https://www.tbsnews.net/world/global-economy/ai-frenzy-driving-memory-chip-supply-crisis-1300721" target="_blank" rel="noopener noreferrer">Reuters reported on a global memory shortage</a> forcing AI and consumer-electronics companies to fight for supply, with some segments seeing prices more than double since February. That is the kind of thing that starts as a chip story and ends as a pricing story.</p>

      <p><a href="https://omdia.tech.informa.com/blogs/2026/july/global-smartphones-priced-below-400-dollars-will-decline-by-22percent-as-memory-costs-soar" target="_blank" rel="noopener noreferrer">Omdia is saying the pressure is already hitting lower-end devices</a>. In its July 7 report, memory costs already accounted for nearly 60% of the total bill of materials in smartphones priced below $400.</p>

      <p>That is not a small bump. That is the kind of cost structure that starts forcing companies to choose between higher prices, weaker margins, or worse hardware.</p>

      <p>The lawsuit part matters too, but only if people keep the words straight. <a href="https://www.tomshardware.com/tech-industry/samsung-sk-hynix-and-micron-sued-over-alleged-dram-price-fixing-amid-record-memory-costs" target="_blank" rel="noopener noreferrer">A class-action filing in California alleges Samsung, SK Hynix, and Micron coordinated supply cuts and used the AI shift as cover to inflate DRAM prices</a>. The companies deny collusion. The allegations are not proof, but they do show how much suspicion is building around the market.</p>

      <p>My view is simple. AI demand may be real. The shortage may be real. The legal allegations may or may not hold up. None of that changes the bigger point: when memory gets tight, everybody downstream pays for it.</p>

      <p>That is why I keep watching this. The first place it shows up is usually the cheapest hardware, the lowest-margin products, and the devices where companies have the least room to absorb cost. Then it spreads from there.</p>

      <p>If RAM keeps moving like this, the story stops being about one component and starts being about the price of basic electronics. That is the part worth paying attention to.</p>
    `
  },
  post36: {
    featured: false,
    date: 'July 9, 2026',
    iso: '2026-07-09',
    title: 'The World Cup is at its best when the fans matter more than FIFA\'s money',
    category: 'Business Strategy',
    tag: 'Worth noting', tagClass: 'tag-emerald',
    image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=1160&h=440&fit=crop&q=80',
    body: `
      <p>One of my favorite stories around this World Cup has nothing to do with a score. It is seeing international soccer fans travel across North America and get genuinely excited about the food.</p>

      <p><a href="https://apnews.com/article/eb084ee9e62040c71cecfe53637e0e0a" target="_blank" rel="noopener noreferrer">The Associated Press reported on fans trying local food across the United States, Canada, and Mexico</a>, from barbecue and Cuban food to tacos and poutine. Other visitors have gone viral for trying American chains, free refills, ranch, and Waffle House for the first time.</p>

      <p>I think that is awesome. The best part of an international event is not just getting everybody into the same stadium. It is watching people experience a place, meet the people who live there, and find something they did not expect to enjoy.</p>

      <p>Food does that better than almost anything. A fan might come for one match and leave talking about the barbecue, the people they met at a restaurant, or the neighborhood they found outside the official fan zone. That is the kind of cultural exchange the World Cup should create.</p>

      <p>At the same time, I have been watching <a href="https://www.netflix.com/title/80221113" target="_blank" rel="noopener noreferrer"><em>FIFA Uncovered</em> on Netflix</a>. The documentary came out in 2022, but it is difficult to watch it during this World Cup without thinking about the difference between what soccer means to fans and what FIFA has allowed the business around soccer to become.</p>

      <p>My takeaway is pretty simple. Once enough money got into the system, too much of the organization became focused on keeping control of that money. The game still mattered because the game created the audience. But the audience also created television rights, sponsorships, hosting power, political access, and a huge amount of leverage.</p>

      <p>That is where the incentives can get ugly. FIFA is supposed to be a steward of international soccer. When the same organization controls the event, the commercial relationships, and much of the decision-making around who gets access, there has to be serious accountability outside that structure.</p>

      <p>The history is not vague. <a href="https://www.justice.gov/archives/opa/pr/nine-fifa-officials-and-five-corporate-executives-indicted-racketeering-conspiracy-and" target="_blank" rel="noopener noreferrer">The U.S. Department of Justice's 2015 case charged 14 defendants</a> in what prosecutors described as a 24-year scheme involving racketeering, wire fraud, money laundering, bribes, and kickbacks connected to international soccer.</p>

      <p>That does not mean every person working around FIFA is corrupt, and it does not mean the World Cup itself is bad. It means the excitement around the tournament cannot be used as a reason to stop asking where the money goes, who makes the decisions, and who can actually hold those decision-makers responsible.</p>

      <p>FIFA's own financial reporting shows how large the business has become. <a href="https://ar.fifa.com/official-documents/annual-report/2024/financials/revised-2023-2026-budget" target="_blank" rel="noopener noreferrer">Its revised 2023 to 2026 budget increased projected cycle revenue by $2 billion</a>, driven by the commercial strength of its tournaments. That kind of growth can support players, federations, and the sport around the world. It can also make protecting the institution more important than fixing it.</p>

      <p>Money does seem to corrupt, especially when it operates with no accountability. More precisely, money exposes whatever accountability a system is missing. If leaders can control billions of dollars, influence host countries, and make decisions behind closed doors, good intentions are not enough.</p>

      <p>This applies far beyond soccer. In business, the strongest governance is usually built before something goes wrong. Clear ownership, independent review, transparent reporting, and consequences for bad decisions are not administrative details. They are what keep growth from turning into entitlement.</p>

      <p>I still love seeing fans bring their flags, fill restaurants, and get excited about American food. That is the World Cup I want more of. It is international, local, loud, weird, and genuinely fun.</p>

      <p>The people running the business should be held to a standard worthy of the people supporting the game. Fans should be able to enjoy the tournament without being asked to ignore the institution behind it. Soccer belongs to the people who play it and love it. FIFA should have to prove that it remembers that.</p>
    `
  },
  post35: {
    featured: false,
    date: 'July 9, 2026',
    iso: '2026-07-09',
    title: 'Qualification, research, and AEO are how AI becomes normal business',
    category: 'RevOps',
    tag: 'Worth noting', tagClass: 'tag-emerald',
    image: 'https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?w=1160&h=440&fit=crop&q=80',
    body: `
      <p><a href="https://hbr.org/2026/07/ai-is-changing-how-customers-choose-your-business" target="_blank" rel="noopener noreferrer">Harvard Business Review looked at how three small and midsize businesses</a>, including a manufacturer, a boutique hotel, and a B2B software company, are adapting as AI changes how customers research, evaluate, and choose suppliers.</p>

      <p>I agree with the larger point, but what stands out to me is how practical the examples are. Qualification, research, and answer engine optimization are not weird edge cases. They are three of the most ideal places to use AI because they increase efficiency inside work companies already need to do.</p>

      <p>Qualification is probably the clearest example. Every business has some version of deciding which leads, opportunities, customers, vendors, or requests deserve attention first. A lot of that work is still based on incomplete forms, manual review, and somebody making a quick judgment with limited context.</p>

      <p>AI can help pull together the information, compare it against the criteria that matter, and give the team a more useful starting point. That does not mean the AI should make every final decision. It means people stop wasting as much time sorting through obvious mismatches and can focus their attention where judgment is actually valuable.</p>

      <p>Research works the same way. Sales teams research prospects. Marketing teams research markets. Operators research tools and vendors. Leaders research competitors, pricing, and customer behavior. The work matters, but a lot of the process is slow because the information is scattered.</p>

      <p>AI can compress that first pass. It can gather the available context, summarize the major points, identify gaps, and help somebody decide what deserves deeper investigation. The important part is still verification. Faster research is useful. Faster confidence in bad information is not.</p>

      <p>Then there is AEO, or answer engine optimization. I think of this as the next part of SEO, not some completely separate discipline that requires a company to throw away everything it already knows. Customers are asking longer and more specific questions. AI systems are summarizing the available options and helping people build a shortlist before they ever visit a website.</p>

      <p>That means companies need content that clearly explains what they do, who they help, where they operate, what problems they solve, and why somebody should trust them. The website has to be easy for a person to understand and easy for an answer engine to interpret. Clear service pages, useful examples, strong FAQs, consistent business information, and original expertise all matter.</p>

      <p><a href="https://developers.google.com/search/blog/2026/05/a-new-resource-for-optimizing" target="_blank" rel="noopener noreferrer">Google's own guidance on generative AI search</a> makes a similar point. The company says valuable, unique content matters and that normal SEO fundamentals are still foundational. That is important because AEO should not become another excuse to fill the internet with generic AI copy.</p>

      <p>The common thread across qualification, research, and AEO is efficiency. None of these use cases requires a business to pretend it is becoming an AI company. It is still doing sales, marketing, operations, and customer acquisition. The tools are just helping the company do those things faster and with better context.</p>

      <p>I think successful companies are going to treat this as the new normal. They will not keep AI locked inside a special innovation project that never touches the real workflow. They will look at each process and ask where the team is spending time collecting information, sorting options, repeating research, or answering the same questions.</p>

      <p>From there, the implementation should be pretty straightforward. Define the process. Make sure the data is clean enough to use. Decide where a person still needs to approve the output. Measure whether the change improves speed, quality, conversion, or customer experience. Then keep adjusting it like any other operating system.</p>

      <p>The mistake is treating AI as too different to take on. That makes teams either avoid it completely or overcomplicate it until nothing ships. Qualification, research, and AEO show the better path. Start with work people already understand. Use AI to remove friction. Keep people responsible for the judgment that matters.</p>

      <p>That is where AI becomes useful instead of decorative. The companies that win will not be the ones that talk about AI the most. They will be the ones that quietly make it part of how the business qualifies opportunities, learns faster, and gets chosen.</p>
    `
  },
  post34: {
    featured: false,
    date: 'July 8, 2026',
    iso: '2026-07-08',
    title: 'Sony executives selling stock makes the Bungie layoffs look even worse',
    category: 'Business Strategy',
    tag: 'Watch this space', tagClass: 'tag-amber',
    image: 'https://images.unsplash.com/photo-1767424412548-1a1ac7f4b9bc?w=1160&h=440&fit=crop&q=80',
    body: `
      <p>Sony's executive stock sales are a bad look, especially when you put them next to what just happened at Bungie. <a href="https://www.sec.gov/Archives/edgar/data/313838/000119312526297130/xslF345X06/ownership.xml" target="_blank" rel="noopener noreferrer">Sony President and CEO Hiroki Totoki disclosed</a> that he sold 225,000 Sony shares on July 3 at $21.02 per share. That comes out to about $4.73 million.</p>

      <p>The part that stands out is how much of his reported direct position that represents. The filing says Totoki had 173,250 shares remaining after the sale. In other words, he sold roughly 56.5% of the shares listed around that transaction. That is not somebody trimming a tiny amount around the edges.</p>

      <p>He was not the only Sony leader selling. <a href="https://www.sec.gov/Archives/edgar/data/313838/000119312526297133/xslF345X06/ownership.xml" target="_blank" rel="noopener noreferrer">Chief Strategy Officer Toshimoto Mitomo also disclosed</a> a July 3 sale of 25,000 shares at the same $21.02 price, worth about $525,500. His filing showed 115,700 shares remaining.</p>

      <p>I want to be fair about what this does and does not prove. Executives sell stock for all kinds of reasons. Taxes, diversification, personal financial planning, and scheduled transactions can all be part of it. A Form 4 tells us what happened. It does not tell us exactly what somebody thinks is going to happen next.</p>

      <p>But I also do not think investors or employees are supposed to ignore the signal completely. When the CEO sells more than half of the direct shares shown in the filing and another senior executive sells on the same day, people are going to ask questions. They should ask questions.</p>

      <p>The timing looks worse because of Bungie. <a href="https://www.geekwire.com/2026/sony-cuts-significant-number-of-jobs-at-bungie-following-end-of-destiny-2-development/" target="_blank" rel="noopener noreferrer">GeekWire reported</a> that Sony cut 292 Bungie jobs in Bellevue after ending active development on Destiny 2. The cuts affected most of the Destiny team, some Marathon team members, and Sony employees who supported Bungie.</p>

      <p>Bungie has now cut more than 600 jobs across three rounds since Sony bought the studio for $3.6 billion in 2022. That is a horrible outcome for the people who actually built the games. Leadership made the acquisition, leadership pushed the live-service strategy, leadership approved the budgets, and workers keep absorbing the consequences when those bets do not perform.</p>

      <p>That is why the stock sales bother me. The people at the top are able to turn their equity into millions of dollars while employees are losing their jobs because the company is trying to clean up expensive strategic decisions. Even if every sale was completely routine, the optics are awful.</p>

      <p>I also think it is reasonable to wonder whether Sony leadership sees more downside ahead. Maybe there are more restructures coming. Maybe there are more write-downs, cancellations, studio changes, or pressure inside the gaming business. I cannot say these filings prove that. They do not. But when leadership starts selling this aggressively, it makes the possibility harder to dismiss.</p>

      <p>This connects directly to the larger problem in AAA gaming. Companies make enormous bets, buy studios for billions, chase live-service revenue, and promise long-term ecosystems. When the plan fails, executives still have options. Developers, artists, producers, QA teams, and support staff get layoffs.</p>

      <p>From a business operations perspective, confidence is not only communicated through earnings calls and press releases. It is communicated through incentives and behavior. If leadership says the future is strong while reducing teams and selling large portions of its own equity, the market is going to compare the words with the actions.</p>

      <p>My take is simple. The sales may be legal and may have ordinary explanations. They are still a bad sign at a bad time. Sony needs to show that its leaders believe in the long-term strategy with more than talking points. Right now, the employees are carrying the downside while executives are cashing out part of the upside. That is not a healthy signal for Bungie, PlayStation, or the future of AAA gaming.</p>
    `
  },
  post33: {
    featured: false,
    date: 'July 7, 2026',
    iso: '2026-07-07',
    title: "HubSpot's data enrichment reversal is really a trust problem",
    category: 'HubSpot',
    tag: 'Signal', tagClass: 'tag-cyan',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1160&h=440&fit=crop&q=80',
    body: `
      <p><a href="https://community.hubspot.com/t/we-got-this-wrong-and-we-are-fixing-it/152063" target="_blank" rel="noopener noreferrer">HubSpot reversed its planned data enrichment terms change</a> after a pretty loud customer backlash, especially on LinkedIn. Duncan Lennox, HubSpot's Chief Product and Technology Officer, said they got it wrong and would not move forward with the terms of service changes communicated on July 1.</p>

      <p>I think reversing it was the right call. But this definitely should not have happened in the first place. HubSpot is not just another data vendor sitting outside the customer relationship. It is the CRM. That changes the standard.</p>

      <p>The part that made people react so strongly is pretty easy to understand. Customers import the contacts. Customers clean the records. Customers pay teams to maintain the data. Customers build the context inside the CRM. Then the platform says that enrichment data may be shared into a broader dataset unless customers opt out. That feels backwards.</p>

      <p><a href="https://www.cmswire.com/customer-experience/hubspot-reverses-customer-data-enrichment-plan-after-customer-backlash/" target="_blank" rel="noopener noreferrer">CMSWire reported</a> that the plan would have allowed customer enrichment data to be shared across accounts before HubSpot reversed course. That is why this became such a big deal. It was not just a feature rollout. It felt like the rules around customer data were changing underneath people.</p>

      <p>I have seen some people say that Apollo, ZoomInfo, and other enrichment providers do similar things. I get the comparison, but I do not think it is the same. Those companies are external data providers. You buy their dataset as a service. HubSpot is where the customer relationship lives. It is where the notes, contacts, companies, lifecycle stages, deals, lists, and workflows live.</p>

      <p>That distinction matters. A corporation pulling together third-party data for a service is one thing. A CRM platform taking customer-contributed data and using it to power a similar enrichment product is a very different trust equation. Even if the intent was not malicious, the structure feels wrong.</p>

      <p>The opt-out part is what really bothered me. For something this sensitive, the default should have been obvious: ask first. Make it clearly opt-in. Explain exactly what data is used, what is excluded, how it is governed, how customers benefit, and what happens if they say no. Anything less creates the feeling that the platform is helping itself to the customer's work.</p>

      <p>I do give HubSpot credit for reversing quickly. They listened, they acknowledged the mistake, and they put a public statement behind it. That matters. But the trust issue does not disappear just because the rollback happened quickly.</p>

      <p>For RevOps teams, this is a reminder that CRM data governance is not just an internal cleanup project. It is also a vendor-risk question. Who can access the data? What can the platform do with it? What changes when terms are updated? What defaults are turned on quietly? Those questions have to be part of the operating model now.</p>

      <p>My view is simple. HubSpot can still build good enrichment tools. I actually think better enrichment inside the CRM would be useful. But if the product is powered by customer data, the permission model has to be clean. Not technically defensible. Clean. Obvious. Opt-in. Easy to explain to a client without feeling weird about it.</p>

      <p>That is the whole issue. HubSpot has spent years building trust as the friendly CRM. This was the kind of move that makes people question whether that trust is still the center of the relationship. The reversal was good. The lesson should be louder than the apology.</p>
    `
  },
  post32: {
    featured: false,
    date: 'July 7, 2026',
    iso: '2026-07-07',
    title: "Trump's $2.2 billion year is a public trust problem",
    category: 'Business Strategy',
    tag: 'Worth noting', tagClass: 'tag-emerald',
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1160&h=440&fit=crop&q=80',
    body: `
      <p><a href="https://www.wsj.com/finance/trump-investments-presidency-4ca88728" target="_blank" rel="noopener noreferrer">The Wall Street Journal reported</a> that President Donald Trump's personal income rose to more than $2.2 billion in the first year of his second term, with a huge portion of that tied to crypto ventures, licensing, investments, and his broader business holdings.</p>

      <p><a href="https://gvwire.com/2026/06/30/trump-pulled-in-at-least-2-billion-after-returning-to-the-white-house/" target="_blank" rel="noopener noreferrer">A New York Times report republished by GV Wire</a> said Trump pulled in at least $2.2 billion after returning to the White House, including about $1.4 billion from family cryptocurrency businesses. That is the part that makes this feel less like a normal wealth story and more like a public trust story.</p>

      <p>I think the critique here is pretty simple. If you are president of the United States, the job should not feel like the best business development opportunity on earth. There is a difference between already being wealthy and actively making huge amounts of money while your administration is making decisions that can affect those same markets.</p>

      <p>The crypto piece is especially hard to ignore. When a president's family is tied to tokens, memecoins, stablecoins, foreign investment, and policy decisions around digital assets, the conflict question is not some abstract ethics-class problem. It is sitting right in the middle of the business model.</p>

      <p>I also think this is where people get numb. The number is so big that it almost stops sounding real. Two point two billion dollars is not a normal disclosure footnote. It is a number that should make people stop and ask what the office is for, who benefits from access, and whether public service is being treated like a platform for private upside.</p>

      <p>That does not mean every dollar is automatically illegal. That is not the point. The point is that legality is not the only standard that matters. Trust matters too. If the public cannot clearly separate national policy from personal profit, then the damage is already happening.</p>

      <p>From a business operations perspective, this is also a governance failure. Any serious company would be expected to separate decision-making authority from financial incentives that could compromise judgment. If a CEO had this many overlapping personal interests, boards, auditors, and investors would be asking hard questions immediately.</p>

      <p>The presidency should be held to at least that standard. Probably higher. Instead, the public is being asked to accept a structure where massive personal earnings, foreign business ties, crypto policy, and government power all sit next to each other and we are supposed to trust that nothing improper is happening.</p>

      <p>I do not think that is good enough. The issue is not whether somebody likes Trump or hates Trump. The issue is whether the most powerful office in the country should be allowed to operate with this much personal financial upside attached to it.</p>

      <p>That is why this story matters. It is not just about one disclosure. It is about whether public office still has a line between serving the country and monetizing the position. If that line disappears, it becomes much harder to ask people to trust anything that comes after it.</p>
    `
  },
  post31: {
    featured: true,
    date: 'July 7, 2026',
    iso: '2026-07-07',
    title: 'The Xbox and Sony layoffs show why AAA gaming feels broken',
    category: 'Business Strategy',
    tag: 'Watch this space', tagClass: 'tag-amber',
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=1160&h=440&fit=crop&q=80',
    body: `
      <p><a href="https://news.xbox.com/en-us/2026/07/06/resetting-xbox/" target="_blank" rel="noopener noreferrer">Xbox announced</a> one of the most significant restructures in its history, with about 3,200 roles being reduced through FY27 and four studios leaving Xbox to new management. Microsoft also said it is eliminating around 4,800 roles overall, with the changes mostly falling within Commercial and Xbox.</p>

      <p>There is no clean way to talk about that. It is horrible. These are people who built the games, maintained the platforms, handled QA, supported live services, managed community issues, and did the work that makes these giant entertainment machines actually run. Then the business turns around and calls it a reset.</p>

      <p>I think this is one of the biggest stigmas of AAA gaming right now. The industry sells players on massive worlds, cinematic trailers, live service roadmaps, collector's editions, platform ecosystems, and ten-year franchise plans. Then the people making all of that happen get treated like a cost line that can be cut when the math gets uncomfortable.</p>

      <p>Sony has its own version of this problem. <a href="https://sonyinteractive.com/en/news/blog/difficult-news-about-our-workforce/" target="_blank" rel="noopener noreferrer">Sony Interactive Entertainment announced</a> in 2024 that it planned to reduce its global headcount by about 8%, or around 900 people. Since then, the broader PlayStation ecosystem has also seen more cuts, including reports of layoffs at Bend Studio after live-service project changes.</p>

      <p>That is the pattern that feels so broken. These companies chase bigger games, bigger scopes, bigger budgets, bigger subscriptions, bigger acquisitions, and bigger live-service dreams. When those bets do not perform perfectly, the people closest to the work often take the hit first.</p>

      <p>I do not think players hate AAA games. I think a lot of people still love them. I do. But there is a growing distrust around the business model behind them. Players can feel when a game is being built around monetization before fun. They can feel when a studio is being pushed toward a live-service model it probably did not need. They can feel when a company wants the upside of creative work without protecting the creative people doing it.</p>

      <p>From a business perspective, this is also just bad long-term operating discipline. You cannot keep telling the market that content is the moat while treating the people who make the content as disposable. That does not build trust with employees, and it does not build trust with players either.</p>

      <p>AAA gaming has become expensive, risky, and slow. I understand that. But that is also the point. If the model requires massive teams to work for years on projects that can still be canceled, closed, or gutted after one bad turn, then maybe the model itself needs to be questioned.</p>

      <p>The healthier version of gaming probably has to be more disciplined. Smaller scopes where they make sense. More realistic budgets. Less chasing every trend. Better protection for teams when leadership makes the wrong bet. More room for studios to build the kinds of games they are actually good at making.</p>

      <p>That is the piece I keep coming back to. The layoffs are not just sad headlines. They are a sign that the AAA machine is too bloated, too reactive, and too willing to sacrifice people after overpromising to the market. If gaming wants to get healthier, the companies at the top need to stop treating layoffs like a normal part of the content cycle.</p>
    `
  },
  post37: {
    featured: false,
    date: 'July 9, 2026',
    iso: '2026-07-09',
    title: "HubSpot's enrichment backlash is really about first-party data trust",
    category: 'HubSpot',
    tag: 'Signal', tagClass: 'tag-cyan',
    image: 'https://images.unsplash.com/photo-1783584731439-06cc9e1efbb2?w=1160&h=440&fit=crop&q=80',
    body: `
      <p>HubSpot's data enrichment backlash was not really about one feature. It was about who people think owns the data once it lives in the CRM.</p>

      <p>That is why the reaction got loud so fast. If you run CRM the right way, first-party data is the asset. Notes, deals, lifecycle stages, call recordings, and field history are not just records. They are the operating memory of the business.</p>

      <p>Once HubSpot's terms started sounding like a shared enrichment dataset, a lot of people immediately started talking about Apollo or some other outside tool. I get that instinct. When trust gets shaky, people look for the cleaner alternative.</p>

      <p>But switching tools is not the real fix by itself. If your data ownership is fuzzy in one system, it will be fuzzy in the next one too. The deeper problem is governance, not branding.</p>

      <p>HubSpot's own announcement makes the issue pretty clear. Duncan Lennox said, <a href="https://community.hubspot.com/t/we-got-this-wrong-and-we-are-fixing-it/152063" target="_blank" rel="noopener noreferrer">"You control your data."</a> HubSpot's knowledge base also says <a href="https://knowledge.hubspot.com/records/get-started-with-data-enrichment" target="_blank" rel="noopener noreferrer">"Enrichment data is provided by HubSpot's commercial dataset."</a> Those two lines explain why people reacted the way they did.</p>

      <p>My takeaway is simple. People still care about first-party data because they know it is the thing they actually control. They may use enrichment, they may use Apollo, and they may use HubSpot, but they want the defaults to be obvious and the permissioning to be clean.</p>

      <p>That is the lesson for RevOps teams too. If you want a CRM to feel trustworthy, define what is customer-owned, what is vendor-provided, and what can never be shared by default. If the system cannot answer that fast, it probably needs more cleanup before it needs more AI.</p>

      <p>HubSpot can still build useful enrichment tools. The bar is just higher now. Opt-in has to mean opt-in, and the data story has to be easy to explain without a long apology attached to it.</p>
    `
  },
  post30: {
    featured: false,
    date: 'June 19, 2026',
    iso: '2026-06-19',
    title: 'SpaceX in retirement accounts is where the hype gets personal',
    category: 'Business Strategy',
    tag: 'Signal', tagClass: 'tag-cyan',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1160&h=440&fit=crop&q=80',
    body: `
      <p><a href="https://www.theguardian.com/science/2026/jun/19/spacex-retirement-savings-elon-musk" target="_blank" rel="noopener noreferrer">The Guardian reported</a> that the SpaceX story is starting to reach retirement savings, and that is where the whole thing gets more personal. Once a company becomes something index funds and 401(k)s have to carry, the risk stops being a billionaire game and starts touching ordinary people.</p>

      <p>I think that is the part worth paying attention to. Retirement money is supposed to feel boring. People put that money aside because they want stability, not because they are trying to catch the next moonshot. If SpaceX becomes part of that system, the exposure is no longer optional for a lot of people.</p>

      <p>SpaceX is still a good company. I already said that in the IPO piece, and I mean it. But a good company can still get folded into a much bigger valuation story that asks retirement money to carry some of the same volatility as the people chasing the upside.</p>

      <p>That is why I do not think this should be framed as a clean stock story. It is a structure story. It is about who ends up carrying the risk when the narrative gets big enough that it stops feeling like one company and starts feeling like an entire ecosystem.</p>

      <p>My view is simple. The company can be real and the structure can still be too aggressive. Those are not contradictions.</p>
    `
  },
  post29: {
    featured: false,
    date: 'June 18, 2026',
    iso: '2026-06-18',
    title: "Apple's price hike warning shows the AI boom is reaching consumers",
    category: 'AI & Automation',
    tag: 'Signal', tagClass: 'tag-cyan',
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1160&h=440&fit=crop&q=80',
    body: `
      <p><a href="https://www.aljazeera.com/news/2026/6/18/apple-ceo-warns-price-rises-unavoidable-amid-ai-boom" target="_blank" rel="noopener noreferrer">Al Jazeera reported</a> that Tim Cook says price increases for some Apple products are unavoidable because the AI boom is driving memory and storage costs higher. That is the part of the story that should make people pause.</p>

      <p>I think this is where the AI boom stops being abstract. People like to talk about models, launches, and data centers. Fine. But the cost pressure does not stay inside those conversations forever. It eventually shows up in the products people actually buy.</p>

      <p>Apple can handle more pressure than most companies. It has the scale, the supply chain, and the pricing power to absorb a lot. But even Apple has limits if component costs keep climbing and the whole market keeps pulling the same parts in the same direction.</p>

      <p>This is also where the AI story starts to become easier for normal buyers to understand. Most people are not going to care about token costs, data center financing, or memory allocation until it changes the price of a phone, laptop, or subscription they already use. When that happens, the conversation gets a lot less theoretical.</p>

      <p>I do not think that means Apple is in trouble. It means Apple is the kind of company where pressure shows up clearly because the business is so visible. If Apple has to talk about price increases, smaller companies with less leverage are probably feeling the same thing with fewer ways to absorb it.</p>

      <p>That is why I think this story matters. It is not just about Apple. It is about the AI buildout starting to move into consumer pricing and product decisions. Once that happens, people feel the boom directly.</p>

      <p>If prices go up, that is not a side effect. That is the signal.</p>
    `
  },
  post28: {
    featured: false,
    date: 'June 17, 2026',
    iso: '2026-06-17',
    title: 'The memory crunch is the part of the AI boom people are ignoring',
    category: 'AI & Automation',
    tag: 'Signal', tagClass: 'tag-cyan',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1160&h=440&fit=crop&q=80',
    body: `
      <p><a href="https://www.euronews.com/business/2026/06/18/apple-price-rises-are-unavoidable-ceo-warns-as-ai-chip-costs-surge" target="_blank" rel="noopener noreferrer">Euronews reported</a> that the AI-driven memory crunch is already pushing hardware costs higher. That is the hidden constraint most people skip over when they talk about AI as if it is only a software story.</p>

      <p>I think this is the real pressure point. Everyone wants to focus on the model demos and the launch headlines, but the actual choke point is physical supply. Memory is one of the things that makes the whole stack work.</p>

      <p>If the AI buyers are willing to pay more for the scarce parts, everybody else gets squeezed. That includes consumer electronics, cloud customers, and anyone else trying to buy the same supply.</p>

      <p>That is why this story feels more practical than a lot of AI coverage. It is not about whether the demo looks impressive. It is about whether the supply chain can keep up with the promises being made. When memory gets scarce, the cost of ambition starts moving through the whole market.</p>

      <p>For operators, the lesson is pretty simple. If a tool becomes more expensive because the underlying infrastructure is constrained, you need to know where that cost lands. Does it hit your software bill, your hardware refresh cycle, your pricing, or your margin? Those questions matter more than another launch announcement.</p>

      <p>That is why this feels less like a normal tech cycle and more like a real supply shock. The companies that planned for actual demand are going to handle it better. The ones that treated this like a temporary rush are going to feel it first.</p>

      <p>This is the part of the boom that tells you who really has leverage.</p>
    `
  },
  post27: {
    featured: false,
    date: 'June 16, 2026',
    iso: '2026-06-16',
    title: 'The pushback against data centers is the real AI story now',
    category: 'Business Strategy',
    tag: 'Watch this space', tagClass: 'tag-amber',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1160&h=440&fit=crop&q=80',
    body: `
      <p><a href="https://www.businessinsider.com/data-center-bans-moratoriums-opposition-map-2026-6" target="_blank" rel="noopener noreferrer">Business Insider reported</a> that communities are pushing back on data centers and winning some of those fights. I think that is the next phase of the AI infrastructure story.</p>

      <p>For a while, the industry acted like these projects could just show up anywhere and everyone would call it progress. Small towns are not treating it that way anymore.</p>

      <p>They are looking at the actual tradeoff: power strain, water use, noise, traffic, land pressure, and a lot of vague promises that do not always survive contact with reality. If the project is not explained clearly, trust drops fast.</p>

      <p>That is the part I think companies keep underestimating. The financial model might work on paper, but the community model has to work too. If people feel like the project was hidden from them, or explained only after the important decisions were already made, the relationship starts broken.</p>

      <p>There is also a basic business lesson here. Speed is useful until it creates resistance that slows everything down later. The cleaner path is usually more direct: tell people what is being built, explain the burden honestly, show how the community benefits, and make the project easier to live next to.</p>

      <p>I have heard enough stories about NDAs and fuzzy early conversations to know why people are fed up. If you want approval, be direct about what is being built and what it costs the community.</p>

      <p>The companies that figure out how to be cleaner, clearer, and less evasive will have a real advantage. Not because it sounds good. Because they will keep getting approved.</p>
    `
  },
  post26: {
    featured: false,
    date: 'June 15, 2026',
    iso: '2026-06-15',
    title: 'The mega-IPO wave is what happens when the market gets crowded with hype',
    category: 'Business Strategy',
    tag: 'Signal', tagClass: 'tag-cyan',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1160&h=440&fit=crop&q=80',
    body: `
      <p><a href="https://www.businessinsider.com/profg-podcast-ed-elson-ipos-stocks-spacex-openai-anthropic-spcx-2026-6" target="_blank" rel="noopener noreferrer">Business Insider reported</a> that trader Ed Elson is bearish on the coming mega-IPO wave, including SpaceX, OpenAI, Anthropic, and other big names. I think that is the part worth paying attention to.</p>

      <p>When too many giant stories hit the market at the same time, the market stops rewarding scarcity in the same way. SpaceX, OpenAI, and Anthropic can all be good businesses and still be part of a crowded valuation trade. Those are not the same thing.</p>

      <p>Once the IPO window turns into a stampede, timing matters a lot more. Narrative fatigue starts to matter too. The market can only absorb so much promise before it starts asking harder questions.</p>

      <p>This is where I think people need to separate admiration from underwriting. You can admire the ambition and still admit the price already assumes a lot of things go right. The business can be impressive, the founders can be talented, and the stock can still be too crowded if everyone is buying the same future at once.</p>

      <p>There is also a portfolio reality here. When enough of these companies become public, the exposure does not stay neatly contained to people who choose the risk. It starts showing up through indexes, funds, retirement accounts, and the broader market story. That makes the hype cycle feel a lot less abstract.</p>

      <p>The risk is not just valuation. It is what happens when everyone tries to hit the market at peak confidence and assumes the window stays open forever. That can work. It can also get ugly very fast.</p>

      <p>This feels less like healthy capital formation and more like too many giant promises arriving at once.</p>
    `
  },  post25: {
    featured: false,
    date: 'June 11, 2026',
    iso: '2026-06-11',
    title: "Anthropic's compute deal shows AI is turning into balance-sheet infrastructure",
    category: 'AI & Automation',
    tag: 'Signal', tagClass: 'tag-cyan',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=1160&h=440&fit=crop&q=80',
    body: `
      <p><a href="https://ir.apollo.com/news-events/press-releases/detail/629/apollo-leads-35-billion-capital-solution-for-broadcom-ai" target="_blank" rel="noopener noreferrer">Apollo announced</a> a $35 billion capital solution with Blackstone and Broadcom tied to AI compute infrastructure. That is a very different kind of AI story than a model launch or a product demo. This is AI being financed like infrastructure.</p>

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
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1160&h=440&fit=crop&q=80',
    body: `
      <p><a href="https://techcrunch.com/2026/06/10/fresh-off-bond-sale-amazon-borrows-17-5-billion-from-banks-as-ai-spending-continues/" target="_blank" rel="noopener noreferrer">TechCrunch reported</a> that Amazon has lined up another $17.5 billion loan tied to its AI expansion. That is the kind of number that makes it hard to keep treating AI spending like a normal tech investment cycle.</p>

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
    image: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?w=1160&h=440&fit=crop&q=80',
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
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1160&h=440&fit=crop&q=80',
    body: `
      <p><a href="https://www.fastslowmotion.com/agentic-ai-hubspot-crm-guide/" target="_blank" rel="noopener noreferrer">Fast Slow Motion's guide</a> to agentic AI in HubSpot gets at the real question for CRM right now: can the CRM become the operating layer for the business, or is it still just the place where teams log activity after the real work happens somewhere else?</p>

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
    image: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1160&h=440&fit=crop&q=80',
    body: `
      <p><a href="https://www.ft.com/content/6e15876d-1882-45e2-a13c-16a1327079d7" target="_blank" rel="noopener noreferrer">The Financial Times reported</a> that AI demand is driving a record wave of power and utility dealmaking. I think the hyperscaler investment story is one of the hardest ones to read right now, because the numbers are so large that they almost stop meaning anything on first pass. When you see investors pouring unprecedented cash into AI infrastructure, it is hard to tell whether that is the market seeing something real or just chasing the trade.</p>

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
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1160&h=440&fit=crop&q=80',
    body: `
      <p>The interesting part of <a href="https://www.hubspot.com/company-news/hubspots-customer-agent-and-prospecting-agent-now-you-pay-when-the-task-is-complete" target="_blank" rel="noopener noreferrer">HubSpot's Customer Agent and Prospecting Agent announcement</a> is not just that they exist. It is the way HubSpot is pricing them. That tells you a lot about where the company thinks AI is actually useful.</p>

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
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1160&h=440&fit=crop&q=80',
    body: `
      <p><a href="https://www.hubspot.com/company-news/spring-2026-spotlight" target="_blank" rel="noopener noreferrer">HubSpot's Spring 2026 Spotlight</a> reads like a company trying to make one very clear point: AI is only helpful if it knows enough about the business to do something useful with it.</p>

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
    featured: false,
    date: 'June 8, 2026',
    iso: '2026-06-08',
    title: "SpaceX's IPO story is really a story about what the market will pay for momentum",
    category: 'Business Strategy',
    tag: 'Signal', tagClass: 'tag-cyan',
    image: 'https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?w=1160&h=440&fit=crop&q=80',
    body: `
      <p>My actual take on the SpaceX IPO story is simple. SpaceX is a good company. I do think that. But I also think the company is being tied into a much bigger Elon Musk story, and that whole package is being used to chase a trillion-dollar valuation. The <a href="https://content.spacex.com/cms-assets/FINAL_Documents%20and%20Updates/Project%20Apex%20-%20Australian%20Wrap%20and%20S-1%20-%20Final%20%28Lodgement%204%20June%202026%29%20-%20Compressed%20vF.pdf" target="_blank" rel="noopener noreferrer">SpaceX filing</a> makes the ambition very clear.</p>

      <p>That is what makes this interesting to me. SpaceX has earned the benefit of the doubt by actually shipping. It is not some empty brand. It has real momentum, and it has real business underneath it. That is why people take it seriously in the first place.</p>

      <p>But the risk I want people to keep in mind is this: a lot of shareholder money is getting used to cover one man's debts and one man's bigger valuation story. The xAI connection is part of that. That is where a lot of the shareholder money is coming from, at least in the way Elon appears to be categorizing the whole ecosystem. Whether the tools end up being legitimate or not is one thing. The bigger point is that the whole structure is getting bundled together to support the trillion-dollar narrative.</p>

      <p>Once a company like this goes public, the story changes. It is not just private-market belief anymore. It is shareholder pressure, public scrutiny, and a much louder expectation that the company keeps performing no matter what the market mood looks like. That is a big shift. It makes everything more volatile if the valuation story slips.</p>

      <p>And that is the part people should not miss. If this IPO is the thing that gets SpaceX to a trillion-dollar valuation, then the whole story gets a lot more aggressive. If it does not get there, then I think things get very volatile very fast. That is the real tradeoff here.</p>

      <h2>FAQ</h2>
      <p><strong>Why does the IPO matter if SpaceX is already a strong company?</strong> Because the public market forces the story to stand up under real scrutiny. A company can look great in private and still get much more fragile once shareholders start demanding clean answers.</p>
      <p><strong>What is the biggest risk?</strong> In my view, it is the way shareholder money gets pulled into a larger debt and valuation story that is bigger than SpaceX alone.</p>
      <p><strong>Why does xAI matter here?</strong> Because it is part of how the whole Elon ecosystem gets bundled together. That is where the valuation story starts to stretch beyond one company.</p>
      <p><strong>What changes after the IPO?</strong> The company stops being judged mostly by believers. It gets judged by shareholders, the market, and the numbers they expect to see.</p>
    `
  },
  post13: {
    featured: false,
    date: 'June 6, 2026',
    iso: '2026-06-06',
    title: "Oracle's AI infrastructure rally is about to meet the real world",
    category: 'AI & Automation',
    tag: 'Watch this space', tagClass: 'tag-amber',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1160&h=440&fit=crop&q=80',
    body: `
      <p>Oracle has clearly benefited from the AI infrastructure trade, and I understand why investors have been willing to reward that story. The market loves a clean narrative, and right now the narrative is simple: build data centers, support the AI buildout, and let the demand follow. <a href="https://blogs.oracle.com/connect/larry-ellison-oracle-shape-future-healthcare" target="_blank" rel="noopener noreferrer">Oracle's own AI positioning</a> shows how big that ambition has become.</p>

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
    image: 'https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?w=1160&h=440&fit=crop&q=80',
    body: `
      <p><a href="https://openai.com/index/five-new-stargate-sites/" target="_blank" rel="noopener noreferrer">OpenAI, Oracle, and SoftBank's five-site Stargate expansion</a> is what happens when an AI story stops being about features and starts being about infrastructure. Once you get to five new data centers, you are not talking about software anymore. You are talking about land, power, permits, cooling, financing, and whether the country actually has enough grid capacity to support the plan.</p>

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
      <p>I think one of the biggest changes in the AI story right now is that communities are no longer reacting like they did at the beginning of the boom. <a href="https://www.businessinsider.com/data-center-bans-moratoriums-opposition-map-2026-6" target="_blank" rel="noopener noreferrer">Business Insider has tracked</a> how data center opposition is showing up around the country. People have seen what these projects can do to power demand, water use, traffic, and local politics, and they are much less willing to just trust the pitch.</p>

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
      <p>I do not think space-based AI data centers are the near-term answer for most companies. But I do think the idea says a lot about where the competition is heading. <a href="https://www.tomshardware.com/tech-industry/data-centers/china-unifies-tech-sector-to-build-grid-free-orbiting-satellite-ai-data-centers-challenging-elon-musks-spacex-beijings-forced-chip-and-satellite-alliance-announced-a-week-before-musks-ai1-reveal" target="_blank" rel="noopener noreferrer">Tom's Hardware reported</a> on China's push toward orbiting AI data centers, and when people start talking seriously about putting compute in orbit, that tells you the power and cooling problem on Earth is already getting extreme.</p>

      <p>This is one of those stories that sounds futuristic until you realize it is just the logical end point of the infrastructure race. If demand keeps climbing, companies and governments will keep looking for places with more room, more energy, and fewer local constraints. Space is the most dramatic version of that thinking.</p>

      <p>What stands out to me is that this is no longer just a Silicon Valley story. It is becoming a global infrastructure story. Countries are competing over chips, power, land, and long-term strategic control over the systems that run AI. That is a much bigger conversation than model quality or product launches.</p>

      <p>My takeaway is that the AI buildout is not slowing down. It is just getting more physical, more expensive, and more political. The real question is not whether the race continues. It is where the next bottleneck shows up first.</p>
    `
  },
  post12: {
    featured: false,
    date: 'May 31, 2026',
    iso: '2026-05-31',
    title: "The most valuable AI use case isn't a product. It's a personal tool.",
    category: 'AI & Automation',
    tag: 'In the wild', tagClass: 'tag-pink',
    image: 'https://images.unsplash.com/photo-1467987506553-8f3916508521?w=1160&h=440&fit=crop&q=80',
    body: `
      <p>There is a version of AI that gets a lot of attention and a version that does not. The one that gets the attention is commercial: AI copilots, AI add-ons, AI agents that companies can license. The one that does not is quieter and, honestly, more genuinely useful.</p>

      <p>It is people building their own small tools that connect directly to the browser-based apps they already live in every day. Run them locally on their own machines. Drop a keyboard shortcut on the desktop to access them in seconds. No new subscriptions. No vendor lock-in. No waiting for a product team to build the feature you actually want.</p>

      <p>I have been watching this pattern grow for the past year, and what strikes me is how many different kinds of people are doing it. The insight driving them is usually the same: you already have a set of tools that run your actual work and life. Gmail. Google Calendar. Notion. Slack. Todoist. And most people are still interacting with those tools entirely by hand, the same way they always have.</p>

      <p>What the more technically inclined figured out is that you can build a bridge between an AI and those tools, run it on your own machine, and create a desktop launcher to trigger it whenever you need it. Then they went ahead and did it.</p>

      <p>Simon Willison, the developer behind the open-source Datasette project, built a command-line tool called <a href="https://github.com/simonw/LLM" target="_blank" rel="noopener noreferrer"><em>llm</em></a> that now has over 12,000 GitHub stars. It lets you send files, clipboard contents, or any text directly to major AI models from your terminal. His personal tools repository has over 77 small apps and scripts, most of them AI-generated, and he adds new ones at a rate of several per week. That pace does not come from a chat interface. It comes from having purpose-built tools wired into an actual workflow.</p>

      <p>Marc Bara documented a more elaborate version earlier this year in a detailed Medium post. He built what he calls MarcOS: a personal system running on SQLite that syncs bidirectionally with Gmail, Google Calendar, and Outlook, with a local HTML dashboard that costs zero AI tokens to read. His operating principle is blunt: "Every operation I do more than once a day should cost zero tokens." Claude Code handles the judgment-requiring work. Everything repetitive runs locally.</p>

      <p>Alex Honchar connected Claude Code to Gmail, Google Calendar, Slack, Notion, and Clay and built something he describes as a personal AI Chief of Staff. The system generates weekly briefs from upcoming meetings, pulling in relevant context from each of those tools automatically. Where no native integration exists, he built a Chrome Extension to bridge the gap. The whole setup is documented on GitHub and Medium.</p>

      <p>Talha Tahir put a dollar figure on his version: $26 a month total. A $20 Claude Pro subscription plus a small VPS. His AI assistant runs 24 hours a day, delivers daily calendar briefings, and uses Discord as the chat interface. The machine runs in Helsinki and he accesses it from anywhere.</p>

      <p>Stephen Jayakar's take was simpler but pointed. He had 451 Notion journal entries he wanted auto-tagged. Notion's AI add-on costs $8 a month on top of the base subscription. He built his own tagger using GPT-4o and the Notion API, published the whole project on GitHub, and got the same result for almost nothing in API costs. His framing was direct: why pay for a feature when you can build it in a week and own it outright?</p>

      <p>The technology making most of this possible is Anthropic's <a href="https://www.anthropic.com/news/model-context-protocol" target="_blank" rel="noopener noreferrer">Model Context Protocol</a>, or MCP. It is an open standard released in late 2024 that lets Claude and other AI systems connect to external services in a structured, consistent way. Since it launched, developers have built community MCP servers for nearly everything. Taylor Wilson's Google Workspace MCP has over 2,600 GitHub stars and gives Claude full access to Gmail, Calendar, Drive, Docs, and Sheets. Nate Spady's standalone Google Calendar MCP has over 1,100 stars and installs in Claude Desktop with a single line in a config file. The tooling has gotten genuinely accessible to anyone willing to spend an afternoon on it.</p>

      <p>On the desktop launcher side, <a href="https://www.raycast.com/blog/series-b" target="_blank" rel="noopener noreferrer">Raycast</a> has become the go-to tool on macOS for wiring all of this together. The app, which raised a $30 million Series B in 2024, has built-in AI with Claude, GPT, and others, plus an extension marketplace covering Notion, Todoist, Linear, GitHub, Slack, and dozens more. You can write a custom AI command, bind it to a hotkey, and trigger it on selected text or clipboard content from anywhere on your machine. The community-built raycast-g4f extension alone has over 1,100 GitHub stars. Robert Oberg published an Alfred workflow called Kiki that does something similar for that launcher, with hotkey triggers, text transformation presets, and voice input via Whisper, all running locally on macOS.</p>

      <p>For a more complete desktop application, <a href="https://pygpt.net/" target="_blank" rel="noopener noreferrer">PyGPT</a> is an open-source app running on Windows, Mac, and Linux that connects to Gmail, Calendar, and Slack through plugins while supporting every major AI model including local ones. Leon, another open-source personal assistant with over 17,000 GitHub stars, runs entirely on your own machine with local model support and a skills system you extend yourself.</p>

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
      <p>There is a serious trust issue in the <a href="https://katu.com/news/local/keizer-lego-collection-dispute-sparks-multiple-lawsuits-national-attention-keizer-oregon-viral-dispute-reckless-ben-youtube-consignment-local-lawsuit-legal" target="_blank" rel="noopener noreferrer">Bricks & Minifigs story</a>. Once a resale business takes custody of somebody else's inventory, the business is responsible for protecting both the items and the expectation around them.</p>

      <p>That is where this gets messy. Franchise changes, weak paperwork, and bad handoffs can turn a normal consignment arrangement into a customer nightmare. The inventory is not really the point. The trust is.</p>

      <p>This is why resale models need tighter operations than people assume. If you are holding collectibles, antiques, or anything emotionally important to the owner, the process has to be clean from the start. If it is not, the damage is not just financial.</p>

      <p>The basic operating model has to answer some unglamorous questions. Who owns the item at each step? What condition was it received in? What happens during a store transition? How does the customer prove what was handed over? If the business cannot answer those questions clearly, the brand is taking on more risk than it realizes.</p>

      <p>I think a lot of companies treat process like paperwork until something breaks. Then suddenly the paperwork is the business. It is the proof, the customer experience, and the thing that decides whether a dispute turns into a small issue or a reputation problem.</p>

      <p>The bigger lesson is that trust is an operational asset. Once it breaks, it is hard to buy it back.</p>
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
      <p><a href="https://www.costco.com/f/-/my-life-fuel-costco-gas-stations" target="_blank" rel="noopener noreferrer">Costco's gas business</a> works because it reinforces the membership model. The cheap gas is not separate from the warehouse business. It is part of why people keep showing up.</p>

      <p>That is the point I keep coming back to. A strong core business gives you room to build adjacent economics that would not work nearly as well on their own. Costco does not need gas to be the whole story. It just needs gas to make the whole membership package feel more valuable.</p>

      <p>What makes this interesting is the discipline. Costco is not trying to do everything. It is using one strong business to support another one that pulls members back into the system. That is a much better move than chasing random adjacencies because they look good in a slide deck.</p>

      <p>The reason this works is that it is tied to behavior the company already understands. Costco knows people will drive for value, build routines around the warehouse, and renew when the membership keeps paying for itself. Gas supports that loop instead of distracting from it.</p>

      <p>That is the difference between a smart adjacency and a random expansion. A smart adjacency makes the original business stronger. It gives customers another reason to stay in the system. A random expansion just adds complexity and hopes the brand is strong enough to carry it.</p>

      <p>The lesson for operators is simple. If the core business is strong enough, it can subsidize a move into something adjacent and make the whole model harder to copy.</p>
    `
  },
  post7: {
    date: 'May 25, 2026',
    iso: '2026-05-25',
    title: "Dell's best day ever tells you where enterprise AI is actually going",
    category: 'AI & Automation',
    tag: 'Signal', tagClass: 'tag-cyan',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1160&h=440&fit=crop&q=80',
    poster: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1160&h=440&fit=crop&q=80',
    body: `
      <p><a href="https://www.crn.com/news/channel-news/michael-dell-tech-built-for-ai-first-will-dominate-computing" target="_blank" rel="noopener noreferrer">Dell's AI infrastructure story</a> explains why the market reacted so strongly. Dell's stock had its best single day ever on Thursday - up 32%. The reason: AI server revenue.</p>
      <p>Not AI features. Not AI announcements. Not a partnership press release. Actual infrastructure revenue from enterprises buying servers to run AI workloads at scale. That's a materially different signal than most of what we've been watching.</p>
      <p>For the past two years, a lot of the AI conversation in business has been about the tool layer - Copilots, assistants, chatbots. What Dell's numbers tell you is that the infrastructure underneath all of that is being built out right now at serious, measurable scale. Companies aren't just experimenting anymore. They're buying hardware in volume.</p>
      <p>That is why I think this is a cleaner signal than most AI headlines. Revenue from servers is not the same thing as a launch video. It means buyers are making budget decisions and putting real money behind capacity. That does not prove every AI use case will work, but it does prove the infrastructure layer is not imaginary.</p>
      <p>The question now is what companies do with that capacity. Buying hardware is one thing. Turning that hardware into better workflows, faster service, better reporting, or more useful products is another. The winners are probably going to be the teams that connect the infrastructure spend back to actual operating outcomes.</p>
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
      <p><a href="https://www.theguardian.com/technology/2026/may/27/samsung-memory-chip-staff-bonuses-ai-profit-sharing-deal" target="_blank" rel="noopener noreferrer">Samsung Electronics' profit-sharing deal</a> could pay semiconductor workers average bonuses of nearly $400,000. The agreement runs ten years and allocates 10.5% of the semiconductor division's operating profit directly to employees.</p>
      <p>That's a significant number. And it's an interesting counterpoint to the prevailing narrative that AI is purely a headcount reduction play.</p>
      <p>What Samsung is essentially saying is: the people who build and maintain the chips that power AI create enough value to warrant a meaningful share of the upside. That's a different model than "agents in, people out." It's closer to "AI creates value, and here's how we distribute it."</p>
      <p>For RevOps leaders thinking about their own organizations - this is worth sitting with. The companies that figure out how to share AI-driven productivity gains with the people doing the work are probably going to have an easier time retaining the talent that makes AI actually function inside a business. The ones that treat AI purely as a cost-reduction lever are going to feel that in attrition.</p>
      <p>AI creates value. The question of who captures it is going to define a lot of organizational dynamics over the next decade. Samsung just put a number on one answer.</p>
    `
  },
  post9: {
    date: 'May 22, 2026',
    iso: '2026-05-22',
    title: "AI is making cybersecurity harder - and that's a GTM problem too",
    category: 'AI & Automation',
    tag: 'Watch this space', tagClass: 'tag-amber',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1160&h=440&fit=crop&q=80',
    body: `
      <p><a href="https://www.crn.com/news/security/2025/george-kurtz-s-5-boldest-ai-statements-at-crowdstrike-fal-con-2025" target="_blank" rel="noopener noreferrer">CrowdStrike's AI security comments</a> point to a warning worth paying attention to: AI cybersecurity tools are approaching the point where they will outpace human researchers at finding vulnerabilities. AI systems are already accelerating how fast security flaws get discovered - on both sides of the equation.</p>
      <p>That means the attack surface is expanding faster than most security teams can respond to it.</p>
      <p>This isn't just a security team problem. For RevOps and GTM operations, it has direct implications. Your CRM holds customer data, deal history, email sequences, and contact records. Your integrations connect your marketing automation, your sales stack, your support tools, your data warehouse. If any of those systems have vulnerabilities that AI-assisted attackers can now find faster than ever, the blast radius for a breach hits the entire revenue operation - not just IT.</p>
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
    poster: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1160&h=440&fit=crop&q=80',
    body: `
      <p>I've been testing Claude, Claude Co-Work, and Claude Dispatch to see how much of my own workload I can actually hand off. The answer is: some of it, but not the parts that depend on memory, state, or judgment.</p>

      <p>That is where AI falls apart. It can look persistent and helpful, but it still needs structure around it. The model itself does not keep durable state the way a good workflow system does. The more technical version of that problem shows up in how <a href="https://www.ibm.com/think/topics/ai-agent-memory" target="_blank" rel="noopener noreferrer">IBM explains AI agent memory</a> and how <a href="https://www.databricks.com/blog/memory-scaling-ai-agents" target="_blank" rel="noopener noreferrer">Databricks frames memory scaling</a>.</p>

      <p>The practical fix is not a bigger prompt. It is a better operating setup: break the work into smaller steps, store the context outside the model, validate each step, and keep the process simple enough that it does not drift.</p>

      <p>This is the thing that gets missed in a lot of AI advice. People keep acting like the answer is one perfect prompt. Sometimes the prompt matters, but most of the time the real issue is that the work is not organized well enough for the model to help. If the handoff is vague, the output will be vague too.</p>

      <p>I have found that AI works best when it is treated like a capable teammate with a very short memory. Give it a narrow job, a clean input, a clear definition of done, and a review step. Ask it to own the whole messy process and it starts making assumptions you may not catch until later.</p>

      <p>The lesson is straightforward. AI is useful when the task is bounded. It gets messy when people ask it to hold the whole workflow in its head.</p>
    `
  },
  post5: {
    date: 'May 18, 2026',
    iso: '2026-05-18',
    title: 'The shift from "AI tools" to AI with actual business context',
    category: 'CRM Strategy',
    tag: 'Watch this space', tagClass: 'tag-amber',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=1160&h=440&fit=crop&q=80',
    body: `
      <p>One thing I'm watching closely in the HubSpot ecosystem right now is the shift from "AI tools" to AI with actual business context.</p>
      <p><a href="https://www.hubspot.com/company-news/spring-2026-spotlight" target="_blank" rel="noopener noreferrer">HubSpot's recent Spring Spotlight updates</a> around AEO, AI agents, and contextual CRM data feel less like simple AI features and more like the beginning of operational AI inside GTM teams.</p>
      <p>The interesting part isn't just automation. It's that the AI can understand customer history, deal movement, support conversations, and business processes all in one place.</p>
      <p>That is the piece that makes this different from generic AI. A chatbot sitting outside the business can be helpful, but it does not know the real operating context. It does not know which lifecycle stage matters, which deal is stuck, which account has a support issue, or which rep owns the next step unless that data is organized somewhere.</p>
      <p>CRM context is what turns AI from a novelty into something a team can actually use. If the system knows the customer record, the deal history, and the workflow rules, then the output can be more specific. If the CRM is messy, the AI just becomes a faster way to expose that mess.</p>
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
      <p><a href="https://www.salesforce.com/news/stories/agentic-ai-reshapes-workforce/" target="_blank" rel="noopener noreferrer">Salesforce has been loud</a> about what AI means for their workforce. Marc Benioff said they would not hire new engineers this year because AI is doing the work. They've since cut 4,000 customer service roles. The message is pretty clear: agents in, people out.</p>
      <p><a href="https://www.hubspot.com/company-news/spring-2026-spotlight" target="_blank" rel="noopener noreferrer">HubSpot is taking a different approach</a>. Their Spring 2026 release put AI agents directly inside the CRM, but the pitch isn't about reducing headcount. It's about using the context HubSpot already has: your deal history, your pipeline definitions, your customer interactions, to make the people using it faster and sharper. The Prospecting Agent monitors funding rounds and intent signals. Smart Deal Progression reads your call transcripts and suggests next steps. It's all built on top of data that's already there.</p>
      <p>That difference matters because most companies do not need a dramatic AI story. They need fewer missed follow-ups, cleaner handoffs, better pipeline notes, and a faster way to understand what is happening with customers. That is not as flashy as replacing whole teams, but it is a lot more useful for the average business.</p>
      <p>The risk for both platforms is the same. If the data underneath the agent is bad, the agent will make bad work feel automated. That is why the implementation matters so much. AI inside a CRM is only as good as the record quality, process design, and governance around it.</p>
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
      <p><a href="https://www.hubspot.com/web-guide/customer-connection-blueprint/future" target="_blank" rel="noopener noreferrer">HubSpot continuing to invest</a> into AI-powered automation is a reminder that CRM platforms are turning into operational systems, not just databases of record.</p>
      <p>For RevOps teams, this matters. The tools are getting smarter, but the strategy still has to come from people who understand the business. Knowing how to configure, prompt, and govern these systems is a real skill now.</p>
      <p>The mistake I see in a lot of AI conversations is that people talk about the tool before they talk about the process. HubSpot can add better automation, better agents, and better recommendations, but those features only help if the team has clear lifecycle stages, clean properties, and a real definition of what should happen next.</p>
      <p>That is why this is a RevOps story more than a software story. AI in the CRM changes who can move faster, but it also makes bad operations louder. If your pipeline is messy, the AI will not magically make it strategic. It will just move the mess faster.</p>
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
      <p>I built this entire site using <a href="https://www.anthropic.com/product/claude-code" target="_blank" rel="noopener noreferrer">Claude Code</a>, Anthropic's AI coding tool. Start to finish: under an hour. GitHub repo, GitHub Pages deployment, custom workflow, all of it.</p>
      <p>The workflow is simple: describe what you want, review the output, push. No boilerplate hunting, no getting lost in documentation.</p>
      <p>The important part is not that the site exists. The important part is how much faster the gap has gotten between having an idea and putting something real in front of people. That changes the way small projects, experiments, and personal brands can move.</p>
      <p>I still had to review the work. I still had to decide what belonged, what sounded right, and what needed to be cleaned up. AI did not remove judgment. It compressed the build cycle so the judgment could happen on a real working site instead of a blank page.</p>
      <p>That is the useful part for business teams too. You can test a page, a workflow, a report, or a small internal tool without turning it into a six-week project. The bar is still quality. The difference is that the first usable version can show up much faster.</p>
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
      <p>I've spent over 10 years helping organizations market themselves online through <a href="https://samcbarth.com" target="_blank" rel="noopener noreferrer">SamCBarth.com</a>: generating leads, tracking attribution, managing CRMs, and turning raw data into reporting that actually drives decisions.</p>
      <p>The answer is always the same: garbage in, garbage out. The best automation in the world can't fix a dirty database or a broken handoff process.</p>
      <p>Good RevOps starts with clean systems and clear ownership. The tools, the dashboards, the AI, all of it builds on that foundation.</p>
      <p>Marketing today needs innovative ideas, not stagnant strategies that have been used for decades. Things are changing all the time. Buyer behavior changes, the channels change, and the tools change. If the strategy does not keep up, the work starts to feel old fast.</p>
      <p>The part people underestimate is that marketing ops is not just reporting after the fact. It shapes what the business can actually see. If attribution is messy, if campaigns are named inconsistently, or if lifecycle stages mean different things to different teams, leadership is making decisions through a foggy window.</p>
      <p>That is why I care so much about the boring foundation. Clean naming, clear ownership, good handoffs, and useful dashboards are not busywork. They are what let the creative ideas actually turn into revenue instead of disappearing into disconnected activity.</p>
    `
  }
};

const POST_ORDER = ['post62', 'post61', 'post60', 'post59', 'post58', 'post57', 'post56', 'post55', 'post54', 'post53', 'post52', 'post51', 'post50', 'post49', 'post48', 'post47', 'post46', 'post45', 'post44', 'post43', 'post42', 'post41', 'post40', 'post39', 'post38', 'post31', 'post37', 'post36', 'post35', 'post34', 'post33', 'post32', 'post30', 'post29', 'post28', 'post27', 'post26', 'post25', 'post24', 'post23', 'post22', 'post21', 'post20', 'post19', 'post18', 'post14', 'post13', 'post15', 'post16', 'post17', 'post12', 'post11', 'post10', 'post7', 'post8', 'post9', 'post6', 'post5', 'post4', 'post1', 'post2', 'post3'];

// Dual export: browser globals + CommonJS for the build-time SEO generator.
POST_ORDER.unshift('post63');
POST_ORDER.unshift('post64');
POST_ORDER.unshift('post65');
POST_ORDER.unshift('post66');
POST_ORDER.unshift('post67');
POST_ORDER.unshift('post68');
POST_ORDER.unshift('post69');
POST_ORDER.unshift('post70');
POST_ORDER.unshift('post71');
POST_ORDER.unshift('post72');
POST_ORDER.unshift('post73');
POST_ORDER.unshift('post74');
POST_ORDER.unshift('post75');
POST_ORDER.unshift('post76');
POST_ORDER.unshift('post77');
POST_ORDER.unshift('post78');
POST_ORDER.unshift('post79');
POST_ORDER.unshift('post80');
POST_ORDER.unshift('post81');
POST_ORDER.unshift('post82');
POST_ORDER.unshift('post83');
POST_ORDER.unshift('post84');
POST_ORDER.unshift('post85');

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { POSTS, POST_ORDER };
}
if (typeof window !== 'undefined') {
  window.POSTS = POSTS;
  window.POST_ORDER = POST_ORDER;
}
