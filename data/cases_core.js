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
  "prompt": "You are a Retention PM at Meesho (a value-first e-commerce platform in Tier-2/3 cities). Data shows activated users who have returned at least one item have higher long-term retention than activated users who never returned. How would you increase returns among activated users so retention rises?",
  "clarifyingQuestions": [
    {
      "q": "What is the overarching business goal here?",
      "a": "Increase Customer Lifetime Value (LTV) by improving long-term platform retention.",
      "why": "Anchors every downstream decision to LTV rather than artificially inflating return rates."
    },
    {
      "q": "By \"return\", do you mean RTO (Return to Origin / undelivered) or RVP (Reverse Pickup initiated by customer after delivery)?",
      "a": "RVP — the order was delivered to the customer, and the customer initiates a return on their own.",
      "why": "RTO is a logistics/intent failure (bad for cost), whereas successful RVP builds trust that Meesho honors refunds!"
    },
    {
      "q": "Is this trend restricted to a specific product category, geography, or AOV band?",
      "a": "No — it holds broadly across all categories, demographics, and AOV ranges.",
      "why": "Confirms this is a platform-wide horizontal UX/trust issue rather than a single category defect."
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
      "phase": "1. Clarify & Define Cohorts",
      "speaker": "Candidate",
      "prompt": "Define Business Goal, RVP vs RTO, and Exact User Segments",
      "detail": "Defined Non-Return Activated Users (≥1 delivered order, 0 successful RVP) vs Return-Activated Users (≥1 delivered, ≥1 successful RVP). Confirmed the 11-step user journey from Delivery → OLP → ODP → Return Window → Return CTA → Reason → Photo → Request → Pickup → Doorstep QC → Instant Refund."
    },
    {
      "phase": "2. Quantify Cohort Split",
      "speaker": "Interviewer",
      "prompt": "Reveal Top-Level Funnel Split",
      "detail": "80% of Non-Return Activated Users never successfully raised a return request; 20% raised a request that failed (10% user cancelled, 5% pickup failed, 3% QC failed)."
    },
    {
      "phase": "3. Persona & Friction Analysis",
      "speaker": "Candidate",
      "prompt": "Diagnose Tier-2/3 Persona in the 80% Cohort",
      "detail": "Persona: Tier-2/3, value-seeking, less tech-savvy, defaults to Cash-on-Delivery (COD), low trust in online payments. Forward order flow is easy via COD, but reverse flow asks for UPI ID or Bank Account + IFSC (or Meesho Balance, which lacks perceived cash value)."
    },
    {
      "phase": "4. Locate Peak Funnel Drop-Off",
      "speaker": "Interviewer",
      "prompt": "Reveal Sub-Funnel Numbers Inside the 80%",
      "detail": "Out of the 80%: 50% never tried clicking Return CTA, and 30% started but dropped off—with 50% of those funnel dropouts happening specifically on the Refund Payment Method screen (UPI/Bank details)."
    },
    {
      "phase": "5. Size Buckets & Prioritize",
      "speaker": "Candidate",
      "prompt": "Calculate Impact Share & Pick P0",
      "detail": "Refund Instrument friction = 50% × 30% × 80% = 12% of ALL non-return activated users (single largest concentrated drop-off!). Prioritize this P0 over pickup service quality (1%) or general UI friction."
    },
    {
      "phase": "6. Solutions & Experimentation",
      "speaker": "Candidate",
      "prompt": "Propose COD Refund & Incentivized Meesho Balance",
      "detail": "1) Offer Cash-on-Delivery (doorstep cash refund) at pickup for COD buyers. 2) Offer a small bonus (e.g., extra ₹10–20 or 5% top-up) on Meesho Balance refunds to overcome perceived-value resistance. Validate via A/B test that return-activated retention uplift holds causally (correlation vs causation check!)."
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
    "Launch Cash Refund at Doorstep (COD Reverse Payout) for trusted/verified COD cohorts so users never need UPI/IFSC to get money back.",
    "Introduce Bonus Meesho Balance (e.g., +₹15 or instant wallet credit) with clear \"equals real cash on next order\" framing to lift perceived value.",
    "Run a controlled experiment specifically tracking whether nudging a user into an easy first return causally increases 60/90-day repeat purchase retention (guarding against spurious correlation and return abuse)."
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
  "synthesisScript": "To boost LTV via retention, I decomposed Non-Return Activated Users and found the single largest concentrated drop-off (12% of the entire cohort) occurs on the Refund Instrument screen—where Tier-2/3 COD shoppers get stuck entering UPI or bank details. I recommend prioritizing P0 fixes: doorstep cash refunds and incentivized Meesho Balance credits, while A/B testing to confirm that easier returns causally lift long-term retention without spiking return abuse.",
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
      "q": "How do we define \"Activation\" here? Is it app install + first completed purchase?",
      "a": "Yes, users coming to the Meesho app and making their first purchase.",
      "why": "Separates top-of-funnel install/signup from actual commerce activation."
    },
    {
      "q": "Which platform and product categories are in scope?",
      "a": "Mobile App only, across all product categories.",
      "why": "Keeps solutions focused on mobile UX rather than mobile web or a single category."
    },
    {
      "q": "How are rural users currently being acquired?",
      "a": "Mainly Facebook, Instagram, and organic channels (organic has the highest share).",
      "why": "Indicates users arrive with curiosity/social proof rather than deep search intent."
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
      "phase": "1. Clarify & State Roadmap",
      "speaker": "Candidate",
      "prompt": "Confirm Definition & Present 6-Step Plan",
      "detail": "Confirmed Activation = first app purchase across all categories. Stated upfront roadmap: User Personas → Pain Points → Prioritization → Solutions → Trade-offs → Metrics (interviewer approved immediately)."
    },
    {
      "phase": "2. Build Rural User Persona",
      "speaker": "Candidate",
      "prompt": "Contrast Offline Shopping Habits vs App Reality",
      "detail": "Rural users are price-sensitive, new to e-commerce, less tech-savvy, English-averse (prefer vernacular), prefer Cash-on-Delivery, fear hidden return rules, and are used to local shopkeepers acting as trusted guides."
    },
    {
      "phase": "3. Categorize 5 Core Pain Points",
      "speaker": "Candidate",
      "prompt": "Group Friction into Clear MECE Themes",
      "detail": "1) Trust (quality/seller credibility, \"will I get what I see?\"), 2) Language & Usability (size charts, specs in English), 3) Payment Anxiety (COD comfort), 4) Returns & Refunds uncertainty, 5) Lack of Assisted Guidance (decision fatigue without a salesperson)."
    },
    {
      "phase": "4. Prioritize via Impact × Frequency",
      "speaker": "Candidate",
      "prompt": "Rank Pain Points P0 to P2",
      "detail": "Ranked \"Trust in Product/Seller\" as P0 (High Impact, High Frequency) and \"Lack of Assistance\" as P1, ahead of Payment, Returns, and Language (P2)."
    },
    {
      "phase": "5. Solve the P0 Trust Gap",
      "speaker": "Candidate",
      "prompt": "Design Concrete Trust-Building Product Features",
      "detail": "1) Verified Seller / Quality Checked Badges, 2) Real Customer Photo & Video Reviews, 3) Vernacular Reviews & voice/regional cues so platform feels relatable, 4) Prominent \"Easy 7-Day Return Guarantee\" + Clear Refund Timeline, 5) COD Badge displayed upfront on product cards & PDP."
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
    "Surface \"Meesho Verified Quality\" badges and real buyer video/photo reviews right above the fold on Product Detail Pages (PDP).",
    "Show vernacular customer reviews and \"100% Cash on Delivery + Easy 7-Day Free Return\" trust strips directly near the Buy CTA.",
    "Add lightweight guided shopping cues (e.g., \"Most bought in your district\" / simple size/fabric explainer cards) to mimic offline shopkeeper reassurance."
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
  "synthesisScript": "To lift rural activation on the Meesho app, I anchored on the rural buyer’s transition from trusted local shopkeepers to unfamiliar online listings. Using an Impact × Frequency matrix, I prioritized Trust in Product & Seller (P0) and Assisted Guidance (P1). Implementing verified seller badges, vernacular photo/video reviews, and prominent upfront COD + clear return guarantees directly neutralizes first-purchase fear while protecting against low-intent RTO.",
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
  "prompt": "You are a PM at Meesho. Leadership wants to investigate Return Orders—specifically RTO (Return to Origin) and RVP (Reverse Pickup). Identify what causes both and how to reduce them.",
  "clarifyingQuestions": [
    {
      "q": "What is the primary business goal behind tackling returns?",
      "a": "Cost reduction (minimizing wasted forward + reverse logistics expenditure).",
      "why": "In R3, the goal was LTV/retention via RVP; here the goal is cost reduction, completely changing how we prioritize!"
    },
    {
      "q": "What is our overall return rate and the split between RTO and RVP?",
      "a": "Total Returns = 25% of orders: RTO = 20%, RVP = 5%.",
      "why": "RTO drives 80% of all returns (20% out of 25%), making RTO the indisputable #1 focus!"
    },
    {
      "q": "What is the share of Prepaid vs Cash-on-Delivery (COD) orders?",
      "a": "Prepaid = 40%, COD = 60%.",
      "why": "Zero financial commitment on COD makes casual browsing and doorstep rejection effortless."
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
      "phase": "1. Scope & Pareto Split",
      "speaker": "Candidate",
      "prompt": "Confirm Goal (Cost) & Quantify RTO vs RVP",
      "detail": "Established goal = Cost Reduction. Uncovered 25% total returns = 20% RTO + 5% RVP → immediately prioritized RTO (80% of total return burden)."
    },
    {
      "phase": "2. Dual Flow Mapping",
      "speaker": "Candidate",
      "prompt": "Verify Operational & User Journeys",
      "detail": "Ops Flow: Order → Courier Aggregator → Courier Partner → Seller Pickup → Doorstep Delivery. User Flow: Browse → Category → PDP → ATC → Cart → Address → COD/Prepaid → Placement. Asked Prepaid vs COD split (40% vs 60%)."
    },
    {
      "phase": "3. 4-Pillar RTO Diagnosis",
      "speaker": "Candidate",
      "prompt": "Bucket Causes Across Payment, Logistics, Platform, Categories",
      "detail": "Identified COD zero-rejection penalty, missing lat/long + landmark-only addresses, no pre-delivery heads-up, ETA slips cooling intent, no pre-dispatch COD verification/risk scoring, and fragile SKU damage."
    },
    {
      "phase": "4. Behavioral Deep-Dive",
      "speaker": "Interviewer",
      "prompt": "\"Go deeper into low purchase intent in Tier-2/3 cities.\"",
      "detail": "Analyzed 4 Tier-2/3 behaviors: 1) Trust issues (COD used as safety net → High impact, P0), 2) Price sensitivity, 3) Low time-sensitivity (ETA matters less than price), 4) Ignoring unknown courier calls (communication gap → Medium impact)."
    },
    {
      "phase": "5. Prioritize & Solve",
      "speaker": "Candidate",
      "prompt": "Rank Behavioral Causes & Target P0/P1",
      "detail": "Ranked Trust Issues (P0) and Low User Intent (P1) alongside Address Lat/Long capture and Pre-dispatch COD confirmation/risk scoring."
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
    "Deploy ML Risk Scoring on COD orders: auto-trigger WhatsApp/OTP order confirmation or disable COD only for high-RTO user/pincode pairs (never punish clean repeat users).",
    "Enforce GPS/pin-drop or standardized landmark validation at checkout + send branded WhatsApp \"Out for Delivery\" alerts so users answer courier calls.",
    "Convert high-intent COD buyers to Prepaid via small instant UPI discounts (cheaper than paying 2-way RTO shipping!)."
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
  "synthesisScript": "Because RTO accounts for 80% of Meesho’s return volume (20% of all orders vs 5% RVP), reducing logistics cost starts with curbing COD-driven RTO. By separating operational bottlenecks (missing lat/long, missed courier calls) from Tier-2/3 behavioral intent gaps, I recommend rolling out risk-based COD OTP verification, branded WhatsApp delivery alerts, and targeted UPI prepaid nudges—while tracking checkout conversion as a strict guardrail.",
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
      "q": "What error types are driving complaints: factual errors, reasoning errors, stale info, misunderstood intent, or unsupported claims?",
      "a": "Assume a measurable rise in high-confidence incorrect answers across important Gemini journeys.",
      "why": "Separates retrieval freshness from model reasoning, intent parsing, or tone calibration."
    },
    {
      "q": "Which journeys are most affected (Q&A, research, coding, planning, multimodal, or agentic actions)?",
      "a": "Cross-cutting across high-value journeys, especially as Gemini becomes more agentic in 2026.",
      "why": "Agentic and consequential actions require stricter severity weighting than casual brainstorming."
    },
    {
      "q": "How is \"confident\" currently measured—calibrated model signal, user feedback, or both? And what is our main constraint (latency, cost, trust)?",
      "a": "Focus on reducing harmful confident errors without making the product unnecessarily hesitant, slow, or expensive.",
      "why": "Sets up the core Accuracy vs Latency and Confidence vs Usefulness trade-offs upfront."
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
      "phase": "1. Clarify & Core Principle",
      "speaker": "Candidate",
      "prompt": "Define \"Wrong\" & \"Confident\" Before Proposing Features",
      "detail": "Core Principle: A confident wrong answer is not just a model bug—it is a trust failure across the entire response system. Goal: reduce harmful confident errors without excessive hedging or latency."
    },
    {
      "phase": "2. Map the AI Response Promise",
      "speaker": "Candidate",
      "prompt": "Trace Intent → Context → Retrieval/Tools → Reasoning → Response → Action → Eval",
      "detail": "Identified stakeholders (User, Product/UX, Model/Research, Google Ecosystem Search/Workspace, Safety/Trust) and compared what user intended vs evidence available vs model conclusion vs user belief."
    },
    {
      "phase": "3. Metric Hierarchy (North Star + Guardrails)",
      "speaker": "Candidate",
      "prompt": "Avoid Optimizing \"Fewer Wrong Answers\" in Isolation",
      "detail": "Proposed North Star: Trusted Task Success. L0 outcomes: Trust, Task Completion, Severity-weighted Error Rate, Safety, Latency/Cost. L1 leading indicators: Groundedness score, Regeneration/Correction rate, Follow-up clarification rate, Citation clicks. Diagnostic: High-Confidence Error Rate."
    },
    {
      "phase": "4. Diagnose via 6 Data Cuts",
      "speaker": "Candidate",
      "prompt": "Locate Root Cause Before Picking Intervention",
      "detail": "Cut data by: Intent, User cohort, Model/routing version, Evidence freshness/tool success, Failure type, and Severity. Ranked segments by (Error Exposure × Severity × User Impact). Example: current-events spike points to retrieval freshness, not base model weights."
    },
    {
      "phase": "5. Match Targeted Interventions & Trade-offs",
      "speaker": "Candidate",
      "prompt": "Pair Specific Fixes + A/B Guardrails",
      "detail": "Grounding gap → stronger RAG + verifiable citations; Reasoning gap → multi-step verification; Calibration gap → uncertainty-aware UX (avoid blanket disclaimers!) + clarifying questions on high-risk ambiguity. Balance Accuracy vs Latency, Confidence vs Usefulness, and Grounding vs Coverage."
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
    "Adopt \"Trusted Task Success\" as the North Star paired with severity-weighted High-Confidence Error Rate so fixes never win by simply refusing or hedging every prompt.",
    "Route time-sensitive and consequential queries through stricter Search/Workspace grounding with inline verifiable citations.",
    "A/B test uncertainty-aware UX and clarifying prompts on high-confidence error segments, tracking latency, completion, and abandonment as hard guardrails."
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
  "synthesisScript": "A confident wrong answer in Gemini is a system-level trust failure spanning intent, retrieval, reasoning, calibration, and UX—not just model weights. I would define success through Trusted Task Success and severity-weighted High-Confidence Error Rate, segment failures across six cuts to separate grounding vs reasoning vs calibration gaps, and A/B test targeted grounding and uncertainty-aware UX with latency, refusal, and task-completion guardrails.",
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
  "company": "Navi",
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
  "prompt": "You are a PM at Namma Yatri. The business team has proposed increasing ride prices to match competitors (Ola, Uber, Rapido). Should we do it? If yes, how should we implement and test it?",
  "clarifyingQuestions": [
    {
      "q": "What is the business goal behind this pricing proposal?",
      "a": "To increase Namma Yatri’s revenue.",
      "why": "Critical anchor! You must know the exact revenue mechanism before assuming higher fares = higher platform revenue."
    },
    {
      "q": "How does Namma Yatri make money—commission per ride or fixed driver subscription?",
      "a": "Zero commission! Drivers keep 100% of the fare and pay a small fixed daily subscription fee.",
      "why": "GAME-CHANGING INSIGHT: Higher fares go to the driver, NOT directly to Namma Yatri! Platform revenue ONLY grows if higher fares bring more drivers online on more days."
    },
    {
      "q": "Which modes are in scope, and how much cheaper are we today?",
      "a": "Both autos and cabs; currently 20–30% cheaper than competitors, mostly during peak hours.",
      "why": "Reveals room to adjust peak pricing while preserving the brand’s \"cheaper than rivals\" positioning."
    },
    {
      "q": "What % of rider searches fail to find a driver during peak vs non-peak hours?",
      "a": "Peak hours: ~30% of searches get no driver. Non-peak hours: <10% fail.",
      "why": "Proves Namma Yatri is supply-constrained in peak hours and demand-elastic in non-peak hours."
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
      "phase": "1. Clarify Business Model Twist",
      "speaker": "Candidate",
      "prompt": "Verify Zero-Commission Subscription Model",
      "detail": "Confirmed Namma Yatri takes 0% commission; drivers pay a flat daily fee. Immediately deduced: \"Extra fare goes to the driver, not us—our revenue only rises if more drivers come online on more days.\""
    },
    {
      "phase": "2. Map Two-Sided Marketplace Journey",
      "speaker": "Candidate",
      "prompt": "Pinpoint Where Price Affects Riders vs Drivers",
      "detail": "Steps 3–4 (Price view & confirm): higher price lowers booking conversion because riders compare 2–3 apps. Step 5 (Driver accepts): higher fare raises driver earnings, reducing \"no driver found\" failures. Asked for unfulfilled search %."
    },
    {
      "phase": "3. Diagnose Peak Bottleneck & Decide",
      "speaker": "Candidate",
      "prompt": "Conditional Yes — Peak-Only Capped Multiplier",
      "detail": "Since 30% of peak searches fail (vs <10% off-peak), peak hours are supply-constrained. Recommended: Price = Base + Distance + Capped Demand Multiplier (e.g. max 1.3x during rush hours, rain, or empty-return long trips) while staying below competitors."
    },
    {
      "phase": "4. Handle Curveball on Rich/Loyal Users",
      "speaker": "Interviewer",
      "prompt": "\"Why not charge more in richer areas or to frequent loyal riders?\"",
      "detail": "Refused! Penalizing loyal users destroys trust if discovered, and area-wealth pricing violates fair-pricing brand identity—plus genuine demand/supply multipliers already price busy zones naturally."
    },
    {
      "phase": "5. Spot Experimentation Spillover Trap",
      "speaker": "Interviewer",
      "prompt": "\"Why does a 20/80 user-level A/B test fail when both groups share the same drivers?\"",
      "detail": "Caught marketplace network interference! Drivers would cherry-pick the 20% higher-paying rides and starve the 80% control group, corrupting both arms. Pivoted to Area-based (Geo-split) or Alternate-day Switchback testing for 4 weeks."
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
    "Do NOT raise prices across the board; keep non-peak pricing untouched where driver supply is healthy (<10% unfulfilled).",
    "Introduce a transparent, capped Demand Multiplier (e.g., ≤1.3x) only during peak hours, rain/events, and long empty-return routes—always priced slightly under Ola/Uber/Rapido.",
    "Validate via a 4-week Geo-Cluster or Alternate-Day Switchback experiment (never a user-level split!) measuring driver subscription revenue, active hours, fulfillment rate, and conversion."
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
  "synthesisScript": "Because Namma Yatri runs on flat daily driver subscriptions with zero commission, higher fares only grow revenue if they attract more active driver-days. Peak hours face a 30% driver-shortage failure rate while non-peak is healthy (<10%), so I recommend a transparent, capped demand multiplier (≤1.3x) strictly during peak/high-demand moments—staying below rivals and avoiding unfair loyalty/wealth pricing. Finally, we must test by neighborhood or alternate-day switchback rather than user-level A/B to prevent shared-driver spillover.",
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
