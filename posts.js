/*
 * posts.js - single source of truth for post data.
 *
 * Loaded directly in the browser (populates window.POSTS / window.POST_ORDER)
 * and required by tools/generate-seo.js at build time so the sitemap, RSS feed,
 * and JSON-LD structured data are generated from the same content. Add new posts
 * here only - everything downstream regenerates.
 */
const POSTS = {
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

const POST_ORDER = ['post55', 'post54', 'post53', 'post52', 'post51', 'post50', 'post49', 'post48', 'post47', 'post46', 'post45', 'post44', 'post43', 'post42', 'post41', 'post40', 'post39', 'post38', 'post31', 'post37', 'post36', 'post35', 'post34', 'post33', 'post32', 'post30', 'post29', 'post28', 'post27', 'post26', 'post25', 'post24', 'post23', 'post22', 'post21', 'post20', 'post19', 'post18', 'post14', 'post13', 'post15', 'post16', 'post17', 'post12', 'post11', 'post10', 'post7', 'post8', 'post9', 'post6', 'post5', 'post4', 'post1', 'post2', 'post3'];

// Dual export: browser globals + CommonJS for the build-time SEO generator.
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { POSTS, POST_ORDER };
}
if (typeof window !== 'undefined') {
  window.POSTS = POSTS;
  window.POST_ORDER = POST_ORDER;
}
