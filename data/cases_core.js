window.CM_DATA = window.CM_DATA || {};
window.CM_DATA.cases = window.CM_DATA.cases || [];

window.CM_DATA.cases.push(
{
  "id": "cm-core-meesho-r3-retention",
  "title": "Meesho: Increase Return-Activated Users to Boost Retention",
  "company": "Meesho",
  "track": "Product",
  "category": "RCA",
  "difficulty": 2,
  "isStarter": true,
  "tags": [
    "Retention",
    "Reverse Logistics",
    "Tier 2/3 E-Commerce",
    "COD",
    "Funnel Diagnosis"
  ],
  "prompt": "You are a Retention PM at Meesho, a value-first e-commerce platform serving Tier-2 and Tier-3 cities. Data shows activated users who have returned at least one item have higher long-term retention than activated users who never returned. How would you increase returns among activated users so retention rises?",
  "clarifyingQuestions": [
    {
      "q": "What is the overarching business goal behind increasing returns here?",
      "a": "Increase Customer Lifetime Value (LTV) by improving long-term platform retention.",
      "why": "Anchors every downstream decision to LTV rather than artificially inflating return volume or hurting unit economics."
    },
    {
      "q": "By 'return', do we mean RTO (Return to Origin on undelivered orders) or RVP (Reverse Pickup initiated by the customer after delivery)?",
      "a": "RVP—the order was delivered, and the customer initiates a return on their own.",
      "why": "Separates destructive logistics failures (RTO) from trust-building post-delivery refunds (RVP) that prove Meesho honors returns."
    },
    {
      "q": "Is this gap restricted to a specific product category, geography, or AOV band?",
      "a": "No, it holds broadly across all categories, demographics, and AOV ranges.",
      "why": "Confirms we are diagnosing a horizontal platform UX and trust bottleneck rather than a single-category defect."
    }
  ],
  "frameworkUsed": "User Journey Funnel Decomposition + Cohort Sizing + Root-Cause Prioritization",
  "coreEquation": "Non-Return Activated Users = Never Initiated (40%) + Dropped in Return Funnel (24%) + Initiated but Failed Ops (20%) + Satisfied / No Need (16%)",
  "strategyOverview": "Clarify the exact RVP user journey from Order Listing Page (OLP) → Order Details (ODP) → Return Window → Reason → Photo → Refund Instrument → Doorstep QC → Instant Refund. Slice \"Non-Return Activated Users\" into two cohorts: 80% never raised a request vs. 20% raised a request that failed. Quantify drop-off at every step to isolate the single biggest recoverable lever.",
  "tree": {
    "label": "Non-Return Activated Users (100%)",
    "valueText": "Target Cohort",
    "children": [
      {
        "label": "80% Never Completed Return Request",
        "valueText": "80% of cohort",
        "highlight": true,
        "children": [
          {
            "label": "50% of 80% Never Clicked Return CTA",
            "valueText": "40% total (awareness / window / satisfied)",
            "muted": false
          },
          {
            "label": "30% of 80% Dropped Inside Funnel",
            "valueText": "24% total",
            "highlight": true,
            "children": [
              {
                "label": "50% Dropped at Refund Instrument (UPI / Bank / Meesho Balance)",
                "valueText": "12% of ALL users (P0!)",
                "highlight": true
              },
              {
                "label": "50% Dropped on Earlier Screens (Reason / Photo / Friction)",
                "valueText": "12% split across screens"
              }
            ]
          }
        ]
      },
      {
        "label": "20% Raised Return Request but Failed",
        "valueText": "20% of cohort",
        "children": [
          {
            "label": "10% User Cancelled Before Pickup",
            "valueText": "10% of 20% = 2% total"
          },
          {
            "label": "5% Logistics Pickup Failed / Manifest Error",
            "valueText": "5% of 20% = 1% total"
          },
          {
            "label": "3% Doorstep QC Failed",
            "valueText": "3% of 20% = 0.6% total"
          }
        ]
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "Scoping",
      "speaker": "Interviewer",
      "kind": "prompt",
      "detail": "We noticed activated Meesho users who have completed at least one return retain significantly better over time than those who never returned an item. As Retention PM, how would you drive more returns among activated users to lift retention?"
    },
    {
      "phase": "Scoping",
      "speaker": "Candidate",
      "kind": "question",
      "detail": "Before structuring, I want to align on three bounds: is our North Star long-term LTV, are we strictly targeting customer-initiated RVP rather than undelivered RTO, and does this pattern hold across all categories and AOV bands?",
      "reasoning": "Distinguishing RVP from RTO ensures we only encourage trust-building post-delivery returns rather than costly logistics failures."
    },
    {
      "phase": "Structure",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "Yes—our goal is LTV via retention, we mean RVP only, and the trend holds across all categories and AOV tiers. How would you segment these Non-Return Activated Users and map their journey?"
    },
    {
      "phase": "Structure",
      "speaker": "Candidate",
      "kind": "framework",
      "detail": "I will define Non-Return Activated Users as shoppers with at least one delivered order and zero successful RVPs, then trace the 11-step RVP journey from Delivery through OLP, ODP, Return Window, Return CTA, Reason, Photo, Request, Pickup, Doorstep QC, and Instant Refund. Top-level, let's split users into those who never raised a return versus those whose initiated request failed.",
      "reasoning": "Mapping the exact 11-step reverse funnel prevents jumping to UI tweaks before sizing whether drop-offs occur in intent, initiation, or fulfillment ops."
    },
    {
      "phase": "Investigation",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "Our funnel data shows 80% of Non-Return Activated Users never successfully raised a return request, while 20% raised one that failed—10% cancelled by the user, 5% pickup failed, and 3% QC failed. Within that 80%, 50% never clicked the Return CTA and 30% started the flow but dropped off, with half of those funnel dropouts abandoning specifically on the Refund Payment Method screen.",
      "causes": [
        "80% of non-return users never completed a return request vs 20% operational/user-cancelled failures",
        "50% of in-funnel dropouts abandon on the Refund Payment Method screen"
      ]
    },
    {
      "phase": "Root Cause",
      "speaker": "Candidate",
      "kind": "root-cause",
      "detail": "Sizing that bucket makes the bottleneck unmistakable: 50% times 30% times 80% equals 12% of all Non-Return Activated Users dropping specifically on the Refund Payment Method screen, making it far larger than pickup failures at 1%. Our Tier-2 and Tier-3 COD shoppers find forward ordering effortless, but reverse checkout hits a wall when we demand UPI IDs or Bank Account plus IFSC details, or offer Meesho Balance which lacks perceived cash value.",
      "reasoning": "Multiplying step drop-offs by cohort share isolates the single 12% P0 lever instead of over-investing in 1% pickup ops edge cases.",
      "causes": [
        "12% of all non-return activated users drop at Refund Payment Method (UPI/IFSC friction)",
        "Low trust in online payouts and weak perceived cash value of Meesho Balance among COD buyers"
      ]
    },
    {
      "phase": "Solution",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "That 12% calculation is spot on. What product interventions would you ship to unlock that segment, and how would you ensure we aren't mistaking correlation for causation?"
    },
    {
      "phase": "Synthesis",
      "speaker": "Candidate",
      "kind": "synthesis",
      "detail": "First, I would launch Cash Refund at Doorstep for verified COD cohorts so buyers never need UPI or bank details to recover cash. Second, I would introduce an incentivized Meesho Balance option—say an extra ₹10 to ₹20 or 5% top-up clearly framed as instant cash on the next order. Finally, I would run an A/B test tracking 60- and 90-day repeat purchase retention against return-abuse and margin guardrails to prove causality.",
      "reasoning": "Pairing zero-friction COD cash payouts with an incentivized wallet nudge directly removes the 12% refund-instrument barrier while validating true retention lift."
    }
  ],
  "prioritization": [
    {
      "item": "Refund Instrument Friction (UPI/Bank/Balance)",
      "impact": "High (12% of cohort)",
      "effort": "Medium",
      "priority": "P0",
      "rationale": "Single steepest funnel cliff for COD-heavy Tier-2/3 users."
    },
    {
      "item": "Funnel UX Complexity (Too many steps / photo)",
      "impact": "Medium (12% spread)",
      "effort": "Low",
      "priority": "P1",
      "rationale": "Simplifying steps & making photo optional reduces early drop-off."
    },
    {
      "item": "Return Window Awareness",
      "impact": "Medium",
      "effort": "Low",
      "priority": "P1",
      "rationale": "Proactive WhatsApp/push reminder before window closes prevents silent dissatisfaction & low ratings."
    },
    {
      "item": "Reverse Pickup Ops Failures",
      "impact": "Low (1% of cohort)",
      "effort": "High",
      "priority": "P2",
      "rationale": "Important for ops health, but much smaller share of target cohort."
    }
  ],
  "recommendations": [
    "Launch Cash Refund at Doorstep (COD Reverse Payout) for trusted, verified COD cohorts so users never need UPI IDs or bank IFSC details to receive refunds.",
    "Introduce Bonus Meesho Balance (e.g., +₹15 or a 5% instant wallet top-up) with explicit 'equals real cash on your next order' framing to overcome perceived-value resistance.",
    "Run a controlled A/B experiment measuring 60- and 90-day repeat purchase retention to confirm causal LTV uplift while guarding against return abuse and logistics margin erosion."
  ],
  "metricsAndGuardrails": {
    "northStar": "Return Request Initiation → Successful RVP Completion Rate & 90-Day Repeat Purchase Retention (LTV)",
    "leading": [
      "Refund-screen drop-off rate (%)",
      "Adoption % of Cash Refund vs Meesho Balance",
      "Time-to-refund after doorstep QC"
    ],
    "guardrails": [
      "Net contribution margin / reverse logistics cost per order",
      "Fraudulent / serial return abuse rate",
      "Courier partner cash-handling discrepancy rate"
    ]
  },
  "synthesisScript": "To lift LTV via retention, I decomposed Meesho's Non-Return Activated Users and found an 80%/20% split where 12% of the entire cohort drops off specifically on the Refund Payment Method screen—stuck entering UPI or bank details after buying via COD. I recommend prioritizing P0 fixes with doorstep cash refunds for verified COD users and incentivized Meesho Balance credits, validated through a controlled experiment tracking 60/90-day repeat retention and return-abuse guardrails.",
  "interviewerTrap": "Assuming \"more returns = automatically good\" (correlation vs causation trap!). Users who returned once might simply be higher-intent shoppers who browse more. Always propose an experiment to prove causality AND add abuse/unit-economics guardrails.",
  "variations": [
    {
      "question": "What if offering Cash Refund increases courier cash-theft or fake return requests?",
      "hint": "Gate doorstep cash refund to orders under ₹500 or low-risk pincodes/users, and enforce OTP + doorstep QC photo verification."
    },
    {
      "question": "How would you reduce the 50% who never even click Return CTA?",
      "hint": "Separate genuinely satisfied users from unaware/window-expired users via post-delivery CSAT pulse & proactive return-window nudges."
    }
  ],
  "guidedPractice": {
    "correctCategory": "RCA",
    "correctFramework": "Cohort Split + End-to-End Funnel Drop-off Quantification",
    "structureOptions": [
      {
        "label": "Split cohort (Never Tried vs Funnel Drop-off vs Ops Failed) → Map 11-step Return Flow → Quantify drop-offs → Prioritize highest-% bottleneck",
        "correct": true,
        "feedback": "Exact consulting/PM precision! Quantifying each bucket turned a fuzzy retention insight into an exact 12% P0 target."
      },
      {
        "label": "Force every user to get a 20% discount coupon if they return an item",
        "correct": false,
        "feedback": "Incentivizing unnecessary returns destroys unit economics before diagnosing why legitimate returners drop off!"
      },
      {
        "label": "Analyze Meesho forward-checkout payment failures and ad CTR",
        "correct": false,
        "feedback": "The problem is specifically about post-delivery RVP returns among already-activated users, not forward checkout."
      }
    ],
    "decisionQuiz": {
      "question": "Why did 50% of funnel dropouts occur specifically at the Refund Payment Method screen?",
      "options": [
        {
          "label": "Tier-2/3 COD shoppers lack linked UPI/bank comfort and distrust Meesho Balance perceived value",
          "correct": true,
          "feedback": "Yes! Forward shopping required zero banking info (COD), so asking for bank account + IFSC on return creates a sudden trust & tech barrier."
        },
        {
          "label": "Meesho app crashes whenever users upload product photos",
          "correct": false,
          "feedback": "Data showed the spike occurred specifically on the UPI/Bank refund input step, not photo upload."
        },
        {
          "label": "Users wanted higher product prices before returning",
          "correct": false,
          "feedback": "Price sensitivity drives value-seeking, not refund screen abandonment."
        }
      ]
    }
  }
},
{
  "id": "cm-core-meesho-r4-rural-activation",
  "title": "Meesho: Improve Rural User Activation on the App",
  "company": "Meesho",
  "track": "Product",
  "category": "Product Improvement",
  "difficulty": 1,
  "isStarter": true,
  "tags": [
    "Activation",
    "Bharat / Rural Users",
    "Trust UX",
    "Vernacular",
    "First Purchase"
  ],
  "prompt": "You are a Product Manager at Meesho. Your goal is to improve the activation rate of rural users on the Meesho mobile app. How would you approach this?",
  "clarifyingQuestions": [
    {
      "q": "How do we define 'Activation' here—app install plus signup, or first completed purchase?",
      "a": "Users coming to the Meesho mobile app and completing their first purchase.",
      "why": "Anchors activation to real commerce value rather than hollow top-of-funnel registrations."
    },
    {
      "q": "Which platforms and product categories are in scope?",
      "a": "The mobile app only, across all product categories.",
      "why": "Focuses solutions on mobile UX constraints and cross-category trust signals rather than mobile web or single-vertical fixes."
    },
    {
      "q": "How are rural users currently being acquired?",
      "a": "Mainly via Facebook, Instagram, and organic channels, with organic holding the largest share.",
      "why": "Indicates users arrive through social curiosity and word of mouth rather than high-intent keyword search."
    }
  ],
  "frameworkUsed": "User Persona → Pain-Point Discovery → Impact × Frequency Matrix → Targeted Trust Solutions",
  "coreEquation": "Rural Activation Rate = (App Install/Open → Browse → Product Trust → Checkout Confidence → First Order Placed)",
  "strategyOverview": "Start with a crystal-clear structure and align with the interviewer: (1) Define Rural User Personas, (2) Map User Pain Points across discovery-to-checkout, (3) Prioritize via Impact × Frequency, (4) Design high-leverage Trust & Assisted-Commerce solutions, (5) Evaluate Trade-offs & Metrics.",
  "tree": {
    "label": "Rural App Activation Barriers",
    "valueText": "5 Pain Buckets",
    "children": [
      {
        "label": "P0: Trust in Product & Seller Quality",
        "valueText": "High Impact · High Freq",
        "highlight": true
      },
      {
        "label": "P1: Lack of Assisted Guidance (No Salesman)",
        "valueText": "High Impact · High Freq",
        "highlight": true
      },
      {
        "label": "P2: Payment Anxiety (Fear of Prepaid)",
        "valueText": "High Impact · Med Freq"
      },
      {
        "label": "P2: Language & Usability (English Barrier)",
        "valueText": "Med Impact · High Freq"
      },
      {
        "label": "P2: Returns & Refund Anxiety",
        "valueText": "Med Impact · Med Freq"
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "Scoping",
      "speaker": "Interviewer",
      "kind": "prompt",
      "detail": "As a Product Manager at Meesho, we want to improve the activation rate of rural users on our mobile app. Walk me through how you would diagnose the gap and design solutions."
    },
    {
      "phase": "Scoping",
      "speaker": "Candidate",
      "kind": "question",
      "detail": "To set clear boundaries, does activation mean completing a first purchase on the mobile app across all categories, and which acquisition channels bring most rural users into the funnel?",
      "reasoning": "Confirming first-purchase activation and social/organic acquisition reveals whether users arrive with high purchase intent or exploratory curiosity."
    },
    {
      "phase": "Structure",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "Yes—first completed order on the mobile app across all categories, with users arriving mainly from organic, Facebook, and Instagram. How would you structure your approach?"
    },
    {
      "phase": "Structure",
      "speaker": "Candidate",
      "kind": "framework",
      "detail": "I will follow a structured roadmap: first define the rural user persona, next map pain points across discovery to checkout, prioritize via an Impact by Frequency matrix, and then design solutions with clear trade-offs and metrics. Rural buyers are price-sensitive, new to e-commerce, English-averse, COD-reliant, anxious about hidden return rules, and accustomed to local shopkeepers acting as trusted guides.",
      "reasoning": "Contrasting offline shopkeeper-assisted buying with self-serve app browsing highlights why rural users stall even when prices are attractive."
    },
    {
      "phase": "Investigation",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "That persona rings true. How would you categorize their core friction points and decide which ones to tackle first?",
      "causes": [
        "Trust deficit around product quality and seller credibility ('will I get what I see?')",
        "Absence of assisted guidance causing decision fatigue without a local shopkeeper"
      ]
    },
    {
      "phase": "Root Cause",
      "speaker": "Candidate",
      "kind": "root-cause",
      "detail": "I see five MECE friction themes: product and seller trust, English language and usability, COD payment anxiety, return and refund uncertainty, and lack of assisted guidance. Scoring by Impact and Frequency puts Trust in Product and Seller as P0 and Lack of Assisted Guidance as P1, ahead of payment, returns, and language as P2 because buyers never reach checkout unless they first trust what they are viewing.",
      "reasoning": "Prioritizing trust as P0 before checkout tweaks ensures we fix the upstream psychological blocker stopping rural browsers from tapping Buy.",
      "causes": [
        "P0: Product quality & seller credibility gap on PDP",
        "P1: Decision fatigue from missing assisted-commerce cues",
        "P2: English specs, COD visibility, and unclear return terms"
      ]
    },
    {
      "phase": "Solution",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "Good prioritization. What concrete features would you ship to solve the P0 trust gap and P1 guidance gap without triggering a spike in low-intent RTO?"
    },
    {
      "phase": "Synthesis",
      "speaker": "Candidate",
      "kind": "synthesis",
      "detail": "Above the fold on the PDP, I would surface 'Meesho Verified Quality' badges alongside real buyer photo and video reviews in vernacular languages with voice or regional cues. Next to the Buy CTA, I would display upfront '100% Cash on Delivery + Easy 7-Day Free Return' trust strips with clear refund timelines, plus lightweight guidance like 'Most bought in your district' and visual fabric/size explainers. We should track First-Order Activation Rate while guarding 30-day RTO and return rates.",
      "reasoning": "Pairing social-proof vernacular media with upfront COD/return clarity builds genuine confidence while keeping RTO as a strict guardrail."
    }
  ],
  "prioritization": [
    {
      "item": "Trust in Product & Seller",
      "impact": "High",
      "effort": "Low–Medium",
      "priority": "P0",
      "rationale": "High Impact × High Frequency: if users fear getting cheated, zero checkout occurs."
    },
    {
      "item": "Lack of Assisted Guidance",
      "impact": "High",
      "effort": "Medium",
      "priority": "P1",
      "rationale": "Replaces the offline shopkeeper via guided size/fit helpers or short product videos."
    },
    {
      "item": "Payment Anxiety",
      "impact": "High",
      "effort": "Low",
      "priority": "P2",
      "rationale": "Highlighting COD upfront removes checkout fear."
    },
    {
      "item": "Language & Usability",
      "impact": "Medium",
      "effort": "Medium",
      "priority": "P2",
      "rationale": "Vernacular UI & voice search help comprehension once trust is established."
    },
    {
      "item": "Returns & Refund Anxiety",
      "impact": "Medium",
      "effort": "Low",
      "priority": "P2",
      "rationale": "Clear 3-step return timeline graphic reassures first-time buyers."
    }
  ],
  "recommendations": [
    "Surface 'Meesho Verified Quality' badges and authentic buyer photo and video reviews above the fold on Product Detail Pages (PDP).",
    "Display vernacular customer reviews alongside prominent '100% Cash on Delivery + Easy 7-Day Free Return' trust strips and refund timelines directly near the Buy CTA.",
    "Add lightweight guided-shopping cues—such as 'Most bought in your district' and simple visual size or fabric explainer cards—to replicate offline shopkeeper reassurance while tracking RTO as a guardrail."
  ],
  "metricsAndGuardrails": {
    "northStar": "Rural New-User First-Order Activation Rate (% of installs placing 1st order within 7 days)",
    "leading": [
      "PDP → Add-to-Cart conversion rate",
      "Review/Photo interaction rate on PDP",
      "Checkout COD selection & completion rate"
    ],
    "guardrails": [
      "RTO % on newly activated rural orders (avoid low-intent COD spam)",
      "Product mismatch return rate",
      "App load time on low-end 3G/4G Android devices"
    ]
  },
  "synthesisScript": "To lift rural activation on the Meesho mobile app, I anchored on the rural buyer's shift from trusted local shopkeepers to unfamiliar online listings. Using an Impact by Frequency matrix, I prioritized Trust in Product and Seller (P0) and Assisted Guidance (P1). Surfacing verified quality badges, vernacular photo/video reviews, upfront COD and 7-day return strips, and district-level guided cues directly removes first-purchase fear while protecting against low-intent RTO.",
  "interviewerTrap": "Listing 10 generic features (\"add AI chatbot, gamification, referral rewards\") without ever stating the rural user persona, prioritizing P0 vs P2, or noticing that rural shoppers rely on physical-world trust cues.",
  "variations": [
    {
      "question": "How would you solve the P1 \"Lack of Assistance\" pain point next?",
      "hint": "Add short vernacular unboxing/try-on reels, local dialect voice search, and simple \"Good for daily wear / wedding\" tags."
    },
    {
      "question": "What is the trade-off of highlighting COD too aggressively?",
      "hint": "COD increases activation but can raise RTO costs; mitigate with pin-code risk scoring or small prepaid discounts."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Product Improvement",
    "correctFramework": "Persona → Pain Points → Impact × Frequency Matrix → Targeted UX Solutions",
    "structureOptions": [
      {
        "label": "Define Rural Persona → List 5 Pain Buckets → Score Impact × Frequency → Solve P0 Trust Gap + Guardrails",
        "correct": true,
        "feedback": "Cleanest 0-to-1 PM flow! Showing your 6-step agenda upfront immediately builds interviewer confidence."
      },
      {
        "label": "Run massive TV ads in Tier-1 metros offering iPhones on discount",
        "correct": false,
        "feedback": "Wrong audience and wrong funnel stage—the prompt asks for in-app activation of rural users."
      },
      {
        "label": "Charge a ₹99 membership fee upfront before rural users can browse",
        "correct": false,
        "feedback": "Adding paywall friction to low-trust new users will crush activation to zero."
      }
    ],
    "decisionQuiz": {
      "question": "Which pain point earned P0 priority for Rural Activation and why?",
      "options": [
        {
          "label": "Trust in Product & Seller (High Impact × High Frequency) — rural buyers fear quality mismatch online",
          "correct": true,
          "feedback": "Spot on! Until a first-time rural buyer believes they will actually receive what is shown, no UI tweak or coupon converts them."
        },
        {
          "label": "Dark mode UI aesthetic preferences",
          "correct": false,
          "feedback": "Visual polish is far secondary to basic seller credibility and quality trust."
        },
        {
          "label": "Credit card EMI checkout speed",
          "correct": false,
          "feedback": "Rural Bharat shoppers overwhelmingly rely on COD, not credit card EMIs."
        }
      ]
    }
  }
},
{
  "id": "cm-core-meesho-r2-rto-rvp",
  "title": "Meesho: Reduce RTO & RVP Return Orders (Cost Reduction)",
  "company": "Meesho",
  "track": "Product",
  "category": "RCA",
  "difficulty": 2,
  "isStarter": true,
  "tags": [
    "E-Commerce Ops",
    "Cost Reduction",
    "RTO",
    "COD Risk",
    "User & Ops Flow"
  ],
  "prompt": "You are a Product Manager at Meesho. Leadership wants to investigate Return Orders—specifically RTO (Return to Origin) and RVP (Reverse Pickup). Identify what causes both and how to reduce them.",
  "clarifyingQuestions": [
    {
      "q": "What is the primary business objective behind tackling returns here?",
      "a": "Cost reduction—specifically minimizing wasted forward and reverse logistics expenditure.",
      "why": "Unlike retention cases where RVP builds trust, a cost-reduction mandate demands cutting every avoidable two-way shipment."
    },
    {
      "q": "What is our overall return rate and the split between RTO and RVP?",
      "a": "Total returns are 25% of orders: RTO is 20% and RVP is 5%.",
      "why": "Proves RTO drives 80% of all return volume (20% out of 25%), making RTO the indisputable primary focus."
    },
    {
      "q": "What is the current split between Prepaid and Cash-on-Delivery (COD) orders?",
      "a": "Prepaid accounts for 40% of orders and COD accounts for 60%.",
      "why": "Zero upfront financial commitment on 60% COD volume makes impulsive ordering and doorstep rejection nearly frictionless."
    }
  ],
  "frameworkUsed": "Pareto Scoping (80/20) + Dual Flow Mapping (Operational Flow & User Flow) + Root-Cause Matrix",
  "coreEquation": "Total Logistics Waste = Orders × [RTO% (20%) × 2-Way Shipping + RVP% (5%) × 2-Way Shipping + QC Cost]",
  "strategyOverview": "First prove with numbers why RTO gets priority (20% vs 5% = 80% of return volume). Map BOTH the Operational Flow (Order → Aggregator → Courier → Seller Pickup → Doorstep) and User Flow (Browse → PDP → ATC → Address → COD/Prepaid → Order). Break RTO causes into 4 MECE pillars (Payment Method, Logistics-Side, Platform-Side, Category-Side) and drill into Tier-2/3 user behavior.",
  "tree": {
    "label": "Total Return Orders (25% of All Orders)",
    "valueText": "Cost Reduction Goal",
    "children": [
      {
        "label": "RTO — Return to Origin (20% = 80% of Returns)",
        "valueText": "Priority #1 Focus",
        "highlight": true,
        "children": [
          {
            "label": "1. Payment Method (60% COD): Zero cost to reject + casual Tier-2/3 intent",
            "valueText": "High Impact",
            "highlight": true
          },
          {
            "label": "2. Platform-Side: No COD OTP verification, no pincode/user risk scoring",
            "valueText": "High Impact",
            "highlight": true
          },
          {
            "label": "3. Logistics-Side: Missing lat/long addresses, no pre-delivery heads-up, ETA slips",
            "valueText": "Medium Impact"
          },
          {
            "label": "4. Category-Side: Fragile SKUs damaged in transit before delivery",
            "valueText": "Targeted Impact"
          }
        ]
      },
      {
        "label": "RVP — Reverse Pickup (5% = 20% of Returns)",
        "valueText": "Secondary Focus",
        "muted": false,
        "children": [
          {
            "label": "Size/Quality Mismatch, Wrong Item, or Expectation Gap from PDP",
            "valueText": "5% of orders"
          }
        ]
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "Scoping",
      "speaker": "Interviewer",
      "kind": "prompt",
      "detail": "Leadership at Meesho is worried about rising return orders—both RTO and RVP. How would you diagnose what is driving them and bring them down?"
    },
    {
      "phase": "Scoping",
      "speaker": "Candidate",
      "kind": "question",
      "detail": "First, is our primary goal cost reduction on logistics, and could you share our overall return rate, the RTO versus RVP split, and our Prepaid versus COD share?",
      "reasoning": "Quantifying RTO versus RVP and COD share upfront immediately reveals where 80% of the logistics waste sits."
    },
    {
      "phase": "Structure",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "Our goal is logistics cost reduction. Total returns are 25% of all orders—20% RTO and 5% RVP—and 60% of orders are COD versus 40% Prepaid. How will you break down the investigation?"
    },
    {
      "phase": "Structure",
      "speaker": "Candidate",
      "kind": "framework",
      "detail": "Since RTO is 20% out of 25%—80% of total return volume—I will prioritize RTO first. I will map both the Operational Flow (Order to Aggregator, Courier Partner, Seller Pickup, and Doorstep Delivery) and the User Flow (Browse to PDP, Cart, Address, and COD/Prepaid placement), then bucket RTO drivers across four pillars: Payment Method, Logistics, Platform, and Categories.",
      "reasoning": "Mapping both the physical logistics chain and the buyer checkout flow catches mismatches between digital intent and doorstep delivery."
    },
    {
      "phase": "Investigation",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "Across those four pillars, we see missing lat/long landmark addresses, no pre-delivery alerts, ETA slips, zero pre-dispatch COD verification, and fragile SKU damage. Go deeper into low purchase intent in Tier-2 and Tier-3 cities.",
      "causes": [
        "60% COD share with zero rejection penalty enables casual browsing and doorstep refusal",
        "Missing GPS lat/long, landmark-only addresses, and missed calls from unknown courier numbers"
      ]
    },
    {
      "phase": "Root Cause",
      "speaker": "Candidate",
      "kind": "root-cause",
      "detail": "In Tier-2 and Tier-3 cities, four behaviors stand out: shoppers treat COD as a risk-free safety net due to trust gaps (P0), show high price sensitivity with low time sensitivity so longer ETAs cool impulse intent (P1), and ignore unknown courier phone numbers. Combined with unvalidated landmark addresses and no pre-dispatch COD risk check, low-intent COD orders fail cleanly at the doorstep.",
      "reasoning": "Separating operational address/communication failures from COD behavioral intent ensures we don't block good buyers with blunt COD bans.",
      "causes": [
        "P0: Trust deficit pushing buyers to use COD as a risk-free trial",
        "P1: Impulse COD orders cooling during ETA slips plus unverified high-RTO pincodes/users"
      ]
    },
    {
      "phase": "Solution",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "Makes total sense. How would you rank and execute fixes without hurting checkout conversion for legitimate COD shoppers?"
    },
    {
      "phase": "Synthesis",
      "speaker": "Candidate",
      "kind": "synthesis",
      "detail": "I recommend three targeted moves: first, deploy ML risk scoring on COD orders to trigger WhatsApp/OTP confirmation or restrict COD only for high-RTO user-pincode pairs. Second, enforce GPS pin-drop or standardized landmark validation at checkout alongside branded WhatsApp 'Out for Delivery' alerts so buyers answer courier calls. Third, offer small instant UPI prepaid discounts—cheaper than paying two-way RTO shipping—while guarding overall checkout conversion.",
      "reasoning": "Targeted risk-gated verification and prepaid nudges cut wasted two-way shipping while preserving conversion for reliable repeat COD customers."
    }
  ],
  "prioritization": [
    {
      "item": "Trust Issues / COD Default",
      "impact": "High",
      "effort": "Medium",
      "priority": "P0",
      "rationale": "Drives 60% COD volume; verify quality upfront & incentivize prepaid slightly."
    },
    {
      "item": "User Intent Filtering (COD OTP / Risk Score)",
      "impact": "Medium–High",
      "effort": "Low",
      "priority": "P1",
      "rationale": "Blocks impulse/fake COD orders before paying shipping fees."
    },
    {
      "item": "Address Quality (Lat/Long + Delivery Sync)",
      "impact": "Medium",
      "effort": "Low",
      "priority": "P1",
      "rationale": "Reduces \"address not found\" courier failures in Tier-2/3 towns."
    },
    {
      "item": "Courier Communication Gap",
      "impact": "Medium",
      "effort": "Low",
      "priority": "P2",
      "rationale": "WhatsApp/IVR verified caller ID prevents users ignoring unknown courier numbers."
    },
    {
      "item": "ETA / Time Sensitivity",
      "impact": "Medium",
      "effort": "High",
      "priority": "P2",
      "rationale": "Tier-2/3 shoppers optimize price over speed; lower priority than intent."
    }
  ],
  "recommendations": [
    "Deploy ML risk scoring on COD orders to trigger WhatsApp or OTP confirmation—and restrict COD only for high-RTO user and pincode pairs without penalizing clean repeat buyers.",
    "Enforce GPS pin-drop or standardized landmark validation at checkout and send branded WhatsApp 'Out for Delivery' alerts so buyers recognize and answer courier calls.",
    "Nudge high-intent COD buyers toward Prepaid with small instant UPI discounts, which cost far less than two-way RTO shipping, while tracking checkout conversion as a hard guardrail."
  ],
  "metricsAndGuardrails": {
    "northStar": "Net RTO Rate (%) & Logistics Cost as % of GMV",
    "leading": [
      "COD-to-Prepaid conversion share",
      "Verified address / lat-long capture rate",
      "Pre-dispatch COD confirmation rate"
    ],
    "guardrails": [
      "Gross Order Volume / Activation rate (ensure COD checks do not block genuine Tier-2/3 buyers!)",
      "Checkout drop-off rate",
      "Customer NPS / Delivery SLA"
    ]
  },
  "synthesisScript": "Because RTO accounts for 80% of Meesho's return volume (20% of all orders vs 5% RVP), cutting logistics waste starts with curbing COD-driven RTO. By separating operational gaps like missing lat/long and missed courier calls from Tier-2/3 low-intent COD behavior, I recommend rolling out risk-based COD OTP confirmation, branded WhatsApp delivery alerts, and targeted UPI prepaid nudges—while holding checkout conversion as a strict guardrail.",
  "interviewerTrap": "Blocking COD completely for everyone! COD is 60% of Meesho’s orders and the primary trust bridge in Tier-2/3 cities—blanket removal would destroy GMV. Always use risk-tiered verification instead.",
  "variations": [
    {
      "question": "How would you tackle the remaining 5% RVP without hurting customer trust?",
      "hint": "Focus on accurate sizing charts, customer photo reviews, and seller quality penalties for high mismatch SKUs."
    },
    {
      "question": "What if a high-RTO pincode has genuine loyal buyers?",
      "hint": "Score at the (User × Pincode × Category) level so repeat buyers with clean delivery history keep frictionless COD."
    }
  ],
  "guidedPractice": {
    "correctCategory": "RCA",
    "correctFramework": "Pareto Split (RTO vs RVP) + Dual Flow (Ops & User) + Behavioral Priority Matrix",
    "structureOptions": [
      {
        "label": "Quantify RTO vs RVP share → Map Ops Flow + User Flow → Split causes (Payment, Logistics, Platform, Category) → Prioritize by Impact",
        "correct": true,
        "feedback": "Textbook! Checking the 20% vs 5% split immediately prevents wasting 50% of your time on the smaller problem."
      },
      {
        "label": "Disable Cash-on-Delivery across all of India immediately",
        "correct": false,
        "feedback": "60% of Meesho orders are COD—removing it blindly crashes revenue instead of selectively filtering high-risk orders."
      },
      {
        "label": "Redesign the home page feed colors to reduce browsing",
        "correct": false,
        "feedback": "UI colors do not fix COD rejection, missing lat/long addresses, or courier call drops."
      }
    ],
    "decisionQuiz": {
      "question": "Why does mapping BOTH Operational Flow and User Flow matter in an e-commerce returns case?",
      "options": [
        {
          "label": "RTO comes from both pre-dispatch user intent (COD impulse) and post-dispatch logistics failure (bad address/missed call)",
          "correct": true,
          "feedback": "Exactly! Looking only at UI misses courier calling gaps; looking only at logistics misses COD confirmation."
        },
        {
          "label": "To make the interview longer",
          "correct": false,
          "feedback": "Dual mapping makes diagnosis faster and MECE."
        },
        {
          "label": "Because RVP happens before the courier picks up from the seller",
          "correct": false,
          "feedback": "RVP happens AFTER successful customer delivery."
        }
      ]
    }
  }
},
{
  "id": "cm-core-google-gemini-trust",
  "title": "Google PM: Fix Gemini Being \"Confident but Wrong\"",
  "company": "Google",
  "track": "Product",
  "category": "Product Metrics",
  "difficulty": 4,
  "isStarter": false,
  "tags": [
    "AI Product",
    "Trust & Calibration",
    "North Star & Guardrails",
    "A/B Testing",
    "Hallucination"
  ],
  "prompt": "You are the PM for Gemini. Users are complaining that Gemini is often confident but wrong. How would you diagnose and fix it, and how would you measure success?",
  "clarifyingQuestions": [
    {
      "q": "What error types are driving complaints—factual errors, reasoning errors, stale information, misunderstood intent, or unsupported claims?",
      "a": "Assume a measurable rise in high-confidence incorrect answers across important Gemini journeys.",
      "why": "Separates retrieval freshness failures from base-model reasoning, intent parsing, or tone calibration gaps."
    },
    {
      "q": "Which user journeys are most affected—Q&A, research, coding, planning, multimodal, or agentic actions?",
      "a": "It is cross-cutting across high-value journeys, especially as Gemini becomes more agentic.",
      "why": "Consequential and agentic tasks demand stricter severity weighting than casual brainstorming."
    },
    {
      "q": "How is 'confident' measured—calibrated model uncertainty, user perception, or both—and what are our core constraints?",
      "a": "Reduce harmful confident errors without making Gemini overly hesitant, slow, or expensive.",
      "why": "Establishes the central trade-offs between Accuracy vs Latency and Confidence vs Usefulness upfront."
    }
  ],
  "frameworkUsed": "End-to-End AI Response Funnel + Metric Hierarchy (L0/L1/Diagnostic) + 6-Cut Root-Cause Matrix + Guardrailed Experimentation",
  "coreEquation": "Trusted Task Success = Correct & Useful Response × Appropriately Calibrated Confidence × Zero Downstream Failure Signal",
  "strategyOverview": "Reframe \"confident but wrong\" from a pure model-quality bug into an end-to-end AI system trust failure across 6 stages: Intent → Context → Retrieval/Tools → Reasoning → Presentation → Action. Define a balanced North Star (\"Trusted Task Success\") + Diagnostic Metric (\"High-Confidence Error Rate\") so the team doesn’t game accuracy by refusing everything. Segment data across 6 cuts, match interventions to root cause, and specify A/B guardrails.",
  "tree": {
    "label": "Where AI Trust Breaks (End-to-End Pipeline)",
    "valueText": "6 System Failure Points",
    "children": [
      {
        "label": "1. Intent & Context: Ambiguous query or missing conversation/user context",
        "valueText": "Ask clarifying Qs"
      },
      {
        "label": "2. Knowledge / Grounding: Weak, stale, or irrelevant retrieved sources",
        "valueText": "Improve RAG / Freshness",
        "highlight": true
      },
      {
        "label": "3. Model Reasoning: Plausible but unsupported multi-step inference",
        "valueText": "Eval sets + intermediate checks"
      },
      {
        "label": "4. Confidence Calibration & Presentation: Uncertainty hidden behind decisive tone",
        "valueText": "Uncertainty-aware UX + citations",
        "highlight": true
      },
      {
        "label": "5. Agentic Action: Incorrect output triggers real-world consequential task",
        "valueText": "Confirmation / escalation gates"
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "Scoping",
      "speaker": "Interviewer",
      "kind": "prompt",
      "detail": "Users are increasingly complaining that Gemini sounds confident even when it is wrong. As PM for Gemini, how would you diagnose the root causes, fix the experience, and measure success?"
    },
    {
      "phase": "Scoping",
      "speaker": "Candidate",
      "kind": "question",
      "detail": "Before jumping into solutions, I want to clarify whether complaints span factual, stale, or reasoning errors across high-stakes journeys like coding and agentic actions, and confirm our guardrails around latency, cost, and avoiding overly hesitant responses.",
      "reasoning": "Scoping error severity by journey prevents applying heavy refusal or latency penalties to low-risk creative queries."
    },
    {
      "phase": "Structure",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "Yes—treat this as a cross-cutting rise in high-confidence wrong answers across high-value journeys, and we must avoid making Gemini slow, costly, or timid. How do you frame the problem and metrics?"
    },
    {
      "phase": "Structure",
      "speaker": "Candidate",
      "kind": "framework",
      "detail": "A confident wrong answer isn't just a model bug; it is a system-level trust failure across six stages: Intent, Context, Retrieval/Tools, Reasoning, Presentation, and Action. For measurement, I wouldn't optimize 'fewer wrong answers' alone—instead I'd set Trusted Task Success as our North Star, backed by L0 metrics (Trust, Task Completion, Severity-weighted Error Rate, Safety, Latency/Cost), L1 indicators (Groundedness, Regeneration rate, Follow-up clarification, Citation clicks), and High-Confidence Error Rate as our key diagnostic.",
      "reasoning": "Pairing Trusted Task Success with High-Confidence Error Rate stops teams from gaming accuracy simply by refusing ambiguous prompts."
    },
    {
      "phase": "Investigation",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "Solid metric hierarchy. How would you slice the data to pinpoint where these confident errors are actually coming from?",
      "causes": [
        "System-wide disconnect between user intent, retrieved evidence, model reasoning, and presented certainty"
      ]
    },
    {
      "phase": "Root Cause",
      "speaker": "Candidate",
      "kind": "root-cause",
      "detail": "I would segment failures across six cuts—Intent, User cohort, Model/routing version, Evidence freshness/tool success, Failure type, and Severity—and rank segments by Error Exposure times Severity times User Impact. That isolates the exact mechanism: for instance, a spike on current-events queries points to Search/Workspace retrieval freshness rather than base model weights, whereas fluent assertions without evidence point to calibration and UX gaps.",
      "reasoning": "Six-cut segmentation prevents blanket prompt disclaimers by mapping each failure cluster to retrieval, reasoning, or calibration.",
      "causes": [
        "Grounding/retrieval freshness gaps in time-sensitive and tool-backed queries",
        "Multi-step reasoning slips on complex coding/planning flows",
        "Tone miscalibration presenting weak evidence with authoritative UX certainty"
      ]
    },
    {
      "phase": "Solution",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "Once you isolate those buckets, what targeted fixes would you ship and what trade-offs would you watch in A/B testing?"
    },
    {
      "phase": "Synthesis",
      "speaker": "Candidate",
      "kind": "synthesis",
      "detail": "I would match interventions to root cause: tighten Search and Workspace RAG grounding with inline verifiable citations for factual/freshness gaps, add multi-step verification for reasoning tasks, and deploy uncertainty-aware UX plus clarifying questions on high-risk ambiguity instead of blanket disclaimers. In A/B tests, we must balance Accuracy vs Latency, Confidence vs Usefulness, and Grounding vs Coverage by holding refusal rate, task completion, and abandonment as hard guardrails.",
      "reasoning": "Targeted RAG, verification, and calibrated UX solve each failure mode cleanly while guardrails protect helpfulness and speed."
    }
  ],
  "prioritization": [
    {
      "item": "High-Severity Grounding / Freshness Errors",
      "impact": "High",
      "effort": "Medium",
      "priority": "P0",
      "rationale": "Priority formula: Affected Users × Error Severity × Preventable Share × Intervention Impact."
    },
    {
      "item": "Confidence Calibration & Verifiable Citations UX",
      "impact": "High",
      "effort": "Low–Medium",
      "priority": "P0",
      "rationale": "Lets users spot uncertainty and verify claims without blanket refusal."
    },
    {
      "item": "Ambiguous Intent Clarification Gates",
      "impact": "Medium",
      "effort": "Low",
      "priority": "P1",
      "rationale": "Asking 1 crisp question prevents confident wrong answers on underspecified prompts."
    },
    {
      "item": "Multi-Step Reasoning Intermediate Checks",
      "impact": "Medium",
      "effort": "High",
      "priority": "P2",
      "rationale": "Adds inference cost & latency; reserve for high-risk coding/planning tasks."
    }
  ],
  "recommendations": [
    "Adopt 'Trusted Task Success' as the North Star paired with severity-weighted High-Confidence Error Rate so teams cannot win experiments merely by refusing prompts.",
    "Route time-sensitive and consequential queries through stricter Search and Workspace RAG grounding with inline verifiable citations and multi-step verification.",
    "A/B test uncertainty-aware UX and clarifying prompts on high-confidence error segments—avoiding blanket disclaimers—while enforcing latency, refusal rate, and task-completion guardrails."
  ],
  "metricsAndGuardrails": {
    "northStar": "Trusted Task Success (% of tasks materially correct, appropriately calibrated, and acted upon without correction/failure)",
    "leading": [
      "High-Confidence Error Rate (sliced by severity & intent)",
      "Factuality / Groundedness eval score",
      "Regeneration / \"Wrong answer\" feedback rate",
      "Citation verification click rate"
    ],
    "guardrails": [
      "Unnecessary refusal / hedge rate",
      "Response latency (p95) & inference cost per query",
      "Task completion & repeat retention"
    ]
  },
  "synthesisScript": "Gemini sounding confident while wrong is an end-to-end system trust failure spanning intent, context, retrieval, reasoning, presentation, and action—not just model weights. I recommend measuring success via Trusted Task Success and severity-weighted High-Confidence Error Rate, slicing errors across six cuts to separate grounding, reasoning, and calibration gaps, and A/B testing targeted RAG citations and uncertainty-aware UX under strict latency and completion guardrails.",
  "interviewerTrap": "Optimizing \"fewer wrong answers\" alone! A model that responds \"I cannot be sure about that\" to 40% of queries drops wrong answers dramatically while destroying usefulness and user trust.",
  "variations": [
    {
      "question": "Trusted Task Success suddenly drops 4% week-over-week. How do you debug it?",
      "hint": "Check task mix shift → isolate high-confidence error spike → check recent model/routing rollouts, retrieval tool outages, eval-set changes, or seasonality."
    },
    {
      "question": "How does this change for agentic actions (sending emails, booking, editing files)?",
      "hint": "Raise the verification threshold and require explicit user confirmation before irreversible actions when confidence is below threshold."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Product Metrics",
    "correctFramework": "AI Pipeline Mapping + North Star & Counter-Metrics + 6-Cut Segmentation + A/B Guardrails",
    "structureOptions": [
      {
        "label": "Map AI Response Funnel → Define Trusted Task Success + Guardrails → Segment via 6 Cuts → Match Root-Cause Fixes → A/B Test",
        "correct": true,
        "feedback": "Google-caliber PM structure! Balances product judgment, technical depth across RAG/model/UX, and metric rigor."
      },
      {
        "label": "Add a permanent banner saying \"Gemini may be wrong\" under every single reply",
        "correct": false,
        "feedback": "Generic disclaimers cause banner blindness and hurt trust even when answers are well-grounded."
      },
      {
        "label": "Retrain the entire foundation model from scratch before checking logs",
        "correct": false,
        "feedback": "Diagnose first! Many confident errors stem from stale retrieval, tool failures, or ambiguous prompts rather than base weights."
      }
    ],
    "decisionQuiz": {
      "question": "Why must \"Unnecessary Refusal Rate\" be a strict guardrail when fixing AI hallucinations?",
      "options": [
        {
          "label": "Because a model can trivially minimize wrong answers by hedging or refusing useful queries, ruining task completion",
          "correct": true,
          "feedback": "Exactly! Confidence vs Usefulness is the central AI calibration trade-off."
        },
        {
          "label": "Because refusals increase server GPU temperature",
          "correct": false,
          "feedback": "It is a user value and product utility trade-off."
        },
        {
          "label": "Because Google Search does not support citations",
          "correct": false,
          "feedback": "Search grounding explicitly enables verifiable citations."
        }
      ]
    }
  }
},
{
  "id": "cm-core-navi-namma-yatri-pricing",
  "title": "Navi PM: Should Namma Yatri Raise Prices to Match Competitors?",
  "company": "Namma Yatri",
  "track": "Product",
  "category": "Pricing",
  "difficulty": 3,
  "isStarter": true,
  "tags": [
    "Two-Sided Marketplace",
    "Pricing Strategy",
    "Business Model",
    "Geo/Switchback A/B Test"
  ],
  "prompt": "You are a PM at Namma Yatri. The business team has proposed increasing ride prices to match competitors like Ola, Uber, and Rapido. Should we do it? If yes, how should we implement and test it?",
  "clarifyingQuestions": [
    {
      "q": "What is the primary business goal behind the proposal to match competitor prices?",
      "a": "To increase Namma Yatri's platform revenue.",
      "why": "You must map the exact monetization mechanism before assuming higher rider fares translate into platform revenue."
    },
    {
      "q": "How does Namma Yatri monetize rides—a per-ride commission or a fixed driver subscription?",
      "a": "Zero commission! Drivers keep 100% of the fare and pay a small fixed daily subscription fee.",
      "why": "Crucial business-model twist: higher fares go to drivers, so platform revenue only rises if better earnings bring more drivers online on more days."
    },
    {
      "q": "Which vehicle modes are in scope, how much cheaper are we today, and what share of searches fail to find a driver?",
      "a": "Both autos and cabs; we are 20–30% cheaper than rivals, and ~30% of peak-hour searches get no driver versus <10% during non-peak hours.",
      "why": "Proves Namma Yatri is supply-constrained during peak hours (~30% unfulfilled) but demand-elastic off-peak (<10% unfulfilled)."
    }
  ],
  "frameworkUsed": "Business Model Mechanics + Two-Sided Rider/Driver Funnel + Supply-Constrained Pricing + Interference-Safe Experimentation",
  "coreEquation": "Platform Revenue = Active Subscribed Drivers × Active Days Online (Driven by Driver Earnings & Ride Fulfillment)",
  "strategyOverview": "Spot the business-model twist first: Namma Yatri charges drivers a flat daily fee, zero commission. Thus, raising rider fares only boosts revenue if it solves a supply bottleneck (\"no driver found\") and attracts more active driver-days. Map the 6-step rider journey to show opposing effects at Step 3–4 (rider conversion drops) vs Step 5 (driver acceptance rises). Recommend selective Peak Demand Multiplier capped below rivals—rejecting blanket hikes, wealth-based pricing, or naive user-level A/B tests.",
  "tree": {
    "label": "Should Namma Yatri Increase Prices?",
    "valueText": "Yes — Peak Only, Capped",
    "children": [
      {
        "label": "Peak Hours (30% Searches Fail — Supply Constrained)",
        "valueText": "Apply Capped Multiplier (e.g. ≤1.3x)",
        "highlight": true,
        "children": [
          {
            "label": "Higher driver payout → More drivers online & accepting → More completed rides → Higher subscription revenue",
            "valueText": "Revenue UP",
            "highlight": true
          },
          {
            "label": "Keep final price slightly below Ola/Uber/Rapido + show upfront (\"High demand right now\")",
            "valueText": "Retain price advantage"
          }
        ]
      },
      {
        "label": "Non-Peak Hours (<10% Fail — Enough Drivers)",
        "valueText": "Keep Prices Unchanged",
        "children": [
          {
            "label": "Price hike here only pushes comparison-shopping riders to rivals",
            "valueText": "Avoid demand loss"
          }
        ]
      },
      {
        "label": "Rejected Ideas (Fairness & Trust Guardrail)",
        "valueText": "Do NOT Do",
        "muted": true,
        "children": [
          {
            "label": "No charging more in rich areas or to loyal repeat users",
            "valueText": "Destroys fair-pricing trust"
          }
        ]
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "Scoping",
      "speaker": "Interviewer",
      "kind": "prompt",
      "detail": "The business team at Namma Yatri wants to raise ride prices to match Ola, Uber, and Rapido. Should we do it, and if so, how should we roll it out and test it?"
    },
    {
      "phase": "Scoping",
      "speaker": "Candidate",
      "kind": "question",
      "detail": "Before deciding, I want to verify our business goal and monetization model: are we aiming to grow platform revenue, do we charge zero commission with a flat daily driver fee, and how do our prices and 'no driver found' rates compare across peak and non-peak hours?",
      "reasoning": "Checking the monetization mechanic first prevents the classic mistake of assuming higher fares automatically lift platform take-rate."
    },
    {
      "phase": "Structure",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "Our goal is revenue growth. Namma Yatri takes 0% commission—drivers keep 100% of the fare and pay a flat daily subscription fee. Across autos and cabs, we are 20–30% cheaper than rivals, and about 30% of peak searches fail to find a driver compared to under 10% off-peak."
    },
    {
      "phase": "Structure",
      "speaker": "Candidate",
      "kind": "framework",
      "detail": "That zero-commission model changes everything: Platform Revenue equals Active Subscribed Drivers times Active Days Online. Extra fare goes straight to drivers, so higher prices only grow our revenue if they solve supply shortages and attract more active driver-days. Mapping the two-sided journey, higher fares hurt rider conversion at Price View and Confirm (Steps 3–4) because riders compare 2–3 apps, but boost driver acceptance at Step 5.",
      "reasoning": "Separating Steps 3–4 rider price elasticity from Step 5 driver acceptance isolates exactly when higher fares help versus hurt."
    },
    {
      "phase": "Investigation",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "Right—so given 30% unfulfilled searches at peak versus under 10% off-peak, what is your pricing verdict?",
      "causes": [
        "0% commission model ties platform revenue strictly to active subscribed driver-days",
        "30% peak search failure rate shows severe driver supply constraint vs <10% off-peak"
      ]
    },
    {
      "phase": "Root Cause",
      "speaker": "Candidate",
      "kind": "root-cause",
      "detail": "It is a conditional yes—no blanket hike, only a selective Peak Demand Multiplier. Off-peak supply is healthy under 10% failure, so raising off-peak fares would just lose price-comparing riders. During peak rush, rain, or empty-return long trips, a transparent multiplier capped around 1.3x—while staying slightly below Ola, Uber, and Rapido—improves driver earnings, cuts the 30% fulfillment failure, and drives more subscribed driver-days.",
      "reasoning": "Targeting only supply-constrained peak hours unlocks driver subscriptions while preserving Namma Yatri's affordable brand identity off-peak.",
      "causes": [
        "Blanket price hike would destroy off-peak rider conversion without adding supply",
        "Capped ≤1.3x peak/rain/long-trip multiplier directly attacks the 30% peak driver-shortage bottleneck"
      ]
    },
    {
      "phase": "Solution",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "Two quick probes: why shouldn't we charge more in wealthier neighborhoods or to frequent loyal riders, and can we run a quick 20/80 user-level A/B test to validate this?"
    },
    {
      "phase": "Synthesis",
      "speaker": "Candidate",
      "kind": "synthesis",
      "detail": "We must reject both! Penalizing loyal users destroys trust if discovered, wealth-based pricing clashes with our fair-pricing identity, and genuine demand-supply multipliers already price busy zones naturally. Also, a 20/80 user-level A/B test fails due to marketplace network interference: shared drivers would cherry-pick the 20% higher-fare rides and starve the 80% control group. Instead, we should run a 4-week Geo-Cluster or Alternate-Day Switchback test tracking subscription revenue, active driver-days, fulfillment rate, and rider conversion.",
      "reasoning": "Geo-clusters or switchback testing eliminate shared-driver spillover so we measure true net marketplace lift."
    }
  ],
  "prioritization": [
    {
      "item": "Peak-Hour Capped Multiplier (1.3x max)",
      "impact": "High",
      "effort": "Medium",
      "priority": "P0",
      "rationale": "Directly unlocks the 30% unfulfilled peak demand without losing price leadership."
    },
    {
      "item": "Empty-Return / Rain Demand Signals",
      "impact": "Medium",
      "effort": "Medium",
      "priority": "P1",
      "rationale": "Targets specific trips drivers routinely reject today."
    },
    {
      "item": "Geo-Split / Switchback 4-Week Test",
      "impact": "High",
      "effort": "Low",
      "priority": "P0",
      "rationale": "Eliminates shared-driver cannibalization bias in A/B measurements."
    },
    {
      "item": "Blanket Non-Peak Hike / Loyalty Discrimination",
      "impact": "Negative",
      "effort": "Low",
      "priority": "Reject",
      "rationale": "Hurts rider retention and brand trust with zero supply upside."
    }
  ],
  "recommendations": [
    "Reject a blanket price hike; leave non-peak pricing untouched where driver supply is already healthy (<10% unfulfilled searches).",
    "Launch a transparent, capped Demand Multiplier (e.g., ≤1.3x) strictly during peak hours, rain/events, and empty-return long routes—always staying slightly below Ola, Uber, and Rapido, and never charging by user loyalty or neighborhood wealth.",
    "Validate via a 4-week Geo-Cluster or Alternate-Day Switchback experiment (never a user-level split) tracking driver subscription revenue, active driver-days, fulfillment rate, and booking conversion."
  ],
  "metricsAndGuardrails": {
    "northStar": "Subscription Revenue (Active Subscribed Drivers × Days Online) & Completed Rides per Area",
    "leading": [
      "% of searches getting a driver (fulfillment rate)",
      "Driver earnings/hr & hours online",
      "Search → Booking conversion rate"
    ],
    "guardrails": [
      "Rider 4-week retention & app store rating",
      "Price complaints & post-accept cancellations",
      "Conversion drop kept within acceptable threshold (a few %)"
    ]
  },
  "synthesisScript": "Because Namma Yatri charges drivers a flat daily fee with 0% commission, higher fares only grow platform revenue if they attract more active driver-days. Peak hours suffer a 30% driver-shortage failure rate while non-peak stays under 10%, so I recommend a transparent, capped demand multiplier (≤1.3x) strictly for peak, rain, and empty-return trips—staying under rivals and rejecting loyalty or wealth pricing—tested via a 4-week geo-cluster or switchback experiment to avoid shared-driver spillover.",
  "interviewerTrap": "Two classic PM traps in one case: (1) Thinking higher fares directly increase Namma Yatri revenue per ride (forgetting the zero-commission subscription model!), and (2) Proposing a standard user-level A/B test in a shared-driver two-sided marketplace!",
  "variations": [
    {
      "question": "What if competitors cut prices in response during peak hours?",
      "hint": "Monitor competitor price index daily and rely on higher driver fulfillment + zero-commission loyalty so drivers prefer Namma Yatri first."
    },
    {
      "question": "How do you handle driver cancellations even after dynamic pricing?",
      "hint": "Show upfront drop location + transparent payout and reward streak completion for peak-hour acceptance."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Pricing",
    "correctFramework": "Business Model Mechanics → Two-Sided Supply/Demand Elasticity → Conditional Pricing + Switchback Test",
    "structureOptions": [
      {
        "label": "Verify Revenue Model (Daily Sub) → Compare Peak vs Off-Peak Fulfillment → Apply Capped Peak Multiplier → Geo/Switchback Test",
        "correct": true,
        "feedback": "Masterclass! Linking pricing directly to driver supply constraints and marketplace A/B interference wins offers."
      },
      {
        "label": "Raise prices 30% at all hours and test with a 20/80 random user A/B split",
        "correct": false,
        "feedback": "Hurts non-peak bookings where supply is ample, AND user-level A/B fails due to shared drivers!"
      },
      {
        "label": "Charge affluent neighborhoods 2x more because they have higher willingness to pay",
        "correct": false,
        "feedback": "Violates Namma Yatri’s fair-pricing trust and brand equity."
      }
    ],
    "decisionQuiz": {
      "question": "Why does a random 20% Test / 80% Control user-level A/B test give invalid results in ride-hailing pricing?",
      "options": [
        {
          "label": "Network interference: both rider groups share the same drivers, who cherry-pick higher-paying Test rides and starve Control",
          "correct": true,
          "feedback": "Spot on! Always use geo-cluster or time-switchback experiments in shared-supply marketplaces."
        },
        {
          "label": "Users cannot open two apps on Android",
          "correct": false,
          "feedback": "Riders routinely compare apps; the bias comes from shared driver supply."
        },
        {
          "label": "Subscription fees cannot be measured weekly",
          "correct": false,
          "feedback": "Daily driver subscriptions are easily tracked daily."
        }
      ]
    }
  }
}
);
