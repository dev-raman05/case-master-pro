window.CM_DATA = window.CM_DATA || {};
window.CM_DATA.cases = window.CM_DATA.cases || [];

window.CM_DATA.cases.push(
{
  "id": "ecell-rca-swiggy-delhi",
  "title": "Swiggy Lost Its Delhi Appetite",
  "company": "Swiggy",
  "source": "E-Cell IITG 2026-27",
  "track": "Product",
  "category": "RCA",
  "difficulty": 1,
  "isStarter": true,
  "tags": [
    "Food Delivery",
    "RCA",
    "Delhi",
    "Repeat Users",
    "Dinner Peak"
  ],
  "prompt": "Swiggy’s orders and revenue have dropped by 15% in Delhi. How would you approach finding the reason?",
  "clarifyingQuestions": [
    {
      "q": "Is the 15% drop only in Food Delivery or also Instamart, and is it orders placed or orders completed?",
      "a": "Food delivery only, and orders placed dropped (not post-order cancellations).",
      "why": "Rules out quick-commerce cannibalization and delivery cancellation spikes."
    },
    {
      "q": "Was this sudden or gradual, and specific to Delhi vs Gurugram/Noida?",
      "a": "Gradual decline specific to Delhi city proper.",
      "why": "Points away from a pan-India app bug and toward a Delhi-local shift."
    },
    {
      "q": "Any pattern by time-of-day, user cohort, or cuisine?",
      "a": "Dinner slots among repeat users ordering Indian and Chinese cuisines are hit hardest.",
      "why": "Narrows root cause to repeat-user dinner supply/competition/pricing in Delhi."
    }
  ],
  "frameworkUsed": "Data Sanity → Segment Isolation (Geo/Time/Cohort) → Internal (App/Ops/Pricing/Restaurants) vs External (Competitor/Macro)",
  "coreEquation": "Orders Placed = App Opens × Search/Browse Conversion × Cart-to-Order Checkout Rate",
  "strategyOverview": "Start with 3 scope checks to isolate Food Delivery in Delhi during dinner among repeat Indian/Chinese buyers. Check Internal factors (app latency, surge/packaging fees, restaurant churn/stockouts, rider ETA) vs External factors (Zomato Gold/promo blitz, ONDC discounts, local weather/events).",
  "tree": {
    "label": "Swiggy Lost Its Delhi Appetite — RCA Tree",
    "valueText": "MECE Diagnosis",
    "children": [
      {
        "label": "1. Data & Metric Sanity",
        "valueText": "Sudden vs Gradual · Geo/OS Cut"
      },
      {
        "label": "2. Internal Drivers (Product, Tech, Ops, Pricing)",
        "valueText": "Funnel Drop Isolation",
        "highlight": true
      },
      {
        "label": "3. External Drivers (Competitors, Weather, Macro)",
        "valueText": "Market Context"
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Interviewer",
      "prompt": "Swiggy’s orders and revenue have dropped by 15% in Delhi. How would you approach finding the reason?",
      "detail": "Swiggy’s orders and revenue have dropped by 15% in Delhi. How would you approach finding the reason?\nI’d first like to clarify a few things before analyzing.\nIs this decline only for food delivery or does it also include Swiggy Instamart orders?\nAnd when we say orders have dropped, do we mean fewer orders are being placed, or more orders are failing or getting canceled?"
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "It’s limited to normal food delivery, and the decline is in orders being placed, not completed.",
      "detail": "It’s limited to normal food delivery, and the decline is in orders being placed, not completed.\nGot it. Then one more point of clarification, has this drop been sudden or gradual, and is it specific to Delhi or also visible in NCR areas like Gurugram and Noida?\nIt’s a gradual decline, specific to Delhi.\nUnderstood. Lastly, do we see any pattern based on time of day or cuisine type, for instance, are dinner orders or fast-food categories more affected?"
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "Yes, dinner slots seem most impacted, especially for repeat users ordering Indian and Chinese cuisines.",
      "detail": "Yes, dinner slots seem most impacted, especially for repeat users ordering Indian and Chinese cuisines.\nGreat. Now that we’ve framed the problem, let’s look at internal factors first, then move to external influences, and finally narrow down the root cause.\nI’d start by checking for pricing, delivery fee, or discount policy changes, anything that could make Swiggy seem less affordable. If there was a revision to delivery charges or fewer discount codes, that would directly affect repeat users.\nI’d also look into app performance and UX, were there any UI changes, payment errors, or slowdowns that might discourage "
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "Swiggy did revise its delivery fee about two months ago, especially for high-demand evening zones.",
      "detail": "Swiggy did revise its delivery fee about two months ago, especially for high-demand evening zones.\nThat’s likely connected. Delhi users are highly price-sensitive, especially for dinner-time family orders. If delivery fees rose during evening peaks, users may have reduced frequency. I’d verify this by comparing order frequency per repeat user before and after the fee hike.\nOkay, what other factors will you look at?\nNow on the external side, I’d check what competitors like Zomato or Blinkit were doing at the same time, were there promotional offers or zero-delivery campaigns?"
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "I’d also consider environmental or regulatory issues, for example: pollution curfews, traffic restrictions, or",
      "detail": "I’d also consider environmental or regulatory issues, for example: pollution curfews, traffic restrictions, or local events that might disrupt evening demand.\nZomato recently launched “Zero Delivery Fee Weekends” in Delhi around the same time.\nThat overlap makes sense if Swiggy increased delivery fees while Zomato removed theirs, price-sensitive repeat customers would naturally shift for short-term savings.\nCan you suggest some possible solutions to this?"
    }
  ],
  "recommendations": [
    "Audit top 500 Delhi Indian/Chinese dinner partner restaurants for commission hikes, menu price inflation, or Zomato-exclusive promos.",
    "Deploy targeted dinner-slot repeat-user retention nudges (free delivery threshold or Swiggy One reactivation).",
    "Fix dinner peak ETA reliability in affected Delhi clusters via rider repositioning."
  ],
  "metricsAndGuardrails": {
    "northStar": "Recovered Core Funnel Conversion / Retention Rate at Swiggy",
    "leading": [
      "Step-level funnel conversion %",
      "OS/City segmented error & latency rate"
    ],
    "guardrails": [
      "Contribution margin / refund abuse rate",
      "Customer support ticket volume"
    ]
  },
  "synthesisScript": "Swiggy’s 15% Delhi drop is concentrated in placed food orders during dinner slots among repeat Indian and Chinese buyers. After ruling out platform-wide crashes and Instamart, I recommend auditing Delhi restaurant price competitiveness/exclusivity and dinner peak ETAs, then testing targeted Swiggy One dinner win-back offers with contribution margin guardrails.",
  "interviewerTrap": "Proposing Instamart cross-sell or fixing payment gateways when the interviewer already told you the drop is gradual, Delhi-only, and specifically dinner repeat orders!",
  "variations": [
    {
      "question": "How would your recommendation change if Swiggy had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "RCA",
    "correctFramework": "Data Sanity → 5-Way Segmentation → Funnel Step Isolation → Internal vs External Causes",
    "structureOptions": [
      {
        "label": "Check Data Sanity → Segment (Geo/Platform/Cohort) → Isolate Funnel Step → Separate Internal vs External Causes",
        "correct": true,
        "feedback": "Exact RCA gold standard! Always narrow down WHERE it broke before asking WHY."
      },
      {
        "label": "Launch a 30% discount campaign immediately to recover lost volume",
        "correct": false,
        "feedback": "Discounts mask technical/ops bugs and destroy unit economics without fixing root cause."
      },
      {
        "label": "Redesign the entire app homepage and brand logo",
        "correct": false,
        "feedback": "Never jump to full redesigns before isolating which exact step failed."
      }
    ],
    "decisionQuiz": {
      "question": "Before diagnosing 'Swiggy Lost Its Delhi Appetite', what data sanity check prevents chasing false alarms?",
      "options": [
        {
          "label": "Verify sudden vs gradual timing, isolated geo/OS cuts, and whether tracking/logging definitions changed",
          "correct": true,
          "feedback": "Yes! Rules out logging bugs and pinpoints the affected slice."
        },
        {
          "label": "Ask for the CEO’s favorite color",
          "correct": false,
          "feedback": "Irrelevant to root-cause diagnosis."
        },
        {
          "label": "Compare against 10-year-old competitor stock prices",
          "correct": false,
          "feedback": "Too slow and disconnected from immediate funnel drops."
        }
      ]
    }
  }
},
{
  "id": "ecell-rca-meesho-returns",
  "title": "The Delivery Dilemma of Meesho (Returns +20%)",
  "company": "Meesho",
  "source": "E-Cell IITG 2026-27",
  "track": "Product",
  "category": "RCA",
  "difficulty": 2,
  "isStarter": false,
  "tags": [
    "Meesho",
    "RCA",
    "Product"
  ],
  "prompt": "You are a Product Manager at Meesho. Over the past six weeks, the platform has witnessed a 20% increase in product returns, leading to higher logistics costs and lower seller satisfat on. The leadership team wants to understand what is driving this trend. How would you go about identifying the root cause?",
  "clarifyingQuestions": [
    {
      "q": "Is this 20% increase across all categories, or concentrated in specific ones like fashion, home, or electronics?",
      "a": "And when we say returns, do we mean customer-initiated returns (return requests), or does it include RTO (return-to-origin, i.e., failed deliveries where the order never got accepted)?",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "And when we say returns, do we mean customer-initiated returns (return requests), or does it include RTO (return-to-origin, i.e., failed deliveries where the order never got accepted)?",
      "a": "It's mostly customer-initiated returns, and it's concentrated in fashion and home categories.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Got it. One more point of clarification — has this increase been sudden or gradual over the six weeks, and is it happening more in certain geographies, like Tier 2/3 towns versus metros?",
      "a": "It's been a gradual climb, and it's more pronounced in Tier 2/3 towns, which is where most of Meesho's order volume comes from anyway.",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "Data Sanity → 5-Way Segmentation → Funnel Step Isolation → Internal vs External Causes",
  "coreEquation": "Metric Drop = Data/Tracking Check + Internal (Tech/UX/Ops/Policy) + External (Rivals/Season/Macro)",
  "strategyOverview": "Approach The Delivery Dilemma of Meesho (Returns +20%) (Meesho) using a RCA structure: start by confirming the business objective and scope, decompose the problem cleanly along Data Sanity → 5-Way Segmentation → Funnel Step Isolation → Internal vs External Causes, and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "The Delivery Dilemma of Meesho (Returns +20%) — RCA Tree",
    "valueText": "MECE Diagnosis",
    "children": [
      {
        "label": "1. Data & Metric Sanity",
        "valueText": "Sudden vs Gradual · Geo/OS Cut"
      },
      {
        "label": "2. Internal Drivers (Product, Tech, Ops, Pricing)",
        "valueText": "Funnel Drop Isolation",
        "highlight": true
      },
      {
        "label": "3. External Drivers (Competitors, Weather, Macro)",
        "valueText": "Market Context"
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Interviewer",
      "prompt": "You are a Product Manager at Meesho. Over the past six weeks, the platform has witnessed a 20% increase in pro",
      "detail": "You are a Product Manager at Meesho. Over the past six weeks, the platform has witnessed a 20% increase in product returns, leading to higher logistics costs and lower seller satisfat on. The leadership team wants to understand what is driving this trend. How would you go about identifying the root cause?\nI'd first like to clarify a few things before analyzing.\nIs this 20% increase across all categories, or concentrated in specific ones like fashion, home, or electronics?\nAnd when we say returns, do we mean customer-initiated returns (return requests), or does it include RTO (return-to-origin, i.e., failed delive"
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "It's mostly customer-initiated returns, and it's concentrated in fashion and home categories.",
      "detail": "It's mostly customer-initiated returns, and it's concentrated in fashion and home categories.\nGot it. One more point of clarification — has this increase been sudden or gradual over the six weeks, and is it happening more in certain geographies, like Tier 2/3 towns versus metros?\nIt's been a gradual climb, and it's more pronounced in Tier 2/3 towns, which is where most of Meesho's order volume comes from anyway.\nUnderstood. Lastly, do we see a pattern by seller cohort or order value — for instance, are returns concentrated among specific sellers, or newer sellers, or lower-priced items?"
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "Yes, actually returns are notably higher for orders from newer sellers who onboarded in the last two months.",
      "detail": "Yes, actually returns are notably higher for orders from newer sellers who onboarded in the last two months.\nThat's a useful lead. Let's look at internal factors first, then external ones.\nI'd start by checking if there were any changes to the seller onboarding process, quality checks, or catalog listing requirements. If new sellers are onboarding faster with fewer checks, product-image mismatch or quality issues could be driving returns.\nI'd also check if there was a change to Meesho's return policy itself — for example, a shift to more lenient/no-questions-asked returns — since that changes customer behavior, n"
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "Finally, I'd check logistics and packaging — were there changes to the delivery partner mix or packaging guide",
      "detail": "Finally, I'd check logistics and packaging — were there changes to the delivery partner mix or packaging guidelines that could be causing damage in transit, especially for fragile/home category items?\nMeesho did simplify seller onboarding two months ago, cutting the mandatory catalog quality review step to speed up seller acquisition.\nThat lines up well with the newer-seller pattern. If quality checks were relaxed, product images or descriptions could be misleading — customers order expecting one thing and receive another, especially in fashion where size, fabric, and color matter a lot. That would explain both t"
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "On the external side, I'd check if there were any seasonal or demand-driven shifts — for example, a festive sa",
      "detail": "On the external side, I'd check if there were any seasonal or demand-driven shifts — for example, a festive sale event that pulled in first-time or price-sensitive buyers who may return more readily, or a spike in impulse purchases.\nI'd also check competitor activity — are platforms like Flipkart or Meesho's own competitors offering more generous return windows, shifting customer expectations?\nAnd I'd check whether there's been any change in delivery times — if deliveries are taking longer, customers may cancel or return orders they've lost interest in, or items may arrive in poorer condition.\nThere was a sale ev"
    }
  ],
  "recommendations": [
    "Prioritize the highest-impact P0 bottleneck identified in The Delivery Dilemma of Meesho (Returns +20%) before secondary optimizations.",
    "Pilot the top intervention in a controlled cohort/region with clear North Star and guardrail tracking.",
    "Scale rollout only after verifying unit economics and zero adverse second-order effects."
  ],
  "metricsAndGuardrails": {
    "northStar": "Recovered Core Funnel Conversion / Retention Rate at Meesho",
    "leading": [
      "Step-level funnel conversion %",
      "OS/City segmented error & latency rate"
    ],
    "guardrails": [
      "Contribution margin / refund abuse rate",
      "Customer support ticket volume"
    ]
  },
  "synthesisScript": "For Meesho’s The Delivery Dilemma of Meesho (Returns +20%) case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Prioritize the highest-impact P0 bottleneck identified in The Delivery Dilemma of Meesho (Returns +20%) before secondary optimizations. We will validate success via Recovered Core Funnel Conversion / Retention Rate at Meesho while guarding against Contribution margin / refund abuse rate.",
  "interviewerTrap": "Jumping straight into discounts or UI redesigns before verifying data sanity, geo/OS segmentation, and exact funnel drop-off!",
  "variations": [
    {
      "question": "How would your recommendation change if Meesho had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "RCA",
    "correctFramework": "Data Sanity → 5-Way Segmentation → Funnel Step Isolation → Internal vs External Causes",
    "structureOptions": [
      {
        "label": "Check Data Sanity → Segment (Geo/Platform/Cohort) → Isolate Funnel Step → Separate Internal vs External Causes",
        "correct": true,
        "feedback": "Exact RCA gold standard! Always narrow down WHERE it broke before asking WHY."
      },
      {
        "label": "Launch a 30% discount campaign immediately to recover lost volume",
        "correct": false,
        "feedback": "Discounts mask technical/ops bugs and destroy unit economics without fixing root cause."
      },
      {
        "label": "Redesign the entire app homepage and brand logo",
        "correct": false,
        "feedback": "Never jump to full redesigns before isolating which exact step failed."
      }
    ],
    "decisionQuiz": {
      "question": "Before diagnosing 'The Delivery Dilemma of Meesho (Returns +20%)', what data sanity check prevents chasing false alarms?",
      "options": [
        {
          "label": "Verify sudden vs gradual timing, isolated geo/OS cuts, and whether tracking/logging definitions changed",
          "correct": true,
          "feedback": "Yes! Rules out logging bugs and pinpoints the affected slice."
        },
        {
          "label": "Ask for the CEO’s favorite color",
          "correct": false,
          "feedback": "Irrelevant to root-cause diagnosis."
        },
        {
          "label": "Compare against 10-year-old competitor stock prices",
          "correct": false,
          "feedback": "Too slow and disconnected from immediate funnel drops."
        }
      ]
    }
  }
},
{
  "id": "ecell-rca-silent-malls",
  "title": "The Curious Case of the Silent Malls",
  "company": "Retail Chain",
  "source": "E-Cell IITG 2026-27",
  "track": "Product",
  "category": "RCA",
  "difficulty": 2,
  "isStarter": false,
  "tags": [
    "Retail Chain",
    "RCA",
    "Product"
  ],
  "prompt": "A major retailer of clothing and home products has experienced sluggish growth and lower than expected profits for the past few years. They have 15 stores in malls across metro and suburban areas. Oddly, total revenue has continued to fall even though they’ve achieved significant back-end cost savings. How would you approach this?",
  "clarifyingQuestions": [
    {
      "q": "Has the decline been consistent across all stores, or concentrated in particular regions or categories?",
      "a": "And do we know if the drop is coming from fewer customers, lower average ticket size, or both?",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "And do we know if the drop is coming from fewer customers, lower average ticket size, or both?",
      "a": "It’s been steady across most stores, but metro stores are underperforming more.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Were there any major store format changes, product revisions, or pricing adjustments in recent years?",
      "a": "About two years ago, they centralized procurement to save costs. This reduced SKU variety by almost 30%.",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "Data Sanity → 5-Way Segmentation → Funnel Step Isolation → Internal vs External Causes",
  "coreEquation": "Metric Drop = Data/Tracking Check + Internal (Tech/UX/Ops/Policy) + External (Rivals/Season/Macro)",
  "strategyOverview": "Approach The Curious Case of the Silent Malls (Retail Chain) using a RCA structure: start by confirming the business objective and scope, decompose the problem cleanly along Data Sanity → 5-Way Segmentation → Funnel Step Isolation → Internal vs External Causes, and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "The Curious Case of the Silent Malls — RCA Tree",
    "valueText": "MECE Diagnosis",
    "children": [
      {
        "label": "1. Data & Metric Sanity",
        "valueText": "Sudden vs Gradual · Geo/OS Cut"
      },
      {
        "label": "2. Internal Drivers (Product, Tech, Ops, Pricing)",
        "valueText": "Funnel Drop Isolation",
        "highlight": true
      },
      {
        "label": "3. External Drivers (Competitors, Weather, Macro)",
        "valueText": "Market Context"
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Interviewer",
      "prompt": "A major retailer of clothing and home products has experienced sluggish growth and lower than expected profits",
      "detail": "A major retailer of clothing and home products has experienced sluggish growth and lower than expected profits for the past few years. They have 15 stores in malls across metro and suburban areas. Oddly, total revenue has continued to fall even though they’ve achieved significant back-end cost savings. How would you approach this?\nI’d start by clarifying the scope.\nHas the decline been consistent across all stores, or concentrated in particular regions or categories?\nAnd do we know if the drop is coming from fewer customers, lower average ticket size, or both?"
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "It’s been steady across most stores, but metro stores are underperforming more.",
      "detail": "It’s been steady across most stores, but metro stores are underperforming more.\nAverage ticket size is fairly constant, the main decline is in footfall.\nOkay, so fewer people are walking in. Let’s look at internal factors first.\nWere there any major store format changes, product revisions, or pricing adjustments in recent years?"
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "About two years ago, they centralized procurement to save costs. This reduced SKU variety by almost 30%.",
      "detail": "About two years ago, they centralized procurement to save costs. This reduced SKU variety by almost 30%.\nThat could be one reason since reduced variety often limits discovery purchases. But since ticket size hasn’t dropped, the remaining customers are still spending similarly, which means existing buyers aren’t dissatisfied, it’s the new ones not showing up.\nLet’s examine external factors now.\nHave there been new competitors in the same malls or any changes in mall mix? For example, more entertainment tenants drawing traffic away from retail?"
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "New competition, yes, some fast-fashion and D2C pop-ups. But even malls where there aren’t new stores are seei",
      "detail": "New competition, yes, some fast-fashion and D2C pop-ups. But even malls where there aren’t new stores are seeing lower traffic for this retailer.\nInteresting. So it’s not purely the competition. Any macro shifts in customer behavior?\nFor example, a move toward online channels or brand fatigue?\nThey do have an e-commerce website, but digital revenue is stable, not surging."
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "Interesting, so both physical and online aren’t growing, that suggests something deeper.",
      "detail": "Interesting, so both physical and online aren’t growing, that suggests something deeper.\nDid the brand change its marketing strategy? Maybe cut ad spend?\nYes, actually. They moved away from mall events and outdoor ads, focusing only on online performance marketing to save costs.\nThat’s quite revealing. If their digital campaigns target existing online customers, they might have lost offline visibility. Shoppers who discover stores while visiting malls wouldn’t see the brand as often anymore. Combine that with fewer SKUs, and there’s less excitement to draw traffic in."
    }
  ],
  "recommendations": [
    "Prioritize the highest-impact P0 bottleneck identified in The Curious Case of the Silent Malls before secondary optimizations.",
    "Pilot the top intervention in a controlled cohort/region with clear North Star and guardrail tracking.",
    "Scale rollout only after verifying unit economics and zero adverse second-order effects."
  ],
  "metricsAndGuardrails": {
    "northStar": "Recovered Core Funnel Conversion / Retention Rate at Retail Chain",
    "leading": [
      "Step-level funnel conversion %",
      "OS/City segmented error & latency rate"
    ],
    "guardrails": [
      "Contribution margin / refund abuse rate",
      "Customer support ticket volume"
    ]
  },
  "synthesisScript": "For Retail Chain’s The Curious Case of the Silent Malls case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Prioritize the highest-impact P0 bottleneck identified in The Curious Case of the Silent Malls before secondary optimizations. We will validate success via Recovered Core Funnel Conversion / Retention Rate at Retail Chain while guarding against Contribution margin / refund abuse rate.",
  "interviewerTrap": "Jumping straight into discounts or UI redesigns before verifying data sanity, geo/OS segmentation, and exact funnel drop-off!",
  "variations": [
    {
      "question": "How would your recommendation change if Retail Chain had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "RCA",
    "correctFramework": "Data Sanity → 5-Way Segmentation → Funnel Step Isolation → Internal vs External Causes",
    "structureOptions": [
      {
        "label": "Check Data Sanity → Segment (Geo/Platform/Cohort) → Isolate Funnel Step → Separate Internal vs External Causes",
        "correct": true,
        "feedback": "Exact RCA gold standard! Always narrow down WHERE it broke before asking WHY."
      },
      {
        "label": "Launch a 30% discount campaign immediately to recover lost volume",
        "correct": false,
        "feedback": "Discounts mask technical/ops bugs and destroy unit economics without fixing root cause."
      },
      {
        "label": "Redesign the entire app homepage and brand logo",
        "correct": false,
        "feedback": "Never jump to full redesigns before isolating which exact step failed."
      }
    ],
    "decisionQuiz": {
      "question": "Before diagnosing 'The Curious Case of the Silent Malls', what data sanity check prevents chasing false alarms?",
      "options": [
        {
          "label": "Verify sudden vs gradual timing, isolated geo/OS cuts, and whether tracking/logging definitions changed",
          "correct": true,
          "feedback": "Yes! Rules out logging bugs and pinpoints the affected slice."
        },
        {
          "label": "Ask for the CEO’s favorite color",
          "correct": false,
          "feedback": "Irrelevant to root-cause diagnosis."
        },
        {
          "label": "Compare against 10-year-old competitor stock prices",
          "correct": false,
          "feedback": "Too slow and disconnected from immediate funnel drops."
        }
      ]
    }
  }
},
{
  "id": "ecell-rca-zepto-checkouts",
  "title": "The Vanishing Checkouts of Zepto (-12%)",
  "company": "Zepto",
  "source": "E-Cell IITG 2026-27",
  "track": "Product",
  "category": "RCA",
  "difficulty": 1,
  "isStarter": true,
  "tags": [
    "Quick Commerce",
    "Checkout Funnel",
    "RCA",
    "Payments",
    "Dark Stores"
  ],
  "prompt": "You are working as an Associate Product Manager at Zepto. Over the last week, the checkout conversion rate has dropped by around 12%, while the number of users reaching the cart page has remained stable. Walk me through how you would identify the root cause before proposing any solutions.",
  "clarifyingQuestions": [
    {
      "q": "Where in the checkout flow are users dropping—Cart view, Address/Slot, or Payment gateway?",
      "a": "Between Cart summary and Payment completion.",
      "why": "Pinpoints pricing/fee shock, ETA jump, or UPI gateway failures."
    },
    {
      "q": "Is it Android, iOS, or specific payment modes like UPI/Cards?",
      "a": "Noticeable spike on UPI intent flows and high-fee small-basket carts.",
      "why": "Points directly to fee-sensitivity + payment success regression."
    }
  ],
  "frameworkUsed": "Checkout Funnel Step Isolation + Fee Shock vs Technical Payment Failure",
  "coreEquation": "Checkout Conversion = Cart View → Fee/ETA Acceptance → Payment Initiation → Payment Success",
  "strategyOverview": "Isolate the exact screen between Cart and Order Confirmation. Separate UX/Pricing shock (hidden handling/rain/small-cart fees, sudden ETA jump from 10 to 25 mins) from Technical payment gateway drops (UPI app switch failures or OTP timeouts).",
  "tree": {
    "label": "The Vanishing Checkouts of Zepto (-12%) — RCA Tree",
    "valueText": "MECE Diagnosis",
    "children": [
      {
        "label": "1. Data & Metric Sanity",
        "valueText": "Sudden vs Gradual · Geo/OS Cut"
      },
      {
        "label": "2. Internal Drivers (Product, Tech, Ops, Pricing)",
        "valueText": "Funnel Drop Isolation",
        "highlight": true
      },
      {
        "label": "3. External Drivers (Competitors, Weather, Macro)",
        "valueText": "Market Context"
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Candidate",
      "prompt": "You are working as an Associate Product Manager at Zepto. Over the last week, the checkout conversion rate has",
      "detail": "You are working as an Associate Product Manager at Zepto. Over the last week, the checkout conversion rate has dropped by around 12%, while the number of users reaching the cart page has remained stable. Walk me through how you would identify the root cause before proposing any solutions.\nSure. To make sure I am on the same page, I would first like to clarify a few things.\nIs checkout conversion defined as Cart Page → Successful Order Placement? Also, has the drop been sudden over the last week, or gradual? Is it visible across all cities, platforms, and user segments? And have we already ruled out any data track"
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "Okay, that helps. Since cart traffic is stable, the issue is unlikely to be with discovery or top-of-funnel de",
      "detail": "Okay, that helps. Since cart traffic is stable, the issue is unlikely to be with discovery or top-of-funnel demand. So I would focus on the journey after cart and try to isolate the blast radius first.\nI would structure my analysis in two parts.\nInternal factors Trace the checkout funnel step by step Check recent product or tech changes Check business or pricing changes Look at qualitative feedback from users External factors Check competitor actions Check market or environment changes Check public sentiment, if needed Good. Where would you start inside the funnel?\nI would map the checkout journey first. A simpli"
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "Cart → Address Selection → Delivery Slot Selection → Coupon Application → Payment Selection → Payment Confirma",
      "detail": "Cart → Address Selection → Delivery Slot Selection → Coupon Application → Payment Selection → Payment Confirmation → Order Success Then I would compare drop-offs at each step versus the previous week and versus the usual baseline. Since the overall cart volume is stable but conversion is down, the issue is probably concentrated in one step rather than the whole flow.\nAssume the drop is consistent across all user segments Then that suggests a common failure point in the checkout flow, not a segment-specific issue.\nNext, I would check whether there were any recent releases in the last week. For example:\ncheckout UI"
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "Let us say there was a checkout update last week. What would you look at next?",
      "detail": "Let us say there was a checkout update last week. What would you look at next?\nI’d zoom in on the exact drop-off stage.\nBefore payment: address errors, slot unavailability, delivery fees, coupon issues.\nAt/after payment: payment or OTP failures, gateway/callback timeouts, app crashes."
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "Given the sudden, broad-based decline, my leading hypothesis would be a checkout- side technical or payment is",
      "detail": "Given the sudden, broad-based decline, my leading hypothesis would be a checkout- side technical or payment issue.\nHow would you test that hypothesis?\nStep-wise checkout conversion Payment success by method Gateway failure codes App version-wise conversion Order API latency Checkout crash/timeout logs If users reach payment but fail to complete orders, and failures spike after a release, I’d suspect a technical issue in payment or final confirmation.\nWhat if UPI failures are much higher than other payment methods?"
    }
  ],
  "recommendations": [
    "Prioritize the highest-impact P0 bottleneck identified in The Vanishing Checkouts of Zepto (-12%) before secondary optimizations.",
    "Pilot the top intervention in a controlled cohort/region with clear North Star and guardrail tracking.",
    "Scale rollout only after verifying unit economics and zero adverse second-order effects."
  ],
  "metricsAndGuardrails": {
    "northStar": "Recovered Core Funnel Conversion / Retention Rate at Zepto",
    "leading": [
      "Step-level funnel conversion %",
      "OS/City segmented error & latency rate"
    ],
    "guardrails": [
      "Contribution margin / refund abuse rate",
      "Customer support ticket volume"
    ]
  },
  "synthesisScript": "Vanishing Zepto checkouts stem from Cart-to-Payment friction—combining unexpected small-cart/handling fees with UPI intent drops. I recommend transparent fee thresholds upfront on the product shelf, instant UPI fallback routing, and monitoring GMV vs Net Contribution Margin guardrails.",
  "interviewerTrap": "Changing home-page search recommendations when the drop happens AFTER users have already filled their cart!",
  "variations": [
    {
      "question": "How would your recommendation change if Zepto had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "RCA",
    "correctFramework": "Data Sanity → 5-Way Segmentation → Funnel Step Isolation → Internal vs External Causes",
    "structureOptions": [
      {
        "label": "Check Data Sanity → Segment (Geo/Platform/Cohort) → Isolate Funnel Step → Separate Internal vs External Causes",
        "correct": true,
        "feedback": "Exact RCA gold standard! Always narrow down WHERE it broke before asking WHY."
      },
      {
        "label": "Launch a 30% discount campaign immediately to recover lost volume",
        "correct": false,
        "feedback": "Discounts mask technical/ops bugs and destroy unit economics without fixing root cause."
      },
      {
        "label": "Redesign the entire app homepage and brand logo",
        "correct": false,
        "feedback": "Never jump to full redesigns before isolating which exact step failed."
      }
    ],
    "decisionQuiz": {
      "question": "Before diagnosing 'The Vanishing Checkouts of Zepto (-12%)', what data sanity check prevents chasing false alarms?",
      "options": [
        {
          "label": "Verify sudden vs gradual timing, isolated geo/OS cuts, and whether tracking/logging definitions changed",
          "correct": true,
          "feedback": "Yes! Rules out logging bugs and pinpoints the affected slice."
        },
        {
          "label": "Ask for the CEO’s favorite color",
          "correct": false,
          "feedback": "Irrelevant to root-cause diagnosis."
        },
        {
          "label": "Compare against 10-year-old competitor stock prices",
          "correct": false,
          "feedback": "Too slow and disconnected from immediate funnel drops."
        }
      ]
    }
  }
},
{
  "id": "ecell-rca-paytm-mau",
  "title": "When Paytm Stopped Ringing (-5% MAU)",
  "company": "Paytm",
  "source": "E-Cell IITG 2026-27",
  "track": "Product",
  "category": "RCA",
  "difficulty": 2,
  "isStarter": false,
  "tags": [
    "Paytm",
    "RCA",
    "Product"
  ],
  "prompt": "Paytm has seen a 5% decline in monthly active users. Can you help figure out what’s driving this?",
  "clarifyingQuestions": [
    {
      "q": "Is this decline across all Paytm products: wallet, UPI, recharge, Paytm Mall, Paytm Money or specific to one? And is this drop sudden or gradual?",
      "a": "It’s gradual and mostly visible in the wallet and bill payment segments.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Alright. I’ll go step by step. Let’s first confirm this isn’t a data or metric issue, the BI definitions haven’t changed, right? Also, is this decline all over India or confined to certain cities like Tier-1, 2 or 3?",
      "a": "No, the data looks clean and the decline is more significant in metro cities.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Good. Then I’ll move to internal factors first: product, tech, or marketing. Were there any recent UI revamps, login changes, or cashback policy updates?",
      "a": "Not really, no major changes. The product and marketing budgets have been stable too.",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "Data Sanity → 5-Way Segmentation → Funnel Step Isolation → Internal vs External Causes",
  "coreEquation": "Metric Drop = Data/Tracking Check + Internal (Tech/UX/Ops/Policy) + External (Rivals/Season/Macro)",
  "strategyOverview": "Approach When Paytm Stopped Ringing (-5% MAU) (Paytm) using a RCA structure: start by confirming the business objective and scope, decompose the problem cleanly along Data Sanity → 5-Way Segmentation → Funnel Step Isolation → Internal vs External Causes, and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "When Paytm Stopped Ringing (-5% MAU) — RCA Tree",
    "valueText": "MECE Diagnosis",
    "children": [
      {
        "label": "1. Data & Metric Sanity",
        "valueText": "Sudden vs Gradual · Geo/OS Cut"
      },
      {
        "label": "2. Internal Drivers (Product, Tech, Ops, Pricing)",
        "valueText": "Funnel Drop Isolation",
        "highlight": true
      },
      {
        "label": "3. External Drivers (Competitors, Weather, Macro)",
        "valueText": "Market Context"
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Interviewer",
      "prompt": "Paytm has seen a 5% decline in monthly active users. Can you help figure out what’s driving this?",
      "detail": "Paytm has seen a 5% decline in monthly active users. Can you help figure out what’s driving this?\nSure. First, I’d like to clarify a few things.\nIs this decline across all Paytm products: wallet, UPI, recharge, Paytm Mall, Paytm Money or specific to one? And is this drop sudden or gradual?\nIt’s gradual and mostly visible in the wallet and bill payment segments."
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "Alright. I’ll go step by step. Let’s first confirm this isn’t a data or metric issue, the BI definitions haven",
      "detail": "Alright. I’ll go step by step. Let’s first confirm this isn’t a data or metric issue, the BI definitions haven’t changed, right? Also, is this decline all over India or confined to certain cities like Tier-1, 2 or 3?\nNo, the data looks clean and the decline is more significant in metro cities.\nGood. Then I’ll move to internal factors first: product, tech, or marketing. Were there any recent UI revamps, login changes, or cashback policy updates?\nNot really, no major changes. The product and marketing budgets have been stable too."
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "If the internal environment is stable, the cause may lie outside Paytm’s direct control.",
      "detail": "If the internal environment is stable, the cause may lie outside Paytm’s direct control.\nLet’s look at the external factors which can affect Paytm. Have the competitors launched any new campaigns or promotions? Or any major PR issues leading to boycott of Paytm.\nNone that come to mind immediately.\nCould it be something affecting how much people are transacting, not where they’re transacting? For example, changes in utility billing, cash economy or even fuel price fluctuations might reduce overall digital payment frequency."
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "Hmm, not fuel. But wait, around the same period, several major metro areas shifted their metro cards and highw",
      "detail": "Hmm, not fuel. But wait, around the same period, several major metro areas shifted their metro cards and highway tolls to accept only FASTag or direct bank debit instead of wallet top-ups.\nExactly, that’s interesting. If a large share of wallet use cases, like metro recharges or toll recharges, migrated to direct bank debits, that would quietly reduce wallet frequency.\nThe user doesn’t churn, they just stop needing Paytm as often.\nYes, the NHAI and Delhi Metro both rolled out direct bank auto-recharge systems three months ago."
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "That’s likely the real root cause, not competition or internal friction, but regulatory infrastructure moderni",
      "detail": "That’s likely the real root cause, not competition or internal friction, but regulatory infrastructure modernization.\nPaytm’s decline in active users wasn’t due to poor experience but due to reduced dependency: users who once relied on wallet top-ups for transit and tolls now pay directly from linked accounts.\nTo mitigate this, Paytm can:\nPartner with transit and toll operators to integrate “Pay with Paytm” UPI rails instead of losing that use case."
    }
  ],
  "recommendations": [
    "Prioritize the highest-impact P0 bottleneck identified in When Paytm Stopped Ringing (-5% MAU) before secondary optimizations.",
    "Pilot the top intervention in a controlled cohort/region with clear North Star and guardrail tracking.",
    "Scale rollout only after verifying unit economics and zero adverse second-order effects."
  ],
  "metricsAndGuardrails": {
    "northStar": "Recovered Core Funnel Conversion / Retention Rate at Paytm",
    "leading": [
      "Step-level funnel conversion %",
      "OS/City segmented error & latency rate"
    ],
    "guardrails": [
      "Contribution margin / refund abuse rate",
      "Customer support ticket volume"
    ]
  },
  "synthesisScript": "For Paytm’s When Paytm Stopped Ringing (-5% MAU) case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Prioritize the highest-impact P0 bottleneck identified in When Paytm Stopped Ringing (-5% MAU) before secondary optimizations. We will validate success via Recovered Core Funnel Conversion / Retention Rate at Paytm while guarding against Contribution margin / refund abuse rate.",
  "interviewerTrap": "Jumping straight into discounts or UI redesigns before verifying data sanity, geo/OS segmentation, and exact funnel drop-off!",
  "variations": [
    {
      "question": "How would your recommendation change if Paytm had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "RCA",
    "correctFramework": "Data Sanity → 5-Way Segmentation → Funnel Step Isolation → Internal vs External Causes",
    "structureOptions": [
      {
        "label": "Check Data Sanity → Segment (Geo/Platform/Cohort) → Isolate Funnel Step → Separate Internal vs External Causes",
        "correct": true,
        "feedback": "Exact RCA gold standard! Always narrow down WHERE it broke before asking WHY."
      },
      {
        "label": "Launch a 30% discount campaign immediately to recover lost volume",
        "correct": false,
        "feedback": "Discounts mask technical/ops bugs and destroy unit economics without fixing root cause."
      },
      {
        "label": "Redesign the entire app homepage and brand logo",
        "correct": false,
        "feedback": "Never jump to full redesigns before isolating which exact step failed."
      }
    ],
    "decisionQuiz": {
      "question": "Before diagnosing 'When Paytm Stopped Ringing (-5% MAU)', what data sanity check prevents chasing false alarms?",
      "options": [
        {
          "label": "Verify sudden vs gradual timing, isolated geo/OS cuts, and whether tracking/logging definitions changed",
          "correct": true,
          "feedback": "Yes! Rules out logging bugs and pinpoints the affected slice."
        },
        {
          "label": "Ask for the CEO’s favorite color",
          "correct": false,
          "feedback": "Irrelevant to root-cause diagnosis."
        },
        {
          "label": "Compare against 10-year-old competitor stock prices",
          "correct": false,
          "feedback": "Too slow and disconnected from immediate funnel drops."
        }
      ]
    }
  }
},
{
  "id": "ecell-rca-linkedin-creators",
  "title": "When LinkedIn Lost Its Voice (Creator Posts)",
  "company": "LinkedIn",
  "source": "E-Cell IITG 2026-27",
  "track": "Product",
  "category": "RCA",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "LinkedIn",
    "RCA",
    "Product"
  ],
  "prompt": "Imagine you are a Product Manager at LinkedIn. Your team notices that the number of weekly posts created by active creators has been steadily declining over the past month, even though overall active users have remained flat. How would you investigate this problem and identify the root cause?",
  "clarifyingQuestions": [
    {
      "q": "Let's also look beyond internal factors. Have there been any external shifts, competitor platforms, or broader behavior changes among professionals?",
      "a": "Go ahead.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "First, have competitors launched anything that might be pulling creator attention away, like Twitter/X or Threads pushing professional content features recently?",
      "a": "Not particularly. No major competitor campaigns targeting this segment in the last month.",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "Data Sanity → 5-Way Segmentation → Funnel Step Isolation → Internal vs External Causes",
  "coreEquation": "Metric Drop = Data/Tracking Check + Internal (Tech/UX/Ops/Policy) + External (Rivals/Season/Macro)",
  "strategyOverview": "Approach When LinkedIn Lost Its Voice (Creator Posts) (LinkedIn) using a RCA structure: start by confirming the business objective and scope, decompose the problem cleanly along Data Sanity → 5-Way Segmentation → Funnel Step Isolation → Internal vs External Causes, and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "When LinkedIn Lost Its Voice (Creator Posts) — RCA Tree",
    "valueText": "MECE Diagnosis",
    "children": [
      {
        "label": "1. Data & Metric Sanity",
        "valueText": "Sudden vs Gradual · Geo/OS Cut"
      },
      {
        "label": "2. Internal Drivers (Product, Tech, Ops, Pricing)",
        "valueText": "Funnel Drop Isolation",
        "highlight": true
      },
      {
        "label": "3. External Drivers (Competitors, Weather, Macro)",
        "valueText": "Market Context"
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Interviewer",
      "prompt": "Imagine you are a Product Manager at LinkedIn. Your team notices that the number of weekly posts created by ac",
      "detail": "Imagine you are a Product Manager at LinkedIn. Your team notices that the number of weekly posts created by active creators has been steadily declining over the past month, even though overall active users have remained flat. How would you investigate this problem and identify the root cause?\nI'd first clarify the scope. Is this decline across all creator segments, or concentrated among specific types, say, first-time posters versus consistent creators? And is the drop uniform across content formats like text posts, articles, and videos, or specific to one?\nIt's mostly among creators who post 2-3 times a week reg"
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "Users open the app, tap \"Start a post,\" write or attach content, and publish, optionally boosting reach with h",
      "detail": "Users open the app, tap \"Start a post,\" write or attach content, and publish, optionally boosting reach with hashtags or tagging.\nGot it. If posting frequency dropped post-launch, I'd check whether something changed recently in that flow, for example, a UI redesign, added friction like extra prompts or approvals, or a bug affecting drafts and publishing. Were there any recent app or backend updates?\nYes, about three weeks ago LinkedIn rolled out an AI writing assistant that suggests post ideas and rewrites drafts before publishing.\nThat's a useful lead. If the assistant adds an extra step or interrupts the writin"
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "Actually, yes. There's been a drop in average impressions per post over the same period.",
      "detail": "Actually, yes. There's been a drop in average impressions per post over the same period.\nThat's significant. If creators are seeing lower reach on their posts, they may feel discouraged and post less, since the reward for showing up regularly has weakened. I'd want to understand what's driving that impressions drop, is it a feed algorithm change, or something else?\nYes, the feed ranking algorithm was updated a month ago to prioritize \"professional insight\" content over personal updates and career milestones.\nThat aligns well with the timing. If the algorithm now deprioritizes the kind of casual, frequent updates "
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "Lower visibility means lower engagement, which means less incentive to keep posting.",
      "detail": "Lower visibility means lower engagement, which means less incentive to keep posting.\nLet's also look beyond internal factors. Have there been any external shifts, competitor platforms, or broader behavior changes among professionals?\nFirst, have competitors launched anything that might be pulling creator attention away, like Twitter/X or Threads pushing professional content features recently?\nNot particularly. No major competitor campaigns targeting this segment in the last month."
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "Alright, then let's rule out competition. Any seasonal or macro factors, for instance, is this decline aligned",
      "detail": "Alright, then let's rule out competition. Any seasonal or macro factors, for instance, is this decline aligned with a holiday period or a slow business season where professionals typically engage less?\nNo, the timing doesn't match any holiday period, and it's a sustained decline, not a short dip.\nThat rules out seasonality. So it seems like the picture is coming together around two internal levers: the algorithm change reducing reach for regular creators' content, and possibly some friction from the new AI writing assistant. Combined, those would explain both the timing and the specific impact on regular, moderat"
    }
  ],
  "recommendations": [
    "Prioritize the highest-impact P0 bottleneck identified in When LinkedIn Lost Its Voice (Creator Posts) before secondary optimizations.",
    "Pilot the top intervention in a controlled cohort/region with clear North Star and guardrail tracking.",
    "Scale rollout only after verifying unit economics and zero adverse second-order effects."
  ],
  "metricsAndGuardrails": {
    "northStar": "Recovered Core Funnel Conversion / Retention Rate at LinkedIn",
    "leading": [
      "Step-level funnel conversion %",
      "OS/City segmented error & latency rate"
    ],
    "guardrails": [
      "Contribution margin / refund abuse rate",
      "Customer support ticket volume"
    ]
  },
  "synthesisScript": "For LinkedIn’s When LinkedIn Lost Its Voice (Creator Posts) case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Prioritize the highest-impact P0 bottleneck identified in When LinkedIn Lost Its Voice (Creator Posts) before secondary optimizations. We will validate success via Recovered Core Funnel Conversion / Retention Rate at LinkedIn while guarding against Contribution margin / refund abuse rate.",
  "interviewerTrap": "Jumping straight into discounts or UI redesigns before verifying data sanity, geo/OS segmentation, and exact funnel drop-off!",
  "variations": [
    {
      "question": "How would your recommendation change if LinkedIn had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "RCA",
    "correctFramework": "Data Sanity → 5-Way Segmentation → Funnel Step Isolation → Internal vs External Causes",
    "structureOptions": [
      {
        "label": "Check Data Sanity → Segment (Geo/Platform/Cohort) → Isolate Funnel Step → Separate Internal vs External Causes",
        "correct": true,
        "feedback": "Exact RCA gold standard! Always narrow down WHERE it broke before asking WHY."
      },
      {
        "label": "Launch a 30% discount campaign immediately to recover lost volume",
        "correct": false,
        "feedback": "Discounts mask technical/ops bugs and destroy unit economics without fixing root cause."
      },
      {
        "label": "Redesign the entire app homepage and brand logo",
        "correct": false,
        "feedback": "Never jump to full redesigns before isolating which exact step failed."
      }
    ],
    "decisionQuiz": {
      "question": "Before diagnosing 'When LinkedIn Lost Its Voice (Creator Posts)', what data sanity check prevents chasing false alarms?",
      "options": [
        {
          "label": "Verify sudden vs gradual timing, isolated geo/OS cuts, and whether tracking/logging definitions changed",
          "correct": true,
          "feedback": "Yes! Rules out logging bugs and pinpoints the affected slice."
        },
        {
          "label": "Ask for the CEO’s favorite color",
          "correct": false,
          "feedback": "Irrelevant to root-cause diagnosis."
        },
        {
          "label": "Compare against 10-year-old competitor stock prices",
          "correct": false,
          "feedback": "Too slow and disconnected from immediate funnel drops."
        }
      ]
    }
  }
},
{
  "id": "ecell-rca-banking-uninstalls",
  "title": "The Great Banking App Vanish (Uninstall Spike)",
  "company": "Retail Bank",
  "source": "E-Cell IITG 2026-27",
  "track": "Product",
  "category": "RCA",
  "difficulty": 2,
  "isStarter": false,
  "tags": [
    "Retail Bank",
    "RCA",
    "Product"
  ],
  "prompt": "Our banking app has seen a sudden spike in uninstalls over the past week. Can you help figure out why this might be happening?",
  "clarifyingQuestions": [
    {
      "q": "Definitely. First, I’d like to clarify a few things. Has this uninstall trend been steady over the week or did it spike on specific days? And is this across all user types or concentrated in a certain segment like new us",
      "a": "The rise happened gradually through the week, and it seems more concentrated among new users.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Got it. Let’s start with internal factors. Were there any app updates or feature rollouts recently that could have affected experience, maybe login bugs, crashes, or a change in navigation flow?",
      "a": "There was a UI update about a month ago, but nothing major functionally changed. No new feature or known bug.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Alright, if internal issues are ruled out, let’s look at external ones. Have we noticed any major competitor campaigns or new entrants in the same segment lately?",
      "a": "Actually, yes. A new fintech app just launched which offers small monthly loans to students and young professionals, directly credited to their bank accounts.",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "Data Sanity → 5-Way Segmentation → Funnel Step Isolation → Internal vs External Causes",
  "coreEquation": "Metric Drop = Data/Tracking Check + Internal (Tech/UX/Ops/Policy) + External (Rivals/Season/Macro)",
  "strategyOverview": "Approach The Great Banking App Vanish (Uninstall Spike) (Retail Bank) using a RCA structure: start by confirming the business objective and scope, decompose the problem cleanly along Data Sanity → 5-Way Segmentation → Funnel Step Isolation → Internal vs External Causes, and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "The Great Banking App Vanish (Uninstall Spike) — RCA Tree",
    "valueText": "MECE Diagnosis",
    "children": [
      {
        "label": "1. Data & Metric Sanity",
        "valueText": "Sudden vs Gradual · Geo/OS Cut"
      },
      {
        "label": "2. Internal Drivers (Product, Tech, Ops, Pricing)",
        "valueText": "Funnel Drop Isolation",
        "highlight": true
      },
      {
        "label": "3. External Drivers (Competitors, Weather, Macro)",
        "valueText": "Market Context"
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Interviewer",
      "prompt": "Our banking app has seen a sudden spike in uninstalls over the past week. Can you help figure out why this mig",
      "detail": "Our banking app has seen a sudden spike in uninstalls over the past week. Can you help figure out why this might be happening?\nDefinitely. First, I’d like to clarify a few things. Has this uninstall trend been steady over the week or did it spike on specific days? And is this across all user types or concentrated in a certain segment like new users or existing customers?\nThe rise happened gradually through the week, and it seems more concentrated among new users."
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "Got it. Let’s start with internal factors. Were there any app updates or feature rollouts recently that could ",
      "detail": "Got it. Let’s start with internal factors. Were there any app updates or feature rollouts recently that could have affected experience, maybe login bugs, crashes, or a change in navigation flow?\nThere was a UI update about a month ago, but nothing major functionally changed. No new feature or known bug.\nAlright, if internal issues are ruled out, let’s look at external ones. Have we noticed any major competitor campaigns or new entrants in the same segment lately?"
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "Actually, yes. A new fintech app just launched which offers small monthly loans to students and young professi",
      "detail": "Actually, yes. A new fintech app just launched which offers small monthly loans to students and young professionals, directly credited to their bank accounts.\nThat’s quite relevant. If their offering resonates with our younger demographic, some users might be switching. So it could be migration-related where users are moving to that new platform and uninstalling ours after That’s a fair point, but think about it, do people usually uninstall a full banking app immediately after switching? They often keep both, right?\nTrue, uninstalling completely seems extreme for just switching providers. Unless… this isn’t about"
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "Exactly, what do you think could cause that?",
      "detail": "Exactly, what do you think could cause that?\nCould it be campaign-driven? If we ran a promotional campaign recently, maybe cashbacks, referral bonuses, or wallet rewards, it might have attracted users who only installed to claim the incentive and left right after.\nYes, spot on. We ran a short-term campaign targeting students with a small sign-up reward. That segment downloaded the app, took the benefit, and uninstalled within a day or two."
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "That explains both the timing and the uninstall pattern. The new users weren’t true banking adopters, they wer",
      "detail": "That explains both the timing and the uninstall pattern. The new users weren’t true banking adopters, they were incentive-driven installs with no intent to engage long- term.\nSuggest some solutions to ensure that new cohort users don’t uninstall the app right after getting the incentive?\nWe can take the following steps to ensure this:"
    }
  ],
  "recommendations": [
    "Prioritize the highest-impact P0 bottleneck identified in The Great Banking App Vanish (Uninstall Spike) before secondary optimizations.",
    "Pilot the top intervention in a controlled cohort/region with clear North Star and guardrail tracking.",
    "Scale rollout only after verifying unit economics and zero adverse second-order effects."
  ],
  "metricsAndGuardrails": {
    "northStar": "Recovered Core Funnel Conversion / Retention Rate at Retail Bank",
    "leading": [
      "Step-level funnel conversion %",
      "OS/City segmented error & latency rate"
    ],
    "guardrails": [
      "Contribution margin / refund abuse rate",
      "Customer support ticket volume"
    ]
  },
  "synthesisScript": "For Retail Bank’s The Great Banking App Vanish (Uninstall Spike) case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Prioritize the highest-impact P0 bottleneck identified in The Great Banking App Vanish (Uninstall Spike) before secondary optimizations. We will validate success via Recovered Core Funnel Conversion / Retention Rate at Retail Bank while guarding against Contribution margin / refund abuse rate.",
  "interviewerTrap": "Jumping straight into discounts or UI redesigns before verifying data sanity, geo/OS segmentation, and exact funnel drop-off!",
  "variations": [
    {
      "question": "How would your recommendation change if Retail Bank had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "RCA",
    "correctFramework": "Data Sanity → 5-Way Segmentation → Funnel Step Isolation → Internal vs External Causes",
    "structureOptions": [
      {
        "label": "Check Data Sanity → Segment (Geo/Platform/Cohort) → Isolate Funnel Step → Separate Internal vs External Causes",
        "correct": true,
        "feedback": "Exact RCA gold standard! Always narrow down WHERE it broke before asking WHY."
      },
      {
        "label": "Launch a 30% discount campaign immediately to recover lost volume",
        "correct": false,
        "feedback": "Discounts mask technical/ops bugs and destroy unit economics without fixing root cause."
      },
      {
        "label": "Redesign the entire app homepage and brand logo",
        "correct": false,
        "feedback": "Never jump to full redesigns before isolating which exact step failed."
      }
    ],
    "decisionQuiz": {
      "question": "Before diagnosing 'The Great Banking App Vanish (Uninstall Spike)', what data sanity check prevents chasing false alarms?",
      "options": [
        {
          "label": "Verify sudden vs gradual timing, isolated geo/OS cuts, and whether tracking/logging definitions changed",
          "correct": true,
          "feedback": "Yes! Rules out logging bugs and pinpoints the affected slice."
        },
        {
          "label": "Ask for the CEO’s favorite color",
          "correct": false,
          "feedback": "Irrelevant to root-cause diagnosis."
        },
        {
          "label": "Compare against 10-year-old competitor stock prices",
          "correct": false,
          "feedback": "Too slow and disconnected from immediate funnel drops."
        }
      ]
    }
  }
},
{
  "id": "ecell-rca-indigo-cancellations",
  "title": "Turbulence Over Indigo Skies (+20% Cancellations)",
  "company": "IndiGo",
  "source": "E-Cell IITG 2026-27",
  "track": "Product",
  "category": "RCA",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "IndiGo",
    "RCA",
    "Product"
  ],
  "prompt": "There’s been a 20% increase in IndiGo flight cancellations on our platform this week.",
  "clarifyingQuestions": [
    {
      "q": "How would you begin analyzing this?",
      "a": "I’d first confirm whether this increase is sudden or progressive, and whether it’s across all flights or concentrated in specific routes, devices, or customer segments.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "First, have any competitors launched aggressive campaigns recently, maybe limited- time discounts or zero-cancellation offers that could attract price-sensitive flyers?",
      "a": "Not in the last week. Fare structures have been fairly stable.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Alright, then let’s look beyond competition, any PR or local disruptions, curfews, or transport issues that could have affected airport access in key cities?",
      "a": "Yes, actually. There’s been a major protest near one of the metro airports that led to temporary closures and restricted access. Several flights were grounded or delayed as a result.",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "Data Sanity → 5-Way Segmentation → Funnel Step Isolation → Internal vs External Causes",
  "coreEquation": "Metric Drop = Data/Tracking Check + Internal (Tech/UX/Ops/Policy) + External (Rivals/Season/Macro)",
  "strategyOverview": "Approach Turbulence Over Indigo Skies (+20% Cancellations) (IndiGo) using a RCA structure: start by confirming the business objective and scope, decompose the problem cleanly along Data Sanity → 5-Way Segmentation → Funnel Step Isolation → Internal vs External Causes, and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Turbulence Over Indigo Skies (+20% Cancellations) — RCA Tree",
    "valueText": "MECE Diagnosis",
    "children": [
      {
        "label": "1. Data & Metric Sanity",
        "valueText": "Sudden vs Gradual · Geo/OS Cut"
      },
      {
        "label": "2. Internal Drivers (Product, Tech, Ops, Pricing)",
        "valueText": "Funnel Drop Isolation",
        "highlight": true
      },
      {
        "label": "3. External Drivers (Competitors, Weather, Macro)",
        "valueText": "Market Context"
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Candidate",
      "prompt": "There’s been a 20% increase in IndiGo flight cancellations on our platform this week.",
      "detail": "There’s been a 20% increase in IndiGo flight cancellations on our platform this week.\nHow would you begin analyzing this?\nI’d first confirm whether this increase is sudden or progressive, and whether it’s across all flights or concentrated in specific routes, devices, or customer segments.\nIt’s a sharp rise within the week, and seems to be limited to a few routes."
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "Alright, that’s interesting. I’ll start with internal factors first. To narrow down the issue, I’d like to und",
      "detail": "Alright, that’s interesting. I’ll start with internal factors first. To narrow down the issue, I’d like to understand the full user journey for booking a flight on the platform from search to payment and ticket confirmation.\nThe typical journey is: users search for flights, select one using filters, enter traveler details, make payment, and get an e-ticket on email or in-app.\nPerfect. So if cancellations rose post-booking, I’d check whether something in that confirmation stage changed recently, for example: incorrect flight information, failed payment confirmations, or delayed ticket delivery. Have there been any"
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "That’s a solid lead. If users see an incorrect flight number, they might think their booking is invalid and ca",
      "detail": "That’s a solid lead. If users see an incorrect flight number, they might think their booking is invalid and cancel it immediately out of fear of losing money or missing their flight.\nBut since it’s limited to Android and specific devices, it might not fully explain a 20% overall jump. Let’s also look at external factors.\nFirst, have any competitors launched aggressive campaigns recently, maybe limited- time discounts or zero-cancellation offers that could attract price-sensitive flyers?\nNot in the last week. Fare structures have been fairly stable."
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "Alright, then let’s look beyond competition, any PR or local disruptions, curfews, or transport issues that co",
      "detail": "Alright, then let’s look beyond competition, any PR or local disruptions, curfews, or transport issues that could have affected airport access in key cities?\nYes, actually. There’s been a major protest near one of the metro airports that led to temporary closures and restricted access. Several flights were grounded or delayed as a result.\nThat explains it. So, users facing airport closures or severe delays may have preemptively cancelled flights rather than risk being stranded. Combined with the technical issue, that perfectly aligns with the timing and geography of the spike.\nSpot on, can you summarise the case?"
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "The rise in cancellations was driven by two overlapping issues: an internal technical glitch on some Android d",
      "detail": "The rise in cancellations was driven by two overlapping issues: an internal technical glitch on some Android devices showing incorrect flight numbers, and a localized external disruption from airport protests that prevented passengers from traveling. The latter likely drove the majority of cancellations.\nSuggest some changes to curb the current situation To mitigate short-term fallout, IndiGo can:\nSet up temporary ground transfers: a dedicated cab or shuttle service from the affected airport to the nearest operational one, or partner with cab/bus companies to offer discounted rides directly through the app.\nProac"
    }
  ],
  "recommendations": [
    "Prioritize the highest-impact P0 bottleneck identified in Turbulence Over Indigo Skies (+20% Cancellations) before secondary optimizations.",
    "Pilot the top intervention in a controlled cohort/region with clear North Star and guardrail tracking.",
    "Scale rollout only after verifying unit economics and zero adverse second-order effects."
  ],
  "metricsAndGuardrails": {
    "northStar": "Recovered Core Funnel Conversion / Retention Rate at IndiGo",
    "leading": [
      "Step-level funnel conversion %",
      "OS/City segmented error & latency rate"
    ],
    "guardrails": [
      "Contribution margin / refund abuse rate",
      "Customer support ticket volume"
    ]
  },
  "synthesisScript": "For IndiGo’s Turbulence Over Indigo Skies (+20% Cancellations) case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Prioritize the highest-impact P0 bottleneck identified in Turbulence Over Indigo Skies (+20% Cancellations) before secondary optimizations. We will validate success via Recovered Core Funnel Conversion / Retention Rate at IndiGo while guarding against Contribution margin / refund abuse rate.",
  "interviewerTrap": "Jumping straight into discounts or UI redesigns before verifying data sanity, geo/OS segmentation, and exact funnel drop-off!",
  "variations": [
    {
      "question": "How would your recommendation change if IndiGo had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "RCA",
    "correctFramework": "Data Sanity → 5-Way Segmentation → Funnel Step Isolation → Internal vs External Causes",
    "structureOptions": [
      {
        "label": "Check Data Sanity → Segment (Geo/Platform/Cohort) → Isolate Funnel Step → Separate Internal vs External Causes",
        "correct": true,
        "feedback": "Exact RCA gold standard! Always narrow down WHERE it broke before asking WHY."
      },
      {
        "label": "Launch a 30% discount campaign immediately to recover lost volume",
        "correct": false,
        "feedback": "Discounts mask technical/ops bugs and destroy unit economics without fixing root cause."
      },
      {
        "label": "Redesign the entire app homepage and brand logo",
        "correct": false,
        "feedback": "Never jump to full redesigns before isolating which exact step failed."
      }
    ],
    "decisionQuiz": {
      "question": "Before diagnosing 'Turbulence Over Indigo Skies (+20% Cancellations)', what data sanity check prevents chasing false alarms?",
      "options": [
        {
          "label": "Verify sudden vs gradual timing, isolated geo/OS cuts, and whether tracking/logging definitions changed",
          "correct": true,
          "feedback": "Yes! Rules out logging bugs and pinpoints the affected slice."
        },
        {
          "label": "Ask for the CEO’s favorite color",
          "correct": false,
          "feedback": "Irrelevant to root-cause diagnosis."
        },
        {
          "label": "Compare against 10-year-old competitor stock prices",
          "correct": false,
          "feedback": "Too slow and disconnected from immediate funnel drops."
        }
      ]
    }
  }
},
{
  "id": "ecell-design-blinkit-group",
  "title": "Building the Future of Group Ordering at Blinkit",
  "company": "Blinkit",
  "source": "E-Cell IITG 2026-27",
  "track": "Product",
  "category": "Product Design",
  "difficulty": 1,
  "isStarter": true,
  "tags": [
    "Product Design",
    "CIRCLES",
    "Quick Commerce",
    "Group Ordering"
  ],
  "prompt": "You are a Product Manager at Blinkit. Your team has identified an opportunity to simplify grocery ordering for families, roommates, and office teams. Design a collaborative group ordering experience that solves this problem. Walk me through your product design process.",
  "clarifyingQuestions": [
    {
      "q": "Should this live inside the existing Blinkit app, and is the goal higher AOV or repeat usage?",
      "a": "Inside the existing Blinkit app; goal is easier group ordering and stronger repeat usage in India.",
      "why": "Keeps design lightweight and anchors metrics to group order repeat rate."
    }
  ],
  "frameworkUsed": "CIRCLES (Persona Selection → Pain Points → MVP Flow → Trade-offs & Metrics)",
  "coreEquation": "Group Order Value = Organizer Share Rate × Contributor Join Rate × Combined Basket AOV × Repeat Rate",
  "strategyOverview": "Identify 3 personas (Family/Home Organizer, Roommates/Flatmates, Office Teams). Pick Families & Roommates for v1 because they order frequently and informally (leaving formal corporate expense workflows for v2). Solve the P0 pain of sharing screenshots/WhatsApp lists and splitting bills awkwardly.",
  "tree": {
    "label": "Building the Future of Group Ordering at Blinkit — User & Product Tree",
    "valueText": "Persona → Pain → Fix",
    "children": [
      {
        "label": "1. Priority Persona Selection (Pick 1 Beachhead)",
        "valueText": "High Freq / Pain",
        "highlight": true
      },
      {
        "label": "2. End-to-End Journey & P0 Pain Points",
        "valueText": "Impact × Effort",
        "highlight": true
      },
      {
        "label": "3. MVP Solutions, Trade-offs & Guardrails",
        "valueText": "North Star"
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Candidate",
      "prompt": "You are a Product Manager at Blinkit. Your team has identified an opportunity to simplify grocery ordering for",
      "detail": "You are a Product Manager at Blinkit. Your team has identified an opportunity to simplify grocery ordering for families, roommates, and office teams. Design a collaborative group ordering experience that solves this problem. Walk me through your product design process.\nSure. Before I jump in, I want to clarify a few things. Are we building this within the existing Blinkit app or as a separate experience? And what is our main goal—larger basket sizes, better repeat usage, or simply reducing the friction of group ordering?\nAssume it is inside the existing app. The main goal is to make group ordering easier and impr"
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "For the first version, I’d focus on families and roommates because their ordering is more frequent and informa",
      "detail": "For the first version, I’d focus on families and roommates because their ordering is more frequent and informal. The office use case can come later.\nWhy not office teams first?\nOffice teams are a good second phase because their process is usually more structured.\nThey may already have a fixed coordinator, budget, and recurring orders. Families and roommates have a messier problem today—people send requests on WhatsApp, forget items, and someone has to manually combine everything. So I’d solve that first."
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "Fair. So what exactly is the problem in the current flow?",
      "detail": "Fair. So what exactly is the problem in the current flow?\nRight now, group ordering usually happens outside the shopping app. People send separate requests, the organizer manually searches for everything, items can be missed or duplicated, and there is often confusion about who asked for what.\nSo the real problem is not ordering groceries. It is collecting, coordinating, and combining everyone's requirements into one order with minimal effort.\nGood. How would you structure the journey?"
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "I’d think of it in five steps. First, the organizer creates a group order. Second, they invite others through ",
      "detail": "I’d think of it in five steps. First, the organizer creates a group order. Second, they invite others through a link or contacts. Third, everyone adds their own items to a shared cart.\nFourth, the organizer reviews and finalizes the basket. Fifth, they place the order normally. The key is that collaboration should feel natural without making the checkout process complicated.\nInteresting. Tell me more about the core flow.\nI’d keep the core flow very lightweight. The organizer taps “Create Group Order”, and Blinkit generates a shared cart and invite link. Once people join, they can browse the app and directly add i"
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "I’d also show who added each item. So instead of just seeing “Milk,” the organizer could see “Milk — Added by ",
      "detail": "I’d also show who added each item. So instead of just seeing “Milk,” the organizer could see “Milk — Added by Rahul.” This makes ownership visible, reduces duplicate requests, and makes the shared cart easier to manage.\nWhy keep one organizer in control? Why not let everyone check out together?\nBecause checkout needs one clear decision-maker. If multiple people can modify the final order at the same time, we could have confusion around deleted items, substitutions, delivery details, or payment. So I’d allow everyone to contribute freely, but keep the final checkout with one organizer. That gives us collaboration "
    }
  ],
  "recommendations": [
    "Prioritize the highest-impact P0 bottleneck identified in Building the Future of Group Ordering at Blinkit before secondary optimizations.",
    "Pilot the top intervention in a controlled cohort/region with clear North Star and guardrail tracking.",
    "Scale rollout only after verifying unit economics and zero adverse second-order effects."
  ],
  "metricsAndGuardrails": {
    "northStar": "Core Task Completion / Weekly Active Value Users for Blinkit",
    "leading": [
      "Feature discovery & Day-1 adoption %",
      "7-day repeat usage rate"
    ],
    "guardrails": [
      "Core app latency / checkout conversion",
      "Support tickets & uninstall rate"
    ]
  },
  "synthesisScript": "For Blinkit Group Ordering, I’ll prioritize Families & Roommates in v1 for high weekly frequency—shipping a 1-tap shareable WhatsApp cart link with live per-person item tags, host lock-before-checkout, and optional UPI split-pay, tracked via Group Order Repeat Rate and guarded against cart-abandonment latency.",
  "interviewerTrap": "Designing complex enterprise expense-approval workflows for office teams in v1 instead of shipping a frictionless 1-tap WhatsApp shared-cart link for roommates/families.",
  "variations": [
    {
      "question": "How would your recommendation change if Blinkit had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Product Design",
    "correctFramework": "CIRCLES (Goal → Priority Persona → Journey Pain Points → Prioritized MVP → Trade-offs & Metrics)",
    "structureOptions": [
      {
        "label": "Clarify Goal → Pick 1 Priority Persona → Map Pain Points → Rank P0 Fixes → Define North Star & Trade-offs",
        "correct": true,
        "feedback": "Crisp CIRCLES flow! Selecting one persona shows real PM discipline."
      },
      {
        "label": "Suggest adding AI chatbots, AR, crypto rewards, and dark mode immediately",
        "correct": false,
        "feedback": "Buzzword feature-dumping without user pain grounding fails PM interviews."
      },
      {
        "label": "Run a supply-side Value Chain raw-material audit",
        "correct": false,
        "feedback": "That belongs to manufacturing Profitability, not Product Design/UX."
      }
    ],
    "decisionQuiz": {
      "question": "After identifying 3 user personas in a Product Design/Improvement case, what is the strongest move?",
      "options": [
        {
          "label": "Pick ONE primary persona for v1 based on frequency/pain and explain why others wait for v2",
          "correct": true,
          "feedback": "Exactly! Solving deeply for one segment beats building a mediocre tool for everyone."
        },
        {
          "label": "Design separate apps for all 3 simultaneously",
          "correct": false,
          "feedback": "Fragments engineering focus and UX coherence."
        },
        {
          "label": "Skip personas and start pricing tiers",
          "correct": false,
          "feedback": "You must understand user needs before designing or pricing."
        }
      ]
    }
  }
},
{
  "id": "ecell-design-canva-ai",
  "title": "Building the Next AI Feature for Canva",
  "company": "Canva",
  "source": "E-Cell IITG 2026-27",
  "track": "Product",
  "category": "Product Design",
  "difficulty": 2,
  "isStarter": false,
  "tags": [
    "Canva",
    "Product Design",
    "Product"
  ],
  "prompt": "Assume you are a Product Manager at Canva. The team wants to introduce a new AI- powered capability that helps users create content faster while maintaining design quality. Design this feature from scratch and explain your approach.]] Before suggesting solutions, may I ask a few clarifying questions?",
  "clarifyingQuestions": [
    {
      "q": "First, are we targeting all Canva users, or a specific segment — like individual creators, small businesses, or enterprise/Teams users?",
      "a": "Focus on individual creators and small businesses for now, they're the bulk of Canva's user base.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Got it. And when we say \"create content faster,\" are we talking about speeding up the initial creation (going from blank canvas to a first draft), or speeding up editing/iteration on an existing design?",
      "a": "Both, but the bigger pain point is going from a blank canvas to a usable first draft.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Understood. One more — is the goal purely speed, or are we also trying to help users who lack design skill/confidence produce quality output? I ask because those are slightly different problems: one is about efficiency, ",
      "a": "Both matter, but if you had to prioritize, capability — helping non-designers produce quality output faster — is the bigger business goal.",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "CIRCLES (Goal → Priority Persona → Journey Pain Points → Prioritized MVP → Trade-offs & Metrics)",
  "coreEquation": "Product Impact = Priority Persona Frequency × P0 Pain Severity × Adoption %",
  "strategyOverview": "Approach Building the Next AI Feature for Canva (Canva) using a Product Design structure: start by confirming the business objective and scope, decompose the problem cleanly along CIRCLES (Goal → Priority Persona → Journey Pain Points → Prioritized MVP → Trade-offs & Metrics), and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Building the Next AI Feature for Canva — User & Product Tree",
    "valueText": "Persona → Pain → Fix",
    "children": [
      {
        "label": "1. Priority Persona Selection (Pick 1 Beachhead)",
        "valueText": "High Freq / Pain",
        "highlight": true
      },
      {
        "label": "2. End-to-End Journey & P0 Pain Points",
        "valueText": "Impact × Effort",
        "highlight": true
      },
      {
        "label": "3. MVP Solutions, Trade-offs & Guardrails",
        "valueText": "North Star"
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Interviewer",
      "prompt": "Assume you are a Product Manager at Canva. The team wants to introduce a new AI- powered capability that helps",
      "detail": "Assume you are a Product Manager at Canva. The team wants to introduce a new AI- powered capability that helps users create content faster while maintaining design quality. Design this feature from scratch and explain your approach.]] Before suggesting solutions, may I ask a few clarifying questions?\nFirst, are we targeting all Canva users, or a specific segment — like individual creators, small businesses, or enterprise/Teams users?\nFocus on individual creators and small businesses for now, they're the bulk of Canva's user base.\nGot it. And when we say \"create content faster,\" are we talking about speeding up th"
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "Both, but the bigger pain point is going from a blank canvas to a usable first draft.",
      "detail": "Both, but the bigger pain point is going from a blank canvas to a usable first draft.\nUnderstood. One more — is the goal purely speed, or are we also trying to help users who lack design skill/confidence produce quality output? I ask because those are slightly different problems: one is about efficiency, the other is about capability.\nBoth matter, but if you had to prioritize, capability — helping non-designers produce quality output faster — is the bigger business goal.\nThat's helpful, it reframes the feature. Let's talk about users."
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "If I think about Canva's individual/SMB users, I'd segment them into three types:",
      "detail": "If I think about Canva's individual/SMB users, I'd segment them into three types:\nNon-designers (small business owners, students, social media managers) — need speed and confidence, don't know design principles.\nSemi-skilled hobbyists — know some design basics, want faster iteration and inspiration, not full automation.\nPower users/prosumers — freelancers, agencies using Canva professionally, want AI as an accelerant, not a replacement, and care about control and brand consistency."
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "That's a fair segmentation. Now, what's the actual gap in Canva's current experience?",
      "detail": "That's a fair segmentation. Now, what's the actual gap in Canva's current experience?\nCanva already offers templates and AI tools like Magic Design and text-to-image, but users still need to go through multiple steps to turn an idea into a polished, on-brand design. Non-designers often struggle to judge what looks good, leading to over-editing or inconsistent results. There’s no single flow from a rough idea, image, or document to a finished, multi-format deliverable.\nFair point. So how would you structure your solution?\nI’d think of it in two layers: what we offer and how it works."
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "Offering layer — I’d build Canva Copilot, a conversational AI alongside the canvas. Users describe what they n",
      "detail": "Offering layer — I’d build Canva Copilot, a conversational AI alongside the canvas. Users describe what they need or upload assets like logos and photos, and Copilot creates a complete, on-brand draft. They can then refine it with simple prompts instead of editing every element manually.\nHow it works — It combines a design-rules engine for layout and hierarchy, Brand Kit awareness for consistency, and generative AI for text and imagery, all working together in one flow.\nWhat would the user experience feel like?\nIt should feel like a creative collaborator, not a black box. The user always sees the AI's draft as fu"
    }
  ],
  "recommendations": [
    "Prioritize the highest-impact P0 bottleneck identified in Building the Next AI Feature for Canva before secondary optimizations.",
    "Pilot the top intervention in a controlled cohort/region with clear North Star and guardrail tracking.",
    "Scale rollout only after verifying unit economics and zero adverse second-order effects."
  ],
  "metricsAndGuardrails": {
    "northStar": "Core Task Completion / Weekly Active Value Users for Canva",
    "leading": [
      "Feature discovery & Day-1 adoption %",
      "7-day repeat usage rate"
    ],
    "guardrails": [
      "Core app latency / checkout conversion",
      "Support tickets & uninstall rate"
    ]
  },
  "synthesisScript": "For Canva’s Building the Next AI Feature for Canva case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Prioritize the highest-impact P0 bottleneck identified in Building the Next AI Feature for Canva before secondary optimizations. We will validate success via Core Task Completion / Weekly Active Value Users for Canva while guarding against Core app latency / checkout conversion.",
  "interviewerTrap": "Listing 8 shiny features for 'all users' without picking ONE priority persona, ranking pain points, or naming trade-offs!",
  "variations": [
    {
      "question": "How would your recommendation change if Canva had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Product Design",
    "correctFramework": "CIRCLES (Goal → Priority Persona → Journey Pain Points → Prioritized MVP → Trade-offs & Metrics)",
    "structureOptions": [
      {
        "label": "Clarify Goal → Pick 1 Priority Persona → Map Pain Points → Rank P0 Fixes → Define North Star & Trade-offs",
        "correct": true,
        "feedback": "Crisp CIRCLES flow! Selecting one persona shows real PM discipline."
      },
      {
        "label": "Suggest adding AI chatbots, AR, crypto rewards, and dark mode immediately",
        "correct": false,
        "feedback": "Buzzword feature-dumping without user pain grounding fails PM interviews."
      },
      {
        "label": "Run a supply-side Value Chain raw-material audit",
        "correct": false,
        "feedback": "That belongs to manufacturing Profitability, not Product Design/UX."
      }
    ],
    "decisionQuiz": {
      "question": "After identifying 3 user personas in a Product Design/Improvement case, what is the strongest move?",
      "options": [
        {
          "label": "Pick ONE primary persona for v1 based on frequency/pain and explain why others wait for v2",
          "correct": true,
          "feedback": "Exactly! Solving deeply for one segment beats building a mediocre tool for everyone."
        },
        {
          "label": "Design separate apps for all 3 simultaneously",
          "correct": false,
          "feedback": "Fragments engineering focus and UX coherence."
        },
        {
          "label": "Skip personas and start pricing tiers",
          "correct": false,
          "feedback": "You must understand user needs before designing or pricing."
        }
      ]
    }
  }
},
{
  "id": "ecell-design-cred-credit",
  "title": "Reimagining Credit for First-Time Professionals at CRED",
  "company": "CRED",
  "source": "E-Cell IITG 2026-27",
  "track": "Product",
  "category": "Product Design",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "CRED",
    "Product Design",
    "Product"
  ],
  "prompt": "Reimagining Credit for CRED Assume you are a Product Manager at CRED. The company wants to launch a product that helps first-time salaried professionals build their credit profile. How would you approach it?",
  "clarifyingQuestions": [
    {
      "q": "How would you structure your solution?",
      "a": "The biggest is credit invisibility. Users also often don’t understand what improves or hurts their score, and many are worried about taking on debt. So the product needs to provide both access and guidance.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "What would the experience look like?",
      "a": "A user enters Build Credit, completes a short eligibility flow, and gets a secured-card offer. CRED then tracks repayments and explains credit progress in simple language.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "What powers this behind the scenes?",
      "a": "Banks or NBFCs would provide the credit infrastructure, while bureaus like CIBIL and Experian handle formal credit reporting. CRED can also use its existing bill-payment and transaction data to help partners understand repayment behaviour.",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "CIRCLES (Goal → Priority Persona → Journey Pain Points → Prioritized MVP → Trade-offs & Metrics)",
  "coreEquation": "Product Impact = Priority Persona Frequency × P0 Pain Severity × Adoption %",
  "strategyOverview": "Approach Reimagining Credit for First-Time Professionals at CRED (CRED) using a Product Design structure: start by confirming the business objective and scope, decompose the problem cleanly along CIRCLES (Goal → Priority Persona → Journey Pain Points → Prioritized MVP → Trade-offs & Metrics), and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Reimagining Credit for First-Time Professionals at CRED — User & Product Tree",
    "valueText": "Persona → Pain → Fix",
    "children": [
      {
        "label": "1. Priority Persona Selection (Pick 1 Beachhead)",
        "valueText": "High Freq / Pain",
        "highlight": true
      },
      {
        "label": "2. End-to-End Journey & P0 Pain Points",
        "valueText": "Impact × Effort",
        "highlight": true
      },
      {
        "label": "3. MVP Solutions, Trade-offs & Guardrails",
        "valueText": "North Star"
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Interviewer",
      "prompt": "Reimagining Credit for CRED Assume you are a Product Manager at CRED. The company wants to launch a product th",
      "detail": "Reimagining Credit for CRED Assume you are a Product Manager at CRED. The company wants to launch a product that helps first-time salaried professionals build their credit profile. How would you approach it?\nI’d first clarify whether we’re targeting completely new-to-credit users or people with a thin credit history.\nFocus on true first-timers with no prior credit history. CRED will provide it through bank and NBFC partnerships.\nGot it. I’d keep it inside the existing CRED app. The core problem is a credit catch-22: users have no history, so lenders reject them, but without credit they have no way to build that h"
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "How would you structure your solution?",
      "detail": "How would you structure your solution?\nThe biggest is credit invisibility. Users also often don’t understand what improves or hurts their score, and many are worried about taking on debt. So the product needs to provide both access and guidance.\nWhat would the experience look like?\nA user enters Build Credit, completes a short eligibility flow, and gets a secured-card offer. CRED then tracks repayments and explains credit progress in simple language."
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "Over time, users can graduate to better credit products without repeating the entire journey. If they miss a p",
      "detail": "Over time, users can graduate to better credit products without repeating the entire journey. If they miss a payment, CRED should proactively remind them and explain the impact.\nWhat powers this behind the scenes?\nBanks or NBFCs would provide the credit infrastructure, while bureaus like CIBIL and Experian handle formal credit reporting. CRED can also use its existing bill-payment and transaction data to help partners understand repayment behaviour.\nWhat would you launch first?"
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "For V1, I’d focus on the secured card, Credit Builder tracker, and payment reminders or autopay. Later, we can",
      "detail": "For V1, I’d focus on the secured card, Credit Builder tracker, and payment reminders or autopay. Later, we can add automatic upgrades and personalized financial-literacy nudges.\nWho would you benchmark against and what would you measure?\nI’d look at products like OneCard and Slice, along with international credit-building products. I’d track activation, repayment rate, time to score visibility, repeat usage, and the rate at which users graduate to unsecured credit.\nWhat would success look like?"
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "For CRED, it would mean strong card adoption, low default rates, and a healthy upgrade pipeline. For users, it",
      "detail": "For CRED, it would mean strong card adoption, low default rates, and a healthy upgrade pipeline. For users, it would mean visible credit progress, responsible repayment, and a clear path to mainstream credit.\nI’d add a simple Credit Myths section to address common misconceptions and encourage responsible borrowing. The goal is not just to give users credit, but to help them build a healthy credit profile responsibly.\nOkay, and what powers all this behind the scenes?\nThe infrastructure runs on bank/NBFC partnerships for the FD-backed secured card, and integration with credit bureaus like CIBIL and Experian for rea"
    }
  ],
  "recommendations": [
    "Prioritize the highest-impact P0 bottleneck identified in Reimagining Credit for First-Time Professionals at CRED before secondary optimizations.",
    "Pilot the top intervention in a controlled cohort/region with clear North Star and guardrail tracking.",
    "Scale rollout only after verifying unit economics and zero adverse second-order effects."
  ],
  "metricsAndGuardrails": {
    "northStar": "Core Task Completion / Weekly Active Value Users for CRED",
    "leading": [
      "Feature discovery & Day-1 adoption %",
      "7-day repeat usage rate"
    ],
    "guardrails": [
      "Core app latency / checkout conversion",
      "Support tickets & uninstall rate"
    ]
  },
  "synthesisScript": "For CRED’s Reimagining Credit for First-Time Professionals at CRED case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Prioritize the highest-impact P0 bottleneck identified in Reimagining Credit for First-Time Professionals at CRED before secondary optimizations. We will validate success via Core Task Completion / Weekly Active Value Users for CRED while guarding against Core app latency / checkout conversion.",
  "interviewerTrap": "Listing 8 shiny features for 'all users' without picking ONE priority persona, ranking pain points, or naming trade-offs!",
  "variations": [
    {
      "question": "How would your recommendation change if CRED had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Product Design",
    "correctFramework": "CIRCLES (Goal → Priority Persona → Journey Pain Points → Prioritized MVP → Trade-offs & Metrics)",
    "structureOptions": [
      {
        "label": "Clarify Goal → Pick 1 Priority Persona → Map Pain Points → Rank P0 Fixes → Define North Star & Trade-offs",
        "correct": true,
        "feedback": "Crisp CIRCLES flow! Selecting one persona shows real PM discipline."
      },
      {
        "label": "Suggest adding AI chatbots, AR, crypto rewards, and dark mode immediately",
        "correct": false,
        "feedback": "Buzzword feature-dumping without user pain grounding fails PM interviews."
      },
      {
        "label": "Run a supply-side Value Chain raw-material audit",
        "correct": false,
        "feedback": "That belongs to manufacturing Profitability, not Product Design/UX."
      }
    ],
    "decisionQuiz": {
      "question": "After identifying 3 user personas in a Product Design/Improvement case, what is the strongest move?",
      "options": [
        {
          "label": "Pick ONE primary persona for v1 based on frequency/pain and explain why others wait for v2",
          "correct": true,
          "feedback": "Exactly! Solving deeply for one segment beats building a mediocre tool for everyone."
        },
        {
          "label": "Design separate apps for all 3 simultaneously",
          "correct": false,
          "feedback": "Fragments engineering focus and UX coherence."
        },
        {
          "label": "Skip personas and start pricing tiers",
          "correct": false,
          "feedback": "You must understand user needs before designing or pricing."
        }
      ]
    }
  }
},
{
  "id": "ecell-design-phonepe-bank",
  "title": "When PhonePe Became the Bank (Lending Feature)",
  "company": "PhonePe",
  "source": "E-Cell IITG 2026-27",
  "track": "Product",
  "category": "Product Design",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "PhonePe",
    "Product Design",
    "Product"
  ],
  "prompt": "Imagine you’re a PM at PhonePe, and the company wants to add a lending feature inside the app. How would you approach it?",
  "clarifyingQuestions": [
    {
      "q": "I’d start by clarifying the context. Are we targeting all users or specific segments like salaried individuals or small businesses?",
      "a": "Focus on retail PhonePe users for now.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Got it. And are we thinking of instant credit like BNPL or longer-tenure personal loans?",
      "a": "Both. Start with instant and personal loans.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Understood. Will PhonePe lend directly or partner with NBFCs or banks?",
      "a": "Through partners.",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "CIRCLES (Goal → Priority Persona → Journey Pain Points → Prioritized MVP → Trade-offs & Metrics)",
  "coreEquation": "Product Impact = Priority Persona Frequency × P0 Pain Severity × Adoption %",
  "strategyOverview": "Approach When PhonePe Became the Bank (Lending Feature) (PhonePe) using a Product Design structure: start by confirming the business objective and scope, decompose the problem cleanly along CIRCLES (Goal → Priority Persona → Journey Pain Points → Prioritized MVP → Trade-offs & Metrics), and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "When PhonePe Became the Bank (Lending Feature) — User & Product Tree",
    "valueText": "Persona → Pain → Fix",
    "children": [
      {
        "label": "1. Priority Persona Selection (Pick 1 Beachhead)",
        "valueText": "High Freq / Pain",
        "highlight": true
      },
      {
        "label": "2. End-to-End Journey & P0 Pain Points",
        "valueText": "Impact × Effort",
        "highlight": true
      },
      {
        "label": "3. MVP Solutions, Trade-offs & Guardrails",
        "valueText": "North Star"
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Interviewer",
      "prompt": "Imagine you’re a PM at PhonePe, and the company wants to add a lending feature inside the app. How would you a",
      "detail": "Imagine you’re a PM at PhonePe, and the company wants to add a lending feature inside the app. How would you approach it?\nI’d start by clarifying the context. Are we targeting all users or specific segments like salaried individuals or small businesses?\nFocus on retail PhonePe users for now.\nGot it. And are we thinking of instant credit like BNPL or longer-tenure personal loans?"
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "Both. Start with instant and personal loans.",
      "detail": "Both. Start with instant and personal loans.\nUnderstood. Will PhonePe lend directly or partner with NBFCs or banks?\nGreat. Then the core problem is access to fast, affordable credit. Many users find traditional loans slow or paperwork-heavy.\nPhonePe already has a very big user base, trust, verified KYC, and deep transaction data, the right base to build quick, transparent, and inclusive lending."
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "Fair point. How would you structure your solution?",
      "detail": "Fair point. How would you structure your solution?\nI’d think of it in three layers: what we offer, how it works underneath, and what the user experiences.\nAt the top are the offerings. I’d start with small-ticket instant loans for quick cash needs, personal loans for larger spends, and a “buy now, pay later” option for regular bills and recharges. Over time, we could even add a revolving credit line inside the app so users can borrow again without reapplying.\nOkay, and what powers all this behind the scenes?"
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "The infrastructure would run on partnerships. NBFCs or banks provide the capital.",
      "detail": "The infrastructure would run on partnerships. NBFCs or banks provide the capital.\nPhonePe can use its own transaction data combined with CIBIL scores for smarter credit decisions. Onboarding stays frictionless with Aadhaar e-KYC, instant approval, and UPI auto-debit for repayments.\nMakes sense. What about the user experience?\nIt should feel completely native to PhonePe: clean, transparent, and trustworthy. Users should see their eligibility and offers upfront, with no fine print."
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "They can track repayments easily and even earn small rewards or badges for timely EMIs. Everything, from loan ",
      "detail": "They can track repayments easily and even earn small rewards or badges for timely EMIs. Everything, from loan status to repayment reminders should live right inside the main PhonePe dashboard.\nAnd what would a typical user journey look like?\nA first-time user opens the “Lending” section, the app checks eligibility in the background, an offer appears, they complete KYC and e-sign, and the amount is disbursed instantly. Repayments happen automatically through UPI mandates with gentle reminders.\nA repeat user simply visits “My Loans,” withdraws again from the approved credit line, and tracks EMIs."
    }
  ],
  "recommendations": [
    "Prioritize the highest-impact P0 bottleneck identified in When PhonePe Became the Bank (Lending Feature) before secondary optimizations.",
    "Pilot the top intervention in a controlled cohort/region with clear North Star and guardrail tracking.",
    "Scale rollout only after verifying unit economics and zero adverse second-order effects."
  ],
  "metricsAndGuardrails": {
    "northStar": "Core Task Completion / Weekly Active Value Users for PhonePe",
    "leading": [
      "Feature discovery & Day-1 adoption %",
      "7-day repeat usage rate"
    ],
    "guardrails": [
      "Core app latency / checkout conversion",
      "Support tickets & uninstall rate"
    ]
  },
  "synthesisScript": "For PhonePe’s When PhonePe Became the Bank (Lending Feature) case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Prioritize the highest-impact P0 bottleneck identified in When PhonePe Became the Bank (Lending Feature) before secondary optimizations. We will validate success via Core Task Completion / Weekly Active Value Users for PhonePe while guarding against Core app latency / checkout conversion.",
  "interviewerTrap": "Listing 8 shiny features for 'all users' without picking ONE priority persona, ranking pain points, or naming trade-offs!",
  "variations": [
    {
      "question": "How would your recommendation change if PhonePe had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Product Design",
    "correctFramework": "CIRCLES (Goal → Priority Persona → Journey Pain Points → Prioritized MVP → Trade-offs & Metrics)",
    "structureOptions": [
      {
        "label": "Clarify Goal → Pick 1 Priority Persona → Map Pain Points → Rank P0 Fixes → Define North Star & Trade-offs",
        "correct": true,
        "feedback": "Crisp CIRCLES flow! Selecting one persona shows real PM discipline."
      },
      {
        "label": "Suggest adding AI chatbots, AR, crypto rewards, and dark mode immediately",
        "correct": false,
        "feedback": "Buzzword feature-dumping without user pain grounding fails PM interviews."
      },
      {
        "label": "Run a supply-side Value Chain raw-material audit",
        "correct": false,
        "feedback": "That belongs to manufacturing Profitability, not Product Design/UX."
      }
    ],
    "decisionQuiz": {
      "question": "After identifying 3 user personas in a Product Design/Improvement case, what is the strongest move?",
      "options": [
        {
          "label": "Pick ONE primary persona for v1 based on frequency/pain and explain why others wait for v2",
          "correct": true,
          "feedback": "Exactly! Solving deeply for one segment beats building a mediocre tool for everyone."
        },
        {
          "label": "Design separate apps for all 3 simultaneously",
          "correct": false,
          "feedback": "Fragments engineering focus and UX coherence."
        },
        {
          "label": "Skip personas and start pricing tiers",
          "correct": false,
          "feedback": "You must understand user needs before designing or pricing."
        }
      ]
    }
  }
},
{
  "id": "ecell-design-donation-app",
  "title": "Trust Me, I’m Donating (Transparent Donation App)",
  "company": "Social Impact",
  "source": "E-Cell IITG 2026-27",
  "track": "Product",
  "category": "Product Design",
  "difficulty": 2,
  "isStarter": false,
  "tags": [
    "Social Impact",
    "Product Design",
    "Product"
  ],
  "prompt": "Your task is to design a donation app that is easy to use and builds trust by showing users exactly how their contributions make an impact. How would you approach this?",
  "clarifyingQuestions": [
    {
      "q": "Before suggesting solutions, may I ask a few clarifying questions?",
      "a": "Sure, go ahead.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Firstly, should the focus be purely on transparency and showing impact, or should we also include engagement features like gamification and recurring donations?",
      "a": "Transparency is the priority for individual donors, though engagement can come later.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Would recurring donations change your approach?",
      "a": "Yes, slightly. Features like “Adopt-a-Cause” or reminders could support recurring giving, but the core remains clear and verified impact updates.",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "CIRCLES (Goal → Priority Persona → Journey Pain Points → Prioritized MVP → Trade-offs & Metrics)",
  "coreEquation": "Product Impact = Priority Persona Frequency × P0 Pain Severity × Adoption %",
  "strategyOverview": "Approach Trust Me, I’m Donating (Transparent Donation App) (Social Impact) using a Product Design structure: start by confirming the business objective and scope, decompose the problem cleanly along CIRCLES (Goal → Priority Persona → Journey Pain Points → Prioritized MVP → Trade-offs & Metrics), and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Trust Me, I’m Donating (Transparent Donation App) — User & Product Tree",
    "valueText": "Persona → Pain → Fix",
    "children": [
      {
        "label": "1. Priority Persona Selection (Pick 1 Beachhead)",
        "valueText": "High Freq / Pain",
        "highlight": true
      },
      {
        "label": "2. End-to-End Journey & P0 Pain Points",
        "valueText": "Impact × Effort",
        "highlight": true
      },
      {
        "label": "3. MVP Solutions, Trade-offs & Guardrails",
        "valueText": "North Star"
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Interviewer",
      "prompt": "Your task is to design a donation app that is easy to use and builds trust by showing users exactly how their ",
      "detail": "Your task is to design a donation app that is easy to use and builds trust by showing users exactly how their contributions make an impact. How would you approach this?\nBefore suggesting solutions, may I ask a few clarifying questions?\nFirstly, should the focus be purely on transparency and showing impact, or should we also include engagement features like gamification and recurring donations?"
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "Transparency is the priority for individual donors, though engagement can come later.",
      "detail": "Transparency is the priority for individual donors, though engagement can come later.\nWould recurring donations change your approach?\nYes, slightly. Features like “Adopt-a-Cause” or reminders could support recurring giving, but the core remains clear and verified impact updates."
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "Who are your target users, and how would you make the impact tangible for them?",
      "detail": "Who are your target users, and how would you make the impact tangible for them?\nAt first, individual donors, both one-time and regular, who want proof of impact and ease of use. It would be clear what the impact was if there were clear results like with pictures, videos, and dashboards. This can also be done through instagram pages.\nLater, corporates and CSR teams could be included, as well as philanthropic families who prefer recurring contributions and detailed impact tracking."
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "What features would ensure transparency and trust, and how would you handle advanced options like blockchain?",
      "detail": "What features would ensure transparency and trust, and how would you handle advanced options like blockchain?\nI believe for this case, building trust is the key. Donors often worry about whether their money really reaches the cause or not.\nTo address that, I’d start with verified updates from NGOs showing real progress, include cumulative impact dashboards so donors can track results over time, and offer optional blockchain tracking for tech-savvy users who want complete visibility, however integrating a full blockchain model could be costly."
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "How would you encourage repeat donations?",
      "detail": "How would you encourage repeat donations?\nYes, keeping donors connected is a challenge because donors often stop engaging after a single contribution. I think what can work is for individual donors, I’d use badges, milestones, social sharing, and a recurring program to maintain interest. Making an active community of people where everyone encourages others to donate is the key.\nWould these engagement features work for corporate donors too?"
    }
  ],
  "recommendations": [
    "Prioritize the highest-impact P0 bottleneck identified in Trust Me, I’m Donating (Transparent Donation App) before secondary optimizations.",
    "Pilot the top intervention in a controlled cohort/region with clear North Star and guardrail tracking.",
    "Scale rollout only after verifying unit economics and zero adverse second-order effects."
  ],
  "metricsAndGuardrails": {
    "northStar": "Core Task Completion / Weekly Active Value Users for Social Impact",
    "leading": [
      "Feature discovery & Day-1 adoption %",
      "7-day repeat usage rate"
    ],
    "guardrails": [
      "Core app latency / checkout conversion",
      "Support tickets & uninstall rate"
    ]
  },
  "synthesisScript": "For Social Impact’s Trust Me, I’m Donating (Transparent Donation App) case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Prioritize the highest-impact P0 bottleneck identified in Trust Me, I’m Donating (Transparent Donation App) before secondary optimizations. We will validate success via Core Task Completion / Weekly Active Value Users for Social Impact while guarding against Core app latency / checkout conversion.",
  "interviewerTrap": "Listing 8 shiny features for 'all users' without picking ONE priority persona, ranking pain points, or naming trade-offs!",
  "variations": [
    {
      "question": "How would your recommendation change if Social Impact had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Product Design",
    "correctFramework": "CIRCLES (Goal → Priority Persona → Journey Pain Points → Prioritized MVP → Trade-offs & Metrics)",
    "structureOptions": [
      {
        "label": "Clarify Goal → Pick 1 Priority Persona → Map Pain Points → Rank P0 Fixes → Define North Star & Trade-offs",
        "correct": true,
        "feedback": "Crisp CIRCLES flow! Selecting one persona shows real PM discipline."
      },
      {
        "label": "Suggest adding AI chatbots, AR, crypto rewards, and dark mode immediately",
        "correct": false,
        "feedback": "Buzzword feature-dumping without user pain grounding fails PM interviews."
      },
      {
        "label": "Run a supply-side Value Chain raw-material audit",
        "correct": false,
        "feedback": "That belongs to manufacturing Profitability, not Product Design/UX."
      }
    ],
    "decisionQuiz": {
      "question": "After identifying 3 user personas in a Product Design/Improvement case, what is the strongest move?",
      "options": [
        {
          "label": "Pick ONE primary persona for v1 based on frequency/pain and explain why others wait for v2",
          "correct": true,
          "feedback": "Exactly! Solving deeply for one segment beats building a mediocre tool for everyone."
        },
        {
          "label": "Design separate apps for all 3 simultaneously",
          "correct": false,
          "feedback": "Fragments engineering focus and UX coherence."
        },
        {
          "label": "Skip personas and start pricing tiers",
          "correct": false,
          "feedback": "You must understand user needs before designing or pricing."
        }
      ]
    }
  }
},
{
  "id": "ecell-design-child-safety",
  "title": "Who Let the Kids Out? (Child Safety App)",
  "company": "Consumer Tech",
  "source": "E-Cell IITG 2026-27",
  "track": "Product",
  "category": "Product Design",
  "difficulty": 2,
  "isStarter": false,
  "tags": [
    "Consumer Tech",
    "Product Design",
    "Product"
  ],
  "prompt": "Your task is to design a product that lets Indian parents monitor and safeguard their child when the child is away from home. How would you approach it?",
  "clarifyingQuestions": [
    {
      "q": "First, what age group are we talking about? And are we considering both urban and rural families? The challenges, connectivity and infrastructure are very different.",
      "a": "School-going kids, let’s say 5 to 14 years. We consider both types of families, but you can prioritize where the opportunity is bigger.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Okay. And in terms of affordability, what’s the budget range?",
      "a": "Middle-class households, roughly ₹3–15 lakhs annual income. Parents are price- conscious, but safety is something they’d spend on.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Makes sense. And last question, can I assume parents have smartphones?",
      "a": "Yes, assume smartphones, but digital literacy varies. Who do you see as the primary users?",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "CIRCLES (Goal → Priority Persona → Journey Pain Points → Prioritized MVP → Trade-offs & Metrics)",
  "coreEquation": "Product Impact = Priority Persona Frequency × P0 Pain Severity × Adoption %",
  "strategyOverview": "Approach Who Let the Kids Out? (Child Safety App) (Consumer Tech) using a Product Design structure: start by confirming the business objective and scope, decompose the problem cleanly along CIRCLES (Goal → Priority Persona → Journey Pain Points → Prioritized MVP → Trade-offs & Metrics), and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Who Let the Kids Out? (Child Safety App) — User & Product Tree",
    "valueText": "Persona → Pain → Fix",
    "children": [
      {
        "label": "1. Priority Persona Selection (Pick 1 Beachhead)",
        "valueText": "High Freq / Pain",
        "highlight": true
      },
      {
        "label": "2. End-to-End Journey & P0 Pain Points",
        "valueText": "Impact × Effort",
        "highlight": true
      },
      {
        "label": "3. MVP Solutions, Trade-offs & Guardrails",
        "valueText": "North Star"
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Interviewer",
      "prompt": "Your task is to design a product that lets Indian parents monitor and safeguard their child when the child is ",
      "detail": "Your task is to design a product that lets Indian parents monitor and safeguard their child when the child is away from home. How would you approach it?\nBefore I jump in, can I clarify a few things?\nFirst, what age group are we talking about? And are we considering both urban and rural families? The challenges, connectivity and infrastructure are very different.\nSchool-going kids, let’s say 5 to 14 years. We consider both types of families, but you can prioritize where the opportunity is bigger."
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "Okay. And in terms of affordability, what’s the budget range?",
      "detail": "Okay. And in terms of affordability, what’s the budget range?\nMiddle-class households, roughly ₹3–15 lakhs annual income. Parents are price- conscious, but safety is something they’d spend on.\nMakes sense. And last question, can I assume parents have smartphones?\nYes, assume smartphones, but digital literacy varies. Who do you see as the primary users?"
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "Three main segments:",
      "detail": "Three main segments:\nUrban working parents, both parents employed, kids commute alone or in buses.\nVery tech-comfortable.\nSuburban families who have one parent often at home, but still anxious about commutes and playtime. Moderate tech adoption."
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "Tier-2 and Tier-3 parents who are more price-sensitive, connectivity issues, but catching up on tech.",
      "detail": "Tier-2 and Tier-3 parents who are more price-sensitive, connectivity issues, but catching up on tech.\nAnd the main pain points?\nThe biggest one is location anxiety, parents not knowing exactly where their child is or whether they reached safely.\nThe second is unreliable child-initiated communication, kids forget to call or can’t respond quickly when something’s wrong, especially small kids."
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "Another big one, especially in India, is hesitation to give children smartphones as parents want them to stay ",
      "detail": "Another big one, especially in India, is hesitation to give children smartphones as parents want them to stay connected but without distractions like games or social media. Also, in most schools, carrying a smartphone is not allowed.\nAnd finally, infrastructure issues especially in Tier-2,3 cities poor GPS accuracy in congested areas, network drops, or battery drainage can make existing tracking apps frustrating.\nPropose your solution.\nParents want a controlled device, not a full smartphone. I’d go with a wrist wearable for the child since it’s affordable and comfortable for kids plus a mobile app for the parents"
    }
  ],
  "recommendations": [
    "Prioritize the highest-impact P0 bottleneck identified in Who Let the Kids Out? (Child Safety App) before secondary optimizations.",
    "Pilot the top intervention in a controlled cohort/region with clear North Star and guardrail tracking.",
    "Scale rollout only after verifying unit economics and zero adverse second-order effects."
  ],
  "metricsAndGuardrails": {
    "northStar": "Core Task Completion / Weekly Active Value Users for Consumer Tech",
    "leading": [
      "Feature discovery & Day-1 adoption %",
      "7-day repeat usage rate"
    ],
    "guardrails": [
      "Core app latency / checkout conversion",
      "Support tickets & uninstall rate"
    ]
  },
  "synthesisScript": "For Consumer Tech’s Who Let the Kids Out? (Child Safety App) case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Prioritize the highest-impact P0 bottleneck identified in Who Let the Kids Out? (Child Safety App) before secondary optimizations. We will validate success via Core Task Completion / Weekly Active Value Users for Consumer Tech while guarding against Core app latency / checkout conversion.",
  "interviewerTrap": "Listing 8 shiny features for 'all users' without picking ONE priority persona, ranking pain points, or naming trade-offs!",
  "variations": [
    {
      "question": "How would your recommendation change if Consumer Tech had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Product Design",
    "correctFramework": "CIRCLES (Goal → Priority Persona → Journey Pain Points → Prioritized MVP → Trade-offs & Metrics)",
    "structureOptions": [
      {
        "label": "Clarify Goal → Pick 1 Priority Persona → Map Pain Points → Rank P0 Fixes → Define North Star & Trade-offs",
        "correct": true,
        "feedback": "Crisp CIRCLES flow! Selecting one persona shows real PM discipline."
      },
      {
        "label": "Suggest adding AI chatbots, AR, crypto rewards, and dark mode immediately",
        "correct": false,
        "feedback": "Buzzword feature-dumping without user pain grounding fails PM interviews."
      },
      {
        "label": "Run a supply-side Value Chain raw-material audit",
        "correct": false,
        "feedback": "That belongs to manufacturing Profitability, not Product Design/UX."
      }
    ],
    "decisionQuiz": {
      "question": "After identifying 3 user personas in a Product Design/Improvement case, what is the strongest move?",
      "options": [
        {
          "label": "Pick ONE primary persona for v1 based on frequency/pain and explain why others wait for v2",
          "correct": true,
          "feedback": "Exactly! Solving deeply for one segment beats building a mediocre tool for everyone."
        },
        {
          "label": "Design separate apps for all 3 simultaneously",
          "correct": false,
          "feedback": "Fragments engineering focus and UX coherence."
        },
        {
          "label": "Skip personas and start pricing tiers",
          "correct": false,
          "feedback": "You must understand user needs before designing or pricing."
        }
      ]
    }
  }
},
{
  "id": "ecell-design-irctc-tatkal",
  "title": "Reimagining IRCTC Tatkal Rush Experience",
  "company": "IRCTC",
  "source": "E-Cell IITG 2026-27",
  "track": "Product",
  "category": "Product Design",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "IRCTC",
    "Product Design",
    "Product"
  ],
  "prompt": "Tatkal Rush Your task is to reimagine the IRCTC website from a product design perspective. How would you go about it?",
  "clarifyingQuestions": [
    {
      "q": "Before suggesting solutions, may I ask a few clarifying questions?",
      "a": "Sure, go ahead.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "First, are we focusing only on the website or should I also think about the mobile app?",
      "a": "Prioritize the website, but you can reference mobile since many users use it.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Great. Second, IRCTC caters to very diverse audiences from frequent urban travelers to rural families and even senior citizens. Should I target problems for a particular group or for everyone?",
      "a": "The platform must serve the majority.",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "CIRCLES (Goal → Priority Persona → Journey Pain Points → Prioritized MVP → Trade-offs & Metrics)",
  "coreEquation": "Product Impact = Priority Persona Frequency × P0 Pain Severity × Adoption %",
  "strategyOverview": "Approach Reimagining IRCTC Tatkal Rush Experience (IRCTC) using a Product Design structure: start by confirming the business objective and scope, decompose the problem cleanly along CIRCLES (Goal → Priority Persona → Journey Pain Points → Prioritized MVP → Trade-offs & Metrics), and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Reimagining IRCTC Tatkal Rush Experience — User & Product Tree",
    "valueText": "Persona → Pain → Fix",
    "children": [
      {
        "label": "1. Priority Persona Selection (Pick 1 Beachhead)",
        "valueText": "High Freq / Pain",
        "highlight": true
      },
      {
        "label": "2. End-to-End Journey & P0 Pain Points",
        "valueText": "Impact × Effort",
        "highlight": true
      },
      {
        "label": "3. MVP Solutions, Trade-offs & Guardrails",
        "valueText": "North Star"
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Interviewer",
      "prompt": "IRCTC Tatkal Rush Your task is to reimagine the IRCTC website from a product design perspective. How would you",
      "detail": "IRCTC Tatkal Rush Your task is to reimagine the IRCTC website from a product design perspective. How would you go about it?\nBefore suggesting solutions, may I ask a few clarifying questions?\nFirst, are we focusing only on the website or should I also think about the mobile app?\nPrioritize the website, but you can reference mobile since many users use it."
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "Great. Second, IRCTC caters to very diverse audiences from frequent urban travelers to rural families and even",
      "detail": "Great. Second, IRCTC caters to very diverse audiences from frequent urban travelers to rural families and even senior citizens. Should I target problems for a particular group or for everyone?\nThe platform must serve the majority.\nUnderstood. Final question, what matters most to IRCTC: ticket booking efficiency, generating ad revenue, or wider tourism integration?\nTicketing efficiency and reliability are the priority."
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "So, if I think about IRCTC users, I’d divide them broadly into three types:",
      "detail": "So, if I think about IRCTC users, I’d divide them broadly into three types:\nUrban professionals: these are frequent travelers, tech-savvy, often using Tatkal.\nSemi-urban families: these are moderately comfortable with tech; they value clarity and guidance while booking.\nElderly or rural users: and they are less familiar with digital tools, need simplicity and language-friendly design."
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "That’s a good segmentation. But what about travel agents or small business owners who book tickets for others?",
      "detail": "That’s a good segmentation. But what about travel agents or small business owners who book tickets for others?\nOh yes, that’s a good point. I’d actually add a fourth group of intermediary users, like agents or local vendors. They care about speed, reliability, and multi-passenger booking.\nRight, because they handle high volume daily. Now, if you think of their current experience, what do you feel are the biggest frustrations?\nI feel like IRCTC tries to do too many things on one screen. The homepage feels overloaded with ads, banners, and announcements, and it distracts users from the main task: booking tickets. A"
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "True, and those payment failures are a major complaint. Many users also get logged out during Tatkal. Any thou",
      "detail": "True, and those payment failures are a major complaint. Many users also get logged out during Tatkal. Any thoughts on that?\nYes, I’d make the login persistent for verified users so they don’t have to sign in again mid-booking. If there’s a security concern, a quick OTP re-verification can handle that without breaking the flow. I’d also let users save passenger details securely, so they can book in just a few clicks, which is crucial during Tatkal when every second really counts.\nFair. What do you see as the biggest hurdles to fixing these issues?\nI’d say the major constraints are: High server load during Tatkal h"
    }
  ],
  "recommendations": [
    "Prioritize the highest-impact P0 bottleneck identified in Reimagining IRCTC Tatkal Rush Experience before secondary optimizations.",
    "Pilot the top intervention in a controlled cohort/region with clear North Star and guardrail tracking.",
    "Scale rollout only after verifying unit economics and zero adverse second-order effects."
  ],
  "metricsAndGuardrails": {
    "northStar": "Core Task Completion / Weekly Active Value Users for IRCTC",
    "leading": [
      "Feature discovery & Day-1 adoption %",
      "7-day repeat usage rate"
    ],
    "guardrails": [
      "Core app latency / checkout conversion",
      "Support tickets & uninstall rate"
    ]
  },
  "synthesisScript": "For IRCTC’s Reimagining IRCTC Tatkal Rush Experience case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Prioritize the highest-impact P0 bottleneck identified in Reimagining IRCTC Tatkal Rush Experience before secondary optimizations. We will validate success via Core Task Completion / Weekly Active Value Users for IRCTC while guarding against Core app latency / checkout conversion.",
  "interviewerTrap": "Listing 8 shiny features for 'all users' without picking ONE priority persona, ranking pain points, or naming trade-offs!",
  "variations": [
    {
      "question": "How would your recommendation change if IRCTC had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Product Design",
    "correctFramework": "CIRCLES (Goal → Priority Persona → Journey Pain Points → Prioritized MVP → Trade-offs & Metrics)",
    "structureOptions": [
      {
        "label": "Clarify Goal → Pick 1 Priority Persona → Map Pain Points → Rank P0 Fixes → Define North Star & Trade-offs",
        "correct": true,
        "feedback": "Crisp CIRCLES flow! Selecting one persona shows real PM discipline."
      },
      {
        "label": "Suggest adding AI chatbots, AR, crypto rewards, and dark mode immediately",
        "correct": false,
        "feedback": "Buzzword feature-dumping without user pain grounding fails PM interviews."
      },
      {
        "label": "Run a supply-side Value Chain raw-material audit",
        "correct": false,
        "feedback": "That belongs to manufacturing Profitability, not Product Design/UX."
      }
    ],
    "decisionQuiz": {
      "question": "After identifying 3 user personas in a Product Design/Improvement case, what is the strongest move?",
      "options": [
        {
          "label": "Pick ONE primary persona for v1 based on frequency/pain and explain why others wait for v2",
          "correct": true,
          "feedback": "Exactly! Solving deeply for one segment beats building a mediocre tool for everyone."
        },
        {
          "label": "Design separate apps for all 3 simultaneously",
          "correct": false,
          "feedback": "Fragments engineering focus and UX coherence."
        },
        {
          "label": "Skip personas and start pricing tiers",
          "correct": false,
          "feedback": "You must understand user needs before designing or pricing."
        }
      ]
    }
  }
},
{
  "id": "ecell-design-blood-donation",
  "title": "Swipe Right to Save a Life (Blood Donation Platform)",
  "company": "Healthtech",
  "source": "E-Cell IITG 2026-27",
  "track": "Product",
  "category": "Product Design",
  "difficulty": 2,
  "isStarter": false,
  "tags": [
    "Healthtech",
    "Product Design",
    "Product"
  ],
  "prompt": "We’d like you to design a social-media-like platform focused on blood, plasma, and tissue donation drives. How would you approach this?",
  "clarifyingQuestions": [
    {
      "q": "Before diving in, I’d like to clarify a few things. Are we targeting a specific region or aiming for a global platform?",
      "a": "Let’s assume it’s initially for urban India.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Ok and who would operate it, a government agency, NGO, or private entity? And lastly, should the platform allow anyone to post donation drives or only verified organizations?",
      "a": "Assume it's operated by a mix of NGOs and hospitals and only verified organizations can post drives.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Makes sense. How would you identify the key pain points?",
      "a": "From a donor perspective, discovering drives nearby, trust in the authenticity of drives, scheduling convenience, and reminders are major issues.",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "CIRCLES (Goal → Priority Persona → Journey Pain Points → Prioritized MVP → Trade-offs & Metrics)",
  "coreEquation": "Product Impact = Priority Persona Frequency × P0 Pain Severity × Adoption %",
  "strategyOverview": "Approach Swipe Right to Save a Life (Blood Donation Platform) (Healthtech) using a Product Design structure: start by confirming the business objective and scope, decompose the problem cleanly along CIRCLES (Goal → Priority Persona → Journey Pain Points → Prioritized MVP → Trade-offs & Metrics), and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Swipe Right to Save a Life (Blood Donation Platform) — User & Product Tree",
    "valueText": "Persona → Pain → Fix",
    "children": [
      {
        "label": "1. Priority Persona Selection (Pick 1 Beachhead)",
        "valueText": "High Freq / Pain",
        "highlight": true
      },
      {
        "label": "2. End-to-End Journey & P0 Pain Points",
        "valueText": "Impact × Effort",
        "highlight": true
      },
      {
        "label": "3. MVP Solutions, Trade-offs & Guardrails",
        "valueText": "North Star"
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Interviewer",
      "prompt": "We’d like you to design a social-media-like platform focused on blood, plasma, and tissue donation drives. How",
      "detail": "We’d like you to design a social-media-like platform focused on blood, plasma, and tissue donation drives. How would you approach this?\nBefore diving in, I’d like to clarify a few things. Are we targeting a specific region or aiming for a global platform?\nLet’s assume it’s initially for urban India.\nOk and who would operate it, a government agency, NGO, or private entity? And lastly, should the platform allow anyone to post donation drives or only verified organizations?"
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "Assume it's operated by a mix of NGOs and hospitals and only verified organizations can post drives.",
      "detail": "Assume it's operated by a mix of NGOs and hospitals and only verified organizations can post drives.\nGot it. So, the primary users would be donors: both first-time and regular along with organizations posting drives. Secondary users could be volunteers and hospitals needing urgent donations.\nMakes sense. How would you identify the key pain points?\nFrom a donor perspective, discovering drives nearby, trust in the authenticity of drives, scheduling convenience, and reminders are major issues."
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "For organizations, reaching the right audience quickly and ensuring turnout is a pain point. There's also data",
      "detail": "For organizations, reaching the right audience quickly and ensuring turnout is a pain point. There's also data tracking for blood type availability and inventory management.\nGood. How would you prioritize these?\nI’d prioritize trust and ease of discovery first, since donors won’t engage if they can’t find credible drives. Next would be scheduling and reminders to increase participation.\nFor organizations, visibility and real-time analytics would come next."
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "And what solutions would you propose?",
      "detail": "And what solutions would you propose?\nFor donors, a personalized feed showing nearby drives, verified badges for organizations, push notifications for urgent needs, and a simple RSVP or scheduling system.\nFor organizations, a dashboard to post drives, track participation, and analyze donor turnout trends. Gamification elements like donation streaks or community leaderboards could increase engagement.\nHow would you evaluate which solutions to implement first?"
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "I’d focus on impact versus effort.",
      "detail": "I’d focus on impact versus effort.\nVerified drives and location-based discovery are high impact and relatively straightforward.\nScheduling and notifications are next in priority.\nAnalytics dashboards for organizations are slightly more complex but essential for long-term adoption."
    }
  ],
  "recommendations": [
    "Prioritize the highest-impact P0 bottleneck identified in Swipe Right to Save a Life (Blood Donation Platform) before secondary optimizations.",
    "Pilot the top intervention in a controlled cohort/region with clear North Star and guardrail tracking.",
    "Scale rollout only after verifying unit economics and zero adverse second-order effects."
  ],
  "metricsAndGuardrails": {
    "northStar": "Core Task Completion / Weekly Active Value Users for Healthtech",
    "leading": [
      "Feature discovery & Day-1 adoption %",
      "7-day repeat usage rate"
    ],
    "guardrails": [
      "Core app latency / checkout conversion",
      "Support tickets & uninstall rate"
    ]
  },
  "synthesisScript": "For Healthtech’s Swipe Right to Save a Life (Blood Donation Platform) case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Prioritize the highest-impact P0 bottleneck identified in Swipe Right to Save a Life (Blood Donation Platform) before secondary optimizations. We will validate success via Core Task Completion / Weekly Active Value Users for Healthtech while guarding against Core app latency / checkout conversion.",
  "interviewerTrap": "Listing 8 shiny features for 'all users' without picking ONE priority persona, ranking pain points, or naming trade-offs!",
  "variations": [
    {
      "question": "How would your recommendation change if Healthtech had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Product Design",
    "correctFramework": "CIRCLES (Goal → Priority Persona → Journey Pain Points → Prioritized MVP → Trade-offs & Metrics)",
    "structureOptions": [
      {
        "label": "Clarify Goal → Pick 1 Priority Persona → Map Pain Points → Rank P0 Fixes → Define North Star & Trade-offs",
        "correct": true,
        "feedback": "Crisp CIRCLES flow! Selecting one persona shows real PM discipline."
      },
      {
        "label": "Suggest adding AI chatbots, AR, crypto rewards, and dark mode immediately",
        "correct": false,
        "feedback": "Buzzword feature-dumping without user pain grounding fails PM interviews."
      },
      {
        "label": "Run a supply-side Value Chain raw-material audit",
        "correct": false,
        "feedback": "That belongs to manufacturing Profitability, not Product Design/UX."
      }
    ],
    "decisionQuiz": {
      "question": "After identifying 3 user personas in a Product Design/Improvement case, what is the strongest move?",
      "options": [
        {
          "label": "Pick ONE primary persona for v1 based on frequency/pain and explain why others wait for v2",
          "correct": true,
          "feedback": "Exactly! Solving deeply for one segment beats building a mediocre tool for everyone."
        },
        {
          "label": "Design separate apps for all 3 simultaneously",
          "correct": false,
          "feedback": "Fragments engineering focus and UX coherence."
        },
        {
          "label": "Skip personas and start pricing tiers",
          "correct": false,
          "feedback": "You must understand user needs before designing or pricing."
        }
      ]
    }
  }
},
{
  "id": "ecell-metrics-quora-ads",
  "title": "Quora Counting Coins (Ad Visibility & Revenue)",
  "company": "Quora",
  "source": "E-Cell IITG 2026-27",
  "track": "Product",
  "category": "Product Metrics",
  "difficulty": 2,
  "isStarter": false,
  "tags": [
    "Quora",
    "Product Metrics",
    "Product"
  ],
  "prompt": "Quora’s ad revenue largely depends on ad visibility. How do impressions impact this, and what would you track to measure it effectively?",
  "clarifyingQuestions": [
    {
      "q": "Before jumping in, just to clarify, are we talking about impressions across all surfaces like web, mobile app, and feed, or primarily the feed ads?",
      "a": "Focus on overall ad impressions across key surfaces.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Right, what does a change in impressions mean?",
      "a": "A consistently high volume of impressions means users are discovering and consuming content effectively, a decline signals problems with content visibility or engagement.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "I’d monitor impressions daily, segmented by user demographics, geography, and display surface to spot anomalies early Suppose impressions stay stable, but CTR suddenly drops. What would that tell you?",
      "a": "That’s a strong sign users are seeing ads but not engaging. I’d start by breaking CTR down by ad format, placement, and audience segment to locate where engagement is slipping.",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "Product Mission → User Value Loop (AARRR / HEART) → 1 North Star + L1 Drivers + Guardrails",
  "coreEquation": "Success = North Star Value Delivered × L1 Funnel Velocity (Subject to Quality/Abuse Guardrails)",
  "strategyOverview": "Approach Quora Counting Coins (Ad Visibility & Revenue) (Quora) using a Product Metrics structure: start by confirming the business objective and scope, decompose the problem cleanly along Product Mission → User Value Loop (AARRR / HEART) → 1 North Star + L1 Drivers + Guardrails, and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Quora Counting Coins (Ad Visibility & Revenue) — Metric Hierarchy",
    "valueText": "L0 / L1 / Guardrail",
    "children": [
      {
        "label": "North Star Metric (Value Delivered to User + Business)",
        "valueText": "Un-gamable KPI",
        "highlight": true
      },
      {
        "label": "L1 Leading Indicators (Activation, Engagement, Retention)",
        "valueText": "Early Signals"
      },
      {
        "label": "Guardrails & Counter-Metrics (Quality, Latency, Cost, Abuse)",
        "valueText": "Safety Check",
        "highlight": true
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Interviewer",
      "prompt": "Quora’s ad revenue largely depends on ad visibility. How do impressions impact this, and what would you track ",
      "detail": "Quora’s ad revenue largely depends on ad visibility. How do impressions impact this, and what would you track to measure it effectively?\nBefore jumping in, just to clarify, are we talking about impressions across all surfaces like web, mobile app, and feed, or primarily the feed ads?\nFocus on overall ad impressions across key surfaces.\nGot it. Then, I’d start by defining impressions as the number of times ads are viewed by users, essentially representing Quora’s ad inventory. Tracking them helps us understand reach, user engagement, and product health."
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "Right, what does a change in impressions mean?",
      "detail": "Right, what does a change in impressions mean?\nA consistently high volume of impressions means users are discovering and consuming content effectively, a decline signals problems with content visibility or engagement.\nI’d monitor impressions daily, segmented by user demographics, geography, and display surface to spot anomalies early Suppose impressions stay stable, but CTR suddenly drops. What would that tell you?\nThat’s a strong sign users are seeing ads but not engaging. I’d start by breaking CTR down by ad format, placement, and audience segment to locate where engagement is slipping."
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "A common cause could be creative fatigue where users get bored of seeing the same ads repeatedly. In that case",
      "detail": "A common cause could be creative fatigue where users get bored of seeing the same ads repeatedly. In that case, we can refresh creatives or set frequency caps to limit how often the same ad appears.\nIf poor targeting is to blame, we can refine audience matching.\nThe goal is to improve engagement without hurting the browsing experience. Ads should blend naturally into the experience, not feel forced or make the feed look like a wall of promotions.\nAnd if CTR drops only in a few regions?"
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "Then I will look for content-culture mismatch, regional competition or seasonality effects. Ad relevance or ti",
      "detail": "Then I will look for content-culture mismatch, regional competition or seasonality effects. Ad relevance or timing differs across markets.\nHow would you use conversion rate when testing new monetization features?\nConversion rate is the clearest measure of monetization success. It shows whether users are completing desired actions like subscribing to Quora+ or clicking affiliate links.\nDuring A/B tests, I’d compare control vs. exposed groups to see if new features drive statistically significant lifts."
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "And what if conversion rates drop?",
      "detail": "And what if conversion rates drop?\nIf conversion rates drop, I’d dig into UX friction like glitches or confusing flows, value proposition clarity to ensure users understand the benefit, and review pricing to see if it’s creating hesitation.\nLet’s say Quora’s cost per conversion is rising. How would you investigate?\nFirst, I’d isolate where costs are spiking by campaign, audience segment, and channel. If competition for ad slots is increasing, I’d adjust bidding strategies or move budget to lower-cost segments."
    }
  ],
  "recommendations": [
    "Prioritize the highest-impact P0 bottleneck identified in Quora Counting Coins (Ad Visibility & Revenue) before secondary optimizations.",
    "Pilot the top intervention in a controlled cohort/region with clear North Star and guardrail tracking.",
    "Scale rollout only after verifying unit economics and zero adverse second-order effects."
  ],
  "metricsAndGuardrails": {
    "northStar": "Completed Core Value Actions per WAU (Quora)",
    "leading": [
      "Activation funnel conversion %",
      "D7 / D30 cohort retention"
    ],
    "guardrails": [
      "Spam / error / complaint rate",
      "Unit margin & system latency"
    ]
  },
  "synthesisScript": "For Quora’s Quora Counting Coins (Ad Visibility & Revenue) case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Prioritize the highest-impact P0 bottleneck identified in Quora Counting Coins (Ad Visibility & Revenue) before secondary optimizations. We will validate success via Completed Core Value Actions per WAU (Quora) while guarding against Spam / error / complaint rate.",
  "interviewerTrap": "Picking vanity metrics ('Total Downloads', 'Page Views') or forgetting Counter-Metrics / Guardrails that catch metric gaming!",
  "variations": [
    {
      "question": "How would your recommendation change if Quora had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Product Metrics",
    "correctFramework": "Product Mission → User Value Loop (AARRR / HEART) → 1 North Star + L1 Drivers + Guardrails",
    "structureOptions": [
      {
        "label": "State Value Exchange → Map Funnel (AARRR/HEART) → Pick 1 North Star + L1 Drivers + Counter-Metric Guardrails",
        "correct": true,
        "feedback": "Textbook Metrics structure! Balancing North Star with Guardrails proves senior judgment."
      },
      {
        "label": "Track only Total Registered Users and App Store Impressions",
        "correct": false,
        "feedback": "Vanity metrics ignore actual value delivery, retention, and side effects."
      },
      {
        "label": "Skip metrics and propose an M&A acquisition",
        "correct": false,
        "feedback": "Off-topic for a Product Metrics evaluation prompt."
      }
    ],
    "decisionQuiz": {
      "question": "Why must every North Star Metric be paired with Guardrail (Counter) Metrics?",
      "options": [
        {
          "label": "To ensure optimizing the North Star does not silently degrade quality, margin, latency, or user trust",
          "correct": true,
          "feedback": "Spot on! Guardrails catch gaming and negative second-order effects."
        },
        {
          "label": "Because SQL tables require 3 columns",
          "correct": false,
          "feedback": "It is a product governance principle, not a database rule."
        },
        {
          "label": "To inflate slide counts",
          "correct": false,
          "feedback": "Guardrails directly govern launch/no-launch A/B decisions."
        }
      ]
    }
  }
},
{
  "id": "ecell-metrics-uber-dashboard",
  "title": "Behind Uber’s Ride-Sharing KPI Dashboard",
  "company": "Uber",
  "source": "E-Cell IITG 2026-27",
  "track": "Product",
  "category": "Product Metrics",
  "difficulty": 2,
  "isStarter": false,
  "tags": [
    "Uber",
    "Product Metrics",
    "Product"
  ],
  "prompt": "Behind Uber’s Dashboard If you were managing Uber’s ride-sharing product, what performance indicators would you consider most critical to track?",
  "clarifyingQuestions": [
    {
      "q": "Before answering, can I clarify the scope? Are we talking about global metrics, or a specific region or market segment like urban rides or airport trips?",
      "a": "Let’s focus on global metrics, but feel free to highlight regional nuances if relevant.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Got it. And just to confirm, should I assume the focus is on the core peer-to-peer ride- hailing business, excluding things like Uber Eats?",
      "a": "Correct, only the ride-sharing product.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Okay, let’s start with marketplace health. What would you track there?",
      "a": "Marketplace health defines how efficiently Uber connects riders and drivers.",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "Product Mission → User Value Loop (AARRR / HEART) → 1 North Star + L1 Drivers + Guardrails",
  "coreEquation": "Success = North Star Value Delivered × L1 Funnel Velocity (Subject to Quality/Abuse Guardrails)",
  "strategyOverview": "Approach Behind Uber’s Ride-Sharing KPI Dashboard (Uber) using a Product Metrics structure: start by confirming the business objective and scope, decompose the problem cleanly along Product Mission → User Value Loop (AARRR / HEART) → 1 North Star + L1 Drivers + Guardrails, and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Behind Uber’s Ride-Sharing KPI Dashboard — Metric Hierarchy",
    "valueText": "L0 / L1 / Guardrail",
    "children": [
      {
        "label": "North Star Metric (Value Delivered to User + Business)",
        "valueText": "Un-gamable KPI",
        "highlight": true
      },
      {
        "label": "L1 Leading Indicators (Activation, Engagement, Retention)",
        "valueText": "Early Signals"
      },
      {
        "label": "Guardrails & Counter-Metrics (Quality, Latency, Cost, Abuse)",
        "valueText": "Safety Check",
        "highlight": true
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Interviewer",
      "prompt": "Behind Uber’s Dashboard If you were managing Uber’s ride-sharing product, what performance indicators would yo",
      "detail": "Behind Uber’s Dashboard If you were managing Uber’s ride-sharing product, what performance indicators would you consider most critical to track?\nBefore answering, can I clarify the scope? Are we talking about global metrics, or a specific region or market segment like urban rides or airport trips?\nLet’s focus on global metrics, but feel free to highlight regional nuances if relevant.\nGot it. And just to confirm, should I assume the focus is on the core peer-to-peer ride- hailing business, excluding things like Uber Eats?"
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "Correct, only the ride-sharing product.",
      "detail": "Correct, only the ride-sharing product.\nPerfect. Then I’d start by grouping metrics into three buckets: Marketplace Health, User Experience, and Financial Performance. Together, these capture supply-demand balance, reliability, and business efficiency.\nOkay, let’s start with marketplace health. What would you track there?\nMarketplace health defines how efficiently Uber connects riders and drivers."
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "The key marketplace metrics would be the:",
      "detail": "The key marketplace metrics would be the:\nTrip Request to Fulfillment Rate, which measures how many ride requests are successfully matched with drivers Driver Utilization Rate, showing how much of a driver’s time is spent on active trips versus waiting.\nAverage ETA and Pickup Time and the Cancellation Rate from both riders’ and drivers’ side Good. Now what about user experience?\nFor user experience, I’d focus on metrics that reflect trust, reliability, and satisfaction."
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "The key user experience metrics would be the Ride Rating & NPS to assess perceived quality, the Trip Completio",
      "detail": "The key user experience metrics would be the Ride Rating & NPS to assess perceived quality, the Trip Completion Success Rate, 30-day churn and Customer Support Tickets per 1,000 Rides, which reflects how smooth and frictionless the experience feels overall.\nMakes sense. What about the business side, how do you track financial performance?\nThe key financial metrics would be GMV, Take Rate. Alongside these, Cost per Trip ensures profitability grows with scale, while Incentive Spend as a Percentage of Revenue helps monitor whether driver bonuses are becoming unsustainably high.\nThe goal is to maintain strong margins"
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "What if you notice bookings growing but profitability declining?",
      "detail": "What if you notice bookings growing but profitability declining?\nThat would suggest our growth is being driven by low-margin segments or heavy incentives. I’d start by breaking it down by region, product tier, and incentive spend to pinpoint where profitability is thinning.\nIf the data shows certain new markets are burning cash, I’d revisit pricing, driver payouts, or even slow expansion until utilization and unit economics stabilize.\nWhat about early warning signal metrics that tell you something’s going wrong before it shows up in financials?"
    }
  ],
  "recommendations": [
    "Prioritize the highest-impact P0 bottleneck identified in Behind Uber’s Ride-Sharing KPI Dashboard before secondary optimizations.",
    "Pilot the top intervention in a controlled cohort/region with clear North Star and guardrail tracking.",
    "Scale rollout only after verifying unit economics and zero adverse second-order effects."
  ],
  "metricsAndGuardrails": {
    "northStar": "Completed Core Value Actions per WAU (Uber)",
    "leading": [
      "Activation funnel conversion %",
      "D7 / D30 cohort retention"
    ],
    "guardrails": [
      "Spam / error / complaint rate",
      "Unit margin & system latency"
    ]
  },
  "synthesisScript": "For Uber’s Behind Uber’s Ride-Sharing KPI Dashboard case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Prioritize the highest-impact P0 bottleneck identified in Behind Uber’s Ride-Sharing KPI Dashboard before secondary optimizations. We will validate success via Completed Core Value Actions per WAU (Uber) while guarding against Spam / error / complaint rate.",
  "interviewerTrap": "Picking vanity metrics ('Total Downloads', 'Page Views') or forgetting Counter-Metrics / Guardrails that catch metric gaming!",
  "variations": [
    {
      "question": "How would your recommendation change if Uber had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Product Metrics",
    "correctFramework": "Product Mission → User Value Loop (AARRR / HEART) → 1 North Star + L1 Drivers + Guardrails",
    "structureOptions": [
      {
        "label": "State Value Exchange → Map Funnel (AARRR/HEART) → Pick 1 North Star + L1 Drivers + Counter-Metric Guardrails",
        "correct": true,
        "feedback": "Textbook Metrics structure! Balancing North Star with Guardrails proves senior judgment."
      },
      {
        "label": "Track only Total Registered Users and App Store Impressions",
        "correct": false,
        "feedback": "Vanity metrics ignore actual value delivery, retention, and side effects."
      },
      {
        "label": "Skip metrics and propose an M&A acquisition",
        "correct": false,
        "feedback": "Off-topic for a Product Metrics evaluation prompt."
      }
    ],
    "decisionQuiz": {
      "question": "Why must every North Star Metric be paired with Guardrail (Counter) Metrics?",
      "options": [
        {
          "label": "To ensure optimizing the North Star does not silently degrade quality, margin, latency, or user trust",
          "correct": true,
          "feedback": "Spot on! Guardrails catch gaming and negative second-order effects."
        },
        {
          "label": "Because SQL tables require 3 columns",
          "correct": false,
          "feedback": "It is a product governance principle, not a database rule."
        },
        {
          "label": "To inflate slide counts",
          "correct": false,
          "feedback": "Guardrails directly govern launch/no-launch A/B decisions."
        }
      ]
    }
  }
},
{
  "id": "ecell-metrics-fb-ad-load",
  "title": "Facebook Overdosed on Sponsored Content (Ad Load)",
  "company": "Facebook",
  "source": "E-Cell IITG 2026-27",
  "track": "Product",
  "category": "Product Metrics",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "Facebook",
    "Product Metrics",
    "Product"
  ],
  "prompt": "If Facebook increases ad load in News Feed, what metrics should you monitor to ensure long-term health?",
  "clarifyingQuestions": [
    {
      "q": "Okay, I can definitely help with that. To make sure my recommendations are relevant, I'd like to understand the scope a bit better. Do we have a specific user demographic or market in mind for this initial test?",
      "a": "Good question. We're planning to start with a segment of users in emerging markets where mobile data costs are a factor, but monetization is a key growth area.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "That context is very helpful. And what is the proposed scale of this increase? Are we talking about a small, incremental tweak or a more significant change to the ad density?",
      "a": "We're considering a 10-15% increase in ad density for that segment. It's meaningful enough to move revenue, but hopefully not so large that it causes a major backlash.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Understood. And one final clarifying question: is this ad load increase planned for all Facebook surfaces, or is it specifically for the mobile News Feed, given the target market?",
      "a": "Let's focus exclusively on the mobile News Feed for now. That's where the vast majority of engagement happens for this segment. With that, how would you approach defining the metrics?",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "Product Mission → User Value Loop (AARRR / HEART) → 1 North Star + L1 Drivers + Guardrails",
  "coreEquation": "Success = North Star Value Delivered × L1 Funnel Velocity (Subject to Quality/Abuse Guardrails)",
  "strategyOverview": "Approach Facebook Overdosed on Sponsored Content (Ad Load) (Facebook) using a Product Metrics structure: start by confirming the business objective and scope, decompose the problem cleanly along Product Mission → User Value Loop (AARRR / HEART) → 1 North Star + L1 Drivers + Guardrails, and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Facebook Overdosed on Sponsored Content (Ad Load) — Metric Hierarchy",
    "valueText": "L0 / L1 / Guardrail",
    "children": [
      {
        "label": "North Star Metric (Value Delivered to User + Business)",
        "valueText": "Un-gamable KPI",
        "highlight": true
      },
      {
        "label": "L1 Leading Indicators (Activation, Engagement, Retention)",
        "valueText": "Early Signals"
      },
      {
        "label": "Guardrails & Counter-Metrics (Quality, Latency, Cost, Abuse)",
        "valueText": "Safety Check",
        "highlight": true
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Interviewer",
      "prompt": "If Facebook increases ad load in News Feed, what metrics should you monitor to ensure long-term health?",
      "detail": "If Facebook increases ad load in News Feed, what metrics should you monitor to ensure long-term health?\nOkay, I can definitely help with that. To make sure my recommendations are relevant, I'd like to understand the scope a bit better. Do we have a specific user demographic or market in mind for this initial test?\nGood question. We're planning to start with a segment of users in emerging markets where mobile data costs are a factor, but monetization is a key growth area.\nThat context is very helpful. And what is the proposed scale of this increase? Are we talking about a small, incremental tweak or a more signifi"
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "We're considering a 10-15% increase in ad density for that segment. It's meaningful enough to move revenue, bu",
      "detail": "We're considering a 10-15% increase in ad density for that segment. It's meaningful enough to move revenue, but hopefully not so large that it causes a major backlash.\nUnderstood. And one final clarifying question: is this ad load increase planned for all Facebook surfaces, or is it specifically for the mobile News Feed, given the target market?\nLet's focus exclusively on the mobile News Feed for now. That's where the vast majority of engagement happens for this segment. With that, how would you approach defining the metrics?\nGreat, thank you. That clarity is crucial. My approach would be to track a balanced set "
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "That's a good list. Why is it important to consider both a 'User POV' and a 'Business POV' for these metrics? ",
      "detail": "That's a good list. Why is it important to consider both a 'User POV' and a 'Business POV' for these metrics? Could you walk me through how one of them reflects that duality?\nAbsolutely. That duality is key because user health is a leading indicator of business health. For instance, if Time Spent per User drops, users are signaling boredom or irritation; this directly reduces ad opportunities, which is a strong leading indicator of future revenue decline.\nI see. Let's focus on the business side for a moment. From an advertiser's perspective, how does Click-Through Rate fit into your framework for evaluating this "
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "We've discussed user time and advertiser value on the Facebook platform itself. But how would you monitor the ",
      "detail": "We've discussed user time and advertiser value on the Facebook platform itself. But how would you monitor the second-order effects on the broader Meta ecosystem?\nThat's where Cross-Platform Spillover comes in. We would need to monitor if we're just pushing users to feel less 'sold to' on other Meta apps like Instagram or WhatsApp. This tells us if we're just cannibalizing our own attention, not growing the pie.\nGreat, that covers all the bases. Now for the tough question about prioritization. If you could only have one of these on your main dashboard as the ultimate health indicator, which North Star metric would"
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "Interesting choice. Can you elaborate on that? Why do you believe that's a more actionable early-warning signa",
      "detail": "Interesting choice. Can you elaborate on that? Why do you believe that's a more actionable early-warning signal than, for example, a drop in CTR?\nI reason that a drop in CTR is advertiser-focused, while Negative Feedback is a direct, unambiguous statement from a user that their experience is bad. It warns us if we've crossed from balanced to spammy.\nOkay, the experiment has run its course, and you have all the data. How do you translate the numbers from metrics like CTR and Negative Feedback into a clear 'go,' 'no-go,' or 'iterate' decision?\nMy approach is to act based on a clear framework. I would first segment "
    }
  ],
  "recommendations": [
    "Prioritize the highest-impact P0 bottleneck identified in Facebook Overdosed on Sponsored Content (Ad Load) before secondary optimizations.",
    "Pilot the top intervention in a controlled cohort/region with clear North Star and guardrail tracking.",
    "Scale rollout only after verifying unit economics and zero adverse second-order effects."
  ],
  "metricsAndGuardrails": {
    "northStar": "Completed Core Value Actions per WAU (Facebook)",
    "leading": [
      "Activation funnel conversion %",
      "D7 / D30 cohort retention"
    ],
    "guardrails": [
      "Spam / error / complaint rate",
      "Unit margin & system latency"
    ]
  },
  "synthesisScript": "For Facebook’s Facebook Overdosed on Sponsored Content (Ad Load) case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Prioritize the highest-impact P0 bottleneck identified in Facebook Overdosed on Sponsored Content (Ad Load) before secondary optimizations. We will validate success via Completed Core Value Actions per WAU (Facebook) while guarding against Spam / error / complaint rate.",
  "interviewerTrap": "Picking vanity metrics ('Total Downloads', 'Page Views') or forgetting Counter-Metrics / Guardrails that catch metric gaming!",
  "variations": [
    {
      "question": "How would your recommendation change if Facebook had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Product Metrics",
    "correctFramework": "Product Mission → User Value Loop (AARRR / HEART) → 1 North Star + L1 Drivers + Guardrails",
    "structureOptions": [
      {
        "label": "State Value Exchange → Map Funnel (AARRR/HEART) → Pick 1 North Star + L1 Drivers + Counter-Metric Guardrails",
        "correct": true,
        "feedback": "Textbook Metrics structure! Balancing North Star with Guardrails proves senior judgment."
      },
      {
        "label": "Track only Total Registered Users and App Store Impressions",
        "correct": false,
        "feedback": "Vanity metrics ignore actual value delivery, retention, and side effects."
      },
      {
        "label": "Skip metrics and propose an M&A acquisition",
        "correct": false,
        "feedback": "Off-topic for a Product Metrics evaluation prompt."
      }
    ],
    "decisionQuiz": {
      "question": "Why must every North Star Metric be paired with Guardrail (Counter) Metrics?",
      "options": [
        {
          "label": "To ensure optimizing the North Star does not silently degrade quality, margin, latency, or user trust",
          "correct": true,
          "feedback": "Spot on! Guardrails catch gaming and negative second-order effects."
        },
        {
          "label": "Because SQL tables require 3 columns",
          "correct": false,
          "feedback": "It is a product governance principle, not a database rule."
        },
        {
          "label": "To inflate slide counts",
          "correct": false,
          "feedback": "Guardrails directly govern launch/no-launch A/B decisions."
        }
      ]
    }
  }
},
{
  "id": "ecell-metrics-twitter-tweets",
  "title": "Twitter Lost Its Voice (Tweets Down, DAU Flat)",
  "company": "Twitter / X",
  "source": "E-Cell IITG 2026-27",
  "track": "Product",
  "category": "Product Metrics",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "Twitter / X",
    "Product Metrics",
    "Product"
  ],
  "prompt": "Twitter’s tweet creation has declined, but daily active users remain stable. How would you approach diagnosing this issue?",
  "clarifyingQuestions": [
    {
      "q": "Before suggesting solutions, may I ask a few clarifying questions?",
      "a": "Sure, go ahead.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Has the drop been seen across all tweet types: original tweets, replies, retweets, or just one?",
      "a": "Yes, this trend has been seen across all the tweet types.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Is this trend happening globally or concentrated in certain regions or cohorts: like new vs. existing users?",
      "a": "Let’s assume the trend is across multiple regions, and both new and existing users.",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "Product Mission → User Value Loop (AARRR / HEART) → 1 North Star + L1 Drivers + Guardrails",
  "coreEquation": "Success = North Star Value Delivered × L1 Funnel Velocity (Subject to Quality/Abuse Guardrails)",
  "strategyOverview": "Approach Twitter Lost Its Voice (Tweets Down, DAU Flat) (Twitter / X) using a Product Metrics structure: start by confirming the business objective and scope, decompose the problem cleanly along Product Mission → User Value Loop (AARRR / HEART) → 1 North Star + L1 Drivers + Guardrails, and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Twitter Lost Its Voice (Tweets Down, DAU Flat) — Metric Hierarchy",
    "valueText": "L0 / L1 / Guardrail",
    "children": [
      {
        "label": "North Star Metric (Value Delivered to User + Business)",
        "valueText": "Un-gamable KPI",
        "highlight": true
      },
      {
        "label": "L1 Leading Indicators (Activation, Engagement, Retention)",
        "valueText": "Early Signals"
      },
      {
        "label": "Guardrails & Counter-Metrics (Quality, Latency, Cost, Abuse)",
        "valueText": "Safety Check",
        "highlight": true
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Interviewer",
      "prompt": "Twitter’s tweet creation has declined, but daily active users remain stable. How would you approach diagnosing",
      "detail": "Twitter’s tweet creation has declined, but daily active users remain stable. How would you approach diagnosing this issue?\nBefore suggesting solutions, may I ask a few clarifying questions?\nHas the drop been seen across all tweet types: original tweets, replies, retweets, or just one?\nYes, this trend has been seen across all the tweet types."
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "Is this trend happening globally or concentrated in certain regions or cohorts: like new vs. existing users?",
      "detail": "Is this trend happening globally or concentrated in certain regions or cohorts: like new vs. existing users?\nLet’s assume the trend is across multiple regions, and both new and existing users.\nI’d look at how people tweet and what they consume.\nIf original tweets decrease but replies remain steady, users are engaging without starting conversations."
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "For businesses, this hurts reach and ad impressions.",
      "detail": "For businesses, this hurts reach and ad impressions.\nFor users, replies feel safer. They ensure engagement and avoid the risk of tweeting without getting a response.\nMakes sense. So why are people still active if they’re not tweeting?\nI’d look at content consumption metrics, such as likes, video views, and clicks. If these numbers are high, users are consuming more content, which means they find value in passive media."
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "From a business perspective, that’s beneficial for ad impressions and retention.",
      "detail": "From a business perspective, that’s beneficial for ad impressions and retention.\nFrom a user perspective, it indicates the algorithm delivers engaging content but doesn’t encourage creation.\nAnd how would you differentiate between new and existing users?\nFor new users, not posting could indicate a lack of support. They might feel lost, have no followers."
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "For existing users, it’s a problem with keeping them engaged. They could be bored, discouraged by low interact",
      "detail": "For existing users, it’s a problem with keeping them engaged. They could be bored, discouraged by low interaction, or distracted by other formats like Spaces.\nFrom a business perspective, inactivity among new users limits growth.\nFor existing users, it weakens the community’s energy.\nGood. What metrics would you track to validate these hypotheses?"
    }
  ],
  "recommendations": [
    "Prioritize the highest-impact P0 bottleneck identified in Twitter Lost Its Voice (Tweets Down, DAU Flat) before secondary optimizations.",
    "Pilot the top intervention in a controlled cohort/region with clear North Star and guardrail tracking.",
    "Scale rollout only after verifying unit economics and zero adverse second-order effects."
  ],
  "metricsAndGuardrails": {
    "northStar": "Completed Core Value Actions per WAU (Twitter / X)",
    "leading": [
      "Activation funnel conversion %",
      "D7 / D30 cohort retention"
    ],
    "guardrails": [
      "Spam / error / complaint rate",
      "Unit margin & system latency"
    ]
  },
  "synthesisScript": "For Twitter / X’s Twitter Lost Its Voice (Tweets Down, DAU Flat) case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Prioritize the highest-impact P0 bottleneck identified in Twitter Lost Its Voice (Tweets Down, DAU Flat) before secondary optimizations. We will validate success via Completed Core Value Actions per WAU (Twitter / X) while guarding against Spam / error / complaint rate.",
  "interviewerTrap": "Picking vanity metrics ('Total Downloads', 'Page Views') or forgetting Counter-Metrics / Guardrails that catch metric gaming!",
  "variations": [
    {
      "question": "How would your recommendation change if Twitter / X had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Product Metrics",
    "correctFramework": "Product Mission → User Value Loop (AARRR / HEART) → 1 North Star + L1 Drivers + Guardrails",
    "structureOptions": [
      {
        "label": "State Value Exchange → Map Funnel (AARRR/HEART) → Pick 1 North Star + L1 Drivers + Counter-Metric Guardrails",
        "correct": true,
        "feedback": "Textbook Metrics structure! Balancing North Star with Guardrails proves senior judgment."
      },
      {
        "label": "Track only Total Registered Users and App Store Impressions",
        "correct": false,
        "feedback": "Vanity metrics ignore actual value delivery, retention, and side effects."
      },
      {
        "label": "Skip metrics and propose an M&A acquisition",
        "correct": false,
        "feedback": "Off-topic for a Product Metrics evaluation prompt."
      }
    ],
    "decisionQuiz": {
      "question": "Why must every North Star Metric be paired with Guardrail (Counter) Metrics?",
      "options": [
        {
          "label": "To ensure optimizing the North Star does not silently degrade quality, margin, latency, or user trust",
          "correct": true,
          "feedback": "Spot on! Guardrails catch gaming and negative second-order effects."
        },
        {
          "label": "Because SQL tables require 3 columns",
          "correct": false,
          "feedback": "It is a product governance principle, not a database rule."
        },
        {
          "label": "To inflate slide counts",
          "correct": false,
          "feedback": "Guardrails directly govern launch/no-launch A/B decisions."
        }
      ]
    }
  }
},
{
  "id": "ecell-metrics-bank-cross-sell",
  "title": "Bank Selling Dreams (Retail Cross-Sell Metrics)",
  "company": "Retail Bank",
  "source": "E-Cell IITG 2026-27",
  "track": "Product",
  "category": "Product Metrics",
  "difficulty": 2,
  "isStarter": false,
  "tags": [
    "Retail Bank",
    "Product Metrics",
    "Product"
  ],
  "prompt": "Imagine you’re a Product Manager at a retail bank. Leadership wants to measure how effective our cross-sell efforts are, like getting savings account holders to take credit cards or personal loans. How would you approach this?",
  "clarifyingQuestions": [
    {
      "q": "Are we focusing on all retail customers or a specific segment?",
      "a": "All active retail customers.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Got it. And this includes all channels mainly branch, app, and Relationship Managers?",
      "a": "Yes, omni-channel.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Sounds good. How would you structure your answer?",
      "a": "I’d look at it in three layers:",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "Product Mission → User Value Loop (AARRR / HEART) → 1 North Star + L1 Drivers + Guardrails",
  "coreEquation": "Success = North Star Value Delivered × L1 Funnel Velocity (Subject to Quality/Abuse Guardrails)",
  "strategyOverview": "Approach Bank Selling Dreams (Retail Cross-Sell Metrics) (Retail Bank) using a Product Metrics structure: start by confirming the business objective and scope, decompose the problem cleanly along Product Mission → User Value Loop (AARRR / HEART) → 1 North Star + L1 Drivers + Guardrails, and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Bank Selling Dreams (Retail Cross-Sell Metrics) — Metric Hierarchy",
    "valueText": "L0 / L1 / Guardrail",
    "children": [
      {
        "label": "North Star Metric (Value Delivered to User + Business)",
        "valueText": "Un-gamable KPI",
        "highlight": true
      },
      {
        "label": "L1 Leading Indicators (Activation, Engagement, Retention)",
        "valueText": "Early Signals"
      },
      {
        "label": "Guardrails & Counter-Metrics (Quality, Latency, Cost, Abuse)",
        "valueText": "Safety Check",
        "highlight": true
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Interviewer",
      "prompt": "Imagine you’re a Product Manager at a retail bank. Leadership wants to measure how effective our cross-sell ef",
      "detail": "Imagine you’re a Product Manager at a retail bank. Leadership wants to measure how effective our cross-sell efforts are, like getting savings account holders to take credit cards or personal loans. How would you approach this?\nThank you. Before diving in, a few quick clarifications:\nAre we focusing on all retail customers or a specific segment?\nAll active retail customers."
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "Got it. And this includes all channels mainly branch, app, and Relationship Managers?",
      "detail": "Got it. And this includes all channels mainly branch, app, and Relationship Managers?\nPerfect. Then the main goal is to understand how much real, additional value these cross-sell campaigns generate, not just total sales.\nSounds good. How would you structure your answer?\nI’d look at it in three layers:"
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "We’ll start by defining what success looks like and the key things we’ll measure.",
      "detail": "We’ll start by defining what success looks like and the key things we’ll measure.\nThen we’ll find ways to clearly see the real impact of our actions.\nFinally, I would also make sure that the customers are targeted not just correctly but efficiently.\nLet’s start with success metrics."
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "Sure. The key metric would be Incremental Net Revenue per Customer (₹). We’ll measure success by looking at ho",
      "detail": "Sure. The key metric would be Incremental Net Revenue per Customer (₹). We’ll measure success by looking at how much better the campaign performs than the control group, the return on investment based on the extra revenue earned for what we spent, and the overall customer experience through things like NPS, complaints, and retention.\nHow would you measure real impact?\nIdeally through A/B testing, one group sees the offer, another doesn’t. If not possible, we can use regional rollouts or compare similar customers using historical spending trends.\nThe key is to see what changed because of the offer, not what would "
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "And how would you target customers?",
      "detail": "And how would you target customers?\nWe can start with simple rules, like high balance or frequent digital users. Then using data, refine customers based on who is more likely to want a credit card, insurance or loan.\nInteresting. Apart from existing banking channels like branches or RMs, how would you identify or create new ways to reach potential customers more effectively?\nThis can be achieved by mapping every customer touchpoint, both direct and indirect throughout their journey. For instance, we could partner with major real estate agencies and have them refer potential homebuyers to our bank for housing loan"
    }
  ],
  "recommendations": [
    "Prioritize the highest-impact P0 bottleneck identified in Bank Selling Dreams (Retail Cross-Sell Metrics) before secondary optimizations.",
    "Pilot the top intervention in a controlled cohort/region with clear North Star and guardrail tracking.",
    "Scale rollout only after verifying unit economics and zero adverse second-order effects."
  ],
  "metricsAndGuardrails": {
    "northStar": "Completed Core Value Actions per WAU (Retail Bank)",
    "leading": [
      "Activation funnel conversion %",
      "D7 / D30 cohort retention"
    ],
    "guardrails": [
      "Spam / error / complaint rate",
      "Unit margin & system latency"
    ]
  },
  "synthesisScript": "For Retail Bank’s Bank Selling Dreams (Retail Cross-Sell Metrics) case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Prioritize the highest-impact P0 bottleneck identified in Bank Selling Dreams (Retail Cross-Sell Metrics) before secondary optimizations. We will validate success via Completed Core Value Actions per WAU (Retail Bank) while guarding against Spam / error / complaint rate.",
  "interviewerTrap": "Picking vanity metrics ('Total Downloads', 'Page Views') or forgetting Counter-Metrics / Guardrails that catch metric gaming!",
  "variations": [
    {
      "question": "How would your recommendation change if Retail Bank had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Product Metrics",
    "correctFramework": "Product Mission → User Value Loop (AARRR / HEART) → 1 North Star + L1 Drivers + Guardrails",
    "structureOptions": [
      {
        "label": "State Value Exchange → Map Funnel (AARRR/HEART) → Pick 1 North Star + L1 Drivers + Counter-Metric Guardrails",
        "correct": true,
        "feedback": "Textbook Metrics structure! Balancing North Star with Guardrails proves senior judgment."
      },
      {
        "label": "Track only Total Registered Users and App Store Impressions",
        "correct": false,
        "feedback": "Vanity metrics ignore actual value delivery, retention, and side effects."
      },
      {
        "label": "Skip metrics and propose an M&A acquisition",
        "correct": false,
        "feedback": "Off-topic for a Product Metrics evaluation prompt."
      }
    ],
    "decisionQuiz": {
      "question": "Why must every North Star Metric be paired with Guardrail (Counter) Metrics?",
      "options": [
        {
          "label": "To ensure optimizing the North Star does not silently degrade quality, margin, latency, or user trust",
          "correct": true,
          "feedback": "Spot on! Guardrails catch gaming and negative second-order effects."
        },
        {
          "label": "Because SQL tables require 3 columns",
          "correct": false,
          "feedback": "It is a product governance principle, not a database rule."
        },
        {
          "label": "To inflate slide counts",
          "correct": false,
          "feedback": "Guardrails directly govern launch/no-launch A/B decisions."
        }
      ]
    }
  }
},
{
  "id": "ecell-metrics-whatsapp-communities",
  "title": "Measuring Communities on WhatsApp",
  "company": "WhatsApp",
  "source": "E-Cell IITG 2026-27",
  "track": "Product",
  "category": "Product Metrics",
  "difficulty": 2,
  "isStarter": true,
  "tags": [
    "Product Metrics",
    "North Star",
    "Guardrails",
    "Messaging"
  ],
  "prompt": "You are a Product Manager at WhatsApp. Communities has become an important part of the platform, helping users organize conversations across multiple groups. How would you measure the success of this feature? Walk me through the key metrics you would track and explain why they matter.",
  "clarifyingQuestions": [
    {
      "q": "Before jumping in, can I clarify the scope? Are we measuring Communities globally across all markets, or focusing on specific segments like large communities such as schools and residential societies versus smaller infor",
      "a": "Let's focus on global metrics, but feel free to highlight nuances by community size if relevant Got it. And should I assume Communities here refers to the full feature, the parent structure plus its announcement channels and sub-groups, rat",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Okay, let's start with adoption and structure health. What would you track there?",
      "a": "Adoption and structure health defines how effectively users are creating and organizing Communities in the first place. The key metrics would be:",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Good. Now what about engagement and utility?",
      "a": "For engagement, I'd focus on metrics that reflect whether Communities are actually being used for organized communication, not just sitting idle.",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "Value Exchange + AARRR/HEART + North Star & Anti-Spam Guardrails",
  "coreEquation": "Healthy Community = Active Groups Linked × Admin Announcements × Member Sub-Group Replies",
  "strategyOverview": "Define value for both Admins (structured broadcast + sub-group organization) and Members (relevant updates without chat noise). Pick a North Star centered on Weekly Active Communities with sustained member interaction, paired strictly with Mute/Leave/Report Spam guardrails.",
  "tree": {
    "label": "Measuring Communities on WhatsApp — Metric Hierarchy",
    "valueText": "L0 / L1 / Guardrail",
    "children": [
      {
        "label": "North Star Metric (Value Delivered to User + Business)",
        "valueText": "Un-gamable KPI",
        "highlight": true
      },
      {
        "label": "L1 Leading Indicators (Activation, Engagement, Retention)",
        "valueText": "Early Signals"
      },
      {
        "label": "Guardrails & Counter-Metrics (Quality, Latency, Cost, Abuse)",
        "valueText": "Safety Check",
        "highlight": true
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Interviewer",
      "prompt": "You are a Product Manager at WhatsApp. Communities has become an important part of the platform, helping users",
      "detail": "You are a Product Manager at WhatsApp. Communities has become an important part of the platform, helping users organize conversations across multiple groups. How would you measure the success of this feature? Walk me through the key metrics you would track and explain why they matter.\nBefore jumping in, can I clarify the scope? Are we measuring Communities globally across all markets, or focusing on specific segments like large communities such as schools and residential societies versus smaller informal ones?\nLet's focus on global metrics, but feel free to highlight nuances by community size if relevant Got it. "
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "Perfect. Then I'd start by grouping metrics into three buckets: Adoption & Structure Health, Engagement & Util",
      "detail": "Perfect. Then I'd start by grouping metrics into three buckets: Adoption & Structure Health, Engagement & Utility, and Retention & Ecosystem Impact. Together, these capture whether Communities are being formed well, whether they're actually useful once formed, and whether they strengthen WhatsApp's broader ecosystem.\nOkay, let's start with adoption and structure health. What would you track there?\nAdoption and structure health defines how effectively users are creating and organizing Communities in the first place. The key metrics would be:\nCommunities Created per Week, to track top-of-funnel adoption of the feat"
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "Average Sub-groups per Community, showing whether admins are actually using the organizing capability, not jus",
      "detail": "Average Sub-groups per Community, showing whether admins are actually using the organizing capability, not just creating a shell community with one group.\nCommunity Activation Rate, the percentage of created Communities that cross a minimum threshold, say 3 active sub-groups and 10 members, within the first week, since many created Communities could remain empty or abandoned.\nGood. Now what about engagement and utility?\nFor engagement, I'd focus on metrics that reflect whether Communities are actually being used for organized communication, not just sitting idle."
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "The key engagement metrics would be Messages Sent per Active Community, Announcement Channel Open Rate, since ",
      "detail": "The key engagement metrics would be Messages Sent per Active Community, Announcement Channel Open Rate, since announcements are meant for one-way broadcast to the whole community and their read-rate signals reach, and Sub-group Participation Rate, the percentage of sub-groups within a community that see at least one message in a week, which reflects how well-organized and alive the structure is.\nMakes sense. What about the business or ecosystem side, how do you track that?\nThe key ecosystem metrics would be Community Member Retention, whether members who join a Community are more likely to remain active WhatsApp "
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "The goal is to ensure Communities aren't just a feature people try once, but one that deepens long-term platfo",
      "detail": "The goal is to ensure Communities aren't just a feature people try once, but one that deepens long-term platform stickiness for both members and admins.\nWhat if you notice Communities Created is growing but Sub-group Participation Rate is declining?\nThat would suggest we're winning on top-of-funnel adoption but failing on actual utility, admins are setting up structure without members engaging inside it. I'd start by segmenting the drop by community size and category, like schools versus interest- based groups, to see if certain use cases are seeing empty sub-groups. If the data shows a specific category, like pr"
    }
  ],
  "recommendations": [
    "Prioritize the highest-impact P0 bottleneck identified in Measuring Communities on WhatsApp before secondary optimizations.",
    "Pilot the top intervention in a controlled cohort/region with clear North Star and guardrail tracking.",
    "Scale rollout only after verifying unit economics and zero adverse second-order effects."
  ],
  "metricsAndGuardrails": {
    "northStar": "Completed Core Value Actions per WAU (WhatsApp)",
    "leading": [
      "Activation funnel conversion %",
      "D7 / D30 cohort retention"
    ],
    "guardrails": [
      "Spam / error / complaint rate",
      "Unit margin & system latency"
    ]
  },
  "synthesisScript": "For WhatsApp’s Measuring Communities on WhatsApp case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Prioritize the highest-impact P0 bottleneck identified in Measuring Communities on WhatsApp before secondary optimizations. We will validate success via Completed Core Value Actions per WAU (WhatsApp) while guarding against Spam / error / complaint rate.",
  "interviewerTrap": "Measuring 'Total Messages Sent' or 'Communities Created'—both invite spam broadcasts and dead empty groups!",
  "variations": [
    {
      "question": "How would your recommendation change if WhatsApp had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Product Metrics",
    "correctFramework": "Product Mission → User Value Loop (AARRR / HEART) → 1 North Star + L1 Drivers + Guardrails",
    "structureOptions": [
      {
        "label": "State Value Exchange → Map Funnel (AARRR/HEART) → Pick 1 North Star + L1 Drivers + Counter-Metric Guardrails",
        "correct": true,
        "feedback": "Textbook Metrics structure! Balancing North Star with Guardrails proves senior judgment."
      },
      {
        "label": "Track only Total Registered Users and App Store Impressions",
        "correct": false,
        "feedback": "Vanity metrics ignore actual value delivery, retention, and side effects."
      },
      {
        "label": "Skip metrics and propose an M&A acquisition",
        "correct": false,
        "feedback": "Off-topic for a Product Metrics evaluation prompt."
      }
    ],
    "decisionQuiz": {
      "question": "Why must every North Star Metric be paired with Guardrail (Counter) Metrics?",
      "options": [
        {
          "label": "To ensure optimizing the North Star does not silently degrade quality, margin, latency, or user trust",
          "correct": true,
          "feedback": "Spot on! Guardrails catch gaming and negative second-order effects."
        },
        {
          "label": "Because SQL tables require 3 columns",
          "correct": false,
          "feedback": "It is a product governance principle, not a database rule."
        },
        {
          "label": "To inflate slide counts",
          "correct": false,
          "feedback": "Guardrails directly govern launch/no-launch A/B decisions."
        }
      ]
    }
  }
},
{
  "id": "ecell-metrics-upi-lite",
  "title": "Evaluating UPI Lite Success at PhonePe",
  "company": "PhonePe",
  "source": "E-Cell IITG 2026-27",
  "track": "Product",
  "category": "Product Metrics",
  "difficulty": 2,
  "isStarter": false,
  "tags": [
    "PhonePe",
    "Product Metrics",
    "Product"
  ],
  "prompt": "Evaluating UPI Lite at PhonePe Imagine you are a Product Manager at PhonePe. UPI Lite is designed to make low-value transactions faster and more seamless. How would you evaluate the success of this product? Explain the key metrics you would track, along with any guardrail metrics you would monitor.",
  "clarifyingQuestions": [
    {
      "q": "Are we mainly judging success on adoption, usage, or long-term retention? And should I assume the target is low-value consumer transactions inside PhonePe, where the main promise is speed and lower friction?",
      "a": "Yes. Focus on low-value consumer payments. The goal is faster, seamless usage and stronger repeat behavior.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Why that metric? Why not just look at total payment volume?",
      "a": "Total payment volume is too broad. PhonePe can grow overall and still have UPI Lite fail as a product.",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "Product Mission → User Value Loop (AARRR / HEART) → 1 North Star + L1 Drivers + Guardrails",
  "coreEquation": "Success = North Star Value Delivered × L1 Funnel Velocity (Subject to Quality/Abuse Guardrails)",
  "strategyOverview": "Approach Evaluating UPI Lite Success at PhonePe (PhonePe) using a Product Metrics structure: start by confirming the business objective and scope, decompose the problem cleanly along Product Mission → User Value Loop (AARRR / HEART) → 1 North Star + L1 Drivers + Guardrails, and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Evaluating UPI Lite Success at PhonePe — Metric Hierarchy",
    "valueText": "L0 / L1 / Guardrail",
    "children": [
      {
        "label": "North Star Metric (Value Delivered to User + Business)",
        "valueText": "Un-gamable KPI",
        "highlight": true
      },
      {
        "label": "L1 Leading Indicators (Activation, Engagement, Retention)",
        "valueText": "Early Signals"
      },
      {
        "label": "Guardrails & Counter-Metrics (Quality, Latency, Cost, Abuse)",
        "valueText": "Safety Check",
        "highlight": true
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Interviewer",
      "prompt": "Evaluating UPI Lite at PhonePe Imagine you are a Product Manager at PhonePe. UPI Lite is designed to make low-",
      "detail": "Evaluating UPI Lite at PhonePe Imagine you are a Product Manager at PhonePe. UPI Lite is designed to make low-value transactions faster and more seamless. How would you evaluate the success of this product? Explain the key metrics you would track, along with any guardrail metrics you would monitor.\nSure. Before I list metrics, I want to clarify the objective a bit.\nAre we mainly judging success on adoption, usage, or long-term retention? And should I assume the target is low-value consumer transactions inside PhonePe, where the main promise is speed and lower friction?\nYes. Focus on low-value consumer payments. T"
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "Great. Then I would measure success in three layers.",
      "detail": "Great. Then I would measure success in three layers.\nFirst, I would check whether users are discovering and enabling UPI Lite.\nSecond, I would see whether they are actually using it for the first transaction.\nThird, I would track whether they keep coming back for repeat low-value payments."
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "If I had to choose one North Star Metric, I would use the number of successful UPI Lite transactions from acti",
      "detail": "If I had to choose one North Star Metric, I would use the number of successful UPI Lite transactions from active UPI Lite users, or more specifically, the share of eligible low- value transactions completed through UPI Lite.\nThat tells me whether the product is genuinely becoming the default for this use case.\nWhy that metric? Why not just look at total payment volume?\nTotal payment volume is too broad. PhonePe can grow overall and still have UPI Lite fail as a product."
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "I want a metric that reflects the specific value proposition. UPI Lite is not just about more payments. It is ",
      "detail": "I want a metric that reflects the specific value proposition. UPI Lite is not just about more payments. It is about making small payments easier and faster.\nFair. Walk me through the journey.\nI would map the journey like this:\nUser sees UPI Lite as an option User enables UPI Lite User adds balance or sets it up successfully User completes the first low-value transaction User repeats the behavior for future small payments So I would build the metric tree around that journey."
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "North Star: successful UPI Lite transactions, or share of eligible low-value transactions done via UPI Lite Th",
      "detail": "North Star: successful UPI Lite transactions, or share of eligible low-value transactions done via UPI Lite Then supporting metrics:\nactivation rate, meaning % of eligible users who enable UPI Lite first-transaction success rate after enablement repeat usage rate over 7 days and 30 days transactions per active UPI Lite user median time to complete a payment Interesting. Why include time to complete a payment?\nBecause speed is a core part of the promise.\nIf users are completing transactions, but the flow is slow or clunky, the product may still be working functionally while missing its main value. So I would track"
    }
  ],
  "recommendations": [
    "Prioritize the highest-impact P0 bottleneck identified in Evaluating UPI Lite Success at PhonePe before secondary optimizations.",
    "Pilot the top intervention in a controlled cohort/region with clear North Star and guardrail tracking.",
    "Scale rollout only after verifying unit economics and zero adverse second-order effects."
  ],
  "metricsAndGuardrails": {
    "northStar": "Completed Core Value Actions per WAU (PhonePe)",
    "leading": [
      "Activation funnel conversion %",
      "D7 / D30 cohort retention"
    ],
    "guardrails": [
      "Spam / error / complaint rate",
      "Unit margin & system latency"
    ]
  },
  "synthesisScript": "For PhonePe’s Evaluating UPI Lite Success at PhonePe case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Prioritize the highest-impact P0 bottleneck identified in Evaluating UPI Lite Success at PhonePe before secondary optimizations. We will validate success via Completed Core Value Actions per WAU (PhonePe) while guarding against Spam / error / complaint rate.",
  "interviewerTrap": "Picking vanity metrics ('Total Downloads', 'Page Views') or forgetting Counter-Metrics / Guardrails that catch metric gaming!",
  "variations": [
    {
      "question": "How would your recommendation change if PhonePe had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Product Metrics",
    "correctFramework": "Product Mission → User Value Loop (AARRR / HEART) → 1 North Star + L1 Drivers + Guardrails",
    "structureOptions": [
      {
        "label": "State Value Exchange → Map Funnel (AARRR/HEART) → Pick 1 North Star + L1 Drivers + Counter-Metric Guardrails",
        "correct": true,
        "feedback": "Textbook Metrics structure! Balancing North Star with Guardrails proves senior judgment."
      },
      {
        "label": "Track only Total Registered Users and App Store Impressions",
        "correct": false,
        "feedback": "Vanity metrics ignore actual value delivery, retention, and side effects."
      },
      {
        "label": "Skip metrics and propose an M&A acquisition",
        "correct": false,
        "feedback": "Off-topic for a Product Metrics evaluation prompt."
      }
    ],
    "decisionQuiz": {
      "question": "Why must every North Star Metric be paired with Guardrail (Counter) Metrics?",
      "options": [
        {
          "label": "To ensure optimizing the North Star does not silently degrade quality, margin, latency, or user trust",
          "correct": true,
          "feedback": "Spot on! Guardrails catch gaming and negative second-order effects."
        },
        {
          "label": "Because SQL tables require 3 columns",
          "correct": false,
          "feedback": "It is a product governance principle, not a database rule."
        },
        {
          "label": "To inflate slide counts",
          "correct": false,
          "feedback": "Guardrails directly govern launch/no-launch A/B decisions."
        }
      ]
    }
  }
},
{
  "id": "ecell-gtm-spotify-cinematic",
  "title": "Spotify Goes Cinematic (Video Streaming GTM)",
  "company": "Spotify",
  "source": "E-Cell IITG 2026-27",
  "track": "Product",
  "category": "GTM",
  "difficulty": 2,
  "isStarter": true,
  "tags": [
    "GTM",
    "Video Streaming",
    "Creator Economy",
    "Pilots"
  ],
  "prompt": "Spotify wants to enter the video streaming market dominated by Netflix, YouTube, and Twitch. How would you approach the go-to-market (GTM) strategy?",
  "clarifyingQuestions": [
    {
      "q": "Are we launching globally on Day 1 or piloting in key markets, and what content is included?",
      "a": "Pilot in US, UK, and India covering both entertainment and creator-driven video.",
      "why": "Shapes creator seeding, regional pricing, and bandwidth/UX priorities."
    }
  ],
  "frameworkUsed": "Phased GTM (Pre-Launch → Launch → Post-Launch) + 4Ps + Creator Ecosystem Flywheel",
  "coreEquation": "Video Adoption = Existing Audio MAU × Video Discovery % × Creator Supply Depth × Watch Retention",
  "strategyOverview": "Leverage Spotify’s massive audio listener base (18–34) as a zero-CAC beachhead rather than fighting YouTube/Netflix head-on on Day 1. Sequence GTM into Pre-Launch (creator exclusives + video podcast teasers), Launch (bundled audio+video tiers, creator monetization rev-share), and Post-Launch (watch-time retention & ad-tier expansion).",
  "tree": {
    "label": "Spotify Goes Cinematic (Video Streaming GTM) — GTM Blueprint",
    "valueText": "3-Phase Rollout",
    "children": [
      {
        "label": "Phase 1: Pre-Launch (Beachhead ICP, Positioning, Supply/Waitlist)",
        "valueText": "Seed Trust",
        "highlight": true
      },
      {
        "label": "Phase 2: Launch (Channels, Intro Pricing, Activation Loops)",
        "valueText": "Drive Trial",
        "highlight": true
      },
      {
        "label": "Phase 3: Post-Launch (Retention, Referrals, CAC/LTV Audit)",
        "valueText": "Scale Safely"
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Interviewer",
      "prompt": "Spotify wants to enter the video streaming market dominated by Netflix, YouTube, and Twitch. How would you app",
      "detail": "Spotify wants to enter the video streaming market dominated by Netflix, YouTube, and Twitch. How would you approach the go-to-market (GTM) strategy?\nBefore suggesting GTM, may I ask a few clarifying questions?\nIs Spotify planning to launch globally from the start or test in a few high-engagement markets first?\nAlso, do we want to focus on entertainment videos only, or should we include learning, live, and creator-driven content too?"
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "Let’s assume Spotify will pilot in a few major regions like the US, UK, and India, and will include both enter",
      "detail": "Let’s assume Spotify will pilot in a few major regions like the US, UK, and India, and will include both entertainment and creator content.\nGot it. In that case, I’d structure the GTM into three phases: Pre-launch, Launch, and Post-launch.\nIn the Pre-launch phase, I’d focus on identifying the target audience, mainly young adults aged 18 to 34, urban professionals, and students who already use streaming platforms for entertainment and learning.\nTo build anticipation, Spotify could run inbound marketing, such as content teasers, creator announcements, and SEO campaigns. We would also use outbound marketing like inf"
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "That makes sense. How will Spotify differentiate itself from existing players like YouTube or Netflix?",
      "detail": "That makes sense. How will Spotify differentiate itself from existing players like YouTube or Netflix?\nI believe Spotify’s personalization feature is its biggest differentiator. Spotify’s machine learning algorithms can create personalized video playlists just like it does for music, tailored by mood, genre, or even user habits. This can improve discovery and retention much more than Netflix’s catalog-style browsing or YouTube’s random suggestions.\nAdditionally, Spotify can combine music and video experiences. For instance, it allows users to switch between a podcast, a music video, or a creator’s vlog all within"
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "During launch, Spotify should drive buzz through interactive, personalized campaigns, offering invite-only acc",
      "detail": "During launch, Spotify should drive buzz through interactive, personalized campaigns, offering invite-only access, exclusive creator premieres, and referral rewards to spark FOMO.\nIt should ensure seamless access across mobile, desktop, and smart TVs, while partnering with telecoms and device makers for bundled promotions.\nWhat kind of pricing model would you suggest?\nI recommend a tiered pricing model:"
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "A free ad-supported tier to maximize reach.",
      "detail": "A free ad-supported tier to maximize reach.\nA premium ad-free tier bundled with Spotify Music Premium.\nExclusive add-ons like fan subscriptions or creator - exclusive content.\nDiscounts for students and families to improve affordability."
    }
  ],
  "recommendations": [
    "Prioritize the highest-impact P0 bottleneck identified in Spotify Goes Cinematic (Video Streaming GTM) before secondary optimizations.",
    "Pilot the top intervention in a controlled cohort/region with clear North Star and guardrail tracking.",
    "Scale rollout only after verifying unit economics and zero adverse second-order effects."
  ],
  "metricsAndGuardrails": {
    "northStar": "Activated & Retained Beachhead Customers for Spotify Goes Cinematic (Video Streaming GTM)",
    "leading": [
      "Waitlist-to-activation conversion %",
      "CAC vs Day-30 Retention"
    ],
    "guardrails": [
      "CAC Payback Period (months)",
      "Early churn / negative review rate"
    ]
  },
  "synthesisScript": "For Spotify’s video launch in the US, UK, and India, I recommend leveraging our existing 18–34 audio base and creator network through a 3-phase GTM—seeding video podcasts and creator exclusives pre-launch, rolling out bundled tiers at launch, and optimizing D30 watch retention while guarding core audio streaming engagement.",
  "interviewerTrap": "Trying to outspend Netflix on Hollywood originals on Day 1 instead of leveraging Spotify’s existing podcast/music creators and 18–34 audio habit!",
  "variations": [
    {
      "question": "How would your recommendation change if Spotify had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "GTM",
    "correctFramework": "Market Audit → Beachhead ICP & Positioning → 4Ps → Pre-Launch / Launch / Post-Launch",
    "structureOptions": [
      {
        "label": "Define Goal & Beachhead ICP → Craft Positioning & 4Ps → Execute Pre-Launch, Launch, Post-Launch + KPIs",
        "correct": true,
        "feedback": "Textbook GTM! Tight beachhead focus + phased rollout wins every time."
      },
      {
        "label": "Spend 100% of budget on Super Bowl / IPL TV ads on Day 1",
        "correct": false,
        "feedback": "Mass ads before proving activation and channel fit burn cash with poor retention."
      },
      {
        "label": "Focus solely on cutting warehouse electricity costs",
        "correct": false,
        "feedback": "That is a Profitability cost exercise, not a Go-To-Market launch strategy."
      }
    ],
    "decisionQuiz": {
      "question": "Why should a GTM strategy always start with a tight Beachhead ICP instead of the whole market?",
      "options": [
        {
          "label": "Concentrates budget on high-pain early adopters to prove PMF and word-of-mouth before scaling",
          "correct": true,
          "feedback": "Spot on! Winning 1 niche deeply creates momentum and lowers CAC."
        },
        {
          "label": "Because larger markets are illegal to serve",
          "correct": false,
          "feedback": "It is about capital efficiency and PMF focus."
        },
        {
          "label": "To avoid measuring retention",
          "correct": false,
          "feedback": "Retention is easiest to measure and optimize inside a clean beachhead cohort."
        }
      ]
    }
  }
},
{
  "id": "ecell-gtm-fb-insights-pro",
  "title": "Facebook’s Secret Side Hustle (Insights Pro B2B)",
  "company": "Meta / Facebook",
  "source": "E-Cell IITG 2026-27",
  "track": "Product",
  "category": "GTM",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "Meta / Facebook",
    "GTM",
    "Product"
  ],
  "prompt": "Imagine you’re a PM at Facebook. The company plans to launch Facebook Insights Pro which is an enterprise analytics platform priced about 15–20% above Power BI and Tableau, built on Facebook’s proprietary data. How would you approach this?",
  "clarifyingQuestions": [
    {
      "q": "Before diving in, can I clarify the scope? Is this positioned as a standalone analytics tool or something tied to Facebook’s ad ecosystem?",
      "a": "It’s standalone, but it leverages Facebook’s proprietary data Got it. And are we targeting specific regions or going global from day one?",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "It’s standalone, but it leverages Facebook’s proprietary data Got it. And are we targeting specific regions or going global from day one?",
      "a": "Focus on mid-to-large enterprises in India.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "How would you structure your solution?",
      "a": "I’d break it into three parts: value proposition, target segments, and go-to-market strategy.",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "Market Audit → Beachhead ICP & Positioning → 4Ps → Pre-Launch / Launch / Post-Launch",
  "coreEquation": "Launch Success = Target ICP Reach × Activation Conversion × D30 Retention × Unit Margin",
  "strategyOverview": "Approach Facebook’s Secret Side Hustle (Insights Pro B2B) (Meta / Facebook) using a GTM structure: start by confirming the business objective and scope, decompose the problem cleanly along Market Audit → Beachhead ICP & Positioning → 4Ps → Pre-Launch / Launch / Post-Launch, and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Facebook’s Secret Side Hustle (Insights Pro B2B) — GTM Blueprint",
    "valueText": "3-Phase Rollout",
    "children": [
      {
        "label": "Phase 1: Pre-Launch (Beachhead ICP, Positioning, Supply/Waitlist)",
        "valueText": "Seed Trust",
        "highlight": true
      },
      {
        "label": "Phase 2: Launch (Channels, Intro Pricing, Activation Loops)",
        "valueText": "Drive Trial",
        "highlight": true
      },
      {
        "label": "Phase 3: Post-Launch (Retention, Referrals, CAC/LTV Audit)",
        "valueText": "Scale Safely"
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Interviewer",
      "prompt": "Imagine you’re a PM at Facebook. The company plans to launch Facebook Insights Pro which is an enterprise anal",
      "detail": "Imagine you’re a PM at Facebook. The company plans to launch Facebook Insights Pro which is an enterprise analytics platform priced about 15–20% above Power BI and Tableau, built on Facebook’s proprietary data. How would you approach this?\nBefore diving in, can I clarify the scope? Is this positioned as a standalone analytics tool or something tied to Facebook’s ad ecosystem?\nIt’s standalone, but it leverages Facebook’s proprietary data Got it. And are we targeting specific regions or going global from day one?\nFocus on mid-to-large enterprises in India."
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "Understood. So the problem we’re addressing is that businesses already analyze their own data well, but they l",
      "detail": "Understood. So the problem we’re addressing is that businesses already analyze their own data well, but they lack visibility into external consumer behavior. Facebook can uniquely solve that by offering aggregated, anonymized insights from billions of users, a layer others don’t have.\nHow would you structure your solution?\nI’d break it into three parts: value proposition, target segments, and go-to-market strategy.\nLet’s start with the value proposition."
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "One of the biggest opportunities Facebook can truly excel at is bridging the gap between what happened and why",
      "detail": "One of the biggest opportunities Facebook can truly excel at is bridging the gap between what happened and why it happened. Traditional tools like Tableau or Power BI only tell you what’s going on within your business, but they miss the external context.\nInsights Pro changes that, by combining a company’s internal data with Facebook’s insights, it reveals why trends are shifting. So when sales dip or engagement spikes, you don’t just see the numbers, you understand the consumer behavior and market movements driving them.\nWhich customer segments would you target first?\nTwo key customer groups stand out for me."
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "E-commerce and D2C brands would use Insights Pro as an Audience Growth Engine, they already depend on Facebook",
      "detail": "E-commerce and D2C brands would use Insights Pro as an Audience Growth Engine, they already depend on Facebook Ads but need deeper visibility into untapped audiences and emerging trends.\nConsumer Packaged Goods (CPG) companies can use it as a Modern Market Research Platform that replaces slow, survey-based research with live brand-health tracking, campaign measurement, and trend discovery.\nWhy start with these two?\nThey already spend on consumer data and have a direct line to measurable ROI."
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "Because Facebook has such a huge user base, there’s strong existing demand for its audience insights. That mak",
      "detail": "Because Facebook has such a huge user base, there’s strong existing demand for its audience insights. That makes it easier to show these brands clear, measurable value from using Insights Pro.\nLet’s talk about your go-to-market plan. What would you focus on in the pre-launch phase?\nIn pre-launch, the main focus is creating a buzz. This can be done by onboarding 10–15 lighthouse brands and refining our positioning by showing clear value compared to other tools.\nOkay, once the buzz is created, what happens during the launch phase?"
    }
  ],
  "recommendations": [
    "Prioritize the highest-impact P0 bottleneck identified in Facebook’s Secret Side Hustle (Insights Pro B2B) before secondary optimizations.",
    "Pilot the top intervention in a controlled cohort/region with clear North Star and guardrail tracking.",
    "Scale rollout only after verifying unit economics and zero adverse second-order effects."
  ],
  "metricsAndGuardrails": {
    "northStar": "Activated & Retained Beachhead Customers for Facebook’s Secret Side Hustle (Insights Pro B2B)",
    "leading": [
      "Waitlist-to-activation conversion %",
      "CAC vs Day-30 Retention"
    ],
    "guardrails": [
      "CAC Payback Period (months)",
      "Early churn / negative review rate"
    ]
  },
  "synthesisScript": "For Meta / Facebook’s Facebook’s Secret Side Hustle (Insights Pro B2B) case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Prioritize the highest-impact P0 bottleneck identified in Facebook’s Secret Side Hustle (Insights Pro B2B) before secondary optimizations. We will validate success via Activated & Retained Beachhead Customers for Facebook’s Secret Side Hustle (Insights Pro B2B) while guarding against CAC Payback Period (months).",
  "interviewerTrap": "Targeting 'everyone in the country' on Day 1 or listing generic social ads without defining ICP, positioning, pricing, and phased rollout!",
  "variations": [
    {
      "question": "How would your recommendation change if Meta / Facebook had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "GTM",
    "correctFramework": "Market Audit → Beachhead ICP & Positioning → 4Ps → Pre-Launch / Launch / Post-Launch",
    "structureOptions": [
      {
        "label": "Define Goal & Beachhead ICP → Craft Positioning & 4Ps → Execute Pre-Launch, Launch, Post-Launch + KPIs",
        "correct": true,
        "feedback": "Textbook GTM! Tight beachhead focus + phased rollout wins every time."
      },
      {
        "label": "Spend 100% of budget on Super Bowl / IPL TV ads on Day 1",
        "correct": false,
        "feedback": "Mass ads before proving activation and channel fit burn cash with poor retention."
      },
      {
        "label": "Focus solely on cutting warehouse electricity costs",
        "correct": false,
        "feedback": "That is a Profitability cost exercise, not a Go-To-Market launch strategy."
      }
    ],
    "decisionQuiz": {
      "question": "Why should a GTM strategy always start with a tight Beachhead ICP instead of the whole market?",
      "options": [
        {
          "label": "Concentrates budget on high-pain early adopters to prove PMF and word-of-mouth before scaling",
          "correct": true,
          "feedback": "Spot on! Winning 1 niche deeply creates momentum and lowers CAC."
        },
        {
          "label": "Because larger markets are illegal to serve",
          "correct": false,
          "feedback": "It is about capital efficiency and PMF focus."
        },
        {
          "label": "To avoid measuring retention",
          "correct": false,
          "feedback": "Retention is easiest to measure and optimize inside a clean beachhead cohort."
        }
      ]
    }
  }
},
{
  "id": "ecell-gtm-huawei-india",
  "title": "Huawei 2.0: Desi Edition (India Re-Entry GTM)",
  "company": "Huawei",
  "source": "E-Cell IITG 2026-27",
  "track": "Product",
  "category": "GTM",
  "difficulty": 4,
  "isStarter": false,
  "tags": [
    "Huawei",
    "GTM",
    "Product"
  ],
  "prompt": "Huawei wants to re-enter India for smartphones and laptops, but faces nationalist sentiment, “Make in India” pressures, and occasional boycotts. How would you design a go-to-market strategy?",
  "clarifyingQuestions": [
    {
      "q": "It’s an interesting challenge. Just to clarify, are we primarily launching smartphones, laptops, or both? Earlier, Huawei only had smartphones in India.",
      "a": "Both, but focus can be adjusted per market demand.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "During pre-launch, should we target metro cities first, or aim for a pan-India rollout?",
      "a": "Metro cities first, higher smartphone penetration and early adopters help create credibility quickly.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "That makes sense. Any other suggestions?",
      "a": "Optimizing devices for local conditions like heat management and regional language support can ensure that products feel relevant to Indian consumers, while inviting regulators and journalists to see the facilities firsthand will build trus",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "Market Audit → Beachhead ICP & Positioning → 4Ps → Pre-Launch / Launch / Post-Launch",
  "coreEquation": "Launch Success = Target ICP Reach × Activation Conversion × D30 Retention × Unit Margin",
  "strategyOverview": "Approach Huawei 2.0: Desi Edition (India Re-Entry GTM) (Huawei) using a GTM structure: start by confirming the business objective and scope, decompose the problem cleanly along Market Audit → Beachhead ICP & Positioning → 4Ps → Pre-Launch / Launch / Post-Launch, and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Huawei 2.0: Desi Edition (India Re-Entry GTM) — GTM Blueprint",
    "valueText": "3-Phase Rollout",
    "children": [
      {
        "label": "Phase 1: Pre-Launch (Beachhead ICP, Positioning, Supply/Waitlist)",
        "valueText": "Seed Trust",
        "highlight": true
      },
      {
        "label": "Phase 2: Launch (Channels, Intro Pricing, Activation Loops)",
        "valueText": "Drive Trial",
        "highlight": true
      },
      {
        "label": "Phase 3: Post-Launch (Retention, Referrals, CAC/LTV Audit)",
        "valueText": "Scale Safely"
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Interviewer",
      "prompt": "Huawei wants to re-enter India for smartphones and laptops, but faces nationalist sentiment, “Make in India” p",
      "detail": "Huawei wants to re-enter India for smartphones and laptops, but faces nationalist sentiment, “Make in India” pressures, and occasional boycotts. How would you design a go-to-market strategy?\nIt’s an interesting challenge. Just to clarify, are we primarily launching smartphones, laptops, or both? Earlier, Huawei only had smartphones in India.\nBoth, but focus can be adjusted per market demand.\nGot it. I’d structure the strategy in three phases: pre-launch, launch, and post-launch with steps designed to rebuild trust, credibility, and consumer relevance."
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "In the pre-launch phase, Huawei should position itself as a long-term Indian partner rather than just a foreig",
      "detail": "In the pre-launch phase, Huawei should position itself as a long-term Indian partner rather than just a foreign seller. Combining local manufacturing with India-specific R&D signals commitment and helps address nationalist sentiment.\nSetting milestones like 30% local assembly in the first year and creating 1,000 Indian jobs directly addresses local employment concerns, which generates goodwill and media credibility.\nFurther one of the most important factors will be showing that the user’s data is not sent to China.\nDuring pre-launch, should we target metro cities first, or aim for a pan-India rollout?"
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "Metro cities first, higher smartphone penetration and early adopters help create credibility quickly.",
      "detail": "Metro cities first, higher smartphone penetration and early adopters help create credibility quickly.\nThat makes sense. Any other suggestions?\nOptimizing devices for local conditions like heat management and regional language support can ensure that products feel relevant to Indian consumers, while inviting regulators and journalists to see the facilities firsthand will build trust in our commitment.\nAnd what about the launch strategy, how would you cater to that?"
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "At launch, the narrative should shift from “who we are” to “what we offer.”The main focus should be on highlig",
      "detail": "At launch, the narrative should shift from “who we are” to “what we offer.”The main focus should be on highlighting local assembly, offering longer warranties and EMI options. Partnering with tech reviewers and influencers demonstrates product quality and showcases Indian-led innovation, helping counter lingering skepticism.\nIf a boycott resurfaces mid-launch, what would you do?\nI’d set up a PR command center to respond quickly with verified facts such as job numbers, factory tours, and employee testimonials.\nThe thinking is to maintain credibility by being transparent and calm, rather than defensive, which preve"
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "What will be your Pre-launch strategy?",
      "detail": "What will be your Pre-launch strategy?\nPost-launch, the focus should be on sustaining trust and showing measurable progress.\nPublishing quarterly updates on localization, collaborating with Indian developers for apps and accessories, and gradually expanding into premium segments signals long- term commitment and encourages brand loyalty.\nWhat key metrics would define success?"
    }
  ],
  "recommendations": [
    "Prioritize the highest-impact P0 bottleneck identified in Huawei 2.0: Desi Edition (India Re-Entry GTM) before secondary optimizations.",
    "Pilot the top intervention in a controlled cohort/region with clear North Star and guardrail tracking.",
    "Scale rollout only after verifying unit economics and zero adverse second-order effects."
  ],
  "metricsAndGuardrails": {
    "northStar": "Activated & Retained Beachhead Customers for Huawei 2.0: Desi Edition (India Re-Entry GTM)",
    "leading": [
      "Waitlist-to-activation conversion %",
      "CAC vs Day-30 Retention"
    ],
    "guardrails": [
      "CAC Payback Period (months)",
      "Early churn / negative review rate"
    ]
  },
  "synthesisScript": "For Huawei’s Huawei 2.0: Desi Edition (India Re-Entry GTM) case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Prioritize the highest-impact P0 bottleneck identified in Huawei 2.0: Desi Edition (India Re-Entry GTM) before secondary optimizations. We will validate success via Activated & Retained Beachhead Customers for Huawei 2.0: Desi Edition (India Re-Entry GTM) while guarding against CAC Payback Period (months).",
  "interviewerTrap": "Targeting 'everyone in the country' on Day 1 or listing generic social ads without defining ICP, positioning, pricing, and phased rollout!",
  "variations": [
    {
      "question": "How would your recommendation change if Huawei had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "GTM",
    "correctFramework": "Market Audit → Beachhead ICP & Positioning → 4Ps → Pre-Launch / Launch / Post-Launch",
    "structureOptions": [
      {
        "label": "Define Goal & Beachhead ICP → Craft Positioning & 4Ps → Execute Pre-Launch, Launch, Post-Launch + KPIs",
        "correct": true,
        "feedback": "Textbook GTM! Tight beachhead focus + phased rollout wins every time."
      },
      {
        "label": "Spend 100% of budget on Super Bowl / IPL TV ads on Day 1",
        "correct": false,
        "feedback": "Mass ads before proving activation and channel fit burn cash with poor retention."
      },
      {
        "label": "Focus solely on cutting warehouse electricity costs",
        "correct": false,
        "feedback": "That is a Profitability cost exercise, not a Go-To-Market launch strategy."
      }
    ],
    "decisionQuiz": {
      "question": "Why should a GTM strategy always start with a tight Beachhead ICP instead of the whole market?",
      "options": [
        {
          "label": "Concentrates budget on high-pain early adopters to prove PMF and word-of-mouth before scaling",
          "correct": true,
          "feedback": "Spot on! Winning 1 niche deeply creates momentum and lowers CAC."
        },
        {
          "label": "Because larger markets are illegal to serve",
          "correct": false,
          "feedback": "It is about capital efficiency and PMF focus."
        },
        {
          "label": "To avoid measuring retention",
          "correct": false,
          "feedback": "Retention is easiest to measure and optimize inside a clean beachhead cohort."
        }
      ]
    }
  }
},
{
  "id": "ecell-gtm-dating-india",
  "title": "Online Dating App (India Market Expansion GTM)",
  "company": "Dating App",
  "source": "E-Cell IITG 2026-27",
  "track": "Product",
  "category": "GTM",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "Dating App",
    "GTM",
    "Product"
  ],
  "prompt": "(India Expansion) Your client is a leading online dating platform with successful operations across North America and Europe. They are considering entering the Indian market over the next 12 months. Should they enter, and if yes, what should the go-to-market strategy be?",
  "clarifyingQuestions": [
    {
      "q": "When you say entering India, are we talking about launching a localized version of the existing app? Also, are we optimizing for revenue, market share, or long-term strategic presence?",
      "a": "Assume it is a localized launch. The company has enough money to expand. The goal is to decide whether to enter and, if yes, how to launch well.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "First, should we enter?",
      "a": "Second, if yes, where do we start and how do we launch?",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Second, if yes, where do we start and how do we launch?",
      "a": "On the first question, I would look at three things:",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "Market Audit → Beachhead ICP & Positioning → 4Ps → Pre-Launch / Launch / Post-Launch",
  "coreEquation": "Launch Success = Target ICP Reach × Activation Conversion × D30 Retention × Unit Margin",
  "strategyOverview": "Approach Online Dating App (India Market Expansion GTM) (Dating App) using a GTM structure: start by confirming the business objective and scope, decompose the problem cleanly along Market Audit → Beachhead ICP & Positioning → 4Ps → Pre-Launch / Launch / Post-Launch, and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Online Dating App (India Market Expansion GTM) — GTM Blueprint",
    "valueText": "3-Phase Rollout",
    "children": [
      {
        "label": "Phase 1: Pre-Launch (Beachhead ICP, Positioning, Supply/Waitlist)",
        "valueText": "Seed Trust",
        "highlight": true
      },
      {
        "label": "Phase 2: Launch (Channels, Intro Pricing, Activation Loops)",
        "valueText": "Drive Trial",
        "highlight": true
      },
      {
        "label": "Phase 3: Post-Launch (Retention, Referrals, CAC/LTV Audit)",
        "valueText": "Scale Safely"
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Interviewer",
      "prompt": "Online Dating App(India Expansion) Your client is a leading online dating platform with successful operations ",
      "detail": "Online Dating App(India Expansion) Your client is a leading online dating platform with successful operations across North America and Europe. They are considering entering the Indian market over the next 12 months. Should they enter, and if yes, what should the go-to-market strategy be?\nSure. Before I answer, I want to clarify a couple of things.\nWhen you say entering India, are we talking about launching a localized version of the existing app? Also, are we optimizing for revenue, market share, or long-term strategic presence?\nAssume it is a localized launch. The company has enough money to expand. The goal is "
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "Got it. I would approach this in two parts.",
      "detail": "Got it. I would approach this in two parts.\nFirst, should we enter?\nSecond, if yes, where do we start and how do we launch?\nOn the first question, I would look at three things:"
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "market attractiveness fit with the product ability to win Okay. Start with market attractiveness.",
      "detail": "market attractiveness fit with the product ability to win Okay. Start with market attractiveness.\nIndia is attractive due to its large market, high urban internet usage, and growing digital relationship demand. But success hinges on trust, safety, and cultural fit.\nMarket size User readiness Trust & privacy Localization My initial view: enter through a focused beachhead, not a broad national launch.\nWhy not launch nationwide if the company has enough money?"
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "Because this category is very sensitive to trust and network effects.",
      "detail": "Because this category is very sensitive to trust and network effects.\nIf we go too broad too early, we risk weak density, poor matching, and a confusing user experience. Dating apps work better when there is enough local liquidity. So I would rather concentrate on a few high-potential cities first, prove the model, and then expand.\nFair. Who would you target first?\nI would start with urban, digitally native adults in metros, probably in the 22 to 34 age range."
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "Within that, I would focus on:",
      "detail": "Within that, I would focus on:\nusers who are already open to online dating users in large cities with higher acceptance users who value convenience, safety, and better match quality I would also think carefully about gender balance. The product cannot feel skewed toward one side of the market, otherwise engagement will break down.\nInteresting. What would make this product work in India?\nTrust and safety: strong verification, privacy controls, reporting, and moderation Localization: language, cultural tone, and relationship preferences that feel Indian Liquidity: enough users in the same city so matches do not fee"
    }
  ],
  "recommendations": [
    "Prioritize the highest-impact P0 bottleneck identified in Online Dating App (India Market Expansion GTM) before secondary optimizations.",
    "Pilot the top intervention in a controlled cohort/region with clear North Star and guardrail tracking.",
    "Scale rollout only after verifying unit economics and zero adverse second-order effects."
  ],
  "metricsAndGuardrails": {
    "northStar": "Activated & Retained Beachhead Customers for Online Dating App (India Market Expansion GTM)",
    "leading": [
      "Waitlist-to-activation conversion %",
      "CAC vs Day-30 Retention"
    ],
    "guardrails": [
      "CAC Payback Period (months)",
      "Early churn / negative review rate"
    ]
  },
  "synthesisScript": "For Dating App’s Online Dating App (India Market Expansion GTM) case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Prioritize the highest-impact P0 bottleneck identified in Online Dating App (India Market Expansion GTM) before secondary optimizations. We will validate success via Activated & Retained Beachhead Customers for Online Dating App (India Market Expansion GTM) while guarding against CAC Payback Period (months).",
  "interviewerTrap": "Targeting 'everyone in the country' on Day 1 or listing generic social ads without defining ICP, positioning, pricing, and phased rollout!",
  "variations": [
    {
      "question": "How would your recommendation change if Dating App had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "GTM",
    "correctFramework": "Market Audit → Beachhead ICP & Positioning → 4Ps → Pre-Launch / Launch / Post-Launch",
    "structureOptions": [
      {
        "label": "Define Goal & Beachhead ICP → Craft Positioning & 4Ps → Execute Pre-Launch, Launch, Post-Launch + KPIs",
        "correct": true,
        "feedback": "Textbook GTM! Tight beachhead focus + phased rollout wins every time."
      },
      {
        "label": "Spend 100% of budget on Super Bowl / IPL TV ads on Day 1",
        "correct": false,
        "feedback": "Mass ads before proving activation and channel fit burn cash with poor retention."
      },
      {
        "label": "Focus solely on cutting warehouse electricity costs",
        "correct": false,
        "feedback": "That is a Profitability cost exercise, not a Go-To-Market launch strategy."
      }
    ],
    "decisionQuiz": {
      "question": "Why should a GTM strategy always start with a tight Beachhead ICP instead of the whole market?",
      "options": [
        {
          "label": "Concentrates budget on high-pain early adopters to prove PMF and word-of-mouth before scaling",
          "correct": true,
          "feedback": "Spot on! Winning 1 niche deeply creates momentum and lowers CAC."
        },
        {
          "label": "Because larger markets are illegal to serve",
          "correct": false,
          "feedback": "It is about capital efficiency and PMF focus."
        },
        {
          "label": "To avoid measuring retention",
          "correct": false,
          "feedback": "Retention is easiest to measure and optimize inside a clean beachhead cohort."
        }
      ]
    }
  }
},
{
  "id": "ecell-gtm-fintech-uae",
  "title": "Indian Fintech Expansion into UAE",
  "company": "Fintech",
  "source": "E-Cell IITG 2026-27",
  "track": "Product",
  "category": "GTM",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "Fintech",
    "GTM",
    "Product"
  ],
  "prompt": "Fintech Expansion into UAE Your client is an Indian fintech company providing digital payments and financial services. After establishing a strong domestic presence, they are evaluating expansion into the UAE. The management wants your recommendation on whether UAE is an attractive market, which customer segments to target, the most suitable entry strategy, and key risks and success factors. Prepare a recommendation ",
  "clarifyingQuestions": [
    {
      "q": "Before I structure my answer, may I ask a few clarifying questions?",
      "a": "Sure, go ahead.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Are we looking at the full suite of services, payments, remittances, lending, and wealth, or should I focus on a specific product first? And is the client aiming for organic entry or open to partnerships/acquisitions?",
      "a": "Assume the client wants to start with payments and remittances, and is open to any entry mode that makes strategic sense I’d structure my answer into four parts: market attractiveness, target segments, entry strategy, and risks & success fa",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "That's a fair take. Which customer segments would you target first?",
      "a": "I see two clear segments.",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "Market Audit → Beachhead ICP & Positioning → 4Ps → Pre-Launch / Launch / Post-Launch",
  "coreEquation": "Launch Success = Target ICP Reach × Activation Conversion × D30 Retention × Unit Margin",
  "strategyOverview": "Approach Indian Fintech Expansion into UAE (Fintech) using a GTM structure: start by confirming the business objective and scope, decompose the problem cleanly along Market Audit → Beachhead ICP & Positioning → 4Ps → Pre-Launch / Launch / Post-Launch, and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Indian Fintech Expansion into UAE — GTM Blueprint",
    "valueText": "3-Phase Rollout",
    "children": [
      {
        "label": "Phase 1: Pre-Launch (Beachhead ICP, Positioning, Supply/Waitlist)",
        "valueText": "Seed Trust",
        "highlight": true
      },
      {
        "label": "Phase 2: Launch (Channels, Intro Pricing, Activation Loops)",
        "valueText": "Drive Trial",
        "highlight": true
      },
      {
        "label": "Phase 3: Post-Launch (Retention, Referrals, CAC/LTV Audit)",
        "valueText": "Scale Safely"
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Candidate",
      "prompt": "Fintech Expansion into UAE Your client is an Indian fintech company providing digital payments and financial s",
      "detail": "Fintech Expansion into UAE Your client is an Indian fintech company providing digital payments and financial services. After establishing a strong domestic presence, they are evaluating expansion into the UAE. The management wants your recommendation on whether UAE is an attractive market, which customer segments to target, the most suitable entry strategy, and key risks and success factors. Prepare a recommendation for the Board.\nBefore I structure my answer, may I ask a few clarifying questions?\nAre we looking at the full suite of services, payments, remittances, lending, and wealth, or should I focus on a spec"
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "Starting with market attractiveness, I’d assess three lenses:",
      "detail": "Starting with market attractiveness, I’d assess three lenses:\nSize & growth: Large, digitally savvy expat population, strong India-UAE remittance flows, and rising digital payment adoption.\nStructural fit: Our low-cost, reliable payment rails fit a high-volume, price-sensitive market where transfer cost and speed matter.\nCompetition: Exchange houses and global players like Western Union dominate, but many still rely on legacy infrastructure."
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "Overall, I’d call the market attractive but only win-able through better cost and user experience.",
      "detail": "Overall, I’d call the market attractive but only win-able through better cost and user experience.\nThat's a fair take. Which customer segments would you target first?\nI see two clear segments.\nThe first is the Indian expat and blue-collar worker segment, they're the largest group and remit regularly, but are underserved by expensive legacy corridors. For them, low fees and a simple app experience are the biggest lever."
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "The second is SMEs and merchants, especially Indian-origin traders and shopkeepers in hubs like Dubai and Shar",
      "detail": "The second is SMEs and merchants, especially Indian-origin traders and shopkeepers in hubs like Dubai and Sharjah, who need reliable cross-border payment acceptance and working capital. This segment monetizes better and builds a base for future lending products I'd prioritize the expat remittance segment first, since it's the largest, most underserved, and builds trust and volume quickly, before expanding to SMEs once brand credibility is established.\nMakes sense. Let's talk about entry strategy. How would you approach it?\nI’d structure this into pre-launch, launch, and post-launch phases.\nPre-launch: Secure UAE "
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "Launch: Drive adoption through diaspora referrals, introductory fee discounts, and partnerships with employers",
      "detail": "Launch: Drive adoption through diaspora referrals, introductory fee discounts, and partnerships with employers/labour camps to build initial volume.\nPost-launch: Once trust and scale are established, expand into SME payments and lending, while adding bill payments and UAE-India investment products.\nHow would you differentiate from incumbents like exchange houses and Western Union?\nThe client's biggest differentiator is its low-cost, app-first infrastructure built for scale in India. It can offer near-instant transfers at a fraction of the fees, backed by a simpler digital KYC process than legacy players. Addition"
    }
  ],
  "recommendations": [
    "Prioritize the highest-impact P0 bottleneck identified in Indian Fintech Expansion into UAE before secondary optimizations.",
    "Pilot the top intervention in a controlled cohort/region with clear North Star and guardrail tracking.",
    "Scale rollout only after verifying unit economics and zero adverse second-order effects."
  ],
  "metricsAndGuardrails": {
    "northStar": "Activated & Retained Beachhead Customers for Indian Fintech Expansion into UAE",
    "leading": [
      "Waitlist-to-activation conversion %",
      "CAC vs Day-30 Retention"
    ],
    "guardrails": [
      "CAC Payback Period (months)",
      "Early churn / negative review rate"
    ]
  },
  "synthesisScript": "For Fintech’s Indian Fintech Expansion into UAE case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Prioritize the highest-impact P0 bottleneck identified in Indian Fintech Expansion into UAE before secondary optimizations. We will validate success via Activated & Retained Beachhead Customers for Indian Fintech Expansion into UAE while guarding against CAC Payback Period (months).",
  "interviewerTrap": "Targeting 'everyone in the country' on Day 1 or listing generic social ads without defining ICP, positioning, pricing, and phased rollout!",
  "variations": [
    {
      "question": "How would your recommendation change if Fintech had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "GTM",
    "correctFramework": "Market Audit → Beachhead ICP & Positioning → 4Ps → Pre-Launch / Launch / Post-Launch",
    "structureOptions": [
      {
        "label": "Define Goal & Beachhead ICP → Craft Positioning & 4Ps → Execute Pre-Launch, Launch, Post-Launch + KPIs",
        "correct": true,
        "feedback": "Textbook GTM! Tight beachhead focus + phased rollout wins every time."
      },
      {
        "label": "Spend 100% of budget on Super Bowl / IPL TV ads on Day 1",
        "correct": false,
        "feedback": "Mass ads before proving activation and channel fit burn cash with poor retention."
      },
      {
        "label": "Focus solely on cutting warehouse electricity costs",
        "correct": false,
        "feedback": "That is a Profitability cost exercise, not a Go-To-Market launch strategy."
      }
    ],
    "decisionQuiz": {
      "question": "Why should a GTM strategy always start with a tight Beachhead ICP instead of the whole market?",
      "options": [
        {
          "label": "Concentrates budget on high-pain early adopters to prove PMF and word-of-mouth before scaling",
          "correct": true,
          "feedback": "Spot on! Winning 1 niche deeply creates momentum and lowers CAC."
        },
        {
          "label": "Because larger markets are illegal to serve",
          "correct": false,
          "feedback": "It is about capital efficiency and PMF focus."
        },
        {
          "label": "To avoid measuring retention",
          "correct": false,
          "feedback": "Retention is easiest to measure and optimize inside a clean beachhead cohort."
        }
      ]
    }
  }
},
{
  "id": "ecell-gtm-fantasy-gaming",
  "title": "Fantasy Gaming Platform Growth & Trust GTM",
  "company": "Fantasy Sports",
  "source": "E-Cell IITG 2026-27",
  "track": "Product",
  "category": "GTM",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "Fantasy Sports",
    "GTM",
    "Product"
  ],
  "prompt": "Fantasy Gaming Platform A leading fantasy sports platform has achieved significant scale in India through cricket- based contests. The company wants to accelerate growth while maintaining profitability. The CEO wants you to develop a comprehensive go-to-market strategy covering market opportunities, customer acquisition, monetization, and competitive positioning over the next three years.",
  "clarifyingQuestions": [
    {
      "q": "Before diving in, can I clarify a few things? Are we looking to expand beyond cricket into other sports, or primarily deepen our position within cricket itself?",
      "a": "Good question. Assume the company wants to do both, deepen cricket dominance and diversify into new sports and formats.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Understood. And when you say \"maintaining profitability,\" should I treat that as a hard constraint, meaning we can't burn heavily on acquisition even for growth bets?",
      "a": "Yes, treat profitability as a guardrail, not just an afterthought.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Got it. One last question, are we assuming the regulatory environment around real- money gaming stays stable, or should I build in regulatory risk as a factor?",
      "a": "Good instinct, build that in as a risk to address later.",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "Market Audit → Beachhead ICP & Positioning → 4Ps → Pre-Launch / Launch / Post-Launch",
  "coreEquation": "Launch Success = Target ICP Reach × Activation Conversion × D30 Retention × Unit Margin",
  "strategyOverview": "Approach Fantasy Gaming Platform Growth & Trust GTM (Fantasy Sports) using a GTM structure: start by confirming the business objective and scope, decompose the problem cleanly along Market Audit → Beachhead ICP & Positioning → 4Ps → Pre-Launch / Launch / Post-Launch, and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Fantasy Gaming Platform Growth & Trust GTM — GTM Blueprint",
    "valueText": "3-Phase Rollout",
    "children": [
      {
        "label": "Phase 1: Pre-Launch (Beachhead ICP, Positioning, Supply/Waitlist)",
        "valueText": "Seed Trust",
        "highlight": true
      },
      {
        "label": "Phase 2: Launch (Channels, Intro Pricing, Activation Loops)",
        "valueText": "Drive Trial",
        "highlight": true
      },
      {
        "label": "Phase 3: Post-Launch (Retention, Referrals, CAC/LTV Audit)",
        "valueText": "Scale Safely"
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Candidate",
      "prompt": "Fantasy Gaming Platform A leading fantasy sports platform has achieved significant scale in India through cric",
      "detail": "Fantasy Gaming Platform A leading fantasy sports platform has achieved significant scale in India through cricket- based contests. The company wants to accelerate growth while maintaining profitability. The CEO wants you to develop a comprehensive go-to-market strategy covering market opportunities, customer acquisition, monetization, and competitive positioning over the next three years.\nBefore diving in, can I clarify a few things? Are we looking to expand beyond cricket into other sports, or primarily deepen our position within cricket itself?\nGood question. Assume the company wants to do both, deepen cricket "
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "Yes, treat profitability as a guardrail, not just an afterthought.",
      "detail": "Yes, treat profitability as a guardrail, not just an afterthought.\nGot it. One last question, are we assuming the regulatory environment around real- money gaming stays stable, or should I build in regulatory risk as a factor?\nGood instinct, build that in as a risk to address later.\nThat's helpful. I'd structure my answer into four parts: Market Opportunity, Customer Acquisition, Monetization, and Competitive Positioning, with a phased three-year roadmap tying it together."
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "Sounds good. Let's start with market opportunity.",
      "detail": "Sounds good. Let's start with market opportunity.\nI see three broad opportunity buckets. First, deepening cricket, expanding into domestic leagues, women's cricket, and international T20 leagues beyond IPL, since cricket already has proven willingness to pay. Second, diversifying into adjacent sports like football, kabaddi, and basketball, where engagement is growing but fantasy penetration is still low. Third, expanding into new formats within existing sports, such as shorter contests tied to live match moments, which increases session frequency without needing new users.\nWhy prioritize cricket-adjacent expansio"
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "That makes sense. How would you think about customer acquisition?",
      "detail": "That makes sense. How would you think about customer acquisition?\nI'd split this into two buckets, new user acquisition and reactivation of dormant users, since fantasy platforms typically see heavy churn after single-tournament spikes like the IPL.\nFor new user acquisition, I'd lean on referral-driven growth, since fantasy sports is inherently social, users already play in leagues with friends. We'd complement this with performance marketing during high-intent windows like match days, and influencer partnerships with cricketers and regional sports commentators to build credibility in tier 2 and tier 3 cities.\nFo"
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "Interesting. Why focus on tier 2 and tier 3 cities specifically?",
      "detail": "Interesting. Why focus on tier 2 and tier 3 cities specifically?\nBecause metro markets are largely saturated for cricket fantasy, the next wave of user growth and lifetime value sits in tier 2 and tier 3 cities where smartphone and UPI penetration have caught up, but fantasy sports awareness is still building Let's talk monetization. How would you approach that?\nI'd think about monetization in three layers. First, the core layer, entry fees and platform commission on contests, which already works well and should be optimized rather than overhauled. Second, a premium layer, subscription tiers offering advanced sta"
    }
  ],
  "recommendations": [
    "Prioritize the highest-impact P0 bottleneck identified in Fantasy Gaming Platform Growth & Trust GTM before secondary optimizations.",
    "Pilot the top intervention in a controlled cohort/region with clear North Star and guardrail tracking.",
    "Scale rollout only after verifying unit economics and zero adverse second-order effects."
  ],
  "metricsAndGuardrails": {
    "northStar": "Activated & Retained Beachhead Customers for Fantasy Gaming Platform Growth & Trust GTM",
    "leading": [
      "Waitlist-to-activation conversion %",
      "CAC vs Day-30 Retention"
    ],
    "guardrails": [
      "CAC Payback Period (months)",
      "Early churn / negative review rate"
    ]
  },
  "synthesisScript": "For Fantasy Sports’s Fantasy Gaming Platform Growth & Trust GTM case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Prioritize the highest-impact P0 bottleneck identified in Fantasy Gaming Platform Growth & Trust GTM before secondary optimizations. We will validate success via Activated & Retained Beachhead Customers for Fantasy Gaming Platform Growth & Trust GTM while guarding against CAC Payback Period (months).",
  "interviewerTrap": "Targeting 'everyone in the country' on Day 1 or listing generic social ads without defining ICP, positioning, pricing, and phased rollout!",
  "variations": [
    {
      "question": "How would your recommendation change if Fantasy Sports had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "GTM",
    "correctFramework": "Market Audit → Beachhead ICP & Positioning → 4Ps → Pre-Launch / Launch / Post-Launch",
    "structureOptions": [
      {
        "label": "Define Goal & Beachhead ICP → Craft Positioning & 4Ps → Execute Pre-Launch, Launch, Post-Launch + KPIs",
        "correct": true,
        "feedback": "Textbook GTM! Tight beachhead focus + phased rollout wins every time."
      },
      {
        "label": "Spend 100% of budget on Super Bowl / IPL TV ads on Day 1",
        "correct": false,
        "feedback": "Mass ads before proving activation and channel fit burn cash with poor retention."
      },
      {
        "label": "Focus solely on cutting warehouse electricity costs",
        "correct": false,
        "feedback": "That is a Profitability cost exercise, not a Go-To-Market launch strategy."
      }
    ],
    "decisionQuiz": {
      "question": "Why should a GTM strategy always start with a tight Beachhead ICP instead of the whole market?",
      "options": [
        {
          "label": "Concentrates budget on high-pain early adopters to prove PMF and word-of-mouth before scaling",
          "correct": true,
          "feedback": "Spot on! Winning 1 niche deeply creates momentum and lowers CAC."
        },
        {
          "label": "Because larger markets are illegal to serve",
          "correct": false,
          "feedback": "It is about capital efficiency and PMF focus."
        },
        {
          "label": "To avoid measuring retention",
          "correct": false,
          "feedback": "Retention is easiest to measure and optimize inside a clean beachhead cohort."
        }
      ]
    }
  }
},
{
  "id": "ecell-gtm-test-kit",
  "title": "Healthcare Diagnostic Test Kit New Market GTM",
  "company": "MedTech",
  "source": "E-Cell IITG 2026-27",
  "track": "Product",
  "category": "GTM",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "MedTech",
    "GTM",
    "Product"
  ],
  "prompt": "Healthcare Test Kit Manufacturer Your client manufactures diagnostic test kits and is evaluating the launch of a new product in an untapped market. Whether entering the market makes strategic and financial sense, and if yes, how should the product be launched?",
  "clarifyingQuestions": [
    {
      "q": "Before diving in, may I ask a few clarifying questions?",
      "a": "Sure, go ahead.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Is this a point-of-care/at-home test kit, or a lab-administered diagnostic? And are we targeting a specific geography, or evaluating a global launch?",
      "a": "Assume it's an at-home rapid test kit, and we're evaluating entry into a single emerging market to start.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Got it. And is the client's primary objective market share and long-term category leadership, or fast revenue recovery on R&D spend?",
      "a": "Primary objective is long-term category leadership.",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "Market Audit → Beachhead ICP & Positioning → 4Ps → Pre-Launch / Launch / Post-Launch",
  "coreEquation": "Launch Success = Target ICP Reach × Activation Conversion × D30 Retention × Unit Margin",
  "strategyOverview": "Approach Healthcare Diagnostic Test Kit New Market GTM (MedTech) using a GTM structure: start by confirming the business objective and scope, decompose the problem cleanly along Market Audit → Beachhead ICP & Positioning → 4Ps → Pre-Launch / Launch / Post-Launch, and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Healthcare Diagnostic Test Kit New Market GTM — GTM Blueprint",
    "valueText": "3-Phase Rollout",
    "children": [
      {
        "label": "Phase 1: Pre-Launch (Beachhead ICP, Positioning, Supply/Waitlist)",
        "valueText": "Seed Trust",
        "highlight": true
      },
      {
        "label": "Phase 2: Launch (Channels, Intro Pricing, Activation Loops)",
        "valueText": "Drive Trial",
        "highlight": true
      },
      {
        "label": "Phase 3: Post-Launch (Retention, Referrals, CAC/LTV Audit)",
        "valueText": "Scale Safely"
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Interviewer",
      "prompt": "Healthcare Test Kit Manufacturer Your client manufactures diagnostic test kits and is evaluating the launch of",
      "detail": "Healthcare Test Kit Manufacturer Your client manufactures diagnostic test kits and is evaluating the launch of a new product in an untapped market. Whether entering the market makes strategic and financial sense, and if yes, how should the product be launched?\nBefore diving in, may I ask a few clarifying questions?\nIs this a point-of-care/at-home test kit, or a lab-administered diagnostic? And are we targeting a specific geography, or evaluating a global launch?\nAssume it's an at-home rapid test kit, and we're evaluating entry into a single emerging market to start."
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "Got it. And is the client's primary objective market share and long-term category leadership, or fast revenue ",
      "detail": "Got it. And is the client's primary objective market share and long-term category leadership, or fast revenue recovery on R&D spend?\nPrimary objective is long-term category leadership.\nUnderstood. I'd like to structure my answer into three parts: market attractiveness, whether to enter, and if yes, the go-to-market plan covering customers, channels, and pricing.\nSounds good, start with market attractiveness."
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "I'd assess this along four lenses: market size and growth, competitive intensity, regulatory feasibility, and ",
      "detail": "I'd assess this along four lenses: market size and growth, competitive intensity, regulatory feasibility, and client capability fit.\nThat's a solid framework. Let's say the market shows a large testing gap, only 1-2 weak local competitors, a clear regulatory pathway of about 6 months, and the client has spare manufacturing capacity. Would you enter?\nYes, I'd recommend entering. The combination of unmet need, low competitive intensity, and a manageable regulatory path suggests both strategic upside, in the form of first-mover brand equity, and financial upside, since spare capacity means low incremental capex.\nI w"
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "Fair enough. So how would you structure the launch?",
      "detail": "Fair enough. So how would you structure the launch?\nI’d break this into Pre-launch, Launch, and Post-launch.\nPre-launch I’d focus on priority customer segments and regulatory & distribution readiness.\nThree segments to evaluate:"
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "Government/public health: Large-volume procurement for national screening programs Hospitals/diagnostic labs: ",
      "detail": "Government/public health: Large-volume procurement for national screening programs Hospitals/diagnostic labs: Reliable supply and fast turnaround Retail/D2C: Self-testing, highest margin but slowest to scale I’d prioritize government and hospitals first for volume and credibility, then use that traction to unlock retail and D2C.\nThat makes sense. How would you approach channels?\nFor government and hospitals, I'd go through direct tenders and distributor partnerships with established medical supply companies who already have last-mile relationships and cold-chain logistics.\nFor retail, I'd partner with leading pha"
    }
  ],
  "recommendations": [
    "Prioritize the highest-impact P0 bottleneck identified in Healthcare Diagnostic Test Kit New Market GTM before secondary optimizations.",
    "Pilot the top intervention in a controlled cohort/region with clear North Star and guardrail tracking.",
    "Scale rollout only after verifying unit economics and zero adverse second-order effects."
  ],
  "metricsAndGuardrails": {
    "northStar": "Activated & Retained Beachhead Customers for Healthcare Diagnostic Test Kit New Market GTM",
    "leading": [
      "Waitlist-to-activation conversion %",
      "CAC vs Day-30 Retention"
    ],
    "guardrails": [
      "CAC Payback Period (months)",
      "Early churn / negative review rate"
    ]
  },
  "synthesisScript": "For MedTech’s Healthcare Diagnostic Test Kit New Market GTM case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Prioritize the highest-impact P0 bottleneck identified in Healthcare Diagnostic Test Kit New Market GTM before secondary optimizations. We will validate success via Activated & Retained Beachhead Customers for Healthcare Diagnostic Test Kit New Market GTM while guarding against CAC Payback Period (months).",
  "interviewerTrap": "Targeting 'everyone in the country' on Day 1 or listing generic social ads without defining ICP, positioning, pricing, and phased rollout!",
  "variations": [
    {
      "question": "How would your recommendation change if MedTech had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "GTM",
    "correctFramework": "Market Audit → Beachhead ICP & Positioning → 4Ps → Pre-Launch / Launch / Post-Launch",
    "structureOptions": [
      {
        "label": "Define Goal & Beachhead ICP → Craft Positioning & 4Ps → Execute Pre-Launch, Launch, Post-Launch + KPIs",
        "correct": true,
        "feedback": "Textbook GTM! Tight beachhead focus + phased rollout wins every time."
      },
      {
        "label": "Spend 100% of budget on Super Bowl / IPL TV ads on Day 1",
        "correct": false,
        "feedback": "Mass ads before proving activation and channel fit burn cash with poor retention."
      },
      {
        "label": "Focus solely on cutting warehouse electricity costs",
        "correct": false,
        "feedback": "That is a Profitability cost exercise, not a Go-To-Market launch strategy."
      }
    ],
    "decisionQuiz": {
      "question": "Why should a GTM strategy always start with a tight Beachhead ICP instead of the whole market?",
      "options": [
        {
          "label": "Concentrates budget on high-pain early adopters to prove PMF and word-of-mouth before scaling",
          "correct": true,
          "feedback": "Spot on! Winning 1 niche deeply creates momentum and lowers CAC."
        },
        {
          "label": "Because larger markets are illegal to serve",
          "correct": false,
          "feedback": "It is about capital efficiency and PMF focus."
        },
        {
          "label": "To avoid measuring retention",
          "correct": false,
          "feedback": "Retention is easiest to measure and optimize inside a clean beachhead cohort."
        }
      ]
    }
  }
},
{
  "id": "ecell-improve-zomato-nocheat",
  "title": "No Cheat Days with Zomato (Health-Conscious Discovery)",
  "company": "Zomato",
  "source": "E-Cell IITG 2026-27",
  "track": "Product",
  "category": "Product Improvement",
  "difficulty": 2,
  "isStarter": true,
  "tags": [
    "Product Improvement",
    "Health & Fitness",
    "Retention",
    "Food Delivery"
  ],
  "prompt": "How would you improve Zomato’s food discovery experience for health-conscious users?",
  "clarifyingQuestions": [
    {
      "q": "Before I begin, should the focus be on educational features like calorie tracking and nutrition info, or more on discovery and recommendations?",
      "a": "The main goal is to help health-conscious users find and order food that fits their preferences.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Got it. Can I assume we’re targeting individual users rather than restaurants or fitness partners?",
      "a": "Yes, focus on users.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Why prioritize them?",
      "a": "Because their needs overlap with the others, so solving for them builds a base experience useful for all.",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "Persona Segmentation → Healthy-Eating Pain Points → Impact × Effort Fixes",
  "coreEquation": "Product Impact = Priority Persona Frequency × P0 Pain Severity × Adoption %",
  "strategyOverview": "Help fitness-conscious urban diners order guilt-free without leaving Zomato for home meals or rival meal-prep apps. Solve P0 trust/discovery gaps: verified macro-calorie tags, customizable oil/spice swaps, and curated high-protein 'Healthy Mode' filters.",
  "tree": {
    "label": "No Cheat Days with Zomato (Health-Conscious Discovery) — User & Product Tree",
    "valueText": "Persona → Pain → Fix",
    "children": [
      {
        "label": "1. Priority Persona Selection (Pick 1 Beachhead)",
        "valueText": "High Freq / Pain",
        "highlight": true
      },
      {
        "label": "2. End-to-End Journey & P0 Pain Points",
        "valueText": "Impact × Effort",
        "highlight": true
      },
      {
        "label": "3. MVP Solutions, Trade-offs & Guardrails",
        "valueText": "North Star"
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Interviewer",
      "prompt": "How would you improve Zomato’s food discovery experience for health-conscious users?",
      "detail": "How would you improve Zomato’s food discovery experience for health-conscious users?\nBefore I begin, should the focus be on educational features like calorie tracking and nutrition info, or more on discovery and recommendations?\nThe main goal is to help health-conscious users find and order food that fits their preferences.\nGot it. Can I assume we’re targeting individual users rather than restaurants or fitness partners?"
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "Yes, focus on users.",
      "detail": "Yes, focus on users.\nThen I’ll start by defining the user segments and their needs before suggesting product changes. Broadly, I’d classify health-conscious users into three groups:\nFirst, the fitness trackers, people who care about exact calories, macros, and portion sizes.\nSecond, the lifestyle healthy eaters who just want balanced, lighter meals with less oil and sugar."
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "And third, the diet-restricted users with specific medical or dietary needs, like diabetic-friendly or gluten-",
      "detail": "And third, the diet-restricted users with specific medical or dietary needs, like diabetic-friendly or gluten-free food.\nI’d begin with lifestyle eaters since they represent the widest and easiest-to-engage segment.\nWhy prioritize them?\nBecause their needs overlap with the others, so solving for them builds a base experience useful for all."
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "Alright. What product improvements would you make?",
      "detail": "Alright. What product improvements would you make?\nI’d start simple by adding smart filters and tags like Low Calorie, High Protein, Low Oil and Vegan to make healthy options easy to find. Each dish card could show quick nutrition highlights such as calories, protein, and allergens at a glance.\nMoreover, restaurants that share verified data can earn a Trusted Partner badge.\nWouldn’t all that data overwhelm casual users?"
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "Good point. The helper and tracking features would be off by default. Users see only simple dish labels unless",
      "detail": "Good point. The helper and tracking features would be off by default. Users see only simple dish labels unless they opt into more detail.\nFair. But what would you do specifically for the diet-restricted users?\nFor them, trust and clarity matter most. I’d introduce medically safe filters like Diabetic- Friendly, Gluten-Free, Low-Sodium, etc. which will be backed by restaurant-submitted data.\nUsers could also save default dietary profiles, so the app automatically hides dishes that don’t match their restriction."
    }
  ],
  "recommendations": [
    "Prioritize the highest-impact P0 bottleneck identified in No Cheat Days with Zomato (Health-Conscious Discovery) before secondary optimizations.",
    "Pilot the top intervention in a controlled cohort/region with clear North Star and guardrail tracking.",
    "Scale rollout only after verifying unit economics and zero adverse second-order effects."
  ],
  "metricsAndGuardrails": {
    "northStar": "Core Task Completion / Weekly Active Value Users for Zomato",
    "leading": [
      "Feature discovery & Day-1 adoption %",
      "7-day repeat usage rate"
    ],
    "guardrails": [
      "Core app latency / checkout conversion",
      "Support tickets & uninstall rate"
    ]
  },
  "synthesisScript": "For Zomato’s No Cheat Days with Zomato (Health-Conscious Discovery) case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Prioritize the highest-impact P0 bottleneck identified in No Cheat Days with Zomato (Health-Conscious Discovery) before secondary optimizations. We will validate success via Core Task Completion / Weekly Active Value Users for Zomato while guarding against Core app latency / checkout conversion.",
  "interviewerTrap": "Proposing Zomato build its own physical gyms or meal kitchens instead of fixing in-app nutritional transparency and restaurant macro customization.",
  "variations": [
    {
      "question": "How would your recommendation change if Zomato had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Product Improvement",
    "correctFramework": "CIRCLES (Goal → Priority Persona → Journey Pain Points → Prioritized MVP → Trade-offs & Metrics)",
    "structureOptions": [
      {
        "label": "Clarify Goal → Pick 1 Priority Persona → Map Pain Points → Rank P0 Fixes → Define North Star & Trade-offs",
        "correct": true,
        "feedback": "Crisp CIRCLES flow! Selecting one persona shows real PM discipline."
      },
      {
        "label": "Suggest adding AI chatbots, AR, crypto rewards, and dark mode immediately",
        "correct": false,
        "feedback": "Buzzword feature-dumping without user pain grounding fails PM interviews."
      },
      {
        "label": "Run a supply-side Value Chain raw-material audit",
        "correct": false,
        "feedback": "That belongs to manufacturing Profitability, not Product Design/UX."
      }
    ],
    "decisionQuiz": {
      "question": "After identifying 3 user personas in a Product Design/Improvement case, what is the strongest move?",
      "options": [
        {
          "label": "Pick ONE primary persona for v1 based on frequency/pain and explain why others wait for v2",
          "correct": true,
          "feedback": "Exactly! Solving deeply for one segment beats building a mediocre tool for everyone."
        },
        {
          "label": "Design separate apps for all 3 simultaneously",
          "correct": false,
          "feedback": "Fragments engineering focus and UX coherence."
        },
        {
          "label": "Skip personas and start pricing tiers",
          "correct": false,
          "feedback": "You must understand user needs before designing or pricing."
        }
      ]
    }
  }
},
{
  "id": "ecell-improve-netflix-hover",
  "title": "Netflix and Hover (Accidental Preview UX Fix)",
  "company": "Netflix",
  "source": "E-Cell IITG 2026-27",
  "track": "Product",
  "category": "Product Improvement",
  "difficulty": 1,
  "isStarter": false,
  "tags": [
    "Netflix",
    "Product Improvement",
    "Product"
  ],
  "prompt": "On Netflix, users often trigger accidental hovers that start previews or shift the UI because there’s limited resting space for the mouse pointer. How would you improve that experience?",
  "clarifyingQuestions": [
    {
      "q": "Interesting problem. Before jumping to ideas, can I clarify a few things?",
      "a": "Sure, go ahead.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "First, are we focusing on the web interface, or should this include TV and mobile too?",
      "a": "Let’s keep it limited to the web.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Great. And is the main goal to reduce accidental previews or to redesign the hover experience entirely?",
      "a": "Reducing unintentional activations while keeping the interface engaging.",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "CIRCLES (Goal → Priority Persona → Journey Pain Points → Prioritized MVP → Trade-offs & Metrics)",
  "coreEquation": "Product Impact = Priority Persona Frequency × P0 Pain Severity × Adoption %",
  "strategyOverview": "Approach Netflix and Hover (Accidental Preview UX Fix) (Netflix) using a Product Improvement structure: start by confirming the business objective and scope, decompose the problem cleanly along CIRCLES (Goal → Priority Persona → Journey Pain Points → Prioritized MVP → Trade-offs & Metrics), and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Netflix and Hover (Accidental Preview UX Fix) — User & Product Tree",
    "valueText": "Persona → Pain → Fix",
    "children": [
      {
        "label": "1. Priority Persona Selection (Pick 1 Beachhead)",
        "valueText": "High Freq / Pain",
        "highlight": true
      },
      {
        "label": "2. End-to-End Journey & P0 Pain Points",
        "valueText": "Impact × Effort",
        "highlight": true
      },
      {
        "label": "3. MVP Solutions, Trade-offs & Guardrails",
        "valueText": "North Star"
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Interviewer",
      "prompt": "On Netflix, users often trigger accidental hovers that start previews or shift the UI because there’s limited ",
      "detail": "On Netflix, users often trigger accidental hovers that start previews or shift the UI because there’s limited resting space for the mouse pointer. How would you improve that experience?\nInteresting problem. Before jumping to ideas, can I clarify a few things?\nFirst, are we focusing on the web interface, or should this include TV and mobile too?\nLet’s keep it limited to the web."
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "Great. And is the main goal to reduce accidental previews or to redesign the hover experience entirely?",
      "detail": "Great. And is the main goal to reduce accidental previews or to redesign the hover experience entirely?\nReducing unintentional activations while keeping the interface engaging.\nGot it. Then I’d start by designing a system that understands hover intent, so users trigger previews only when they actually mean to. I’d call this the “Hover Safe Zone” concept.\nInteresting term. What exactly does a Hover Safe Zone mean?"
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "It’s an invisible buffer area, about 10–15 pixels wide, between each content tile. When the cursor rests insid",
      "detail": "It’s an invisible buffer area, about 10–15 pixels wide, between each content tile. When the cursor rests inside this buffer, Netflix won’t trigger any hover action. Only when the pointer enters the active core area of a tile will the preview logic activate.\nThat way, users have a resting space to move the mouse around without triggering unwanted previews or layout shifts.\nThat makes sense. But once the cursor enters the active area, how do you know if the hover was intentional or accidental?\nI’d add a smart layer called Confirmation of Hover Intent:"
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "Once the cursor enters a tile’s active zone, the system won’t trigger a preview right away, instead it waits f",
      "detail": "Once the cursor enters a tile’s active zone, the system won’t trigger a preview right away, instead it waits for a few subtle cues.\nIf the cursor stays within the tile for around 300 milliseconds, that suggests genuine interest and activates the preview.\nBut if it moves more than about 5 pixels, or flicks quickly across multiple tiles, the system assumes it’s an accidental pass and cancels the hover.\nThis keeps browsing responsive but prevents unintentional previews."
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "Okay, so once the hover is confirmed, what happens next?",
      "detail": "Okay, so once the hover is confirmed, what happens next?\nI’d introduce a Two-Tier Preview System.\nThe first hover shows a light overlay having basic info like title, rating, and genre without changing the layout.\nIf the user keeps hovering or clicks, it smoothly expands into a full preview card with video autoplay and more details."
    }
  ],
  "recommendations": [
    "Prioritize the highest-impact P0 bottleneck identified in Netflix and Hover (Accidental Preview UX Fix) before secondary optimizations.",
    "Pilot the top intervention in a controlled cohort/region with clear North Star and guardrail tracking.",
    "Scale rollout only after verifying unit economics and zero adverse second-order effects."
  ],
  "metricsAndGuardrails": {
    "northStar": "Core Task Completion / Weekly Active Value Users for Netflix",
    "leading": [
      "Feature discovery & Day-1 adoption %",
      "7-day repeat usage rate"
    ],
    "guardrails": [
      "Core app latency / checkout conversion",
      "Support tickets & uninstall rate"
    ]
  },
  "synthesisScript": "For Netflix’s Netflix and Hover (Accidental Preview UX Fix) case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Prioritize the highest-impact P0 bottleneck identified in Netflix and Hover (Accidental Preview UX Fix) before secondary optimizations. We will validate success via Core Task Completion / Weekly Active Value Users for Netflix while guarding against Core app latency / checkout conversion.",
  "interviewerTrap": "Listing 8 shiny features for 'all users' without picking ONE priority persona, ranking pain points, or naming trade-offs!",
  "variations": [
    {
      "question": "How would your recommendation change if Netflix had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Product Improvement",
    "correctFramework": "CIRCLES (Goal → Priority Persona → Journey Pain Points → Prioritized MVP → Trade-offs & Metrics)",
    "structureOptions": [
      {
        "label": "Clarify Goal → Pick 1 Priority Persona → Map Pain Points → Rank P0 Fixes → Define North Star & Trade-offs",
        "correct": true,
        "feedback": "Crisp CIRCLES flow! Selecting one persona shows real PM discipline."
      },
      {
        "label": "Suggest adding AI chatbots, AR, crypto rewards, and dark mode immediately",
        "correct": false,
        "feedback": "Buzzword feature-dumping without user pain grounding fails PM interviews."
      },
      {
        "label": "Run a supply-side Value Chain raw-material audit",
        "correct": false,
        "feedback": "That belongs to manufacturing Profitability, not Product Design/UX."
      }
    ],
    "decisionQuiz": {
      "question": "After identifying 3 user personas in a Product Design/Improvement case, what is the strongest move?",
      "options": [
        {
          "label": "Pick ONE primary persona for v1 based on frequency/pain and explain why others wait for v2",
          "correct": true,
          "feedback": "Exactly! Solving deeply for one segment beats building a mediocre tool for everyone."
        },
        {
          "label": "Design separate apps for all 3 simultaneously",
          "correct": false,
          "feedback": "Fragments engineering focus and UX coherence."
        },
        {
          "label": "Skip personas and start pricing tiers",
          "correct": false,
          "feedback": "You must understand user needs before designing or pricing."
        }
      ]
    }
  }
},
{
  "id": "ecell-improve-discord-onboarding",
  "title": "Discord’s Newbie Survival Guide (Onboarding Fix)",
  "company": "Discord",
  "source": "E-Cell IITG 2026-27",
  "track": "Product",
  "category": "Product Improvement",
  "difficulty": 2,
  "isStarter": false,
  "tags": [
    "Discord",
    "Product Improvement",
    "Product"
  ],
  "prompt": "What changes would you make to improve the onboarding experience for new Discord users?",
  "clarifyingQuestions": [
    {
      "q": "Let me clarify the scope first. Are we focusing on onboarding for individuals creating an account, or for communities creating servers?",
      "a": "Just individuals, new users signing up.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Understood. And the primary objective is to maximize initial sign-ups, or to ensure that once someone signs up, they actually use Discord in a meaningful way?",
      "a": "The latter. The problem is early drop-off. Users sign up, explore for a few minutes, and leave.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "And if a user doesn’t want to answer?",
      "a": "Then they should still land somewhere purposeful, like a lightweight “Starter Hub” owned by Discord. It’s a controlled environment where new users see sample conversations, can try sending a message, or even hop into a demo voice room witho",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "CIRCLES (Goal → Priority Persona → Journey Pain Points → Prioritized MVP → Trade-offs & Metrics)",
  "coreEquation": "Product Impact = Priority Persona Frequency × P0 Pain Severity × Adoption %",
  "strategyOverview": "Approach Discord’s Newbie Survival Guide (Onboarding Fix) (Discord) using a Product Improvement structure: start by confirming the business objective and scope, decompose the problem cleanly along CIRCLES (Goal → Priority Persona → Journey Pain Points → Prioritized MVP → Trade-offs & Metrics), and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Discord’s Newbie Survival Guide (Onboarding Fix) — User & Product Tree",
    "valueText": "Persona → Pain → Fix",
    "children": [
      {
        "label": "1. Priority Persona Selection (Pick 1 Beachhead)",
        "valueText": "High Freq / Pain",
        "highlight": true
      },
      {
        "label": "2. End-to-End Journey & P0 Pain Points",
        "valueText": "Impact × Effort",
        "highlight": true
      },
      {
        "label": "3. MVP Solutions, Trade-offs & Guardrails",
        "valueText": "North Star"
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Interviewer",
      "prompt": "What changes would you make to improve the onboarding experience for new Discord users?",
      "detail": "What changes would you make to improve the onboarding experience for new Discord users?\nLet me clarify the scope first. Are we focusing on onboarding for individuals creating an account, or for communities creating servers?\nJust individuals, new users signing up.\nUnderstood. And the primary objective is to maximize initial sign-ups, or to ensure that once someone signs up, they actually use Discord in a meaningful way?"
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "The latter. The problem is early drop-off. Users sign up, explore for a few minutes, and leave.",
      "detail": "The latter. The problem is early drop-off. Users sign up, explore for a few minutes, and leave.\nOkay, so the challenge is activation, how quickly a user experiences Discord’s value.\nRight now, a blank slate makes it easy to churn. I’ll think about the journey in three phases: entry, first interaction, and first week.\nAfter sign-up, Discord could frame its value more clearly. Instead of just dropping me on a blank dashboard, it could ask what I came for whether it be chatting with friends, exploring interests, or collaborating on projects. Each choice would shape what I see next: if I select friends, Discord guide"
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "These options would appear only the first time a user opens the app, helping tailor the experience right from ",
      "detail": "These options would appear only the first time a user opens the app, helping tailor the experience right from the start without becoming repetitive later.\nAnd if a user doesn’t want to answer?\nThen they should still land somewhere purposeful, like a lightweight “Starter Hub” owned by Discord. It’s a controlled environment where new users see sample conversations, can try sending a message, or even hop into a demo voice room without social risk.\nInteresting. How do you handle the overwhelm of features?"
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "Rather than tooltips everywhere, Discord could introduce features gradually. The first time I open a server, I",
      "detail": "Rather than tooltips everywhere, Discord could introduce features gradually. The first time I open a server, I’m only shown channels relevant to newcomers, with an option to expand. Same with features, voice and video don’t appear until I’ve gotten comfortable with text. It’s progressive disclosure, not a flood of icons.\nThat could slow people down though.\nIt could, but the trade-off is depth over breadth. The key isn’t how many features someone sees in Day 1, it’s whether they find a reason to return on Day 2. Once they’re anchored in a community, Discord can surface advanced features naturally, say, after my fi"
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "Activation rate, did they join or create a conversation within 24 hours 7-day retention, are they coming back ",
      "detail": "Activation rate, did they join or create a conversation within 24 hours 7-day retention, are they coming back Community embedding: are they staying in their first server or hopping to new ones.\nIf those numbers climb, onboarding is working.\nIf you had to pick just one change to prioritize?\nThe Starter Hub. Interest-based recommendations are valuable, but a safe, controlled environment lowers the psychological barrier to action. Once someone experiences that sending a message here feels easy, they’re far more likely to venture into real communities."
    }
  ],
  "recommendations": [
    "Prioritize the highest-impact P0 bottleneck identified in Discord’s Newbie Survival Guide (Onboarding Fix) before secondary optimizations.",
    "Pilot the top intervention in a controlled cohort/region with clear North Star and guardrail tracking.",
    "Scale rollout only after verifying unit economics and zero adverse second-order effects."
  ],
  "metricsAndGuardrails": {
    "northStar": "Core Task Completion / Weekly Active Value Users for Discord",
    "leading": [
      "Feature discovery & Day-1 adoption %",
      "7-day repeat usage rate"
    ],
    "guardrails": [
      "Core app latency / checkout conversion",
      "Support tickets & uninstall rate"
    ]
  },
  "synthesisScript": "For Discord’s Discord’s Newbie Survival Guide (Onboarding Fix) case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Prioritize the highest-impact P0 bottleneck identified in Discord’s Newbie Survival Guide (Onboarding Fix) before secondary optimizations. We will validate success via Core Task Completion / Weekly Active Value Users for Discord while guarding against Core app latency / checkout conversion.",
  "interviewerTrap": "Listing 8 shiny features for 'all users' without picking ONE priority persona, ranking pain points, or naming trade-offs!",
  "variations": [
    {
      "question": "How would your recommendation change if Discord had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Product Improvement",
    "correctFramework": "CIRCLES (Goal → Priority Persona → Journey Pain Points → Prioritized MVP → Trade-offs & Metrics)",
    "structureOptions": [
      {
        "label": "Clarify Goal → Pick 1 Priority Persona → Map Pain Points → Rank P0 Fixes → Define North Star & Trade-offs",
        "correct": true,
        "feedback": "Crisp CIRCLES flow! Selecting one persona shows real PM discipline."
      },
      {
        "label": "Suggest adding AI chatbots, AR, crypto rewards, and dark mode immediately",
        "correct": false,
        "feedback": "Buzzword feature-dumping without user pain grounding fails PM interviews."
      },
      {
        "label": "Run a supply-side Value Chain raw-material audit",
        "correct": false,
        "feedback": "That belongs to manufacturing Profitability, not Product Design/UX."
      }
    ],
    "decisionQuiz": {
      "question": "After identifying 3 user personas in a Product Design/Improvement case, what is the strongest move?",
      "options": [
        {
          "label": "Pick ONE primary persona for v1 based on frequency/pain and explain why others wait for v2",
          "correct": true,
          "feedback": "Exactly! Solving deeply for one segment beats building a mediocre tool for everyone."
        },
        {
          "label": "Design separate apps for all 3 simultaneously",
          "correct": false,
          "feedback": "Fragments engineering focus and UX coherence."
        },
        {
          "label": "Skip personas and start pricing tiers",
          "correct": false,
          "feedback": "You must understand user needs before designing or pricing."
        }
      ]
    }
  }
},
{
  "id": "ecell-improve-retail-digital",
  "title": "Offline Retail Chain Digital Transformation",
  "company": "Omnichannel Retail",
  "source": "E-Cell IITG 2026-27",
  "track": "Product",
  "category": "Product Improvement",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "Omnichannel Retail",
    "Product Improvement",
    "Product"
  ],
  "prompt": "Retail Chain Digital Transformation Your client is a large offline retail chain with declining customer satisfaction and increasing competition from digital-first retailers. The company already has physical stores and a basic website. As a Product Manager, how would you improve the existing customer experience and make the business more competitive?",
  "clarifyingQuestions": [
    {
      "q": "Before I jump in, I’d like to understand the current product. Are we improving the in- store experience, the website, or the overall journey across both?",
      "a": "Both, but you can prioritize wherever the opportunity is bigger.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Got it. Can I assume it’s a large chain with 100+ stores and an existing website, but no meaningful online sales channel?",
      "a": "Yes, that’s fair.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "What are the biggest customer pain points?",
      "a": "The biggest issue is uncertainty. Customers often don’t know whether an item is available before visiting a store. Once there, checkout can be slow, especially during peak hours. There’s also no smooth connection between the website and phy",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "CIRCLES (Goal → Priority Persona → Journey Pain Points → Prioritized MVP → Trade-offs & Metrics)",
  "coreEquation": "Product Impact = Priority Persona Frequency × P0 Pain Severity × Adoption %",
  "strategyOverview": "Approach Offline Retail Chain Digital Transformation (Omnichannel Retail) using a Product Improvement structure: start by confirming the business objective and scope, decompose the problem cleanly along CIRCLES (Goal → Priority Persona → Journey Pain Points → Prioritized MVP → Trade-offs & Metrics), and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Offline Retail Chain Digital Transformation — User & Product Tree",
    "valueText": "Persona → Pain → Fix",
    "children": [
      {
        "label": "1. Priority Persona Selection (Pick 1 Beachhead)",
        "valueText": "High Freq / Pain",
        "highlight": true
      },
      {
        "label": "2. End-to-End Journey & P0 Pain Points",
        "valueText": "Impact × Effort",
        "highlight": true
      },
      {
        "label": "3. MVP Solutions, Trade-offs & Guardrails",
        "valueText": "North Star"
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Interviewer",
      "prompt": "Retail Chain Digital Transformation Your client is a large offline retail chain with declining customer satisf",
      "detail": "Retail Chain Digital Transformation Your client is a large offline retail chain with declining customer satisfaction and increasing competition from digital-first retailers. The company already has physical stores and a basic website. As a Product Manager, how would you improve the existing customer experience and make the business more competitive?\nBefore I jump in, I’d like to understand the current product. Are we improving the in- store experience, the website, or the overall journey across both?\nBoth, but you can prioritize wherever the opportunity is bigger.\nGot it. Can I assume it’s a large chain with 100+"
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "Then I’d first understand where the current experience breaks. I’d look at three areas: finding products, comp",
      "detail": "Then I’d first understand where the current experience breaks. I’d look at three areas: finding products, completing purchases quickly, and moving between online and offline channels.\nWhat are the biggest customer pain points?\nThe biggest issue is uncertainty. Customers often don’t know whether an item is available before visiting a store. Once there, checkout can be slow, especially during peak hours. There’s also no smooth connection between the website and physical stores, so customers have to treat them as completely separate experiences.\nWhich problem would you prioritize?"
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "I’d start with product availability and checkout speed. They directly affect whether customers complete a purc",
      "detail": "I’d start with product availability and checkout speed. They directly affect whether customers complete a purchase. Once that foundation is working, I’d focus on connecting the online and offline experience.\nWhat improvements would you propose?\nI’d first introduce real-time store inventory on the website, so customers can check availability before visiting. Then I’d add Buy Online, Pick Up In Store, allowing customers to reserve products and collect them quickly.\nInside stores, I’d explore self-checkout or mobile checkout at high-footfall locations to reduce waiting time."
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "Wouldn’t this make the experience difficult for customers who prefer traditional shopping?",
      "detail": "Wouldn’t this make the experience difficult for customers who prefer traditional shopping?\nNot necessarily. I’d make digital tools optional rather than replacing the existing experience. Customers who prefer traditional shopping can continue normally, while staff-assisted kiosks or help desks can support customers who want the digital option.\nHow would you decide what to implement first?\nI’d prioritize based on customer impact and implementation effort. Inventory visibility would come first because it improves the journey with relatively lower operational complexity. Next would be pickup and faster checkout. More"
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "What challenges do you foresee?",
      "detail": "What challenges do you foresee?\nThe biggest challenge is inventory accuracy. If the website says something is available and the store doesn’t actually have it, trust will fall quickly.\nThere’s also an adoption challenge. Customers and store staff may be comfortable with the existing process, so I’d pilot the new experience in a few high-traffic stores before rolling it out chain-wide.\nHow would you measure success?"
    }
  ],
  "recommendations": [
    "Prioritize the highest-impact P0 bottleneck identified in Offline Retail Chain Digital Transformation before secondary optimizations.",
    "Pilot the top intervention in a controlled cohort/region with clear North Star and guardrail tracking.",
    "Scale rollout only after verifying unit economics and zero adverse second-order effects."
  ],
  "metricsAndGuardrails": {
    "northStar": "Core Task Completion / Weekly Active Value Users for Omnichannel Retail",
    "leading": [
      "Feature discovery & Day-1 adoption %",
      "7-day repeat usage rate"
    ],
    "guardrails": [
      "Core app latency / checkout conversion",
      "Support tickets & uninstall rate"
    ]
  },
  "synthesisScript": "For Omnichannel Retail’s Offline Retail Chain Digital Transformation case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Prioritize the highest-impact P0 bottleneck identified in Offline Retail Chain Digital Transformation before secondary optimizations. We will validate success via Core Task Completion / Weekly Active Value Users for Omnichannel Retail while guarding against Core app latency / checkout conversion.",
  "interviewerTrap": "Listing 8 shiny features for 'all users' without picking ONE priority persona, ranking pain points, or naming trade-offs!",
  "variations": [
    {
      "question": "How would your recommendation change if Omnichannel Retail had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Product Improvement",
    "correctFramework": "CIRCLES (Goal → Priority Persona → Journey Pain Points → Prioritized MVP → Trade-offs & Metrics)",
    "structureOptions": [
      {
        "label": "Clarify Goal → Pick 1 Priority Persona → Map Pain Points → Rank P0 Fixes → Define North Star & Trade-offs",
        "correct": true,
        "feedback": "Crisp CIRCLES flow! Selecting one persona shows real PM discipline."
      },
      {
        "label": "Suggest adding AI chatbots, AR, crypto rewards, and dark mode immediately",
        "correct": false,
        "feedback": "Buzzword feature-dumping without user pain grounding fails PM interviews."
      },
      {
        "label": "Run a supply-side Value Chain raw-material audit",
        "correct": false,
        "feedback": "That belongs to manufacturing Profitability, not Product Design/UX."
      }
    ],
    "decisionQuiz": {
      "question": "After identifying 3 user personas in a Product Design/Improvement case, what is the strongest move?",
      "options": [
        {
          "label": "Pick ONE primary persona for v1 based on frequency/pain and explain why others wait for v2",
          "correct": true,
          "feedback": "Exactly! Solving deeply for one segment beats building a mediocre tool for everyone."
        },
        {
          "label": "Design separate apps for all 3 simultaneously",
          "correct": false,
          "feedback": "Fragments engineering focus and UX coherence."
        },
        {
          "label": "Skip personas and start pricing tiers",
          "correct": false,
          "feedback": "You must understand user needs before designing or pricing."
        }
      ]
    }
  }
},
{
  "id": "ecell-improve-website-traffic",
  "title": "Declining Website Traffic on Digital Media Platform",
  "company": "Digital Media",
  "source": "E-Cell IITG 2026-27",
  "track": "Product",
  "category": "RCA",
  "difficulty": 2,
  "isStarter": false,
  "tags": [
    "Digital Media",
    "RCA",
    "Product"
  ],
  "prompt": "Declining Website Traffic Your client operates a digital media platform. Over the past six months, website traffic has declined significantly, despite no major changes in marketing spend. Why has traffic fallen, which metrics should be analyzed, and what can restore it?",
  "clarifyingQuestions": [
    {
      "q": "Sure. Just to clarify, are we talking about total sessions? And is the drop broad-based or concentrated in one channel like organic, social, or direct?",
      "a": "Assume it is total sessions, and the decline is broad-based across the main markets.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Fair. Where would you start internally?",
      "a": "I would map the traffic funnel first.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Acquisition: where are users coming from?",
      "a": "Engagement: once they land, are they staying?",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "Data Sanity → 5-Way Segmentation → Funnel Step Isolation → Internal vs External Causes",
  "coreEquation": "Metric Drop = Data/Tracking Check + Internal (Tech/UX/Ops/Policy) + External (Rivals/Season/Macro)",
  "strategyOverview": "Approach Declining Website Traffic on Digital Media Platform (Digital Media) using a RCA structure: start by confirming the business objective and scope, decompose the problem cleanly along Data Sanity → 5-Way Segmentation → Funnel Step Isolation → Internal vs External Causes, and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Declining Website Traffic on Digital Media Platform — RCA Tree",
    "valueText": "MECE Diagnosis",
    "children": [
      {
        "label": "1. Data & Metric Sanity",
        "valueText": "Sudden vs Gradual · Geo/OS Cut"
      },
      {
        "label": "2. Internal Drivers (Product, Tech, Ops, Pricing)",
        "valueText": "Funnel Drop Isolation",
        "highlight": true
      },
      {
        "label": "3. External Drivers (Competitors, Weather, Macro)",
        "valueText": "Market Context"
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Interviewer",
      "prompt": "Declining Website Traffic Your client operates a digital media platform. Over the past six months, website tra",
      "detail": "Declining Website Traffic Your client operates a digital media platform. Over the past six months, website traffic has declined significantly, despite no major changes in marketing spend. Why has traffic fallen, which metrics should be analyzed, and what can restore it?\nSure. Just to clarify, are we talking about total sessions? And is the drop broad-based or concentrated in one channel like organic, social, or direct?\nAssume it is total sessions, and the decline is broad-based across the main markets.\nGot it. I would break this into two buckets: external factors and internal factors."
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "First, I would check whether competitors have changed anything meaningful. Then I would look at internal issue",
      "detail": "First, I would check whether competitors have changed anything meaningful. Then I would look at internal issues like content, SEO, product changes, and distribution.\nFair. Where would you start internally?\nI would map the traffic funnel first.\nAcquisition: where are users coming from?"
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "Engagement: once they land, are they staying?",
      "detail": "Engagement: once they land, are they staying?\nRetention: are they coming back?\nThen I would compare the last six months against the earlier period and look at:\nsessions unique visitors traffic by channel bounce rate pages per session average session duration return visits Why those metrics?"
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "Because they tell me whether the problem is discovery, content quality, or repeat usage.",
      "detail": "Because they tell me whether the problem is discovery, content quality, or repeat usage.\nIf organic traffic is down, it may be an SEO problem. If bounce rate is up, the landing experience may be weak. If repeat visits are down, then users are not finding enough value to come back.\nOkay. What external factors would you check?\ncompetitor content or product launches search ranking shifts seasonal changes in demand shifts in user behavior or platform preferences If none of those changed much, I would focus more on internal causes."
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "Let us assume competitors did not do anything unusual. What would you look at next?",
      "detail": "Let us assume competitors did not do anything unusual. What would you look at next?\nThen I would focus on three internal areas.\nContent: Are we publishing less, or is the content less relevant?\nSEO: Did rankings, metadata, internal links, or crawlability change?"
    }
  ],
  "recommendations": [
    "Prioritize the highest-impact P0 bottleneck identified in Declining Website Traffic on Digital Media Platform before secondary optimizations.",
    "Pilot the top intervention in a controlled cohort/region with clear North Star and guardrail tracking.",
    "Scale rollout only after verifying unit economics and zero adverse second-order effects."
  ],
  "metricsAndGuardrails": {
    "northStar": "Recovered Core Funnel Conversion / Retention Rate at Digital Media",
    "leading": [
      "Step-level funnel conversion %",
      "OS/City segmented error & latency rate"
    ],
    "guardrails": [
      "Contribution margin / refund abuse rate",
      "Customer support ticket volume"
    ]
  },
  "synthesisScript": "For Digital Media’s Declining Website Traffic on Digital Media Platform case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Prioritize the highest-impact P0 bottleneck identified in Declining Website Traffic on Digital Media Platform before secondary optimizations. We will validate success via Recovered Core Funnel Conversion / Retention Rate at Digital Media while guarding against Contribution margin / refund abuse rate.",
  "interviewerTrap": "Jumping straight into discounts or UI redesigns before verifying data sanity, geo/OS segmentation, and exact funnel drop-off!",
  "variations": [
    {
      "question": "How would your recommendation change if Digital Media had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "RCA",
    "correctFramework": "Data Sanity → 5-Way Segmentation → Funnel Step Isolation → Internal vs External Causes",
    "structureOptions": [
      {
        "label": "Check Data Sanity → Segment (Geo/Platform/Cohort) → Isolate Funnel Step → Separate Internal vs External Causes",
        "correct": true,
        "feedback": "Exact RCA gold standard! Always narrow down WHERE it broke before asking WHY."
      },
      {
        "label": "Launch a 30% discount campaign immediately to recover lost volume",
        "correct": false,
        "feedback": "Discounts mask technical/ops bugs and destroy unit economics without fixing root cause."
      },
      {
        "label": "Redesign the entire app homepage and brand logo",
        "correct": false,
        "feedback": "Never jump to full redesigns before isolating which exact step failed."
      }
    ],
    "decisionQuiz": {
      "question": "Before diagnosing 'Declining Website Traffic on Digital Media Platform', what data sanity check prevents chasing false alarms?",
      "options": [
        {
          "label": "Verify sudden vs gradual timing, isolated geo/OS cuts, and whether tracking/logging definitions changed",
          "correct": true,
          "feedback": "Yes! Rules out logging bugs and pinpoints the affected slice."
        },
        {
          "label": "Ask for the CEO’s favorite color",
          "correct": false,
          "feedback": "Irrelevant to root-cause diagnosis."
        },
        {
          "label": "Compare against 10-year-old competitor stock prices",
          "correct": false,
          "feedback": "Too slow and disconnected from immediate funnel drops."
        }
      ]
    }
  }
},
{
  "id": "ecell-pricing-youtube-premium",
  "title": "Pricing YouTube Premium Across Markets",
  "company": "YouTube",
  "source": "E-Cell IITG 2026-27",
  "track": "Product",
  "category": "Pricing",
  "difficulty": 2,
  "isStarter": true,
  "tags": [
    "Pricing",
    "Subscriptions",
    "PPP",
    "India OTT"
  ],
  "prompt": "Pricing YouTube Premium Assume you are a Product Manager at YouTube. The leadership team is evaluating the pricing of YouTube Premium across different markets. How would you determine the right pricing strategy? Walk me through your approach.",
  "clarifyingQuestions": [
    {
      "q": "Are we optimizing for subscriber growth, revenue, or both? And when you say different markets, should I assume we are comparing countries with very different purchasing power and competitive intensity, like India, the US",
      "a": "Yes. The goal is to grow both subscribers and revenue. And yes, think across markets with different purchasing power and competitive conditions.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Why start with the customer? Why not just look at competitors first?",
      "a": "Because competitor prices only make sense after I know what job Premium is doing for the user.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Fair. So how would you segment the market?",
      "a": "I would segment by a mix of willingness to pay and use case. Broadly, I see four useful segments.",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "3Cs of Pricing (Cost Floor, Competitor Anchor, WTP Ceiling) + Tiered Packaging",
  "coreEquation": "Premium Net Gain = (Sub ARPU − Foregone Ad ARPU − CDN/Creator Share) × Paid Conversion",
  "strategyOverview": "Account for the unique YouTube cannibalization twist: a free heavy user already generates ad revenue! Price YouTube Premium using India PPP benchmarks, student/family tiers, and mobile-only / annual plans so subscription margin exceeds lost ad ARPU.",
  "tree": {
    "label": "Pricing YouTube Premium Across Markets — 3Cs Pricing Tree",
    "valueText": "Floor · Anchor · Ceiling",
    "children": [
      {
        "label": "1. Cost-Plus Floor (COGS / Marginal Serve Cost + Margin)",
        "valueText": "Minimum"
      },
      {
        "label": "2. Competitor & Substitute Benchmarking",
        "valueText": "Market Anchor"
      },
      {
        "label": "3. Value-Based WTP & Tiered Packaging / Elasticity",
        "valueText": "Profit Maximizer",
        "highlight": true
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Interviewer",
      "prompt": "Pricing YouTube Premium Assume you are a Product Manager at YouTube. The leadership team is evaluating the pri",
      "detail": "Pricing YouTube Premium Assume you are a Product Manager at YouTube. The leadership team is evaluating the pricing of YouTube Premium across different markets. How would you determine the right pricing strategy? Walk me through your approach.\nSure. Before I get into pricing, I want to clarify a couple of things.\nAre we optimizing for subscriber growth, revenue, or both? And when you say different markets, should I assume we are comparing countries with very different purchasing power and competitive intensity, like India, the US, and Southeast Asia?\nYes. The goal is to grow both subscribers and revenue. And yes, "
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "Got it. Then I would not use one single global price. I would think of pricing as a market- by-market decision",
      "detail": "Got it. Then I would not use one single global price. I would think of pricing as a market- by-market decision based on three things.\nThe business objective in that market The customer segment and what value Premium delivers The competitive and local purchasing context If I had to structure it simply, I would first understand who we are pricing for, then quantify the value of Premium, then compare that to willingness to pay and alternatives, and finally decide the pricing model and packaging.\nWhy start with the customer? Why not just look at competitors first?\nBecause competitor prices only make sense after I kno"
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "YouTube Premium is not just ad removal. It can also mean:",
      "detail": "YouTube Premium is not just ad removal. It can also mean:\nuninterrupted video consumption background play and offline downloads YouTube Music access in some markets a smoother multi-device experience The value is different for a student in India, a family in the US, and a heavy video consumer in a price-sensitive market. So if I copy competitor pricing without understanding the segment, I might underprice in some markets and overprice in others.\nFair. So how would you segment the market?\nI would segment by a mix of willingness to pay and use case. Broadly, I see four useful segments."
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "Light users who mostly watch occasional videos and do not mind ads much Heavy video consumers who feel the ad-",
      "detail": "Light users who mostly watch occasional videos and do not mind ads much Heavy video consumers who feel the ad-free experience very strongly Music-first users who may value the bundled music benefit Family or shared users who care about multiple seats and convenience Then I would overlay geography. A user in a high-income market with strong streaming competition will have a different ceiling than a user in a more price-sensitive market.\nGood. Now how do you decide the actual price?\nI’d use a value-based anchor, then adjust against competitors.\nFirst, quantify what Premium saves users:"
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "Time: no ads Friction: background play & offline access Added value: included music service where relevant The",
      "detail": "Time: no ads Friction: background play & offline access Added value: included music service where relevant Then compare against alternatives:\nFree YouTube with ads Ad-free video apps Separate music subscriptions Competitor bundles The price should capture value without leaving significant willingness-to-pay untapped.\nInteresting. But this is a competitive market. Would you still lead with value?\nYes, but I’d validate it against market benchmarks, especially in price-sensitive markets."
    }
  ],
  "recommendations": [
    "Prioritize the highest-impact P0 bottleneck identified in Pricing YouTube Premium Across Markets before secondary optimizations.",
    "Pilot the top intervention in a controlled cohort/region with clear North Star and guardrail tracking.",
    "Scale rollout only after verifying unit economics and zero adverse second-order effects."
  ],
  "metricsAndGuardrails": {
    "northStar": "Net Contribution Margin & Paid ARPU Growth (YouTube)",
    "leading": [
      "Pricing page → checkout conversion %",
      "Tier upgrade / annual plan share"
    ],
    "guardrails": [
      "Churn / price-complaint rate",
      "Competitive win/loss rate"
    ]
  },
  "synthesisScript": "For YouTube’s Pricing YouTube Premium Across Markets case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Prioritize the highest-impact P0 bottleneck identified in Pricing YouTube Premium Across Markets before secondary optimizations. We will validate success via Net Contribution Margin & Paid ARPU Growth (YouTube) while guarding against Churn / price-complaint rate.",
  "interviewerTrap": "Forgetting that converting an ad-supported user to Premium cannibalizes their existing ad revenue!",
  "variations": [
    {
      "question": "How would your recommendation change if YouTube had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Pricing",
    "correctFramework": "Business Model Check → 3Cs of Pricing (Cost Floor | Competitor Anchor | Value WTP) → Tiering & Test",
    "structureOptions": [
      {
        "label": "Confirm Revenue Model & Goal → Assess Cost Floor, Competitor Anchor & Value WTP → Design Tiers & Test Plan",
        "correct": true,
        "feedback": "Exact 3Cs consulting & PM pricing approach!"
      },
      {
        "label": "Pick a random round number ending in 99 without checking costs or substitutes",
        "correct": false,
        "feedback": "Psychological pricing only tunes the final digit after anchoring Cost, Rivals, and Value."
      },
      {
        "label": "Give the product away free forever with zero monetization path",
        "correct": false,
        "feedback": "Fails the pricing objective unless paired with a clear ad/cross-sell engine."
      }
    ],
    "decisionQuiz": {
      "question": "Which pricing lens generally captures the highest margin ceiling when a product delivers clear unique ROI?",
      "options": [
        {
          "label": "Value-Based Pricing anchored to customer willingness-to-pay",
          "correct": true,
          "feedback": "Yes! Cost-plus only sets the floor; value-based captures differentiated ROI."
        },
        {
          "label": "Always undercutting the cheapest competitor by 50%",
          "correct": false,
          "feedback": "Triggers margin-destroying price wars."
        },
        {
          "label": "Cost-plus 5% regardless of brand value",
          "correct": false,
          "feedback": "Leaves massive consumer surplus on the table."
        }
      ]
    }
  }
},
{
  "id": "ecell-pricing-swiggy-one",
  "title": "Revisiting Swiggy One Membership Pricing",
  "company": "Swiggy",
  "source": "E-Cell IITG 2026-27",
  "track": "Product",
  "category": "Pricing",
  "difficulty": 2,
  "isStarter": true,
  "tags": [
    "Pricing",
    "Bundling",
    "Loyalty",
    "Food & Q-Comm"
  ],
  "prompt": "Pricing Swiggy One Imagine you are a Product Manager at Swiggy. Swiggy One has become an important part of the company's customer retention strategy. If you were tasked with revisiting its pricing, how would you approach the problem? Walk me through your framework.",
  "clarifyingQuestions": [
    {
      "q": "Are we trying to optimize mainly for retention, membership revenue, or total order frequency? And when you say revisit pricing, should I think only about the headline price, or also the packaging and benefits?",
      "a": "Good question. Assume the goal is to improve retention and overall profitability. You can think about both pricing and packaging.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Why start with segmentation? Why not just benchmark competitors first?",
      "a": "Because competitor prices only make sense after I know what problem Swiggy One is solving for the user.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Fair. So how would you segment the users?",
      "a": "I would keep it simple and split them into three broad groups.",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "Bundle Economics (Incremental Order Uplift − Free Delivery Cost) + Tiered Lock-In",
  "coreEquation": "Membership ROI = Subscription Fee + (Incremental Orders × Margin) − Subsidized Delivery Cost",
  "strategyOverview": "Price Swiggy One around average monthly delivery fees (~₹35–45/order × break-even 3–4 orders/month) to drive cross-vertical lock-in across Food + Instamart + Dineout while setting minimum order thresholds (₹199) so heavy abusers don’t destroy margin.",
  "tree": {
    "label": "Revisiting Swiggy One Membership Pricing — 3Cs Pricing Tree",
    "valueText": "Floor · Anchor · Ceiling",
    "children": [
      {
        "label": "1. Cost-Plus Floor (COGS / Marginal Serve Cost + Margin)",
        "valueText": "Minimum"
      },
      {
        "label": "2. Competitor & Substitute Benchmarking",
        "valueText": "Market Anchor"
      },
      {
        "label": "3. Value-Based WTP & Tiered Packaging / Elasticity",
        "valueText": "Profit Maximizer",
        "highlight": true
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Interviewer",
      "prompt": "Pricing Swiggy One Imagine you are a Product Manager at Swiggy. Swiggy One has become an important part of the",
      "detail": "Pricing Swiggy One Imagine you are a Product Manager at Swiggy. Swiggy One has become an important part of the company's customer retention strategy. If you were tasked with revisiting its pricing, how would you approach the problem? Walk me through your framework.\nSure. Before I jump in, I want to clarify a couple of things.\nAre we trying to optimize mainly for retention, membership revenue, or total order frequency? And when you say revisit pricing, should I think only about the headline price, or also the packaging and benefits?\nGood question. Assume the goal is to improve retention and overall profitability. "
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "Got it. Then I would start with the customer, not the number.",
      "detail": "Got it. Then I would start with the customer, not the number.\nFor a subscription like Swiggy One, the right price depends on three things:\nwho the user is how much value they get from the membership what they are willing to pay versus their alternatives So I would first segment the users, then estimate value, then compare it to willingness to pay and competitor options, and finally decide the pricing structure.\nWhy start with segmentation? Why not just benchmark competitors first?"
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "Because competitor prices only make sense after I know what problem Swiggy One is solving for the user.",
      "detail": "Because competitor prices only make sense after I know what problem Swiggy One is solving for the user.\nA heavy user who orders food and groceries often may value the membership very differently from a light user who orders once in a while. If I copy a competitor blindly, I may end up overpricing one segment and underpricing another.\nFair. So how would you segment the users?\nI would keep it simple and split them into three broad groups."
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "Heavy users who order often and clearly recover the subscription cost Medium-frequency users who are on the ed",
      "detail": "Heavy users who order often and clearly recover the subscription cost Medium-frequency users who are on the edge and can be converted with the right offer Light users who use Swiggy occasionally and may not see enough value I would also look at geography and use case. A metro user may have a different willingness to pay than a user in a more price-sensitive city. And food-only users may value the plan differently from users who also use grocery or other Swiggy benefits.\nInteresting. What does value mean here?\nI would think of value in terms of what the user saves and what friction disappears.\ndelivery fee savings"
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "That tells me the upper bound of willingness to pay. If the membership saves a user a lot, they may tolerate a",
      "detail": "That tells me the upper bound of willingness to pay. If the membership saves a user a lot, they may tolerate a higher price. If the savings are small, the price has to stay low enough to feel obviously worth it.\nOkay. So how do you translate that into pricing?\nI would start with value-based pricing and then sanity-check it against competitor pricing.\nFirst, I would estimate the value delivered for each segment. A heavy user might save much more than a light user, so the same price would not work equally well for both."
    }
  ],
  "recommendations": [
    "Prioritize the highest-impact P0 bottleneck identified in Revisiting Swiggy One Membership Pricing before secondary optimizations.",
    "Pilot the top intervention in a controlled cohort/region with clear North Star and guardrail tracking.",
    "Scale rollout only after verifying unit economics and zero adverse second-order effects."
  ],
  "metricsAndGuardrails": {
    "northStar": "Net Contribution Margin & Paid ARPU Growth (Swiggy)",
    "leading": [
      "Pricing page → checkout conversion %",
      "Tier upgrade / annual plan share"
    ],
    "guardrails": [
      "Churn / price-complaint rate",
      "Competitive win/loss rate"
    ]
  },
  "synthesisScript": "For Swiggy’s Revisiting Swiggy One Membership Pricing case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Prioritize the highest-impact P0 bottleneck identified in Revisiting Swiggy One Membership Pricing before secondary optimizations. We will validate success via Net Contribution Margin & Paid ARPU Growth (Swiggy) while guarding against Churn / price-complaint rate.",
  "interviewerTrap": "Making free delivery unlimited on ₹50 orders—power users will drain contribution margin fast without a minimum basket threshold!",
  "variations": [
    {
      "question": "How would your recommendation change if Swiggy had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Pricing",
    "correctFramework": "Business Model Check → 3Cs of Pricing (Cost Floor | Competitor Anchor | Value WTP) → Tiering & Test",
    "structureOptions": [
      {
        "label": "Confirm Revenue Model & Goal → Assess Cost Floor, Competitor Anchor & Value WTP → Design Tiers & Test Plan",
        "correct": true,
        "feedback": "Exact 3Cs consulting & PM pricing approach!"
      },
      {
        "label": "Pick a random round number ending in 99 without checking costs or substitutes",
        "correct": false,
        "feedback": "Psychological pricing only tunes the final digit after anchoring Cost, Rivals, and Value."
      },
      {
        "label": "Give the product away free forever with zero monetization path",
        "correct": false,
        "feedback": "Fails the pricing objective unless paired with a clear ad/cross-sell engine."
      }
    ],
    "decisionQuiz": {
      "question": "Which pricing lens generally captures the highest margin ceiling when a product delivers clear unique ROI?",
      "options": [
        {
          "label": "Value-Based Pricing anchored to customer willingness-to-pay",
          "correct": true,
          "feedback": "Yes! Cost-plus only sets the floor; value-based captures differentiated ROI."
        },
        {
          "label": "Always undercutting the cheapest competitor by 50%",
          "correct": false,
          "feedback": "Triggers margin-destroying price wars."
        },
        {
          "label": "Cost-plus 5% regardless of brand value",
          "correct": false,
          "feedback": "Leaves massive consumer surplus on the table."
        }
      ]
    }
  }
},
{
  "id": "ecell-pricing-perplexity-one",
  "title": "Monetizing Perplexity One Subscription",
  "company": "Perplexity",
  "source": "E-Cell IITG 2026-27",
  "track": "Product",
  "category": "Pricing",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "Perplexity",
    "Pricing",
    "Product"
  ],
  "prompt": "Monetizing Perplexity One Assume you are a Product Manager at Perplexity. The company wants to grow adoption of Perplexity Pro while building a sustainable subscription business. How would you determine the pricing strategy for the premium offering? Walk me through your approach.",
  "clarifyingQuestions": [
    {
      "q": "Are we optimizing mainly for paid adoption, long-term retention, or revenue per user?",
      "a": "And should I think of Perplexity Pro as a premium layer for individual users first, or do we also want to consider teams from the start?",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "And should I think of Perplexity Pro as a premium layer for individual users first, or do we also want to consider teams from the start?",
      "a": "Assume the goal is to grow adoption and build a sustainable subscription business. Start with individual users, but feel free to think about teams later if relevant.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "who is getting the most value from the product what problem the premium tier solves better than the free tier what alternatives the user has today how much they are willing to pay for that improvement Why start with valu",
      "a": "Because the right price depends on how much utility the user gets.",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "Business Model Check → 3Cs of Pricing (Cost Floor | Competitor Anchor | Value WTP) → Tiering & Test",
  "coreEquation": "Optimal Price ∈ [Unit Cost Floor, Perceived Value WTP Ceiling] Tuned to Elasticity",
  "strategyOverview": "Approach Monetizing Perplexity One Subscription (Perplexity) using a Pricing structure: start by confirming the business objective and scope, decompose the problem cleanly along Business Model Check → 3Cs of Pricing (Cost Floor | Competitor Anchor | Value WTP) → Tiering & Test, and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Monetizing Perplexity One Subscription — 3Cs Pricing Tree",
    "valueText": "Floor · Anchor · Ceiling",
    "children": [
      {
        "label": "1. Cost-Plus Floor (COGS / Marginal Serve Cost + Margin)",
        "valueText": "Minimum"
      },
      {
        "label": "2. Competitor & Substitute Benchmarking",
        "valueText": "Market Anchor"
      },
      {
        "label": "3. Value-Based WTP & Tiered Packaging / Elasticity",
        "valueText": "Profit Maximizer",
        "highlight": true
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Interviewer",
      "prompt": "Monetizing Perplexity One Assume you are a Product Manager at Perplexity. The company wants to grow adoption o",
      "detail": "Monetizing Perplexity One Assume you are a Product Manager at Perplexity. The company wants to grow adoption of Perplexity Pro while building a sustainable subscription business. How would you determine the pricing strategy for the premium offering? Walk me through your approach.\nSure. Before I get into pricing, I want to clarify the objective a bit.\nAre we optimizing mainly for paid adoption, long-term retention, or revenue per user?\nAnd should I think of Perplexity Pro as a premium layer for individual users first, or do we also want to consider teams from the start?"
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "Assume the goal is to grow adoption and build a sustainable subscription business. Start with individual users",
      "detail": "Assume the goal is to grow adoption and build a sustainable subscription business. Start with individual users, but feel free to think about teams later if relevant.\nGot it. Then I would not start with a price point. I would start with the user and the value being delivered.\nFor a product like Perplexity Pro, I would think through four things:\nwho is getting the most value from the product what problem the premium tier solves better than the free tier what alternatives the user has today how much they are willing to pay for that improvement Why start with value rather than competitor prices?"
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "Because the right price depends on how much utility the user gets.",
      "detail": "Because the right price depends on how much utility the user gets.\nA casual user who asks a few simple questions will not value the premium tier the same way a researcher, analyst, or knowledge worker would. If I begin with competitor pricing, I may anchor on the market instead of the actual value created. That can lead to underpricing a strong product or overpricing a niche one.\nFair. So who are the key users here?\nI would segment users into a few broad groups."
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "Casual users who mainly need quick answers Power users who search often and want better depth, speed, or relia",
      "detail": "Casual users who mainly need quick answers Power users who search often and want better depth, speed, or reliability Professional users like analysts, students, researchers, or founders who use the product for work Teams that may eventually need shared access and collaboration For Pro pricing, I would focus first on power and professional users. They are most likely to see clear value and convert. Casual users are important for the top of funnel, but they are less likely to pay.\nInteresting. What is the value proposition for those users?\nI would define the value in terms of time saved and quality improved.\nFor ex"
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "faster or more capable answers higher usage limits better access to advanced models or tools more reliable res",
      "detail": "faster or more capable answers higher usage limits better access to advanced models or tools more reliable research workflows less switching between tabs, search engines, and sources So the core question becomes: how much time, effort, or confusion does Pro remove for a user who relies on it frequently?\nIf the product saves a working professional even a few hours a month, the willingness to pay can be meaningful.\nOkay. So how do you translate that into pricing?\nI would start with value-based pricing and then sanity-check it against competitor pricing."
    }
  ],
  "recommendations": [
    "Prioritize the highest-impact P0 bottleneck identified in Monetizing Perplexity One Subscription before secondary optimizations.",
    "Pilot the top intervention in a controlled cohort/region with clear North Star and guardrail tracking.",
    "Scale rollout only after verifying unit economics and zero adverse second-order effects."
  ],
  "metricsAndGuardrails": {
    "northStar": "Net Contribution Margin & Paid ARPU Growth (Perplexity)",
    "leading": [
      "Pricing page → checkout conversion %",
      "Tier upgrade / annual plan share"
    ],
    "guardrails": [
      "Churn / price-complaint rate",
      "Competitive win/loss rate"
    ]
  },
  "synthesisScript": "For Perplexity’s Monetizing Perplexity One Subscription case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Prioritize the highest-impact P0 bottleneck identified in Monetizing Perplexity One Subscription before secondary optimizations. We will validate success via Net Contribution Margin & Paid ARPU Growth (Perplexity) while guarding against Churn / price-complaint rate.",
  "interviewerTrap": "Using only Cost-Plus markup and ignoring Value-Based WTP, elasticity, cannibalization, or two-sided marketplace effects!",
  "variations": [
    {
      "question": "How would your recommendation change if Perplexity had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Pricing",
    "correctFramework": "Business Model Check → 3Cs of Pricing (Cost Floor | Competitor Anchor | Value WTP) → Tiering & Test",
    "structureOptions": [
      {
        "label": "Confirm Revenue Model & Goal → Assess Cost Floor, Competitor Anchor & Value WTP → Design Tiers & Test Plan",
        "correct": true,
        "feedback": "Exact 3Cs consulting & PM pricing approach!"
      },
      {
        "label": "Pick a random round number ending in 99 without checking costs or substitutes",
        "correct": false,
        "feedback": "Psychological pricing only tunes the final digit after anchoring Cost, Rivals, and Value."
      },
      {
        "label": "Give the product away free forever with zero monetization path",
        "correct": false,
        "feedback": "Fails the pricing objective unless paired with a clear ad/cross-sell engine."
      }
    ],
    "decisionQuiz": {
      "question": "Which pricing lens generally captures the highest margin ceiling when a product delivers clear unique ROI?",
      "options": [
        {
          "label": "Value-Based Pricing anchored to customer willingness-to-pay",
          "correct": true,
          "feedback": "Yes! Cost-plus only sets the floor; value-based captures differentiated ROI."
        },
        {
          "label": "Always undercutting the cheapest competitor by 50%",
          "correct": false,
          "feedback": "Triggers margin-destroying price wars."
        },
        {
          "label": "Cost-plus 5% regardless of brand value",
          "correct": false,
          "feedback": "Leaves massive consumer surplus on the table."
        }
      ]
    }
  }
},
{
  "id": "ecell-pricing-uber-airport",
  "title": "Pricing Uber Airport Rides",
  "company": "Uber",
  "source": "E-Cell IITG 2026-27",
  "track": "Product",
  "category": "Pricing",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "Uber",
    "Pricing",
    "Product"
  ],
  "prompt": "You are a Product Manager at Uber. Airport rides differ significantly from regular trips in terms of demand patterns, waiting times, and operational constraints. How would you determine the right pricing strategy for airport rides? Walk me through your approach and the factors you would consider.",
  "clarifyingQuestions": [
    {
      "q": "Are we trying to optimize for profitability, rider adoption, or driver supply? And should I assume we are pricing only airport trips, not changing the rest of the Uber fare structure?",
      "a": "Good questions. Assume the goal is to balance profitability and rider adoption. Yes, think only about airport rides.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Interesting. What would you look at first?",
      "a": "I would start with the customer segment and the use case.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Why does that matter for pricing?",
      "a": "Because the willingness to pay is higher when the cost of failure is high.",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "Business Model Check → 3Cs of Pricing (Cost Floor | Competitor Anchor | Value WTP) → Tiering & Test",
  "coreEquation": "Optimal Price ∈ [Unit Cost Floor, Perceived Value WTP Ceiling] Tuned to Elasticity",
  "strategyOverview": "Approach Pricing Uber Airport Rides (Uber) using a Pricing structure: start by confirming the business objective and scope, decompose the problem cleanly along Business Model Check → 3Cs of Pricing (Cost Floor | Competitor Anchor | Value WTP) → Tiering & Test, and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Pricing Uber Airport Rides — 3Cs Pricing Tree",
    "valueText": "Floor · Anchor · Ceiling",
    "children": [
      {
        "label": "1. Cost-Plus Floor (COGS / Marginal Serve Cost + Margin)",
        "valueText": "Minimum"
      },
      {
        "label": "2. Competitor & Substitute Benchmarking",
        "valueText": "Market Anchor"
      },
      {
        "label": "3. Value-Based WTP & Tiered Packaging / Elasticity",
        "valueText": "Profit Maximizer",
        "highlight": true
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Interviewer",
      "prompt": "You are a Product Manager at Uber. Airport rides differ significantly from regular trips in terms of demand pa",
      "detail": "You are a Product Manager at Uber. Airport rides differ significantly from regular trips in terms of demand patterns, waiting times, and operational constraints. How would you determine the right pricing strategy for airport rides? Walk me through your approach and the factors you would consider.\nSure. Before I get into pricing, I want to clarify a couple of things.\nAre we trying to optimize for profitability, rider adoption, or driver supply? And should I assume we are pricing only airport trips, not changing the rest of the Uber fare structure?\nGood questions. Assume the goal is to balance profitability and rid"
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "Got it. Then I would start with the fact that airport rides are not just another ride category. They have a di",
      "detail": "Got it. Then I would start with the fact that airport rides are not just another ride category. They have a different customer mindset.\nThe rider is usually:\nmore time-sensitive more willing to pay for reliability more sensitive to cancellations and waiting time and often less price elastic than a normal urban commute So I would not price airport rides only using distance or time. I would think in terms of the value delivered, the operational cost, and the experience promise.\nInteresting. What would you look at first?"
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "I would start with the customer segment and the use case.",
      "detail": "I would start with the customer segment and the use case.\nAirport riders are usually one of three broad groups:\nbusiness travelers who care about punctuality leisure travelers who care about comfort and transparency families or groups carrying luggage who care about reliability and vehicle size For all of them, the value is not just transport. It is peace of mind. They are paying to reduce the risk of missing a flight or dealing with a bad pickup experience.\nWhy does that matter for pricing?"
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "Because the willingness to pay is higher when the cost of failure is high.",
      "detail": "Because the willingness to pay is higher when the cost of failure is high.\nIf a user is going to the airport, a late car or a cancellation has a much bigger downside than on a regular trip. That means Uber can charge a premium for reliability, but only if the service actually delivers on that promise.\nSo the question is not just, what is the ride worth in kilometers? It is, what is reliable airport access worth to the rider?\nFair. What factors would go into the price?"
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "I would think of four factors.",
      "detail": "I would think of four factors.\nBase trip economics: distance, time, tolls, and airport access fees Waiting and operational friction: driver idle time, pickup complexity, congestion, and airport queueing Customer willingness to pay: how much reliability and convenience are worth Supply dynamics: whether drivers are willing to accept airport trips at the current rate Airport rides are operationally harder. Drivers may have to wait longer, enter restricted areas, or deal with slower pickups. That increases cost and should be reflected in pricing.\nGood. Would you just use a higher flat fare then?\nNot quite. I would u"
    }
  ],
  "recommendations": [
    "Prioritize the highest-impact P0 bottleneck identified in Pricing Uber Airport Rides before secondary optimizations.",
    "Pilot the top intervention in a controlled cohort/region with clear North Star and guardrail tracking.",
    "Scale rollout only after verifying unit economics and zero adverse second-order effects."
  ],
  "metricsAndGuardrails": {
    "northStar": "Net Contribution Margin & Paid ARPU Growth (Uber)",
    "leading": [
      "Pricing page → checkout conversion %",
      "Tier upgrade / annual plan share"
    ],
    "guardrails": [
      "Churn / price-complaint rate",
      "Competitive win/loss rate"
    ]
  },
  "synthesisScript": "For Uber’s Pricing Uber Airport Rides case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Prioritize the highest-impact P0 bottleneck identified in Pricing Uber Airport Rides before secondary optimizations. We will validate success via Net Contribution Margin & Paid ARPU Growth (Uber) while guarding against Churn / price-complaint rate.",
  "interviewerTrap": "Using only Cost-Plus markup and ignoring Value-Based WTP, elasticity, cannibalization, or two-sided marketplace effects!",
  "variations": [
    {
      "question": "How would your recommendation change if Uber had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Pricing",
    "correctFramework": "Business Model Check → 3Cs of Pricing (Cost Floor | Competitor Anchor | Value WTP) → Tiering & Test",
    "structureOptions": [
      {
        "label": "Confirm Revenue Model & Goal → Assess Cost Floor, Competitor Anchor & Value WTP → Design Tiers & Test Plan",
        "correct": true,
        "feedback": "Exact 3Cs consulting & PM pricing approach!"
      },
      {
        "label": "Pick a random round number ending in 99 without checking costs or substitutes",
        "correct": false,
        "feedback": "Psychological pricing only tunes the final digit after anchoring Cost, Rivals, and Value."
      },
      {
        "label": "Give the product away free forever with zero monetization path",
        "correct": false,
        "feedback": "Fails the pricing objective unless paired with a clear ad/cross-sell engine."
      }
    ],
    "decisionQuiz": {
      "question": "Which pricing lens generally captures the highest margin ceiling when a product delivers clear unique ROI?",
      "options": [
        {
          "label": "Value-Based Pricing anchored to customer willingness-to-pay",
          "correct": true,
          "feedback": "Yes! Cost-plus only sets the floor; value-based captures differentiated ROI."
        },
        {
          "label": "Always undercutting the cheapest competitor by 50%",
          "correct": false,
          "feedback": "Triggers margin-destroying price wars."
        },
        {
          "label": "Cost-plus 5% regardless of brand value",
          "correct": false,
          "feedback": "Leaves massive consumer surplus on the table."
        }
      ]
    }
  }
},
{
  "id": "ecell-pricing-meesho-ads",
  "title": "Pricing Seller Ads on Meesho",
  "company": "Meesho",
  "source": "E-Cell IITG 2026-27",
  "track": "Product",
  "category": "Pricing",
  "difficulty": 2,
  "isStarter": true,
  "tags": [
    "Meesho",
    "Pricing",
    "Marketplace Ads",
    "CPC / ROAS",
    "Sellers"
  ],
  "prompt": "You are a PM at Meesho. Meesho wants to price and scale Sponsored Seller Ads so sellers get strong ROI without hurting organic buyer conversion. How would you price Seller Ads on Meesho?",
  "clarifyingQuestions": [
    {
      "q": "What is our primary goal—ad revenue maximization or seller adoption & retention?",
      "a": "Healthy ad revenue growth while protecting seller ROI (ROAS) and buyer conversion.",
      "why": "Ad pricing that burns small sellers causes rapid seller churn."
    },
    {
      "q": "Who are our target sellers—large brands or Tier-2/3 SMBs?",
      "a": "Mostly value-focused SMBs selling ₹150–₹500 items on razor-thin margins.",
      "why": "Sellers cannot afford high fixed retainers or ₹20 CPCs on a ₹250 kurti."
    }
  ],
  "frameworkUsed": "Marketplace Ad Economics (Seller ROAS Ceiling × Auction CPC/CPM × Buyer Relevance Guardrail)",
  "coreEquation": "Max Sustainable CPC = Item AOV × Seller Margin % × Ad Conversion Rate × Target ACOS Share",
  "strategyOverview": "Unlike Amazon/Flipkart brand ads, Meesho serves price-sensitive SMB sellers. Price via self-serve CPC auction with low minimum bids (₹1–3), starter ad-credits, and automated ROI-capped campaigns—guarding buyer feed relevance so low-quality sponsored listings never sink conversion.",
  "tree": {
    "label": "Pricing Seller Ads on Meesho — 3Cs Pricing Tree",
    "valueText": "Floor · Anchor · Ceiling",
    "children": [
      {
        "label": "1. Cost-Plus Floor (COGS / Marginal Serve Cost + Margin)",
        "valueText": "Minimum"
      },
      {
        "label": "2. Competitor & Substitute Benchmarking",
        "valueText": "Market Anchor"
      },
      {
        "label": "3. Value-Based WTP & Tiered Packaging / Elasticity",
        "valueText": "Profit Maximizer",
        "highlight": true
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Interviewer",
      "prompt": "Imagine you are a Product Manager at Swiggy. Swiggy One has become an important part of the company's customer",
      "detail": "Imagine you are a Product Manager at Swiggy. Swiggy One has become an important part of the company's customer retention strategy. If you were tasked with revisiting its pricing, how would you approach the problem? Walk me through your framework.\nSure. Before I jump in, I want to clarify a couple of things.\nAre we trying to optimize mainly for retention, membership revenue, or total order frequency? And when you say revisit pricing, should I think only about the headline price, or also the packaging and benefits?\nGood question. Assume the goal is to improve retention and overall profitability. You can think about"
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "Got it. Then I would start with the customer, not the number.",
      "detail": "Got it. Then I would start with the customer, not the number.\nFor a subscription like Swiggy One, the right price depends on three things:\nwho the user is how much value they get from the membership what they are willing to pay versus their alternatives So I would first segment the users, then estimate value, then compare it to willingness to pay and competitor options, and finally decide the pricing structure.\nWhy start with segmentation? Why not just benchmark competitors first?"
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "Because competitor prices only make sense after I know what problem Swiggy One is solving for the user.",
      "detail": "Because competitor prices only make sense after I know what problem Swiggy One is solving for the user.\nA heavy user who orders food and groceries often may value the membership very differently from a light user who orders once in a while. If I copy a competitor blindly, I may end up overpricing one segment and underpricing another.\nFair. So how would you segment the users?\nI would keep it simple and split them into three broad groups."
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "Heavy users who order often and clearly recover the subscription cost Medium-frequency users who are on the ed",
      "detail": "Heavy users who order often and clearly recover the subscription cost Medium-frequency users who are on the edge and can be converted with the right offer Light users who use Swiggy occasionally and may not see enough value I would also look at geography and use case. A metro user may have a different willingness to pay than a user in a more price-sensitive city. And food-only users may value the plan differently from users who also use grocery or other Swiggy benefits.\nInteresting. What does value mean here?\nI would think of value in terms of what the user saves and what friction disappears.\ndelivery fee savings"
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "That tells me the upper bound of willingness to pay. If the membership saves a user a lot, they may tolerate a",
      "detail": "That tells me the upper bound of willingness to pay. If the membership saves a user a lot, they may tolerate a higher price. If the savings are small, the price has to stay low enough to feel obviously worth it.\nOkay. So how do you translate that into pricing?\nI would start with value-based pricing and then sanity-check it against competitor pricing.\nFirst, I would estimate the value delivered for each segment. A heavy user might save much more than a light user, so the same price would not work equally well for both."
    }
  ],
  "recommendations": [
    "Use a performance-based CPC auction (pay per click, not impressions) with dynamic reserve floors tuned to category margin.",
    "Launch 'ROI-Protected Smart Campaigns' where SMBs set a target ROAS/daily budget cap (starting ₹100/day) with zero ad-ops expertise needed.",
    "Cap sponsored slots at ≤15–20% of top search results and require minimum product rating (≥3.8★) to enter the ad auction."
  ],
  "metricsAndGuardrails": {
    "northStar": "Net Contribution Margin & Paid ARPU Growth (Meesho)",
    "leading": [
      "Pricing page → checkout conversion %",
      "Tier upgrade / annual plan share"
    ],
    "guardrails": [
      "Churn / price-complaint rate",
      "Competitive win/loss rate"
    ]
  },
  "synthesisScript": "To price Seller Ads on Meesho, I recommend a low-floor CPC auction tailored to thin-margin SMBs, paired with automated daily-budget/ROAS-capped Smart Campaigns and strict quality + slot-cap guardrails so ad revenue grows without eroding buyer conversion or seller trust.",
  "interviewerTrap": "Setting flat monthly ad packages or high minimum CPCs like Amazon—thin-margin Tier-2/3 sellers will lose money on the first campaign and never return!",
  "variations": [
    {
      "question": "How would your recommendation change if Meesho had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Pricing",
    "correctFramework": "Business Model Check → 3Cs of Pricing (Cost Floor | Competitor Anchor | Value WTP) → Tiering & Test",
    "structureOptions": [
      {
        "label": "Confirm Revenue Model & Goal → Assess Cost Floor, Competitor Anchor & Value WTP → Design Tiers & Test Plan",
        "correct": true,
        "feedback": "Exact 3Cs consulting & PM pricing approach!"
      },
      {
        "label": "Pick a random round number ending in 99 without checking costs or substitutes",
        "correct": false,
        "feedback": "Psychological pricing only tunes the final digit after anchoring Cost, Rivals, and Value."
      },
      {
        "label": "Give the product away free forever with zero monetization path",
        "correct": false,
        "feedback": "Fails the pricing objective unless paired with a clear ad/cross-sell engine."
      }
    ],
    "decisionQuiz": {
      "question": "Which pricing lens generally captures the highest margin ceiling when a product delivers clear unique ROI?",
      "options": [
        {
          "label": "Value-Based Pricing anchored to customer willingness-to-pay",
          "correct": true,
          "feedback": "Yes! Cost-plus only sets the floor; value-based captures differentiated ROI."
        },
        {
          "label": "Always undercutting the cheapest competitor by 50%",
          "correct": false,
          "feedback": "Triggers margin-destroying price wars."
        },
        {
          "label": "Cost-plus 5% regardless of brand value",
          "correct": false,
          "feedback": "Leaves massive consumer surplus on the table."
        }
      ]
    }
  }
},
{
  "id": "ktc-design-bicycle-resale",
  "title": "Bicycle Resale Marketplace Design",
  "company": "media.net",
  "source": "KTC Casebook 2026",
  "track": "Product",
  "category": "Product Design",
  "difficulty": 2,
  "isStarter": false,
  "tags": [
    "media.net",
    "Product Design",
    "Product"
  ],
  "prompt": "Bicycle Resale Hi, Let’s start the case. You are tasked with building an application for resale of cycles. What key product features would you incorporate to market this app more interactive?",
  "clarifyingQuestions": [
    {
      "q": "Is this correct?",
      "a": "Yes, go ahead.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Are we targeting a particular geography or demographic—like students, city commuters, or professional cyclists?",
      "a": "You can choose any target segment.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Great. Also, by “interactive,” do you mean we should focus on features that increase user engagement and ease of transaction , apart from just listing and browsing cycles?",
      "a": "Correct. Feel free to make it as engaging as possible.",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "CIRCLES (Goal → Priority Persona → Journey Pain Points → Prioritized MVP → Trade-offs & Metrics)",
  "coreEquation": "Product Impact = Priority Persona Frequency × P0 Pain Severity × Adoption %",
  "strategyOverview": "Approach Bicycle Resale Marketplace Design (media.net) using a Product Design structure: start by confirming the business objective and scope, decompose the problem cleanly along CIRCLES (Goal → Priority Persona → Journey Pain Points → Prioritized MVP → Trade-offs & Metrics), and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Bicycle Resale Marketplace Design — User & Product Tree",
    "valueText": "Persona → Pain → Fix",
    "children": [
      {
        "label": "1. Priority Persona Selection (Pick 1 Beachhead)",
        "valueText": "High Freq / Pain",
        "highlight": true
      },
      {
        "label": "2. End-to-End Journey & P0 Pain Points",
        "valueText": "Impact × Effort",
        "highlight": true
      },
      {
        "label": "3. MVP Solutions, Trade-offs & Guardrails",
        "valueText": "North Star"
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Interviewer",
      "prompt": "Bicycle Resale Hi, Let’s start the case. You are tasked with building an application for resale of cycles. Wha",
      "detail": "Bicycle Resale Hi, Let’s start the case. You are tasked with building an application for resale of cycles. What key product features would you incorporate to market this app more interactive?\nComprehend the situation (Clarify problem statement) Let me clarify the problem first. So, I need to design a mobile application where users can buy and sell second-hand cycles.\nAre we targeting a particular geography or demographic—like students, city commuters, or professional cyclists?\nYou can choose any target segment."
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "Great. Also, by “interactive,” do you mean we should focus on features that increase user engagement and ease ",
      "detail": "Great. Also, by “interactive,” do you mean we should focus on features that increase user engagement and ease of transaction , apart from just listing and browsing cycles?\nCorrect. Feel free to make it as engaging as possible.\nIdentify customers & report their needs (User personas and problems) I’ll first identify potential user personas:\n1. College students or young professionals – looking for affordable cycles for daily commute."
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "2. Cycling enthusiasts – searching for specific brands/models at lower prices.",
      "detail": "2. Cycling enthusiasts – searching for specific brands/models at lower prices.\n3. Parents – buying/selling kids’ cycles that are quickly outgrown.\n● Buyers: Want verified sellers, fair prices, and quick filtering by type (mountain bike, road bike, kids’ cycle).\n● Sellers: Want fast listing, easy photo uploads, and better reach to genuine buyers."
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "Bicycle Resale Cut through prioritization (Choose primary target) Since this is a resale market, students and ",
      "detail": "Bicycle Resale Cut through prioritization (Choose primary target) Since this is a resale market, students and parents may be the largest, most active group—they have strong price sensitivity and frequently trade used cycles. Enthusiasts are fewer but may spend more per cycle.\nFor launch and scale , I’d target students and parents first because:\n● High transaction volume.\n● Low friction to adopt an easy-to-use app."
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "● Word-of-mouth growth within campuses or local communities Good. Now, how will you make this app interactive?",
      "detail": "● Word-of-mouth growth within campuses or local communities Good. Now, how will you make this app interactive?\nI’ll map the user journey : Search → Discover → Evaluate → Negotiate → Purchase → Post-sale feedback.\nKey features to enhance interactivity:\n1. Guided Listing Flow: Sellers answer simple voice or chatbot questions (“What’s the brand?” “Any scratches?”) → app auto-generates an attractive listing."
    }
  ],
  "recommendations": [
    "Partnerships: Tie up with repair shops or cycling",
    "Market size: The second-hand mobility market is",
    "Competition: Platforms like OLX or Facebook",
    "Effort vs ROI: Adding AR and matchmaking increases"
  ],
  "metricsAndGuardrails": {
    "northStar": "Core Task Completion / Weekly Active Value Users for media.net",
    "leading": [
      "Feature discovery & Day-1 adoption %",
      "7-day repeat usage rate"
    ],
    "guardrails": [
      "Core app latency / checkout conversion",
      "Support tickets & uninstall rate"
    ]
  },
  "synthesisScript": "For media.net’s Bicycle Resale Marketplace Design case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Partnerships: Tie up with repair shops or cycling We will validate success via Core Task Completion / Weekly Active Value Users for media.net while guarding against Core app latency / checkout conversion.",
  "interviewerTrap": "Listing 8 shiny features for 'all users' without picking ONE priority persona, ranking pain points, or naming trade-offs!",
  "variations": [
    {
      "question": "How would your recommendation change if media.net had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Product Design",
    "correctFramework": "CIRCLES (Goal → Priority Persona → Journey Pain Points → Prioritized MVP → Trade-offs & Metrics)",
    "structureOptions": [
      {
        "label": "Clarify Goal → Pick 1 Priority Persona → Map Pain Points → Rank P0 Fixes → Define North Star & Trade-offs",
        "correct": true,
        "feedback": "Crisp CIRCLES flow! Selecting one persona shows real PM discipline."
      },
      {
        "label": "Suggest adding AI chatbots, AR, crypto rewards, and dark mode immediately",
        "correct": false,
        "feedback": "Buzzword feature-dumping without user pain grounding fails PM interviews."
      },
      {
        "label": "Run a supply-side Value Chain raw-material audit",
        "correct": false,
        "feedback": "That belongs to manufacturing Profitability, not Product Design/UX."
      }
    ],
    "decisionQuiz": {
      "question": "After identifying 3 user personas in a Product Design/Improvement case, what is the strongest move?",
      "options": [
        {
          "label": "Pick ONE primary persona for v1 based on frequency/pain and explain why others wait for v2",
          "correct": true,
          "feedback": "Exactly! Solving deeply for one segment beats building a mediocre tool for everyone."
        },
        {
          "label": "Design separate apps for all 3 simultaneously",
          "correct": false,
          "feedback": "Fragments engineering focus and UX coherence."
        },
        {
          "label": "Skip personas and start pricing tiers",
          "correct": false,
          "feedback": "You must understand user needs before designing or pricing."
        }
      ]
    }
  }
},
{
  "id": "ktc-52-zomato-packaging-optimization",
  "title": "Zomato Packaging Optimization",
  "company": "Zomato",
  "source": "KTC Casebook 2026",
  "track": "Product",
  "category": "Product Design",
  "difficulty": 2,
  "isStarter": false,
  "tags": [
    "Zomato",
    "Product Design",
    "Product"
  ],
  "prompt": "Packaging Optimization Hi! Let’s start with the case. How would you design packaging for an e-commerce company that minimizes environmental impact while ensuring product safety and brand visibility?",
  "clarifyingQuestions": [
    {
      "q": "1. Product category: Are we talking about a specific type of product (like fragile electronics vs. apparel) or across the entire catalog?",
      "a": "2. Environmental scope: Should we focus on material sustainability (biodegradable/recycled), supply chain efficiency (less fuel use), or both?",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "2. Environmental scope: Should we focus on material sustainability (biodegradable/recycled), supply chain efficiency (less fuel use), or both?",
      "a": "3. Cost constraints: Do we have a target cost per package, or should I assume near-parity with current packaging cost?",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "3. Cost constraints: Do we have a target cost per package, or should I assume near-parity with current packaging cost?",
      "a": "4. Branding goal: Is brand visibility more about printed logos/colors, or creating a premium unboxing experience?",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "CIRCLES (Goal → Priority Persona → Journey Pain Points → Prioritized MVP → Trade-offs & Metrics)",
  "coreEquation": "Product Impact = Priority Persona Frequency × P0 Pain Severity × Adoption %",
  "strategyOverview": "Approach Zomato Packaging Optimization (Zomato) using a Product Design structure: start by confirming the business objective and scope, decompose the problem cleanly along CIRCLES (Goal → Priority Persona → Journey Pain Points → Prioritized MVP → Trade-offs & Metrics), and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Zomato Packaging Optimization — User & Product Tree",
    "valueText": "Persona → Pain → Fix",
    "children": [
      {
        "label": "1. Priority Persona Selection (Pick 1 Beachhead)",
        "valueText": "High Freq / Pain",
        "highlight": true
      },
      {
        "label": "2. End-to-End Journey & P0 Pain Points",
        "valueText": "Impact × Effort",
        "highlight": true
      },
      {
        "label": "3. MVP Solutions, Trade-offs & Guardrails",
        "valueText": "North Star"
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Interviewer",
      "prompt": "Packaging Optimization Hi! Let’s start with the case. How would you design packaging for an e-commerce company",
      "detail": "Packaging Optimization Hi! Let’s start with the case. How would you design packaging for an e-commerce company that minimizes environmental impact while ensuring product safety and brand visibility?\nStep 1 — Clarify the Problem Statement Before diving in, I’d like to clarify a few things to make sure I’m solving the right problem:\n1. Product category: Are we talking about a specific type of product (like fragile electronics vs. apparel) or across the entire catalog?\n2. Environmental scope: Should we focus on material sustainability (biodegradable/recycled), supply chain efficiency (less fuel use), or both?"
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "3. Cost constraints: Do we have a target cost per package, or should I assume near-parity with current packagi",
      "detail": "3. Cost constraints: Do we have a target cost per package, or should I assume near-parity with current packaging cost?\n4. Branding goal: Is brand visibility more about printed logos/colors, or creating a premium unboxing experience?\n5. Scale: Are we designing for a global marketplace or one region? Different geographies have different recycling infrastructure.\nGreat questions. Assume it’s for a large general e-commerce player shipping a wide range of products globally . You need to balance cost, sustainability, and protection — no huge cost blowouts. Branding refers to visual presence and premium feel but must no"
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "Comment: The candidate doesn’t jump to solutions immediately — they clarify objectives and constraints. This s",
      "detail": "Comment: The candidate doesn’t jump to solutions immediately — they clarify objectives and constraints. This shows structured thinking and ensures alignment.\nStep 2 — Restate and Frame the Problem So our task is to design packaging that reduces environmental impact while keeping products safe during transit and reinforcing brand identity — all at reasonable cost, and scalable worldwide. If that’s correct, I’d like to start by identifying the key stakeholders and success criteria.\nPackaging Optimization PS — Problem Statement: “How would you design packaging for an e-commerce company that minimizes environmental i"
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "I see three competing objectives: reduced environmental impact, adequate protection and strong brand presentat",
      "detail": "I see three competing objectives: reduced environmental impact, adequate protection and strong brand presentation. I would begin by clarifying the product mix, what “environmental” means, current packaging, cost tolerance and geography. Then I'd map the packaging lifecycle and propose designs by product-risk tier rather than one universal box.\nWhat environmental dimension should you optimize?\nAre we prioritizing material use and disposal, shipment emissions or a full lifecycle footprint?\nPrimarily material sourcing, recyclability and end-of-life disposal."
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "Understood. What does the retailer ship, and how fragile are the items?",
      "detail": "Understood. What does the retailer ship, and how fragile are the items?\nSmall-to-medium goods: apparel, electronics accessories and cosmetics.\nFragile items are a meaningful share.\nWhat is the baseline packaging and existing recovery performance?"
    }
  ],
  "recommendations": [
    "Environmental scope: Should we focus on material",
    "Cost constraints: Do we have a target cost per package,",
    "Branding goal: Is brand visibility more about printed",
    "Scale: Are we designing for a global marketplace or one"
  ],
  "metricsAndGuardrails": {
    "northStar": "Core Task Completion / Weekly Active Value Users for Zomato",
    "leading": [
      "Feature discovery & Day-1 adoption %",
      "7-day repeat usage rate"
    ],
    "guardrails": [
      "Core app latency / checkout conversion",
      "Support tickets & uninstall rate"
    ]
  },
  "synthesisScript": "For Zomato’s Zomato Packaging Optimization case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Environmental scope: Should we focus on material We will validate success via Core Task Completion / Weekly Active Value Users for Zomato while guarding against Core app latency / checkout conversion.",
  "interviewerTrap": "Listing 8 shiny features for 'all users' without picking ONE priority persona, ranking pain points, or naming trade-offs!",
  "variations": [
    {
      "question": "How would your recommendation change if Zomato had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Product Design",
    "correctFramework": "CIRCLES (Goal → Priority Persona → Journey Pain Points → Prioritized MVP → Trade-offs & Metrics)",
    "structureOptions": [
      {
        "label": "Clarify Goal → Pick 1 Priority Persona → Map Pain Points → Rank P0 Fixes → Define North Star & Trade-offs",
        "correct": true,
        "feedback": "Crisp CIRCLES flow! Selecting one persona shows real PM discipline."
      },
      {
        "label": "Suggest adding AI chatbots, AR, crypto rewards, and dark mode immediately",
        "correct": false,
        "feedback": "Buzzword feature-dumping without user pain grounding fails PM interviews."
      },
      {
        "label": "Run a supply-side Value Chain raw-material audit",
        "correct": false,
        "feedback": "That belongs to manufacturing Profitability, not Product Design/UX."
      }
    ],
    "decisionQuiz": {
      "question": "After identifying 3 user personas in a Product Design/Improvement case, what is the strongest move?",
      "options": [
        {
          "label": "Pick ONE primary persona for v1 based on frequency/pain and explain why others wait for v2",
          "correct": true,
          "feedback": "Exactly! Solving deeply for one segment beats building a mediocre tool for everyone."
        },
        {
          "label": "Design separate apps for all 3 simultaneously",
          "correct": false,
          "feedback": "Fragments engineering focus and UX coherence."
        },
        {
          "label": "Skip personas and start pricing tiers",
          "correct": false,
          "feedback": "You must understand user needs before designing or pricing."
        }
      ]
    }
  }
},
{
  "id": "ktc-53-dashboard-design-for-assam",
  "title": "Dashboard Design for Assam",
  "company": "media.net",
  "source": "KTC Casebook 2026",
  "track": "Product",
  "category": "Product Design",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "media.net",
    "Product Design",
    "Product"
  ],
  "prompt": "Great, thanks for coming today. Let's start the first question: How would you collect such data to create a dashboard for the State of Assam?",
  "clarifyingQuestions": [
    {
      "q": "farmers, policymakers, or both?",
      "a": "● Objective: Is the purpose mainly monitoring agriculture for decision-making (e.g., by the Chief Minister/officials) or also providing actionable insights directly to farmers?",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "● Objective: Is the purpose mainly monitoring agriculture for decision-making (e.g., by the Chief Minister/officials) or also providing actionable insights directly to farmers?",
      "a": "● Time Sensitivity: Do we need real-time updates (daily/hourly) or would periodic reporting (weekly/monthly) suffice?",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "● Time Sensitivity: Do we need real-time updates (daily/hourly) or would periodic reporting (weekly/monthly) suffice?",
      "a": "● Coverage: Should the dashboard cover only major crops or all agricultural activities (inputs, soil, irrigation, markets)?",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "CIRCLES (Goal → Priority Persona → Journey Pain Points → Prioritized MVP → Trade-offs & Metrics)",
  "coreEquation": "Product Impact = Priority Persona Frequency × P0 Pain Severity × Adoption %",
  "strategyOverview": "Approach Dashboard Design for Assam (media.net) using a Product Design structure: start by confirming the business objective and scope, decompose the problem cleanly along CIRCLES (Goal → Priority Persona → Journey Pain Points → Prioritized MVP → Trade-offs & Metrics), and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Dashboard Design for Assam — User & Product Tree",
    "valueText": "Persona → Pain → Fix",
    "children": [
      {
        "label": "1. Priority Persona Selection (Pick 1 Beachhead)",
        "valueText": "High Freq / Pain",
        "highlight": true
      },
      {
        "label": "2. End-to-End Journey & P0 Pain Points",
        "valueText": "Impact × Effort",
        "highlight": true
      },
      {
        "label": "3. MVP Solutions, Trade-offs & Guardrails",
        "valueText": "North Star"
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Interviewer",
      "prompt": "Great, thanks for coming today. Let's start the first question: How would you collect such data to create a da",
      "detail": "Great, thanks for coming today. Let's start the first question: How would you collect such data to create a dashboard for the State of Assam?\nBefore jumping into the solution, I’d like to clarify a few points:\n● End User: Who is the primary audience for this dashboard —\nfarmers, policymakers, or both?"
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "● Objective: Is the purpose mainly monitoring agriculture for decision-making (e.g., by the Chief Minister/off",
      "detail": "● Objective: Is the purpose mainly monitoring agriculture for decision-making (e.g., by the Chief Minister/officials) or also providing actionable insights directly to farmers?\n● Time Sensitivity: Do we need real-time updates (daily/hourly) or would periodic reporting (weekly/monthly) suffice?\n● Coverage: Should the dashboard cover only major crops or all agricultural activities (inputs, soil, irrigation, markets)?\n● Constraints: Are there any budget, technical, or data availability limitations we should be mindful of?"
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "Good questions. Let’s assume:",
      "detail": "Good questions. Let’s assume:\n● The primary audience is the Chief Minister and top government officials (though farmer benefits are indirect).\n● Objective: Enable quick decision-making on crop production, risks, and policy.\n● Time Sensitivity: Mix of near real-time (for weather, alerts) and periodic (for surveys, market analysis)."
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "● Coverage: Focus on major crops and high-impact indicators.",
      "detail": "● Coverage: Focus on major crops and high-impact indicators.\n● Constraints: Keep it simple, visual, and easy to interpret.\nTo ensure coverage, I’d bring together multiple sources:\n● Government Reports: Ministry of Agriculture, Assam Dept."
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "of Agriculture – crop production, policy, subsidies.",
      "detail": "of Agriculture – crop production, policy, subsidies.\n● Remote Sensing: Satellite imagery for land use, soil health, vegetation index.\n● Weather Data: Rainfall, temperature, extreme events – influencing crop yields.\n● Agricultural Surveys: Government/NGO surveys on crop performance, farmer demographics, land distribution."
    }
  ],
  "recommendations": [
    "Market Trends – Real-time prices, demand-supply",
    "Fertilizer & Chemical Use – Tracking natural vs.",
    "Actionable Insights – Notifications on pest outbreaks,",
    "Alerts Section – Critical banners at the top for immediate"
  ],
  "metricsAndGuardrails": {
    "northStar": "Core Task Completion / Weekly Active Value Users for media.net",
    "leading": [
      "Feature discovery & Day-1 adoption %",
      "7-day repeat usage rate"
    ],
    "guardrails": [
      "Core app latency / checkout conversion",
      "Support tickets & uninstall rate"
    ]
  },
  "synthesisScript": "For media.net’s Dashboard Design for Assam case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Market Trends – Real-time prices, demand-supply We will validate success via Core Task Completion / Weekly Active Value Users for media.net while guarding against Core app latency / checkout conversion.",
  "interviewerTrap": "Listing 8 shiny features for 'all users' without picking ONE priority persona, ranking pain points, or naming trade-offs!",
  "variations": [
    {
      "question": "How would your recommendation change if media.net had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Product Design",
    "correctFramework": "CIRCLES (Goal → Priority Persona → Journey Pain Points → Prioritized MVP → Trade-offs & Metrics)",
    "structureOptions": [
      {
        "label": "Clarify Goal → Pick 1 Priority Persona → Map Pain Points → Rank P0 Fixes → Define North Star & Trade-offs",
        "correct": true,
        "feedback": "Crisp CIRCLES flow! Selecting one persona shows real PM discipline."
      },
      {
        "label": "Suggest adding AI chatbots, AR, crypto rewards, and dark mode immediately",
        "correct": false,
        "feedback": "Buzzword feature-dumping without user pain grounding fails PM interviews."
      },
      {
        "label": "Run a supply-side Value Chain raw-material audit",
        "correct": false,
        "feedback": "That belongs to manufacturing Profitability, not Product Design/UX."
      }
    ],
    "decisionQuiz": {
      "question": "After identifying 3 user personas in a Product Design/Improvement case, what is the strongest move?",
      "options": [
        {
          "label": "Pick ONE primary persona for v1 based on frequency/pain and explain why others wait for v2",
          "correct": true,
          "feedback": "Exactly! Solving deeply for one segment beats building a mediocre tool for everyone."
        },
        {
          "label": "Design separate apps for all 3 simultaneously",
          "correct": false,
          "feedback": "Fragments engineering focus and UX coherence."
        },
        {
          "label": "Skip personas and start pricing tiers",
          "correct": false,
          "feedback": "You must understand user needs before designing or pricing."
        }
      ]
    }
  }
},
{
  "id": "ktc-54-nobroker-product-delivery-commotions",
  "title": "NoBroker Product Delivery Commotions",
  "company": "NoBroker",
  "source": "KTC Casebook 2026",
  "track": "Product",
  "category": "Product Design",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "NoBroker",
    "Product Design",
    "Product"
  ],
  "prompt": "Product Delivery Commotions You’re tasked with designing a product that reduces commotion and operational chaos in the food delivery ecosystem. How would you begin?",
  "clarifyingQuestions": [
    {
      "q": "What is the business objective we’re trying to achieve?",
      "a": "The goal is to enable faster, smoother, and more reliable deliveries.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Which stakeholder out of these is our priority ?",
      "a": "Customer satisfaction is the top most priority.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Understood. Meeting Customer satisfaction would in turn meet the goals of other stakeholders. So, are we building this for a new product or integrating into an existing platform?",
      "a": "Our client wants to integrate this into the existing platform.",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "CIRCLES (Goal → Priority Persona → Journey Pain Points → Prioritized MVP → Trade-offs & Metrics)",
  "coreEquation": "Product Impact = Priority Persona Frequency × P0 Pain Severity × Adoption %",
  "strategyOverview": "Approach NoBroker Product Delivery Commotions (NoBroker) using a Product Design structure: start by confirming the business objective and scope, decompose the problem cleanly along CIRCLES (Goal → Priority Persona → Journey Pain Points → Prioritized MVP → Trade-offs & Metrics), and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "NoBroker Product Delivery Commotions — User & Product Tree",
    "valueText": "Persona → Pain → Fix",
    "children": [
      {
        "label": "1. Priority Persona Selection (Pick 1 Beachhead)",
        "valueText": "High Freq / Pain",
        "highlight": true
      },
      {
        "label": "2. End-to-End Journey & P0 Pain Points",
        "valueText": "Impact × Effort",
        "highlight": true
      },
      {
        "label": "3. MVP Solutions, Trade-offs & Guardrails",
        "valueText": "North Star"
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Interviewer",
      "prompt": "Product Delivery Commotions You’re tasked with designing a product that reduces commotion and operational chao",
      "detail": "Product Delivery Commotions You’re tasked with designing a product that reduces commotion and operational chaos in the food delivery ecosystem. How would you begin?\nFirst, I’d like to know more about the client.\nOur client is an established food delivery platform, similar to Zomato or Swiggy. Operating Pan-India, and primarily serves urban areas.\nWhat is the business objective we’re trying to achieve?"
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "The goal is to enable faster, smoother, and more reliable deliveries.",
      "detail": "The goal is to enable faster, smoother, and more reliable deliveries.\nThe stakeholders involved are restaurants, riders and customers.\nWhich stakeholder out of these is our priority ?\nCustomer satisfaction is the top most priority."
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "Understood. Meeting Customer satisfaction would in turn meet the goals of other stakeholders. So, are we build",
      "detail": "Understood. Meeting Customer satisfaction would in turn meet the goals of other stakeholders. So, are we building this for a new product or integrating into an existing platform?\nOur client wants to integrate this into the existing platform.\nSo, are we building this only for tier-1 cities or are we aiming to implement this across the country?\nThe client wants to add this only in the tier-1 Cities."
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "As from my perspective, reducing chaos, optimizing kitchen workflows, and improving coordination across the st",
      "detail": "As from my perspective, reducing chaos, optimizing kitchen workflows, and improving coordination across the stakeholders would be the primary approach to solve the problem. I would like to get clarification on the current delivery flow. Order Placed → Restaurant Accepts → Order Preparation → Rider Assignment → Rider Pickup → Delivery. Is this correct?\nYes, your assumptions are correct. Proceed.\nProduct Delivery Commotions Alright, so based on this I can pick up a few pain points. Kitchen delays, Food quality degradation, Inaccurate ETAs, Delays due to Traffic, Incorrect or mix up between orders, Riders facing iss"
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "Yes, you can go on with the solutions.",
      "detail": "Yes, you can go on with the solutions.\nI would start by proposing an idea of building a system integrating a dynamic ETA system alongside riders and customer incentives, the integrated system would provide the customers with options, riders with better pays and restaurants with better management systems.\nHow would you implement these ideas?\nI would like to propose the idea of building a dynamic Estimated Time of Arrival (ETA) system that improves upon the already existing technology by taking restaurants prep time, weather, traffic and rider conditions into account, before predicting the ETA that would update eve"
    }
  ],
  "recommendations": [
    "Prioritize the highest-impact P0 bottleneck identified in NoBroker Product Delivery Commotions before secondary optimizations.",
    "Pilot the top intervention in a controlled cohort/region with clear North Star and guardrail tracking.",
    "Scale rollout only after verifying unit economics and zero adverse second-order effects."
  ],
  "metricsAndGuardrails": {
    "northStar": "Core Task Completion / Weekly Active Value Users for NoBroker",
    "leading": [
      "Feature discovery & Day-1 adoption %",
      "7-day repeat usage rate"
    ],
    "guardrails": [
      "Core app latency / checkout conversion",
      "Support tickets & uninstall rate"
    ]
  },
  "synthesisScript": "For NoBroker’s NoBroker Product Delivery Commotions case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Prioritize the highest-impact P0 bottleneck identified in NoBroker Product Delivery Commotions before secondary optimizations. We will validate success via Core Task Completion / Weekly Active Value Users for NoBroker while guarding against Core app latency / checkout conversion.",
  "interviewerTrap": "Listing 8 shiny features for 'all users' without picking ONE priority persona, ranking pain points, or naming trade-offs!",
  "variations": [
    {
      "question": "How would your recommendation change if NoBroker had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Product Design",
    "correctFramework": "CIRCLES (Goal → Priority Persona → Journey Pain Points → Prioritized MVP → Trade-offs & Metrics)",
    "structureOptions": [
      {
        "label": "Clarify Goal → Pick 1 Priority Persona → Map Pain Points → Rank P0 Fixes → Define North Star & Trade-offs",
        "correct": true,
        "feedback": "Crisp CIRCLES flow! Selecting one persona shows real PM discipline."
      },
      {
        "label": "Suggest adding AI chatbots, AR, crypto rewards, and dark mode immediately",
        "correct": false,
        "feedback": "Buzzword feature-dumping without user pain grounding fails PM interviews."
      },
      {
        "label": "Run a supply-side Value Chain raw-material audit",
        "correct": false,
        "feedback": "That belongs to manufacturing Profitability, not Product Design/UX."
      }
    ],
    "decisionQuiz": {
      "question": "After identifying 3 user personas in a Product Design/Improvement case, what is the strongest move?",
      "options": [
        {
          "label": "Pick ONE primary persona for v1 based on frequency/pain and explain why others wait for v2",
          "correct": true,
          "feedback": "Exactly! Solving deeply for one segment beats building a mediocre tool for everyone."
        },
        {
          "label": "Design separate apps for all 3 simultaneously",
          "correct": false,
          "feedback": "Fragments engineering focus and UX coherence."
        },
        {
          "label": "Skip personas and start pricing tiers",
          "correct": false,
          "feedback": "You must understand user needs before designing or pricing."
        }
      ]
    }
  }
},
{
  "id": "ktc-design-whatsapp",
  "title": "WhatsApp Product Design",
  "company": "Zomato - TPF",
  "source": "KTC Casebook 2026",
  "track": "Product",
  "category": "Product Design",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "Zomato - TPF",
    "Product Design",
    "Product"
  ],
  "prompt": "WhatsApp Design a new feature for WhatsApp to improve user engagement.",
  "clarifyingQuestions": [
    {
      "q": "1. Target audience: Are we designing for individual users, business users, or both?",
      "a": "2. Objective: Is the goal to increase daily active users (DAU), time spent on app, or revenue?",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "2. Objective: Is the goal to increase daily active users (DAU), time spent on app, or revenue?",
      "a": "3. Constraints: Should this feature be platform-agnostic (iOS, Android, Web) and privacy-compliant with WhatsApp’s end-to-end encryption?",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "3. Constraints: Should this feature be platform-agnostic (iOS, Android, Web) and privacy-compliant with WhatsApp’s end-to-end encryption?",
      "a": "4. Current pain points: Are there any known drop-off points or engagement metrics we are trying to improve specifically?",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "CIRCLES (Goal → Priority Persona → Journey Pain Points → Prioritized MVP → Trade-offs & Metrics)",
  "coreEquation": "Product Impact = Priority Persona Frequency × P0 Pain Severity × Adoption %",
  "strategyOverview": "Approach WhatsApp Product Design (Zomato - TPF) using a Product Design structure: start by confirming the business objective and scope, decompose the problem cleanly along CIRCLES (Goal → Priority Persona → Journey Pain Points → Prioritized MVP → Trade-offs & Metrics), and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "WhatsApp Product Design — User & Product Tree",
    "valueText": "Persona → Pain → Fix",
    "children": [
      {
        "label": "1. Priority Persona Selection (Pick 1 Beachhead)",
        "valueText": "High Freq / Pain",
        "highlight": true
      },
      {
        "label": "2. End-to-End Journey & P0 Pain Points",
        "valueText": "Impact × Effort",
        "highlight": true
      },
      {
        "label": "3. MVP Solutions, Trade-offs & Guardrails",
        "valueText": "North Star"
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Candidate",
      "prompt": "WhatsApp Design a new feature for WhatsApp to improve user engagement.",
      "detail": "WhatsApp Design a new feature for WhatsApp to improve user engagement.\nStep 1 — Clarify the Problem Statement Before diving into solutions, I’d like to clarify the scope:\n1. Target audience: Are we designing for individual users, business users, or both?\n2. Objective: Is the goal to increase daily active users (DAU), time spent on app, or revenue?"
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "3. Constraints: Should this feature be platform-agnostic (iOS, Android, Web) and privacy-compliant with WhatsA",
      "detail": "3. Constraints: Should this feature be platform-agnostic (iOS, Android, Web) and privacy-compliant with WhatsApp’s end-to-end encryption?\n4. Current pain points: Are there any known drop-off points or engagement metrics we are trying to improve specifically?\nGood questions. The focus is individual users , and the objective is to increase engagement without compromising privacy . Assume we want to maintain WhatsApp’s core positioning: fast, simple, and secure messaging .\nComment: The candidate clarifies the target, business goal, and constraints — ensuring they solve the right problem instead of jumping into rando"
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "Step 2 — Restate and Frame the Problem So our task is to introduce a feature that gets individual users to spe",
      "detail": "Step 2 — Restate and Frame the Problem So our task is to introduce a feature that gets individual users to spend more time on WhatsApp or come back more often , while ensuring:\n● No privacy compromise (E2E encryption stays).\n● No overloading the interface (WhatsApp is known for simplicity).\n● Global appeal (WhatsApp has a massive diverse user base)."
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "If this framing is correct, I can proceed with identifying user segments.",
      "detail": "If this framing is correct, I can proceed with identifying user segments.\nWhatsApp Correct. Go ahead.\nComment: Restating the problem aligns both parties and shows structured thinking. It also sets boundaries early.\nStep 3 — Identify Users and Their Needs WhatsApp has different user segments:"
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "1. Heavy chatters – teens, friend groups (seeking fun, constant sharing).",
      "detail": "1. Heavy chatters – teens, friend groups (seeking fun, constant sharing).\n2. Family connectors – parents, relatives (sharing updates, calls).\n3. Transactional users – coordinating tasks, logistics (high utility).\n4. Content consumers – who mainly view statuses but don’t chat much."
    }
  ],
  "recommendations": [
    "Retention uplift for passive users",
    "Privacy: Reactions remain E2E encrypted, only visible to",
    "Monetization (future): Engagement → better user",
    "Risks: Must avoid turning WhatsApp into a “social feed,”"
  ],
  "metricsAndGuardrails": {
    "northStar": "Core Task Completion / Weekly Active Value Users for Zomato - TPF",
    "leading": [
      "Feature discovery & Day-1 adoption %",
      "7-day repeat usage rate"
    ],
    "guardrails": [
      "Core app latency / checkout conversion",
      "Support tickets & uninstall rate"
    ]
  },
  "synthesisScript": "For Zomato - TPF’s WhatsApp Product Design case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Retention uplift for passive users We will validate success via Core Task Completion / Weekly Active Value Users for Zomato - TPF while guarding against Core app latency / checkout conversion.",
  "interviewerTrap": "Listing 8 shiny features for 'all users' without picking ONE priority persona, ranking pain points, or naming trade-offs!",
  "variations": [
    {
      "question": "How would your recommendation change if Zomato - TPF had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Product Design",
    "correctFramework": "CIRCLES (Goal → Priority Persona → Journey Pain Points → Prioritized MVP → Trade-offs & Metrics)",
    "structureOptions": [
      {
        "label": "Clarify Goal → Pick 1 Priority Persona → Map Pain Points → Rank P0 Fixes → Define North Star & Trade-offs",
        "correct": true,
        "feedback": "Crisp CIRCLES flow! Selecting one persona shows real PM discipline."
      },
      {
        "label": "Suggest adding AI chatbots, AR, crypto rewards, and dark mode immediately",
        "correct": false,
        "feedback": "Buzzword feature-dumping without user pain grounding fails PM interviews."
      },
      {
        "label": "Run a supply-side Value Chain raw-material audit",
        "correct": false,
        "feedback": "That belongs to manufacturing Profitability, not Product Design/UX."
      }
    ],
    "decisionQuiz": {
      "question": "After identifying 3 user personas in a Product Design/Improvement case, what is the strongest move?",
      "options": [
        {
          "label": "Pick ONE primary persona for v1 based on frequency/pain and explain why others wait for v2",
          "correct": true,
          "feedback": "Exactly! Solving deeply for one segment beats building a mediocre tool for everyone."
        },
        {
          "label": "Design separate apps for all 3 simultaneously",
          "correct": false,
          "feedback": "Fragments engineering focus and UX coherence."
        },
        {
          "label": "Skip personas and start pricing tiers",
          "correct": false,
          "feedback": "You must understand user needs before designing or pricing."
        }
      ]
    }
  }
},
{
  "id": "ktc-56-google-home-mini-design",
  "title": "Google Home Mini Design",
  "company": "Google - TPF",
  "source": "KTC Casebook 2026",
  "track": "Product",
  "category": "Product Design",
  "difficulty": 4,
  "isStarter": false,
  "tags": [
    "Google - TPF",
    "Product Design",
    "Product"
  ],
  "prompt": "Google Home Mini How would you redesign Google Home Mini to better serve blind users?",
  "clarifyingQuestions": [
    {
      "q": "What is the main objective of this redesign?",
      "a": "The main goal is to increase independence. Blind users should be able to set up and interact with the device without relying heavily on external assistance.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Got it. But since the device already works with voice, why do we need a special redesign for the blind?",
      "a": "Good question. The current version has limitations: strict memorization of voice commands, visual setup steps, and weak feedback to confirm actions.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "For many blind users especially the elderly accessibility should mean wherever they are , not tied to a fixed location.Could you also share which age groups we should focus on?",
      "a": "Broadly, we see two segments: young blind users (15–40) who are somewhat tech-adaptive, and older users (40+) who face mobility and learning curve challenges Thank you. If I were to prioritize, I’d focus on the elderly segment because they ",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "CIRCLES (Goal → Priority Persona → Journey Pain Points → Prioritized MVP → Trade-offs & Metrics)",
  "coreEquation": "Product Impact = Priority Persona Frequency × P0 Pain Severity × Adoption %",
  "strategyOverview": "Approach Google Home Mini Design (Google - TPF) using a Product Design structure: start by confirming the business objective and scope, decompose the problem cleanly along CIRCLES (Goal → Priority Persona → Journey Pain Points → Prioritized MVP → Trade-offs & Metrics), and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Google Home Mini Design — User & Product Tree",
    "valueText": "Persona → Pain → Fix",
    "children": [
      {
        "label": "1. Priority Persona Selection (Pick 1 Beachhead)",
        "valueText": "High Freq / Pain",
        "highlight": true
      },
      {
        "label": "2. End-to-End Journey & P0 Pain Points",
        "valueText": "Impact × Effort",
        "highlight": true
      },
      {
        "label": "3. MVP Solutions, Trade-offs & Guardrails",
        "valueText": "North Star"
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Interviewer",
      "prompt": "Google Home Mini How would you redesign Google Home Mini to better serve blind users?",
      "detail": "Google Home Mini How would you redesign Google Home Mini to better serve blind users?\nThank you. Before I jump into solutions, I’d like to clarify a few things.\nWhat is the main objective of this redesign?\nThe main goal is to increase independence. Blind users should be able to set up and interact with the device without relying heavily on external assistance."
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "Got it. But since the device already works with voice, why do we need a special redesign for the blind?",
      "detail": "Got it. But since the device already works with voice, why do we need a special redesign for the blind?\nGood question. The current version has limitations: strict memorization of voice commands, visual setup steps, and weak feedback to confirm actions.\nThat makes sense. I’d also add one more challenge: the non-mobility of the Google Home Mini makes it a liability for blind users. They cannot expected to repeatedly walk to the same room just to interact with the device.\nFor many blind users especially the elderly accessibility should mean wherever they are , not tied to a fixed location.Could you also share which "
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "Broadly, we see two segments: young blind users (15–40) who are somewhat tech-adaptive, and older users (40+) ",
      "detail": "Broadly, we see two segments: young blind users (15–40) who are somewhat tech-adaptive, and older users (40+) who face mobility and learning curve challenges Thank you. If I were to prioritize, I’d focus on the elderly segment because they face compounded difficulties such as non-mobility, memorization, and setup.\nNow in terms of solutions, I’d classify solutions into two categories:\nNew Dedicated Product → Google Stick ○ A smart walking stick with Google Assistant built in.\n○ Provides audio + haptic feedback on demand."
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "○ Portable, so users don’t need to return to a fixed be device.",
      "detail": "○ Portable, so users don’t need to return to a fixed be device.\nGoogle Home Mini Modular Extension → Google Gadget for Any Stick i. A small attachable module (like a portable mini speaker with mic + haptic motor). ii. Can clip onto any existing stick, making it cheaper and more scalable.\niii. Extends the Google Home ecosystem without forcing users to buy a new device.\nShort-term, high feasibility, high impact:"
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "Modular extension → quicker adoption, low cost.",
      "detail": "Modular extension → quicker adoption, low cost.\nLong-term, visionary:\nGoogle Stick → iconic product that positions Google as a leader in inclusive design. Other Enhancements for Both Approaches:\nTactile controls (physical raised buttons).Richer auditory confirmation.Setup through voice-guided onboarding, no visuals required."
    }
  ],
  "recommendations": [
    "Accessibility-specific satisfaction (CSAT/NPS).",
    "Low effort, high impact : haptic feedback + audio",
    "Medium effort, high impact : wearable or stick",
    "High effort, medium impact : redesigning the setup"
  ],
  "metricsAndGuardrails": {
    "northStar": "Core Task Completion / Weekly Active Value Users for Google - TPF",
    "leading": [
      "Feature discovery & Day-1 adoption %",
      "7-day repeat usage rate"
    ],
    "guardrails": [
      "Core app latency / checkout conversion",
      "Support tickets & uninstall rate"
    ]
  },
  "synthesisScript": "For Google - TPF’s Google Home Mini Design case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Accessibility-specific satisfaction (CSAT/NPS). We will validate success via Core Task Completion / Weekly Active Value Users for Google - TPF while guarding against Core app latency / checkout conversion.",
  "interviewerTrap": "Listing 8 shiny features for 'all users' without picking ONE priority persona, ranking pain points, or naming trade-offs!",
  "variations": [
    {
      "question": "How would your recommendation change if Google - TPF had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Product Design",
    "correctFramework": "CIRCLES (Goal → Priority Persona → Journey Pain Points → Prioritized MVP → Trade-offs & Metrics)",
    "structureOptions": [
      {
        "label": "Clarify Goal → Pick 1 Priority Persona → Map Pain Points → Rank P0 Fixes → Define North Star & Trade-offs",
        "correct": true,
        "feedback": "Crisp CIRCLES flow! Selecting one persona shows real PM discipline."
      },
      {
        "label": "Suggest adding AI chatbots, AR, crypto rewards, and dark mode immediately",
        "correct": false,
        "feedback": "Buzzword feature-dumping without user pain grounding fails PM interviews."
      },
      {
        "label": "Run a supply-side Value Chain raw-material audit",
        "correct": false,
        "feedback": "That belongs to manufacturing Profitability, not Product Design/UX."
      }
    ],
    "decisionQuiz": {
      "question": "After identifying 3 user personas in a Product Design/Improvement case, what is the strongest move?",
      "options": [
        {
          "label": "Pick ONE primary persona for v1 based on frequency/pain and explain why others wait for v2",
          "correct": true,
          "feedback": "Exactly! Solving deeply for one segment beats building a mediocre tool for everyone."
        },
        {
          "label": "Design separate apps for all 3 simultaneously",
          "correct": false,
          "feedback": "Fragments engineering focus and UX coherence."
        },
        {
          "label": "Skip personas and start pricing tiers",
          "correct": false,
          "feedback": "You must understand user needs before designing or pricing."
        }
      ]
    }
  }
},
{
  "id": "ktc-57-hilabs-healthcare-data-product",
  "title": "HiLabs Healthcare Data Product",
  "company": "HiLabs",
  "source": "KTC Casebook 2026",
  "track": "Product",
  "category": "Product Design",
  "difficulty": 4,
  "isStarter": false,
  "tags": [
    "HiLabs",
    "Product Design",
    "Product"
  ],
  "prompt": "Healthcare Data You are a product manager at HiLabs and your work is to secure healthcare data from your client.",
  "clarifyingQuestions": [
    {
      "q": "I'd like to understand the current state of your healthcare data security. Could you clarify if you're dealing with data stored on-premises, in the cloud, or both?",
      "a": "We primarily store data in the cloud, but there is also some legacy data on-premises.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "That’s helpful to know. Moving forward, I would focus on three main areas: data confidentiality, integrity, and availability. How sensitive is the data in question, and are there any specific regulatory requirements?",
      "a": "Yes, we must comply with HIPAA regulations, and the data includes both PHI (Protected Health Information) and PII (Personally Identifiable Information).",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "I would start by ensuring data encryption both at rest and in transit. Can you confirm if encryption is already implemented, and if so, which encryption standards are you using?",
      "a": "We currently use AES-256 for data at rest and TLS for data in transit.",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "CIRCLES (Goal → Priority Persona → Journey Pain Points → Prioritized MVP → Trade-offs & Metrics)",
  "coreEquation": "Product Impact = Priority Persona Frequency × P0 Pain Severity × Adoption %",
  "strategyOverview": "Approach HiLabs Healthcare Data Product (HiLabs) using a Product Design structure: start by confirming the business objective and scope, decompose the problem cleanly along CIRCLES (Goal → Priority Persona → Journey Pain Points → Prioritized MVP → Trade-offs & Metrics), and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "HiLabs Healthcare Data Product — User & Product Tree",
    "valueText": "Persona → Pain → Fix",
    "children": [
      {
        "label": "1. Priority Persona Selection (Pick 1 Beachhead)",
        "valueText": "High Freq / Pain",
        "highlight": true
      },
      {
        "label": "2. End-to-End Journey & P0 Pain Points",
        "valueText": "Impact × Effort",
        "highlight": true
      },
      {
        "label": "3. MVP Solutions, Trade-offs & Guardrails",
        "valueText": "North Star"
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Candidate",
      "prompt": "Healthcare Data You are a product manager at HiLabs and your work is to secure healthcare data from your clien",
      "detail": "Healthcare Data You are a product manager at HiLabs and your work is to secure healthcare data from your client.\nBefore proposing specific solutions, I would like to ask a few preliminary questions to better understand the context.\nI'd like to understand the current state of your healthcare data security. Could you clarify if you're dealing with data stored on-premises, in the cloud, or both?\nWe primarily store data in the cloud, but there is also some legacy data on-premises."
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "That’s helpful to know. Moving forward, I would focus on three main areas: data confidentiality, integrity, an",
      "detail": "That’s helpful to know. Moving forward, I would focus on three main areas: data confidentiality, integrity, and availability. How sensitive is the data in question, and are there any specific regulatory requirements?\nYes, we must comply with HIPAA regulations, and the data includes both PHI (Protected Health Information) and PII (Personally Identifiable Information).\nI would start by ensuring data encryption both at rest and in transit. Can you confirm if encryption is already implemented, and if so, which encryption standards are you using?\nWe currently use AES-256 for data at rest and TLS for data in transit."
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "In addition to encryption, I would recommend implementing access controls and regular audits. Are you currentl",
      "detail": "In addition to encryption, I would recommend implementing access controls and regular audits. Are you currently using role-based access control (RBAC), and how often are audits conducted on access logs?\nWe use RBAC, but audits are conducted semi-annually.\nGiven the sensitivity of healthcare data, I’d suggest increasing the frequency of audits to at least quarterly. It’s also important to monitor for anomalies continuously. Do you have any incident response plans in place in case of a data breach?\nHealthcare Data You're a Product Manager at HiLabs. How would you secure our client's healthcare data?"
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "I'd first clarify what data is collected, where it flows, who can access it, what contract/regulations apply, ",
      "detail": "I'd first clarify what data is collected, where it flows, who can access it, what contract/regulations apply, and what security outcome the client requires by when. Security is not one feature; it is a set of controls across the data lifecycle.\nThe data is primarily provider and claims data for network and quality analytics; some datasets contain patient-identifiable or PHI-related fields.\nUnderstood. Claims records can contain identifying information, so I would classify by actual field contents and role, not assume a dataset is safe merely because it's called “provider data.” Is the immediate concern ingestion,"
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "Has an incident prompted this or is there a new contract requirement?",
      "detail": "Has an incident prompted this or is there a new contract requirement?\nA large health-plan client is onboarding. It expects SOC 2 evidence and a HIPAA Business Associate Agreement, or BAA, as appropriate.\nWho touches the data, and what is the time constraint?\nInfrastructure teams, data scientists, analysts and customer-success staff. The client hopes to onboard in the next quarter."
    }
  ],
  "recommendations": [
    "Prioritize the highest-impact P0 bottleneck identified in HiLabs Healthcare Data Product before secondary optimizations.",
    "Pilot the top intervention in a controlled cohort/region with clear North Star and guardrail tracking.",
    "Scale rollout only after verifying unit economics and zero adverse second-order effects."
  ],
  "metricsAndGuardrails": {
    "northStar": "Core Task Completion / Weekly Active Value Users for HiLabs",
    "leading": [
      "Feature discovery & Day-1 adoption %",
      "7-day repeat usage rate"
    ],
    "guardrails": [
      "Core app latency / checkout conversion",
      "Support tickets & uninstall rate"
    ]
  },
  "synthesisScript": "For HiLabs’s HiLabs Healthcare Data Product case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Prioritize the highest-impact P0 bottleneck identified in HiLabs Healthcare Data Product before secondary optimizations. We will validate success via Core Task Completion / Weekly Active Value Users for HiLabs while guarding against Core app latency / checkout conversion.",
  "interviewerTrap": "Listing 8 shiny features for 'all users' without picking ONE priority persona, ranking pain points, or naming trade-offs!",
  "variations": [
    {
      "question": "How would your recommendation change if HiLabs had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Product Design",
    "correctFramework": "CIRCLES (Goal → Priority Persona → Journey Pain Points → Prioritized MVP → Trade-offs & Metrics)",
    "structureOptions": [
      {
        "label": "Clarify Goal → Pick 1 Priority Persona → Map Pain Points → Rank P0 Fixes → Define North Star & Trade-offs",
        "correct": true,
        "feedback": "Crisp CIRCLES flow! Selecting one persona shows real PM discipline."
      },
      {
        "label": "Suggest adding AI chatbots, AR, crypto rewards, and dark mode immediately",
        "correct": false,
        "feedback": "Buzzword feature-dumping without user pain grounding fails PM interviews."
      },
      {
        "label": "Run a supply-side Value Chain raw-material audit",
        "correct": false,
        "feedback": "That belongs to manufacturing Profitability, not Product Design/UX."
      }
    ],
    "decisionQuiz": {
      "question": "After identifying 3 user personas in a Product Design/Improvement case, what is the strongest move?",
      "options": [
        {
          "label": "Pick ONE primary persona for v1 based on frequency/pain and explain why others wait for v2",
          "correct": true,
          "feedback": "Exactly! Solving deeply for one segment beats building a mediocre tool for everyone."
        },
        {
          "label": "Design separate apps for all 3 simultaneously",
          "correct": false,
          "feedback": "Fragments engineering focus and UX coherence."
        },
        {
          "label": "Skip personas and start pricing tiers",
          "correct": false,
          "feedback": "You must understand user needs before designing or pricing."
        }
      ]
    }
  }
},
{
  "id": "ktc-rca-amazon-sales",
  "title": "Declining Sales at Amazon",
  "company": "Amazon",
  "source": "KTC Casebook 2026",
  "track": "Product",
  "category": "RCA",
  "difficulty": 2,
  "isStarter": false,
  "tags": [
    "Amazon",
    "RCA",
    "Product"
  ],
  "prompt": "Thanks for joining. We're seeing a 20% drop in sales at Amazon.",
  "clarifyingQuestions": [
    {
      "q": "Thanks for having me. To start, could you tell me when this decline began? Is it affecting specific regions or products?",
      "a": "It started about three months ago and is affecting multiple regions and product categories. Any initial thoughts?.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "It started about three months ago and is affecting multiple regions and product categories. Any initial thoughts?.",
      "a": "Is the decline specific to either the website or the mobile app?",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Is the decline specific to either the website or the mobile app?",
      "a": "No, it’s consistent across both platforms.",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "Data Sanity → 5-Way Segmentation → Funnel Step Isolation → Internal vs External Causes",
  "coreEquation": "Metric Drop = Data/Tracking Check + Internal (Tech/UX/Ops/Policy) + External (Rivals/Season/Macro)",
  "strategyOverview": "Approach Declining Sales at Amazon (Amazon) using a RCA structure: start by confirming the business objective and scope, decompose the problem cleanly along Data Sanity → 5-Way Segmentation → Funnel Step Isolation → Internal vs External Causes, and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Declining Sales at Amazon — RCA Tree",
    "valueText": "MECE Diagnosis",
    "children": [
      {
        "label": "1. Data & Metric Sanity",
        "valueText": "Sudden vs Gradual · Geo/OS Cut"
      },
      {
        "label": "2. Internal Drivers (Product, Tech, Ops, Pricing)",
        "valueText": "Funnel Drop Isolation",
        "highlight": true
      },
      {
        "label": "3. External Drivers (Competitors, Weather, Macro)",
        "valueText": "Market Context"
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Candidate",
      "prompt": "Thanks for joining. We're seeing a 20% drop in sales at Amazon.",
      "detail": "Thanks for joining. We're seeing a 20% drop in sales at Amazon.\nWe need to find the root cause.\nThanks for having me. To start, could you tell me when this decline began? Is it affecting specific regions or products?\nIt started about three months ago and is affecting multiple regions and product categories. Any initial thoughts?."
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "Is the decline specific to either the website or the mobile app?",
      "detail": "Is the decline specific to either the website or the mobile app?\nNo, it’s consistent across both platforms.\nAre certain products more affected than others, or is it uniform across all items?\nThe decline is uniform across all products.."
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "Is this an industry-wide issue, or is Amazon uniquely impacted?",
      "detail": "Is this an industry-wide issue, or is Amazon uniquely impacted?\nOnly Amazon is experiencing this decline.\nI’d consider both external and internal factors. Have there been any significant changes with competitors or in the market recently?\nNo, there haven’t been any major external changes."
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "So, the drop in sales seems to be tied to a decrease in orders.",
      "detail": "So, the drop in sales seems to be tied to a decrease in orders.\nHas there been any recent change to the app, website, or user experience?\nNo, there have been no changes on that front.\nHow about your supply chain has anything changed in manufacturing, procurement, storage, or delivery processes?"
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "The only change is that we’ve started using a new machine learning model to manage item storage in our local w",
      "detail": "The only change is that we’ve started using a new machine learning model to manage item storage in our local warehouses.\nCould you explain how this new ML model works?\nOur sales at Amazon have declined by 20%. What would you do?\nI'll first clarify the metric and comparison. By “sales,” do we mean number of orders, gross merchandise value or net revenue after refunds? Is the decline year-on-year, month-on-month or versus a forecast?"
    }
  ],
  "recommendations": [
    "Prioritize the highest-impact P0 bottleneck identified in Declining Sales at Amazon before secondary optimizations.",
    "Pilot the top intervention in a controlled cohort/region with clear North Star and guardrail tracking.",
    "Scale rollout only after verifying unit economics and zero adverse second-order effects."
  ],
  "metricsAndGuardrails": {
    "northStar": "Recovered Core Funnel Conversion / Retention Rate at Amazon",
    "leading": [
      "Step-level funnel conversion %",
      "OS/City segmented error & latency rate"
    ],
    "guardrails": [
      "Contribution margin / refund abuse rate",
      "Customer support ticket volume"
    ]
  },
  "synthesisScript": "For Amazon’s Declining Sales at Amazon case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Prioritize the highest-impact P0 bottleneck identified in Declining Sales at Amazon before secondary optimizations. We will validate success via Recovered Core Funnel Conversion / Retention Rate at Amazon while guarding against Contribution margin / refund abuse rate.",
  "interviewerTrap": "Jumping straight into discounts or UI redesigns before verifying data sanity, geo/OS segmentation, and exact funnel drop-off!",
  "variations": [
    {
      "question": "How would your recommendation change if Amazon had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "RCA",
    "correctFramework": "Data Sanity → 5-Way Segmentation → Funnel Step Isolation → Internal vs External Causes",
    "structureOptions": [
      {
        "label": "Check Data Sanity → Segment (Geo/Platform/Cohort) → Isolate Funnel Step → Separate Internal vs External Causes",
        "correct": true,
        "feedback": "Exact RCA gold standard! Always narrow down WHERE it broke before asking WHY."
      },
      {
        "label": "Launch a 30% discount campaign immediately to recover lost volume",
        "correct": false,
        "feedback": "Discounts mask technical/ops bugs and destroy unit economics without fixing root cause."
      },
      {
        "label": "Redesign the entire app homepage and brand logo",
        "correct": false,
        "feedback": "Never jump to full redesigns before isolating which exact step failed."
      }
    ],
    "decisionQuiz": {
      "question": "Before diagnosing 'Declining Sales at Amazon', what data sanity check prevents chasing false alarms?",
      "options": [
        {
          "label": "Verify sudden vs gradual timing, isolated geo/OS cuts, and whether tracking/logging definitions changed",
          "correct": true,
          "feedback": "Yes! Rules out logging bugs and pinpoints the affected slice."
        },
        {
          "label": "Ask for the CEO’s favorite color",
          "correct": false,
          "feedback": "Irrelevant to root-cause diagnosis."
        },
        {
          "label": "Compare against 10-year-old competitor stock prices",
          "correct": false,
          "feedback": "Too slow and disconnected from immediate funnel drops."
        }
      ]
    }
  }
},
{
  "id": "ktc-59-hilabs-plans-drop-rca",
  "title": "HiLabs Plans Drop RCA",
  "company": "HiLabs",
  "source": "KTC Casebook 2026",
  "track": "Product",
  "category": "RCA",
  "difficulty": 2,
  "isStarter": false,
  "tags": [
    "HiLabs",
    "RCA",
    "Product"
  ],
  "prompt": "HiLabs Plans HiLabs’ main customers are Health Plans, and we rely on them for patient-level data. However, some of this data is very sensitive and cannot be shared. As a Product Manager, how would you handle this challenge while ensuring accuracy of our reports?",
  "clarifyingQuestions": [
    {
      "q": "Before suggesting solutions, I’d like to clarify the context. Could you tell me more about HiLabs' core role in this ecosystem?",
      "a": "HiLabs provides AI-based technology that detects human errors in Electronic Health Records (EHRs) and helps Health Plans generate accurate reports.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Thank you. Could you also explain what Health Plans do and why they are so critical to our business model?",
      "a": "Health Plans are insurers. They manage the financial risk of their members’ healthcare by collecting premiums and paying for medical services. To function, they depend on accurate data for claims, risk assessment, and quality management. Th",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Click here to give a mock interview Understood. Finally, how flexible are they when it comes to data sharing — are they completely rigid, or open to alternatives?",
      "a": "They are very cautious due to compliance requirements but remain open if we can show a secure and reliable approach.",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "Data Sanity → 5-Way Segmentation → Funnel Step Isolation → Internal vs External Causes",
  "coreEquation": "Metric Drop = Data/Tracking Check + Internal (Tech/UX/Ops/Policy) + External (Rivals/Season/Macro)",
  "strategyOverview": "Approach HiLabs Plans Drop RCA (HiLabs) using a RCA structure: start by confirming the business objective and scope, decompose the problem cleanly along Data Sanity → 5-Way Segmentation → Funnel Step Isolation → Internal vs External Causes, and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "HiLabs Plans Drop RCA — RCA Tree",
    "valueText": "MECE Diagnosis",
    "children": [
      {
        "label": "1. Data & Metric Sanity",
        "valueText": "Sudden vs Gradual · Geo/OS Cut"
      },
      {
        "label": "2. Internal Drivers (Product, Tech, Ops, Pricing)",
        "valueText": "Funnel Drop Isolation",
        "highlight": true
      },
      {
        "label": "3. External Drivers (Competitors, Weather, Macro)",
        "valueText": "Market Context"
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Interviewer",
      "prompt": "HiLabs Plans HiLabs’ main customers are Health Plans, and we rely on them for patient-level data. However, som",
      "detail": "HiLabs Plans HiLabs’ main customers are Health Plans, and we rely on them for patient-level data. However, some of this data is very sensitive and cannot be shared. As a Product Manager, how would you handle this challenge while ensuring accuracy of our reports?\nBefore suggesting solutions, I’d like to clarify the context. Could you tell me more about HiLabs' core role in this ecosystem?\nHiLabs provides AI-based technology that detects human errors in Electronic Health Records (EHRs) and helps Health Plans generate accurate reports.\nThank you. Could you also explain what Health Plans do and why they are so critic"
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "Health Plans are insurers. They manage the financial risk of their members’ healthcare by collecting premiums ",
      "detail": "Health Plans are insurers. They manage the financial risk of their members’ healthcare by collecting premiums and paying for medical services. To function, they depend on accurate data for claims, risk assessment, and quality management. That makes clean EHR data vital.\nClick here to give a mock interview Understood. Finally, how flexible are they when it comes to data sharing — are they completely rigid, or open to alternatives?\nThey are very cautious due to compliance requirements but remain open if we can show a secure and reliable approach.\nOkay. Here’s how I’d approach the problem:"
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "1. Federated Learning – Train AI models directly within Health Plan environments so data never leaves their sy",
      "detail": "1. Federated Learning – Train AI models directly within Health Plan environments so data never leaves their systems.\n2. Data Anonymization – Strip personal identifiers but keep structures required for error detection.\n3. Synthetic Data Generation – Create artificial datasets that mirror the statistical properties and error patterns of real EHRs.\nInteresting approach. How would you ensure synthetic data is accurate and reliable?"
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "HiLabs Plans We’d build it iteratively. First, generate synthetic records using machine learning trained on pa",
      "detail": "HiLabs Plans We’d build it iteratively. First, generate synthetic records using machine learning trained on partial/anonymized datasets. Then, validate by comparing our model’s error-detection accuracy on synthetic data versus limited real samples. Keep refining until the performance gap is minimal. This way, synthetic data is “close enough” to reality to trust for testing and reporting.\nSo to confirm, HiLabs’ focus is on the accuracy and integrity of health records, even with limited access to raw data?\nExactly. Our value proposition remains ensuring accurate and reliable EHR reports, even if data access is rest"
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "Sensitive health data covers medical histories, biometrics, and health conditions. The upcoming Personal Data ",
      "detail": "Sensitive health data covers medical histories, biometrics, and health conditions. The upcoming Personal Data Protection Bill (PDPB) will strengthen the rules for handling such data, much like HIPAA in the U.S. This means any substitute method must maintain absolute compliance.\nClick here to give a mock interview And how would you measure the success of the strategies you just outlined?\nI’d measure across three dimensions:\n● Accuracy of Error Detection: Benchmark model accuracy on synthetic/anonymized data vs. original where possible, targeting close equivalence."
    }
  ],
  "recommendations": [
    "Synthetic Data Generation – Create artificial datasets",
    "Accuracy of Error Detection: Benchmark model",
    "Regulatory Compliance: Ensure all approaches align",
    "Partner Satisfaction: Positive feedback, willingness to"
  ],
  "metricsAndGuardrails": {
    "northStar": "Recovered Core Funnel Conversion / Retention Rate at HiLabs",
    "leading": [
      "Step-level funnel conversion %",
      "OS/City segmented error & latency rate"
    ],
    "guardrails": [
      "Contribution margin / refund abuse rate",
      "Customer support ticket volume"
    ]
  },
  "synthesisScript": "For HiLabs’s HiLabs Plans Drop RCA case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Synthetic Data Generation – Create artificial datasets We will validate success via Recovered Core Funnel Conversion / Retention Rate at HiLabs while guarding against Contribution margin / refund abuse rate.",
  "interviewerTrap": "Jumping straight into discounts or UI redesigns before verifying data sanity, geo/OS segmentation, and exact funnel drop-off!",
  "variations": [
    {
      "question": "How would your recommendation change if HiLabs had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "RCA",
    "correctFramework": "Data Sanity → 5-Way Segmentation → Funnel Step Isolation → Internal vs External Causes",
    "structureOptions": [
      {
        "label": "Check Data Sanity → Segment (Geo/Platform/Cohort) → Isolate Funnel Step → Separate Internal vs External Causes",
        "correct": true,
        "feedback": "Exact RCA gold standard! Always narrow down WHERE it broke before asking WHY."
      },
      {
        "label": "Launch a 30% discount campaign immediately to recover lost volume",
        "correct": false,
        "feedback": "Discounts mask technical/ops bugs and destroy unit economics without fixing root cause."
      },
      {
        "label": "Redesign the entire app homepage and brand logo",
        "correct": false,
        "feedback": "Never jump to full redesigns before isolating which exact step failed."
      }
    ],
    "decisionQuiz": {
      "question": "Before diagnosing 'HiLabs Plans Drop RCA', what data sanity check prevents chasing false alarms?",
      "options": [
        {
          "label": "Verify sudden vs gradual timing, isolated geo/OS cuts, and whether tracking/logging definitions changed",
          "correct": true,
          "feedback": "Yes! Rules out logging bugs and pinpoints the affected slice."
        },
        {
          "label": "Ask for the CEO’s favorite color",
          "correct": false,
          "feedback": "Irrelevant to root-cause diagnosis."
        },
        {
          "label": "Compare against 10-year-old competitor stock prices",
          "correct": false,
          "feedback": "Too slow and disconnected from immediate funnel drops."
        }
      ]
    }
  }
},
{
  "id": "ktc-60-meesho-orders-decline-rca",
  "title": "Meesho Orders Decline RCA",
  "company": "Meesho",
  "source": "KTC Casebook 2026",
  "track": "Product",
  "category": "RCA",
  "difficulty": 2,
  "isStarter": false,
  "tags": [
    "Meesho",
    "RCA",
    "Product"
  ],
  "prompt": "Orders Decline Hey! Let’s say that you are a PM at Meesho and you have noticed that the orders are declining. Your task is to identify the root cause for the same.",
  "clarifyingQuestions": [
    {
      "q": "Are there any specific product categories or types of orders that are experiencing greater decline, like electronics, clothing, or groceries?",
      "a": "No, we're looking at this from a broad perspective, so consider all product categories.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Are we considering the decline in orders placed through our website, app or both?",
      "a": "Take the decline in the orders placed through both our app and website.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Is there a decline in the number of customers visiting our Click here to give a mock interview app/website or is there a decline in just the number of orders placed?",
      "a": "It can be said that there is a decline in both the number of customers and the number of orders placed.",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "Data Sanity → 5-Way Segmentation → Funnel Step Isolation → Internal vs External Causes",
  "coreEquation": "Metric Drop = Data/Tracking Check + Internal (Tech/UX/Ops/Policy) + External (Rivals/Season/Macro)",
  "strategyOverview": "Approach Meesho Orders Decline RCA (Meesho) using a RCA structure: start by confirming the business objective and scope, decompose the problem cleanly along Data Sanity → 5-Way Segmentation → Funnel Step Isolation → Internal vs External Causes, and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Meesho Orders Decline RCA — RCA Tree",
    "valueText": "MECE Diagnosis",
    "children": [
      {
        "label": "1. Data & Metric Sanity",
        "valueText": "Sudden vs Gradual · Geo/OS Cut"
      },
      {
        "label": "2. Internal Drivers (Product, Tech, Ops, Pricing)",
        "valueText": "Funnel Drop Isolation",
        "highlight": true
      },
      {
        "label": "3. External Drivers (Competitors, Weather, Macro)",
        "valueText": "Market Context"
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Candidate",
      "prompt": "Orders Decline Hey! Let’s say that you are a PM at Meesho and you have noticed that the orders are declining. ",
      "detail": "Orders Decline Hey! Let’s say that you are a PM at Meesho and you have noticed that the orders are declining. Your task is to identify the root cause for the same.\nBefore beginning, I'd like to clarify a few things first.\nAre there any specific product categories or types of orders that are experiencing greater decline, like electronics, clothing, or groceries?\nNo, we're looking at this from a broad perspective, so consider all product categories."
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "Are we considering the decline in orders placed through our website, app or both?",
      "detail": "Are we considering the decline in orders placed through our website, app or both?\nTake the decline in the orders placed through both our app and website.\nIs there a decline in the number of customers visiting our Click here to give a mock interview app/website or is there a decline in just the number of orders placed?\nIt can be said that there is a decline in both the number of customers and the number of orders placed."
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "Has the decline in orders been a gradual trend over time, or did it happen suddenly?",
      "detail": "Has the decline in orders been a gradual trend over time, or did it happen suddenly?\nThis trend started to become noticeable about two months ago.\nIs this decline across the entire country, or is it localised to specific regions?\nIt is happening nationwide."
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "Is this an industry wide phenomenon or only restricted to Meesho?",
      "detail": "Is this an industry wide phenomenon or only restricted to Meesho?\nThis is restricted to Meesho.\nOrders Decline PS — Problem Statement: “Orders are declining at Meesho. Find the root cause and recommend corrective actions.” Company: Meesho Pattern: Root-cause analysis / repeat-purchase and logistics Difficulty: Medium Objective: Diagnose falling repeat purchases and determine whether a logistics-partner change caused the decline.\nMeesho's orders have been declining. How would you approach this?"
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "First, when you say orders, are we measuring placed orders, successfully delivered orders or GMV? And for how ",
      "detail": "First, when you say orders, are we measuring placed orders, successfully delivered orders or GMV? And for how long has the issue persisted?\nNumber of orders placed is falling, with GMV falling proportionally. It has been a gradual decline over roughly two months.\nThat suggests a volume problem rather than lower basket value, although I would verify exact mix effects. Does the decline affect all product categories?\nMostly fashion and home; electronics and accessories are relatively stable."
    }
  ],
  "recommendations": [
    "Prioritize the highest-impact P0 bottleneck identified in Meesho Orders Decline RCA before secondary optimizations.",
    "Pilot the top intervention in a controlled cohort/region with clear North Star and guardrail tracking.",
    "Scale rollout only after verifying unit economics and zero adverse second-order effects."
  ],
  "metricsAndGuardrails": {
    "northStar": "Recovered Core Funnel Conversion / Retention Rate at Meesho",
    "leading": [
      "Step-level funnel conversion %",
      "OS/City segmented error & latency rate"
    ],
    "guardrails": [
      "Contribution margin / refund abuse rate",
      "Customer support ticket volume"
    ]
  },
  "synthesisScript": "For Meesho’s Meesho Orders Decline RCA case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Prioritize the highest-impact P0 bottleneck identified in Meesho Orders Decline RCA before secondary optimizations. We will validate success via Recovered Core Funnel Conversion / Retention Rate at Meesho while guarding against Contribution margin / refund abuse rate.",
  "interviewerTrap": "Jumping straight into discounts or UI redesigns before verifying data sanity, geo/OS segmentation, and exact funnel drop-off!",
  "variations": [
    {
      "question": "How would your recommendation change if Meesho had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "RCA",
    "correctFramework": "Data Sanity → 5-Way Segmentation → Funnel Step Isolation → Internal vs External Causes",
    "structureOptions": [
      {
        "label": "Check Data Sanity → Segment (Geo/Platform/Cohort) → Isolate Funnel Step → Separate Internal vs External Causes",
        "correct": true,
        "feedback": "Exact RCA gold standard! Always narrow down WHERE it broke before asking WHY."
      },
      {
        "label": "Launch a 30% discount campaign immediately to recover lost volume",
        "correct": false,
        "feedback": "Discounts mask technical/ops bugs and destroy unit economics without fixing root cause."
      },
      {
        "label": "Redesign the entire app homepage and brand logo",
        "correct": false,
        "feedback": "Never jump to full redesigns before isolating which exact step failed."
      }
    ],
    "decisionQuiz": {
      "question": "Before diagnosing 'Meesho Orders Decline RCA', what data sanity check prevents chasing false alarms?",
      "options": [
        {
          "label": "Verify sudden vs gradual timing, isolated geo/OS cuts, and whether tracking/logging definitions changed",
          "correct": true,
          "feedback": "Yes! Rules out logging bugs and pinpoints the affected slice."
        },
        {
          "label": "Ask for the CEO’s favorite color",
          "correct": false,
          "feedback": "Irrelevant to root-cause diagnosis."
        },
        {
          "label": "Compare against 10-year-old competitor stock prices",
          "correct": false,
          "feedback": "Too slow and disconnected from immediate funnel drops."
        }
      ]
    }
  }
},
{
  "id": "ktc-61-hilabs-ad-tech-platform-rca",
  "title": "HiLabs Ad Tech Platform RCA",
  "company": "HiLabs",
  "source": "KTC Casebook 2026",
  "track": "Product",
  "category": "RCA",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "HiLabs",
    "RCA",
    "Product"
  ],
  "prompt": "Ad Tech Platform We have a campaign where both CTR and CVR are underperforming. How would you structure your investigation?",
  "clarifyingQuestions": [
    {
      "q": "Let's start with Pre-Click. What are the three primary suspects for a low CTR?",
      "a": "The main causes would be poor Ad Creative that doesn't capture attention, incorrect Audience & Targeting , or low-quality Placement & Delivery .",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Our reports show targeting is correct and placements are on premium sites. Yet, CTR is still low. What does this suggest?",
      "a": "That suggests the issue isn’t traffic quality it’s likely the Ad Creative . If the creative fails to capture attention or mismatches the audience’s expectation, CTR will suffer.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Click here to give a mock interview If the ad creative is the weak link, how could that also explain the severe drop in CVR Post-Click?",
      "a": "Yes. That points to a message mismatch . For example, the ad might promise “50% Off Today!” but when users click, the landing page doesn’t confirm that offer. Users feel misled and drop off, which drags down CVR.",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "Data Sanity → 5-Way Segmentation → Funnel Step Isolation → Internal vs External Causes",
  "coreEquation": "Metric Drop = Data/Tracking Check + Internal (Tech/UX/Ops/Policy) + External (Rivals/Season/Macro)",
  "strategyOverview": "Approach HiLabs Ad Tech Platform RCA (HiLabs) using a RCA structure: start by confirming the business objective and scope, decompose the problem cleanly along Data Sanity → 5-Way Segmentation → Funnel Step Isolation → Internal vs External Causes, and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "HiLabs Ad Tech Platform RCA — RCA Tree",
    "valueText": "MECE Diagnosis",
    "children": [
      {
        "label": "1. Data & Metric Sanity",
        "valueText": "Sudden vs Gradual · Geo/OS Cut"
      },
      {
        "label": "2. Internal Drivers (Product, Tech, Ops, Pricing)",
        "valueText": "Funnel Drop Isolation",
        "highlight": true
      },
      {
        "label": "3. External Drivers (Competitors, Weather, Macro)",
        "valueText": "Market Context"
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Interviewer",
      "prompt": "Ad Tech Platform We have a campaign where both CTR and CVR are underperforming. How would you structure your i",
      "detail": "Ad Tech Platform We have a campaign where both CTR and CVR are underperforming. How would you structure your investigation?\nI'd split the investigation into two parts, following the user journey: Pre-Click Issues causing the low CTR, and Post-Click Issues causing the low CVR.\nLet's start with Pre-Click. What are the three primary suspects for a low CTR?\nThe main causes would be poor Ad Creative that doesn't capture attention, incorrect Audience & Targeting , or low-quality Placement & Delivery ."
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "Our reports show targeting is correct and placements are on premium sites. Yet, CTR is still low. What does th",
      "detail": "Our reports show targeting is correct and placements are on premium sites. Yet, CTR is still low. What does this suggest?\nThat suggests the issue isn’t traffic quality it’s likely the Ad Creative . If the creative fails to capture attention or mismatches the audience’s expectation, CTR will suffer.\nClick here to give a mock interview If the ad creative is the weak link, how could that also explain the severe drop in CVR Post-Click?\nYes. That points to a message mismatch . For example, the ad might promise “50% Off Today!” but when users click, the landing page doesn’t confirm that offer. Users feel misled and dro"
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "So the investigation now moves to Post-Click. What are the two main categories of problems on the landing page",
      "detail": "So the investigation now moves to Post-Click. What are the two main categories of problems on the landing page?\nTwo main categories:\n● Landing Page Experience (slow load, poor mobile UX, unclear CTA, or message mismatch).\n● Technical & Tracking Issues (e.g., conversions not being recorded properly)."
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "Assume tracking is fine. What elements of landing page experience would you analyze?",
      "detail": "Assume tracking is fine. What elements of landing page experience would you analyze?\nAd Tech Platform I'd analyze the page's load speed, mobile usability, the clarity of the offer, and the prominence of the call-to-action (CTA) button .\nUpon review, we see the landing page’s main image is huge, causing very slow load times on mobile. Is this our root cause?\nYes. A slow load time is a major driver of drop-offs. Users click the ad but abandon before the page even loads, leaving zero chance of conversion . This clearly explains the low CVR."
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "What is your immediate action plan to fix this?",
      "detail": "What is your immediate action plan to fix this?\nThe immediate priority is to optimize the landing page . I would compress the images, simplify the code, and ensure the page loads in under three seconds on a standard mobile connection.\nAnd what's the long-term solution to prevent this?\nClick here to give a mock interview Long-term fixes:"
    }
  ],
  "recommendations": [
    "Technical & Tracking Issues (e.g., conversions not",
    "Build a pre-launch checklist for all campaigns with",
    "Automate page speed monitoring with alerts when load",
    "Standardize creatives and landing pages so messaging"
  ],
  "metricsAndGuardrails": {
    "northStar": "Recovered Core Funnel Conversion / Retention Rate at HiLabs",
    "leading": [
      "Step-level funnel conversion %",
      "OS/City segmented error & latency rate"
    ],
    "guardrails": [
      "Contribution margin / refund abuse rate",
      "Customer support ticket volume"
    ]
  },
  "synthesisScript": "For HiLabs’s HiLabs Ad Tech Platform RCA case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Technical & Tracking Issues (e.g., conversions not We will validate success via Recovered Core Funnel Conversion / Retention Rate at HiLabs while guarding against Contribution margin / refund abuse rate.",
  "interviewerTrap": "Jumping straight into discounts or UI redesigns before verifying data sanity, geo/OS segmentation, and exact funnel drop-off!",
  "variations": [
    {
      "question": "How would your recommendation change if HiLabs had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "RCA",
    "correctFramework": "Data Sanity → 5-Way Segmentation → Funnel Step Isolation → Internal vs External Causes",
    "structureOptions": [
      {
        "label": "Check Data Sanity → Segment (Geo/Platform/Cohort) → Isolate Funnel Step → Separate Internal vs External Causes",
        "correct": true,
        "feedback": "Exact RCA gold standard! Always narrow down WHERE it broke before asking WHY."
      },
      {
        "label": "Launch a 30% discount campaign immediately to recover lost volume",
        "correct": false,
        "feedback": "Discounts mask technical/ops bugs and destroy unit economics without fixing root cause."
      },
      {
        "label": "Redesign the entire app homepage and brand logo",
        "correct": false,
        "feedback": "Never jump to full redesigns before isolating which exact step failed."
      }
    ],
    "decisionQuiz": {
      "question": "Before diagnosing 'HiLabs Ad Tech Platform RCA', what data sanity check prevents chasing false alarms?",
      "options": [
        {
          "label": "Verify sudden vs gradual timing, isolated geo/OS cuts, and whether tracking/logging definitions changed",
          "correct": true,
          "feedback": "Yes! Rules out logging bugs and pinpoints the affected slice."
        },
        {
          "label": "Ask for the CEO’s favorite color",
          "correct": false,
          "feedback": "Irrelevant to root-cause diagnosis."
        },
        {
          "label": "Compare against 10-year-old competitor stock prices",
          "correct": false,
          "feedback": "Too slow and disconnected from immediate funnel drops."
        }
      ]
    }
  }
},
{
  "id": "ktc-62-declining-orders-at-zomato",
  "title": "Declining Orders at Zomato",
  "company": "Zomato",
  "source": "KTC Casebook 2026",
  "track": "Product",
  "category": "RCA",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "Zomato",
    "RCA",
    "Product"
  ],
  "prompt": "Hello, the case we need to discuss is that Zomato has been experiencing a decline in food delivery orders. I need your help to analyze the situation and determine the possible root cause.",
  "clarifyingQuestions": [
    {
      "q": "To clarify, are you referring specifically to food delivery orders, or does this include dine-in and table booking services as well?",
      "a": "I’m referring specifically to food delivery orders.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "How long has Zomato been facing this issue?",
      "a": "The decline has been ongoing for the past three months.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Is this problem unique to Zomato, or is it an industry-wide issue?",
      "a": "It's an industry-wide problem.",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "Data Sanity → 5-Way Segmentation → Funnel Step Isolation → Internal vs External Causes",
  "coreEquation": "Metric Drop = Data/Tracking Check + Internal (Tech/UX/Ops/Policy) + External (Rivals/Season/Macro)",
  "strategyOverview": "Approach Declining Orders at Zomato (Zomato) using a RCA structure: start by confirming the business objective and scope, decompose the problem cleanly along Data Sanity → 5-Way Segmentation → Funnel Step Isolation → Internal vs External Causes, and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Declining Orders at Zomato — RCA Tree",
    "valueText": "MECE Diagnosis",
    "children": [
      {
        "label": "1. Data & Metric Sanity",
        "valueText": "Sudden vs Gradual · Geo/OS Cut"
      },
      {
        "label": "2. Internal Drivers (Product, Tech, Ops, Pricing)",
        "valueText": "Funnel Drop Isolation",
        "highlight": true
      },
      {
        "label": "3. External Drivers (Competitors, Weather, Macro)",
        "valueText": "Market Context"
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Candidate",
      "prompt": "Hello, the case we need to discuss is that Zomato has been experiencing a decline in food delivery orders. I n",
      "detail": "Hello, the case we need to discuss is that Zomato has been experiencing a decline in food delivery orders. I need your help to analyze the situation and determine the possible root cause.\nTo clarify, are you referring specifically to food delivery orders, or does this include dine-in and table booking services as well?\nI’m referring specifically to food delivery orders.\nHow long has Zomato been facing this issue?"
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "The decline has been ongoing for the past three months.",
      "detail": "The decline has been ongoing for the past three months.\nIs this problem unique to Zomato, or is it an industry-wide issue?\nIt's an industry-wide problem.\nIs the decline affecting specific types of food, such as pizzas, burgers, or Chinese cuisine, or is it across the board?"
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "Click here to give a mock interview The decline is uniform across all types of food.",
      "detail": "Click here to give a mock interview The decline is uniform across all types of food.\nIs this issue widespread across India, or is it concentrated in a particular region?\nThe decline is specifically happening in the Delhi-NCR region.\nHas the decrease in orders been more significant on the app or the website, or is it consistent across both platforms?"
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "The decrease in orders is consistent across both platforms—there’s no particular difference.",
      "detail": "The decrease in orders is consistent across both platforms—there’s no particular difference.\nWhen considering orders, they can come from either new customers or returning ones. Has the rate of new customer acquisitions decreased, or is the issue more related to retaining existing customers?\nThere has been a decrease in both new customer acquisitions and retention rates.\nNew customer acquisition often depends on factors like brand visibility, ease of use of the app or website, and the simplicity of the user journey. Has there been any recent change in the app or website that might have affected user experience? Ad"
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "Yes, the app has undergone a modification recently. However, there hasn't been any issue with brand visibility",
      "detail": "Yes, the app has undergone a modification recently. However, there hasn't been any issue with brand visibility—our marketing team is continuing its efforts as usual.\nThis suggests that new customers may be finding the app more difficult to use after the modification. As for retention rates, they can be influenced by service quality and competition. Has there been any change in customer satisfaction scores?\nThe Customer Satisfaction (CSAT) score for service remains good, but there has been some dissatisfaction with the pricing from a few major restaurants.\nClick here to give a mock interview I’d start by reviewing"
    }
  ],
  "recommendations": [
    "Prioritize the highest-impact P0 bottleneck identified in Declining Orders at Zomato before secondary optimizations.",
    "Pilot the top intervention in a controlled cohort/region with clear North Star and guardrail tracking.",
    "Scale rollout only after verifying unit economics and zero adverse second-order effects."
  ],
  "metricsAndGuardrails": {
    "northStar": "Recovered Core Funnel Conversion / Retention Rate at Zomato",
    "leading": [
      "Step-level funnel conversion %",
      "OS/City segmented error & latency rate"
    ],
    "guardrails": [
      "Contribution margin / refund abuse rate",
      "Customer support ticket volume"
    ]
  },
  "synthesisScript": "For Zomato’s Declining Orders at Zomato case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Prioritize the highest-impact P0 bottleneck identified in Declining Orders at Zomato before secondary optimizations. We will validate success via Recovered Core Funnel Conversion / Retention Rate at Zomato while guarding against Contribution margin / refund abuse rate.",
  "interviewerTrap": "Jumping straight into discounts or UI redesigns before verifying data sanity, geo/OS segmentation, and exact funnel drop-off!",
  "variations": [
    {
      "question": "How would your recommendation change if Zomato had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "RCA",
    "correctFramework": "Data Sanity → 5-Way Segmentation → Funnel Step Isolation → Internal vs External Causes",
    "structureOptions": [
      {
        "label": "Check Data Sanity → Segment (Geo/Platform/Cohort) → Isolate Funnel Step → Separate Internal vs External Causes",
        "correct": true,
        "feedback": "Exact RCA gold standard! Always narrow down WHERE it broke before asking WHY."
      },
      {
        "label": "Launch a 30% discount campaign immediately to recover lost volume",
        "correct": false,
        "feedback": "Discounts mask technical/ops bugs and destroy unit economics without fixing root cause."
      },
      {
        "label": "Redesign the entire app homepage and brand logo",
        "correct": false,
        "feedback": "Never jump to full redesigns before isolating which exact step failed."
      }
    ],
    "decisionQuiz": {
      "question": "Before diagnosing 'Declining Orders at Zomato', what data sanity check prevents chasing false alarms?",
      "options": [
        {
          "label": "Verify sudden vs gradual timing, isolated geo/OS cuts, and whether tracking/logging definitions changed",
          "correct": true,
          "feedback": "Yes! Rules out logging bugs and pinpoints the affected slice."
        },
        {
          "label": "Ask for the CEO’s favorite color",
          "correct": false,
          "feedback": "Irrelevant to root-cause diagnosis."
        },
        {
          "label": "Compare against 10-year-old competitor stock prices",
          "correct": false,
          "feedback": "Too slow and disconnected from immediate funnel drops."
        }
      ]
    }
  }
},
{
  "id": "ktc-63-myntra-orders-decline-rca",
  "title": "Myntra Orders Decline RCA",
  "company": "media.net",
  "source": "KTC Casebook 2026",
  "track": "Product",
  "category": "RCA",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "media.net",
    "RCA",
    "Product"
  ],
  "prompt": "Myntra Orders Your client is Myntra, currently experiencing a 20% decline in orders. As a Product Manager, the client has requested a root cause analysis.",
  "clarifyingQuestions": [
    {
      "q": "To thoroughly understand this decline, I would like to begin by asking a few clarifying questions. Is this decline exclusive to our client?",
      "a": "Yes, the decline is specific to our client.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Could you please provide some insights into the duration of this issue? Specifically, how long has the client been experiencing this decline?",
      "a": "The decline has been progressively increasing over the past few years.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Has this decline been observed across both the website and the app channels?",
      "a": "Yes, the decline in orders is evident on both the website and the app.",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "Data Sanity → 5-Way Segmentation → Funnel Step Isolation → Internal vs External Causes",
  "coreEquation": "Metric Drop = Data/Tracking Check + Internal (Tech/UX/Ops/Policy) + External (Rivals/Season/Macro)",
  "strategyOverview": "Approach Myntra Orders Decline RCA (media.net) using a RCA structure: start by confirming the business objective and scope, decompose the problem cleanly along Data Sanity → 5-Way Segmentation → Funnel Step Isolation → Internal vs External Causes, and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Myntra Orders Decline RCA — RCA Tree",
    "valueText": "MECE Diagnosis",
    "children": [
      {
        "label": "1. Data & Metric Sanity",
        "valueText": "Sudden vs Gradual · Geo/OS Cut"
      },
      {
        "label": "2. Internal Drivers (Product, Tech, Ops, Pricing)",
        "valueText": "Funnel Drop Isolation",
        "highlight": true
      },
      {
        "label": "3. External Drivers (Competitors, Weather, Macro)",
        "valueText": "Market Context"
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Candidate",
      "prompt": "Myntra Orders Your client is Myntra, currently experiencing a 20% decline in orders. As a Product Manager, the",
      "detail": "Myntra Orders Your client is Myntra, currently experiencing a 20% decline in orders. As a Product Manager, the client has requested a root cause analysis.\nTo thoroughly understand this decline, I would like to begin by asking a few clarifying questions. Is this decline exclusive to our client?\nYes, the decline is specific to our client.\nCould you please provide some insights into the duration of this issue? Specifically, how long has the client been experiencing this decline?"
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "The decline has been progressively increasing over the past few years.",
      "detail": "The decline has been progressively increasing over the past few years.\nHas this decline been observed across both the website and the app channels?\nYes, the decline in orders is evident on both the website and the app.\nClick here to give a mock interview Have there been any recent modifications or updates to the app and website that could potentially impact the user experience?"
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "No,there were no modification or updates.",
      "detail": "No,there were no modification or updates.\nHow are our suppliers distributed? What percentage of our suppliers are locally based?\nNo significant changes have been made to the client’s marketing strategy. On the contrary, the client has recently introduced new offers to attract customers.\nAre there any new market entrants that could potentially influence our client’s order volume?"
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "No, there has been no new entry into the market that could impact our client’s orders.",
      "detail": "No, there has been no new entry into the market that could impact our client’s orders.\nHave there been any significant changes in our competitive environment that can possibly lead to decline in orders?\nMyntra Orders No, our competitors have not brought about any significant changes to impact our orders.\nHave there been any recent challenges or disruptions in the logistics operations that might be impacting order fulfillment?"
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "Yes, there have been a few logistical challenges recently, particularly with some delays in order processing a",
      "detail": "Yes, there have been a few logistical challenges recently, particularly with some delays in order processing and delivery times.\nTo explore this further, has there been any observation or feedback indicating issues with the product inspection processes during these logistics operations?\nYes, there have been some inconsistencies in product inspection processes.\nGiven these inconsistencies, are there any underlying issues from the supply side that can impact the products before they reach the inspection stage?"
    }
  ],
  "recommendations": [
    "Prioritize the highest-impact P0 bottleneck identified in Myntra Orders Decline RCA before secondary optimizations.",
    "Pilot the top intervention in a controlled cohort/region with clear North Star and guardrail tracking.",
    "Scale rollout only after verifying unit economics and zero adverse second-order effects."
  ],
  "metricsAndGuardrails": {
    "northStar": "Recovered Core Funnel Conversion / Retention Rate at media.net",
    "leading": [
      "Step-level funnel conversion %",
      "OS/City segmented error & latency rate"
    ],
    "guardrails": [
      "Contribution margin / refund abuse rate",
      "Customer support ticket volume"
    ]
  },
  "synthesisScript": "For media.net’s Myntra Orders Decline RCA case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Prioritize the highest-impact P0 bottleneck identified in Myntra Orders Decline RCA before secondary optimizations. We will validate success via Recovered Core Funnel Conversion / Retention Rate at media.net while guarding against Contribution margin / refund abuse rate.",
  "interviewerTrap": "Jumping straight into discounts or UI redesigns before verifying data sanity, geo/OS segmentation, and exact funnel drop-off!",
  "variations": [
    {
      "question": "How would your recommendation change if media.net had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "RCA",
    "correctFramework": "Data Sanity → 5-Way Segmentation → Funnel Step Isolation → Internal vs External Causes",
    "structureOptions": [
      {
        "label": "Check Data Sanity → Segment (Geo/Platform/Cohort) → Isolate Funnel Step → Separate Internal vs External Causes",
        "correct": true,
        "feedback": "Exact RCA gold standard! Always narrow down WHERE it broke before asking WHY."
      },
      {
        "label": "Launch a 30% discount campaign immediately to recover lost volume",
        "correct": false,
        "feedback": "Discounts mask technical/ops bugs and destroy unit economics without fixing root cause."
      },
      {
        "label": "Redesign the entire app homepage and brand logo",
        "correct": false,
        "feedback": "Never jump to full redesigns before isolating which exact step failed."
      }
    ],
    "decisionQuiz": {
      "question": "Before diagnosing 'Myntra Orders Decline RCA', what data sanity check prevents chasing false alarms?",
      "options": [
        {
          "label": "Verify sudden vs gradual timing, isolated geo/OS cuts, and whether tracking/logging definitions changed",
          "correct": true,
          "feedback": "Yes! Rules out logging bugs and pinpoints the affected slice."
        },
        {
          "label": "Ask for the CEO’s favorite color",
          "correct": false,
          "feedback": "Irrelevant to root-cause diagnosis."
        },
        {
          "label": "Compare against 10-year-old competitor stock prices",
          "correct": false,
          "feedback": "Too slow and disconnected from immediate funnel drops."
        }
      ]
    }
  }
},
{
  "id": "ktc-64-meesho-product-mismatch-return-rca",
  "title": "Meesho Product Mismatch Return RCA",
  "company": "Meesho",
  "source": "KTC Casebook 2026",
  "track": "Product",
  "category": "RCA",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "Meesho",
    "RCA",
    "Product"
  ],
  "prompt": "Product Mismatch Returns Your client is a social commerce platform. From the last month, they are facing a high percentage of returns due to “product not as described” complaint.",
  "clarifyingQuestions": [
    {
      "q": "What was the original vision and mission when the platform was launched?",
      "a": "The company wanted to empower small sellers across India to sell online without heavy upfront investment, focusing on low-cost, wide selection, and quick onboarding .",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Could you share the current return rate for “product not as described” cases and how it compares to the industry benchmark?",
      "a": "Ours is at 18%, whereas most competitors maintain it below 10 % That’s quite a gap. Could you explain how product descriptions, images, and size charts are currently added and verified during seller onboarding?",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Ours is at 18%, whereas most competitors maintain it below 10 % That’s quite a gap. Could you explain how product descriptions, images, and size charts are currently added and verified during seller onboarding?",
      "a": "Click here to give a mock interview Sellers upload all details directly on the app. There is basic format compliance check but no deep content verification.",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "Data Sanity → 5-Way Segmentation → Funnel Step Isolation → Internal vs External Causes",
  "coreEquation": "Metric Drop = Data/Tracking Check + Internal (Tech/UX/Ops/Policy) + External (Rivals/Season/Macro)",
  "strategyOverview": "Approach Meesho Product Mismatch Return RCA (Meesho) using a RCA structure: start by confirming the business objective and scope, decompose the problem cleanly along Data Sanity → 5-Way Segmentation → Funnel Step Isolation → Internal vs External Causes, and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Meesho Product Mismatch Return RCA — RCA Tree",
    "valueText": "MECE Diagnosis",
    "children": [
      {
        "label": "1. Data & Metric Sanity",
        "valueText": "Sudden vs Gradual · Geo/OS Cut"
      },
      {
        "label": "2. Internal Drivers (Product, Tech, Ops, Pricing)",
        "valueText": "Funnel Drop Isolation",
        "highlight": true
      },
      {
        "label": "3. External Drivers (Competitors, Weather, Macro)",
        "valueText": "Market Context"
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Candidate",
      "prompt": "Product Mismatch Returns Your client is a social commerce platform. From the last month, they are facing a hig",
      "detail": "Product Mismatch Returns Your client is a social commerce platform. From the last month, they are facing a high percentage of returns due to “product not as described” complaint.\nWhat was the original vision and mission when the platform was launched?\nThe company wanted to empower small sellers across India to sell online without heavy upfront investment, focusing on low-cost, wide selection, and quick onboarding .\nCould you share the current return rate for “product not as described” cases and how it compares to the industry benchmark?"
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "Ours is at 18%, whereas most competitors maintain it below 10 % That’s quite a gap. Could you explain how prod",
      "detail": "Ours is at 18%, whereas most competitors maintain it below 10 % That’s quite a gap. Could you explain how product descriptions, images, and size charts are currently added and verified during seller onboarding?\nClick here to give a mock interview Sellers upload all details directly on the app. There is basic format compliance check but no deep content verification.\nDo we have any internal quality control team or automated tools for catalog accuracy before listings go live?\nThere is a small QC team that manually reviews a sample of listings, but no automated system in place Got it. Are return complaints clustered "
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "Mostly apparel and footwear categories, concentrated among new or unverified sellers.",
      "detail": "Mostly apparel and footwear categories, concentrated among new or unverified sellers.\nThat makes sense. Have there been recent platform changes, such as onboarding flow updates, policies, or commission changes?\nWe recently simplified the seller upload flow to speed up onboarding, but this reduced some mandatory verification steps.\nProduct Mismatch Returns Understood. Do we currently incentivize or penalize sellers based on catalog accuracy or return rates?"
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "Currently, no. Sellers are only penalized for late dispatches, not for inaccurate listings.",
      "detail": "Currently, no. Sellers are only penalized for late dispatches, not for inaccurate listings.\nDo we track repeat offenders among sellers for inaccurate product listings ?\nYes, but the ac tion taken is limited to temporary suspension for extreme cases.\nFrom an external perspective, have customer expectations changed like increased demand for exact sizing, better visuals, or brand authenticity?"
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "Yes, especially in Tier 1 cities where customers compare quality with established e-commerce players.",
      "detail": "Yes, especially in Tier 1 cities where customers compare quality with established e-commerce players.\nClick here to give a mock interview Are there any specific internal KPIs to monitor catalog accuracy or customer trust?\nNo dedicated KPI exists for catalog accuracy returns are tracked in aggregate without granular cause mapping.\nAre we facing competitive pressure from platforms with stronger catalog verification processes?"
    }
  ],
  "recommendations": [
    "Introduce incentives/penalties : reward sellers with low",
    "Create a feedback loop : detailed return reason reports",
    "Build a standardized catalog management system with",
    "Benchmark against competitors and set a target to bring"
  ],
  "metricsAndGuardrails": {
    "northStar": "Recovered Core Funnel Conversion / Retention Rate at Meesho",
    "leading": [
      "Step-level funnel conversion %",
      "OS/City segmented error & latency rate"
    ],
    "guardrails": [
      "Contribution margin / refund abuse rate",
      "Customer support ticket volume"
    ]
  },
  "synthesisScript": "For Meesho’s Meesho Product Mismatch Return RCA case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Introduce incentives/penalties : reward sellers with low We will validate success via Recovered Core Funnel Conversion / Retention Rate at Meesho while guarding against Contribution margin / refund abuse rate.",
  "interviewerTrap": "Jumping straight into discounts or UI redesigns before verifying data sanity, geo/OS segmentation, and exact funnel drop-off!",
  "variations": [
    {
      "question": "How would your recommendation change if Meesho had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "RCA",
    "correctFramework": "Data Sanity → 5-Way Segmentation → Funnel Step Isolation → Internal vs External Causes",
    "structureOptions": [
      {
        "label": "Check Data Sanity → Segment (Geo/Platform/Cohort) → Isolate Funnel Step → Separate Internal vs External Causes",
        "correct": true,
        "feedback": "Exact RCA gold standard! Always narrow down WHERE it broke before asking WHY."
      },
      {
        "label": "Launch a 30% discount campaign immediately to recover lost volume",
        "correct": false,
        "feedback": "Discounts mask technical/ops bugs and destroy unit economics without fixing root cause."
      },
      {
        "label": "Redesign the entire app homepage and brand logo",
        "correct": false,
        "feedback": "Never jump to full redesigns before isolating which exact step failed."
      }
    ],
    "decisionQuiz": {
      "question": "Before diagnosing 'Meesho Product Mismatch Return RCA', what data sanity check prevents chasing false alarms?",
      "options": [
        {
          "label": "Verify sudden vs gradual timing, isolated geo/OS cuts, and whether tracking/logging definitions changed",
          "correct": true,
          "feedback": "Yes! Rules out logging bugs and pinpoints the affected slice."
        },
        {
          "label": "Ask for the CEO’s favorite color",
          "correct": false,
          "feedback": "Irrelevant to root-cause diagnosis."
        },
        {
          "label": "Compare against 10-year-old competitor stock prices",
          "correct": false,
          "feedback": "Too slow and disconnected from immediate funnel drops."
        }
      ]
    }
  }
},
{
  "id": "ktc-65-amazon-cart-abandonment-rca",
  "title": "Amazon Cart Abandonment RCA",
  "company": "media.net",
  "source": "KTC Casebook 2026",
  "track": "Product",
  "category": "RCA",
  "difficulty": 4,
  "isStarter": false,
  "tags": [
    "media.net",
    "RCA",
    "Product"
  ],
  "prompt": "Amazon Abandonment Percentage of abandoned orders at Amazon increased by 25% in December 2022. Find out why this has happened and suggest possible solutions.",
  "clarifyingQuestions": [
    {
      "q": "Okay noted. Was this problem seen globally or was the problem specific to the Indian market?",
      "a": "The problem was specific to the Indian market.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Was the problem applicable in particular regions of the country or as a whole? Also did our competitors face the same issue?",
      "a": "Click here to give a mock interview The problem was prevalent in all the regions of the country and we do not have data on whether our competitors were facing the same problem.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Also December is a time where there is a festive season in the country. To maximise this time, E-commerce platforms come out with a lots of discounts and offers. So was there a different pattern for discounts that year o",
      "a": "There was no such change in discount and its percentages.",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "Data Sanity → 5-Way Segmentation → Funnel Step Isolation → Internal vs External Causes",
  "coreEquation": "Metric Drop = Data/Tracking Check + Internal (Tech/UX/Ops/Policy) + External (Rivals/Season/Macro)",
  "strategyOverview": "Approach Amazon Cart Abandonment RCA (media.net) using a RCA structure: start by confirming the business objective and scope, decompose the problem cleanly along Data Sanity → 5-Way Segmentation → Funnel Step Isolation → Internal vs External Causes, and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Amazon Cart Abandonment RCA — RCA Tree",
    "valueText": "MECE Diagnosis",
    "children": [
      {
        "label": "1. Data & Metric Sanity",
        "valueText": "Sudden vs Gradual · Geo/OS Cut"
      },
      {
        "label": "2. Internal Drivers (Product, Tech, Ops, Pricing)",
        "valueText": "Funnel Drop Isolation",
        "highlight": true
      },
      {
        "label": "3. External Drivers (Competitors, Weather, Macro)",
        "valueText": "Market Context"
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Candidate",
      "prompt": "Amazon Abandonment Percentage of abandoned orders at Amazon increased by 25% in December 2022. Find out why th",
      "detail": "Amazon Abandonment Percentage of abandoned orders at Amazon increased by 25% in December 2022. Find out why this has happened and suggest possible solutions.\nBefore proposing specific solutions, I would like to ask a few preliminary questions to better understand the context. You mentioned the word abandonment here, what exactly does this mean here and what are the metrics for an order being put in the abandoned category?\nAbandoned orders here means the orders that were left in the cart and were not checked out. The metric used here in the PS is that if order stays for more than 12 hours in the cart.\nOkay noted. "
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "The problem was specific to the Indian market.",
      "detail": "The problem was specific to the Indian market.\nWas the problem applicable in particular regions of the country or as a whole? Also did our competitors face the same issue?\nClick here to give a mock interview The problem was prevalent in all the regions of the country and we do not have data on whether our competitors were facing the same problem.\nAlso December is a time where there is a festive season in the country. To maximise this time, E-commerce platforms come out with a lots of discounts and offers. So was there a different pattern for discounts that year or were the discounts reduced?"
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "There was no such change in discount and its percentages.",
      "detail": "There was no such change in discount and its percentages.\nYou can avoid seasonality for this particular problem.\na Were there any changes in Amazon’s revenue or the average revenue generated per user?\nYes, there was a change in Average Revenue Per User (ARPU), we saw a decrease of about 5% there."
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "Got it. So the scope is: India-wide issue, no seasonal cause, not linked to revenue drop alone . A 25% spike i",
      "detail": "Got it. So the scope is: India-wide issue, no seasonal cause, not linked to revenue drop alone . A 25% spike in cart abandonment is significant.\nAmazon Abandonment To structure my analysis, I’ll use three lenses:\n1. External factors (PESTEL, competition, regulations).\n2. Internal factors (app changes, marketing, supply chain)."
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "3. User journey frictions (search, delivery, payments).",
      "detail": "3. User journey frictions (search, delivery, payments).\nThis looks good. For this case you can take the external causes afterwards and directly move to the internal reasons and then evaluate the user journey.\nI will then delve into internal analysis. Firstly, I would like to ask if there have been some organisational changes, layoffs or other changes?\nNo, there have not been any organisational changes, this factor can be ignored."
    }
  ],
  "recommendations": [
    "External factors (PESTEL, competition, regulations).",
    "Internal factors (app changes, marketing, supply chain).",
    "User journey frictions (search, delivery, payments)."
  ],
  "metricsAndGuardrails": {
    "northStar": "Recovered Core Funnel Conversion / Retention Rate at media.net",
    "leading": [
      "Step-level funnel conversion %",
      "OS/City segmented error & latency rate"
    ],
    "guardrails": [
      "Contribution margin / refund abuse rate",
      "Customer support ticket volume"
    ]
  },
  "synthesisScript": "For media.net’s Amazon Cart Abandonment RCA case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: External factors (PESTEL, competition, regulations). We will validate success via Recovered Core Funnel Conversion / Retention Rate at media.net while guarding against Contribution margin / refund abuse rate.",
  "interviewerTrap": "Jumping straight into discounts or UI redesigns before verifying data sanity, geo/OS segmentation, and exact funnel drop-off!",
  "variations": [
    {
      "question": "How would your recommendation change if media.net had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "RCA",
    "correctFramework": "Data Sanity → 5-Way Segmentation → Funnel Step Isolation → Internal vs External Causes",
    "structureOptions": [
      {
        "label": "Check Data Sanity → Segment (Geo/Platform/Cohort) → Isolate Funnel Step → Separate Internal vs External Causes",
        "correct": true,
        "feedback": "Exact RCA gold standard! Always narrow down WHERE it broke before asking WHY."
      },
      {
        "label": "Launch a 30% discount campaign immediately to recover lost volume",
        "correct": false,
        "feedback": "Discounts mask technical/ops bugs and destroy unit economics without fixing root cause."
      },
      {
        "label": "Redesign the entire app homepage and brand logo",
        "correct": false,
        "feedback": "Never jump to full redesigns before isolating which exact step failed."
      }
    ],
    "decisionQuiz": {
      "question": "Before diagnosing 'Amazon Cart Abandonment RCA', what data sanity check prevents chasing false alarms?",
      "options": [
        {
          "label": "Verify sudden vs gradual timing, isolated geo/OS cuts, and whether tracking/logging definitions changed",
          "correct": true,
          "feedback": "Yes! Rules out logging bugs and pinpoints the affected slice."
        },
        {
          "label": "Ask for the CEO’s favorite color",
          "correct": false,
          "feedback": "Irrelevant to root-cause diagnosis."
        },
        {
          "label": "Compare against 10-year-old competitor stock prices",
          "correct": false,
          "feedback": "Too slow and disconnected from immediate funnel drops."
        }
      ]
    }
  }
},
{
  "id": "ktc-gtm-clearasthma",
  "title": "ClearAsthma New Medicine GTM",
  "company": "Zomato",
  "source": "KTC Casebook 2026",
  "track": "Product",
  "category": "GTM",
  "difficulty": 1,
  "isStarter": true,
  "tags": [
    "Zomato",
    "GTM",
    "Pharma",
    "B2B2C",
    "India"
  ],
  "prompt": "GTM | Zomato | Easy ClearAsthma New Medicine l Hello, we’ve been approached by a company named ClearAsthma, which manufactures medicines to treat asthma.",
  "clarifyingQuestions": [
    {
      "q": "They’ve recently launched a new medicine and need a Go-To-Market (GTM) strategy for it. How would you approach this?",
      "a": "Thank you. Before diving in, I’d like to clarify the target audience for this product. Is the medicine aimed primarily at hospitals, or pharmacies, or both?",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Thank you. Before diving in, I’d like to clarify the target audience for this product. Is the medicine aimed primarily at hospitals, or pharmacies, or both?",
      "a": "The target audience is the entire Indian market, which includes both hospitals and regular pharmacies.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Understood. Can you share some background on ClearAsthma?",
      "a": "How long have they been operating, and what is their reputation like?",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "Market Landscape → Positioning & Differentiators → 3-Phase GTM (Pre-Launch / Launch / Post-Launch)",
  "coreEquation": "Adoption = Doctor Prescriptions × Pharmacy Stock Availability × Patient Adherence",
  "strategyOverview": "Leverage ClearAsthma’s 10-year strong brand trust across Indian hospitals and pharmacies. Target pulmonologists/GPs via medical reps and clinical proof pre-launch, ensure stockist availability in high-AQI urban centers at launch, and track prescription share + repeat inhaler refills post-launch.",
  "tree": {
    "label": "ClearAsthma New Medicine GTM — GTM Blueprint",
    "valueText": "3-Phase Rollout",
    "children": [
      {
        "label": "Phase 1: Pre-Launch (Beachhead ICP, Positioning, Supply/Waitlist)",
        "valueText": "Seed Trust",
        "highlight": true
      },
      {
        "label": "Phase 2: Launch (Channels, Intro Pricing, Activation Loops)",
        "valueText": "Drive Trial",
        "highlight": true
      },
      {
        "label": "Phase 3: Post-Launch (Retention, Referrals, CAC/LTV Audit)",
        "valueText": "Scale Safely"
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Candidate",
      "prompt": "GTM | Zomato | Easy ClearAsthma New Medicine l Hello, we’ve been approached by a company named ClearAsthma, wh",
      "detail": "GTM | Zomato | Easy ClearAsthma New Medicine l Hello, we’ve been approached by a company named ClearAsthma, which manufactures medicines to treat asthma.\nThey’ve recently launched a new medicine and need a Go-To-Market (GTM) strategy for it. How would you approach this?\nThank you. Before diving in, I’d like to clarify the target audience for this product. Is the medicine aimed primarily at hospitals, or pharmacies, or both?\nThe target audience is the entire Indian market, which includes both hospitals and regular pharmacies."
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "Understood. Can you share some background on ClearAsthma?",
      "detail": "Understood. Can you share some background on ClearAsthma?\nHow long have they been operating, and what is their reputation like?\nClearAsthma has been around for 10 years, and they have an excellent reputation in the Indian market.\nClick here to give a mock intervie w Great, that’s helpful. I’d like to structure my approach in three steps:"
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "1. Understand the market landscape.",
      "detail": "1. Understand the market landscape.\n2. Identify ClearAsthma’s differentiators and positioning.\n3. Lay out a phased GTM plan (Pre-launch, Launch, Post-launch).\nSounds good. Let’s start with the market."
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "● Asthma prevalence: India has over 30 million asthma patients, with higher prevalence in urban and industrial",
      "detail": "● Asthma prevalence: India has over 30 million asthma patients, with higher prevalence in urban and industrial regions.\n● Current treatment landscape: There are several generic and branded inhalers, tablets, and syrups already available.\nGTM | Zomato | Easy ClearAsthma New Medicine ● Stakeholders: Patients rarely buy on their own. Doctors, pulmonologists, and general practitioners play a crucial role in prescriptions, while pharmacies ensure availability.\n● Challenge: High competition + patient trust heavily dependent on doctor recommendations."
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "So, the GTM strategy must focus on both supply-side (hospitals, doctors, pharmacies) and demand-side (patients",
      "detail": "So, the GTM strategy must focus on both supply-side (hospitals, doctors, pharmacies) and demand-side (patients, awareness campaigns).\nGood analysis. How does ClearAsthma fit in and differentiate?\nSince ClearAsthma already has 10 years of credibility, they can position this new medicine as:\n1. Scientifically superior: If it has faster relief, fewer side effects, or better delivery mechanisms (e.g., improved inhaler tech), that should be the key differentiator."
    }
  ],
  "recommendations": [
    "Market landscape: Large patient base, doctor-driven",
    "Differentiation: Build on ClearAsthma’s strong",
    "Retention: Build trust with doctors, affordability for",
    "Pricing: Penetration strategy with bundles, subscriptions,"
  ],
  "metricsAndGuardrails": {
    "northStar": "Activated & Retained Beachhead Customers for ClearAsthma New Medicine GTM",
    "leading": [
      "Waitlist-to-activation conversion %",
      "CAC vs Day-30 Retention"
    ],
    "guardrails": [
      "CAC Payback Period (months)",
      "Early churn / negative review rate"
    ]
  },
  "synthesisScript": "For Zomato’s ClearAsthma New Medicine GTM case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Market landscape: Large patient base, doctor-driven We will validate success via Activated & Retained Beachhead Customers for ClearAsthma New Medicine GTM while guarding against CAC Payback Period (months).",
  "interviewerTrap": "Proposing direct-to-consumer Instagram ads for a prescription asthma drug instead of doctor detailing and pharmacy stockist distribution!",
  "variations": [
    {
      "question": "How would your recommendation change if Zomato had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "GTM",
    "correctFramework": "Market Audit → Beachhead ICP & Positioning → 4Ps → Pre-Launch / Launch / Post-Launch",
    "structureOptions": [
      {
        "label": "Define Goal & Beachhead ICP → Craft Positioning & 4Ps → Execute Pre-Launch, Launch, Post-Launch + KPIs",
        "correct": true,
        "feedback": "Textbook GTM! Tight beachhead focus + phased rollout wins every time."
      },
      {
        "label": "Spend 100% of budget on Super Bowl / IPL TV ads on Day 1",
        "correct": false,
        "feedback": "Mass ads before proving activation and channel fit burn cash with poor retention."
      },
      {
        "label": "Focus solely on cutting warehouse electricity costs",
        "correct": false,
        "feedback": "That is a Profitability cost exercise, not a Go-To-Market launch strategy."
      }
    ],
    "decisionQuiz": {
      "question": "Why should a GTM strategy always start with a tight Beachhead ICP instead of the whole market?",
      "options": [
        {
          "label": "Concentrates budget on high-pain early adopters to prove PMF and word-of-mouth before scaling",
          "correct": true,
          "feedback": "Spot on! Winning 1 niche deeply creates momentum and lowers CAC."
        },
        {
          "label": "Because larger markets are illegal to serve",
          "correct": false,
          "feedback": "It is about capital efficiency and PMF focus."
        },
        {
          "label": "To avoid measuring retention",
          "correct": false,
          "feedback": "Retention is easiest to measure and optimize inside a clean beachhead cohort."
        }
      ]
    }
  }
},
{
  "id": "ktc-gtm-mx-player",
  "title": "GTM Strategy for MX Player",
  "company": "HiLabs",
  "source": "KTC Casebook 2026",
  "track": "Product",
  "category": "GTM",
  "difficulty": 2,
  "isStarter": false,
  "tags": [
    "HiLabs",
    "GTM",
    "Product"
  ],
  "prompt": "GTM | HiLabs | Easy GTM for MX Player MX player is evaluating an India strategy focused on hyperlocal/regional content for Tier 2 and Tier 3 cities.",
  "clarifyingQuestions": [
    {
      "q": "Assume Amazon Prime/Hotstar/YouTube are major competitors. Can you give a go-to-market (GTM) strategy for this entry?",
      "a": "Before I jump into a strategy, I’d like to clarify a few points to ensure precise targeting. What’s the primary objective for this entry: rapid user base expansion/market share or immediate profitability?",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Before I jump into a strategy, I’d like to clarify a few points to ensure precise targeting. What’s the primary objective for this entry: rapid user base expansion/market share or immediate profitability?",
      "a": "The main target is families and youth, especially mobile-first users new to OTT.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Should our content push be more about launching original hyperlocal series/movies or dubbing/subtitling existing Netflix hits in local languages?",
      "a": "A mix, but original content (regional webseries, films) tailored to the cultural tastes of each region should be the focus.",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "Market Audit → Beachhead ICP & Positioning → 4Ps → Pre-Launch / Launch / Post-Launch",
  "coreEquation": "Launch Success = Target ICP Reach × Activation Conversion × D30 Retention × Unit Margin",
  "strategyOverview": "Approach GTM Strategy for MX Player (HiLabs) using a GTM structure: start by confirming the business objective and scope, decompose the problem cleanly along Market Audit → Beachhead ICP & Positioning → 4Ps → Pre-Launch / Launch / Post-Launch, and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "GTM Strategy for MX Player — GTM Blueprint",
    "valueText": "3-Phase Rollout",
    "children": [
      {
        "label": "Phase 1: Pre-Launch (Beachhead ICP, Positioning, Supply/Waitlist)",
        "valueText": "Seed Trust",
        "highlight": true
      },
      {
        "label": "Phase 2: Launch (Channels, Intro Pricing, Activation Loops)",
        "valueText": "Drive Trial",
        "highlight": true
      },
      {
        "label": "Phase 3: Post-Launch (Retention, Referrals, CAC/LTV Audit)",
        "valueText": "Scale Safely"
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Candidate",
      "prompt": "GTM | HiLabs | Easy GTM for MX Player MX player is evaluating an India strategy focused on hyperlocal/regional",
      "detail": "GTM | HiLabs | Easy GTM for MX Player MX player is evaluating an India strategy focused on hyperlocal/regional content for Tier 2 and Tier 3 cities.\nAssume Amazon Prime/Hotstar/YouTube are major competitors. Can you give a go-to-market (GTM) strategy for this entry?\nBefore I jump into a strategy, I’d like to clarify a few points to ensure precise targeting. What’s the primary objective for this entry: rapid user base expansion/market share or immediate profitability?\nThe main target is families and youth, especially mobile-first users new to OTT."
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "Should our content push be more about launching original hyperlocal series/movies or dubbing/subtitling existi",
      "detail": "Should our content push be more about launching original hyperlocal series/movies or dubbing/subtitling existing Netflix hits in local languages?\nA mix, but original content (regional webseries, films) tailored to the cultural tastes of each region should be the focus.\nClick here to give a mock interview Which regions and languages are the highest priority? India has so much diversity, so should we begin with just a few key languages and areas?\nIt makes sense to start with major language clusters with proven demand, like Bhojpuri in Bihar/Jharkhand, Tamil in Tamil Nadu, Marathi in Maharashtra, Bengali in West Ben"
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "We know connectivity can be an issue in smaller cities.",
      "detail": "We know connectivity can be an issue in smaller cities.\nWhat’s the expected tech setup, are users on budget phones and struggling with data?\nMost users will be on basic smartphones with limited or inconsistent internet. We need to ensure offline viewing, adaptive streaming, and a fast, lightweight app experience to maximize accessibility.\nCan you please take me through the working and USP of the application?"
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "GTM | HiLabs | Easy GTM for MX Player Sure! MX Player is an OTT platform offering a huge range of regional and",
      "detail": "GTM | HiLabs | Easy GTM for MX Player Sure! MX Player is an OTT platform offering a huge range of regional and vernacular content across many Indian languages. Users can stream movies, web series, TV shows, originals, and live channels. Key features include easy language selection, offline downloads, AI-based personalized recommendations, and both free ad-supported and affordable subscription plans.\nThe USPs are its deep regional content library, smooth streaming on low-end devices, offline viewing for limited data users, and strong personalization that helps users discover relevant content fast.\nFinally, what ar"
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "Click here to give a mock interview Given this information. I would like to put forth my strategy.",
      "detail": "Click here to give a mock interview Given this information. I would like to put forth my strategy.\nThe strategy is broken into four Buckets : pre-launch, launch, post launch, retention. Firstly, I would like to discuss the pre launch phase.\nSure Go ahead In the pre-launch phase, MX Player will conduct targeted market research in Tier 2 and Tier 3 cities to understand regional language preferences and content consumption habits. The company will partner with local production houses and emerging regional creators to secure exclusive content. A limited beta launch in high-potential regions will help gather user feed"
    }
  ],
  "recommendations": [
    "Prioritize the highest-impact P0 bottleneck identified in GTM Strategy for MX Player before secondary optimizations.",
    "Pilot the top intervention in a controlled cohort/region with clear North Star and guardrail tracking.",
    "Scale rollout only after verifying unit economics and zero adverse second-order effects."
  ],
  "metricsAndGuardrails": {
    "northStar": "Activated & Retained Beachhead Customers for GTM Strategy for MX Player",
    "leading": [
      "Waitlist-to-activation conversion %",
      "CAC vs Day-30 Retention"
    ],
    "guardrails": [
      "CAC Payback Period (months)",
      "Early churn / negative review rate"
    ]
  },
  "synthesisScript": "For HiLabs’s GTM Strategy for MX Player case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Prioritize the highest-impact P0 bottleneck identified in GTM Strategy for MX Player before secondary optimizations. We will validate success via Activated & Retained Beachhead Customers for GTM Strategy for MX Player while guarding against CAC Payback Period (months).",
  "interviewerTrap": "Targeting 'everyone in the country' on Day 1 or listing generic social ads without defining ICP, positioning, pricing, and phased rollout!",
  "variations": [
    {
      "question": "How would your recommendation change if HiLabs had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "GTM",
    "correctFramework": "Market Audit → Beachhead ICP & Positioning → 4Ps → Pre-Launch / Launch / Post-Launch",
    "structureOptions": [
      {
        "label": "Define Goal & Beachhead ICP → Craft Positioning & 4Ps → Execute Pre-Launch, Launch, Post-Launch + KPIs",
        "correct": true,
        "feedback": "Textbook GTM! Tight beachhead focus + phased rollout wins every time."
      },
      {
        "label": "Spend 100% of budget on Super Bowl / IPL TV ads on Day 1",
        "correct": false,
        "feedback": "Mass ads before proving activation and channel fit burn cash with poor retention."
      },
      {
        "label": "Focus solely on cutting warehouse electricity costs",
        "correct": false,
        "feedback": "That is a Profitability cost exercise, not a Go-To-Market launch strategy."
      }
    ],
    "decisionQuiz": {
      "question": "Why should a GTM strategy always start with a tight Beachhead ICP instead of the whole market?",
      "options": [
        {
          "label": "Concentrates budget on high-pain early adopters to prove PMF and word-of-mouth before scaling",
          "correct": true,
          "feedback": "Spot on! Winning 1 niche deeply creates momentum and lowers CAC."
        },
        {
          "label": "Because larger markets are illegal to serve",
          "correct": false,
          "feedback": "It is about capital efficiency and PMF focus."
        },
        {
          "label": "To avoid measuring retention",
          "correct": false,
          "feedback": "Retention is easiest to measure and optimize inside a clean beachhead cohort."
        }
      ]
    }
  }
},
{
  "id": "ktc-68-gtm-strategy-for-e-rickshaw",
  "title": "GTM Strategy for E-Rickshaw",
  "company": "Meesho",
  "source": "KTC Casebook 2026",
  "track": "Product",
  "category": "GTM",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "Meesho",
    "GTM",
    "Product"
  ],
  "prompt": "GTM | Meesho | Medium GTM for E-Rickshaw Great having you here! Let's get straight to it. ABC company is planning to launch E-rickshaw services at IIT Guwahati. How would you approach creating a GTM strategy for them?",
  "clarifyingQuestions": [
    {
      "q": "Thank you! Before I jump into the solution, may I clarify the primary goal? Are we focusing on increasing awareness and adoption of this service within IIT Guwahati or planning to scale it beyond the campus eventually?",
      "a": "For now, your task is to create a go-to-market strategy specifically for the IIT Guwahati campus.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Interesting. So, where does ABC company fit in, and how can they differentiate?",
      "a": "E-rickshaws can solve three major pain points:",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "How would you launch an e-rickshaw service at IIT Guwahati?",
      "a": "I'd first establish the exact travel job and customers. Is the service mainly internal to campus or intended to connect people to the wider city?",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "Market Audit → Beachhead ICP & Positioning → 4Ps → Pre-Launch / Launch / Post-Launch",
  "coreEquation": "Launch Success = Target ICP Reach × Activation Conversion × D30 Retention × Unit Margin",
  "strategyOverview": "Approach GTM Strategy for E-Rickshaw (Meesho) using a GTM structure: start by confirming the business objective and scope, decompose the problem cleanly along Market Audit → Beachhead ICP & Positioning → 4Ps → Pre-Launch / Launch / Post-Launch, and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "GTM Strategy for E-Rickshaw — GTM Blueprint",
    "valueText": "3-Phase Rollout",
    "children": [
      {
        "label": "Phase 1: Pre-Launch (Beachhead ICP, Positioning, Supply/Waitlist)",
        "valueText": "Seed Trust",
        "highlight": true
      },
      {
        "label": "Phase 2: Launch (Channels, Intro Pricing, Activation Loops)",
        "valueText": "Drive Trial",
        "highlight": true
      },
      {
        "label": "Phase 3: Post-Launch (Retention, Referrals, CAC/LTV Audit)",
        "valueText": "Scale Safely"
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Interviewer",
      "prompt": "GTM | Meesho | Medium GTM for E-Rickshaw Great having you here! Let's get straight to it. ABC company is plann",
      "detail": "GTM | Meesho | Medium GTM for E-Rickshaw Great having you here! Let's get straight to it. ABC company is planning to launch E-rickshaw services at IIT Guwahati. How would you approach creating a GTM strategy for them?\nThank you! Before I jump into the solution, may I clarify the primary goal? Are we focusing on increasing awareness and adoption of this service within IIT Guwahati or planning to scale it beyond the campus eventually?\nFor now, your task is to create a go-to-market strategy specifically for the IIT Guwahati campus.\nGot it. I’d like to start by understanding the current transportation landscape at II"
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "● The campus is quite large and spread out, which means students, faculty, and staff often rely on walking, bi",
      "detail": "● The campus is quite large and spread out, which means students, faculty, and staff often rely on walking, bicycles, or private vehicles.\nClick here to give a mock interview ● There are likely a few informal shared transport options, such as autos or vans, but nothing fully organized.\n● Students are cost-sensitive but also value convenience and time-saving solutions.\n● Since this is an academic institution, any service must align with sustainability goals — which makes E-rickshaws a strong fit."
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "Interesting. So, where does ABC company fit in, and how can they differentiate?",
      "detail": "Interesting. So, where does ABC company fit in, and how can they differentiate?\nE-rickshaws can solve three major pain points:\n1. First/last-mile mobility: Helping people travel from hostels to academic blocks or other facilities quickly.\n2. Affordability: Offering shared rides at lower costs than traditional autos."
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "3. Sustainability: Zero emissions, aligning with IIT’s green campus initiatives.",
      "detail": "3. Sustainability: Zero emissions, aligning with IIT’s green campus initiatives.\nGTM | Meesho | Medium GTM for E-Rickshaw PS — Problem Statement: “ABC company plans to launch e-rickshaw services at IIT Guwahati. Develop a go-to-market strategy.” Company: ABC mobility (fictional client) Pattern: Campus services GTM / two-sided operations / unit economics Difficulty: Medium–hard Objective: Obtain institutional approval, create repeat demand, deploy fleet efficiently and establish a financially coherent business model.\nHow would you launch an e-rickshaw service at IIT Guwahati?\nI'd first establish the exact travel j"
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "Primarily intra-campus. Distances between hostels, academic areas and the market complex can be inconvenient.",
      "detail": "Primarily intra-campus. Distances between hostels, academic areas and the market complex can be inconvenient.\nWho are we targeting, and what existing alternatives do they use?\nStudents will be the biggest group; faculty and staff are relevant too.\nStudents already have a free loop bus and bicycles."
    }
  ],
  "recommendations": [
    "Sustainability: Zero emissions, aligning with IIT’s green",
    "Daily fleet revenue = 10 × 15 × ₹12 = ₹1,800.",
    "Monthly fleet revenue at 30 days = ₹1,800 × 30 = ₹54,000.",
    "Monthly revenue per vehicle = ₹54,000 / 10 = ₹5,400."
  ],
  "metricsAndGuardrails": {
    "northStar": "Activated & Retained Beachhead Customers for GTM Strategy for E-Rickshaw",
    "leading": [
      "Waitlist-to-activation conversion %",
      "CAC vs Day-30 Retention"
    ],
    "guardrails": [
      "CAC Payback Period (months)",
      "Early churn / negative review rate"
    ]
  },
  "synthesisScript": "For Meesho’s GTM Strategy for E-Rickshaw case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Sustainability: Zero emissions, aligning with IIT’s green We will validate success via Activated & Retained Beachhead Customers for GTM Strategy for E-Rickshaw while guarding against CAC Payback Period (months).",
  "interviewerTrap": "Targeting 'everyone in the country' on Day 1 or listing generic social ads without defining ICP, positioning, pricing, and phased rollout!",
  "variations": [
    {
      "question": "How would your recommendation change if Meesho had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "GTM",
    "correctFramework": "Market Audit → Beachhead ICP & Positioning → 4Ps → Pre-Launch / Launch / Post-Launch",
    "structureOptions": [
      {
        "label": "Define Goal & Beachhead ICP → Craft Positioning & 4Ps → Execute Pre-Launch, Launch, Post-Launch + KPIs",
        "correct": true,
        "feedback": "Textbook GTM! Tight beachhead focus + phased rollout wins every time."
      },
      {
        "label": "Spend 100% of budget on Super Bowl / IPL TV ads on Day 1",
        "correct": false,
        "feedback": "Mass ads before proving activation and channel fit burn cash with poor retention."
      },
      {
        "label": "Focus solely on cutting warehouse electricity costs",
        "correct": false,
        "feedback": "That is a Profitability cost exercise, not a Go-To-Market launch strategy."
      }
    ],
    "decisionQuiz": {
      "question": "Why should a GTM strategy always start with a tight Beachhead ICP instead of the whole market?",
      "options": [
        {
          "label": "Concentrates budget on high-pain early adopters to prove PMF and word-of-mouth before scaling",
          "correct": true,
          "feedback": "Spot on! Winning 1 niche deeply creates momentum and lowers CAC."
        },
        {
          "label": "Because larger markets are illegal to serve",
          "correct": false,
          "feedback": "It is about capital efficiency and PMF focus."
        },
        {
          "label": "To avoid measuring retention",
          "correct": false,
          "feedback": "Retention is easiest to measure and optimize inside a clean beachhead cohort."
        }
      ]
    }
  }
},
{
  "id": "ktc-69-netflix-s-advent-market-gtm",
  "title": "Netflix's Advent (Market GTM)",
  "company": "HiLabs",
  "source": "KTC Casebook 2026",
  "track": "Product",
  "category": "GTM",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "HiLabs",
    "GTM",
    "Product"
  ],
  "prompt": "GTM | HiLabs | Medium Thank you for joining me today. Let's explore Netflix's future potential. What do you think could be the next big thing for Netflix, and how would you develop a go-to-market strategy for it?",
  "clarifyingQuestions": [
    {
      "q": "Great, how will you build a GTM for netflix to enter the gaming sector?",
      "a": "I would start by conducting thorough market research to identify trends in the gaming industry, particularly in streaming and interactive content. Understanding the demographics of gamers and their viewing habits would be crucial.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "That makes sense. Once you've identified your target audience, what would be your next step?",
      "a": "Click here to give a mock interview The next step would be to define the content strategy.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "How would you position this new gaming content in the market?",
      "a": "Positioning would involve emphasizing Netflix’s strengths in storytelling and engagement. Highlighting the unique aspect of interactive gaming streams where viewers can influence the game or interact with their favorite characters would dif",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "Market Audit → Beachhead ICP & Positioning → 4Ps → Pre-Launch / Launch / Post-Launch",
  "coreEquation": "Launch Success = Target ICP Reach × Activation Conversion × D30 Retention × Unit Margin",
  "strategyOverview": "Approach Netflix's Advent (Market GTM) (HiLabs) using a GTM structure: start by confirming the business objective and scope, decompose the problem cleanly along Market Audit → Beachhead ICP & Positioning → 4Ps → Pre-Launch / Launch / Post-Launch, and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Netflix's Advent (Market GTM) — GTM Blueprint",
    "valueText": "3-Phase Rollout",
    "children": [
      {
        "label": "Phase 1: Pre-Launch (Beachhead ICP, Positioning, Supply/Waitlist)",
        "valueText": "Seed Trust",
        "highlight": true
      },
      {
        "label": "Phase 2: Launch (Channels, Intro Pricing, Activation Loops)",
        "valueText": "Drive Trial",
        "highlight": true
      },
      {
        "label": "Phase 3: Post-Launch (Retention, Referrals, CAC/LTV Audit)",
        "valueText": "Scale Safely"
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Interviewer",
      "prompt": "GTM | HiLabs | Medium Thank you for joining me today. Let's explore Netflix's future potential. What do you th",
      "detail": "GTM | HiLabs | Medium Thank you for joining me today. Let's explore Netflix's future potential. What do you think could be the next big thing for Netflix, and how would you develop a go-to-market strategy for it?\nThank you for having me! I believe Netflix can successfully expand into the gaming sector, particularly by focusing on streaming gaming content and interactive gaming experiences.\nGreat, how will you build a GTM for netflix to enter the gaming sector?\nI would start by conducting thorough market research to identify trends in the gaming industry, particularly in streaming and interactive content. Understa"
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "That makes sense. Once you've identified your target audience, what would be your next step?",
      "detail": "That makes sense. Once you've identified your target audience, what would be your next step?\nClick here to give a mock interview The next step would be to define the content strategy.\nNetflix could create exclusive gaming events, live esports tournaments, and interactive streams where viewers can participate, such as voting on game outcomes or engaging with gameplay in real-time.\nHow would you position this new gaming content in the market?"
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "Positioning would involve emphasizing Netflix’s strengths in storytelling and engagement. Highlighting the uni",
      "detail": "Positioning would involve emphasizing Netflix’s strengths in storytelling and engagement. Highlighting the unique aspect of interactive gaming streams where viewers can influence the game or interact with their favorite characters would differentiate Netflix from other platforms.\nThat’s a solid approach! What kind of partnerships would you consider to enhance this strategy?\nCollaborating with game developers, esports organizations, and popular gaming influencers would be key. Partnerships with platforms that specialize in live streaming could also help optimize the viewer experience and expand reach.\nGTM | HiLabs"
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "A comprehensive marketing strategy would be essential.",
      "detail": "A comprehensive marketing strategy would be essential.\nNetflix could utilize social media, gaming platforms, and influencer marketing to build excitement. Hosting preview events or beta tests for select games could create buzz and attract viewers.\nAnd what monetization strategies do you foresee for this gaming initiative?\nMonetization could include premium subscription tiers for exclusive access to live gaming events or in-depth interactive experiences. Additionally, offering in-game purchases or exclusive content related to popular shows could generate additional revenue streams."
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "Do you anticipate any challenges in implementing this strategy?",
      "detail": "Do you anticipate any challenges in implementing this strategy?\nClick here to give a mock interview Yes, technical challenges like ensuring low latency and high-quality streams for gaming content could arise.\nMoreover, transitioning traditional Netflix viewers to a gaming format might take time and effort. Continuous testing and feedback loops would be essential to refine the offering.\nFinally, how would you measure the success of this go-to-market strategy?"
    }
  ],
  "recommendations": [
    "Prioritize the highest-impact P0 bottleneck identified in Netflix's Advent (Market GTM) before secondary optimizations.",
    "Pilot the top intervention in a controlled cohort/region with clear North Star and guardrail tracking.",
    "Scale rollout only after verifying unit economics and zero adverse second-order effects."
  ],
  "metricsAndGuardrails": {
    "northStar": "Activated & Retained Beachhead Customers for Netflix's Advent (Market GTM)",
    "leading": [
      "Waitlist-to-activation conversion %",
      "CAC vs Day-30 Retention"
    ],
    "guardrails": [
      "CAC Payback Period (months)",
      "Early churn / negative review rate"
    ]
  },
  "synthesisScript": "For HiLabs’s Netflix's Advent (Market GTM) case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Prioritize the highest-impact P0 bottleneck identified in Netflix's Advent (Market GTM) before secondary optimizations. We will validate success via Activated & Retained Beachhead Customers for Netflix's Advent (Market GTM) while guarding against CAC Payback Period (months).",
  "interviewerTrap": "Targeting 'everyone in the country' on Day 1 or listing generic social ads without defining ICP, positioning, pricing, and phased rollout!",
  "variations": [
    {
      "question": "How would your recommendation change if HiLabs had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "GTM",
    "correctFramework": "Market Audit → Beachhead ICP & Positioning → 4Ps → Pre-Launch / Launch / Post-Launch",
    "structureOptions": [
      {
        "label": "Define Goal & Beachhead ICP → Craft Positioning & 4Ps → Execute Pre-Launch, Launch, Post-Launch + KPIs",
        "correct": true,
        "feedback": "Textbook GTM! Tight beachhead focus + phased rollout wins every time."
      },
      {
        "label": "Spend 100% of budget on Super Bowl / IPL TV ads on Day 1",
        "correct": false,
        "feedback": "Mass ads before proving activation and channel fit burn cash with poor retention."
      },
      {
        "label": "Focus solely on cutting warehouse electricity costs",
        "correct": false,
        "feedback": "That is a Profitability cost exercise, not a Go-To-Market launch strategy."
      }
    ],
    "decisionQuiz": {
      "question": "Why should a GTM strategy always start with a tight Beachhead ICP instead of the whole market?",
      "options": [
        {
          "label": "Concentrates budget on high-pain early adopters to prove PMF and word-of-mouth before scaling",
          "correct": true,
          "feedback": "Spot on! Winning 1 niche deeply creates momentum and lowers CAC."
        },
        {
          "label": "Because larger markets are illegal to serve",
          "correct": false,
          "feedback": "It is about capital efficiency and PMF focus."
        },
        {
          "label": "To avoid measuring retention",
          "correct": false,
          "feedback": "Retention is easiest to measure and optimize inside a clean beachhead cohort."
        }
      ]
    }
  }
},
{
  "id": "ktc-70-spotify-kids-gtm-strategy",
  "title": "Spotify Kids GTM Strategy",
  "company": "media.net",
  "source": "KTC Casebook 2026",
  "track": "Product",
  "category": "GTM",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "media.net",
    "GTM",
    "Product"
  ],
  "prompt": "GTM | media.net | Medium Spotify for Kids Spotify, the largest provider of music streaming services is planning to launch Spotify for Kids. Given that YouTube Kids would be its largest competitor, devise a go-to-market (GTM) strategy for this product.",
  "clarifyingQuestions": [
    {
      "q": "What age bracket are we considering for kids?",
      "a": "The age group that will cover kids will span from four or younger to twelve years With the launch of Spotify for Kids, are we looking to explore and dive into a new market or for profitability?",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "The age group that will cover kids will span from four or younger to twelve years With the launch of Spotify for Kids, are we looking to explore and dive into a new market or for profitability?",
      "a": "Given Spotify’s well-established position in its existing market, Spotify for Kids aims for a new-market exploration. We do not expect immediate profits, however, it can be achieved gradually.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Is the launch of Spotify Kids globally or in India?",
      "a": "Click here to give a mock interview As an initial plan, Spotify Kids will be launched in India and in due course of time, the market can be expanded to other countries.",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "Market Audit → Beachhead ICP & Positioning → 4Ps → Pre-Launch / Launch / Post-Launch",
  "coreEquation": "Launch Success = Target ICP Reach × Activation Conversion × D30 Retention × Unit Margin",
  "strategyOverview": "Approach Spotify Kids GTM Strategy (media.net) using a GTM structure: start by confirming the business objective and scope, decompose the problem cleanly along Market Audit → Beachhead ICP & Positioning → 4Ps → Pre-Launch / Launch / Post-Launch, and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Spotify Kids GTM Strategy — GTM Blueprint",
    "valueText": "3-Phase Rollout",
    "children": [
      {
        "label": "Phase 1: Pre-Launch (Beachhead ICP, Positioning, Supply/Waitlist)",
        "valueText": "Seed Trust",
        "highlight": true
      },
      {
        "label": "Phase 2: Launch (Channels, Intro Pricing, Activation Loops)",
        "valueText": "Drive Trial",
        "highlight": true
      },
      {
        "label": "Phase 3: Post-Launch (Retention, Referrals, CAC/LTV Audit)",
        "valueText": "Scale Safely"
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Candidate",
      "prompt": "GTM | media.net | Medium Spotify for Kids Spotify, the largest provider of music streaming services is plannin",
      "detail": "GTM | media.net | Medium Spotify for Kids Spotify, the largest provider of music streaming services is planning to launch Spotify for Kids. Given that YouTube Kids would be its largest competitor, devise a go-to-market (GTM) strategy for this product.\nTo be able to deliver an appropriate GTM strategy, I would like to begin by asking clarifying questions.\nWhat age bracket are we considering for kids?\nThe age group that will cover kids will span from four or younger to twelve years With the launch of Spotify for Kids, are we looking to explore and dive into a new market or for profitability?"
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "Given Spotify’s well-established position in its existing market, Spotify for Kids aims for a new-market explo",
      "detail": "Given Spotify’s well-established position in its existing market, Spotify for Kids aims for a new-market exploration. We do not expect immediate profits, however, it can be achieved gradually.\nIs the launch of Spotify Kids globally or in India?\nClick here to give a mock interview As an initial plan, Spotify Kids will be launched in India and in due course of time, the market can be expanded to other countries.\nCan you please take me through the working of the application? What are the USPs of the application?"
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "Parents can sign up via an existing or new Spotify account, creating profiles for each child which will be age",
      "detail": "Parents can sign up via an existing or new Spotify account, creating profiles for each child which will be age-specific. All content is curated for age-appropriateness and the content is ad-free. Parental controls, including content filters and time limits, are set up during this process. The app offers personalized playlists, easy navigation through music, audiobooks, and educational content, and a voice search feature for young users. The app’s interactive features includes sing-along mode, interactive stories, and educational quizzes that reward children with badges and points. The app also uses gamification, "
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "Sounds good. Can you move to the launch phase?",
      "detail": "Sounds good. Can you move to the launch phase?\nClick here to give a mock interview Sure. During the launch phase, hosting launch events and gradually rolling out the app in selected tier-2 cities where there are higher chances of product success.\nShowcase the app’s features and benefits through live demos, child-friendly activities, and hands-on experiences for families. Collaborate with well-known children’s brands and retail chains to feature Spotify Kids in-store and online, offering promotional deals such as free trials with purchases of specific products.\nDuring this phase, what will be your marketing strate"
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "Yes, as far as marketing is concerned, we can launch a social media campaign targeting parents on platforms li",
      "detail": "Yes, as far as marketing is concerned, we can launch a social media campaign targeting parents on platforms like Facebook, Instagram, and YouTube, using playful and engaging content such as videos, contests, and giveaways. We can even consider running targeted ads on YouTube Kids to reach children directly, highlighting the fun and interactive features of Spotify Kids.\nGTM | media.net | Medium Spotify for Kids Furthermore, engage with popular parenting and children’s influencers who can review and promote the app through their channels, sharing authentic and relatable content It seems good. Please move to post-la"
    }
  ],
  "recommendations": [
    "Prioritize the highest-impact P0 bottleneck identified in Spotify Kids GTM Strategy before secondary optimizations.",
    "Pilot the top intervention in a controlled cohort/region with clear North Star and guardrail tracking.",
    "Scale rollout only after verifying unit economics and zero adverse second-order effects."
  ],
  "metricsAndGuardrails": {
    "northStar": "Activated & Retained Beachhead Customers for Spotify Kids GTM Strategy",
    "leading": [
      "Waitlist-to-activation conversion %",
      "CAC vs Day-30 Retention"
    ],
    "guardrails": [
      "CAC Payback Period (months)",
      "Early churn / negative review rate"
    ]
  },
  "synthesisScript": "For media.net’s Spotify Kids GTM Strategy case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Prioritize the highest-impact P0 bottleneck identified in Spotify Kids GTM Strategy before secondary optimizations. We will validate success via Activated & Retained Beachhead Customers for Spotify Kids GTM Strategy while guarding against CAC Payback Period (months).",
  "interviewerTrap": "Targeting 'everyone in the country' on Day 1 or listing generic social ads without defining ICP, positioning, pricing, and phased rollout!",
  "variations": [
    {
      "question": "How would your recommendation change if media.net had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "GTM",
    "correctFramework": "Market Audit → Beachhead ICP & Positioning → 4Ps → Pre-Launch / Launch / Post-Launch",
    "structureOptions": [
      {
        "label": "Define Goal & Beachhead ICP → Craft Positioning & 4Ps → Execute Pre-Launch, Launch, Post-Launch + KPIs",
        "correct": true,
        "feedback": "Textbook GTM! Tight beachhead focus + phased rollout wins every time."
      },
      {
        "label": "Spend 100% of budget on Super Bowl / IPL TV ads on Day 1",
        "correct": false,
        "feedback": "Mass ads before proving activation and channel fit burn cash with poor retention."
      },
      {
        "label": "Focus solely on cutting warehouse electricity costs",
        "correct": false,
        "feedback": "That is a Profitability cost exercise, not a Go-To-Market launch strategy."
      }
    ],
    "decisionQuiz": {
      "question": "Why should a GTM strategy always start with a tight Beachhead ICP instead of the whole market?",
      "options": [
        {
          "label": "Concentrates budget on high-pain early adopters to prove PMF and word-of-mouth before scaling",
          "correct": true,
          "feedback": "Spot on! Winning 1 niche deeply creates momentum and lowers CAC."
        },
        {
          "label": "Because larger markets are illegal to serve",
          "correct": false,
          "feedback": "It is about capital efficiency and PMF focus."
        },
        {
          "label": "To avoid measuring retention",
          "correct": false,
          "feedback": "Retention is easiest to measure and optimize inside a clean beachhead cohort."
        }
      ]
    }
  }
},
{
  "id": "ktc-metrics-blinkit",
  "title": "Blinkit Product Metrics",
  "company": "Tata 1mg",
  "source": "KTC Casebook 2026",
  "track": "Product",
  "category": "Product Metrics",
  "difficulty": 2,
  "isStarter": false,
  "tags": [
    "Tata 1mg",
    "Product Metrics",
    "Product"
  ],
  "prompt": "Blinkit What Metrics will you use to measure the success of Blinkit’s services?",
  "clarifyingQuestions": [
    {
      "q": "Good framing. How would you structure the metrics?",
      "a": "I’d map them to the customer journey funnel. This gives us visibility from awareness all the way to retention.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "● Search-to-Add-to-Cart Ratio – are they finding what they look for?",
      "a": "3. Conversion ● Conversion Rate – % of sessions resulting in purchase ● Average Order Value (AOV) – track upselling and cross-selling effectiveness ● Cart Abandonment Rate – key to spotting friction in checkout flow Blinkit PS — Problem Sta",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "How would you measure Blinkit's success?",
      "a": "First I'd define “success.” Is the goal user growth, customer experience, market position, operating profitability or sustainable growth?",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "Product Mission → User Value Loop (AARRR / HEART) → 1 North Star + L1 Drivers + Guardrails",
  "coreEquation": "Success = North Star Value Delivered × L1 Funnel Velocity (Subject to Quality/Abuse Guardrails)",
  "strategyOverview": "Approach Blinkit Product Metrics (Tata 1mg) using a Product Metrics structure: start by confirming the business objective and scope, decompose the problem cleanly along Product Mission → User Value Loop (AARRR / HEART) → 1 North Star + L1 Drivers + Guardrails, and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Blinkit Product Metrics — Metric Hierarchy",
    "valueText": "L0 / L1 / Guardrail",
    "children": [
      {
        "label": "North Star Metric (Value Delivered to User + Business)",
        "valueText": "Un-gamable KPI",
        "highlight": true
      },
      {
        "label": "L1 Leading Indicators (Activation, Engagement, Retention)",
        "valueText": "Early Signals"
      },
      {
        "label": "Guardrails & Counter-Metrics (Quality, Latency, Cost, Abuse)",
        "valueText": "Safety Check",
        "highlight": true
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Interviewer",
      "prompt": "Blinkit What Metrics will you use to measure the success of Blinkit’s services?",
      "detail": "Blinkit What Metrics will you use to measure the success of Blinkit’s services?\nBlinkit is a quick-commerce platform focused on ultra-fast delivery of groceries and essentials — typically within 10–20 minutes. To measure its success, I’d break it down by core objectives: (1) drive adoption and engagement, (2) boost order frequency and value, and (3) deliver consistently fast and reliable service.\nGood framing. How would you structure the metrics?\nI’d map them to the customer journey funnel. This gives us visibility from awareness all the way to retention."
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "1. Awareness ● New App Installs (daily/weekly) ● Referral Conversions – % of new users acquired via referral p",
      "detail": "1. Awareness ● New App Installs (daily/weekly) ● Referral Conversions – % of new users acquired via referral programs ● Cost per Acquisition (CPA) – track efficiency of campaigns Click here to give a mock interview 2. Engagement ● DAU/MAU Ratio – healthy engagement is crucial in a habit-forming product ● Session Duration & Product Browses per Session – are users exploring enough inventory?\n● Search-to-Add-to-Cart Ratio – are they finding what they look for?\n3. Conversion ● Conversion Rate – % of sessions resulting in purchase ● Average Order Value (AOV) – track upselling and cross-selling effectiveness ● Cart Aba"
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "First I'd define “success.” Is the goal user growth, customer experience, market position, operating profitabi",
      "detail": "First I'd define “success.” Is the goal user growth, customer experience, market position, operating profitability or sustainable growth?\nAssume sustainable business growth.\nAnd over what horizon—this quarter, the next year or the long term?\nAny specific constraint I should keep in mind, such as customer acquisition cost or profitability?"
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "Profitability should be a key guardrail.",
      "detail": "Profitability should be a key guardrail.\nThen I would study the complete order journey and separate growth, engagement/retention, fulfillment quality and economics. The customer journey is app discovery → search/browse → cart → checkout → payment → picking → dispatch → delivery → satisfaction → reorder. Blinkit also depends on store operations and delivery partners, so customer-only metrics would be incomplete.\nChoose one North Star metric.\nBlinkit My proposed North Star would be weekly successfully fulfilled orders from active customers, segmented by new and repeat customers. This captures delivered customer val"
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "Why not gross merchandise value, or GMV?",
      "detail": "Why not gross merchandise value, or GMV?\nGMV can rise through larger baskets, inflation or expensive discounting, without customer loyalty or profitable fulfillment improving. I'd still track GMV = completed orders × average order value, but view it as one output, not proof of sustainable success.\nWhich acquisition metrics matter?\nNew purchasing customers, acquisition cost per first purchaser, install-to-first-order conversion, new-customer activation time and first-order promotion spend. I'd assess acquisition by geography and channel because paid installs that never order are not meaningful."
    }
  ],
  "recommendations": [
    "Search-to-Add-to-Cart Ratio – are they finding what they",
    "Conversion Rate – % of sessions resulting in purchase",
    "Average Order Value (AOV) – track upselling and",
    "Cart Abandonment Rate – key to spotting friction in"
  ],
  "metricsAndGuardrails": {
    "northStar": "Completed Core Value Actions per WAU (Tata 1mg)",
    "leading": [
      "Activation funnel conversion %",
      "D7 / D30 cohort retention"
    ],
    "guardrails": [
      "Spam / error / complaint rate",
      "Unit margin & system latency"
    ]
  },
  "synthesisScript": "For Tata 1mg’s Blinkit Product Metrics case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Search-to-Add-to-Cart Ratio – are they finding what they We will validate success via Completed Core Value Actions per WAU (Tata 1mg) while guarding against Spam / error / complaint rate.",
  "interviewerTrap": "Picking vanity metrics ('Total Downloads', 'Page Views') or forgetting Counter-Metrics / Guardrails that catch metric gaming!",
  "variations": [
    {
      "question": "How would your recommendation change if Tata 1mg had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Product Metrics",
    "correctFramework": "Product Mission → User Value Loop (AARRR / HEART) → 1 North Star + L1 Drivers + Guardrails",
    "structureOptions": [
      {
        "label": "State Value Exchange → Map Funnel (AARRR/HEART) → Pick 1 North Star + L1 Drivers + Counter-Metric Guardrails",
        "correct": true,
        "feedback": "Textbook Metrics structure! Balancing North Star with Guardrails proves senior judgment."
      },
      {
        "label": "Track only Total Registered Users and App Store Impressions",
        "correct": false,
        "feedback": "Vanity metrics ignore actual value delivery, retention, and side effects."
      },
      {
        "label": "Skip metrics and propose an M&A acquisition",
        "correct": false,
        "feedback": "Off-topic for a Product Metrics evaluation prompt."
      }
    ],
    "decisionQuiz": {
      "question": "Why must every North Star Metric be paired with Guardrail (Counter) Metrics?",
      "options": [
        {
          "label": "To ensure optimizing the North Star does not silently degrade quality, margin, latency, or user trust",
          "correct": true,
          "feedback": "Spot on! Guardrails catch gaming and negative second-order effects."
        },
        {
          "label": "Because SQL tables require 3 columns",
          "correct": false,
          "feedback": "It is a product governance principle, not a database rule."
        },
        {
          "label": "To inflate slide counts",
          "correct": false,
          "feedback": "Guardrails directly govern launch/no-launch A/B decisions."
        }
      ]
    }
  }
},
{
  "id": "ktc-72-boosting-loan-growth-metrics",
  "title": "Boosting Loan Growth Metrics",
  "company": "Indus Insights",
  "source": "KTC Casebook 2026",
  "track": "Product",
  "category": "Product Metrics",
  "difficulty": 2,
  "isStarter": false,
  "tags": [
    "Indus Insights",
    "Product Metrics",
    "Product"
  ],
  "prompt": "Boosting Loan Growth Alright, let's dive in. Our client is a European lender using a direct mail campaign for customer acquisition. They've asked us to figure out if it's working and how to make it better. Can you walk me through how you’d approach evaluating the effectiveness of this direct mail campaign?",
  "clarifyingQuestions": [
    {
      "q": "Gladly. First, I’d want to clarify what “effectiveness” really means for us, is the goal more applications, actual loans booked, or maybe just higher engagement? I assume it’s primarily about driving conversions, but wou",
      "a": "Either way, I’d map the customer journey: from mailers sent, to those opened/read, responses, applications, and finally loans disbursed. Comparing these funnel numbers to our digital campaigns should give us an initial benchmark, would that",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Yes, conversions and cost efficiency are our main focus. With that in mind, which KPIs would you hone in on, and why?",
      "a": "Click here to give a mock interview Sure, I’d prioritize these four KPIs:",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "● Response Rate: Tells us basic engagement, did the mailer spark any interest at all?",
      "a": "● Application Rate: Of those reached, who took the next step, shows if messaging is resonating.",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "Product Mission → User Value Loop (AARRR / HEART) → 1 North Star + L1 Drivers + Guardrails",
  "coreEquation": "Success = North Star Value Delivered × L1 Funnel Velocity (Subject to Quality/Abuse Guardrails)",
  "strategyOverview": "Approach Boosting Loan Growth Metrics (Indus Insights) using a Product Metrics structure: start by confirming the business objective and scope, decompose the problem cleanly along Product Mission → User Value Loop (AARRR / HEART) → 1 North Star + L1 Drivers + Guardrails, and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Boosting Loan Growth Metrics — Metric Hierarchy",
    "valueText": "L0 / L1 / Guardrail",
    "children": [
      {
        "label": "North Star Metric (Value Delivered to User + Business)",
        "valueText": "Un-gamable KPI",
        "highlight": true
      },
      {
        "label": "L1 Leading Indicators (Activation, Engagement, Retention)",
        "valueText": "Early Signals"
      },
      {
        "label": "Guardrails & Counter-Metrics (Quality, Latency, Cost, Abuse)",
        "valueText": "Safety Check",
        "highlight": true
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Interviewer",
      "prompt": "Boosting Loan Growth Alright, let's dive in. Our client is a European lender using a direct mail campaign for ",
      "detail": "Boosting Loan Growth Alright, let's dive in. Our client is a European lender using a direct mail campaign for customer acquisition. They've asked us to figure out if it's working and how to make it better. Can you walk me through how you’d approach evaluating the effectiveness of this direct mail campaign?\nGladly. First, I’d want to clarify what “effectiveness” really means for us, is the goal more applications, actual loans booked, or maybe just higher engagement? I assume it’s primarily about driving conversions, but would appreciate your confirmation.\nEither way, I’d map the customer journey: from mailers sent"
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "Click here to give a mock interview Sure, I’d prioritize these four KPIs:",
      "detail": "Click here to give a mock interview Sure, I’d prioritize these four KPIs:\n● Response Rate: Tells us basic engagement, did the mailer spark any interest at all?\n● Application Rate: Of those reached, who took the next step, shows if messaging is resonating.\n● Conversion Rate: Ultimately, how many actually took a loan (the true ROI driver)."
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "● CAC: Costs divided by customers acquired, vital for gauging efficiency versus other channels.",
      "detail": "● CAC: Costs divided by customers acquired, vital for gauging efficiency versus other channels.\nI chose these because they break down the funnel, exposing bottlenecks. I’d track them via unique QR codes, campaign-specific URLs, and CRM source tags. Assuming we log offline actions in our system, we should be able to attribute results cleanly.\nGood. But how do we know if direct mail itself is moving the needle?\nI’d set up a randomized control - split prospects into two groups, one gets the mail, one doesn’t. After the campaign, compare outcomes across both."
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "Boosting Loan Growth That way, we can confidently attribute any lift to the mailers. If there’s room, I’d furt",
      "detail": "Boosting Loan Growth That way, we can confidently attribute any lift to the mailers. If there’s room, I’d further segment, testing different messages or incentives within the treatment group to see what works best.\nMakes sense. What other external factors would you weigh in this analysis?\nA few jump to mind:\n● Demographics: Age, income, region, these likely affect reaction rates."
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "● Credit Score: Some risk profiles may engage/respond differently.",
      "detail": "● Credit Score: Some risk profiles may engage/respond differently.\n● Previous Touchpoints: Existing customers or warmer leads might act differently than cold prospects.\n● Macro Trends: Seasonality or economic environment might skew results.\n● To avoid confounding, I’d use regression or another statistical control method."
    }
  ],
  "recommendations": [
    "Credit Score: Some risk profiles may engage/respond",
    "Previous Touchpoints: Existing customers or warmer leads",
    "Macro Trends: Seasonality or economic environment",
    "To avoid confounding, I’d use regression or another"
  ],
  "metricsAndGuardrails": {
    "northStar": "Completed Core Value Actions per WAU (Indus Insights)",
    "leading": [
      "Activation funnel conversion %",
      "D7 / D30 cohort retention"
    ],
    "guardrails": [
      "Spam / error / complaint rate",
      "Unit margin & system latency"
    ]
  },
  "synthesisScript": "For Indus Insights’s Boosting Loan Growth Metrics case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Credit Score: Some risk profiles may engage/respond We will validate success via Completed Core Value Actions per WAU (Indus Insights) while guarding against Spam / error / complaint rate.",
  "interviewerTrap": "Picking vanity metrics ('Total Downloads', 'Page Views') or forgetting Counter-Metrics / Guardrails that catch metric gaming!",
  "variations": [
    {
      "question": "How would your recommendation change if Indus Insights had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Product Metrics",
    "correctFramework": "Product Mission → User Value Loop (AARRR / HEART) → 1 North Star + L1 Drivers + Guardrails",
    "structureOptions": [
      {
        "label": "State Value Exchange → Map Funnel (AARRR/HEART) → Pick 1 North Star + L1 Drivers + Counter-Metric Guardrails",
        "correct": true,
        "feedback": "Textbook Metrics structure! Balancing North Star with Guardrails proves senior judgment."
      },
      {
        "label": "Track only Total Registered Users and App Store Impressions",
        "correct": false,
        "feedback": "Vanity metrics ignore actual value delivery, retention, and side effects."
      },
      {
        "label": "Skip metrics and propose an M&A acquisition",
        "correct": false,
        "feedback": "Off-topic for a Product Metrics evaluation prompt."
      }
    ],
    "decisionQuiz": {
      "question": "Why must every North Star Metric be paired with Guardrail (Counter) Metrics?",
      "options": [
        {
          "label": "To ensure optimizing the North Star does not silently degrade quality, margin, latency, or user trust",
          "correct": true,
          "feedback": "Spot on! Guardrails catch gaming and negative second-order effects."
        },
        {
          "label": "Because SQL tables require 3 columns",
          "correct": false,
          "feedback": "It is a product governance principle, not a database rule."
        },
        {
          "label": "To inflate slide counts",
          "correct": false,
          "feedback": "Guardrails directly govern launch/no-launch A/B decisions."
        }
      ]
    }
  }
},
{
  "id": "ktc-73-zomato-dark-stores-metrics",
  "title": "Zomato Dark Stores Metrics",
  "company": "Zomato",
  "source": "KTC Casebook 2026",
  "track": "Product",
  "category": "Product Metrics",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "Zomato",
    "Product Metrics",
    "Product"
  ],
  "prompt": "Dark Stores l Zomato is planning to set up a network of dark stores to enable faster grocery delivery in Tier-1 cities. Imagine you're leading the business analysis for this initiative. What are the key metrics and data points you would track to evaluate the performance and viability of these dark stores.",
  "clarifyingQuestions": [
    {
      "q": "Thanks for the question. Before I jump in, can I clarify two things so I aim at the right target?",
      "a": "1. For the pilot, is the priority proving that customers actually adopt ultra-fast delivery, or showing profitability straight away?",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "1. For the pilot, is the priority proving that customers actually adopt ultra-fast delivery, or showing profitability straight away?",
      "a": "2. And scope-wise, are we talking groceries and daily essentials within a tight radius?",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "2. And scope-wise, are we talking groceries and daily essentials within a tight radius?",
      "a": "Let’s assume the main goal right now is enabling ultra-fast grocery delivery to test customer adoption, but profitability will become important once demand is validated.For this pilot, focus is mainly on groceries and daily essentials.",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "Product Mission → User Value Loop (AARRR / HEART) → 1 North Star + L1 Drivers + Guardrails",
  "coreEquation": "Success = North Star Value Delivered × L1 Funnel Velocity (Subject to Quality/Abuse Guardrails)",
  "strategyOverview": "Approach Zomato Dark Stores Metrics (Zomato) using a Product Metrics structure: start by confirming the business objective and scope, decompose the problem cleanly along Product Mission → User Value Loop (AARRR / HEART) → 1 North Star + L1 Drivers + Guardrails, and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Zomato Dark Stores Metrics — Metric Hierarchy",
    "valueText": "L0 / L1 / Guardrail",
    "children": [
      {
        "label": "North Star Metric (Value Delivered to User + Business)",
        "valueText": "Un-gamable KPI",
        "highlight": true
      },
      {
        "label": "L1 Leading Indicators (Activation, Engagement, Retention)",
        "valueText": "Early Signals"
      },
      {
        "label": "Guardrails & Counter-Metrics (Quality, Latency, Cost, Abuse)",
        "valueText": "Safety Check",
        "highlight": true
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Candidate",
      "prompt": "Dark Stores l Zomato is planning to set up a network of dark stores to enable faster grocery delivery in Tier-",
      "detail": "Dark Stores l Zomato is planning to set up a network of dark stores to enable faster grocery delivery in Tier-1 cities. Imagine you're leading the business analysis for this initiative. What are the key metrics and data points you would track to evaluate the performance and viability of these dark stores.\nThanks for the question. Before I jump in, can I clarify two things so I aim at the right target?\n1. For the pilot, is the priority proving that customers actually adopt ultra-fast delivery, or showing profitability straight away?\n2. And scope-wise, are we talking groceries and daily essentials within a tight ra"
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "Let’s assume the main goal right now is enabling ultra-fast grocery delivery to test customer adoption, but pr",
      "detail": "Let’s assume the main goal right now is enabling ultra-fast grocery delivery to test customer adoption, but profitability will become important once demand is validated.For this pilot, focus is mainly on groceries and daily essentials.\nClick here to give a mock interview Perfect, thank you. In that case, I’d structure my metrics across a few buckets: demand, operations, inventory, delivery, customer experience, financial viability, and scalability. Would you like me to start with demand-side metrics first?\nYes, let’s start there.\nI want to see if people in the delivery radius try us and come back."
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "● Penetration: what % of households in the 2 km radius placed at least one order.",
      "detail": "● Penetration: what % of households in the 2 km radius placed at least one order.\n● Simple funnel: visits → checkout → paid orders.\n● Basket & stickiness: average order value, order frequency, D7/D30 repeat, plus top churn reasons.\n● Efficiency: CAC and how quickly we earn it back through margin and repeat."
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "Good. Now how would you think about operations.",
      "detail": "Good. Now how would you think about operations.\nDark Stores l I’ll split it in two: can customers buy what they see, and how fast/accurately do we pick it?\n1. Availability: in-stock %, fill rate, substitution rate (customer pain), forecast error, days of cover, stock accuracy, and spoilage/aged stock.\n2. Store ops: pick lines per hour, pick accuracy, and end-to-end order cycle time from “place order” to “dispatch.” Staffing and capacity vs peak hours also matter."
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "Nice. Inventory management is usually tricky for groceries. What would you track?",
      "detail": "Nice. Inventory management is usually tricky for groceries. What would you track?\nRight, inventory is critical. I’d look at inventory turnover ratio, how fast stock cycles, stockout rate, shrinkage and losses due to spoilage or mismanagement.\nMakes sense.How would you reflect customer experience?\nI’d pair sentiment with root causes: CSAT/NPS tagged to “late,” “substitution,” and “freshness.” Also watch cancellations, refunds, and refund ₹ per order."
    }
  ],
  "recommendations": [
    "Basket & stickiness: average order value, order",
    "Efficiency: CAC and how quickly we earn it back through",
    "Availability: in-stock %, fill rate, substitution rate",
    "Store ops: pick lines per hour, pick accuracy, and"
  ],
  "metricsAndGuardrails": {
    "northStar": "Completed Core Value Actions per WAU (Zomato)",
    "leading": [
      "Activation funnel conversion %",
      "D7 / D30 cohort retention"
    ],
    "guardrails": [
      "Spam / error / complaint rate",
      "Unit margin & system latency"
    ]
  },
  "synthesisScript": "For Zomato’s Zomato Dark Stores Metrics case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Basket & stickiness: average order value, order We will validate success via Completed Core Value Actions per WAU (Zomato) while guarding against Spam / error / complaint rate.",
  "interviewerTrap": "Picking vanity metrics ('Total Downloads', 'Page Views') or forgetting Counter-Metrics / Guardrails that catch metric gaming!",
  "variations": [
    {
      "question": "How would your recommendation change if Zomato had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Product Metrics",
    "correctFramework": "Product Mission → User Value Loop (AARRR / HEART) → 1 North Star + L1 Drivers + Guardrails",
    "structureOptions": [
      {
        "label": "State Value Exchange → Map Funnel (AARRR/HEART) → Pick 1 North Star + L1 Drivers + Counter-Metric Guardrails",
        "correct": true,
        "feedback": "Textbook Metrics structure! Balancing North Star with Guardrails proves senior judgment."
      },
      {
        "label": "Track only Total Registered Users and App Store Impressions",
        "correct": false,
        "feedback": "Vanity metrics ignore actual value delivery, retention, and side effects."
      },
      {
        "label": "Skip metrics and propose an M&A acquisition",
        "correct": false,
        "feedback": "Off-topic for a Product Metrics evaluation prompt."
      }
    ],
    "decisionQuiz": {
      "question": "Why must every North Star Metric be paired with Guardrail (Counter) Metrics?",
      "options": [
        {
          "label": "To ensure optimizing the North Star does not silently degrade quality, margin, latency, or user trust",
          "correct": true,
          "feedback": "Spot on! Guardrails catch gaming and negative second-order effects."
        },
        {
          "label": "Because SQL tables require 3 columns",
          "correct": false,
          "feedback": "It is a product governance principle, not a database rule."
        },
        {
          "label": "To inflate slide counts",
          "correct": false,
          "feedback": "Guardrails directly govern launch/no-launch A/B decisions."
        }
      ]
    }
  }
},
{
  "id": "ktc-74-zerodha-product-metrics",
  "title": "Zerodha Product Metrics",
  "company": "media.net",
  "source": "KTC Casebook 2026",
  "track": "Product",
  "category": "Product Metrics",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "media.net",
    "Product Metrics",
    "Product"
  ],
  "prompt": "Zerodha Your client is Zerodha, a stock broker and financial services company. It offers online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more. As a product manager, evaluate the success metrics for your client.",
  "clarifyingQuestions": [
    {
      "q": "Sure. Can I begin with a few clarifying questions?",
      "a": "Yes, please go ahead.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "First, what’s the time horizon we’re evaluating are we looking at success over the next 12 months, or a longer horizon?",
      "a": "And second, who are the primary users retail investors, institutional investors, or both?",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "And second, who are the primary users retail investors, institutional investors, or both?",
      "a": "The horizon is the next year an primarily, we focus on retail investors, including beginners and experienced traders. We aim to cater to a diverse user base with varying levels of investment knowledge.",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "Product Mission → User Value Loop (AARRR / HEART) → 1 North Star + L1 Drivers + Guardrails",
  "coreEquation": "Success = North Star Value Delivered × L1 Funnel Velocity (Subject to Quality/Abuse Guardrails)",
  "strategyOverview": "Approach Zerodha Product Metrics (media.net) using a Product Metrics structure: start by confirming the business objective and scope, decompose the problem cleanly along Product Mission → User Value Loop (AARRR / HEART) → 1 North Star + L1 Drivers + Guardrails, and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Zerodha Product Metrics — Metric Hierarchy",
    "valueText": "L0 / L1 / Guardrail",
    "children": [
      {
        "label": "North Star Metric (Value Delivered to User + Business)",
        "valueText": "Un-gamable KPI",
        "highlight": true
      },
      {
        "label": "L1 Leading Indicators (Activation, Engagement, Retention)",
        "valueText": "Early Signals"
      },
      {
        "label": "Guardrails & Counter-Metrics (Quality, Latency, Cost, Abuse)",
        "valueText": "Safety Check",
        "highlight": true
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Candidate",
      "prompt": "Zerodha Your client is Zerodha, a stock broker and financial services company. It offers online platform to in",
      "detail": "Zerodha Your client is Zerodha, a stock broker and financial services company. It offers online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more. As a product manager, evaluate the success metrics for your client.\nSure. Can I begin with a few clarifying questions?\nYes, please go ahead.\nFirst, what’s the time horizon we’re evaluating are we looking at success over the next 12 months, or a longer horizon?"
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "And second, who are the primary users retail investors, institutional investors, or both?",
      "detail": "And second, who are the primary users retail investors, institutional investors, or both?\nThe horizon is the next year an primarily, we focus on retail investors, including beginners and experienced traders. We aim to cater to a diverse user base with varying levels of investment knowledge.\nUnderstood. Can you briefly explain the main objectives of Zerodha for the next year?\nClick here to give a mock interview Our primary goals are to increase user acquisition, enhance customer engagement, and improve retention rates. We also want to expand our product offerings and improve the user experience on our platform."
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "That’s clear. Do you also have specific growth targets tied to these goals?",
      "detail": "That’s clear. Do you also have specific growth targets tied to these goals?\nYes, we aim for a 20% increase in active users and a 15% increase in transaction volume year-over-year.\nGot it. Based on that, I’d propose grouping success metrics into a few simple buckets: Acquisition, Engagement, Retention, Transactions, and Satisfaction. Shall I walk through each?\n● Acquisition: New sign-ups, onboarding completion rate (to catch early drop-offs), and CAC (customer acquisition cost)."
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "● Engagement: Daily Active Users (DAU), Monthly Active Users (MAU), and DAU/MAU ratio to gauge stickiness.",
      "detail": "● Engagement: Daily Active Users (DAU), Monthly Active Users (MAU), and DAU/MAU ratio to gauge stickiness.\nZerodha ● Retention: Churn rate (how many users leave the platform each month), and cohort-based repeat usage.\n● Transactions: Total trade volume (₹), number of orders placed, and average revenue per user (ARPU).\n● Satisfaction: Net Promoter Score (NPS), support tickets per 1,000 users, and ratings around platform stability and reliability."
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "That’s a strong framework. Let’s talk about challenges what specific ones might metrics help address?",
      "detail": "That’s a strong framework. Let’s talk about challenges what specific ones might metrics help address?\n1. Volatile markets: During big swings, casual investors disengage so tracking DAU/MAU and transaction frequency will show us when users pull back.\n2. Onboarding drop-offs: If too many new users leave before their first trade, monitoring onboarding completion helps us spot and fix the bottlenecks.\nClick here to give a mock interview Any external risks we should account for?"
    }
  ],
  "recommendations": [
    "Transactions: Total trade volume (₹), number of orders",
    "Satisfaction: Net Promoter Score (NPS), support tickets",
    "Volatile markets: During big swings, casual investors",
    "Onboarding drop-offs: If too many new users leave"
  ],
  "metricsAndGuardrails": {
    "northStar": "Completed Core Value Actions per WAU (media.net)",
    "leading": [
      "Activation funnel conversion %",
      "D7 / D30 cohort retention"
    ],
    "guardrails": [
      "Spam / error / complaint rate",
      "Unit margin & system latency"
    ]
  },
  "synthesisScript": "For media.net’s Zerodha Product Metrics case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Transactions: Total trade volume (₹), number of orders We will validate success via Completed Core Value Actions per WAU (media.net) while guarding against Spam / error / complaint rate.",
  "interviewerTrap": "Picking vanity metrics ('Total Downloads', 'Page Views') or forgetting Counter-Metrics / Guardrails that catch metric gaming!",
  "variations": [
    {
      "question": "How would your recommendation change if media.net had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Product Metrics",
    "correctFramework": "Product Mission → User Value Loop (AARRR / HEART) → 1 North Star + L1 Drivers + Guardrails",
    "structureOptions": [
      {
        "label": "State Value Exchange → Map Funnel (AARRR/HEART) → Pick 1 North Star + L1 Drivers + Counter-Metric Guardrails",
        "correct": true,
        "feedback": "Textbook Metrics structure! Balancing North Star with Guardrails proves senior judgment."
      },
      {
        "label": "Track only Total Registered Users and App Store Impressions",
        "correct": false,
        "feedback": "Vanity metrics ignore actual value delivery, retention, and side effects."
      },
      {
        "label": "Skip metrics and propose an M&A acquisition",
        "correct": false,
        "feedback": "Off-topic for a Product Metrics evaluation prompt."
      }
    ],
    "decisionQuiz": {
      "question": "Why must every North Star Metric be paired with Guardrail (Counter) Metrics?",
      "options": [
        {
          "label": "To ensure optimizing the North Star does not silently degrade quality, margin, latency, or user trust",
          "correct": true,
          "feedback": "Spot on! Guardrails catch gaming and negative second-order effects."
        },
        {
          "label": "Because SQL tables require 3 columns",
          "correct": false,
          "feedback": "It is a product governance principle, not a database rule."
        },
        {
          "label": "To inflate slide counts",
          "correct": false,
          "feedback": "Guardrails directly govern launch/no-launch A/B decisions."
        }
      ]
    }
  }
},
{
  "id": "ktc-75-ceo-dashboard-features-metrics",
  "title": "CEO Dashboard Features & Metrics",
  "company": "media.net",
  "source": "KTC Casebook 2026",
  "track": "Product",
  "category": "Product Metrics",
  "difficulty": 4,
  "isStarter": false,
  "tags": [
    "media.net",
    "Product Metrics",
    "Product"
  ],
  "prompt": "CEO Dashboard Features Assume you are the CEO of a fast-growing tech startup. You’ve been asked to define a dashboard that you’ll review daily to track the health of the business. What are the top 5 key metrics you would include on your CEO dashboard, and why?",
  "clarifyingQuestions": [
    {
      "q": "Alright, before suggesting the metrics, I’d like to ask some clarifying questions to better understand the business context. Could you tell me what stage the company is in and what product domain it operates in?",
      "a": "We are a 6-month post-MVP startup. Our product line is sound systems - amplifiers, speakers, and full-fledged sets.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Got it. Do we operate only in B2C or is there also a B2B component?",
      "a": "We operate in both: B2C is finished systems, B2B is raw component sales.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "And for B2C specifically, could you tell me more about our major sales channels?",
      "a": "Click here to give a mock interview Yes. Our online sales come from:",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "Product Mission → User Value Loop (AARRR / HEART) → 1 North Star + L1 Drivers + Guardrails",
  "coreEquation": "Success = North Star Value Delivered × L1 Funnel Velocity (Subject to Quality/Abuse Guardrails)",
  "strategyOverview": "Approach CEO Dashboard Features & Metrics (media.net) using a Product Metrics structure: start by confirming the business objective and scope, decompose the problem cleanly along Product Mission → User Value Loop (AARRR / HEART) → 1 North Star + L1 Drivers + Guardrails, and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "CEO Dashboard Features & Metrics — Metric Hierarchy",
    "valueText": "L0 / L1 / Guardrail",
    "children": [
      {
        "label": "North Star Metric (Value Delivered to User + Business)",
        "valueText": "Un-gamable KPI",
        "highlight": true
      },
      {
        "label": "L1 Leading Indicators (Activation, Engagement, Retention)",
        "valueText": "Early Signals"
      },
      {
        "label": "Guardrails & Counter-Metrics (Quality, Latency, Cost, Abuse)",
        "valueText": "Safety Check",
        "highlight": true
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Interviewer",
      "prompt": "CEO Dashboard Features Assume you are the CEO of a fast-growing tech startup. You’ve been asked to define a da",
      "detail": "CEO Dashboard Features Assume you are the CEO of a fast-growing tech startup. You’ve been asked to define a dashboard that you’ll review daily to track the health of the business. What are the top 5 key metrics you would include on your CEO dashboard, and why?\nAlright, before suggesting the metrics, I’d like to ask some clarifying questions to better understand the business context. Could you tell me what stage the company is in and what product domain it operates in?\nWe are a 6-month post-MVP startup. Our product line is sound systems - amplifiers, speakers, and full-fledged sets.\nGot it. Do we operate only in B"
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "We operate in both: B2C is finished systems, B2B is raw component sales.",
      "detail": "We operate in both: B2C is finished systems, B2B is raw component sales.\nAnd for B2C specifically, could you tell me more about our major sales channels?\nClick here to give a mock interview Yes. Our online sales come from:\n● Amazon – 64% ● Flipkart – 34% ● Own website – 2% Understood. Apart from sales, what are the critical business levers or pain points we’re tracking in B2C?"
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "For B2C, we track advertising effectiveness, e-commerce sales, customer feedback, complaints/issues, customer ",
      "detail": "For B2C, we track advertising effectiveness, e-commerce sales, customer feedback, complaints/issues, customer care queries, popularity on Google, and replacement orders.\nThat’s helpful. And on the B2B side, what are the key drivers?\nWe’re still exploring, but the important levers are supply relationships, contract pipelines, and fulfillment reliability.\nAnd for B2C specifically, could you tell me more about our major sales channels?"
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "CEO Dashboard Features Perfect. With that in mind, here are the five metrics I’d put on a CEO dashboard simple",
      "detail": "CEO Dashboard Features Perfect. With that in mind, here are the five metrics I’d put on a CEO dashboard simple enough to glance at daily, but broad enough to reflect the company’s health:\n1. Daily Sales & Revenue Split (B2B vs B2C, by channel):\ntells us where traction is coming from.\n2. Gross Margin: not just revenue, but whether we’re making money after costs."
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "3. Customer Experience: # of complaints, replacement orders, and a simple NPS score.",
      "detail": "3. Customer Experience: # of complaints, replacement orders, and a simple NPS score.\n4. Order Fulfillment & Reliability: are we shipping on time, are vendors meeting commitments?\n5. Marketing Reach & Visibility: CAC, traffic to our website, and brand search trends.\nTogether, these cover growth, profitability, customer health, supply chain, and brand presence."
    }
  ],
  "recommendations": [
    "Product: Complaints, replacements, defect rates.",
    "Marketing: CAC, traffic, ad ROI, Google popularity.",
    "Finance: Revenue split, gross margin, contribution margin,",
    "CEO: Unified 5 metrics for overall business health, with"
  ],
  "metricsAndGuardrails": {
    "northStar": "Completed Core Value Actions per WAU (media.net)",
    "leading": [
      "Activation funnel conversion %",
      "D7 / D30 cohort retention"
    ],
    "guardrails": [
      "Spam / error / complaint rate",
      "Unit margin & system latency"
    ]
  },
  "synthesisScript": "For media.net’s CEO Dashboard Features & Metrics case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Product: Complaints, replacements, defect rates. We will validate success via Completed Core Value Actions per WAU (media.net) while guarding against Spam / error / complaint rate.",
  "interviewerTrap": "Picking vanity metrics ('Total Downloads', 'Page Views') or forgetting Counter-Metrics / Guardrails that catch metric gaming!",
  "variations": [
    {
      "question": "How would your recommendation change if media.net had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Product Metrics",
    "correctFramework": "Product Mission → User Value Loop (AARRR / HEART) → 1 North Star + L1 Drivers + Guardrails",
    "structureOptions": [
      {
        "label": "State Value Exchange → Map Funnel (AARRR/HEART) → Pick 1 North Star + L1 Drivers + Counter-Metric Guardrails",
        "correct": true,
        "feedback": "Textbook Metrics structure! Balancing North Star with Guardrails proves senior judgment."
      },
      {
        "label": "Track only Total Registered Users and App Store Impressions",
        "correct": false,
        "feedback": "Vanity metrics ignore actual value delivery, retention, and side effects."
      },
      {
        "label": "Skip metrics and propose an M&A acquisition",
        "correct": false,
        "feedback": "Off-topic for a Product Metrics evaluation prompt."
      }
    ],
    "decisionQuiz": {
      "question": "Why must every North Star Metric be paired with Guardrail (Counter) Metrics?",
      "options": [
        {
          "label": "To ensure optimizing the North Star does not silently degrade quality, margin, latency, or user trust",
          "correct": true,
          "feedback": "Spot on! Guardrails catch gaming and negative second-order effects."
        },
        {
          "label": "Because SQL tables require 3 columns",
          "correct": false,
          "feedback": "It is a product governance principle, not a database rule."
        },
        {
          "label": "To inflate slide counts",
          "correct": false,
          "feedback": "Guardrails directly govern launch/no-launch A/B decisions."
        }
      ]
    }
  }
},
{
  "id": "ktc-76-linkedin-job-posting-feature-metrics",
  "title": "LinkedIn Job Posting Feature Metrics",
  "company": "LinkedIn - TPF",
  "source": "KTC Casebook 2026",
  "track": "Product",
  "category": "Product Metrics",
  "difficulty": 4,
  "isStarter": false,
  "tags": [
    "LinkedIn - TPF",
    "Product Metrics",
    "Product"
  ],
  "prompt": "Job Posting Feature Let’s dive into the job posting flow at LinkedIn. Just to set the stage, what do you think is the core product goal for this feature?",
  "clarifyingQuestions": [
    {
      "q": "The core goal is to quickly connect employers with the best-fit candidates. That means shortening time to hire, improving hire quality, balancing supply and demand, and also monetizing promoted listings along the way. Do",
      "a": "Right, so it’s a mix of efficiency and business goals. When you think about the different people involved, who would you say are the key stakeholders, and what does each care about?",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Right, so it’s a mix of efficiency and business goals. When you think about the different people involved, who would you say are the key stakeholders, and what does each care about?",
      "a": "We’ve got four main groups.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Click here to give a mock interview Nice breakdown. And how about external factors, what forces do you think most affect how this product performs?",
      "a": "Several. Legal and regulatory forces like anti-discrimination and hiring laws definitely play a role. Economic cycles influence hiring demand, and social trends like the rise of remote work shape candidate preferences.",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "Product Mission → User Value Loop (AARRR / HEART) → 1 North Star + L1 Drivers + Guardrails",
  "coreEquation": "Success = North Star Value Delivered × L1 Funnel Velocity (Subject to Quality/Abuse Guardrails)",
  "strategyOverview": "Approach LinkedIn Job Posting Feature Metrics (LinkedIn - TPF) using a Product Metrics structure: start by confirming the business objective and scope, decompose the problem cleanly along Product Mission → User Value Loop (AARRR / HEART) → 1 North Star + L1 Drivers + Guardrails, and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "LinkedIn Job Posting Feature Metrics — Metric Hierarchy",
    "valueText": "L0 / L1 / Guardrail",
    "children": [
      {
        "label": "North Star Metric (Value Delivered to User + Business)",
        "valueText": "Un-gamable KPI",
        "highlight": true
      },
      {
        "label": "L1 Leading Indicators (Activation, Engagement, Retention)",
        "valueText": "Early Signals"
      },
      {
        "label": "Guardrails & Counter-Metrics (Quality, Latency, Cost, Abuse)",
        "valueText": "Safety Check",
        "highlight": true
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Interviewer",
      "prompt": "Job Posting Feature Let’s dive into the job posting flow at LinkedIn. Just to set the stage, what do you think",
      "detail": "Job Posting Feature Let’s dive into the job posting flow at LinkedIn. Just to set the stage, what do you think is the core product goal for this feature?\nThe core goal is to quickly connect employers with the best-fit candidates. That means shortening time to hire, improving hire quality, balancing supply and demand, and also monetizing promoted listings along the way. Does that sound right?\nRight, so it’s a mix of efficiency and business goals. When you think about the different people involved, who would you say are the key stakeholders, and what does each care about?\nWe’ve got four main groups."
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "● Employers want fast, predictable, quality hires.",
      "detail": "● Employers want fast, predictable, quality hires.\n● Candidates want relevant roles and an easy, transparent application process.\n● LinkedIn itself wants engagement, trust, and revenue.\n● And hiring managers or ATS tools want smooth integrations and accurate data sync."
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "Click here to give a mock interview Nice breakdown. And how about external factors, what forces do you think m",
      "detail": "Click here to give a mock interview Nice breakdown. And how about external factors, what forces do you think most affect how this product performs?\nSeveral. Legal and regulatory forces like anti-discrimination and hiring laws definitely play a role. Economic cycles influence hiring demand, and social trends like the rise of remote work shape candidate preferences.\nWe also need to account for tech advancements like AI matching, and privacy regulations like GDPR or CCPA. Interestingly, environmental impact is low here.\nYeah, that tracks. Let’s talk about data now, if you had to instrument the product, what are the "
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "Job Posting Feature We need to track two funnels:",
      "detail": "Job Posting Feature We need to track two funnels:\n● Employer funnel: post → publish → promote → outreach → interviews → hire ● Candidate funnel: impression → click → view → apply start → submit → interview → offer Both need instrumentation at each step to detect drop-offs and optimize performance.\nGood. And when it comes to measuring outcomes what kind of OKRs would you set, especially for content quality or product adoption?\nOne challenge I’ve noticed is that many sellers struggle with English-only fields, which often leads to vague or inaccurate job descriptions. So one OKR could be improving the clarity and co"
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "Another could be tied to reducing time-to-fill or increasing funnel conversion rates.",
      "detail": "Another could be tied to reducing time-to-fill or increasing funnel conversion rates.\nClick here to give a mock interview Fair point on the language barrier. Lastly, can you give me formulas for a few of the key funnel metrics?\n● Fill rate = hires within 45 days / total posts ● CTR = clicks / impressions ● App completion rate = submitted applications / started applications ● Apply-to-Interview rate = interviews / total applications ● Time-to-first-contact = median(hours from application to first recruiter contact) Perfect. Super comprehensive. You’ve touched on both tactical and strategic layers, and your stakeho"
    }
  ],
  "recommendations": [
    "Fill rate = hires within 45 days / total posts",
    "App completion rate = submitted applications / started",
    "Apply-to-Interview rate = interviews / total applications",
    "Time-to-first-contact = median(hours from application to"
  ],
  "metricsAndGuardrails": {
    "northStar": "Completed Core Value Actions per WAU (LinkedIn - TPF)",
    "leading": [
      "Activation funnel conversion %",
      "D7 / D30 cohort retention"
    ],
    "guardrails": [
      "Spam / error / complaint rate",
      "Unit margin & system latency"
    ]
  },
  "synthesisScript": "For LinkedIn - TPF’s LinkedIn Job Posting Feature Metrics case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Fill rate = hires within 45 days / total posts We will validate success via Completed Core Value Actions per WAU (LinkedIn - TPF) while guarding against Spam / error / complaint rate.",
  "interviewerTrap": "Picking vanity metrics ('Total Downloads', 'Page Views') or forgetting Counter-Metrics / Guardrails that catch metric gaming!",
  "variations": [
    {
      "question": "How would your recommendation change if LinkedIn - TPF had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Product Metrics",
    "correctFramework": "Product Mission → User Value Loop (AARRR / HEART) → 1 North Star + L1 Drivers + Guardrails",
    "structureOptions": [
      {
        "label": "State Value Exchange → Map Funnel (AARRR/HEART) → Pick 1 North Star + L1 Drivers + Counter-Metric Guardrails",
        "correct": true,
        "feedback": "Textbook Metrics structure! Balancing North Star with Guardrails proves senior judgment."
      },
      {
        "label": "Track only Total Registered Users and App Store Impressions",
        "correct": false,
        "feedback": "Vanity metrics ignore actual value delivery, retention, and side effects."
      },
      {
        "label": "Skip metrics and propose an M&A acquisition",
        "correct": false,
        "feedback": "Off-topic for a Product Metrics evaluation prompt."
      }
    ],
    "decisionQuiz": {
      "question": "Why must every North Star Metric be paired with Guardrail (Counter) Metrics?",
      "options": [
        {
          "label": "To ensure optimizing the North Star does not silently degrade quality, margin, latency, or user trust",
          "correct": true,
          "feedback": "Spot on! Guardrails catch gaming and negative second-order effects."
        },
        {
          "label": "Because SQL tables require 3 columns",
          "correct": false,
          "feedback": "It is a product governance principle, not a database rule."
        },
        {
          "label": "To inflate slide counts",
          "correct": false,
          "feedback": "Guardrails directly govern launch/no-launch A/B decisions."
        }
      ]
    }
  }
},
{
  "id": "ktc-77-snapchat-product-critique",
  "title": "Snapchat Product Critique",
  "company": "Tata 1mg",
  "source": "KTC Casebook 2026",
  "track": "Product",
  "category": "Product Critique",
  "difficulty": 2,
  "isStarter": false,
  "tags": [
    "Tata 1mg",
    "Product Critique",
    "Product"
  ],
  "prompt": "Snapchat Hi, let’s start with a product critique. What’s your favourite product?",
  "clarifyingQuestions": [
    {
      "q": "What are its most helpful features?",
      "a": "Interesting! Of those several products, what is so great about Snapchat that has drawn you in?",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Interesting! Of those several products, what is so great about Snapchat that has drawn you in?",
      "a": "I like Snapchat because it is a multimedia messaging app, and it lets me send disappearing snaps, videos, and chats-not to mention stories. I get to share various types of media with such great speed, and the filtered photos and videos are ",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "So, all in all, it sounds like a pretty good experience. What about pain points? Is there anything that you think could be improved upon?",
      "a": "Click here to give a mock interview Uh, definitely! I think one of the big issues I've come across is cluttered filters. They're a little disorganised; some may be difficult to find out. And I think people just turn off doing that more than",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "CIRCLES (Goal → Priority Persona → Journey Pain Points → Prioritized MVP → Trade-offs & Metrics)",
  "coreEquation": "Product Impact = Priority Persona Frequency × P0 Pain Severity × Adoption %",
  "strategyOverview": "Approach Snapchat Product Critique (Tata 1mg) using a Product Critique structure: start by confirming the business objective and scope, decompose the problem cleanly along CIRCLES (Goal → Priority Persona → Journey Pain Points → Prioritized MVP → Trade-offs & Metrics), and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Snapchat Product Critique — User & Product Tree",
    "valueText": "Persona → Pain → Fix",
    "children": [
      {
        "label": "1. Priority Persona Selection (Pick 1 Beachhead)",
        "valueText": "High Freq / Pain",
        "highlight": true
      },
      {
        "label": "2. End-to-End Journey & P0 Pain Points",
        "valueText": "Impact × Effort",
        "highlight": true
      },
      {
        "label": "3. MVP Solutions, Trade-offs & Guardrails",
        "valueText": "North Star"
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Interviewer",
      "prompt": "Snapchat Hi, let’s start with a product critique. What’s your favourite product?",
      "detail": "Snapchat Hi, let’s start with a product critique. What’s your favourite product?\nI’d say Snapchat is my favourite.\nWhat are its most helpful features?"
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "Interesting! Of those several products, what is so great about Snapchat that has drawn you in?",
      "detail": "Interesting! Of those several products, what is so great about Snapchat that has drawn you in?\nI like Snapchat because it is a multimedia messaging app, and it lets me send disappearing snaps, videos, and chats-not to mention stories. I get to share various types of media with such great speed, and the filtered photos and videos are just so much fun! And SnapStreak is so interactive; it keeps me going to keep up the streaks. Also, Snap Map is really a cool way to share your location in real time with your friends.Few other apps do that, really.\nSo, all in all, it sounds like a pretty good experience. What about p"
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "Click here to give a mock interview Uh, definitely! I think one of the big issues I've come across is cluttere",
      "detail": "Click here to give a mock interview Uh, definitely! I think one of the big issues I've come across is cluttered filters. They're a little disorganised; some may be difficult to find out. And I think people just turn off doing that more than they actually should.\nThat's a valid criticism. How would you fix it?\nFirst, I’d look at filters because they are high-frequency, high-engagement features. I’d categorize them (seasonal, trending, AR) and add search + 'favourite filters'. This is a low engineering effort but likely to reduce friction and increase daily engagement. We can measure success by tracking % of users "
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "That totally makes sense. That could really keep people in if things are organised. What else have you noticed",
      "detail": "That totally makes sense. That could really keep people in if things are organised. What else have you noticed that could use some improvement?\nAnother thing is the Discover page. The algorithm there isn't quite as strong versus other platforms such as Instagram Reels or YouTube Shorts. It tends to show people irrelevant content, which in turn people skip over.\nSnapchat Yeah, recommendations of content are so important. How would you improve that?"
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "For Discover, I’d focus on improving relevance since irrelevant content drives drop-offs. I’d combine behavior",
      "detail": "For Discover, I’d focus on improving relevance since irrelevant content drives drop-offs. I’d combine behavioral data (past views, skips) with explicit preferences (topic selection) to personalize the feed. I’d run an A/B test and measure CTR, time spent per session, and % of users returning to Discover within 24 hours.\nGood! Personalization is the name of the game nowadays.\nAnything else bothers you?"
    }
  ],
  "recommendations": [
    "Prioritize the highest-impact P0 bottleneck identified in Snapchat Product Critique before secondary optimizations.",
    "Pilot the top intervention in a controlled cohort/region with clear North Star and guardrail tracking.",
    "Scale rollout only after verifying unit economics and zero adverse second-order effects."
  ],
  "metricsAndGuardrails": {
    "northStar": "Core Task Completion / Weekly Active Value Users for Tata 1mg",
    "leading": [
      "Feature discovery & Day-1 adoption %",
      "7-day repeat usage rate"
    ],
    "guardrails": [
      "Core app latency / checkout conversion",
      "Support tickets & uninstall rate"
    ]
  },
  "synthesisScript": "For Tata 1mg’s Snapchat Product Critique case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Prioritize the highest-impact P0 bottleneck identified in Snapchat Product Critique before secondary optimizations. We will validate success via Core Task Completion / Weekly Active Value Users for Tata 1mg while guarding against Core app latency / checkout conversion.",
  "interviewerTrap": "Listing 8 shiny features for 'all users' without picking ONE priority persona, ranking pain points, or naming trade-offs!",
  "variations": [
    {
      "question": "How would your recommendation change if Tata 1mg had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Product Critique",
    "correctFramework": "CIRCLES (Goal → Priority Persona → Journey Pain Points → Prioritized MVP → Trade-offs & Metrics)",
    "structureOptions": [
      {
        "label": "Clarify Goal → Pick 1 Priority Persona → Map Pain Points → Rank P0 Fixes → Define North Star & Trade-offs",
        "correct": true,
        "feedback": "Crisp CIRCLES flow! Selecting one persona shows real PM discipline."
      },
      {
        "label": "Suggest adding AI chatbots, AR, crypto rewards, and dark mode immediately",
        "correct": false,
        "feedback": "Buzzword feature-dumping without user pain grounding fails PM interviews."
      },
      {
        "label": "Run a supply-side Value Chain raw-material audit",
        "correct": false,
        "feedback": "That belongs to manufacturing Profitability, not Product Design/UX."
      }
    ],
    "decisionQuiz": {
      "question": "After identifying 3 user personas in a Product Design/Improvement case, what is the strongest move?",
      "options": [
        {
          "label": "Pick ONE primary persona for v1 based on frequency/pain and explain why others wait for v2",
          "correct": true,
          "feedback": "Exactly! Solving deeply for one segment beats building a mediocre tool for everyone."
        },
        {
          "label": "Design separate apps for all 3 simultaneously",
          "correct": false,
          "feedback": "Fragments engineering focus and UX coherence."
        },
        {
          "label": "Skip personas and start pricing tiers",
          "correct": false,
          "feedback": "You must understand user needs before designing or pricing."
        }
      ]
    }
  }
},
{
  "id": "ktc-crit-uber",
  "title": "Uber App Product Critique",
  "company": "Zomato",
  "source": "KTC Casebook 2026",
  "track": "Product",
  "category": "Product Critique",
  "difficulty": 1,
  "isStarter": true,
  "tags": [
    "Zomato",
    "Product Critique",
    "Mobility",
    "Marketplace UX"
  ],
  "prompt": "Uber Hi! Let’s start with a simple question to warm up. What’s your favourite product, and why?",
  "clarifyingQuestions": [
    {
      "q": "That’s a great perspective. Can you walk me through how Uber addresses the very first stage of a user's journey when they decide to travel?",
      "a": "It starts with a very simple problem- I need to get somewhere.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Once a user decides to move forward, how does Uber build trust and transparency before the ride even starts?",
      "a": "I get transparency before I even get into the vehicle. Once I enter my destination, I can see an estimated fare, ETA and the available options before I commit. That solves a very human problem. I don't have to ask, \"Bhaiya, kitna loge?\" and",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "I get transparency before I even get into the vehicle. Once I enter my destination, I can see an estimated fare, ETA and the available options before I commit. That solves a very human problem. I don't have to ask, \"Bhai",
      "a": "I already know roughly what the trip is going to cost and how long I might have to wait. I also think this creates trust because the experience is much more predictable. Even when prices vary because of demand, I can see the price before ma",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "Value Prop Audit → End-to-End Rider Journey → Friction Hypotheses → Metrics & Fixes",
  "coreEquation": "Product Impact = Priority Persona Frequency × P0 Pain Severity × Adoption %",
  "strategyOverview": "Balance what Uber nails (upfront price/mode choice, live map tracking, integrated safety/payments) with objective funnel critique (search-to-booking, driver acceptance, post-accept cancellations, ETA accuracy, complex pickup zones). Prioritize peak supply cancellations and pickup pin accuracy.",
  "tree": {
    "label": "Uber App Product Critique — User & Product Tree",
    "valueText": "Persona → Pain → Fix",
    "children": [
      {
        "label": "1. Priority Persona Selection (Pick 1 Beachhead)",
        "valueText": "High Freq / Pain",
        "highlight": true
      },
      {
        "label": "2. End-to-End Journey & P0 Pain Points",
        "valueText": "Impact × Effort",
        "highlight": true
      },
      {
        "label": "3. MVP Solutions, Trade-offs & Guardrails",
        "valueText": "North Star"
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Interviewer",
      "prompt": "Uber Hi! Let’s start with a simple question to warm up. What’s your favourite product, and why?",
      "detail": "Uber Hi! Let’s start with a simple question to warm up. What’s your favourite product, and why?\nIf I had to pick my favourite product, I would pick Uber. What I really like about Uber is that it has taken something as mundane as travelling from one place to another and made the entire experience feel simple and predictable. So instead of looking at Uber as just a cab-booking app, I think about it as a journey where every step removes a little bit of friction for the user.\nThat’s a great perspective. Can you walk me through how Uber addresses the very first stage of a user's journey when they decide to travel?\nIt "
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "Imagine I'm leaving college at 8 PM and I need to get home.",
      "detail": "Imagine I'm leaving college at 8 PM and I need to get home.\nEarlier, I would have to stand outside, find an auto or cab, negotiate the price and then hope the driver actually agrees to take me. With Uber, I simply enter where I want to go, and the transportation comes to me. I think that's the first big breakthrough, Uber changed transportation from something I had to actively find into something I could request on demand. I also like that I'm not restricted to just one mode.\nClick here to give a mock interview Depending on the situation, I can choose a Bike if I'm in a hurry, an Auto if I want something affordab"
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "I get transparency before I even get into the vehicle. Once I enter my destination, I can see an estimated far",
      "detail": "I get transparency before I even get into the vehicle. Once I enter my destination, I can see an estimated fare, ETA and the available options before I commit. That solves a very human problem. I don't have to ask, \"Bhaiya, kitna loge?\" and negotiate.\nI already know roughly what the trip is going to cost and how long I might have to wait. I also think this creates trust because the experience is much more predictable. Even when prices vary because of demand, I can see the price before making a decision rather than discovering it at the end.\nUber PS — Problem Statement: “What is your favourite product? Explain wha"
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "Let's begin simply. What is your favourite product?",
      "detail": "Let's begin simply. What is your favourite product?\nI'd choose Uber. What I admire is less the act of booking a cab and more the way Uber turns uncertain travel into an experience with visible choices, price estimates, driver matching, tracking and payment. I would assess it from the perspective of a passenger and then briefly consider the driver side, because this is a two-sided marketplace.\nWhat user problem does it solve better than the alternatives?\nThe core job is, “Get me from A to B with predictable time, cost and safety.” Without an app, I may have to find transport, negotiate a fare and coordinate a pick"
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "Can you break down the user journey more precisely?",
      "detail": "Can you break down the user journey more precisely?\nYes. Need / discovery → destination and ride selection → fare and ETA → driver matching → pickup coordination → ride and safety → payment → feedback and repeat usage. I would look for where users abandon the journey, where trust breaks down and where users need to leave the app to solve a problem.\nWhich three features stand out?\nUber First, pre-trip transparency: seeing approximate fare, pickup ETA and ride choices before commitment. Second, real-time coordination: driver and vehicle information, live tracking and maps."
    }
  ],
  "recommendations": [
    "Prioritize the highest-impact P0 bottleneck identified in Uber App Product Critique before secondary optimizations.",
    "Pilot the top intervention in a controlled cohort/region with clear North Star and guardrail tracking.",
    "Scale rollout only after verifying unit economics and zero adverse second-order effects."
  ],
  "metricsAndGuardrails": {
    "northStar": "Core Task Completion / Weekly Active Value Users for Zomato",
    "leading": [
      "Feature discovery & Day-1 adoption %",
      "7-day repeat usage rate"
    ],
    "guardrails": [
      "Core app latency / checkout conversion",
      "Support tickets & uninstall rate"
    ]
  },
  "synthesisScript": "For Zomato’s Uber App Product Critique case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Prioritize the highest-impact P0 bottleneck identified in Uber App Product Critique before secondary optimizations. We will validate success via Core Task Completion / Weekly Active Value Users for Zomato while guarding against Core app latency / checkout conversion.",
  "interviewerTrap": "Giving purely subjective opinions ('I hate the font') instead of tying UX problems to funnel metrics like pre-pickup cancellations and ETA variance!",
  "variations": [
    {
      "question": "How would your recommendation change if Zomato had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Product Critique",
    "correctFramework": "CIRCLES (Goal → Priority Persona → Journey Pain Points → Prioritized MVP → Trade-offs & Metrics)",
    "structureOptions": [
      {
        "label": "Clarify Goal → Pick 1 Priority Persona → Map Pain Points → Rank P0 Fixes → Define North Star & Trade-offs",
        "correct": true,
        "feedback": "Crisp CIRCLES flow! Selecting one persona shows real PM discipline."
      },
      {
        "label": "Suggest adding AI chatbots, AR, crypto rewards, and dark mode immediately",
        "correct": false,
        "feedback": "Buzzword feature-dumping without user pain grounding fails PM interviews."
      },
      {
        "label": "Run a supply-side Value Chain raw-material audit",
        "correct": false,
        "feedback": "That belongs to manufacturing Profitability, not Product Design/UX."
      }
    ],
    "decisionQuiz": {
      "question": "After identifying 3 user personas in a Product Design/Improvement case, what is the strongest move?",
      "options": [
        {
          "label": "Pick ONE primary persona for v1 based on frequency/pain and explain why others wait for v2",
          "correct": true,
          "feedback": "Exactly! Solving deeply for one segment beats building a mediocre tool for everyone."
        },
        {
          "label": "Design separate apps for all 3 simultaneously",
          "correct": false,
          "feedback": "Fragments engineering focus and UX coherence."
        },
        {
          "label": "Skip personas and start pricing tiers",
          "correct": false,
          "feedback": "You must understand user needs before designing or pricing."
        }
      ]
    }
  }
},
{
  "id": "ktc-79-unstop-product-critique",
  "title": "Unstop Product Critique",
  "company": "American Express",
  "source": "KTC Casebook 2026",
  "track": "Product",
  "category": "Product Critique",
  "difficulty": 2,
  "isStarter": false,
  "tags": [
    "American Express",
    "Product Critique",
    "Product"
  ],
  "prompt": "Unstop Which app do you think is particularly useful for college students in terms of professional development?",
  "clarifyingQuestions": [
    {
      "q": "Good pick. Can you break down what you find most valuable about Unstop?",
      "a": "● Breadth of opportunities: Competitions, hackathons, internships, and job listings in one place.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "What sets it apart from other platforms?",
      "a": "Its unique selling point is end-to-end participation — not just job listings but live skill-building through competitions and hackathons, which LinkedIn doesn’t focus on.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Fair. But every product has gaps. What are some drawbacks you’ve noticed?",
      "a": "The competition diversity could improve, especially in fields like social impact or sustainability. The UI can feel cluttered, and mentor access isn’t always timely. Also, some competitions lack value, and international opportunities are li",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "CIRCLES (Goal → Priority Persona → Journey Pain Points → Prioritized MVP → Trade-offs & Metrics)",
  "coreEquation": "Product Impact = Priority Persona Frequency × P0 Pain Severity × Adoption %",
  "strategyOverview": "Approach Unstop Product Critique (American Express) using a Product Critique structure: start by confirming the business objective and scope, decompose the problem cleanly along CIRCLES (Goal → Priority Persona → Journey Pain Points → Prioritized MVP → Trade-offs & Metrics), and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Unstop Product Critique — User & Product Tree",
    "valueText": "Persona → Pain → Fix",
    "children": [
      {
        "label": "1. Priority Persona Selection (Pick 1 Beachhead)",
        "valueText": "High Freq / Pain",
        "highlight": true
      },
      {
        "label": "2. End-to-End Journey & P0 Pain Points",
        "valueText": "Impact × Effort",
        "highlight": true
      },
      {
        "label": "3. MVP Solutions, Trade-offs & Guardrails",
        "valueText": "North Star"
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Interviewer",
      "prompt": "Unstop Which app do you think is particularly useful for college students in terms of professional development",
      "detail": "Unstop Which app do you think is particularly useful for college students in terms of professional development?\nUnstop stands out for students. It goes beyond job searches, helping them grow skills and build networks through various competitions, internships, and learning opportunities.\nGood pick. Can you break down what you find most valuable about Unstop?\n● Breadth of opportunities: Competitions, hackathons, internships, and job listings in one place."
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "● Personalization: Tailored recommendations based on interests.",
      "detail": "● Personalization: Tailored recommendations based on interests.\n● Mentorship access: Expert sessions and guidance, though I think there’s scope to improve availability.\n● Platform convenience: Single login for discovery, participation, and applications — reduces friction.\nWhat sets it apart from other platforms?"
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "Its unique selling point is end-to-end participation — not just job listings but live skill-building through c",
      "detail": "Its unique selling point is end-to-end participation — not just job listings but live skill-building through competitions and hackathons, which LinkedIn doesn’t focus on.\nClick here to give a mock interview It also gives businesses a dedicated place to engage with students, which creates a stronger ecosystem.\nFair. But every product has gaps. What are some drawbacks you’ve noticed?\nThe competition diversity could improve, especially in fields like social impact or sustainability. The UI can feel cluttered, and mentor access isn’t always timely. Also, some competitions lack value, and international opportunities a"
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "What improvements would you suggest?",
      "detail": "What improvements would you suggest?\n● UI revamp: Simplify navigation using tabs (Competitions | Jobs | Mentorship | Community).\n● Mentor SLAs: Guarantee mentor response times or allow users to book slots.\n● Feedback & gamification: Provide post-competition scorecards and badges to boost engagement."
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "● Community layer: Discussion forums and peer groups around themes (AI, consulting, design) to drive ongoing e",
      "detail": "● Community layer: Discussion forums and peer groups around themes (AI, consulting, design) to drive ongoing engagement beyond events.\nUnstop ● International expansion: Partner with global universities and orgs to bring in cross-border opportunities.\nGood suggestions. How would you measure success if these were implemented?\n● UI improvement: Drop in bounce rate and increase in avg."
    }
  ],
  "recommendations": [
    "International impact: Number of global competitions",
    "Strengthen partnerships with colleges to make Unstop the",
    "Launch exclusive hackathons and industry challenges that",
    "Use data analytics to create career pathways — e.g.,"
  ],
  "metricsAndGuardrails": {
    "northStar": "Core Task Completion / Weekly Active Value Users for American Express",
    "leading": [
      "Feature discovery & Day-1 adoption %",
      "7-day repeat usage rate"
    ],
    "guardrails": [
      "Core app latency / checkout conversion",
      "Support tickets & uninstall rate"
    ]
  },
  "synthesisScript": "For American Express’s Unstop Product Critique case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: International impact: Number of global competitions We will validate success via Core Task Completion / Weekly Active Value Users for American Express while guarding against Core app latency / checkout conversion.",
  "interviewerTrap": "Listing 8 shiny features for 'all users' without picking ONE priority persona, ranking pain points, or naming trade-offs!",
  "variations": [
    {
      "question": "How would your recommendation change if American Express had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Product Critique",
    "correctFramework": "CIRCLES (Goal → Priority Persona → Journey Pain Points → Prioritized MVP → Trade-offs & Metrics)",
    "structureOptions": [
      {
        "label": "Clarify Goal → Pick 1 Priority Persona → Map Pain Points → Rank P0 Fixes → Define North Star & Trade-offs",
        "correct": true,
        "feedback": "Crisp CIRCLES flow! Selecting one persona shows real PM discipline."
      },
      {
        "label": "Suggest adding AI chatbots, AR, crypto rewards, and dark mode immediately",
        "correct": false,
        "feedback": "Buzzword feature-dumping without user pain grounding fails PM interviews."
      },
      {
        "label": "Run a supply-side Value Chain raw-material audit",
        "correct": false,
        "feedback": "That belongs to manufacturing Profitability, not Product Design/UX."
      }
    ],
    "decisionQuiz": {
      "question": "After identifying 3 user personas in a Product Design/Improvement case, what is the strongest move?",
      "options": [
        {
          "label": "Pick ONE primary persona for v1 based on frequency/pain and explain why others wait for v2",
          "correct": true,
          "feedback": "Exactly! Solving deeply for one segment beats building a mediocre tool for everyone."
        },
        {
          "label": "Design separate apps for all 3 simultaneously",
          "correct": false,
          "feedback": "Fragments engineering focus and UX coherence."
        },
        {
          "label": "Skip personas and start pricing tiers",
          "correct": false,
          "feedback": "You must understand user needs before designing or pricing."
        }
      ]
    }
  }
},
{
  "id": "ktc-80-milk-basket-product-critique",
  "title": "Milk Basket Product Critique",
  "company": "Zomato",
  "source": "KTC Casebook 2026",
  "track": "Product",
  "category": "Product Critique",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "Zomato",
    "Product Critique",
    "Product"
  ],
  "prompt": "Milk Basket ● “Recipe of the Day” Feature – Curate daily recipes with a one-click option to add all ingredients to the cart. Test in one city first, then scale regionally with localized dishes.",
  "clarifyingQuestions": [
    {
      "q": "Nice. How would you measure success for these initiatives?",
      "a": "For Search:",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Are there any risks you’d watch out for?",
      "a": "Click here to give a mock interview For search, the key risk is data privacy and compliance when training new models. We’d need legal checks on storing and processing user queries. The recipe feature has fewer risks but should be tested car",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "CIRCLES (Goal → Priority Persona → Journey Pain Points → Prioritized MVP → Trade-offs & Metrics)",
  "coreEquation": "Product Impact = Priority Persona Frequency × P0 Pain Severity × Adoption %",
  "strategyOverview": "Approach Milk Basket Product Critique (Zomato) using a Product Critique structure: start by confirming the business objective and scope, decompose the problem cleanly along CIRCLES (Goal → Priority Persona → Journey Pain Points → Prioritized MVP → Trade-offs & Metrics), and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Milk Basket Product Critique — User & Product Tree",
    "valueText": "Persona → Pain → Fix",
    "children": [
      {
        "label": "1. Priority Persona Selection (Pick 1 Beachhead)",
        "valueText": "High Freq / Pain",
        "highlight": true
      },
      {
        "label": "2. End-to-End Journey & P0 Pain Points",
        "valueText": "Impact × Effort",
        "highlight": true
      },
      {
        "label": "3. MVP Solutions, Trade-offs & Guardrails",
        "valueText": "North Star"
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Candidate",
      "prompt": "Milk Basket ● “Recipe of the Day” Feature – Curate daily recipes with a one-click option to add all ingredient",
      "detail": "Milk Basket ● “Recipe of the Day” Feature – Curate daily recipes with a one-click option to add all ingredients to the cart. Test in one city first, then scale regionally with localized dishes.\nThis adds novelty and repeat engagement.\nNice. How would you measure success for these initiatives?"
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "● % of searches leading to cart additions or completed orders (target: increase from ~78% to 82–84%).",
      "detail": "● % of searches leading to cart additions or completed orders (target: increase from ~78% to 82–84%).\n● Classifier precision (ideally >95%) and recall for vernacular queries.\nFor Recipe of the Day:"
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "● Conversion rate from viewing to ordering.",
      "detail": "● Conversion rate from viewing to ordering.\n● Monthly retention (aiming for 80%+ repeat users engaging with the feature).\nAre there any risks you’d watch out for?"
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "Click here to give a mock interview For search, the key risk is data privacy and compliance when training new ",
      "detail": "Click here to give a mock interview For search, the key risk is data privacy and compliance when training new models. We’d need legal checks on storing and processing user queries. The recipe feature has fewer risks but should be tested carefully for regional acceptance.\nGreat. Could you summarize your thought process?\n● Start with why I love the product → set context with personal connection."
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "● Identify pain points → prioritized by impact vs effort.",
      "detail": "● Identify pain points → prioritized by impact vs effort.\n● Select solutions → vernacular search & recipe engagement.\n● Define success metrics and risks."
    }
  ],
  "recommendations": [
    "Identify pain points → prioritized by impact vs effort.",
    "Select solutions → vernacular search & recipe",
    "Define success metrics and risks.",
    "End with a structured summary that shows both user"
  ],
  "metricsAndGuardrails": {
    "northStar": "Core Task Completion / Weekly Active Value Users for Zomato",
    "leading": [
      "Feature discovery & Day-1 adoption %",
      "7-day repeat usage rate"
    ],
    "guardrails": [
      "Core app latency / checkout conversion",
      "Support tickets & uninstall rate"
    ]
  },
  "synthesisScript": "For Zomato’s Milk Basket Product Critique case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Identify pain points → prioritized by impact vs effort. We will validate success via Core Task Completion / Weekly Active Value Users for Zomato while guarding against Core app latency / checkout conversion.",
  "interviewerTrap": "Listing 8 shiny features for 'all users' without picking ONE priority persona, ranking pain points, or naming trade-offs!",
  "variations": [
    {
      "question": "How would your recommendation change if Zomato had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Product Critique",
    "correctFramework": "CIRCLES (Goal → Priority Persona → Journey Pain Points → Prioritized MVP → Trade-offs & Metrics)",
    "structureOptions": [
      {
        "label": "Clarify Goal → Pick 1 Priority Persona → Map Pain Points → Rank P0 Fixes → Define North Star & Trade-offs",
        "correct": true,
        "feedback": "Crisp CIRCLES flow! Selecting one persona shows real PM discipline."
      },
      {
        "label": "Suggest adding AI chatbots, AR, crypto rewards, and dark mode immediately",
        "correct": false,
        "feedback": "Buzzword feature-dumping without user pain grounding fails PM interviews."
      },
      {
        "label": "Run a supply-side Value Chain raw-material audit",
        "correct": false,
        "feedback": "That belongs to manufacturing Profitability, not Product Design/UX."
      }
    ],
    "decisionQuiz": {
      "question": "After identifying 3 user personas in a Product Design/Improvement case, what is the strongest move?",
      "options": [
        {
          "label": "Pick ONE primary persona for v1 based on frequency/pain and explain why others wait for v2",
          "correct": true,
          "feedback": "Exactly! Solving deeply for one segment beats building a mediocre tool for everyone."
        },
        {
          "label": "Design separate apps for all 3 simultaneously",
          "correct": false,
          "feedback": "Fragments engineering focus and UX coherence."
        },
        {
          "label": "Skip personas and start pricing tiers",
          "correct": false,
          "feedback": "You must understand user needs before designing or pricing."
        }
      ]
    }
  }
},
{
  "id": "ktc-crit-myntra",
  "title": "Myntra Product Critique",
  "company": "Meesho",
  "source": "KTC Casebook 2026",
  "track": "Product",
  "category": "Product Critique",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "Meesho",
    "Product Critique",
    "Product"
  ],
  "prompt": "Myntra Hi, let’s begin with the case. What is your favourite product?",
  "clarifyingQuestions": [
    {
      "q": "Good observations. Now let’s get into product critique — what pain points have you experienced?",
      "a": "Click here to give a mock interview Two key issues come to mind:",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "What is our primary business objective and timeframe for this decision?",
      "a": "Optimize long-term value and core KPIs for Meesho.",
      "why": "Aligns prioritization and trade-offs with leadership goals."
    }
  ],
  "frameworkUsed": "CIRCLES (Goal → Priority Persona → Journey Pain Points → Prioritized MVP → Trade-offs & Metrics)",
  "coreEquation": "Product Impact = Priority Persona Frequency × P0 Pain Severity × Adoption %",
  "strategyOverview": "Approach Myntra Product Critique (Meesho) using a Product Critique structure: start by confirming the business objective and scope, decompose the problem cleanly along CIRCLES (Goal → Priority Persona → Journey Pain Points → Prioritized MVP → Trade-offs & Metrics), and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Myntra Product Critique — User & Product Tree",
    "valueText": "Persona → Pain → Fix",
    "children": [
      {
        "label": "1. Priority Persona Selection (Pick 1 Beachhead)",
        "valueText": "High Freq / Pain",
        "highlight": true
      },
      {
        "label": "2. End-to-End Journey & P0 Pain Points",
        "valueText": "Impact × Effort",
        "highlight": true
      },
      {
        "label": "3. MVP Solutions, Trade-offs & Guardrails",
        "valueText": "North Star"
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Interviewer",
      "prompt": "Myntra Hi, let’s begin with the case. What is your favourite product?",
      "detail": "Myntra Hi, let’s begin with the case. What is your favourite product?\nI’d pick Myntra. It’s India’s largest fashion and lifestyle e-tailer and offers a premium, curated shopping experience that appeals to fashion-conscious users.\nGreat. Tell me about some appealing features that attract you to this product.\n● Latest trends, easy discovery: Myntra stays ahead of fashion trends and has a very intuitive UI for browsing."
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "● Personalization: It uses data to provide size",
      "detail": "● Personalization: It uses data to provide size\nrecommendations based on my past purchases.\n● Emotional connection: Myntra recognizes fashion as a form of identity and expression, not just a transactional purchase.\nGood observations. Now let’s get into product critique — what pain points have you experienced?"
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "Click here to give a mock interview Two key issues come to mind:",
      "detail": "Click here to give a mock interview Two key issues come to mind:\n● Limited selection in new categories (like electronics and home essentials).\n● Inconsistent product quality and authenticity for some items.\nLet’s go deeper on the first one — limited selection."
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "Problem: As Myntra expands into adjacent categories, users sometimes find too few options compared to competit",
      "detail": "Problem: As Myntra expands into adjacent categories, users sometimes find too few options compared to competitors like Amazon/Flipkart.\n● Brand partnerships: Onboard more partner brands in these categories.\n● Data-driven curation: Use search data to identify gaps and prioritize high-demand products.\n● Marketplace model: Allow vetted third-party sellers to list products to scale supply faster."
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "That seems like a reasonable approach. Now, let's address the issue of product quality and authenticity.",
      "detail": "That seems like a reasonable approach. Now, let's address the issue of product quality and authenticity.\nMyntra Problem: Some users receive items that don’t match description or quality expectations, which erodes trust.\n● AR Virtual Try-on: Let users preview outfits in real time to set expectations right.\n● AI-driven fit feedback: Suggest optimal size based on measurements + past returns."
    }
  ],
  "recommendations": [
    "How it works: Users can invite friends/family to a shared",
    "Use cases: Great for wedding shopping, gifting, group",
    "Impact: Boosts social engagement and drives multi-user",
    "Metrics: Track group wishlist creations, votes per group,"
  ],
  "metricsAndGuardrails": {
    "northStar": "Core Task Completion / Weekly Active Value Users for Meesho",
    "leading": [
      "Feature discovery & Day-1 adoption %",
      "7-day repeat usage rate"
    ],
    "guardrails": [
      "Core app latency / checkout conversion",
      "Support tickets & uninstall rate"
    ]
  },
  "synthesisScript": "For Meesho’s Myntra Product Critique case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: How it works: Users can invite friends/family to a shared We will validate success via Core Task Completion / Weekly Active Value Users for Meesho while guarding against Core app latency / checkout conversion.",
  "interviewerTrap": "Listing 8 shiny features for 'all users' without picking ONE priority persona, ranking pain points, or naming trade-offs!",
  "variations": [
    {
      "question": "How would your recommendation change if Meesho had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Product Critique",
    "correctFramework": "CIRCLES (Goal → Priority Persona → Journey Pain Points → Prioritized MVP → Trade-offs & Metrics)",
    "structureOptions": [
      {
        "label": "Clarify Goal → Pick 1 Priority Persona → Map Pain Points → Rank P0 Fixes → Define North Star & Trade-offs",
        "correct": true,
        "feedback": "Crisp CIRCLES flow! Selecting one persona shows real PM discipline."
      },
      {
        "label": "Suggest adding AI chatbots, AR, crypto rewards, and dark mode immediately",
        "correct": false,
        "feedback": "Buzzword feature-dumping without user pain grounding fails PM interviews."
      },
      {
        "label": "Run a supply-side Value Chain raw-material audit",
        "correct": false,
        "feedback": "That belongs to manufacturing Profitability, not Product Design/UX."
      }
    ],
    "decisionQuiz": {
      "question": "After identifying 3 user personas in a Product Design/Improvement case, what is the strongest move?",
      "options": [
        {
          "label": "Pick ONE primary persona for v1 based on frequency/pain and explain why others wait for v2",
          "correct": true,
          "feedback": "Exactly! Solving deeply for one segment beats building a mediocre tool for everyone."
        },
        {
          "label": "Design separate apps for all 3 simultaneously",
          "correct": false,
          "feedback": "Fragments engineering focus and UX coherence."
        },
        {
          "label": "Skip personas and start pricing tiers",
          "correct": false,
          "feedback": "You must understand user needs before designing or pricing."
        }
      ]
    }
  }
},
{
  "id": "ktc-82-reddit-product-critique",
  "title": "Reddit Product Critique",
  "company": "media.net",
  "source": "KTC Casebook 2026",
  "track": "Product",
  "category": "Product Critique",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "media.net",
    "Product Critique",
    "Product"
  ],
  "prompt": "Reddit Hi, let us start with the case. What is your favourite app?",
  "clarifyingQuestions": [
    {
      "q": "Good choice. What features do you find most helpful?",
      "a": "So, Reddit offers several compelling features.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "And why Reddit over other platforms like Instagram or Facebook?",
      "a": "Unlike other platforms optimized for quick dopamine hits, Reddit focuses on depth and quality of discussion.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Fair point. But Reddit’s popularity still lags competitors. Why do you think that is?",
      "a": "The biggest factor is poor mobile app experience. Reddit’s web experience is stronger, but the majority of social media users are mobile-first. If the app isn’t compelling, growth stalls.",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "CIRCLES (Goal → Priority Persona → Journey Pain Points → Prioritized MVP → Trade-offs & Metrics)",
  "coreEquation": "Product Impact = Priority Persona Frequency × P0 Pain Severity × Adoption %",
  "strategyOverview": "Approach Reddit Product Critique (media.net) using a Product Critique structure: start by confirming the business objective and scope, decompose the problem cleanly along CIRCLES (Goal → Priority Persona → Journey Pain Points → Prioritized MVP → Trade-offs & Metrics), and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Reddit Product Critique — User & Product Tree",
    "valueText": "Persona → Pain → Fix",
    "children": [
      {
        "label": "1. Priority Persona Selection (Pick 1 Beachhead)",
        "valueText": "High Freq / Pain",
        "highlight": true
      },
      {
        "label": "2. End-to-End Journey & P0 Pain Points",
        "valueText": "Impact × Effort",
        "highlight": true
      },
      {
        "label": "3. MVP Solutions, Trade-offs & Guardrails",
        "valueText": "North Star"
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Interviewer",
      "prompt": "Reddit Hi, let us start with the case. What is your favourite app?",
      "detail": "Reddit Hi, let us start with the case. What is your favourite app?\nI’d choose Reddit. It’s a platform that enables deep, authentic discussions through its subreddit-based community structure, giving users a space to explore virtually any topic.\nGood choice. What features do you find most helpful?\nSo, Reddit offers several compelling features."
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "● Community variety: Thousands of subreddits for every interest — niche or broad.",
      "detail": "● Community variety: Thousands of subreddits for every interest — niche or broad.\n● Anonymity: Users can engage without revealing identity, encouraging honest discussions.\n● Nested comment threads: Enables rich, multi-level conversations instead of shallow engagement.\n● Voting system: Surfaces the most relevant, useful, or entertaining content."
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "And why Reddit over other platforms like Instagram or Facebook?",
      "detail": "And why Reddit over other platforms like Instagram or Facebook?\nUnlike other platforms optimized for quick dopamine hits, Reddit focuses on depth and quality of discussion.\nClick here to give a mock interview The upvote/downvote mechanism rewards valuable content, and the lack of real-name pressure creates a safe space for honest knowledge-sharing.\nFair point. But Reddit’s popularity still lags competitors. Why do you think that is?"
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "The biggest factor is poor mobile app experience. Reddit’s web experience is stronger, but the majority of soc",
      "detail": "The biggest factor is poor mobile app experience. Reddit’s web experience is stronger, but the majority of social media users are mobile-first. If the app isn’t compelling, growth stalls.\nCan you break down the major issues with the app?\n● Outdated, text-heavy design makes it feel cluttered.\n● Limited thread exploration hampers navigation."
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "● No clear visual distinction between posts and comments.",
      "detail": "● No clear visual distinction between posts and comments.\n● Poor ad integration disrupts the experience.\n● Video playback is slow and buffers frequently.\n● Clicking links opens an internal browser that disrupts flow."
    }
  ],
  "recommendations": [
    "Infinite thread navigation to encourage deeper",
    "Optimize video playback to reduce buffering by using",
    "Better link-handling: Open links in-app with a persistent",
    "Deleted comment access: Allow viewing of deleted comment"
  ],
  "metricsAndGuardrails": {
    "northStar": "Core Task Completion / Weekly Active Value Users for media.net",
    "leading": [
      "Feature discovery & Day-1 adoption %",
      "7-day repeat usage rate"
    ],
    "guardrails": [
      "Core app latency / checkout conversion",
      "Support tickets & uninstall rate"
    ]
  },
  "synthesisScript": "For media.net’s Reddit Product Critique case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Infinite thread navigation to encourage deeper We will validate success via Core Task Completion / Weekly Active Value Users for media.net while guarding against Core app latency / checkout conversion.",
  "interviewerTrap": "Listing 8 shiny features for 'all users' without picking ONE priority persona, ranking pain points, or naming trade-offs!",
  "variations": [
    {
      "question": "How would your recommendation change if media.net had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Product Critique",
    "correctFramework": "CIRCLES (Goal → Priority Persona → Journey Pain Points → Prioritized MVP → Trade-offs & Metrics)",
    "structureOptions": [
      {
        "label": "Clarify Goal → Pick 1 Priority Persona → Map Pain Points → Rank P0 Fixes → Define North Star & Trade-offs",
        "correct": true,
        "feedback": "Crisp CIRCLES flow! Selecting one persona shows real PM discipline."
      },
      {
        "label": "Suggest adding AI chatbots, AR, crypto rewards, and dark mode immediately",
        "correct": false,
        "feedback": "Buzzword feature-dumping without user pain grounding fails PM interviews."
      },
      {
        "label": "Run a supply-side Value Chain raw-material audit",
        "correct": false,
        "feedback": "That belongs to manufacturing Profitability, not Product Design/UX."
      }
    ],
    "decisionQuiz": {
      "question": "After identifying 3 user personas in a Product Design/Improvement case, what is the strongest move?",
      "options": [
        {
          "label": "Pick ONE primary persona for v1 based on frequency/pain and explain why others wait for v2",
          "correct": true,
          "feedback": "Exactly! Solving deeply for one segment beats building a mediocre tool for everyone."
        },
        {
          "label": "Design separate apps for all 3 simultaneously",
          "correct": false,
          "feedback": "Fragments engineering focus and UX coherence."
        },
        {
          "label": "Skip personas and start pricing tiers",
          "correct": false,
          "feedback": "You must understand user needs before designing or pricing."
        }
      ]
    }
  }
},
{
  "id": "ktc-83-google-cloud-platform-gcp-critique",
  "title": "Google Cloud Platform (GCP) Critique",
  "company": "Google",
  "source": "KTC Casebook 2026",
  "track": "Product",
  "category": "Product Critique",
  "difficulty": 4,
  "isStarter": false,
  "tags": [
    "Google",
    "Product Critique",
    "Product"
  ],
  "prompt": "Google Cloud Platform (GCP) What is your favourite Google product and why?",
  "clarifyingQuestions": [
    {
      "q": "Click here to give a mock interview What user problems does GCP solve?",
      "a": "Different segments have distinct pain points:",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "And how does GCP provide solutions across these segments?",
      "a": "● For developers: Quick setup, app instances, storage, samples, and a clean console. You can go from code to demo in a day.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "How does GCP compare to competitors like AWS or DigitalOcean?",
      "a": "● DigitalOcean: Great for indie developers, but very command-line heavy and not enterprise-ready.",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "CIRCLES (Goal → Priority Persona → Journey Pain Points → Prioritized MVP → Trade-offs & Metrics)",
  "coreEquation": "Product Impact = Priority Persona Frequency × P0 Pain Severity × Adoption %",
  "strategyOverview": "Approach Google Cloud Platform (GCP) Critique (Google) using a Product Critique structure: start by confirming the business objective and scope, decompose the problem cleanly along CIRCLES (Goal → Priority Persona → Journey Pain Points → Prioritized MVP → Trade-offs & Metrics), and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Google Cloud Platform (GCP) Critique — User & Product Tree",
    "valueText": "Persona → Pain → Fix",
    "children": [
      {
        "label": "1. Priority Persona Selection (Pick 1 Beachhead)",
        "valueText": "High Freq / Pain",
        "highlight": true
      },
      {
        "label": "2. End-to-End Journey & P0 Pain Points",
        "valueText": "Impact × Effort",
        "highlight": true
      },
      {
        "label": "3. MVP Solutions, Trade-offs & Guardrails",
        "valueText": "North Star"
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Interviewer",
      "prompt": "Google Cloud Platform (GCP) What is your favourite Google product and why?",
      "detail": "Google Cloud Platform (GCP) What is your favourite Google product and why?\nMy favourite product is Google Cloud Platform (GCP). I find it fascinating because of its scale, sophistication, and how it supports multiple user segments. I’ll explain my reasoning in three parts:\n1. Business objective 2. User problems it solves 3. Solutions and trade-offs compared to competitors Let’s begin with the business objective.\nAt its core, Google’s mission is to make the world’s information universally accessible and useful. GCP aligns with this by making Google’s computing power, storage, and AI capabilities accessible to deve"
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "Click here to give a mock interview What user problems does GCP solve?",
      "detail": "Click here to give a mock interview What user problems does GCP solve?\nDifferent segments have distinct pain points:\n● Individual developers: Don’t want to host servers or set up heavy IT. They need to spin up an app or MVP quickly and deploy live within hours.\n● Small businesses: Need slightly more complexity—domains, Gmail, storage, databases—while still keeping setup simple and affordable."
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "● Large enterprises: Often spend millions on server farms and infrastructure. GCP helps them cut costs, scale ",
      "detail": "● Large enterprises: Often spend millions on server farms and infrastructure. GCP helps them cut costs, scale faster, and access modern AI/analytics tools without maintaining everything in-house.\nAnd how does GCP provide solutions across these segments?\n● For developers: Quick setup, app instances, storage, samples, and a clean console. You can go from code to demo in a day.\nGoogle Cloud Platform (GCP) ● For small businesses: Domains, App Engine, storage, collaboration tools—everything to run operations smoothly."
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "● For enterprises: A full suite—compute, networking, analytics, AI, databases, developer tools (literally 25+ ",
      "detail": "● For enterprises: A full suite—compute, networking, analytics, AI, databases, developer tools (literally 25+ services). It’s a one-stop platform.\nHow does GCP compare to competitors like AWS or DigitalOcean?\n● DigitalOcean: Great for indie developers, but very command-line heavy and not enterprise-ready.\n● AWS: Fantastic for enterprises, but extremely complex—indie developers often find it overwhelming."
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "● GCP: Strikes a balance. Easier for indie devs and small businesses to start with, while still robust enough ",
      "detail": "● GCP: Strikes a balance. Easier for indie devs and small businesses to start with, while still robust enough for enterprises. AWS may still have an edge for enterprise, but GCP excels in AI/ML and developer-friendliness.\nWhat improvements would you suggest for GCP?\nClick here to give a mock interview ● Simplify further for indie developers: More guided flows, tutorials, and starter templates.\n● Expose advanced AI/ML tools to individual developers in easier, “plug-and-play” formats."
    }
  ],
  "recommendations": [
    "User Problems: Developers → speed; SMBs →",
    "Solutions: Tailored features for each segment, spanning",
    "Comparison: Better for indie devs than AWS, more",
    "Improvements: Simplicity, AI accessibility, clearer product"
  ],
  "metricsAndGuardrails": {
    "northStar": "Core Task Completion / Weekly Active Value Users for Google",
    "leading": [
      "Feature discovery & Day-1 adoption %",
      "7-day repeat usage rate"
    ],
    "guardrails": [
      "Core app latency / checkout conversion",
      "Support tickets & uninstall rate"
    ]
  },
  "synthesisScript": "For Google’s Google Cloud Platform (GCP) Critique case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: User Problems: Developers → speed; SMBs → We will validate success via Core Task Completion / Weekly Active Value Users for Google while guarding against Core app latency / checkout conversion.",
  "interviewerTrap": "Listing 8 shiny features for 'all users' without picking ONE priority persona, ranking pain points, or naming trade-offs!",
  "variations": [
    {
      "question": "How would your recommendation change if Google had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Product Critique",
    "correctFramework": "CIRCLES (Goal → Priority Persona → Journey Pain Points → Prioritized MVP → Trade-offs & Metrics)",
    "structureOptions": [
      {
        "label": "Clarify Goal → Pick 1 Priority Persona → Map Pain Points → Rank P0 Fixes → Define North Star & Trade-offs",
        "correct": true,
        "feedback": "Crisp CIRCLES flow! Selecting one persona shows real PM discipline."
      },
      {
        "label": "Suggest adding AI chatbots, AR, crypto rewards, and dark mode immediately",
        "correct": false,
        "feedback": "Buzzword feature-dumping without user pain grounding fails PM interviews."
      },
      {
        "label": "Run a supply-side Value Chain raw-material audit",
        "correct": false,
        "feedback": "That belongs to manufacturing Profitability, not Product Design/UX."
      }
    ],
    "decisionQuiz": {
      "question": "After identifying 3 user personas in a Product Design/Improvement case, what is the strongest move?",
      "options": [
        {
          "label": "Pick ONE primary persona for v1 based on frequency/pain and explain why others wait for v2",
          "correct": true,
          "feedback": "Exactly! Solving deeply for one segment beats building a mediocre tool for everyone."
        },
        {
          "label": "Design separate apps for all 3 simultaneously",
          "correct": false,
          "feedback": "Fragments engineering focus and UX coherence."
        },
        {
          "label": "Skip personas and start pricing tiers",
          "correct": false,
          "feedback": "You must understand user needs before designing or pricing."
        }
      ]
    }
  }
},
{
  "id": "ktc-84-litflask-3-in-1-smart-water-bottle-critique",
  "title": "LitFlask 3-in-1 Smart Water Bottle Critique",
  "company": "American Express",
  "source": "KTC Casebook 2026",
  "track": "Product",
  "category": "Product Critique",
  "difficulty": 4,
  "isStarter": false,
  "tags": [
    "American Express",
    "Product Critique",
    "Product"
  ],
  "prompt": "LitFlask 3-in-1 Smart Water Bottle Hi, let’s begin with the case. What’s your favorite physical product?",
  "clarifyingQuestions": [
    {
      "q": "Great—can you tell me what features make it so appealing?",
      "a": "Absolutely, here’s why I love it:",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Interesting. What other products is LitFlask competing with, and how is the current landscape?",
      "a": "The landscape falls into two main categories:",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "LitFlask 3-in-1 Smart Water Bottle What’s the goal for improving this product?",
      "a": "The chief goal would be to drive engagement and frequency of use, turning it from a novelty gadget into a daily-essential.",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "CIRCLES (Goal → Priority Persona → Journey Pain Points → Prioritized MVP → Trade-offs & Metrics)",
  "coreEquation": "Product Impact = Priority Persona Frequency × P0 Pain Severity × Adoption %",
  "strategyOverview": "Approach LitFlask 3-in-1 Smart Water Bottle Critique (American Express) using a Product Critique structure: start by confirming the business objective and scope, decompose the problem cleanly along CIRCLES (Goal → Priority Persona → Journey Pain Points → Prioritized MVP → Trade-offs & Metrics), and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "LitFlask 3-in-1 Smart Water Bottle Critique — User & Product Tree",
    "valueText": "Persona → Pain → Fix",
    "children": [
      {
        "label": "1. Priority Persona Selection (Pick 1 Beachhead)",
        "valueText": "High Freq / Pain",
        "highlight": true
      },
      {
        "label": "2. End-to-End Journey & P0 Pain Points",
        "valueText": "Impact × Effort",
        "highlight": true
      },
      {
        "label": "3. MVP Solutions, Trade-offs & Guardrails",
        "valueText": "North Star"
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Interviewer",
      "prompt": "LitFlask 3-in-1 Smart Water Bottle Hi, let’s begin with the case. What’s your favorite physical product?",
      "detail": "LitFlask 3-in-1 Smart Water Bottle Hi, let’s begin with the case. What’s your favorite physical product?\nMy favorite physical product is the LitFlask 3-in-1 Smart Water Bottle. It uniquely combines hydration, entertainment, and power—all in one portable device—perfect for modern active lifestyles.\nGreat—can you tell me what features make it so appealing?\nAbsolutely, here’s why I love it:"
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "● Multifunctionality: It integrates three core utilities—water bottle, Bluetooth speaker, and 5,000 mAh power ",
      "detail": "● Multifunctionality: It integrates three core utilities—water bottle, Bluetooth speaker, and 5,000 mAh power bank—so you only need one item when heading out.\n● Outdoor-friendly design: It’s made of vacuum-insulated stainless steel, keeping drinks cold for hours, and is splash-resistant—ideal for gyms, beach trips, or hikes.\nClick here to give a mock interview ● Ambient lighting & sync: LED lights sync with music playback, adding ambiance and mood, and ensure you can locate the bottle after dark. Plus, the “Bump Technology” allows two LitFlasks to sync up for stereo sound.\nInteresting. What other products is LitF"
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "The landscape falls into two main categories:",
      "detail": "The landscape falls into two main categories:\n● Conventional water bottles (e.g., Hydro Flask)—reliable, simple, and insulated, but lack smart features.\n● Smart bottles (e.g., HidrateSpark, self-cleaning bottles like LARQ)—they focus on hydration tracking or sterilization, but don’t offer entertainment or power backup.\nLitFlask sits at a unique intersection—hydration meets fun meets utility."
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "LitFlask 3-in-1 Smart Water Bottle What’s the goal for improving this product?",
      "detail": "LitFlask 3-in-1 Smart Water Bottle What’s the goal for improving this product?\nThe chief goal would be to drive engagement and frequency of use, turning it from a novelty gadget into a daily-essential.\nEngagement supports stronger customer loyalty, word-of-mouth, and upsell opportunities (e.g., accessories or branded additions).\nWho are the key customer segments you’d focus on, and what are their pain points?"
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "● Outdoor enthusiasts (hikers, campers): Want durability, ambient lighting, and multiple utilities to minimize",
      "detail": "● Outdoor enthusiasts (hikers, campers): Want durability, ambient lighting, and multiple utilities to minimize what they carry.\n● Fitness buffs / gym-goers: Need hydration, music, and the ability to charge devices—without multiple items cluttering their bag or locker.\n● Urban commuters / festival-goers: Appreciate portability, music, charging, and visibility (LED lighting) in one compact package.\nClick here to give a mock interview Pain points include carrying multiple gadgets, forgetting power banks or speakers, and wanting more immersive experiences during outdoor or fitness activities."
    }
  ],
  "recommendations": [
    "Goal: Increase engagement and daily usage.",
    "Customers: outdoor users, fitness enthusiasts,",
    "Solution: Push light-based reminders and notifications as",
    "Trade-offs: battery usage vs. utility; simplicity vs."
  ],
  "metricsAndGuardrails": {
    "northStar": "Core Task Completion / Weekly Active Value Users for American Express",
    "leading": [
      "Feature discovery & Day-1 adoption %",
      "7-day repeat usage rate"
    ],
    "guardrails": [
      "Core app latency / checkout conversion",
      "Support tickets & uninstall rate"
    ]
  },
  "synthesisScript": "For American Express’s LitFlask 3-in-1 Smart Water Bottle Critique case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Goal: Increase engagement and daily usage. We will validate success via Core Task Completion / Weekly Active Value Users for American Express while guarding against Core app latency / checkout conversion.",
  "interviewerTrap": "Listing 8 shiny features for 'all users' without picking ONE priority persona, ranking pain points, or naming trade-offs!",
  "variations": [
    {
      "question": "How would your recommendation change if American Express had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Product Critique",
    "correctFramework": "CIRCLES (Goal → Priority Persona → Journey Pain Points → Prioritized MVP → Trade-offs & Metrics)",
    "structureOptions": [
      {
        "label": "Clarify Goal → Pick 1 Priority Persona → Map Pain Points → Rank P0 Fixes → Define North Star & Trade-offs",
        "correct": true,
        "feedback": "Crisp CIRCLES flow! Selecting one persona shows real PM discipline."
      },
      {
        "label": "Suggest adding AI chatbots, AR, crypto rewards, and dark mode immediately",
        "correct": false,
        "feedback": "Buzzword feature-dumping without user pain grounding fails PM interviews."
      },
      {
        "label": "Run a supply-side Value Chain raw-material audit",
        "correct": false,
        "feedback": "That belongs to manufacturing Profitability, not Product Design/UX."
      }
    ],
    "decisionQuiz": {
      "question": "After identifying 3 user personas in a Product Design/Improvement case, what is the strongest move?",
      "options": [
        {
          "label": "Pick ONE primary persona for v1 based on frequency/pain and explain why others wait for v2",
          "correct": true,
          "feedback": "Exactly! Solving deeply for one segment beats building a mediocre tool for everyone."
        },
        {
          "label": "Design separate apps for all 3 simultaneously",
          "correct": false,
          "feedback": "Fragments engineering focus and UX coherence."
        },
        {
          "label": "Skip personas and start pricing tiers",
          "correct": false,
          "feedback": "You must understand user needs before designing or pricing."
        }
      ]
    }
  }
}
);
