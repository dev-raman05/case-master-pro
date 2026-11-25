window.CM_DATA = window.CM_DATA || {};
window.CM_DATA.cases = window.CM_DATA.cases || [];

window.CM_DATA.cases.push(
{
  "id": "ktc-prof-fan-company",
  "title": "Fan Company Margin Revival",
  "company": "BCG",
  "source": "KTC Casebook 2026",
  "track": "Consulting",
  "category": "Profitability",
  "difficulty": 1,
  "isStarter": true,
  "tags": [
    "BCG",
    "Profitability",
    "Manufacturing",
    "Value Chain",
    "Gross Margin"
  ],
  "prompt": "Your client is a ceiling and table fan manufacturer in India (~12% market share, mid-range positioning). They want to improve their gross profit margin. How would you approach this?",
  "clarifyingQuestions": [
    {
      "q": "Are we aiming to improve gross profit margin via revenue growth, cost reduction, or both?",
      "a": "Both—explore why margins are squeezed and how to expand them.",
      "why": "Opens both Pricing/Differentiation and Value Chain Cost tracks."
    },
    {
      "q": "What products do we sell and how are we positioned vs competitors?",
      "a": "Mid-range ceiling/table fans with weak differentiation; demand is price-elastic while rivals sell BLDC/IoT premium fans.",
      "why": "Proves simple price hikes will fail without R&D differentiation."
    }
  ],
  "frameworkUsed": "Gross Margin Tree = Revenue Differentiation (Price/Mix) − Value Chain Costs (Procurement → Mfg → Distribution)",
  "coreEquation": "Gross Margin % = (Revenue − COGS) ÷ Revenue",
  "strategyOverview": "Since mid-range demand is elastic, blanket price hikes backfire. Attack Costs immediately across Procurement (copper/aluminum/plastic bulk vendor consolidation), Manufacturing (modular parts + automation/lean waste cuts), and Distribution, while investing savings into R&D for energy-efficient BLDC/IoT fans to command premium pricing.",
  "tree": {
    "label": "Fan Company Margin Revival — Profitability Tree",
    "valueText": "Rev vs Cost",
    "children": [
      {
        "label": "Revenue Side (Price × Volume × Product/Channel Mix)",
        "valueText": "Internal vs External",
        "highlight": true
      },
      {
        "label": "Cost Side (Procurement → Mfg → Logistics → SG&A)",
        "valueText": "Fixed vs Variable",
        "highlight": true
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Interviewer",
      "prompt": "Fan Company Your client is a fan manufacturer in India. They want to improve their gross profit margin. How wo",
      "detail": "Fan Company Your client is a fan manufacturer in India. They want to improve their gross profit margin. How would you approach this?\nStep 1: Clarify the Objective & Understand the Context Thank you. Before jumping into a solution, I’d like to clarify the problem statement to ensure alignment.\n1. Are we focusing on improving profit margins by increasing revenue, reducing costs, or both?\n2. What products do we make, and do they target a specific price segment?"
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "3. How competitive is the market, and what’s our market share?",
      "detail": "3. How competitive is the market, and what’s our market share?\nWe manufacture ceiling and table fans, standard models with basic regulators and no advanced features.\nThe market is moderately competitive. National players like Havells, Crompton, and Orient dominate. Our market share is around 12%.\nYou can consider both revenue improvement and cost reduction levers."
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "Got it. So we’re a mid-range player with no strong differentiation.",
      "detail": "Got it. So we’re a mid-range player with no strong differentiation.\nSince demand is elastic, simply raising prices isn’t an option.\nWe’ll need to explore both revenue differentiation and cost optimization .\nStep 2: Structure the Approach"
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "Here’s how I’d like to structure my approach:",
      "detail": "Here’s how I’d like to structure my approach:\n● Revenue side: Assess how we can differentiate our product to command a premium.\n● Cost side: Analyze the value chain (procurement, manufacturing, distribution) to identify cost-saving opportunities.\nDoes that sound reasonable?"
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "Fan Company On the revenue side, the lack of differentiation is a challenge.",
      "detail": "Fan Company On the revenue side, the lack of differentiation is a challenge.\nPremium players are already offering fans with BLDC motors, IoT-enabled controls, and modern aesthetic designs.\nIf we invest in R&D to develop energy-efficient, quieter, and modern-looking fans, we could reposition ourselves in urban markets and justify a higher price point.\nSuppose we invest in R&D. Where in the value chain could we cut costs to balance it out?"
    }
  ],
  "recommendations": [
    "Short term: Cut Value Chain COGS via bulk copper/aluminum vendor consolidation, modular SKUs across fan models, and lean manufacturing automation.",
    "Medium term: Reinvest savings into R&D for energy-efficient BLDC motors, quieter blades, and modern/IoT designs to shift mix into higher-margin urban tiers.",
    "Optimize outbound distribution/dealer incentives before touching base mid-range retail prices."
  ],
  "metricsAndGuardrails": {
    "northStar": "Gross & EBITDA Margin Recovery (BCG)",
    "leading": [
      "Unit realization vs COGS/unit",
      "Capacity utilization & waste/scrap %"
    ],
    "guardrails": [
      "Customer retention / NPS (don’t over-cut quality)",
      "Market share retention"
    ]
  },
  "synthesisScript": "To restore gross margins for our mid-range fan client, we must execute a two-horizon plan: near-term Value Chain cost cuts across copper/aluminum procurement, modular manufacturing, and freight, paired with medium-term R&D into BLDC/IoT fans to shift product mix toward higher-margin premium tiers.",
  "interviewerTrap": "Recommending a 10% price hike on commodity mid-range fans—elastic buyers will switch immediately unless you differentiate with BLDC efficiency or aesthetics!",
  "variations": [
    {
      "question": "How would your recommendation change if BCG had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Profitability",
    "correctFramework": "Profit = Revenue (Price × Volume × Mix) − Costs (Fixed + Variable along Value Chain)",
    "structureOptions": [
      {
        "label": "Clarify Profit vs Margin & Industry vs Company → Split Revenue (P×V×Mix) vs Value-Chain Costs → Prioritize P0 Fixes",
        "correct": true,
        "feedback": "Classic MBB Profitability structure!"
      },
      {
        "label": "Fire 30% of staff on Minute 2 without reading the P&L",
        "correct": false,
        "feedback": "Never slash costs blindly before knowing whether revenue/mix or raw materials drove the drop."
      },
      {
        "label": "Apply CIRCLES mobile app persona interviews",
        "correct": false,
        "feedback": "CIRCLES is for Product Design, not P&L Profitability diagnosis."
      }
    ],
    "decisionQuiz": {
      "question": "In a Profitability case, why ask immediately if competitors are seeing the same decline?",
      "options": [
        {
          "label": "Separates Industry-wide macro/commodity shocks from Company-specific operational or pricing issues",
          "correct": true,
          "feedback": "Spot on! Instantly cuts the diagnostic tree in half."
        },
        {
          "label": "To copy competitors’ logos",
          "correct": false,
          "feedback": "It isolates internal execution vs external market forces."
        },
        {
          "label": "Because profits don't depend on costs",
          "correct": false,
          "feedback": "Macro input spikes hit the whole industry simultaneously."
        }
      ]
    }
  }
},
{
  "id": "ktc-02-clothing-fashion-profitability",
  "title": "Clothing Fashion Profitability",
  "company": "BCG",
  "source": "KTC Casebook 2026",
  "track": "Consulting",
  "category": "Profitability",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "BCG",
    "Profitability",
    "Consulting"
  ],
  "prompt": "Clothing Fashion Our client is a major fashion brand with a nationwide presence.",
  "clarifyingQuestions": [
    {
      "q": "Understood. Is the slump unique to our client, or is the entire fashion industry facing similar challenges?",
      "a": "The slump is specific to our client. The broader fashion industry has seen ~7% CAGR growth in the last two years That suggests this is more of a company-specific issue. Do we know if the problem lies more on the revenue side or cost side?",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "The slump is specific to our client. The broader fashion industry has seen ~7% CAGR growth in the last two years That suggests this is more of a company-specific issue. Do we know if the problem lies more on the revenue ",
      "a": "Revenues have been stable. The decline in profits seems to be cost-related Noted. Before diving into costs, could you share the client’s geographic presence? Are they strong across the country or focused in certain regions?",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Revenues have been stable. The decline in profits seems to be cost-related Noted. Before diving into costs, could you share the client’s geographic presence? Are they strong across the country or focused in certain regio",
      "a": "They are a strong player in major parts of India but weaker in northern India. Sales there have been relatively weak And how about competition? Are peers experiencing similar profitability pressure?",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "Profit = Revenue (Price × Volume × Mix) − Costs (Fixed + Variable along Value Chain)",
  "coreEquation": "Profit = ∑(Units × Price × Margin Mix) − (Fixed Overhead + Variable Value-Chain Costs)",
  "strategyOverview": "Approach Clothing Fashion Profitability (BCG) using a Profitability structure: start by confirming the business objective and scope, decompose the problem cleanly along Profit = Revenue (Price × Volume × Mix) − Costs (Fixed + Variable along Value Chain), and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Clothing Fashion Profitability — Profitability Tree",
    "valueText": "Rev vs Cost",
    "children": [
      {
        "label": "Revenue Side (Price × Volume × Product/Channel Mix)",
        "valueText": "Internal vs External",
        "highlight": true
      },
      {
        "label": "Cost Side (Procurement → Mfg → Logistics → SG&A)",
        "valueText": "Fixed vs Variable",
        "highlight": true
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Candidate",
      "prompt": "Clothing Fashion Our client is a major fashion brand with a nationwide presence.",
      "detail": "Clothing Fashion Our client is a major fashion brand with a nationwide presence.\nTheir profitability has declined while revenues remain stable.\nFind the cost drivers and recommend a recovery plan.\nThanks. To clarify, does the client deal in any specific segment of fashion, or do they cover the entire clothing domain."
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "They deal in clothing fashion. They have offline outlets across the country and are also recognized in e-comme",
      "detail": "They deal in clothing fashion. They have offline outlets across the country and are also recognized in e-commerce.\nUnderstood. Is the slump unique to our client, or is the entire fashion industry facing similar challenges?\nThe slump is specific to our client. The broader fashion industry has seen ~7% CAGR growth in the last two years That suggests this is more of a company-specific issue. Do we know if the problem lies more on the revenue side or cost side?\nRevenues have been stable. The decline in profits seems to be cost-related Noted. Before diving into costs, could you share the client’s geographic presence? "
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "They are a strong player in major parts of India but weaker in northern India. Sales there have been relativel",
      "detail": "They are a strong player in major parts of India but weaker in northern India. Sales there have been relatively weak And how about competition? Are peers experiencing similar profitability pressure?\nNot really. Other players are growing healthily.\nSince revenue is stable, I’ll focus on the cost side by breaking down the value chain into: R&D and raw material sourcing,Inventory and storage,Transportation and distribution,Outsourcing and marketing. Let’s begin with transportation and distribution , as that often drives significant costs.\nClothing Fashion How do our transportation and storage costs compare to compet"
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "Higher than competitors.",
      "detail": "Higher than competitors.\nInteresting. Could we explore the client’s distribution system, where factories and warehouses are located?\nThe client’s major factories are in Hyderabad and Chennai, with head offices in those two cities. Goods are then shipped to warehouses across India.\nSince all transport originates from these two hubs, we could break down costs by transport mode, distance traveled, and trade routes. What does that picture look like?"
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "Goods are moved mainly by trucks and roadways. A common route is via the MP–UP–NCR highway, used to transport ",
      "detail": "Goods are moved mainly by trucks and roadways. A common route is via the MP–UP–NCR highway, used to transport to the Gurgaon warehouse Have there been any recent regulatory or infrastructure changes that could impact transport costs?\nYes. A year ago, the Madhya Pradesh government revised toll structures. Roads are being expanded, but tolls have increased.\nDo we know the magnitude of these costs?\nEach truck traverses ~600 km through Madhya Pradesh, incurring ~₹200 per toll, with multiple tolls along the way."
    }
  ],
  "recommendations": [
    "High storage and transportation costs arise due to an",
    "Quantify route costs and toll charges by origin, destination,",
    "Compare northern warehousing, rail/multimodal freight, and",
    "Pilot the lowest-cost route and track freight cost per unit, lead"
  ],
  "metricsAndGuardrails": {
    "northStar": "Gross & EBITDA Margin Recovery (BCG)",
    "leading": [
      "Unit realization vs COGS/unit",
      "Capacity utilization & waste/scrap %"
    ],
    "guardrails": [
      "Customer retention / NPS (don’t over-cut quality)",
      "Market share retention"
    ]
  },
  "synthesisScript": "For BCG’s Clothing Fashion Profitability case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: High storage and transportation costs arise due to an We will validate success via Gross & EBITDA Margin Recovery (BCG) while guarding against Customer retention / NPS (don’t over-cut quality).",
  "interviewerTrap": "Assuming costs rose without checking Revenue (Price × Volume × Mix) first, or skipping Industry-wide vs Company-specific scoping!",
  "variations": [
    {
      "question": "How would your recommendation change if BCG had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Profitability",
    "correctFramework": "Profit = Revenue (Price × Volume × Mix) − Costs (Fixed + Variable along Value Chain)",
    "structureOptions": [
      {
        "label": "Clarify Profit vs Margin & Industry vs Company → Split Revenue (P×V×Mix) vs Value-Chain Costs → Prioritize P0 Fixes",
        "correct": true,
        "feedback": "Classic MBB Profitability structure!"
      },
      {
        "label": "Fire 30% of staff on Minute 2 without reading the P&L",
        "correct": false,
        "feedback": "Never slash costs blindly before knowing whether revenue/mix or raw materials drove the drop."
      },
      {
        "label": "Apply CIRCLES mobile app persona interviews",
        "correct": false,
        "feedback": "CIRCLES is for Product Design, not P&L Profitability diagnosis."
      }
    ],
    "decisionQuiz": {
      "question": "In a Profitability case, why ask immediately if competitors are seeing the same decline?",
      "options": [
        {
          "label": "Separates Industry-wide macro/commodity shocks from Company-specific operational or pricing issues",
          "correct": true,
          "feedback": "Spot on! Instantly cuts the diagnostic tree in half."
        },
        {
          "label": "To copy competitors’ logos",
          "correct": false,
          "feedback": "It isolates internal execution vs external market forces."
        },
        {
          "label": "Because profits don't depend on costs",
          "correct": false,
          "feedback": "Macro input spikes hit the whole industry simultaneously."
        }
      ]
    }
  }
},
{
  "id": "ktc-03-energy-drink-profitability",
  "title": "Energy Drink Profitability",
  "company": "Accenture",
  "source": "KTC Casebook 2026",
  "track": "Consulting",
  "category": "Profitability",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "Accenture",
    "Profitability",
    "Consulting"
  ],
  "prompt": "Energy Drink Your client is a FMCG company manufacturing energy drinks.",
  "clarifyingQuestions": [
    {
      "q": "Before starting off with the case, I would like to begin by asking a few questions. What is the exact product line of the company and where does it operate?",
      "a": "The company manufactures only one type of energy drink and it is based in India.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "How long has it taken for the company’s market share to decline from 98% to 50%? Was it gradual, or a sharp drop after a specific event like a recall, a price hike or a competitor launch?",
      "a": "The original case states a gradual five-year decline. The following practice round uses a separate illustrative scenario.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Market share depends on the industry size and the revenue of the company. Do we know what has changed in the past 5 years?",
      "a": "The industry is not growing at all, in addition to which the revenue has decreased.",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "Profit = Revenue (Price × Volume × Mix) − Costs (Fixed + Variable along Value Chain)",
  "coreEquation": "Profit = ∑(Units × Price × Margin Mix) − (Fixed Overhead + Variable Value-Chain Costs)",
  "strategyOverview": "Approach Energy Drink Profitability (Accenture) using a Profitability structure: start by confirming the business objective and scope, decompose the problem cleanly along Profit = Revenue (Price × Volume × Mix) − Costs (Fixed + Variable along Value Chain), and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Energy Drink Profitability — Profitability Tree",
    "valueText": "Rev vs Cost",
    "children": [
      {
        "label": "Revenue Side (Price × Volume × Product/Channel Mix)",
        "valueText": "Internal vs External",
        "highlight": true
      },
      {
        "label": "Cost Side (Procurement → Mfg → Logistics → SG&A)",
        "valueText": "Fixed vs Variable",
        "highlight": true
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Candidate",
      "prompt": "Energy Drink Your client is a FMCG company manufacturing energy drinks.",
      "detail": "Energy Drink Your client is a FMCG company manufacturing energy drinks.\nInitially the client had a market share of about 98% which has now reduced to 50%. Find out the reasons for the possible dilution in market share and also suggest measures to regain the market share.\nBefore starting off with the case, I would like to begin by asking a few questions. What is the exact product line of the company and where does it operate?\nThe company manufactures only one type of energy drink and it is based in India."
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "How long has it taken for the company’s market share to decline from 98% to 50%? Was it gradual, or a sharp dr",
      "detail": "How long has it taken for the company’s market share to decline from 98% to 50%? Was it gradual, or a sharp drop after a specific event like a recall, a price hike or a competitor launch?\nThe original case states a gradual five-year decline. The following practice round uses a separate illustrative scenario.\nMarket share depends on the industry size and the revenue of the company. Do we know what has changed in the past 5 years?\nThe industry is not growing at all, in addition to which the revenue has decreased."
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "The revenue would in turn depend on the number of units sold and the price per unit. Since the revenue has dec",
      "detail": "The revenue would in turn depend on the number of units sold and the price per unit. Since the revenue has decreased, we could say it is due to one of these two. Has the number of units being sold decreased?\nThat is indeed correct. The number of energy drinks being sold has gone down in the 5 years, which has led to a decrease in the revenue.\nThe number of units sold would be affected by customer needs, affordability, accessibility and the customer experience.\nCustomer needs would imply how much demand there is for the drink amongst the customers. Affordability would imply benchmarking our product against that of"
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "Accessibility is how easily a customer can reach our product.",
      "detail": "Accessibility is how easily a customer can reach our product.\nCustomer experience could possibly revolve around the product design and the taste. I would also like to look at the competition and the company’s internal operations. Is the share being lost in a particular region, channel or consumer segment?\nEnergy Drink Our energy-drink client once had 98% market share. It now has 50%. What happened, and how would you recover the share?\nI'll first confirm the metric. Is share measured in units, liters, retail sales value or distribution points? Is the comparison within the same geography and definition of “energy d"
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "Was 98% the share of a young category with few competitors? Has the total category grown? Market share can fal",
      "detail": "Was 98% the share of a young category with few competitors? Has the total category grown? Market share can fall even when our absolute sales rise.\n[Illustrative assumption] Yes. The category expanded rapidly as several companies entered. Our annual unit sales are slightly higher than before.\nThat changes the interpretation. I'll decompose Market share = our volume / total category volume. There are two broad drivers: our sales trajectory and overall category expansion / competitor growth.\nA fall of 48 percentage points from 98% to 50% is not automatically a 48% fall in our own sales. In relative terms, share fell"
    }
  ],
  "recommendations": [
    "Prioritize the highest-impact P0 bottleneck identified in Energy Drink Profitability before secondary optimizations.",
    "Pilot the top intervention in a controlled cohort/region with clear North Star and guardrail tracking.",
    "Scale rollout only after verifying unit economics and zero adverse second-order effects."
  ],
  "metricsAndGuardrails": {
    "northStar": "Gross & EBITDA Margin Recovery (Accenture)",
    "leading": [
      "Unit realization vs COGS/unit",
      "Capacity utilization & waste/scrap %"
    ],
    "guardrails": [
      "Customer retention / NPS (don’t over-cut quality)",
      "Market share retention"
    ]
  },
  "synthesisScript": "For Accenture’s Energy Drink Profitability case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Prioritize the highest-impact P0 bottleneck identified in Energy Drink Profitability before secondary optimizations. We will validate success via Gross & EBITDA Margin Recovery (Accenture) while guarding against Customer retention / NPS (don’t over-cut quality).",
  "interviewerTrap": "Assuming costs rose without checking Revenue (Price × Volume × Mix) first, or skipping Industry-wide vs Company-specific scoping!",
  "variations": [
    {
      "question": "How would your recommendation change if Accenture had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Profitability",
    "correctFramework": "Profit = Revenue (Price × Volume × Mix) − Costs (Fixed + Variable along Value Chain)",
    "structureOptions": [
      {
        "label": "Clarify Profit vs Margin & Industry vs Company → Split Revenue (P×V×Mix) vs Value-Chain Costs → Prioritize P0 Fixes",
        "correct": true,
        "feedback": "Classic MBB Profitability structure!"
      },
      {
        "label": "Fire 30% of staff on Minute 2 without reading the P&L",
        "correct": false,
        "feedback": "Never slash costs blindly before knowing whether revenue/mix or raw materials drove the drop."
      },
      {
        "label": "Apply CIRCLES mobile app persona interviews",
        "correct": false,
        "feedback": "CIRCLES is for Product Design, not P&L Profitability diagnosis."
      }
    ],
    "decisionQuiz": {
      "question": "In a Profitability case, why ask immediately if competitors are seeing the same decline?",
      "options": [
        {
          "label": "Separates Industry-wide macro/commodity shocks from Company-specific operational or pricing issues",
          "correct": true,
          "feedback": "Spot on! Instantly cuts the diagnostic tree in half."
        },
        {
          "label": "To copy competitors’ logos",
          "correct": false,
          "feedback": "It isolates internal execution vs external market forces."
        },
        {
          "label": "Because profits don't depend on costs",
          "correct": false,
          "feedback": "Macro input spikes hit the whole industry simultaneously."
        }
      ]
    }
  }
},
{
  "id": "ktc-04-fmcg-south-africa-margins",
  "title": "FMCG South Africa Margins",
  "company": "KPMG",
  "source": "KTC Casebook 2026",
  "track": "Consulting",
  "category": "Profitability",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "KPMG",
    "Profitability",
    "Consulting"
  ],
  "prompt": "South Africa Your client is an FMCG company with a global presence, specifically their operations in South Africa. They have observed a decline in profitability and have asked you to identify the root cause and recommend solutions.",
  "clarifyingQuestions": [
    {
      "q": "Thank you. Just to confirm, we are focusing on the South African operations where there's been a decline in profitability. To get a clearer picture, could you tell me how significant this decline is and how long it has b",
      "a": "The decline has been around 15% over the past year.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "First, let’s look into the revenue side. Have there been any significant changes in revenue over the past year?",
      "a": "The revenue has remained relatively stable, with no significant growth or decline.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "FMCG South Africa I see. Let’s first focus on the fuel costs. Can you provide more detail on how fuel is used in these factories?",
      "a": "The machinery in these factories runs on solid fuel, and the type of fuel used can change based on the availability. Each type of fuel has a different cost.",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "Profit = Revenue (Price × Volume × Mix) − Costs (Fixed + Variable along Value Chain)",
  "coreEquation": "Profit = ∑(Units × Price × Margin Mix) − (Fixed Overhead + Variable Value-Chain Costs)",
  "strategyOverview": "Approach FMCG South Africa Margins (KPMG) using a Profitability structure: start by confirming the business objective and scope, decompose the problem cleanly along Profit = Revenue (Price × Volume × Mix) − Costs (Fixed + Variable along Value Chain), and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "FMCG South Africa Margins — Profitability Tree",
    "valueText": "Rev vs Cost",
    "children": [
      {
        "label": "Revenue Side (Price × Volume × Product/Channel Mix)",
        "valueText": "Internal vs External",
        "highlight": true
      },
      {
        "label": "Cost Side (Procurement → Mfg → Logistics → SG&A)",
        "valueText": "Fixed vs Variable",
        "highlight": true
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Candidate",
      "prompt": "FMCG South Africa Your client is an FMCG company with a global presence, specifically their operations in Sout",
      "detail": "FMCG South Africa Your client is an FMCG company with a global presence, specifically their operations in South Africa. They have observed a decline in profitability and have asked you to identify the root cause and recommend solutions.\nThank you. Just to confirm, we are focusing on the South African operations where there's been a decline in profitability. To get a clearer picture, could you tell me how significant this decline is and how long it has been a concern?\nThe decline has been around 15% over the past year.\nUnderstood. I would like to take a structured approach by analyzing the profitability equation: "
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "First, let’s look into the revenue side. Have there been any significant changes in revenue over the past year",
      "detail": "First, let’s look into the revenue side. Have there been any significant changes in revenue over the past year?\nThe revenue has remained relatively stable, with no significant growth or decline.\nThat’s clear. Since the revenue side seems stable, it suggests that the decline in profitability is likely driven by rising costs. To proceed, I’d like to break down the cost structure into direct and indirect costs. The direct costs would mainly include raw material, labor costs. Have we seen any changes in them?\nThese direct costs have remained stable over the past year."
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "Thank you. Given that direct costs are stable, the issue might be stemming from the indirect costs. Indirect c",
      "detail": "Thank you. Given that direct costs are stable, the issue might be stemming from the indirect costs. Indirect costs in this case would include Utilities, Fuel, Rent, Maintenance and Marketing costs.\nThe key indirect costs are related to fuel and machinery maintenance for our 40 factories.\nFMCG South Africa I see. Let’s first focus on the fuel costs. Can you provide more detail on how fuel is used in these factories?\nThe machinery in these factories runs on solid fuel, and the type of fuel used can change based on the availability. Each type of fuel has a different cost."
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "Okay so do we have data on does it vary across different factors like location, type of fuel, or availability?",
      "detail": "Okay so do we have data on does it vary across different factors like location, type of fuel, or availability?\nFuel costs do vary significantly based on different types of fuel used and their availability.\nThat makes sense. So, the inconsistency in fuel types and their costs is likely contributing to inefficiencies. Do we have data on how often the fuel type changes and the cost differences between them?\nYes, data shows that the costs can differ by as much as 20% between the most and least expensive fuels, depending on the availability."
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "Have there been any recent regulatory or infrastructure changes that could impact transport costs?",
      "detail": "Have there been any recent regulatory or infrastructure changes that could impact transport costs?\nThank you for that information. It sounds like standardizing the type of fuel used across factories could be a potential solution to manage these costs better. Before we discuss solutions, let’s move on to the maintenance costs you mentioned. What does maintenance entail, and what factors are influencing these costs Maintenance involves managing around 7,000 different SKUs for spare parts. The prices of these parts vary across our 40 factories due to differences in supplier contracts and logistics.\nI see. So, simila"
    }
  ],
  "recommendations": [
    "Using various fuel types has caused higher costs and",
    "Spare part costs fluctuate widely due to factory-specific local",
    "Standardizing fuel supply to reduce costs and optimize",
    "Centralizing spare part procurement across all factories to"
  ],
  "metricsAndGuardrails": {
    "northStar": "Gross & EBITDA Margin Recovery (KPMG)",
    "leading": [
      "Unit realization vs COGS/unit",
      "Capacity utilization & waste/scrap %"
    ],
    "guardrails": [
      "Customer retention / NPS (don’t over-cut quality)",
      "Market share retention"
    ]
  },
  "synthesisScript": "For KPMG’s FMCG South Africa Margins case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Using various fuel types has caused higher costs and We will validate success via Gross & EBITDA Margin Recovery (KPMG) while guarding against Customer retention / NPS (don’t over-cut quality).",
  "interviewerTrap": "Assuming costs rose without checking Revenue (Price × Volume × Mix) first, or skipping Industry-wide vs Company-specific scoping!",
  "variations": [
    {
      "question": "How would your recommendation change if KPMG had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Profitability",
    "correctFramework": "Profit = Revenue (Price × Volume × Mix) − Costs (Fixed + Variable along Value Chain)",
    "structureOptions": [
      {
        "label": "Clarify Profit vs Margin & Industry vs Company → Split Revenue (P×V×Mix) vs Value-Chain Costs → Prioritize P0 Fixes",
        "correct": true,
        "feedback": "Classic MBB Profitability structure!"
      },
      {
        "label": "Fire 30% of staff on Minute 2 without reading the P&L",
        "correct": false,
        "feedback": "Never slash costs blindly before knowing whether revenue/mix or raw materials drove the drop."
      },
      {
        "label": "Apply CIRCLES mobile app persona interviews",
        "correct": false,
        "feedback": "CIRCLES is for Product Design, not P&L Profitability diagnosis."
      }
    ],
    "decisionQuiz": {
      "question": "In a Profitability case, why ask immediately if competitors are seeing the same decline?",
      "options": [
        {
          "label": "Separates Industry-wide macro/commodity shocks from Company-specific operational or pricing issues",
          "correct": true,
          "feedback": "Spot on! Instantly cuts the diagnostic tree in half."
        },
        {
          "label": "To copy competitors’ logos",
          "correct": false,
          "feedback": "It isolates internal execution vs external market forces."
        },
        {
          "label": "Because profits don't depend on costs",
          "correct": false,
          "feedback": "Macro input spikes hit the whole industry simultaneously."
        }
      ]
    }
  }
},
{
  "id": "ktc-05-footwear-brand-profitability",
  "title": "Footwear Brand Profitability",
  "company": "Deloitte",
  "source": "KTC Casebook 2026",
  "track": "Consulting",
  "category": "Profitability",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "Deloitte",
    "Profitability",
    "Consulting"
  ],
  "prompt": "Footwear Brand We are a footwear brand operating in India, and we're facing a significant decline in profitability. We're struggling to stay competitive in the market. We need your help to identify the core issues and recommend changes.",
  "clarifyingQuestions": [
    {
      "q": "Alright, I’d like to ask whether this issue has come up recently or if it’s been ongoing for a while?",
      "a": "The decline has been observed over the past 1-2 years, amounting to approximately 5-10%.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Is the decline in profits limited to our client's footwear brand, or have other brands in this sector also been facing similar challenges?",
      "a": "Other footwear brands have also seen some dip in their profits, but the client has been significantly impacted.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Okay. Could you please tell me more about the client’s business and where their stores are located?",
      "a": "The footwear brand sells both online and offline, but most of its sales come from offline retail stores located all across India.",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "Profit = Revenue (Price × Volume × Mix) − Costs (Fixed + Variable along Value Chain)",
  "coreEquation": "Profit = ∑(Units × Price × Margin Mix) − (Fixed Overhead + Variable Value-Chain Costs)",
  "strategyOverview": "Approach Footwear Brand Profitability (Deloitte) using a Profitability structure: start by confirming the business objective and scope, decompose the problem cleanly along Profit = Revenue (Price × Volume × Mix) − Costs (Fixed + Variable along Value Chain), and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Footwear Brand Profitability — Profitability Tree",
    "valueText": "Rev vs Cost",
    "children": [
      {
        "label": "Revenue Side (Price × Volume × Product/Channel Mix)",
        "valueText": "Internal vs External",
        "highlight": true
      },
      {
        "label": "Cost Side (Procurement → Mfg → Logistics → SG&A)",
        "valueText": "Fixed vs Variable",
        "highlight": true
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Candidate",
      "prompt": "Footwear Brand We are a footwear brand operating in India, and we're facing a significant decline in profitabi",
      "detail": "Footwear Brand We are a footwear brand operating in India, and we're facing a significant decline in profitability. We're struggling to stay competitive in the market. We need your help to identify the core issues and recommend changes.\nAlright, I’d like to ask whether this issue has come up recently or if it’s been ongoing for a while?\nThe decline has been observed over the past 1-2 years, amounting to approximately 5-10%.\nIs the decline in profits limited to our client's footwear brand, or have other brands in this sector also been facing similar challenges?"
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "Other footwear brands have also seen some dip in their profits, but the client has been significantly impacted",
      "detail": "Other footwear brands have also seen some dip in their profits, but the client has been significantly impacted.\nOkay. Could you please tell me more about the client’s business and where their stores are located?\nThe footwear brand sells both online and offline, but most of its sales come from offline retail stores located all across India.\nCould you tell me what types of products the client manufactures?"
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "They manufacture and retail two kinds of products - formal shoes and slippers for men and women, all of premiu",
      "detail": "They manufacture and retail two kinds of products - formal shoes and slippers for men and women, all of premium quality.\nI would like to ask whether the brand has experienced a decline across all of its offered footwear segments, or is there a specific category that has been affected?\nSales have dipped across the category, but the decline has been disproportionately concentrated in our formal shoes segment.\nOkay, who are the major competitors and how are they performing?"
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "Our client is a premium footwear brand in India selling mainly through offline stores. In the last 1–2 years, ",
      "detail": "Our client is a premium footwear brand in India selling mainly through offline stores. In the last 1–2 years, profits have fallen by 5–10%. Costs are stable, so the issue is on the revenue side.\nCase Notes ● Decline bigger for client than industry average.\n● Fewer units sold + narrow product range; price unchanged.\n● Portfolio limited to formal shoes and slippers."
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "● Formal shoes hit hardest; competitors offer more variety.",
      "detail": "● Formal shoes hit hardest; competitors offer more variety.\nRecommended Solutions ● Diversify formal shoe line immediately.\n● Launch sports and athleisure footwear for men and women.\n● Add sandals and flip-flops for kids."
    }
  ],
  "recommendations": [
    "Diversify formal shoe line immediately.",
    "Launch sports and athleisure footwear for men and women.",
    "Add sandals and flip-flops for kids.",
    "Strengthen marketing through targeted channels"
  ],
  "metricsAndGuardrails": {
    "northStar": "Gross & EBITDA Margin Recovery (Deloitte)",
    "leading": [
      "Unit realization vs COGS/unit",
      "Capacity utilization & waste/scrap %"
    ],
    "guardrails": [
      "Customer retention / NPS (don’t over-cut quality)",
      "Market share retention"
    ]
  },
  "synthesisScript": "For Deloitte’s Footwear Brand Profitability case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Diversify formal shoe line immediately. We will validate success via Gross & EBITDA Margin Recovery (Deloitte) while guarding against Customer retention / NPS (don’t over-cut quality).",
  "interviewerTrap": "Assuming costs rose without checking Revenue (Price × Volume × Mix) first, or skipping Industry-wide vs Company-specific scoping!",
  "variations": [
    {
      "question": "How would your recommendation change if Deloitte had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Profitability",
    "correctFramework": "Profit = Revenue (Price × Volume × Mix) − Costs (Fixed + Variable along Value Chain)",
    "structureOptions": [
      {
        "label": "Clarify Profit vs Margin & Industry vs Company → Split Revenue (P×V×Mix) vs Value-Chain Costs → Prioritize P0 Fixes",
        "correct": true,
        "feedback": "Classic MBB Profitability structure!"
      },
      {
        "label": "Fire 30% of staff on Minute 2 without reading the P&L",
        "correct": false,
        "feedback": "Never slash costs blindly before knowing whether revenue/mix or raw materials drove the drop."
      },
      {
        "label": "Apply CIRCLES mobile app persona interviews",
        "correct": false,
        "feedback": "CIRCLES is for Product Design, not P&L Profitability diagnosis."
      }
    ],
    "decisionQuiz": {
      "question": "In a Profitability case, why ask immediately if competitors are seeing the same decline?",
      "options": [
        {
          "label": "Separates Industry-wide macro/commodity shocks from Company-specific operational or pricing issues",
          "correct": true,
          "feedback": "Spot on! Instantly cuts the diagnostic tree in half."
        },
        {
          "label": "To copy competitors’ logos",
          "correct": false,
          "feedback": "It isolates internal execution vs external market forces."
        },
        {
          "label": "Because profits don't depend on costs",
          "correct": false,
          "feedback": "Macro input spikes hit the whole industry simultaneously."
        }
      ]
    }
  }
},
{
  "id": "ktc-06-gas-company-profitability",
  "title": "Gas Company Profitability",
  "company": "KPMG",
  "source": "KTC Casebook 2026",
  "track": "Consulting",
  "category": "Profitability",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "KPMG",
    "Profitability",
    "Consulting"
  ],
  "prompt": "Gas Company Your client is a leading gas company in India. It has been seeing a decline in profitability for the last 2 years. Analyze the causes for it.",
  "clarifyingQuestions": [
    {
      "q": "To begin, I would like to know more about our client. Which domain does it operate in, who are its clients, what is its position in the value chain, and which geographic regions does it serve?",
      "a": "The client manufactures and supplies industrial gases directly to B2B clients across India. They operate across the entire value chain procurement, processing, storage, and distribution.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Okay. Is the decline in profitability a industry wide problem or specific to our client?",
      "a": "It is specific to our client and others are doing pretty good.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Okay. How long has it been since they started with cryogenic gases? Also could I know the market size and growth rate for the cryogenic gas industry?",
      "a": "Coming to the market size, the global market is ~$100 billion, while the domestic Indian cryogenic gas market is approximately $3.5 billion (~₹29,000 crore), growing at 8–9% CAGR.",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "Profit = Revenue (Price × Volume × Mix) − Costs (Fixed + Variable along Value Chain)",
  "coreEquation": "Profit = ∑(Units × Price × Margin Mix) − (Fixed Overhead + Variable Value-Chain Costs)",
  "strategyOverview": "Approach Gas Company Profitability (KPMG) using a Profitability structure: start by confirming the business objective and scope, decompose the problem cleanly along Profit = Revenue (Price × Volume × Mix) − Costs (Fixed + Variable along Value Chain), and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Gas Company Profitability — Profitability Tree",
    "valueText": "Rev vs Cost",
    "children": [
      {
        "label": "Revenue Side (Price × Volume × Product/Channel Mix)",
        "valueText": "Internal vs External",
        "highlight": true
      },
      {
        "label": "Cost Side (Procurement → Mfg → Logistics → SG&A)",
        "valueText": "Fixed vs Variable",
        "highlight": true
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Candidate",
      "prompt": "Gas Company Your client is a leading gas company in India. It has been seeing a decline in profitability for t",
      "detail": "Gas Company Your client is a leading gas company in India. It has been seeing a decline in profitability for the last 2 years. Analyze the causes for it.\nTo begin, I would like to know more about our client. Which domain does it operate in, who are its clients, what is its position in the value chain, and which geographic regions does it serve?\nThe client manufactures and supplies industrial gases directly to B2B clients across India. They operate across the entire value chain procurement, processing, storage, and distribution.\nOkay. Is the decline in profitability a industry wide problem or specific to our clien"
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "It is specific to our client and others are doing pretty good.",
      "detail": "It is specific to our client and others are doing pretty good.\nI would like to know more about the different products that our client offers.\nThe client had been dealing with non-cryogenic gases for the last few years. Recently they have also entered into the cryogenic gases.\nOkay. How long has it been since they started with cryogenic gases? Also could I know the market size and growth rate for the cryogenic gas industry?"
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "Coming to the market size, the global market is ~$100 billion, while the domestic Indian cryogenic gas market ",
      "detail": "Coming to the market size, the global market is ~$100 billion, while the domestic Indian cryogenic gas market is approximately $3.5 billion (~₹29,000 crore), growing at 8–9% CAGR.\nAlright, that seems like a good industry to enter, so the issue might be with them entering into new products since after that period their profitability has started declining. Is the decline visible in the Non cryogenic sector as well?\nThe cryogenic sector has not been much rewarding for us, though the growth in non cryogenic sector has been steady and growing.\nGas Company Okay. The decline in profitability could be due to issues on th"
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "Yes you are right, you can proceed with Cost side analysis for now.",
      "detail": "Yes you are right, you can proceed with Cost side analysis for now.\nSure. I’d like to look into their value chain first. Starting from raw material procurement, processing, storage & transportation, distribution and finally marketing.\nYes, these factors look fine. You can proceed with them.\nNext, I would like to know which component causes maximum deviation from the costs."
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "Storage and raw material procurement costs seem to be an issue.",
      "detail": "Storage and raw material procurement costs seem to be an issue.\nOkay, thank you. Raw material procurement could be divided into the cost of raw materials, supplier contracts, and efficiency of usage. For storage, I would like to examine packaging, warehouse costs, and distribution costs. Should I analyse all of these aspects, or is there a specific issue with only one of them?\nThe storage of these gases seems to be a bit complex and are causing concerns over profitability.\nOkay. Could you provide me with information on how these gases are stored and what is the scenario for the manufacturers of such containers?"
    }
  ],
  "recommendations": [
    "Prioritize the highest-impact P0 bottleneck identified in Gas Company Profitability before secondary optimizations.",
    "Pilot the top intervention in a controlled cohort/region with clear North Star and guardrail tracking.",
    "Scale rollout only after verifying unit economics and zero adverse second-order effects."
  ],
  "metricsAndGuardrails": {
    "northStar": "Gross & EBITDA Margin Recovery (KPMG)",
    "leading": [
      "Unit realization vs COGS/unit",
      "Capacity utilization & waste/scrap %"
    ],
    "guardrails": [
      "Customer retention / NPS (don’t over-cut quality)",
      "Market share retention"
    ]
  },
  "synthesisScript": "For KPMG’s Gas Company Profitability case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Prioritize the highest-impact P0 bottleneck identified in Gas Company Profitability before secondary optimizations. We will validate success via Gross & EBITDA Margin Recovery (KPMG) while guarding against Customer retention / NPS (don’t over-cut quality).",
  "interviewerTrap": "Assuming costs rose without checking Revenue (Price × Volume × Mix) first, or skipping Industry-wide vs Company-specific scoping!",
  "variations": [
    {
      "question": "How would your recommendation change if KPMG had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Profitability",
    "correctFramework": "Profit = Revenue (Price × Volume × Mix) − Costs (Fixed + Variable along Value Chain)",
    "structureOptions": [
      {
        "label": "Clarify Profit vs Margin & Industry vs Company → Split Revenue (P×V×Mix) vs Value-Chain Costs → Prioritize P0 Fixes",
        "correct": true,
        "feedback": "Classic MBB Profitability structure!"
      },
      {
        "label": "Fire 30% of staff on Minute 2 without reading the P&L",
        "correct": false,
        "feedback": "Never slash costs blindly before knowing whether revenue/mix or raw materials drove the drop."
      },
      {
        "label": "Apply CIRCLES mobile app persona interviews",
        "correct": false,
        "feedback": "CIRCLES is for Product Design, not P&L Profitability diagnosis."
      }
    ],
    "decisionQuiz": {
      "question": "In a Profitability case, why ask immediately if competitors are seeing the same decline?",
      "options": [
        {
          "label": "Separates Industry-wide macro/commodity shocks from Company-specific operational or pricing issues",
          "correct": true,
          "feedback": "Spot on! Instantly cuts the diagnostic tree in half."
        },
        {
          "label": "To copy competitors’ logos",
          "correct": false,
          "feedback": "It isolates internal execution vs external market forces."
        },
        {
          "label": "Because profits don't depend on costs",
          "correct": false,
          "feedback": "Macro input spikes hit the whole industry simultaneously."
        }
      ]
    }
  }
},
{
  "id": "ktc-07-insurance-company-profitability",
  "title": "Insurance Company Profitability",
  "company": "PwC",
  "source": "KTC Casebook 2026",
  "track": "Consulting",
  "category": "Profitability",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "PwC",
    "Profitability",
    "Consulting"
  ],
  "prompt": "Insurance Company Your client is a large insurance company which is facing a revenue drop in its healthcare insurance product. All other insurance products are going well. You have to find the cause and advise them on tackling this.",
  "clarifyingQuestions": [
    {
      "q": "Okay before analyzing this further I would like to know if this issue is only affecting our client or if it's something seen across the industry. And is it specific to any particular region?",
      "a": "The competitors are doing good. The issue is faced within the company itself and is being observed throughout our operational areas.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "So considering the product is facing a revenue drop, I would like to know more about the cause of this decline. Is the price per policy decreased or the total number of policies sold?",
      "a": "The client is facing a decline in the number of policies sold and the price per policy has remained constant throughout.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "I would first like to know that for onboarding new customers what are the current methods the company uses and can we see any particular drop in any of them?",
      "a": "Currently, the company focuses on the Agent-based sales model apart from conventional sales and marketing, and there is no such deviation evidently visible.",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "Profit = Revenue (Price × Volume × Mix) − Costs (Fixed + Variable along Value Chain)",
  "coreEquation": "Profit = ∑(Units × Price × Margin Mix) − (Fixed Overhead + Variable Value-Chain Costs)",
  "strategyOverview": "Approach Insurance Company Profitability (PwC) using a Profitability structure: start by confirming the business objective and scope, decompose the problem cleanly along Profit = Revenue (Price × Volume × Mix) − Costs (Fixed + Variable along Value Chain), and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Insurance Company Profitability — Profitability Tree",
    "valueText": "Rev vs Cost",
    "children": [
      {
        "label": "Revenue Side (Price × Volume × Product/Channel Mix)",
        "valueText": "Internal vs External",
        "highlight": true
      },
      {
        "label": "Cost Side (Procurement → Mfg → Logistics → SG&A)",
        "valueText": "Fixed vs Variable",
        "highlight": true
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Candidate",
      "prompt": "Insurance Company Your client is a large insurance company which is facing a revenue drop in its healthcare in",
      "detail": "Insurance Company Your client is a large insurance company which is facing a revenue drop in its healthcare insurance product. All other insurance products are going well. You have to find the cause and advise them on tackling this.\nOkay before analyzing this further I would like to know if this issue is only affecting our client or if it's something seen across the industry. And is it specific to any particular region?\nThe competitors are doing good. The issue is faced within the company itself and is being observed throughout our operational areas.\nSo considering the product is facing a revenue drop, I would li"
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "The client is facing a decline in the number of policies sold and the price per policy has remained constant t",
      "detail": "The client is facing a decline in the number of policies sold and the price per policy has remained constant throughout.\nSince the competitors are doing good, I feel there is no issue with the demand side of the product. So the problem must be in production side or distribution side.\nYes, the number of customers that we onboard has dipped drastically when compared to previous times Taking into consideration that our other products are working well, there is a chance that the issue resides in our conversion rate of specific Healthcare policy rather than the number of customers the company is onboarding in general,"
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "I would first like to know that for onboarding new customers what are the current methods the company uses and",
      "detail": "I would first like to know that for onboarding new customers what are the current methods the company uses and can we see any particular drop in any of them?\nCurrently, the company focuses on the Agent-based sales model apart from conventional sales and marketing, and there is no such deviation evidently visible.\nOkay, could you please elaborate on how this Agent-based Sales model works? Do the agents have any incentives based on how much they sell?\nInsurance Company Yes, you are right, so we have agents who work under us and get paid an extra commission according to the number of policies they sell as a whole Ok"
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "The issue seems to be with both the number of agents and the volume of sales that each of them is producing.",
      "detail": "The issue seems to be with both the number of agents and the volume of sales that each of them is producing.\nOh okay, this seems alarming, Is there any specific reason why we are not recruiting more agents if we know it’s an issue directly?\nYeah, we can do that but at the moment our priority is to maximise the volume of sales/agent.\nSure, for that I’d like to have a look at the agent’s journey. So all the way from finding the right target audience to pitching them and making them feel that our product is important to them and then converting them into customers, can you tell me where the issue is in these steps?"
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "The main issue is found at the pitching part and we are unable to convert the customer in the first place.",
      "detail": "The main issue is found at the pitching part and we are unable to convert the customer in the first place.\nOkay, then if this public perception of the product is a problem, We can improve it by doing the following:\n-Improve the insurance scheme by making it more affordable and increase the length of time duration, in order to average out the effect( increasing the number of people who take insurance, thereby producing more revenue and thus we’ll be able to reduce cost per policy) -Increase the commission for the agent, so that they can put better efforts into pitching the policy and converting the possible custom"
    }
  ],
  "recommendations": [
    "Offer rewards to agents in order to encourage them to sell the",
    "Customize plans and introduce value-added services to cater",
    "Improve the online experience and utilize data analytics for",
    "Launch sustained educational campaigns."
  ],
  "metricsAndGuardrails": {
    "northStar": "Gross & EBITDA Margin Recovery (PwC)",
    "leading": [
      "Unit realization vs COGS/unit",
      "Capacity utilization & waste/scrap %"
    ],
    "guardrails": [
      "Customer retention / NPS (don’t over-cut quality)",
      "Market share retention"
    ]
  },
  "synthesisScript": "For PwC’s Insurance Company Profitability case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Offer rewards to agents in order to encourage them to sell the We will validate success via Gross & EBITDA Margin Recovery (PwC) while guarding against Customer retention / NPS (don’t over-cut quality).",
  "interviewerTrap": "Assuming costs rose without checking Revenue (Price × Volume × Mix) first, or skipping Industry-wide vs Company-specific scoping!",
  "variations": [
    {
      "question": "How would your recommendation change if PwC had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Profitability",
    "correctFramework": "Profit = Revenue (Price × Volume × Mix) − Costs (Fixed + Variable along Value Chain)",
    "structureOptions": [
      {
        "label": "Clarify Profit vs Margin & Industry vs Company → Split Revenue (P×V×Mix) vs Value-Chain Costs → Prioritize P0 Fixes",
        "correct": true,
        "feedback": "Classic MBB Profitability structure!"
      },
      {
        "label": "Fire 30% of staff on Minute 2 without reading the P&L",
        "correct": false,
        "feedback": "Never slash costs blindly before knowing whether revenue/mix or raw materials drove the drop."
      },
      {
        "label": "Apply CIRCLES mobile app persona interviews",
        "correct": false,
        "feedback": "CIRCLES is for Product Design, not P&L Profitability diagnosis."
      }
    ],
    "decisionQuiz": {
      "question": "In a Profitability case, why ask immediately if competitors are seeing the same decline?",
      "options": [
        {
          "label": "Separates Industry-wide macro/commodity shocks from Company-specific operational or pricing issues",
          "correct": true,
          "feedback": "Spot on! Instantly cuts the diagnostic tree in half."
        },
        {
          "label": "To copy competitors’ logos",
          "correct": false,
          "feedback": "It isolates internal execution vs external market forces."
        },
        {
          "label": "Because profits don't depend on costs",
          "correct": false,
          "feedback": "Macro input spikes hit the whole industry simultaneously."
        }
      ]
    }
  }
},
{
  "id": "ktc-prof-retail-store",
  "title": "Retail Store Revenue & Profit Decline",
  "company": "McKinsey & Company",
  "source": "KTC Casebook 2026",
  "track": "Consulting",
  "category": "Profitability",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "McKinsey & Company",
    "Profitability",
    "Consulting"
  ],
  "prompt": "Retail Store Your client is a retail store owner. They have been experiencing a decline in revenue, and would like you to analyze the causes of this issue and recommend potential solutions to address it.",
  "clarifyingQuestions": [
    {
      "q": "Ok, before beginning I would like to clarify some things, Is this issue faced by only your client’s store or all the stores?",
      "a": "Most of the stores are facing the decline in sales.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Ok, so that means that the issue is not particular to our client’s service providing. As you said most stores, there are some stores which are not facing this issue. Is it a single store that is not facing the decline or",
      "a": "There is only one store that is making more profit and is not facing a decline in revenue.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Okay,I would like to know about the timeline and magnitude of the decline, how long have these stores been operating?",
      "a": "The stores have been operating for the past 10 years and the problem has been faced from the past three years. However, we don’t have exact data on the extent of the decline.",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "Profit = Revenue (Price × Volume × Mix) − Costs (Fixed + Variable along Value Chain)",
  "coreEquation": "Profit = ∑(Units × Price × Margin Mix) − (Fixed Overhead + Variable Value-Chain Costs)",
  "strategyOverview": "Approach Retail Store Revenue & Profit Decline (McKinsey & Company) using a Profitability structure: start by confirming the business objective and scope, decompose the problem cleanly along Profit = Revenue (Price × Volume × Mix) − Costs (Fixed + Variable along Value Chain), and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Retail Store Revenue & Profit Decline — Profitability Tree",
    "valueText": "Rev vs Cost",
    "children": [
      {
        "label": "Revenue Side (Price × Volume × Product/Channel Mix)",
        "valueText": "Internal vs External",
        "highlight": true
      },
      {
        "label": "Cost Side (Procurement → Mfg → Logistics → SG&A)",
        "valueText": "Fixed vs Variable",
        "highlight": true
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Candidate",
      "prompt": "Retail Store Your client is a retail store owner. They have been experiencing a decline in revenue, and would ",
      "detail": "Retail Store Your client is a retail store owner. They have been experiencing a decline in revenue, and would like you to analyze the causes of this issue and recommend potential solutions to address it.\nOk, before beginning I would like to clarify some things, Is this issue faced by only your client’s store or all the stores?\nMost of the stores are facing the decline in sales.\nOk, so that means that the issue is not particular to our client’s service providing. As you said most stores, there are some stores which are not facing this issue. Is it a single store that is not facing the decline or are there more tha"
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "There is only one store that is making more profit and is not facing a decline in revenue.",
      "detail": "There is only one store that is making more profit and is not facing a decline in revenue.\nOkay,I would like to know about the timeline and magnitude of the decline, how long have these stores been operating?\nThe stores have been operating for the past 10 years and the problem has been faced from the past three years. However, we don’t have exact data on the extent of the decline.\nWhen did the store in profit come into the race?"
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "They started their store 6 years ago.",
      "detail": "They started their store 6 years ago.\nAs you mentioned that the decline is in revenue, can you please confirm if the revenue from a specific product decreased or has the revenue from all categories of products declined?\nThe revenue from almost all the products has declined.\nIs there a decrease in footfall across the stores or decrease in basket size?"
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "There is no decrease in footfall or basket size but, they are comparatively lower than the store in profit.",
      "detail": "There is no decrease in footfall or basket size but, they are comparatively lower than the store in profit.\nRetail Store Okay, So does the competitor that is making a profit have the edge in profit or the revenue generated?\nThe difference is in the net profit gained by the stores while revenue is comparable.\nDo competitors offer a wider range of products? How do the prices compare between us?"
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "That’s a good observation. They have more volume and variety of products, and their selling price is slightly ",
      "detail": "That’s a good observation. They have more volume and variety of products, and their selling price is slightly lower.\nSo let me clarify, the revenue is similar but profit margins are higher for the competitor, which means the issue is on the cost side.\nYes you are moving in the right direction.\nThat’s interesting. So, even after selling at less price they are earning more .This can lead to two observations, that either the supplier provides them with more quantity and diverse products or they have less expenditure."
    }
  ],
  "recommendations": [
    "Supplier also provides exclusive deals to the store in profit.",
    "To buy the supplies from any other supplier or directly from the",
    "Negotiate with the supplier to come into a legal binding contract to deliver",
    "Diversify our products to other brands of similar quality and customer"
  ],
  "metricsAndGuardrails": {
    "northStar": "Gross & EBITDA Margin Recovery (McKinsey & Company)",
    "leading": [
      "Unit realization vs COGS/unit",
      "Capacity utilization & waste/scrap %"
    ],
    "guardrails": [
      "Customer retention / NPS (don’t over-cut quality)",
      "Market share retention"
    ]
  },
  "synthesisScript": "For McKinsey & Company’s Retail Store Revenue & Profit Decline case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Supplier also provides exclusive deals to the store in profit. We will validate success via Gross & EBITDA Margin Recovery (McKinsey & Company) while guarding against Customer retention / NPS (don’t over-cut quality).",
  "interviewerTrap": "Assuming costs rose without checking Revenue (Price × Volume × Mix) first, or skipping Industry-wide vs Company-specific scoping!",
  "variations": [
    {
      "question": "How would your recommendation change if McKinsey & Company had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Profitability",
    "correctFramework": "Profit = Revenue (Price × Volume × Mix) − Costs (Fixed + Variable along Value Chain)",
    "structureOptions": [
      {
        "label": "Clarify Profit vs Margin & Industry vs Company → Split Revenue (P×V×Mix) vs Value-Chain Costs → Prioritize P0 Fixes",
        "correct": true,
        "feedback": "Classic MBB Profitability structure!"
      },
      {
        "label": "Fire 30% of staff on Minute 2 without reading the P&L",
        "correct": false,
        "feedback": "Never slash costs blindly before knowing whether revenue/mix or raw materials drove the drop."
      },
      {
        "label": "Apply CIRCLES mobile app persona interviews",
        "correct": false,
        "feedback": "CIRCLES is for Product Design, not P&L Profitability diagnosis."
      }
    ],
    "decisionQuiz": {
      "question": "In a Profitability case, why ask immediately if competitors are seeing the same decline?",
      "options": [
        {
          "label": "Separates Industry-wide macro/commodity shocks from Company-specific operational or pricing issues",
          "correct": true,
          "feedback": "Spot on! Instantly cuts the diagnostic tree in half."
        },
        {
          "label": "To copy competitors’ logos",
          "correct": false,
          "feedback": "It isolates internal execution vs external market forces."
        },
        {
          "label": "Because profits don't depend on costs",
          "correct": false,
          "feedback": "Macro input spikes hit the whole industry simultaneously."
        }
      ]
    }
  }
},
{
  "id": "ktc-09-steel-manufacturer-1",
  "title": "Steel Manufacturer - 1",
  "company": "KPMG",
  "source": "KTC Casebook 2026",
  "track": "Consulting",
  "category": "Profitability",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "KPMG",
    "Profitability",
    "Consulting"
  ],
  "prompt": "Your client is a steel manufacturer facing declining profits, the client has asked you to find out why and recommend solutions.",
  "clarifyingQuestions": [
    {
      "q": "Do we have any information on the quantum of profit decline and for how long they have been experiencing it?",
      "a": "Yes, the client is facing the decline of 20% over the 12-15 months.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "So is this decline specific to our client or is it an industry wide issue and whether the decline is specific to any particular geography?",
      "a": "No, only our client faces declining profits from all over the India, while others have been experiencing profits.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "What kind of product does our client manufactures and in which geography do they operate?",
      "a": "So, our client manufactures household furniture like Wardrobes, Tables, and chairs and their business has expanded across India.",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "Profit = Revenue (Price × Volume × Mix) − Costs (Fixed + Variable along Value Chain)",
  "coreEquation": "Profit = ∑(Units × Price × Margin Mix) − (Fixed Overhead + Variable Value-Chain Costs)",
  "strategyOverview": "Approach Steel Manufacturer - 1 (KPMG) using a Profitability structure: start by confirming the business objective and scope, decompose the problem cleanly along Profit = Revenue (Price × Volume × Mix) − Costs (Fixed + Variable along Value Chain), and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Steel Manufacturer - 1 — Profitability Tree",
    "valueText": "Rev vs Cost",
    "children": [
      {
        "label": "Revenue Side (Price × Volume × Product/Channel Mix)",
        "valueText": "Internal vs External",
        "highlight": true
      },
      {
        "label": "Cost Side (Procurement → Mfg → Logistics → SG&A)",
        "valueText": "Fixed vs Variable",
        "highlight": true
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Candidate",
      "prompt": "Your client is a steel manufacturer facing declining profits, the client has asked you to find out why and rec",
      "detail": "Your client is a steel manufacturer facing declining profits, the client has asked you to find out why and recommend solutions.\nOkay. I want to ask a few preliminary questions before diving deep into my overall structure and strategy.\nOkay. Let's go ahead.\nDo we have any information on the quantum of profit decline and for how long they have been experiencing it?"
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "Yes, the client is facing the decline of 20% over the 12-15 months.",
      "detail": "Yes, the client is facing the decline of 20% over the 12-15 months.\nSo is this decline specific to our client or is it an industry wide issue and whether the decline is specific to any particular geography?\nNo, only our client faces declining profits from all over the India, while others have been experiencing profits.\nWhat kind of product does our client manufactures and in which geography do they operate?"
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "So, our client manufactures household furniture like Wardrobes, Tables, and chairs and their business has expa",
      "detail": "So, our client manufactures household furniture like Wardrobes, Tables, and chairs and their business has expanded across India.\nIn which part of value chain, does our client operates?\nSo, our client procures and manufactures the steel furniture and distribute it through various suppliers to the stores.\nNow, I would like to look at the Profit Revenue Cost, and then I will deep dive into the various buckets under them."
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "Your structure seems good. Our cost have remained the same.",
      "detail": "Your structure seems good. Our cost have remained the same.\nWhy don't you go ahead with the revenue?\nSure, I will break the revenue into three buckets, that is- Number of units sold, price per unit, and the product portfolio.\nDo you want me to look at any specific bucket out of them?"
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "Yes, please go ahead with the Product portfolio.",
      "detail": "Yes, please go ahead with the Product portfolio.\nSure. According to my data, our client manufactures three kinds of steel furniture. Do we have any data on the % revenue share by each product?\nYes, wardrobe has a significant chunk of 70%, while tables and chairs contribute about 15% each.\nSo, out of these three, we have experienced a decline in the revenue share from which product?"
    }
  ],
  "recommendations": [
    "Client should decrease the price of the products and match with",
    "Client should sell their products in bundles.",
    "Explore the other materials for furniture.",
    "Increase the online presence."
  ],
  "metricsAndGuardrails": {
    "northStar": "Gross & EBITDA Margin Recovery (KPMG)",
    "leading": [
      "Unit realization vs COGS/unit",
      "Capacity utilization & waste/scrap %"
    ],
    "guardrails": [
      "Customer retention / NPS (don’t over-cut quality)",
      "Market share retention"
    ]
  },
  "synthesisScript": "For KPMG’s Steel Manufacturer - 1 case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Client should decrease the price of the products and match with We will validate success via Gross & EBITDA Margin Recovery (KPMG) while guarding against Customer retention / NPS (don’t over-cut quality).",
  "interviewerTrap": "Assuming costs rose without checking Revenue (Price × Volume × Mix) first, or skipping Industry-wide vs Company-specific scoping!",
  "variations": [
    {
      "question": "How would your recommendation change if KPMG had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Profitability",
    "correctFramework": "Profit = Revenue (Price × Volume × Mix) − Costs (Fixed + Variable along Value Chain)",
    "structureOptions": [
      {
        "label": "Clarify Profit vs Margin & Industry vs Company → Split Revenue (P×V×Mix) vs Value-Chain Costs → Prioritize P0 Fixes",
        "correct": true,
        "feedback": "Classic MBB Profitability structure!"
      },
      {
        "label": "Fire 30% of staff on Minute 2 without reading the P&L",
        "correct": false,
        "feedback": "Never slash costs blindly before knowing whether revenue/mix or raw materials drove the drop."
      },
      {
        "label": "Apply CIRCLES mobile app persona interviews",
        "correct": false,
        "feedback": "CIRCLES is for Product Design, not P&L Profitability diagnosis."
      }
    ],
    "decisionQuiz": {
      "question": "In a Profitability case, why ask immediately if competitors are seeing the same decline?",
      "options": [
        {
          "label": "Separates Industry-wide macro/commodity shocks from Company-specific operational or pricing issues",
          "correct": true,
          "feedback": "Spot on! Instantly cuts the diagnostic tree in half."
        },
        {
          "label": "To copy competitors’ logos",
          "correct": false,
          "feedback": "It isolates internal execution vs external market forces."
        },
        {
          "label": "Because profits don't depend on costs",
          "correct": false,
          "feedback": "Macro input spikes hit the whole industry simultaneously."
        }
      ]
    }
  }
},
{
  "id": "ktc-10-steel-manufacturer-2-coal-wastage",
  "title": "Steel Manufacturer - 2 (Coal Wastage)",
  "company": "Accenture",
  "source": "KTC Casebook 2026",
  "track": "Consulting",
  "category": "Profitability",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "Accenture",
    "Profitability",
    "Consulting"
  ],
  "prompt": "Your client is a steel manufacturer facing increasing costs,the client has asked you to find out the reason and recommend solutions.",
  "clarifyingQuestions": [
    {
      "q": "Do we have any information on the quantum of cost increase and for how long they have been experiencing it?",
      "a": "No, we do not have any data on that.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Okay. Is this increase in Cost specific to our client or an industry-wide issue and whether this issue related to any specific geography?",
      "a": "No, this is limited to a specific manufacturing unit in a tier 2 city of our client only.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Great. You've understood the situation well, how do you propose going about the solution?",
      "a": "Sure, I would like to look at the Profit Revenue Cost, and then I will deep dive into the various buckets under them.",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "Profit = Revenue (Price × Volume × Mix) − Costs (Fixed + Variable along Value Chain)",
  "coreEquation": "Profit = ∑(Units × Price × Margin Mix) − (Fixed Overhead + Variable Value-Chain Costs)",
  "strategyOverview": "Approach Steel Manufacturer - 2 (Coal Wastage) (Accenture) using a Profitability structure: start by confirming the business objective and scope, decompose the problem cleanly along Profit = Revenue (Price × Volume × Mix) − Costs (Fixed + Variable along Value Chain), and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Steel Manufacturer - 2 (Coal Wastage) — Profitability Tree",
    "valueText": "Rev vs Cost",
    "children": [
      {
        "label": "Revenue Side (Price × Volume × Product/Channel Mix)",
        "valueText": "Internal vs External",
        "highlight": true
      },
      {
        "label": "Cost Side (Procurement → Mfg → Logistics → SG&A)",
        "valueText": "Fixed vs Variable",
        "highlight": true
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Candidate",
      "prompt": "Your client is a steel manufacturer facing increasing costs,the client has asked you to find out the reason an",
      "detail": "Your client is a steel manufacturer facing increasing costs,the client has asked you to find out the reason and recommend solutions.\nBefore preliminary questions, I would like to reiterate the facts and objective of the case.\nOkay. Our client is a steel manufacturer facing the problem of increasing costs and we have to find out why and recommend solutions to their problems.\nDo we have any information on the quantum of cost increase and for how long they have been experiencing it?"
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "No, we do not have any data on that.",
      "detail": "No, we do not have any data on that.\nOkay. Is this increase in Cost specific to our client or an industry-wide issue and whether this issue related to any specific geography?\nNo, this is limited to a specific manufacturing unit in a tier 2 city of our client only.\nOkay, I have completed my preliminary questions. Give me a couple of minutes, and I will be back with my approach."
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "Okay, I would like to look at the cost and dive deep into the various buckets under it. Cost broadly includes ",
      "detail": "Okay, I would like to look at the cost and dive deep into the various buckets under it. Cost broadly includes two buckets i.e. Fixed Cost and Variable Cost.\nSure, the fixed Cost includes the labour wages, electricity bills, and rents, while variable Cost includes the raw materials, R&D and machinery.\nGreat. You've understood the situation well, how do you propose going about the solution?\nSure, I would like to look at the Profit Revenue Cost, and then I will deep dive into the various buckets under them."
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "Your structure seems good. Our cost have remained the same.",
      "detail": "Your structure seems good. Our cost have remained the same.\nWhy don't you go ahead with the revenue?\nSure, I will break the revenue into three buckets, that is- Number of units sold, price per unit, and the product portfolio. Do you want me to look at any specific bucket out of them?\nYes, please go ahead with the Product portfolio."
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "Sure. According to my data, our client manufactures three kinds of steel furniture. Do we have any data on the",
      "detail": "Sure. According to my data, our client manufactures three kinds of steel furniture. Do we have any data on the % revenue share by each product?\nYes, wardrobe has a significant chunk of 70%, while tables and chairs contribute about 15% each.\nSo, out of these three, have we experienced a decline in the revenue share from any product?\nWe have experienced a decline in every segment of the product."
    }
  ],
  "recommendations": [
    "Client’s manufacturing plant is in the middle of the city",
    "Transportation of coal to a longer distance has increased the",
    "Short term: Client should use closed boxes/containers to transport",
    "Long term: Client should contract with the coal supplier based in"
  ],
  "metricsAndGuardrails": {
    "northStar": "Gross & EBITDA Margin Recovery (Accenture)",
    "leading": [
      "Unit realization vs COGS/unit",
      "Capacity utilization & waste/scrap %"
    ],
    "guardrails": [
      "Customer retention / NPS (don’t over-cut quality)",
      "Market share retention"
    ]
  },
  "synthesisScript": "For Accenture’s Steel Manufacturer - 2 (Coal Wastage) case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Client’s manufacturing plant is in the middle of the city We will validate success via Gross & EBITDA Margin Recovery (Accenture) while guarding against Customer retention / NPS (don’t over-cut quality).",
  "interviewerTrap": "Assuming costs rose without checking Revenue (Price × Volume × Mix) first, or skipping Industry-wide vs Company-specific scoping!",
  "variations": [
    {
      "question": "How would your recommendation change if Accenture had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Profitability",
    "correctFramework": "Profit = Revenue (Price × Volume × Mix) − Costs (Fixed + Variable along Value Chain)",
    "structureOptions": [
      {
        "label": "Clarify Profit vs Margin & Industry vs Company → Split Revenue (P×V×Mix) vs Value-Chain Costs → Prioritize P0 Fixes",
        "correct": true,
        "feedback": "Classic MBB Profitability structure!"
      },
      {
        "label": "Fire 30% of staff on Minute 2 without reading the P&L",
        "correct": false,
        "feedback": "Never slash costs blindly before knowing whether revenue/mix or raw materials drove the drop."
      },
      {
        "label": "Apply CIRCLES mobile app persona interviews",
        "correct": false,
        "feedback": "CIRCLES is for Product Design, not P&L Profitability diagnosis."
      }
    ],
    "decisionQuiz": {
      "question": "In a Profitability case, why ask immediately if competitors are seeing the same decline?",
      "options": [
        {
          "label": "Separates Industry-wide macro/commodity shocks from Company-specific operational or pricing issues",
          "correct": true,
          "feedback": "Spot on! Instantly cuts the diagnostic tree in half."
        },
        {
          "label": "To copy competitors’ logos",
          "correct": false,
          "feedback": "It isolates internal execution vs external market forces."
        },
        {
          "label": "Because profits don't depend on costs",
          "correct": false,
          "feedback": "Macro input spikes hit the whole industry simultaneously."
        }
      ]
    }
  }
},
{
  "id": "ktc-11-tractor-manufacturer-profitability",
  "title": "Tractor Manufacturer Profitability",
  "company": "BCG",
  "source": "KTC Casebook 2026",
  "track": "Consulting",
  "category": "Profitability",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "BCG",
    "Profitability",
    "Consulting"
  ],
  "prompt": "Tractor Manufacturer Your client is a luxurious tractor manufacturer who is facing loss from the past 6 months, you have been hired as a consultant to find out the reason and suggest some solutions.",
  "clarifyingQuestions": [
    {
      "q": "Okay. Is this loss specific to our client or an industry-wide issue?",
      "a": "No, this is limited to our client only. Our competitor is enjoying profits.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "In which part of the value chain, does our client operates?",
      "a": "So, our client manufactures the Tractors and distributes them through various suppliers.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "You have mentioned that the Tractor is a premium product, so what features make it a premium product?",
      "a": "Our Tractors are an example of state-of-the-art manufacturing and provide various features that make them run on any kind of field in adverse weather conditions.",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "Profit = Revenue (Price × Volume × Mix) − Costs (Fixed + Variable along Value Chain)",
  "coreEquation": "Profit = ∑(Units × Price × Margin Mix) − (Fixed Overhead + Variable Value-Chain Costs)",
  "strategyOverview": "Approach Tractor Manufacturer Profitability (BCG) using a Profitability structure: start by confirming the business objective and scope, decompose the problem cleanly along Profit = Revenue (Price × Volume × Mix) − Costs (Fixed + Variable along Value Chain), and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Tractor Manufacturer Profitability — Profitability Tree",
    "valueText": "Rev vs Cost",
    "children": [
      {
        "label": "Revenue Side (Price × Volume × Product/Channel Mix)",
        "valueText": "Internal vs External",
        "highlight": true
      },
      {
        "label": "Cost Side (Procurement → Mfg → Logistics → SG&A)",
        "valueText": "Fixed vs Variable",
        "highlight": true
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Candidate",
      "prompt": "Tractor Manufacturer Your client is a luxurious tractor manufacturer who is facing loss from the past 6 months",
      "detail": "Tractor Manufacturer Your client is a luxurious tractor manufacturer who is facing loss from the past 6 months, you have been hired as a consultant to find out the reason and suggest some solutions.\nBefore moving forward, I want to reiterate the case that our client is a premium Tractor manufacturer facing loss from the past 6 months and we have to find out why and recommend solutions to their problems.\nDo we have any information on the quantum of loss No, we do not have any data on that.\nOkay. Is this loss specific to our client or an industry-wide issue?"
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "No, this is limited to our client only. Our competitor is enjoying profits.",
      "detail": "No, this is limited to our client only. Our competitor is enjoying profits.\nIn which part of the value chain, does our client operates?\nSo, our client manufactures the Tractors and distributes them through various suppliers.\nYou have mentioned that the Tractor is a premium product, so what features make it a premium product?"
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "Our Tractors are an example of state-of-the-art manufacturing and provide various features that make them run ",
      "detail": "Our Tractors are an example of state-of-the-art manufacturing and provide various features that make them run on any kind of field in adverse weather conditions.\nComing to the various parts of the Tractor whether our Client manufacture all parts or they have to outbound them?\nGood question, The Client manufactures most of the essential parts but they have to outbound some parts to the third-party manufacturer.\nOkay, I would like to propose my strategy that, first I will look at the Profit - Revenue - Cost and dive deep into the various buckets under it."
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "Your structure seems exhaustive. Please proceed ahead.",
      "detail": "Your structure seems exhaustive. Please proceed ahead.\nTractor Manufacturer Sure, do we have any idea whether the Client has faced a decline in their revenue or an increase in cost?\nActually, the Client is facing both issues and wants you to analyze both. Why don't you go ahead with the cost?\nSure. Cost broadly includes two buckets, i.e., Fixed Cost and Variable Cost where the fixed Cost includes labor wages, electricity bills, and rents, while variable Cost includes the raw materials, R&D, and machinery."
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "Okay. We have no issue with the fixed Cost. Can you look at the variable costs?",
      "detail": "Okay. We have no issue with the fixed Cost. Can you look at the variable costs?\nSure, coming to the variable costs. Do we have any data on the changes in any of the aforementioned buckets?\nYes, our spending on raw materials has increased in the past few month Next, in raw materials, I’ll analyze insourcing vs. outsourcing.\nHave we seen any cost increases in either?"
    }
  ],
  "recommendations": [
    "Prioritize the highest-impact P0 bottleneck identified in Tractor Manufacturer Profitability before secondary optimizations.",
    "Pilot the top intervention in a controlled cohort/region with clear North Star and guardrail tracking.",
    "Scale rollout only after verifying unit economics and zero adverse second-order effects."
  ],
  "metricsAndGuardrails": {
    "northStar": "Gross & EBITDA Margin Recovery (BCG)",
    "leading": [
      "Unit realization vs COGS/unit",
      "Capacity utilization & waste/scrap %"
    ],
    "guardrails": [
      "Customer retention / NPS (don’t over-cut quality)",
      "Market share retention"
    ]
  },
  "synthesisScript": "For BCG’s Tractor Manufacturer Profitability case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Prioritize the highest-impact P0 bottleneck identified in Tractor Manufacturer Profitability before secondary optimizations. We will validate success via Gross & EBITDA Margin Recovery (BCG) while guarding against Customer retention / NPS (don’t over-cut quality).",
  "interviewerTrap": "Assuming costs rose without checking Revenue (Price × Volume × Mix) first, or skipping Industry-wide vs Company-specific scoping!",
  "variations": [
    {
      "question": "How would your recommendation change if BCG had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Profitability",
    "correctFramework": "Profit = Revenue (Price × Volume × Mix) − Costs (Fixed + Variable along Value Chain)",
    "structureOptions": [
      {
        "label": "Clarify Profit vs Margin & Industry vs Company → Split Revenue (P×V×Mix) vs Value-Chain Costs → Prioritize P0 Fixes",
        "correct": true,
        "feedback": "Classic MBB Profitability structure!"
      },
      {
        "label": "Fire 30% of staff on Minute 2 without reading the P&L",
        "correct": false,
        "feedback": "Never slash costs blindly before knowing whether revenue/mix or raw materials drove the drop."
      },
      {
        "label": "Apply CIRCLES mobile app persona interviews",
        "correct": false,
        "feedback": "CIRCLES is for Product Design, not P&L Profitability diagnosis."
      }
    ],
    "decisionQuiz": {
      "question": "In a Profitability case, why ask immediately if competitors are seeing the same decline?",
      "options": [
        {
          "label": "Separates Industry-wide macro/commodity shocks from Company-specific operational or pricing issues",
          "correct": true,
          "feedback": "Spot on! Instantly cuts the diagnostic tree in half."
        },
        {
          "label": "To copy competitors’ logos",
          "correct": false,
          "feedback": "It isolates internal execution vs external market forces."
        },
        {
          "label": "Because profits don't depend on costs",
          "correct": false,
          "feedback": "Macro input spikes hit the whole industry simultaneously."
        }
      ]
    }
  }
},
{
  "id": "ktc-12-barb-s-bbq-profitability",
  "title": "Barb's BBQ Profitability",
  "company": "PrepLounge",
  "source": "KTC Casebook 2026",
  "track": "Consulting",
  "category": "Profitability",
  "difficulty": 4,
  "isStarter": false,
  "tags": [
    "PrepLounge",
    "Profitability",
    "Consulting"
  ],
  "prompt": "Barb’s BBQ Your client is Barb B. Queue, the owner of a deli shop situated inside a busy supermarket. The shop has been facing stiff competition from neighboring supermarket offerings and nearby fast-food chains. Barb is concerned because store profits have stagnated and are beginning to decline over the long term. He has asked us to look into his books, diagnose the root causes of this stagnation, and propose action",
  "clarifyingQuestions": [
    {
      "q": "Thank you. To establish a baseline, could you clarify what Barb’s business model looks like in terms of operating hours, core product categories, and any major operational constraints he is currently facing?",
      "a": "Barb’s operates as a food business serving both deli meats and pre-processed prepared foods. The shop runs across two primary shifts—one in the morning and one in the evening—to align with the peak foot-traffic hours of the supermarket. As ",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Understood. Looking at the product mix, what specific items are we selling, and are there any signature items or combo meals?",
      "a": "Furthermore, is there a particular product line driving this stagnation, and how is the broader competitive landscape performing?",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Furthermore, is there a particular product line driving this stagnation, and how is the broader competitive landscape performing?",
      "a": "Revenue is generated across two primary categories: deli foods and prepared foods. Within deli meats, the core offerings are BBQ chicken wings and pulled pork burgers. We don’t immediately know which specific product is responsible for the ",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "Profit = Revenue (Price × Volume × Mix) − Costs (Fixed + Variable along Value Chain)",
  "coreEquation": "Profit = ∑(Units × Price × Margin Mix) − (Fixed Overhead + Variable Value-Chain Costs)",
  "strategyOverview": "Approach Barb's BBQ Profitability (PrepLounge) using a Profitability structure: start by confirming the business objective and scope, decompose the problem cleanly along Profit = Revenue (Price × Volume × Mix) − Costs (Fixed + Variable along Value Chain), and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Barb's BBQ Profitability — Profitability Tree",
    "valueText": "Rev vs Cost",
    "children": [
      {
        "label": "Revenue Side (Price × Volume × Product/Channel Mix)",
        "valueText": "Internal vs External",
        "highlight": true
      },
      {
        "label": "Cost Side (Procurement → Mfg → Logistics → SG&A)",
        "valueText": "Fixed vs Variable",
        "highlight": true
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Interviewer",
      "prompt": "Barb’s BBQ Your client is Barb B. Queue, the owner of a deli shop situated inside a busy supermarket. The shop",
      "detail": "Barb’s BBQ Your client is Barb B. Queue, the owner of a deli shop situated inside a busy supermarket. The shop has been facing stiff competition from neighboring supermarket offerings and nearby fast-food chains. Barb is concerned because store profits have stagnated and are beginning to decline over the long term. He has asked us to look into his books, diagnose the root causes of this stagnation, and propose actionable solutions. How would you like to approach this?\nThank you. To establish a baseline, could you clarify what Barb’s business model looks like in terms of operating hours, core product categories, a"
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "Furthermore, is there a particular product line driving this stagnation, and how is the broader competitive la",
      "detail": "Furthermore, is there a particular product line driving this stagnation, and how is the broader competitive landscape performing?\nRevenue is generated across two primary categories: deli foods and prepared foods. Within deli meats, the core offerings are BBQ chicken wings and pulled pork burgers. We don’t immediately know which specific product is responsible for the stagnation, so we'll need to dig into the financials. We do know that Barb's pulled pork burger combo is quite popular and budget-friendly. In terms of competition, we are inside a busy supermarket where several rivals sell comparable food items.\nHer"
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "Deli food revenue has also remained stagnant around $280,000 while cost of goods increased. How are our compet",
      "detail": "Deli food revenue has also remained stagnant around $280,000 while cost of goods increased. How are our competitors pricing and marketing these categories?\nYou are spot on. In deli meats, our competitors have more aggressive marketing and undercut us on price. On the prepared foods side, our primary pressure comes from surrounding quick-service fast-food outlets.\nGiven that deli food has flatlined, I'd like to dissect the pricing and cost structure. Are our supplier contracts and employee labor rates competitive, and how does our burger price compare to the market?\nWe source all ingredients from a single large-sc"
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "That highlights two immediate headwinds: our competitors undercut us by $0.50 on identical quality, and our la",
      "detail": "That highlights two immediate headwinds: our competitors undercut us by $0.50 on identical quality, and our labor costs are too high to support that price point. With a $2.00 material cost and 31 daily sales across 4 hours, Barb's labor rate would need to stay below $23–$24 an hour just to break even, and ideally drop between $16 and $20 an hour to carve out a sustainable margin and allow us to match competitor pricing. Beyond price and cost, should I investigate sales volume across supply and demand?\nBarb’s BBQ Sales are driven by both dimensions, so analyzing both makes sense.\nSince our raw material supply is s"
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "That points to an operational throughput bottleneck: scratch cooking inside a fixed kitchen footprint slows or",
      "detail": "That points to an operational throughput bottleneck: scratch cooking inside a fixed kitchen footprint slows order fulfillment and caps capacity. Turning to the demand side, is foot traffic dropping across the supermarket, or is the issue localized to our store?\nSupermarket foot traffic is actually increasing. However, our customer base consists almost entirely of repeat, loyal patrons rather than new foot traffic.\nThat indicates a low customer acquisition rate despite a growing pool of potential shoppers. Is our store poorly located, or are competitors doing a better job capturing shoppers' attention?\nStore locat"
    }
  ],
  "recommendations": [
    "Prioritize the highest-impact P0 bottleneck identified in Barb's BBQ Profitability before secondary optimizations.",
    "Pilot the top intervention in a controlled cohort/region with clear North Star and guardrail tracking.",
    "Scale rollout only after verifying unit economics and zero adverse second-order effects."
  ],
  "metricsAndGuardrails": {
    "northStar": "Gross & EBITDA Margin Recovery (PrepLounge)",
    "leading": [
      "Unit realization vs COGS/unit",
      "Capacity utilization & waste/scrap %"
    ],
    "guardrails": [
      "Customer retention / NPS (don’t over-cut quality)",
      "Market share retention"
    ]
  },
  "synthesisScript": "For PrepLounge’s Barb's BBQ Profitability case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Prioritize the highest-impact P0 bottleneck identified in Barb's BBQ Profitability before secondary optimizations. We will validate success via Gross & EBITDA Margin Recovery (PrepLounge) while guarding against Customer retention / NPS (don’t over-cut quality).",
  "interviewerTrap": "Assuming costs rose without checking Revenue (Price × Volume × Mix) first, or skipping Industry-wide vs Company-specific scoping!",
  "variations": [
    {
      "question": "How would your recommendation change if PrepLounge had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Profitability",
    "correctFramework": "Profit = Revenue (Price × Volume × Mix) − Costs (Fixed + Variable along Value Chain)",
    "structureOptions": [
      {
        "label": "Clarify Profit vs Margin & Industry vs Company → Split Revenue (P×V×Mix) vs Value-Chain Costs → Prioritize P0 Fixes",
        "correct": true,
        "feedback": "Classic MBB Profitability structure!"
      },
      {
        "label": "Fire 30% of staff on Minute 2 without reading the P&L",
        "correct": false,
        "feedback": "Never slash costs blindly before knowing whether revenue/mix or raw materials drove the drop."
      },
      {
        "label": "Apply CIRCLES mobile app persona interviews",
        "correct": false,
        "feedback": "CIRCLES is for Product Design, not P&L Profitability diagnosis."
      }
    ],
    "decisionQuiz": {
      "question": "In a Profitability case, why ask immediately if competitors are seeing the same decline?",
      "options": [
        {
          "label": "Separates Industry-wide macro/commodity shocks from Company-specific operational or pricing issues",
          "correct": true,
          "feedback": "Spot on! Instantly cuts the diagnostic tree in half."
        },
        {
          "label": "To copy competitors’ logos",
          "correct": false,
          "feedback": "It isolates internal execution vs external market forces."
        },
        {
          "label": "Because profits don't depend on costs",
          "correct": false,
          "feedback": "Macro input spikes hit the whole industry simultaneously."
        }
      ]
    }
  }
},
{
  "id": "ktc-13-drug-manufacturer-profitability",
  "title": "Drug Manufacturer Profitability",
  "company": "BCG",
  "source": "KTC Casebook 2026",
  "track": "Consulting",
  "category": "Profitability",
  "difficulty": 4,
  "isStarter": false,
  "tags": [
    "BCG",
    "Profitability",
    "Consulting"
  ],
  "prompt": "Drug Manufacturer Your client, an oncology drug manufacturer, is facing a decline in profitability. The client has asked you to find the reasons, and hence recommend solutions.",
  "clarifyingQuestions": [
    {
      "q": "To the best of my knowledge, oncology is related to cancer. Is that correct?",
      "a": "That’s right.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Is the problem company specific or industry specific?",
      "a": "The decline is specific to our client.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "For how long has the client been experiencing the decline in profitability?",
      "a": "The client has been facing a decline for a year.",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "Profit = Revenue (Price × Volume × Mix) − Costs (Fixed + Variable along Value Chain)",
  "coreEquation": "Profit = ∑(Units × Price × Margin Mix) − (Fixed Overhead + Variable Value-Chain Costs)",
  "strategyOverview": "Approach Drug Manufacturer Profitability (BCG) using a Profitability structure: start by confirming the business objective and scope, decompose the problem cleanly along Profit = Revenue (Price × Volume × Mix) − Costs (Fixed + Variable along Value Chain), and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Drug Manufacturer Profitability — Profitability Tree",
    "valueText": "Rev vs Cost",
    "children": [
      {
        "label": "Revenue Side (Price × Volume × Product/Channel Mix)",
        "valueText": "Internal vs External",
        "highlight": true
      },
      {
        "label": "Cost Side (Procurement → Mfg → Logistics → SG&A)",
        "valueText": "Fixed vs Variable",
        "highlight": true
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Candidate",
      "prompt": "Drug Manufacturer Your client, an oncology drug manufacturer, is facing a decline in profitability. The client",
      "detail": "Drug Manufacturer Your client, an oncology drug manufacturer, is facing a decline in profitability. The client has asked you to find the reasons, and hence recommend solutions.\nOkay. I want to ask a few preliminary questions before diving deep into my overall structure and strategy.\nTo the best of my knowledge, oncology is related to cancer. Is that correct?\nIs the problem company specific or industry specific?"
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "The decline is specific to our client.",
      "detail": "The decline is specific to our client.\nFor how long has the client been experiencing the decline in profitability?\nThe client has been facing a decline for a year.\nHow does the client sell its products?"
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "The drug is sold to pharmacies and hospitals.",
      "detail": "The drug is sold to pharmacies and hospitals.\nWhat geographics does our client manufacture in, and is the problem related to a specific geography?\nIt has nationwide presence except the Northeast and the client is facing declining profits from all over India. The decline is more noticeable in regions where competition is high.\nOkay, I have understood the situation. I would like to look at profit which is revenue - costs and hence dive deeper into each bucket."
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "The cost has been stagnant. The challenge really seems to be on the revenue side.",
      "detail": "The cost has been stagnant. The challenge really seems to be on the revenue side.\nOkay. I would like to divide my revenue into three buckets, number of units sold, price per unit, and product portfolio. Firstly, is it fair to say that there has been a decrease in the number of units sold?\nDrug Manufacturer Yes, although the client’s product is the same as competitors’ product, there has been a decline in the number of units sold.\nHas the price of our client’s product fluctuated? And has the price of competitors’ products fluctuated in the same time frame?"
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "No. The prices of the client’s as well as the competitor’s product have been maintained in the required time f",
      "detail": "No. The prices of the client’s as well as the competitor’s product have been maintained in the required time frame.\nWhat are the promotion strategies used by our client?\nOur client's primary method of promotion is through their team pharmaceutical sales representatives. Other methods are patient support programs, workshops and training sessions.\nWhat are the promotion strategies offered by our competitors?"
    }
  ],
  "recommendations": [
    "Client maintains an ethical stance and avoids doctor commissions.",
    "Strategic Partnership: Collaborate with another ethical manufacturer to",
    "Advocacy: Lobby for government support/subsidies to improve visibility",
    "Market Expansion: Establish presence in Northeast region to capture New Market"
  ],
  "metricsAndGuardrails": {
    "northStar": "Gross & EBITDA Margin Recovery (BCG)",
    "leading": [
      "Unit realization vs COGS/unit",
      "Capacity utilization & waste/scrap %"
    ],
    "guardrails": [
      "Customer retention / NPS (don’t over-cut quality)",
      "Market share retention"
    ]
  },
  "synthesisScript": "For BCG’s Drug Manufacturer Profitability case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Client maintains an ethical stance and avoids doctor commissions. We will validate success via Gross & EBITDA Margin Recovery (BCG) while guarding against Customer retention / NPS (don’t over-cut quality).",
  "interviewerTrap": "Assuming costs rose without checking Revenue (Price × Volume × Mix) first, or skipping Industry-wide vs Company-specific scoping!",
  "variations": [
    {
      "question": "How would your recommendation change if BCG had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Profitability",
    "correctFramework": "Profit = Revenue (Price × Volume × Mix) − Costs (Fixed + Variable along Value Chain)",
    "structureOptions": [
      {
        "label": "Clarify Profit vs Margin & Industry vs Company → Split Revenue (P×V×Mix) vs Value-Chain Costs → Prioritize P0 Fixes",
        "correct": true,
        "feedback": "Classic MBB Profitability structure!"
      },
      {
        "label": "Fire 30% of staff on Minute 2 without reading the P&L",
        "correct": false,
        "feedback": "Never slash costs blindly before knowing whether revenue/mix or raw materials drove the drop."
      },
      {
        "label": "Apply CIRCLES mobile app persona interviews",
        "correct": false,
        "feedback": "CIRCLES is for Product Design, not P&L Profitability diagnosis."
      }
    ],
    "decisionQuiz": {
      "question": "In a Profitability case, why ask immediately if competitors are seeing the same decline?",
      "options": [
        {
          "label": "Separates Industry-wide macro/commodity shocks from Company-specific operational or pricing issues",
          "correct": true,
          "feedback": "Spot on! Instantly cuts the diagnostic tree in half."
        },
        {
          "label": "To copy competitors’ logos",
          "correct": false,
          "feedback": "It isolates internal execution vs external market forces."
        },
        {
          "label": "Because profits don't depend on costs",
          "correct": false,
          "feedback": "Macro input spikes hit the whole industry simultaneously."
        }
      ]
    }
  }
},
{
  "id": "ktc-14-fashion-mail-order-profitability",
  "title": "Fashion Mail Order Profitability",
  "company": "PrepLounge",
  "source": "KTC Casebook 2026",
  "track": "Consulting",
  "category": "Profitability",
  "difficulty": 4,
  "isStarter": false,
  "tags": [
    "PrepLounge",
    "Profitability",
    "Consulting"
  ],
  "prompt": "Fashion Mail Order Your client is a direct mail clothing retailer. Postage costs for catalogs will rise to 40 cents each next year. The client wants to know if their current business model is still profitable.",
  "clarifyingQuestions": [
    {
      "q": "Could you tell me more about the current setup? What exactly do you sell, and through which channel?",
      "a": "We sell a wide variety of low-cost clothing. Our only distribution channel is product catalogs mailed directly to customers.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "How are margins currently?",
      "a": "Profit margin per order is 15% (excluding mailing costs).",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Has the number of catalog orders been stable?",
      "a": "No, catalog orders have been declining over the past years, in line with the market trend in Europe.",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "Profit = Revenue (Price × Volume × Mix) − Costs (Fixed + Variable along Value Chain)",
  "coreEquation": "Profit = ∑(Units × Price × Margin Mix) − (Fixed Overhead + Variable Value-Chain Costs)",
  "strategyOverview": "Approach Fashion Mail Order Profitability (PrepLounge) using a Profitability structure: start by confirming the business objective and scope, decompose the problem cleanly along Profit = Revenue (Price × Volume × Mix) − Costs (Fixed + Variable along Value Chain), and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Fashion Mail Order Profitability — Profitability Tree",
    "valueText": "Rev vs Cost",
    "children": [
      {
        "label": "Revenue Side (Price × Volume × Product/Channel Mix)",
        "valueText": "Internal vs External",
        "highlight": true
      },
      {
        "label": "Cost Side (Procurement → Mfg → Logistics → SG&A)",
        "valueText": "Fixed vs Variable",
        "highlight": true
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Candidate",
      "prompt": "Fashion Mail Order Your client is a direct mail clothing retailer. Postage costs for catalogs will rise to 40 ",
      "detail": "Fashion Mail Order Your client is a direct mail clothing retailer. Postage costs for catalogs will rise to 40 cents each next year. The client wants to know if their current business model is still profitable.\nCould you tell me more about the current setup? What exactly do you sell, and through which channel?\nWe sell a wide variety of low-cost clothing. Our only distribution channel is product catalogs mailed directly to customers.\nHow are margins currently?"
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "Profit margin per order is 15% (excluding mailing costs).",
      "detail": "Profit margin per order is 15% (excluding mailing costs).\nHas the number of catalog orders been stable?\nNo, catalog orders have been declining over the past years, in line with the market trend in Europe.\nLet’s estimate revenue per catalog. What’s the average order behavior?"
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "Each catalog generates about $2.50 in revenue on average (considering both initial and repeat orders).",
      "detail": "Each catalog generates about $2.50 in revenue on average (considering both initial and repeat orders).\nOkay, so with a 15% margin, that’s about 37.5 cents profit per catalog before mailing cost.With the new 40-cent mailing cost, we lose about 2.5 cents per catalog which means the current business model becomes unprofitable.\nWhat about raising prices?\nNot feasible. Price elasticity studies show even small price increases cause sharp customer drop-offs."
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "Since we already run a lean supply chain, cutting costs further in procurement or operations won’t be feasible",
      "detail": "Since we already run a lean supply chain, cutting costs further in procurement or operations won’t be feasible either.\nFashion Mail Order So,If we stick to our current market and current channel, what happens?\nThat means continuing with catalogs in Europe. But since catalog orders in Europe are already declining and postage costs are rising, this is unsustainable.\nWhat if we keep the current market but switch to a new channel?"
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "In Europe, instead of relying only on mail-order catalogs, we can launch an online store. This helps us captur",
      "detail": "In Europe, instead of relying only on mail-order catalogs, we can launch an online store. This helps us capture customers who are shifting to digital shopping while reducing mailing costs.\nWhat if we keep the current channel but explore new markets?\nThat would mean expanding catalog sales into emerging markets. In some developing regions, catalogs may still be relevant for cost-conscious buyers or areas with limited internet penetration.\nAnd finally, what if we explore both new markets and new channels?"
    }
  ],
  "recommendations": [
    "Raising prices is unviable due to high price sensitivity.",
    "Costs already optimized, so efficiency gains limited.",
    "Explore new channels : e-commerce (website), partnerships with online",
    "Consider new markets : emerging economies with demand for low-cost"
  ],
  "metricsAndGuardrails": {
    "northStar": "Gross & EBITDA Margin Recovery (PrepLounge)",
    "leading": [
      "Unit realization vs COGS/unit",
      "Capacity utilization & waste/scrap %"
    ],
    "guardrails": [
      "Customer retention / NPS (don’t over-cut quality)",
      "Market share retention"
    ]
  },
  "synthesisScript": "For PrepLounge’s Fashion Mail Order Profitability case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Raising prices is unviable due to high price sensitivity. We will validate success via Gross & EBITDA Margin Recovery (PrepLounge) while guarding against Customer retention / NPS (don’t over-cut quality).",
  "interviewerTrap": "Assuming costs rose without checking Revenue (Price × Volume × Mix) first, or skipping Industry-wide vs Company-specific scoping!",
  "variations": [
    {
      "question": "How would your recommendation change if PrepLounge had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Profitability",
    "correctFramework": "Profit = Revenue (Price × Volume × Mix) − Costs (Fixed + Variable along Value Chain)",
    "structureOptions": [
      {
        "label": "Clarify Profit vs Margin & Industry vs Company → Split Revenue (P×V×Mix) vs Value-Chain Costs → Prioritize P0 Fixes",
        "correct": true,
        "feedback": "Classic MBB Profitability structure!"
      },
      {
        "label": "Fire 30% of staff on Minute 2 without reading the P&L",
        "correct": false,
        "feedback": "Never slash costs blindly before knowing whether revenue/mix or raw materials drove the drop."
      },
      {
        "label": "Apply CIRCLES mobile app persona interviews",
        "correct": false,
        "feedback": "CIRCLES is for Product Design, not P&L Profitability diagnosis."
      }
    ],
    "decisionQuiz": {
      "question": "In a Profitability case, why ask immediately if competitors are seeing the same decline?",
      "options": [
        {
          "label": "Separates Industry-wide macro/commodity shocks from Company-specific operational or pricing issues",
          "correct": true,
          "feedback": "Spot on! Instantly cuts the diagnostic tree in half."
        },
        {
          "label": "To copy competitors’ logos",
          "correct": false,
          "feedback": "It isolates internal execution vs external market forces."
        },
        {
          "label": "Because profits don't depend on costs",
          "correct": false,
          "feedback": "Macro input spikes hit the whole industry simultaneously."
        }
      ]
    }
  }
},
{
  "id": "ktc-me-airport-taxi",
  "title": "Airport Taxi Market Entry",
  "company": "BCG",
  "source": "KTC Casebook 2026",
  "track": "Consulting",
  "category": "Market Entry",
  "difficulty": 1,
  "isStarter": true,
  "tags": [
    "BCG",
    "Market Entry",
    "Mobility",
    "Airport",
    "Breakeven"
  ],
  "prompt": "Airport Taxi Dubai Airport is retracting all existing permits and is issuing 2,100 new permits to the three largest operators in the country. Our client is a local Big-three taxi operator with a 3,000-car fleet, but he is not servicing the airport yet. He has a spare capacity of 500 taxis and he is considering applying for 500 new permits. He asked us to help him determine if he should pursue applying for the permits",
  "clarifyingQuestions": [
    {
      "q": "What is the target profit for our client?",
      "a": "Our client is looking for an investment target of 20% ROI over 1 year.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Okay, so I would like to dive into the revenues first. On average how many passengers use the airport and how many of them go into Dubai?",
      "a": "The airport has 84 million passengers per year, and 20% go into Dubai using a taxi, the remaining 80% are transit passengers.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Is there a variation between amount of passengers overnight and during the day?",
      "a": "Yes, Between midnight(12 AM) and 6 AM, 50% require a taxi (this takes into account multiple passengers sharing a taxi). Between 6 AM and 12 AM(over a duration of 18 hours), the other 50% require a taxi (this takes into account multiple pass",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "Market Attractiveness (Airport Pax Sizing) → Competition (Ola/Uber/Metro) → Unit Economics & Entry Mode",
  "coreEquation": "Year-1 Profit = (Daily Trips × Captured Share × Take-Rate/Margin × 365) − Fixed Fleet/Permit/Tech Capex",
  "strategyOverview": "Evaluate entering dedicated airport taxi operations by sizing daily arriving/departing passenger taxi demand, checking incumbent competition (prepaid booths, app aggregators, metro), assessing airport concession/parking permit economics, and picking the lowest-capex entry mode (aggregator fleet partnership vs owning cabs).",
  "tree": {
    "label": "Airport Taxi Market Entry — Market Entry Tree",
    "valueText": "Should & How?",
    "children": [
      {
        "label": "1. Market Attractiveness (TAM/SAM/Growth/Margins)",
        "valueText": "Size Pool",
        "highlight": true
      },
      {
        "label": "2. Competition & Regulatory Barriers (5 Forces/PESTEL)",
        "valueText": "Right to Win"
      },
      {
        "label": "3. Economics (BEP) & Entry Mode (Build / Buy / Partner)",
        "valueText": "Execution",
        "highlight": true
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Candidate",
      "prompt": "Airport Taxi Dubai Airport is retracting all existing permits and is issuing 2,100 new permits to the three la",
      "detail": "Airport Taxi Dubai Airport is retracting all existing permits and is issuing 2,100 new permits to the three largest operators in the country. Our client is a local Big-three taxi operator with a 3,000-car fleet, but he is not servicing the airport yet. He has a spare capacity of 500 taxis and he is considering applying for 500 new permits. He asked us to help him determine if he should pursue applying for the permits or not.\nWhat is the target profit for our client?\nOur client is looking for an investment target of 20% ROI over 1 year.\nOkay, so I would like to dive into the revenues first. On average how many pas"
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "The airport has 84 million passengers per year, and 20% go into Dubai using a taxi, the remaining 80% are tran",
      "detail": "The airport has 84 million passengers per year, and 20% go into Dubai using a taxi, the remaining 80% are transit passengers.\nIs there a variation between amount of passengers overnight and during the day?\nYes, Between midnight(12 AM) and 6 AM, 50% require a taxi (this takes into account multiple passengers sharing a taxi). Between 6 AM and 12 AM(over a duration of 18 hours), the other 50% require a taxi (this takes into account multiple passengers sharing a taxi).\nAlright, what are the fares for the two respective timings?"
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "The night fares are $80 and the day fares are $70. The taxis operate 24/7 - assume no need for fuel, maintenan",
      "detail": "The night fares are $80 and the day fares are $70. The taxis operate 24/7 - assume no need for fuel, maintenance, and that there are no traffic jams.\nHow long is the journey of the passenger on average?\nEvery trip takes 60 minutes to leave the airport and get back on average.\nCalculating the demand for taxis, during the night, there are 50% * 20% * 84,000,000 = 8,400,000 passengers per year which is 3,835 passengers per hour. During the daytime, there are 50%*20%*84,000,000=8,400,000 passengers per year which is 1,278 passengers per hour."
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "Airport Taxi As it is known that there is a supply of 2100 taxis expected to be available during this time, we",
      "detail": "Airport Taxi As it is known that there is a supply of 2100 taxis expected to be available during this time, we can see that there is almost a 61% utilization during the daytime (1278/2100) (61% assuming the taxis travel with individual passengers).\nRight. And what is the actual revenue per taxi?\nThe daily revenue of one taxi is (6*$80)+(18*$70)=$1,740. The annual revenue of 500 taxis is (500 * $1,740) * 365 = $317.5 m.\nThis revenue calculation assumes that the taxi utilization is 100%."
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "Seems right. You can dive into the costs now.",
      "detail": "Seems right. You can dive into the costs now.\nRight so breaking this into different buckets, for our client, there are Operating costs, License costs, and Driver Costs. What are the general costs per cab for each of these buckets?\nSo, drivers get 50% of the revenue instead of a salary. The operating costs are $5,000 per cab per year, and the license costs are $250,000 per cab paid in advance as a one-time fee.\nSo the total payroll comes out to 50% * $317.5 m = $158.8 m."
    }
  ],
  "recommendations": [
    "Supply and demand side approach for the revenue",
    "The client should consider the investment",
    "The utilization calculation is an important addition to",
    "The utilization percentage could’ve been included"
  ],
  "metricsAndGuardrails": {
    "northStar": "3-Year NPV / Year-1 SOM Market Share & Payback (BCG)",
    "leading": [
      "Breakeven volume vs pilot traction",
      "Partner/channel onboarding velocity"
    ],
    "guardrails": [
      "Capex overrun / working capital lockup",
      "Core brand cannibalization"
    ]
  },
  "synthesisScript": "For BCG’s Airport Taxi Market Entry case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Supply and demand side approach for the revenue We will validate success via 3-Year NPV / Year-1 SOM Market Share & Payback (BCG) while guarding against Capex overrun / working capital lockup.",
  "interviewerTrap": "Assuming 100% of airport passengers take taxis and ignoring airport concession fees + empty return (deadhead) rides!",
  "variations": [
    {
      "question": "How would your recommendation change if BCG had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Market Entry",
    "correctFramework": "Market Attractiveness (TAM/Growth) → Competition & Barriers → Capabilities & Breakeven → Entry Mode",
    "structureOptions": [
      {
        "label": "Assess Market Attractiveness → Competition & Barriers → Client Capabilities & BEP → Entry Mode (Build/Buy/Partner)",
        "correct": true,
        "feedback": "Complete Market Entry blueprint covering both Should We and How!"
      },
      {
        "label": "Assume 10% market share automatically and stop at TAM",
        "correct": false,
        "feedback": "TAM without competition, unit economics, and entry mode fails consulting cases."
      },
      {
        "label": "Run a 60-second UI wireframe critique",
        "correct": false,
        "feedback": "Wrong framework for strategic Market Entry."
      }
    ],
    "decisionQuiz": {
      "question": "What are the 3 classic Entry Modes to evaluate at the end of a Market Entry case?",
      "options": [
        {
          "label": "Organic Build (Greenfield), Acquire (M&A), or Partner (Joint Venture / Licensing)",
          "correct": true,
          "feedback": "Yes! Match the mode to speed, regulation, and capital constraints."
        },
        {
          "label": "Discount, Refund, or Shutdown",
          "correct": false,
          "feedback": "Those are tactical levers, not market entry vehicles."
        },
        {
          "label": "RICE, MoSCoW, or Kano",
          "correct": false,
          "feedback": "Those are feature prioritization tools."
        }
      ]
    }
  }
},
{
  "id": "ktc-me-airline-route",
  "title": "Airline Route Expansion",
  "company": "Grant Thornton",
  "source": "KTC Casebook 2026",
  "track": "Consulting",
  "category": "Market Entry",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "Grant Thornton",
    "Market Entry",
    "Consulting"
  ],
  "prompt": "Your client is an airline considering launching a new flight route from City A to City B. You are tasked with evaluating the feasibility of this initiative.How would you approach this scenario?",
  "clarifyingQuestions": [
    {
      "q": "What’s the distance between the cities and the typical flight duration? Also, what’s the current demand like?",
      "a": "The cities are about 700 km apart, with a flight time of roughly 1.5 hours. Existing carriers operate at around 80% load factors.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Are there any government incentives or regulatory schemes that would apply to this route?",
      "a": "Yes, the route falls under the UDAN scheme, which offers ATF tax rebates, reduced airport charges, and potential subsidies.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "That’s definitely helpful. Lower costs and regulatory support would reduce early-stage break-even pressure and make the initial operations less risky.Finally, how does this route fit with the airline’s broader network an",
      "a": "City A is already a hub. Adding City B enables connections to six additional cities. Government encourages fuel-efficient aircraft and carbon offset programs.",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "Market Attractiveness (TAM/Growth) → Competition & Barriers → Capabilities & Breakeven → Entry Mode",
  "coreEquation": "Go / No-Go = Attractive SOM × Client Right-to-Win × (Breakeven Volume ≤ Achievable Share)",
  "strategyOverview": "Approach Airline Route Expansion (Grant Thornton) using a Market Entry structure: start by confirming the business objective and scope, decompose the problem cleanly along Market Attractiveness (TAM/Growth) → Competition & Barriers → Capabilities & Breakeven → Entry Mode, and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Airline Route Expansion — Market Entry Tree",
    "valueText": "Should & How?",
    "children": [
      {
        "label": "1. Market Attractiveness (TAM/SAM/Growth/Margins)",
        "valueText": "Size Pool",
        "highlight": true
      },
      {
        "label": "2. Competition & Regulatory Barriers (5 Forces/PESTEL)",
        "valueText": "Right to Win"
      },
      {
        "label": "3. Economics (BEP) & Entry Mode (Build / Buy / Partner)",
        "valueText": "Execution",
        "highlight": true
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Interviewer",
      "prompt": "Your client is an airline considering launching a new flight route from City A to City B. You are tasked with ",
      "detail": "Your client is an airline considering launching a new flight route from City A to City B. You are tasked with evaluating the feasibility of this initiative.How would you approach this scenario?\nThank you. I’d approach this systematically. First, I’d like to clarify some key details about the route, the competitive landscape, airport infrastructure, demand, government incentives, and strategic fit.To start, could you share the airline’s USP and how it compares with competitors on this route?\nYour airline is known for reliability, superior on-time performance, and excellent customer service. The frequent flyer prog"
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "What’s the distance between the cities and the typical flight duration? Also, what’s the current demand like?",
      "detail": "What’s the distance between the cities and the typical flight duration? Also, what’s the current demand like?\nThe cities are about 700 km apart, with a flight time of roughly 1.5 hours. Existing carriers operate at around 80% load factors.\nPassenger mix is about 40% business and 60% leisure.\nThat makes sense. 700 km is ideal long enough that flying saves a lot of time compared to rail, but short enough for narrow-body jets to operate efficiently. And the demand profile seems healthy.How do the airports compare in terms of infrastructure, connectivity, and scalability?"
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "City A’s airport is modern, with multiple terminals and sufficient slots. City B’s airport is smaller but well",
      "detail": "City A’s airport is modern, with multiple terminals and sufficient slots. City B’s airport is smaller but well-connected to the city center.\nPerfect. City A can act as a mini-hub for feeder traffic, while City B’s central location will be convenient for tourists. Good airport infrastructure is crucial for maintaining our USP of reliability, and available slots make scaling easier.\nAre there any government incentives or regulatory schemes that would apply to this route?\nYes, the route falls under the UDAN scheme, which offers ATF tax rebates, reduced airport charges, and potential subsidies."
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "That’s definitely helpful. Lower costs and regulatory support would reduce early-stage break-even pressure and",
      "detail": "That’s definitely helpful. Lower costs and regulatory support would reduce early-stage break-even pressure and make the initial operations less risky.Finally, how does this route fit with the airline’s broader network and sustainability objectives?\nCity A is already a hub. Adding City B enables connections to six additional cities. Government encourages fuel-efficient aircraft and carbon offset programs.\nGot it. Strategically, this isn’t just a point-to-point route—it strengthens the hub-and-spoke network. Deploying fuel-efficient aircraft would help with ESG commitments, and carbon offset initiatives could enhan"
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "Yes, the current load factors and dual passenger mix indicate sufficient demand.",
      "detail": "Yes, the current load factors and dual passenger mix indicate sufficient demand.\nThe 40% business segment ensures weekday stability, while the leisure segment provides weekend and seasonal peaks.It also suggests we could start with a modest frequency and scale up based on observed demand.What about competitor operations and aircraft suitability?\nCompetitors operate frequent low-cost services but with variable punctuality. A320/B737 narrow-body jets are suitable for this route.\nCompetitors’ inconsistent punctuality gives us an opportunity to differentiate on reliability. Using A320/B737 jets ensures fuel efficienc"
    }
  ],
  "recommendations": [
    "Leverage UDAN incentives to reduce costs and improve",
    "Deploy A320 fuel-efficient aircraft to optimize operational",
    "Integrate the route into City A hub to feed six new",
    "Monitor load factors closely; expand capacity only after"
  ],
  "metricsAndGuardrails": {
    "northStar": "3-Year NPV / Year-1 SOM Market Share & Payback (Grant Thornton)",
    "leading": [
      "Breakeven volume vs pilot traction",
      "Partner/channel onboarding velocity"
    ],
    "guardrails": [
      "Capex overrun / working capital lockup",
      "Core brand cannibalization"
    ]
  },
  "synthesisScript": "For Grant Thornton’s Airline Route Expansion case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Leverage UDAN incentives to reduce costs and improve We will validate success via 3-Year NPV / Year-1 SOM Market Share & Payback (Grant Thornton) while guarding against Capex overrun / working capital lockup.",
  "interviewerTrap": "Saying 'YES enter!' purely because TAM is huge—forgetting competition, regulatory hurdles, breakeven math, and Build vs Buy vs Partner!",
  "variations": [
    {
      "question": "How would your recommendation change if Grant Thornton had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Market Entry",
    "correctFramework": "Market Attractiveness (TAM/Growth) → Competition & Barriers → Capabilities & Breakeven → Entry Mode",
    "structureOptions": [
      {
        "label": "Assess Market Attractiveness → Competition & Barriers → Client Capabilities & BEP → Entry Mode (Build/Buy/Partner)",
        "correct": true,
        "feedback": "Complete Market Entry blueprint covering both Should We and How!"
      },
      {
        "label": "Assume 10% market share automatically and stop at TAM",
        "correct": false,
        "feedback": "TAM without competition, unit economics, and entry mode fails consulting cases."
      },
      {
        "label": "Run a 60-second UI wireframe critique",
        "correct": false,
        "feedback": "Wrong framework for strategic Market Entry."
      }
    ],
    "decisionQuiz": {
      "question": "What are the 3 classic Entry Modes to evaluate at the end of a Market Entry case?",
      "options": [
        {
          "label": "Organic Build (Greenfield), Acquire (M&A), or Partner (Joint Venture / Licensing)",
          "correct": true,
          "feedback": "Yes! Match the mode to speed, regulation, and capital constraints."
        },
        {
          "label": "Discount, Refund, or Shutdown",
          "correct": false,
          "feedback": "Those are tactical levers, not market entry vehicles."
        },
        {
          "label": "RICE, MoSCoW, or Kano",
          "correct": false,
          "feedback": "Those are feature prioritization tools."
        }
      ]
    }
  }
},
{
  "id": "ktc-me-steel-3",
  "title": "Steel Manufacturer - 3 (Expansion)",
  "company": "KPMG",
  "source": "KTC Casebook 2026",
  "track": "Consulting",
  "category": "Market Entry",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "KPMG",
    "Market Entry",
    "Consulting"
  ],
  "prompt": "There is a major Steel company that wants to expand to the Middle East part of the globe. You have been approached to suggest a suitable market entry strategy.",
  "clarifyingQuestions": [
    {
      "q": "Okay, to proceed, could you shed light on the specific objectives the company aims to achieve through this expansion?",
      "a": "The company aims to expand into the Middle East with the motive of dominating the other kind of steel i.e. cold rolled steel.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Okay, has the company ever explored cold-rolled steel manufacturing earlier or are you planning to start it from the Middle East only?",
      "a": "No, the company is planning to start it from the Middle East itself.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Any particular reason to do so?",
      "a": "The industry is very underdeveloped in the region and the company wants to leverage this opportunity. Moreover, cheap labour in the region provides an option to export to other countries as well Okay, can you explain a bit about the usage a",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "Market Attractiveness (TAM/Growth) → Competition & Barriers → Capabilities & Breakeven → Entry Mode",
  "coreEquation": "Go / No-Go = Attractive SOM × Client Right-to-Win × (Breakeven Volume ≤ Achievable Share)",
  "strategyOverview": "Approach Steel Manufacturer - 3 (Expansion) (KPMG) using a Market Entry structure: start by confirming the business objective and scope, decompose the problem cleanly along Market Attractiveness (TAM/Growth) → Competition & Barriers → Capabilities & Breakeven → Entry Mode, and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Steel Manufacturer - 3 (Expansion) — Market Entry Tree",
    "valueText": "Should & How?",
    "children": [
      {
        "label": "1. Market Attractiveness (TAM/SAM/Growth/Margins)",
        "valueText": "Size Pool",
        "highlight": true
      },
      {
        "label": "2. Competition & Regulatory Barriers (5 Forces/PESTEL)",
        "valueText": "Right to Win"
      },
      {
        "label": "3. Economics (BEP) & Entry Mode (Build / Buy / Partner)",
        "valueText": "Execution",
        "highlight": true
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Candidate",
      "prompt": "There is a major Steel company that wants to expand to the Middle East part of the globe. You have been approa",
      "detail": "There is a major Steel company that wants to expand to the Middle East part of the globe. You have been approached to suggest a suitable market entry strategy.\nGreat can you give some details about the present market and expertise of the Company The company is a prominent market share holder globally in the production of hot-rolled steel.\nOkay, to proceed, could you shed light on the specific objectives the company aims to achieve through this expansion?"
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "The company aims to expand into the Middle East with the motive of dominating the other kind of steel i.e. col",
      "detail": "The company aims to expand into the Middle East with the motive of dominating the other kind of steel i.e. cold rolled steel.\nOkay, has the company ever explored cold-rolled steel manufacturing earlier or are you planning to start it from the Middle East only?\nNo, the company is planning to start it from the Middle East itself."
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "Any particular reason to do so?",
      "detail": "Any particular reason to do so?\nThe industry is very underdeveloped in the region and the company wants to leverage this opportunity. Moreover, cheap labour in the region provides an option to export to other countries as well Okay, can you explain a bit about the usage and demand of cold roll steel in this market?\nCold rolled steel is used in high-precision applications like the automobile industry, appliances, and certain construction materials. The market is expected to grow at 6.2% CAGR and reach $21B by 2026."
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "Great, considering this opportunity, there are two potential pathways: Brownfield Investment and Greenfield In",
      "detail": "Great, considering this opportunity, there are two potential pathways: Brownfield Investment and Greenfield Investment. Is there a preference for either one?\nI'd like you to explore both options.\nCertainly, first could you explain the differences in the manufacturing processes between hot-rolled steel and cold-rolled steel?"
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "Cold rolled steel is produced by passing previously hot rolled steel through rollers without reheating, unlike",
      "detail": "Cold rolled steel is produced by passing previously hot rolled steel through rollers without reheating, unlike the manufacturing process of hot rolled steel.\nUnderstood. Given this insight, it appears viable to leverage our current manufacturing capabilities while incorporating the necessary technological advancements for cold-rolled steel production. This aligns well with a Greenfield Investment strategy, we could establish new facilities in the Middle East, capable of producing both types of steel. These facilities would cater to local demand while also facilitating exports to broader markets.\nGood enough. Any "
    }
  ],
  "recommendations": [
    "Prioritize the highest-impact P0 bottleneck identified in Steel Manufacturer - 3 (Expansion) before secondary optimizations.",
    "Pilot the top intervention in a controlled cohort/region with clear North Star and guardrail tracking.",
    "Scale rollout only after verifying unit economics and zero adverse second-order effects."
  ],
  "metricsAndGuardrails": {
    "northStar": "3-Year NPV / Year-1 SOM Market Share & Payback (KPMG)",
    "leading": [
      "Breakeven volume vs pilot traction",
      "Partner/channel onboarding velocity"
    ],
    "guardrails": [
      "Capex overrun / working capital lockup",
      "Core brand cannibalization"
    ]
  },
  "synthesisScript": "For KPMG’s Steel Manufacturer - 3 (Expansion) case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Prioritize the highest-impact P0 bottleneck identified in Steel Manufacturer - 3 (Expansion) before secondary optimizations. We will validate success via 3-Year NPV / Year-1 SOM Market Share & Payback (KPMG) while guarding against Capex overrun / working capital lockup.",
  "interviewerTrap": "Saying 'YES enter!' purely because TAM is huge—forgetting competition, regulatory hurdles, breakeven math, and Build vs Buy vs Partner!",
  "variations": [
    {
      "question": "How would your recommendation change if KPMG had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Market Entry",
    "correctFramework": "Market Attractiveness (TAM/Growth) → Competition & Barriers → Capabilities & Breakeven → Entry Mode",
    "structureOptions": [
      {
        "label": "Assess Market Attractiveness → Competition & Barriers → Client Capabilities & BEP → Entry Mode (Build/Buy/Partner)",
        "correct": true,
        "feedback": "Complete Market Entry blueprint covering both Should We and How!"
      },
      {
        "label": "Assume 10% market share automatically and stop at TAM",
        "correct": false,
        "feedback": "TAM without competition, unit economics, and entry mode fails consulting cases."
      },
      {
        "label": "Run a 60-second UI wireframe critique",
        "correct": false,
        "feedback": "Wrong framework for strategic Market Entry."
      }
    ],
    "decisionQuiz": {
      "question": "What are the 3 classic Entry Modes to evaluate at the end of a Market Entry case?",
      "options": [
        {
          "label": "Organic Build (Greenfield), Acquire (M&A), or Partner (Joint Venture / Licensing)",
          "correct": true,
          "feedback": "Yes! Match the mode to speed, regulation, and capital constraints."
        },
        {
          "label": "Discount, Refund, or Shutdown",
          "correct": false,
          "feedback": "Those are tactical levers, not market entry vehicles."
        },
        {
          "label": "RICE, MoSCoW, or Kano",
          "correct": false,
          "feedback": "Those are feature prioritization tools."
        }
      ]
    }
  }
},
{
  "id": "ktc-18-argentinian-toy-manufacturer-entry",
  "title": "Argentinian Toy Manufacturer Entry",
  "company": "PrepLounge",
  "source": "KTC Casebook 2026",
  "track": "Consulting",
  "category": "Market Entry",
  "difficulty": 4,
  "isStarter": false,
  "tags": [
    "PrepLounge",
    "Market Entry",
    "Consulting"
  ],
  "prompt": "Argentinian Toy Manufacturer The Client is an Argentinian toy manufacturer. It has 50% market share in Argentina and is the market leader in South America.",
  "clarifyingQuestions": [
    {
      "q": "Fine, could you kindly furnish me with some data pertaining to the market expansion within the toy industry?",
      "a": "The global toy market is growing at an average of 1% per year.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Alright, I would now like to comprehend the Client’s business with greater clarity. Could you please brief me about the challenges that you are facing?",
      "a": "Sure, our company is a prominent toy manufacturer in Argentina, holding a solid 50% market share in the country. We're proud to be the market leader in South America as well. However, when it comes to international markets, our market share",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Further, can I know a little bit about the competitive environment?",
      "a": "Are the competitors also facing the same issue as us?",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "Market Attractiveness (TAM/Growth) → Competition & Barriers → Capabilities & Breakeven → Entry Mode",
  "coreEquation": "Go / No-Go = Attractive SOM × Client Right-to-Win × (Breakeven Volume ≤ Achievable Share)",
  "strategyOverview": "Approach Argentinian Toy Manufacturer Entry (PrepLounge) using a Market Entry structure: start by confirming the business objective and scope, decompose the problem cleanly along Market Attractiveness (TAM/Growth) → Competition & Barriers → Capabilities & Breakeven → Entry Mode, and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Argentinian Toy Manufacturer Entry — Market Entry Tree",
    "valueText": "Should & How?",
    "children": [
      {
        "label": "1. Market Attractiveness (TAM/SAM/Growth/Margins)",
        "valueText": "Size Pool",
        "highlight": true
      },
      {
        "label": "2. Competition & Regulatory Barriers (5 Forces/PESTEL)",
        "valueText": "Right to Win"
      },
      {
        "label": "3. Economics (BEP) & Entry Mode (Build / Buy / Partner)",
        "valueText": "Execution",
        "highlight": true
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Candidate",
      "prompt": "Argentinian Toy Manufacturer The Client is an Argentinian toy manufacturer. It has 50% market share in Argenti",
      "detail": "Argentinian Toy Manufacturer The Client is an Argentinian toy manufacturer. It has 50% market share in Argentina and is the market leader in South America.\nHowever, its international market share is only 5%. Their CEO wants you to brainstorm and structure potential ideas to increase the company’s profit margins and market share. The CEO also wants you to think about exploiting new revenue sources.\nCommencing on our discussion, I would like to know about the competitors of the company, both local and international.\nThe company segments their customers into local and international markets. Since there are no signif"
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "Fine, could you kindly furnish me with some data pertaining to the market expansion within the toy industry?",
      "detail": "Fine, could you kindly furnish me with some data pertaining to the market expansion within the toy industry?\nThe global toy market is growing at an average of 1% per year.\nFurther every year, India’s market grows 10% and China’s market grows 15%.However, the U.S. and European markets are shrinking at a yearly rate of 5%. The Argentinian toy market is growing at a yearly rate of 10%.\nAlright, I would now like to comprehend the Client’s business with greater clarity. Could you please brief me about the challenges that you are facing?"
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "Sure, our company is a prominent toy manufacturer in Argentina, holding a solid 50% market share in the countr",
      "detail": "Sure, our company is a prominent toy manufacturer in Argentina, holding a solid 50% market share in the country. We're proud to be the market leader in South America as well. However, when it comes to international markets, our market share is just 5%, which is significantly lower. We're facing the challenge of expanding our global presence and increasing our profit margins while maintaining our leadership locally.\nArgentinian Toy Manufacturer Thank you for that overview. Expanding internationally is certainly a big step. To successfully expand your global market, I would like to inquire about the company’s produ"
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "Further, can I know a little bit about the competitive environment?",
      "detail": "Further, can I know a little bit about the competitive environment?\nAre the competitors also facing the same issue as us?\nClothing fashion is a dense industry. There has obviously been healthy competition. But our competitors, in general, have seen significant growth.\nOkay. So let me focus on the cost aspects. I will start by analyzing the value chain. I will start by dividing the value chain into the following major subgroups:"
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "R&D, Raw material extraction, Inventory management, Storage Transportation and Distribution and finally outsou",
      "detail": "R&D, Raw material extraction, Inventory management, Storage Transportation and Distribution and finally outsourcing and marketing.\nThe unit costs of the products are 9.00$, 6.60$ and 5.60$ respectively. However, the international sales are not so promising with only 200000, 100000, and 50000 sales of products 1,2, and 3 respectively. The average selling price of the products at an international level are 17.00$, 14.00$ and 8.00$ respectively.\nThank you for that overview. Expanding internationally is certainly a big step. To successfully expand your global market, I would like to inquire about the company’s produc"
    }
  ],
  "recommendations": [
    "Prioritize the highest-impact P0 bottleneck identified in Argentinian Toy Manufacturer Entry before secondary optimizations.",
    "Pilot the top intervention in a controlled cohort/region with clear North Star and guardrail tracking.",
    "Scale rollout only after verifying unit economics and zero adverse second-order effects."
  ],
  "metricsAndGuardrails": {
    "northStar": "3-Year NPV / Year-1 SOM Market Share & Payback (PrepLounge)",
    "leading": [
      "Breakeven volume vs pilot traction",
      "Partner/channel onboarding velocity"
    ],
    "guardrails": [
      "Capex overrun / working capital lockup",
      "Core brand cannibalization"
    ]
  },
  "synthesisScript": "For PrepLounge’s Argentinian Toy Manufacturer Entry case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Prioritize the highest-impact P0 bottleneck identified in Argentinian Toy Manufacturer Entry before secondary optimizations. We will validate success via 3-Year NPV / Year-1 SOM Market Share & Payback (PrepLounge) while guarding against Capex overrun / working capital lockup.",
  "interviewerTrap": "Saying 'YES enter!' purely because TAM is huge—forgetting competition, regulatory hurdles, breakeven math, and Build vs Buy vs Partner!",
  "variations": [
    {
      "question": "How would your recommendation change if PrepLounge had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Market Entry",
    "correctFramework": "Market Attractiveness (TAM/Growth) → Competition & Barriers → Capabilities & Breakeven → Entry Mode",
    "structureOptions": [
      {
        "label": "Assess Market Attractiveness → Competition & Barriers → Client Capabilities & BEP → Entry Mode (Build/Buy/Partner)",
        "correct": true,
        "feedback": "Complete Market Entry blueprint covering both Should We and How!"
      },
      {
        "label": "Assume 10% market share automatically and stop at TAM",
        "correct": false,
        "feedback": "TAM without competition, unit economics, and entry mode fails consulting cases."
      },
      {
        "label": "Run a 60-second UI wireframe critique",
        "correct": false,
        "feedback": "Wrong framework for strategic Market Entry."
      }
    ],
    "decisionQuiz": {
      "question": "What are the 3 classic Entry Modes to evaluate at the end of a Market Entry case?",
      "options": [
        {
          "label": "Organic Build (Greenfield), Acquire (M&A), or Partner (Joint Venture / Licensing)",
          "correct": true,
          "feedback": "Yes! Match the mode to speed, regulation, and capital constraints."
        },
        {
          "label": "Discount, Refund, or Shutdown",
          "correct": false,
          "feedback": "Those are tactical levers, not market entry vehicles."
        },
        {
          "label": "RICE, MoSCoW, or Kano",
          "correct": false,
          "feedback": "Those are feature prioritization tools."
        }
      ]
    }
  }
},
{
  "id": "ktc-19-perpetual-motion-invention-commercialization",
  "title": "Perpetual Motion Invention Commercialization",
  "company": "American Express",
  "source": "KTC Casebook 2026",
  "track": "Consulting",
  "category": "Market Entry",
  "difficulty": 4,
  "isStarter": false,
  "tags": [
    "American Express",
    "Market Entry",
    "Consulting"
  ],
  "prompt": "Perpetual Motion Invention A scientist wants to sell his perpetual-motion invention in Europe.",
  "clarifyingQuestions": [
    {
      "q": "How do you approach the market and first-year earnings?",
      "a": "I'd address three sequential questions: does it actually generate net usable energy, where would its physical characteristics create customer value if validated, and what first-year revenue and cash profit are realistic given capacity and a",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "What product information do you need?",
      "a": "Claimed continuous electrical output, all measured energy inputs, size, weight, reliability, manufacturing and installation cost, maintenance requirements, regulatory safety, intellectual-property position and production readiness.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "The scientist says it can later double power while reducing weight and volume to one-quarter. Does that change your assessment?",
      "a": "It would improve an otherwise valid product but not remove the need to prove the underlying physics. Under the claim, power would rise from 50W to 100W, weight fall from 30 kg to 7.5 kg, and volume fall from 1 m³ to 0.25 m³. This is a futur",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "Market Attractiveness (TAM/Growth) → Competition & Barriers → Capabilities & Breakeven → Entry Mode",
  "coreEquation": "Go / No-Go = Attractive SOM × Client Right-to-Win × (Breakeven Volume ≤ Achievable Share)",
  "strategyOverview": "Approach Perpetual Motion Invention Commercialization (American Express) using a Market Entry structure: start by confirming the business objective and scope, decompose the problem cleanly along Market Attractiveness (TAM/Growth) → Competition & Barriers → Capabilities & Breakeven → Entry Mode, and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Perpetual Motion Invention Commercialization — Market Entry Tree",
    "valueText": "Should & How?",
    "children": [
      {
        "label": "1. Market Attractiveness (TAM/SAM/Growth/Margins)",
        "valueText": "Size Pool",
        "highlight": true
      },
      {
        "label": "2. Competition & Regulatory Barriers (5 Forces/PESTEL)",
        "valueText": "Right to Win"
      },
      {
        "label": "3. Economics (BEP) & Entry Mode (Build / Buy / Partner)",
        "valueText": "Execution",
        "highlight": true
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Candidate",
      "prompt": "Perpetual Motion Invention A scientist wants to sell his perpetual-motion invention in Europe.",
      "detail": "Perpetual Motion Invention A scientist wants to sell his perpetual-motion invention in Europe.\nHow do you approach the market and first-year earnings?\nI'd address three sequential questions: does it actually generate net usable energy, where would its physical characteristics create customer value if validated, and what first-year revenue and cash profit are realistic given capacity and a business model. Scientific validation is a gating requirement; market sizing is premature without it.\nWhat product information do you need?"
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "Claimed continuous electrical output, all measured energy inputs, size, weight, reliability, manufacturing and",
      "detail": "Claimed continuous electrical output, all measured energy inputs, size, weight, reliability, manufacturing and installation cost, maintenance requirements, regulatory safety, intellectual-property position and production readiness.\nThe PDF gives a manufacturing cost of $1,000, weight 30 kg, volume 1 m³, available materials, and a claim of continuous power.\nLater it specifies 50 watts output.\nThen only conditional on independent verification it's a 50-watt continuous source that is physically large for its output. I'd verify metering, hidden batteries, temperature gradients, external fields, fuel inputs and instru"
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "The scientist says it can later double power while reducing weight and volume to one-quarter. Does that change",
      "detail": "The scientist says it can later double power while reducing weight and volume to one-quarter. Does that change your assessment?\nIt would improve an otherwise valid product but not remove the need to prove the underlying physics. Under the claim, power would rise from 50W to 100W, weight fall from 30 kg to 7.5 kg, and volume fall from 1 m³ to 0.25 m³. This is a future design hypothesis, not a current specification.\nPerpetual Motion Invention Where would you search for customers?\nSegment by problem being solved, not only by total electricity demand: residential backup; ordinary commercial users; industrial/grid use"
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "Could you size the European opportunity by household electricity spending?",
      "detail": "Could you size the European opportunity by household electricity spending?\nThat would give context on electricity expenditure, but not our serviceable product market. The source assumes approximately 700 million people, four people per household and $1,500 annual electricity spend, producing 175 million households × $1,500 = $262.5 billion in theoretical household electricity spending. These are case assumptions, not verified current European data. Applying an arbitrary 2% market share to that spending does not establish first-year revenue from a 50W device.\nWhy is that distinction so important?\nBecause a 50W mac"
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "Perpetual Motion Invention Calculate the theoretical annual output of one 50W machine.",
      "detail": "Perpetual Motion Invention Calculate the theoretical annual output of one 50W machine.\nIf it operates 24 hours every day, 50 W = 0.05 kW; 0.05 × 24 × 365 = 438 kWh/year. At the source's illustrative electricity price of $0.30/kWh, the annual energy value is 438 × $0.30 = $131.40 per device before any maintenance or downtime. The earlier document also mentions $88/year for the same assumptions; that figure is inconsistent. $131.40 is the arithmetic result.\nIs the economics compelling at a $1,000 manufacturing cost?\nIgnoring many real costs, a theoretical simple payback from avoided electricity purchases is $1,000 "
    }
  ],
  "recommendations": [
    "Prioritize the highest-impact P0 bottleneck identified in Perpetual Motion Invention Commercialization before secondary optimizations.",
    "Pilot the top intervention in a controlled cohort/region with clear North Star and guardrail tracking.",
    "Scale rollout only after verifying unit economics and zero adverse second-order effects."
  ],
  "metricsAndGuardrails": {
    "northStar": "3-Year NPV / Year-1 SOM Market Share & Payback (American Express)",
    "leading": [
      "Breakeven volume vs pilot traction",
      "Partner/channel onboarding velocity"
    ],
    "guardrails": [
      "Capex overrun / working capital lockup",
      "Core brand cannibalization"
    ]
  },
  "synthesisScript": "For American Express’s Perpetual Motion Invention Commercialization case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Prioritize the highest-impact P0 bottleneck identified in Perpetual Motion Invention Commercialization before secondary optimizations. We will validate success via 3-Year NPV / Year-1 SOM Market Share & Payback (American Express) while guarding against Capex overrun / working capital lockup.",
  "interviewerTrap": "Saying 'YES enter!' purely because TAM is huge—forgetting competition, regulatory hurdles, breakeven math, and Build vs Buy vs Partner!",
  "variations": [
    {
      "question": "How would your recommendation change if American Express had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Market Entry",
    "correctFramework": "Market Attractiveness (TAM/Growth) → Competition & Barriers → Capabilities & Breakeven → Entry Mode",
    "structureOptions": [
      {
        "label": "Assess Market Attractiveness → Competition & Barriers → Client Capabilities & BEP → Entry Mode (Build/Buy/Partner)",
        "correct": true,
        "feedback": "Complete Market Entry blueprint covering both Should We and How!"
      },
      {
        "label": "Assume 10% market share automatically and stop at TAM",
        "correct": false,
        "feedback": "TAM without competition, unit economics, and entry mode fails consulting cases."
      },
      {
        "label": "Run a 60-second UI wireframe critique",
        "correct": false,
        "feedback": "Wrong framework for strategic Market Entry."
      }
    ],
    "decisionQuiz": {
      "question": "What are the 3 classic Entry Modes to evaluate at the end of a Market Entry case?",
      "options": [
        {
          "label": "Organic Build (Greenfield), Acquire (M&A), or Partner (Joint Venture / Licensing)",
          "correct": true,
          "feedback": "Yes! Match the mode to speed, regulation, and capital constraints."
        },
        {
          "label": "Discount, Refund, or Shutdown",
          "correct": false,
          "feedback": "Those are tactical levers, not market entry vehicles."
        },
        {
          "label": "RICE, MoSCoW, or Kano",
          "correct": false,
          "feedback": "Those are feature prioritization tools."
        }
      ]
    }
  }
},
{
  "id": "ktc-pricing-hair-oil",
  "title": "Hair Oil Pricing Strategy",
  "company": "Deloitte",
  "source": "KTC Casebook 2026",
  "track": "Consulting",
  "category": "Pricing",
  "difficulty": 1,
  "isStarter": true,
  "tags": [
    "Deloitte",
    "Pricing",
    "FMCG",
    "Cost-Plus vs Value"
  ],
  "prompt": "Hair Oil The client is the market leader in hair oil in India. They have one brand and two standard SKUs. They have seen stagnancy in the productivity of their sales team for the last 3 years. You have been hired as a consultant to figure out the reasons May I know the distribution model adopted by the company?",
  "clarifyingQuestions": [
    {
      "q": "They follow a typical retailer distributor model, all sales happen offline Okay. How is productivity defined here?",
      "a": "Productivity = (Total Revenue)/(Total salary of salesforce). Can you look into the possible reasons for stagnancy issue?",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Productivity = (Total Revenue)/(Total salary of salesforce). Can you look into the possible reasons for stagnancy issue?",
      "a": "Sure. The stagnancy in productivity can be due to the following reasons 1. Both Increasing at a steady rate 2. Both decreasing at a steady rate 3. Both are constant at the same level Correct. We are facing the first problem here i.e. both a",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "For Salary = No. of Sales employees * Average salary / employee, which of these factors have fluctuated?",
      "a": "No. of employees has been the same. Can you list down different reasons due to which the second part can increase?",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "3Cs of Pricing (Cost Floor, Competitor Anchor, Brand Value Ceiling) + Pack Architecture",
  "coreEquation": "Recommended Price = Max(COGS + Target Trade Margin, Competitor Price ± Differentiation Premium)",
  "strategyOverview": "Price the new hair oil by checking COGS + distributor/retailer trade margins (~25–30%), benchmarking mainstream vs ayurvedic/premium rivals per 100ml, and using small ₹10/₹20 trial sachets or 100ml/200ml packs to drive trial without eroding brand equity.",
  "tree": {
    "label": "Hair Oil Pricing Strategy — 3Cs Pricing Tree",
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
      "prompt": "Hair Oil The client is the market leader in hair oil in India. They have one brand and two standard SKUs. They",
      "detail": "Hair Oil The client is the market leader in hair oil in India. They have one brand and two standard SKUs. They have seen stagnancy in the productivity of their sales team for the last 3 years. You have been hired as a consultant to figure out the reasons May I know the distribution model adopted by the company?\nThey follow a typical retailer distributor model, all sales happen offline Okay. How is productivity defined here?\nProductivity = (Total Revenue)/(Total salary of salesforce). Can you look into the possible reasons for stagnancy issue?\nSure. The stagnancy in productivity can be due to the following reasons"
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "Okay, I would like to proceed by analyzing the costs first.",
      "detail": "Okay, I would like to proceed by analyzing the costs first.\nSure, go ahead with your analysis.\nFor Salary = No. of Sales employees * Average salary / employee, which of these factors have fluctuated?\nNo. of employees has been the same. Can you list down different reasons due to which the second part can increase?"
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "Sure. Few reasons that I can think of are: Promotion of employees, Inflation, Market Adjustments.",
      "detail": "Sure. Few reasons that I can think of are: Promotion of employees, Inflation, Market Adjustments.\nFair enough. Let's focus on the Revenue side then.\nComing to the Revenue part, let revenue be defined as Price*No.\nof units sold. Is there any data on the increased figures of these?"
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "Hair Oil Price and No. of Units Sold have both increased by 3% each, whereas the industry average is a 5% incr",
      "detail": "Hair Oil Price and No. of Units Sold have both increased by 3% each, whereas the industry average is a 5% increase on both, resulting in a total increase of 10%. Why is this happening?\nFor this, I want to focus on why the average price increase is lower for us. May I know the pricing of the two SKUs and the volume of the SKUs?\nOf the 2 SKUs, one is 250 ml and other 500 ml SKUs. Price of both the SKUs have increased, however, the price of 250 ml SKU is greater than that of 500 ml.\nOkay, then if the average price increase is defined as the weighted average of the price increase across the SKUs based on sales figure"
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "Yeah Perfect, Go Ahead Sure, the 500 ml SKUs are getting sold more. As, Number of Units sold = No. of customer",
      "detail": "Yeah Perfect, Go Ahead Sure, the 500 ml SKUs are getting sold more. As, Number of Units sold = No. of customers * Freq of purchase * Avg Quantity per purchase.\nOut of these three, Freq of purchase will be less as people are buying more 500 ml SKUs without a drastic change in consumption pattern.\nCorrect, now can you think of any other reasons behind the sales getting stagnated?\nRetail channels can be Modern Trade, Small Shops and Malls. As per my understanding hair oils are generally sold through Small shops close to home."
    }
  ],
  "recommendations": [
    "Client is a market leader in Hair Oil in India",
    "Client have one brand and two standard SKUs.",
    "Client has been facing stagnancy in their productivity",
    "Both the factors of productivity are increasing at the"
  ],
  "metricsAndGuardrails": {
    "northStar": "Net Contribution Margin & Paid ARPU Growth (Deloitte)",
    "leading": [
      "Pricing page → checkout conversion %",
      "Tier upgrade / annual plan share"
    ],
    "guardrails": [
      "Churn / price-complaint rate",
      "Competitive win/loss rate"
    ]
  },
  "synthesisScript": "For Deloitte’s Hair Oil Pricing Strategy case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Client is a market leader in Hair Oil in India We will validate success via Net Contribution Margin & Paid ARPU Growth (Deloitte) while guarding against Churn / price-complaint rate.",
  "interviewerTrap": "Forgetting distributor and kirana retailer trade margins when setting consumer MRP!",
  "variations": [
    {
      "question": "How would your recommendation change if Deloitte had half the timeline or budget?",
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
  "id": "ktc-21-jio-pricing-model",
  "title": "Jio Pricing Model",
  "company": "HiLabs",
  "source": "KTC Casebook 2026",
  "track": "Consulting",
  "category": "Pricing",
  "difficulty": 2,
  "isStarter": false,
  "tags": [
    "HiLabs",
    "Pricing",
    "Consulting"
  ],
  "prompt": "Jio wants to launch a pricing model for its existing platforms in India.",
  "clarifyingQuestions": [
    {
      "q": "I would like to ask a few clarifying questions before I begin. Would you like me to consider any particular Jio service?",
      "a": "For now consider Jio Cinema.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Do all these platforms provide absolute free services as of now?",
      "a": "Yes, all these platforms are absolutely free uptill now. And from now we are planning to launch a pricing model.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Is there any particular model you would like me to go ahead with, For ex. Competitor based pricing, Value based pricing, Cost based pricing Which would be the best model according to you for this case?",
      "a": "According to me, a cost based model will not be useful in this case. So I would like to proceed with the remaining two. Firstly, I would like to go with competitor based analysis, if this sounds good.",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "Business Model Check → 3Cs of Pricing (Cost Floor | Competitor Anchor | Value WTP) → Tiering & Test",
  "coreEquation": "Optimal Price ∈ [Unit Cost Floor, Perceived Value WTP Ceiling] Tuned to Elasticity",
  "strategyOverview": "Approach Jio Pricing Model (HiLabs) using a Pricing structure: start by confirming the business objective and scope, decompose the problem cleanly along Business Model Check → 3Cs of Pricing (Cost Floor | Competitor Anchor | Value WTP) → Tiering & Test, and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Jio Pricing Model — 3Cs Pricing Tree",
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
      "speaker": "Candidate",
      "prompt": "Jio wants to launch a pricing model for its existing platforms in India.",
      "detail": "Jio wants to launch a pricing model for its existing platforms in India.\nYou are hired to build its Pricing Model.\nI would like to ask a few clarifying questions before I begin. Would you like me to consider any particular Jio service?\nFor now consider Jio Cinema."
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "Okay, so looks like we are catering to the entertainment platforms of Jio.",
      "detail": "Okay, so looks like we are catering to the entertainment platforms of Jio.\nDo all these platforms provide absolute free services as of now?\nYes, all these platforms are absolutely free uptill now. And from now we are planning to launch a pricing model.\nIs there any particular model you would like me to go ahead with, For ex. Competitor based pricing, Value based pricing, Cost based pricing Which would be the best model according to you for this case?"
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "According to me, a cost based model will not be useful in this case. So I would like to proceed with the remai",
      "detail": "According to me, a cost based model will not be useful in this case. So I would like to proceed with the remaining two. Firstly, I would like to go with competitor based analysis, if this sounds good.\nThat sounds reasonable, you may proceed with the Competitor Based model.\nThe major competitors for Jio Cinema are Netflix, Disney+ Hotstar, and Amazon Prime. Each of these platforms has established pricing that reflects their content offerings and target markets.\nSpecifically, Netflix charges ₹199 per month, Disney+ Hotstar has a plan at ₹99 per month, and Amazon Prime is priced at ₹299 per month."
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "Are the pricings considerable?",
      "detail": "Are the pricings considerable?\nGiven these competitor prices, how would you determine an appropriate base price for Jio Cinema?\nTo set a competitive base price for Jio Cinema, I will consider a few key factors. Firstly, the content library—Jio Cinema has a broad range of content, though it may not match the extensive libraries of Netflix or Amazon Prime.\nHowever, Jio Cinema’s inclusion of regional and potentially exclusive content adds unique value. Next, I will look at the target audience. Jio typically appeals to a price-sensitive segment, which suggests that the price should be lower than that of Netflix and A"
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "Makes sense! Go ahead.",
      "detail": "Makes sense! Go ahead.\nFinally, I will consider market positioning. Jio often adopts aggressive pricing to capture market share, so we want to set a price that’s competitive but still reflects the platform’s value.\nBased on these considerations, what would you suggest as the base price for Jio Cinema?\nBased on the competitive benchmarks, Jio Cinema's price-sensitive target segment, and for acquiring a large user base, I would recommend testing a base subscription price of ₹59 per month. This would create an affordable entry point while leaving room for premium tiers and content-specific add-ons."
    }
  ],
  "recommendations": [
    "Cultural Events Package: For users interested in cultural",
    "Sports Package: Given the massive popularity of IPL, we",
    "Blockbuster Package: This could be priced at ₹99 to ₹119",
    "Cultural Events Package: This might be offered at ₹79 to"
  ],
  "metricsAndGuardrails": {
    "northStar": "Net Contribution Margin & Paid ARPU Growth (HiLabs)",
    "leading": [
      "Pricing page → checkout conversion %",
      "Tier upgrade / annual plan share"
    ],
    "guardrails": [
      "Churn / price-complaint rate",
      "Competitive win/loss rate"
    ]
  },
  "synthesisScript": "For HiLabs’s Jio Pricing Model case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Cultural Events Package: For users interested in cultural We will validate success via Net Contribution Margin & Paid ARPU Growth (HiLabs) while guarding against Churn / price-complaint rate.",
  "interviewerTrap": "Using only Cost-Plus markup and ignoring Value-Based WTP, elasticity, cannibalization, or two-sided marketplace effects!",
  "variations": [
    {
      "question": "How would your recommendation change if HiLabs had half the timeline or budget?",
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
  "id": "ktc-22-bank-envelope-pricing",
  "title": "Bank Envelope Pricing",
  "company": "Bain & Company",
  "source": "KTC Casebook 2026",
  "track": "Consulting",
  "category": "Pricing",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "Bain & Company",
    "Pricing",
    "Consulting"
  ],
  "prompt": "Bank Envelope Your client, CustomLope, is the leader in the US secure envelope manufacturing industry. Banks buy these envelopes for operations such as money deposits and high value transactions. Next year, a new digital technology will reduce the overall number of units sold in the industry by 25%. In short term, our client wants to maintain his current profit level without investing in new technology. How can you h",
  "clarifyingQuestions": [
    {
      "q": "So does that mean the client wants to optimize the costs?",
      "a": "Not necessarily, but you can dive into the cost analysis for now.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "I want to analyze along the value chain. There are going to be R&D costs, Production Costs, Labor Costs, Marketing Cost, and Operational Costs. How are these individual costs for the company?",
      "a": "The respective costs last year came up to $1 m, $18 m, $11 m, $2 m, and $3 m Great. Just to clarify the revenue, how many products and units of each were sold and at what prices?",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "The respective costs last year came up to $1 m, $18 m, $11 m, $2 m, and $3 m Great. Just to clarify the revenue, how many products and units of each were sold and at what prices?",
      "a": "Our client only sells one type of product whose price is $1/unit.",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "Business Model Check → 3Cs of Pricing (Cost Floor | Competitor Anchor | Value WTP) → Tiering & Test",
  "coreEquation": "Optimal Price ∈ [Unit Cost Floor, Perceived Value WTP Ceiling] Tuned to Elasticity",
  "strategyOverview": "Approach Bank Envelope Pricing (Bain & Company) using a Pricing structure: start by confirming the business objective and scope, decompose the problem cleanly along Business Model Check → 3Cs of Pricing (Cost Floor | Competitor Anchor | Value WTP) → Tiering & Test, and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Bank Envelope Pricing — 3Cs Pricing Tree",
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
      "prompt": "Bank Envelope Your client, CustomLope, is the leader in the US secure envelope manufacturing industry. Banks b",
      "detail": "Bank Envelope Your client, CustomLope, is the leader in the US secure envelope manufacturing industry. Banks buy these envelopes for operations such as money deposits and high value transactions. Next year, a new digital technology will reduce the overall number of units sold in the industry by 25%. In short term, our client wants to maintain his current profit level without investing in new technology. How can you help him?\nIf the number of units sold will decrease, revenue to will decrease.\nSo does that mean the client wants to optimize the costs?\nNot necessarily, but you can dive into the cost analysis for now"
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "I want to analyze along the value chain. There are going to be R&D costs, Production Costs, Labor Costs, Marke",
      "detail": "I want to analyze along the value chain. There are going to be R&D costs, Production Costs, Labor Costs, Marketing Cost, and Operational Costs. How are these individual costs for the company?\nThe respective costs last year came up to $1 m, $18 m, $11 m, $2 m, and $3 m Great. Just to clarify the revenue, how many products and units of each were sold and at what prices?\nOur client only sells one type of product whose price is $1/unit.\nLast year, our client sold 50 million units."
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "Alright, so that means the revenue last year was $50 million and costs were 1+18+11+2+3= $35 m which brings ou",
      "detail": "Alright, so that means the revenue last year was $50 million and costs were 1+18+11+2+3= $35 m which brings our client current profit to $15 m. Is that correct?\nYes that is correct.\nSince our client wants to improve the costs, are there economies of scale that haven't been reached or is there a lack of optimization in the operational/labor costs?\nCosts have already been reduced as much as possible."
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "Cool, since the costs have already been perfected, we should take a look at the revenue shortcomings. First ar",
      "detail": "Cool, since the costs have already been perfected, we should take a look at the revenue shortcomings. First are we producing/selling the maximum amount or is there room for improvement?\nBank Envelope CustomLope has excess capacity. It can produce at least double the amount of units per year at similar or lower unit costs Double the amount meaning 100 million units can be produced.\nHowever, since there is a better technology to come, there is no way to convert the entire batch produced.\nThat seems like a valid conclusion. Proceed further So that means increasing the conversion of units sold, means the pricing of t"
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "How are their costs and revenues?",
      "detail": "How are their costs and revenues?\nThere are 5 competitors with each of them having 10% market share, whereas our client holds a 50% market share. Our economies of scale allows us to produce our product at $0.70/unit, whereas, they produce their products at $0.90/unit.\nTheir selling prices are the same as us and they cannot reduce further as it will lead to loss That gives us a strong advantage. If we reduce our price closer to $0.90 per unit, competitors will not be able to match it profitably.\nOver time, customers should switch to us, which would allow us to capture additional market share."
    }
  ],
  "recommendations": [
    "Decreasing costs is not an option because costs are",
    "The only way to maintain current profit levels (without",
    "By taking advantage of its lower costs, CustomLope can",
    "The client should reduce the price of their"
  ],
  "metricsAndGuardrails": {
    "northStar": "Net Contribution Margin & Paid ARPU Growth (Bain & Company)",
    "leading": [
      "Pricing page → checkout conversion %",
      "Tier upgrade / annual plan share"
    ],
    "guardrails": [
      "Churn / price-complaint rate",
      "Competitive win/loss rate"
    ]
  },
  "synthesisScript": "For Bain & Company’s Bank Envelope Pricing case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Decreasing costs is not an option because costs are We will validate success via Net Contribution Margin & Paid ARPU Growth (Bain & Company) while guarding against Churn / price-complaint rate.",
  "interviewerTrap": "Using only Cost-Plus markup and ignoring Value-Based WTP, elasticity, cannibalization, or two-sided marketplace effects!",
  "variations": [
    {
      "question": "How would your recommendation change if Bain & Company had half the timeline or budget?",
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
  "id": "ktc-23-ev-pricing-strategy",
  "title": "EV Pricing Strategy",
  "company": "Mastercard",
  "source": "KTC Casebook 2026",
  "track": "Consulting",
  "category": "Pricing",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "Mastercard",
    "Pricing",
    "Consulting"
  ],
  "prompt": "EV Pricing Your Client is a car manufacturer, and they want to move into the EV segment. For this, they want you to determine the price of the car.",
  "clarifyingQuestions": [
    {
      "q": "I see. Can you provide me with their major competitors and what are the prices of their products?",
      "a": "Sure. Tata, Mahindra, and MG Hector are the main competitors.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "EV Pricing Our car client is entering EVs. What should it charge for the new car?",
      "a": "Before naming a number, I would clarify the car segment and target market, the product's specifications, the launch objective, the company's unit economics and the competitive alternatives.",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "Business Model Check → 3Cs of Pricing (Cost Floor | Competitor Anchor | Value WTP) → Tiering & Test",
  "coreEquation": "Optimal Price ∈ [Unit Cost Floor, Perceived Value WTP Ceiling] Tuned to Elasticity",
  "strategyOverview": "Approach EV Pricing Strategy (Mastercard) using a Pricing structure: start by confirming the business objective and scope, decompose the problem cleanly along Business Model Check → 3Cs of Pricing (Cost Floor | Competitor Anchor | Value WTP) → Tiering & Test, and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "EV Pricing Strategy — 3Cs Pricing Tree",
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
      "speaker": "Candidate",
      "prompt": "EV Pricing Your Client is a car manufacturer, and they want to move into the EV segment. For this, they want y",
      "detail": "EV Pricing Your Client is a car manufacturer, and they want to move into the EV segment. For this, they want you to determine the price of the car.\nBefore moving to the preliminary questions, I want to reconfirm the facts from the problem statement.\nSure go ahead with your facts.\nThank you. So, our client is a car manufacturer, and they want to enter the EV market and wants to price their product."
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "Absolutely correct, go ahead.",
      "detail": "Absolutely correct, go ahead.\nBefore moving to the overall strategy for pricing the product I want to ask some preliminary questions. Can I know more about the client, i.e., their geographical area of operation, when they want to launch their product and is there any specific type of car which they want to launch?\nOur client is an established car manufacturer in India. They produce a wide range of vehicle types.\nFor this venture, they are specifically interested in the EV segment, focusing on SUVs. They plan to launch their EV next year and are targeting a nationwide market."
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "I see. Can you provide me with their major competitors and what are the prices of their products?",
      "detail": "I see. Can you provide me with their major competitors and what are the prices of their products?\nSure. Tata, Mahindra, and MG Hector are the main competitors.\nThe current pricing of competitor SUVs is as follows: Tata Hatchback (Tiago) at ₹8 lakh, Sedans at ₹12-13 lakh, Mahindra SUVs at ₹19-20 lakh, and MG Hector at ₹25 lakh Thank you for the content. Give me a couple of minutes to present an overall strategy to approach this problem.\nSure, take your time."
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "Okay, I would like to propose an overall strategy where I will first analyse the market attractiveness then I ",
      "detail": "Okay, I would like to propose an overall strategy where I will first analyse the market attractiveness then I will look at the operational feasibility and at last the risks and concerns.\nThat seems reasonable. Go ahead.\nEV Pricing Our car client is entering EVs. What should it charge for the new car?\nBefore naming a number, I would clarify the car segment and target market, the product's specifications, the launch objective, the company's unit economics and the competitive alternatives."
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "Otherwise a single price would be arbitrary. Are we discussing a premium SUV, mass-market hatchback or another",
      "detail": "Otherwise a single price would be arbitrary. Are we discussing a premium SUV, mass-market hatchback or another segment, and in which market?\n[Illustrative assumption] A compact city-oriented passenger EV in India, aimed at middle-income commuters.\nWhat are the range, charging speed, warranty and safety positioning? Are they at parity with current alternatives?\n[Illustrative assumption] It has competitive basic features and a reliable warranty, but no extraordinary technological differentiation."
    }
  ],
  "recommendations": [
    "Prioritize the highest-impact P0 bottleneck identified in EV Pricing Strategy before secondary optimizations.",
    "Pilot the top intervention in a controlled cohort/region with clear North Star and guardrail tracking.",
    "Scale rollout only after verifying unit economics and zero adverse second-order effects."
  ],
  "metricsAndGuardrails": {
    "northStar": "Net Contribution Margin & Paid ARPU Growth (Mastercard)",
    "leading": [
      "Pricing page → checkout conversion %",
      "Tier upgrade / annual plan share"
    ],
    "guardrails": [
      "Churn / price-complaint rate",
      "Competitive win/loss rate"
    ]
  },
  "synthesisScript": "For Mastercard’s EV Pricing Strategy case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Prioritize the highest-impact P0 bottleneck identified in EV Pricing Strategy before secondary optimizations. We will validate success via Net Contribution Margin & Paid ARPU Growth (Mastercard) while guarding against Churn / price-complaint rate.",
  "interviewerTrap": "Using only Cost-Plus markup and ignoring Value-Based WTP, elasticity, cannibalization, or two-sided marketplace effects!",
  "variations": [
    {
      "question": "How would your recommendation change if Mastercard had half the timeline or budget?",
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
  "id": "ktc-24-fast-food-qsr-menu-pricing",
  "title": "Fast Food QSR Menu Pricing",
  "company": "Accenture",
  "source": "KTC Casebook 2026",
  "track": "Consulting",
  "category": "Pricing",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "Accenture",
    "Pricing",
    "Consulting"
  ],
  "prompt": "Fast Food Pricing Our client is a global fast-food chain. In the US, guest counts are flat and profitability is declining. They’re known for $1 value products.",
  "clarifyingQuestions": [
    {
      "q": "To begin, I need menu-level detail — prices, costs, and margins across value, core, and premium. Do we have that?",
      "a": "Yes, here’s Exhibit 1.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Thanks. Let me talk through what I notice. First, value items are priced very low — $1 or less — and margins in dollars are tiny. For example, the cheeseburger margin is only a few cents at current price. Is that accurat",
      "a": "Yes Second, core items like combo meals are priced higher but don’t seem to deliver proportionally more margin. The combo pricing doesn’t strongly incentivize a trade-up from value. True?",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Yes Second, core items like combo meals are priced higher but don’t seem to deliver proportionally more margin. The combo pricing doesn’t strongly incentivize a trade-up from value. True?",
      "a": "Fast Food Pricing True.",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "Business Model Check → 3Cs of Pricing (Cost Floor | Competitor Anchor | Value WTP) → Tiering & Test",
  "coreEquation": "Optimal Price ∈ [Unit Cost Floor, Perceived Value WTP Ceiling] Tuned to Elasticity",
  "strategyOverview": "Approach Fast Food QSR Menu Pricing (Accenture) using a Pricing structure: start by confirming the business objective and scope, decompose the problem cleanly along Business Model Check → 3Cs of Pricing (Cost Floor | Competitor Anchor | Value WTP) → Tiering & Test, and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Fast Food QSR Menu Pricing — 3Cs Pricing Tree",
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
      "speaker": "Candidate",
      "prompt": "Fast Food Pricing Our client is a global fast-food chain. In the US, guest counts are flat and profitability i",
      "detail": "Fast Food Pricing Our client is a global fast-food chain. In the US, guest counts are flat and profitability is declining. They’re known for $1 value products.\nPlease help them understand if pricing is the issue Understood. So the core question is: how is pricing impacting profitability, and what changes could improve margins without losing too many guests.\nBefore diving in, let me lay out how I’d like to structure the case. First, I’ll check product-level economics: price, cost, margin. Second, I’ll examine product mix and cannibalization. Third, I’ll test elasticity to see optimal price points. Finally, I’ll sy"
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "To begin, I need menu-level detail — prices, costs, and margins across value, core, and premium. Do we have th",
      "detail": "To begin, I need menu-level detail — prices, costs, and margins across value, core, and premium. Do we have that?\nYes, here’s Exhibit 1.\nTier Product Current Price Cost/Unit Value Cheeseburger $1.00 $0.75 4-piece chicken nuggets $1.00 $0.75 Core Bacon cheeseburger $3.00 $1.00 10-piece chicken nuggets $3.50 $1.25 Premium Double bacon cheeseburger $5.00 $1.50 20-piece chicken nuggets $5.50 $1.50 Other Medium soft drink $1.00 $0.25 Medium fries $1.00 $0.25 Combo meals Core combo meal¹ $5.00 $1.50 ¹ Includes Core entrée, medium soft drink, and medium fries.\nThanks. Let me talk through what I notice. First, value item"
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "Yes Second, core items like combo meals are priced higher but don’t seem to deliver proportionally more margin",
      "detail": "Yes Second, core items like combo meals are priced higher but don’t seem to deliver proportionally more margin. The combo pricing doesn’t strongly incentivize a trade-up from value. True?\nFast Food Pricing True.\nThird, premium sandwiches and specialty items deliver much higher margins, both in % and absolute $. For example, moving from a value sandwich to a premium one adds more than double the contribution. Do I have that right?\nInteresting. One odd thing: nugget pricing. The unit cost actually increases with larger pack sizes. Is that correct or a data issue?"
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "It’s correct — due to packaging and prep inefficiencies.",
      "detail": "It’s correct — due to packaging and prep inefficiencies.\nThat’s counterintuitive. Normally, larger packs should drive economies of scale.\nSo this is a structural problem.\nLet me pause and hypothesize. The pricing architecture encourages customers to stick with value items. The jump from value to core feels too steep, so they don’t trade up. And some menu design flaws, like nuggets, may even erode margins further."
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "I want to confirm the sales mix. Roughly what share of units comes from value vs core vs premium?",
      "detail": "I want to confirm the sales mix. Roughly what share of units comes from value vs core vs premium?\nValue sells about 2–3x more than core; premium is smaller still.\nThat’s important. If most sales are concentrated in low-margin value items, overall profitability suffers even if premium margins are high. So the challenge is shifting the mix without scaring off guests.\nAt this point, I’d like to see demand elasticity data. Specifically, how volume responds to price changes for key SKUs like the cheeseburger and bacon cheeseburger. Can you share that?"
    }
  ],
  "recommendations": [
    "In those pilots, lift the cheeseburger to $1.25 and the bacon",
    "Add a couple of straightforward bundles, update POS, and train crews",
    "Back it with local marketing that highlights “value plus upgrade.”",
    "Watch the numbers — guest count, mix, and margins — and compare"
  ],
  "metricsAndGuardrails": {
    "northStar": "Net Contribution Margin & Paid ARPU Growth (Accenture)",
    "leading": [
      "Pricing page → checkout conversion %",
      "Tier upgrade / annual plan share"
    ],
    "guardrails": [
      "Churn / price-complaint rate",
      "Competitive win/loss rate"
    ]
  },
  "synthesisScript": "For Accenture’s Fast Food QSR Menu Pricing case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: In those pilots, lift the cheeseburger to $1.25 and the bacon We will validate success via Net Contribution Margin & Paid ARPU Growth (Accenture) while guarding against Churn / price-complaint rate.",
  "interviewerTrap": "Using only Cost-Plus markup and ignoring Value-Based WTP, elasticity, cannibalization, or two-sided marketplace effects!",
  "variations": [
    {
      "question": "How would your recommendation change if Accenture had half the timeline or budget?",
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
  "id": "ktc-25-samsung-mobile-pricing-vs-apple",
  "title": "Samsung Mobile Pricing vs Apple",
  "company": "Tata 1mg",
  "source": "KTC Casebook 2026",
  "track": "Consulting",
  "category": "Pricing",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "Tata 1mg",
    "Pricing",
    "Consulting"
  ],
  "prompt": "Samsung Pricing Model Let’s begin with the case. You are a product manager at Samsung, and seeing the dominance of Apple mobile phones in the market, you are tasked with building a pricing model for Samsung mobile phones to reduce Apple's monopoly.",
  "clarifyingQuestions": [
    {
      "q": "What market are we catering to, the Indian or the Global market?",
      "a": "Consider the Indian market.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Any particular mobile phone series that I should consider, or in general?",
      "a": "Go with the S series.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Should we consider new models or the previous ones as well?",
      "a": "All models existing in the market can be considered.",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "Business Model Check → 3Cs of Pricing (Cost Floor | Competitor Anchor | Value WTP) → Tiering & Test",
  "coreEquation": "Optimal Price ∈ [Unit Cost Floor, Perceived Value WTP Ceiling] Tuned to Elasticity",
  "strategyOverview": "Approach Samsung Mobile Pricing vs Apple (Tata 1mg) using a Pricing structure: start by confirming the business objective and scope, decompose the problem cleanly along Business Model Check → 3Cs of Pricing (Cost Floor | Competitor Anchor | Value WTP) → Tiering & Test, and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Samsung Mobile Pricing vs Apple — 3Cs Pricing Tree",
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
      "speaker": "Candidate",
      "prompt": "Samsung Pricing Model Let’s begin with the case. You are a product manager at Samsung, and seeing the dominanc",
      "detail": "Samsung Pricing Model Let’s begin with the case. You are a product manager at Samsung, and seeing the dominance of Apple mobile phones in the market, you are tasked with building a pricing model for Samsung mobile phones to reduce Apple's monopoly.\nOkay, sure. I would like to ask a few clarifying questions before I begin.\nWhat market are we catering to, the Indian or the Global market?\nConsider the Indian market."
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "Any particular mobile phone series that I should consider, or in general?",
      "detail": "Any particular mobile phone series that I should consider, or in general?\nGo with the S series.\nShould we consider new models or the previous ones as well?\nAll models existing in the market can be considered."
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "Referring to the information uptill now, we can consider these three paths for pricing.",
      "detail": "Referring to the information uptill now, we can consider these three paths for pricing.\n● Competitor based pricing ● Value based pricing.\n● Cost based pricing Which path according to you should we go with?\nWe will begin with cost-based pricing. We can set a bottom line for our products, which could be Rs. 24–28K for the S24 FE, Rs."
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "30-35K for the S24, and Rs. 55-60K for the S24 Ultra.",
      "detail": "30-35K for the S24, and Rs. 55-60K for the S24 Ultra.\nAm I correct with these assumptions?\nWhat are the basis of these assumptions?\nConsidering Samsung as an efficient player in the market, I am assuming a gross profit margin of 60-70% per piece on each model."
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "Samsung Pricing Model So, we can come up with the base price for all the models. Now, will consider value-base",
      "detail": "Samsung Pricing Model So, we can come up with the base price for all the models. Now, will consider value-based pricing. Can I proceed?\nConsidering the features provided by Samsung which are its USP’s are ● 100x camera zoom ● battery percentage ● Storage capacity which is also expandable ● ecosystem ● integration with AI leading to real time AI assistants Shall I proceed further?\nConsidering the vast Indian market and the growing content creation on social media platforms like Instagram and YouTube, we can see that demand for good camera features is increasing, and customers are willing to pay more for this parti"
    }
  ],
  "recommendations": [
    "Samsung S24 Ultra: Rs. 1.3 lakh",
    "Our S24 Ultra model competes with the iPhone 15 Pro",
    "Our S24 model competes with the iPhone 15 Plus model.",
    "Our S24 FE model can be compared to the iPhone 15"
  ],
  "metricsAndGuardrails": {
    "northStar": "Net Contribution Margin & Paid ARPU Growth (Tata 1mg)",
    "leading": [
      "Pricing page → checkout conversion %",
      "Tier upgrade / annual plan share"
    ],
    "guardrails": [
      "Churn / price-complaint rate",
      "Competitive win/loss rate"
    ]
  },
  "synthesisScript": "For Tata 1mg’s Samsung Mobile Pricing vs Apple case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Samsung S24 Ultra: Rs. 1.3 lakh We will validate success via Net Contribution Margin & Paid ARPU Growth (Tata 1mg) while guarding against Churn / price-complaint rate.",
  "interviewerTrap": "Using only Cost-Plus markup and ignoring Value-Based WTP, elasticity, cannibalization, or two-sided marketplace effects!",
  "variations": [
    {
      "question": "How would your recommendation change if Tata 1mg had half the timeline or budget?",
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
  "id": "ktc-growth-tea-relaunch",
  "title": "Relaunch of Tea Brand",
  "company": "BCG",
  "source": "KTC Casebook 2026",
  "track": "Consulting",
  "category": "Growth",
  "difficulty": 1,
  "isStarter": true,
  "tags": [
    "BCG",
    "Growth",
    "FMCG",
    "Ansoff Matrix",
    "Relaunch"
  ],
  "prompt": "Your client is a tea manufacturer. Lately it is facing series of unsuccessful outcomes.",
  "clarifyingQuestions": [
    {
      "q": "Just to confirm the client wants strategies to overcome the loss making outcomes. What was the company’s vision and mission when it started?",
      "a": "The company wanted to capture the growing tea market of the country.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "What were the reasons for the decline?",
      "a": "Essentially the company was not able to tap into the market. Nor did it get any positive response from the masses.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Click here to give a mock interview Are there any logistical challenges the company faces in distributing its products to different regions?",
      "a": "No Has the company conducted any recent market research to understand the changing preferences of customers in Northern India?",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "Ansoff Growth Matrix + Consumer Purchase Funnel (Awareness → Trial → Repeat)",
  "coreEquation": "Revenue = Distribution Outlets × Velocity/Outlet × Pack Price × Repeat Rate",
  "strategyOverview": "Diagnose why the legacy tea brand stalled before relaunching, then scale via Ansoff: Penetration (refresh packaging/sampling in core strongholds + quick commerce), Market Dev (new regions/HoReCa), Product Dev (green/masala/iced ready-to-drink variants).",
  "tree": {
    "label": "Relaunch of Tea Brand — Growth Tree",
    "valueText": "Organic + Inorganic",
    "children": [
      {
        "label": "1. Core Penetration (More Share/Frequency/Retention in Existing Mkt)",
        "valueText": "Fastest ROI",
        "highlight": true
      },
      {
        "label": "2. Market & Product Expansion (New Geos / Adjacent SKUs)",
        "valueText": "Medium Horizon"
      },
      {
        "label": "3. Inorganic Partnerships / Acquisitions",
        "valueText": "Step-Change"
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Candidate",
      "prompt": "Your client is a tea manufacturer. Lately it is facing series of unsuccessful outcomes.",
      "detail": "Your client is a tea manufacturer. Lately it is facing series of unsuccessful outcomes.\nJust to confirm the client wants strategies to overcome the loss making outcomes. What was the company’s vision and mission when it started?\nThe company wanted to capture the growing tea market of the country.\nWhat were the reasons for the decline?"
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "Essentially the company was not able to tap into the market. Nor did it get any positive response from the mas",
      "detail": "Essentially the company was not able to tap into the market. Nor did it get any positive response from the masses.\nBefore moving ahead I would like to ask about the particular demographic the company initially tapped into.\nNorthern India was the initially targeted demographic. So how would you approach this problem and provide a substantial solution.\nClick here to give a mock interview Are there any logistical challenges the company faces in distributing its products to different regions?"
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "No Has the company conducted any recent market research to understand the changing preferences of customers in",
      "detail": "No Has the company conducted any recent market research to understand the changing preferences of customers in Northern India?\nNone Firstly the company needs to pull in volunteers for tea trials to get the overview about the general population’s taste. That being said the company can develop a new product line that caters to the targeted audience Ok proceed.\nThe company can improve the quality of tea by sourcing better quality tea leaves. Also, can enhance the packaging and branding of tea products. Most essentially the company can explore the South Indian market.\nCan you elaborate further?"
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "We can tap into the South Indian market and yield the best out of it. Precisely, the company can attend tea fa",
      "detail": "We can tap into the South Indian market and yield the best out of it. Precisely, the company can attend tea fairs and exhibitions in South India to showcase its products and network with potential customers.\nWhat is going to be the company’s ‘USP’ then?\nBuilding a strong brand identity is what going to give the business an image, a voice. More likely the company need to develop a brand identity not just a logo. This is what is going separate the brand from competition Ok sounds good. Then how are you going to design marketing strategies?\nThere are many ways. We can go for various forms of marketing including the "
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "Click here to give a mock interview Can you brief us about the event marketing?",
      "detail": "Click here to give a mock interview Can you brief us about the event marketing?\nThe company can organize events such as tea tastings and workshops to promote the tea brand and as I mentioned earlier this will increase the engagement with the potential customers.\nHow else the client can grow their total customer base?\nThe client can either target new customer segments, more specifically can develop new products and distribution channels."
    }
  ],
  "recommendations": [
    "The problem arises due to improper research and development",
    "Proceed by properly covering the southern part of the country by",
    "A survey could be conducted or food and taste exhibitions could",
    "Product should be launched keeping in mind the differences in"
  ],
  "metricsAndGuardrails": {
    "northStar": "Incremental ARR / Net Revenue Growth (BCG)",
    "leading": [
      "Retention & cross-sell attach rate",
      "New channel / geo revenue share"
    ],
    "guardrails": [
      "CAC Payback & Gross Margin %",
      "Churn in core legacy segments"
    ]
  },
  "synthesisScript": "For BCG’s Relaunch of Tea Brand case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: The problem arises due to improper research and development We will validate success via Incremental ARR / Net Revenue Growth (BCG) while guarding against CAC Payback & Gross Margin %.",
  "interviewerTrap": "Relaunching with massive TV ads before fixing shelf availability (distribution) or why existing buyers stopped repurchasing!",
  "variations": [
    {
      "question": "How would your recommendation change if BCG had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Growth",
    "correctFramework": "Ansoff Growth Matrix (Penetration / Market Dev / Product Dev / Diversification) + Inorganic M&A",
    "structureOptions": [
      {
        "label": "Audit Baseline → Organic Levers (Ansoff: Penetration, Market Dev, Product Dev, Diversification) + Inorganic → Rank ROI",
        "correct": true,
        "feedback": "Exact Growth Strategy framework!"
      },
      {
        "label": "Cut R&D and halt all sales to grow",
        "correct": false,
        "feedback": "Cutting growth engines shrinks top-line revenue."
      },
      {
        "label": "Diagnose a checkout crash bug",
        "correct": false,
        "feedback": "That is RCA, not multi-year Growth Strategy."
      }
    ],
    "decisionQuiz": {
      "question": "In Ansoff’s Matrix, which growth lever usually offers the fastest payback and lowest risk?",
      "options": [
        {
          "label": "Market Penetration (selling more to existing customers / channels)",
          "correct": true,
          "feedback": "Spot on! Existing distribution and brand trust lower CAC dramatically."
        },
        {
          "label": "Unrelated Diversification",
          "correct": false,
          "feedback": "Diversification carries the highest execution and capital risk."
        },
        {
          "label": "Eliminating top products",
          "correct": false,
          "feedback": "Shrinks revenue."
        }
      ]
    }
  }
},
{
  "id": "ktc-growth-social-media",
  "title": "Social Media Company Growth",
  "company": "Accenture",
  "source": "KTC Casebook 2026",
  "track": "Consulting",
  "category": "Growth",
  "difficulty": 2,
  "isStarter": false,
  "tags": [
    "Accenture",
    "Growth",
    "Consulting"
  ],
  "prompt": "Social Media Company Your client is a social media company whose significant chunk of users are Urban/well-to-do people. The client also has a small Tier 2 and 3 Rural user base. But a new competitor is taking away this share of the client's user base. You have to advise them on how to keep the urban user base intact or even increase it, but alongside counter the competitor and expand in Tier 2/3 rural areas.",
  "clarifyingQuestions": [
    {
      "q": "Okay, How does the client operate?",
      "a": "The platform aims to remain classic and sophisticated and does not want to push a lot of user generated content to public feed viewers. We want to keep the vibe in the public feed domain.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "What is different about the competitor ?",
      "a": "The competitor has a lot of user-generated content coming up, which hooked the tier ⅔ users on it, and there seems to be a lack of belongingness to the tier 2 and 3 users in the client's product.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "How do you propose to address these challenges and retain or increase the urban user base while countering the competitor and expanding in Tier 2 and Tier 3 rural areas?",
      "a": "I have a multi-faceted approach to tackle these challenges.",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "Ansoff Growth Matrix (Penetration / Market Dev / Product Dev / Diversification) + Inorganic M&A",
  "coreEquation": "Revenue Growth = (Existing Customers × Frequency × AOV) + New Markets + New Products + Inorganic",
  "strategyOverview": "Approach Social Media Company Growth (Accenture) using a Growth structure: start by confirming the business objective and scope, decompose the problem cleanly along Ansoff Growth Matrix (Penetration / Market Dev / Product Dev / Diversification) + Inorganic M&A, and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Social Media Company Growth — Growth Tree",
    "valueText": "Organic + Inorganic",
    "children": [
      {
        "label": "1. Core Penetration (More Share/Frequency/Retention in Existing Mkt)",
        "valueText": "Fastest ROI",
        "highlight": true
      },
      {
        "label": "2. Market & Product Expansion (New Geos / Adjacent SKUs)",
        "valueText": "Medium Horizon"
      },
      {
        "label": "3. Inorganic Partnerships / Acquisitions",
        "valueText": "Step-Change"
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Candidate",
      "prompt": "Social Media Company Your client is a social media company whose significant chunk of users are Urban/well-to-",
      "detail": "Social Media Company Your client is a social media company whose significant chunk of users are Urban/well-to-do people. The client also has a small Tier 2 and 3 Rural user base. But a new competitor is taking away this share of the client's user base. You have to advise them on how to keep the urban user base intact or even increase it, but alongside counter the competitor and expand in Tier 2/3 rural areas.\nOkay, How does the client operate?\nThe platform aims to remain classic and sophisticated and does not want to push a lot of user generated content to public feed viewers. We want to keep the vibe in the publ"
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "The competitor has a lot of user-generated content coming up, which hooked the tier ⅔ users on it, and there s",
      "detail": "The competitor has a lot of user-generated content coming up, which hooked the tier ⅔ users on it, and there seems to be a lack of belongingness to the tier 2 and 3 users in the client's product.\nClick here to give a mock interview One of the challenges is the absence of user-generated content on the client's platform, which has led to users seeking that engagement elsewhere. Additionally, there is a need to enhance the sense of belongingness for the Tier 2 and Tier 3 users. They currently don't feel connected to the platform in the same way as the urban users.\nHow do you propose to address these challenges and r"
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "Firstly, I suggest introducing user-generated content in a way that aligns with the client's desired classic a",
      "detail": "Firstly, I suggest introducing user-generated content in a way that aligns with the client's desired classic and sophisticated vibe.\nThis could involve creating private spaces where users can share their content, which would be visible to their followers only.\nWhat other strategies do you recommend?\nSocial Media Company The competitor is gaining users in Tier 2/3 markets. What is your approach?"
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "I'd start by separating defense and expansion, because the urban and Tier 2/3 segments may value different thi",
      "detail": "I'd start by separating defense and expansion, because the urban and Tier 2/3 segments may value different things. Is the competitor also taking urban users?\nNot substantially yet. The loss is concentrated in Tier 2/3. Urban usage is broadly stable, although there is a risk if the competitor scales.\nWhat advantages does the rival have—content relevance, app performance, pricing, distribution or community effects?\nIt has a light app for inexpensive phones and weak connectivity, strong regional-language content and popular short vernacular video."
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "So this looks like a product-market-fit and content-supply problem, not merely weak advertising. How are we me",
      "detail": "So this looks like a product-market-fit and content-supply problem, not merely weak advertising. How are we measuring the problem—DAU, MAU, engagement or revenue?\nUse DAU/MAU. Urban users generate most ad revenue; Tier 2/3 is critical for future reach and growth.\nIs the client's current feed locally relevant, and do we have resources to serve both audiences?\nThe feed is mostly English and metro-culture-oriented; regional content is not prioritized well. The budget is moderate, so we cannot invest in every initiative simultaneously."
    }
  ],
  "recommendations": [
    "Prioritize the highest-impact P0 bottleneck identified in Social Media Company Growth before secondary optimizations.",
    "Pilot the top intervention in a controlled cohort/region with clear North Star and guardrail tracking.",
    "Scale rollout only after verifying unit economics and zero adverse second-order effects."
  ],
  "metricsAndGuardrails": {
    "northStar": "Incremental ARR / Net Revenue Growth (Accenture)",
    "leading": [
      "Retention & cross-sell attach rate",
      "New channel / geo revenue share"
    ],
    "guardrails": [
      "CAC Payback & Gross Margin %",
      "Churn in core legacy segments"
    ]
  },
  "synthesisScript": "For Accenture’s Social Media Company Growth case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Prioritize the highest-impact P0 bottleneck identified in Social Media Company Growth before secondary optimizations. We will validate success via Incremental ARR / Net Revenue Growth (Accenture) while guarding against CAC Payback & Gross Margin %.",
  "interviewerTrap": "Jumping straight to risky Diversification (unrelated new products in new markets) before capturing low-hanging Penetration in the core!",
  "variations": [
    {
      "question": "How would your recommendation change if Accenture had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Growth",
    "correctFramework": "Ansoff Growth Matrix (Penetration / Market Dev / Product Dev / Diversification) + Inorganic M&A",
    "structureOptions": [
      {
        "label": "Audit Baseline → Organic Levers (Ansoff: Penetration, Market Dev, Product Dev, Diversification) + Inorganic → Rank ROI",
        "correct": true,
        "feedback": "Exact Growth Strategy framework!"
      },
      {
        "label": "Cut R&D and halt all sales to grow",
        "correct": false,
        "feedback": "Cutting growth engines shrinks top-line revenue."
      },
      {
        "label": "Diagnose a checkout crash bug",
        "correct": false,
        "feedback": "That is RCA, not multi-year Growth Strategy."
      }
    ],
    "decisionQuiz": {
      "question": "In Ansoff’s Matrix, which growth lever usually offers the fastest payback and lowest risk?",
      "options": [
        {
          "label": "Market Penetration (selling more to existing customers / channels)",
          "correct": true,
          "feedback": "Spot on! Existing distribution and brand trust lower CAC dramatically."
        },
        {
          "label": "Unrelated Diversification",
          "correct": false,
          "feedback": "Diversification carries the highest execution and capital risk."
        },
        {
          "label": "Eliminating top products",
          "correct": false,
          "feedback": "Shrinks revenue."
        }
      ]
    }
  }
},
{
  "id": "ktc-28-eyes-inc-growth-strategy",
  "title": "Eyes Inc. Growth Strategy",
  "company": "PrepLounge",
  "source": "KTC Casebook 2026",
  "track": "Consulting",
  "category": "Growth",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "PrepLounge",
    "Growth",
    "Consulting"
  ],
  "prompt": "Your client is Eyes Inc., a contact lens manufacturer in the US.",
  "clarifyingQuestions": [
    {
      "q": "They want to increase their market share over the next two years. How would you approach this problem?",
      "a": "Thanks. I’ll take a clear, layered approach: (1) quickly understand the company and products, (2) identify the most attractive customer segments and regions, (3) analyze channels and competitor dynamics, and (4) recommend a prioritized grow",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Before I dive into solutions, two quick commercial questions: who are their primary customers (new adopters vs repeat users) and how do they typically choose brands?",
      "a": "Click here to give a mock interview There are two customer types: new adopters who are often guided by doctors and retail recommendations and existing users, who are more likely to stick with a brand. Young women are a high-potential demogr",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "That’s reasonable. How would you phase investments between these elements over two years?",
      "a": "● Phase 1 : run pilots in 3–5 southern cities (doctor kits + a few retail partners + trial SKUs).",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "Ansoff Growth Matrix (Penetration / Market Dev / Product Dev / Diversification) + Inorganic M&A",
  "coreEquation": "Revenue Growth = (Existing Customers × Frequency × AOV) + New Markets + New Products + Inorganic",
  "strategyOverview": "Approach Eyes Inc. Growth Strategy (PrepLounge) using a Growth structure: start by confirming the business objective and scope, decompose the problem cleanly along Ansoff Growth Matrix (Penetration / Market Dev / Product Dev / Diversification) + Inorganic M&A, and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Eyes Inc. Growth Strategy — Growth Tree",
    "valueText": "Organic + Inorganic",
    "children": [
      {
        "label": "1. Core Penetration (More Share/Frequency/Retention in Existing Mkt)",
        "valueText": "Fastest ROI",
        "highlight": true
      },
      {
        "label": "2. Market & Product Expansion (New Geos / Adjacent SKUs)",
        "valueText": "Medium Horizon"
      },
      {
        "label": "3. Inorganic Partnerships / Acquisitions",
        "valueText": "Step-Change"
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Candidate",
      "prompt": "Your client is Eyes Inc., a contact lens manufacturer in the US.",
      "detail": "Your client is Eyes Inc., a contact lens manufacturer in the US.\nThey want to increase their market share over the next two years. How would you approach this problem?\nThanks. I’ll take a clear, layered approach: (1) quickly understand the company and products, (2) identify the most attractive customer segments and regions, (3) analyze channels and competitor dynamics, and (4) recommend a prioritized growth plan with a short pilot and KPIs. I’ll start by confirming the company facts can you share the product mix and any regional patterns?\nEyes Inc. sells Regular, Cosmetic, and Traditional lenses."
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "Regular is saturated, Cosmetic is stagnating, and Traditional shows moderate growth. The company’s U.S. sales ",
      "detail": "Regular is saturated, Cosmetic is stagnating, and Traditional shows moderate growth. The company’s U.S. sales are weaker in the South due to low presence. Two big competitors dominate the market.\nUnderstood. Given that, I’d focus on where the client can win quickly: underserved regions and growing product segments.\nBefore I dive into solutions, two quick commercial questions: who are their primary customers (new adopters vs repeat users) and how do they typically choose brands?\nClick here to give a mock interview There are two customer types: new adopters who are often guided by doctors and retail recommendations"
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "Good that clarifies customer behavior. Since doctors strongly influence new adopters and the South is underpen",
      "detail": "Good that clarifies customer behavior. Since doctors strongly influence new adopters and the South is underpenetrated, a strategy centered on doctor and retail partnerships.\nExactly. Women under 30 represent the largest potential. They account for roughly 70% of the growth potential.\nTarget & Positioning: Focus on young female new adopters in suburban/mall retail pockets in the South; position Eyes Inc. as both clinically trusted (doctor-backed) and style-forward.\nProduct: Introduce disposable traditional SKUs and low-friction trial bundles for first-timers."
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "Channels: Prioritize doctor engagement (samples + co-marketing), targeted mall/strip retail partnerships, and ",
      "detail": "Channels: Prioritize doctor engagement (samples + co-marketing), targeted mall/strip retail partnerships, and a complementary digital subscription for refills.\nMarketing: Run localized grassroots campaigns in pilot metros.\nThat’s reasonable. How would you phase investments between these elements over two years?\n● Phase 1 : run pilots in 3–5 southern cities (doctor kits + a few retail partners + trial SKUs)."
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "● Phase 2 : scale what works—expand retail and doctor networks, launch subscriptions.",
      "detail": "● Phase 2 : scale what works—expand retail and doctor networks, launch subscriptions.\n● Phase 3 : optimize nationally and expand selectively if ROI is strong.\nSuppose the competitor responds aggressively in the pilot cities with price promotions. What would you do?\nAvoid a full price war; emphasize doctor endorsements and value-added offers (trial bundles, free fittings, subscription perks). Use pilot data to target price-sensitive segments and only cut price if LTV economics justify it."
    }
  ],
  "recommendations": [
    "Phase 1 : run pilots in 3–5 southern cities (doctor kits + a",
    "Phase 2 : scale what works—expand retail and doctor",
    "Phase 3 : optimize nationally and expand selectively if"
  ],
  "metricsAndGuardrails": {
    "northStar": "Incremental ARR / Net Revenue Growth (PrepLounge)",
    "leading": [
      "Retention & cross-sell attach rate",
      "New channel / geo revenue share"
    ],
    "guardrails": [
      "CAC Payback & Gross Margin %",
      "Churn in core legacy segments"
    ]
  },
  "synthesisScript": "For PrepLounge’s Eyes Inc. Growth Strategy case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Phase 1 : run pilots in 3–5 southern cities (doctor kits + a We will validate success via Incremental ARR / Net Revenue Growth (PrepLounge) while guarding against CAC Payback & Gross Margin %.",
  "interviewerTrap": "Jumping straight to risky Diversification (unrelated new products in new markets) before capturing low-hanging Penetration in the core!",
  "variations": [
    {
      "question": "How would your recommendation change if PrepLounge had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Growth",
    "correctFramework": "Ansoff Growth Matrix (Penetration / Market Dev / Product Dev / Diversification) + Inorganic M&A",
    "structureOptions": [
      {
        "label": "Audit Baseline → Organic Levers (Ansoff: Penetration, Market Dev, Product Dev, Diversification) + Inorganic → Rank ROI",
        "correct": true,
        "feedback": "Exact Growth Strategy framework!"
      },
      {
        "label": "Cut R&D and halt all sales to grow",
        "correct": false,
        "feedback": "Cutting growth engines shrinks top-line revenue."
      },
      {
        "label": "Diagnose a checkout crash bug",
        "correct": false,
        "feedback": "That is RCA, not multi-year Growth Strategy."
      }
    ],
    "decisionQuiz": {
      "question": "In Ansoff’s Matrix, which growth lever usually offers the fastest payback and lowest risk?",
      "options": [
        {
          "label": "Market Penetration (selling more to existing customers / channels)",
          "correct": true,
          "feedback": "Spot on! Existing distribution and brand trust lower CAC dramatically."
        },
        {
          "label": "Unrelated Diversification",
          "correct": false,
          "feedback": "Diversification carries the highest execution and capital risk."
        },
        {
          "label": "Eliminating top products",
          "correct": false,
          "feedback": "Shrinks revenue."
        }
      ]
    }
  }
},
{
  "id": "ktc-29-fire-extinguisher-growth",
  "title": "Fire Extinguisher Growth",
  "company": "Indus Insights",
  "source": "KTC Casebook 2026",
  "track": "Consulting",
  "category": "Growth",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "Indus Insights",
    "Growth",
    "Consulting"
  ],
  "prompt": "Fire Extinguisher Your client is a fire extinguisher company, who wants to triple their revenue in the next two years. Evaluate how this can be done and suggest recommendations When we say fire extinguishers, what range of products are we referring to?",
  "clarifyingQuestions": [
    {
      "q": "Since we are looking to triple the revenue in the next two years, what is the current revenue of the company?",
      "a": "At present the company has a revenue of 100 Crore Rupees.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "In what geographies does the company operate? Do we have any specific geography contributing to maximum sales?",
      "a": "Click here to give a mock interview The company operates pan-India and the revenue is evenly distributed.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Who are our customers and how much do they contribute to the revenue?",
      "a": "The customers are primarily of three types - Commercial Properties (Malls, Hotels, Restaurants) , Residential Complexes, Offices, with the Residential Complexes contributing the maximum - 20% of the total revenue.",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "Ansoff Growth Matrix (Penetration / Market Dev / Product Dev / Diversification) + Inorganic M&A",
  "coreEquation": "Revenue Growth = (Existing Customers × Frequency × AOV) + New Markets + New Products + Inorganic",
  "strategyOverview": "Approach Fire Extinguisher Growth (Indus Insights) using a Growth structure: start by confirming the business objective and scope, decompose the problem cleanly along Ansoff Growth Matrix (Penetration / Market Dev / Product Dev / Diversification) + Inorganic M&A, and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Fire Extinguisher Growth — Growth Tree",
    "valueText": "Organic + Inorganic",
    "children": [
      {
        "label": "1. Core Penetration (More Share/Frequency/Retention in Existing Mkt)",
        "valueText": "Fastest ROI",
        "highlight": true
      },
      {
        "label": "2. Market & Product Expansion (New Geos / Adjacent SKUs)",
        "valueText": "Medium Horizon"
      },
      {
        "label": "3. Inorganic Partnerships / Acquisitions",
        "valueText": "Step-Change"
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Interviewer",
      "prompt": "Fire Extinguisher Your client is a fire extinguisher company, who wants to triple their revenue in the next tw",
      "detail": "Fire Extinguisher Your client is a fire extinguisher company, who wants to triple their revenue in the next two years. Evaluate how this can be done and suggest recommendations When we say fire extinguishers, what range of products are we referring to?\nThe company has a single product line of conventional red can fire extinguishers.\nSince we are looking to triple the revenue in the next two years, what is the current revenue of the company?\nAt present the company has a revenue of 100 Crore Rupees."
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "In what geographies does the company operate? Do we have any specific geography contributing to maximum sales?",
      "detail": "In what geographies does the company operate? Do we have any specific geography contributing to maximum sales?\nClick here to give a mock interview The company operates pan-India and the revenue is evenly distributed.\nWho are our customers and how much do they contribute to the revenue?\nThe customers are primarily of three types - Commercial Properties (Malls, Hotels, Restaurants) , Residential Complexes, Offices, with the Residential Complexes contributing the maximum - 20% of the total revenue."
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "What part of the value chain does our client operate in?",
      "detail": "What part of the value chain does our client operate in?\nThe client has a robust end to end value chain starting from the procurement of materials to the after sales support.\nFire Extinguisher Since we now know the major contributors to the revenue, we can have a look at the market and our competitors. How large is the market for fire extinguishers in India?\nThe market size is about 200 Crore INR and the market shares of our two major competitors are 25% and 20% respectively. The rest of the market is fragmented In that case, I believe that the problem could lie with either the occupation or the residence part. S"
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "Yes that is a good assumption.",
      "detail": "Yes that is a good assumption.\nWhat is our client’s current market share?\nOur client holds 50% of the market currently.\nClick here to give a mock interview Interesting, so we have 50% of the market share and we want our revenue to be 300 Crore rupees in two years, despite the market size being 200 Crore Rupees at the present. At what rate is the market growing?"
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "You can consider the market growth rate as 10%.",
      "detail": "You can consider the market growth rate as 10%.\nThis implies that the market size after two years is 242 Crore Rupees, and we are aiming at a revenue of 300 Crore Rupees.\nThus the target set seems to be something which is unattainable, given the market size and its growth trends.\nThat is a very good observation. Keeping aside the aforementioned target, what do you think could be possibly done to increase revenue?"
    }
  ],
  "recommendations": [
    "Increasing customer need for a public commodity is difficult so",
    "The need can’t be just increased by increased promotions. There",
    "Increasing need actually lies in the enforcement of the",
    "Although clients are not considering a dive into a newer product"
  ],
  "metricsAndGuardrails": {
    "northStar": "Incremental ARR / Net Revenue Growth (Indus Insights)",
    "leading": [
      "Retention & cross-sell attach rate",
      "New channel / geo revenue share"
    ],
    "guardrails": [
      "CAC Payback & Gross Margin %",
      "Churn in core legacy segments"
    ]
  },
  "synthesisScript": "For Indus Insights’s Fire Extinguisher Growth case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Increasing customer need for a public commodity is difficult so We will validate success via Incremental ARR / Net Revenue Growth (Indus Insights) while guarding against CAC Payback & Gross Margin %.",
  "interviewerTrap": "Jumping straight to risky Diversification (unrelated new products in new markets) before capturing low-hanging Penetration in the core!",
  "variations": [
    {
      "question": "How would your recommendation change if Indus Insights had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Growth",
    "correctFramework": "Ansoff Growth Matrix (Penetration / Market Dev / Product Dev / Diversification) + Inorganic M&A",
    "structureOptions": [
      {
        "label": "Audit Baseline → Organic Levers (Ansoff: Penetration, Market Dev, Product Dev, Diversification) + Inorganic → Rank ROI",
        "correct": true,
        "feedback": "Exact Growth Strategy framework!"
      },
      {
        "label": "Cut R&D and halt all sales to grow",
        "correct": false,
        "feedback": "Cutting growth engines shrinks top-line revenue."
      },
      {
        "label": "Diagnose a checkout crash bug",
        "correct": false,
        "feedback": "That is RCA, not multi-year Growth Strategy."
      }
    ],
    "decisionQuiz": {
      "question": "In Ansoff’s Matrix, which growth lever usually offers the fastest payback and lowest risk?",
      "options": [
        {
          "label": "Market Penetration (selling more to existing customers / channels)",
          "correct": true,
          "feedback": "Spot on! Existing distribution and brand trust lower CAC dramatically."
        },
        {
          "label": "Unrelated Diversification",
          "correct": false,
          "feedback": "Diversification carries the highest execution and capital risk."
        },
        {
          "label": "Eliminating top products",
          "correct": false,
          "feedback": "Shrinks revenue."
        }
      ]
    }
  }
},
{
  "id": "ktc-growth-shaving-company",
  "title": "Shaving Company Growth",
  "company": "Bain & Company",
  "source": "KTC Casebook 2026",
  "track": "Consulting",
  "category": "Growth",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "Bain & Company",
    "Growth",
    "Consulting"
  ],
  "prompt": "Shaving Company Our client is an international CPG (consumer packaged goods) firm called Bryan, with multiple business units (toothpaste, batteries, skin & body care, among others). They are the global market leader in every market they play in except for the hair removal market. They came to us asking how they can also become number one in this market. How can you help them out?",
  "clarifyingQuestions": [
    {
      "q": "Before diving into the case, I have a few questions. What type of products do our client offer in hair removal and how many SKU of each do they offer?",
      "a": "Our client provides Wet-Shaving, Dry-Shaving, and Waxing products. They provide 2 wet-shaving for women and 6 for men, 0 dry-shaving for women and 3 for men, and 1 waxing in common.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "How are the volume sold and pricing for these products?",
      "a": "In terms of Market Share, the respective shares for Wet-shaving, Dry-shaving, and waxing are 10%, 0%, and 1% for women and 33%, 20%, and 5% for men.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "How are the market share statistics for competitors in each of these markets and how does our client reign amongst them?",
      "a": "The men’s market has strong players (the 3 biggest players hold 75% of the market), which are not strong in the women’s market.",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "Ansoff Growth Matrix (Penetration / Market Dev / Product Dev / Diversification) + Inorganic M&A",
  "coreEquation": "Revenue Growth = (Existing Customers × Frequency × AOV) + New Markets + New Products + Inorganic",
  "strategyOverview": "Approach Shaving Company Growth (Bain & Company) using a Growth structure: start by confirming the business objective and scope, decompose the problem cleanly along Ansoff Growth Matrix (Penetration / Market Dev / Product Dev / Diversification) + Inorganic M&A, and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Shaving Company Growth — Growth Tree",
    "valueText": "Organic + Inorganic",
    "children": [
      {
        "label": "1. Core Penetration (More Share/Frequency/Retention in Existing Mkt)",
        "valueText": "Fastest ROI",
        "highlight": true
      },
      {
        "label": "2. Market & Product Expansion (New Geos / Adjacent SKUs)",
        "valueText": "Medium Horizon"
      },
      {
        "label": "3. Inorganic Partnerships / Acquisitions",
        "valueText": "Step-Change"
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Interviewer",
      "prompt": "Shaving Company Our client is an international CPG (consumer packaged goods) firm called Bryan, with multiple ",
      "detail": "Shaving Company Our client is an international CPG (consumer packaged goods) firm called Bryan, with multiple business units (toothpaste, batteries, skin & body care, among others). They are the global market leader in every market they play in except for the hair removal market. They came to us asking how they can also become number one in this market. How can you help them out?\nBefore diving into the case, I have a few questions. What type of products do our client offer in hair removal and how many SKU of each do they offer?\nOur client provides Wet-Shaving, Dry-Shaving, and Waxing products. They provide 2 wet-"
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "In terms of Market Share, the respective shares for Wet-shaving, Dry-shaving, and waxing are 10%, 0%, and 1% f",
      "detail": "In terms of Market Share, the respective shares for Wet-shaving, Dry-shaving, and waxing are 10%, 0%, and 1% for women and 33%, 20%, and 5% for men.\nClick here to give a mock interview As for pricing, the respective ranges are medium-low, none, medium for women and high, medium-high, and medium for men.\nHow are the market share statistics for competitors in each of these markets and how does our client reign amongst them?\nThe men’s market has strong players (the 3 biggest players hold 75% of the market), which are not strong in the women’s market."
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "Bryan is the second company in terms of market share for wet and dry shaving. It is however the 8th for waxing",
      "detail": "Bryan is the second company in terms of market share for wet and dry shaving. It is however the 8th for waxing. The women’s market is very fragmented, with 8 companies possessing only 60% of the total market share.\nAs far as I can see the women’s market share is much lower than the men. Is there any reason for that?\nBryan is seen as a cheap brand by its female customers. Men see it as a high-end brand. All products have similar profit margins.\nIs there a specific reason for women seeing Bryan as a “cheap” brand?"
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "Shaving Company We had received a few complaints from customers facing side effects after using our products b",
      "detail": "Shaving Company We had received a few complaints from customers facing side effects after using our products but they are very low in number.\nSo the trend is that women find the brand less appealing and also they are facing some issues with the product, so there should be a brand survey conducted to find out what are their exact perceptions and preferences and focus on R&D of the product to increase product quality. Also, since the data points to pricing as a likely driver, we can increase the pricing of the products in the women segment. Moreover, to increase the brand image, we can use marketing strategies that"
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "Click here to give a mock interview There is a low demand for waxing for men as they generally don’t prefer it",
      "detail": "Click here to give a mock interview There is a low demand for waxing for men as they generally don’t prefer it, whereas there is a very high demand for waxing for women.\nSince, there is a single common product for both men and women, they won’t find it as appealing. Releasing a separate product line for the individual segments would prove more effective and focusing the development on women segment primarily as there is a much higher demand.\nOthers forms of inorganic growth can also be considered like a merger with a top competitor or an acquisition of a smaller, yet niche brand to achieve greater market dominanc"
    }
  ],
  "recommendations": [
    "Consider a merger or acquisition for a greater market dominance.",
    "It’s important to dive into the different segment and understand",
    "Could’ve gone deeper into the segments for a more finished",
    "The case could’ve led to a pricing strategy framework model"
  ],
  "metricsAndGuardrails": {
    "northStar": "Incremental ARR / Net Revenue Growth (Bain & Company)",
    "leading": [
      "Retention & cross-sell attach rate",
      "New channel / geo revenue share"
    ],
    "guardrails": [
      "CAC Payback & Gross Margin %",
      "Churn in core legacy segments"
    ]
  },
  "synthesisScript": "For Bain & Company’s Shaving Company Growth case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Consider a merger or acquisition for a greater market dominance. We will validate success via Incremental ARR / Net Revenue Growth (Bain & Company) while guarding against CAC Payback & Gross Margin %.",
  "interviewerTrap": "Jumping straight to risky Diversification (unrelated new products in new markets) before capturing low-hanging Penetration in the core!",
  "variations": [
    {
      "question": "How would your recommendation change if Bain & Company had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Growth",
    "correctFramework": "Ansoff Growth Matrix (Penetration / Market Dev / Product Dev / Diversification) + Inorganic M&A",
    "structureOptions": [
      {
        "label": "Audit Baseline → Organic Levers (Ansoff: Penetration, Market Dev, Product Dev, Diversification) + Inorganic → Rank ROI",
        "correct": true,
        "feedback": "Exact Growth Strategy framework!"
      },
      {
        "label": "Cut R&D and halt all sales to grow",
        "correct": false,
        "feedback": "Cutting growth engines shrinks top-line revenue."
      },
      {
        "label": "Diagnose a checkout crash bug",
        "correct": false,
        "feedback": "That is RCA, not multi-year Growth Strategy."
      }
    ],
    "decisionQuiz": {
      "question": "In Ansoff’s Matrix, which growth lever usually offers the fastest payback and lowest risk?",
      "options": [
        {
          "label": "Market Penetration (selling more to existing customers / channels)",
          "correct": true,
          "feedback": "Spot on! Existing distribution and brand trust lower CAC dramatically."
        },
        {
          "label": "Unrelated Diversification",
          "correct": false,
          "feedback": "Diversification carries the highest execution and capital risk."
        },
        {
          "label": "Eliminating top products",
          "correct": false,
          "feedback": "Shrinks revenue."
        }
      ]
    }
  }
},
{
  "id": "ktc-31-overseas-market-growth",
  "title": "Overseas Market Growth",
  "company": "PrepLounge",
  "source": "KTC Casebook 2026",
  "track": "Consulting",
  "category": "Growth",
  "difficulty": 4,
  "isStarter": false,
  "tags": [
    "PrepLounge",
    "Growth",
    "Consulting"
  ],
  "prompt": "Our client is an Indonesian paperboard producer. They sell domestically and in the US. Last year revenue was $5B, with 80% from Indonesia and 20% from the US. Growth has been about 3% annually. The client now wants to reach 5% in the next 1–2 years, but due to limited resources, they can only focus on one market. Which one would you recommend, and how should they approach it?",
  "clarifyingQuestions": [
    {
      "q": "Could you share how the client has been growing in each market?",
      "a": "In Indonesia, the client has been growing at 1%, which is also the overall market growth. For the US, I’d like you to calculate it.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Click here to give a mock interview And how are competitors doing in these two markets?",
      "a": "In Indonesia, growth is generally low and the client is already the market leader. In the US, competitors are growing faster, between 15% and 25%. The market is also more fragmented.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Understood. With growth at just 1% and the client already leading, do they have much room left to capture additional share?",
      "a": "Not significantly. The market is fairly consolidated, and given the low overall growth, it would be difficult to expand meaningfully.",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "Ansoff Growth Matrix (Penetration / Market Dev / Product Dev / Diversification) + Inorganic M&A",
  "coreEquation": "Revenue Growth = (Existing Customers × Frequency × AOV) + New Markets + New Products + Inorganic",
  "strategyOverview": "Approach Overseas Market Growth (PrepLounge) using a Growth structure: start by confirming the business objective and scope, decompose the problem cleanly along Ansoff Growth Matrix (Penetration / Market Dev / Product Dev / Diversification) + Inorganic M&A, and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Overseas Market Growth — Growth Tree",
    "valueText": "Organic + Inorganic",
    "children": [
      {
        "label": "1. Core Penetration (More Share/Frequency/Retention in Existing Mkt)",
        "valueText": "Fastest ROI",
        "highlight": true
      },
      {
        "label": "2. Market & Product Expansion (New Geos / Adjacent SKUs)",
        "valueText": "Medium Horizon"
      },
      {
        "label": "3. Inorganic Partnerships / Acquisitions",
        "valueText": "Step-Change"
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Interviewer",
      "prompt": "Our client is an Indonesian paperboard producer. They sell domestically and in the US. Last year revenue was $",
      "detail": "Our client is an Indonesian paperboard producer. They sell domestically and in the US. Last year revenue was $5B, with 80% from Indonesia and 20% from the US. Growth has been about 3% annually. The client now wants to reach 5% in the next 1–2 years, but due to limited resources, they can only focus on one market. Which one would you recommend, and how should they approach it?\nCould you share how the client has been growing in each market?\nIn Indonesia, the client has been growing at 1%, which is also the overall market growth. For the US, I’d like you to calculate it.\nOkay. If the company overall is at 3%, with 8"
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "Click here to give a mock interview And how are competitors doing in these two markets?",
      "detail": "Click here to give a mock interview And how are competitors doing in these two markets?\nIn Indonesia, growth is generally low and the client is already the market leader. In the US, competitors are growing faster, between 15% and 25%. The market is also more fragmented.\nUnderstood. With growth at just 1% and the client already leading, do they have much room left to capture additional share?\nNot significantly. The market is fairly consolidated, and given the low overall growth, it would be difficult to expand meaningfully."
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "What about operations in Indonesia, are there any cost advantages or efficiency levers they could push further",
      "detail": "What about operations in Indonesia, are there any cost advantages or efficiency levers they could push further to gain growth?\nOperations are stable and already optimized. It’s not an operational constraint; it’s the lack of market expansion.\nSo even if we invest more resources there, the market ceiling is low and upside is minimal. That makes it hard for Indonesia to drive overall growth from 3% to 5%.\nThen let me explore the US more carefully. How is the client currently serving this market?"
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "The client manufactures in Indonesia, ships to the US, and stores inventory in US warehouses before supplying ",
      "detail": "The client manufactures in Indonesia, ships to the US, and stores inventory in US warehouses before supplying customers. Lead time is not an issue, since they maintain adequate stock.\nOkay, so logistics is not a barrier. And what about the product and pricing?\nThe product is a commodity. Quality is similar to competitors, and pricing is pegged to a public market index.\nSo no differentiation there either. That points me toward sales and customer management. How does the client sell in the US?"
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "They sell through distributors and some direct sales. But they’ve only managed to secure spot contracts with s",
      "detail": "They sell through distributors and some direct sales. But they’ve only managed to secure spot contracts with smaller customers, typically under 12 months. Competitors, by contrast, have locked in long-term contracts with larger customers.\nClick here to give a mock interview That creates revenue instability. And how are salespeople incentivized?\nThe US sales team is local, but their compensation is mostly fixed salary with a small commission. Competitors’ teams are largely commission-based.\nThat could explain why they aren’t aggressively pursuing larger, long-term deals. And after-sales service — how do we compare"
    }
  ],
  "recommendations": [
    "Indonesia: Saturated, 1% growth, limited upside.",
    "US: Faster growth (11% vs 15–25%), fragmented, share",
    "Constraints: Commercial execution (incentives,",
    "Impact: Fixing execution can lift overall growth"
  ],
  "metricsAndGuardrails": {
    "northStar": "Incremental ARR / Net Revenue Growth (PrepLounge)",
    "leading": [
      "Retention & cross-sell attach rate",
      "New channel / geo revenue share"
    ],
    "guardrails": [
      "CAC Payback & Gross Margin %",
      "Churn in core legacy segments"
    ]
  },
  "synthesisScript": "For PrepLounge’s Overseas Market Growth case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Indonesia: Saturated, 1% growth, limited upside. We will validate success via Incremental ARR / Net Revenue Growth (PrepLounge) while guarding against CAC Payback & Gross Margin %.",
  "interviewerTrap": "Jumping straight to risky Diversification (unrelated new products in new markets) before capturing low-hanging Penetration in the core!",
  "variations": [
    {
      "question": "How would your recommendation change if PrepLounge had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Growth",
    "correctFramework": "Ansoff Growth Matrix (Penetration / Market Dev / Product Dev / Diversification) + Inorganic M&A",
    "structureOptions": [
      {
        "label": "Audit Baseline → Organic Levers (Ansoff: Penetration, Market Dev, Product Dev, Diversification) + Inorganic → Rank ROI",
        "correct": true,
        "feedback": "Exact Growth Strategy framework!"
      },
      {
        "label": "Cut R&D and halt all sales to grow",
        "correct": false,
        "feedback": "Cutting growth engines shrinks top-line revenue."
      },
      {
        "label": "Diagnose a checkout crash bug",
        "correct": false,
        "feedback": "That is RCA, not multi-year Growth Strategy."
      }
    ],
    "decisionQuiz": {
      "question": "In Ansoff’s Matrix, which growth lever usually offers the fastest payback and lowest risk?",
      "options": [
        {
          "label": "Market Penetration (selling more to existing customers / channels)",
          "correct": true,
          "feedback": "Spot on! Existing distribution and brand trust lower CAC dramatically."
        },
        {
          "label": "Unrelated Diversification",
          "correct": false,
          "feedback": "Diversification carries the highest execution and capital risk."
        },
        {
          "label": "Eliminating top products",
          "correct": false,
          "feedback": "Shrinks revenue."
        }
      ]
    }
  }
},
{
  "id": "ktc-growth-psb",
  "title": "Public Sector Bank Growth",
  "company": "BCG",
  "source": "KTC Casebook 2026",
  "track": "Consulting",
  "category": "Growth",
  "difficulty": 4,
  "isStarter": false,
  "tags": [
    "BCG",
    "Growth",
    "Consulting"
  ],
  "prompt": "Public Sector Bank Your client is a public sector bank. From past few years, they are losing a lot of money on payout fees. You are hired to help them figure out the reasons.",
  "clarifyingQuestions": [
    {
      "q": "Can I know about the bank's size and quantum of loss?",
      "a": "The bank is one of the top four with pan-India operations, with losses are in excess of Rs 100 crore.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "What is the market share of our client and whether the other competitors are facing similar issues?",
      "a": "This is an example of a zero-sum game, and the client has 6% market share in retail.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "I see. If I am not wrong then Payout fee = No. of customers * % of customers using another bank's ATM * frequency of transaction * Flat rate of payment. Can I know whether we have been facing issues in any of these?",
      "a": "Click here to give a mock interview Customers are using other banks' ATMs 40% of the time and on average each customer does 4 transactions per month. Why don't you focus on the number of ATMs first?",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "Ansoff Growth Matrix (Penetration / Market Dev / Product Dev / Diversification) + Inorganic M&A",
  "coreEquation": "Revenue Growth = (Existing Customers × Frequency × AOV) + New Markets + New Products + Inorganic",
  "strategyOverview": "Approach Public Sector Bank Growth (BCG) using a Growth structure: start by confirming the business objective and scope, decompose the problem cleanly along Ansoff Growth Matrix (Penetration / Market Dev / Product Dev / Diversification) + Inorganic M&A, and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Public Sector Bank Growth — Growth Tree",
    "valueText": "Organic + Inorganic",
    "children": [
      {
        "label": "1. Core Penetration (More Share/Frequency/Retention in Existing Mkt)",
        "valueText": "Fastest ROI",
        "highlight": true
      },
      {
        "label": "2. Market & Product Expansion (New Geos / Adjacent SKUs)",
        "valueText": "Medium Horizon"
      },
      {
        "label": "3. Inorganic Partnerships / Acquisitions",
        "valueText": "Step-Change"
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Candidate",
      "prompt": "Public Sector Bank Your client is a public sector bank. From past few years, they are losing a lot of money on",
      "detail": "Public Sector Bank Your client is a public sector bank. From past few years, they are losing a lot of money on payout fees. You are hired to help them figure out the reasons.\nCan I know about the bank's size and quantum of loss?\nThe bank is one of the top four with pan-India operations, with losses are in excess of Rs 100 crore.\nWhat is the market share of our client and whether the other competitors are facing similar issues?"
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "This is an example of a zero-sum game, and the client has 6% market share in retail.",
      "detail": "This is an example of a zero-sum game, and the client has 6% market share in retail.\nI see. If I am not wrong then Payout fee = No. of customers * % of customers using another bank's ATM * frequency of transaction * Flat rate of payment. Can I know whether we have been facing issues in any of these?\nClick here to give a mock interview Customers are using other banks' ATMs 40% of the time and on average each customer does 4 transactions per month. Why don't you focus on the number of ATMs first?\nSure. Do we have any data about the number of ATMs that our competitors are having? Especially the market leaders, and w"
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "Currently, India has a total of 3 lakh ATMs. We have 10,000 ATMs. The market leader has 30,000 ATMs, accountin",
      "detail": "Currently, India has a total of 3 lakh ATMs. We have 10,000 ATMs. The market leader has 30,000 ATMs, accounting for 10% of the market, the second player has 22,500 ATMs, accounting for 7.5% of the market, and the third player has 21,000 ATMs, accounting for 7% of the market.\nBased on the data, we can see that all banks are lagging behind in terms of the number of adequate ATMs, but we are lagging far behind them.\nPublic Sector Bank Yes, the number of ATMs has been a problem for our client, but let's say they have strategically placed new ATMs in locations, although there have been a few hiccups which they faced d"
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "Good observation. Let's proceed with the different factors that can create the first problem.",
      "detail": "Good observation. Let's proceed with the different factors that can create the first problem.\nFew factors that I can think of for the first problem is, 1. Electricity issue, 2. Maintenance Issue, 3. Unavailability of guards Sounds reasonable. Can you list the reasons why the ATMs aren't working even after they've been turned on?\nClick here to give a mock interview Sure. The factors can be broken down into the following heads, 1. Software issues 2. Hardware issues 3. Cash Refill/Availability issue 4. Network Issue Do we have any information on out of these four, what has changed over time?\nWe don't have any issues"
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "As per my understanding, ATMs require you to connect to the server to fetch and verify user information and up",
      "detail": "As per my understanding, ATMs require you to connect to the server to fetch and verify user information and update the bank balances in the bank server. So, if there is a network connectivity issue due to location or some other factor, ATMs may not work properly.\nPublic Sector Bank Click here to give a mock interview Yes, you are correct. The client did place a lot of new ATMs in rural areas without even testing the network connectivity, which is why the ATMs were not operational properly. Proceed to the solution So some possible solutions to consider are:\n● Switching to a different network provider whose service"
    }
  ],
  "recommendations": [
    "Client has placed many ATM machines in the rural areas",
    "Switching to a different network provider who’s services are much",
    "Performing Load Balancing operations to enhance the network",
    "Alternative technologies that could reduce the need for ATMs."
  ],
  "metricsAndGuardrails": {
    "northStar": "Incremental ARR / Net Revenue Growth (BCG)",
    "leading": [
      "Retention & cross-sell attach rate",
      "New channel / geo revenue share"
    ],
    "guardrails": [
      "CAC Payback & Gross Margin %",
      "Churn in core legacy segments"
    ]
  },
  "synthesisScript": "For BCG’s Public Sector Bank Growth case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Client has placed many ATM machines in the rural areas We will validate success via Incremental ARR / Net Revenue Growth (BCG) while guarding against CAC Payback & Gross Margin %.",
  "interviewerTrap": "Jumping straight to risky Diversification (unrelated new products in new markets) before capturing low-hanging Penetration in the core!",
  "variations": [
    {
      "question": "How would your recommendation change if BCG had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Growth",
    "correctFramework": "Ansoff Growth Matrix (Penetration / Market Dev / Product Dev / Diversification) + Inorganic M&A",
    "structureOptions": [
      {
        "label": "Audit Baseline → Organic Levers (Ansoff: Penetration, Market Dev, Product Dev, Diversification) + Inorganic → Rank ROI",
        "correct": true,
        "feedback": "Exact Growth Strategy framework!"
      },
      {
        "label": "Cut R&D and halt all sales to grow",
        "correct": false,
        "feedback": "Cutting growth engines shrinks top-line revenue."
      },
      {
        "label": "Diagnose a checkout crash bug",
        "correct": false,
        "feedback": "That is RCA, not multi-year Growth Strategy."
      }
    ],
    "decisionQuiz": {
      "question": "In Ansoff’s Matrix, which growth lever usually offers the fastest payback and lowest risk?",
      "options": [
        {
          "label": "Market Penetration (selling more to existing customers / channels)",
          "correct": true,
          "feedback": "Spot on! Existing distribution and brand trust lower CAC dramatically."
        },
        {
          "label": "Unrelated Diversification",
          "correct": false,
          "feedback": "Diversification carries the highest execution and capital risk."
        },
        {
          "label": "Eliminating top products",
          "correct": false,
          "feedback": "Shrinks revenue."
        }
      ]
    }
  }
},
{
  "id": "ktc-ma-disney-star-wars",
  "title": "Disney Buying Star Wars (Lucasfilm)",
  "company": "BCG",
  "source": "KTC Casebook 2026",
  "track": "Consulting",
  "category": "M&A",
  "difficulty": 2,
  "isStarter": true,
  "tags": [
    "BCG",
    "M&A",
    "Media & IP",
    "Synergies"
  ],
  "prompt": "Disney purchased Star Wars 6 years ago for USD 6 Billion, was it a good decision or a bad decision?",
  "clarifyingQuestions": [
    {
      "q": "Sure, would you like me to focus on revenues from any specific location or shall I consider it globally throughout?",
      "a": "You can restrict yourselves to the Indian region.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Sure, can you tell me how many movies have been released within this time frame?",
      "a": "There were 2 movies released during this time, you need not go into the details of theatres at that point in time, consider the current status of theatres itself.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Yes, this approach looks good. Can you quickly explain how you'd estimate the total number of theatres in India?",
      "a": "To estimate the total number of theatres in India, I'd divide the cities into tiers:",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "M&A Evaluation (Strategic Fit + Standalone Value + Revenue/Cost Synergies − Deal Price & Risks)",
  "coreEquation": "Deal NPV = PV(Lucasfilm Standalone + Parks/Merch/Streaming Synergies) − Acquisition Price − Integration Risk",
  "strategyOverview": "Assess Disney’s acquisition of Lucasfilm across 4 pillars: Strategic Fit (fills 8–16 male/sci-fi gap alongside Pixar & Marvel), Standalone Box Office value, Multi-Engine Synergies (Disney theme park lands, consumer toys/merchandise, Disney+ streaming retention), and Risks (overpayment + fan backlash/franchise fatigue).",
  "tree": {
    "label": "Disney Buying Star Wars (Lucasfilm) — M&A Evaluation",
    "valueText": "Go / No-Go Deal",
    "children": [
      {
        "label": "1. Strategic Fit & Buy-vs-Build Rationale",
        "valueText": "Why Acquire?"
      },
      {
        "label": "2. Standalone Value + Cost & Revenue Synergies",
        "valueText": "Value Creation",
        "highlight": true
      },
      {
        "label": "3. Deal Price, Culture & Regulatory/Integration Risks",
        "valueText": "Downside Check"
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Interviewer",
      "prompt": "Disney purchased Star Wars 6 years ago for USD 6 Billion, was it a good decision or a bad decision?",
      "detail": "Disney purchased Star Wars 6 years ago for USD 6 Billion, was it a good decision or a bad decision?\nAlright, so our aim is to evaluate the decision of Disney buying Star Wars. I would like to approach this question by evaluating the revenues that Disney has generated from Star wars since its acquisition and looking into whether the break-even point has been reached yet. Was there any target we had set back then during the acquisition and what was the specific purpose we were looking to achieve from this acquisition?\nYes, you can assume the target has been achieved and now we want to estimate the revenues that Sta"
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "You can restrict yourselves to the Indian region.",
      "detail": "You can restrict yourselves to the Indian region.\nSure, I would like to consider that the sources of revenues are majorly of 3 types - the revenue generated from movie tickets sales, merchandise of Star Wars, licensing or broadcasting rights of the Click here to give a mock interview movies and Star Wars related events.Do you feel is there any other revenue stream that I’m missing out on?\nYes these seem to be fine, you can focus on the movie ticket sales as of now.\nSure, can you tell me how many movies have been released within this time frame?"
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "There were 2 movies released during this time, you need not go into the details of theatres at that point in t",
      "detail": "There were 2 movies released during this time, you need not go into the details of theatres at that point in time, consider the current status of theatres itself.\nAlright, to estimate the revenue from ticket sales per movie, we would use this formula:(Number of theatres) * (% of theatres showing Star Wars) * (Number of screens) * (Number of shows per screen) * (Total seating capacity) * (% occupancy) * (Ticket price) * (Number of days the movie is screened).Have I missed any factors? And do we have the total number of theatres in the country?\nYes, this approach looks good. Can you quickly explain how you'd estima"
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "● Tier 1 cities with around 50 theatres each ● Tier 2 cities with about 15 theatres each ● Tier 3 cities with ",
      "detail": "● Tier 1 cities with around 50 theatres each ● Tier 2 cities with about 15 theatres each ● Tier 3 cities with around 5 theatres each.Then, I'd look at how many cities fall into each of these categories.\nGreat, for now, you can proceed with this question and assume the number of theatres to be around 1000.\nAlright, let's assume each theatre has an average of 3 screens, and about 40% of the theatres would screen a Star Wars movie. If each screen shows 4 shows a day with 300 seats per screen, and we consider an average occupancy rate of 65% (factoring in weekends and weekdays) at a ticket price of ₹250. Assuming the"
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "Click here to give a mock interview Sure, for estimating merchandising revenue, I’d split the population into ",
      "detail": "Click here to give a mock interview Sure, for estimating merchandising revenue, I’d split the population into 30% urban and 70% rural, but we’ll focus on the urban segment. Then, I’d consider income levels. People below the poverty line and lower middle class likely can't afford merchandise, so we’re left with the wealthy (around 20%) and the upper middle class (about 40%). Next, I’d factor in age, focusing on people between 5-30 years. Finally, I’d calculate the number of people willing to buy merchandise—assuming 60% of people watch Star Wars, and typically 50% of them would be interested in buying merch.\nThat "
    }
  ],
  "recommendations": [
    "Factors considered for merchandise: aﬀordability, interest, and",
    "The calculation method used to estimate movie ticket revenue",
    "For merchandise, the pricing strategy accounts for brand value,",
    "No immediate concerns raised about Disney failing to break"
  ],
  "metricsAndGuardrails": {
    "northStar": "Risk-Adjusted Post-Merger NPV / ROIC (BCG)",
    "leading": [
      "Cost synergy realization (overhead/procurement)",
      "Cross-sell retention at Month 6/12"
    ],
    "guardrails": [
      "Key talent & customer attrition",
      "Debt leverage / integration cost overrun"
    ]
  },
  "synthesisScript": "For BCG’s Disney Buying Star Wars (Lucasfilm) case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Factors considered for merchandise: aﬀordability, interest, and We will validate success via Risk-Adjusted Post-Merger NPV / ROIC (BCG) while guarding against Key talent & customer attrition.",
  "interviewerTrap": "Evaluating the deal ONLY on movie box-office ticket sales—when Disney makes the bulk of its high-margin ROI on theme parks, licensing, and merchandise!",
  "variations": [
    {
      "question": "How would your recommendation change if BCG had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "M&A",
    "correctFramework": "Strategic Fit + Standalone Valuation + Synergies (Revenue & Cost) − Price & Integration Risks",
    "structureOptions": [
      {
        "label": "Check Strategic Rationale → Standalone Value + Cost/Rev Synergies → Deal Price & Integration Risks",
        "correct": true,
        "feedback": "Complete M&A deal evaluation tree!"
      },
      {
        "label": "Buy the target solely because its logo looks modern",
        "correct": false,
        "feedback": "M&A requires rigorous synergy, valuation, and integration analysis."
      },
      {
        "label": "Use a 4Ps ad campaign only",
        "correct": false,
        "feedback": "Marketing 4Ps does not value an M&A transaction."
      }
    ],
    "decisionQuiz": {
      "question": "Which type of M&A synergy is typically faster and more certain to realize?",
      "options": [
        {
          "label": "Cost synergies (eliminating duplicate overhead, shared procurement/ops)",
          "correct": true,
          "feedback": "Yes! Management directly controls cost consolidation, whereas cross-sell depends on customer behavior."
        },
        {
          "label": "Speculative unrelated cross-sell synergies",
          "correct": false,
          "feedback": "Revenue synergies frequently take longer and disappoint."
        },
        {
          "label": "Increasing office snacks",
          "correct": false,
          "feedback": "Immaterial to deal NPV."
        }
      ]
    }
  }
},
{
  "id": "ktc-34-acquisition-of-a-clothing-firm",
  "title": "Acquisition of a Clothing Firm",
  "company": "McKinsey & Company",
  "source": "KTC Casebook 2026",
  "track": "Consulting",
  "category": "M&A",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "McKinsey & Company",
    "M&A",
    "Consulting"
  ],
  "prompt": "Your client is a large multinational clothing brand seeking to increase its market share and achieve economies of scale by acquiring a smaller, locally popular clothing firm. Your task is to identify the key factors that should be considered to ensure a smooth acquisition.",
  "clarifyingQuestions": [
    {
      "q": "To better understand the context, could you please provide more details about the client's current market focus and operational model?",
      "a": "The client is a diversified multinational corporation that caters to various market segments within the clothing industry. They operate both through traditional brick-and-mortar stores (It refers to a traditional company that operates throu",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Okay. What is the primary strategic goal behind this acquisition?",
      "a": "Additionally, what is the expected ROI for this venture?",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Additionally, what is the expected ROI for this venture?",
      "a": "The primary objective is to expand the client's luxury product line by acquiring a well-known brand that resonates with high-end Click here to give a mock interview consumers. The anticipated ROI for this investment is around 15%.",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "Strategic Fit + Standalone Valuation + Synergies (Revenue & Cost) − Price & Integration Risks",
  "coreEquation": "Deal Value = Standalone Value + PV(Cost + Revenue Synergies) − Purchase Price − Integration Risk",
  "strategyOverview": "Approach Acquisition of a Clothing Firm (McKinsey & Company) using a M&A structure: start by confirming the business objective and scope, decompose the problem cleanly along Strategic Fit + Standalone Valuation + Synergies (Revenue & Cost) − Price & Integration Risks, and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Acquisition of a Clothing Firm — M&A Evaluation",
    "valueText": "Go / No-Go Deal",
    "children": [
      {
        "label": "1. Strategic Fit & Buy-vs-Build Rationale",
        "valueText": "Why Acquire?"
      },
      {
        "label": "2. Standalone Value + Cost & Revenue Synergies",
        "valueText": "Value Creation",
        "highlight": true
      },
      {
        "label": "3. Deal Price, Culture & Regulatory/Integration Risks",
        "valueText": "Downside Check"
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Candidate",
      "prompt": "Your client is a large multinational clothing brand seeking to increase its market share and achieve economies",
      "detail": "Your client is a large multinational clothing brand seeking to increase its market share and achieve economies of scale by acquiring a smaller, locally popular clothing firm. Your task is to identify the key factors that should be considered to ensure a smooth acquisition.\nTo better understand the context, could you please provide more details about the client's current market focus and operational model?\nThe client is a diversified multinational corporation that caters to various market segments within the clothing industry. They operate both through traditional brick-and-mortar stores (It refers to a traditiona"
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "Additionally, what is the expected ROI for this venture?",
      "detail": "Additionally, what is the expected ROI for this venture?\nThe primary objective is to expand the client's luxury product line by acquiring a well-known brand that resonates with high-end Click here to give a mock interview consumers. The anticipated ROI for this investment is around 15%.\nUnderstood. Could you provide some insights into the performance of the client’s e-commerce platform? Specifically, what portion of their sales is generated online?\nThe e-commerce platform is a crucial component of the client’s business, contributing 30% of total sales."
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "Thank you. With that in mind, I would like to learn more about the target company. What is its niche within th",
      "detail": "Thank you. With that in mind, I would like to learn more about the target company. What is its niche within the market, and what business model does it follow?\nThe company the client is looking to acquire is a luxury brand with a strong reputation among its customers. However, it has experienced limited growth and remains primarily local due to its traditional brick-and-mortar model, which emphasizes personalized customer service.\nIt seems the client’s strategy is to leverage the smaller firm’s well-established brand name while utilizing economies of scale to boost production.\nIs this the core approach they inten"
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "Yes, the client aims to integrate the smaller firm’s luxury brand into their portfolio while maintaining its r",
      "detail": "Yes, the client aims to integrate the smaller firm’s luxury brand into their portfolio while maintaining its reputation for exceptional personalized service.\nCould you provide details regarding the smaller firm’s scale of operations, particularly the number of stores, its geographical presence, and its current valuation?\nThe smaller firm operates 50 stores, primarily in northern India, and is valued at INR 500 crore.\nBased on our discussion, it sounds like the key factors to consider for this acquisition span across financial, legal, and social dimensions. Financially, the acquisition costs and pricing strategy a"
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "Click here to give a mock interview That makes sense. Could we now discuss the risks associated with this acqu",
      "detail": "Click here to give a mock interview That makes sense. Could we now discuss the risks associated with this acquisition?\nThe risks associated with this acquisition can be grouped into several categories. Pre-acquisition risks include the potential overvaluation of the acquisition target and insufficient legal due diligence. Operational risks involve potential inefficiencies in production processes and the risk of failing to maintain product quality. On the economic side, there could be a misalignment between business models, pricing discrepancies that might impact market positioning, and potential overruns in produ"
    }
  ],
  "recommendations": [
    "Prioritize the highest-impact P0 bottleneck identified in Acquisition of a Clothing Firm before secondary optimizations.",
    "Pilot the top intervention in a controlled cohort/region with clear North Star and guardrail tracking.",
    "Scale rollout only after verifying unit economics and zero adverse second-order effects."
  ],
  "metricsAndGuardrails": {
    "northStar": "Risk-Adjusted Post-Merger NPV / ROIC (McKinsey & Company)",
    "leading": [
      "Cost synergy realization (overhead/procurement)",
      "Cross-sell retention at Month 6/12"
    ],
    "guardrails": [
      "Key talent & customer attrition",
      "Debt leverage / integration cost overrun"
    ]
  },
  "synthesisScript": "For McKinsey & Company’s Acquisition of a Clothing Firm case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Prioritize the highest-impact P0 bottleneck identified in Acquisition of a Clothing Firm before secondary optimizations. We will validate success via Risk-Adjusted Post-Merger NPV / ROIC (McKinsey & Company) while guarding against Key talent & customer attrition.",
  "interviewerTrap": "Assuming optimistic cross-sell Revenue Synergies justify any price while ignoring Integration, Culture, and Overpayment risks!",
  "variations": [
    {
      "question": "How would your recommendation change if McKinsey & Company had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "M&A",
    "correctFramework": "Strategic Fit + Standalone Valuation + Synergies (Revenue & Cost) − Price & Integration Risks",
    "structureOptions": [
      {
        "label": "Check Strategic Rationale → Standalone Value + Cost/Rev Synergies → Deal Price & Integration Risks",
        "correct": true,
        "feedback": "Complete M&A deal evaluation tree!"
      },
      {
        "label": "Buy the target solely because its logo looks modern",
        "correct": false,
        "feedback": "M&A requires rigorous synergy, valuation, and integration analysis."
      },
      {
        "label": "Use a 4Ps ad campaign only",
        "correct": false,
        "feedback": "Marketing 4Ps does not value an M&A transaction."
      }
    ],
    "decisionQuiz": {
      "question": "Which type of M&A synergy is typically faster and more certain to realize?",
      "options": [
        {
          "label": "Cost synergies (eliminating duplicate overhead, shared procurement/ops)",
          "correct": true,
          "feedback": "Yes! Management directly controls cost consolidation, whereas cross-sell depends on customer behavior."
        },
        {
          "label": "Speculative unrelated cross-sell synergies",
          "correct": false,
          "feedback": "Revenue synergies frequently take longer and disappoint."
        },
        {
          "label": "Increasing office snacks",
          "correct": false,
          "feedback": "Immaterial to deal NPV."
        }
      ]
    }
  }
},
{
  "id": "ktc-ma-edtech-merger",
  "title": "Merger of Two Ed-Tech Firms",
  "company": "LEK Consulting",
  "source": "KTC Casebook 2026",
  "track": "Consulting",
  "category": "M&A",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "LEK Consulting",
    "M&A",
    "Consulting"
  ],
  "prompt": "Your client is an online education platform A, and is looking to acquire its competing platform B. How should they proceed?",
  "clarifyingQuestions": [
    {
      "q": "That’s interesting. Before we delve into further details, could you clarify why \"A\" is interested in acquiring \"B\"? Are there specific financial goals or is this more about a strategic expansion?",
      "a": "The primary goal for the client is to boost their revenue through this acquisition. They are also looking to expand their product portfolio through this acquisition.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Great, so we may deal with this by dividing the problem into Financial and Non-Financial aspects. Which should I first look into?",
      "a": "You may start with Non-Financial aspects.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Great. Can you think of any other benefits through this deal?",
      "a": "Merger of Two Ed-tech Firms Click here to give a mock interview Yes, additionally we should consider synergies that can arise from the acquisition. This acquisition could lower overhead costs for “A” and expand its customer base and cross-s",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "Strategic Fit + Standalone Valuation + Synergies (Revenue & Cost) − Price & Integration Risks",
  "coreEquation": "Deal Value = Standalone Value + PV(Cost + Revenue Synergies) − Purchase Price − Integration Risk",
  "strategyOverview": "Approach Merger of Two Ed-Tech Firms (LEK Consulting) using a M&A structure: start by confirming the business objective and scope, decompose the problem cleanly along Strategic Fit + Standalone Valuation + Synergies (Revenue & Cost) − Price & Integration Risks, and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Merger of Two Ed-Tech Firms — M&A Evaluation",
    "valueText": "Go / No-Go Deal",
    "children": [
      {
        "label": "1. Strategic Fit & Buy-vs-Build Rationale",
        "valueText": "Why Acquire?"
      },
      {
        "label": "2. Standalone Value + Cost & Revenue Synergies",
        "valueText": "Value Creation",
        "highlight": true
      },
      {
        "label": "3. Deal Price, Culture & Regulatory/Integration Risks",
        "valueText": "Downside Check"
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Interviewer",
      "prompt": "Your client is an online education platform A, and is looking to acquire its competing platform B. How should ",
      "detail": "Your client is an online education platform A, and is looking to acquire its competing platform B. How should they proceed?\nThat’s interesting. Before we delve into further details, could you clarify why \"A\" is interested in acquiring \"B\"? Are there specific financial goals or is this more about a strategic expansion?\nThe primary goal for the client is to boost their revenue through this acquisition. They are also looking to expand their product portfolio through this acquisition."
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "Great, so we may deal with this by dividing the problem into Financial and Non-Financial aspects. Which should",
      "detail": "Great, so we may deal with this by dividing the problem into Financial and Non-Financial aspects. Which should I first look into?\nYou may start with Non-Financial aspects.\nClick here to give a mock interview Certainly. The fit between the two companies is crucial. \"A\" should assess how well they align culturally, strategically, and organizationally. This involves evaluating the compatibility of employee skill sets, shared long-term goals, and company policies. External factors like a PESTEL analysis are important too."
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "For instance, if there are any regulations against monopolies in the market, the acquisition might face challe",
      "detail": "For instance, if there are any regulations against monopolies in the market, the acquisition might face challenges in regulatory approvals as their combined market share may pose a threat like a monopoly.\nPerfect. Now, let's move on to the financial considerations.\nFinancial feasibility is important. \"A\" needs to factor in the costs of the acquisition itself and the integration process,such as combining technical interfaces. On the revenue side, they should anticipate an increase due to the expanded course portfolio. Can you provide revenue and cost numbers to continue with the calculations?"
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "Certainly, the revenue, fixed costs, variable costs, and overhead costs for both \"A\" and \"B,\" as well as their",
      "detail": "Certainly, the revenue, fixed costs, variable costs, and overhead costs for both \"A\" and \"B,\" as well as their combined entity after the merger are here.\nMetrics (₹ Cr) Firm A Firm B Combined (A+B) Revenue 200 150 350 Fixed Costs 40 35 75 Variable Costs (40%) 80 60 140 Overheads 30 25 55 Total Costs 150 120 270 Profit (EBITDA) 50 30 80 Click here to give a mock interview Metrics (₹ Cr) Post-Merger Revenue 420 Fixed Costs 68 Variable Costs (40%) 168 Overheads 44 Total Costs 280 Profit (EBITDA) 140 Right. So, the calculated profit after the acquisition is 1.75 times the combined profit (75% higher) of individual fi"
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "Merger of Two Ed-tech Firms Click here to give a mock interview Yes, additionally we should consider synergies",
      "detail": "Merger of Two Ed-tech Firms Click here to give a mock interview Yes, additionally we should consider synergies that can arise from the acquisition. This acquisition could lower overhead costs for “A” and expand its customer base and cross-selling opportunities.\nGreat, are there any risks involved with this deal?\nYes, I could see overvaluation and delays in regulatory approvals as major risks. Also, there could be Integration challenges like technological mismatch which could be an issue."
    }
  ],
  "recommendations": [
    "Prioritize the highest-impact P0 bottleneck identified in Merger of Two Ed-Tech Firms before secondary optimizations.",
    "Pilot the top intervention in a controlled cohort/region with clear North Star and guardrail tracking.",
    "Scale rollout only after verifying unit economics and zero adverse second-order effects."
  ],
  "metricsAndGuardrails": {
    "northStar": "Risk-Adjusted Post-Merger NPV / ROIC (LEK Consulting)",
    "leading": [
      "Cost synergy realization (overhead/procurement)",
      "Cross-sell retention at Month 6/12"
    ],
    "guardrails": [
      "Key talent & customer attrition",
      "Debt leverage / integration cost overrun"
    ]
  },
  "synthesisScript": "For LEK Consulting’s Merger of Two Ed-Tech Firms case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Prioritize the highest-impact P0 bottleneck identified in Merger of Two Ed-Tech Firms before secondary optimizations. We will validate success via Risk-Adjusted Post-Merger NPV / ROIC (LEK Consulting) while guarding against Key talent & customer attrition.",
  "interviewerTrap": "Assuming optimistic cross-sell Revenue Synergies justify any price while ignoring Integration, Culture, and Overpayment risks!",
  "variations": [
    {
      "question": "How would your recommendation change if LEK Consulting had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "M&A",
    "correctFramework": "Strategic Fit + Standalone Valuation + Synergies (Revenue & Cost) − Price & Integration Risks",
    "structureOptions": [
      {
        "label": "Check Strategic Rationale → Standalone Value + Cost/Rev Synergies → Deal Price & Integration Risks",
        "correct": true,
        "feedback": "Complete M&A deal evaluation tree!"
      },
      {
        "label": "Buy the target solely because its logo looks modern",
        "correct": false,
        "feedback": "M&A requires rigorous synergy, valuation, and integration analysis."
      },
      {
        "label": "Use a 4Ps ad campaign only",
        "correct": false,
        "feedback": "Marketing 4Ps does not value an M&A transaction."
      }
    ],
    "decisionQuiz": {
      "question": "Which type of M&A synergy is typically faster and more certain to realize?",
      "options": [
        {
          "label": "Cost synergies (eliminating duplicate overhead, shared procurement/ops)",
          "correct": true,
          "feedback": "Yes! Management directly controls cost consolidation, whereas cross-sell depends on customer behavior."
        },
        {
          "label": "Speculative unrelated cross-sell synergies",
          "correct": false,
          "feedback": "Revenue synergies frequently take longer and disappoint."
        },
        {
          "label": "Increasing office snacks",
          "correct": false,
          "feedback": "Immaterial to deal NPV."
        }
      ]
    }
  }
},
{
  "id": "ktc-36-demerger-of-two-business-units",
  "title": "Demerger of Two Business Units",
  "company": "McKinsey & Company",
  "source": "KTC Casebook 2026",
  "track": "Consulting",
  "category": "M&A",
  "difficulty": 4,
  "isStarter": false,
  "tags": [
    "McKinsey & Company",
    "M&A",
    "Consulting"
  ],
  "prompt": "Demerger of Units We’re debating whether separating our traditional services unit from our digital division is the right move for future growth. How would you approach this?",
  "clarifyingQuestions": [
    {
      "q": "Thank you. Before suggesting a direction, I’d like to understand a bit more. Could you describe the two businesses in terms of their role in the company?",
      "a": "Our services unit is the backbone of the company, it’s profitable, stable, and provides consistent cash flow. But growth is limited; the market is mature. The digital division, on the other hand, is new and fast-growing, but it’s investment",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Understood. And how are these two units linked? Do they share customers, resources, or strategy?",
      "a": "There are overlaps in customers and the company brand, but the operating models are quite different. The services unit works on efficiency and reliability, while the digital unit thrives on agility and innovation.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "What kind of tension?",
      "a": "I see three main issues:",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "Strategic Fit + Standalone Valuation + Synergies (Revenue & Cost) − Price & Integration Risks",
  "coreEquation": "Deal Value = Standalone Value + PV(Cost + Revenue Synergies) − Purchase Price − Integration Risk",
  "strategyOverview": "Approach Demerger of Two Business Units (McKinsey & Company) using a M&A structure: start by confirming the business objective and scope, decompose the problem cleanly along Strategic Fit + Standalone Valuation + Synergies (Revenue & Cost) − Price & Integration Risks, and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Demerger of Two Business Units — M&A Evaluation",
    "valueText": "Go / No-Go Deal",
    "children": [
      {
        "label": "1. Strategic Fit & Buy-vs-Build Rationale",
        "valueText": "Why Acquire?"
      },
      {
        "label": "2. Standalone Value + Cost & Revenue Synergies",
        "valueText": "Value Creation",
        "highlight": true
      },
      {
        "label": "3. Deal Price, Culture & Regulatory/Integration Risks",
        "valueText": "Downside Check"
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Interviewer",
      "prompt": "Demerger of Units We’re debating whether separating our traditional services unit from our digital division is",
      "detail": "Demerger of Units We’re debating whether separating our traditional services unit from our digital division is the right move for future growth. How would you approach this?\nThank you. Before suggesting a direction, I’d like to understand a bit more. Could you describe the two businesses in terms of their role in the company?\nOur services unit is the backbone of the company, it’s profitable, stable, and provides consistent cash flow. But growth is limited; the market is mature. The digital division, on the other hand, is new and fast-growing, but it’s investment-heavy and margins are thin.\nUnderstood. And how are"
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "There are overlaps in customers and the company brand, but the operating models are quite different. The servi",
      "detail": "There are overlaps in customers and the company brand, but the operating models are quite different. The services unit works on efficiency and reliability, while the digital unit thrives on agility and innovation.\nClick here to give a mock interview Got it. So, effectively, we’re looking at two businesses with very different profiles:\n● Traditional services : Stable, Dependable, Low growth.\n● Digital division : High potential, Dynamic, But riskier."
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "That creates some tension when managed together.",
      "detail": "That creates some tension when managed together.\nWhat kind of tension?\nI see three main issues:\n1. Strategic conflict: One unit prioritizes efficiency and steady margins; the other needs experimentation and bold investments."
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "2. Investor perception: The fast-growing digital story may be overshadowed by the slower services unit, leadin",
      "detail": "2. Investor perception: The fast-growing digital story may be overshadowed by the slower services unit, leading to undervaluation.\n3. Leadership bandwidth: Management has to juggle two very different priorities, which can dilute focus.\nThat’s fair. So what could be the upside of separating them?\nDemerger of Units Separation would give each unit its own identity. The digital division could stand out as a growth story attracting investors and talent drawn to innovation, while the services unit would appeal to those seeking stability and steady returns. This allows both to pursue strategies aligned with their agile "
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "And what about the risks?",
      "detail": "And what about the risks?\nThere are important risks:\n1. Loss of synergies : Both businesses currently benefit from shared brand strength and some customer overlaps.\n2. Funding pressure : Today, the services unit helps fund the digital division; post-separation, digital may have to rely solely on external capital."
    }
  ],
  "recommendations": [
    "I’d suggest a phased separation strategy rather than an",
    "Phase 1: List a minority stake of the digital division or",
    "Start with a carve-out to give the digital unit visibility and",
    "Move to a spin-off once it is mature and stable."
  ],
  "metricsAndGuardrails": {
    "northStar": "Risk-Adjusted Post-Merger NPV / ROIC (McKinsey & Company)",
    "leading": [
      "Cost synergy realization (overhead/procurement)",
      "Cross-sell retention at Month 6/12"
    ],
    "guardrails": [
      "Key talent & customer attrition",
      "Debt leverage / integration cost overrun"
    ]
  },
  "synthesisScript": "For McKinsey & Company’s Demerger of Two Business Units case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: I’d suggest a phased separation strategy rather than an We will validate success via Risk-Adjusted Post-Merger NPV / ROIC (McKinsey & Company) while guarding against Key talent & customer attrition.",
  "interviewerTrap": "Assuming optimistic cross-sell Revenue Synergies justify any price while ignoring Integration, Culture, and Overpayment risks!",
  "variations": [
    {
      "question": "How would your recommendation change if McKinsey & Company had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "M&A",
    "correctFramework": "Strategic Fit + Standalone Valuation + Synergies (Revenue & Cost) − Price & Integration Risks",
    "structureOptions": [
      {
        "label": "Check Strategic Rationale → Standalone Value + Cost/Rev Synergies → Deal Price & Integration Risks",
        "correct": true,
        "feedback": "Complete M&A deal evaluation tree!"
      },
      {
        "label": "Buy the target solely because its logo looks modern",
        "correct": false,
        "feedback": "M&A requires rigorous synergy, valuation, and integration analysis."
      },
      {
        "label": "Use a 4Ps ad campaign only",
        "correct": false,
        "feedback": "Marketing 4Ps does not value an M&A transaction."
      }
    ],
    "decisionQuiz": {
      "question": "Which type of M&A synergy is typically faster and more certain to realize?",
      "options": [
        {
          "label": "Cost synergies (eliminating duplicate overhead, shared procurement/ops)",
          "correct": true,
          "feedback": "Yes! Management directly controls cost consolidation, whereas cross-sell depends on customer behavior."
        },
        {
          "label": "Speculative unrelated cross-sell synergies",
          "correct": false,
          "feedback": "Revenue synergies frequently take longer and disappoint."
        },
        {
          "label": "Increasing office snacks",
          "correct": false,
          "feedback": "Immaterial to deal NPV."
        }
      ]
    }
  }
},
{
  "id": "ktc-37-superburger-m-a-evaluation",
  "title": "SuperBurger M&A Evaluation",
  "company": "PrepLounge",
  "source": "KTC Casebook 2026",
  "track": "Consulting",
  "category": "M&A",
  "difficulty": 4,
  "isStarter": false,
  "tags": [
    "PrepLounge",
    "M&A",
    "Consulting"
  ],
  "prompt": "SuperBurger SuperBurger is the world’s fourth-largest fast-food chain (85% franchised stores) and it is considering acquiring Tasty Donuts, a growing U.S. and international doughnut producer, and seeks your recommendation.",
  "clarifyingQuestions": [
    {
      "q": "To begin, I'd like to understand the market context. Could you tell about the growth potential in the market for doughnuts? For instance, how large is market, and what is projected growth rate?",
      "a": "The current doughnut consumption is $10 per person annually for US population of 300 million. The market is projected to experience significant growth, doubling in size within the next 5 years, with per-person consumption also expected to r",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Understood. My next question would be about the specific performance of the two companies. What can you tell me about the historic and projected sales growth for both SuperBurger and Tasty Donuts?",
      "a": "SuperBurger has grown at 10% annually, while Tasty Donuts has expanded at 15%.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Now, digging deeper into the first two buckets regarding value and strategic fit, what is the competitive landscape like? Are SuperBurger's major competitors also diversifying?",
      "a": "The client has only handled small acquisitions, while competitors have expanded into coffee, bakery, breakfast, and snacks through partnerships.",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "Strategic Fit + Standalone Valuation + Synergies (Revenue & Cost) − Price & Integration Risks",
  "coreEquation": "Deal Value = Standalone Value + PV(Cost + Revenue Synergies) − Purchase Price − Integration Risk",
  "strategyOverview": "Approach SuperBurger M&A Evaluation (PrepLounge) using a M&A structure: start by confirming the business objective and scope, decompose the problem cleanly along Strategic Fit + Standalone Valuation + Synergies (Revenue & Cost) − Price & Integration Risks, and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "SuperBurger M&A Evaluation — M&A Evaluation",
    "valueText": "Go / No-Go Deal",
    "children": [
      {
        "label": "1. Strategic Fit & Buy-vs-Build Rationale",
        "valueText": "Why Acquire?"
      },
      {
        "label": "2. Standalone Value + Cost & Revenue Synergies",
        "valueText": "Value Creation",
        "highlight": true
      },
      {
        "label": "3. Deal Price, Culture & Regulatory/Integration Risks",
        "valueText": "Downside Check"
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Candidate",
      "prompt": "SuperBurger SuperBurger is the world’s fourth-largest fast-food chain (85% franchised stores) and it is consid",
      "detail": "SuperBurger SuperBurger is the world’s fourth-largest fast-food chain (85% franchised stores) and it is considering acquiring Tasty Donuts, a growing U.S. and international doughnut producer, and seeks your recommendation.\nTo begin, I'd like to understand the market context. Could you tell about the growth potential in the market for doughnuts? For instance, how large is market, and what is projected growth rate?\nThe current doughnut consumption is $10 per person annually for US population of 300 million. The market is projected to experience significant growth, doubling in size within the next 5 years, with per-"
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "SuperBurger has grown at 10% annually, while Tasty Donuts has expanded at 15%.",
      "detail": "SuperBurger has grown at 10% annually, while Tasty Donuts has expanded at 15%.\nClick here to give a mock interview Post-acquisition, Tasty Donuts aims to double its U.S. market share within five years.\nNow, digging deeper into the first two buckets regarding value and strategic fit, what is the competitive landscape like? Are SuperBurger's major competitors also diversifying?\nThe client has only handled small acquisitions, while competitors have expanded into coffee, bakery, breakfast, and snacks through partnerships."
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "What is the current workforce profile of the two companies?",
      "detail": "What is the current workforce profile of the two companies?\nTasty Donuts has 3,000–5,000 employees, mostly young store staff, with 200–300 in corporate roles, which aligns with SuperBurger’s workforce.\nSo, there appears to be cultural alignment at the store level.\nTo assess strategic fit and synergies, I would need data on store distribution and key financials."
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "SuperBurger Sure, here is the data.",
      "detail": "SuperBurger Sure, here is the data.\nSo, based on the data, I can identify some synergies.\n1. We can cut significant overhead by merging corporate functions. Tasty Donuts' G&A is 16% of sales; SuperBurger's is 9%. Combined purchasing power will also reduce goods costs.\n2. Doughnut sales in 5,000 stores, fast global growth via SuperBurger, and quicker Tasty Donuts expansion using SuperBurger’s skills."
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "Okay with these synergies, client assumes the market share of Tasty Donuts in the US to double and their US st",
      "detail": "Okay with these synergies, client assumes the market share of Tasty Donuts in the US to double and their US stores to Click here to give a mock interview increase by 2.5 times in 5 years. Do you find this target achievable ?\nThe targets are ambitious yet feasible. Projected Market Size = $20/person×300M people=$6B Current market size = $10/person×300M people=$3 B Target Number of Stores = 1,000 ×2.5=2,500 stores. Required Sales Per Store =Target Sales / Stores = $3 billion / 2,500 stores =$1.2 million per store, Success will hinge on execution, competitive positioning, and realizing synergies; with strong integra"
    }
  ],
  "recommendations": [
    "The US doughnut market is expected to grow significantly, with",
    "Tasty Donuts has a higher annual store growth rate (15%) compared",
    "Cross-selling doughnuts is projected to add $15,750 in net profit per",
    "Successfully managing the franchisee network, which makes up 85%"
  ],
  "metricsAndGuardrails": {
    "northStar": "Risk-Adjusted Post-Merger NPV / ROIC (PrepLounge)",
    "leading": [
      "Cost synergy realization (overhead/procurement)",
      "Cross-sell retention at Month 6/12"
    ],
    "guardrails": [
      "Key talent & customer attrition",
      "Debt leverage / integration cost overrun"
    ]
  },
  "synthesisScript": "For PrepLounge’s SuperBurger M&A Evaluation case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: The US doughnut market is expected to grow significantly, with We will validate success via Risk-Adjusted Post-Merger NPV / ROIC (PrepLounge) while guarding against Key talent & customer attrition.",
  "interviewerTrap": "Assuming optimistic cross-sell Revenue Synergies justify any price while ignoring Integration, Culture, and Overpayment risks!",
  "variations": [
    {
      "question": "How would your recommendation change if PrepLounge had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "M&A",
    "correctFramework": "Strategic Fit + Standalone Valuation + Synergies (Revenue & Cost) − Price & Integration Risks",
    "structureOptions": [
      {
        "label": "Check Strategic Rationale → Standalone Value + Cost/Rev Synergies → Deal Price & Integration Risks",
        "correct": true,
        "feedback": "Complete M&A deal evaluation tree!"
      },
      {
        "label": "Buy the target solely because its logo looks modern",
        "correct": false,
        "feedback": "M&A requires rigorous synergy, valuation, and integration analysis."
      },
      {
        "label": "Use a 4Ps ad campaign only",
        "correct": false,
        "feedback": "Marketing 4Ps does not value an M&A transaction."
      }
    ],
    "decisionQuiz": {
      "question": "Which type of M&A synergy is typically faster and more certain to realize?",
      "options": [
        {
          "label": "Cost synergies (eliminating duplicate overhead, shared procurement/ops)",
          "correct": true,
          "feedback": "Yes! Management directly controls cost consolidation, whereas cross-sell depends on customer behavior."
        },
        {
          "label": "Speculative unrelated cross-sell synergies",
          "correct": false,
          "feedback": "Revenue synergies frequently take longer and disappoint."
        },
        {
          "label": "Increasing office snacks",
          "correct": false,
          "feedback": "Immaterial to deal NPV."
        }
      ]
    }
  }
},
{
  "id": "ktc-unc-land-usage",
  "title": "Land Usage Optimization",
  "company": "BCG",
  "source": "KTC Casebook 2026",
  "track": "Consulting",
  "category": "Unconventional",
  "difficulty": 2,
  "isStarter": true,
  "tags": [
    "BCG",
    "Unconventional",
    "First Principles",
    "Real Estate",
    "ROI"
  ],
  "prompt": "Land Usage Your client is the Delhi State Government. The client has a piece of land available, and it wants to make good use of this land in a way that it can use the land for some social good and break even on whatever activity we pursue using the land.",
  "clarifyingQuestions": [
    {
      "q": "I would like to begin with a few clarifying questions first to understand the situation better. What do you exactly mean by social good of land?",
      "a": "Using the land in a way that would solve any problem faced by the maximum number of people in the area. It is just one of the things that can be done, and not necessarily the only use.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "I see. Where is this piece of land located and what is the area of this land we have?",
      "a": "Click here to give a mock interview The area of the land is roughly 60,000 square feet and it is located in an affluent area, containing both residential buildings and office spaces.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Do we have any information about the lifestyle amenities present in the locality?",
      "a": "Land Usage The area has convenience stores, salons, schools and other amenities needed for a daily basis at a very convenient distance, with high reachability.",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "First Principles Options Evaluation (Objective × Financial NPV × Non-Financial Constraints)",
  "coreEquation": "Optimal Land Use = Max(Risk-Adjusted NPV + Strategic Value) Subject to Zoning, Capex & Timeline",
  "strategyOverview": "Never freeze on open-ended land-use cases! Clarify land location, size, zoning laws, and owner’s capital/horizon; generate MECE usage buckets (Sell, Lease, Commercial/Retail, Residential, Warehouse/Solar/Agri); compare Capex, Payback, and Risk across options.",
  "tree": {
    "label": "Land Usage Optimization — First-Principles Tree",
    "valueText": "Custom MECE",
    "children": [
      {
        "label": "1. Define Objective & Stakeholder Constraints",
        "valueText": "Scope"
      },
      {
        "label": "2. Primary Equation / Behavioral & Structural Drivers",
        "valueText": "MECE Buckets",
        "highlight": true
      },
      {
        "label": "3. High-Leverage Interventions & Second-Order Risks",
        "valueText": "Action Plan"
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Candidate",
      "prompt": "Land Usage Your client is the Delhi State Government. The client has a piece of land available, and it wants t",
      "detail": "Land Usage Your client is the Delhi State Government. The client has a piece of land available, and it wants to make good use of this land in a way that it can use the land for some social good and break even on whatever activity we pursue using the land.\nTo confirm that I have understood the question, the Delhi government has a piece of land available. We have to put the land to good use and justify the use of the land.\nYes, that’s correct.\nI would like to begin with a few clarifying questions first to understand the situation better. What do you exactly mean by social good of land?"
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "Using the land in a way that would solve any problem faced by the maximum number of people in the area. It is ",
      "detail": "Using the land in a way that would solve any problem faced by the maximum number of people in the area. It is just one of the things that can be done, and not necessarily the only use.\nI see. Where is this piece of land located and what is the area of this land we have?\nClick here to give a mock interview The area of the land is roughly 60,000 square feet and it is located in an affluent area, containing both residential buildings and office spaces.\nSince the area is in the proximity of both office spaces and residential areas which have been built in the past decade, we could aim at looking at the major problems"
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "That sounds like a good start to begin with, please go ahead.",
      "detail": "That sounds like a good start to begin with, please go ahead.\nThe basic needs of any individual can be categorized into:\noccupation, lifestyle, residence. Since the area is in the office proximity and has residential buildings, we can assume that the land is getting high footfall.\nSounds good, let's begin by analyzing them one by one."
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "Do we have any information about the lifestyle amenities present in the locality?",
      "detail": "Do we have any information about the lifestyle amenities present in the locality?\nLand Usage The area has convenience stores, salons, schools and other amenities needed for a daily basis at a very convenient distance, with high reachability.\nIs there demand for any particular type of amenity in the locality and are the current amenities able to cater to everyone?\nYes, the current facilities are pretty robust and are able to cater everyone in the locality."
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "In that case, I believe that the problem could lie with either the occupation or the residence part. Since our",
      "detail": "In that case, I believe that the problem could lie with either the occupation or the residence part. Since our client is the government dealing with a piece of land in an affluent area, we can assume that due to immense development, there would be a general constraint of space.\nGood point! There is indeed a lack of parking space for the people of the area Most residential complexes have their own parking facilities that people buy at the time of purchasing their homes, especially in affluent areas.\nClick here to give a mock interview As for corporate offices, they usually have a lot of employees and generally not"
    }
  ],
  "recommendations": [
    "A particular issue in such areas can be parking, which is scarce and",
    "The land's location and proximity to oﬃces and other essential",
    "The consistent demand for parking in corporate areas.",
    "Revenue generation potential, with an expected break-even in"
  ],
  "metricsAndGuardrails": {
    "northStar": "Primary Policy / Operational Objective Metric (BCG)",
    "leading": [
      "Target cohort participation / throughput",
      "Bottleneck conversion %"
    ],
    "guardrails": [
      "Implementation cost & fairness",
      "Unintended gaming / backlash"
    ]
  },
  "synthesisScript": "For BCG’s Land Usage Optimization case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: A particular issue in such areas can be parking, which is scarce and We will validate success via Primary Policy / Operational Objective Metric (BCG) while guarding against Implementation cost & fairness.",
  "interviewerTrap": "Picking 'build a luxury mall' blindly without checking location zoning, capital availability, or nearby demand!",
  "variations": [
    {
      "question": "How would your recommendation change if BCG had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Unconventional",
    "correctFramework": "First Principles Objective Equation → MECE Drivers & Constraints → Impact Prioritization",
    "structureOptions": [
      {
        "label": "Clarify Objective → Build a Custom First-Principles Equation → Split MECE Drivers → Prioritize High-Impact Levers",
        "correct": true,
        "feedback": "Gold standard for Unconventional cases! Custom MECE equations beat forced templates."
      },
      {
        "label": "Force Porter’s Five Forces onto a public-policy or personal dilemma",
        "correct": false,
        "feedback": "Cookie-cutter frameworks look robotic when the prompt is non-standard."
      },
      {
        "label": "Give up because no memorized acronym fits",
        "correct": false,
        "feedback": "Unconventional cases specifically reward calm First-Principles structuring."
      }
    ],
    "decisionQuiz": {
      "question": "When an interviewer throws an Unconventional puzzle with no standard template, what wins?",
      "options": [
        {
          "label": "Translating the real-world objective into a simple First-Principles MECE equation",
          "correct": true,
          "feedback": "Exactly! Break the outcome into clean, non-overlapping drivers."
        },
        {
          "label": "Reciting SWOT + PESTEL regardless of fit",
          "correct": false,
          "feedback": "Generic acronyms fail unconventional prompts."
        },
        {
          "label": "Guessing one random answer immediately",
          "correct": false,
          "feedback": "Always structure before answering."
        }
      ]
    }
  }
},
{
  "id": "ktc-39-shipping-company-strategy",
  "title": "Shipping Company Strategy",
  "company": "KPMG",
  "source": "KTC Casebook 2026",
  "track": "Consulting",
  "category": "Unconventional",
  "difficulty": 2,
  "isStarter": false,
  "tags": [
    "KPMG",
    "Unconventional",
    "Consulting"
  ],
  "prompt": "Shipping Company Your client is a local shipping firm in Spain where they handle local shipping of packages delivered by international shipping firms like FedEx, UPS & DHL. These firms deliver packages to the key city hubs and then our client takes it from there. They want to know how many trucks they should lease to support their operations. And also they are aiming to be profitable.",
  "clarifyingQuestions": [
    {
      "q": "So, May I know how many packages need to be delivered per day?",
      "a": "1000 packages.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Well, what is the delivery service duration, i.e number of working days in a week and working hours?",
      "a": "Click here to give a mock interview Our delivery service runs 5 days a week from 09.00 AM to 06.00 PM i.e. 9 hours Oh, so what is the average duration of delivering the parcel?",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Click here to give a mock interview Our delivery service runs 5 days a week from 09.00 AM to 06.00 PM i.e. 9 hours Oh, so what is the average duration of delivering the parcel?",
      "a": "It takes on average 10 minutes to deliver each package.",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "First Principles Objective Equation → MECE Drivers & Constraints → Impact Prioritization",
  "coreEquation": "Target Outcome = ∑ (MECE Stakeholder / Funnel / Operational Drivers) Subject to Constraints",
  "strategyOverview": "Approach Shipping Company Strategy (KPMG) using a Unconventional structure: start by confirming the business objective and scope, decompose the problem cleanly along First Principles Objective Equation → MECE Drivers & Constraints → Impact Prioritization, and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Shipping Company Strategy — First-Principles Tree",
    "valueText": "Custom MECE",
    "children": [
      {
        "label": "1. Define Objective & Stakeholder Constraints",
        "valueText": "Scope"
      },
      {
        "label": "2. Primary Equation / Behavioral & Structural Drivers",
        "valueText": "MECE Buckets",
        "highlight": true
      },
      {
        "label": "3. High-Leverage Interventions & Second-Order Risks",
        "valueText": "Action Plan"
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Candidate",
      "prompt": "Shipping Company Your client is a local shipping firm in Spain where they handle local shipping of packages de",
      "detail": "Shipping Company Your client is a local shipping firm in Spain where they handle local shipping of packages delivered by international shipping firms like FedEx, UPS & DHL. These firms deliver packages to the key city hubs and then our client takes it from there. They want to know how many trucks they should lease to support their operations. And also they are aiming to be profitable.\nBefore moving to solve the case I would like to ask some preliminary questions to the client.\nSo, May I know how many packages need to be delivered per day?"
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "We deliver packages in envelope format with dimensions of 1*1*1 cubic meters.",
      "detail": "We deliver packages in envelope format with dimensions of 1*1*1 cubic meters.\nWell, what is the delivery service duration, i.e number of working days in a week and working hours?\nClick here to give a mock interview Our delivery service runs 5 days a week from 09.00 AM to 06.00 PM i.e. 9 hours Oh, so what is the average duration of delivering the parcel?"
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "It takes on average 10 minutes to deliver each package.",
      "detail": "It takes on average 10 minutes to deliver each package.\nSo, Now I got ample amount of knowledge on parcel, so let’s delve into the truck's side. How many models of trucks are available for us and their lease costs and their dimensions?\nSure, So the available models are MODEL COST PER DAY($) DIMENSIONS A 160 3*4*6 B 50 9*2*2 C 140 6*8*11 As I have got my questions clarified, let’s move into volume calculation."
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "Shipping Company Great, you can proceed with your calculation.",
      "detail": "Shipping Company Great, you can proceed with your calculation.\nFirst let’s calculate optimum no. of any type lorries required based on time of delivery and no. of deliveries There are 1000 packages to be delivered per day, the working hours are 9 hrs and the duration of delivery is 10 min. So no.\nof deliveries would be made per day = 9*60/10 = 54 deliveries Hence 1 truck can deliver 54 packages per day, no.of lorries required to deliver 1000 packages = 1000/54 = 18.51 = 19 required wholly."
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "That’s a good approach, now could you do a similar type of approach in models?",
      "detail": "That’s a good approach, now could you do a similar type of approach in models?\nSure Calculating optimised option, we need to calculate the total daily costs for each model with 19 trucks.\n● Model A (1,000*(1x1x1))/(3x4x6)=14 rounded trucks or a minimum of 19 trucks costing us 19*$160=$3,040 per day."
    }
  ],
  "recommendations": [
    "Model A (1,000*(1x1x1))/(3x4x6)=14 rounded trucks or",
    "Model B (1,000*(1x1x1))/(9x2x2)=28 rounded trucks or",
    "Model C (1,000*(1x1x1))/(6x8x11)=2 rounded trucks"
  ],
  "metricsAndGuardrails": {
    "northStar": "Primary Policy / Operational Objective Metric (KPMG)",
    "leading": [
      "Target cohort participation / throughput",
      "Bottleneck conversion %"
    ],
    "guardrails": [
      "Implementation cost & fairness",
      "Unintended gaming / backlash"
    ]
  },
  "synthesisScript": "For KPMG’s Shipping Company Strategy case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Model A (1,000*(1x1x1))/(3x4x6)=14 rounded trucks or We will validate success via Primary Policy / Operational Objective Metric (KPMG) while guarding against Implementation cost & fairness.",
  "interviewerTrap": "Panicking because no textbook framework matches—or forcing a Profitability/4Ps template onto a puzzle that needs First Principles!",
  "variations": [
    {
      "question": "How would your recommendation change if KPMG had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Unconventional",
    "correctFramework": "First Principles Objective Equation → MECE Drivers & Constraints → Impact Prioritization",
    "structureOptions": [
      {
        "label": "Clarify Objective → Build a Custom First-Principles Equation → Split MECE Drivers → Prioritize High-Impact Levers",
        "correct": true,
        "feedback": "Gold standard for Unconventional cases! Custom MECE equations beat forced templates."
      },
      {
        "label": "Force Porter’s Five Forces onto a public-policy or personal dilemma",
        "correct": false,
        "feedback": "Cookie-cutter frameworks look robotic when the prompt is non-standard."
      },
      {
        "label": "Give up because no memorized acronym fits",
        "correct": false,
        "feedback": "Unconventional cases specifically reward calm First-Principles structuring."
      }
    ],
    "decisionQuiz": {
      "question": "When an interviewer throws an Unconventional puzzle with no standard template, what wins?",
      "options": [
        {
          "label": "Translating the real-world objective into a simple First-Principles MECE equation",
          "correct": true,
          "feedback": "Exactly! Break the outcome into clean, non-overlapping drivers."
        },
        {
          "label": "Reciting SWOT + PESTEL regardless of fit",
          "correct": false,
          "feedback": "Generic acronyms fail unconventional prompts."
        },
        {
          "label": "Guessing one random answer immediately",
          "correct": false,
          "feedback": "Always structure before answering."
        }
      ]
    }
  }
},
{
  "id": "ktc-40-ceo-of-bcg-strategy-dilemma",
  "title": "CEO of BCG Strategy Dilemma",
  "company": "BCG",
  "source": "KTC Casebook 2026",
  "track": "Consulting",
  "category": "Unconventional",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "BCG",
    "Unconventional",
    "Consulting"
  ],
  "prompt": "Our client is the CEO of BCG. He wants to know what he has to do.",
  "clarifyingQuestions": [
    {
      "q": "Is this going to be how his day should look or an overall outlook on his responsibilities?",
      "a": "The overall outlook on his responsibilities.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "A CEO’s general responsibilities are Stakeholder Management, Financial Decision-Making, Organizational Strategy. Is there a specific one you want me to dive into?",
      "a": "For now, we will proceed with Stakeholder Management.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Stakeholders consist of Investors, Customers, Employees, Suppliers, Government bodies, Media, and Communities. Do you want me to focus on any specific one?",
      "a": "Click here to give a mock interview Dive into Investors, Employees, and Customers.",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "First Principles Objective Equation → MECE Drivers & Constraints → Impact Prioritization",
  "coreEquation": "Target Outcome = ∑ (MECE Stakeholder / Funnel / Operational Drivers) Subject to Constraints",
  "strategyOverview": "Approach CEO of BCG Strategy Dilemma (BCG) using a Unconventional structure: start by confirming the business objective and scope, decompose the problem cleanly along First Principles Objective Equation → MECE Drivers & Constraints → Impact Prioritization, and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "CEO of BCG Strategy Dilemma — First-Principles Tree",
    "valueText": "Custom MECE",
    "children": [
      {
        "label": "1. Define Objective & Stakeholder Constraints",
        "valueText": "Scope"
      },
      {
        "label": "2. Primary Equation / Behavioral & Structural Drivers",
        "valueText": "MECE Buckets",
        "highlight": true
      },
      {
        "label": "3. High-Leverage Interventions & Second-Order Risks",
        "valueText": "Action Plan"
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Candidate",
      "prompt": "CEO OF BCG Our client is the CEO of BCG. He wants to know what he has to do.",
      "detail": "CEO OF BCG Our client is the CEO of BCG. He wants to know what he has to do.\nSo to clarify, the CEO of BCG wants to know how to proceed about his work.\nYes that is correct.\nIs this going to be how his day should look or an overall outlook on his responsibilities?"
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "The overall outlook on his responsibilities.",
      "detail": "The overall outlook on his responsibilities.\nA CEO’s general responsibilities are Stakeholder Management, Financial Decision-Making, Organizational Strategy. Is there a specific one you want me to dive into?\nFor now, we will proceed with Stakeholder Management.\nStakeholders consist of Investors, Customers, Employees, Suppliers, Government bodies, Media, and Communities. Do you want me to focus on any specific one?"
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "Click here to give a mock interview Dive into Investors, Employees, and Customers.",
      "detail": "Click here to give a mock interview Dive into Investors, Employees, and Customers.\nInvestors primarily require the company (BCG’s) performance statistics and profit margins, along with plans for the upcoming future. A CEO’s job is to ensure that the investors are satisfied and are going to back the company. As for Employees, since BCG is a partnership driven firm he also has to update all the partners regularly about the company’s proceedings.\nLooking good so far, go ahead with Customers.\nRight. For customers, each of the offices have their respective Managing Directors and partners who handle the offices’ indivi"
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "Alright. Now dive into the Organizational Strategy aspect of a CEO’s job.",
      "detail": "Alright. Now dive into the Organizational Strategy aspect of a CEO’s job.\nOrganizational Strategy begins with the CEO meeting with respective CXO’s and Heads of subdivisions of the company such as Marketing, Sales, Finance, Operations, Strategy, IT, etc. and listening to problems and proposing solutions.\nCEO OF BCG Other than just solving problems, what else should a CEO do in Organizational Strategy?\nMore than strategically proposing solutions to these problems, the CEO should also make the organization’s performance more effective, both financially and temporally. Effective distribution of work down the hierarc"
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "Other than just solving problems, what else should a CEO do in Organizational Strategy?",
      "detail": "Other than just solving problems, what else should a CEO do in Organizational Strategy?\nThe chain of financial transactions begin from the Investors, and as mentioned in Stakeholder Management, it is important that they have your back and support you when required. It proceeds into the CFO and CEO, who make business decisions on where to allocate these funds based on requirement and usage. From there it moves into the team of focus that require these funds and leads to excellent performance of the company overall.\nClick here to give a mock interview Yes, so besides these, the CEO should also oversee the profitabi"
    }
  ],
  "recommendations": [
    "Establish a perfect Organizational Strategy specific to different",
    "Prepare plans for improving the global footprint and profitability of",
    "CEO’s job is very vast so diving into niche and specific approach",
    "It is also important to know that BCG is a partner based firm and"
  ],
  "metricsAndGuardrails": {
    "northStar": "Primary Policy / Operational Objective Metric (BCG)",
    "leading": [
      "Target cohort participation / throughput",
      "Bottleneck conversion %"
    ],
    "guardrails": [
      "Implementation cost & fairness",
      "Unintended gaming / backlash"
    ]
  },
  "synthesisScript": "For BCG’s CEO of BCG Strategy Dilemma case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Establish a perfect Organizational Strategy specific to different We will validate success via Primary Policy / Operational Objective Metric (BCG) while guarding against Implementation cost & fairness.",
  "interviewerTrap": "Panicking because no textbook framework matches—or forcing a Profitability/4Ps template onto a puzzle that needs First Principles!",
  "variations": [
    {
      "question": "How would your recommendation change if BCG had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Unconventional",
    "correctFramework": "First Principles Objective Equation → MECE Drivers & Constraints → Impact Prioritization",
    "structureOptions": [
      {
        "label": "Clarify Objective → Build a Custom First-Principles Equation → Split MECE Drivers → Prioritize High-Impact Levers",
        "correct": true,
        "feedback": "Gold standard for Unconventional cases! Custom MECE equations beat forced templates."
      },
      {
        "label": "Force Porter’s Five Forces onto a public-policy or personal dilemma",
        "correct": false,
        "feedback": "Cookie-cutter frameworks look robotic when the prompt is non-standard."
      },
      {
        "label": "Give up because no memorized acronym fits",
        "correct": false,
        "feedback": "Unconventional cases specifically reward calm First-Principles structuring."
      }
    ],
    "decisionQuiz": {
      "question": "When an interviewer throws an Unconventional puzzle with no standard template, what wins?",
      "options": [
        {
          "label": "Translating the real-world objective into a simple First-Principles MECE equation",
          "correct": true,
          "feedback": "Exactly! Break the outcome into clean, non-overlapping drivers."
        },
        {
          "label": "Reciting SWOT + PESTEL regardless of fit",
          "correct": false,
          "feedback": "Generic acronyms fail unconventional prompts."
        },
        {
          "label": "Guessing one random answer immediately",
          "correct": false,
          "feedback": "Always structure before answering."
        }
      ]
    }
  }
},
{
  "id": "ktc-41-chip-equity-strategy",
  "title": "Chip Equity Strategy",
  "company": "McKinsey & Company",
  "source": "KTC Casebook 2026",
  "track": "Consulting",
  "category": "Unconventional",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "McKinsey & Company",
    "Unconventional",
    "Consulting"
  ],
  "prompt": "Chip Equity Our client is an electronics holding called Chip’n’Chip. They want to invest in a Printed Circuit Board (PCB) manufacturer called OnBoard and asked you whether it’s going to be a good investment. How would you help them?",
  "clarifyingQuestions": [
    {
      "q": "I want to start with a few clarifying questions. How much is our client willing to invest and how much is OnBoard looking to be paid?",
      "a": "Chip’n’Chip has more than $80 m for investments. It requires a 10% ROI in the first year to invest. OnBoard has a valuation of $320 m. They are looking for a private equity investor to inject $80 m and are looking to give 20% of the shares ",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "That's very helpful! Where does OnBoard operate and what is the market growth rate for PCBs?",
      "a": "OnBoard is looking to invest the funds into the factories in Vietnam. Also, the market for the 2-layer PCB technology has been declining globally by 4% per year in the last few years and tends to keep falling.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "So I’m assuming our client is planning to use these investments to expand in the 3-layer PCB technology, is that correct?",
      "a": "Yes that is correct.",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "First Principles Objective Equation → MECE Drivers & Constraints → Impact Prioritization",
  "coreEquation": "Target Outcome = ∑ (MECE Stakeholder / Funnel / Operational Drivers) Subject to Constraints",
  "strategyOverview": "Approach Chip Equity Strategy (McKinsey & Company) using a Unconventional structure: start by confirming the business objective and scope, decompose the problem cleanly along First Principles Objective Equation → MECE Drivers & Constraints → Impact Prioritization, and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Chip Equity Strategy — First-Principles Tree",
    "valueText": "Custom MECE",
    "children": [
      {
        "label": "1. Define Objective & Stakeholder Constraints",
        "valueText": "Scope"
      },
      {
        "label": "2. Primary Equation / Behavioral & Structural Drivers",
        "valueText": "MECE Buckets",
        "highlight": true
      },
      {
        "label": "3. High-Leverage Interventions & Second-Order Risks",
        "valueText": "Action Plan"
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Interviewer",
      "prompt": "Chip Equity Our client is an electronics holding called Chip’n’Chip. They want to invest in a Printed Circuit ",
      "detail": "Chip Equity Our client is an electronics holding called Chip’n’Chip. They want to invest in a Printed Circuit Board (PCB) manufacturer called OnBoard and asked you whether it’s going to be a good investment. How would you help them?\nI want to start with a few clarifying questions. How much is our client willing to invest and how much is OnBoard looking to be paid?\nChip’n’Chip has more than $80 m for investments. It requires a 10% ROI in the first year to invest. OnBoard has a valuation of $320 m. They are looking for a private equity investor to inject $80 m and are looking to give 20% of the shares for investmen"
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "OnBoard is looking to invest the funds into the factories in Vietnam. Also, the market for the 2-layer PCB tec",
      "detail": "OnBoard is looking to invest the funds into the factories in Vietnam. Also, the market for the 2-layer PCB technology has been declining globally by 4% per year in the last few years and tends to keep falling.\nClick here to give a mock interview The market for the new 3-layer technology had an increase of 10% per year in the last few years (smartphone boom).\nSo I’m assuming our client is planning to use these investments to expand in the 3-layer PCB technology, is that correct?\nYes that is correct."
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "What is their target production capacity?",
      "detail": "What is their target production capacity?\n6 m units of the 3-layer PCB technology.\nHow is the competitive environment in the Asian market?\nJapanese manufacturers control more than 50% of the market, but have stagnated as new manufacturers in Asia (specifically China and Southeast Asia) improve their technology with less labor costs.OnBoard has factories in Germany, China, and Vietnam."
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "How is the current production of these factories and what capacity utilization does each of these factories ha",
      "detail": "How is the current production of these factories and what capacity utilization does each of these factories have?\nChip Equity The capacity of the factories in Germany/Vietnam is 5m boards per year, whereas the capacity in China is 10m boards per year.\nThe factories are working with the following capacity utilization:\nGermany at 60%, China at 80%, and Vietnam at 100%."
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "Just to clarify, these values are only for 2-layer PCBs right?",
      "detail": "Just to clarify, these values are only for 2-layer PCBs right?\nThat is correct. There is no active production of 3-layer PCBs from any of OnBoard’s factories.\nGreat. So what are the costs of each of these factories?\nChina and Vietnam consume $3.5 per unit and Germany consumes $4 per unit produced."
    }
  ],
  "recommendations": [
    "Prioritize the highest-impact P0 bottleneck identified in Chip Equity Strategy before secondary optimizations.",
    "Pilot the top intervention in a controlled cohort/region with clear North Star and guardrail tracking.",
    "Scale rollout only after verifying unit economics and zero adverse second-order effects."
  ],
  "metricsAndGuardrails": {
    "northStar": "Primary Policy / Operational Objective Metric (McKinsey & Company)",
    "leading": [
      "Target cohort participation / throughput",
      "Bottleneck conversion %"
    ],
    "guardrails": [
      "Implementation cost & fairness",
      "Unintended gaming / backlash"
    ]
  },
  "synthesisScript": "For McKinsey & Company’s Chip Equity Strategy case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Prioritize the highest-impact P0 bottleneck identified in Chip Equity Strategy before secondary optimizations. We will validate success via Primary Policy / Operational Objective Metric (McKinsey & Company) while guarding against Implementation cost & fairness.",
  "interviewerTrap": "Panicking because no textbook framework matches—or forcing a Profitability/4Ps template onto a puzzle that needs First Principles!",
  "variations": [
    {
      "question": "How would your recommendation change if McKinsey & Company had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Unconventional",
    "correctFramework": "First Principles Objective Equation → MECE Drivers & Constraints → Impact Prioritization",
    "structureOptions": [
      {
        "label": "Clarify Objective → Build a Custom First-Principles Equation → Split MECE Drivers → Prioritize High-Impact Levers",
        "correct": true,
        "feedback": "Gold standard for Unconventional cases! Custom MECE equations beat forced templates."
      },
      {
        "label": "Force Porter’s Five Forces onto a public-policy or personal dilemma",
        "correct": false,
        "feedback": "Cookie-cutter frameworks look robotic when the prompt is non-standard."
      },
      {
        "label": "Give up because no memorized acronym fits",
        "correct": false,
        "feedback": "Unconventional cases specifically reward calm First-Principles structuring."
      }
    ],
    "decisionQuiz": {
      "question": "When an interviewer throws an Unconventional puzzle with no standard template, what wins?",
      "options": [
        {
          "label": "Translating the real-world objective into a simple First-Principles MECE equation",
          "correct": true,
          "feedback": "Exactly! Break the outcome into clean, non-overlapping drivers."
        },
        {
          "label": "Reciting SWOT + PESTEL regardless of fit",
          "correct": false,
          "feedback": "Generic acronyms fail unconventional prompts."
        },
        {
          "label": "Guessing one random answer immediately",
          "correct": false,
          "feedback": "Always structure before answering."
        }
      ]
    }
  }
},
{
  "id": "ktc-42-credit-card-unconventional-case",
  "title": "Credit Card Unconventional Case",
  "company": "PwC",
  "source": "KTC Casebook 2026",
  "track": "Consulting",
  "category": "Unconventional",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "PwC",
    "Unconventional",
    "Consulting"
  ],
  "prompt": "Credit Card Your client is a big bank that issues credit cards with a €100 annual fee. Recently, a supermarket entered the credit card business. The supermarket’s credit cards do NOT have an annual fee. Your client wants to know how they should react to this new competitor.",
  "clarifyingQuestions": [
    {
      "q": "Interesting situation. Before diving into recommendations, I’d like to investigate the similarities and differences between the two credit cards, particularly the features and benefits aside from the fee. Is there any ad",
      "a": "The only difference between the two cards is the annual fee. All other aspects of the cards are the same.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "€13,500 * 1% = €135 in interchange fees per customer. Now for the interest revenue estimation, do we have any information on the average outstanding balance or loan amount per customer?",
      "a": "Negative credit card balances are 20% of the average amount paid via credit card.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Credit Card Correct. Can you suggest some recommendations based on your analysis?",
      "a": "I can suggest three potential recommendations:",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "First Principles Objective Equation → MECE Drivers & Constraints → Impact Prioritization",
  "coreEquation": "Target Outcome = ∑ (MECE Stakeholder / Funnel / Operational Drivers) Subject to Constraints",
  "strategyOverview": "Approach Credit Card Unconventional Case (PwC) using a Unconventional structure: start by confirming the business objective and scope, decompose the problem cleanly along First Principles Objective Equation → MECE Drivers & Constraints → Impact Prioritization, and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Credit Card Unconventional Case — First-Principles Tree",
    "valueText": "Custom MECE",
    "children": [
      {
        "label": "1. Define Objective & Stakeholder Constraints",
        "valueText": "Scope"
      },
      {
        "label": "2. Primary Equation / Behavioral & Structural Drivers",
        "valueText": "MECE Buckets",
        "highlight": true
      },
      {
        "label": "3. High-Leverage Interventions & Second-Order Risks",
        "valueText": "Action Plan"
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Candidate",
      "prompt": "Credit Card Your client is a big bank that issues credit cards with a €100 annual fee. Recently, a supermarket",
      "detail": "Credit Card Your client is a big bank that issues credit cards with a €100 annual fee. Recently, a supermarket entered the credit card business. The supermarket’s credit cards do NOT have an annual fee. Your client wants to know how they should react to this new competitor.\nInteresting situation. Before diving into recommendations, I’d like to investigate the similarities and differences between the two credit cards, particularly the features and benefits aside from the fee. Is there any additional information on that?\nThe only difference between the two cards is the annual fee. All other aspects of the cards are"
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "Certainly. Our client charges an interchange fee of 1% of the total amount paid using the credit card. The ave",
      "detail": "Certainly. Our client charges an interchange fee of 1% of the total amount paid using the credit card. The average interest on credit card balances is 10%.\nClick here to give a mock interview Okay so based on this, we can estimate the revenue from each stream. Assuming a customer spends 45% of their €30,000 annual income via credit card, they would spend €30,000 * 45% = €13,500 annually. With a 1% interchange fee, this generates:\n€13,500 * 1% = €135 in interchange fees per customer. Now for the interest revenue estimation, do we have any information on the average outstanding balance or loan amount per customer?\n"
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "So, for the interest on balances, 20% of the amount spent on the card remains as an outstanding balance, which",
      "detail": "So, for the interest on balances, 20% of the amount spent on the card remains as an outstanding balance, which would be €2,700.\nWith a 10% interest rate on this balance, the interest revenue is:\n€2,700 * 10% = €270 per customer. So, adding the €100 annual fee, the total revenue per customer would be:\n€100 (Annual Fee), €135 (Interchange Fees), €270 (Interest). That brings us to a total of €505 in annual revenue per customer for VISO. Since the only difference is the annual fee, Supermarket would generate the same revenue from interchange fees and interest. The average yearly revenue per credit card is €405 for th"
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "Credit Card Correct. Can you suggest some recommendations based on your analysis?",
      "detail": "Credit Card Correct. Can you suggest some recommendations based on your analysis?\nI can suggest three potential recommendations:\n1. Do Nothing: If VISO’s customers are not price-sensitive, they may continue using the card despite the fee. The new competitor may also be targeting a different customer segment, so VISO can retain its existing clients without any major changes.\n2. Remove the Annual Fee: This would help match the competitor’s offer. However, VISO would need to compensate by increasing other revenue streams such as interchange fees or interest."
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "3. Introduce Bundling or Incentives: VISO could bundle the credit card with other banking products, such as sa",
      "detail": "3. Introduce Bundling or Incentives: VISO could bundle the credit card with other banking products, such as savings accounts, or offer to waive the fee for customers who meet certain spending thresholds.\nGood enough. Let’s delve into this further. If VISO chooses to eliminate the annual fee, what strategies could they implement to recover the lost revenue? Additionally, what potential downsides might each approach bring?\nClick here to give a mock interview VISO could consider several approaches: First approach could be to enhance customer spending and increase revenue. For this, I would recommend that VISO consid"
    }
  ],
  "recommendations": [
    "Do Nothing: If VISO’s customers are not price-sensitive,",
    "Remove the Annual Fee: This would help match the",
    "Introduce Bundling or Incentives: VISO could bundle"
  ],
  "metricsAndGuardrails": {
    "northStar": "Primary Policy / Operational Objective Metric (PwC)",
    "leading": [
      "Target cohort participation / throughput",
      "Bottleneck conversion %"
    ],
    "guardrails": [
      "Implementation cost & fairness",
      "Unintended gaming / backlash"
    ]
  },
  "synthesisScript": "For PwC’s Credit Card Unconventional Case case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Do Nothing: If VISO’s customers are not price-sensitive, We will validate success via Primary Policy / Operational Objective Metric (PwC) while guarding against Implementation cost & fairness.",
  "interviewerTrap": "Panicking because no textbook framework matches—or forcing a Profitability/4Ps template onto a puzzle that needs First Principles!",
  "variations": [
    {
      "question": "How would your recommendation change if PwC had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Unconventional",
    "correctFramework": "First Principles Objective Equation → MECE Drivers & Constraints → Impact Prioritization",
    "structureOptions": [
      {
        "label": "Clarify Objective → Build a Custom First-Principles Equation → Split MECE Drivers → Prioritize High-Impact Levers",
        "correct": true,
        "feedback": "Gold standard for Unconventional cases! Custom MECE equations beat forced templates."
      },
      {
        "label": "Force Porter’s Five Forces onto a public-policy or personal dilemma",
        "correct": false,
        "feedback": "Cookie-cutter frameworks look robotic when the prompt is non-standard."
      },
      {
        "label": "Give up because no memorized acronym fits",
        "correct": false,
        "feedback": "Unconventional cases specifically reward calm First-Principles structuring."
      }
    ],
    "decisionQuiz": {
      "question": "When an interviewer throws an Unconventional puzzle with no standard template, what wins?",
      "options": [
        {
          "label": "Translating the real-world objective into a simple First-Principles MECE equation",
          "correct": true,
          "feedback": "Exactly! Break the outcome into clean, non-overlapping drivers."
        },
        {
          "label": "Reciting SWOT + PESTEL regardless of fit",
          "correct": false,
          "feedback": "Generic acronyms fail unconventional prompts."
        },
        {
          "label": "Guessing one random answer immediately",
          "correct": false,
          "feedback": "Always structure before answering."
        }
      ]
    }
  }
},
{
  "id": "ktc-43-fysikum-strategy-case",
  "title": "Fysikum Strategy Case",
  "company": "PrepLounge",
  "source": "KTC Casebook 2026",
  "track": "Consulting",
  "category": "Unconventional",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "PrepLounge",
    "Unconventional",
    "Consulting"
  ],
  "prompt": "Fysikum Your client, Fysikum, is an operator of squash centres in Sweden. The squash centres include sauna, spa, pool, gym and of course the squash courts. Due to the extreme success in Sweden the company is considering expanding to other countries of Europe, in particular Germany. Therefore they asked us to evaluate this possible expansion. To start, we have the cost structure of the company What kind of information",
  "clarifyingQuestions": [
    {
      "q": "How would you gather the needed information you just mentioned?",
      "a": "It will be a feasible option to purchase marketing analyses / research reports.Contacting someone in the consulting company who has experience in the market or industry also seems a feasible option.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Fysikum Click here to give a mock interview Now we can start with the more quantitative part of the case. Can you determine the minimum annual membership fee Fysikum has to charge in order to cover the running cost?",
      "a": "Given the cost table, I would like to ask you about the revenues and what is the operational time of the courts, is there some particular time when the court is used in greater frequency?",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Given the cost table, I would like to ask you about the revenues and what is the operational time of the courts, is there some particular time when the court is used in greater frequency?",
      "a": "The profits are equal to the annual costs, and the courts are always used in the operating hours. Also, the usage is 50% single and 50% double matches.",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "First Principles Objective Equation → MECE Drivers & Constraints → Impact Prioritization",
  "coreEquation": "Target Outcome = ∑ (MECE Stakeholder / Funnel / Operational Drivers) Subject to Constraints",
  "strategyOverview": "Approach Fysikum Strategy Case (PrepLounge) using a Unconventional structure: start by confirming the business objective and scope, decompose the problem cleanly along First Principles Objective Equation → MECE Drivers & Constraints → Impact Prioritization, and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Fysikum Strategy Case — First-Principles Tree",
    "valueText": "Custom MECE",
    "children": [
      {
        "label": "1. Define Objective & Stakeholder Constraints",
        "valueText": "Scope"
      },
      {
        "label": "2. Primary Equation / Behavioral & Structural Drivers",
        "valueText": "MECE Buckets",
        "highlight": true
      },
      {
        "label": "3. High-Leverage Interventions & Second-Order Risks",
        "valueText": "Action Plan"
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Interviewer",
      "prompt": "Fysikum Your client, Fysikum, is an operator of squash centres in Sweden. The squash centres include sauna, sp",
      "detail": "Fysikum Your client, Fysikum, is an operator of squash centres in Sweden. The squash centres include sauna, spa, pool, gym and of course the squash courts. Due to the extreme success in Sweden the company is considering expanding to other countries of Europe, in particular Germany. Therefore they asked us to evaluate this possible expansion. To start, we have the cost structure of the company What kind of information would you need in order to estimate the outcomes of this expansion?\nClick here to give a mock interview The best way to solve this is by using a “3C’s” or “Porter’s Five Forces” analysis. I will use "
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "It will be a feasible option to purchase marketing analyses / research reports.Contacting someone in the consu",
      "detail": "It will be a feasible option to purchase marketing analyses / research reports.Contacting someone in the consulting company who has experience in the market or industry also seems a feasible option.\nFysikum Click here to give a mock interview Now we can start with the more quantitative part of the case. Can you determine the minimum annual membership fee Fysikum has to charge in order to cover the running cost?\nGiven the cost table, I would like to ask you about the revenues and what is the operational time of the courts, is there some particular time when the court is used in greater frequency?"
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "The profits are equal to the annual costs, and the courts are always used in the operating hours. Also, the us",
      "detail": "The profits are equal to the annual costs, and the courts are always used in the operating hours. Also, the usage is 50% single and 50% double matches.\nFysikum Are you sure that this is an annual membership fee and not a weekly charge?\nAs the annual costs are divided by the total number of members this is indeed an annual fee."
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "The dominant market player for squash centres (60% market share in Germany) offers memberships for €50. Would ",
      "detail": "The dominant market player for squash centres (60% market share in Germany) offers memberships for €50. Would you recommend entering the market?\nThere could be other outcomes of the investigation. If the competitor operates across all segments, from low-end to high quality, and has a lower cost base, Fysikum should not enter the market. An entrance would only lead to a price competition that our client cannot win.\nIn order to make no loss, Fysikum would need to charge more than €90 per member."
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "The client should only enter the market if there is a possibility to differentiate from the dominant competito",
      "detail": "The client should only enter the market if there is a possibility to differentiate from the dominant competitor. Other issues, mentioned while doing the 3C analysis should also be considered.\nClick here to give a mock interview If you have to report to the CEO right now, what would you tell him/her?\nIn order to make no loss, Fysikum would need to charge more than €90 per member. The client should only enter the market if there is a possibility to differentiate from the dominant competitor."
    }
  ],
  "recommendations": [
    "Prioritize the highest-impact P0 bottleneck identified in Fysikum Strategy Case before secondary optimizations.",
    "Pilot the top intervention in a controlled cohort/region with clear North Star and guardrail tracking.",
    "Scale rollout only after verifying unit economics and zero adverse second-order effects."
  ],
  "metricsAndGuardrails": {
    "northStar": "Primary Policy / Operational Objective Metric (PrepLounge)",
    "leading": [
      "Target cohort participation / throughput",
      "Bottleneck conversion %"
    ],
    "guardrails": [
      "Implementation cost & fairness",
      "Unintended gaming / backlash"
    ]
  },
  "synthesisScript": "For PrepLounge’s Fysikum Strategy Case case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Prioritize the highest-impact P0 bottleneck identified in Fysikum Strategy Case before secondary optimizations. We will validate success via Primary Policy / Operational Objective Metric (PrepLounge) while guarding against Implementation cost & fairness.",
  "interviewerTrap": "Panicking because no textbook framework matches—or forcing a Profitability/4Ps template onto a puzzle that needs First Principles!",
  "variations": [
    {
      "question": "How would your recommendation change if PrepLounge had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Unconventional",
    "correctFramework": "First Principles Objective Equation → MECE Drivers & Constraints → Impact Prioritization",
    "structureOptions": [
      {
        "label": "Clarify Objective → Build a Custom First-Principles Equation → Split MECE Drivers → Prioritize High-Impact Levers",
        "correct": true,
        "feedback": "Gold standard for Unconventional cases! Custom MECE equations beat forced templates."
      },
      {
        "label": "Force Porter’s Five Forces onto a public-policy or personal dilemma",
        "correct": false,
        "feedback": "Cookie-cutter frameworks look robotic when the prompt is non-standard."
      },
      {
        "label": "Give up because no memorized acronym fits",
        "correct": false,
        "feedback": "Unconventional cases specifically reward calm First-Principles structuring."
      }
    ],
    "decisionQuiz": {
      "question": "When an interviewer throws an Unconventional puzzle with no standard template, what wins?",
      "options": [
        {
          "label": "Translating the real-world objective into a simple First-Principles MECE equation",
          "correct": true,
          "feedback": "Exactly! Break the outcome into clean, non-overlapping drivers."
        },
        {
          "label": "Reciting SWOT + PESTEL regardless of fit",
          "correct": false,
          "feedback": "Generic acronyms fail unconventional prompts."
        },
        {
          "label": "Guessing one random answer immediately",
          "correct": false,
          "feedback": "Always structure before answering."
        }
      ]
    }
  }
},
{
  "id": "ktc-44-reducing-road-accidents-in-india",
  "title": "Reducing Road Accidents in India",
  "company": "Nation with NaMo",
  "source": "KTC Casebook 2026",
  "track": "Consulting",
  "category": "Unconventional",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "Nation with NaMo",
    "Unconventional",
    "Consulting"
  ],
  "prompt": "Road Accidents Recently, a highway in Bihar was expanded from 4 lanes to 6 lanes reduce congestion. However, within a few months, we’ve noticed a spike in accidents in the area where the new road section was constructed. Can you help us identify the causes behind this?",
  "clarifyingQuestions": [
    {
      "q": "Okay, Is there a particular time when these accidents are more frequent, such as during the day or night?",
      "a": "No, There's no specific time pattern that we've identified in the said period.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Understood. Are the accidents concentrated in a specific part of the expanded road, or are they spread evenly across the entire section?",
      "a": "Click here to give a mock interview to Good question, the spike in accidents are mostly concentrated in the center lanes of the road.",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "First Principles Objective Equation → MECE Drivers & Constraints → Impact Prioritization",
  "coreEquation": "Target Outcome = ∑ (MECE Stakeholder / Funnel / Operational Drivers) Subject to Constraints",
  "strategyOverview": "Approach Reducing Road Accidents in India (Nation with NaMo) using a Unconventional structure: start by confirming the business objective and scope, decompose the problem cleanly along First Principles Objective Equation → MECE Drivers & Constraints → Impact Prioritization, and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Reducing Road Accidents in India — First-Principles Tree",
    "valueText": "Custom MECE",
    "children": [
      {
        "label": "1. Define Objective & Stakeholder Constraints",
        "valueText": "Scope"
      },
      {
        "label": "2. Primary Equation / Behavioral & Structural Drivers",
        "valueText": "MECE Buckets",
        "highlight": true
      },
      {
        "label": "3. High-Leverage Interventions & Second-Order Risks",
        "valueText": "Action Plan"
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Interviewer",
      "prompt": "Road Accidents Recently, a highway in Bihar was expanded from 4 lanes to 6 lanes reduce congestion. However, w",
      "detail": "Road Accidents Recently, a highway in Bihar was expanded from 4 lanes to 6 lanes reduce congestion. However, within a few months, we’ve noticed a spike in accidents in the area where the new road section was constructed. Can you help us identify the causes behind this?\nThank you for the context. Before jumping into the analysis, I’d like to ask a few clarifying questions to better understand the situation. What types of accidents are we seeing? Are they primarily collisions between vehicles, pedestrian-related, or something else?\nThe accidents are mostly vehicle to vehicle collisions."
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "Okay, Is there a particular time when these accidents are more frequent, such as during the day or night?",
      "detail": "Okay, Is there a particular time when these accidents are more frequent, such as during the day or night?\nNo, There's no specific time pattern that we've identified in the said period.\nUnderstood. Are the accidents concentrated in a specific part of the expanded road, or are they spread evenly across the entire section?"
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "Click here to give a mock interview to Good question, the spike in accidents are mostly concentrated in the ce",
      "detail": "Click here to give a mock interview to Good question, the spike in accidents are mostly concentrated in the center lanes of the road.\nOkay so based on this I’d like to break down the possible causes of these accidents into three broad categories: human error, design flaws, and external factors. Human error would cover issues like speeding, distracted driving, or a lack of familiarity with the new road. Design flaws would involve issues in road layout, signage, and markings. External factors could include weather conditions, poor lighting, or other unforeseen circumstances. Could you let me know which of these are"
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "Thank you for narrowing it down. Now, when we talk about design flaws, we can further break it down into speci",
      "detail": "Thank you for narrowing it down. Now, when we talk about design flaws, we can further break it down into specific areas such as Signage and markings whether the traffic signs and road markings are clear, visible, and properly placed, Road geometry how the road curves, merges, or diverges and Lane structure i.e. whether the lane width, positioning, or number of lanes creates confusion. Could you clarify where the design flaw lies?\nRoad Accidents The design flaw is specifically in the signage. The issue seems to be with how the traffic signs are positioned and their visibility.\nGot it. So, focusing on the signage, "
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "The main problem is inadequate placement. When the road was expanded, we didn’t properly reposition or add new",
      "detail": "The main problem is inadequate placement. When the road was expanded, we didn’t properly reposition or add new signs to accommodate the new lanes.\nClick here to give a mock interview That’s helpful to know. Just to summarize: The issue arises from inadequate signage placement after the road expansion. The signs that were originally positioned for a 4-lane highway were not adjusted or supplemented to accommodate the additional lanes. As a result, drivers, especially those in the innermost lanes, are not able to see important traffic signs, which is leading to accidents.\nFor a recommendation, I suggest the followin"
    }
  ],
  "recommendations": [
    "Prioritize the highest-impact P0 bottleneck identified in Reducing Road Accidents in India before secondary optimizations.",
    "Pilot the top intervention in a controlled cohort/region with clear North Star and guardrail tracking.",
    "Scale rollout only after verifying unit economics and zero adverse second-order effects."
  ],
  "metricsAndGuardrails": {
    "northStar": "Primary Policy / Operational Objective Metric (Nation with NaMo)",
    "leading": [
      "Target cohort participation / throughput",
      "Bottleneck conversion %"
    ],
    "guardrails": [
      "Implementation cost & fairness",
      "Unintended gaming / backlash"
    ]
  },
  "synthesisScript": "For Nation with NaMo’s Reducing Road Accidents in India case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Prioritize the highest-impact P0 bottleneck identified in Reducing Road Accidents in India before secondary optimizations. We will validate success via Primary Policy / Operational Objective Metric (Nation with NaMo) while guarding against Implementation cost & fairness.",
  "interviewerTrap": "Panicking because no textbook framework matches—or forcing a Profitability/4Ps template onto a puzzle that needs First Principles!",
  "variations": [
    {
      "question": "How would your recommendation change if Nation with NaMo had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Unconventional",
    "correctFramework": "First Principles Objective Equation → MECE Drivers & Constraints → Impact Prioritization",
    "structureOptions": [
      {
        "label": "Clarify Objective → Build a Custom First-Principles Equation → Split MECE Drivers → Prioritize High-Impact Levers",
        "correct": true,
        "feedback": "Gold standard for Unconventional cases! Custom MECE equations beat forced templates."
      },
      {
        "label": "Force Porter’s Five Forces onto a public-policy or personal dilemma",
        "correct": false,
        "feedback": "Cookie-cutter frameworks look robotic when the prompt is non-standard."
      },
      {
        "label": "Give up because no memorized acronym fits",
        "correct": false,
        "feedback": "Unconventional cases specifically reward calm First-Principles structuring."
      }
    ],
    "decisionQuiz": {
      "question": "When an interviewer throws an Unconventional puzzle with no standard template, what wins?",
      "options": [
        {
          "label": "Translating the real-world objective into a simple First-Principles MECE equation",
          "correct": true,
          "feedback": "Exactly! Break the outcome into clean, non-overlapping drivers."
        },
        {
          "label": "Reciting SWOT + PESTEL regardless of fit",
          "correct": false,
          "feedback": "Generic acronyms fail unconventional prompts."
        },
        {
          "label": "Guessing one random answer immediately",
          "correct": false,
          "feedback": "Always structure before answering."
        }
      ]
    }
  }
},
{
  "id": "ktc-45-door-to-door-newspaper-campaign",
  "title": "Door-to-Door Newspaper Campaign",
  "company": "Nation with NaMo",
  "source": "KTC Casebook 2026",
  "track": "Consulting",
  "category": "Unconventional",
  "difficulty": 4,
  "isStarter": false,
  "tags": [
    "Nation with NaMo",
    "Unconventional",
    "Consulting"
  ],
  "prompt": "Door-to-Door Newspaper We are thinking of establishing a door-to-door distribution of an existing online newspaper in Kolkata, India. We haven't spent much time on how the process would work in practice yet. Can you help us evaluate the feasibility of the plan?",
  "clarifyingQuestions": [
    {
      "q": "What is the age group they currently attract?",
      "a": "Most of their online readership is young—18 to 35 years old. They are tech-savvy and prefer consuming news digitally.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Wouldn’t targeting these readers with a physical newspaper be a mismatch? These consumers are unlikely to switch to a print format when they’re already accustomed to the convenience of digital news.",
      "a": "What if we target a broader audience, potentially untapped?.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "What if we target a broader audience, potentially untapped?.",
      "a": "Click here to give a mock interview Kolkata’s population is around 15 million, assuming the literacy rate to be 80%, around 12 million literate people. If we estimate that around 25-30% of Kolkata's population falls into the older demograph",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "First Principles Objective Equation → MECE Drivers & Constraints → Impact Prioritization",
  "coreEquation": "Target Outcome = ∑ (MECE Stakeholder / Funnel / Operational Drivers) Subject to Constraints",
  "strategyOverview": "Approach Door-to-Door Newspaper Campaign (Nation with NaMo) using a Unconventional structure: start by confirming the business objective and scope, decompose the problem cleanly along First Principles Objective Equation → MECE Drivers & Constraints → Impact Prioritization, and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Door-to-Door Newspaper Campaign — First-Principles Tree",
    "valueText": "Custom MECE",
    "children": [
      {
        "label": "1. Define Objective & Stakeholder Constraints",
        "valueText": "Scope"
      },
      {
        "label": "2. Primary Equation / Behavioral & Structural Drivers",
        "valueText": "MECE Buckets",
        "highlight": true
      },
      {
        "label": "3. High-Leverage Interventions & Second-Order Risks",
        "valueText": "Action Plan"
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Interviewer",
      "prompt": "Door-to-Door Newspaper We are thinking of establishing a door-to-door distribution of an existing online newsp",
      "detail": "Door-to-Door Newspaper We are thinking of establishing a door-to-door distribution of an existing online newspaper in Kolkata, India. We haven't spent much time on how the process would work in practice yet. Can you help us evaluate the feasibility of the plan?\nWhat is the age group they currently attract?\nMost of their online readership is young—18 to 35 years old. They are tech-savvy and prefer consuming news digitally."
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "Wouldn’t targeting these readers with a physical newspaper be a mismatch? These consumers are unlikely to swit",
      "detail": "Wouldn’t targeting these readers with a physical newspaper be a mismatch? These consumers are unlikely to switch to a print format when they’re already accustomed to the convenience of digital news.\nWhat if we target a broader audience, potentially untapped?.\nClick here to give a mock interview Kolkata’s population is around 15 million, assuming the literacy rate to be 80%, around 12 million literate people. If we estimate that around 25-30% of Kolkata's population falls into the older demographic—those 40 and above—then we’re looking at a target market of about 3.5 to 4 million people. Even if a small percentage"
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "Yes, Kolkata has a number of well-established newspapers with long-standing, loyal readerships. Some have been",
      "detail": "Yes, Kolkata has a number of well-established newspapers with long-standing, loyal readerships. Some have been around for decades and have built strong trust among readers.\nDoor-to-Door Newspaper Entering a market with entrenched competitors who have loyal customers is very difficult. With their established distribution networks and brand loyalty, convincing people to switch to a new, unknown newspaper would be a tough sell.\nThe loyalty factor is something we’re concerned about."
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "Considering the large upfront investment for door-to-door delivery infrastructure, do we have an estimate of t",
      "detail": "Considering the large upfront investment for door-to-door delivery infrastructure, do we have an estimate of the cost for launching this operation?\nWe’d need to invest in local distribution networks, printing facilities, and marketing campaigns to raise awareness.\nThis, combined with potentially lower subscription revenues initially, makes the break-even point a few years away, at best."
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "How does the client currently perform in the online space in terms of revenue?",
      "detail": "How does the client currently perform in the online space in terms of revenue?\nClick here to give a mock interview The client’s online revenues are growing steadily, mainly through digital subscriptions and ad revenue. They’ve built a strong brand online with consistent traffic and reader engagement.\nGiven the growth in digital, I would question whether it makes sense to divert resources to an offline venture, especially when the younger, more future-proof audience is engaged online. Wouldn’t it be more strategic to invest further in digital expansion, improving content, and increasing online advertising, rather "
    }
  ],
  "recommendations": [
    "Prioritize the highest-impact P0 bottleneck identified in Door-to-Door Newspaper Campaign before secondary optimizations.",
    "Pilot the top intervention in a controlled cohort/region with clear North Star and guardrail tracking.",
    "Scale rollout only after verifying unit economics and zero adverse second-order effects."
  ],
  "metricsAndGuardrails": {
    "northStar": "Primary Policy / Operational Objective Metric (Nation with NaMo)",
    "leading": [
      "Target cohort participation / throughput",
      "Bottleneck conversion %"
    ],
    "guardrails": [
      "Implementation cost & fairness",
      "Unintended gaming / backlash"
    ]
  },
  "synthesisScript": "For Nation with NaMo’s Door-to-Door Newspaper Campaign case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Prioritize the highest-impact P0 bottleneck identified in Door-to-Door Newspaper Campaign before secondary optimizations. We will validate success via Primary Policy / Operational Objective Metric (Nation with NaMo) while guarding against Implementation cost & fairness.",
  "interviewerTrap": "Panicking because no textbook framework matches—or forcing a Profitability/4Ps template onto a puzzle that needs First Principles!",
  "variations": [
    {
      "question": "How would your recommendation change if Nation with NaMo had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Unconventional",
    "correctFramework": "First Principles Objective Equation → MECE Drivers & Constraints → Impact Prioritization",
    "structureOptions": [
      {
        "label": "Clarify Objective → Build a Custom First-Principles Equation → Split MECE Drivers → Prioritize High-Impact Levers",
        "correct": true,
        "feedback": "Gold standard for Unconventional cases! Custom MECE equations beat forced templates."
      },
      {
        "label": "Force Porter’s Five Forces onto a public-policy or personal dilemma",
        "correct": false,
        "feedback": "Cookie-cutter frameworks look robotic when the prompt is non-standard."
      },
      {
        "label": "Give up because no memorized acronym fits",
        "correct": false,
        "feedback": "Unconventional cases specifically reward calm First-Principles structuring."
      }
    ],
    "decisionQuiz": {
      "question": "When an interviewer throws an Unconventional puzzle with no standard template, what wins?",
      "options": [
        {
          "label": "Translating the real-world objective into a simple First-Principles MECE equation",
          "correct": true,
          "feedback": "Exactly! Break the outcome into clean, non-overlapping drivers."
        },
        {
          "label": "Reciting SWOT + PESTEL regardless of fit",
          "correct": false,
          "feedback": "Generic acronyms fail unconventional prompts."
        },
        {
          "label": "Guessing one random answer immediately",
          "correct": false,
          "feedback": "Always structure before answering."
        }
      ]
    }
  }
},
{
  "id": "ktc-unc-women-voters",
  "title": "Increasing Women Voter Turnout",
  "company": "Nation with NaMo",
  "source": "KTC Casebook 2026",
  "track": "Consulting",
  "category": "Unconventional",
  "difficulty": 4,
  "isStarter": false,
  "tags": [
    "Nation with NaMo",
    "Unconventional",
    "Consulting"
  ],
  "prompt": "Increasing Women Voters Your client is Nation with Namo with a campaign requirement. You are expected to design a campaign to increase participation from women voters.",
  "clarifyingQuestions": [
    {
      "q": "To clarify, are we focusing on a specific election; like the national elections, or are we aiming at a regional election?",
      "a": "We are targeting the General Lok Sabha election, aiming to increase voter turnout specifically for this election.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Understood. Are we concentrating on any particular regions within India?",
      "a": "No, this campaign should have a pan-India reach, targeting women across all states and union territories, as well as across all age groups, socioeconomic backgrounds, and communities.",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "First Principles Objective Equation → MECE Drivers & Constraints → Impact Prioritization",
  "coreEquation": "Target Outcome = ∑ (MECE Stakeholder / Funnel / Operational Drivers) Subject to Constraints",
  "strategyOverview": "Approach Increasing Women Voter Turnout (Nation with NaMo) using a Unconventional structure: start by confirming the business objective and scope, decompose the problem cleanly along First Principles Objective Equation → MECE Drivers & Constraints → Impact Prioritization, and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Increasing Women Voter Turnout — First-Principles Tree",
    "valueText": "Custom MECE",
    "children": [
      {
        "label": "1. Define Objective & Stakeholder Constraints",
        "valueText": "Scope"
      },
      {
        "label": "2. Primary Equation / Behavioral & Structural Drivers",
        "valueText": "MECE Buckets",
        "highlight": true
      },
      {
        "label": "3. High-Leverage Interventions & Second-Order Risks",
        "valueText": "Action Plan"
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Candidate",
      "prompt": "Increasing Women Voters Your client is Nation with Namo with a campaign requirement. You are expected to desig",
      "detail": "Increasing Women Voters Your client is Nation with Namo with a campaign requirement. You are expected to design a campaign to increase participation from women voters.\nBefore starting, I have some clarifying questions.\nTo clarify, are we focusing on a specific election; like the national elections, or are we aiming at a regional election?\nWe are targeting the General Lok Sabha election, aiming to increase voter turnout specifically for this election."
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "Understood. Are we concentrating on any particular regions within India?",
      "detail": "Understood. Are we concentrating on any particular regions within India?\nNo, this campaign should have a pan-India reach, targeting women across all states and union territories, as well as across all age groups, socioeconomic backgrounds, and communities.\nClick here to give a mock interview Alright. I will start with analyzing the root causes that shall resonate with majority of women across India.\nSome of the pressing issues women face today include dowry, personal safety, equal rights, access to education, and fair representation in influential positions. Among these, I believe a strong focus on safety as the "
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "Very well. Safety is indeed a critical issue. Please proceed with outlining the campaign’s mediums and approac",
      "detail": "Very well. Safety is indeed a critical issue. Please proceed with outlining the campaign’s mediums and approach.\nI propose we focus on three major channels for our campaign.\nFirst, we will use Print Media, placing posters and banners in areas with high female footfall such as marketplaces, shopping areas, and community centers. These visual cues will serve as reminders of the importance of their vote and empower women to actively participate. Secondly, we will focus on Television Media Increasing Women Voters whew we can run targeted advertisements on popular TV channels, especially during daily soap operas and o"
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "Here, we could use relatable influencers and women leaders to share messages on why voting is vital for women’",
      "detail": "Here, we could use relatable influencers and women leaders to share messages on why voting is vital for women’s empowerment and societal change.\nThat seems a well-rounded media plan for advertising. Please elaborate on additional activities that will deepen and enhance the engagement of the campaign.\nYes, to build grassroots engagement, we could include several community-driven activities:\n● For rural outreach, we could partner with Naari Sangathans, women’s collectives or self-help groups, to reach villages and engage women directly. These groups have established trust within their communities, making them ideal"
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "Click here to give a mock interview ● In urban areas, we could organize campaigns within residential societies",
      "detail": "Click here to give a mock interview ● In urban areas, we could organize campaigns within residential societies and conduct street plays that highlight the role of women in shaping the country’s future through voting. Street plays can be an effective way to connect with people and leave a lasting impression.\n● Additionally, we could collaborate with women leaders from various fields—such as education, healthcare, business, and activism—to conduct seminars and talk shows. These events can emphasize the importance of voting as a means to safeguard their rights, ensure better safety measures..\nThat seems good. To mea"
    }
  ],
  "recommendations": [
    "For rural outreach, we could partner with Naari Sangathans,",
    "In urban areas, we could organize campaigns within",
    "Additionally, we could collaborate with women leaders from"
  ],
  "metricsAndGuardrails": {
    "northStar": "Primary Policy / Operational Objective Metric (Nation with NaMo)",
    "leading": [
      "Target cohort participation / throughput",
      "Bottleneck conversion %"
    ],
    "guardrails": [
      "Implementation cost & fairness",
      "Unintended gaming / backlash"
    ]
  },
  "synthesisScript": "For Nation with NaMo’s Increasing Women Voter Turnout case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: For rural outreach, we could partner with Naari Sangathans, We will validate success via Primary Policy / Operational Objective Metric (Nation with NaMo) while guarding against Implementation cost & fairness.",
  "interviewerTrap": "Panicking because no textbook framework matches—or forcing a Profitability/4Ps template onto a puzzle that needs First Principles!",
  "variations": [
    {
      "question": "How would your recommendation change if Nation with NaMo had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Unconventional",
    "correctFramework": "First Principles Objective Equation → MECE Drivers & Constraints → Impact Prioritization",
    "structureOptions": [
      {
        "label": "Clarify Objective → Build a Custom First-Principles Equation → Split MECE Drivers → Prioritize High-Impact Levers",
        "correct": true,
        "feedback": "Gold standard for Unconventional cases! Custom MECE equations beat forced templates."
      },
      {
        "label": "Force Porter’s Five Forces onto a public-policy or personal dilemma",
        "correct": false,
        "feedback": "Cookie-cutter frameworks look robotic when the prompt is non-standard."
      },
      {
        "label": "Give up because no memorized acronym fits",
        "correct": false,
        "feedback": "Unconventional cases specifically reward calm First-Principles structuring."
      }
    ],
    "decisionQuiz": {
      "question": "When an interviewer throws an Unconventional puzzle with no standard template, what wins?",
      "options": [
        {
          "label": "Translating the real-world objective into a simple First-Principles MECE equation",
          "correct": true,
          "feedback": "Exactly! Break the outcome into clean, non-overlapping drivers."
        },
        {
          "label": "Reciting SWOT + PESTEL regardless of fit",
          "correct": false,
          "feedback": "Generic acronyms fail unconventional prompts."
        },
        {
          "label": "Guessing one random answer immediately",
          "correct": false,
          "feedback": "Always structure before answering."
        }
      ]
    }
  }
},
{
  "id": "ktc-47-old-winery-valuation-strategy",
  "title": "Old Winery Valuation & Strategy",
  "company": "Bain & Company",
  "source": "KTC Casebook 2026",
  "track": "Consulting",
  "category": "Unconventional",
  "difficulty": 4,
  "isStarter": false,
  "tags": [
    "Bain & Company",
    "Unconventional",
    "Consulting"
  ],
  "prompt": "Old Winery You’ve inherited the \"Old Winery,\" a family-owned vineyard that’s been passed down for five generations since the 16th century.",
  "clarifyingQuestions": [
    {
      "q": "Are we selling the whole produce as wine or some produce as grapes as well?",
      "a": "Click here to give a mock interview Only 1⁄4 of the harvest is made into wine by the winery; the rest is sold as grapes.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "What is the target size of the wine bottles we will use?",
      "a": "We are targeting the wine bottles at 0.75 l. Why don't you come up with some strategy regarding the core problem?",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "We are targeting the wine bottles at 0.75 l. Why don't you come up with some strategy regarding the core problem?",
      "a": "Sure. Give me a couple of minutes, and I will be back with the overall strategy.",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "First Principles Objective Equation → MECE Drivers & Constraints → Impact Prioritization",
  "coreEquation": "Target Outcome = ∑ (MECE Stakeholder / Funnel / Operational Drivers) Subject to Constraints",
  "strategyOverview": "Approach Old Winery Valuation & Strategy (Bain & Company) using a Unconventional structure: start by confirming the business objective and scope, decompose the problem cleanly along First Principles Objective Equation → MECE Drivers & Constraints → Impact Prioritization, and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Old Winery Valuation & Strategy — First-Principles Tree",
    "valueText": "Custom MECE",
    "children": [
      {
        "label": "1. Define Objective & Stakeholder Constraints",
        "valueText": "Scope"
      },
      {
        "label": "2. Primary Equation / Behavioral & Structural Drivers",
        "valueText": "MECE Buckets",
        "highlight": true
      },
      {
        "label": "3. High-Leverage Interventions & Second-Order Risks",
        "valueText": "Action Plan"
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Candidate",
      "prompt": "Old Winery You’ve inherited the \"Old Winery,\" a family-owned vineyard that’s been passed down for five generat",
      "detail": "Old Winery You’ve inherited the \"Old Winery,\" a family-owned vineyard that’s been passed down for five generations since the 16th century.\nYour grandfather, who resisted change, left the management to a young winemaker. Due to its low profile, demand for the winery’s wine is currently low. With little experience in winemaking, you don’t plan to manage the business directly but are excited about owning it. How would you give the winery a fresh boost while preserving its heritage?\nThank you for the case. Before moving ahead with the overall strategy, I would like to understand the winery, the area of land used for "
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "The vine stocks are in good condition in terms of age and care.",
      "detail": "The vine stocks are in good condition in terms of age and care.\nAre we selling the whole produce as wine or some produce as grapes as well?\nClick here to give a mock interview Only 1⁄4 of the harvest is made into wine by the winery; the rest is sold as grapes.\nGood question. 1 kg of grapes yields usually between 0.4 and 0.8 l of wine. For a small and semi-professional winery like yours, yields are below average. 1-meter of Vine provides about 3 kg of grapes for wine production."
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "That sounds like a good start to begin with, please go ahead.",
      "detail": "That sounds like a good start to begin with, please go ahead.\nWhat is the target size of the wine bottles we will use?\nWe are targeting the wine bottles at 0.75 l. Why don't you come up with some strategy regarding the core problem?\nSure. Give me a couple of minutes, and I will be back with the overall strategy."
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "Sure. Take your time.",
      "detail": "Sure. Take your time.\nOld Winery Thank you. Here is my overall strategy. First, I will look at the potential number of wine bottles that can be made using Vine.\nThen, I will cover the qualitative factor as the feasibility of establishing the value chain, which includes cultivation, harvesting, vinification, bottling, and sales, and the Quantitative factors, such as pricing, revenue, and cost.\nYour structure seems good. Why don't you go ahead?"
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "So, for calculating the total bottles, I will use the formula (Total grapes produced (kg) per hectare×Number o",
      "detail": "So, for calculating the total bottles, I will use the formula (Total grapes produced (kg) per hectare×Number of hectares×Wine produced per kg of grapes)/(Volume of each bottle).\nSeems fine. Go ahead with your assumptions and calculations.\nFor that, I would assume Vines per area: approx. 2 m vines per 2 x 2 m2 = 4 m2.\nThe quantity of grapes per area is 2/4 m/m2 x 3 kg/m = 1.5 kg/m2. 1 hectare = 10,000 m2. So, the quantity of grapes per hectare will be 15,000 kg/hectare. Total bottles = (15,000 * 11 * 0.5 L)/0.75 = 1,10,000 / year Click here to give a mock interview Each vine occupies 4 square meters (2 m × 2 m), y"
    }
  ],
  "recommendations": [
    "Prioritize the highest-impact P0 bottleneck identified in Old Winery Valuation & Strategy before secondary optimizations.",
    "Pilot the top intervention in a controlled cohort/region with clear North Star and guardrail tracking.",
    "Scale rollout only after verifying unit economics and zero adverse second-order effects."
  ],
  "metricsAndGuardrails": {
    "northStar": "Primary Policy / Operational Objective Metric (Bain & Company)",
    "leading": [
      "Target cohort participation / throughput",
      "Bottleneck conversion %"
    ],
    "guardrails": [
      "Implementation cost & fairness",
      "Unintended gaming / backlash"
    ]
  },
  "synthesisScript": "For Bain & Company’s Old Winery Valuation & Strategy case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Prioritize the highest-impact P0 bottleneck identified in Old Winery Valuation & Strategy before secondary optimizations. We will validate success via Primary Policy / Operational Objective Metric (Bain & Company) while guarding against Implementation cost & fairness.",
  "interviewerTrap": "Panicking because no textbook framework matches—or forcing a Profitability/4Ps template onto a puzzle that needs First Principles!",
  "variations": [
    {
      "question": "How would your recommendation change if Bain & Company had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Unconventional",
    "correctFramework": "First Principles Objective Equation → MECE Drivers & Constraints → Impact Prioritization",
    "structureOptions": [
      {
        "label": "Clarify Objective → Build a Custom First-Principles Equation → Split MECE Drivers → Prioritize High-Impact Levers",
        "correct": true,
        "feedback": "Gold standard for Unconventional cases! Custom MECE equations beat forced templates."
      },
      {
        "label": "Force Porter’s Five Forces onto a public-policy or personal dilemma",
        "correct": false,
        "feedback": "Cookie-cutter frameworks look robotic when the prompt is non-standard."
      },
      {
        "label": "Give up because no memorized acronym fits",
        "correct": false,
        "feedback": "Unconventional cases specifically reward calm First-Principles structuring."
      }
    ],
    "decisionQuiz": {
      "question": "When an interviewer throws an Unconventional puzzle with no standard template, what wins?",
      "options": [
        {
          "label": "Translating the real-world objective into a simple First-Principles MECE equation",
          "correct": true,
          "feedback": "Exactly! Break the outcome into clean, non-overlapping drivers."
        },
        {
          "label": "Reciting SWOT + PESTEL regardless of fit",
          "correct": false,
          "feedback": "Generic acronyms fail unconventional prompts."
        },
        {
          "label": "Guessing one random answer immediately",
          "correct": false,
          "feedback": "Always structure before answering."
        }
      ]
    }
  }
},
{
  "id": "ktc-48-relationship-dilemma-framework",
  "title": "Relationship Dilemma Framework",
  "company": "PwC",
  "source": "KTC Casebook 2026",
  "track": "Consulting",
  "category": "Unconventional",
  "difficulty": 4,
  "isStarter": false,
  "tags": [
    "PwC",
    "Unconventional",
    "Consulting"
  ],
  "prompt": "Relationship Dilemma Suppose you get an internship at XYZ firm for 6 months.",
  "clarifyingQuestions": [
    {
      "q": "During this time, you also have a boyfriend/girlfriend, and this duration could possibly create conflicts in your relationship. How would you think about strategies to avoid this?",
      "a": "Thank you for the case. Before I structure my response, could I ask a few clarifying questions?",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Thank you for the case. Before I structure my response, could I ask a few clarifying questions?",
      "a": "Sure, go ahead.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "First, should I assume this is a college internship where I’m still a student balancing classes, or more of a professional corporate internship where it’s treated like a full-time job?",
      "a": "Good question. Assume it’s a professional corporate internship, more like a full-time role, with long hours.",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "First Principles Objective Equation → MECE Drivers & Constraints → Impact Prioritization",
  "coreEquation": "Target Outcome = ∑ (MECE Stakeholder / Funnel / Operational Drivers) Subject to Constraints",
  "strategyOverview": "Approach Relationship Dilemma Framework (PwC) using a Unconventional structure: start by confirming the business objective and scope, decompose the problem cleanly along First Principles Objective Equation → MECE Drivers & Constraints → Impact Prioritization, and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Relationship Dilemma Framework — First-Principles Tree",
    "valueText": "Custom MECE",
    "children": [
      {
        "label": "1. Define Objective & Stakeholder Constraints",
        "valueText": "Scope"
      },
      {
        "label": "2. Primary Equation / Behavioral & Structural Drivers",
        "valueText": "MECE Buckets",
        "highlight": true
      },
      {
        "label": "3. High-Leverage Interventions & Second-Order Risks",
        "valueText": "Action Plan"
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Candidate",
      "prompt": "Relationship Dilemma Suppose you get an internship at XYZ firm for 6 months.",
      "detail": "Relationship Dilemma Suppose you get an internship at XYZ firm for 6 months.\nDuring this time, you also have a boyfriend/girlfriend, and this duration could possibly create conflicts in your relationship. How would you think about strategies to avoid this?\nThank you for the case. Before I structure my response, could I ask a few clarifying questions?\nFirst, should I assume this is a college internship where I’m still a student balancing classes, or more of a professional corporate internship where it’s treated like a full-time job?"
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "Good question. Assume it’s a professional corporate internship, more like a full-time role, with long hours.",
      "detail": "Good question. Assume it’s a professional corporate internship, more like a full-time role, with long hours.\nClick here to give a mock interview Understood. Second, are we assuming my partner is also in college/early career, or are they working full-time? This could affect availability and expectations.\nAssume your partner is also working, so both have busy schedules.\nGot it. And finally, is this relationship long-distance during the internship, or are both partners in the same city?"
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "Let’s assume same city, but time availability is the main constraint.",
      "detail": "Let’s assume same city, but time availability is the main constraint.\nPerfect, thank you. In that case, I’d like to divide my strategy into three stages before the project, during the project, and after the project.\nRelationship Dilemma Before the internship begins, I’d focus on setting the right foundation. That means having an open conversation with my partner about the demands of the next six months acknowledging that time may be limited, but also reinforcing that the relationship remains important. I’d also make sure we spend quality time together before the internship kicks off whether that’s a short trip, c"
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "During the internship is where challenges are most likely. My approach would be to maintain consistent, realis",
      "detail": "During the internship is where challenges are most likely. My approach would be to maintain consistent, realistic communication despite the heavy workload.\nClick here to give a mock interview That could be small gestures like a quick text in the morning, a five-minute call at night, or sharing an interesting moment from my day. I’d also consciously involve my partner by sharing what I’m learning or asking their perspective on challenges, so they feel included in my journey instead of left out. At the same time, I’d make sure to block some personal time — maybe a weekend evening that’s reserved exclusively for the"
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "Relationship Dilemma Nice. And once the internship is complete?",
      "detail": "Relationship Dilemma Nice. And once the internship is complete?\nOnce the internship ends, I’d focus on reconnecting fully. That could mean planning a trip, dedicating more time to shared activities, or simply being more present and engaged. Just as importantly, I’d reflect with my partner on how we handled the six months: where we did well, and where we struggled. This reflection makes the relationship stronger and builds resilience, so that if similar demanding situations arise in the future like longer projects or relocations, we’ll already have strategies in place to deal with them.\nNicely put. Can you summari"
    }
  ],
  "recommendations": [
    "Prioritize the highest-impact P0 bottleneck identified in Relationship Dilemma Framework before secondary optimizations.",
    "Pilot the top intervention in a controlled cohort/region with clear North Star and guardrail tracking.",
    "Scale rollout only after verifying unit economics and zero adverse second-order effects."
  ],
  "metricsAndGuardrails": {
    "northStar": "Primary Policy / Operational Objective Metric (PwC)",
    "leading": [
      "Target cohort participation / throughput",
      "Bottleneck conversion %"
    ],
    "guardrails": [
      "Implementation cost & fairness",
      "Unintended gaming / backlash"
    ]
  },
  "synthesisScript": "For PwC’s Relationship Dilemma Framework case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Prioritize the highest-impact P0 bottleneck identified in Relationship Dilemma Framework before secondary optimizations. We will validate success via Primary Policy / Operational Objective Metric (PwC) while guarding against Implementation cost & fairness.",
  "interviewerTrap": "Panicking because no textbook framework matches—or forcing a Profitability/4Ps template onto a puzzle that needs First Principles!",
  "variations": [
    {
      "question": "How would your recommendation change if PwC had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Unconventional",
    "correctFramework": "First Principles Objective Equation → MECE Drivers & Constraints → Impact Prioritization",
    "structureOptions": [
      {
        "label": "Clarify Objective → Build a Custom First-Principles Equation → Split MECE Drivers → Prioritize High-Impact Levers",
        "correct": true,
        "feedback": "Gold standard for Unconventional cases! Custom MECE equations beat forced templates."
      },
      {
        "label": "Force Porter’s Five Forces onto a public-policy or personal dilemma",
        "correct": false,
        "feedback": "Cookie-cutter frameworks look robotic when the prompt is non-standard."
      },
      {
        "label": "Give up because no memorized acronym fits",
        "correct": false,
        "feedback": "Unconventional cases specifically reward calm First-Principles structuring."
      }
    ],
    "decisionQuiz": {
      "question": "When an interviewer throws an Unconventional puzzle with no standard template, what wins?",
      "options": [
        {
          "label": "Translating the real-world objective into a simple First-Principles MECE equation",
          "correct": true,
          "feedback": "Exactly! Break the outcome into clean, non-overlapping drivers."
        },
        {
          "label": "Reciting SWOT + PESTEL regardless of fit",
          "correct": false,
          "feedback": "Generic acronyms fail unconventional prompts."
        },
        {
          "label": "Guessing one random answer immediately",
          "correct": false,
          "feedback": "Always structure before answering."
        }
      ]
    }
  }
},
{
  "id": "ktc-49-user-analysis-deep-dive",
  "title": "User Analysis Deep-Dive",
  "company": "Zomato",
  "source": "KTC Casebook 2026",
  "track": "Consulting",
  "category": "Unconventional",
  "difficulty": 4,
  "isStarter": false,
  "tags": [
    "Zomato",
    "Unconventional",
    "Consulting"
  ],
  "prompt": "User Analysis Click here to give a mock interview You’re analyzing user behavior on the Zomato app. Can you plot a graph of Conversion Rate vs. Time Spent and walk me through what you see?",
  "clarifyingQuestions": [
    {
      "q": "What do you infer about the users from the two maximas?",
      "a": "First Peak–Users who already know what they want or decide quickly.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "What do you infer about the users from the two dips?",
      "a": "First Dip – Delayed deciders and light explorers.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "User Analysis When would a user switch to a competitor?",
      "a": "They’re most likely to switch if:",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "First Principles Objective Equation → MECE Drivers & Constraints → Impact Prioritization",
  "coreEquation": "Target Outcome = ∑ (MECE Stakeholder / Funnel / Operational Drivers) Subject to Constraints",
  "strategyOverview": "Approach User Analysis Deep-Dive (Zomato) using a Unconventional structure: start by confirming the business objective and scope, decompose the problem cleanly along First Principles Objective Equation → MECE Drivers & Constraints → Impact Prioritization, and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "User Analysis Deep-Dive — First-Principles Tree",
    "valueText": "Custom MECE",
    "children": [
      {
        "label": "1. Define Objective & Stakeholder Constraints",
        "valueText": "Scope"
      },
      {
        "label": "2. Primary Equation / Behavioral & Structural Drivers",
        "valueText": "MECE Buckets",
        "highlight": true
      },
      {
        "label": "3. High-Leverage Interventions & Second-Order Risks",
        "valueText": "Action Plan"
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Interviewer",
      "prompt": "User Analysis Click here to give a mock interview You’re analyzing user behavior on the Zomato app. Can you pl",
      "detail": "User Analysis Click here to give a mock interview You’re analyzing user behavior on the Zomato app. Can you plot a graph of Conversion Rate vs. Time Spent and walk me through what you see?\nWe notice two local maxima with a dip in between.\nWhat do you infer about the users from the two maximas?\nFirst Peak–Users who already know what they want or decide quickly."
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "Characteristics: Higher loyalty, low offer sensitivity, short decision cycles.",
      "detail": "Characteristics: Higher loyalty, low offer sensitivity, short decision cycles.\nSecond Peak – High exploration deciders and price-sensitive users Characteristics: Menu explorers, value maximizers, time-insensitive.\nWhat do you infer about the users from the two dips?\nFirst Dip – Delayed deciders and light explorers."
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "Second Dip – Decision fatigue, overwhelmed explorers, or switch-outs.",
      "detail": "Second Dip – Decision fatigue, overwhelmed explorers, or switch-outs.\nUser Analysis When would a user switch to a competitor?\nThey’re most likely to switch if:\n● Competitor offers better deals/discounts."
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "● Delivery is significantly faster.",
      "detail": "● Delivery is significantly faster.\n● More variety in restaurants/cuisines.\n● Higher service ratings or smoother app experience.\nThat’s why our strategy needs personalized offers, competitive delivery SLAs, and UX optimization to reduce churn at decision points."
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "What Strategies will you recommend according to the user behaviour?",
      "detail": "What Strategies will you recommend according to the user behaviour?\n● First Peak : One-click reordering, “Order Again” section, and push notifications for favorites.\n● First Dip : Mid-session nudges, abandoned-cart reminders, and “recently viewed” quick links.\nClick here to give a mock interview ● Second Peak : Dynamic personalized offers, bundle deals, deal-comparison widgets."
    }
  ],
  "recommendations": [
    "Second Dip : Rescue prompts, time-limited flash deals,",
    "Quick deciders are highly sensitive — even a small delay",
    "Price-sensitive comparers are moderately sensitive —",
    "Decision-fatigue users are less sensitive but long ETAs"
  ],
  "metricsAndGuardrails": {
    "northStar": "Primary Policy / Operational Objective Metric (Zomato)",
    "leading": [
      "Target cohort participation / throughput",
      "Bottleneck conversion %"
    ],
    "guardrails": [
      "Implementation cost & fairness",
      "Unintended gaming / backlash"
    ]
  },
  "synthesisScript": "For Zomato’s User Analysis Deep-Dive case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Second Dip : Rescue prompts, time-limited flash deals, We will validate success via Primary Policy / Operational Objective Metric (Zomato) while guarding against Implementation cost & fairness.",
  "interviewerTrap": "Panicking because no textbook framework matches—or forcing a Profitability/4Ps template onto a puzzle that needs First Principles!",
  "variations": [
    {
      "question": "How would your recommendation change if Zomato had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Unconventional",
    "correctFramework": "First Principles Objective Equation → MECE Drivers & Constraints → Impact Prioritization",
    "structureOptions": [
      {
        "label": "Clarify Objective → Build a Custom First-Principles Equation → Split MECE Drivers → Prioritize High-Impact Levers",
        "correct": true,
        "feedback": "Gold standard for Unconventional cases! Custom MECE equations beat forced templates."
      },
      {
        "label": "Force Porter’s Five Forces onto a public-policy or personal dilemma",
        "correct": false,
        "feedback": "Cookie-cutter frameworks look robotic when the prompt is non-standard."
      },
      {
        "label": "Give up because no memorized acronym fits",
        "correct": false,
        "feedback": "Unconventional cases specifically reward calm First-Principles structuring."
      }
    ],
    "decisionQuiz": {
      "question": "When an interviewer throws an Unconventional puzzle with no standard template, what wins?",
      "options": [
        {
          "label": "Translating the real-world objective into a simple First-Principles MECE equation",
          "correct": true,
          "feedback": "Exactly! Break the outcome into clean, non-overlapping drivers."
        },
        {
          "label": "Reciting SWOT + PESTEL regardless of fit",
          "correct": false,
          "feedback": "Generic acronyms fail unconventional prompts."
        },
        {
          "label": "Guessing one random answer immediately",
          "correct": false,
          "feedback": "Always structure before answering."
        }
      ]
    }
  }
},
{
  "id": "ktc-50-well-being-healthcare-strategy",
  "title": "Well Being Healthcare Strategy",
  "company": "McKinsey & Company",
  "source": "KTC Casebook 2026",
  "track": "Consulting",
  "category": "Unconventional",
  "difficulty": 4,
  "isStarter": false,
  "tags": [
    "McKinsey & Company",
    "Unconventional",
    "Consulting"
  ],
  "prompt": "Well Being Health Care Your client is Well Being (WB), a private healthcare company in Germany. They operate 10 hospitals in Germany (in comparison to 1,000 public hospitals). They are considering a proposal from the Governmental National Healthcare (NHC) to outsource some of their patients to WB. Do you have any questions before we dive into this?",
  "clarifyingQuestions": [
    {
      "q": "Yes, just to clarify, what is WB’s current position in the market? Are they looking to grow, or is this more about maintaining their position?",
      "a": "WB is looking to grow its market presence and improve profitability.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Understood. What size are WB’s hospitals compared to public ones, and what kind of services do they offer?",
      "a": "WB’s hospitals are about half the size of public ones, and they don’t offer Accident and Emergency (ER) services. Their revenue comes from patients paying through private insurance or by cash.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Click here to give a mock interview Got it. So, with NHC wanting to outsource patients to WB, are there any specific patient types or services involved in this offer?",
      "a": "No specific patient types mentioned yet, but the idea is for WB to take on some overflow patients from NHC, which could potentially increase WB’s patient base and revenue.",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "First Principles Objective Equation → MECE Drivers & Constraints → Impact Prioritization",
  "coreEquation": "Target Outcome = ∑ (MECE Stakeholder / Funnel / Operational Drivers) Subject to Constraints",
  "strategyOverview": "Approach Well Being Healthcare Strategy (McKinsey & Company) using a Unconventional structure: start by confirming the business objective and scope, decompose the problem cleanly along First Principles Objective Equation → MECE Drivers & Constraints → Impact Prioritization, and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Well Being Healthcare Strategy — First-Principles Tree",
    "valueText": "Custom MECE",
    "children": [
      {
        "label": "1. Define Objective & Stakeholder Constraints",
        "valueText": "Scope"
      },
      {
        "label": "2. Primary Equation / Behavioral & Structural Drivers",
        "valueText": "MECE Buckets",
        "highlight": true
      },
      {
        "label": "3. High-Leverage Interventions & Second-Order Risks",
        "valueText": "Action Plan"
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Interviewer",
      "prompt": "Well Being Health Care Your client is Well Being (WB), a private healthcare company in Germany. They operate 1",
      "detail": "Well Being Health Care Your client is Well Being (WB), a private healthcare company in Germany. They operate 10 hospitals in Germany (in comparison to 1,000 public hospitals). They are considering a proposal from the Governmental National Healthcare (NHC) to outsource some of their patients to WB. Do you have any questions before we dive into this?\nYes, just to clarify, what is WB’s current position in the market? Are they looking to grow, or is this more about maintaining their position?\nWB is looking to grow its market presence and improve profitability.\nCurrently, they hold less than 1% of the market, with rev"
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "Understood. What size are WB’s hospitals compared to public ones, and what kind of services do they offer?",
      "detail": "Understood. What size are WB’s hospitals compared to public ones, and what kind of services do they offer?\nWB’s hospitals are about half the size of public ones, and they don’t offer Accident and Emergency (ER) services. Their revenue comes from patients paying through private insurance or by cash.\nClick here to give a mock interview Got it. So, with NHC wanting to outsource patients to WB, are there any specific patient types or services involved in this offer?\nNo specific patient types mentioned yet, but the idea is for WB to take on some overflow patients from NHC, which could potentially increase WB’s patient"
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "That helps. Now, what can you tell me about the overall characteristics of the healthcare market in Germany? H",
      "detail": "That helps. Now, what can you tell me about the overall characteristics of the healthcare market in Germany? How competitive is it?\nThe degree of rivalry in the market is high. NHC is the dominant player, and other private hospital groups also add to the competition. This results in low profit margins for smaller players like WB.\nI see. So, WB would need to find a way to stand out and differentiate themselves from competitors. They could do it by focusing on their brand, improving quality of service, reducing price, reducing waiting times, and possibly expanding to new locations or targeting new demographics. Wha"
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "Understood. What about the patients? How much power do they have in this market?",
      "detail": "Understood. What about the patients? How much power do they have in this market?\nPatients have high buyer power because they can easily choose other hospitals, including public ones. So, WB must differentiate itself to attract and retain these patients.\nMakes sense. Are there any substitutes to healthcare services that WB should be concerned about? And in terms of new entrants, are there significant barriers to entry?\nThe entry barriers are medium. Entering the healthcare market requires significant time, investment, and expertise. However, it’s not difficult for international healthcare systems to enter the mark"
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "Considering these factors, I think WB could raise these barriers by building hospitals in attractive locations",
      "detail": "Considering these factors, I think WB could raise these barriers by building hospitals in attractive locations and offering competitive prices for its services.\nClick here to give a mock interview Now coming back to the offer, NHC has decided to contract out operations for hip replacements due to long waiting times. What factors should WB consider when deciding whether to accept these new contracts?\nThat’s an interesting opportunity. Could you clarify the scope of these contracts? Are they bulk contracts, and how would they affect WB’s existing operations?\nYes, they are bulk contracts. NHC would send a significan"
    }
  ],
  "recommendations": [
    "Prioritize the highest-impact P0 bottleneck identified in Well Being Healthcare Strategy before secondary optimizations.",
    "Pilot the top intervention in a controlled cohort/region with clear North Star and guardrail tracking.",
    "Scale rollout only after verifying unit economics and zero adverse second-order effects."
  ],
  "metricsAndGuardrails": {
    "northStar": "Primary Policy / Operational Objective Metric (McKinsey & Company)",
    "leading": [
      "Target cohort participation / throughput",
      "Bottleneck conversion %"
    ],
    "guardrails": [
      "Implementation cost & fairness",
      "Unintended gaming / backlash"
    ]
  },
  "synthesisScript": "For McKinsey & Company’s Well Being Healthcare Strategy case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Prioritize the highest-impact P0 bottleneck identified in Well Being Healthcare Strategy before secondary optimizations. We will validate success via Primary Policy / Operational Objective Metric (McKinsey & Company) while guarding against Implementation cost & fairness.",
  "interviewerTrap": "Panicking because no textbook framework matches—or forcing a Profitability/4Ps template onto a puzzle that needs First Principles!",
  "variations": [
    {
      "question": "How would your recommendation change if McKinsey & Company had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Unconventional",
    "correctFramework": "First Principles Objective Equation → MECE Drivers & Constraints → Impact Prioritization",
    "structureOptions": [
      {
        "label": "Clarify Objective → Build a Custom First-Principles Equation → Split MECE Drivers → Prioritize High-Impact Levers",
        "correct": true,
        "feedback": "Gold standard for Unconventional cases! Custom MECE equations beat forced templates."
      },
      {
        "label": "Force Porter’s Five Forces onto a public-policy or personal dilemma",
        "correct": false,
        "feedback": "Cookie-cutter frameworks look robotic when the prompt is non-standard."
      },
      {
        "label": "Give up because no memorized acronym fits",
        "correct": false,
        "feedback": "Unconventional cases specifically reward calm First-Principles structuring."
      }
    ],
    "decisionQuiz": {
      "question": "When an interviewer throws an Unconventional puzzle with no standard template, what wins?",
      "options": [
        {
          "label": "Translating the real-world objective into a simple First-Principles MECE equation",
          "correct": true,
          "feedback": "Exactly! Break the outcome into clean, non-overlapping drivers."
        },
        {
          "label": "Reciting SWOT + PESTEL regardless of fit",
          "correct": false,
          "feedback": "Generic acronyms fail unconventional prompts."
        },
        {
          "label": "Guessing one random answer immediately",
          "correct": false,
          "feedback": "Always structure before answering."
        }
      ]
    }
  }
},
{
  "id": "srcrc-fast-food-chain",
  "title": "Fast Food QSR Chain Revenue Decline",
  "company": "QSR Chain",
  "source": "SRCRC Casebook 2025",
  "track": "Consulting",
  "category": "Profitability",
  "difficulty": 1,
  "isStarter": true,
  "tags": [
    "SRCRC",
    "Profitability",
    "QSR",
    "Revenue Decline",
    "NPS"
  ],
  "prompt": "Diagnosing Revenue Decline for a Leading Quick Service Restaurant (QSR) Chain The business is a large QSR chain with a nationwide footprint and a fairly standard fast-food menu?",
  "clarifyingQuestions": [
    {
      "q": "How steep is the decline, and is it across all stores or specific regions?",
      "a": "Revenue dropped ~15% last quarter broad-based across markets, with stable prices and flat competitor activity.",
      "why": "Points to an internal traffic/customer-experience drop rather than local price wars."
    }
  ],
  "frameworkUsed": "Revenue Tree (Customers × Average Spend) → Internal Loyalty/NPS & Store Operations Audit",
  "coreEquation": "Store Revenue = Footfall/Transactions × Average Ticket Size",
  "strategyOverview": "Break Revenue = Number of Customers × Average Spend. Since prices are flat and customer transactions fell ~12% alongside a dip in NPS, investigate internal store/loyalty changes rather than macro shocks. Inspect loyalty program changes, queue wait times, order accuracy, and menu freshness.",
  "tree": {
    "label": "Fast Food QSR Chain Revenue Decline — Profitability Tree",
    "valueText": "Rev vs Cost",
    "children": [
      {
        "label": "Revenue Side (Price × Volume × Product/Channel Mix)",
        "valueText": "Internal vs External",
        "highlight": true
      },
      {
        "label": "Cost Side (Procurement → Mfg → Logistics → SG&A)",
        "valueText": "Fixed vs Variable",
        "highlight": true
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Interviewer",
      "prompt": "FAST FOOD CHAIN Diagnosing Revenue Decline for a Leading Quick Service Restaurant (QSR) Chain The business is ",
      "detail": "FAST FOOD CHAIN Diagnosing Revenue Decline for a Leading Quick Service Restaurant (QSR) Chain The business is a large QSR chain with a nationwide footprint and a fairly standard fast-food menu?\nBefore we dive in, I’d like to clarify a few points:\n1 . How much has revenue declined, and over what time frame? 2 . Is the drop consistent across locations or concentrated in specific regions? 3 . Have there been any changes in product offerings, pricing, or competitor activity during this period?\n1 . Revenue has dropped ~15% in the last quarter."
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "2 . The decline is broad-based across most markets and stores. 3 . No major changes in offerings or pricing; c",
      "detail": "2 . The decline is broad-based across most markets and stores. 3 . No major changes in offerings or pricing; competitor activity is mostly stable.\nGreat. I’d like to break the problem down using a simple formula:\nRevenue = Number of Customers × Average Spend per Customer.\nSounds good, what will be the topics you will focus on?"
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "I’ll explore key drivers which are as follows and divided into 5 parts :",
      "detail": "I’ll explore key drivers which are as follows and divided into 5 parts :\n1.Customer Experience 2.Loyalty 3.Marketing effectiveness 4.Operational issues 5.External factors Does that sound good?\n1. Customer Traffic – Has footfall or transaction count dropped?\n2. Spend – Are customers spending less per visit?"
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "Yes, customer traffic has gone down significantly, about 12% fewer transactions per store per month compared t",
      "detail": "Yes, customer traffic has gone down significantly, about 12% fewer transactions per store per month compared to last quarter.\nUnderstood. Has the brand run any customer feedback surveys or NPS tracking recently? (had a brief discussion about what NPS is and how it is relevant here; interviewer was impressed by the mention of it) Yes, and interestingly, NPS has dipped slightly. Several customers mentioned frustration with the loyalty program.\nThat’s worth exploring. Can you tell me more about the loyalty program? Has there been a recent change?\n100 33 FAST FOOD CHAIN Diagnosing Revenue Decline for a Leading Quick "
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "Old points were voided, Customers can redeem only a limited number of points per month, And points expire afte",
      "detail": "Old points were voided, Customers can redeem only a limited number of points per month, And points expire after 30 days.\nI see. That sounds like a major devaluation of the rewards system. Has the company communicated this change to customers clearly?\nCommunication was sent, but mostly via email but many customers didn’t notice or fully understand the implications until they tried to redeem points (had pointed out how the use of a singular medium is not as effective and had recommended using app notifications in place of emails).\nBased on what I’ve heard so far, my hypothesis is that the change in the loyalty prog"
    }
  ],
  "recommendations": [
    "Pilot Testing: Before rolling out major changes, test them with a small segment",
    "Re-engage custo mers with bonus/reinstated points.",
    "Communicate changes better (app, in-store, email).",
    "Pilot test before full rollout."
  ],
  "metricsAndGuardrails": {
    "northStar": "Gross & EBITDA Margin Recovery (QSR Chain)",
    "leading": [
      "Unit realization vs COGS/unit",
      "Capacity utilization & waste/scrap %"
    ],
    "guardrails": [
      "Customer retention / NPS (don’t over-cut quality)",
      "Market share retention"
    ]
  },
  "synthesisScript": "For QSR Chain’s Fast Food QSR Chain Revenue Decline case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Pilot Testing: Before rolling out major changes, test them with a small segment We will validate success via Gross & EBITDA Margin Recovery (QSR Chain) while guarding against Customer retention / NPS (don’t over-cut quality).",
  "interviewerTrap": "Blaming competitors or slashing menu prices immediately before noticing that customer transactions and NPS both fell due to internal experience/loyalty friction!",
  "variations": [
    {
      "question": "How would your recommendation change if QSR Chain had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Profitability",
    "correctFramework": "Profit = Revenue (Price × Volume × Mix) − Costs (Fixed + Variable along Value Chain)",
    "structureOptions": [
      {
        "label": "Clarify Profit vs Margin & Industry vs Company → Split Revenue (P×V×Mix) vs Value-Chain Costs → Prioritize P0 Fixes",
        "correct": true,
        "feedback": "Classic MBB Profitability structure!"
      },
      {
        "label": "Fire 30% of staff on Minute 2 without reading the P&L",
        "correct": false,
        "feedback": "Never slash costs blindly before knowing whether revenue/mix or raw materials drove the drop."
      },
      {
        "label": "Apply CIRCLES mobile app persona interviews",
        "correct": false,
        "feedback": "CIRCLES is for Product Design, not P&L Profitability diagnosis."
      }
    ],
    "decisionQuiz": {
      "question": "In a Profitability case, why ask immediately if competitors are seeing the same decline?",
      "options": [
        {
          "label": "Separates Industry-wide macro/commodity shocks from Company-specific operational or pricing issues",
          "correct": true,
          "feedback": "Spot on! Instantly cuts the diagnostic tree in half."
        },
        {
          "label": "To copy competitors’ logos",
          "correct": false,
          "feedback": "It isolates internal execution vs external market forces."
        },
        {
          "label": "Because profits don't depend on costs",
          "correct": false,
          "feedback": "Macro input spikes hit the whole industry simultaneously."
        }
      ]
    }
  }
},
{
  "id": "srcrc-medical-implants",
  "title": "Suggestion to Enter Medical Implants Sector",
  "company": "Healthcare / MedTech",
  "source": "SRCRC Casebook 2025",
  "track": "Consulting",
  "category": "Market Entry",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "Healthcare / MedTech",
    "Market Entry",
    "Consulting"
  ],
  "prompt": "SUGGESTION TO ENTER THE MEDICAL IMPLANTS AND ELECTRONICS SECTOR Enter into the medical equipment sector Your client is in the pharmaceuticals business, and in order to accelerate growth, they want to enter the medicals implants and electronics sectors, such as BP monitors. What would you suggest?",
  "clarifyingQuestions": [
    {
      "q": "Let’s focus on the value chain now. Can you break it down quickly?",
      "a": "It can be as follows; demand forecasting, R&D, inbound logistics, processing and manufacturing, market testing, outbound logistics, marketing, post-sale services, and reverse logistics. Under processing & manufacturing, we can have manpower",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Great, and what would this decision be based upon?",
      "a": "It’d be based on dilution of control expected, costs involved, revenue potential, brand value & synergies, and lastly considering any regulations that might hinder the process.",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "Market Attractiveness (TAM/Growth) → Competition & Barriers → Capabilities & Breakeven → Entry Mode",
  "coreEquation": "Go / No-Go = Attractive SOM × Client Right-to-Win × (Breakeven Volume ≤ Achievable Share)",
  "strategyOverview": "Approach Suggestion to Enter Medical Implants Sector (Healthcare / MedTech) using a Market Entry structure: start by confirming the business objective and scope, decompose the problem cleanly along Market Attractiveness (TAM/Growth) → Competition & Barriers → Capabilities & Breakeven → Entry Mode, and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Suggestion to Enter Medical Implants Sector — Market Entry Tree",
    "valueText": "Should & How?",
    "children": [
      {
        "label": "1. Market Attractiveness (TAM/SAM/Growth/Margins)",
        "valueText": "Size Pool",
        "highlight": true
      },
      {
        "label": "2. Competition & Regulatory Barriers (5 Forces/PESTEL)",
        "valueText": "Right to Win"
      },
      {
        "label": "3. Economics (BEP) & Entry Mode (Build / Buy / Partner)",
        "valueText": "Execution",
        "highlight": true
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Interviewer",
      "prompt": "SUGGESTION TO ENTER THE MEDICAL IMPLANTS AND ELECTRONICS SECTOR Enter into the medical equipment sector Your c",
      "detail": "SUGGESTION TO ENTER THE MEDICAL IMPLANTS AND ELECTRONICS SECTOR Enter into the medical equipment sector Your client is in the pharmaceuticals business, and in order to accelerate growth, they want to enter the medicals implants and electronics sectors, such as BP monitors. What would you suggest?\nI’d like to know about our client’s current customers, products they have now and wish to enter into soon."
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "Sure, so customers are doctors only, and the current medicines are prescriptive.",
      "detail": "Sure, so customers are doctors only, and the current medicines are prescriptive.\nThey plan to launch monitors and implants."
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "Got it, lastly, I’d like to know the objective, and the metric basis which we can judge our final decision.",
      "detail": "Got it, lastly, I’d like to know the objective, and the metric basis which we can judge our final decision.\nGood question, our objective is to attain scalability and sustainability for the new products, with motive being profits."
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "Understood, so I have all the facts now. The structure which I propose would help us gauge this situation can ",
      "detail": "Understood, so I have all the facts now. The structure which I propose would help us gauge this situation can be broken down as checking for industry, financial viability, operational feasibility, how to enter, and risks associated. Under financial, we can look at ability to enter and attractiveness, while under operational, we can look at value chain setup, barriers to entry and diversification possibilities.\nLet’s focus on the value chain now. Can you break it down quickly?"
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "It can be as follows; demand forecasting, R&D, inbound logistics, processing and manufacturing, market testing",
      "detail": "It can be as follows; demand forecasting, R&D, inbound logistics, processing and manufacturing, market testing, outbound logistics, marketing, post-sale services, and reverse logistics. Under processing & manufacturing, we can have manpower, plant + property + equipment, and lastly utilities. Overall, under the value chain, we should look for synergies, in terms of costs’ reduction, attaining economies of scale, and technological synergies.\nGreat, and what would this decision be based upon?"
    }
  ],
  "recommendations": [
    "Prioritize the highest-impact P0 bottleneck identified in Suggestion to Enter Medical Implants Sector before secondary optimizations.",
    "Pilot the top intervention in a controlled cohort/region with clear North Star and guardrail tracking.",
    "Scale rollout only after verifying unit economics and zero adverse second-order effects."
  ],
  "metricsAndGuardrails": {
    "northStar": "3-Year NPV / Year-1 SOM Market Share & Payback (Healthcare / MedTech)",
    "leading": [
      "Breakeven volume vs pilot traction",
      "Partner/channel onboarding velocity"
    ],
    "guardrails": [
      "Capex overrun / working capital lockup",
      "Core brand cannibalization"
    ]
  },
  "synthesisScript": "For Healthcare / MedTech’s Suggestion to Enter Medical Implants Sector case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Prioritize the highest-impact P0 bottleneck identified in Suggestion to Enter Medical Implants Sector before secondary optimizations. We will validate success via 3-Year NPV / Year-1 SOM Market Share & Payback (Healthcare / MedTech) while guarding against Capex overrun / working capital lockup.",
  "interviewerTrap": "Saying 'YES enter!' purely because TAM is huge—forgetting competition, regulatory hurdles, breakeven math, and Build vs Buy vs Partner!",
  "variations": [
    {
      "question": "How would your recommendation change if Healthcare / MedTech had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Market Entry",
    "correctFramework": "Market Attractiveness (TAM/Growth) → Competition & Barriers → Capabilities & Breakeven → Entry Mode",
    "structureOptions": [
      {
        "label": "Assess Market Attractiveness → Competition & Barriers → Client Capabilities & BEP → Entry Mode (Build/Buy/Partner)",
        "correct": true,
        "feedback": "Complete Market Entry blueprint covering both Should We and How!"
      },
      {
        "label": "Assume 10% market share automatically and stop at TAM",
        "correct": false,
        "feedback": "TAM without competition, unit economics, and entry mode fails consulting cases."
      },
      {
        "label": "Run a 60-second UI wireframe critique",
        "correct": false,
        "feedback": "Wrong framework for strategic Market Entry."
      }
    ],
    "decisionQuiz": {
      "question": "What are the 3 classic Entry Modes to evaluate at the end of a Market Entry case?",
      "options": [
        {
          "label": "Organic Build (Greenfield), Acquire (M&A), or Partner (Joint Venture / Licensing)",
          "correct": true,
          "feedback": "Yes! Match the mode to speed, regulation, and capital constraints."
        },
        {
          "label": "Discount, Refund, or Shutdown",
          "correct": false,
          "feedback": "Those are tactical levers, not market entry vehicles."
        },
        {
          "label": "RICE, MoSCoW, or Kano",
          "correct": false,
          "feedback": "Those are feature prioritization tools."
        }
      ]
    }
  }
},
{
  "id": "srcrc-airline-pricing",
  "title": "Pricing a 1-Hour Delhi–NY Business Aircraft Fleet",
  "company": "Airline Company",
  "source": "SRCRC Casebook 2025",
  "track": "Consulting",
  "category": "Pricing",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "Airline Company",
    "Pricing",
    "Consulting"
  ],
  "prompt": "Pricing a newly launched 1-Hour Delhi–New York Business Aircraft Fleet Objective of the client and the target customer segments that they are looking at?",
  "clarifyingQuestions": [
    {
      "q": "Objective is profit maximisation and as for customers, why don’t you tell me a few segments which the client should look at?",
      "a": "The possible customers that I can think of are Business CXOs, occupations requiring travel such as consulting, fashion, journalism etc, government embassies and officials and in general the High-income group.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "For pricing, we can take three approaches: cost based, value based and competitor based. Since it is a new offering, I don’t think competitor-based pricing would work. Which other approach would you want me to go with fi",
      "a": "Let’s start value based.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "H owever usually flight expense in consulting is not borne at an individual level rather at the company level. Knowing this, would you like to change something in your approach?",
      "a": "Got it, since it is a company expense, I would like to consider a consultant’s billable hours and charge per hour for the company instead of their salary as a measure of savings. Additionally, the number of consultants that are sent for tra",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "Business Model Check → 3Cs of Pricing (Cost Floor | Competitor Anchor | Value WTP) → Tiering & Test",
  "coreEquation": "Optimal Price ∈ [Unit Cost Floor, Perceived Value WTP Ceiling] Tuned to Elasticity",
  "strategyOverview": "Approach Pricing a 1-Hour Delhi–NY Business Aircraft Fleet (Airline Company) using a Pricing structure: start by confirming the business objective and scope, decompose the problem cleanly along Business Model Check → 3Cs of Pricing (Cost Floor | Competitor Anchor | Value WTP) → Tiering & Test, and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Pricing a 1-Hour Delhi–NY Business Aircraft Fleet — 3Cs Pricing Tree",
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
      "prompt": "AIRLINE COMPANY Pricing a newly launched 1-Hour Delhi–New York Business Aircraft Fleet Objective of the client",
      "detail": "AIRLINE COMPANY Pricing a newly launched 1-Hour Delhi–New York Business Aircraft Fleet Objective of the client and the target customer segments that they are looking at?\nObjective is profit maximisation and as for customers, why don’t you tell me a few segments which the client should look at?"
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "The possible customers that I can think of are Business CXOs, occupations requiring travel such as consulting,",
      "detail": "The possible customers that I can think of are Business CXOs, occupations requiring travel such as consulting, fashion, journalism etc, government embassies and officials and in general the High-income group.\nSounds good. Let us assume management consultants to be the only customers."
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "For pricing, we can take three approaches: cost based, value based and competitor based. Since it is a new off",
      "detail": "For pricing, we can take three approaches: cost based, value based and competitor based. Since it is a new offering, I don’t think competitor-based pricing would work. Which other approach would you want me to go with first?\nLet’s start value based."
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "I would like to take time as a measure of value here since that is the main USP of this fleet. We can take a c",
      "detail": "I would like to take time as a measure of value here since that is the main USP of this fleet. We can take a consultant’s average salary at an hourly basis to see how much income saving equals the time saved in travel and that would give us the upper limit.\nH owever usually flight expense in consulting is not borne at an individual level rather at the company level. Knowing this, would you like to change something in your approach?"
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "Got it, since it is a company expense, I would like to consider a consultant’s billable hours and charge per h",
      "detail": "Got it, since it is a company expense, I would like to consider a consultant’s billable hours and charge per hour for the company instead of their salary as a measure of savings. Additionally, the number of consultants that are sent for travel purposes in a project will also be factored in.\nCorrect. So let us assume that a project has 2 consultants. They leave on Monday and travel back on Friday. The hourly contribution is INR 1000 per consultant."
    }
  ],
  "recommendations": [
    "Prioritize the highest-impact P0 bottleneck identified in Pricing a 1-Hour Delhi–NY Business Aircraft Fleet before secondary optimizations.",
    "Pilot the top intervention in a controlled cohort/region with clear North Star and guardrail tracking.",
    "Scale rollout only after verifying unit economics and zero adverse second-order effects."
  ],
  "metricsAndGuardrails": {
    "northStar": "Net Contribution Margin & Paid ARPU Growth (Airline Company)",
    "leading": [
      "Pricing page → checkout conversion %",
      "Tier upgrade / annual plan share"
    ],
    "guardrails": [
      "Churn / price-complaint rate",
      "Competitive win/loss rate"
    ]
  },
  "synthesisScript": "For Airline Company’s Pricing a 1-Hour Delhi–NY Business Aircraft Fleet case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Prioritize the highest-impact P0 bottleneck identified in Pricing a 1-Hour Delhi–NY Business Aircraft Fleet before secondary optimizations. We will validate success via Net Contribution Margin & Paid ARPU Growth (Airline Company) while guarding against Churn / price-complaint rate.",
  "interviewerTrap": "Using only Cost-Plus markup and ignoring Value-Based WTP, elasticity, cannibalization, or two-sided marketplace effects!",
  "variations": [
    {
      "question": "How would your recommendation change if Airline Company had half the timeline or budget?",
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
  "id": "srcrc-road-transport",
  "title": "Improving Highway Logistical Efficiency (MoRTH)",
  "company": "Ministry of Road Transport",
  "source": "SRCRC Casebook 2025",
  "track": "Consulting",
  "category": "Unconventional",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "Ministry of Road Transport",
    "Unconventional",
    "Consulting"
  ],
  "prompt": "Enhancing Road Logistics for Industrial Transport in India I would like to understand what exactly do we mean by logistical efficiency?",
  "clarifyingQuestions": [
    {
      "q": "Whe n y o u wan t to g o some whe r e , wh a t wi ll e f fic i e ncy b e f o r y o u ?",
      "a": "Okay, so it would be the travel time then. I would also like to understand if we want to improve it in a specific region and why are we suddenly looking at the efficiency- has something changed?",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Okay, so it would be the travel time then. I would also like to understand if we want to improve it in a specific region and why are we suddenly looking at the efficiency- has something changed?",
      "a": "We are looking at improving for overall country and for the second question- I can give you lots of reasons but that is not relevant to the case.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Sure! Under the same, I would like to consider factors that would affect the speed of the vehicles such as width and quality of road, and presence of potholes and speed brakers. Is there something that I am missing out h",
      "a": "N o , i t s ou nd s fin e . Now m ajo r l y the prob le m with r oad s i sn’t s u pp ly but est i mati ng t h e c orrec t demand. H o w wou l d you l ik e t o e s t imate the nu m ber of in t ra-c i ty v e hic le d e mand ?",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "First Principles Objective Equation → MECE Drivers & Constraints → Impact Prioritization",
  "coreEquation": "Target Outcome = ∑ (MECE Stakeholder / Funnel / Operational Drivers) Subject to Constraints",
  "strategyOverview": "Approach Improving Highway Logistical Efficiency (MoRTH) (Ministry of Road Transport) using a Unconventional structure: start by confirming the business objective and scope, decompose the problem cleanly along First Principles Objective Equation → MECE Drivers & Constraints → Impact Prioritization, and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Improving Highway Logistical Efficiency (MoRTH) — First-Principles Tree",
    "valueText": "Custom MECE",
    "children": [
      {
        "label": "1. Define Objective & Stakeholder Constraints",
        "valueText": "Scope"
      },
      {
        "label": "2. Primary Equation / Behavioral & Structural Drivers",
        "valueText": "MECE Buckets",
        "highlight": true
      },
      {
        "label": "3. High-Leverage Interventions & Second-Order Risks",
        "valueText": "Action Plan"
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Interviewer",
      "prompt": "MINISTRY OF ROAD TRANSPORT AND HIGHWAYS Enhancing Road Logistics for Industrial Transport in India I would lik",
      "detail": "MINISTRY OF ROAD TRANSPORT AND HIGHWAYS Enhancing Road Logistics for Industrial Transport in India I would like to understand what exactly do we mean by logistical efficiency?\nWhe n y o u wan t to g o some whe r e , wh a t wi ll e f fic i e ncy b e f o r y o u ?"
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "Okay, so it would be the travel time then. I would also like to understand if we want to improve it in a speci",
      "detail": "Okay, so it would be the travel time then. I would also like to understand if we want to improve it in a specific region and why are we suddenly looking at the efficiency- has something changed?\nWe are looking at improving for overall country and for the second question- I can give you lots of reasons but that is not relevant to the case."
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "I would like to focus at five things for the same. They would be the main road infrastructure – material, pres",
      "detail": "I would like to focus at five things for the same. They would be the main road infrastructure – material, presence of potholes etc., peripheral infrastructure such as traffic lights, assistance from traffic regulators, legal setup such as speed regulations and automobile setup such as number of vehicles, their type, models of vehicles and their maintenance.\nLet us focus on main road infrastructure."
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "Sure! Under the same, I would like to consider factors that would affect the speed of the vehicles such as wid",
      "detail": "Sure! Under the same, I would like to consider factors that would affect the speed of the vehicles such as width and quality of road, and presence of potholes and speed brakers. Is there something that I am missing out here?\nN o , i t s ou nd s fin e . Now m ajo r l y the prob le m with r oad s i sn’t s u pp ly but est i mati ng t h e c orrec t demand. H o w wou l d you l ik e t o e s t imate the nu m ber of in t ra-c i ty v e hic le d e mand ?"
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "Sure! Since the percentage of residential vehicles in intra-city travel is quite less, I would like to estimat",
      "detail": "Sure! Since the percentage of residential vehicles in intra-city travel is quite less, I would like to estimate the demand majorly for commercial vehicles both for travel purpose as well as industrial supply purpose.\nIgnore residential and travel segments."
    }
  ],
  "recommendations": [
    "Prioritize the highest-impact P0 bottleneck identified in Improving Highway Logistical Efficiency (MoRTH) before secondary optimizations.",
    "Pilot the top intervention in a controlled cohort/region with clear North Star and guardrail tracking.",
    "Scale rollout only after verifying unit economics and zero adverse second-order effects."
  ],
  "metricsAndGuardrails": {
    "northStar": "Primary Policy / Operational Objective Metric (Ministry of Road Transport)",
    "leading": [
      "Target cohort participation / throughput",
      "Bottleneck conversion %"
    ],
    "guardrails": [
      "Implementation cost & fairness",
      "Unintended gaming / backlash"
    ]
  },
  "synthesisScript": "For Ministry of Road Transport’s Improving Highway Logistical Efficiency (MoRTH) case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Prioritize the highest-impact P0 bottleneck identified in Improving Highway Logistical Efficiency (MoRTH) before secondary optimizations. We will validate success via Primary Policy / Operational Objective Metric (Ministry of Road Transport) while guarding against Implementation cost & fairness.",
  "interviewerTrap": "Panicking because no textbook framework matches—or forcing a Profitability/4Ps template onto a puzzle that needs First Principles!",
  "variations": [
    {
      "question": "How would your recommendation change if Ministry of Road Transport had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Unconventional",
    "correctFramework": "First Principles Objective Equation → MECE Drivers & Constraints → Impact Prioritization",
    "structureOptions": [
      {
        "label": "Clarify Objective → Build a Custom First-Principles Equation → Split MECE Drivers → Prioritize High-Impact Levers",
        "correct": true,
        "feedback": "Gold standard for Unconventional cases! Custom MECE equations beat forced templates."
      },
      {
        "label": "Force Porter’s Five Forces onto a public-policy or personal dilemma",
        "correct": false,
        "feedback": "Cookie-cutter frameworks look robotic when the prompt is non-standard."
      },
      {
        "label": "Give up because no memorized acronym fits",
        "correct": false,
        "feedback": "Unconventional cases specifically reward calm First-Principles structuring."
      }
    ],
    "decisionQuiz": {
      "question": "When an interviewer throws an Unconventional puzzle with no standard template, what wins?",
      "options": [
        {
          "label": "Translating the real-world objective into a simple First-Principles MECE equation",
          "correct": true,
          "feedback": "Exactly! Break the outcome into clean, non-overlapping drivers."
        },
        {
          "label": "Reciting SWOT + PESTEL regardless of fit",
          "correct": false,
          "feedback": "Generic acronyms fail unconventional prompts."
        },
        {
          "label": "Guessing one random answer immediately",
          "correct": false,
          "feedback": "Always structure before answering."
        }
      ]
    }
  }
},
{
  "id": "srcrc-nta-cheating",
  "title": "Tackling Cheating in Medical Entrance Exams (UP)",
  "company": "National Testing Authority",
  "source": "SRCRC Casebook 2025",
  "track": "Consulting",
  "category": "Unconventional",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "National Testing Authority",
    "Unconventional",
    "Consulting"
  ],
  "prompt": "Tackling Cheating in Medical Entrance Exams in Uttar Pradesh Is the issue localized to UP or present in other states too?",
  "clarifyingQuestions": [
    {
      "q": "Got it. So to recap, the key objective is to understand why the cheating rate is abnormally high in UP and suggest practical, implementable solutions, correct?",
      "a": "Exact l y.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "1. Diagnosis – What are the factors enabling cheating? 2. Intervention Design – How can we stop or deter it? For diagnosis, I’ll look at:",
      "a": "People: Students, Invigilators, School staff.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Do we have any information on how the exam is conducted? (e.g. in CBSE students are required to go to test centers while ICSE students have invigilators from different schools) Studen ts and in vigilat o rs are from th e",
      "a": "Teachers have been found helping students during the exam.",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "First Principles Objective Equation → MECE Drivers & Constraints → Impact Prioritization",
  "coreEquation": "Target Outcome = ∑ (MECE Stakeholder / Funnel / Operational Drivers) Subject to Constraints",
  "strategyOverview": "Approach Tackling Cheating in Medical Entrance Exams (UP) (National Testing Authority) using a Unconventional structure: start by confirming the business objective and scope, decompose the problem cleanly along First Principles Objective Equation → MECE Drivers & Constraints → Impact Prioritization, and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Tackling Cheating in Medical Entrance Exams (UP) — First-Principles Tree",
    "valueText": "Custom MECE",
    "children": [
      {
        "label": "1. Define Objective & Stakeholder Constraints",
        "valueText": "Scope"
      },
      {
        "label": "2. Primary Equation / Behavioral & Structural Drivers",
        "valueText": "MECE Buckets",
        "highlight": true
      },
      {
        "label": "3. High-Leverage Interventions & Second-Order Risks",
        "valueText": "Action Plan"
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Interviewer",
      "prompt": "NATIONAL TESTING AUTHORITY Tackling Cheating in Medical Entrance Exams in Uttar Pradesh Is the issue localized",
      "detail": "NATIONAL TESTING AUTHORITY Tackling Cheating in Medical Entrance Exams in Uttar Pradesh Is the issue localized to UP or present in other states too?\nIt is most sev e r e in UP. Other st a tes have inc id e nts, but not on this scale.\nGot it. So to recap, the key objective is to understand why the cheating rate is abnormally high in UP and suggest practical, implementable solutions, correct?\nTo s t r u c t ur e this , I’d lik e t o b r e ak the proble m in to tw o p a rts:"
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "1. Diagnosis – What are the factors enabling cheating? 2. Intervention Design – How can we stop or deter it? F",
      "detail": "1. Diagnosis – What are the factors enabling cheating? 2. Intervention Design – How can we stop or deter it? For diagnosis, I’ll look at:\nPeople: Students, Invigilators, School staff.\nProcess: Exam day procedures, ID verification, Supervision.\nInfrastructure: CCTV, invigilation, Surprise checks."
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "Yes, let’s move forward.",
      "detail": "Yes, let’s move forward.\nDo we have any information on how the exam is conducted? (e.g. in CBSE students are required to go to test centers while ICSE students have invigilators from different schools) Studen ts and in vigilat o rs are from th e same local schools .\nTeachers have been found helping students during the exam.\nThere are no CCTV came ras, and no flyi ng squad prese nc e in most test cen ters."
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "F rom what I see, the core issue seems to be:",
      "detail": "F rom what I see, the core issue seems to be:\nConflict of interest – since school staff supervise their own students.\nNo surveillance or surprise checks.\nSo I’d conclude that internal collusion combined with weak monitoring infrastructure is the root cause."
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "That makes sense. Let us end the case here.",
      "detail": "That makes sense. Let us end the case here.\nNATIONAL TESTING AUTHORITY Tackling Cheating in Medical Entrance Exams in Uttar Pradesh Objectives What enables cheating?\nLack of CCTV cameras and Process Gaps Infr astru c tur e Gaps Absence of surprise Teachers have been found Poor exam-day checks procedures Ineffective ID Lack of CCTV verification surveillance Students and invigilators are from same local schools.\nInadequate supervision Weak or compromised during exams invigilation Key Findings Root Cause Internal collusion + Weak monitoring infrastructure."
    }
  ],
  "recommendations": [
    "Prioritize the highest-impact P0 bottleneck identified in Tackling Cheating in Medical Entrance Exams (UP) before secondary optimizations.",
    "Pilot the top intervention in a controlled cohort/region with clear North Star and guardrail tracking.",
    "Scale rollout only after verifying unit economics and zero adverse second-order effects."
  ],
  "metricsAndGuardrails": {
    "northStar": "Primary Policy / Operational Objective Metric (National Testing Authority)",
    "leading": [
      "Target cohort participation / throughput",
      "Bottleneck conversion %"
    ],
    "guardrails": [
      "Implementation cost & fairness",
      "Unintended gaming / backlash"
    ]
  },
  "synthesisScript": "For National Testing Authority’s Tackling Cheating in Medical Entrance Exams (UP) case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Prioritize the highest-impact P0 bottleneck identified in Tackling Cheating in Medical Entrance Exams (UP) before secondary optimizations. We will validate success via Primary Policy / Operational Objective Metric (National Testing Authority) while guarding against Implementation cost & fairness.",
  "interviewerTrap": "Panicking because no textbook framework matches—or forcing a Profitability/4Ps template onto a puzzle that needs First Principles!",
  "variations": [
    {
      "question": "How would your recommendation change if National Testing Authority had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Unconventional",
    "correctFramework": "First Principles Objective Equation → MECE Drivers & Constraints → Impact Prioritization",
    "structureOptions": [
      {
        "label": "Clarify Objective → Build a Custom First-Principles Equation → Split MECE Drivers → Prioritize High-Impact Levers",
        "correct": true,
        "feedback": "Gold standard for Unconventional cases! Custom MECE equations beat forced templates."
      },
      {
        "label": "Force Porter’s Five Forces onto a public-policy or personal dilemma",
        "correct": false,
        "feedback": "Cookie-cutter frameworks look robotic when the prompt is non-standard."
      },
      {
        "label": "Give up because no memorized acronym fits",
        "correct": false,
        "feedback": "Unconventional cases specifically reward calm First-Principles structuring."
      }
    ],
    "decisionQuiz": {
      "question": "When an interviewer throws an Unconventional puzzle with no standard template, what wins?",
      "options": [
        {
          "label": "Translating the real-world objective into a simple First-Principles MECE equation",
          "correct": true,
          "feedback": "Exactly! Break the outcome into clean, non-overlapping drivers."
        },
        {
          "label": "Reciting SWOT + PESTEL regardless of fit",
          "correct": false,
          "feedback": "Generic acronyms fail unconventional prompts."
        },
        {
          "label": "Guessing one random answer immediately",
          "correct": false,
          "feedback": "Always structure before answering."
        }
      ]
    }
  }
},
{
  "id": "srcrc-public-sector-banking",
  "title": "Diagnosing Decline in Bank Visits in Uttar Pradesh",
  "company": "Public Sector Bank",
  "source": "SRCRC Casebook 2025",
  "track": "Consulting",
  "category": "Profitability",
  "difficulty": 2,
  "isStarter": true,
  "tags": [
    "SRCRC",
    "Profitability",
    "Banking",
    "Rural UP",
    "Digital Shift"
  ],
  "prompt": "Diagnosing the Decline in Bank Visits in Uttar Pradesh Just to clarify a few things before I begin: 1. Is this trend more prevalent in rural or urban areas, or is it statewide? 2. Is the decline specific to one bank or being observed across all banks? 3. Are there any recent changes such as branch consolidation, staff shortages, or tech upgrades? 1. The decline is more pronounced in rural areas, though some urban bra",
  "clarifyingQuestions": [
    {
      "q": "What is our primary business objective and timeframe for this decision?",
      "a": "Optimize long-term value and core KPIs for Public Sector Bank.",
      "why": "Aligns prioritization and trade-offs with leadership goals."
    },
    {
      "q": "Are there specific customer segments, geographies, or constraints we should prioritize?",
      "a": "Focus on the highest-impact core segment first before expanding.",
      "why": "Prevents boiling the ocean in a 25-minute case."
    }
  ],
  "frameworkUsed": "Branch Footfall Decline Tree (Access/Infra × Service Quality × Digital Substitution × Incentives)",
  "coreEquation": "Profit = ∑(Units × Price × Margin Mix) − (Fixed Overhead + Variable Value-Chain Costs)",
  "strategyOverview": "Diagnose declining branch visits in Uttar Pradesh across 4 MECE pillars: Access & Infrastructure (village transport, heat/floods), Service Quality (long queues, outages), Customer Digital Shift (UPI/mobile banking adoption by youth), and Product Awareness (low awareness of newer branch services).",
  "tree": {
    "label": "Diagnosing Decline in Bank Visits in Uttar Pradesh — Profitability Tree",
    "valueText": "Rev vs Cost",
    "children": [
      {
        "label": "Revenue Side (Price × Volume × Product/Channel Mix)",
        "valueText": "Internal vs External",
        "highlight": true
      },
      {
        "label": "Cost Side (Procurement → Mfg → Logistics → SG&A)",
        "valueText": "Fixed vs Variable",
        "highlight": true
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Interviewer",
      "prompt": "PUBLIC SECTOR BANKING Diagnosing the Decline in Bank Visits in Uttar Pradesh Just to clarify a few things befo",
      "detail": "PUBLIC SECTOR BANKING Diagnosing the Decline in Bank Visits in Uttar Pradesh Just to clarify a few things before I begin: 1. Is this trend more prevalent in rural or urban areas, or is it statewide? 2. Is the decline specific to one bank or being observed across all banks? 3. Are there any recent changes such as branch consolidation, staff shortages, or tech upgrades? 1. The decline is more pronounced in rural areas, though some urban branches are also affected.\n2. This is a general trend, not specic to one bank. 3. No major structural changes have taken place recently, at least not at scale."
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "I’ll structure my approach in two phases:",
      "detail": "I’ll structure my approach in two phases:\nFirst, I’ll try to hypothesize possible causes under four broad buckets:"
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "Customer-side, Access/Infrastructure, Service-side, and Technology-driven substitution.",
      "detail": "Customer-side, Access/Infrastructure, Service-side, and Technology-driven substitution.\nThen I’ll do a guestimate to understand how widespread physical access to banking infrastructure (especially ATMs) is in the state."
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "Sounds great. Let’s go ahead.",
      "detail": "Sounds great. Let’s go ahead.\nHeavier concentration in urban areas."
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "Many rural villages may still lack ATMs or have shared ones among villages, so real accessibility might be low",
      "detail": "Many rural villages may still lack ATMs or have shared ones among villages, so real accessibility might be lower than what the raw number suggests.\nSeems like a reasonable estimate. Let’s move on to root causes."
    }
  ],
  "recommendations": [
    "Are there any recent changes such as branch consolidation, staff shortages, or",
    "The decline is more pronounced in rural areas, though some urban branches",
    "This is a general trend, not specic to one bank.",
    "No major structural changes have taken place recently, at least not at scale."
  ],
  "metricsAndGuardrails": {
    "northStar": "Gross & EBITDA Margin Recovery (Public Sector Bank)",
    "leading": [
      "Unit realization vs COGS/unit",
      "Capacity utilization & waste/scrap %"
    ],
    "guardrails": [
      "Customer retention / NPS (don’t over-cut quality)",
      "Market share retention"
    ]
  },
  "synthesisScript": "For Public Sector Bank’s Diagnosing Decline in Bank Visits in Uttar Pradesh case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Are there any recent changes such as branch consolidation, staff shortages, or We will validate success via Gross & EBITDA Margin Recovery (Public Sector Bank) while guarding against Customer retention / NPS (don’t over-cut quality).",
  "interviewerTrap": "Assuming declining branch visits automatically mean losing customers—verify whether young customers simply migrated to UPI/mobile apps while remaining active account holders!",
  "variations": [
    {
      "question": "How would your recommendation change if Public Sector Bank had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Profitability",
    "correctFramework": "Profit = Revenue (Price × Volume × Mix) − Costs (Fixed + Variable along Value Chain)",
    "structureOptions": [
      {
        "label": "Clarify Profit vs Margin & Industry vs Company → Split Revenue (P×V×Mix) vs Value-Chain Costs → Prioritize P0 Fixes",
        "correct": true,
        "feedback": "Classic MBB Profitability structure!"
      },
      {
        "label": "Fire 30% of staff on Minute 2 without reading the P&L",
        "correct": false,
        "feedback": "Never slash costs blindly before knowing whether revenue/mix or raw materials drove the drop."
      },
      {
        "label": "Apply CIRCLES mobile app persona interviews",
        "correct": false,
        "feedback": "CIRCLES is for Product Design, not P&L Profitability diagnosis."
      }
    ],
    "decisionQuiz": {
      "question": "In a Profitability case, why ask immediately if competitors are seeing the same decline?",
      "options": [
        {
          "label": "Separates Industry-wide macro/commodity shocks from Company-specific operational or pricing issues",
          "correct": true,
          "feedback": "Spot on! Instantly cuts the diagnostic tree in half."
        },
        {
          "label": "To copy competitors’ logos",
          "correct": false,
          "feedback": "It isolates internal execution vs external market forces."
        },
        {
          "label": "Because profits don't depend on costs",
          "correct": false,
          "feedback": "Macro input spikes hit the whole industry simultaneously."
        }
      ]
    }
  }
},
{
  "id": "srcrc-us-auto-growth",
  "title": "Diagnose & Grow a US Automobile Company",
  "company": "US Auto OEM",
  "source": "SRCRC Casebook 2025",
  "track": "Consulting",
  "category": "Growth",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "US Auto OEM",
    "Growth",
    "Consulting"
  ],
  "prompt": "Diagnose and growth plan for a US based car company facing an issue with growth 'LDJQRVH DQG JURZWK SODQ IRU D 86 EDVHG FDU FRPSDQ\\ IDFLQJ DQ LVVXH ZLWK JURZWK Your client is a US based car company. They are facing an issue with growth.",
  "clarifyingQuestions": [
    {
      "q": "I would like to ask a few questions about company and market?",
      "a": "About the Company:- 1 . What part of the value chain do they lie in?",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "About the Company:- 1 . What part of the value chain do they lie in?",
      "a": "2 . What segment of automobiles do they offer?",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "2 . What segment of automobiles do they offer?",
      "a": "The company lies in Original Equipment Manufacturers (OEMs) and has ventured into EVs, primarily ICE.",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "Ansoff Growth Matrix (Penetration / Market Dev / Product Dev / Diversification) + Inorganic M&A",
  "coreEquation": "Revenue Growth = (Existing Customers × Frequency × AOV) + New Markets + New Products + Inorganic",
  "strategyOverview": "Approach Diagnose & Grow a US Automobile Company (US Auto OEM) using a Growth structure: start by confirming the business objective and scope, decompose the problem cleanly along Ansoff Growth Matrix (Penetration / Market Dev / Product Dev / Diversification) + Inorganic M&A, and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Diagnose & Grow a US Automobile Company — Growth Tree",
    "valueText": "Organic + Inorganic",
    "children": [
      {
        "label": "1. Core Penetration (More Share/Frequency/Retention in Existing Mkt)",
        "valueText": "Fastest ROI",
        "highlight": true
      },
      {
        "label": "2. Market & Product Expansion (New Geos / Adjacent SKUs)",
        "valueText": "Medium Horizon"
      },
      {
        "label": "3. Inorganic Partnerships / Acquisitions",
        "valueText": "Step-Change"
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Candidate",
      "prompt": "Diagnose and growth plan for a US based car company facing an issue with growth 'LDJQRVH DQG JURZWK SODQ IRU D",
      "detail": "Diagnose and growth plan for a US based car company facing an issue with growth 'LDJQRVH DQG JURZWK SODQ IRU D 86 EDVHG FDU FRPSDQ\\ IDFLQJ DQ LVVXH ZLWK JURZWK Your client is a US based car company. They are facing an issue with growth.\nI would like to ask a few questions about company and market?\nAbout the Company:- 1 . What part of the value chain do they lie in?\n2 . What segment of automobiles do they offer?"
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "The company lies in Original Equipment Manufacturers (OEMs) and has ventured into EVs, primarily ICE.",
      "detail": "The company lies in Original Equipment Manufacturers (OEMs) and has ventured into EVs, primarily ICE.\nAbout the Market:- 1 . How is our client positioned?\n2 . Who are the other players and how are they performing?\nThe client has a luxury or a high-end positioning."
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "Some players do exist, however, only we are facing the problem.",
      "detail": "Some players do exist, however, only we are facing the problem.\nCan I take some seconds to come up with my initial structure?\nWe know that- Revenue = No. of Cars Sold x Average Price No. of cars sold has declined.\nIs it led by supply or demand?"
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "6KUL 5DP &RQVXOWLQJ 5HVHDUFK &HQWUH Demand has fallen.",
      "detail": "6KUL 5DP &RQVXOWLQJ 5HVHDUFK &HQWUH Demand has fallen.\nI would divide this into company specific issue, or market led issue.\nIt’s a market led issue we believe.\nAlright. I would divide it into - Macroeconomic, Competitor or Complementary."
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "What would you look for under competitors?",
      "detail": "What would you look for under competitors?\nI would first want to understand if there is any new entrant given the EV developments in the US?\nYes - you have rightly identified - Tesla has expanded a lot recently, capturing the entirety of the premium EV segment. Suggest a growth plan.\nAlright. So we have identified that our client was facing the issue because of Tesla expanding presence and premium EV dominance. In terms of Growth - are we looking at Organic or Inorganic growth?"
    }
  ],
  "recommendations": [
    "Prioritize the highest-impact P0 bottleneck identified in Diagnose & Grow a US Automobile Company before secondary optimizations.",
    "Pilot the top intervention in a controlled cohort/region with clear North Star and guardrail tracking.",
    "Scale rollout only after verifying unit economics and zero adverse second-order effects."
  ],
  "metricsAndGuardrails": {
    "northStar": "Incremental ARR / Net Revenue Growth (US Auto OEM)",
    "leading": [
      "Retention & cross-sell attach rate",
      "New channel / geo revenue share"
    ],
    "guardrails": [
      "CAC Payback & Gross Margin %",
      "Churn in core legacy segments"
    ]
  },
  "synthesisScript": "For US Auto OEM’s Diagnose & Grow a US Automobile Company case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Prioritize the highest-impact P0 bottleneck identified in Diagnose & Grow a US Automobile Company before secondary optimizations. We will validate success via Incremental ARR / Net Revenue Growth (US Auto OEM) while guarding against CAC Payback & Gross Margin %.",
  "interviewerTrap": "Jumping straight to risky Diversification (unrelated new products in new markets) before capturing low-hanging Penetration in the core!",
  "variations": [
    {
      "question": "How would your recommendation change if US Auto OEM had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Growth",
    "correctFramework": "Ansoff Growth Matrix (Penetration / Market Dev / Product Dev / Diversification) + Inorganic M&A",
    "structureOptions": [
      {
        "label": "Audit Baseline → Organic Levers (Ansoff: Penetration, Market Dev, Product Dev, Diversification) + Inorganic → Rank ROI",
        "correct": true,
        "feedback": "Exact Growth Strategy framework!"
      },
      {
        "label": "Cut R&D and halt all sales to grow",
        "correct": false,
        "feedback": "Cutting growth engines shrinks top-line revenue."
      },
      {
        "label": "Diagnose a checkout crash bug",
        "correct": false,
        "feedback": "That is RCA, not multi-year Growth Strategy."
      }
    ],
    "decisionQuiz": {
      "question": "In Ansoff’s Matrix, which growth lever usually offers the fastest payback and lowest risk?",
      "options": [
        {
          "label": "Market Penetration (selling more to existing customers / channels)",
          "correct": true,
          "feedback": "Spot on! Existing distribution and brand trust lower CAC dramatically."
        },
        {
          "label": "Unrelated Diversification",
          "correct": false,
          "feedback": "Diversification carries the highest execution and capital risk."
        },
        {
          "label": "Eliminating top products",
          "correct": false,
          "feedback": "Shrinks revenue."
        }
      ]
    }
  }
},
{
  "id": "srcrc-star-sports-wipl",
  "title": "Financial Attractiveness: Star Sports Bidding for W-IPL",
  "company": "Star Sports",
  "source": "SRCRC Casebook 2025",
  "track": "Consulting",
  "category": "Market Entry",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "Star Sports",
    "Market Entry",
    "Consulting"
  ],
  "prompt": "Financial Attractiveness for Star Sports launching a new activity Your client is Star Sports - bidding for women’s IPL happening for the first time.",
  "clarifyingQuestions": [
    {
      "q": "Could you please tell me about their synergies? Additionally, do they have any other c onstraints?",
      "a": "As for synergies, they have other cricket tournaments, and no, there are no other constraints.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Do we have any other bidders and what is the t eam structure like?",
      "a": "Let’s assume that there are no other bidders. For the t eam structure, there are a total of 6 teams, both Indian and foreign players.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "What are these Operational Costs?",
      "a": "Platform Development, TRP costs, CAC.",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "Market Attractiveness (TAM/Growth) → Competition & Barriers → Capabilities & Breakeven → Entry Mode",
  "coreEquation": "Go / No-Go = Attractive SOM × Client Right-to-Win × (Breakeven Volume ≤ Achievable Share)",
  "strategyOverview": "Approach Financial Attractiveness: Star Sports Bidding for W-IPL (Star Sports) using a Market Entry structure: start by confirming the business objective and scope, decompose the problem cleanly along Market Attractiveness (TAM/Growth) → Competition & Barriers → Capabilities & Breakeven → Entry Mode, and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Financial Attractiveness: Star Sports Bidding for W-IPL — Market Entry Tree",
    "valueText": "Should & How?",
    "children": [
      {
        "label": "1. Market Attractiveness (TAM/SAM/Growth/Margins)",
        "valueText": "Size Pool",
        "highlight": true
      },
      {
        "label": "2. Competition & Regulatory Barriers (5 Forces/PESTEL)",
        "valueText": "Right to Win"
      },
      {
        "label": "3. Economics (BEP) & Entry Mode (Build / Buy / Partner)",
        "valueText": "Execution",
        "highlight": true
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Candidate",
      "prompt": "FINANCIAL ATTRACTIVENESS Financial Attractiveness for Star Sports launching a new activity Your client is Star",
      "detail": "FINANCIAL ATTRACTIVENESS Financial Attractiveness for Star Sports launching a new activity Your client is Star Sports - bidding for women’s IPL happening for the first time.\nCould you please tell me about their synergies? Additionally, do they have any other c onstraints?\nAs for synergies, they have other cricket tournaments, and no, there are no other constraints."
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "Do we have any other bidders and what is the t eam structure like?",
      "detail": "Do we have any other bidders and what is the t eam structure like?\nLet’s assume that there are no other bidders. For the t eam structure, there are a total of 6 teams, both Indian and foreign players.\nWe would start by dividing out approach in financial attractiveness, operational feasibility and risks. Under financial attractiveness, we look at benchmarking revenues bridging them with the required ROI to find the bid price."
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "We are looking at an ROI of 15% stream length is 45 days. You can ignore quantitative benchmark.",
      "detail": "We are looking at an ROI of 15% stream length is 45 days. You can ignore quantitative benchmark.\nAlright we can first divide revenues into streaming (Online, TV), Marketing and Merchandising. Under Online, we look at additional subscribers generated, pay per view revenue and cross selling.\nAlright the other heads are explanatory, move to the costs."
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "We have Financing costs, Marketing Costs, Operational costs and opportunity cost.",
      "detail": "We have Financing costs, Marketing Costs, Operational costs and opportunity cost.\nWhat are these Operational Costs?\nPlatform Development, TRP costs, CAC."
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "What would the bid price equation be?",
      "detail": "What would the bid price equation be?\nBid = (No. of streams*Avg rev per stream)-(Total Cost)/15% Alright we can close the case.\nFINANCIAL ATTRACTIVENESS Financial Attractiveness for Star Sports launching a new activity Revenue Marketing Streaming Additional Subscribers Pay-per-view Generated Cost Financing Marketing Operational Platform Development TRP Costs Merchandising Cross Selling BID VALUE Quantity * Average Revenue - Total cost/15% Opportunity CAC"
    }
  ],
  "recommendations": [
    "Prioritize the highest-impact P0 bottleneck identified in Financial Attractiveness: Star Sports Bidding for W-IPL before secondary optimizations.",
    "Pilot the top intervention in a controlled cohort/region with clear North Star and guardrail tracking.",
    "Scale rollout only after verifying unit economics and zero adverse second-order effects."
  ],
  "metricsAndGuardrails": {
    "northStar": "3-Year NPV / Year-1 SOM Market Share & Payback (Star Sports)",
    "leading": [
      "Breakeven volume vs pilot traction",
      "Partner/channel onboarding velocity"
    ],
    "guardrails": [
      "Capex overrun / working capital lockup",
      "Core brand cannibalization"
    ]
  },
  "synthesisScript": "For Star Sports’s Financial Attractiveness: Star Sports Bidding for W-IPL case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Prioritize the highest-impact P0 bottleneck identified in Financial Attractiveness: Star Sports Bidding for W-IPL before secondary optimizations. We will validate success via 3-Year NPV / Year-1 SOM Market Share & Payback (Star Sports) while guarding against Capex overrun / working capital lockup.",
  "interviewerTrap": "Saying 'YES enter!' purely because TAM is huge—forgetting competition, regulatory hurdles, breakeven math, and Build vs Buy vs Partner!",
  "variations": [
    {
      "question": "How would your recommendation change if Star Sports had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Market Entry",
    "correctFramework": "Market Attractiveness (TAM/Growth) → Competition & Barriers → Capabilities & Breakeven → Entry Mode",
    "structureOptions": [
      {
        "label": "Assess Market Attractiveness → Competition & Barriers → Client Capabilities & BEP → Entry Mode (Build/Buy/Partner)",
        "correct": true,
        "feedback": "Complete Market Entry blueprint covering both Should We and How!"
      },
      {
        "label": "Assume 10% market share automatically and stop at TAM",
        "correct": false,
        "feedback": "TAM without competition, unit economics, and entry mode fails consulting cases."
      },
      {
        "label": "Run a 60-second UI wireframe critique",
        "correct": false,
        "feedback": "Wrong framework for strategic Market Entry."
      }
    ],
    "decisionQuiz": {
      "question": "What are the 3 classic Entry Modes to evaluate at the end of a Market Entry case?",
      "options": [
        {
          "label": "Organic Build (Greenfield), Acquire (M&A), or Partner (Joint Venture / Licensing)",
          "correct": true,
          "feedback": "Yes! Match the mode to speed, regulation, and capital constraints."
        },
        {
          "label": "Discount, Refund, or Shutdown",
          "correct": false,
          "feedback": "Those are tactical levers, not market entry vehicles."
        },
        {
          "label": "RICE, MoSCoW, or Kano",
          "correct": false,
          "feedback": "Those are feature prioritization tools."
        }
      ]
    }
  }
},
{
  "id": "srcrc-global-gadget-go",
  "title": "Global Gadget Go Expansion into Southeast Asia",
  "company": "Wearable Tech",
  "source": "SRCRC Casebook 2025",
  "track": "Consulting",
  "category": "Market Entry",
  "difficulty": 2,
  "isStarter": false,
  "tags": [
    "Wearable Tech",
    "Market Entry",
    "Consulting"
  ],
  "prompt": "Assess the feasibility of expansion and recommend a Market Entry Strategy We're advising 'Global Gadget Go,' a leading US wearable tech company, on expanding into Southeast Asia. They've asked us to assess feasibility and recommend a market entry strategy. Where would you like to start?",
  "clarifyingQuestions": [
    {
      "q": "To begin with market attractiveness: what are the key growth drivers—health awareness, disposable income, or others?",
      "a": "The growth is primarily driven by a combination of increasing health awareness, rising disposable incomes, and growing popularity of smartphones and mobile apps.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "What is our primary business objective and timeframe for this decision?",
      "a": "Optimize long-term value and core KPIs for Wearable Tech.",
      "why": "Aligns prioritization and trade-offs with leadership goals."
    }
  ],
  "frameworkUsed": "Market Attractiveness (TAM/Growth) → Competition & Barriers → Capabilities & Breakeven → Entry Mode",
  "coreEquation": "Go / No-Go = Attractive SOM × Client Right-to-Win × (Breakeven Volume ≤ Achievable Share)",
  "strategyOverview": "Approach Global Gadget Go Expansion into Southeast Asia (Wearable Tech) using a Market Entry structure: start by confirming the business objective and scope, decompose the problem cleanly along Market Attractiveness (TAM/Growth) → Competition & Barriers → Capabilities & Breakeven → Entry Mode, and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Global Gadget Go Expansion into Southeast Asia — Market Entry Tree",
    "valueText": "Should & How?",
    "children": [
      {
        "label": "1. Market Attractiveness (TAM/SAM/Growth/Margins)",
        "valueText": "Size Pool",
        "highlight": true
      },
      {
        "label": "2. Competition & Regulatory Barriers (5 Forces/PESTEL)",
        "valueText": "Right to Win"
      },
      {
        "label": "3. Economics (BEP) & Entry Mode (Build / Buy / Partner)",
        "valueText": "Execution",
        "highlight": true
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Interviewer",
      "prompt": "THE GLOBAL GADGET GO Assess the feasibility of expansion and recommend a Market Entry Strategy We're advising ",
      "detail": "THE GLOBAL GADGET GO Assess the feasibility of expansion and recommend a Market Entry Strategy We're advising 'Global Gadget Go,' a leading US wearable tech company, on expanding into Southeast Asia. They've asked us to assess feasibility and recommend a market entry strategy. Where would you like to start?\nTo start, I’d like to gather key info: 1 . Market size and growth of wearable fitness trackers in Southeast Asia.\n2 . Target customer demographics and preferences in Southeast Asia.\n3 . Key competitors, local or international."
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "4 . Regulatory requirements for wearable tech in the region.",
      "detail": "4 . Regulatory requirements for wearable tech in the region.\n5 . Logistics and distribution infrastructure.\nVery good questions.\nMarket growing at 20% annually."
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "Target: young, tech-savvy, health-conscious, with varied incomes and cultures.",
      "detail": "Target: young, tech-savvy, health-conscious, with varied incomes and cultures.\nCompetition: local and international brands; locals focus on lower prices.\nRegulation: varies by country; some require certifications.\nThanks. I’ll structure my analysis into three areas: 1 . Market Attractiveness – Size, growth, demographics, trends, and risks."
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "2 . Competitive Analysis – Key players, market share, SWOT Analysis.",
      "detail": "2 . Competitive Analysis – Key players, market share, SWOT Analysis.\n3 . Entry Strategy – Entry mode, go-to-market plan, financial impact.\nTo begin with market attractiveness: what are the key growth drivers—health awareness, disposable income, or others?\nThe growth is primarily driven by a combination of increasing health awareness, rising disposable incomes, and growing popularity of smartphones and mobile apps."
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "That's helpful. Moving to competitive analysis:",
      "detail": "That's helpful. Moving to competitive analysis:\nCan you share more on local brands’ product features and marketing strategies?\nLocal brands offer basic trackers at lower prices, marketing through social media influencers and localized campaigns focused on affordability.\nGlobal Gadget Go should tackle price sensitivity through a budget line or local partnerships. Given market fragmentation and varied regulations, a phased entry is ideal. Exploring a joint venture with a local partner could be a viable strategy."
    }
  ],
  "recommendations": [
    "Prioritize the highest-impact P0 bottleneck identified in Global Gadget Go Expansion into Southeast Asia before secondary optimizations.",
    "Pilot the top intervention in a controlled cohort/region with clear North Star and guardrail tracking.",
    "Scale rollout only after verifying unit economics and zero adverse second-order effects."
  ],
  "metricsAndGuardrails": {
    "northStar": "3-Year NPV / Year-1 SOM Market Share & Payback (Wearable Tech)",
    "leading": [
      "Breakeven volume vs pilot traction",
      "Partner/channel onboarding velocity"
    ],
    "guardrails": [
      "Capex overrun / working capital lockup",
      "Core brand cannibalization"
    ]
  },
  "synthesisScript": "For Wearable Tech’s Global Gadget Go Expansion into Southeast Asia case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Prioritize the highest-impact P0 bottleneck identified in Global Gadget Go Expansion into Southeast Asia before secondary optimizations. We will validate success via 3-Year NPV / Year-1 SOM Market Share & Payback (Wearable Tech) while guarding against Capex overrun / working capital lockup.",
  "interviewerTrap": "Saying 'YES enter!' purely because TAM is huge—forgetting competition, regulatory hurdles, breakeven math, and Build vs Buy vs Partner!",
  "variations": [
    {
      "question": "How would your recommendation change if Wearable Tech had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Market Entry",
    "correctFramework": "Market Attractiveness (TAM/Growth) → Competition & Barriers → Capabilities & Breakeven → Entry Mode",
    "structureOptions": [
      {
        "label": "Assess Market Attractiveness → Competition & Barriers → Client Capabilities & BEP → Entry Mode (Build/Buy/Partner)",
        "correct": true,
        "feedback": "Complete Market Entry blueprint covering both Should We and How!"
      },
      {
        "label": "Assume 10% market share automatically and stop at TAM",
        "correct": false,
        "feedback": "TAM without competition, unit economics, and entry mode fails consulting cases."
      },
      {
        "label": "Run a 60-second UI wireframe critique",
        "correct": false,
        "feedback": "Wrong framework for strategic Market Entry."
      }
    ],
    "decisionQuiz": {
      "question": "What are the 3 classic Entry Modes to evaluate at the end of a Market Entry case?",
      "options": [
        {
          "label": "Organic Build (Greenfield), Acquire (M&A), or Partner (Joint Venture / Licensing)",
          "correct": true,
          "feedback": "Yes! Match the mode to speed, regulation, and capital constraints."
        },
        {
          "label": "Discount, Refund, or Shutdown",
          "correct": false,
          "feedback": "Those are tactical levers, not market entry vehicles."
        },
        {
          "label": "RICE, MoSCoW, or Kano",
          "correct": false,
          "feedback": "Those are feature prioritization tools."
        }
      ]
    }
  }
},
{
  "id": "srcrc-tin-sheets",
  "title": "Tin Sheets Manufacturer Net Margin Expansion",
  "company": "Industrial Mfg",
  "source": "SRCRC Casebook 2025",
  "track": "Consulting",
  "category": "Profitability",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "Industrial Mfg",
    "Profitability",
    "Consulting"
  ],
  "prompt": "Recommend ways to increase net margins Hi Parth, I’m a little short on time so let’s quickly get started with the case. Your client is a tin-sheet manufacturer, who wants to increase its net margin. How would you help?",
  "clarifyingQuestions": [
    {
      "q": "U n de rsto od , may I t a k e aro u n d 30 s e con d s to ga ther my thoughts and clarify some questions before I begin?",
      "a": "Sure, go ahead.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Understood, so are there different types of products as well?",
      "a": "Yes, the tin sheets vary depending upon the thickness, length and breadth, as demanded by the customers.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Alright. Also, by net margin do we refer to profits/revenue, and what part of the value chain does the client lie in, vis a vis its competitors?",
      "a": "Yes, th a t’s cor re ct. You c a n think t hat cli e n t receives coil s , w hich a r e rolled out into rods, are stored, and a third p arty undertakes log i s t ics. Similar is the val u e chain for com p etitors, but our client is t he bi",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "Profit = Revenue (Price × Volume × Mix) − Costs (Fixed + Variable along Value Chain)",
  "coreEquation": "Profit = ∑(Units × Price × Margin Mix) − (Fixed Overhead + Variable Value-Chain Costs)",
  "strategyOverview": "Approach Tin Sheets Manufacturer Net Margin Expansion (Industrial Mfg) using a Profitability structure: start by confirming the business objective and scope, decompose the problem cleanly along Profit = Revenue (Price × Volume × Mix) − Costs (Fixed + Variable along Value Chain), and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Tin Sheets Manufacturer Net Margin Expansion — Profitability Tree",
    "valueText": "Rev vs Cost",
    "children": [
      {
        "label": "Revenue Side (Price × Volume × Product/Channel Mix)",
        "valueText": "Internal vs External",
        "highlight": true
      },
      {
        "label": "Cost Side (Procurement → Mfg → Logistics → SG&A)",
        "valueText": "Fixed vs Variable",
        "highlight": true
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Interviewer",
      "prompt": "TIN SHEETS MANUFACTURER Recommend ways to increase net margins Hi Parth, I’m a little short on time so let’s q",
      "detail": "TIN SHEETS MANUFACTURER Recommend ways to increase net margins Hi Parth, I’m a little short on time so let’s quickly get started with the case. Your client is a tin-sheet manufacturer, who wants to increase its net margin. How would you help?\nSurely, so just to clarify, our client manufactures tin sheets and wants to increase the net margin, and we’ve to help out for the same.\nYes, that’s correct.\nU n de rsto od , may I t a k e aro u n d 30 s e con d s to ga ther my thoughts and clarify some questions before I begin?"
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "Firs tly, I’d like to know a little more about the client’s business and their customers, and if it’d be fair ",
      "detail": "Firs tly, I’d like to know a little more about the client’s business and their customers, and if it’d be fair to assume that our client is a B2B player.\nOur client deals only in the finished product, i:e, tin sheets, and as correctly identified, our client is a B2B player with customers being businesses in FMCG, F&B, Paints, etc.\nUnderstood, so are there different types of products as well?\nYes, the tin sheets vary depending upon the thickness, length and breadth, as demanded by the customers."
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "Alright. Also, by net margin do we refer to profits/revenue, and what part of the value chain does the client ",
      "detail": "Alright. Also, by net margin do we refer to profits/revenue, and what part of the value chain does the client lie in, vis a vis its competitors?\nYes, th a t’s cor re ct. You c a n think t hat cli e n t receives coil s , w hich a r e rolled out into rods, are stored, and a third p arty undertakes log i s t ics. Similar is the val u e chain for com p etitors, but our client is t he bigg e st player.\nTh anks for th e in form ati o n . La s t l y , wh at m a gnitud e o f ne t marg in i s e xpec ted and w hat ’s t h e timeline f or the sa m e ?\nTa k e i t t o be 10-15% i n aro u nd 1-2 y e a r s ."
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "Sure. Since net m argin i s 1 – R eve nue/C o st s, we ca n imp ro v e i t by e it he r re ducing co st s or i",
      "detail": "Sure. Since net m argin i s 1 – R eve nue/C o st s, we ca n imp ro v e i t by e it he r re ducing co st s or i n cre asing th e re v e nue s. Is the r e a pa rti cula r side y ou ’d li k e me t o focu s a t?\nLet’s start w ith the costs firs t .\nSu rely, I’ll just t ak e aroun d 25-30 m o r e sec o nds to structure my thoughts and come up with an approach.\nSo, I’ve tri ed to b reak down the costs into a value ch ain, under which we can a na l yse e a ch eleme nt one by one to look for facto rs of c o st reduct ion."
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "TIN SHEETS MANUFACTURER Recommend ways to increase net margins Value chain can be as follows; R&D, raw materia",
      "detail": "TIN SHEETS MANUFACTURER Recommend ways to increase net margins Value chain can be as follows; R&D, raw material sourcing, inbound logistics, storage, processing & manufacturing, packaging and specifications, storage again, outbound logistics (to third party distributor), and reverse logistics (if needed).\nSeems like a comprehensive breakdown, Parth. Quickly break down the raw material costs for me.\nSure, it can be broken down as #suppliers * average quantity * price.\nFocus on average quantity."
    }
  ],
  "recommendations": [
    "Prioritize the highest-impact P0 bottleneck identified in Tin Sheets Manufacturer Net Margin Expansion before secondary optimizations.",
    "Pilot the top intervention in a controlled cohort/region with clear North Star and guardrail tracking.",
    "Scale rollout only after verifying unit economics and zero adverse second-order effects."
  ],
  "metricsAndGuardrails": {
    "northStar": "Gross & EBITDA Margin Recovery (Industrial Mfg)",
    "leading": [
      "Unit realization vs COGS/unit",
      "Capacity utilization & waste/scrap %"
    ],
    "guardrails": [
      "Customer retention / NPS (don’t over-cut quality)",
      "Market share retention"
    ]
  },
  "synthesisScript": "For Industrial Mfg’s Tin Sheets Manufacturer Net Margin Expansion case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Prioritize the highest-impact P0 bottleneck identified in Tin Sheets Manufacturer Net Margin Expansion before secondary optimizations. We will validate success via Gross & EBITDA Margin Recovery (Industrial Mfg) while guarding against Customer retention / NPS (don’t over-cut quality).",
  "interviewerTrap": "Assuming costs rose without checking Revenue (Price × Volume × Mix) first, or skipping Industry-wide vs Company-specific scoping!",
  "variations": [
    {
      "question": "How would your recommendation change if Industrial Mfg had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Profitability",
    "correctFramework": "Profit = Revenue (Price × Volume × Mix) − Costs (Fixed + Variable along Value Chain)",
    "structureOptions": [
      {
        "label": "Clarify Profit vs Margin & Industry vs Company → Split Revenue (P×V×Mix) vs Value-Chain Costs → Prioritize P0 Fixes",
        "correct": true,
        "feedback": "Classic MBB Profitability structure!"
      },
      {
        "label": "Fire 30% of staff on Minute 2 without reading the P&L",
        "correct": false,
        "feedback": "Never slash costs blindly before knowing whether revenue/mix or raw materials drove the drop."
      },
      {
        "label": "Apply CIRCLES mobile app persona interviews",
        "correct": false,
        "feedback": "CIRCLES is for Product Design, not P&L Profitability diagnosis."
      }
    ],
    "decisionQuiz": {
      "question": "In a Profitability case, why ask immediately if competitors are seeing the same decline?",
      "options": [
        {
          "label": "Separates Industry-wide macro/commodity shocks from Company-specific operational or pricing issues",
          "correct": true,
          "feedback": "Spot on! Instantly cuts the diagnostic tree in half."
        },
        {
          "label": "To copy competitors’ logos",
          "correct": false,
          "feedback": "It isolates internal execution vs external market forces."
        },
        {
          "label": "Because profits don't depend on costs",
          "correct": false,
          "feedback": "Macro input spikes hit the whole industry simultaneously."
        }
      ]
    }
  }
},
{
  "id": "srcrc-bombay-theatre",
  "title": "Standalone Theatre in Bombay Revenue Growth",
  "company": "Entertainment",
  "source": "SRCRC Casebook 2025",
  "track": "Consulting",
  "category": "Growth",
  "difficulty": 2,
  "isStarter": false,
  "tags": [
    "Entertainment",
    "Growth",
    "Consulting"
  ],
  "prompt": "Standalone Theatre Growth Strategy So, I have a very unconventional case for you. Your client is your friend, who owns a standalone movie theatre in Bombay. He wants to grow his revenues, and has come to you for help. How would you help your friend?",
  "clarifyingQuestions": [
    {
      "q": "Who are the exact customers of my friend, and can I assume it to have sources of revenue as movies, advertisements, food, parking, and tickets?",
      "a": "You can assume them to be middle-to-upper end classes, and yes, sources of revenue are correct.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Can we consider my friend’s competitors to be other movie theatre chains, multiplexes, and OTT platforms? Lastly, want kind of increase is expected and over what time period?",
      "a": "He wants to see a 2x increase over the next 3-4 years.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "What about increasing revenue/customer?",
      "a": "Yes, it can be further broken down as revenue/customer/transaction * #transactions/customer. For the first, upselling, bundling, quantity reduction and decoy pricing can play a role. For the second, we can look at supply, demand, and distri",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "Ansoff Growth Matrix (Penetration / Market Dev / Product Dev / Diversification) + Inorganic M&A",
  "coreEquation": "Revenue Growth = (Existing Customers × Frequency × AOV) + New Markets + New Products + Inorganic",
  "strategyOverview": "Approach Standalone Theatre in Bombay Revenue Growth (Entertainment) using a Growth structure: start by confirming the business objective and scope, decompose the problem cleanly along Ansoff Growth Matrix (Penetration / Market Dev / Product Dev / Diversification) + Inorganic M&A, and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Standalone Theatre in Bombay Revenue Growth — Growth Tree",
    "valueText": "Organic + Inorganic",
    "children": [
      {
        "label": "1. Core Penetration (More Share/Frequency/Retention in Existing Mkt)",
        "valueText": "Fastest ROI",
        "highlight": true
      },
      {
        "label": "2. Market & Product Expansion (New Geos / Adjacent SKUs)",
        "valueText": "Medium Horizon"
      },
      {
        "label": "3. Inorganic Partnerships / Acquisitions",
        "valueText": "Step-Change"
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Interviewer",
      "prompt": "THEATRE IN BOMBAY Standalone Theatre Growth Strategy So, I have a very unconventional case for you. Your clien",
      "detail": "THEATRE IN BOMBAY Standalone Theatre Growth Strategy So, I have a very unconventional case for you. Your client is your friend, who owns a standalone movie theatre in Bombay. He wants to grow his revenues, and has come to you for help. How would you help your friend?\nWho are the exact customers of my friend, and can I assume it to have sources of revenue as movies, advertisements, food, parking, and tickets?\nYou can assume them to be middle-to-upper end classes, and yes, sources of revenue are correct."
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "Can we consider my friend’s competitors to be other movie theatre chains, multiplexes, and OTT platforms? Last",
      "detail": "Can we consider my friend’s competitors to be other movie theatre chains, multiplexes, and OTT platforms? Lastly, want kind of increase is expected and over what time period?\nHe wants to see a 2x increase over the next 3-4 years.\nI’ve broken down the organic route as growth from existing businesses or new businesses. Existing businesses would cover revenue from tickets, parking, food, advertisements, and movies. New businesses could comprise of things such at launching on OTT, home theatre screens, movie cabs, and hosting exclusive shows/concerts."
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "Revenue can further be broken down as #customers * revenue/customer Talking about #customers, it’s actually ta",
      "detail": "Revenue can further be broken down as #customers * revenue/customer Talking about #customers, it’s actually target market * market share %. So, my friend can increase the target market by opening a theatre in a new geography. Or, for improving market share, he can introduce new movies/products, with varieties being hosting concerts, purchasing exclusive rights to certain shows, etc., or change the way of provision to OTT.\nWhat about increasing revenue/customer?\nYes, it can be further broken down as revenue/customer/transaction * #transactions/customer. For the first, upselling, bundling, quantity reduction and de"
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "Let’s look at the supply and infrastructure aspect now.",
      "detail": "Let’s look at the supply and infrastructure aspect now.\nSupply would be affected by movies, frequency of shows, infrastructure, and hours of operation., I’ve broken down the infrastructure considering seats as a bottleneck. It could be written as #seats * %utilization. These can be improved by reducing distance between seats as well as rows, expanding the walls of the theatre, and improving any bad quality seats.\n100 60 THEATRE IN BOMBAY Standalone Theatre Growth Strategy Absolut ely. Good job. Now after all our discussion, you’ve given around 7-8 very innovative ideas. What would be the top 3 solutions as per yo"
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "In order of priority, I believe they’d be Exclusive screenings (for sports, concerts, shows, etc.), Differenti",
      "detail": "In order of priority, I believe they’d be Exclusive screenings (for sports, concerts, shows, etc.), Differential pricing, Increasing the seating capacity.\nGreat, we can end the case here.\nTHEATRE IN BOMBAY Standalone Theatre Growth Strategy Revenue Growth in Movie Theatre Organic Growth New Businesses Existing Businesses Increasing Target Market OTT Platforms Infrastructure Supply Inorganic Growth Increasing Revenues Differential Pricing"
    }
  ],
  "recommendations": [
    "Prioritize the highest-impact P0 bottleneck identified in Standalone Theatre in Bombay Revenue Growth before secondary optimizations.",
    "Pilot the top intervention in a controlled cohort/region with clear North Star and guardrail tracking.",
    "Scale rollout only after verifying unit economics and zero adverse second-order effects."
  ],
  "metricsAndGuardrails": {
    "northStar": "Incremental ARR / Net Revenue Growth (Entertainment)",
    "leading": [
      "Retention & cross-sell attach rate",
      "New channel / geo revenue share"
    ],
    "guardrails": [
      "CAC Payback & Gross Margin %",
      "Churn in core legacy segments"
    ]
  },
  "synthesisScript": "For Entertainment’s Standalone Theatre in Bombay Revenue Growth case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Prioritize the highest-impact P0 bottleneck identified in Standalone Theatre in Bombay Revenue Growth before secondary optimizations. We will validate success via Incremental ARR / Net Revenue Growth (Entertainment) while guarding against CAC Payback & Gross Margin %.",
  "interviewerTrap": "Jumping straight to risky Diversification (unrelated new products in new markets) before capturing low-hanging Penetration in the core!",
  "variations": [
    {
      "question": "How would your recommendation change if Entertainment had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Growth",
    "correctFramework": "Ansoff Growth Matrix (Penetration / Market Dev / Product Dev / Diversification) + Inorganic M&A",
    "structureOptions": [
      {
        "label": "Audit Baseline → Organic Levers (Ansoff: Penetration, Market Dev, Product Dev, Diversification) + Inorganic → Rank ROI",
        "correct": true,
        "feedback": "Exact Growth Strategy framework!"
      },
      {
        "label": "Cut R&D and halt all sales to grow",
        "correct": false,
        "feedback": "Cutting growth engines shrinks top-line revenue."
      },
      {
        "label": "Diagnose a checkout crash bug",
        "correct": false,
        "feedback": "That is RCA, not multi-year Growth Strategy."
      }
    ],
    "decisionQuiz": {
      "question": "In Ansoff’s Matrix, which growth lever usually offers the fastest payback and lowest risk?",
      "options": [
        {
          "label": "Market Penetration (selling more to existing customers / channels)",
          "correct": true,
          "feedback": "Spot on! Existing distribution and brand trust lower CAC dramatically."
        },
        {
          "label": "Unrelated Diversification",
          "correct": false,
          "feedback": "Diversification carries the highest execution and capital risk."
        },
        {
          "label": "Eliminating top products",
          "correct": false,
          "feedback": "Shrinks revenue."
        }
      ]
    }
  }
},
{
  "id": "srcrc-cement-conglomerate",
  "title": "Cement Conglomerate Low Profitability",
  "company": "Cement Co.",
  "source": "SRCRC Casebook 2025",
  "track": "Consulting",
  "category": "Profitability",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "Cement Co.",
    "Profitability",
    "Consulting"
  ],
  "prompt": "Facing Low Profitability Hi Parth! Let’s start your case. Your client is a conglomerate in Calcutta, and works in the cement space too. It has 2 plants, having 5 MT of total capacity in Eastern India, but unfortunately, they’re able to sell only 2 MT and hence, their profitability is low. How would you help them?",
  "clarifyingQuestions": [
    {
      "q": "Understood. If it’s alright, may I take around 30 seconds to gather my thoughts and clarify some questions before I begin?",
      "a": "Go ahead.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Understood. Next, what is the competitive landscape, and have they been facing a similar issue?",
      "a": "Client and their major competitors combined capture 80% of the market.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Got it, and lastly, which part of the value chain does our client lie in?",
      "a": "They manufacture and brand their product, and have third party distributors.",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "Profit = Revenue (Price × Volume × Mix) − Costs (Fixed + Variable along Value Chain)",
  "coreEquation": "Profit = ∑(Units × Price × Margin Mix) − (Fixed Overhead + Variable Value-Chain Costs)",
  "strategyOverview": "Approach Cement Conglomerate Low Profitability (Cement Co.) using a Profitability structure: start by confirming the business objective and scope, decompose the problem cleanly along Profit = Revenue (Price × Volume × Mix) − Costs (Fixed + Variable along Value Chain), and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Cement Conglomerate Low Profitability — Profitability Tree",
    "valueText": "Rev vs Cost",
    "children": [
      {
        "label": "Revenue Side (Price × Volume × Product/Channel Mix)",
        "valueText": "Internal vs External",
        "highlight": true
      },
      {
        "label": "Cost Side (Procurement → Mfg → Logistics → SG&A)",
        "valueText": "Fixed vs Variable",
        "highlight": true
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Interviewer",
      "prompt": "CEMENT CONGLOMERATE Facing Low Profitability Hi Parth! Let’s start your case. Your client is a conglomerate in",
      "detail": "CEMENT CONGLOMERATE Facing Low Profitability Hi Parth! Let’s start your case. Your client is a conglomerate in Calcutta, and works in the cement space too. It has 2 plants, having 5 MT of total capacity in Eastern India, but unfortunately, they’re able to sell only 2 MT and hence, their profitability is low. How would you help them?\nSounds like an interesting case sir! Just to clarify, our client is a conglomerate, facing low profitability in their cement business. Their 2 East Indian plants have 5MT capacity, but have only been able to sell 2MT. We’ve to provide solutions for a turn-around.\nYou’ve got it right.\n"
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "Sir, I’d like some information on the customers, i:e, if our client is B2B or a B2C player, and also, can I as",
      "detail": "Sir, I’d like some information on the customers, i:e, if our client is B2B or a B2C player, and also, can I assume cement to be a commoditized product? 30% of their business is B2B, rest is B2C, essentially residential. And yes, consider it to be commoditized.\nUnderstood. Next, what is the competitive landscape, and have they been facing a similar issue?\nClient and their major competitors combined capture 80% of the market.\nGot it, and lastly, which part of the value chain does our client lie in?"
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "They manufacture and brand their product, and have third party distributors.",
      "detail": "They manufacture and brand their product, and have third party distributors.\nSo, now the primary objective is to help our client grow its low profitability, and reach a level of sales of 5MT. Is that right?\nYes, that’s correct.\nThanks a lot. Now, I have all the required information to proceed. Profitability can be defined as (revenue-costs)/revenue, or simply 1 – costs/revenue. So essentially, if current revenue rises, profitability will automatically rise. Is there a need to check for cost reduction as well?"
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "No need, you can focus only on growing their revenue.",
      "detail": "No need, you can focus only on growing their revenue.\nSo, revenue can be broken down as (no. of units)*( revenue/unit).\nFocus on number of units.\nSure. No. of units can be bifurcated as (target market)*(market share%). Now, target market can be increased by entering new geographies, and percentage share can be increased by introducing new products/varieties, exploring new areas within the existing geography, or using alternative distribution channels."
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "CEMENT CONGLOMERATE Facing Low Profitability Fair enough. Quickly list what all distribution channels could th",
      "detail": "CEMENT CONGLOMERATE Facing Low Profitability Fair enough. Quickly list what all distribution channels could they use?\nSurely. Under the B2B part, they can consider contracts with builders, government collaboration (via schemes), or big construction houses. Under the B2C part, they can use their existing third-party distributors, or have their own stores and operate via the hub-&-spoke model.\nGood. So let me explain the current distribution system. There are around 200 dealers, who sell in total around 20MT. So how much would be our percentage?\nClient is able to sell 2MT, that means 10% of the output sold by deale"
    }
  ],
  "recommendations": [
    "Prioritize the highest-impact P0 bottleneck identified in Cement Conglomerate Low Profitability before secondary optimizations.",
    "Pilot the top intervention in a controlled cohort/region with clear North Star and guardrail tracking.",
    "Scale rollout only after verifying unit economics and zero adverse second-order effects."
  ],
  "metricsAndGuardrails": {
    "northStar": "Gross & EBITDA Margin Recovery (Cement Co.)",
    "leading": [
      "Unit realization vs COGS/unit",
      "Capacity utilization & waste/scrap %"
    ],
    "guardrails": [
      "Customer retention / NPS (don’t over-cut quality)",
      "Market share retention"
    ]
  },
  "synthesisScript": "For Cement Co.’s Cement Conglomerate Low Profitability case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Prioritize the highest-impact P0 bottleneck identified in Cement Conglomerate Low Profitability before secondary optimizations. We will validate success via Gross & EBITDA Margin Recovery (Cement Co.) while guarding against Customer retention / NPS (don’t over-cut quality).",
  "interviewerTrap": "Assuming costs rose without checking Revenue (Price × Volume × Mix) first, or skipping Industry-wide vs Company-specific scoping!",
  "variations": [
    {
      "question": "How would your recommendation change if Cement Co. had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Profitability",
    "correctFramework": "Profit = Revenue (Price × Volume × Mix) − Costs (Fixed + Variable along Value Chain)",
    "structureOptions": [
      {
        "label": "Clarify Profit vs Margin & Industry vs Company → Split Revenue (P×V×Mix) vs Value-Chain Costs → Prioritize P0 Fixes",
        "correct": true,
        "feedback": "Classic MBB Profitability structure!"
      },
      {
        "label": "Fire 30% of staff on Minute 2 without reading the P&L",
        "correct": false,
        "feedback": "Never slash costs blindly before knowing whether revenue/mix or raw materials drove the drop."
      },
      {
        "label": "Apply CIRCLES mobile app persona interviews",
        "correct": false,
        "feedback": "CIRCLES is for Product Design, not P&L Profitability diagnosis."
      }
    ],
    "decisionQuiz": {
      "question": "In a Profitability case, why ask immediately if competitors are seeing the same decline?",
      "options": [
        {
          "label": "Separates Industry-wide macro/commodity shocks from Company-specific operational or pricing issues",
          "correct": true,
          "feedback": "Spot on! Instantly cuts the diagnostic tree in half."
        },
        {
          "label": "To copy competitors’ logos",
          "correct": false,
          "feedback": "It isolates internal execution vs external market forces."
        },
        {
          "label": "Because profits don't depend on costs",
          "correct": false,
          "feedback": "Macro input spikes hit the whole industry simultaneously."
        }
      ]
    }
  }
},
{
  "id": "srcrc-shipping-logistics",
  "title": "B2B & B2C Marketing Campaign for Shipping Logistics",
  "company": "Shipping Logistics",
  "source": "SRCRC Casebook 2025",
  "track": "Consulting",
  "category": "GTM",
  "difficulty": 2,
  "isStarter": false,
  "tags": [
    "Shipping Logistics",
    "GTM",
    "Consulting"
  ],
  "prompt": "Marketing Campaign for a Shipping Logistics Company MARKETING CAMPAIGN FOR A SHIPPING LOGISTICS COMPANY There is a shipping logistics company dealing with both B2B and B2C clients.",
  "clarifyingQuestions": [
    {
      "q": "What factors would you consider when tailoring a marketing campaign for B2B versus B2C across all social media platforms?",
      "a": "Before starting, I would like to know what type of shipping the company is involved in. Is it maritime or through land?",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Before starting, I would like to know what type of shipping the company is involved in. Is it maritime or through land?",
      "a": "The company is mainly involved in land freight forwarding.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "So what kind of products does it usually ship? Is it the same for both customer segments or different?",
      "a": "In the B2B segment, the company usually uses tanker freight trucks to transport liquids, such as petroleum, chemicals, or milk. The company is a relatively new player in the B2C segment and wants to explore the packers and movers segment.",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "Market Audit → Beachhead ICP & Positioning → 4Ps → Pre-Launch / Launch / Post-Launch",
  "coreEquation": "Launch Success = Target ICP Reach × Activation Conversion × D30 Retention × Unit Margin",
  "strategyOverview": "Approach B2B & B2C Marketing Campaign for Shipping Logistics (Shipping Logistics) using a GTM structure: start by confirming the business objective and scope, decompose the problem cleanly along Market Audit → Beachhead ICP & Positioning → 4Ps → Pre-Launch / Launch / Post-Launch, and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "B2B & B2C Marketing Campaign for Shipping Logistics — GTM Blueprint",
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
      "prompt": "SHIPPING LOGISTICS COMPANY Marketing Campaign for a Shipping Logistics Company MARKETING CAMPAIGN FOR A SHIPPI",
      "detail": "SHIPPING LOGISTICS COMPANY Marketing Campaign for a Shipping Logistics Company MARKETING CAMPAIGN FOR A SHIPPING LOGISTICS COMPANY There is a shipping logistics company dealing with both B2B and B2C clients.\nWhat factors would you consider when tailoring a marketing campaign for B2B versus B2C across all social media platforms?\nBefore starting, I would like to know what type of shipping the company is involved in. Is it maritime or through land?\nThe company is mainly involved in land freight forwarding."
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "So what kind of products does it usually ship? Is it the same for both customer segments or different?",
      "detail": "So what kind of products does it usually ship? Is it the same for both customer segments or different?\nIn the B2B segment, the company usually uses tanker freight trucks to transport liquids, such as petroleum, chemicals, or milk. The company is a relatively new player in the B2C segment and wants to explore the packers and movers segment.\nAlright. I want to ask if the company has done any previous marketing campaigns in both segments.\nYes, the company has previously done a few campaigns in B2B, but they did not work out as expected. In B2C, they haven't done much as they are entering the market."
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "Can I know the reasons due to which the B2B campaigns didn't work out well?",
      "detail": "Can I know the reasons due to which the B2B campaigns didn't work out well?\nThe reasons aren't very concrete, but the main crux is that they couldn't position their services reasonably and create awareness about them.\nThank you for giving out this information. As B2B marketing typically consists of business decision-makers, business buyers and technical decision-makers, LinkedIn would be an excellent platform due to its professional focus. On this platform, their focus should be on creating awareness about the company's shipping solutions through previous testimonials showcasing their contribution to the industry"
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "Sure. To garner attention, they should create eye-catching content that includes common pain points in the liq",
      "detail": "Sure. To garner attention, they should create eye-catching content that includes common pain points in the liquid shipping logistics industry, such as safety and hygiene. This could be in the form of blog posts, testimonials, or infographics highlighting their strengths. To generate interest, they should focus on how the company provides cost-effective solutions to the problems highlighted in the awareness campaigns, which can be done through targeted email campaigns to share relevant information directly with potential customers.\nTo create desire, they can host webinars and online events to educate potential cus"
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "SHIPPING LOGISTICS COMPANY Marketing Campaign for a Shipping Logistics Company Okay, great. Can you also tell ",
      "detail": "SHIPPING LOGISTICS COMPANY Marketing Campaign for a Shipping Logistics Company Okay, great. Can you also tell how they should go about the B2C segment?\nSure, do we have any budget allocated for the marketing expenses for this segment?\nThey have roughly $100000 for a B2C marketing plan.\nOkay. As B2C is customer-centric, combining platforms like Instagram, Facebook, and YouTube can be effective due to a broader audience and better visual appeal. As they are new to this segment and want to explore it through the packers and movers domain, they should play on their strengths, as safety is the main requirement in such"
    }
  ],
  "recommendations": [
    "Prioritize the highest-impact P0 bottleneck identified in B2B & B2C Marketing Campaign for Shipping Logistics before secondary optimizations.",
    "Pilot the top intervention in a controlled cohort/region with clear North Star and guardrail tracking.",
    "Scale rollout only after verifying unit economics and zero adverse second-order effects."
  ],
  "metricsAndGuardrails": {
    "northStar": "Activated & Retained Beachhead Customers for B2B & B2C Marketing Campaign for Shipping Logistics",
    "leading": [
      "Waitlist-to-activation conversion %",
      "CAC vs Day-30 Retention"
    ],
    "guardrails": [
      "CAC Payback Period (months)",
      "Early churn / negative review rate"
    ]
  },
  "synthesisScript": "For Shipping Logistics’s B2B & B2C Marketing Campaign for Shipping Logistics case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Prioritize the highest-impact P0 bottleneck identified in B2B & B2C Marketing Campaign for Shipping Logistics before secondary optimizations. We will validate success via Activated & Retained Beachhead Customers for B2B & B2C Marketing Campaign for Shipping Logistics while guarding against CAC Payback Period (months).",
  "interviewerTrap": "Targeting 'everyone in the country' on Day 1 or listing generic social ads without defining ICP, positioning, pricing, and phased rollout!",
  "variations": [
    {
      "question": "How would your recommendation change if Shipping Logistics had half the timeline or budget?",
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
  "id": "srcrc-unconventional-psb",
  "title": "Unconventional Public Sector Bank Productivity",
  "company": "Public Sector Bank",
  "source": "SRCRC Casebook 2025",
  "track": "Consulting",
  "category": "Unconventional",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "Public Sector Bank",
    "Unconventional",
    "Consulting"
  ],
  "prompt": "Diagnose the reason for low employee productivity and recommend solutions Client is a public sector bank and they have been facing low employee productivity. You are required to diagnose the problem and come up with",
  "clarifyingQuestions": [
    {
      "q": "Since how long has the client been facing this issue?",
      "a": "It's been there for a very long time. Due to change in management, the client wants to focus on this problem now.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Is there any specific geography where the client has been facing this issue?",
      "a": "This is a pan India problem.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "What does a client mean by employee productivity and how do they measure it?",
      "a": "Percentage of targ ets achieved.",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "First Principles Objective Equation → MECE Drivers & Constraints → Impact Prioritization",
  "coreEquation": "Target Outcome = ∑ (MECE Stakeholder / Funnel / Operational Drivers) Subject to Constraints",
  "strategyOverview": "Approach Unconventional Public Sector Bank Productivity (Public Sector Bank) using a Unconventional structure: start by confirming the business objective and scope, decompose the problem cleanly along First Principles Objective Equation → MECE Drivers & Constraints → Impact Prioritization, and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Unconventional Public Sector Bank Productivity — First-Principles Tree",
    "valueText": "Custom MECE",
    "children": [
      {
        "label": "1. Define Objective & Stakeholder Constraints",
        "valueText": "Scope"
      },
      {
        "label": "2. Primary Equation / Behavioral & Structural Drivers",
        "valueText": "MECE Buckets",
        "highlight": true
      },
      {
        "label": "3. High-Leverage Interventions & Second-Order Risks",
        "valueText": "Action Plan"
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Candidate",
      "prompt": "UNCONVENTIONAL PUBLIC SECTOR BANKS Diagnose the reason for low employee productivity and recommend solutions C",
      "detail": "UNCONVENTIONAL PUBLIC SECTOR BANKS Diagnose the reason for low employee productivity and recommend solutions Client is a public sector bank and they have been facing low employee productivity. You are required to diagnose the problem and come up with\nSure, sir. So, the key problem is that our client is facing low employee productivity.\nI am required to diagnose the problem and provide some recommendations. I would like to ask some preliminary questions.\nDoes the client have a pan-India presence?"
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "Since how long has the client been facing this issue?",
      "detail": "Since how long has the client been facing this issue?\nIt's been there for a very long time. Due to change in management, the client wants to focus on this problem now.\nIs there any specific geography where the client has been facing this issue?\nThis is a pan India problem."
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "What does a client mean by employee productivity and how do they measure it?",
      "detail": "What does a client mean by employee productivity and how do they measure it?\nPercentage of targ ets achieved.\nWhat are the employee targets?\nTargets are a mix of loans, fixed deposits, savings accounts etc. Basically, everything that an employee can sell in a bank branch."
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "Why is our client saying that their employee productivity is low? What are they comparing it to?",
      "detail": "Why is our client saying that their employee productivity is low? What are they comparing it to?\nThough the client's employee productivity is not as bad when compared to other public sector banks, due to change in management, the new benchmark that the company is looking at is private sector banks. In comparison to private sector banks, our client's numbers are very low.\nI would like to start with the first bucket. How are targets set currently?\nEach employee is given targets as per their previous year targets, irrespective of whether they were achieved or not."
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "What are the other aspects considered in target setting?",
      "detail": "What are the other aspects considered in target setting?\nThe process is usually driven by the managers of the employees. You can assume that it is largely a top-down approach.\n100 69 UNCONVENTIONAL PUBLIC SECTOR BANKS Diagnose the reason for low employee productivity and recommend solutions Do some geographies complete their targets vis-à-vis others?\nYes. For example, in Mumbai, some of the branches are doing much better while others are unable to meet their targets."
    }
  ],
  "recommendations": [
    "Prioritize the highest-impact P0 bottleneck identified in Unconventional Public Sector Bank Productivity before secondary optimizations.",
    "Pilot the top intervention in a controlled cohort/region with clear North Star and guardrail tracking.",
    "Scale rollout only after verifying unit economics and zero adverse second-order effects."
  ],
  "metricsAndGuardrails": {
    "northStar": "Primary Policy / Operational Objective Metric (Public Sector Bank)",
    "leading": [
      "Target cohort participation / throughput",
      "Bottleneck conversion %"
    ],
    "guardrails": [
      "Implementation cost & fairness",
      "Unintended gaming / backlash"
    ]
  },
  "synthesisScript": "For Public Sector Bank’s Unconventional Public Sector Bank Productivity case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Prioritize the highest-impact P0 bottleneck identified in Unconventional Public Sector Bank Productivity before secondary optimizations. We will validate success via Primary Policy / Operational Objective Metric (Public Sector Bank) while guarding against Implementation cost & fairness.",
  "interviewerTrap": "Panicking because no textbook framework matches—or forcing a Profitability/4Ps template onto a puzzle that needs First Principles!",
  "variations": [
    {
      "question": "How would your recommendation change if Public Sector Bank had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Unconventional",
    "correctFramework": "First Principles Objective Equation → MECE Drivers & Constraints → Impact Prioritization",
    "structureOptions": [
      {
        "label": "Clarify Objective → Build a Custom First-Principles Equation → Split MECE Drivers → Prioritize High-Impact Levers",
        "correct": true,
        "feedback": "Gold standard for Unconventional cases! Custom MECE equations beat forced templates."
      },
      {
        "label": "Force Porter’s Five Forces onto a public-policy or personal dilemma",
        "correct": false,
        "feedback": "Cookie-cutter frameworks look robotic when the prompt is non-standard."
      },
      {
        "label": "Give up because no memorized acronym fits",
        "correct": false,
        "feedback": "Unconventional cases specifically reward calm First-Principles structuring."
      }
    ],
    "decisionQuiz": {
      "question": "When an interviewer throws an Unconventional puzzle with no standard template, what wins?",
      "options": [
        {
          "label": "Translating the real-world objective into a simple First-Principles MECE equation",
          "correct": true,
          "feedback": "Exactly! Break the outcome into clean, non-overlapping drivers."
        },
        {
          "label": "Reciting SWOT + PESTEL regardless of fit",
          "correct": false,
          "feedback": "Generic acronyms fail unconventional prompts."
        },
        {
          "label": "Guessing one random answer immediately",
          "correct": false,
          "feedback": "Always structure before answering."
        }
      ]
    }
  }
},
{
  "id": "srcrc-hepatitis-c-drug",
  "title": "Determining Price of a New Hepatitis-C Drug",
  "company": "Pharma",
  "source": "SRCRC Casebook 2025",
  "track": "Consulting",
  "category": "Pricing",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "Pharma",
    "Pricing",
    "Consulting"
  ],
  "prompt": "Determine the Price of a New Drug to cure Hepatitis C This is going to be an information heavy case, so listen carefully. Your client is a pharma company, who has made a new drug to cure Hepatitis C, say. It takes 12 months to cure, and would be sold in the US market. You’ve to determine the price of the drug. Currently, there are 100,000 cases per annum. To 80% of these, doctors prescribe a generic drug which is rel",
  "clarifyingQuestions": [
    {
      "q": "Fair enough, how would you calculate it now?",
      "a": "So essentially, Cost of insurance = (20% of 100,000)*300,000 = 20,000 * 300,000 Cost of generic drug = 80,000 * 1,000 Cost of specialized drug = 20,000 * 20,000 Sr, wrwdo frvw htxdov 648 * 10a7, ru vlpsoy $6.48 Bq.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Absolutely right. Now how would you come to the price of the drug?",
      "a": "Right, for this, we can simply divide $6.48 Bn by 100,000 drug takers, which gives us price to be $64,800 per drug.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Correct. But this is true given certain assumptions only, what are those?",
      "a": "So, the first assumption would be that: 1) There is sufficient demand so that all 100,000 units being sold are our client’s drug.",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "Business Model Check → 3Cs of Pricing (Cost Floor | Competitor Anchor | Value WTP) → Tiering & Test",
  "coreEquation": "Optimal Price ∈ [Unit Cost Floor, Perceived Value WTP Ceiling] Tuned to Elasticity",
  "strategyOverview": "Approach Determining Price of a New Hepatitis-C Drug (Pharma) using a Pricing structure: start by confirming the business objective and scope, decompose the problem cleanly along Business Model Check → 3Cs of Pricing (Cost Floor | Competitor Anchor | Value WTP) → Tiering & Test, and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Determining Price of a New Hepatitis-C Drug — 3Cs Pricing Tree",
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
      "prompt": "PRICE OF THE DRUG Determine the Price of a New Drug to cure Hepatitis C This is going to be an information hea",
      "detail": "PRICE OF THE DRUG Determine the Price of a New Drug to cure Hepatitis C This is going to be an information heavy case, so listen carefully. Your client is a pharma company, who has made a new drug to cure Hepatitis C, say. It takes 12 months to cure, and would be sold in the US market. You’ve to determine the price of the drug. Currently, there are 100,000 cases per annum. To 80% of these, doctors prescribe a generic drug which is relatively cheap, and costs $1,000. To the remaining 20%, doctors prescribe a more specialized drug which costs $20,000 per treatment. Across these 100,000 cases, irrespective of the dr"
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "Fair enough, how would you calculate it now?",
      "detail": "Fair enough, how would you calculate it now?\nSo essentially, Cost of insurance = (20% of 100,000)*300,000 = 20,000 * 300,000 Cost of generic drug = 80,000 * 1,000 Cost of specialized drug = 20,000 * 20,000 Sr, wrwdo frvw htxdov 648 * 10a7, ru vlpsoy $6.48 Bq."
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "Absolutely right. Now how would you come to the price of the drug?",
      "detail": "Absolutely right. Now how would you come to the price of the drug?\nRight, for this, we can simply divide $6.48 Bn by 100,000 drug takers, which gives us price to be $64,800 per drug."
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "Correct. But this is true given certain assumptions only, what are those?",
      "detail": "Correct. But this is true given certain assumptions only, what are those?\nSo, the first assumption would be that: 1) There is sufficient demand so that all 100,000 units being sold are our client’s drug."
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "2) Distributors are able to push our client’s drug to everyone.",
      "detail": "2) Distributors are able to push our client’s drug to everyone.\n3) Doctors actually recommend this drug to everyone irrespective. 4) Results indicating 0% failure are true and would hold till eternity. 5) All the existing drugs cease to exist or their producers are simply wiped-off the picture."
    }
  ],
  "recommendations": [
    "Prioritize the highest-impact P0 bottleneck identified in Determining Price of a New Hepatitis-C Drug before secondary optimizations.",
    "Pilot the top intervention in a controlled cohort/region with clear North Star and guardrail tracking.",
    "Scale rollout only after verifying unit economics and zero adverse second-order effects."
  ],
  "metricsAndGuardrails": {
    "northStar": "Net Contribution Margin & Paid ARPU Growth (Pharma)",
    "leading": [
      "Pricing page → checkout conversion %",
      "Tier upgrade / annual plan share"
    ],
    "guardrails": [
      "Churn / price-complaint rate",
      "Competitive win/loss rate"
    ]
  },
  "synthesisScript": "For Pharma’s Determining Price of a New Hepatitis-C Drug case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Prioritize the highest-impact P0 bottleneck identified in Determining Price of a New Hepatitis-C Drug before secondary optimizations. We will validate success via Net Contribution Margin & Paid ARPU Growth (Pharma) while guarding against Churn / price-complaint rate.",
  "interviewerTrap": "Using only Cost-Plus markup and ignoring Value-Based WTP, elasticity, cannibalization, or two-sided marketplace effects!",
  "variations": [
    {
      "question": "How would your recommendation change if Pharma had half the timeline or budget?",
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
  "id": "srcrc-five-star-hotel",
  "title": "Mumbai 5-Star Hotel Lower Profitability",
  "company": "Hospitality",
  "source": "SRCRC Casebook 2025",
  "track": "Consulting",
  "category": "Profitability",
  "difficulty": 2,
  "isStarter": false,
  "tags": [
    "Hospitality",
    "Profitability",
    "Consulting"
  ],
  "prompt": "Facing low profitability Your client is a 5-star hotel in Mumbai. They have been facing lower profitability.",
  "clarifyingQuestions": [
    {
      "q": "First, can you please tell whether the client is a hotel chain or single hotel?",
      "a": "It is a single hotel which has been facing the issue.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Since how long has the client been facing this issue?",
      "a": "The issue persists since the last 3 years but it has amplified in the last 1 year.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Since the loss has been greater i n the last 1 year, I think there might be multiple recent factors affecting the hotel. Next, I would like to know if other hotels have been facing this issue as well or is it just us?",
      "a": "It's just our hotel which has faced this issue.",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "Profit = Revenue (Price × Volume × Mix) − Costs (Fixed + Variable along Value Chain)",
  "coreEquation": "Profit = ∑(Units × Price × Margin Mix) − (Fixed Overhead + Variable Value-Chain Costs)",
  "strategyOverview": "Approach Mumbai 5-Star Hotel Lower Profitability (Hospitality) using a Profitability structure: start by confirming the business objective and scope, decompose the problem cleanly along Profit = Revenue (Price × Volume × Mix) − Costs (Fixed + Variable along Value Chain), and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Mumbai 5-Star Hotel Lower Profitability — Profitability Tree",
    "valueText": "Rev vs Cost",
    "children": [
      {
        "label": "Revenue Side (Price × Volume × Product/Channel Mix)",
        "valueText": "Internal vs External",
        "highlight": true
      },
      {
        "label": "Cost Side (Procurement → Mfg → Logistics → SG&A)",
        "valueText": "Fixed vs Variable",
        "highlight": true
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Candidate",
      "prompt": "FIVE STAR HOTELS Facing low profitability Your client is a 5-star hotel in Mumbai. They have been facing lower",
      "detail": "FIVE STAR HOTELS Facing low profitability Your client is a 5-star hotel in Mumbai. They have been facing lower profitability.\nYou are required to identify the reasons behind the same.\nFirst, can you please tell whether the client is a hotel chain or single hotel?\nIt is a single hotel which has been facing the issue."
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "Since how long has the client been facing this issue?",
      "detail": "Since how long has the client been facing this issue?\nThe issue persists since the last 3 years but it has amplified in the last 1 year.\nSince the loss has been greater i n the last 1 year, I think there might be multiple recent factors affecting the hotel. Next, I would like to know if other hotels have been facing this issue as well or is it just us?\nIt's just our hotel which has faced this issue."
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "Alrig ht! So, this is not a market wide problem. Next, I would like to know more about the hotel itself. What ",
      "detail": "Alrig ht! So, this is not a market wide problem. Next, I would like to know more about the hotel itself. What type of a hotel is this?\nIt is a luxury hotel with different rooms for different customer types.\nWhat are the types of customers that we normally receive at our hotel? And hav we observed any change in their ratios?\nTwo types are tourists & business customers. The split be tween them is 30:70."
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "Earlier, the split was 50:50.",
      "detail": "Earlier, the split was 50:50.\nAnd what are the revenue streams which our hotel has?\nThere are 4 streams - rooms, restaurants, banquet hall & ancillary services.\nAlright! Is there any particular-revenue stream where the client has been facing this issue?"
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "Let's start with the room revenues here first and slowly move on to others.",
      "detail": "Let's start with the room revenues here first and slowly move on to others.\nSure! Profits are a function of revenues or costs. So, do we know whether the revenues of the hotel have gone down or costs have gone up or both?\nSo, it's a situation of both. But let's start with the revenues first.\nRight! And starting off with the room revenues, we can bifurcate that into 2 parts - room rent and related purchases such as room service."
    }
  ],
  "recommendations": [
    "Prioritize the highest-impact P0 bottleneck identified in Mumbai 5-Star Hotel Lower Profitability before secondary optimizations.",
    "Pilot the top intervention in a controlled cohort/region with clear North Star and guardrail tracking.",
    "Scale rollout only after verifying unit economics and zero adverse second-order effects."
  ],
  "metricsAndGuardrails": {
    "northStar": "Gross & EBITDA Margin Recovery (Hospitality)",
    "leading": [
      "Unit realization vs COGS/unit",
      "Capacity utilization & waste/scrap %"
    ],
    "guardrails": [
      "Customer retention / NPS (don’t over-cut quality)",
      "Market share retention"
    ]
  },
  "synthesisScript": "For Hospitality’s Mumbai 5-Star Hotel Lower Profitability case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Prioritize the highest-impact P0 bottleneck identified in Mumbai 5-Star Hotel Lower Profitability before secondary optimizations. We will validate success via Gross & EBITDA Margin Recovery (Hospitality) while guarding against Customer retention / NPS (don’t over-cut quality).",
  "interviewerTrap": "Assuming costs rose without checking Revenue (Price × Volume × Mix) first, or skipping Industry-wide vs Company-specific scoping!",
  "variations": [
    {
      "question": "How would your recommendation change if Hospitality had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Profitability",
    "correctFramework": "Profit = Revenue (Price × Volume × Mix) − Costs (Fixed + Variable along Value Chain)",
    "structureOptions": [
      {
        "label": "Clarify Profit vs Margin & Industry vs Company → Split Revenue (P×V×Mix) vs Value-Chain Costs → Prioritize P0 Fixes",
        "correct": true,
        "feedback": "Classic MBB Profitability structure!"
      },
      {
        "label": "Fire 30% of staff on Minute 2 without reading the P&L",
        "correct": false,
        "feedback": "Never slash costs blindly before knowing whether revenue/mix or raw materials drove the drop."
      },
      {
        "label": "Apply CIRCLES mobile app persona interviews",
        "correct": false,
        "feedback": "CIRCLES is for Product Design, not P&L Profitability diagnosis."
      }
    ],
    "decisionQuiz": {
      "question": "In a Profitability case, why ask immediately if competitors are seeing the same decline?",
      "options": [
        {
          "label": "Separates Industry-wide macro/commodity shocks from Company-specific operational or pricing issues",
          "correct": true,
          "feedback": "Spot on! Instantly cuts the diagnostic tree in half."
        },
        {
          "label": "To copy competitors’ logos",
          "correct": false,
          "feedback": "It isolates internal execution vs external market forces."
        },
        {
          "label": "Because profits don't depend on costs",
          "correct": false,
          "feedback": "Macro input spikes hit the whole industry simultaneously."
        }
      ]
    }
  }
},
{
  "id": "srcrc-ecom-sustainability",
  "title": "E-Commerce Company Taking Sustainable Measures",
  "company": "E-Commerce",
  "source": "SRCRC Casebook 2025",
  "track": "Consulting",
  "category": "Unconventional",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "E-Commerce",
    "Unconventional",
    "Consulting"
  ],
  "prompt": "Flipkart’s Shift to Sustainable E-Commerce Operations The consultancy is tasked with devising strategies for Flipkart, a major e- commerce player, to transition to sustainability. The goal is to integrate environmental awareness and social responsibility into Flipkart's operations. How can the consultancy help Flipkart smoothly move towards a sustainable business model?",
  "clarifyingQuestions": [
    {
      "q": "What is the objective behind such a proposed move, and has anything similar been done historically?",
      "a": "So, even though Flipkart has not done any similar change previously, its competitors have shifted towards sustainability, and are getting good returns or profits, hence the objective to shift towards sustainable business.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Oh, seems logical. Just one last clarification; we’re talking about only the Indian operations and that too for Flipkart’s main delivery business, and not any subsidiary operations or sister companies?",
      "a": "Absolutely correct.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "100 82 Flipkart’s Shift to Sustainable E-Commerce Operations How would a shift in model help here?",
      "a": "Since Flipkart is an Indian brand, it can work 100% on the inventory model, which would enable all the operations to be carried at the Flipkart’s warehouses, starting from packaging to delivery and returns, which would save a lot of resourc",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "First Principles Objective Equation → MECE Drivers & Constraints → Impact Prioritization",
  "coreEquation": "Target Outcome = ∑ (MECE Stakeholder / Funnel / Operational Drivers) Subject to Constraints",
  "strategyOverview": "Approach E-Commerce Company Taking Sustainable Measures (E-Commerce) using a Unconventional structure: start by confirming the business objective and scope, decompose the problem cleanly along First Principles Objective Equation → MECE Drivers & Constraints → Impact Prioritization, and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "E-Commerce Company Taking Sustainable Measures — First-Principles Tree",
    "valueText": "Custom MECE",
    "children": [
      {
        "label": "1. Define Objective & Stakeholder Constraints",
        "valueText": "Scope"
      },
      {
        "label": "2. Primary Equation / Behavioral & Structural Drivers",
        "valueText": "MECE Buckets",
        "highlight": true
      },
      {
        "label": "3. High-Leverage Interventions & Second-Order Risks",
        "valueText": "Action Plan"
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Interviewer",
      "prompt": "Flipkart’s Shift to Sustainable E-Commerce Operations The consultancy is tasked with devising strategies for F",
      "detail": "Flipkart’s Shift to Sustainable E-Commerce Operations The consultancy is tasked with devising strategies for Flipkart, a major e- commerce player, to transition to sustainability. The goal is to integrate environmental awareness and social responsibility into Flipkart's operations. How can the consultancy help Flipkart smoothly move towards a sustainable business model?\nJust to confirm if I’ve got it right, our client, Flipkart, is looking towards both environmental and social sustainability, and we’ve to suggest ways to help them for the same.\nWhat is the objective behind such a proposed move, and has anything s"
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "So, even though Flipkart has not done any similar change previously, its competitors have shifted towards sust",
      "detail": "So, even though Flipkart has not done any similar change previously, its competitors have shifted towards sustainability, and are getting good returns or profits, hence the objective to shift towards sustainable business.\nOh, seems logical. Just one last clarification; we’re talking about only the Indian operations and that too for Flipkart’s main delivery business, and not any subsidiary operations or sister companies?\nAbsolutely correct."
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "I like the value chain part, so let’s focus on that for now and circle back to the other later.",
      "detail": "I like the value chain part, so let’s focus on that for now and circle back to the other later.\nUnderstood. For the value chain part, I’ve divided it into 3 parts:\nPre-requisites During operations Post-delivery Under pre-requisites, I’d consider materials, suppliers, logistics + transportation, and R&D. Under operations, I’ll consider storage, packaging, inventory management, processing, tech side operations, and outbound logistics. Lastly, I’ll consider reverse logistics and customer service under post-delivery phase."
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "Looks very comprehensive, let’s go one-by-one and start with pre-requisites.",
      "detail": "Looks very comprehensive, let’s go one-by-one and start with pre-requisites.\nThanks a lot, surely! So, under materials or products, we can have clean, green, cruelty free, and products with longer shelf life. Under suppliers, we can convince old suppliers using incentives, or tap new suppliers who abide to sustainable practices and provide clean products. Under logistics and transportation, we can either shift to EVs, or move from marketplace model to inventory mode.\n100 82 Flipkart’s Shift to Sustainable E-Commerce Operations How would a shift in model help here?"
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "Since Flipkart is an Indian brand, it can work 100% on the inventory model, which would enable all the operati",
      "detail": "Since Flipkart is an Indian brand, it can work 100% on the inventory model, which would enable all the operations to be carried at the Flipkart’s warehouses, starting from packaging to delivery and returns, which would save a lot of resources, save costs, and increase the profits made.\nGood. But how do you think Flipkart would be able to undertake this change, would it simply stop selling all other products that aren’t sustainable?\nSo, what I can propose is that there should be a ‘category-wise no- unsustainable’ product policy. Here, a cost-benefit analysis can be done for each category, in order to evaluate whi"
    }
  ],
  "recommendations": [
    "Prioritize the highest-impact P0 bottleneck identified in E-Commerce Company Taking Sustainable Measures before secondary optimizations.",
    "Pilot the top intervention in a controlled cohort/region with clear North Star and guardrail tracking.",
    "Scale rollout only after verifying unit economics and zero adverse second-order effects."
  ],
  "metricsAndGuardrails": {
    "northStar": "Primary Policy / Operational Objective Metric (E-Commerce)",
    "leading": [
      "Target cohort participation / throughput",
      "Bottleneck conversion %"
    ],
    "guardrails": [
      "Implementation cost & fairness",
      "Unintended gaming / backlash"
    ]
  },
  "synthesisScript": "For E-Commerce’s E-Commerce Company Taking Sustainable Measures case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Prioritize the highest-impact P0 bottleneck identified in E-Commerce Company Taking Sustainable Measures before secondary optimizations. We will validate success via Primary Policy / Operational Objective Metric (E-Commerce) while guarding against Implementation cost & fairness.",
  "interviewerTrap": "Panicking because no textbook framework matches—or forcing a Profitability/4Ps template onto a puzzle that needs First Principles!",
  "variations": [
    {
      "question": "How would your recommendation change if E-Commerce had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Unconventional",
    "correctFramework": "First Principles Objective Equation → MECE Drivers & Constraints → Impact Prioritization",
    "structureOptions": [
      {
        "label": "Clarify Objective → Build a Custom First-Principles Equation → Split MECE Drivers → Prioritize High-Impact Levers",
        "correct": true,
        "feedback": "Gold standard for Unconventional cases! Custom MECE equations beat forced templates."
      },
      {
        "label": "Force Porter’s Five Forces onto a public-policy or personal dilemma",
        "correct": false,
        "feedback": "Cookie-cutter frameworks look robotic when the prompt is non-standard."
      },
      {
        "label": "Give up because no memorized acronym fits",
        "correct": false,
        "feedback": "Unconventional cases specifically reward calm First-Principles structuring."
      }
    ],
    "decisionQuiz": {
      "question": "When an interviewer throws an Unconventional puzzle with no standard template, what wins?",
      "options": [
        {
          "label": "Translating the real-world objective into a simple First-Principles MECE equation",
          "correct": true,
          "feedback": "Exactly! Break the outcome into clean, non-overlapping drivers."
        },
        {
          "label": "Reciting SWOT + PESTEL regardless of fit",
          "correct": false,
          "feedback": "Generic acronyms fail unconventional prompts."
        },
        {
          "label": "Guessing one random answer immediately",
          "correct": false,
          "feedback": "Always structure before answering."
        }
      ]
    }
  }
},
{
  "id": "srcrc-mobile-showroom",
  "title": "Reasons for Revenue Decline of Mobile Phone Showroom",
  "company": "Retail Store",
  "source": "SRCRC Casebook 2025",
  "track": "Consulting",
  "category": "Profitability",
  "difficulty": 2,
  "isStarter": false,
  "tags": [
    "Retail Store",
    "Profitability",
    "Consulting"
  ],
  "prompt": "Reasons for the Decline in Revenue of a Mobile Store The revenue from low-end mobile phones at Croma’s Rajouri Garden Showroom has declined.",
  "clarifyingQuestions": [
    {
      "q": "When you say low-end mobile phones, does it mean mobile phones <INR 10,000?",
      "a": "Yes, that’s correct.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "How long has it been since we’ve experienced a decline in revenue?",
      "a": "Around 3 months.",
      "why": "Scopes the problem boundary before building the issue tree."
    },
    {
      "q": "Have other electronic stores been facing the same problem?",
      "a": "None that we know of.",
      "why": "Scopes the problem boundary before building the issue tree."
    }
  ],
  "frameworkUsed": "Profit = Revenue (Price × Volume × Mix) − Costs (Fixed + Variable along Value Chain)",
  "coreEquation": "Profit = ∑(Units × Price × Margin Mix) − (Fixed Overhead + Variable Value-Chain Costs)",
  "strategyOverview": "Approach Reasons for Revenue Decline of Mobile Phone Showroom (Retail Store) using a Profitability structure: start by confirming the business objective and scope, decompose the problem cleanly along Profit = Revenue (Price × Volume × Mix) − Costs (Fixed + Variable along Value Chain), and end with prioritized P0 actions plus metrics/guardrails.",
  "tree": {
    "label": "Reasons for Revenue Decline of Mobile Phone Showroom — Profitability Tree",
    "valueText": "Rev vs Cost",
    "children": [
      {
        "label": "Revenue Side (Price × Volume × Product/Channel Mix)",
        "valueText": "Internal vs External",
        "highlight": true
      },
      {
        "label": "Cost Side (Procurement → Mfg → Logistics → SG&A)",
        "valueText": "Fixed vs Variable",
        "highlight": true
      }
    ]
  },
  "walkthrough": [
    {
      "phase": "1. Context & Scoping",
      "speaker": "Candidate",
      "prompt": "MOBILE PHONE SHOWROOM Reasons for the Decline in Revenue of a Mobile Store The revenue from low-end mobile pho",
      "detail": "MOBILE PHONE SHOWROOM Reasons for the Decline in Revenue of a Mobile Store The revenue from low-end mobile phones at Croma’s Rajouri Garden Showroom has declined.\nWhen you say low-end mobile phones, does it mean mobile phones <INR 10,000?\nYes, that’s correct."
    },
    {
      "phase": "2. Initial Structure & Hypothesis",
      "speaker": "Candidate",
      "prompt": "How long has it been since we’ve experienced a decline in revenue?",
      "detail": "How long has it been since we’ve experienced a decline in revenue?\nHave other electronic stores been facing the same problem?\nNone that we know of."
    },
    {
      "phase": "3. Deep-Dive Investigation",
      "speaker": "Candidate",
      "prompt": "What other products are sold at Croma, Rajouri Garden?",
      "detail": "What other products are sold at Croma, Rajouri Garden?\nFor the purpose of this case, you can assume only mobile phones.\nOkay. Revenue is a function of Price x Quantity. Which of these segments has witnessed a decline?"
    },
    {
      "phase": "4. Key Findings & Trade-offs",
      "speaker": "Candidate",
      "prompt": "Price has remained constant.",
      "detail": "Price has remained constant.\nSo the quantity has declined. Which part of the value chain would you like to focus on: Production, Distribution or Demand?\nDemand So demand can be defined as Footfall percentage of people purchasing mobile phones. Has the footfall decreased or has the percentage of people making a purchase decreased?"
    },
    {
      "phase": "5. Synthesis & Recommendations",
      "speaker": "Candidate",
      "prompt": "Footfall has decreased.",
      "detail": "Footfall has decreased.\nTh is could be due to factors such as:\nAccessibility. Our store isn’t accessible anymore due to construction, road- closures, etc."
    }
  ],
  "recommendations": [
    "Prioritize the highest-impact P0 bottleneck identified in Reasons for Revenue Decline of Mobile Phone Showroom before secondary optimizations.",
    "Pilot the top intervention in a controlled cohort/region with clear North Star and guardrail tracking.",
    "Scale rollout only after verifying unit economics and zero adverse second-order effects."
  ],
  "metricsAndGuardrails": {
    "northStar": "Gross & EBITDA Margin Recovery (Retail Store)",
    "leading": [
      "Unit realization vs COGS/unit",
      "Capacity utilization & waste/scrap %"
    ],
    "guardrails": [
      "Customer retention / NPS (don’t over-cut quality)",
      "Market share retention"
    ]
  },
  "synthesisScript": "For Retail Store’s Reasons for Revenue Decline of Mobile Phone Showroom case, I recommend focusing first on the highest-leverage P0 driver uncovered in our MECE breakdown: Prioritize the highest-impact P0 bottleneck identified in Reasons for Revenue Decline of Mobile Phone Showroom before secondary optimizations. We will validate success via Gross & EBITDA Margin Recovery (Retail Store) while guarding against Customer retention / NPS (don’t over-cut quality).",
  "interviewerTrap": "Assuming costs rose without checking Revenue (Price × Volume × Mix) first, or skipping Industry-wide vs Company-specific scoping!",
  "variations": [
    {
      "question": "How would your recommendation change if Retail Store had half the timeline or budget?",
      "hint": "Cut P1/P2 initiatives and execute only the fastest high-impact P0 lever via a lean pilot."
    }
  ],
  "guidedPractice": {
    "correctCategory": "Profitability",
    "correctFramework": "Profit = Revenue (Price × Volume × Mix) − Costs (Fixed + Variable along Value Chain)",
    "structureOptions": [
      {
        "label": "Clarify Profit vs Margin & Industry vs Company → Split Revenue (P×V×Mix) vs Value-Chain Costs → Prioritize P0 Fixes",
        "correct": true,
        "feedback": "Classic MBB Profitability structure!"
      },
      {
        "label": "Fire 30% of staff on Minute 2 without reading the P&L",
        "correct": false,
        "feedback": "Never slash costs blindly before knowing whether revenue/mix or raw materials drove the drop."
      },
      {
        "label": "Apply CIRCLES mobile app persona interviews",
        "correct": false,
        "feedback": "CIRCLES is for Product Design, not P&L Profitability diagnosis."
      }
    ],
    "decisionQuiz": {
      "question": "In a Profitability case, why ask immediately if competitors are seeing the same decline?",
      "options": [
        {
          "label": "Separates Industry-wide macro/commodity shocks from Company-specific operational or pricing issues",
          "correct": true,
          "feedback": "Spot on! Instantly cuts the diagnostic tree in half."
        },
        {
          "label": "To copy competitors’ logos",
          "correct": false,
          "feedback": "It isolates internal execution vs external market forces."
        },
        {
          "label": "Because profits don't depend on costs",
          "correct": false,
          "feedback": "Macro input spikes hit the whole industry simultaneously."
        }
      ]
    }
  }
}
);
