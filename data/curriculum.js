window.CM_DATA = window.CM_DATA || {};

window.CM_DATA.curriculum = {
  roadmap: [
    {
      id: 'stage-1',
      stageNum: 1,
      title: 'Day 1 Morning — Universal Case DNA (0 → 1 Foundation)',
      duration: '45 mins',
      goal: 'Eliminate interview freeze. Learn the single 6-step conversation loop that works on EVERY Consulting and PM case study.',
      actionView: 'academy',
      actionTab: 'algorithm',
      tasks: [
        { id: 'c1-1', text: 'Learn the 6-Step Case Loop (Clarify → Structure → Hypothesize → Diagnose/Ideate → Metrics & Trade-offs → Pyramid Pitch)' },
        { id: 'c1-2', text: 'Practice reading the Opening Clarifying Script & "30-Second Pause" script out loud twice' },
        { id: 'c1-3', text: 'Read the Top 10 Fatal Beginner Mistakes so you never jump straight into random solutions' }
      ]
    },
    {
      id: 'stage-2',
      stageNum: 2,
      title: 'Day 1 Afternoon — Master the Big 3 Starter Cases (RCA, Profitability, GTM)',
      duration: '90 mins',
      goal: '80% of entry-level interviews test RCA, Profitability, or GTM. Build pattern recognition so you spot the right tree in 15 seconds.',
      actionView: 'academy',
      actionTab: 'wizard',
      tasks: [
        { id: 'c2-1', text: 'Use the Interactive Framework Decision Wizard and score 12/16+ on "Spot the Case Type" mini-drills' },
        { id: 'c2-2', text: 'Read the 3 flagship Meesho Sawal Jawab cases (R3 Retention, R4 Rural Activation, R2 RTO/RVP) in Study Mode' },
        { id: 'c2-3', text: 'Solve 3 Level-1 Starter Cases in Guided Coach (e.g., Swiggy Delhi RCA, Fan Company BCG, ClearAsthma GTM)' }
      ]
    },
    {
      id: 'stage-3',
      stageNum: 3,
      title: 'Day 2 — Product Core (Design, Metrics, Improvement, Pricing & Critique)',
      duration: '2 hrs',
      goal: 'Master CIRCLES, North Star + Counter-Metrics, Prioritization (RICE / Impact-Effort), and Marketplace Pricing.',
      actionView: 'library',
      actionTab: 'Product',
      tasks: [
        { id: 'c3-1', text: 'Study the Google Gemini ("Confident but Wrong") & Navi Namma Yatri Pricing Sawal Jawab cases' },
        { id: 'c3-2', text: 'Review Blueprints #3–#6 (Design, Metrics, Improvement/Critique, Pricing) & 8 App User Flows' },
        { id: 'c3-3', text: 'Solve 4 Product cases in Guided Coach (1 Design, 1 Metrics, 1 Improvement/Critique, 1 Pricing)' }
      ]
    },
    {
      id: 'stage-4',
      stageNum: 4,
      title: 'Day 3 — Consulting Core (Market Entry, Growth, M&A, Unconventional & Industry Primers)',
      duration: '2 hrs',
      goal: 'Build commercial intuition across industries so you always know the exact revenue, cost, and value-chain levers.',
      actionView: 'memorize',
      actionTab: 'primers',
      tasks: [
        { id: 'c4-1', text: 'Scan the 20 Industry Primers (E-Commerce, Quick Commerce, Banking, Fintech, Aviation, FMCG, Pharma, SaaS)' },
        { id: 'c4-2', text: 'Master at least 40/60 Flashcards and hit 80%+ on the 60-Second Case Reflex Drill' },
        { id: 'c4-3', text: 'Solve 4 Consulting cases across Market Entry, Growth, M&A, and Unconventional puzzles' }
      ]
    },
    {
      id: 'stage-5',
      stageNum: 5,
      title: 'Day 4–5 — Timed Mock Interviews & Pyramid Synthesis',
      duration: '90 mins',
      goal: 'Rehearse under real 20–25 minute interview pressure, handle curveballs calmly, and deliver crisp executive summaries.',
      actionView: 'mock',
      actionTab: 'simulator',
      tasks: [
        { id: 'c5-1', text: 'Complete 3 timed Mock Interviews (1 RCA, 1 GTM/Market Entry, 1 Design/Profitability) in the Mock Workbench' },
        { id: 'c5-2', text: 'Practice delivering 30-second Pyramid Principle Syntheses out loud without rambling' },
        { id: 'c5-3', text: 'Review Firm Playbooks (Google, Meesho, Zomato, BCG, McKinsey, Bain) for your target interviews' }
      ]
    }
  ],

  sixSteps: [
    {
      stepNum: 1,
      id: 'clarify',
      name: 'Paraphrase, Clarify & Define Goal',
      tagline: 'Never solve the wrong problem. 90 seconds of sharp questions reveals 50% of the answer.',
      timeBudget: '1.5–2 mins',
      whyInterviewersCare: 'Real interviews start intentionally vague ("Orders dropped", "Should we raise prices?", "Launch X"). Interviewers watch whether you confirm the business goal, scope, definitions, and constraints before throwing out ideas.',
      checklist: [
        'Paraphrase the prompt in one crisp sentence to confirm alignment.',
        'Ask the #1 golden question: "What is our primary Business Goal?" (Revenue, Retention, Cost Reduction, Activation, Market Share?).',
        'Clarify exact metric/term definitions (e.g., "By return, do you mean RTO or RVP?", "Is activation install or 1st order?").',
        'Check scope boundaries: Geography, Platform (App vs Web), Segment/Category, Timeframe, and Resource/Launch Constraints.',
        'For RCA: always ask 3 data-sanity checks first (Sudden vs Gradual? Isolated to 1 geo/platform/cohort? Any logging/tracking change?).'
      ],
      wordForWordScript: `"Thank you, that's an exciting problem. To make sure I'm solving the exact right thing, let me quickly confirm the goal and ask 3 clarifying questions:\n1. What is the primary business objective here—are we optimizing for revenue, cost reduction, user activation, or long-term retention?\n2. Could you clarify the exact scope—which geography, platform (iOS/Android/Web), or customer segment should I focus on?\n3. [If RCA] Has this drop been sudden or gradual, and is it isolated to a specific region, app version, or user cohort?"`,
      badExample: 'Jumping straight into solutions: "Swiggy orders dropped? Let\'s give 50% discount coupons and run Instagram ads!" (You didn\'t even check if it was a payment gateway crash or Delhi-only rain!).',
      goodExample: '"Before structuring, I want to verify two things: (1) Is the drop in orders placed or orders completed/delivered? (2) Has this happened suddenly in one city like Delhi, or gradually across India?"'
    },
    {
      stepNum: 2,
      id: 'structure',
      name: 'Pause & Present a MECE Structure',
      tagline: 'Ask for 20–30 seconds of silence, sketch your issue tree, and get buy-in BEFORE diving in.',
      timeBudget: '1.5–2 mins',
      whyInterviewersCare: 'Structure is the #1 grading rubric for 0-experience candidates. You don\'t need industry insider knowledge if your tree is MECE (Mutually Exclusive, Collectively Exhaustive) and tailored to the prompt.',
      checklist: [
        'Explicitly ask: "May I take 20 seconds to organize my thoughts into a structured framework?"',
        'Use a custom issue tree tailored to the case—never mechanically recite textbook acronyms out loud ("I will now do SWOT").',
        'State your high-level buckets (2–4 clean branches) and explain WHY you are starting with a specific branch.',
        'Write down the core equation or user journey flow visibly on your scratchpad.',
        'Ask for alignment: "Does this structure look comprehensive, or is there an area you\'d like me to focus on first?"'
      ],
      wordForWordScript: `"Thank you, that makes the scope very clear. May I take 20 seconds to structure my approach?\n[Pause 20 sec, draw 3–4 clean MECE branches]\nI'd like to tackle this across three pillars: first, [Branch A — e.g., Funnel & User Journey]; second, [Branch B — e.g., Internal Product/Ops Drivers]; and third, [Branch C — e.g., External/Competitor Shifts]. Given that our goal is [Goal], I'd like to start with [Branch A] because it directly drives the largest share of impact. Does that sound reasonable?"`,
      badExample: 'Rambling unorganized thoughts: "So maybe prices went up, or maybe competitors did something, oh wait also app UI could be buggy, or maybe monsoon..."',
      goodExample: '"Since Namma Yatri earns a flat daily subscription from drivers and zero commission, higher fares only grow our revenue if they attract more drivers online. I\'ll evaluate this across two sides: Rider booking conversion vs Driver acceptance & supply."'
    },
    {
      stepNum: 3,
      id: 'hypothesize',
      name: 'Hypothesize, Drill Down & Ask for Data',
      tagline: 'Don’t interrogate blindly—state a smart hypothesis before asking the interviewer for numbers.',
      timeBudget: '4–6 mins',
      whyInterviewersCare: 'Weak candidates treat the interviewer like a database ("Tell me X, tell me Y"). Strong candidates say "Because X is 60% COD, I suspect drop-off sits in..." and then ask targeted questions to narrow down the root cause.',
      checklist: [
        'Walk step-by-step through the User Journey or Value Chain so you never miss a hidden link.',
        'At each branch, state WHY it could be the culprit before asking for data.',
        'Eliminate clean branches explicitly ("Since Android & iOS dropped equally, it\'s unlikely an app-release bug—let\'s cross that out and inspect payments").',
        'Use the 80/20 rule: immediately focus on the bucket representing 70–80% of the volume (e.g., RTO 20% vs RVP 5%).',
        'In Consulting/Profitability: separate Volume vs Price, and Fixed vs Variable Costs along the Value Chain.'
      ],
      wordForWordScript: `"Looking at our 11-step return flow, Tier-2/3 users shop easily using Cash-on-Delivery, so I hypothesize they hit friction when asked for UPI ID or bank account details on the refund screen. Do we have funnel drop-off data showing where the 80% non-returners abandon the flow?"`,
      badExample: 'Asking 15 disconnected questions: "What is our revenue? What is our churn? What about marketing? What about HR? What about servers?"',
      goodExample: '"Since overall returns are 25%—split 20% RTO and 5% RVP—RTO drives 80% of our logistics waste. Let\'s drill into RTO first across our 4 pillars: Payment Method (COD vs Prepaid), Logistics, Platform verification, and Category fragility."'
    },
    {
      stepNum: 4,
      id: 'solve',
      name: 'Diagnose, Ideate & Prioritize (P0 / P1 / P2)',
      tagline: 'Never dump a laundry list of 10 random ideas. Group into buckets and rank by Impact × Effort.',
      timeBudget: '4–5 mins',
      whyInterviewersCare: 'Anyone can brainstorm 8 generic ideas. Real PMs and Consultants ruthlessly prioritize the 2–3 P0 levers that move the needle fastest within real-world engineering, budget, and operational constraints.',
      checklist: [
        'For RCA: Confirm the exact root cause and verify no secondary compounding cause exists.',
        'For Design / Improvement: Define 2–3 User Personas, pick ONE target persona with rationale, map Pain Points, then brainstorm targeted solutions (Quick Win vs Long-Term Bet).',
        'For GTM / Market Entry: Segment ICP, define Positioning & Value Prop, select Channels & Pricing, and map Pre-Launch → Launch → Post-Launch phases.',
        'Always score solutions using Impact vs Effort (or RICE / Frequency × Severity) and explicitly state what you will NOT build first (P2 / Reject).'
      ],
      wordForWordScript: `"We've identified four problem buckets, and the Refund Instrument drop-off alone represents 12% of the entire cohort—12x larger than pickup failures (1%). Therefore, I'll prioritize Refund Instrument as P0: (1) Pilot Cash Refund at Doorstep for verified COD orders, and (2) Offer a small bonus on Meesho Balance to build perceived cash value."`,
      badExample: 'Listing 7 unranked features: "We should add AI recommendations, gamification, dark mode, a referral program, WhatsApp bot, loyalty points, and AR try-on."',
      goodExample: '"Across our 5 rural pain points, Trust in Product/Seller scores High Impact × High Frequency (P0), ahead of Language & Usability (P2). I\'ll solve Trust first via Verified Seller badges and vernacular buyer video reviews."'
    },
    {
      stepNum: 5,
      id: 'metrics',
      name: 'Metrics, Guardrails, Trade-offs & Testing',
      tagline: 'Every solution breaks something if unguarded. Name your North Star, Leading indicators, and Guardrails.',
      timeBudget: '2–3 mins',
      whyInterviewersCare: 'This separates good structured answers from top-decile PM/Strategy offers. Naming the exact counter-metric (guardrail) proves you think about second-order effects, cannibalization, and experimentation pitfalls.',
      checklist: [
        'North Star Metric: Captures real value delivered to BOTH user and business (not vanity clicks!).',
        'Leading Indicators (L1): Funnel conversion, time-to-value, adoption %, frequency.',
        'Guardrail / Counter-Metrics: What could go wrong? (e.g., Latency, RTO abuse, Margin erosion, Unnecessary AI refusal, Rider cancellation).',
        'Trade-offs: Name at least 2 real tensions (e.g., Accuracy vs Latency, Growth vs Margin, Trust vs Friction).',
        'Experimentation check: For marketplaces (Uber, Namma Yatri, Zomato), beware shared-supply spillover—use Geo-split or Switchback A/B testing!'
      ],
      wordForWordScript: `"To measure success, my North Star is Trusted Task Success, supported by leading indicators like groundedness score and regeneration rate. Crucially, I'll enforce strict guardrails—p95 latency, inference cost, and unnecessary refusal rate—so we don't win accuracy simply by hedging every question. For rollout, I'd A/B test on high-severity cohorts first."`,
      badExample: '"I will track Daily Active Users and downloads to see if it worked." (Vanity metrics with zero link to the feature or downside risks!)',
      goodExample: '"Since riders and drivers share one pool, a random user-level A/B test fails due to driver cherry-picking. I\'d run a 4-week geo-cluster or alternate-day switchback test measuring driver hours online, fulfillment %, and search-to-booking conversion."'
    },
    {
      stepNum: 6,
      id: 'synthesize',
      name: 'Deliver a 30-Second Pyramid Synthesis',
      tagline: 'Answer-first executive summary: Recommendation → 3 Supporting Facts → Risks & Next Step.',
      timeBudget: '30–45 secs',
      whyInterviewersCare: 'Consultants use Barbara Minto’s Pyramid Principle: lead with the conclusion, NOT the chronological story of your notes. Ending cleanly with a crisp recommendation + quantified impact + next step leaves a lasting impression.',
      checklist: [
        'Lead immediately with your final recommendation ("My recommendation is X...").',
        'Back it up with the 2–3 sharpest data points / root causes you uncovered.',
        'State the key risk / trade-off and how you will mitigate or measure it.',
        'Stop talking cleanly once finished—never trail off with "uhh yeah, that\'s basically it."'
      ],
      wordForWordScript: `"To summarize: I recommend [Core Decision / Fix] to achieve [Business Goal]. We found that [Key Insight / Data Point #1] drives the biggest impact, while [Insight #2] is secondary. Prioritizing [P0 Solution] addresses this directly, and we will validate it via [Metric / Experiment] while guarding against [Key Risk]."`,
      badExample: '"So first I asked clarifying questions, then we looked at revenue and then costs, and we saw procurement had copper prices going up, and also maybe BLDC fans..."',
      goodExample: '"In summary, Namma Yatri should implement a capped demand multiplier (≤1.3x) strictly during peak hours while keeping non-peak prices unchanged. Because drivers keep 100% of fares under a flat daily subscription, solving the 30% peak driver-shortage directly lifts active driver-days and platform revenue—which we\'ll validate via a 4-week geo/switchback test."'
    }
  ],

  decisionWizard: {
    approaches: [
      {
        id: 'rca',
        name: 'RCA (Root Cause Analysis)',
        badge: 'Most Common PM Case',
        whenToUse: 'A metric dropped (orders, DAU, conversion, revenue) or an error/complaint spiked ("Swiggy orders down 15%", "Gemini confident but wrong").',
        coreFormula: 'Data Sanity Check → Segment Cuts (Geo/Platform/User/Time) → Internal (Tech/UX/Ops/Policy) vs External (Competitor/Season/Macro) → User Journey Funnel',
        firstQuestions: ['Is the metric drop sudden or gradual?', 'Is it isolated to one city, app version, OS, or cohort?', 'Were any tracking/logging definitions changed recently?'],
        watchOutFor: 'Never propose solutions before isolating the root cause! Always rule out logging bugs and external shocks first.'
      },
      {
        id: 'gtm',
        name: 'GTM (Go-To-Market Strategy)',
        badge: 'High-Yield Strategy',
        whenToUse: 'Launching a new product, entering a new country/segment, or taking an existing product to market ("Spotify Video", "ClearAsthma", "EV 3-Wheeler").',
        coreFormula: 'Clarify Goal & Constraints → Market Sizing & ICP Segmentation → Value Prop & Positioning → 4Ps & Channels → Phased Launch (Pre / Launch / Post) + KPIs',
        firstQuestions: ['What is the primary launch goal (adoption, revenue, market share)?', 'Who is the target geography/segment and what budget/timeline constraints exist?', 'Do we have existing distribution/brand leverage we can piggyback on?'],
        watchOutFor: 'Don’t jump straight into "run Instagram ads." Define WHO (ICP), WHY (positioning vs rivals), HOW MUCH (pricing), and WHERE (channels) across Pre/Launch/Post phases.'
      },
      {
        id: 'design-improve',
        name: 'Product Design & Improvement',
        badge: 'Core PM Favorite',
        whenToUse: 'Build a 0-to-1 feature/app OR improve activation, engagement, retention, or monetization of an existing product ("Group Ordering at Blinkit", "Rural Activation at Meesho").',
        coreFormula: 'Goal & Constraints → User Personas (Pick 1!) → Map Journey & Pain Points → Prioritize Pain Points → Brainstorm Solutions (MVP vs Moonshot) → Trade-offs & Metrics',
        firstQuestions: ['What is the business goal (activation, engagement, retention, monetization)?', 'Are we building inside the existing app or standalone?', 'Are there target geographies, device constraints, or persona priorities?'],
        watchOutFor: 'Never solve for "everyone"! Pick ONE clear target user persona, justify why, and solve their P0 pain point deeply.'
      },
      {
        id: 'metrics-critique',
        name: 'Product Metrics & Critique',
        badge: 'Analytical PM Favorite',
        whenToUse: 'Asked to define success metrics for a product/feature, diagnose a metric trade-off, or critique an existing product ("WhatsApp Communities", "Uber Critique").',
        coreFormula: 'Product Mission & Value Exchange → User Journey Funnel → North Star Metric → L1 Leading Indicators (AARRR/HEART) → Counter-Metrics / Guardrails',
        firstQuestions: ['What stage is the product in (0-to-1 launch, growth, maturity)?', 'Who are the key sides/stakeholders (e.g., buyer, seller, platform)?', 'What undesirable gaming behavior could happen if a metric is over-optimized?'],
        watchOutFor: 'A North Star without a Guardrail metric fails the interview! Always pair growth/engagement metrics with quality/margin/abuse counter-metrics.'
      },
      {
        id: 'pricing',
        name: 'Pricing & Monetization',
        badge: 'PM + Consulting Crossover',
        whenToUse: 'Asked how to price a new tier, subscription, marketplace ride, or B2B/pharma product ("YouTube Premium", "Namma Yatri", "Hair Oil", "Drug Pricing").',
        coreFormula: 'Business Model & Goal → 3 Cs of Pricing: Cost-Plus (Floor) vs Competitor Benchmarking (Anchor) vs Value-Based WTP (Ceiling) → Tiering & Behavioral Psychology → Testing',
        firstQuestions: ['What is our revenue mechanism (margin, subscription, commission, ads)?', 'What is our objective (penetration, profit maximization, LTV)?', 'What alternatives do users have today and how elastic is demand?'],
        watchOutFor: 'Always state all 3 pricing lenses (Cost floor, Competitor anchor, Customer Value ceiling) before proposing tiers or discounts!'
      },
      {
        id: 'profitability',
        name: 'Profitability (Consulting Classic)',
        badge: '#1 Consulting Case',
        whenToUse: 'A company’s profits or margins dropped, or costs spiked ("Fan Company BCG", "QSR Revenue Decline", "Steel Manufacturer").',
        coreFormula: 'Profit = Revenue (Price × Volume × Mix) − Costs (Fixed + Variable across Value Chain: R&D → Procurement → Mfg → Distribution → Sales/Service)',
        firstQuestions: ['Is this a profit drop (₹) or margin (%) drop, and over what timeline?', 'Is it industry-wide or specific to our company?', 'Which product lines, geographies, or channels are affected?'],
        watchOutFor: 'Never assume costs caused it—isolate Revenue vs Cost first, then Volume vs Price vs Product Mix, and check Industry-wide vs Company-specific!'
      },
      {
        id: 'market-entry',
        name: 'Market Entry & Expansion',
        badge: 'Strategy Core',
        whenToUse: 'Should Company X enter a new geography, vertical, or customer segment? ("Airport Taxi BCG", "Medical Implants", "UAE Fintech Expansion").',
        coreFormula: 'Market Attractiveness (Size, Growth, Margins) → Competitive Landscape & Risks (Porter\'s 5 / PESTEL) → Internal Capabilities & Economics (BEP / Payback) → Mode of Entry (Build / Buy / Partner)',
        firstQuestions: ['Why does the client want to enter now, and what is the financial hurdle/timeline?', 'What capabilities or distribution assets do they already possess?', 'Are there regulatory or licensing barriers in the target market?'],
        watchOutFor: 'Market Entry is NOT just "is the market big?" You must prove BOTH Market Attractiveness AND Client Right-to-Win + Entry Mode (Organic vs Acquisition vs JV).'
      },
      {
        id: 'growth-ma-unc',
        name: 'Growth, M&A & Unconventional',
        badge: 'Senior / Curveball Cases',
        whenToUse: 'How to 2x revenue, evaluate an acquisition/merger, or solve an open-ended policy/ops puzzle ("Disney buying Star Wars", "Tea Relaunch", "Land Usage BCG").',
        coreFormula: 'Growth: Ansoff (Existing vs New Markets/Products) + Funnel Levers | M&A: Standalone Value + Synergies (Rev/Cost) − Integration Risks | Unconventional: First Principles Equation',
        firstQuestions: ['What is the target outcome and timeframe (e.g., 2x revenue in 3 years)?', 'Are there capital, regulatory, or brand constraints?', 'What is the core unit of decision (ROI, lives saved, NPV, adoption)?'],
        watchOutFor: 'In Unconventional cases, candidates freeze looking for a memorized framework. Fall back on First Principles: define the objective equation and split it MECE!'
      }
    ],
    scenarios: [
      { id: 'cs-1', question: 'Swiggy’s food delivery orders dropped 15% in Delhi over the past month. What do you do?', options: ['RCA (Root Cause Analysis)', 'Product Design', 'Market Entry', 'M&A'], correctIndex: 0, explanation: 'A specific metric dropped in a defined geography -> classic RCA! Check data sanity, isolate dinner/cuisines/segments, then separate internal vs external causes.' },
      { id: 'cs-2', question: 'Spotify wants to launch video streaming to compete with YouTube and Netflix. Plan the rollout.', options: ['Profitability', 'GTM (Go-To-Market Strategy)', 'RCA', 'Product Critique'], correctIndex: 1, explanation: 'Launching a new product into a market requires GTM: pilot market selection, ICP, positioning, 4Ps, and Pre-Launch / Launch / Post-Launch execution.' },
      { id: 'cs-3', question: 'You are a PM at Blinkit. Build a collaborative group ordering feature for families and roommates.', options: ['Product Design & Improvement', 'Pricing & Monetization', 'Profitability', 'Market Entry'], correctIndex: 0, explanation: '0-to-1 feature creation -> Product Design (CIRCLES): pick a priority persona, map pain points, design MVP flow, and define North Star + guardrails.' },
      { id: 'cs-4', question: 'BCG asks: An Indian fan manufacturer’s gross profit margin dropped. How should they fix it?', options: ['Product Metrics', 'Profitability (Consulting Classic)', 'GTM', 'Unconventional'], correctIndex: 1, explanation: 'Margin / profit pressure -> Profitability tree! Check Revenue differentiation (BLDC/IoT premiumization) vs Cost optimization along the Value Chain.' },
      { id: 'cs-5', question: 'How would you measure the success of WhatsApp Communities 6 months after launch?', options: ['Product Metrics & Critique', 'RCA', 'Market Entry', 'Pricing'], correctIndex: 0, explanation: 'Evaluating feature success -> Product Metrics: define Community value exchange, North Star (e.g. active engaged communities/WAU), L1 engagement, and spam guardrails.' },
      { id: 'cs-6', question: 'Namma Yatri charges drivers a flat daily fee and 0% commission. Should they raise rider fares?', options: ['Pricing & Monetization', 'Product Design', 'M&A', 'RCA'], correctIndex: 0, explanation: 'Pricing in a two-sided marketplace! Tie fare changes to peak driver supply shortages, keep non-peak steady, and test via geo/switchback.' },
      { id: 'cs-7', question: 'Should Disney acquire Lucasfilm (Star Wars)? Walk through the decision.', options: ['Growth, M&A & Unconventional', 'RCA', 'Product Critique', 'Profitability'], correctIndex: 0, explanation: 'Acquisition case -> M&A framework: Standalone value + Revenue synergies (parks, merch, streaming) + Cost synergies − Integration & IP dilution risks.' },
      { id: 'cs-8', question: 'An EV two-wheeler company wants to decide whether to enter the commercial delivery fleet market.', options: ['Market Entry & Expansion', 'RCA', 'Product Metrics', 'Pricing'], correctIndex: 0, explanation: 'Entering a new B2B segment -> Market Entry: Market size/growth, Fleet buyer economics (TCO), Competition, Client capabilities, and Entry Mode.' },
      { id: 'cs-9', question: 'Meesho notices COD RTO (undelivered returns) is 20% of all orders. How do you reduce it?', options: ['RCA (Root Cause Analysis)', 'Market Entry', 'GTM', 'M&A'], correctIndex: 0, explanation: 'Diagnosing an operational leak -> RCA: map Ops Flow + User Flow, isolate COD intent & address/courier gaps, and deploy risk-tiered verification.' },
      { id: 'cs-10', question: 'Critique the Uber rider app experience and suggest what you would fix first.', options: ['Product Metrics & Critique', 'Profitability', 'GTM', 'Market Entry'], correctIndex: 0, explanation: 'Product Critique: assess core user goals, walk the end-to-end journey, identify top friction points (ETA accuracy, driver cancellations, safety), and prioritize fixes.' },
      { id: 'cs-11', question: 'Perplexity wants to monetize "Perplexity One" in India. What price and tiers should they set?', options: ['Pricing & Monetization', 'RCA', 'Profitability', 'M&A'], correctIndex: 0, explanation: 'Subscription monetization -> Pricing: Cost-to-serve (LLM API cost floor), Competitor anchor (ChatGPT/Gemini), Value WTP + tiered PPP pricing.' },
      { id: 'cs-12', question: 'A leading QSR fast-food chain saw quarterly revenue fall 15% nationwide with stable menu prices.', options: ['Profitability (Consulting Classic)', 'Product Design', 'GTM', 'M&A'], correctIndex: 0, explanation: 'Revenue = Customers × Avg Spend. With prices stable, customer footfall dropped -> inspect loyalty changes, NPS, service speed, and store ops.' },
      { id: 'cs-13', question: 'How can a traditional consumer tea brand double its revenue in 3 years?', options: ['Growth, M&A & Unconventional', 'RCA', 'Product Critique', 'Pricing'], correctIndex: 0, explanation: 'Growth Strategy -> Ansoff Matrix (Existing vs New Products × Existing vs New Markets) + Revenue levers (Distribution depth, Premium SKUs, D2C/Quick Commerce).' },
      { id: 'cs-14', question: 'Nation with NaMo asks: How would you increase women voter turnout in a state by 15%?', options: ['Growth, M&A & Unconventional', 'Profitability', 'Pricing', 'Product Metrics'], correctIndex: 0, explanation: 'Unconventional public-sector case -> First Principles Funnel: Eligible Women → Registered Voters → Aware & Motivated → Able to Reach Booth → Cast Vote.' },
      { id: 'cs-15', question: 'Checkout conversion on Zepto suddenly dropped 12% yesterday evening in Bangalore.', options: ['RCA (Root Cause Analysis)', 'GTM', 'Market Entry', 'Product Design'], correctIndex: 0, explanation: 'Sudden single-city, single-step drop -> RCA! Check tech/app release, UPI/payment gateway outage, surge fee changes, or dark-store stockouts.' },
      { id: 'cs-16', question: 'Design an executive dashboard for the CEO of a hyperlocal delivery startup.', options: ['Product Metrics & Critique', 'GTM', 'Market Entry', 'M&A'], correctIndex: 0, explanation: 'Dashboard / Metrics design: clarify CEO priorities (Growth vs Unit Economics vs Ops Health), group KPIs into L0/L1/Guardrails, and structure alert thresholds.' }
    ]
  },

  masterBlueprints: [
    {
      id: 'bp-rca',
      num: 1,
      category: 'RCA',
      name: 'Root Cause Analysis (Metric Drop / Ops Failure)',
      formula: 'Data Sanity Check → Segment Isolation (Geo/OS/Cohort) → User Funnel Step → Internal Factors (Tech/UX/Ops/Policy) vs External Factors (Rivals/Season/Macro)',
      whenToUse: 'Whenever a metric drops (Orders, DAU, Retention, Conversion) or a failure spikes (RTO returns, Checkout abandonment, AI errors).',
      anatomy: [
        '1. Clarify exact metric definition, sudden vs gradual timing, and magnitude.',
        '2. Rule out Data/Logging errors (tracking SDK bug, definition change, seasonality).',
        '3. Slice by 5 dimensions: Geography, Platform (iOS/Android/Web), User Segment (New vs Repeat), Product/Category, Time-of-day.',
        '4. Walk the User Journey & Ops Journey step-by-step to locate the exact funnel cliff.',
        '5. Separate Internal (App release, UI change, Pricing, Logistics/SLA, Policy) from External (Competitor promo, Festival, Weather, Regulation).'
      ],
      proTip: 'Never jump into solutions at Minute 3! Spend 60% of the case narrowing down WHICH exact segment broke and WHY, then give razor-sharp fixes.',
      exampleIds: ['sj-meesho-r3-retention', 'sj-meesho-r2-rto-rvp', 'ecell-rca-swiggy-delhi', 'ecell-rca-zepto-checkouts']
    },
    {
      id: 'bp-gtm',
      num: 2,
      category: 'GTM',
      name: 'Go-To-Market (GTM) Launch Strategy',
      formula: 'Target Goal → Market & Competitor Audit → ICP & Value Proposition → 4Ps & Channel Strategy → Pre-Launch / Launch / Post-Launch + Success KPIs',
      whenToUse: 'Launching a new product, feature, or brand into a target geography or customer segment.',
      anatomy: [
        '1. Clarify goal (Adoption vs Revenue), target geography, budget, and launch timeline.',
        '2. Define Ideal Customer Profile (ICP) — start with an underserved high-intent beachhead segment.',
        '3. Craft Positioning & Value Prop ("For [ICP] who [Pain], [Product] delivers [Differentiator] unlike [Rival]").',
        '4. Set 4Ps: Product MVP scope, Pricing/Intro offer, Place/Distribution (digital vs offline), Promotion (Inbound + Outbound + Partnerships).',
        '5. Execute in 3 Phases: Pre-Launch (waitlist/pilots/creators) → Launch (activation loops) → Post-Launch (retention/referrals/KPI review).'
      ],
      proTip: 'A great GTM never targets "everyone in India on Day 1." Pick a tight pilot beachhead (e.g., Tier-1 college students or 3 metro cities), prove PMF, then scale.',
      exampleIds: ['ecell-gtm-spotify-cinematic', 'ktc-gtm-clearasthma', 'ktc-gtm-mx-player', 'ecell-gtm-fintech-uae']
    },
    {
      id: 'bp-design',
      num: 3,
      category: 'Product Design',
      name: 'Product Design (0-to-1 Feature or App)',
      formula: 'Comprehend Goal → Select 1 Priority Persona → Map Journey & Pain Points → Prioritize Needs → Design MVP + Differentiator → Trade-offs & Metrics',
      whenToUse: 'Building a new product or feature from scratch ("Group ordering at Blinkit", "AI feature for Canva", "Credit for CRED").',
      anatomy: [
        '1. Comprehend Goal, platform, target market, and constraints (CIRCLES: C).',
        '2. Identify 2–3 distinct user personas and PICK ONE primary persona to optimize for first (I).',
        '3. Walk through their current journey and list 3–4 deep unmet needs/pain points (R).',
        '4. Cut through & prioritize the #1–2 pain points by Severity × Frequency (C).',
        '5. List 3 creative solutions (1 table-stakes fix, 1 core workflow feature, 1 delight/AI differentiator) (L), evaluate trade-offs (E), summarize with North Star + Guardrails (S).'
      ],
      proTip: 'Explicitly explain why you are DE-PRIORITIZING the other personas for v1 (e.g., "I\'ll focus on Families/Roommates for v1 due to weekly frequency, and tackle Office teams in v2").',
      exampleIds: ['ecell-design-blinkit-group', 'ecell-design-canva-ai', 'ktc-design-bicycle-resale', 'ktc-design-whatsapp']
    },
    {
      id: 'bp-metrics',
      num: 4,
      category: 'Product Metrics',
      name: 'Product Metrics & Success Measurement',
      formula: 'Product Mission & Value Loop → AARRR / Funnel Mapping → 1 North Star Metric + L1 Leading Drivers + Counter-Metrics (Guardrails)',
      whenToUse: 'Defining KPIs for a feature, designing a CEO dashboard, or evaluating an experiment ("WhatsApp Communities", "UPI Lite", "Gemini Trust").',
      anatomy: [
        '1. State the product\'s core value exchange (what makes a user and the business BOTH win?).',
        '2. Map metrics across AARRR (Acquisition → Activation → Engagement/Retention → Referral → Revenue) or HEART.',
        '3. Pick ONE crisp North Star Metric that cannot be easily gamed by spam or clickbait.',
        '4. List 3–4 Leading Indicators (L1) that predict the North Star early.',
        '5. Add 2–3 Guardrail / Counter-Metrics (Latency, Cost, Margin, Abuse, Cannibalization) + Segmentation cuts.'
      ],
      proTip: 'Never pick "Total Signups" or "Page Views" as a North Star! Always tie the North Star to completed core value (e.g., "Weekly Trusted Tasks Completed" or "Active Communities with ≥3 weekly replies").',
      exampleIds: ['sj-google-gemini-trust', 'ecell-metrics-whatsapp-communities', 'ecell-metrics-upi-lite', 'ktc-metrics-blinkit']
    },
    {
      id: 'bp-improve',
      num: 5,
      category: 'Product Improvement & Critique',
      name: 'Product Improvement & Critique',
      formula: 'Clarify Goal (Activation/Retention/Monetization) → Audit Current User Flow → Identify Friction Points → Prioritize (Impact × Effort) → Fixes & Risks',
      whenToUse: 'Improving an existing app ("Meesho Rural Activation", "Zomato No Cheat Days") or critiquing your favorite/assigned product ("Uber", "Myntra", "GCP").',
      anatomy: [
        '1. Clarify the exact target goal (if Improvement: Acquisition vs Activation vs Retention vs Revenue; if Critique: Good vs Bad UX & strategic gaps).',
        '2. Walk through the end-to-end user journey (Discovery → Onboarding → Core Action → Repeat Loop).',
        '3. Call out what works well (value prop, speed, trust) AND where friction/anxiety occurs.',
        '4. Prioritize top 2 pain points with Impact × Effort (or RICE) and propose concrete UX/product changes.',
        '5. Define A/B test plan, North Star, and downside guardrails.'
      ],
      proTip: 'In Product Critique, don’t just roast UI button colors! Critique the core value loop, edge cases, trust/safety failures, and unit-economic tensions.',
      exampleIds: ['sj-meesho-r4-rural-activation', 'ecell-improve-zomato-nocheat', 'ktc-crit-uber', 'ktc-crit-myntra']
    },
    {
      id: 'bp-pricing',
      num: 6,
      category: 'Pricing',
      name: 'Pricing & Monetization Strategy',
      formula: 'Business Model & Goal → 3Cs of Pricing: Cost-Plus (Floor) | Competitor Anchor | Value-Based WTP (Ceiling) → Tiering/Bundling + Elasticity Test',
      whenToUse: 'Pricing a SaaS/AI tier, subscription bundle, marketplace fare, pharma drug, or consumer product.',
      anatomy: [
        '1. Verify how the business actually makes money (margin, flat sub, commission, razor-blade, freemium).',
        '2. Anchor the Floor: Unit Variable Cost + Allocated Fixed Cost (Cost-plus).',
        '3. Anchor the Market: Competitor prices & direct substitutes (Competitor-based).',
        '4. Anchor the Ceiling: Quantified incremental value / ROI / willingness-to-pay by segment (Value-based).',
        '5. Design packaging (Good/Better/Best tiers, PPP localization, intro discounts) + test without violating fairness.'
      ],
      proTip: 'Always check whether you are pricing a single-sided product (YouTube Premium) or a two-sided marketplace (Namma Yatri / Meesho Seller Ads) where raising price on one side shifts supply or demand on the other!',
      exampleIds: ['sj-navi-namma-yatri-pricing', 'ecell-pricing-youtube-premium', 'ecell-pricing-swiggy-one', 'ktc-pricing-hair-oil']
    },
    {
      id: 'bp-profitability',
      num: 7,
      category: 'Profitability',
      name: 'Profitability & Cost Optimization',
      formula: 'Profit = Revenue (Units × Price × Product Mix) − Costs [Fixed + Variable across Value Chain: Procurement → Inbound → Mfg → Outbound → Marketing → After-Sales]',
      whenToUse: 'Declining profit, shrinking gross/net margins, or rising operational costs in consulting & business cases.',
      anatomy: [
        '1. Clarify Profit (₹) vs Margin (%), timeframe, and whether competitors face the same issue (Industry vs Company-specific).',
        '2. Split Profit into Revenue vs Cost first—ask which side moved!',
        '3. If Revenue dropped: split Price × Volume × Mix across geographies, channels, and customer segments (internal vs external demand).',
        '4. If Costs rose: walk the Value Chain end-to-end (Raw Materials → Production/Yield → Logistics → SG&A/Marketing → Returns/Wastage).',
        '5. Deliver Short-Term Cost Wins + Medium-Term Revenue/Mix Recommendations.'
      ],
      proTip: 'Never forget "Product Mix"! Even if total units sold went UP and prices stayed flat, selling more low-margin SKUs and fewer high-margin SKUs still crashes profit margins.',
      exampleIds: ['ktc-prof-fan-company', 'ktc-prof-retail-store', 'srcrc-fast-food-chain', 'srcrc-public-sector-banking']
    },
    {
      id: 'bp-market-entry',
      num: 8,
      category: 'Market Entry',
      name: 'Market Entry & Geographic Expansion',
      formula: 'Strategic Objective → Market Attractiveness (TAM/SAM/Growth) → Competition & Barriers (5 Forces / PESTEL) → Financials & Capabilities → Entry Mode (Build/Buy/JV)',
      whenToUse: 'Entering a new country, launching a new business vertical, or setting up a new factory/branch.',
      anatomy: [
        '1. Clarify objective, target IRR/payback period, and why the client is considering entry now.',
        '2. Size the Market (TAM → SAM → realistic Year-1/Year-3 SOM) and assess growth & margin pool.',
        '3. Analyze Competition (incumbent share, switching costs) and Macro/Regulatory barriers (PESTEL).',
        '4. Check Capabilities & Unit Economics: Breakeven volume = Fixed Investment ÷ (Price − Variable Cost).',
        '5. Recommend Go / No-Go + Entry Mode (Greenfield Build vs Acquisition vs Joint Venture / Partnership).'
      ],
      proTip: 'Every Market Entry case ends with TWO decisions: (1) SHOULD we enter (Go/No-Go backed by numbers)? and (2) HOW should we enter (Build, Buy, or Partner)?',
      exampleIds: ['ktc-me-airport-taxi', 'ktc-me-airline-route', 'ktc-me-steel-3', 'srcrc-medical-implants']
    },
    {
      id: 'bp-growth',
      num: 9,
      category: 'Growth',
      name: 'Growth Strategy (Scaling Revenue / Users)',
      formula: 'Growth = Organic (Ansoff: Market Penetration, Market Dev, Product Dev, Diversification + Funnel Price/Volume/Retention) + Inorganic (M&A / JVs)',
      whenToUse: 'Client has a healthy core business and wants to 2x revenue, enter new segments, or revive stagnant growth.',
      anatomy: [
        '1. Clarify exact growth target (e.g., +30% revenue in 2 years) and capital/brand constraints.',
        '2. Audit current baseline: Where does revenue come from today (segments, SKUs, channels)?',
        '3. Structure options via Ansoff Matrix: (a) Sell more to existing customers (frequency, upsell, retention), (b) New geographies/segments, (c) New adjacent products, (d) Diversification.',
        '4. Also check Inorganic options (acquire regional brand, franchise, D2C partnerships).',
        '5. Rank initiatives by Revenue Potential × Speed-to-Impact × Risk.'
      ],
      proTip: 'Increasing retention or cross-selling to existing customers is almost always 3–5x cheaper and faster than acquiring brand-new segments—highlight that early!',
      exampleIds: ['ktc-growth-tea-relaunch', 'ktc-growth-social-media', 'ktc-growth-shaving-company', 'ktc-growth-psb']
    },
    {
      id: 'bp-ma-unc',
      num: 10,
      category: 'M&A & Unconventional',
      name: 'M&A Valuation & Unconventional Puzzles',
      formula: 'M&A: Standalone Value + Revenue/Cost Synergies − Price & Integration Risk | Unconventional: First Principles Objective Equation (MECE)',
      whenToUse: 'Evaluating an acquisition/merger/demerger OR tackling non-standard strategy/policy/operations cases.',
      anatomy: [
        '1. M&A Step 1 — Strategic Rationale: Why buy vs build? (IP, distribution, talent, market consolidation).',
        '2. M&A Step 2 — Financial & Synergy Check: Target standalone profitability + Revenue synergies (cross-sell) + Cost synergies (shared supply chain/SG&A).',
        '3. M&A Step 3 — Risks & Culture: Overpaying, customer churn, regulatory antitrust, post-merger integration.',
        '4. Unconventional Step 1 — Don’t panic! Write down the real-world objective as an equation (e.g., Voter Turnout = Eligible × Registered × Motivated × Able to Reach Booth).',
        '5. Unconventional Step 2 — Map stakeholders, bottlenecks, and trade-offs from First Principles.'
      ],
      proTip: 'In Unconventional cases, interviewers deliberately test if you stay calm when no textbook framework fits. Build a 3-bucket MECE equation from scratch and you instantly pass!',
      exampleIds: ['ktc-ma-disney-star-wars', 'ktc-ma-edtech-merger', 'ktc-unc-land-usage', 'ktc-unc-women-voters']
    }
  ],

  toolkit: [
    { group: 'Thinking & Structuring', name: 'MECE Principle', summary: 'Mutually Exclusive (zero overlap) & Collectively Exhaustive (zero gaps). Foundation of every issue tree.', whenToUse: 'Every single case—verify buckets sum cleanly to 100% of the problem.' },
    { group: 'Thinking & Structuring', name: 'First Principles Thinking', summary: 'Break a complex or novel problem down to fundamental physical/economic truths and rebuild upward.', whenToUse: 'Unconventional cases, pricing twists, or when standard templates break down.' },
    { group: 'Thinking & Structuring', name: 'Fishbone (Ishikawa) Diagram', summary: 'Maps an effect/problem back to root cause categories (People, Process, Product, Tech, External, Policy).', whenToUse: 'RCA & operational bottleneck cases to ensure zero blind spots.' },
    { group: 'Thinking & Structuring', name: 'Double Diamond', summary: 'Diverge (Discover problem) → Converge (Define P0 problem) → Diverge (Develop solutions) → Converge (Deliver MVP).', whenToUse: '0-to-1 Product Design and discovery cases.' },
    { group: 'Product & Metrics', name: 'CIRCLES Method', summary: 'Comprehend situation → Identify customer → Report needs → Cut/Prioritize → List solutions → Evaluate trade-offs → Summarize.', whenToUse: 'Product Design & Product Improvement interviews.' },
    { group: 'Product & Metrics', name: 'AARRR (Pirate Metrics)', summary: 'Acquisition → Activation → Retention → Referral → Revenue across the user lifecycle.', whenToUse: 'Growth, Funnel RCA, and Product Metrics cases.' },
    { group: 'Product & Metrics', name: 'HEART Framework', summary: 'Happiness, Engagement, Adoption, Retention, Task Success — mapped to Goals → Signals → Metrics.', whenToUse: 'UX/feature quality and Google-style Product Metrics cases.' },
    { group: 'Product & Metrics', name: 'A/B & Switchback Testing', summary: 'User-level randomization for independent UX; Geo-cluster or Time-Switchback testing when users share driver/seller pools.', whenToUse: 'Experimentation design in Ride-hailing, Food Delivery, and Marketplaces.' },
    { group: 'Prioritization', name: 'RICE Scoring', summary: '(Reach × Impact × Confidence) ÷ Effort — quantifies feature/fix ranking objectively.', whenToUse: 'Ranking 4+ product roadmap features or bug fixes.' },
    { group: 'Prioritization', name: 'Impact vs Effort (2×2)', summary: 'Quick Wins (High Impact, Low Effort) → Big Bets (High/High) → Fill-ins (Low/Low) → Avoid (Low/High).', whenToUse: 'Fastest prioritization matrix to draw live in a 25-minute interview.' },
    { group: 'Prioritization', name: 'MoSCoW Method', summary: 'Must-have (MVP), Should-have, Could-have, Won’t-have (out of scope for v1).', whenToUse: 'Scoping an MVP launch under tight engineering deadlines.' },
    { group: 'Prioritization', name: 'Kano Model', summary: 'Basic expectations (must work), Performance features (more = better), Delighters (unexpected wow).', whenToUse: 'Product differentiation & feature critique cases.' },
    { group: 'Prioritization', name: 'Cost of Delay', summary: 'Economic value lost per week a feature or fix is delayed ÷ Duration to build (CD3).', whenToUse: 'Urgent RCA fixes, seasonal launches (Diwali/IPL), or B2B contracts.' },
    { group: 'Strategy & Consulting', name: 'Porter’s Five Forces', summary: 'Industry Rivalry, Threat of New Entrants, Threat of Substitutes, Buyer Power, Supplier Power.', whenToUse: 'Market Entry & Industry Attractiveness assessment.' },
    { group: 'Strategy & Consulting', name: 'PESTEL Analysis', summary: 'Political, Economic, Social, Technological, Environmental, Legal macro factors.', whenToUse: 'Cross-border expansion, healthcare/fintech regulation, EVs, policy cases.' },
    { group: 'Strategy & Consulting', name: 'Ansoff Growth Matrix', summary: 'Market Penetration, Market Development, Product Development, Diversification.', whenToUse: 'Growth Strategy cases ("How to 2x revenue in 3 years?").' },
    { group: 'Strategy & Consulting', name: 'BCG Growth-Share Matrix', summary: 'Stars (High share/growth), Cash Cows (High share/low growth), Question Marks, Dogs.', whenToUse: 'Portfolio strategy, conglomerate resource allocation, M&A.' },
    { group: 'Strategy & Consulting', name: '4Ps + 3Cs + McKinsey 7S', summary: '4Ps (Product, Price, Place, Promotion); 3Cs (Customer, Company, Competition); 7S (Strategy, Structure, Systems, Shared Values, Style, Staff, Skills).', whenToUse: 'GTM (4Ps), Strategy positioning (3Cs), and Post-Merger / Org cases (7S).' }
  ],

  firmPlaybooks: [
    { firm: 'Meesho / Flipkart / Value E-Commerce', style: 'Deeply analytical, Tier-2/3 Bharat user empathy, funnel math + unit economics.', whatTheyLookFor: 'COD vs Prepaid dynamics, RTO/RVP operational nuances, trust barriers for first-time digital buyers, and strict impact quantification.', proTip: 'Always check whether an intervention protects contribution margin and does not spike low-intent COD RTO!' },
    { firm: 'Google / Big Tech PM', style: 'Structured product sense, AI systems thinking, metric rigor, and scale trade-offs.', whatTheyLookFor: 'Clear North Star + Guardrail hierarchy, technical awareness (latency, RAG/grounding, calibration), user-first outcomes, and clean experimentation.', proTip: 'Never optimize a single metric in isolation—explicitly name 2 product trade-offs (e.g., Accuracy vs Latency) and guardrails.' },
    { firm: 'Zomato / Eternal / Blinkit / Swiggy', style: 'Hyperlocal 3-sided marketplace speed (Customer × Restaurant/Dark Store × Rider).', whatTheyLookFor: 'Peak-hour supply constraints, batching/SLA trade-offs, basket size (AOV) economics, and hyperlocal city-level segmentation.', proTip: 'Remember every hyperlocal change impacts 3 personas simultaneously—always check rider utilization and partner prep time!' },
    { firm: 'Navi / PhonePe / Fintech PM', style: 'Business-model clarity, compliance/risk awareness, funnel conversion, and experimentation rigor.', whatTheyLookFor: 'Catching subtle revenue mechanics (subscription vs take-rate vs MDR), fraud/credit risk guardrails, and network interference in A/B tests.', proTip: 'Clarify the exact revenue and cost unit economics in the first 90 seconds before proposing pricing or growth levers.' },
    { firm: 'BCG / Bain / McKinsey (MBB)', style: 'Hypothesis-driven MECE structuring, crisp arithmetic, and Pyramid Principle executive communication.', whatTheyLookFor: '20-second upfront tree, clean Volume × Price vs Fixed/Variable cost splits, commercial intuition along the value chain, and answer-first synthesis.', proTip: 'Always ask if a problem is Industry-wide or Company-specific in Profitability cases—it immediately cuts the search space in half!' },
    { firm: 'Big 4 / Kearney / LEK / ZS / Indus', style: 'Operational depth, industry-specific value chains, data interpretation, and practical implementation.', whatTheyLookFor: 'Concrete procurement/manufacturing/distribution levers, clean break-even math, healthcare/pharma/auto domain awareness, and phased roadmaps.', proTip: 'Lean on Industry Primers! Knowing key drivers (e.g., load factor & fuel in Airlines, capacity utilization in Cement/Steel) makes you sound like an insider.' }
  ],

  fatalMistakes: [
    { mistake: '1. Jumping straight into solutions in Minute 1', fix: 'Always spend 90 seconds paraphrasing, confirming the business goal, and asking 3 crisp clarifying questions.' },
    { mistake: '2. Never pausing to build a MECE structure', fix: 'Ask for 20 seconds, draw 3–4 non-overlapping buckets, and get interviewer sign-off before drilling into any single idea.' },
    { mistake: '3. Reciting textbook acronyms out loud ("Now I will do PESTEL/CIRCLES")', fix: 'Internalize frameworks silently, then present customized plain-English buckets tailored to the specific company.' },
    { mistake: '4. Solving for "everyone" in Product Design', fix: 'Pick ONE clear beachhead persona, explain why (frequency/pain/TAM), and solve their P0 pain point deeply.' },
    { mistake: '5. Skipping Data Sanity in RCA cases', fix: 'Always ask first: Sudden vs Gradual? Isolated to 1 geo/platform/cohort? Any logging/tracking change?' },
    { mistake: '6. Confusing Correlation with Causation', fix: 'Just because returning users retain more (Meesho R3) doesn’t mean forcing returns works blindly—propose an A/B experiment to prove causality!' },
    { mistake: '7. Giving a North Star Metric with zero Guardrails', fix: 'Always pair your North Star with 2 counter-metrics (e.g., Conversion vs Margin, Accuracy vs Latency/Refusal, Growth vs RTO/Spam).' },
    { mistake: '8. Ignoring Marketplace Interference in A/B Tests', fix: 'When riders/drivers/sellers are shared, user-level A/B leaks! Propose Geo-Cluster or Alternate-Day Switchback testing.' },
    { mistake: '9. Ignoring Profitability Mix & Value Chain Costs', fix: 'Profit drops come from Price, Volume, OR Product Mix shifts—and costs must be traced step-by-step across the Value Chain.' },
    { mistake: '10. Rambling chronologically instead of Pyramid Synthesis', fix: 'End every case in 30 seconds: Recommendation first → Top 2–3 numbers/facts → Key risk & mitigation.' }
  ]
};
