window.CM_DATA = window.CM_DATA || {};
window.CM_DATA.cases = window.CM_DATA.cases || [];

window.CM_DATA.cases.push(
{
  "id": "cm-cons-prof-fan-company",
  "title": "Fan Company Margin Revival",
  "company": "Fan Manufacturer",
  "track": "Consulting",
  "category": "Profitability",
  "difficulty": 1,
  "isStarter": true,
  "tags": [
    "Profitability",
    "Manufacturing",
    "Value Chain",
    "Gross Margin"
  ],
  "prompt": "Your client is a ceiling and table fan manufacturer in India holding roughly 12% market share with mid-range positioning. They want to improve their gross profit margin. How would you approach this?",
  "clarifyingQuestions": [
    {
      "q": "Are we targeting gross margin expansion through revenue levers, cost reduction, or both?",
      "a": "Both levers are on the table—diagnose why margins are constrained and identify where we can expand them.",
      "why": "Confirms that both pricing/mix differentiation and value-chain COGS optimization should be included in the issue tree."
    },
    {
      "q": "What exact fan models do we sell, and how are we positioned against competitors?",
      "a": "We sell standard ceiling and table fans with basic regulators and no smart features, while national rivals like Havells, Crompton, and Orient lead with ~12% share held by us.",
      "why": "Establishes whether our mid-range SKU mix lacks differentiation and faces elastic demand."
    },
    {
      "q": "Do competitors offer premium features that allow them to command higher margins?",
      "a": "Yes, leading players sell energy-efficient BLDC motors, quieter blades, modern aesthetics, and IoT-enabled fans at higher price points.",
      "why": "Determines if margin compression stems from an outdated product portfolio rather than industry-wide commoditization."
    }
  ],
  "frameworkUsed": "Gross Margin Tree = Revenue Differentiation (Price/Mix) − Value Chain Costs (Procurement → Mfg → Distribution)",
  "coreEquation": "Gross Margin % = (Revenue − COGS) ÷ Revenue",
  "strategyOverview": "Because mid-range standard fan demand is price-elastic, blanket price hikes will erode volume. Drive immediate gross margin relief across the value chain—bulk procurement of copper, aluminum, and plastics, SKU modularization, and lean manufacturing—while reinvesting savings into R&D for BLDC/IoT fans to shift mix toward higher-margin urban tiers.",
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
      "phase": "Scoping",
      "speaker": "Interviewer",
      "kind": "prompt",
      "detail": "Your client is a ceiling and table fan manufacturer in India holding roughly 12% market share with mid-range positioning. They want to improve their gross profit margin. How would you approach this?"
    },
    {
      "phase": "Scoping",
      "speaker": "Candidate",
      "kind": "question",
      "detail": "Before structuring my approach, I would like to clarify three points. Are we open to both revenue and cost levers, what specific models do we manufacture, and how do rivals like Havells, Crompton, and Orient differentiate their offerings?",
      "reasoning": "Clarifying product positioning and competitive features determines whether the client has pricing power or must rely on cost cuts and mix upgrades."
    },
    {
      "phase": "Structure",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "You can explore both revenue and cost levers. We sell standard ceiling and table fans with basic regulators, whereas national leaders also offer BLDC motors, IoT controls, and modern designs at premium prices. How would you structure your analysis?"
    },
    {
      "phase": "Structure",
      "speaker": "Candidate",
      "kind": "framework",
      "detail": "Since gross margin equals Revenue minus COGS divided by Revenue, I will examine two branches. On revenue, I will assess pricing elasticity and product-mix differentiation toward premium segments; on costs, I will break down the value chain across raw material procurement, manufacturing conversion, and outbound distribution.",
      "reasoning": "Splitting gross margin into mix-driven pricing power and value-chain COGS isolates immediate cost savings from medium-term product repositioning."
    },
    {
      "phase": "Investigation",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "That structure works well. Our mid-range buyers are highly price-sensitive, so raising prices on existing basic models will hurt unit volume. At the same time, our plants produce numerous non-standardized components across models, and raw material purchasing is fragmented.",
      "causes": [
        "Price-elastic mid-range demand prevents raising prices on basic models",
        "Fragmented raw material purchasing and low component standardization inflate COGS"
      ]
    },
    {
      "phase": "Root Cause",
      "speaker": "Candidate",
      "kind": "root-cause",
      "detail": "That points to a two-part bottleneck: we lack differentiated features like BLDC motors to justify premium pricing, while low part commonality across ceiling and table models inflates copper, aluminum, and plastic procurement and assembly costs. Consolidating vendors and modularizing parts could lower COGS immediately to fund R&D.",
      "reasoning": "Connecting fragmented BOMs to elastic mid-range pricing reveals that near-term value-chain savings are required to finance premium R&D.",
      "causes": [
        "Absence of energy-efficient BLDC and modern SKUs limits high-margin urban mix",
        "Non-modular fan parts prevent bulk procurement discounts and lean assembly"
      ]
    },
    {
      "phase": "Solution",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "Exactly right. If management commits to R&D for BLDC and IoT-enabled fans, where specifically in the value chain should we cut costs first, and how should we sequence the rollout without hurting our core 12% share?"
    },
    {
      "phase": "Synthesis",
      "speaker": "Candidate",
      "kind": "synthesis",
      "detail": "We should execute a two-horizon margin revival plan: first, cut COGS by consolidating copper, aluminum, and plastic vendors, modularizing shared fan components, and optimizing dealer freight; second, reinvest those savings into BLDC and modern aesthetic R&D for urban premium tiers. We will track gross margin %, BOM cost per unit, and premium SKU mix while guarding against market-share loss in core mid-range SKUs.",
      "reasoning": "Sequencing near-term value-chain COGS cuts ahead of medium-term BLDC mix expansion expands margins safely without alienating price-sensitive buyers."
    }
  ],
  "recommendations": [
    "P0: Consolidate copper, aluminum, and plastic procurement under bulk vendor contracts and modularize shared components across ceiling and table fan SKUs to lower unit COGS immediately.",
    "P1: Streamline plant assembly through lean automation and rebalance outbound freight and dealer slab incentives without raising list prices on elastic mid-range models.",
    "P2: Reinvest near-term COGS savings into R&D for energy-efficient BLDC motors, quieter blade profiles, and IoT-ready designs to capture higher-margin urban demand."
  ],
  "metricsAndGuardrails": {
    "northStar": "Gross & EBITDA Margin Recovery (Fan Manufacturer)",
    "leading": [
      "Unit realization vs COGS/unit",
      "Capacity utilization & waste/scrap %"
    ],
    "guardrails": [
      "Customer retention / NPS (don’t over-cut quality)",
      "Market share retention"
    ]
  },
  "synthesisScript": "To revive gross profit margins for our mid-range fan manufacturer, we should pair immediate value-chain COGS reductions with disciplined product-mix upgrading. Consolidating copper and aluminum procurement, modularizing shared components, and tightening outbound freight will unlock near-term margin expansion without risking our 12% base share, funding BLDC and modern-design R&D to capture premium urban pricing.",
  "interviewerTrap": "Recommending a 10% price hike on commodity mid-range fans—elastic buyers will switch immediately unless you differentiate with BLDC efficiency or aesthetics!",
  "variations": [
    {
      "question": "How would your recommendation change if Fan Manufacturer had half the timeline or budget?",
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
  "id": "cm-cons-02-clothing-fashion-profitability",
  "title": "Clothing Fashion Profitability",
  "company": "Apparel Brand",
  "track": "Consulting",
  "category": "Profitability",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "Profitability",
    "Consulting"
  ],
  "prompt": "Your client is a major apparel brand with a nationwide offline and e-commerce presence in India. Their profitability has declined even though revenues have remained stable. Identify the cost drivers behind this drop and recommend a recovery plan.",
  "clarifyingQuestions": [
    {
      "q": "Is this profitability decline unique to our client, or is the broader Indian fashion industry facing similar margin pressure?",
      "a": "The issue is specific to our client; the broader fashion industry has grown at roughly 7% CAGR over the past two years with healthy peer margins.",
      "why": "Isolates internal operational cost drivers rather than macro or industry-wide margin compression."
    },
    {
      "q": "Have revenues truly held steady, and how is our manufacturing and store footprint distributed across India?",
      "a": "Revenues are stable. Our major factories and head offices are in Hyderabad and Chennai, and we distribute nationwide, though North India sales are relatively weaker.",
      "why": "Highlights a potential geographic mismatch between South Indian production hubs and northern distribution."
    },
    {
      "q": "Are we seeing the cost surge in manufacturing, raw materials, or downstream storage and transportation?",
      "a": "Manufacturing and sourcing costs are in line with peers, whereas transportation and storage costs are noticeably higher than competitors.",
      "why": "Narrows the investigation directly to outbound logistics, route economics, and warehouse placement."
    }
  ],
  "frameworkUsed": "Profit = Revenue (Price × Volume × Mix) − Costs (Fixed + Variable along Value Chain)",
  "coreEquation": "Profit = ∑(Units × Price × Margin Mix) − (Fixed Overhead + Variable Value-Chain Costs)",
  "strategyOverview": "With stable revenues and ~7% industry growth, margin erosion is driven by elevated outbound transportation and warehousing costs. Long-haul trucking from Hyderabad and Chennai factories to the Gurgaon warehouse via the MP–UP–NCR highway incurs heavy distance freight and repeated ~₹200 Madhya Pradesh tolls; switching to multimodal rail freight and northern warehousing will restore unit economics.",
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
      "phase": "Scoping",
      "speaker": "Interviewer",
      "kind": "prompt",
      "detail": "Your client is a major apparel brand with a nationwide offline and e-commerce presence in India. Their profitability has declined even though revenues have remained stable. Identify the cost drivers behind this drop and recommend a recovery plan."
    },
    {
      "phase": "Scoping",
      "speaker": "Candidate",
      "kind": "question",
      "detail": "Thank you. To scope the problem, is this profitability slump industry-wide or specific to us, and where are our manufacturing units and key markets located?",
      "reasoning": "Checking peer performance and geographic footprint tests whether internal supply-chain geometry is driving the cost gap."
    },
    {
      "phase": "Structure",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "The industry has grown around 7% CAGR over the last two years and competitors remain profitable. Our factories and head offices are in Hyderabad and Chennai, from where we supply nationwide stores and e-commerce, though North India sales are softer. How would you break down the cost side?"
    },
    {
      "phase": "Structure",
      "speaker": "Candidate",
      "kind": "framework",
      "detail": "Since revenue is stable, I will walk the cost value chain from raw material sourcing and factory conversion to inventory storage, outbound transportation, and marketing overhead. Given our factories sit in South India while serving a national footprint, I would like to compare our storage and transportation costs against peers first.",
      "reasoning": "Mapping costs along the physical value chain prioritizes logistics early because all finished apparel originates from two southern cities."
    },
    {
      "phase": "Investigation",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "Good instinct. Sourcing and manufacturing costs are competitive, but our transportation and storage costs exceed industry benchmarks. Goods move primarily by road trucks from Hyderabad and Chennai to regional hubs—for example, along the MP–UP–NCR highway into our Gurgaon warehouse.",
      "causes": [
        "All national inventory originates from South Indian plants in Hyderabad and Chennai",
        "Heavy reliance on long-haul road trucking across interstate corridors"
      ]
    },
    {
      "phase": "Root Cause",
      "speaker": "Candidate",
      "kind": "root-cause",
      "detail": "Shipping bulky apparel strictly by truck over 1,500+ km routes inflates per-unit freight, fuel, and transit inventory costs. Have there also been recent toll or highway regulatory changes along the Madhya Pradesh corridor that compounded these trucking expenses?",
      "reasoning": "Probing route-level unit economics tests whether external highway toll hikes amplified an already inefficient single-mode trucking network.",
      "causes": [
        "Single-mode long-haul trucking leaves margins exposed to corridor toll and fuel spikes",
        "Absence of northern production or regional consolidation hubs increases transit distance"
      ]
    },
    {
      "phase": "Solution",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "Yes—a year ago, Madhya Pradesh revised its toll structure during highway expansion. Every truck covers roughly 600 km through MP and pays around ₹200 at each of multiple toll plazas along the route. What recovery plan do you recommend?",
      "causes": [
        "Revised MP toll structure adds ~₹200 across multiple plazas over a 600 km stretch per truck"
      ]
    },
    {
      "phase": "Synthesis",
      "speaker": "Candidate",
      "kind": "synthesis",
      "detail": "Our margin drop is driven by South-to-North road logistics costs, compounded by repeated ~₹200 tolls across the 600 km MP corridor. Near term, we should shift bulk Hyderabad/Chennai-to-NCR replenishment onto rail/multimodal container freight and optimize truck load factors; medium term, we should add contract finishing or regional warehousing closer to North India. We will track freight cost per garment and EBITDA margin while guarding against stockouts and longer store lead times.",
      "reasoning": "Replacing long-haul trucking with multimodal rail and closer northern fulfillment directly eliminates the corridor toll and distance penalty."
    }
  ],
  "recommendations": [
    "P0: Shift long-haul Hyderabad and Chennai-to-Gurgaon replenishment from road trucking to rail/multimodal container freight and consolidate dispatch loads to bypass repeated ~₹200 Madhya Pradesh highway tolls.",
    "P1: Evaluate contract manufacturing or regional finishing/warehousing partnerships in North India to shorten lead times and cut interstate transit distance.",
    "P2: Re-optimize store-to-warehouse allocation using regional demand forecasting and track freight cost per unit alongside store on-shelf availability."
  ],
  "metricsAndGuardrails": {
    "northStar": "Gross & EBITDA Margin Recovery (Apparel Brand)",
    "leading": [
      "Unit realization vs COGS/unit",
      "Capacity utilization & waste/scrap %"
    ],
    "guardrails": [
      "Customer retention / NPS (don’t over-cut quality)",
      "Market share retention"
    ]
  },
  "synthesisScript": "The apparel brand's profitability decline stems from elevated outbound logistics costs caused by trucking all inventory from Hyderabad and Chennai plants across India—especially a 600 km Madhya Pradesh corridor where revised ~₹200 multi-plaza tolls sharply raised per-truck costs. Shifting trunk shipments to rail/multimodal freight in the near term and establishing northern warehousing or contract sourcing over the medium term will restore EBITDA margins without hurting store availability.",
  "interviewerTrap": "Assuming costs rose without checking Revenue (Price × Volume × Mix) first, or skipping Industry-wide vs Company-specific scoping!",
  "variations": [
    {
      "question": "How would your recommendation change if Apparel Brand had half the timeline or budget?",
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
  "id": "cm-cons-03-energy-drink-profitability",
  "title": "Energy Drink Profitability",
  "company": "Energy Drink Brand",
  "track": "Consulting",
  "category": "Profitability",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "Profitability",
    "Consulting"
  ],
  "prompt": "Your client is an Indian FMCG company manufacturing a single flagship energy drink. Over the past five years, its market share has gradually fallen from 98% to 50%, and revenues have declined. Diagnose the root causes and recommend a turnaround plan.",
  "clarifyingQuestions": [
    {
      "q": "Has the total Indian energy drink category grown, or has overall category demand stalled while our revenue fell?",
      "a": "Overall category growth has stalled recently, and our absolute revenue has declined over the five-year period.",
      "why": "Clarifies that share loss is not merely a denominator effect from rapid category expansion, but reflects real sales erosion."
    },
    {
      "q": "Is our revenue decline driven by lower realized price per unit or fewer units sold?",
      "a": "Unit prices have remained largely unchanged; the decline is driven by a steady drop in units sold over the last five years.",
      "why": "Focuses the root-cause tree on volume drivers—product relevance, affordability, distribution access, and competitive substitution."
    },
    {
      "q": "How has the competitive landscape evolved, and do we offer any pack sizes or flavor variants?",
      "a": "Several new competitors entered with diverse flavors, sugar-free options, and smaller price-point packs, whereas we still sell only one standard SKU.",
      "why": "Tests whether product portfolio stagnation allowed rivals to capture shelf space and shifting consumer preferences."
    }
  ],
  "frameworkUsed": "Profit = Revenue (Price × Volume × Mix) − Costs (Fixed + Variable along Value Chain)",
  "coreEquation": "Profit = ∑(Units × Price × Margin Mix) − (Fixed Overhead + Variable Value-Chain Costs)",
  "strategyOverview": "Market share fell from 98% to 50% as unit sales dropped under a single-SKU strategy while rivals entered with varied flavors, functional/sugar-free variants, and affordable pack sizes. Reclaim volume by launching targeted flavor and low-sugar line extensions, introducing entry price-point packs to improve affordability, and rebuilding cold-chain cooler visibility across modern trade and convenience outlets.",
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
      "phase": "Scoping",
      "speaker": "Interviewer",
      "kind": "prompt",
      "detail": "Your client is an Indian FMCG company manufacturing a single flagship energy drink. Over the past five years, its market share has gradually fallen from 98% to 50%, and revenues have declined. Diagnose the root causes and recommend a turnaround plan."
    },
    {
      "phase": "Scoping",
      "speaker": "Candidate",
      "kind": "question",
      "detail": "To establish the baseline, has the overall category expanded or stagnated over those five years, and is our revenue drop coming from lower pricing or fewer units sold?",
      "reasoning": "Separating category growth from our unit volume and price trends confirms whether we are losing absolute demand to competitors."
    },
    {
      "phase": "Structure",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "Category growth has plateaued, and our revenue fell because unit sales dropped steadily over five years while prices stayed flat. How would you structure your investigation into the unit volume decline?"
    },
    {
      "phase": "Structure",
      "speaker": "Candidate",
      "kind": "framework",
      "detail": "I will decompose unit volume loss across four demand and channel levers: Consumer Need and Product Fit (taste, variants, health trends), Affordability (pack sizes and price points), Accessibility (retail reach and cold-chain shelf placement), and Brand Experience versus new entrants.",
      "reasoning": "The 4As consumer-funnel framework captures both product-level obsolescence and retail distribution leakage in an FMCG beverage category."
    },
    {
      "phase": "Investigation",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "Looking across those buckets, consumers increasingly ask for sugar-free options, new flavors, and smaller impulse-priced cans. Meanwhile, new entrants have offered aggressive retailer margins to win front-of-cooler placement in convenience stores, gyms, and modern trade, squeezing out our single legacy SKU.",
      "causes": [
        "Single legacy SKU misses rising demand for sugar-free, flavored, and lower-priced pack sizes",
        "Competitors captured prime retail cooler space through higher trade margins"
      ]
    },
    {
      "phase": "Root Cause",
      "speaker": "Candidate",
      "kind": "root-cause",
      "detail": "So our 48-point share loss stems from two reinforcing failures: portfolio stagnation—relying on one full-sugar, single-size SKU while consumers diversified—and distribution displacement as rivals outbid us for chilled point-of-sale visibility where impulse energy drinks are bought.",
      "reasoning": "Linking product-mix rigidity to cooler displacement explains how a near-monopoly eroded steadily over five years without a sudden quality shock.",
      "causes": [
        "Lack of SKU innovation in flavors, zero-sugar formulas, and entry-level pack sizes",
        "Loss of chilled impulse visibility and trade mindshare to aggressive challengers"
      ]
    },
    {
      "phase": "Solution",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "That captures the root cause well. Given limited marketing and CapEx budgets, how would you prioritize regaining volume and market share without triggering a margin-destroying price war?"
    },
    {
      "phase": "Synthesis",
      "speaker": "Candidate",
      "kind": "synthesis",
      "detail": "To reverse the decline from 50% share, we should avoid across-the-board price cuts and instead launch a zero-sugar variant plus two core flavors, introduce a smaller entry price-point pack for impulse affordability, and deploy performance-linked retailer rebates tied to dedicated front-row cooler space in high-velocity urban outlets. We will track unit sales velocity, numeric weighted distribution, and gross margin per liter as guardrails.",
      "reasoning": "Targeted SKU and pack-size innovation paired with visibility-linked trade spend restores volume while protecting flagship unit margins."
    }
  ],
  "recommendations": [
    "P0: Expand the single-SKU portfolio with a zero-sugar formula and two high-demand flavor variants, alongside a smaller entry price-point pack to recapture trial and impulse buyers.",
    "P1: Reallocate trade spend into performance-linked retailer margins and branded counter-top chillers across high-traffic convenience stores, gyms, and college clusters.",
    "P2: Refresh brand positioning around modern sports, gaming, and active-lifestyle occasions while tracking repeat purchase rate and gross margin per case."
  ],
  "metricsAndGuardrails": {
    "northStar": "Gross & EBITDA Margin Recovery (Energy Drink Brand)",
    "leading": [
      "Unit realization vs COGS/unit",
      "Capacity utilization & waste/scrap %"
    ],
    "guardrails": [
      "Customer retention / NPS (don’t over-cut quality)",
      "Market share retention"
    ]
  },
  "synthesisScript": "Our energy drink client lost 48 points of market share because a stagnant single-SKU portfolio left it exposed to challengers offering sugar-free variants, diverse flavors, smaller price packs, and better retailer cooler incentives. Launching targeted zero-sugar and impulse-pack extensions while tying trade rebates to chilled shelf visibility will rebuild unit sales without eroding per-liter profitability.",
  "interviewerTrap": "Assuming costs rose without checking Revenue (Price × Volume × Mix) first, or skipping Industry-wide vs Company-specific scoping!",
  "variations": [
    {
      "question": "How would your recommendation change if Energy Drink Brand had half the timeline or budget?",
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
  "id": "cm-cons-04-fmcg-south-africa-margins",
  "title": "FMCG South Africa Margins",
  "company": "FMCG Manufacturer",
  "track": "Consulting",
  "category": "Profitability",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "Profitability",
    "Consulting"
  ],
  "prompt": "Your client is a global FMCG manufacturer whose South African operations have experienced a 15% decline in profitability over the past year. Identify the root causes and recommend solutions to restore margins.",
  "clarifyingQuestions": [
    {
      "q": "How have revenues and direct manufacturing inputs performed in South Africa over the past year?",
      "a": "Revenues, raw material prices, and direct labor costs have all remained relatively stable over the past year.",
      "why": "Rules out demand shortfalls and direct BOM inflation, focusing the audit on indirect plant and overhead costs."
    },
    {
      "q": "How many factories operate in South Africa, and which indirect cost lines moved the most?",
      "a": "We run 40 factories across South Africa, and the sharpest cost spikes are in factory fuel and machinery maintenance.",
      "why": "Directs the investigation to plant-level energy sourcing and spare-part procurement across the 40-site network."
    },
    {
      "q": "How are fuel sourcing and maintenance spare parts currently managed across those 40 plants?",
      "a": "Plants switch solid fuels based on local availability with up to 20% price swings, and each factory sources roughly 7,000 maintenance SKUs via local contracts.",
      "why": "Quantifies the decentralization penalty in both energy conversion and spare-parts purchasing."
    }
  ],
  "frameworkUsed": "Profit = Revenue (Price × Volume × Mix) − Costs (Fixed + Variable along Value Chain)",
  "coreEquation": "Profit = ∑(Units × Price × Margin Mix) − (Fixed Overhead + Variable Value-Chain Costs)",
  "strategyOverview": "With stable revenue and direct costs, the 15% profitability drop across 40 South African plants stems from decentralized indirect spend: ad-hoc switching between solid fuels (creating up to 20% fuel cost variance) and fragmented local purchasing across ~7,000 maintenance spare-part SKUs. Standardizing fuel specifications under central supply contracts and pooling spare-parts procurement will rapidly recover plant EBITDA.",
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
      "phase": "Scoping",
      "speaker": "Interviewer",
      "kind": "prompt",
      "detail": "Your client is a global FMCG manufacturer whose South African operations have experienced a 15% decline in profitability over the past year. Identify the root causes and recommend solutions to restore margins."
    },
    {
      "phase": "Scoping",
      "speaker": "Candidate",
      "kind": "question",
      "detail": "Thank you. To narrow down the 15% profit drop, have revenues shifted over the past year, and is this compression driven by direct production costs or plant overheads?",
      "reasoning": "Testing revenue and direct COGS stability quickly isolates whether the margin leak sits inside indirect manufacturing overheads."
    },
    {
      "phase": "Structure",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "Revenues, raw materials, and direct labor have all been stable across our 40 South African factories. The surge sits inside indirect costs—specifically factory fuel and machinery maintenance. How would you diagnose these two buckets?"
    },
    {
      "phase": "Structure",
      "speaker": "Candidate",
      "kind": "framework",
      "detail": "I will analyze both buckets across price, mix, and operational efficiency. For fuel, I want to examine fuel type mix, supplier pricing, and boiler thermal efficiency by factory; for maintenance, I will break down spare-parts SKU complexity, vendor pricing dispersion, and breakdown frequency.",
      "reasoning": "Separating rate variance from usage efficiency pinpoints whether decentralized buying or deteriorating equipment is driving indirect spend."
    },
    {
      "phase": "Investigation",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "Our machinery runs on solid fuel, and factories switch fuel types frequently based on local spot availability—driving up to 20% cost variance between the cheapest and costliest fuels. On maintenance, plants manage around 7,000 spare-part SKUs with widely varying prices across locations due to local supplier contracts and fragmented logistics.",
      "causes": [
        "Frequent solid-fuel switching across 40 plants drives up to 20% fuel cost variance",
        "Decentralized purchasing of ~7,000 spare-part SKUs creates wide price and freight dispersion"
      ]
    },
    {
      "phase": "Root Cause",
      "speaker": "Candidate",
      "kind": "root-cause",
      "detail": "So both cost spikes share a common governance root cause: decentralized, reactive plant procurement. Spot-switching solid fuels forces plants to pay premium rates and likely degrades boiler burn efficiency, while letting 40 sites negotiate 7,000 spare-part SKUs individually forfeits volume rebates and duplicates inbound freight.",
      "reasoning": "Connecting fuel volatility and spare-part price dispersion to decentralized plant buying enables a unified procurement and standardization fix.",
      "causes": [
        "Absence of standardized fuel specifications and central long-term energy contracts",
        "Fragmented local vendor contracts across 7,000 unstandardized maintenance SKUs"
      ]
    },
    {
      "phase": "Solution",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "That is spot on. How would you structure your recommendations so that standardizing fuel and centralizing spare parts does not cause factory downtime during the transition?"
    },
    {
      "phase": "Synthesis",
      "speaker": "Candidate",
      "kind": "synthesis",
      "detail": "To recover the 15% profitability drop, we should first standardize solid-fuel grades and sign centralized regional supply contracts with buffer inventories to eliminate the 20% spot-price swings. Second, we should centralize procurement for the top-spend maintenance SKUs into master vendor agreements while rationalizing duplicate parts across the 7,000-SKU catalog. Success should be tracked via fuel cost per ton, maintenance spend per plant, and unplanned machine downtime.",
      "reasoning": "Pairing central contracts with regional safety buffers cuts unit rates while protecting factory uptime during rollout."
    }
  ],
  "recommendations": [
    "P0: Standardize solid-fuel grades across the 40 factories and establish centralized multi-plant supply contracts with regional buffer stock to eliminate 20% spot-switching cost swings.",
    "P1: Centralize procurement of the ~7,000 maintenance spare-part SKUs under master rate contracts, rationalize redundant parts, and consolidate regional spare-parts logistics.",
    "P2: Deploy preventive maintenance schedules and boiler efficiency audits across high-cost plants while monitoring unplanned downtime and unit conversion cost."
  ],
  "metricsAndGuardrails": {
    "northStar": "Gross & EBITDA Margin Recovery (FMCG Manufacturer)",
    "leading": [
      "Unit realization vs COGS/unit",
      "Capacity utilization & waste/scrap %"
    ],
    "guardrails": [
      "Customer retention / NPS (don’t over-cut quality)",
      "Market share retention"
    ]
  },
  "synthesisScript": "The 15% profitability decline in South Africa is driven by decentralized plant procurement across 40 factories, resulting in up to 20% fuel-cost swings from ad-hoc solid-fuel switching and inflated prices across ~7,000 locally sourced maintenance SKUs. Standardizing fuel specs under centralized contracts and consolidating spare-parts purchasing will recover operating margins while safeguarding plant uptime.",
  "interviewerTrap": "Assuming costs rose without checking Revenue (Price × Volume × Mix) first, or skipping Industry-wide vs Company-specific scoping!",
  "variations": [
    {
      "question": "How would your recommendation change if FMCG Manufacturer had half the timeline or budget?",
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
  "id": "cm-cons-05-footwear-brand-profitability",
  "title": "Footwear Brand Profitability",
  "company": "Footwear Brand",
  "track": "Consulting",
  "category": "Profitability",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "Profitability",
    "Consulting"
  ],
  "prompt": "Your client is a premium footwear brand operating in India that has experienced a 5–10% decline in profitability over the past one to two years and is losing market competitiveness. Identify the core drivers and recommend a turnaround plan.",
  "clarifyingQuestions": [
    {
      "q": "Is this profitability decline affecting the entire footwear sector, or is our client underperforming peers?",
      "a": "Other footwear brands saw a minor dip, but our client has been impacted disproportionately harder over the past 1–2 years.",
      "why": "Indicates that company-specific product or channel gaps are amplifying broader market headwinds."
    },
    {
      "q": "Has the 5–10% profit decline come from rising costs or falling revenues, and which channels do we sell through?",
      "a": "Costs are stable, so it is a revenue issue. We sell both online and offline, though most revenue comes from nationwide offline retail stores.",
      "why": "Focuses the analysis on revenue components (price, volume, mix) and offline-heavy channel exposure."
    },
    {
      "q": "What footwear categories do we offer, and where is the revenue drop concentrated?",
      "a": "We only manufacture premium formal shoes and slippers for men and women; prices stayed flat, but unit sales fell sharply—especially in formal shoes.",
      "why": "Pinpoints unit-volume loss in formal shoes caused by a narrow two-category portfolio."
    }
  ],
  "frameworkUsed": "Profit = Revenue (Price × Volume × Mix) − Costs (Fixed + Variable along Value Chain)",
  "coreEquation": "Profit = ∑(Units × Price × Margin Mix) − (Fixed Overhead + Variable Value-Chain Costs)",
  "strategyOverview": "With stable costs and flat prices, the 5–10% profit decline stems from falling unit volumes—disproportionately in formal shoes—due to an overly narrow portfolio (only premium formal shoes and slippers) and heavy offline reliance while rivals capture casual, sports, and athleisure demand. Revive growth by refreshing the formal line, launching men's and women's athleisure plus kids' casual footwear, and scaling targeted digital marketing.",
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
      "phase": "Scoping",
      "speaker": "Interviewer",
      "kind": "prompt",
      "detail": "Your client is a premium footwear brand operating in India that has experienced a 5–10% decline in profitability over the past one to two years and is losing market competitiveness. Identify the core drivers and recommend a turnaround plan."
    },
    {
      "phase": "Scoping",
      "speaker": "Candidate",
      "kind": "question",
      "detail": "To ground the case, how have competitors performed over the last one to two years, is our profit drop driven by revenue or cost, and what products and channels make up our business?",
      "reasoning": "Comparing peer performance alongside the revenue-versus-cost split establishes whether the problem is internal assortment weakness or cost inflation."
    },
    {
      "phase": "Structure",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "Peers saw only a slight dip while our profits fell 5–10%. Costs are stable, so the drop is purely on revenue. We sell mainly through nationwide offline stores (plus some online) and only offer premium formal shoes and slippers for men and women. How would you diagnose the revenue decline?"
    },
    {
      "phase": "Structure",
      "speaker": "Candidate",
      "kind": "framework",
      "detail": "I will decompose revenue into price per pair, unit volume, and category/channel mix. Since we carry only two categories and rely heavily on offline stores, I want to check whether price hikes hurt demand or whether shifting consumer tastes and limited SKU variety are pulling down store footfall and conversion.",
      "reasoning": "Separating price realization from category-level volume trends tests if portfolio narrowness is causing lost occasions to multi-category rivals."
    },
    {
      "phase": "Investigation",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "Our retail prices have remained unchanged, so the shortfall is entirely in fewer units sold—concentrated disproportionately in formal shoes. Meanwhile, competitors offer much wider assortments across casual, sports, and lifestyle categories and market aggressively online.",
      "causes": [
        "Unit volume dropped in formal shoes while retail prices remained unchanged",
        "Narrow portfolio of only formal shoes and slippers misses casual and athleisure demand"
      ]
    },
    {
      "phase": "Root Cause",
      "speaker": "Candidate",
      "kind": "root-cause",
      "detail": "That explains why we trailed peers: post-pandemic shifts toward smart-casual and athleisure wear reduced formal shoe replacement frequency, yet our assortment stayed restricted to formal shoes and slippers. Because competitors offer broader family and lifestyle ranges with stronger digital pull, shoppers bypass our offline stores altogether.",
      "reasoning": "Connecting formal-category shrinkage to missing adjacent segments and weak digital acquisition identifies both the demand and traffic bottlenecks.",
      "causes": [
        "Over-reliance on shrinking formal wear without sports, athleisure, or kids' lines",
        "Offline-heavy distribution and under-invested targeted marketing reduce brand discovery"
      ]
    },
    {
      "phase": "Solution",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "Makes complete sense. Given we have an established premium brand and nationwide store network, how should we sequence our portfolio and channel moves to rebuild profitability?"
    },
    {
      "phase": "Synthesis",
      "speaker": "Candidate",
      "kind": "synthesis",
      "detail": "To reverse the 5–10% profit decline, we should immediately modernize our formal shoe line with smart-casual comfort designs, expand into high-growth sports and athleisure footwear for men and women plus kids' sandals and flip-flops to lift store basket size, and scale targeted performance marketing to drive both e-commerce and offline store traffic. We will monitor same-store sales growth, category mix, and gross margin per pair to guard against over-discounting.",
      "reasoning": "Leveraging existing offline real estate with higher-velocity casual SKUs and omnichannel demand generation raises revenue per store without inflating fixed rent."
    }
  ],
  "recommendations": [
    "P0: Refresh the core formal shoe assortment with modern smart-casual comfort designs and expand SKU variety in top-performing offline stores to stem immediate volume loss.",
    "P1: Launch premium sports and athleisure lines for men and women, alongside kids' sandals and flip-flops, to capture multi-occasion family spend and lift store conversion.",
    "P2: Scale targeted digital marketing and e-commerce merchandising to attract younger buyers and track same-store unit velocity alongside full-price sell-through."
  ],
  "metricsAndGuardrails": {
    "northStar": "Gross & EBITDA Margin Recovery (Footwear Brand)",
    "leading": [
      "Unit realization vs COGS/unit",
      "Capacity utilization & waste/scrap %"
    ],
    "guardrails": [
      "Customer retention / NPS (don’t over-cut quality)",
      "Market share retention"
    ]
  },
  "synthesisScript": "The footwear brand's 5–10% profit drop is a revenue-volume problem centered on formal shoes, caused by an overly narrow two-category portfolio and heavy offline reliance while rivals win shifting casual and athleisure demand. Refreshing formal SKUs, launching men's/women's athleisure and kids' casual lines, and scaling targeted digital marketing will boost store conversion and restore margins.",
  "interviewerTrap": "Assuming costs rose without checking Revenue (Price × Volume × Mix) first, or skipping Industry-wide vs Company-specific scoping!",
  "variations": [
    {
      "question": "How would your recommendation change if Footwear Brand had half the timeline or budget?",
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
  "id": "cm-cons-06-gas-company-profitability",
  "title": "Gas Company Profitability",
  "company": "Gas Utility",
  "track": "Consulting",
  "category": "Profitability",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "Profitability",
    "Consulting"
  ],
  "prompt": "Your client is a leading industrial gas company in India that has experienced declining profitability over the past two years. Diagnose the root causes and recommend corrective actions.",
  "clarifyingQuestions": [
    {
      "q": "Is this profitability decline industry-wide, and which segments of the industrial gas value chain does our client operate in?",
      "a": "It is specific to our client—competitors are performing well. We supply B2B clients nationwide across procurement, processing, storage, and distribution.",
      "why": "Confirms an internal operational bottleneck across a vertically integrated industrial gas value chain."
    },
    {
      "q": "Have there been any recent product launches or portfolio shifts coinciding with the two-year profit decline?",
      "a": "Yes—alongside our steady, growing non-cryogenic gas business, we entered cryogenic gases two years ago, and that segment has been unprofitable.",
      "why": "Pinpoints the timeline overlap between cryogenic market entry and the two-year margin drop."
    },
    {
      "q": "How attractive is the Indian cryogenic gas market, and is the issue on revenue realization or operating costs?",
      "a": "The Indian cryogenic gas market is ~$3.5 billion (~₹29,000 crore) growing at 8–9% CAGR; the issue is on the cost side, not market demand.",
      "why": "Rules out market attractiveness concerns and directs the deep dive to cryogenic unit costs."
    }
  ],
  "frameworkUsed": "Profit = Revenue (Price × Volume × Mix) − Costs (Fixed + Variable along Value Chain)",
  "coreEquation": "Profit = ∑(Units × Price × Margin Mix) − (Fixed Overhead + Variable Value-Chain Costs)",
  "strategyOverview": "Despite strong 8–9% CAGR growth in India's ~$3.5B cryogenic gas market, the client's two-year profit decline stems from high operating costs in its newly launched cryogenic segment—specifically raw material procurement and complex cryogenic storage/container logistics. Improving tank utilization, cutting boil-off losses, and renegotiating feedstock and container sourcing contracts will turn the segment profitable.",
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
      "phase": "Scoping",
      "speaker": "Interviewer",
      "kind": "prompt",
      "detail": "Your client is a leading industrial gas company in India that has experienced declining profitability over the past two years. Diagnose the root causes and recommend corrective actions."
    },
    {
      "phase": "Scoping",
      "speaker": "Candidate",
      "kind": "question",
      "detail": "To begin, is the profit decline seen across Indian industrial gas peers or only our client, and have our product portfolio or operations changed over the past two years?",
      "reasoning": "Checking peer health and recent portfolio changes quickly identifies whether a new business line triggered the two-year margin erosion."
    },
    {
      "phase": "Structure",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "Peers are performing well, and our legacy non-cryogenic gas line is growing steadily. However, we entered cryogenic gases two years ago—a ~$3.5 billion Indian market growing at 8–9% CAGR—and our margins there are dragging down profits due to high costs. How would you structure the cost investigation?"
    },
    {
      "phase": "Structure",
      "speaker": "Candidate",
      "kind": "framework",
      "detail": "Since we operate end-to-end for B2B clients, I will map cryogenic costs across the value chain: raw material and power procurement, liquefaction processing, specialized cryogenic storage and packaging, and insulated distribution to customers. Which stage shows the largest cost deviation versus benchmarks?",
      "reasoning": "Walking the cryogenic value chain separates upstream feedstock/energy costs from capital-intensive ultra-low-temperature storage and transport."
    },
    {
      "phase": "Investigation",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "Processing plant efficiency is fine, but raw material procurement and cryogenic storage and distribution stand out. Specifically, storing ultra-cold liquefied gases requires specialized vacuum-insulated containers, which are driving disproportionate cost overruns.",
      "causes": [
        "Cryogenic storage requires specialized insulated containers with high procurement and upkeep costs",
        "Sub-scale raw material procurement contracts in the new cryogenic line inflate input costs"
      ]
    },
    {
      "phase": "Root Cause",
      "speaker": "Candidate",
      "kind": "root-cause",
      "detail": "That makes sense—because we entered cryogenic gases only two years ago, we likely face high container capex or lease rates from limited domestic tank fabricators, low container turnaround utilization, and evaporation boil-off losses during storage and B2B transit, compounded by unoptimized feedstock contracts.",
      "reasoning": "Connecting small initial scale to specialized tank scarcity and boil-off losses explains why cryogenic costs overwhelm an otherwise healthy 8–9% growth market.",
      "causes": [
        "Fragmented container sourcing/leasing and low turnaround utilization raise per-unit storage cost",
        "Boil-off losses and long-haul B2B dispersion erode delivered cryogenic margins"
      ]
    },
    {
      "phase": "Solution",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "Yes—specialized container manufacturers have high pricing power and our tank utilization and storage losses are hurting unit economics. What concrete actions should management prioritize?"
    },
    {
      "phase": "Synthesis",
      "speaker": "Candidate",
      "kind": "synthesis",
      "detail": "To restore profitability, we should first tighten cryogenic storage economics by partnering with qualified container fabricators on long-term lease/bulk contracts and deploying IoT monitoring to cut boil-off losses and idle tank turnaround time. Second, we should bundle non-cryogenic and cryogenic feedstock procurement for volume rebates and cluster B2B cryogenic deliveries around industrial corridors. We will track storage cost per liter, boil-off rate, and segment EBITDA margin.",
      "reasoning": "Attacking container economics and delivery density directly fixes the cryogenic cost disadvantage while preserving share in an 8–9% CAGR market."
    }
  ],
  "recommendations": [
    "P0: Consolidate specialized cryogenic container sourcing under long-term vendor/leasing partnerships and implement IoT tank tracking to maximize turnaround utilization and reduce boil-off losses.",
    "P1: Bundle upstream raw gas and power procurement across both cryogenic and non-cryogenic plants to unlock bulk supplier discounts.",
    "P2: Focus B2B cryogenic customer acquisition on dense industrial clusters near filling hubs to cut insulated freight cost per ton while tracking segment EBITDA."
  ],
  "metricsAndGuardrails": {
    "northStar": "Gross & EBITDA Margin Recovery (Gas Utility)",
    "leading": [
      "Unit realization vs COGS/unit",
      "Capacity utilization & waste/scrap %"
    ],
    "guardrails": [
      "Customer retention / NPS (don’t over-cut quality)",
      "Market share retention"
    ]
  },
  "synthesisScript": "Our industrial gas client's two-year profitability decline stems from its newly entered cryogenic gas segment, where expensive specialized storage containers, boil-off losses, low tank utilization, and sub-scale procurement outweigh strong 8–9% industry growth. Securing long-term container partnerships, tightening tank turnaround and boil-off controls, and bundling procurement with legacy non-cryogenic operations will restore overall profitability.",
  "interviewerTrap": "Assuming costs rose without checking Revenue (Price × Volume × Mix) first, or skipping Industry-wide vs Company-specific scoping!",
  "variations": [
    {
      "question": "How would your recommendation change if Gas Utility had half the timeline or budget?",
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
  "id": "cm-cons-07-insurance-company-profitability",
  "title": "Insurance Company Profitability",
  "company": "Insurance Provider",
  "track": "Consulting",
  "category": "Profitability",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "Profitability",
    "Consulting"
  ],
  "prompt": "Your client is a large insurance provider facing a sharp revenue drop exclusively in its healthcare insurance product, while all other insurance lines are performing well. Identify the root causes and recommend solutions.",
  "clarifyingQuestions": [
    {
      "q": "Is the decline in health insurance revenue affecting competitors too, or is it specific to our client across regions?",
      "a": "Competitors are performing well; the drop is internal to our company and visible across all our operating regions.",
      "why": "Rules out external macroeconomic or regulatory shocks and points to internal product or distribution issues."
    },
    {
      "q": "Is the revenue drop driven by lower premiums per policy or fewer health insurance policies sold?",
      "a": "Premiums per policy have remained constant, while the number of new health policies sold has fallen significantly.",
      "why": "Isolates the issue to customer acquisition volume and sales conversion rather than pricing."
    },
    {
      "q": "Which sales channels distribute our health policies, and where in the funnel are we losing conversions?",
      "a": "We rely heavily on an agent-based sales model alongside conventional marketing, where agents earn flat extra commissions per total policy sold; lead generation is steady, but agents are failing to pitch and convert health prospects.",
      "why": "Highlights agent incentive misalignment and pitching friction as the primary conversion bottleneck."
    }
  ],
  "frameworkUsed": "Profit = Revenue (Price × Volume × Mix) − Costs (Fixed + Variable along Value Chain)",
  "coreEquation": "Profit = ∑(Units × Price × Margin Mix) − (Fixed Overhead + Variable Value-Chain Costs)",
  "strategyOverview": "With constant policy pricing and healthy peer growth, the healthcare revenue drop stems from declining unit policy sales across the agent channel—specifically fewer active agents pitching health plans and weak prospect conversion at the pitch stage. Realigning agent incentives toward health policy conversions, introducing more flexible/affordable long-tenure plans, and upgrading digital analytics-led pitching will restore policy volume.",
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
      "phase": "Scoping",
      "speaker": "Interviewer",
      "kind": "prompt",
      "detail": "Your client is a large insurance provider facing a sharp revenue drop exclusively in its healthcare insurance product, while all other insurance lines are performing well. Identify the root causes and recommend solutions."
    },
    {
      "phase": "Scoping",
      "speaker": "Candidate",
      "kind": "question",
      "detail": "To scope this cleanly, is the health insurance drop industry-wide or specific to us, and is it driven by lower average policy premiums or fewer policies sold?",
      "reasoning": "Checking peer performance and separating price from policy count pinpoints whether internal acquisition execution is failing."
    },
    {
      "phase": "Structure",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "Competitors are growing well nationwide, and our policy pricing has not changed—the entire drop is from fewer healthcare policies sold. How would you structure your investigation into policy volume?"
    },
    {
      "phase": "Structure",
      "speaker": "Candidate",
      "kind": "framework",
      "detail": "Since our other insurance lines are healthy, demand for our brand is intact. I will map the health-policy sales funnel across our distribution channels—number of active agents/advisors, policies sold per agent, and stage-by-stage conversion from targeting to pitching to policy issuance—while checking product attractiveness versus peers.",
      "reasoning": "Decomposing agent productivity alongside product competitiveness reveals whether agents lack motivation to sell health plans or struggle to convince buyers."
    },
    {
      "phase": "Investigation",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "We rely heavily on an agent-based sales model where agents earn extra commissions based on total policies sold across all lines. Data shows both the number of agents actively selling health policies and sales volume per agent have dropped, with the main bottleneck happening at the customer pitching stage.",
      "causes": [
        "Volume-based overall agent commissions discourage pitching complex health policies",
        "Sharp drop-off occurs specifically during the agent-to-customer pitch stage"
      ]
    },
    {
      "phase": "Root Cause",
      "speaker": "Candidate",
      "kind": "root-cause",
      "detail": "Two linked root causes stand out: first, paying commissions on total policy count lets agents hit targets faster with simpler motor or life policies rather than investing time in complex health underwriting pitches; second, rigid health plan pricing and shorter tenure options make the pitch harder to close against more flexible competitor offerings.",
      "reasoning": "Linking flat commission structures to product-pitch friction explains why the same agent force thrives on other lines while failing on healthcare.",
      "causes": [
        "Misaligned agent commission tiers favor easier non-health insurance lines",
        "Inflexible health plan structures and weak digital/awareness support hinder conversion"
      ]
    },
    {
      "phase": "Solution",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "That is a sharp diagnosis. Since recruiting new agents takes time and our priority is lifting sales per existing agent, what changes would you recommend across incentives, product design, and marketing?"
    },
    {
      "phase": "Synthesis",
      "speaker": "Candidate",
      "kind": "synthesis",
      "detail": "To revive healthcare insurance revenue, we should introduce product-specific commission accelerators and recognition rewards for health policy conversions, modularize plans with flexible multi-year tenures and preventive value-added benefits to improve affordability, and equip agents with data-backed digital pitching tools alongside consumer awareness campaigns. We will track health policies per active agent, pitch-to-close rate, and claims loss ratio as guardrails.",
      "reasoning": "Fixing both agent economics and plan flexibility removes the exact pitch-stage friction suppressing health policy conversions."
    }
  ],
  "recommendations": [
    "P0: Restructure agent incentives with dedicated commission accelerators and tiered rewards specifically for healthcare insurance policy conversions rather than aggregate policy count.",
    "P1: Redesign healthcare plans to offer affordable, customizable coverage tiers and multi-year tenure options with value-added wellness benefits that simplify the agent pitch.",
    "P2: Upgrade online policy comparison and analytics-led lead scoring for agents while launching targeted educational campaigns to build consumer trust."
  ],
  "metricsAndGuardrails": {
    "northStar": "Gross & EBITDA Margin Recovery (Insurance Provider)",
    "leading": [
      "Unit realization vs COGS/unit",
      "Capacity utilization & waste/scrap %"
    ],
    "guardrails": [
      "Customer retention / NPS (don’t over-cut quality)",
      "Market share retention"
    ]
  },
  "synthesisScript": "Healthcare insurance revenue fell solely because unit policy conversions dropped in the agent channel, driven by aggregate volume commissions that steer agents toward easier lines and rigid plan terms that stall customer pitches. Introducing health-specific agent rewards, modular multi-year affordable plans, and digital pitching support will restore conversion rates and policy volume.",
  "interviewerTrap": "Assuming costs rose without checking Revenue (Price × Volume × Mix) first, or skipping Industry-wide vs Company-specific scoping!",
  "variations": [
    {
      "question": "How would your recommendation change if Insurance Provider had half the timeline or budget?",
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
  "id": "cm-cons-prof-retail-store",
  "title": "Retail Store Revenue & Profit Decline",
  "company": "Retail Chain",
  "track": "Consulting",
  "category": "Profitability",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "Profitability",
    "Consulting"
  ],
  "prompt": "Your client owns a retail store operating for 10 years that has seen declining revenue and profitability over the past three years. Analyze the root causes and recommend a turnaround plan.",
  "clarifyingQuestions": [
    {
      "q": "Is this three-year decline affecting just our client's store, or are competing stores in the same area also struggling?",
      "a": "Most legacy stores in the area are facing declining sales, except for one rival store opened six years ago that is growing profits.",
      "why": "Sets up a direct benchmark comparison against the lone profitable competitor in the same local market."
    },
    {
      "q": "Is the decline concentrated in specific product categories, and how do our footfall and basket size compare to that profitable rival?",
      "a": "Revenue fell across almost all categories; our footfall and basket size are lower than the profitable store's, even though our total revenue is roughly comparable.",
      "why": "Clarifies that while revenue lags slightly, the sharpest gap lies in net profit and assortment/pricing competitiveness."
    },
    {
      "q": "How do the profitable store's assortment, retail prices, and supplier terms compare with ours?",
      "a": "They carry greater product variety and volume at slightly lower retail prices—yet earn higher net profit because our shared supplier gives them exclusive pricing deals.",
      "why": "Pinpoints upstream supplier preferential pricing as the structural advantage enabling lower shelf prices and higher margins."
    }
  ],
  "frameworkUsed": "Profit = Revenue (Price × Volume × Mix) − Costs (Fixed + Variable along Value Chain)",
  "coreEquation": "Profit = ∑(Units × Price × Margin Mix) − (Fixed Overhead + Variable Value-Chain Costs)",
  "strategyOverview": "Although local demand has pressured legacy shops, a 6-year-old competitor achieves higher net profit even at slightly lower retail prices because a shared supplier grants it exclusive deals, broader variety, and priority stock. Break supplier dependency by sourcing directly from manufacturers or alternative wholesalers, renegotiating binding parity contracts, and diversifying high-margin brand assortment.",
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
      "phase": "Scoping",
      "speaker": "Interviewer",
      "kind": "prompt",
      "detail": "Your client owns a retail store operating for 10 years that has seen declining revenue and profitability over the past three years. Analyze the root causes and recommend a turnaround plan."
    },
    {
      "phase": "Scoping",
      "speaker": "Candidate",
      "kind": "question",
      "detail": "To understand the local competitive context, is this three-year slump affecting other neighborhood retailers as well, and are specific product categories driving our drop?",
      "reasoning": "Benchmarking nearby stores tests whether macro neighborhood footfall fell or a specific rival is capturing disproportionate margin and share."
    },
    {
      "phase": "Structure",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "Most 10-year-old stores are down across almost all product categories, except one competitor opened six years ago that is earning strong profits. How would you benchmark our store against that profitable rival?"
    },
    {
      "phase": "Structure",
      "speaker": "Candidate",
      "kind": "framework",
      "detail": "I will compare our P&L side-by-side with the profitable competitor across two pillars: Revenue Drivers (footfall, conversion, basket size, SKU variety, and pricing) and Cost Drivers (COGS and supplier terms versus store rent, labor, and overhead).",
      "reasoning": "Comparing unit economics against a thriving local peer reveals whether the rival's edge comes from superior merchandising, lower procurement cost, or leaner store overhead."
    },
    {
      "phase": "Investigation",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "Interestingly, our overall revenue is still fairly comparable, though our footfall and basket size trail theirs. The big gap is in net profit: the rival offers higher volume and wider product variety at slightly lower selling prices, yet still makes significantly higher margins.",
      "causes": [
        "Rival achieves higher net profit despite slightly lower retail shelf prices",
        "Wider SKU variety and volume attract stronger footfall and larger baskets to the competitor"
      ]
    },
    {
      "phase": "Root Cause",
      "speaker": "Candidate",
      "kind": "root-cause",
      "detail": "Earning higher margins while charging lower prices means the competitor must have materially lower COGS or operating costs. Since store rents and wages in the same locality should be similar, does our shared wholesale supplier give them exclusive rebates, priority SKUs, or bulk discounts that we do not receive?",
      "reasoning": "Applying the profit equation under uniform local rent isolates wholesale COGS and supplier exclusivity as the decisive margin lever.",
      "causes": [
        "Shared supplier grants exclusive pricing and assortment deals to the rival store",
        "Single-supplier dependency leaves our store with higher COGS and narrower product range"
      ]
    },
    {
      "phase": "Solution",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "Exactly right—the supplier has been offering exclusive deals and priority assortment to that profitable store. What concrete steps should our client take to recover both revenue and margins?",
      "causes": [
        "Discriminatory wholesale terms block price competitiveness and SKU breadth"
      ]
    },
    {
      "phase": "Synthesis",
      "speaker": "Candidate",
      "kind": "synthesis",
      "detail": "To eliminate this COGS and assortment disadvantage, we should immediately onboard alternative wholesale distributors or source directly from manufacturers for core fast-moving lines, use those quotes as leverage to lock our current supplier into binding parity contracts, and diversify shelf space toward comparable high-margin brands to win back footfall. We will track gross margin %, basket size, and SKU stockout rate.",
      "reasoning": "Replacing single-supplier dependency with direct/multi-vendor sourcing immediately restores pricing power and product variety."
    }
  ],
  "recommendations": [
    "P0: Diversify procurement by sourcing core fast-moving SKUs directly from manufacturers or alternative wholesalers to eliminate single-supplier dependency and lower COGS.",
    "P1: Leverage competitive vendor quotes to negotiate a legally binding supply contract guaranteeing pricing parity and fair access to high-demand product lines.",
    "P2: Expand shelf assortment into comparable quality alternative brands and value bundles to match rival variety and rebuild footfall and basket size."
  ],
  "metricsAndGuardrails": {
    "northStar": "Gross & EBITDA Margin Recovery (Retail Chain)",
    "leading": [
      "Unit realization vs COGS/unit",
      "Capacity utilization & waste/scrap %"
    ],
    "guardrails": [
      "Customer retention / NPS (don’t over-cut quality)",
      "Market share retention"
    ]
  },
  "synthesisScript": "The retail store's three-year revenue and profit erosion stems from an upstream wholesale disadvantage: a shared supplier grants exclusive pricing and assortment deals to a competing store, letting that rival undercut our prices while earning higher margins. Onboarding direct manufacturers and alternative suppliers, enforcing binding contract parity, and diversifying high-margin brand variety will restore both footfall and net profitability.",
  "interviewerTrap": "Assuming costs rose without checking Revenue (Price × Volume × Mix) first, or skipping Industry-wide vs Company-specific scoping!",
  "variations": [
    {
      "question": "How would your recommendation change if Retail Chain had half the timeline or budget?",
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
  "id": "cm-cons-09-steel-manufacturer-1",
  "title": "Steel Manufacturer - 1",
  "company": "Steel Manufacturer",
  "track": "Consulting",
  "category": "Profitability",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "Profitability",
    "Consulting"
  ],
  "prompt": "Your client is a nationwide steel household-furniture manufacturer facing a 20% decline in profits over the past 12–15 months. Identify the root causes and recommend solutions to restore profitability.",
  "clarifyingQuestions": [
    {
      "q": "Is this 20% profit drop an industry-wide trend or specific to our client, and which products do we manufacture?",
      "a": "Only our client is seeing declining profits across India while peers are profitable. We manufacture steel household furniture—wardrobes, tables, and chairs.",
      "why": "Isolates an internal competitiveness gap within our steel furniture portfolio rather than a steel-market downturn."
    },
    {
      "q": "Where do we sit in the value chain, and is the profit drop coming from rising costs or falling revenues?",
      "a": "We procure steel, manufacture furniture, and distribute via suppliers to retail stores. Our costs have remained constant, so the issue is purely on the revenue side.",
      "why": "Rules out cost inflation and focuses the diagnostic tree on price, volume, and product mix."
    },
    {
      "q": "What is the revenue split across wardrobes, tables, and chairs, and where did sales drop?",
      "a": "Wardrobes generate 70% of revenue while tables and chairs contribute 15% each; the steepest revenue decline is in our core wardrobe segment.",
      "why": "Pinpoints the 70%-share wardrobe line as the highest-leverage segment to investigate."
    }
  ],
  "frameworkUsed": "Profit = Revenue (Price × Volume × Mix) − Costs (Fixed + Variable along Value Chain)",
  "coreEquation": "Profit = ∑(Units × Price × Margin Mix) − (Fixed Overhead + Variable Value-Chain Costs)",
  "strategyOverview": "With costs flat, the 20% profit decline is driven by revenue loss concentrated in wardrobes (70% of sales), where competitors are winning buyers through sharper pricing, bundled room sets, lighter/modern alternative materials, and online D2C channels. Restore volume by realigning wardrobe pricing, launching furniture bundles and e-commerce distribution, and testing hybrid/alternative materials.",
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
      "phase": "Scoping",
      "speaker": "Interviewer",
      "kind": "prompt",
      "detail": "Your client is a nationwide steel household-furniture manufacturer facing a 20% decline in profits over the past 12–15 months. Identify the root causes and recommend solutions to restore profitability."
    },
    {
      "phase": "Scoping",
      "speaker": "Candidate",
      "kind": "question",
      "detail": "Before structuring, is this 20% decline affecting peers as well, what specific steel products do we make across which parts of the value chain, and have our costs moved?",
      "reasoning": "Establishing peer health, product scope, and cost stability determines whether to prioritize the revenue or cost branch."
    },
    {
      "phase": "Structure",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "Peers across India remain profitable. We procure steel, manufacture household wardrobes, tables, and chairs, and sell through retail store distributors. Our costs have stayed flat, so please focus on the revenue side."
    },
    {
      "phase": "Structure",
      "speaker": "Candidate",
      "kind": "framework",
      "detail": "I will break revenue into product portfolio mix, units sold, and price per unit. First, how is revenue split across wardrobes, tables, and chairs, and which product drove the drop over the last 12–15 months?",
      "reasoning": "Identifying the exact SKU mix and lagging category prevents spreading analysis evenly across low-impact lines."
    },
    {
      "phase": "Investigation",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "Wardrobes account for 70% of revenue, with tables and chairs at 15% each—and the sharpest drop came in wardrobes. Competitors are offering slightly lower prices, modern engineered-wood or hybrid designs, furniture bundles, and strong online ordering while we sell standalone steel units purely through offline retail.",
      "causes": [
        "Core wardrobe segment (70% of revenue) is losing unit share to lower-priced rivals",
        "Standalone offline-only steel positioning lags competitor bundles, alternative materials, and online channels"
      ]
    },
    {
      "phase": "Root Cause",
      "speaker": "Candidate",
      "kind": "root-cause",
      "detail": "That explains the 20% profit drop cleanly: our flagship wardrobe line—70% of revenue—is overpriced relative to rivals and misses two major buyer shifts toward online furniture discovery and lighter, aesthetic hybrid materials, while selling unbundled items loses multi-piece basket value.",
      "reasoning": "Connecting wardrobe volume erosion to price gaps, offline-only reach, and rigid pure-steel design identifies actionable commercial and product fixes.",
      "causes": [
        "Uncompetitive price-to-value perception in wardrobes against rival designs",
        "Absence of online/omnichannel sales and bundled room packages limits reach and order size"
      ]
    },
    {
      "phase": "Solution",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "Well diagnosed. How would you turn around wardrobe and overall furniture revenue without destroying unit margins?"
    },
    {
      "phase": "Synthesis",
      "speaker": "Candidate",
      "kind": "synthesis",
      "detail": "To recover the 20% profit decline, we should immediately match competitive entry pricing on core wardrobes while launching bundled wardrobe-table-chair packages to protect overall ticket margin, expand into e-commerce marketplaces and D2C channels to capture digital buyers, and pilot lighter steel-wood hybrid designs for urban apartments. We will monitor wardrobe unit volume, bundle attach rate, and gross margin per order.",
      "reasoning": "Combining competitive wardrobe pricing with margin-accretive bundles and online reach rebuilds volume while defending overall profitability."
    }
  ],
  "recommendations": [
    "P0: Realign wardrobe pricing to match competitive benchmarks and introduce wardrobe-table-chair value bundles to recover unit volume while preserving blended order margins.",
    "P1: Launch an online sales presence across major furniture marketplaces and a D2C storefront to complement traditional retail store distribution.",
    "P2: Expand R&D into lighter hybrid and alternative furniture materials (such as steel-engineered wood finishes) to recapture modern urban household demand."
  ],
  "metricsAndGuardrails": {
    "northStar": "Gross & EBITDA Margin Recovery (Steel Manufacturer)",
    "leading": [
      "Unit realization vs COGS/unit",
      "Capacity utilization & waste/scrap %"
    ],
    "guardrails": [
      "Customer retention / NPS (don’t over-cut quality)",
      "Market share retention"
    ]
  },
  "synthesisScript": "The steel furniture manufacturer's 20% profit drop is a revenue issue concentrated in wardrobes (70% of sales), where rigid pure-steel pricing, offline-only distribution, and unbundled offerings lost buyers to agile rivals. Matching competitive wardrobe pricing, selling multi-piece room bundles, building online channels, and introducing hybrid material designs will restore volume and profits.",
  "interviewerTrap": "Assuming costs rose without checking Revenue (Price × Volume × Mix) first, or skipping Industry-wide vs Company-specific scoping!",
  "variations": [
    {
      "question": "How would your recommendation change if Steel Manufacturer had half the timeline or budget?",
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
  "id": "cm-cons-10-steel-manufacturer-2-coal-wastage",
  "title": "Steel Manufacturer - 2 (Coal Wastage)",
  "company": "Steel Manufacturer",
  "track": "Consulting",
  "category": "Profitability",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "Profitability",
    "Consulting"
  ],
  "prompt": "Your client is a steel manufacturer facing steadily rising operating costs and shrinking margins at one of its plants. Diagnose the drivers of this cost increase and recommend practical solutions.",
  "clarifyingQuestions": [
    {
      "q": "Is this cost spike industry-wide across all steelmakers, or is it isolated to specific plants of our client?",
      "a": "Competitors and our other plants are unaffected; the cost surge is isolated to one manufacturing unit located in the middle of a Tier-2 city.",
      "why": "Narrows the problem to plant-specific local operations and inbound logistics rather than global steel or commodity cycles."
    },
    {
      "q": "Have revenues, sales volumes, or product mix changed at this Tier-2 plant over the same period?",
      "a": "No—plant output and revenues have stayed steady, so the margin squeeze is entirely driven by higher unit production costs.",
      "why": "Confirms a pure cost-side profitability diagnosis with no demand-side distortion."
    },
    {
      "q": "Which cost buckets—fixed plant overhead or variable raw materials and fuel—drove the increase?",
      "a": "Fixed overheads and iron-ore prices are stable, but coal cost per ton of steel produced has jumped sharply over the past year.",
      "why": "Focuses the value-chain breakdown directly on coal procurement, inbound transport, storage, and furnace consumption."
    }
  ],
  "frameworkUsed": "Profit = Revenue (Price × Volume × Mix) − Costs (Fixed + Variable along Value Chain)",
  "coreEquation": "Profit = ∑(Units × Price × Margin Mix) − (Fixed Overhead + Variable Value-Chain Costs)",
  "strategyOverview": "With revenues and fixed overheads stable, rising costs at the Tier-2 city-center steel plant are driven by elevated coal cost per ton of steel. Sourcing coal from a distant supplier via open trucks into a congested urban plant causes ~12–15% transit spillage, pilferage, and moisture absorption—degrading calorific quality and forcing higher furnace coal burn; closed-container transport and closer grade-certified sourcing will eliminate the wastage.",
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
      "phase": "Scoping",
      "speaker": "Interviewer",
      "kind": "prompt",
      "detail": "Your client is a steel manufacturer facing steadily rising operating costs and shrinking margins at one of its plants. Diagnose the drivers of this cost increase and recommend practical solutions."
    },
    {
      "phase": "Scoping",
      "speaker": "Candidate",
      "kind": "question",
      "detail": "Thank you. To scope the issue, is this cost surge affecting the broader steel industry or just us, is it confined to specific plants, and have revenues or output volumes changed there?",
      "reasoning": "Checking geographic concentration and output stability separates network-wide commodity inflation from a localized plant operational failure."
    },
    {
      "phase": "Structure",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "Revenues and output volumes are steady, and peers plus our other factories are unaffected. The cost spike is isolated to a single plant situated in the middle of a Tier-2 city. How would you structure your cost breakdown for this plant?"
    },
    {
      "phase": "Structure",
      "speaker": "Candidate",
      "kind": "framework",
      "detail": "I will split plant costs into Fixed Costs (labor, land/rent, depreciation) and Variable Costs along the steelmaking chain: raw material and fuel procurement (iron ore, coking/thermal coal), inbound logistics and yard handling, furnace smelting efficiency, and outbound dispatch. Where are costs rising fastest?",
      "reasoning": "Walking the steelmaking cost chain pinpoints whether price rate, transit loss, or furnace conversion yield is driving the plant's cost overrun."
    },
    {
      "phase": "Investigation",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "Fixed costs and iron-ore procurement are stable, while coal spend per ton of steel produced has surged. Both our inbound coal freight bill and the tons of coal consumed per ton of steel in the furnace have increased over the past year.",
      "causes": [
        "Inbound coal logistics cost rose sharply at the Tier-2 city-center plant",
        "Specific coal consumption per ton of steel increased inside the furnace"
      ]
    },
    {
      "phase": "Root Cause",
      "speaker": "Candidate",
      "kind": "root-cause",
      "detail": "Seeing both higher inbound cost and higher coal burn per ton points to a coal supply-chain breakdown. Have we switched to a more distant coal supplier whose open-truck transport through city congestion causes physical coal spillage, pilferage, and moisture absorption—lowering calorific value and forcing the furnace to burn extra coal?",
      "reasoning": "Connecting higher burn ratios to open-haul transit distance tests whether physical wastage and moisture degradation explain both cost symptoms.",
      "causes": [
        "Long-distance open-truck hauling into a congested city-center plant causes spillage and pilferage",
        "Moisture absorption and grade loss during transit reduce calorific value and furnace yield"
      ]
    },
    {
      "phase": "Solution",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "Spot on—switching to a distant vendor forced long open-truck hauls into the city center, causing roughly 12–15% coal wastage, pilferage, and moisture contamination that degrades furnace thermal efficiency. Since relocating the plant is not feasible near term, what short- and long-term fixes do you recommend?",
      "causes": [
        "Open-truck long hauls cause ~12–15% transit wastage and moisture-driven furnace inefficiency"
      ]
    },
    {
      "phase": "Synthesis",
      "speaker": "Candidate",
      "kind": "synthesis",
      "detail": "To eliminate this coal cost overrun without relocating the Tier-2 plant, we should immediately mandate sealed closed boxes or covered containers with weighbridge checks on all inbound coal trucks to stop spillage, pilferage, and rain exposure. Over the medium term, we should contract with geographically closer coal suppliers under strict calorific-value and moisture SLAs, and cover on-site coal yards while tuning furnace air-fuel ratios. We will track landed coal cost per ton of steel and furnace thermal yield.",
      "reasoning": "Pairing immediate closed-container transport with closer supplier contracting addresses both transit wastage and furnace burn efficiency."
    }
  ],
  "recommendations": [
    "P0: Mandate sealed closed containers or covered tipper boxes with GPS and origin-to-gate weighbridge reconciliation on all inbound coal shipments to eliminate 12–15% transit spillage, moisture, and pilferage.",
    "P1: Transition supply contracts to geographically closer coal vendors with binding calorific-value and moisture-content penalties to cut freight distance and improve furnace burn efficiency.",
    "P2: Build covered dry-storage sheds at the Tier-2 plant and recalibrate furnace air-fuel ratios while tracking coal cost per ton of steel as the primary KPI."
  ],
  "metricsAndGuardrails": {
    "northStar": "Gross & EBITDA Margin Recovery (Steel Manufacturer)",
    "leading": [
      "Unit realization vs COGS/unit",
      "Capacity utilization & waste/scrap %"
    ],
    "guardrails": [
      "Customer retention / NPS (don’t over-cut quality)",
      "Market share retention"
    ]
  },
  "synthesisScript": "Rising operating costs at our Tier-2 city-center steel plant are driven by coal wastage and thermal inefficiency from hauling coal long distances in open trucks, causing ~12–15% transit loss, pilferage, and moisture degradation. Enforcing closed-container transport with weighbridge controls immediately and contracting with closer, grade-certified coal suppliers over the long term will restore unit margins.",
  "interviewerTrap": "Assuming costs rose without checking Revenue (Price × Volume × Mix) first, or skipping Industry-wide vs Company-specific scoping!",
  "variations": [
    {
      "question": "How would your recommendation change if Steel Manufacturer had half the timeline or budget?",
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
  "id": "cm-cons-11-tractor-manufacturer-profitability",
  "title": "Tractor Manufacturer Profitability",
  "company": "Tractor Manufacturer",
  "track": "Consulting",
  "category": "Profitability",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "Profitability",
    "Consulting"
  ],
  "prompt": "Your client is a luxury, all-weather tractor manufacturer that has been operating at a loss for the past six months while competitors remain profitable. Identify the drivers of these losses and recommend a turnaround plan.",
  "clarifyingQuestions": [
    {
      "q": "Is the downturn affecting the entire tractor industry, and what differentiates our client's product and value chain?",
      "a": "Competitors are profitable. We build state-of-the-art tractors designed for adverse weather on any terrain; we make most core parts in-house, outsource select components, and sell via dealer networks.",
      "why": "Establishes that losses are company-specific and flags outsourced component supply and dealer distribution as potential risk nodes."
    },
    {
      "q": "Are the recent six-month losses driven by declining revenues, rising costs, or both?",
      "a": "The client is experiencing both rising costs and declining revenue; let's examine the cost side first.",
      "why": "Confirms a dual-sided P&L squeeze and aligns on investigating cost drivers before commercial volume levers."
    },
    {
      "q": "Within costs, have fixed overheads increased or are variable manufacturing inputs driving the surge?",
      "a": "Fixed costs like wages, electricity, and rent are flat, whereas raw material and outsourced component spending increased sharply over the past few months.",
      "why": "Isolates variable component procurement—specifically insourced versus outsourced parts—as the primary cost culprit."
    }
  ],
  "frameworkUsed": "Profit = Revenue (Price × Volume × Mix) − Costs (Fixed + Variable along Value Chain)",
  "coreEquation": "Profit = ∑(Units × Price × Margin Mix) − (Fixed Overhead + Variable Value-Chain Costs)",
  "strategyOverview": "Six-month losses stem from a two-sided squeeze: variable COGS jumped due to third-party price hikes on outsourced specialty components, while passing through high prices and part-shortage delays eroded unit sales against profitable rivals. Stabilize COGS via dual-sourcing or selective insourcing of critical parts, and revive volume by introducing modular mid-premium trims and dealer financing.",
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
      "phase": "Scoping",
      "speaker": "Interviewer",
      "kind": "prompt",
      "detail": "Your client is a luxury, all-weather tractor manufacturer that has been operating at a loss for the past six months while competitors remain profitable. Identify the drivers of these losses and recommend a turnaround plan."
    },
    {
      "phase": "Scoping",
      "speaker": "Candidate",
      "kind": "question",
      "detail": "To ground the analysis, is this loss industry-wide or isolated to us, how do our luxury tractors operate across manufacturing and distribution, and is the issue driven by revenue, cost, or both?",
      "reasoning": "Confirming peer profitability, make-versus-buy manufacturing structure, and the P&L split avoids blind hypothesis testing."
    },
    {
      "phase": "Structure",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "Competitors are profitable. Our state-of-the-art tractors handle all terrains and weather; we manufacture core assemblies in-house, outsource select components, and distribute through dealers. We face both rising costs and falling revenue—please analyze costs first."
    },
    {
      "phase": "Structure",
      "speaker": "Candidate",
      "kind": "framework",
      "detail": "I will split manufacturing costs into Fixed Costs (labor, electricity, plant rent) and Variable Costs (raw materials, insourced vs. outsourced components, and warranty/logistics). Have any specific buckets spiked over the last six months?",
      "reasoning": "Separating fixed overhead from insourced and outsourced variable inputs isolates where third-party supplier inflation is hitting unit margins."
    },
    {
      "phase": "Investigation",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "Fixed costs are flat, and in-house fabrication costs are steady. However, spending on outsourced specialty components—such as precision weather-sealed hydraulics and sensors—jumped sharply due to single-vendor price hikes and supply delays, which also delayed dealer deliveries and hurt unit sales.",
      "causes": [
        "Single-vendor price hikes on outsourced precision hydraulics and sensors inflated variable COGS",
        "Part supply bottlenecks delayed dealer deliveries and depressed tractor unit sales"
      ]
    },
    {
      "phase": "Root Cause",
      "speaker": "Candidate",
      "kind": "root-cause",
      "detail": "That links both sides of our P&L loss: single-source dependency on outsourced specialty components let suppliers hike prices into our COGS, while component delays and high luxury price points pushed price-conscious farm buyers and dealers toward reliably stocked, lower-priced rivals.",
      "reasoning": "Connecting outsourced part concentration to both unit cost inflation and lost dealer fill rates explains how six months of losses materialized rapidly.",
      "causes": [
        "Unhedged single-vendor reliance for specialized outsourced tractor assemblies",
        "Over-engineered luxury pricing and delivery delays alienated value-focused tractor buyers"
      ]
    },
    {
      "phase": "Solution",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "That captures both the cost and revenue dynamics well. How should management return to profitability without compromising our core all-weather durability reputation?"
    },
    {
      "phase": "Synthesis",
      "speaker": "Candidate",
      "kind": "synthesis",
      "detail": "To reverse the six-month loss, we should immediately qualify backup suppliers and selectively insource high-markup outsourced components to restore variable COGS and dealer fill rates. Simultaneously, we should introduce a modular mid-premium trim—preserving all-weather drivetrain durability while making luxury cabin/sensor extras optional—paired with seasonal dealer financing. We will track unit gross margin, on-time dealer delivery rate, and monthly unit volume.",
      "reasoning": "Fixing outsourced supply concentration while unbundling non-core luxury features protects brand durability while restoring both cost efficiency and sales velocity."
    }
  ],
  "recommendations": [
    "P0: Dual-source critical outsourced hydraulics and electronics—or selectively insource high-margin sub-assemblies—under fixed-price, penalty-backed vendor SLAs to cut variable COGS and eliminate delivery delays.",
    "P1: Introduce a modular mid-premium tractor trim that retains core all-weather terrain performance while unbundling optional luxury cabin tech to expand addressable buyer demand.",
    "P2: Partner with rural NBFCs on seasonal EMI financing and track unit contribution margin alongside dealer fill rates."
  ],
  "metricsAndGuardrails": {
    "northStar": "Gross & EBITDA Margin Recovery (Tractor Manufacturer)",
    "leading": [
      "Unit realization vs COGS/unit",
      "Capacity utilization & waste/scrap %"
    ],
    "guardrails": [
      "Customer retention / NPS (don’t over-cut quality)",
      "Market share retention"
    ]
  },
  "synthesisScript": "The tractor manufacturer's six-month losses stem from single-vendor price hikes and supply delays in outsourced specialty components, combined with rigid luxury pricing that slowed dealer unit sales. Qualifying secondary suppliers or selectively insourcing high-cost parts while launching a modular mid-premium all-weather trim will cut variable COGS and rebuild profitable volume.",
  "interviewerTrap": "Assuming costs rose without checking Revenue (Price × Volume × Mix) first, or skipping Industry-wide vs Company-specific scoping!",
  "variations": [
    {
      "question": "How would your recommendation change if Tractor Manufacturer had half the timeline or budget?",
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
  "id": "cm-cons-12-barb-s-bbq-profitability",
  "title": "Barb's BBQ Profitability",
  "company": "Barb's BBQ Deli",
  "track": "Consulting",
  "category": "Profitability",
  "difficulty": 4,
  "isStarter": false,
  "tags": [
    "Profitability",
    "Consulting"
  ],
  "prompt": "Your client is Barb B. Queue, the owner of a deli shop situated inside a busy supermarket. Facing stiff competition from neighboring supermarket counters and nearby fast-food chains, store profits have stagnated and begun declining over the long term. Diagnose the root causes of this profit decline and recommend actionable solutions.",
  "clarifyingQuestions": [
    {
      "q": "What does Barb's operating model look like in terms of product mix, shifts, and store footprint?",
      "a": "Barb's sells two categories—deli meats (led by BBQ chicken wings and a popular pulled pork burger combo) and prepared foods—across morning and evening shifts matching peak supermarket traffic.",
      "why": "Establishes the revenue mix and shift structure before isolating whether margin erosion stems from specific SKUs or fixed overhead."
    },
    {
      "q": "Has the profit decline been driven by falling supermarket foot traffic, pricing pressure, or rising operating costs?",
      "a": "Supermarket foot traffic is actually growing, while Barb's deli revenue has flatlined around $280,000 as cost of goods sold and hourly labor costs climbed.",
      "why": "Separates external foot-traffic demand from internal conversion, pricing competitiveness, and unit cost structure."
    },
    {
      "q": "How does Barb's pricing and sourcing compare with neighboring supermarket deli counters?",
      "a": "Competitors sell comparable burgers for $0.50 less with more aggressive in-store promotions, while Barb's sources all ingredients from a single large supplier.",
      "why": "Tests whether single-supplier procurement and competitor undercutting are squeezing gross margin and limiting price flexibility."
    }
  ],
  "frameworkUsed": "Profit = Revenue (Price × Volume × Mix) − Costs (Fixed + Variable along Value Chain)",
  "coreEquation": "Profit = ∑(Units × Price × Margin Mix) − (Fixed Overhead + Variable Value-Chain Costs)",
  "strategyOverview": "Approach Barb's BBQ Deli profitability by decomposing Profit = Revenue (Foot Traffic × Conversion × Price/Mix) − Costs (COGS + Shift Labor + Fixed Kitchen Overhead), isolating the $0.50 price gap, scratch-kitchen throughput cap, and weak new-shopper acquisition, and sequencing P0–P2 operational and promotional fixes.",
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
      "phase": "Scoping",
      "speaker": "Interviewer",
      "kind": "prompt",
      "detail": "Your client, Barb B. Queue, operates a deli counter inside a busy supermarket. Despite strong mall and grocery foot traffic, store profits have stagnated and are now declining amid pressure from neighboring supermarket offerings and nearby fast-food chains. How would you diagnose the problem and turn profitability around?"
    },
    {
      "phase": "Scoping",
      "speaker": "Candidate",
      "kind": "question",
      "detail": "Before structuring my analysis, I want to confirm Barb's core revenue streams, operating schedule, and competitive baseline. Could you share the product mix between deli and prepared foods, shift timings, and whether overall supermarket foot traffic has changed?",
      "reasoning": "Confirming product mix, shift capacity, and macro foot traffic prevents chasing a demand downturn that does not exist."
    },
    {
      "phase": "Structure",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "Barb's runs morning and evening shifts aligned with peak grocery hours, selling deli meats—primarily BBQ chicken wings and pulled pork burgers—alongside prepared foods. Deli revenue has plateaued at $280,000 while COGS increased, even though overall supermarket foot traffic is rising. How would you structure your investigation?"
    },
    {
      "phase": "Structure",
      "speaker": "Candidate",
      "kind": "framework",
      "detail": "I will break profitability into unit economics and volume drivers. On unit economics, I want to examine price realization versus rivals, single-supplier ingredient COGS, and labor cost per order; on volume, I will separate supply-side kitchen throughput from demand-side new-shopper capture. Let's start with pricing and unit costs.",
      "reasoning": "Flat revenue at $280,000 alongside rising COGS suggests both a margin squeeze and a ceiling on order volume."
    },
    {
      "phase": "Investigation",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "Good call. Competitors undercut Barb's burgers by $0.50 at identical quality while running aggressive in-store promotions. On our cost side, ingredients come from one large supplier at $2.00 per burger, and at 31 daily burger sales across a 4-hour shift, labor rates must stay under $23–$24/hour just to break even and $16–$20/hour to restore healthy margin.",
      "causes": [
        "Competitors undercut Barb's by $0.50 per burger at equivalent quality.",
        "Single-supplier sourcing keeps ingredient COGS at $2.00 without bulk rebates.",
        "Low shift volume (31 burgers per 4-hour shift) makes hourly labor costs unsustainable above $20/hour."
      ]
    },
    {
      "phase": "Root Cause",
      "speaker": "Candidate",
      "kind": "root-cause",
      "detail": "That exposes a dual cost-and-throughput squeeze: at ~7.75 burgers per hour, high hourly labor cannot be amortized, preventing us from matching the $0.50 price gap. Turning to volume, is kitchen capacity capping output during peak rushes, and are we capturing the rising supermarket foot traffic?",
      "reasoning": "Testing both kitchen throughput and shopper funnel conversion reveals whether lowering price alone would hit an operational wall.",
      "causes": [
        "Scratch cooking inside a fixed kitchen footprint bottlenecks peak fulfillment speed.",
        "Customer base relies heavily on repeat loyalists rather than new supermarket shoppers.",
        "Weak aisle visibility and lack of promotional sampling limit new customer acquisition."
      ]
    },
    {
      "phase": "Solution",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "Exactly right—scratch cooking in a tight kitchen caps peak throughput, and while supermarket traffic is growing, almost all our buyers are existing repeat customers rather than new shoppers. How would you sequence recommendations to restore sustainable profit growth?"
    },
    {
      "phase": "Synthesis",
      "speaker": "Candidate",
      "kind": "synthesis",
      "detail": "To reverse the profit decline, Barb's should attack labor-and-throughput efficiency first, unlock new shopper conversion second, and renegotiate sourcing third. Pre-batching core prep off-peak and optimizing shift staffing toward $16–$20/hour recovers unit margin, enabling targeted combo pricing and in-aisle sampling to convert rising supermarket traffic without sacrificing food quality.",
      "reasoning": "Sequencing kitchen throughput and labor efficiency ahead of price-led promotions ensures incremental traffic converts profitably."
    }
  ],
  "recommendations": [
    "P0: Shift from full scratch-to-order cooking to off-peak batch prep for pulled pork and BBQ wings, and realign shift rosters toward a $16–$20/hour blended labor rate to unlock peak throughput and restore unit margin.",
    "P1: Re-benchmark single-supplier contracts against two regional wholesalers to cut the $2.00 ingredient cost by 10–15%, funding a competitive $0.50 price match on the flagship pulled pork combo.",
    "P2: Launch high-visibility deli signage, supermarket cross-aisle coupons, and peak-hour tasting samples to convert growing store foot traffic beyond the existing repeat-customer base."
  ],
  "metricsAndGuardrails": {
    "northStar": "Gross & EBITDA Margin Recovery (Barb's BBQ Deli)",
    "leading": [
      "Unit realization vs COGS/unit",
      "Capacity utilization & waste/scrap %"
    ],
    "guardrails": [
      "Customer retention / NPS (don’t over-cut quality)",
      "Market share retention"
    ]
  },
  "synthesisScript": "Barb's BBQ Deli can restore long-term profitability by resolving a two-sided squeeze: high labor and single-supplier COGS block matching rivals' $0.50 lower burger price, while scratch-kitchen bottlenecks and weak aisle marketing cap volume at repeat loyalists despite rising supermarket traffic. Prioritize off-peak batch prep and shift labor optimization to lift throughput and cut hourly cost per order, then use multi-vendor sourcing savings to match combo pricing and run in-store sampling while tracking gross margin and repeat customer retention.",
  "interviewerTrap": "Assuming costs rose without checking Revenue (Price × Volume × Mix) first, or skipping Industry-wide vs Company-specific scoping!",
  "variations": [
    {
      "question": "How would your recommendation change if Barb's BBQ Deli had half the timeline or budget?",
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
  "id": "cm-cons-13-drug-manufacturer-profitability",
  "title": "Drug Manufacturer Profitability",
  "company": "Pharma Manufacturer",
  "track": "Consulting",
  "category": "Profitability",
  "difficulty": 4,
  "isStarter": false,
  "tags": [
    "Profitability",
    "Consulting"
  ],
  "prompt": "Your client is an oncology drug manufacturer in India experiencing a decline in profitability over the past year. Diagnose the root causes of this decline and recommend viable solutions that align with the client's operating principles.",
  "clarifyingQuestions": [
    {
      "q": "Is the profitability decline industry-wide or specific to our client, and where does the client operate?",
      "a": "The decline is specific to our client over the past 12 months. They sell across India except the Northeast, with steeper losses in high-competition regions.",
      "why": "Isolates company-specific competitive dynamics and identifies an untapped regional white space in Northeast India."
    },
    {
      "q": "Which customer channels does the client serve, and has their cost structure changed?",
      "a": "The client sells oncology drugs to hospitals and pharmacies, and manufacturing and operating costs have remained flat over the year.",
      "why": "Rules out cost inflation and directs the deep dive squarely onto hospital and pharmacy revenue drivers."
    },
    {
      "q": "How do the client's drug efficacy, pricing, and go-to-market approach compare with competitors?",
      "a": "Product quality and prices are identical to rivals, but the client relies on ethical sales reps, workshops, and patient support programs rather than paying doctor commissions.",
      "why": "Surfaces the non-price competitive disadvantage and ethical boundary that constrain standard trade-promotion levers."
    }
  ],
  "frameworkUsed": "Profit = Revenue (Price × Volume × Mix) − Costs (Fixed + Variable along Value Chain)",
  "coreEquation": "Profit = ∑(Units × Price × Margin Mix) − (Fixed Overhead + Variable Value-Chain Costs)",
  "strategyOverview": "Diagnose the oncology Pharma Manufacturer's profit drop using Profit = Revenue (Price × Volume × Regional Mix) − Flat Costs, pinpointing volume share loss to rivals' commission-led prescribing in competitive hubs while preserving the client's ethical stance through institutional partnerships, public-channel advocacy, and Northeast expansion.",
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
      "phase": "Scoping",
      "speaker": "Interviewer",
      "kind": "prompt",
      "detail": "Our client is an Indian oncology drug manufacturer facing a year-long decline in profitability. They want us to diagnose why profits are falling and propose practical turnaround levers. How would you begin?"
    },
    {
      "phase": "Scoping",
      "speaker": "Candidate",
      "kind": "question",
      "detail": "I'd like to confirm a few baseline facts first: is this decline industry-wide or specific to our client, which channels and geographies do they serve, and has there been any major shift in manufacturing or distribution costs?",
      "reasoning": "Clarifying industry vs. company variance, channel footprint, and cost stability narrows the search space before building the issue tree."
    },
    {
      "phase": "Structure",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "The decline is client-specific over the last year. They sell to hospitals and pharmacies across India—excluding the Northeast—with the sharpest drop in high-competition metro clusters, while costs have stayed completely flat. How would you structure your analysis?"
    },
    {
      "phase": "Structure",
      "speaker": "Candidate",
      "kind": "framework",
      "detail": "Since costs are flat, the issue is purely revenue-driven. I will decompose revenue into price per unit, unit volume sold, and geographic or product mix, then examine the hospital and pharmacy prescribing funnel to understand why rivals are outperforming us in competitive regions.",
      "reasoning": "Holding costs constant focuses every analytical cycle on whether price erosion or volume loss is driving the revenue shortfall."
    },
    {
      "phase": "Investigation",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "Good direction. Neither our client nor competitors have changed prices, and our drug molecule is clinically identical to rival offerings, yet our unit volumes have fallen sharply in competitive cities. Our client promotes via medical reps, CME workshops, and patient support programs.",
      "causes": [
        "Unit volume has fallen in high-competition markets despite identical pricing and clinical parity.",
        "Competitors use aggressive doctor commissions and channel incentives to capture prescriptions.",
        "Client maintains a strict ethical policy prohibiting doctor kickbacks."
      ]
    },
    {
      "phase": "Root Cause",
      "speaker": "Candidate",
      "kind": "root-cause",
      "detail": "With identical pricing and clinical efficacy, the volume drop stems from competitors using doctor commissions that our client ethically refuses to match, compounded by zero presence in Northeast India where competition is lighter. Are there institutional channels or ethical manufacturers we can partner with to bypass commission-driven prescribing?",
      "reasoning": "Because ethical compliance is a hard constraint, growth must come from institutional procurement and underserved regions rather than individual prescriber kickbacks.",
      "causes": [
        "Over-reliance on private individual prescribers where rival commissions distort share.",
        "Under-penetration of centralized institutional tenders and hospital formularies.",
        "Absence in Northeast India leaves a lower-competition growth market untapped."
      ]
    },
    {
      "phase": "Solution",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "Yes—large oncology hospital chains, government cancer institutes, and ethical peer manufacturers are open to structured collaborations, and Northeast India remains underserved. What concrete action plan would you present to the CEO?"
    },
    {
      "phase": "Synthesis",
      "speaker": "Candidate",
      "kind": "synthesis",
      "detail": "I recommend a three-pillar volume recovery plan that protects the client's ethical positioning: lock in centralized hospital-chain and government formulary contracts, co-promote complementary portfolios with another ethical manufacturer to boost rep coverage, and enter Northeast India where competitive intensity is lower.",
      "reasoning": "Shifting mix toward institutional formularies and underserved territories offsets private-clinic commission bias without compromising compliance."
    }
  ],
  "recommendations": [
    "P0: Pivot metro go-to-market from individual clinics toward centralized hospital-chain formularies, corporate insurance panels, and government oncology tenders where procurement is price- and quality-driven rather than commission-led.",
    "P1: Form a co-promotion alliance with a complementary ethical specialty pharma player to share hospital salesforce bandwidth and expand reach across Tier-1 and Tier-2 oncology centers.",
    "P2: Launch distribution in Northeast India via regional stockists and cancer-care partnerships to capture incremental, lower-competition volume while tracking net realization and compliance metrics."
  ],
  "metricsAndGuardrails": {
    "northStar": "Gross & EBITDA Margin Recovery (Pharma Manufacturer)",
    "leading": [
      "Unit realization vs COGS/unit",
      "Capacity utilization & waste/scrap %"
    ],
    "guardrails": [
      "Customer retention / NPS (don’t over-cut quality)",
      "Market share retention"
    ]
  },
  "synthesisScript": "The oncology Pharma Manufacturer's 12-month profit decline is driven by unit volume loss in high-competition cities—not cost inflation or price cuts—because rivals offer doctor commissions that our client rightly refuses on ethical grounds. To recover volume profitably without violating compliance, prioritize centralized hospital and public-tender formulary wins, pursue co-promotion alliances with ethical peers, and expand into underserved Northeast India while monitoring regional volume recovery and hospital contract margins.",
  "interviewerTrap": "Assuming costs rose without checking Revenue (Price × Volume × Mix) first, or skipping Industry-wide vs Company-specific scoping!",
  "variations": [
    {
      "question": "How would your recommendation change if Pharma Manufacturer had half the timeline or budget?",
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
  "id": "cm-cons-14-fashion-mail-order-profitability",
  "title": "Fashion Mail Order Profitability",
  "company": "Mail-Order Apparel",
  "track": "Consulting",
  "category": "Profitability",
  "difficulty": 4,
  "isStarter": false,
  "tags": [
    "Profitability",
    "Consulting"
  ],
  "prompt": "Your client is a direct-mail clothing retailer in Europe whose sole sales channel is mailed product catalogs. Next year, catalog postage costs will rise to $0.40 per catalog. Assess whether the current business model remains profitable and recommend strategic options.",
  "clarifyingQuestions": [
    {
      "q": "What is the average revenue and pre-mailing profit margin generated per mailed catalog?",
      "a": "Each catalog generates $2.50 in average revenue across initial and repeat orders, with a 15% operating margin excluding mailing costs.",
      "why": "Allows immediate calculation of unit profit per catalog against the upcoming $0.40 postage threshold."
    },
    {
      "q": "How have European catalog order volumes been trending, and is there room to raise prices or cut supply-chain costs?",
      "a": "Catalog orders have been declining in line with European trends, procurement is already lean, and price-elasticity studies show sharp volume drops if prices rise.",
      "why": "Tests whether traditional pricing or cost-cutting levers can absorb the postage shock before evaluating channel and market pivots."
    }
  ],
  "frameworkUsed": "Profit = Revenue (Price × Volume × Mix) − Costs (Fixed + Variable along Value Chain)",
  "coreEquation": "Profit = ∑(Units × Price × Margin Mix) − (Fixed Overhead + Variable Value-Chain Costs)",
  "strategyOverview": "Evaluate the European Mail-Order Apparel retailer by testing catalog unit economics ($2.50 revenue × 15% margin = $0.375 pre-mail profit vs. $0.40 postage = -$0.025 loss), ruling out price hikes or supply cuts, and applying a Market/Channel expansion matrix toward European e-commerce and emerging-market catalogs.",
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
      "phase": "Scoping",
      "speaker": "Interviewer",
      "kind": "prompt",
      "detail": "Our client sells low-cost clothing in Europe exclusively through mailed product catalogs. Next year, postage will increase to $0.40 per catalog. They want to know whether their current business model stays profitable and what they should do."
    },
    {
      "phase": "Scoping",
      "speaker": "Candidate",
      "kind": "question",
      "detail": "To establish unit economics per catalog, what is the average revenue per mailed catalog, our profit margin excluding postage, and the recent trajectory of catalog order volumes in Europe?",
      "reasoning": "Testing revenue and margin per catalog directly answers whether the $0.40 postage hike pushes unit contribution negative."
    },
    {
      "phase": "Structure",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "Each catalog yields $2.50 in average revenue across initial and repeat orders at a 15% pre-mailing margin, and European catalog order volumes have been steadily declining. How do you evaluate the economics and strategic options?"
    },
    {
      "phase": "Structure",
      "speaker": "Candidate",
      "kind": "framework",
      "detail": "First, let's check catalog unit math: 15% of $2.50 is $0.375 profit before postage, which leaves a $0.025 net loss per catalog once postage hits $0.40. Since the current model turns unprofitable, I'll evaluate short-term levers—raising prices, cutting operating costs, or pruning low-ROI mailings—alongside channel and geographic pivots.",
      "reasoning": "Quantifying the -$0.025 per-catalog deficit upfront frames the urgency of finding either internal margin levers or new growth avenues."
    },
    {
      "phase": "Investigation",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "Your unit math is spot on. However, price-elasticity tests show even modest price hikes trigger steep customer defection, and our sourcing and fulfillment costs are already fully optimized. What strategic paths remain?",
      "causes": [
        "Higher postage ($0.40 vs. $0.375 gross profit/catalog) turns average catalog mailings unprofitable by $0.025.",
        "High price elasticity among budget apparel buyers blocks passing postage costs to customers.",
        "Lean supply chain leaves negligible room for further procurement or fulfillment savings."
      ]
    },
    {
      "phase": "Root Cause",
      "speaker": "Candidate",
      "kind": "root-cause",
      "detail": "Because both pricing and supply-chain cuts are exhausted in a structurally shrinking European catalog market, we face a channel-market mismatch. Using a channel-by-market matrix, we can either shift European buyers to an e-commerce store to eliminate postage, or selectively deploy catalogs into emerging markets with lower digital penetration—while culling unprofitable European mailing segments immediately.",
      "reasoning": "Separating channel shift from geographic expansion clarifies which moves protect European repeat customers versus capturing net-new offline demand.",
      "causes": [
        "Secular decline in European print-catalog shopping compresses order yield per mailed book.",
        "100% dependence on physical mail exposes all revenue to postal tariff inflation."
      ]
    },
    {
      "phase": "Solution",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "That makes strong strategic sense. Between launching European e-commerce, expanding catalogs into emerging markets, and pruning current mailings, how should management sequence execution next year?"
    },
    {
      "phase": "Synthesis",
      "speaker": "Candidate",
      "kind": "synthesis",
      "detail": "The current pure-catalog model in Europe will lose $0.025 per catalog next year and is unsustainable. Immediately prune low-converting European mailing cohorts to stay cash-positive, launch a direct e-commerce storefront and online marketplace presence in Europe to migrate repeat buyers off print, and pilot catalog or hybrid distribution in high-demand emerging markets only after proving unit ROI.",
      "reasoning": "Cutting negative-ROI mailings stops near-term cash burn while digital migration preserves the European customer base."
    }
  ],
  "recommendations": [
    "P0: Segment the European mailing database by historical order yield and immediately halt mailings to cohorts generating below $2.70 revenue per catalog so remaining print runs stay above the $0.40 postage breakeven.",
    "P1: Launch a European e-commerce storefront and partner with regional fashion marketplaces, using QR codes and digital-only discounts inside final catalog drops to migrate repeat buyers online.",
    "P2: Pilot low-cost catalog distribution in select emerging markets with strong budget-apparel demand and lower e-commerce penetration, scaling only after validating positive post-postage contribution margins."
  ],
  "metricsAndGuardrails": {
    "northStar": "Gross & EBITDA Margin Recovery (Mail-Order Apparel)",
    "leading": [
      "Unit realization vs COGS/unit",
      "Capacity utilization & waste/scrap %"
    ],
    "guardrails": [
      "Customer retention / NPS (don’t over-cut quality)",
      "Market share retention"
    ]
  },
  "synthesisScript": "With postage rising to $0.40 against $0.375 in pre-mailing profit per catalog ($2.50 revenue at 15% margin), Mail-Order Apparel's current European model turns unprofitable by $0.025 per catalog—and price sensitivity plus an already lean supply chain rule out pricing or cost fixes. Management should immediately prune below-breakeven European mailing lists, launch a direct e-commerce and marketplace channel to migrate repeat European shoppers off print, and selectively test emerging-market expansion while tracking contribution margin per customer and digital migration rate.",
  "interviewerTrap": "Assuming costs rose without checking Revenue (Price × Volume × Mix) first, or skipping Industry-wide vs Company-specific scoping!",
  "variations": [
    {
      "question": "How would your recommendation change if Mail-Order Apparel had half the timeline or budget?",
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
  "id": "cm-cons-me-airport-taxi",
  "title": "Airport Taxi Market Entry",
  "company": "Airport Taxi Operator",
  "track": "Consulting",
  "category": "Market Entry",
  "difficulty": 1,
  "isStarter": true,
  "tags": [
    "Market Entry",
    "Mobility",
    "Airport",
    "Breakeven"
  ],
  "prompt": "Dubai Airport is retracting all existing taxi permits and issuing 2,100 new permits to the country's three largest operators. Our client is a Big-three taxi operator with a 3,000-car fleet and 500 idle taxis not yet serving the airport. Determine whether the client should apply for 500 new permits given a 20% one-year ROI target.",
  "clarifyingQuestions": [
    {
      "q": "How many passengers use Dubai Airport annually, and what share require a taxi into the city across day and night hours?",
      "a": "Of 84 million annual passengers, 20% take taxis into Dubai while 80% transit. Half of taxi demand (adjusted for ride sharing) occurs between 12 AM–6 AM and half between 6 AM–12 AM.",
      "why": "Establishes hourly taxi demand across peak night and daytime windows to test whether 2,100 total airport cabs face supply shortages or idle capacity."
    },
    {
      "q": "What are the round-trip duration, day and night fares, and cost structure per permitted taxi?",
      "a": "Each round trip takes 60 minutes, earning $80 at night and $70 by day. Drivers keep 50% of revenue, annual operating cost is $5,000 per cab, and each permit costs $250,000 upfront.",
      "why": "Provides the exact unit revenue, variable driver split, and upfront permit capex required to calculate utilization-adjusted Year-1 ROI."
    }
  ],
  "frameworkUsed": "Market Attractiveness (Airport Pax Sizing) → Competition (Ola/Uber/Metro) → Unit Economics & Entry Mode",
  "coreEquation": "Year-1 Profit = (Daily Trips × Captured Share × Take-Rate/Margin × 365) − Fixed Fleet/Permit/Tech Capex",
  "strategyOverview": "Evaluate the Dubai Airport permit bid by sizing hourly taxi demand vs. the 2,100-cab permit cap (100% night utilization, ~61% day utilization), computing realistic annual profit for 500 idle cabs (~$111M net after 50% driver split and $2.5M opex) against the $125M upfront license fee (~89% Year-1 ROI vs. 20% hurdle), and recommending a Go with utilization and regulatory guardrails.",
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
      "phase": "Scoping",
      "speaker": "Interviewer",
      "kind": "prompt",
      "detail": "Dubai Airport is revoking existing taxi permits and issuing 2,100 new permits across the three largest operators. Our client, a Big-three operator with 500 idle taxis in its 3,000-car fleet, wants to know if applying for 500 permits will clear its 20% one-year ROI hurdle."
    },
    {
      "phase": "Scoping",
      "speaker": "Candidate",
      "kind": "question",
      "detail": "To size revenue and payback accurately, could you share annual airport passenger traffic, the share needing taxis into Dubai across day and night shifts, average round-trip duration, fares, and the upfront permit plus operating costs?",
      "reasoning": "Getting passenger demand, shift timing, trip cycle time, and permit capex upfront lets us test utilization rather than assuming 100% occupancy."
    },
    {
      "phase": "Structure",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "The airport serves 84 million passengers annually; 20% take a taxi into Dubai and 80% transit. After adjusting for shared rides, 50% of taxi demand falls between 12 AM–6 AM at $80/fare and 50% between 6 AM–12 AM at $70/fare, with each round trip taking 60 minutes. Drivers take 50% of revenue, operating cost is $5,000/cab/year, and permits cost $250,000 each upfront. How would you model this?"
    },
    {
      "phase": "Structure",
      "speaker": "Candidate",
      "kind": "framework",
      "detail": "I will compare hourly passenger taxi demand against the 2,100-taxi supply cap for both day and night windows to determine realistic utilization, calculate annual revenue and profit for 500 cabs, and compare Year-1 cash profit against the $125 million upfront permit investment.",
      "reasoning": "Checking demand against total permitted supply avoids overstating daytime revenue if the 2,100-cab pool exceeds daytime arrivals."
    },
    {
      "phase": "Investigation",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "Walk me through the demand-versus-supply utilization math and what revenue 500 cabs generate.",
      "causes": [
        "Night demand (8.4M rides / 2,190 hrs = 3,836/hr) far exceeds 2,100 cabs, driving 100% night utilization.",
        "Day demand (8.4M rides / 6,570 hrs = 1,279/hr) yields ~61% utilization across 2,100 cabs."
      ]
    },
    {
      "phase": "Root Cause",
      "speaker": "Candidate",
      "kind": "root-cause",
      "detail": "Total taxi demand is 16.8 million rides per year—8.4 million in the 6-hour night window (~3,836 rides/hour, capping our supply at 100% utilization) and 8.4 million over the 18-hour day window (~1,279 rides/hour, or 60.9% utilization across 2,100 cabs). Each cab earns ~$1,247/day ($480 at night plus ~$767 by day), generating ~$227.6 million annually for 500 cabs—versus $317.5 million if naively assuming 100% daytime utilization. Should I factor any extra fleet capex or fuel costs into the ROI?",
      "reasoning": "Distinguishing the 61% daytime utilization reality from a naive 100% occupancy calculation prevents a ~40% revenue overestimate while still capturing massive night demand.",
      "causes": [
        "Realistic annual revenue for 500 cabs is ~$227.6M after adjusting daytime occupancy to 60.9%.",
        "Drivers' 50% revenue split ($113.8M) and $2.5M opex leave ~$111.3M Year-1 operating profit."
      ]
    },
    {
      "phase": "Solution",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "No extra fleet capex is needed since those 500 taxis are already idle, and assume fuel and traffic friction are negligible in this baseline. What is your final recommendation and key risk caveats?"
    },
    {
      "phase": "Synthesis",
      "speaker": "Candidate",
      "kind": "synthesis",
      "detail": "Apply for all 500 airport permits immediately. Even with 61% daytime utilization, 500 cabs generate ~$111.3 million in Year-1 net profit against a $125 million license outlay—an ~89% Year-1 ROI that clears the 20% hurdle by over 4x, while deploying idle fleet capacity.",
      "reasoning": "Highlighting both the 89% base-case ROI and operational risks gives leadership an actionable decision with clear downside protection."
    }
  ],
  "recommendations": [
    "P0: Submit the bid for all 500 Dubai Airport permits immediately using the existing idle fleet, locking in an estimated ~89% Year-1 ROI ($111.3M net profit on $125M permit capex) without new vehicle capex.",
    "P1: Schedule driver shifts specifically to maximize 12 AM–6 AM coverage where demand (3,836 rides/hr) guarantees 100% utilization at the higher $80 night fare, and permit app-dispatch return trips to lift daytime occupancy above 61%.",
    "P2: Stress-test permit renewal terms, fuel/maintenance pass-throughs, and potential ride-hail competition in the bid contract so payback stays under 15 months even if daytime fares soften."
  ],
  "metricsAndGuardrails": {
    "northStar": "3-Year NPV / Year-1 SOM Market Share & Payback (Airport Taxi Operator)",
    "leading": [
      "Breakeven volume vs pilot traction",
      "Partner/channel onboarding velocity"
    ],
    "guardrails": [
      "Capex overrun / working capital lockup",
      "Core brand cannibalization"
    ]
  },
  "synthesisScript": "The Airport Taxi Operator should definitely apply for all 500 Dubai Airport permits using its 500 idle cabs. Accounting for 100% night utilization (3,836 rides/hour vs. 2,100 cabs) and 60.9% daytime utilization (1,279 rides/hour), the 500-cab fleet generates ~$227.6M in annual revenue and ~$111.3M in net profit after the 50% driver split and $2.5M operating cost—delivering an ~89% Year-1 ROI on the $125M permit fee, well above the 20% hurdle, provided night-shift coverage and permit renewal terms are protected.",
  "interviewerTrap": "Assuming 100% of airport passengers take taxis and ignoring airport concession fees + empty return (deadhead) rides!",
  "variations": [
    {
      "question": "How would your recommendation change if Airport Taxi Operator had half the timeline or budget?",
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
  "id": "cm-cons-me-airline-route",
  "title": "Airline Route Expansion",
  "company": "Commercial Airline",
  "track": "Consulting",
  "category": "Market Entry",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "Market Entry",
    "Consulting"
  ],
  "prompt": "Your client is a commercial airline known for reliability and superior on-time performance. Management is considering launching a new direct flight route from its City A hub to City B. Evaluate the commercial and operational feasibility of this route.",
  "clarifyingQuestions": [
    {
      "q": "What are the route distance, flight duration, current load factors on competing carriers, and passenger mix?",
      "a": "The cities are 700 km apart (~1.5-hour flight), existing carriers operate at roughly 80% load factors, and traffic is split 40% business and 60% leisure.",
      "why": "Confirms whether route length suits narrow-body economics and whether demand balances weekday business yield with weekend leisure volume."
    },
    {
      "q": "How do the airports in City A and City B compare on slot availability, hub connectivity, and regulatory incentives?",
      "a": "City A is already our modern hub with spare slots, adding City B connects six additional spoke cities, and the route qualifies for UDAN ATF rebates, reduced airport fees, and subsidies.",
      "why": "Assesses network feed value and whether government scheme incentives de-risk early route breakeven."
    },
    {
      "q": "Which aircraft would serve the route, and how do incumbent competitors perform?",
      "a": "Competitors run frequent low-cost flights with inconsistent punctuality, while fuel-efficient A320 or B737 narrow-body jets fit the 700 km mission.",
      "why": "Identifies our punctuality differentiation and validates fleet suitability before finalizing the go/no-go recommendation."
    }
  ],
  "frameworkUsed": "Market Attractiveness (TAM/Growth) → Competition & Barriers → Capabilities & Breakeven → Entry Mode",
  "coreEquation": "Go / No-Go = Attractive SOM × Client Right-to-Win × (Breakeven Volume ≤ Achievable Share)",
  "strategyOverview": "Assess the Commercial Airline's City A–City B launch across Route Attractiveness (700 km, 80% load factors, 40/60 business-leisure split), Competitive Right-to-Win (on-time reliability vs. erratic LCCs), Hub Network & UDAN Cost Advantage (6 feeder connections + ATF rebates), and phased narrow-body deployment.",
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
      "phase": "Scoping",
      "speaker": "Interviewer",
      "kind": "prompt",
      "detail": "Our client is a commercial airline recognized for reliability and strong on-time performance. They are considering launching a new route between City A and City B and want your assessment of its feasibility."
    },
    {
      "phase": "Scoping",
      "speaker": "Candidate",
      "kind": "question",
      "detail": "To frame the feasibility check, could you share the route distance, current demand and passenger mix, airport slot availability at both cities, and any government incentives or fleet constraints?",
      "reasoning": "Route economics depend equally on stage length, load-factor depth, slot access, and any regulatory subsidies."
    },
    {
      "phase": "Structure",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "The route is 700 km (~1.5 hours), incumbents average 80% load factors with a 40% business and 60% leisure mix, and City A is already our hub with available slots while City B is smaller but central. The route also qualifies under the UDAN scheme for ATF tax rebates, lower airport fees, and subsidies. How would you evaluate this?"
    },
    {
      "phase": "Structure",
      "speaker": "Candidate",
      "kind": "framework",
      "detail": "I'll assess four pillars: demand durability and yield mix, competitive positioning versus incumbents, unit economics including UDAN cost relief and aircraft fit, and hub-and-spoke network synergies. Let's examine competitive weaknesses and aircraft options first.",
      "reasoning": "At 700 km and 80% incumbent load factors, demand is proven, so differentiation and unit cost determine whether we win profitable share."
    },
    {
      "phase": "Investigation",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "Competitors operate frequent low-cost services on the route but suffer from inconsistent punctuality. We have fuel-efficient A320 and B737 narrow-body aircraft available, and linking City B into City A opens feeder connections to six additional cities.",
      "causes": [
        "Incumbent LCCs average 80% load factors yet underperform on punctuality, alienating the 40% business segment.",
        "UDAN ATF tax rebates and lower airport charges materially lower early-stage breakeven load factor.",
        "Connecting City B into the City A hub unlocks feeder traffic across six onward routes."
      ]
    },
    {
      "phase": "Root Cause",
      "speaker": "Candidate",
      "kind": "root-cause",
      "detail": "This looks highly attractive: the 40% business segment gives weekday yield stability that incumbents underserve due to poor punctuality, while UDAN subsidies and A320/B737 fuel efficiency protect margins. Adding six onward hub connections also raises total network RASK beyond standalone route revenue. What risks should we guard against in City B operations?",
      "reasoning": "Recognizing both standalone route economics and network feeder uplift prevents undervaluing the City A hub synergy while checking turnaround risk.",
      "causes": [
        "Smaller City B airport turnaround delays could erode our core on-time reliability brand.",
        "Over-allocating initial daily frequency risks diluting load factor below breakeven before feeder demand ramps."
      ]
    },
    {
      "phase": "Solution",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "City B has manageable ground capacity if turnarounds are tightly scheduled, and the government also encourages carbon-offset programs for ESG alignment. How should the airline structure the launch?"
    },
    {
      "phase": "Synthesis",
      "speaker": "Candidate",
      "kind": "synthesis",
      "detail": "I recommend launching the City A–City B route with a phased A320/B737 schedule timed to City A hub connection banks. By combining UDAN cost rebates, superior on-time reliability for weekday business travelers, and feeder traffic from six onward cities, the route should rapidly reach profitable load factors without straining turnaround reliability.",
      "reasoning": "A disciplined initial frequency timed to hub banks balances yield capture with operational reliability."
    }
  ],
  "recommendations": [
    "P0: Launch with 1–2 daily A320/B737 frequencies timed to City A hub connection banks, capturing high-yield weekday business travelers dissatisfied with incumbent LCC delays and feeding six onward destinations.",
    "P1: Lock in UDAN ATF tax rebates, reduced airport charges, and route subsidies before launch, and build dedicated ground-turnaround SLAs at City B to safeguard on-time performance.",
    "P2: Pair corporate frequent-flyer promotions with optional carbon-offset ticketing to meet ESG goals, expanding capacity only after sustained route load factors exceed 75–80%."
  ],
  "metricsAndGuardrails": {
    "northStar": "3-Year NPV / Year-1 SOM Market Share & Payback (Commercial Airline)",
    "leading": [
      "Breakeven volume vs pilot traction",
      "Partner/channel onboarding velocity"
    ],
    "guardrails": [
      "Capex overrun / working capital lockup",
      "Core brand cannibalization"
    ]
  },
  "synthesisScript": "The Commercial Airline should launch the 700 km City A–City B route on a phased schedule using fuel-efficient A320/B737 narrow-body aircraft. Incumbents' 80% load factors and inconsistent punctuality leave a clear opening to win the 40% weekday business segment on reliability, while UDAN fuel-tax and airport-fee rebates lower breakeven and City A hub feed unlocks traffic across six onward cities—tracked via route load factor, on-time performance, and net contribution margin.",
  "interviewerTrap": "Saying 'YES enter!' purely because TAM is huge—forgetting competition, regulatory hurdles, breakeven math, and Build vs Buy vs Partner!",
  "variations": [
    {
      "question": "How would your recommendation change if Commercial Airline had half the timeline or budget?",
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
  "id": "cm-cons-me-steel-3",
  "title": "Steel Manufacturer - 3 (Expansion)",
  "company": "Steel Manufacturer",
  "track": "Consulting",
  "category": "Market Entry",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "Market Entry",
    "Consulting"
  ],
  "prompt": "Your client is a major global producer of hot-rolled steel considering expanding into the Middle East to establish cold-rolled steel manufacturing. Evaluate the attractiveness of this opportunity and recommend an appropriate market entry strategy.",
  "clarifyingQuestions": [
    {
      "q": "Does the client currently produce cold-rolled steel anywhere, and what is the strategic rationale for starting in the Middle East?",
      "a": "No, the client only manufactures hot-rolled steel today. They see an underdeveloped regional cold-rolled market with competitive labor costs that can support both local sales and exports.",
      "why": "Clarifies technical capability gaps and tests whether the Middle East serves purely domestic demand or an export manufacturing base."
    },
    {
      "q": "What is the size, growth rate, and end-use demand profile for cold-rolled steel in the Middle East?",
      "a": "Cold-rolled steel serves automotive, appliances, and precision construction, and the Middle East market is growing at 6.2% CAGR to reach $21 billion by 2026.",
      "why": "Quantifies market attractiveness and confirms high-value industrial demand before evaluating entry modes."
    }
  ],
  "frameworkUsed": "Market Attractiveness (TAM/Growth) → Competition & Barriers → Capabilities & Breakeven → Entry Mode",
  "coreEquation": "Go / No-Go = Attractive SOM × Client Right-to-Win × (Breakeven Volume ≤ Achievable Share)",
  "strategyOverview": "Assess the Steel Manufacturer's Middle East cold-rolled expansion across Market Attractiveness ($21B by 2026 at 6.2% CAGR), Value-Chain Synergy (hot-rolled coils are the direct feedstock for cold-rolling without reheating), and Greenfield vs. Brownfield entry modes to serve regional demand and exports.",
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
      "phase": "Scoping",
      "speaker": "Interviewer",
      "kind": "prompt",
      "detail": "Our client is a major global hot-rolled steel producer exploring an expansion into the Middle East to manufacture cold-rolled steel. How would you assess this market entry and recommend a strategy?"
    },
    {
      "phase": "Scoping",
      "speaker": "Candidate",
      "kind": "question",
      "detail": "First, I'd like to confirm whether the client already produces cold-rolled steel in other geographies, what motivates targeting the Middle East specifically, and what the regional demand size and growth look like.",
      "reasoning": "Establishing existing technical capabilities and regional market size determines whether this is a capability extension or a greenfield technology build."
    },
    {
      "phase": "Structure",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "The client has no cold-rolled operations yet and wants to start in the Middle East because regional capacity is underdeveloped and competitive labor enables exports. End uses include automotive, appliances, and precision construction, with the regional market growing at 6.2% CAGR to $21 billion by 2026. How would you structure your evaluation?"
    },
    {
      "phase": "Structure",
      "speaker": "Candidate",
      "kind": "framework",
      "detail": "I will evaluate three areas: regional market attractiveness and export economics, technical synergy between our existing hot-rolled operations and cold-rolled manufacturing, and entry-mode trade-offs between Greenfield construction and Brownfield acquisition or joint venture.",
      "reasoning": "Comparing Greenfield versus Brownfield requires understanding how tightly cold-rolling integrates with our existing hot-rolled feedstock."
    },
    {
      "phase": "Investigation",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "That makes sense. Technically, cold-rolled steel is made by passing hot-rolled steel through precision rollers at room temperature without reheating. Should we pursue a Greenfield build or a Brownfield acquisition?",
      "causes": [
        "Middle East cold-rolled demand is scaling at 6.2% CAGR toward $21B with limited local supply.",
        "Hot-rolled steel is the direct input for cold-rolling, creating strong vertical integration synergy.",
        "Competitive regional labor and energy economics support export hubs alongside domestic supply."
      ]
    },
    {
      "phase": "Root Cause",
      "speaker": "Candidate",
      "kind": "root-cause",
      "detail": "Because hot-rolled coil is the direct feedstock for cold-rolling, our client already controls the hardest upstream step. Since regional capacity is underdeveloped, quality Brownfield targets may be scarce or carry legacy equipment, whereas a Greenfield cold-rolling facility—fed initially by our global hot-rolled coils and expandable into an integrated complex—lets us deploy modern precision lines tailored for automotive and appliance specs.",
      "reasoning": "Connecting upstream hot-rolled feedstock control to Greenfield equipment quality explains why building new beats retrofitting outdated mills.",
      "causes": [
        "Underdeveloped regional industry limits viable Brownfield targets capable of auto-grade tolerances.",
        "Greenfield investment carries longer lead times and high upfront capex risk if export tariffs or local offtake lag."
      ]
    },
    {
      "phase": "Solution",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "Good insight on feedstock integration and equipment quality. How would you mitigate the capex and ramp-up risks of a Greenfield entry?"
    },
    {
      "phase": "Synthesis",
      "speaker": "Candidate",
      "kind": "synthesis",
      "detail": "I recommend a phased Greenfield entry near a deep-water Middle East industrial port: build modern cold-rolling and finishing lines first using our existing hot-rolled coils as captive feedstock, lock in anchor offtake agreements with regional construction and appliance OEMs, and evaluate local hot-rolling expansion only after Phase 1 utilization exceeds 80%.",
      "reasoning": "Staging downstream cold-rolling ahead of full upstream smelting cuts initial capex and accelerates time-to-revenue."
    }
  ],
  "recommendations": [
    "P0: Execute a phased Greenfield cold-rolling mill near a Middle East export port, feeding the plant initially with the client's existing global hot-rolled coils to halve upfront capex and speed commissioning.",
    "P1: Secure multi-year anchor offtake contracts with regional precision-construction and appliance manufacturers before groundbreaking, targeting high-margin coated/cold-rolled SKUs.",
    "P2: Benchmark local labor, energy tariffs, and export trade agreements across UAE/Saudi industrial zones, triggering Phase 2 upstream hot-rolling integration only after Phase 1 hits >80% utilization."
  ],
  "metricsAndGuardrails": {
    "northStar": "3-Year NPV / Year-1 SOM Market Share & Payback (Steel Manufacturer)",
    "leading": [
      "Breakeven volume vs pilot traction",
      "Partner/channel onboarding velocity"
    ],
    "guardrails": [
      "Capex overrun / working capital lockup",
      "Core brand cannibalization"
    ]
  },
  "synthesisScript": "The Steel Manufacturer should enter the $21B (6.2% CAGR) Middle East cold-rolled steel market via a phased Greenfield strategy anchored near a deep-water export port. Because cold-rolling processes hot-rolled coils directly without reheating, launching Phase 1 with modern cold-rolling lines fed by our existing global hot-rolled supply captures regional supply gaps and competitive labor for exports while containing capex risk—with Phase 2 upstream integration gated on 80%+ plant utilization and secured OEM offtake.",
  "interviewerTrap": "Saying 'YES enter!' purely because TAM is huge—forgetting competition, regulatory hurdles, breakeven math, and Build vs Buy vs Partner!",
  "variations": [
    {
      "question": "How would your recommendation change if Steel Manufacturer had half the timeline or budget?",
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
  "id": "cm-cons-18-argentinian-toy-manufacturer-entry",
  "title": "Argentinian Toy Manufacturer Entry",
  "company": "Argentinian Toy Maker",
  "track": "Consulting",
  "category": "Market Entry",
  "difficulty": 4,
  "isStarter": false,
  "tags": [
    "Market Entry",
    "Consulting"
  ],
  "prompt": "Your client is an Argentinian toy manufacturer holding a 50% domestic market share and leading the South American market, yet only 5% market share internationally. The CEO wants to expand global market share, improve international profit margins, and identify new revenue streams.",
  "clarifyingQuestions": [
    {
      "q": "How fast are the global and regional toy markets growing across North America, Europe, Latin America, and Asia?",
      "a": "The global toy market grows ~1% annually: Argentina (+10%), India (+10%), and China (+15%) are expanding rapidly, while the U.S. and Europe are shrinking at 5% per year.",
      "why": "Reveals whether our 5% international share stagnates because we are targeting shrinking Western markets instead of high-growth Asia."
    },
    {
      "q": "What does our international product portfolio look like in terms of unit volumes, selling prices, and unit costs?",
      "a": "Across three core international SKUs, Product 1 sells 200k units ($17 ASP, $9.00 cost), Product 2 sells 100k units ($14 ASP, $6.60 cost), and Product 3 sells 50k units ($8 ASP, $5.60 cost).",
      "why": "Exposes SKU-level gross margins and volume concentration so we can isolate low-margin drags and high-leverage winners."
    }
  ],
  "frameworkUsed": "Market Attractiveness (TAM/Growth) → Competition & Barriers → Capabilities & Breakeven → Entry Mode",
  "coreEquation": "Go / No-Go = Attractive SOM × Client Right-to-Win × (Breakeven Volume ≤ Achievable Share)",
  "strategyOverview": "Grow the Argentinian Toy Maker's international share and margins by redirecting expansion from shrinking US/EU markets (-5%/yr) toward high-growth APAC markets (India +10%, China +15%), pruning or repricing low-margin Product 3 (30% margin vs. ~47–53% on Products 1–2), and scaling e-commerce and IP licensing.",
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
      "phase": "Scoping",
      "speaker": "Interviewer",
      "kind": "prompt",
      "detail": "Our client leads South America with a 50% toy market share in Argentina, but holds just 5% internationally. The CEO wants a structured plan to lift international market share, boost profit margins, and open new revenue streams."
    },
    {
      "phase": "Scoping",
      "speaker": "Candidate",
      "kind": "question",
      "detail": "To ground our strategy, could you share growth rates across major international toy markets, how our international SKU portfolio performs on price, cost, and volume, and whether competitors face the same international drag?",
      "reasoning": "Separating regional market growth from SKU-level unit economics reveals whether the problem is geographic mix, product mix, or competitive execution."
    },
    {
      "phase": "Structure",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "Global toy growth is just 1% annually: U.S. and European markets are shrinking 5% per year, whereas Argentina (+10%), India (+10%), and China (+15%) are growing fast. Internationally, we sell three SKUs: Product 1 (200k units at $17 ASP, $9.00 cost), Product 2 (100k units at $14 ASP, $6.60 cost), and Product 3 (50k units at $8 ASP, $5.60 cost), while rivals have been growing faster abroad. How do you structure the turnaround?"
    },
    {
      "phase": "Structure",
      "speaker": "Candidate",
      "kind": "framework",
      "detail": "I'll structure this into three levers: geographic reallocation toward high-growth regions, SKU and value-chain margin optimization, and new revenue models. First, let's quantify international SKU profitability—total international revenue is $5.2 million with $2.46 million gross profit, and Product 3 stands out as a major margin drag.",
      "reasoning": "Calculating exact SKU revenue and gross profit highlights where margin dollars actually come from before choosing markets or channels."
    },
    {
      "phase": "Investigation",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "Good math—Product 1 earns $8.00/unit (47% margin) and Product 2 earns $7.40/unit (53% margin), while Product 3 yields just $2.40/unit (30% margin) on 50k units. Moreover, heavy shipping, storage, and distributor markups out of South America erode net margins overseas.",
      "causes": [
        "Product 3 generates only $2.40/unit (30% gross margin) on low volume (50k units).",
        "Over-exposure to shrinking US/EU markets (-5%/yr) instead of growing APAC markets (India +10%, China +15%).",
        "Long-haul export logistics and distributor layers compress landed international net margins."
      ]
    },
    {
      "phase": "Root Cause",
      "speaker": "Candidate",
      "kind": "root-cause",
      "detail": "Three root causes explain the weak 5% share and thin margins: chasing shrinking Western markets, exporting low-margin Product 3 across expensive long-haul freight, and relying on traditional wholesalers rather than localized contract manufacturing or direct e-commerce. Beyond refocusing on Products 1 and 2 in India and China, how feasible are regional contract manufacturing and IP licensing?",
      "reasoning": "Testing regional contract manufacturing directly addresses the freight-and-tariff drag on South American exports while supporting APAC scale.",
      "causes": [
        "Centralized South American production inflates freight and import tariffs into Asia and North America.",
        "Lack of digital D2C channels and licensed IP partnerships limits international brand pull."
      ]
    },
    {
      "phase": "Solution",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "Regional contract manufacturing in Asia is feasible for high-volume SKUs, and the client owns strong proprietary character designs. How would you pull these pieces together for the CEO?"
    },
    {
      "phase": "Synthesis",
      "speaker": "Candidate",
      "kind": "synthesis",
      "detail": "I recommend a three-part global reset: reallocate commercial spend toward India (+10%) and China (+15%) led by high-margin Products 1 and 2 while bundling or discontinuing Product 3; shift Asian fulfillment to local contract manufacturers and cross-border e-commerce marketplaces to cut freight; and monetize proprietary characters through B2B IP licensing and subscription toy kits.",
      "reasoning": "Pairing geographic pivot with localized manufacturing and IP licensing expands both international share and net margin simultaneously."
    }
  ],
  "recommendations": [
    "P0: Focus international expansion on high-growth India (+10%) and China (+15%) using high-margin Products 1 (47% GM) and 2 (53% GM), while repricing, bundling, or retiring low-margin Product 3 (30% GM).",
    "P1: Partner with regional contract manufacturers in Asia and launch direct marketplace storefronts (e.g., regional e-commerce platforms) to cut trans-oceanic freight, inventory holding, and distributor margin layers.",
    "P2: Create high-margin recurring revenue streams by licensing proprietary toy IP for apparel/media and launching quarterly age-based educational toy subscription boxes."
  ],
  "metricsAndGuardrails": {
    "northStar": "3-Year NPV / Year-1 SOM Market Share & Payback (Argentinian Toy Maker)",
    "leading": [
      "Breakeven volume vs pilot traction",
      "Partner/channel onboarding velocity"
    ],
    "guardrails": [
      "Capex overrun / working capital lockup",
      "Core brand cannibalization"
    ]
  },
  "synthesisScript": "The Argentinian Toy Maker's 5% international share and lagging margins stem from targeting shrinking Western markets (-5%/yr), shipping low-margin Product 3 ($2.40/unit, 30% GM) over costly long-haul export lanes, and underusing digital channels. Management should pivot international growth toward India (+10%) and China (+15%) anchored on Products 1 and 2 (47–53% GM), adopt Asian contract manufacturing plus direct e-commerce to strip logistics drag, and monetize proprietary IP via licensing and subscription kits while tracking international contribution margin and market share.",
  "interviewerTrap": "Saying 'YES enter!' purely because TAM is huge—forgetting competition, regulatory hurdles, breakeven math, and Build vs Buy vs Partner!",
  "variations": [
    {
      "question": "How would your recommendation change if Argentinian Toy Maker had half the timeline or budget?",
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
  "id": "cm-cons-19-perpetual-motion-invention-commercialization",
  "title": "Perpetual Motion Invention Commercialization",
  "company": "Energy Tech Venture",
  "track": "Consulting",
  "category": "Market Entry",
  "difficulty": 4,
  "isStarter": false,
  "tags": [
    "Market Entry",
    "Consulting"
  ],
  "prompt": "A scientist wants to commercialize a claimed perpetual-motion power device in Europe. Evaluate whether this venture is commercially viable, identify realistic target segments if validated, and estimate potential first-year economics.",
  "clarifyingQuestions": [
    {
      "q": "What are the device's claimed electrical output, physical dimensions, and manufacturing cost?",
      "a": "The prototype claims 50 watts of continuous electrical output, weighs 30 kg, occupies 1 cubic meter, and costs $1,000 to manufacture using readily available materials.",
      "why": "Quantifies power density and capital cost per watt, which immediately determines whether residential or grid applications are even physically plausible."
    },
    {
      "q": "Has the device undergone independent scientific verification, and what future upgrades does the inventor claim?",
      "a": "No independent testing has occurred yet. The inventor claims a future version could double output to 100W while cutting weight to 7.5 kg and volume to 0.25 m³.",
      "why": "Establishes physics verification as a mandatory go/no-go gate and separates speculative roadmap claims from current unit economics."
    },
    {
      "q": "What benchmark electricity price and European household assumptions should we use to test residential payback?",
      "a": "Assume roughly 700 million people in Europe (175 million 4-person households), $1,500 average annual household electricity spend, and an illustrative retail electricity rate of $0.30/kWh.",
      "why": "Allows testing whether top-down European household electricity spend translates into viable bottom-up unit payback for a 50W machine."
    }
  ],
  "frameworkUsed": "Market Attractiveness (TAM/Growth) → Competition & Barriers → Capabilities & Breakeven → Entry Mode",
  "coreEquation": "Go / No-Go = Attractive SOM × Client Right-to-Win × (Breakeven Volume ≤ Achievable Share)",
  "strategyOverview": "Evaluate the Energy Tech Venture with a strict gating sequence: (1) independent physics verification to rule out hidden energy inputs, (2) bottom-up 50W output math (438 kWh/yr = $131.40/yr electricity value vs. $1,000 COGS = >7.6-year simple payback), and (3) rejecting residential grid replacement in favor of niche off-grid remote sensors only if verified.",
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
      "phase": "Scoping",
      "speaker": "Interviewer",
      "kind": "prompt",
      "detail": "An inventor claims to have built a perpetual-motion machine and wants to commercialize it across Europe. How would you assess market viability and realistic first-year earnings?"
    },
    {
      "phase": "Scoping",
      "speaker": "Candidate",
      "kind": "question",
      "detail": "Because perpetual motion violates thermodynamics, scientific validation must be our first gate. Assuming we test it, could you share the current device's power output, weight, volume, manufacturing cost, and any benchmark European electricity assumptions?",
      "reasoning": "Checking physical specifications and unit cost upfront prevents wasting effort sizing a residential energy market the device cannot serve."
    },
    {
      "phase": "Structure",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "The current device outputs 50 watts continuously, weighs 30 kg, takes up 1 cubic meter, and costs $1,000 to build—though the inventor claims a future version could reach 100W at 7.5 kg and 0.25 m³. For context, Europe has ~175 million households spending $1,500/year on electricity at roughly $0.30/kWh. How do you structure your assessment?"
    },
    {
      "phase": "Structure",
      "speaker": "Candidate",
      "kind": "framework",
      "detail": "I'll evaluate three sequential gates: first, independent physics verification ruling out hidden batteries, thermal gradients, or external fields; second, bottom-up unit economics of a 50W generator versus $0.30/kWh grid power; and third, identifying any niche off-grid segment where 50W continuous power actually creates high willingness to pay.",
      "reasoning": "A top-down 2% share of $262.5B European household spend would be meaningless if a 50W box cannot power a home or pay back its cost."
    },
    {
      "phase": "Investigation",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "Good catch avoiding top-down sizing traps. Walk me through the exact annual energy value and simple payback of one 50W unit at $0.30/kWh.",
      "causes": [
        "50W continuous output yields only 438 kWh/year (0.05 kW × 24 × 365), worth $131.40/year at $0.30/kWh.",
        "At $1,000 manufacturing COGS alone, simple payback exceeds 7.6 years before retail margin, installation, or maintenance."
      ]
    },
    {
      "phase": "Root Cause",
      "speaker": "Candidate",
      "kind": "root-cause",
      "detail": "One 50W unit running 24/7 produces 438 kWh/year—worth only $131.40/year at $0.30/kWh. Even ignoring retail markups, distribution, and maintenance, a $1,000 unit cost means a 7.6-year simple payback, while taking up 1 m³ for less power than a single light bulb! Even the claimed 100W upgrade would only generate $263/year. Where could 50W off-grid continuous power actually command a premium?",
      "reasoning": "Calculating $131.40/year proves residential grid replacement is DOA commercially, forcing a pivot to remote off-grid reliability if the physics holds.",
      "causes": [
        "Extreme physical bulk (1 m³ / 30 kg for 50W) makes consumer and residential deployment impractical.",
        "Unverified thermodynamic claims expose investors to severe fraud, IP, and regulatory liability."
      ]
    },
    {
      "phase": "Solution",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "Remote telecom relays, weather stations, maritime buoys, and defense sensors often pay far more than $0.30/kWh for diesel or battery swaps. What is your go/no-go recommendation and Year-1 plan?"
    },
    {
      "phase": "Synthesis",
      "speaker": "Candidate",
      "kind": "synthesis",
      "detail": "Recommend a strict 'Conditional Hold / No-Go on Consumer Launch.' First, fund an accredited third-party lab audit to verify true net energy output; only if validated, abandon residential Europe and run a paid B2B pilot for remote off-grid telemetry or telecom relays where replacing battery-swap maintenance justifies a >$1,500–$2,000 unit price, targeting realistic Year-1 validation revenue rather than mass scale.",
      "reasoning": "Gating capital on independent lab proof prevents reputational and financial loss while preserving optionality in high-WTP remote B2B niches."
    }
  ],
  "recommendations": [
    "P0: Enforce a hard funding gate requiring independent accredited lab testing (calorimetry, EM shielding, and 30-day closed-box metering) before committing commercial capital.",
    "P1: Abandon European residential electricity sizing ($131.40/yr output vs. $1,000 COGS gives >7.6-year payback) and pivot go-to-market solely to remote off-grid industrial telemetry, telecom towers, or maritime sensors if validated.",
    "P2: Structure Year 1 around 50–100 paid B2B pilot units priced for avoided diesel/battery maintenance rather than mass manufacturing, gating volume scale-up on achieving the 100W / 0.25 m³ engineering milestone."
  ],
  "metricsAndGuardrails": {
    "northStar": "3-Year NPV / Year-1 SOM Market Share & Payback (Energy Tech Venture)",
    "leading": [
      "Breakeven volume vs pilot traction",
      "Partner/channel onboarding velocity"
    ],
    "guardrails": [
      "Capex overrun / working capital lockup",
      "Core brand cannibalization"
    ]
  },
  "synthesisScript": "The Energy Tech Venture should NOT pursue mass European residential commercialization: even assuming the device works, 50W continuous output yields only 438 kWh ($131.40/year at $0.30/kWh) against a $1,000 build cost (>7.6-year simple payback) and bulky 1 m³ footprint. Investors must require accredited third-party physics verification as a strict P0 gate, and only if validated, pilot the technology in high-value off-grid industrial telemetry or remote telecom niches where avoided battery-replacement costs justify unit pricing.",
  "interviewerTrap": "Saying 'YES enter!' purely because TAM is huge—forgetting competition, regulatory hurdles, breakeven math, and Build vs Buy vs Partner!",
  "variations": [
    {
      "question": "How would your recommendation change if Energy Tech Venture had half the timeline or budget?",
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
  "id": "cm-cons-pricing-hair-oil",
  "title": "Hair Oil Pricing Strategy",
  "company": "Hair Oil Brand",
  "track": "Consulting",
  "category": "Pricing",
  "difficulty": 1,
  "isStarter": true,
  "tags": [
    "Pricing",
    "FMCG",
    "Cost-Plus vs Value"
  ],
  "prompt": "Your client is the market leader in hair oil in India, operating one flagship brand with two standard SKUs through an offline distributor-retailer network. Over the past three years, salesforce productivity has stagnated. Diagnose the root causes and recommend pricing and pack-mix fixes.",
  "clarifyingQuestions": [
    {
      "q": "How does the client define salesforce productivity, and which component—revenue or total salesforce salary—has shifted?",
      "a": "Productivity equals Total Revenue divided by Total Salesforce Salary. Headcount stayed flat, while both revenue and average rep salary grew at roughly the same steady rate (~6% over the period).",
      "why": "Clarifies that flat productivity stems from revenue failing to outpace wage inflation rather than over-hiring."
    },
    {
      "q": "How do our price increases and unit volume growth compare against the broader Indian hair oil industry?",
      "a": "Our price and unit volume each grew 3% (6% combined), whereas the industry grew 5% on price and 5% on units (10% combined).",
      "why": "Pins down the exact 4-percentage-point revenue growth gap versus competitors across both price realization and unit volume."
    },
    {
      "q": "What are the two standard SKUs, and how did their pricing and sales mix evolve?",
      "a": "The SKUs are 250 ml and 500 ml packs; prices rose on both, with a steeper increase on the 250 ml SKU, shifting sales toward the 500 ml pack.",
      "why": "Reveals whether skewed SKU price hikes triggered pack-size trade-up and lowered purchase frequency in neighborhood retail."
    }
  ],
  "frameworkUsed": "3Cs of Pricing (Cost Floor, Competitor Anchor, Brand Value Ceiling) + Pack Architecture",
  "coreEquation": "Recommended Price = Max(COGS + Target Trade Margin, Competitor Price ± Differentiation Premium)",
  "strategyOverview": "Diagnose the Hair Oil Brand's flat salesforce productivity (Revenue ÷ Salesforce Salary) by showing how revenue growth (+6%) lagged the industry (+10%) while merely matching salary inflation: raising 250 ml prices faster than 500 ml pushed buyers into larger packs, reducing purchase frequency and hurting small-kirana shelf rotation.",
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
      "phase": "Scoping",
      "speaker": "Interviewer",
      "kind": "prompt",
      "detail": "Our client is India's market-leading hair oil brand, selling two standard SKUs solely through offline distributors and retailers. For the past three years, salesforce productivity has stagnated. How would you diagnose why?"
    },
    {
      "phase": "Scoping",
      "speaker": "Candidate",
      "kind": "question",
      "detail": "First, how is salesforce productivity defined, and has headcount, rep salary, or revenue been changing? Also, could you share how our pricing and unit volumes compare with industry growth?",
      "reasoning": "Breaking a productivity ratio into its numerator (revenue) and denominator (headcount × average salary) immediately shows which side is underperforming."
    },
    {
      "phase": "Structure",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "Productivity is Total Revenue divided by Total Salesforce Salary. Rep headcount has stayed constant while average salaries rose steadily with inflation and promotions; meanwhile, our revenue grew roughly in line with salaries—3% from price and 3% from units—versus 10% industry growth (5% price, 5% units). How would you investigate this 4-point revenue lag?"
    },
    {
      "phase": "Structure",
      "speaker": "Candidate",
      "kind": "framework",
      "detail": "Since headcount is fixed and wage inflation is normal, productivity stalled because revenue grew 6% instead of the industry's 10%. I'll break revenue into SKU-level weighted average price realization and unit volume drivers (Customers × Purchase Frequency × Quantity per Purchase) across retail channels.",
      "reasoning": "Decomposing both SKU mix and purchase frequency tests whether a pricing imbalance between the two packs is cannibalizing repeat trips."
    },
    {
      "phase": "Investigation",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "Good approach. Our two SKUs are 250 ml and 500 ml bottles. We raised prices on both, but hiked the 250 ml SKU more steeply than the 500 ml SKU, which drove more consumers to buy the 500 ml pack.",
      "causes": [
        "Steeper price hike on the 250 ml SKU pushed shoppers toward the lower-margin/ml 500 ml pack.",
        "Weighted average price realization lagged the 5% industry benchmark due to pack-mix shift.",
        "Shift to 500 ml bottles stretched household consumption cycles, lowering purchase frequency."
      ]
    },
    {
      "phase": "Root Cause",
      "speaker": "Candidate",
      "kind": "root-cause",
      "detail": "That explains both halves of the lag! Shifting buyers into 500 ml packs lowers our blended price growth per ml and stretches out repurchase intervals, capping unit growth at 3%. Furthermore, most hair oil sells through small neighborhood kirana shops where shoppers prefer low cash-outlay packs and retailers dislike stocking slow-turning large bottles. Are we missing smaller trial or convenience SKUs in kiranas?",
      "reasoning": "Linking 500 ml pack velocity to kirana working-capital and shopper outlay constraints explains why our reps struggle to hit industry growth.",
      "causes": [
        "Lack of smaller 50 ml/100 ml or sachet price points limits impulse conversion and kirana shelf penetration.",
        "Slow-turning 500 ml inventory ties up small-retailer working capital and rep visit productivity."
      ]
    },
    {
      "phase": "Solution",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "Exactly right—smaller neighborhood stores under-stock our 500 ml SKU, and competitors are winning new shoppers with smaller packs. What pricing and pack-architecture recommendations would you propose?"
    },
    {
      "phase": "Synthesis",
      "speaker": "Candidate",
      "kind": "synthesis",
      "detail": "To lift salesforce productivity above wage inflation, rebalance the price-pack ladder: narrow the per-ml gap between 250 ml and 500 ml packs to restore blended price realization, introduce low-outlay 100 ml bottles and ₹10–₹20 trial sachets tailored for small kirana stores, and align rep incentives to active outlet reach and SKU mix rather than raw tonnage.",
      "reasoning": "Fixing pack architecture and rep KPIs turns existing store visits into higher revenue per rep without expanding headcount."
    }
  ],
  "recommendations": [
    "P0: Rebalance SKU pricing by adjusting the 500 ml pack price upward relative to 250 ml so per-ml discounting no longer dilutes weighted price realization or stretches repurchase frequency.",
    "P1: Launch low-outlay 100 ml bottles and ₹10/₹20 trial sachets specifically for small neighborhood kirana stores to accelerate inventory turns and capture new budget buyers.",
    "P2: Restructure salesforce incentives away from pure volume toward high-margin SKU mix, active kirana outlet coverage, and revenue-per-rep growth above salary inflation."
  ],
  "metricsAndGuardrails": {
    "northStar": "Net Contribution Margin & Paid ARPU Growth (Hair Oil Brand)",
    "leading": [
      "Pricing page → checkout conversion %",
      "Tier upgrade / annual plan share"
    ],
    "guardrails": [
      "Churn / price-complaint rate",
      "Competitive win/loss rate"
    ]
  },
  "synthesisScript": "The Hair Oil Brand's salesforce productivity stalled because revenue growth (+6%) lagged the industry (+10%) while merely matching rep salary inflation. Raising 250 ml prices faster than 500 ml shifted shoppers into larger packs—diluting blended price realization, slowing repeat purchase frequency, and hurting small-kirana inventory turns. Rebalance the 250 ml/500 ml price ladder, introduce 100 ml and sachet packs for kirana velocity, and tie rep incentives to revenue-per-rep and SKU mix while monitoring channel margin and churn.",
  "interviewerTrap": "Forgetting distributor and kirana retailer trade margins when setting consumer MRP!",
  "variations": [
    {
      "question": "How would your recommendation change if Hair Oil Brand had half the timeline or budget?",
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
  "id": "cm-cons-21-jio-pricing-model",
  "title": "Jio Pricing Model",
  "company": "Jio",
  "track": "Consulting",
  "category": "Pricing",
  "difficulty": 2,
  "isStarter": false,
  "tags": [
    "HiLabs",
    "Pricing",
    "Consulting"
  ],
  "prompt": "Jio plans to transition its currently free digital entertainment platform, JioCinema, to a paid pricing model in India. Design a pricing strategy and tier architecture that monetizes the user base while preserving mass-market adoption.",
  "clarifyingQuestions": [
    {
      "q": "Should we focus on a specific Jio digital property, and is the platform completely free today?",
      "a": "Focus on JioCinema, which is currently 100% free across all users and content libraries.",
      "why": "Defines the exact product scope and confirms we are designing a zero-to-paid transition rather than repricing existing tiers."
    },
    {
      "q": "What are the prevailing monthly price points of major OTT competitors in India?",
      "a": "Disney+ Hotstar offers an entry tier around ₹99/month, Netflix starts at ₹199/month, and Amazon Prime is priced at ₹299/month.",
      "why": "Sets external competitive price anchors across mass-market sports/regional and premium international OTT offerings."
    }
  ],
  "frameworkUsed": "Business Model Check → 3Cs of Pricing (Cost Floor | Competitor Anchor | Value WTP) → Tiering & Test",
  "coreEquation": "Optimal Price ∈ [Unit Cost Floor, Perceived Value WTP Ceiling] Tuned to Elasticity",
  "strategyOverview": "Design JioCinema's monetization model using Value-Based and Competitor-Anchored Pricing (ruling out cost-plus for low-marginal-cost streaming), anchoring an aggressive ₹59/month base tier below Disney+ Hotstar (₹99), Netflix (₹199), and Prime (₹299), paired with ad-supported free access and modular Sports/IPL, Blockbuster, and Cultural Events add-ons.",
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
      "phase": "Scoping",
      "speaker": "Interviewer",
      "kind": "prompt",
      "detail": "Jio wants to introduce a paid pricing model for JioCinema, which has been completely free in India until now. How would you build its pricing strategy?"
    },
    {
      "phase": "Scoping",
      "speaker": "Candidate",
      "kind": "question",
      "detail": "To clarify scope, are we pricing strictly JioCinema, is the platform entirely ad-supported and free today, and what strategic goal matters most—maximizing paid subscriber conversion or near-term ARPU?",
      "reasoning": "Confirming the trade-off between subscriber scale and ARPU sets the right pricing anchor for a historically free mass-market app."
    },
    {
      "phase": "Structure",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "Yes, focus on JioCinema, which is completely free today, and Jio aims to monetize without sacrificing its mass-market reach. Competitors price at ₹99/month for Disney+ Hotstar, ₹199/month for Netflix, and ₹299/month for Amazon Prime. Which pricing methodology and structure would you use?"
    },
    {
      "phase": "Structure",
      "speaker": "Candidate",
      "kind": "framework",
      "detail": "Because OTT streaming has high fixed content costs and near-zero marginal cost per stream, cost-plus pricing isn't useful. Instead, I'll combine competitor-based anchoring with value-based segmentation across JioCinema's content pillars—mass entertainment, live sports like IPL, and regional/cultural content—to design a tiered freemium-to-paid ladder.",
      "reasoning": "Digital media pricing must reflect willingness to pay across distinct content segments rather than amortizing fixed rights blindly."
    },
    {
      "phase": "Investigation",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "Good call dropping cost-plus. Given Hotstar at ₹99, Netflix at ₹199, and Prime at ₹299, how does JioCinema's content library and audience shape your base subscription price?",
      "causes": [
        "JioCinema attracts a highly price-sensitive mass Indian audience accustomed to free access.",
        "Its international library is smaller than Netflix or Prime, limiting premium pricing ceiling.",
        "Live IPL sports and exclusive regional/cultural content create strong event-driven willingness to pay."
      ]
    },
    {
      "phase": "Root Cause",
      "speaker": "Candidate",
      "kind": "root-cause",
      "detail": "A sudden hard paywall would trigger massive churn because users expect free access and Jio's international catalog trails Netflix and Prime. Anchoring below Hotstar's ₹99 entry plan, a ₹59/month base subscription (ad-free or HD) captures price-sensitive converts—while keeping an ad-supported free tier preserves top-of-funnel ad monetization. How should we monetize high-WTP spikes like IPL and blockbusters?",
      "reasoning": "Separating a low-friction ₹59 base tier from modular event passes avoids overcharging casual viewers while capturing surplus from sports and movie fans.",
      "causes": [
        "Single-tier pricing would either under-monetize sports/movie fans or price out budget regional viewers.",
        "Unbundled modular packs capture event-driven WTP spikes without raising the base barrier."
      ]
    },
    {
      "phase": "Solution",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "Modular add-ons fit well with Jio's ecosystem. What exact tier architecture and rollout guardrails would you recommend?"
    },
    {
      "phase": "Synthesis",
      "speaker": "Candidate",
      "kind": "synthesis",
      "detail": "Launch a hybrid freemium-plus-modular model: keep a free ad-supported tier for mass reach, price the ad-free base tier at ₹59/month, and layer three targeted packs—Cultural/Regional Events at ₹79, Blockbuster Cinema at ₹99–₹119, and seasonal Sports/IPL passes—bundled into Jio telecom recharge plans to minimize churn.",
      "reasoning": "Telecom-plan bundling lowers payment friction across India's mass market while tiered add-ons expand blended ARPU."
    }
  ],
  "recommendations": [
    "P0: Retain a free ad-supported entry tier to protect ad inventory, and launch a ₹59/month base subscription (undercutting Hotstar's ₹99 entry tier) for ad-free HD viewing.",
    "P1: Introduce modular add-on packs—Cultural/Regional Events (₹79/month), Blockbuster Movies (₹99–₹119/month), and seasonal Sports/IPL passes—to capture higher willingness to pay without raising the base hurdle.",
    "P2: Bundle discounted JioCinema tiers into high-volume Jio prepaid and fiber recharge plans via A/B price-elasticity tests, guarding against free-to-paid churn and ad-revenue cannibalization."
  ],
  "metricsAndGuardrails": {
    "northStar": "Net Contribution Margin & Paid ARPU Growth (Jio)",
    "leading": [
      "Pricing page → checkout conversion %",
      "Tier upgrade / annual plan share"
    ],
    "guardrails": [
      "Churn / price-complaint rate",
      "Competitive win/loss rate"
    ]
  },
  "synthesisScript": "To monetize JioCinema without losing its mass-market Indian user base, Jio should deploy a competitor-anchored, value-segmented freemium model rather than cost-plus pricing. Keep a free ad-supported funnel, introduce an aggressive ₹59/month base tier below Disney+ Hotstar (₹99) and Netflix (₹199), and monetize high-WTP segments via modular Cultural Events (₹79), Blockbuster (₹99–₹119), and Sports/IPL passes—accelerated through Jio telecom bundles while tracking paid conversion, blended ARPU, and churn.",
  "interviewerTrap": "Using only Cost-Plus markup and ignoring Value-Based WTP, elasticity, cannibalization, or two-sided marketplace effects!",
  "variations": [
    {
      "question": "How would your recommendation change if Jio had half the timeline or budget?",
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
  "id": "cm-cons-22-bank-envelope-pricing",
  "title": "Bank Envelope Pricing",
  "company": "CustomLope",
  "track": "Consulting",
  "category": "Pricing",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "Pricing",
    "Consulting"
  ],
  "prompt": "Your client, CustomLope, is the US market leader in secure bank envelopes used for cash deposits and high-value transactions. Next year, a new digital technology will shrink total industry unit demand by 25%. CustomLope wants to maintain its current $15 million profit level in the short term without investing in the new technology. How can they achieve this?",
  "clarifyingQuestions": [
    {
      "q": "What were CustomLope's unit sales, price, and detailed value-chain costs last year?",
      "a": "CustomLope sold 50 million units of a single envelope SKU at $1.00/unit ($50M revenue). Costs totaled $35M: R&D $1M, Production $18M, Labor $11M, Marketing $2M, and Operations $3M, yielding $15M profit ($0.70/unit blended cost).",
      "why": "Establishes the exact $15M profit baseline and $0.70/unit cost floor needed to model price-volume trade-offs under a 25% market contraction."
    },
    {
      "q": "Is there room to cut costs further or expand production capacity?",
      "a": "Costs are already fully optimized, but CustomLope has idle capacity to produce at least 100 million units per year at similar or lower unit costs.",
      "why": "Eliminates cost-cutting as a lever and confirms spare manufacturing capacity can absorb major market-share gains."
    },
    {
      "q": "How is the rest of the market structured, and what are competitors' unit costs and prices?",
      "a": "CustomLope holds 50% share (50M of 100M total units), while five rivals hold 10% each. Competitors also price at $1.00/unit but produce at $0.90/unit, so they cannot cut prices below $0.90 without losing money.",
      "why": "Reveals CustomLope's $0.20/unit cost advantage ($0.70 vs. $0.90) that unlocks a share-capture pricing strategy."
    }
  ],
  "frameworkUsed": "Business Model Check → 3Cs of Pricing (Cost Floor | Competitor Anchor | Value WTP) → Tiering & Test",
  "coreEquation": "Optimal Price ∈ [Unit Cost Floor, Perceived Value WTP Ceiling] Tuned to Elasticity",
  "strategyOverview": "Protect CustomLope's $15M short-term profit during a 25% market contraction (100M → 75M units) by leveraging its $0.70/unit cost advantage and 100M spare capacity to price around $0.89–$0.92/unit—undercutting five rivals' $0.90/unit cost floor to capture displaced share via multi-year bank contracts.",
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
      "phase": "Scoping",
      "speaker": "Interviewer",
      "kind": "prompt",
      "detail": "CustomLope leads the US secure bank envelope market. Next year, new digital banking technology will shrink total industry volume by 25%, and CustomLope wants to maintain current short-term profits without investing in the new tech. How would you help them?"
    },
    {
      "phase": "Scoping",
      "speaker": "Candidate",
      "kind": "question",
      "detail": "To establish our baseline, could you share last year's unit volume, selling price, and value-chain costs, along with whether CustomLope can cut costs further or holds spare capacity?",
      "reasoning": "Knowing baseline profit, cost flexibility, and spare capacity tells us whether the gap must be closed via cost reduction, price hikes, or share capture."
    },
    {
      "phase": "Structure",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "Last year CustomLope sold 50 million units of one envelope SKU at $1.00/unit ($50M revenue). Costs totaled $35M—$1M R&D, $18M production, $11M labor, $2M marketing, and $3M operations—leaving $15M profit. Costs are already fully optimized, though CustomLope has idle capacity to produce up to 100 million units at or below $0.70/unit. How do you frame the problem?"
    },
    {
      "phase": "Structure",
      "speaker": "Candidate",
      "kind": "framework",
      "detail": "With costs already optimized and total market demand shrinking 25%, holding our 50% share at $1.00 would cut volume to 37.5 million units and drop profit to ~$11.25 million—a $3.75 million shortfall. Since we have 100 million units of capacity, the only lever left is capturing market share from competitors. What do rivals' market shares, prices, and unit costs look like?",
      "reasoning": "Quantifying the $3.75M profit shortfall under status-quo share proves that aggressive share capture is mandatory and guides us straight to competitor cost floors."
    },
    {
      "phase": "Investigation",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "Five competitors hold 10% market share each (50 million units combined last year). They match our $1.00/unit price, but their unit cost is $0.90/unit—so they cannot cut price below $0.90 without taking losses.",
      "causes": [
        "Industry volume drops from 100M to 75M units, cutting status-quo CustomLope profit from $15M to $11.25M.",
        "CustomLope's $0.70/unit cost ($0.58/unit variable + $6M fixed) sits $0.20/unit below rivals' $0.90/unit floor.",
        "Idle capacity of 50M additional units allows CustomLope to serve nearly the entire shrunk market."
      ]
    },
    {
      "phase": "Root Cause",
      "speaker": "Candidate",
      "kind": "root-cause",
      "detail": "That $0.20/unit scale advantage is decisive. Notice too that $6 million of our $35 million cost (R&D, marketing, operations) is fixed while production and labor run ~$0.58/unit variable. If CustomLope prices just below rivals' $0.90 cost floor—say $0.89/unit—rivals lose money matching us; capturing 68 million of the 75 million industry units at $0.89 yields $60.5M revenue minus ~$45.4M total cost ($6M fixed + 68M × $0.58), preserving the full $15M profit!",
      "reasoning": "Separating fixed overhead from $0.58/unit variable cost shows CustomLope can hit $15M profit at ~90% share rather than needing 100% of the shrunk market.",
      "causes": [
        "Rivals face an unsustainable loss below $0.90/unit, forcing exit or bank contract churn.",
        "Fixed-cost leverage at 65–70M units keeps blended unit cost below $0.68/unit."
      ]
    },
    {
      "phase": "Solution",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "Excellent fixed-versus-variable math. How should CustomLope execute this price move with large US banks without triggering a messy spot-price war?"
    },
    {
      "phase": "Synthesis",
      "speaker": "Candidate",
      "kind": "synthesis",
      "detail": "CustomLope should proactively offer multi-year volume-rebate contracts to major US banks priced at $0.89–$0.91/unit—just at or below rivals' $0.90 cost floor—to lock in 65–70+ million units of the shrinking 75 million market. Leveraging spare capacity and fixed-cost scale preserves the $15 million short-term profit target while buying time to plan an eventual digital exit.",
      "reasoning": "Structured multi-year bank tenders lock in volume share cleanly before rivals can exit or bundle defensively."
    }
  ],
  "recommendations": [
    "P0: Proactively bid on major US bank RFP renewals with 2-to-3-year exclusive volume contracts priced at $0.89–$0.91/unit, undercutting competitors' $0.90/unit cost floor to capture 65–70M+ units of the 75M shrunk market.",
    "P1: Activate idle production lines smoothly across existing shifts to capture fixed-cost leverage (~$0.58/unit variable cost + $6M fixed overhead), keeping blended unit cost at or below $0.68/unit.",
    "P2: Monitor bank switching speed and competitive exit timing quarterly, using the protected $15M cash flow to fund an orderly harvest or future digital transition rather than reactive discounting."
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
  "synthesisScript": "CustomLope can protect its $15M short-term profit despite a 25% industry contraction (100M to 75M units) by using its $0.20/unit cost advantage ($0.70 blended vs. rivals' $0.90 floor) and 100M-unit spare capacity to win market share. Because costs are already optimized and holding 50% share drops profit to $11.25M, CustomLope should lock in multi-year bank contracts at $0.89–$0.91/unit—capturing 65–70M+ units and preserving $15M profit via fixed-cost scale while monitoring bank contract retention and contribution margin.",
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
  "id": "cm-cons-23-ev-pricing-strategy",
  "title": "EV Pricing Strategy",
  "company": "EV Manufacturer",
  "track": "Consulting",
  "category": "Pricing",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "Mastercard",
    "Pricing",
    "Consulting"
  ],
  "prompt": "Your client is an established automobile manufacturer in India planning to enter the electric vehicle segment with a new electric SUV next year. They have asked you to determine the optimal launch price for this vehicle.",
  "clarifyingQuestions": [
    {
      "q": "Which vehicle segment, target customer, and geography are we launching in?",
      "a": "The client is launching a compact electric SUV nationwide in India aimed at urban and semi-urban middle-income commuters.",
      "why": "Defines the exact addressable segment and willingness-to-pay ceiling before benchmarking competitors."
    },
    {
      "q": "How do the EV SUV's specifications—range, charging speed, safety, and warranty—compare with existing rivals, and what is our unit cost?",
      "a": "Specs and warranty are at parity with mainstream rivals, with a fully loaded unit manufacturing and battery cost floor of ₹11.5 lakh and a minimum 15% gross margin requirement.",
      "why": "Establishes the ₹13.5 lakh cost-plus floor and confirms whether the product commands a differentiation premium or parity pricing."
    },
    {
      "q": "Who are the main EV competitors in India and how are their models priced today?",
      "a": "Tata prices entry hatchbacks like the Tiago EV at ₹8 lakh, sedans at ₹12–13 lakh, and compact SUVs at ₹14–18 lakh; Mahindra EV SUVs sit at ₹19–20 lakh, and MG's premium EV SUV sits near ₹25 lakh.",
      "why": "Maps competitive price anchors across Indian EV tiers to identify the sweet-spot white space."
    }
  ],
  "frameworkUsed": "Business Model Check → 3Cs of Pricing (Cost Floor | Competitor Anchor | Value WTP) → Tiering & Test",
  "coreEquation": "Optimal Price ∈ [Unit Cost Floor, Perceived Value WTP Ceiling] Tuned to Elasticity",
  "strategyOverview": "Approach EV Pricing Strategy (EV Manufacturer) using the 3Cs of Pricing: establish the unit cost floor (Cost), benchmark Indian EV SUV competitors from Tata to MG (Competitors), quantify total-cost-of-ownership savings and willingness-to-pay versus ICE SUVs (Customer Value), and design tiered launch pricing with clear margin guardrails.",
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
      "phase": "Scoping",
      "speaker": "Interviewer",
      "kind": "prompt",
      "detail": "Your client is an established automobile manufacturer in India planning to enter the electric vehicle segment with a new electric SUV next year. How would you determine the optimal price for this car?"
    },
    {
      "phase": "Scoping",
      "speaker": "Candidate",
      "kind": "question",
      "detail": "Before building a pricing model, I would like to clarify the target segment, launch geography, and product specs. Is this a mass-market hatchback or an SUV, and how do range, charging speed, and warranty compare to existing Indian EVs?",
      "reasoning": "Pricing varies sharply by vehicle tier and feature parity, so scoping segment and differentiation prevents arbitrary price anchoring."
    },
    {
      "phase": "Structure",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "They are targeting a nationwide launch in India with a compact electric SUV for middle-income commuters. Specs and warranty are reliable and at parity with mainstream rivals, while unit cost including the battery pack is ₹11.5 lakh with a 15% minimum gross margin hurdle."
    },
    {
      "phase": "Structure",
      "speaker": "Candidate",
      "kind": "framework",
      "detail": "Got it—that sets a hard price floor at roughly ₹13.5 lakh ex-showroom. I will structure the pricing decision around the 3Cs: cost-based floor, competitor price anchors across Indian EV tiers, and customer value-based willingness-to-pay driven by fuel savings over comparable ICE SUVs. Do we have competitor pricing benchmarks?",
      "reasoning": "Triangulating Cost, Competitors, and Customer Value ensures the price is simultaneously profitable, market-realistic, and aligned with buyer economics."
    },
    {
      "phase": "Investigation",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "Yes. Tata covers the entry end with Tiago hatchbacks at ₹8 lakh, EV sedans at ₹12–13 lakh, and compact SUVs between ₹14 lakh and ₹18 lakh. Mahindra's electric SUVs sit at ₹19–20 lakh, and MG's larger EV SUV is priced around ₹25 lakh."
    },
    {
      "phase": "Root Cause",
      "speaker": "Candidate",
      "kind": "hypothesis",
      "detail": "Looking at the landscape, our parity compact SUV should not compete below ₹14 lakh where hatchbacks and sedans sit, nor can it justify MG's ₹25 lakh premium without breakthrough range or luxury tech. On the value side, an urban commuter driving 1,200 km per month saves roughly ₹1.2 lakh annually on fuel and maintenance versus a ₹13 lakh ICE SUV, implying a 2.5-to-3-year payback at a ₹3–4 lakh EV premium.",
      "reasoning": "Translating running-cost savings into a concrete payback period quantifies the true willingness-to-pay ceiling above equivalent ICE SUVs.",
      "causes": [
        "Lack of proprietary tech premium caps WTP below MG's ₹25L tier",
        "Strong ₹1.2L/year TCO fuel savings supports a ₹3–4L premium over ₹13L ICE SUVs",
        "White space exists between ₹16.5L and ₹19L below Mahindra's ₹19–20L anchor"
      ]
    },
    {
      "phase": "Solution",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "That payback math makes sense. Given Mahindra sits at ₹19–20 lakh and Tata's top compact SUV variants reach ₹18 lakh, how would you structure our launch variants and protect margins if battery costs fluctuate?"
    },
    {
      "phase": "Synthesis",
      "speaker": "Candidate",
      "kind": "synthesis",
      "detail": "I recommend launching a two-tier architecture: a base variant at ₹16.9 lakh ex-showroom to undercut Mahindra and capture mass-affluent commuters, and a long-range connected variant at ₹18.9 lakh to monetize high-WTP buyers at a 25%+ gross margin. We should pair this with an 8-year battery warranty, bundled home-charger financing, and local battery sourcing contracts to lock in unit costs.",
      "reasoning": "Tiered pricing captures both price-sensitive upgraders and feature-driven buyers while maintaining a comfortable buffer above the ₹13.5 lakh floor.",
      "causes": [
        "Two-tier SKU ladder captures diverse WTP without cannibalizing core margin",
        "Bundled financing and warranty reduce EV range and resale anxiety"
      ]
    }
  ],
  "recommendations": [
    "P0: Launch a two-tier pricing ladder—₹16.9 lakh ex-showroom for the standard-range SUV (undercutting Mahindra's ₹19–20 lakh tier) and ₹18.9 lakh for the long-range connected trim.",
    "P1: Bundle an 8-year battery warranty, home wall-box installation, and TCO-calculator marketing highlighting the ~₹1.2 lakh annual fuel savings for urban commuters.",
    "P2: Lock in multi-year cell supply hedges and track reservation conversion rates alongside gross margin per vehicle as guardrails against battery price volatility."
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
  "synthesisScript": "For the EV Manufacturer's Indian compact electric SUV launch, I recommend a two-tier price architecture starting at ₹16.9 lakh for the base variant and ₹18.9 lakh for the long-range trim. Because the vehicle offers feature parity without luxury differentiation, anchoring just below Mahindra's ₹19–20 lakh tier captures strong fuel-savings willingness-to-pay (~₹1.2 lakh/year) while delivering a healthy margin well above the ₹13.5 lakh cost floor.",
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
  "id": "cm-cons-24-fast-food-qsr-menu-pricing",
  "title": "Fast Food QSR Menu Pricing",
  "company": "Global QSR Chain",
  "track": "Consulting",
  "category": "Pricing",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "Pricing",
    "Consulting"
  ],
  "prompt": "Your client is a global fast-food QSR chain facing flat US guest counts and declining store profitability. Famous for its $1 value menu, the company wants you to evaluate whether menu pricing is driving the profit drop and how to restore margins without alienating traffic.",
  "clarifyingQuestions": [
    {
      "q": "Do we have SKU-level menu prices, unit costs, and contribution margins across Value, Core, and Premium tiers?",
      "a": "Yes. Value items ($1.00 cheeseburger and 4-piece nuggets) cost $0.75 ($0.25 margin); Core items ($3.00 bacon cheeseburger, $3.50 10-piece nuggets) cost $1.00–$1.25; Premium items ($5.00 double bacon cheeseburger, $5.50 20-piece nuggets) cost $1.50; medium fries and drinks are $1.00 each ($0.25 cost); and the Core combo meal is $5.00 ($1.50 cost).",
      "why": "Exposes exact dollar-margin gaps and bundle-pricing anomalies across menu tiers."
    },
    {
      "q": "What is the current unit sales mix across Value, Core, and Premium items?",
      "a": "Value SKUs sell 2 to 3 times more units than Core items, while Premium represents an even smaller share of volume.",
      "why": "Tests whether margin erosion stems from cost inflation or an adverse mix shift toward low-dollar-margin value items."
    },
    {
      "q": "How price-elastic are guests on anchor Value SKUs like the $1.00 cheeseburger?",
      "a": "Pilot elasticity data shows raising the cheeseburger from $1.00 to $1.25 reduces unit volume by roughly 10%, while doubling unit dollar margin from $0.25 to $0.50.",
      "why": "Quantifies the exact traffic-versus-margin trade-off before recommending price increases."
    }
  ],
  "frameworkUsed": "Business Model Check → 3Cs of Pricing (Cost Floor | Competitor Anchor | Value WTP) → Tiering & Test",
  "coreEquation": "Optimal Price ∈ [Unit Cost Floor, Perceived Value WTP Ceiling] Tuned to Elasticity",
  "strategyOverview": "Approach Fast Food QSR Menu Pricing (Global QSR Chain) using menu-tier economics: audit SKU prices, unit costs, and bundle discounts across Value, Core, and Premium tiers, diagnose mix cannibalization and elasticity, and deploy targeted price increases plus trade-up combo architecture in pilot markets.",
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
      "phase": "Scoping",
      "speaker": "Interviewer",
      "kind": "prompt",
      "detail": "Your client is a global fast-food chain whose US guest counts are flat and profitability is declining. Known heavily for $1 value products, they want to know if pricing is the root issue and how to fix margins without losing guests."
    },
    {
      "phase": "Scoping",
      "speaker": "Candidate",
      "kind": "question",
      "detail": "To isolate whether this is a unit-margin problem or a mix problem, I would like to examine SKU-level pricing, food costs, and sales mix across Value, Core, and Premium tiers. Do we have menu economics data available?",
      "reasoning": "Flat guest counts paired with falling profits strongly point toward check-size compression or unfavorable tier mix rather than pure traffic loss."
    },
    {
      "phase": "Structure",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "Yes. Value cheeseburgers and 4-piece nuggets sell for $1.00 at a $0.75 cost. Core bacon cheeseburgers are $3.00 ($1.00 cost) and 10-piece nuggets are $3.50 ($1.25 cost). Premium double bacon burgers are $5.00 ($1.50 cost), medium fries and soft drinks are $1.00 each ($0.25 cost), and a Core combo meal—Core entrée plus medium fries and drink—is $5.00 ($1.50 cost)."
    },
    {
      "phase": "Structure",
      "speaker": "Candidate",
      "kind": "framework",
      "detail": "Three structural flaws jump out immediately. First, Value items earn only $0.25 per unit (25% margin) versus $2.00 to $3.50 on Core and Premium entrées. Second, the Core combo at $5.00 equals the exact à la carte sum ($3.00 + $1.00 + $1.00), giving customers zero discount incentive to bundle. Third, the jump from a $1.00 burger to a $3.00 Core burger is 3x, encouraging guests to trade down by ordering two $1.00 items instead. What is our current unit mix?",
      "reasoning": "Comparing à la carte totals against combo prices reveals whether the menu architecture actively encourages or blocks profitable upsizing."
    },
    {
      "phase": "Investigation",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "Value SKUs sell 2 to 3 times more units than Core, and Premium is smaller still. Also, larger nugget packs actually suffer minor prep and packaging inefficiencies, while elasticity testing shows lifting the cheeseburger to $1.25 cuts volume by only ~10%."
    },
    {
      "phase": "Root Cause",
      "speaker": "Candidate",
      "kind": "root-cause",
      "detail": "That confirms the root cause: profitability is being crushed by an over-concentration in $0.25-margin Value SKUs, compounded by a broken price ladder and non-existent combo savings. Even with a 10% volume dip, moving the cheeseburger from $1.00 to $1.25 doubles its unit dollar margin from $0.25 to $0.50, lifting total cheeseburger profit by 80% while narrowing the psychological gap to Core items.",
      "reasoning": "Evaluating net profit contribution (unit margin × retained volume) proves that modest Value price increases expand dollar profits even with minor volume loss.",
      "causes": [
        "Heavy mix concentration (2–3x Core) in $0.25-margin $1 Value SKUs",
        "Zero bundle discount on the $5.00 Core combo versus à la carte items",
        "Steep 3x price jump from $1.00 Value to $3.00 Core blocks natural trade-up"
      ]
    },
    {
      "phase": "Solution",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "Good catch on the cheeseburger elasticity and combo math. How would you redesign the menu pricing and test it without triggering backlash from loyal value shoppers?"
    },
    {
      "phase": "Synthesis",
      "speaker": "Candidate",
      "kind": "synthesis",
      "detail": "I recommend a controlled regional pilot that raises anchor Value items from $1.00 to $1.25 while keeping a 'Value Plus' entry bridge intact. Simultaneously, we should introduce a $4.49 Core Combo ($0.51 bundle savings off à la carte) and optimize nugget packaging to protect margins on larger packs. We will monitor guest count, tier mix shift, and restaurant-level EBITDA for 8 weeks before rolling out nationally.",
      "reasoning": "Pairing a slight Value price lift with a genuine Core combo discount shifts guests upward rather than pushing them out of the store.",
      "causes": [
        "Repriced $1.25 Value tier restores +80% contribution dollar profit",
        "$4.49 Core Combo discount creates a clear value-driven upgrade path"
      ]
    }
  ],
  "recommendations": [
    "P0: Launch an 8-week regional pilot lifting anchor Value SKUs (cheeseburger, 4-piece nuggets) from $1.00 to $1.25, doubling unit margin from $0.25 to $0.50 with minimal ~10% volume attrition.",
    "P1: Re-architect combo pricing by introducing a $4.49 Core Combo (saving $0.51 versus à la carte) and a mid-tier $2.49 'Value Plus' bridge burger to incentivize trade-ups.",
    "P2: Standardize large-pack nugget packaging to eliminate prep inefficiencies and track guest counts, mix shift, and store contribution margin against control stores before national rollout."
  ],
  "metricsAndGuardrails": {
    "northStar": "Net Contribution Margin & Paid ARPU Growth (Global QSR Chain)",
    "leading": [
      "Pricing page → checkout conversion %",
      "Tier upgrade / annual plan share"
    ],
    "guardrails": [
      "Churn / price-complaint rate",
      "Competitive win/loss rate"
    ]
  },
  "synthesisScript": "For the Global QSR Chain's US profitability decline, the core issue is a broken pricing ladder where 2–3x volume sits in $0.25-margin $1 Value items and the $5.00 Core combo offers zero discount over à la carte ordering. By piloting a $1.25 Value anchor alongside a discounted $4.49 Core Combo and 'Value Plus' upgrade messaging, the chain can boost Value contribution profit by ~80% and shift mix toward higher-margin Core and Premium entrées while closely guarding guest traffic.",
  "interviewerTrap": "Using only Cost-Plus markup and ignoring Value-Based WTP, elasticity, cannibalization, or two-sided marketplace effects!",
  "variations": [
    {
      "question": "How would your recommendation change if Global QSR Chain had half the timeline or budget?",
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
  "id": "cm-cons-25-samsung-mobile-pricing-vs-apple",
  "title": "Samsung Mobile Pricing vs Apple",
  "company": "Samsung",
  "track": "Consulting",
  "category": "Pricing",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "Pricing",
    "Consulting"
  ],
  "prompt": "You are a Product Manager at Samsung tasked with building a pricing model for Samsung's flagship S-series smartphones in India to reduce Apple's premium market dominance.",
  "clarifyingQuestions": [
    {
      "q": "Should we focus strictly on the Indian market and the Galaxy S-series lineup?",
      "a": "Yes—focus on the Indian smartphone market across all currently marketed S-series models, including the S24 FE, S24, and S24 Ultra.",
      "why": "Concentrates the pricing model on India's premium segment where Apple has rapidly gained share."
    },
    {
      "q": "What are Samsung's manufacturing cost baselines and target gross margin expectations per device?",
      "a": "Assuming efficient scale, unit cost floors sit roughly around ₹24–28K for the S24 FE, ₹30–35K for the S24, and ₹55–60K for the S24 Ultra, with a benchmark 60–70% gross margin target.",
      "why": "Establishes the cost-based lower bound so competitive price cuts never breach sustainable unit economics."
    },
    {
      "q": "Which specific iPhone models serve as direct anchors against the S24 FE, S24, and S24 Ultra in India?",
      "a": "The S24 FE competes with the iPhone 15 (~₹70–79K), the S24 competes with the iPhone 15 Plus (~₹80–89K), and the S24 Ultra competes directly against the iPhone 15 Pro (~₹1.30–1.35 lakh).",
      "why": "Defines the exact competitor price tiers required to position Samsung's S-series as superior value."
    }
  ],
  "frameworkUsed": "Business Model Check → 3Cs of Pricing (Cost Floor | Competitor Anchor | Value WTP) → Tiering & Test",
  "coreEquation": "Optimal Price ∈ [Unit Cost Floor, Perceived Value WTP Ceiling] Tuned to Elasticity",
  "strategyOverview": "Approach Samsung Mobile Pricing vs Apple (Samsung) using the 3Cs of Pricing: validate unit cost floors across S24 FE, S24, and S24 Ultra (Cost), benchmark direct iPhone 15/Pro price points and EMI affordability in India (Competitors), monetize Samsung's differentiated camera/AI/battery features while countering Apple's resale and ecosystem lock-in (Value), and deploy promotional financing tiers.",
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
      "phase": "Scoping",
      "speaker": "Interviewer",
      "kind": "prompt",
      "detail": "As a Product Manager at Samsung, you are tasked with designing a pricing model for Samsung's flagship smartphones to challenge Apple's dominance. How would you scope and structure this?"
    },
    {
      "phase": "Scoping",
      "speaker": "Candidate",
      "kind": "question",
      "detail": "Before setting prices, I want to clarify two parameters: are we pricing for India or globally, and should we cover all Samsung lines or specifically the flagship S-series including both new and existing models?",
      "reasoning": "India's EMI-driven premium smartphone market has vastly different price elasticity and competitor tax dynamics than global markets."
    },
    {
      "phase": "Structure",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "Focus on the Indian market for all currently sold Galaxy S-series devices—specifically the S24 FE, S24, and S24 Ultra."
    },
    {
      "phase": "Structure",
      "speaker": "Candidate",
      "kind": "framework",
      "detail": "Understood. I will evaluate pricing across three lenses: cost-based floors to protect unit margins, competitor-based benchmarking against Apple's iPhone 15 lineup, and value-based willingness-to-pay based on Samsung's unique features and Indian buyer financing behavior. Starting with costs, assuming efficient manufacturing and a 60–70% gross margin target, baseline costs sit near ₹24–28K for S24 FE, ₹30–35K for S24, and ₹55–60K for S24 Ultra. Does that align with your expectations?",
      "reasoning": "Establishing cost baselines upfront prevents pricing recommendations from eroding hardware profitability."
    },
    {
      "phase": "Investigation",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "Those cost assumptions are reasonable. Now factor in Apple's strength in India: the iPhone 15 retails near ₹70–79K, the 15 Plus at ₹80–89K, and the 15 Pro at ₹1.30–1.35 lakh, and buyers prize Apple's brand prestige and resale value. How does Samsung's value proposition stack up?"
    },
    {
      "phase": "Root Cause",
      "speaker": "Candidate",
      "kind": "hypothesis",
      "detail": "Samsung leads on functional specs—100x camera zoom for India's booming creator economy, larger battery endurance, and real-time Galaxy AI translation—but loses to Apple on two psychological barriers: perceived luxury status and higher 2-year resale value, alongside steep upfront sticker prices where 70%+ of premium Indian purchases rely on EMIs.",
      "reasoning": "Separating functional superiority from status/resale barriers explains why matching Apple's sticker price alone fails to convert iOS intenders.",
      "causes": [
        "Apple commands stronger brand prestige and 2-year resale value in India",
        "High upfront sticker shock slows upgrades despite EMI availability",
        "Samsung's 100x camera and Galaxy AI USPs are under-monetized in mid-tier S24 FE/S24 positioning"
      ]
    },
    {
      "phase": "Solution",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "Exactly. So what concrete price points and commercial levers would you set for the S24 Ultra, S24, and S24 FE to chip away at Apple's monopoly?"
    },
    {
      "phase": "Synthesis",
      "speaker": "Candidate",
      "kind": "synthesis",
      "detail": "I recommend anchoring the S24 Ultra at ₹1.29 lakh—just below the iPhone 15 Pro—while aggressively undercutting Apple in the high-growth ₹50K–80K funnel by pricing the S24 at ₹74,999 (versus iPhone 15 Plus at ₹85K+) and the S24 FE at ₹49,999 (versus iPhone 15 at ₹75K). To neutralize Apple's resale and ecosystem advantage, we should pair these prices with 24-month zero-cost EMIs, a guaranteed 60% 2-year buyback program, and discounted Galaxy Watch/Buds bundles.",
      "reasoning": "Using the Ultra as a prestige anchor while undercutting Apple at the entry-premium FE/base tiers maximizes volume capture without cheapening the flagship brand.",
      "causes": [
        "Price-undercutting at ₹49,999–₹74,999 captures aspirational iPhone switchers",
        "Guaranteed buyback and 24-month no-cost EMI directly offset Apple's resale edge"
      ]
    }
  ],
  "recommendations": [
    "P0: Set tiered anchor pricing—S24 Ultra at ₹1.29 lakh (parity/slight undercut vs iPhone 15 Pro), S24 at ₹74,999 (undercutting iPhone 15 Plus by ~₹10–15K), and S24 FE at ₹49,999 as the high-volume switcher gateway.",
    "P1: Launch a Samsung Guaranteed Buyback (60% value retention at 24 months) paired with 24-month no-cost EMI plans to neutralize Apple's resale advantage and lower monthly outlay.",
    "P2: Bundle Galaxy Buds/Watch ecosystem discounts and creator-focused camera/Galaxy AI retail demos in Tier-1 metros while tracking S-series share vs iPhone and net ASP."
  ],
  "metricsAndGuardrails": {
    "northStar": "Net Contribution Margin & Paid ARPU Growth (Samsung)",
    "leading": [
      "Pricing page → checkout conversion %",
      "Tier upgrade / annual plan share"
    ],
    "guardrails": [
      "Churn / price-complaint rate",
      "Competitive win/loss rate"
    ]
  },
  "synthesisScript": "To reduce Apple's premium dominance in India, Samsung should deploy a tiered value-undercutting model: anchor the S24 Ultra at ₹1.29 lakh to defend flagship prestige while aggressively pricing the S24 at ₹74,999 and S24 FE at ₹49,999 to intercept aspirational iPhone buyers. Pairing these price points with 24-month no-cost EMIs and a guaranteed 60% buyback program directly neutralizes Apple's resale and status lock-in while preserving strong hardware margins.",
  "interviewerTrap": "Using only Cost-Plus markup and ignoring Value-Based WTP, elasticity, cannibalization, or two-sided marketplace effects!",
  "variations": [
    {
      "question": "How would your recommendation change if Samsung had half the timeline or budget?",
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
  "id": "cm-cons-growth-tea-relaunch",
  "title": "Relaunch of Tea Brand",
  "company": "Heritage Tea Brand",
  "track": "Consulting",
  "category": "Growth",
  "difficulty": 1,
  "isStarter": true,
  "tags": [
    "Growth",
    "FMCG",
    "Ansoff Matrix",
    "Relaunch"
  ],
  "prompt": "Your client is a traditional Indian tea manufacturer that has suffered a string of declining sales and failed product outcomes. They want your help diagnosing why the brand stalled and designing a comprehensive relaunch and growth strategy.",
  "clarifyingQuestions": [
    {
      "q": "Which geographies and customer demographics has the tea brand historically targeted?",
      "a": "The brand initially targeted mass consumers across Northern India with the goal of capturing India's growing tea market.",
      "why": "Defines the core stronghold market so we can separate regional saturation from product-market mismatch."
    },
    {
      "q": "Have distribution or supply-chain logistics bottlenecks contributed to the recent decline?",
      "a": "No—distribution and supply-chain logistics across regions are functioning smoothly; the challenge is weak consumer pull and poor mass adoption.",
      "why": "Rules out supply-side stockouts and focuses investigation on product quality, consumer taste, and brand positioning."
    },
    {
      "q": "Has the company conducted recent consumer research on evolving tea preferences in its target markets?",
      "a": "No recent market research or consumer taste testing has been conducted to adapt blends, packaging, or regional positioning.",
      "why": "Identifies whether stagnant R&D and outdated branding explain the declining repeat purchase rate."
    }
  ],
  "frameworkUsed": "Ansoff Growth Matrix + Consumer Purchase Funnel (Awareness → Trial → Repeat)",
  "coreEquation": "Revenue = Distribution Outlets × Velocity/Outlet × Pack Price × Repeat Rate",
  "strategyOverview": "Diagnose why the Heritage Tea Brand stalled before relaunching, then scale via Ansoff and the Consumer Funnel: conduct blind taste R&D to match evolving regional palates, modernize brand identity and packaging, penetrate core Northern strongholds, expand into high-potential Southern and urban specialty channels, and drive trial through experiential tastings.",
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
      "phase": "Scoping",
      "speaker": "Interviewer",
      "kind": "prompt",
      "detail": "Your client is a legacy tea manufacturer in India facing a series of declining sales and unsuccessful launches. How would you diagnose the downturn and build a relaunch strategy?"
    },
    {
      "phase": "Scoping",
      "speaker": "Candidate",
      "kind": "question",
      "detail": "Before structuring a turnaround, I want to clarify what markets the brand currently serves and whether the slump stems from supply-chain disruptions or weak consumer demand. Have they faced logistics issues or conducted recent customer taste research?",
      "reasoning": "Distinguishing supply-chain availability from consumer pull determines whether we need an operations fix or a product and brand overhaul."
    },
    {
      "phase": "Structure",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "Logistics are completely fine. They initially targeted Northern India with a vision to capture the mass market, but consumers simply haven't responded well, and no recent consumer research has been done."
    },
    {
      "phase": "Structure",
      "speaker": "Candidate",
      "kind": "framework",
      "detail": "That makes this a consumer pull and product-market-fit problem. I will structure the relaunch in two phases: first, diagnose funnel drop-offs across Awareness, Trial, and Repeat—checking leaf quality, blend profile, and packaging; second, deploy an Ansoff growth roadmap covering core North penetration, regional expansion into South India, and new product variants.",
      "reasoning": "Fixing product quality and brand appeal first prevents wasting marketing spend on a relaunch that fails to retain trial buyers."
    },
    {
      "phase": "Investigation",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "Suppose consumer diagnostics confirm our single traditional blend feels dated, packaging looks generic on shelves, and urban buyers are shifting toward specialized and regional flavor profiles. How should the client rebuild its offering and USP?"
    },
    {
      "phase": "Root Cause",
      "speaker": "Candidate",
      "kind": "root-cause",
      "detail": "Three root causes drove the stall: zero R&D feedback loops left blends misaligned with shifting palates, generic packaging failed to stand out against national and boutique tea brands, and over-reliance on a single Northern mass SKU ignored regional taste differences and specialty growth segments.",
      "reasoning": "Pinpointing R&D, packaging, and single-SKU concentration ensures the relaunch addresses all three conversion barriers simultaneously.",
      "causes": [
        "Lack of consumer taste research left blends misaligned with modern preferences",
        "Commoditized packaging and weak brand identity hurt shelf visibility",
        "Over-reliance on one Northern mass SKU missed regional and specialty demand"
      ]
    },
    {
      "phase": "Solution",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "How would you execute the relaunch on the ground—especially if we want to expand into South India and build repeat engagement?"
    },
    {
      "phase": "Synthesis",
      "speaker": "Candidate",
      "kind": "synthesis",
      "detail": "I recommend a three-step relaunch. First, run structured consumer taste panels to upgrade leaf quality and launch tailored SKUs—strong dust/CTC blends calibrated for South India alongside masala and green/wellness packs for urban consumers. Second, overhaul packaging with an authentic heritage-yet-modern brand story. Third, drive low-cost trial via experiential tea-tasting pop-ups, regional food exhibitions, and quick-commerce sampling packs before scaling mass media.",
      "reasoning": "Validating regional blends via tastings and exhibitions de-risks expansion into South India while building genuine brand recall.",
      "causes": [
        "Regional taste customization unlocks South India and urban specialty tiers",
        "Experiential tastings and food exhibitions convert awareness directly into trial"
      ]
    }
  ],
  "recommendations": [
    "P0: Conduct blind consumer taste trials and upgrade leaf sourcing to launch distinct regional and segment SKUs (strong CTC/dust blends for North and South mass markets, plus masala and green tea lines).",
    "P1: Refresh brand identity and shelf packaging to replace generic commoditized packs with a clear quality and provenance USP.",
    "P2: Drive trial and expansion into South India through experiential tea-tasting events, trade exhibitions, and quick-commerce starter packs, tracking repeat purchase rate and regional velocity."
  ],
  "metricsAndGuardrails": {
    "northStar": "Incremental ARR / Net Revenue Growth (Heritage Tea Brand)",
    "leading": [
      "Retention & cross-sell attach rate",
      "New channel / geo revenue share"
    ],
    "guardrails": [
      "CAC Payback & Gross Margin %",
      "Churn in core legacy segments"
    ]
  },
  "synthesisScript": "The Heritage Tea Brand's slump stems from stagnant R&D, generic packaging, and reliance on a single Northern blend rather than logistics bottlenecks. By conducting consumer taste trials to launch regionally tailored and specialty SKUs, refreshing packaging around an authentic brand USP, and activating experiential tastings to expand into South India and urban channels, the brand can rebuild trial-to-repeat velocity sustainably.",
  "interviewerTrap": "Relaunching with massive TV ads before fixing shelf availability (distribution) or why existing buyers stopped repurchasing!",
  "variations": [
    {
      "question": "How would your recommendation change if Heritage Tea Brand had half the timeline or budget?",
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
  "id": "cm-cons-growth-social-media",
  "title": "Social Media Company Growth",
  "company": "Social Media Platform",
  "track": "Consulting",
  "category": "Growth",
  "difficulty": 2,
  "isStarter": false,
  "tags": [
    "Growth",
    "Consulting"
  ],
  "prompt": "Your client is a social media platform whose core user base consists of affluent urban users, alongside a smaller Tier 2 and Tier 3 base. A fast-growing competitor is pulling away Tier 2 and Tier 3 users; advise the client on defending and growing its urban base while countering the rival and expanding in Tier 2 and Tier 3 markets.",
  "clarifyingQuestions": [
    {
      "q": "How does our client's platform position itself today, and how do urban vs. Tier 2/3 users contribute to metrics?",
      "a": "The client keeps its public feed curated, classic, and sophisticated without flooding it with unfiltered UGC. Urban users drive most ad revenue, while Tier 2/3 DAU/MAU is critical for future reach.",
      "why": "Highlights the core strategic tension: monetizing urban sophistication cannot be sacrificed to win mass Tier 2/3 growth."
    },
    {
      "q": "What specific product or content advantages are enabling the competitor to capture Tier 2 and Tier 3 users?",
      "a": "The competitor offers a lightweight app built for low-cost phones and weak networks, paired with abundant regional-language short-form UGC that creates strong local belonging.",
      "why": "Separates technical accessibility barriers from content-supply and cultural-relevance gaps."
    },
    {
      "q": "Are we losing urban users to this competitor as well, and how constrained is our investment budget?",
      "a": "Urban engagement is largely stable so far, though exposed if the rival scales; our budget is moderate, requiring tightly prioritized investments.",
      "why": "Confirms we can ring-fence urban defense efficiently while concentrating product spend on targeted Tier 2/3 fixes."
    }
  ],
  "frameworkUsed": "Ansoff Growth Matrix (Penetration / Market Dev / Product Dev / Diversification) + Inorganic M&A",
  "coreEquation": "Revenue Growth = (Existing Customers × Frequency × AOV) + New Markets + New Products + Inorganic",
  "strategyOverview": "Approach Social Media Platform Growth using segmented product strategy: decouple Urban defense (protect curated public feed and premium ad yields) from Tier 2/3 expansion (launch a lightweight app/mode, localized regional-language creator circles, and follower-only UGC spaces) so both segments thrive without brand dilution.",
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
      "phase": "Scoping",
      "speaker": "Interviewer",
      "kind": "prompt",
      "detail": "Your client is a social media platform dominated by affluent urban users, with a smaller Tier 2 and Tier 3 user base that a new rival is rapidly capturing. How should the client protect or grow its urban base while countering the competitor in Tier 2 and Tier 3?"
    },
    {
      "phase": "Scoping",
      "speaker": "Candidate",
      "kind": "question",
      "detail": "To separate defense from expansion, I want to clarify two points: is the rival eroding urban DAU/MAU yet, and what product constraints define our client's positioning—particularly around user-generated content and app architecture?",
      "reasoning": "Urban ad-monetizing users and Tier 2/3 growth users often have conflicting UX preferences, so understanding product boundaries prevents brand cannibalization."
    },
    {
      "phase": "Structure",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "Urban usage is stable and generates most ad revenue, though it faces long-term risk if the rival scales. Our client wants to keep its public feed classic and sophisticated without pushing heavy unfiltered UGC, whereas the rival hooks Tier 2/3 users with short vernacular video, local community belonging, and a lightweight app for cheap phones."
    },
    {
      "phase": "Structure",
      "speaker": "Candidate",
      "kind": "framework",
      "detail": "That clarifies this is a segmented product-market-fit and technical-access challenge rather than an ad-spend issue. I will split the strategy into two ring-fenced tracks: first, Urban Defense—deepening curated discovery and premium creator tools without cluttering the public feed; second, Tier 2/3 Expansion—solving bandwidth/device friction, local-language content supply, and community belonging without diluting the urban feed.",
      "reasoning": "Ring-fencing the two tracks allows tailored UX and content feeds per cohort without alienating high-ARPU urban advertisers."
    },
    {
      "phase": "Investigation",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "Given a moderate budget and the strict rule against flooding the main public feed with raw UGC, how would you solve Tier 2/3 content belonging and technical friction?"
    },
    {
      "phase": "Root Cause",
      "speaker": "Candidate",
      "kind": "root-cause",
      "detail": "The churn stems from three gaps: an English/metro-skewed recommendation feed leaves Tier 2/3 users feeling like outsiders, a heavy app crashes or stalls on low-RAM phones and 3G/spotty networks, and restricting all UGC removes the peer-to-peer viral loop that drives rural retention.",
      "reasoning": "Addressing all three root causes ensures that acquiring Tier 2/3 installs actually translates into 30-day DAU retention.",
      "causes": [
        "Metro-centric English feed creates low cultural belonging for Tier 2/3 users",
        "Heavy app footprint degrades performance on low-end phones and weak data networks",
        "Absence of accessible UGC spaces prevents local creator virality"
      ]
    },
    {
      "phase": "Solution",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "That diagnosis is spot on. What exact product features and rollout sequence would you prioritize with a moderate budget?"
    },
    {
      "phase": "Synthesis",
      "speaker": "Candidate",
      "kind": "synthesis",
      "detail": "First, launch a lightweight 'Lite' app build (<15MB with adaptive low-data video caching) aimed at top-churn Tier 2/3 states. Second, introduce segmented 'Private Circles' and opt-in regional-language community channels where UGC stays within follower/local cohorts—preserving the classic public feed for urban users while igniting vernacular engagement. Third, onboard micro-creators in priority languages and track Tier 2/3 DAU/MAU retention alongside urban session depth and ad RPM as guardrails.",
      "reasoning": "Scoped UGC spaces plus a Lite app directly match the competitor's advantages at low cost while keeping the core urban experience intact.",
      "causes": [
        "Lite app removes device/network friction in Tier 2/3 markets",
        "Opt-in local circles unlock vernacular UGC without polluting the urban feed"
      ]
    }
  ],
  "recommendations": [
    "P0: Ship a lightweight 'Lite' app (<15MB with offline/low-bandwidth caching) and localize onboarding into the top 5 Tier 2/3 regional languages to stop device-driven churn.",
    "P1: Introduce opt-in 'Local Circles' and follower-only UGC spaces so Tier 2/3 users and regional creators can build community without altering the curated public feed for urban users.",
    "P2: Seed vernacular micro-creator partnerships in two pilot states and deepen urban engagement via curated cultural/interest hubs, monitoring Tier 2/3 DAU/MAU alongside urban ad RPM."
  ],
  "metricsAndGuardrails": {
    "northStar": "Incremental ARR / Net Revenue Growth (Social Media Platform)",
    "leading": [
      "Retention & cross-sell attach rate",
      "New channel / geo revenue share"
    ],
    "guardrails": [
      "CAC Payback & Gross Margin %",
      "Churn in core legacy segments"
    ]
  },
  "synthesisScript": "The Social Media Platform is losing Tier 2 and Tier 3 users not from weak marketing, but because a metro-centric feed, heavy app footprint, and lack of local UGC alienate regional audiences. By deploying a lightweight Lite app alongside opt-in vernacular 'Local Circles' that leave the curated urban public feed untouched, the platform can defend its high-ARPU urban core while reclaiming Tier 2/3 DAU/MAU growth on a moderate budget.",
  "interviewerTrap": "Jumping straight to risky Diversification (unrelated new products in new markets) before capturing low-hanging Penetration in the core!",
  "variations": [
    {
      "question": "How would your recommendation change if Social Media Platform had half the timeline or budget?",
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
  "id": "cm-cons-28-eyes-inc-growth-strategy",
  "title": "Eyes Inc. Growth Strategy",
  "company": "Eyes Inc. (Apparel/Consumer Goods)",
  "track": "Consulting",
  "category": "Growth",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "Growth",
    "Consulting"
  ],
  "prompt": "Your client is Eyes Inc., a contact lens manufacturer in the United States. They want to grow their US market share significantly over the next two years; how would you approach this and what growth plan would you recommend?",
  "clarifyingQuestions": [
    {
      "q": "What is Eyes Inc.'s current product portfolio, regional footprint, and competitive position in the US?",
      "a": "Eyes Inc. sells Regular (saturated), Cosmetic (stagnating), and Traditional (moderately growing) contact lenses. Two large competitors dominate nationally, and Eyes Inc. has weak presence in the US South.",
      "why": "Pinpoints the highest-headroom product line (Traditional) and underpenetrated region (US South) before designing go-to-market tactics."
    },
    {
      "q": "Who are the primary customer segments and what drives their brand selection?",
      "a": "Repeat users are brand-loyal, whereas new adopters rely heavily on optometrist and retail recommendations. Women under 30 account for roughly 70% of growth potential.",
      "why": "Identifies the decisive acquisition lever—clinical optometrist advocacy among young female first-time wearers."
    },
    {
      "q": "Are there manufacturing capacity limits or aggressive price competition we should plan around?",
      "a": "Production can scale for phased regional rollouts, though the two dominant incumbents can respond aggressively with retail price promotions.",
      "why": "Shapes a phased pilot strategy and non-price differentiation so Eyes Inc. avoids a margin-eroding price war."
    }
  ],
  "frameworkUsed": "Ansoff Growth Matrix (Penetration / Market Dev / Product Dev / Diversification) + Inorganic M&A",
  "coreEquation": "Revenue Growth = (Existing Customers × Frequency × AOV) + New Markets + New Products + Inorganic",
  "strategyOverview": "Approach Eyes Inc. Growth Strategy using Ansoff Market Development and Channel Penetration: focus on the underpenetrated US South and moderately growing Traditional lens category, target first-time female adopters under 30 via optometrist sample kits and mall retail partnerships, launch trial-friendly disposable SKUs plus digital refill subscriptions, and phase investment across 3 pilot-to-national waves.",
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
      "phase": "Scoping",
      "speaker": "Interviewer",
      "kind": "prompt",
      "detail": "Your client is Eyes Inc., a contact lens manufacturer in the US looking to grow market share over the next two years. How would you structure your approach?"
    },
    {
      "phase": "Scoping",
      "speaker": "Candidate",
      "kind": "question",
      "detail": "I would like to break this into four steps: product and regional baseline, customer acquisition drivers, competitive/channel dynamics, and a phased growth plan. To start, can you share Eyes Inc.'s product mix, regional strengths, and who drives brand choice?",
      "reasoning": "In optical care, growth depends on matching growing SKU formats to underpenetrated regions and understanding whether consumers or doctors control brand choice."
    },
    {
      "phase": "Structure",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "Eyes Inc. sells Regular lenses (saturated), Cosmetic (stagnating), and Traditional lenses (moderate growth), and trails badly in the US South where two large rivals dominate. Repeat users stay loyal to their brand, while new adopters rely on doctor and retail recommendations—with women under 30 representing ~70% of growth potential."
    },
    {
      "phase": "Structure",
      "speaker": "Candidate",
      "kind": "framework",
      "detail": "That gives us a sharp strategic wedge. Rather than fighting entrenched brand loyalty in saturated Regular lenses, we should target new-adopter women under 30 in the underserved US South using the growing Traditional segment—anchored on optometrist advocacy and optical retail partnerships.",
      "reasoning": "Acquiring first-time wearers via trusted doctors creates multi-year repeat LTV without paying to pry loyal users away from rivals."
    },
    {
      "phase": "Investigation",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "What specific product, channel, and marketing levers would you deploy to win doctors and young female first-timers in the South?"
    },
    {
      "phase": "Root Cause",
      "speaker": "Candidate",
      "kind": "root-cause",
      "detail": "Eyes Inc.'s weak Southern share stems from low optometrist engagement, lack of low-friction trial packs for nervous first-time wearers, and absence of a convenient refill loop once a patient tries the brand. Launching disposable Traditional trial bundles alongside doctor sample kits, mall/strip-center retail displays, and an automated digital refill subscription solves both trial friction and retention.",
      "reasoning": "Connecting clinical trial in the doctor's chair directly to subscription refills prevents post-trial leakage to big-two competitors.",
      "causes": [
        "Low optometrist and retail footprint in the high-growth US South",
        "Lack of low-friction trial SKUs for first-time female wearers under 30",
        "Missing direct digital subscription channel to lock in post-trial refills"
      ]
    },
    {
      "phase": "Solution",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "How would you phase investments over the two-year horizon, and what if the two big competitors launch aggressive price discounts in response?"
    },
    {
      "phase": "Synthesis",
      "speaker": "Candidate",
      "kind": "synthesis",
      "detail": "I recommend a 3-phase rollout: Phase 1 (Months 1–6) pilots doctor sample kits, mall optical partnerships, and trial SKUs in 3–5 Southern metros; Phase 2 (Months 7–15) scales winning doctor networks and rolls out the refill subscription; Phase 3 (Months 16–24) expands nationally where pilot ROI holds. If rivals slash prices, we should avoid a price war and defend share through free professional fittings, clinical endorsement, and subscription perks, cutting price only where LTV math justifies it.",
      "reasoning": "Phased city pilots prove CAC-to-LTV economics before committing national capital, while clinical trust insulates margins against discounting.",
      "causes": [
        "3-phase Southern pilot-to-scale roadmap limits upfront capital risk",
        "Doctor endorsements and free fittings defend margin against competitor price cuts"
      ]
    }
  ],
  "recommendations": [
    "P0: Pilot in 3–5 Southern US metros targeting women under 30 via optometrist starter kits, mall optical retail co-marketing, and disposable Traditional trial bundles.",
    "P1: Launch a direct-to-consumer digital refill subscription bundled with free fittings to convert first-time clinic adopters into high-LTV repeat subscribers.",
    "P2: Scale across the broader South and select national markets only in Phase 2–3 after verifying pilot CAC payback and defending against rival price promos via value-added perks rather than broad discounting."
  ],
  "metricsAndGuardrails": {
    "northStar": "Incremental ARR / Net Revenue Growth (Eyes Inc. (Apparel/Consumer Goods))",
    "leading": [
      "Retention & cross-sell attach rate",
      "New channel / geo revenue share"
    ],
    "guardrails": [
      "CAC Payback & Gross Margin %",
      "Churn in core legacy segments"
    ]
  },
  "synthesisScript": "To grow Eyes Inc.'s US market share over two years, I recommend concentrating investment on first-time female adopters under 30 in the underserved US South through the growing Traditional lens category. By executing a 3-phase rollout anchored on optometrist trial kits, mall retail partnerships, and a digital refill subscription—while countering competitor discounting with clinical trust and fitting perks—Eyes Inc. can capture durable repeat share without eroding margins.",
  "interviewerTrap": "Jumping straight to risky Diversification (unrelated new products in new markets) before capturing low-hanging Penetration in the core!",
  "variations": [
    {
      "question": "How would your recommendation change if Eyes Inc. (Apparel/Consumer Goods) had half the timeline or budget?",
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
  "id": "cm-cons-29-fire-extinguisher-growth",
  "title": "Fire Extinguisher Growth",
  "company": "Fire Safety Equipment Co.",
  "track": "Consulting",
  "category": "Growth",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "Growth",
    "Consulting"
  ],
  "prompt": "Your client is a pan-India fire extinguisher manufacturer with ₹100 crore in annual revenue that wants to triple revenue to ₹300 crore within two years. Assess whether this goal is realistic as scoped and recommend how the company can maximize growth.",
  "clarifyingQuestions": [
    {
      "q": "What products does the client currently sell, and what is the geographic and customer mix of its ₹100 crore revenue?",
      "a": "They sell a single product line of conventional red-can fire extinguishers pan-India with even geographic spread across commercial properties, offices, industrial buyers, and residential complexes (residential is the largest single slice at 20%).",
      "why": "Clarifies product concentration and customer diversification before sizing growth headroom."
    },
    {
      "q": "How large is the total Indian fire extinguisher market today, what is our market share, and how fast is the market growing?",
      "a": "The Indian market is ₹200 crore total, growing at 10% annually. Our client already holds 50% share (₹100 crore), while the next two competitors hold 25% and 20%.",
      "why": "Tests the mathematical feasibility of a ₹300 crore target against total addressable market size in year two."
    },
    {
      "q": "Where in the value chain does the client operate, and are they open to new products or services?",
      "a": "They run an end-to-end value chain from procurement through after-sales support, and while historically single-product, they need strategic options beyond conventional cans.",
      "why": "Confirms existing capabilities (manufacturing + after-sales service) that can support product diversification and recurring maintenance revenue."
    }
  ],
  "frameworkUsed": "Ansoff Growth Matrix (Penetration / Market Dev / Product Dev / Diversification) + Inorganic M&A",
  "coreEquation": "Revenue Growth = (Existing Customers × Frequency × AOV) + New Markets + New Products + Inorganic",
  "strategyOverview": "Approach Fire Extinguisher Growth by first stress-testing market math (50% share of a ₹200 Cr market growing 10% yields only a ₹242 Cr total market in 2 years—making ₹300 Cr impossible in red cans alone), then expanding TAM via regulatory compliance enforcement, recurring AMC/refilling services, adjacent fire-safety hardware, and bolt-on M&A.",
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
      "phase": "Scoping",
      "speaker": "Interviewer",
      "kind": "prompt",
      "detail": "Your client is a fire extinguisher manufacturer looking to triple revenue from ₹100 crore to ₹300 crore in two years. Evaluate how feasible this is and what growth strategy you would recommend."
    },
    {
      "phase": "Scoping",
      "speaker": "Candidate",
      "kind": "question",
      "detail": "To pressure-test this 3x target, I need to understand our product range, customer mix, total market size, and current market share. What products do we make and how big is the Indian market?",
      "reasoning": "Validating whether the addressable market can even absorb ₹300 crore in revenue is essential before brainstorming sales tactics."
    },
    {
      "phase": "Structure",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "The client sells a single line of conventional red-can extinguishers pan-India across commercial properties, offices, and residential complexes (where residential is the biggest segment at 20%). The entire Indian market is ₹200 crore growing at 10% per year; our client already holds 50% share, with two rivals holding 25% and 20%."
    },
    {
      "phase": "Structure",
      "speaker": "Candidate",
      "kind": "framework",
      "detail": "That market math reveals a critical constraint immediately. At 10% annual growth, a ₹200 crore market reaches only ₹242 crore in two years. Even with 100% monopoly share of conventional extinguishers, the client could not hit ₹300 crore. So my structure will examine: first, expanding core market demand via compliance enforcement; second, increasing revenue per customer through recurring maintenance; and third, diversifying into adjacent fire-safety systems and exports/M&A.",
      "reasoning": "Proving the core TAM ceiling early reframes the entire case from 'sell more cans' to 'expand the addressable category'."
    },
    {
      "phase": "Investigation",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "Excellent catch—tripling within the existing ₹200 crore niche is indeed unattainable. Setting the ₹300 crore stretch aside, how can we realistically grow core demand for a commoditized safety product where advertising alone rarely creates urgency?"
    },
    {
      "phase": "Root Cause",
      "speaker": "Candidate",
      "kind": "root-cause",
      "detail": "Because fire extinguishers are a low-involvement compliance commodity, demand lags due to weak safety enforcement in mid-tier residential complexes and SMEs, zero recurring monetization of our after-sales service network, and reliance on one hardware SKU.",
      "reasoning": "Recognizing that compliance and lifecycle servicing—not consumer branding—drive B2B safety purchases unlocks practical revenue levers.",
      "causes": [
        "Core TAM ceiling (₹242 Cr in 2 years) blocks 3x growth in red cans alone",
        "Weak fire-code enforcement limits adoption in residential and SME buildings",
        "One-time hardware sales under-monetize existing end-to-end after-sales service capabilities"
      ]
    },
    {
      "phase": "Solution",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "Given their end-to-end value chain including after-sales support, what concrete growth initiatives would you prioritize over the next 24 months?"
    },
    {
      "phase": "Synthesis",
      "speaker": "Candidate",
      "kind": "synthesis",
      "detail": "First, partner with municipal fire authorities, building associations, and property insurers to drive compliance mandates and bundled safety discounts for residential societies and SMEs. Second, monetize the after-sales network via Annual Maintenance Contracts (AMCs), certified pressure testing, and scheduled chemical refilling. Third, expand the portfolio into smart smoke/gas detectors, modular kitchen/EV-charging suppression units, and adjacent industrial fire systems via targeted bolt-on acquisitions or licensing.",
      "reasoning": "Combining compliance-led TAM expansion with recurring AMC revenue and adjacent safety hardware builds a realistic path beyond the ₹242 crore ceiling.",
      "causes": [
        "Insurer/regulator partnerships accelerate residential and SME compliance adoption",
        "Recurring AMC contracts and smart detection SKUs lift customer LTV beyond red cans"
      ]
    }
  ],
  "recommendations": [
    "P0: Reset the 2-year target around TAM reality (₹242 Cr max in red cans) and launch recurring Annual Maintenance & Refilling Contracts (AMCs) across the existing 50%-share installed base.",
    "P1: Partner with property insurers and residential/SME associations to offer compliance-audit bundles that lower fire-insurance premiums when buildings install certified equipment.",
    "P2: Diversify beyond conventional cans into smart smoke/gas sensors, automatic kitchen/EV-bay suppression kits, and B2B industrial systems through partnerships or bolt-on M&A."
  ],
  "metricsAndGuardrails": {
    "northStar": "Incremental ARR / Net Revenue Growth (Fire Safety Equipment Co.)",
    "leading": [
      "Retention & cross-sell attach rate",
      "New channel / geo revenue share"
    ],
    "guardrails": [
      "CAC Payback & Gross Margin %",
      "Churn in core legacy segments"
    ]
  },
  "synthesisScript": "The Fire Safety Equipment Co. cannot triple revenue to ₹300 crore in two years within conventional red-can extinguishers alone, because even at 10% annual growth the entire Indian market will reach only ₹242 crore. To unlock substantial growth beyond its existing 50% share, the company must expand the addressable market through insurer-backed compliance programs, monetize its after-sales footprint via recurring AMC/refill contracts, and diversify into adjacent fire-detection and suppression systems.",
  "interviewerTrap": "Jumping straight to risky Diversification (unrelated new products in new markets) before capturing low-hanging Penetration in the core!",
  "variations": [
    {
      "question": "How would your recommendation change if Fire Safety Equipment Co. had half the timeline or budget?",
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
  "id": "cm-cons-growth-shaving-company",
  "title": "Shaving Company Growth",
  "company": "Shaving Brand",
  "track": "Consulting",
  "category": "Growth",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "Growth",
    "Consulting"
  ],
  "prompt": "Your client is Bryan, an international CPG firm with leading positions across toothpaste, batteries, and skin care, except in hair removal where it trails. They have asked how they can become the #1 global market leader in the hair removal market.",
  "clarifyingQuestions": [
    {
      "q": "What hair removal segments and SKU counts does Bryan currently offer for men versus women, and what are its market shares?",
      "a": "In men's, Bryan offers 6 wet-shaving SKUs (33% share, high price), 3 dry-shaving SKUs (20% share, medium-high price), and 1 unisex waxing SKU (5% share). In women's, it offers only 2 wet-shaving SKUs (10% share, medium-low price), 0 dry-shaving SKUs (0% share), and the same 1 unisex waxing SKU (1% share).",
      "why": "Exposes massive SKU and market-share under-penetration in the women's hair removal segment."
    },
    {
      "q": "How concentrated is competition in the men's versus women's hair removal markets?",
      "a": "The men's market is tightly consolidated—the top 3 players hold 75% share, where Bryan is already #2 in wet and dry shaving. The women's market is highly fragmented, with the top 8 brands holding just 60%, and Bryan ranks 8th in waxing.",
      "why": "Shows that capturing #1 share is far faster and cheaper in the fragmented women's market than fighting entrenched leaders in men's."
    },
    {
      "q": "Why do female consumers hold lower share with Bryan despite similar gross margins across products?",
      "a": "Women perceive Bryan as a 'cheap' brand compared to its premium image among men, and there have been minor product side-effect/irritation complaints.",
      "why": "Diagnoses whether the women's gap is driven by distribution, brand perception, or product formulation."
    }
  ],
  "frameworkUsed": "Ansoff Growth Matrix (Penetration / Market Dev / Product Dev / Diversification) + Inorganic M&A",
  "coreEquation": "Revenue Growth = (Existing Customers × Frequency × AOV) + New Markets + New Products + Inorganic",
  "strategyOverview": "Approach Shaving Company Growth (Shaving Brand) by comparing men's versus women's competitive landscapes: recognize the men's market is consolidated (top 3 hold 75%) while women's is fragmented (top 8 hold 60%) and severely under-served by Bryan (0 dry-shave SKUs, 1 unisex wax, 'cheap' brand image), then win #1 leadership via female-specific R&D, premium repositioning, and targeted niche M&A.",
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
      "phase": "Scoping",
      "speaker": "Interviewer",
      "kind": "prompt",
      "detail": "Our client, Bryan, is an international CPG leader in every category it plays except hair removal. They want your plan to become #1 in the hair removal market. Where would you start?"
    },
    {
      "phase": "Scoping",
      "speaker": "Candidate",
      "kind": "question",
      "detail": "To locate where Bryan is losing share, I need to examine its product portfolio, market shares, pricing, and competitor concentration across customer segments. What hair removal products and SKUs does Bryan currently sell?",
      "reasoning": "Segmenting SKU coverage and competitive concentration by gender and format reveals whether the shortfall is concentrated in a specific sub-market."
    },
    {
      "phase": "Structure",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "Bryan plays in wet-shaving, dry-shaving, and waxing. For men, they have 6 wet SKUs (33% share, high price), 3 dry SKUs (20% share, medium-high price), and 1 unisex wax SKU (5% share)—where the top 3 rivals hold 75% of the market. For women, Bryan has just 2 wet SKUs (10% share, medium-low price), 0 dry SKUs (0% share), and the same unisex wax SKU (1% share), in a fragmented market where the top 8 brands hold only 60%."
    },
    {
      "phase": "Structure",
      "speaker": "Candidate",
      "kind": "framework",
      "detail": "The contrast is striking: Bryan is already #2 in a consolidated men's market, but trails badly in a wide-open, fragmented women's market—with zero dry-shaving presence, minimal wet SKUs, and a single unisex waxing product. I want to investigate why Bryan's women's share is so weak despite competitive margins—is it brand positioning, product quality, or distribution?",
      "reasoning": "Targeting a fragmented segment where Bryan has 1–10% share offers far higher incremental market-share upside than battling entrenched men's rivals."
    },
    {
      "phase": "Investigation",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "All products carry similar profit margins, yet female consumers perceive Bryan as a 'cheap' budget brand while men view it as high-end. We have also logged a small number of customer complaints regarding skin irritation after use."
    },
    {
      "phase": "Root Cause",
      "speaker": "Candidate",
      "kind": "root-cause",
      "detail": "That explains the gap clearly. First, medium-low pricing and limited female SKUs created a low-tier brand perception among women. Second, sharing a single unisex waxing product fails to serve high female waxing demand with tailored skin-care ergonomics. Third, minor skin-irritation complaints compound quality skepticism.",
      "reasoning": "Fixing product formulation and brand prestige before raising prices ensures women accept Bryan as a credible premium grooming brand.",
      "causes": [
        "Severe SKU gap in women's (0 dry-shaving SKUs, no female-specific waxing line)",
        "Medium-low pricing anchors 'cheap' brand perception among female buyers",
        "Skin-irritation complaints and unisex waxing format erode category trust"
      ]
    },
    {
      "phase": "Solution",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "Given Bryan's strength in adjacent skin-care business units and ambition to reach #1 overall, what organic and inorganic growth moves would you recommend?"
    },
    {
      "phase": "Synthesis",
      "speaker": "Candidate",
      "kind": "synthesis",
      "detail": "To capture #1 overall share, Bryan should pivot aggressively into the fragmented women's hair-removal market via three moves: first, conduct female consumer R&D to eliminate irritation and launch dedicated female wet, dry, and sensitive-skin waxing lines leveraging Bryan's skin-care unit; second, reposition to premium pricing tiers backed by skin-care-led branding; and third, acquire a fast-growing niche women's waxing or grooming brand to jump straight from 8th place to leadership.",
      "reasoning": "Combining organic skin-care-infused SKU expansion with targeted M&A compresses the timeline to #1 share in a fragmented market.",
      "causes": [
        "Skin-care-backed R&D and female-only SKUs fix quality and brand image",
        "Acquiring a niche women's waxing brand accelerates share consolidation"
      ]
    }
  ],
  "recommendations": [
    "P0: Prioritize the fragmented women's hair-removal market by funding R&D with Bryan's skin-care unit to eliminate irritation and launch dedicated female dry-shaving and sensitive-skin waxing SKUs.",
    "P1: Reposition Bryan's women's line out of the 'cheap' tier via ergonomic packaging, dermatological branding, and upward price-tiering aligned with men's premium perception.",
    "P2: Pursue targeted M&A of a niche women's waxing or grooming brand to rapidly consolidate fragmented share and surpass the #1 global competitor."
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
  "synthesisScript": "To make the Shaving Brand #1 in global hair removal, Bryan should stop fighting solely in the consolidated men's market and focus on the fragmented women's segment, where it holds just 1–10% share due to missing SKUs, minor irritation complaints, and a 'cheap' brand image. By launching skin-care-formulated female wet, dry, and waxing lines at premium price tiers—and executing a bolt-on acquisition in women's waxing—Bryan can rapidly capture #1 overall leadership.",
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
  "id": "cm-cons-31-overseas-market-growth",
  "title": "Overseas Market Growth",
  "company": "Paperboard Exporter",
  "track": "Consulting",
  "category": "Growth",
  "difficulty": 4,
  "isStarter": false,
  "tags": [
    "Growth",
    "Consulting"
  ],
  "prompt": "Your client is an Indonesian paperboard producer generating $5B in annual revenue—80% from Indonesia and 20% from the US. Overall growth is 3% per year, and the client wants to reach 5% growth within 1–2 years, but limited resources allow focusing on only one market. Which market should they choose, and how should they execute?",
  "clarifyingQuestions": [
    {
      "q": "How fast has the client been growing in Indonesia, and what is the competitive landscape in both markets?",
      "a": "In Indonesia, the client grows at 1%, matching overall market growth in a consolidated market they already lead. In the US, the market is fragmented and competitors grow at 15–25% annually.",
      "why": "Allows us to back-calculate the client's current US growth rate and assess headroom to accelerate overall growth from 3% to 5%."
    },
    {
      "q": "How are US operations, lead times, product quality, and pricing structured compared to local rivals?",
      "a": "The client produces in Indonesia, holds ample safety stock in US warehouses with competitive lead times, offers parity commodity quality, and prices against a public market index.",
      "why": "Rules out manufacturing, logistics, quality, and pricing disadvantages so we can isolate commercial execution."
    },
    {
      "q": "How does the client sell in the US and how is its sales force compensated?",
      "a": "They sell via distributors and direct reps on short-term (<12 month) spot contracts with small buyers, using a local sales team paid mostly fixed salary with low commission—whereas competitors lock in large enterprise multi-year contracts using commission-heavy pay.",
      "why": "Uncovers the exact commercial bottleneck explaining why our US growth (11%) lags competitors (15–25%)."
    }
  ],
  "frameworkUsed": "Ansoff Growth Matrix (Penetration / Market Dev / Product Dev / Diversification) + Inorganic M&A",
  "coreEquation": "Revenue Growth = (Existing Customers × Frequency × AOV) + New Markets + New Products + Inorganic",
  "strategyOverview": "Approach Overseas Market Growth (Paperboard Exporter) by decomposing growth math ($4B Indonesia at 1% + $1B US at 11% = 3% total) to prove only the US can lift company growth to 5%, ruling out logistics/product/price constraints, diagnosing the US sales-incentive and spot-contract bottleneck, and overhauling US enterprise sales execution.",
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
      "phase": "Scoping",
      "speaker": "Interviewer",
      "kind": "prompt",
      "detail": "Our client is a $5B Indonesian paperboard producer earning 80% of revenue in Indonesia and 20% in the US, growing 3% overall. They want to hit 5% growth in 1–2 years, but can invest in only one market. Which market should they focus on, and how?"
    },
    {
      "phase": "Scoping",
      "speaker": "Candidate",
      "kind": "question",
      "detail": "To compare upside, I need to know the client's growth rate and competitive headroom in each market. How fast is Indonesia growing, and how are competitors performing in the US?",
      "reasoning": "Calculating each region's current growth contribution determines mathematically whether Indonesia or the US can bridge the 2-percentage-point ($100M) gap."
    },
    {
      "phase": "Structure",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "In Indonesia, the client is the leader in a consolidated market growing at 1%, matching overall market growth. In the US, the market is fragmented and competitors are growing at 15–25% annually."
    },
    {
      "phase": "Structure",
      "speaker": "Candidate",
      "kind": "framework",
      "detail": "Let's check the math: 3% growth on $5B equals $150M. Indonesia ($4B at 1%) adds $40M, meaning the $1B US business is already generating $110M, or 11% growth. Since Indonesia is consolidated at 1% growth with little room left to gain share, it cannot reach 5% company growth. In contrast, lifting our $1B US business from 11% to 21%—squarely in line with rivals' 15–25% pace—adds $100M and achieves the 5% target. Let me investigate why we lag US rivals: is it supply-chain lead times, product/pricing, or sales execution?",
      "reasoning": "Decomposing the weighted-average growth equation provides an indisputable quantitative case for prioritizing the US."
    },
    {
      "phase": "Investigation",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "Operations in Indonesia are optimized, and for the US they maintain local warehouse stock so lead times are competitive. The paperboard is a commodity at parity quality, priced off a public index. However, the client relies on <12-month spot contracts with small buyers via distributors and a local sales team paid mostly fixed salaries, whereas rivals win long-term contracts with large buyers using commission-heavy sales teams."
    },
    {
      "phase": "Root Cause",
      "speaker": "Candidate",
      "kind": "root-cause",
      "detail": "That nails the bottleneck: logistics, product quality, and index pricing are all at parity, so our 10-percentage-point growth lag versus US competitors is purely a commercial execution failure. Because reps earn fixed salaries, they take the path of least resistance—closing small spot deals under 12 months rather than hunting multi-year enterprise accounts.",
      "reasoning": "Isolating sales incentives and account mix explains how a commodity exporter with good logistics can still underperform market growth by half.",
      "causes": [
        "Indonesia is saturated at 1% market growth with dominant share",
        "US sales compensation is mostly fixed salary, discouraging enterprise hunting",
        "Over-reliance on <12-month spot contracts with small buyers creates churn and misses large accounts"
      ]
    },
    {
      "phase": "Solution",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "Clear diagnosis. How should the client restructure its US commercial engine over the next 12–18 months to accelerate from 11% to 21%+ growth?"
    },
    {
      "phase": "Synthesis",
      "speaker": "Candidate",
      "kind": "synthesis",
      "detail": "They should allocate 100% of incremental growth investment to the US market. First, overhaul US sales compensation to a performance-weighted mix—higher variable commissions and multi-year contract bonuses—while splitting hunters (new enterprise logos) from account farmers. Second, leverage existing US warehouse inventory to offer guaranteed JIT delivery SLAs and volume rebates on 2–3 year enterprise contracts. Tracking enterprise pipeline velocity and contract tenure will ensure we lift US growth above 20% and overall revenue growth to 5%.",
      "reasoning": "Aligning rep pay with multi-year enterprise deals directly mirrors competitor incentives while turning existing US warehouse stock into a commercial differentiator.",
      "causes": [
        "Commission-heavy pay tied to multi-year contracts unlocks large-buyer hunting",
        "Warehouse-backed JIT SLAs win enterprise share without cutting index price"
      ]
    }
  ],
  "recommendations": [
    "P0: Dedicate all incremental growth resources to the US market (accelerating US growth from 11% to ~21% adds the +$100M needed to lift total $5B growth from 3% to 5%).",
    "P1: Restructure US sales compensation from fixed-heavy salaries to variable commission tiers with accelerators for locking in 2–3 year enterprise contracts rather than <12-month spot deals.",
    "P2: Form a dedicated enterprise key-account team offering warehouse-backed JIT delivery SLAs and volume tiers, monitoring multi-year contract share and gross margin per ton."
  ],
  "metricsAndGuardrails": {
    "northStar": "Incremental ARR / Net Revenue Growth (Paperboard Exporter)",
    "leading": [
      "Retention & cross-sell attach rate",
      "New channel / geo revenue share"
    ],
    "guardrails": [
      "CAC Payback & Gross Margin %",
      "Churn in core legacy segments"
    ]
  },
  "synthesisScript": "The Paperboard Exporter should focus 100% of its growth resources on the US market rather than saturated Indonesia (1% growth), because accelerating the $1B US business from 11% to 21%—within competitors' 15–25% range—delivers the exact +$100M needed to lift total company growth to 5%. Since product quality, index pricing, and US warehouse lead times are already at parity, success requires fixing commercial execution by shifting sales incentives toward commission-heavy pay tied to multi-year enterprise contracts.",
  "interviewerTrap": "Jumping straight to risky Diversification (unrelated new products in new markets) before capturing low-hanging Penetration in the core!",
  "variations": [
    {
      "question": "How would your recommendation change if Paperboard Exporter had half the timeline or budget?",
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
  "id": "cm-cons-growth-psb",
  "title": "Public Sector Bank Growth",
  "company": "Public Sector Bank",
  "track": "Consulting",
  "category": "Growth",
  "difficulty": 4,
  "isStarter": false,
  "tags": [
    "Growth",
    "Consulting"
  ],
  "prompt": "Your client is one of India's top four public sector banks and has been losing over ₹100 crore annually on inter-bank ATM payout fees over the past few years. They have hired you to diagnose the root causes of these losses and recommend practical fixes.",
  "clarifyingQuestions": [
    {
      "q": "What is the bank's retail market share, and how often do its customers use other banks' ATMs?",
      "a": "The bank holds a 6% retail customer share pan-India. Its customers use rival banks' ATMs 40% of the time, averaging 4 ATM transactions per month.",
      "why": "Quantifies the off-us transaction rate (40%) in our payout equation before checking our ATM network footprint."
    },
    {
      "q": "How many ATMs does our client operate compared to the Indian total and top competitors?",
      "a": "India has roughly 3 lakh (300,000) ATMs. Our client has only 10,000 ATMs (3.3% share), whereas the top three peers operate 30,000 (10%), 22,500 (7.5%), and 21,000 (7%) ATMs.",
      "why": "Tests whether an undersized ATM network forces customers onto competitor machines."
    },
    {
      "q": "Have new ATM deployments reduced off-us fees, or are operational glitches keeping machines offline?",
      "a": "The bank placed many new ATMs in rural areas, but a large share fail to stay operational because they were installed without testing network connectivity.",
      "why": "Pinpoints whether the bottleneck is raw machine count or effective uptime and site selection."
    }
  ],
  "frameworkUsed": "Ansoff Growth Matrix (Penetration / Market Dev / Product Dev / Diversification) + Inorganic M&A",
  "coreEquation": "Revenue Growth = (Existing Customers × Frequency × AOV) + New Markets + New Products + Inorganic",
  "strategyOverview": "Diagnose the Public Sector Bank's ₹100+ Cr ATM payout losses by decomposing Payout Fee = Customers × Off-Us Share (40%) × Frequency × Flat Fee: uncover both a footprint deficit (3.3% ATM share vs 6% customer share) and severe rural ATM downtime caused by untested telecom connectivity, then restore uptime via dual-SIM/load balancing, optimize placement, and migrate low-value cash transactions to digital/UPI rails.",
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
      "phase": "Scoping",
      "speaker": "Interviewer",
      "kind": "prompt",
      "detail": "Your client is a leading public sector bank in India losing over ₹100 crore a year on inter-bank ATM payout fees. How would you identify why this is happening and cut the losses?"
    },
    {
      "phase": "Scoping",
      "speaker": "Candidate",
      "kind": "question",
      "detail": "To understand the scale and drivers, I can decompose total payout fees into: Number of Customers × % of Transactions on Rival ATMs × Monthly Transaction Frequency × Net Interchange Fee. Can you share our retail market share, off-us usage rate, and whether peers face similar net outflows?",
      "reasoning": "Decomposing payout fees into volume, off-us ratio, and fee rate isolates whether the bank suffers from excess usage or missing ATM access."
    },
    {
      "phase": "Structure",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "ATM interchange is a zero-sum game across banks. Our client holds 6% retail share pan-India, and its customers use other banks' ATMs 40% of the time across an average of 4 transactions per month. Why don't you examine our ATM footprint versus peers?"
    },
    {
      "phase": "Structure",
      "speaker": "Candidate",
      "kind": "framework",
      "detail": "Sure—if we have 6% of retail customers but far fewer than 6% of ATMs, our customers naturally default to competitors' machines while rival customers rarely use ours. How many ATMs does India have, and how many do we and the top three players operate?",
      "reasoning": "Comparing ATM share directly against customer share tests the structural supply-demand imbalance in physical touchpoints."
    },
    {
      "phase": "Investigation",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "India has 3 lakh ATMs. We operate 10,000 ATMs (3.3% share), while the top three competitors have 30,000 (10%), 22,500 (7.5%), and 21,000 (7%). Moreover, even after our client deployed new ATMs, many fail to operate reliably—either failing to power on or failing mid-transaction once powered on."
    },
    {
      "phase": "Root Cause",
      "speaker": "Candidate",
      "kind": "root-cause",
      "detail": "That points to two distinct layers of failure. First, our 3.3% ATM share is nearly half our 6% customer share, creating a structural off-us imbalance. Second, uptime failure breaks into site-readiness issues (power backup, security, maintenance) and transaction-execution issues (software, hardware, cash-outs, and bank-server network connectivity). Because ATMs must authenticate balances with the core server in real time, poor network links render newly deployed machines useless.",
      "reasoning": "Separating power/maintenance readiness from server-connectivity execution lets us diagnose why even brand-new ATMs generate zero on-us transactions.",
      "causes": [
        "Footprint deficit: 3.3% ATM share vs. 6% retail customer share drives 40% off-us usage",
        "Rural ATMs deployed without prior telecom/network testing fail server authentication",
        "Power, cash-refill, and maintenance gaps compound effective ATM downtime"
      ]
    },
    {
      "phase": "Solution",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "Spot on—the bank deployed many new ATMs in rural areas without testing telecom connectivity, causing chronic outages. What prioritized solutions would you propose?"
    },
    {
      "phase": "Synthesis",
      "speaker": "Candidate",
      "kind": "synthesis",
      "detail": "We should tackle this in three waves. Immediately (P0), audit rural ATM downtime and switch failing sites to stronger dual-SIM/VSAT network providers with automated load balancing to restore uptime above 98%. Next (P1), redeploy low-traffic urban machines to high off-us customer clusters using transaction heatmaps, and enforce pre-launch connectivity and cash-SLA audits. Finally (P2), reduce total ATM dependency by nudging small-ticket cash withdrawals toward UPI merchant payments and Aadhaar-enabled Business Correspondents.",
      "reasoning": "Fixing uptime on already-installed rural ATMs yields immediate on-us transaction recovery at far lower capex than buying new machines.",
      "causes": [
        "Redundant network providers and load balancing unlock stranded rural ATM capacity",
        "UPI and micro-ATM migration structurally lowers recurring cash-withdrawal demand"
      ]
    }
  ],
  "recommendations": [
    "P0: Audit all offline rural ATMs and migrate failing sites to reliable dual-carrier/VSAT telecom links with automated server load balancing to raise fleet uptime above 98%.",
    "P1: Use off-us transaction heatmaps to relocate underperforming ATMs to high-density customer zones and mandate pre-installation connectivity, power, and cash-replenishment SLAs.",
    "P2: Deflect low-value ATM withdrawals toward UPI Lite, QR merchant payments, and Aadhaar-enabled Business Correspondent touchpoints while tracking off-us % and net payout fee savings."
  ],
  "metricsAndGuardrails": {
    "northStar": "Incremental ARR / Net Revenue Growth (Public Sector Bank)",
    "leading": [
      "Retention & cross-sell attach rate",
      "New channel / geo revenue share"
    ],
    "guardrails": [
      "CAC Payback & Gross Margin %",
      "Churn in core legacy segments"
    ]
  },
  "synthesisScript": "The Public Sector Bank's ₹100+ crore ATM payout loss stems from a 3.3% ATM share trailing its 6% retail customer base, compounded by severe rural ATM downtime from deploying machines without testing telecom connectivity. By immediately upgrading failing rural sites to redundant network providers with load balancing, reallocating fleet placement via off-us heatmaps, and migrating small cash transactions to UPI and micro-ATMs, the bank can sharply reduce its 40% off-us rate.",
  "interviewerTrap": "Jumping straight to risky Diversification (unrelated new products in new markets) before capturing low-hanging Penetration in the core!",
  "variations": [
    {
      "question": "How would your recommendation change if Public Sector Bank had half the timeline or budget?",
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
  "id": "cm-cons-ma-disney-star-wars",
  "title": "Disney Buying Star Wars (Lucasfilm)",
  "company": "Disney",
  "track": "Consulting",
  "category": "M&A",
  "difficulty": 2,
  "isStarter": true,
  "tags": [
    "M&A",
    "Media & IP",
    "Synergies"
  ],
  "prompt": "Disney acquired Lucasfilm (Star Wars) six years ago for $6 billion. Evaluate whether this was a good or bad strategic and financial decision, including sizing the theatrical and merchandise potential in India as a deep-dive illustration.",
  "clarifyingQuestions": [
    {
      "q": "Should we assess the acquisition globally on full strategic and synergy value, or focus our quantitative revenue sizing on a specific geography first?",
      "a": "Confirm that strategic targets were met, and focus your quantitative box-office and merchandise sizing exercise on the Indian market to test local monetization.",
      "why": "Allows us to pair a complete global M&A evaluation framework with a crisp, bounded quantitative deep-dive on India."
    },
    {
      "q": "How many Star Wars films were released during this six-year window, and what theatre baseline should we use for India?",
      "a": "Assume 2 major Star Wars theatrical releases in the window and roughly 1,000 multiplex-capable theatres across Tier 1–3 Indian cities.",
      "why": "Fixes the release cadence and cinema footprint inputs needed for an exact theatrical revenue calculation."
    },
    {
      "q": "Beyond movie tickets and merchandise, which other monetization engines sit inside Disney's Star Wars ecosystem?",
      "a": "Licensing/streaming rights (including Disney+), theme park attractions, and live fan events alongside consumer merchandise.",
      "why": "Ensures our overall $6B verdict accounts for multi-engine synergies rather than judging the deal solely on box office."
    }
  ],
  "frameworkUsed": "M&A Evaluation (Strategic Fit + Standalone Value + Revenue/Cost Synergies − Deal Price & Risks)",
  "coreEquation": "Deal NPV = PV(Lucasfilm Standalone + Parks/Merch/Streaming Synergies) − Acquisition Price − Integration Risk",
  "strategyOverview": "Evaluate Disney's $6B acquisition of Star Wars (Lucasfilm) across Strategic Fit (capturing the 8–16 male/sci-fi demographic alongside Pixar and Marvel), Standalone Box Office & India Revenue Sizing (2 releases across ~1,000 Indian theatres plus urban affluent merchandise funnel), Multi-Engine Synergies (Parks, Consumer Products, Disney+), and Risks (fan fatigue and overpayment).",
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
      "phase": "Scoping",
      "speaker": "Interviewer",
      "kind": "prompt",
      "detail": "Disney bought Lucasfilm and the Star Wars franchise six years ago for $6 billion. Was it a good decision or a bad decision?"
    },
    {
      "phase": "Scoping",
      "speaker": "Candidate",
      "kind": "question",
      "detail": "To evaluate an M&A deal, I would check four pillars: strategic fit, standalone franchise cash flows, multi-engine synergies across parks, merchandising, and streaming, and integration/franchise-fatigue risks. Before sizing revenues, were strategic targets met, and should I size global revenues or focus on a specific region first?",
      "reasoning": "Clarifying geographic scope and strategic goals keeps a broad $6B M&A evaluation structured and quantitatively grounded."
    },
    {
      "phase": "Structure",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "Assume strategic fit targets were achieved—Star Wars filled Disney's gap in boys and sci-fi fans alongside Pixar and Marvel. For the quantitative exercise, restrict your revenue sizing to India, where 2 Star Wars films released over the period. Focus first on theatrical ticket sales."
    },
    {
      "phase": "Structure",
      "speaker": "Candidate",
      "kind": "framework",
      "detail": "In India, Star Wars earns across three main buckets: theatrical tickets, consumer merchandise, and licensing/streaming plus events. For theatrical ticket revenue across 2 films, I'll compute: Theatres × % Screening Star Wars × Screens/Theatre × Shows/Day × Seats/Screen × Occupancy × Ticket Price × Screening Days. Estimating roughly 50 theatres per Tier-1 city, 15 per Tier-2, and 5 per Tier-3 gives a base footprint—do we have a benchmark theatre count to use?",
      "reasoning": "Building a supply-side cinema capacity equation avoids wild top-down guesses on Hollywood niche penetration in India."
    },
    {
      "phase": "Investigation",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "Good structure—use 1,000 relevant theatres in India. Run your assumptions on screens, shows, occupancy, and ticket price, and then explain how you would size Indian Star Wars merchandise demand."
    },
    {
      "phase": "Root Cause",
      "speaker": "Candidate",
      "kind": "hypothesis",
      "detail": "With 1,000 theatres, assuming 40% screen Star Wars (400 theatres) × 3 screens × 4 shows/day = 4,800 shows/day. At 300 seats, 65% average occupancy, and ₹250 ticket price, daily gross is ₹23.4 crore—roughly ₹325–350 crore (~$40–45M) over an effective 2-week run per film, or ~$85M across two movies. For merchandise, I filter India's population to the 30% urban base, isolate upper-middle and affluent tiers (~60% of urban), focus on ages 5–30, apply a 60% Star Wars viewership rate and 50% merch propensity—yielding modest emerging-market revenue compared to mature Western markets.",
      "reasoning": "Testing India's unit math demonstrates that emerging theatrical and merch markets alone cannot justify a $6B deal without global flywheel synergies.",
      "causes": [
        "India theatrical gross (~$85M across 2 films) is a minor contributor to $6B payback",
        "Urban income and age filters narrow Indian merchandise buyers to an affluent niche",
        "Global box office plus Disney Parks, Toys, and Disney+ synergies carry the $6B ROI"
      ]
    },
    {
      "phase": "Solution",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "That India math is clear. Stepping back to the global $6 billion price tag, what is your final verdict on whether the acquisition was a good decision, and what risks must Disney manage?"
    },
    {
      "phase": "Synthesis",
      "speaker": "Candidate",
      "kind": "synthesis",
      "detail": "Overall, it was a strong strategic and financial acquisition—provided Disney manages franchise fatigue. While individual emerging markets like India contribute modestly today (~$85M box office plus niche urban merch), global theatrical releases easily generate multi-billion-dollar gross, while Star Wars Galaxy's Edge theme park lands, global consumer merchandising, and Disney+ streaming series (like The Mandalorian) create durable, high-margin annuity cash flows that surpass the $6B outlay. Going forward, Disney should pace theatrical releases carefully and lean into high-engagement Disney+ series and localized India digital merch licensing.",
      "reasoning": "Connecting local market sizing back to Disney's global flywheel explains why high-multiple IP deals pay off when monetized across parks, retail, and streaming.",
      "causes": [
        "Multi-engine Disney flywheel (Parks, Merch, Disney+) multiplies standalone film ROI",
        "Over-saturation of theatrical releases risks fan fatigue and brand dilution"
      ]
    }
  ],
  "recommendations": [
    "P0: Continue monetizing Star Wars as a multi-engine flywheel—pairing tentpole films with high-retention Disney+ series, Galaxy's Edge park experiences, and high-margin global toy/apparel licensing.",
    "P1: Pace theatrical releases (every 2–3 years) and enforce cohesive creative roadmaps to prevent franchise fatigue and protect global box-office multiples.",
    "P2: In growth markets like India, prioritize asset-light e-commerce merchandise partnerships and Disney+ regional dubbing over heavy physical retail capex, tracking global franchise ROIC and Disney+ subscriber churn."
  ],
  "metricsAndGuardrails": {
    "northStar": "Risk-Adjusted Post-Merger NPV / ROIC (Disney)",
    "leading": [
      "Cost synergy realization (overhead/procurement)",
      "Cross-sell retention at Month 6/12"
    ],
    "guardrails": [
      "Key talent & customer attrition",
      "Debt leverage / integration cost overrun"
    ]
  },
  "synthesisScript": "Disney's $6 billion acquisition of Lucasfilm (Star Wars) was a good decision because it filled a critical 8–16 male/sci-fi portfolio gap and unlocked multi-engine cash flows across global box office, theme parks, toys, and Disney+. While emerging markets like India contribute modestly on standalone tickets (~$85M across two films) and affluent urban merchandise, global franchise synergies comfortably clear the $6B hurdle—provided Disney paces theatrical output to avoid fan fatigue.",
  "interviewerTrap": "Evaluating the deal ONLY on movie box-office ticket sales—when Disney makes the bulk of its high-margin ROI on theme parks, licensing, and merchandise!",
  "variations": [
    {
      "question": "How would your recommendation change if Disney had half the timeline or budget?",
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
  "id": "cm-cons-34-acquisition-of-a-clothing-firm",
  "title": "Acquisition of a Clothing Firm",
  "company": "Apparel Acquirer",
  "track": "Consulting",
  "category": "M&A",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "M&A",
    "Consulting"
  ],
  "prompt": "Your client is a large multinational clothing brand seeking to expand its luxury portfolio and achieve economies of scale by acquiring a smaller, locally popular apparel firm. What key factors should the client evaluate to determine whether to pursue this acquisition and ensure smooth integration?",
  "clarifyingQuestions": [
    {
      "q": "What is the client's current business model and channel mix, and what specific strategic objective drives this acquisition?",
      "a": "The client operates across multiple apparel segments through both brick-and-mortar stores and an e-commerce platform that contributes 30% of total sales. Their primary goal is to expand their luxury line, targeting an ROI of around 15%.",
      "why": "Establishes the acquirer's omnichannel capabilities and minimum financial hurdle rate before evaluating target fit."
    },
    {
      "q": "What is the target company's market positioning, store footprint, and current valuation?",
      "a": "The target is a well-regarded luxury brand operating 50 brick-and-mortar stores primarily in northern India, valued at INR 500 crore, with strong personalized service but limited geographic reach.",
      "why": "Quantifies the INR 500 crore deal size and reveals the target's core value drivers—store-level luxury experience and untapped geographic or digital scale."
    },
    {
      "q": "Does the client intend to absorb the target into its existing mass-market label or preserve it as a standalone luxury brand?",
      "a": "The client aims to keep the target's distinct luxury brand identity and personalized in-store service while leveraging its own supply chain and e-commerce engine.",
      "why": "Clarifies the post-merger operating model so synergy estimates do not erode high-end brand equity."
    }
  ],
  "frameworkUsed": "Strategic Fit + Standalone Valuation + Synergies (Revenue & Cost) − Price & Integration Risks",
  "coreEquation": "Deal Value = Standalone Value + PV(Cost + Revenue Synergies) − Purchase Price − Integration Risk",
  "strategyOverview": "Approach Acquisition of a Clothing Firm (Apparel Acquirer) using an M&A structure: start by confirming the 15% ROI hurdle and brand preservation scope, decompose the problem along Strategic Fit + Standalone Valuation + Synergies (Revenue & Cost) − Price & Integration Risks, and conclude with prioritized P0–P2 actions and luxury guardrails.",
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
      "phase": "Scoping",
      "speaker": "Interviewer",
      "kind": "prompt",
      "detail": "Your client is a large multinational clothing brand seeking to expand its luxury portfolio and achieve economies of scale by acquiring a smaller, locally popular apparel firm. What key factors should the client evaluate to ensure a sound acquisition and smooth integration?"
    },
    {
      "phase": "Scoping",
      "speaker": "Candidate",
      "kind": "question",
      "detail": "Before structuring my analysis, I would like to clarify the deal context. What is the client's current channel mix and target ROI, and what are the target's footprint, niche, and valuation?",
      "reasoning": "Grounding the evaluation in channel capabilities, hurdle rates, and target scale prevents generic M&A checklists and anchors synergy sizing."
    },
    {
      "phase": "Structure",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "The client operates brick-and-mortar stores alongside an e-commerce platform driving 30% of total sales, and expects roughly a 15% ROI. The target is a luxury apparel brand with 50 stores mainly in northern India, valued at INR 500 crore, with strong personalized service but constrained regional growth. How would you structure your evaluation?"
    },
    {
      "phase": "Structure",
      "speaker": "Candidate",
      "kind": "framework",
      "detail": "I will evaluate the deal across four pillars: Strategic Fit and Brand Alignment, Standalone Economics at the INR 500 crore valuation, Revenue and Cost Synergies—specifically e-commerce expansion and manufacturing scale—and Pre-Deal and Integration Risks spanning legal, operational, and pricing dimensions. Let's start with synergies and operational risks.",
      "reasoning": "Separating brand-sensitive revenue synergies from back-end cost synergies lets us test whether scale economies can be captured without diluting luxury positioning."
    },
    {
      "phase": "Investigation",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "That structure makes sense. On the surface, the client wants to scale production using its larger supply chain while keeping the target's personalized store service intact. Where could friction or value leakage arise as they execute that plan?"
    },
    {
      "phase": "Root Cause",
      "speaker": "Candidate",
      "kind": "root-cause",
      "detail": "Three major risks threaten the 15% ROI target. First, pre-deal overvaluation or incomplete legal due diligence on store leases and IP at INR 500 crore could lock in an excessive multiple. Second, pushing mass-production efficiencies onto luxury SKUs risks quality drift and alienates high-end buyers. Third, pricing discrepancies or forced cross-branding with mass-market lines could erode the target's luxury perception.",
      "reasoning": "Tracing risks across valuation, manufacturing, and commercial positioning isolates the exact failure modes that break luxury apparel acquisitions.",
      "causes": [
        "Pre-acquisition overvaluation and lease/IP diligence gaps at INR 500 crore",
        "Quality dilution from forcing mass-market production processes onto luxury SKUs",
        "Brand and pricing misalignment eroding personalized brick-and-mortar positioning"
      ]
    },
    {
      "phase": "Solution",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "Those are sharp diagnostic points. Given those trade-offs, how should the client structure the integration to capture scale and digital upside while protecting the luxury brand?"
    },
    {
      "phase": "Synthesis",
      "speaker": "Candidate",
      "kind": "synthesis",
      "detail": "I recommend proceeding only after ring-fencing luxury brand autonomy and validating legal/lease diligence on the INR 500 crore valuation. First, integrate back-end logistics, fabric procurement, and IT while keeping design, tailoring, and store staffing standalone to prevent quality drift. Second, selectively launch the luxury collection on the client's e-commerce channel (30% of sales) to unlock national demand outside northern India, tracking gross margin, flagship store NPS, and 15% ROI payback as strict guardrails.",
      "reasoning": "Sequencing back-office and digital integration ahead of physical store changes captures measurable synergies without jeopardizing core customer loyalty.",
      "causes": [
        "Back-end procurement scale without altering front-end luxury craftsmanship",
        "Omnichannel expansion via existing 30% e-commerce platform beyond northern India"
      ]
    }
  ],
  "recommendations": [
    "P0 — Ring-fence brand equity and complete thorough pre-deal diligence: Audit store leases, IP, and supplier contracts before finalizing the INR 500 crore price, and preserve the target's standalone luxury branding and personalized store service.",
    "P1 — Unlock supply chain and omnichannel revenue synergies: Consolidate back-end logistics and raw-material procurement while launching curated luxury SKUs on the client's e-commerce platform (30% of sales) to reach buyers beyond northern India.",
    "P2 — Protect unit economics with quality and retention guardrails: Tie management earn-outs to flagship store NPS and gross margin stability while retaining master artisans and store managers to prevent quality drift."
  ],
  "metricsAndGuardrails": {
    "northStar": "Risk-Adjusted Post-Merger NPV / ROIC (Apparel Acquirer)",
    "leading": [
      "Cost synergy realization (overhead/procurement)",
      "Cross-sell retention at Month 6/12"
    ],
    "guardrails": [
      "Key talent & customer attrition",
      "Debt leverage / integration cost overrun"
    ]
  },
  "synthesisScript": "For Apparel Acquirer's acquisition of the INR 500 crore northern India luxury brand, I recommend proceeding with ring-fenced brand autonomy so back-end supply chain scale and the client's 30% e-commerce channel unlock national growth without diluting store-level luxury quality. Success should be tracked against the 15% ROI hurdle while enforcing strict guardrails on product quality, pricing integrity, and flagship store NPS.",
  "interviewerTrap": "Assuming optimistic cross-sell Revenue Synergies justify any price while ignoring Integration, Culture, and Overpayment risks!",
  "variations": [
    {
      "question": "How would your recommendation change if Apparel Acquirer had half the timeline or budget?",
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
  "id": "cm-cons-ma-edtech-merger",
  "title": "Merger of Two Ed-Tech Firms",
  "company": "Ed-Tech Platforms",
  "track": "Consulting",
  "category": "M&A",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "M&A",
    "Consulting"
  ],
  "prompt": "Your client is an online education platform (Platform A) considering the acquisition of a competing platform (Platform B). How should Platform A evaluate this acquisition and decide how to proceed?",
  "clarifyingQuestions": [
    {
      "q": "What is Platform A's primary strategic objective for acquiring Platform B—cost consolidation, user acquisition, or course portfolio expansion?",
      "a": "The primary goals are to accelerate top-line revenue growth and expand Platform A's course portfolio into complementary learning verticals.",
      "why": "Determines whether revenue synergies from cross-selling or cost synergies from platform consolidation should anchor the valuation."
    },
    {
      "q": "Are there regulatory thresholds or overlapping user segments that could trigger antitrust scrutiny?",
      "a": "Both platforms hold strong positions in overlapping test-prep and online learning segments, so combined market share could attract competition regulator review.",
      "why": "Flags deal-closing timeline risk and potential regulatory hurdles early in the M&A screen."
    },
    {
      "q": "What is the current financial baseline of both platforms, and what revenue or cost synergies are projected post-merger?",
      "a": "Standalone EBITDA is ₹50 crore on ₹200 crore revenue for Platform A, and ₹30 crore on ₹150 crore revenue for Platform B; post-merger projections show ₹420 crore revenue and ₹140 crore EBITDA.",
      "why": "Provides the exact P&L inputs needed to validate whether synergy math justifies acquisition price and integration risk."
    }
  ],
  "frameworkUsed": "Strategic Fit + Standalone Valuation + Synergies (Revenue & Cost) − Price & Integration Risks",
  "coreEquation": "Deal Value = Standalone Value + PV(Cost + Revenue Synergies) − Purchase Price − Integration Risk",
  "strategyOverview": "Approach Merger of Two Ed-Tech Firms (Ed-Tech Platforms) using an M&A structure: evaluate Non-Financial Fit (culture, talent, regulatory/antitrust risk) alongside Financial Synergies (₹80 Cr combined EBITDA scaling to ₹140 Cr post-merger), and mitigate tech-stack integration and overvaluation risks.",
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
      "phase": "Scoping",
      "speaker": "Interviewer",
      "kind": "prompt",
      "detail": "Your client is an online education platform, Platform A, considering acquiring competing Platform B. How should they evaluate this deal and decide how to proceed?"
    },
    {
      "phase": "Scoping",
      "speaker": "Candidate",
      "kind": "question",
      "detail": "To frame the evaluation accurately, could you clarify Platform A's primary strategic goal for buying Platform B, and whether we should examine both financial and non-financial dimensions?",
      "reasoning": "Confirming strategic intent and evaluation scope ensures we weigh qualitative integration and regulatory hurdles alongside synergy math."
    },
    {
      "phase": "Structure",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "The primary goals are boosting revenue and expanding Platform A's course portfolio. Please begin by structuring the non-financial considerations before we dive into the P&L numbers."
    },
    {
      "phase": "Structure",
      "speaker": "Candidate",
      "kind": "framework",
      "detail": "I will split the analysis into Non-Financial Fit and Financial Feasibility. On the non-financial side, we must assess cultural and organizational alignment, overlapping educator skill sets, and external PESTEL factors—especially antitrust scrutiny if combined market share looks monopolistic. On the financial side, we need to quantify cross-selling revenue uplift, overhead consolidation, and tech-integration costs.",
      "reasoning": "Addressing regulatory and cultural viability first avoids spending diligence effort on deals that cannot clear competition review or integrate cleanly."
    },
    {
      "phase": "Investigation",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "Good breakdown. Here are the financials in ₹ crore: Platform A earns ₹200 revenue with ₹40 fixed costs, ₹80 variable costs (40%), and ₹30 overheads, yielding ₹50 EBITDA. Platform B earns ₹150 revenue with ₹35 fixed costs, ₹60 variable costs (40%), and ₹25 overheads, yielding ₹30 EBITDA. Post-merger projections show ₹420 revenue, ₹68 fixed costs, ₹168 variable costs (40%), and ₹44 overheads. What does this tell us?"
    },
    {
      "phase": "Root Cause",
      "speaker": "Candidate",
      "kind": "root-cause",
      "detail": "Standalone combined revenue is ₹350 crore and combined EBITDA is ₹80 crore. Post-merger, revenue expands by ₹70 crore (+20%) to ₹420 crore via cross-selling, while fixed costs drop by ₹7 crore and overheads drop by ₹11 crore. That lifts post-merger EBITDA to ₹140 crore—1.75x or 75% higher than standalone combined EBITDA—driven primarily by cross-sell operating leverage and ₹18 crore in fixed-overhead savings.",
      "reasoning": "Decomposing the EBITDA bridge from ₹80 crore to ₹140 crore reveals whether profit growth relies on realistic cost cuts or aggressive revenue assumptions.",
      "causes": [
        "₹70 crore (+20%) cross-sell revenue synergy across expanded course catalog",
        "₹18 crore fixed and overhead cost elimination (fixed costs ₹75 Cr to ₹68 Cr; overheads ₹55 Cr to ₹44 Cr)",
        "Key downside risks from overvaluation, antitrust delays, and LMS tech mismatch"
      ]
    },
    {
      "phase": "Solution",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "The 75% EBITDA uplift is compelling on paper. What major execution risks could erode those synergies, and how should Platform A proceed?"
    },
    {
      "phase": "Synthesis",
      "speaker": "Candidate",
      "kind": "synthesis",
      "detail": "I recommend proceeding with the acquisition only if diligence confirms low student overlap for the ₹70 crore cross-sell target and clears antitrust risk. Platform A should cap purchase price to avoid overpaying for unverified synergies, stage LMS tech migration behind a unified single sign-on layer to prevent churn, and lock in key Platform B educators with retention incentives while tracking CAC payback and course completion rates.",
      "reasoning": "Decoupling near-term commercial cross-selling from risky back-end tech migration protects student experience while capturing immediate EBITDA upside.",
      "causes": [
        "Antitrust clearance and price discipline against projected ₹140 crore EBITDA",
        "Staged LMS integration to avoid technical disruption and student churn"
      ]
    }
  ],
  "recommendations": [
    "P0 — Stress-test the ₹70 crore cross-sell uplift and pre-clear antitrust risk: Validate unique student overlap before signing binding terms and initiate competition-regulator pre-consultation to prevent closing delays.",
    "P1 — Sequence overhead consolidation ahead of back-end tech migration: Capture the ₹18 crore in duplicate fixed and overhead savings over two quarters while connecting both platforms via single sign-on before merging core LMS codebases.",
    "P2 — Protect educator and learner retention: Deploy retention bonuses for Platform B's top instructors and monitor CAC payback, cross-sell conversion, and course completion rates as post-merger guardrails."
  ],
  "metricsAndGuardrails": {
    "northStar": "Risk-Adjusted Post-Merger NPV / ROIC (Ed-Tech Platforms)",
    "leading": [
      "Cost synergy realization (overhead/procurement)",
      "Cross-sell retention at Month 6/12"
    ],
    "guardrails": [
      "Key talent & customer attrition",
      "Debt leverage / integration cost overrun"
    ]
  },
  "synthesisScript": "For Ed-Tech Platforms, acquiring Platform B lifts combined EBITDA by 75% from ₹80 crore to ₹140 crore through ₹70 crore in cross-sell revenue and ₹18 crore in fixed-overhead synergies. I recommend proceeding with disciplined valuation caps, early antitrust pre-clearance, and a phased LMS integration that protects student retention and educator continuity.",
  "interviewerTrap": "Assuming optimistic cross-sell Revenue Synergies justify any price while ignoring Integration, Culture, and Overpayment risks!",
  "variations": [
    {
      "question": "How would your recommendation change if Ed-Tech Platforms had half the timeline or budget?",
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
  "id": "cm-cons-36-demerger-of-two-business-units",
  "title": "Demerger of Two Business Units",
  "company": "Industrial Conglomerate",
  "track": "Consulting",
  "category": "M&A",
  "difficulty": 4,
  "isStarter": false,
  "tags": [
    "M&A",
    "Consulting"
  ],
  "prompt": "Your client is a diversified conglomerate debating whether to separate its mature traditional services unit from its fast-growing digital division to unlock future growth. How would you evaluate this demerger decision?",
  "clarifyingQuestions": [
    {
      "q": "How do the two business units currently perform financially, and what role does each play in the overall portfolio?",
      "a": "The traditional services unit is mature, profitable, and generates stable cash flow, whereas the digital division is growing rapidly but remains investment-heavy with thin margins.",
      "why": "Clarifies the capital-allocation dynamic—specifically whether the cash-cow unit is subsidizing the growth engine."
    },
    {
      "q": "What operational or commercial linkages exist between the two units today?",
      "a": "They share the corporate brand and have overlapping enterprise customers, though services prioritizes efficiency and reliability while digital relies on rapid experimentation.",
      "why": "Helps quantify potential revenue dis-synergies and brand dilution if the two entities separate completely."
    },
    {
      "q": "What is management's primary objective behind considering a demerger—valuation re-rating, capital raising, or operational agility?",
      "a": "Leadership wants to unlock long-term growth and ensure both units attract the right capital and talent without holding each other back.",
      "why": "Aligns evaluation criteria with investor valuation multiples, governance autonomy, and standalone funding viability."
    }
  ],
  "frameworkUsed": "Strategic Fit + Standalone Valuation + Synergies (Revenue & Cost) − Price & Integration Risks",
  "coreEquation": "Deal Value = Standalone Value + PV(Cost + Revenue Synergies) − Purchase Price − Integration Risk",
  "strategyOverview": "Approach Demerger of Two Business Units (Industrial Conglomerate) using an M&A / portfolio separation structure: weigh strategic conflict, conglomerate valuation discount, and leadership bandwidth against lost brand synergies and digital funding risk, culminating in a phased carve-out before full spin-off.",
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
      "phase": "Scoping",
      "speaker": "Interviewer",
      "kind": "prompt",
      "detail": "We are debating whether separating our traditional services unit from our digital division is the right move for future growth. How would you approach this decision?"
    },
    {
      "phase": "Scoping",
      "speaker": "Candidate",
      "kind": "question",
      "detail": "Before recommending a structural move, could you describe the financial profile of each unit and how tightly they share customers, brand, or operating resources today?",
      "reasoning": "Understanding cash-flow dependency and commercial overlap determines whether separation creates net value or destroys shared synergies."
    },
    {
      "phase": "Structure",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "The services unit is our profitable, cash-generative backbone in a mature market, whereas the digital division is fast-growing, investment-heavy, and thin-margin. They share customers and the corporate brand, but services runs on efficiency while digital needs agility. How do you evaluate separating them?"
    },
    {
      "phase": "Structure",
      "speaker": "Candidate",
      "kind": "framework",
      "detail": "I will weigh the value unlocked by separation—Strategic Autonomy, Investor Valuation Re-rating, and Talent/Leadership Focus—against the separation costs, specifically Loss of Shared Commercial Synergies and Standalone Funding Risk for the digital division.",
      "reasoning": "A balanced value-creation vs. dis-synergy tree directly tests whether structural separation solves real friction or creates funding vulnerability."
    },
    {
      "phase": "Investigation",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "Walk me through the core tensions of keeping them together versus the biggest risks if we spin off the digital unit outright."
    },
    {
      "phase": "Root Cause",
      "speaker": "Candidate",
      "kind": "root-cause",
      "detail": "Keeping them combined creates three structural frictions: strategic conflict between efficiency and bold capex, a conglomerate valuation discount where slow services growth masks digital's upside, and diluted leadership bandwidth. However, an abrupt full spin-off poses two major risks: losing cross-sell synergies across shared enterprise accounts and exposing the thin-margin digital unit to external capital markets before it can self-fund.",
      "reasoning": "Contrasting internal governance friction against external financing risk explains why neither status quo nor an overnight spin-off is optimal.",
      "causes": [
        "Strategic and capital-allocation conflict between mature efficiency and digital experimentation",
        "Conglomerate discount and diluted executive bandwidth under one roof",
        "Funding gap and enterprise cross-sell loss if digital is spun off prematurely"
      ]
    },
    {
      "phase": "Solution",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "Given those competing risks, how would you resolve the dilemma in practice?"
    },
    {
      "phase": "Synthesis",
      "speaker": "Candidate",
      "kind": "synthesis",
      "detail": "I recommend a two-phase separation rather than an immediate spin-off. In Phase 1, execute a partial equity carve-out—listing a minority stake in the digital division—to establish a standalone growth valuation, attract specialized tech talent, and raise external capital while preserving commercial cross-sell SLAs with the parent. In Phase 2, proceed to a full spin-off once digital hits cash-flow stability, using customer retention and standalone SG&A as guardrails.",
      "reasoning": "A staged carve-out captures valuation visibility and governance autonomy immediately while cushioning digital's cash burn until scale.",
      "causes": [
        "Phase 1 minority carve-out unlocks valuation multiple and growth capital",
        "Phase 2 full spin-off deferred until digital achieves operating cash-flow stability"
      ]
    }
  ],
  "recommendations": [
    "P0 — Execute a Phase 1 minority carve-out of the digital division: List a 15–20% stake to establish a distinct growth valuation, fund digital capex externally, and align executive equity incentives without severing parent ties.",
    "P1 — Lock in arm's-length commercial and brand SLAs: Formalize multi-year customer referral and shared-brand agreements so neither unit loses enterprise cross-sell momentum during partial separation.",
    "P2 — Trigger a Phase 2 full spin-off on cash-flow milestones: Complete full legal separation only once the digital division reaches positive operating cash flow, monitoring enterprise account retention and duplicate SG&A overhead."
  ],
  "metricsAndGuardrails": {
    "northStar": "Risk-Adjusted Post-Merger NPV / ROIC (Industrial Conglomerate)",
    "leading": [
      "Cost synergy realization (overhead/procurement)",
      "Cross-sell retention at Month 6/12"
    ],
    "guardrails": [
      "Key talent & customer attrition",
      "Debt leverage / integration cost overrun"
    ]
  },
  "synthesisScript": "For Industrial Conglomerate, keeping both units combined creates strategic conflict, leadership dilution, and a conglomerate valuation discount, yet an immediate spin-off risks stranding the thin-margin digital unit without internal cash funding or shared customer access. I recommend a phased separation starting with a minority digital carve-out paired with commercial SLAs, followed by a full spin-off once digital achieves standalone cash-flow stability.",
  "interviewerTrap": "Assuming optimistic cross-sell Revenue Synergies justify any price while ignoring Integration, Culture, and Overpayment risks!",
  "variations": [
    {
      "question": "How would your recommendation change if Industrial Conglomerate had half the timeline or budget?",
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
  "id": "cm-cons-37-superburger-m-a-evaluation",
  "title": "SuperBurger M&A Evaluation",
  "company": "SuperBurger",
  "track": "Consulting",
  "category": "M&A",
  "difficulty": 4,
  "isStarter": false,
  "tags": [
    "M&A",
    "Consulting"
  ],
  "prompt": "SuperBurger, the world’s fourth-largest fast-food chain with 85% franchised stores, is considering acquiring Tasty Donuts, a growing U.S. and international doughnut producer. Should SuperBurger proceed with the acquisition, and what key synergies and risks should guide the decision?",
  "clarifyingQuestions": [
    {
      "q": "What is the current size and projected growth rate of the U.S. doughnut market, and how do both companies compare on organic growth?",
      "a": "U.S. doughnut consumption is $10 per person across 300 million people ($3 billion total) and is projected to double to $6 billion in five years; SuperBurger grows 10% annually while Tasty Donuts grows 15%.",
      "why": "Establishes category tailwinds and confirms whether Tasty Donuts brings genuine above-market growth momentum."
    },
    {
      "q": "What is SuperBurger's strategic rationale—are competitors already diversifying into adjacent dayparts like breakfast and snacks?",
      "a": "Yes, major fast-food peers have expanded into coffee, bakery, and snacks through partnerships, whereas SuperBurger has only executed small acquisitions to date.",
      "why": "Highlights both the competitive urgency to capture breakfast and snack occasions and SuperBurger's limited large-M&A integration capability."
    },
    {
      "q": "What post-acquisition expansion targets is management assuming for Tasty Donuts in the U.S.?",
      "a": "Management aims to double Tasty Donuts' U.S. market share in five years and expand its U.S. footprint 2.5x from 1,000 to 2,500 stores.",
      "why": "Provides the exact store-count and market-share benchmark required to stress-test unit-level feasibility."
    }
  ],
  "frameworkUsed": "Strategic Fit + Standalone Valuation + Synergies (Revenue & Cost) − Price & Integration Risks",
  "coreEquation": "Deal Value = Standalone Value + PV(Cost + Revenue Synergies) − Purchase Price − Integration Risk",
  "strategyOverview": "Approach SuperBurger M&A Evaluation (SuperBurger) using an M&A framework: validate U.S. category growth ($3B to $6B in 5 years), quantify G&A (16% to 9%) and store cross-selling synergies ($15,750 net profit per store across 5,000 stores), stress-test the 2,500-store $1.2M/store target, and manage the 85% franchisee network.",
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
      "phase": "Scoping",
      "speaker": "Interviewer",
      "kind": "prompt",
      "detail": "SuperBurger, the world's fourth-largest fast-food chain with 85% franchised stores, is considering acquiring Tasty Donuts, a growing U.S. and international doughnut producer. Should SuperBurger pursue this deal?"
    },
    {
      "phase": "Scoping",
      "speaker": "Candidate",
      "kind": "question",
      "detail": "To ground the M&A case, could you share the U.S. doughnut market's size and growth outlook, both companies' growth rates, and how competitors are positioning in adjacent categories?",
      "reasoning": "Checking market tailwinds and competitive diversification tells us whether acquiring Tasty Donuts is defensive necessity or opportunistic growth."
    },
    {
      "phase": "Structure",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "U.S. doughnut consumption is $10 per person across 300 million people ($3B) and is projected to double to $20 per person ($6B) in five years. SuperBurger grows at 10% annually versus 15% for Tasty Donuts, and peers have diversified into coffee, bakery, and breakfast, though SuperBurger has only handled small deals so far. How would you structure your evaluation?"
    },
    {
      "phase": "Structure",
      "speaker": "Candidate",
      "kind": "framework",
      "detail": "I will assess four pillars: Market Attractiveness and Strategic Fit, Cost and Revenue Synergies across corporate and store footprints, Feasibility of the 5-year expansion targets, and Integration Risks—especially given our 85% franchised model and limited large-M&A experience.",
      "reasoning": "Linking financial synergies directly to franchisee execution risk addresses the critical operational constraint in fast-food rollups."
    },
    {
      "phase": "Investigation",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "Here are key operational details: Tasty Donuts' corporate G&A is 16% of sales versus SuperBurger's 9%, and store staff culture aligns well. Cross-selling doughnuts across 5,000 SuperBurger outlets could add $15,750 in net profit per store. Management also assumes Tasty Donuts doubles its U.S. market share and grows U.S. stores 2.5x from 1,000 to 2,500 in five years. Is that target achievable?"
    },
    {
      "phase": "Root Cause",
      "speaker": "Candidate",
      "kind": "root-cause",
      "detail": "The math shows the targets are ambitious yet feasible. With the U.S. market doubling from $3B to $6B, doubling Tasty Donuts' share implies $3B in sales across 2,500 stores—requiring $1.2M in annual sales per store. Meanwhile, combining corporate G&A toward 9% and pooling ingredient procurement creates immediate cost synergies alongside the $15,750/store cross-sell lift. However, two risks dominate: SuperBurger's lack of large-M&A integration muscle and potential resistance from the 85% franchisee base.",
      "reasoning": "Dividing the $3B revenue target by 2,500 stores translates macro ambition into a concrete $1.2M unit-level benchmark we can test.",
      "causes": [
        "Substantial G&A compression potential (16% vs. 9%) and procurement scale",
        "$15,750 incremental net profit per store from cross-selling across 5,000 outlets",
        "Execution risk across 85% franchised stores and limited large-deal integration track record"
      ]
    },
    {
      "phase": "Solution",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "How should SuperBurger mitigate franchisee pushback and execution risk if it moves forward with the acquisition?"
    },
    {
      "phase": "Synthesis",
      "speaker": "Candidate",
      "kind": "synthesis",
      "detail": "I recommend proceeding with the acquisition, anchored by disciplined integration governance. First, run a 200-store franchisee pilot to prove the $15,750 per-store profit uplift and equipment payback before mandating system-wide rollout. Second, consolidate corporate G&A and purchasing early to fund expansion, and stand up a dedicated integration PMO to pace the 1,500-store expansion against $1.2M per-store revenue and breakfast-margin cannibalization guardrails.",
      "reasoning": "Proving unit-level franchisee profitability in a pilot transforms 85% franchisee ownership from a bottleneck into a capital-light growth engine.",
      "causes": [
        "Franchisee pilot validates $15,750/store profit and morning-daypart economics",
        "Dedicated PMO and G&A consolidation derisk SuperBurger's first major acquisition"
      ]
    }
  ],
  "recommendations": [
    "P0 — Proceed with the acquisition under a franchisee-first pilot: Validate the $15,750 incremental net profit per store across 200 franchised outlets to secure buy-in from SuperBurger's 85% franchisee base before national rollout.",
    "P1 — Capture G&A and procurement synergies immediately: Compress Tasty Donuts' 16% G&A ratio toward SuperBurger's 9% benchmark and pool baking and packaging procurement to boost store margins.",
    "P2 — Establish an integration PMO with unit-economics guardrails: Pace the 2.5x U.S. store expansion and international rollout while tracking $1.2M average unit volume and morning-daypart cannibalization."
  ],
  "metricsAndGuardrails": {
    "northStar": "Risk-Adjusted Post-Merger NPV / ROIC (SuperBurger)",
    "leading": [
      "Cost synergy realization (overhead/procurement)",
      "Cross-sell retention at Month 6/12"
    ],
    "guardrails": [
      "Key talent & customer attrition",
      "Debt leverage / integration cost overrun"
    ]
  },
  "synthesisScript": "For SuperBurger, acquiring Tasty Donuts is strategically compelling given the $6 billion five-year U.S. doughnut outlook, G&A reduction potential from 16% to 9%, and $15,750 per-store cross-sell profit upside. I recommend proceeding while mitigating franchisee resistance and limited M&A experience through a dedicated integration PMO and a 200-store franchisee pilot before scaling toward 2,500 stores.",
  "interviewerTrap": "Assuming optimistic cross-sell Revenue Synergies justify any price while ignoring Integration, Culture, and Overpayment risks!",
  "variations": [
    {
      "question": "How would your recommendation change if SuperBurger had half the timeline or budget?",
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
  "id": "cm-cons-unc-land-usage",
  "title": "Land Usage Optimization",
  "company": "Regional Land Authority",
  "track": "Consulting",
  "category": "Unconventional",
  "difficulty": 2,
  "isStarter": true,
  "tags": [
    "Unconventional",
    "First Principles",
    "Real Estate",
    "ROI"
  ],
  "prompt": "Your client is a state government authority that owns an unused 60,000-square-foot plot of land in an affluent urban neighborhood. The client wants to deploy this land for high-impact social good while ensuring the project at least breaks even financially. How would you recommend utilizing the land?",
  "clarifyingQuestions": [
    {
      "q": "How does the authority define 'social good' for this project, and what financial constraint must be met?",
      "a": "Social good means solving a tangible everyday problem for the largest number of local residents and commuters, while generating enough revenue to at least break even on operating and capital costs.",
      "why": "Aligns our option evaluation with both social reach (footfall served) and financial self-sustainability."
    },
    {
      "q": "Where is the 60,000-square-foot plot located, and what is the surrounding neighborhood profile?",
      "a": "It sits in a newly developed, affluent mixed-use district containing both high-rise residential complexes and large corporate office buildings.",
      "why": "Identifies the two primary user cohorts—residents and office commuters—and signals high land value and density."
    },
    {
      "q": "Are existing neighborhood amenities—such as schools, clinics, retail stores, or transit—adequate for current demand?",
      "a": "Yes, convenience stores, schools, salons, and daily-need amenities are already abundant and well-equipped to serve the local population.",
      "why": "Eliminates oversupplied lifestyle retail categories so we can focus on unmet infrastructure or commuter bottlenecks."
    }
  ],
  "frameworkUsed": "First Principles Options Evaluation (Objective × Financial NPV × Non-Financial Constraints)",
  "coreEquation": "Optimal Land Use = Max(Risk-Adjusted NPV + Strategic Value) Subject to Zoning, Capex & Timeline",
  "strategyOverview": "Approach Land Usage Optimization (Regional Land Authority) using a first-principles needs audit: clarify the dual mandate (maximum community impact + financial break-even), map unmet local needs across Occupation, Lifestyle, and Residence, isolate acute corporate-commuter parking scarcity, and structure a multi-level parking hub via PPP.",
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
      "phase": "Scoping",
      "speaker": "Interviewer",
      "kind": "prompt",
      "detail": "Your client is a state government authority with an available 60,000-square-foot plot of land. They want to use it for social good while ensuring whatever activity is pursued breaks even financially. How would you approach this?"
    },
    {
      "phase": "Scoping",
      "speaker": "Candidate",
      "kind": "question",
      "detail": "To clarify the mandate, what does social good mean for the authority, where is the 60,000-square-foot plot located, and what commercial or residential facilities surround it?",
      "reasoning": "Pinning down the definition of social good and neighborhood demographics ensures our proposed land use addresses real local demand rather than generic ideas."
    },
    {
      "phase": "Structure",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "Social good means solving a pressing problem for the maximum number of people in the locality while breaking even. The 60,000-square-foot plot is in an affluent area built over the past decade with both residential complexes and corporate office towers. How would you identify the best use?"
    },
    {
      "phase": "Structure",
      "speaker": "Candidate",
      "kind": "framework",
      "detail": "Given high footfall from both residents and office workers, I will systematically test unmet needs across three daily buckets—Lifestyle amenities, Residential infrastructure, and Occupation/Commuter infrastructure—and evaluate candidates on social reach, capex, and break-even payback.",
      "reasoning": "Segmenting daily needs across Lifestyle, Residence, and Occupation creates a MECE demand filter before jumping to real-estate concepts."
    },
    {
      "phase": "Investigation",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "Good structure. In this locality, convenience stores, salons, schools, and daily lifestyle amenities are already robust and easily accessible. On the residential side, affluent housing complexes include private parking spaces purchased by homeowners. Where does that leave the biggest gap?"
    },
    {
      "phase": "Root Cause",
      "speaker": "Candidate",
      "kind": "root-cause",
      "detail": "Since lifestyle retail and residential amenities are well served, the acute bottleneck lies in the Occupation and Commuter bucket. Dense corporate offices house thousands of daily employees and visitors without adequate on-site parking, forcing spillover onto surrounding streets, causing traffic congestion, and creating daily friction for commuters and residents alike.",
      "reasoning": "Process-of-elimination across the three demand buckets isolates corporate commuter parking scarcity as the high-frequency, high-reach pain point.",
      "causes": [
        "Lifestyle amenities and private residential parking already meet local demand",
        "High corporate office density without sufficient on-site commuter parking",
        "Street-parking spillover driving severe neighborhood traffic congestion"
      ]
    },
    {
      "phase": "Solution",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "Exactly right—parking scarcity is severe around the office towers. How should the authority develop the 60,000-square-foot plot to solve this while ensuring financial break-even?"
    },
    {
      "phase": "Synthesis",
      "speaker": "Candidate",
      "kind": "synthesis",
      "detail": "I recommend developing a multi-level public parking hub on the 60,000-square-foot plot via a Public-Private Partnership. Consistent weekday corporate demand and weekend visitor traffic support predictable hourly fees and corporate monthly passes for timely break-even. Adding EV charging bays and compact ground-floor commuter kiosks will boost yield while tracking street congestion reduction and bay utilization as key KPIs.",
      "reasoning": "Vertical parking maximizes bay capacity on scarce affluent land while PPP delivery limits upfront public capex and ensures commercial discipline.",
      "causes": [
        "Consistent corporate commuter demand supports predictable break-even cash flow",
        "Multi-level design and EV/kiosk add-ons maximize yield per square foot"
      ]
    }
  ],
  "recommendations": [
    "P0 — Build a multi-level public parking hub on the 60,000 sq. ft. plot: Prioritize structured vertical parking with digital bay management and corporate commuter passes to directly relieve office-hour congestion.",
    "P1 — Layer ancillary commuter monetization to accelerate break-even: Integrate EV fast-charging stations and compact ground-floor convenience kiosks to diversify revenue without crowding out parking bays.",
    "P2 — Structure delivery under a PPP Build-Operate-Transfer model: Cap upfront public capital outlay and monitor daily bay utilization, payback timeline, and surrounding street traffic speeds as core success metrics."
  ],
  "metricsAndGuardrails": {
    "northStar": "Primary Policy / Operational Objective Metric (Regional Land Authority)",
    "leading": [
      "Target cohort participation / throughput",
      "Bottleneck conversion %"
    ],
    "guardrails": [
      "Implementation cost & fairness",
      "Unintended gaming / backlash"
    ]
  },
  "synthesisScript": "For Regional Land Authority, because existing lifestyle amenities and residential parking are well-supplied in the affluent mixed-use district, the highest-impact unmet need is acute commuter parking scarcity around corporate offices. I recommend developing a multi-level public parking hub with EV charging under a PPP model, delivering measurable congestion relief for thousands of daily commuters while breaking even on predictable weekday parking fees.",
  "interviewerTrap": "Picking 'build a luxury mall' blindly without checking location zoning, capital availability, or nearby demand!",
  "variations": [
    {
      "question": "How would your recommendation change if Regional Land Authority had half the timeline or budget?",
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
  "id": "cm-cons-39-shipping-company-strategy",
  "title": "Shipping Company Strategy",
  "company": "Maritime Shipping Co.",
  "track": "Consulting",
  "category": "Unconventional",
  "difficulty": 2,
  "isStarter": false,
  "tags": [
    "Unconventional",
    "Consulting"
  ],
  "prompt": "Your client is a regional logistics operator in Spain that handles last-mile delivery of packages handed off at city hubs by international carriers. They want to determine how many trucks—and which model—they should lease to fulfill daily demand while maximizing profitability. How would you advise them?",
  "clarifyingQuestions": [
    {
      "q": "What is the daily package volume, package size, and operating schedule for deliveries?",
      "a": "The firm must deliver 1,000 packages per day, each measuring 1 × 1 × 1 cubic meter, operating 5 days a week from 9:00 AM to 6:00 PM (9 hours) at an average of 10 minutes per delivery.",
      "why": "Defines both total cubic volume and the maximum deliveries a single driver can complete within a 9-hour shift."
    },
    {
      "q": "What truck models are available for lease, and what are their daily costs and cargo dimensions?",
      "a": "Three models are available: Model A at $160/day (3×4×6m = 72 m³), Model B at $50/day (9×2×2m = 36 m³), and Model C at $140/day (6×8×11m = 528 m³).",
      "why": "Allows us to test both volume capacity and driver-time utilization across each fleet option to find the lowest total daily lease cost."
    },
    {
      "q": "Can trucks return to the city hub mid-shift to reload, or must they carry a full shift's load at dispatch?",
      "a": "Assume single-dispatch loads from the morning hub handoff first, though mid-day reloads can be explored as an optimization lever.",
      "why": "Separates baseline fleet sizing under strict single-trip constraints from potential hub-reloading efficiency gains."
    }
  ],
  "frameworkUsed": "First Principles Objective Equation → MECE Drivers & Constraints → Impact Prioritization",
  "coreEquation": "Target Outcome = ∑ (MECE Stakeholder / Funnel / Operational Drivers) Subject to Constraints",
  "strategyOverview": "Approach Shipping Company Strategy (Maritime Shipping Co.) by evaluating binding fleet constraints—both Driver Time (9 hrs / 10 min = 54 deliveries/truck, implying a 19-truck minimum) and Cargo Volume (72 m³, 36 m³, 528 m³)—to select 28 Model B trucks at $1,400/day while testing mid-day reloads.",
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
      "phase": "Scoping",
      "speaker": "Interviewer",
      "kind": "prompt",
      "detail": "Your client is a regional logistics firm in Spain handling local last-mile delivery of packages dropped at city hubs by international carriers. They want to know how many trucks to lease—and which model—to maximize profitability. How would you solve this?"
    },
    {
      "phase": "Scoping",
      "speaker": "Candidate",
      "kind": "question",
      "detail": "To size the fleet, could you share the daily package volume, package dimensions, working hours, average delivery time per package, and the available truck models with their lease costs and cargo sizes?",
      "reasoning": "Fleet sizing requires testing both physical cubic capacity and shift-time throughput, since whichever constraint is tighter dictates the required truck count."
    },
    {
      "phase": "Structure",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "We deliver 1,000 packages per day, each 1×1×1 cubic meter, 5 days a week from 9:00 AM to 6:00 PM (9 hours), averaging 10 minutes per delivery. Three truck models are available: Model A ($160/day, 3×4×6m), Model B ($50/day, 9×2×2m), and Model C ($140/day, 6×8×11m). How do you structure the calculation?"
    },
    {
      "phase": "Structure",
      "speaker": "Candidate",
      "kind": "framework",
      "detail": "I will calculate the required fleet size under two constraints—Driver Time Capacity and Cargo Volume Capacity—take the binding maximum for each model, and multiply by the daily lease rate to find the minimum total daily fleet cost.",
      "reasoning": "Comparing time-constrained and volume-constrained minimums prevents the common trap of under-sizing trucks by cubic capacity alone."
    },
    {
      "phase": "Investigation",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "Clean approach. Go ahead and run the numbers across Models A, B, and C."
    },
    {
      "phase": "Root Cause",
      "speaker": "Candidate",
      "kind": "root-cause",
      "detail": "On time capacity, a 9-hour shift (540 minutes) at 10 minutes per delivery allows 54 deliveries per truck, setting a hard time floor of 1,000 / 54 = 18.52, or 19 trucks. Checking volume: Model A holds 72 m³, so time binds at 19 trucks costing 19 × $160 = $3,040/day. Model C holds 528 m³ (only 2 trucks by volume), yet time still forces 19 trucks costing 19 × $140 = $2,660/day. Model B holds 36 m³, so volume binds at 1,000 / 36 = 27.78, or 28 trucks—costing just 28 × $50 = $1,400/day.",
      "reasoning": "Evaluating both constraints reveals that Model C's massive cargo bay is stranded by driver hours, whereas Model B slashes daily lease cost by over 50%.",
      "causes": [
        "Driver shift limit (54 drops/day) forces a 19-truck floor regardless of truck size",
        "Model A ($3,040/day) and Model C ($2,660/day) carry unused cargo capacity due to time limits",
        "Model B's $50/day rate makes 28 volume-bound trucks the lowest-cost option at $1,400/day"
      ]
    },
    {
      "phase": "Solution",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "$1,400/day with 28 Model B trucks is a huge savings. Do you see any operational levers to optimize profitability even further?"
    },
    {
      "phase": "Synthesis",
      "speaker": "Candidate",
      "kind": "synthesis",
      "detail": "Yes—I recommend leasing 28 Model B trucks immediately at $1,400/day, saving $1,260–$1,640/day versus Models C and A. Additionally, because 36 deliveries take only 6 hours of a 9-hour shift, drivers have 3 hours of slack; piloting mid-day hub reloads on dense urban routes could push utilization toward 54 packages per truck and reduce the fleet toward 19 Model B trucks ($950/day), while monitoring fuel per drop and carrier SLA compliance.",
      "reasoning": "Identifying the 3-hour shift slack on Model B turns a static fleet-sizing exercise into an actionable multi-trip network optimization.",
      "causes": [
        "3 hours of daily shift slack per Model B driver enables afternoon hub reloads",
        "Route-clustering can reduce drop time below 10 minutes to protect SLA compliance"
      ]
    }
  ],
  "recommendations": [
    "P0 — Lease 28 Model B trucks as the baseline fleet: At $50/day each, 28 Model B trucks fulfill all 1,000 cubic-meter deliveries for $1,400/day, saving $1,260/day over Model C and $1,640/day over Model A.",
    "P1 — Pilot mid-day hub reloads to unlock shift slack: Leverage the 3 hours of unused shift time per Model B driver on dense city routes to test second-wave afternoon dispatches toward the 19-truck time floor ($950/day).",
    "P2 — Monitor unit delivery and SLA guardrails: Track fuel cost per package, minutes per drop, and international carrier on-time delivery SLAs before trimming fleet buffer capacity."
  ],
  "metricsAndGuardrails": {
    "northStar": "Primary Policy / Operational Objective Metric (Maritime Shipping Co.)",
    "leading": [
      "Target cohort participation / throughput",
      "Bottleneck conversion %"
    ],
    "guardrails": [
      "Implementation cost & fairness",
      "Unintended gaming / backlash"
    ]
  },
  "synthesisScript": "For Maritime Shipping Co., balancing the 19-truck shift-time floor against cargo dimensions shows that leasing 28 Model B trucks minimizes daily lease spend at $1,400/day—saving over $1,260/day compared to Models A and C. Pairing this fleet with a pilot for mid-day hub reloads can capture drivers' 3-hour daily slack while protecting carrier on-time SLAs.",
  "interviewerTrap": "Panicking because no textbook framework matches—or forcing a Profitability/4Ps template onto a puzzle that needs First Principles!",
  "variations": [
    {
      "question": "How would your recommendation change if Maritime Shipping Co. had half the timeline or budget?",
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
  "id": "cm-cons-40-ceo-of-bcg-strategy-dilemma",
  "title": "CEO of BCG Strategy Dilemma",
  "company": "Advisory Practice",
  "track": "Consulting",
  "category": "Unconventional",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "BCG",
    "Unconventional",
    "Consulting"
  ],
  "prompt": "Our client is the CEO of a global management advisory practice who wants a structured view of his core executive responsibilities and strategic priorities. How should he define and organize his mandate across the firm?",
  "clarifyingQuestions": [
    {
      "q": "Are we structuring a typical daily schedule for the CEO, or an overarching framework of his strategic responsibilities across the firm?",
      "a": "We are looking for an overarching framework of his core executive responsibilities rather than a day-in-the-life calendar.",
      "why": "Sets the abstraction level at enterprise governance and long-term value creation rather than tactical time management."
    },
    {
      "q": "What is the firm's ownership and governance structure—is it publicly listed or a partner-owned advisory firm?",
      "a": "It is a global partnership-driven advisory firm where local Managing Directors and Partners lead regional offices and client relationships.",
      "why": "Highlights that decision-making relies on partner consensus, distributed office leadership, and talent leverage rather than top-down command."
    },
    {
      "q": "Are there specific priority pillars—such as stakeholder management, organizational strategy, or financial allocation—we should examine first?",
      "a": "Start with stakeholder management across partners, clients, and capital providers, then connect that to organizational strategy and capital allocation.",
      "why": "Sequences the issue tree logically from stakeholder alignment to strategic execution and resource deployment."
    }
  ],
  "frameworkUsed": "First Principles Objective Equation → MECE Drivers & Constraints → Impact Prioritization",
  "coreEquation": "Target Outcome = ∑ (MECE Stakeholder / Funnel / Operational Drivers) Subject to Constraints",
  "strategyOverview": "Approach CEO Strategy Dilemma (Advisory Practice) using a three-pillar executive governance framework: Stakeholder Management (partners/employees, clients, investors/board), Organizational Strategy (scaling capabilities and delegation across global offices), and Financial Capital Allocation (investing in high-ROI practices while protecting partner margins).",
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
      "phase": "Scoping",
      "speaker": "Interviewer",
      "kind": "prompt",
      "detail": "Our client is the CEO of a global advisory practice and wants clarity on what his core executive responsibilities should be. How would you structure his mandate?"
    },
    {
      "phase": "Scoping",
      "speaker": "Candidate",
      "kind": "question",
      "detail": "First, should we design a tactical daily schedule or an enterprise-level view of his responsibilities—and is the practice structured as a global partnership where local Managing Directors own regional offices?",
      "reasoning": "Clarifying governance structure and time horizon ensures the CEO framework reflects partnership realities rather than a traditional corporate hierarchy."
    },
    {
      "phase": "Structure",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "Focus on an overall executive outlook. It is a global partnership-driven firm where office heads and partners manage local accounts. How would you break down his responsibilities?"
    },
    {
      "phase": "Structure",
      "speaker": "Candidate",
      "kind": "framework",
      "detail": "I would organize the CEO's mandate into three pillars: Stakeholder Management across capital backers, partners/employees, and flagship clients; Organizational Strategy with functional and practice leaders; and Financial Decision-Making to allocate capital efficiently. Shall we start with Stakeholder Management?",
      "reasoning": "Grouping executive duties into Stakeholders, Strategy, and Capital Allocation keeps the mandate MECE and avoids overlapping tactical tasks."
    },
    {
      "phase": "Investigation",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "Yes—walk through how he should manage key stakeholders, and then tell me what distinguishes great Organizational Strategy beyond simply solving weekly functional problems."
    },
    {
      "phase": "Root Cause",
      "speaker": "Candidate",
      "kind": "root-cause",
      "detail": "In a partnership, stakeholder alignment requires keeping capital providers informed on margins and growth plans while maintaining continuous alignment with Managing Directors and Partners who co-own the firm—whereas day-to-day client delivery stays delegated to local office heads. In Organizational Strategy, a CEO fails if they act solely as a reactive escalation point for Sales, Finance, IT, or HR; instead, they must build institutional effectiveness, delegate execution down the hierarchy, and align cross-office capability building.",
      "reasoning": "Distinguishing reactive firefighting from scalable delegation pinpoints the biggest executive trap for CEOs in decentralized advisory firms.",
      "causes": [
        "Partnership governance requires consensus-building across Managing Directors and Partners",
        "Micromanaging local client delivery bottlenecks regional autonomy and executive time",
        "Reactive problem-solving must be replaced by scalable delegation and cross-functional alignment"
      ]
    },
    {
      "phase": "Solution",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "How should the third pillar—Financial Decision-Making—tie into global expansion and firm profitability?"
    },
    {
      "phase": "Synthesis",
      "speaker": "Candidate",
      "kind": "synthesis",
      "detail": "The CEO sits at the center of capital stewardship—working with the CFO to channel partner capital and investor backing into the highest-ROI practices, such as digital, AI, and priority geographies, rather than spreading budgets thinly. Overall, I recommend establishing clear practice-level OKRs, delegating regional delivery to Managing Directors, and tracking consultant utilization, fee realization, and global office EBITDA margins quarterly.",
      "reasoning": "Connecting capital allocation directly to emerging practice ROI and utilization metrics makes an abstract leadership role measurable.",
      "causes": [
        "Targeted capital deployment into high-ROI practices (e.g., AI, digital, emerging hubs)",
        "Quarterly utilization, realization, and margin guardrails across global offices"
      ]
    }
  ],
  "recommendations": [
    "P0 — Institutionalize partner alignment and decentralized delegation: Set clear firm-wide strategic OKRs with Managing Directors while empowering regional office heads to own local client delivery and account growth.",
    "P1 — Concentrate capital allocation in high-growth practices: Partner with the CFO to direct investment toward AI, digital transformation, and priority international markets rather than funding legacy practices uniformly.",
    "P2 — Govern institutional effectiveness through utilization and margin KPIs: Review consultant utilization, realization rates, partner retention, and practice-level EBITDA quarterly to ensure global growth sustains profitability."
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
  "synthesisScript": "For Advisory Practice, the CEO's highest leverage comes from aligning partners around shared enterprise priorities rather than micromanaging local client engagements. By pairing disciplined Stakeholder Governance with proactive Organizational Delegation and targeted Capital Allocation into high-ROI practices, the CEO can expand the firm's global footprint while protecting utilization and partner profitability.",
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
  "id": "cm-cons-41-chip-equity-strategy",
  "title": "Chip Equity Strategy",
  "company": "Electronics Retailer / Tech Equity",
  "track": "Consulting",
  "category": "Unconventional",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "Unconventional",
    "Consulting"
  ],
  "prompt": "Your client, an electronics holding company called Chip'n'Chip, is evaluating an $80 million equity investment for a 20% stake in OnBoard, a Printed Circuit Board (PCB) manufacturer. How would you assess whether this is an attractive investment?",
  "clarifyingQuestions": [
    {
      "q": "What are the exact deal terms, valuation, and return hurdle for Chip'n'Chip?",
      "a": "OnBoard carries a $320 million pre-money valuation and seeks $80 million for a 20% stake ($400 million post-money); Chip'n'Chip requires a 10% ROI in Year 1.",
      "why": "Quantifies the financial hurdle ($8 million first-year return on the 20% stake, implying $40 million firm-level profit) to test feasibility."
    },
    {
      "q": "How is OnBoard planning to deploy the $80 million, and what are the growth trends across its PCB product segments?",
      "a": "OnBoard plans to build 6 million units of 3-layer PCB capacity in Vietnam; 3-layer demand is growing 10% annually due to smartphones, whereas legacy 2-layer PCBs are declining 4% per year.",
      "why": "Tests whether the capital funds a high-growth technology shift rather than propping up a structurally declining legacy business."
    },
    {
      "q": "What is OnBoard's current manufacturing footprint, capacity utilization, and unit cost across geographies?",
      "a": "OnBoard produces only 2-layer PCBs today: Germany (5M capacity, 60% utilized, $4.00/unit), China (10M capacity, 80% utilized, $3.50/unit), and Vietnam (5M capacity, 100% utilized, $3.50/unit).",
      "why": "Reveals operational bottlenecks, idle high-cost capacity in Germany, and lack of existing 3-layer production experience."
    }
  ],
  "frameworkUsed": "First Principles Objective Equation → MECE Drivers & Constraints → Impact Prioritization",
  "coreEquation": "Target Outcome = ∑ (MECE Stakeholder / Funnel / Operational Drivers) Subject to Constraints",
  "strategyOverview": "Approach Chip Equity Strategy (Electronics Retailer / Tech Equity) using a private-equity investment framework: benchmark the 10% Year-1 ROI hurdle ($8M on $80M) against OnBoard's shift from declining 2-layer PCBs (-4%/yr) to growing 3-layer PCBs (+10%/yr) in Vietnam, while flagging zero 3-layer track record and idle German capacity.",
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
      "phase": "Scoping",
      "speaker": "Interviewer",
      "kind": "prompt",
      "detail": "Our client, an electronics holding company called Chip'n'Chip, wants to know whether investing $80 million in OnBoard, a PCB manufacturer, is a good investment. How would you evaluate this?"
    },
    {
      "phase": "Scoping",
      "speaker": "Candidate",
      "kind": "question",
      "detail": "I'd like to clarify the deal terms and investment thesis: what equity stake and valuation are on the table, what is Chip'n'Chip's return hurdle, and where will OnBoard deploy the $80 million?",
      "reasoning": "Establishing valuation, hurdle rate, and use of proceeds immediately tests whether the deal math and growth thesis are realistic."
    },
    {
      "phase": "Structure",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "Chip'n'Chip requires a 10% ROI in Year 1. OnBoard has a $320M valuation and is offering 20% equity for $80M to build 6 million units of 3-layer PCB capacity in Vietnam. While 2-layer PCBs are declining 4% annually, 3-layer PCBs are growing 10% annually driven by smartphones. How would you structure your diligence?"
    },
    {
      "phase": "Structure",
      "speaker": "Candidate",
      "kind": "framework",
      "detail": "I will assess four areas: Market & Competitive Dynamics in Asia, OnBoard's Operational Footprint and Execution Capability in 3-layer PCBs, Unit Economics & Year-1 ROI Feasibility, and Risk Mitigation.",
      "reasoning": "Testing market demand alongside factory utilization and technical readiness prevents overvaluing an unproven expansion."
    },
    {
      "phase": "Investigation",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "In Asia, Japanese players hold over 50% share but are losing ground to Chinese and Southeast Asian manufacturers with lower labor costs. OnBoard currently runs three 2-layer plants with zero active 3-layer production: Germany (5M capacity, 60% utilized, $4.00/unit), China (10M capacity, 80% utilized, $3.50/unit), and Vietnam (5M capacity, 100% utilized, $3.50/unit). What do you conclude?"
    },
    {
      "phase": "Root Cause",
      "speaker": "Candidate",
      "kind": "root-cause",
      "detail": "Three major red flags undermine the Year-1 return case. First, a 10% Year-1 ROI on $80M requires $8M for Chip'n'Chip's 20% stake—implying $40M in incremental firm profit, or ~$6.67 profit per unit on 6M new boards, which is unrealistic during Year-1 construction and qualification. Second, OnBoard has zero 3-layer manufacturing track record and Vietnam is already at 100% utilization. Third, its legacy 2-layer plants in Germany (40% idle at $4.00/unit) and China (20% idle) face a -4% market decline.",
      "reasoning": "Translating the 10% Year-1 ROI into per-unit profit and checking plant utilization exposes severe mismatch between financial expectations and operational reality.",
      "causes": [
        "Implied $40M Year-1 profit (~$6.67/unit) is unattainable during greenfield 3-layer ramp",
        "Zero prior 3-layer PCB production experience and 100% maxed-out Vietnam plant",
        "Legacy 2-layer headwinds (-4%/yr) with 40% idle high-cost capacity in Germany ($4.00/unit)"
      ]
    },
    {
      "phase": "Solution",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "So the 10% Year-1 hurdle is a non-starter as structured. Could Chip'n'Chip still participate under different terms, and what operational fixes would you require?"
    },
    {
      "phase": "Synthesis",
      "speaker": "Candidate",
      "kind": "synthesis",
      "detail": "I recommend declining the straight equity deal at a 10% Year-1 ROI requirement, or restructuring into a milestone-based convertible note with a 3-to-5-year return horizon. Release capital in tranches tied to 3-layer yield certification and smartphone OEM offtake contracts in Vietnam, while consolidating price-sensitive 2-layer volume from Germany ($4.00/unit) into China's idle 2M capacity ($3.50/unit) to protect cash flow.",
      "reasoning": "Replacing a rigid Year-1 equity hurdle with milestone tranches aligns capital deployment with technical de-risking and fixes legacy cost drag.",
      "causes": [
        "Tranched financing tied to 3-layer OEM qualification and production yield",
        "Consolidating German 2-layer volume into lower-cost China capacity ($3.50/unit)"
      ]
    }
  ],
  "recommendations": [
    "P0 — Decline the straight equity deal under the 10% Year-1 ROI mandate: A greenfield 6M-unit 3-layer expansion in Vietnam cannot generate $40 million in Year-1 firm profit ($8 million for a 20% stake) given capex lead times and zero prior 3-layer production.",
    "P1 — Restructure into milestone-tranched convertible financing if Chip'n'Chip extends its horizon: Tie capital release to verified 3-layer board yields and binding smartphone OEM supply contracts.",
    "P2 — Optimize legacy 2-layer operations before scaling: Reallocate flexible 2-layer orders from OnBoard's 60%-utilized German plant ($4.00/unit) to China's idle 2M capacity ($3.50/unit) while tracking plant utilization and consolidated EBITDA margin."
  ],
  "metricsAndGuardrails": {
    "northStar": "Primary Policy / Operational Objective Metric (Electronics Retailer / Tech Equity)",
    "leading": [
      "Target cohort participation / throughput",
      "Bottleneck conversion %"
    ],
    "guardrails": [
      "Implementation cost & fairness",
      "Unintended gaming / backlash"
    ]
  },
  "synthesisScript": "For Electronics Retailer / Tech Equity, investing $80 million for 20% of OnBoard is unattractive under a strict 10% Year-1 ROI hurdle because OnBoard has zero 3-layer PCB production experience, a maxed-out Vietnam plant, and declining legacy 2-layer utilization in Germany. I recommend either passing on the deal or restructuring into a milestone-tranched convertible investment tied to 3-layer OEM qualification and 2-layer cost consolidation in China.",
  "interviewerTrap": "Panicking because no textbook framework matches—or forcing a Profitability/4Ps template onto a puzzle that needs First Principles!",
  "variations": [
    {
      "question": "How would your recommendation change if Electronics Retailer / Tech Equity had half the timeline or budget?",
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
  "id": "cm-cons-42-credit-card-unconventional-case",
  "title": "Credit Card Unconventional Case",
  "company": "Credit Card Issuer",
  "track": "Consulting",
  "category": "Unconventional",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "Unconventional",
    "Consulting"
  ],
  "prompt": "Your client is a major retail bank whose flagship credit card carries a €100 annual fee. Recently, a large supermarket chain launched a competing credit card with no annual fee and identical core features. How should the bank assess the threat and respond?",
  "clarifyingQuestions": [
    {
      "q": "Aside from the €100 annual fee, are there any differences in rewards, credit limits, or card features between the bank's card and the supermarket's card?",
      "a": "No—all other card features, interchange mechanics, and interest terms are identical; the only product difference is the €100 annual fee.",
      "why": "Confirms that competition is purely on fee pricing and customer relationship stickiness rather than product differentiation."
    },
    {
      "q": "What are the bank's unit revenue drivers per cardholder—specifically annual spend, interchange rate, revolving balance, and interest rate?",
      "a": "Assuming €30,000 average income with 45% card spend (€13,500), the bank earns 1% interchange (€135) plus 10% interest on revolving balances equal to 20% of spend (€2,700 × 10% = €270), alongside the €100 annual fee.",
      "why": "Lets us quantify exact per-customer revenue (€505 vs. €405) and evaluate how much spend lift is needed to offset a fee cut."
    },
    {
      "q": "What is the supermarket's strategic motivation for offering a zero-fee card, and how price-sensitive is our current cardholder base?",
      "a": "The supermarket uses the card to drive grocery loyalty and basket size, while the bank serves mixed segments with varying sensitivity to the €100 fee.",
      "why": "Clarifies whether the bank must defend its entire base or target fee waivers specifically to at-risk, high-spend segments."
    }
  ],
  "frameworkUsed": "First Principles Objective Equation → MECE Drivers & Constraints → Impact Prioritization",
  "coreEquation": "Target Outcome = ∑ (MECE Stakeholder / Funnel / Operational Drivers) Subject to Constraints",
  "strategyOverview": "Approach Credit Card Unconventional Case (Credit Card Issuer) by modeling per-cardholder unit economics (€100 fee + €135 interchange + €270 interest = €505/yr vs. €405/yr for the supermarket), evaluating three strategic responses (Hold, Cut Fee, Conditional Bundling/Waivers), and defending ARPU without taking excess credit risk.",
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
      "phase": "Scoping",
      "speaker": "Interviewer",
      "kind": "prompt",
      "detail": "Your client is a major bank issuing credit cards with a €100 annual fee. A supermarket recently entered the market with a zero-annual-fee card. How should the bank react?"
    },
    {
      "phase": "Scoping",
      "speaker": "Candidate",
      "kind": "question",
      "detail": "Before evaluating strategic options, are there any differences in card benefits, rewards, or credit terms aside from the €100 annual fee, and what are the bank's interchange and interest-rate economics?",
      "reasoning": "Isolating non-fee differences and unit revenue streams reveals how much margin the bank stands to lose if it matches the €0 fee."
    },
    {
      "phase": "Structure",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "All other card features are identical. The bank earns a 1% interchange fee on card spend and 10% interest on outstanding balances, which average 20% of annual card spend. Assume an average customer earns €30,000 and puts 45% on the card. How does the revenue math compare?"
    },
    {
      "phase": "Structure",
      "speaker": "Candidate",
      "kind": "framework",
      "detail": "I will calculate annual revenue per customer across all three streams—Annual Fee, Interchange, and Interest—for both issuers, and then evaluate three strategic options: holding the fee, eliminating the fee, or introducing conditional waivers and product bundling.",
      "reasoning": "Quantifying exact ARPU before weighing strategic responses ensures we understand the €100 gap we would need to replace if fees are cut."
    },
    {
      "phase": "Investigation",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "Walk me through the per-customer numbers first."
    },
    {
      "phase": "Root Cause",
      "speaker": "Candidate",
      "kind": "root-cause",
      "detail": "At €30,000 income and 45% card usage, annual spend is €13,500. That generates €135 in 1% interchange fees. With 20% kept as an outstanding balance (€2,700) at 10% interest, interest revenue is €270. Adding the €100 fee gives the bank €505 per customer annually, versus €405 for the supermarket—meaning eliminating the fee outright cuts unit revenue by 20%. The supermarket can absorb €405 because grocery basket lift subsidizes its card, whereas the bank cannot easily offset €100 without driving higher card spend or taking riskier revolving balances.",
      "reasoning": "Comparing €505 vs. €405 exposes the asymmetric economics: the supermarket monetizes grocery spend, while the bank relies directly on card ARPU.",
      "causes": [
        "Bank earns €505/year per card (€100 fee + €135 interchange + €270 interest) vs. €405 for the supermarket",
        "Blanket fee elimination immediately destroys 20% of per-cardholder revenue",
        "Compensating via higher interest rates risks adverse selection and credit defaults"
      ]
    },
    {
      "phase": "Solution",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "Right—an immediate 20% ARPU hit is tough. What concrete response should the bank execute, and what guardrails matter if they waive fees for certain customers?"
    },
    {
      "phase": "Synthesis",
      "speaker": "Candidate",
      "kind": "synthesis",
      "detail": "I recommend a targeted conditional waiver and bundling strategy rather than a blanket fee cut. First, retain the €100 fee as the default to protect €505 ARPU among price-insensitive customers, but waive it for cardholders who spend above an annual threshold (e.g., €18,000+) or bundle savings/mortgage products. Second, add merchant-funded non-grocery rewards to differentiate from the supermarket card while monitoring attrition, spend per card, and 90-day delinquency rates.",
      "reasoning": "Spend-tiered fee waivers defend at-risk volume and incentivize higher interchange without subsidizing inactive or low-spend accounts.",
      "causes": [
        "Spend-threshold and relationship-bundled waivers protect high-LTV retention",
        "Merchant-funded rewards lift card share-of-wallet without compressing bank margin"
      ]
    }
  ],
  "recommendations": [
    "P0 — Replace blanket fee cuts with a spend-tiered and bundled fee waiver: Keep the €100 base fee to preserve €505 ARPU on sticky segments, but waive it for customers hitting an annual spend threshold (e.g., €18,000+) or holding bundled checking/savings accounts.",
    "P1 — Launch merchant-funded lifestyle rewards: Partner with dining, fuel, and travel merchants to fund targeted cashback that differentiates the bank's card beyond grocery discounts.",
    "P2 — Enforce credit-risk and churn guardrails: Track monthly card attrition, average annual spend, and 90-day delinquency rates so efforts to offset fee pressure never rely on loosening underwriting."
  ],
  "metricsAndGuardrails": {
    "northStar": "Primary Policy / Operational Objective Metric (Credit Card Issuer)",
    "leading": [
      "Target cohort participation / throughput",
      "Bottleneck conversion %"
    ],
    "guardrails": [
      "Implementation cost & fairness",
      "Unintended gaming / backlash"
    ]
  },
  "synthesisScript": "For Credit Card Issuer, unit economics show the bank earns €505 per cardholder annually (€100 fee, €135 interchange, €270 interest) versus €405 for the zero-fee supermarket card, making a blanket fee cut a 20% ARPU hit. I recommend keeping the €100 default fee while introducing spend-threshold waivers, banking product bundles, and merchant-funded rewards to defend high-value cardholders without eroding credit quality.",
  "interviewerTrap": "Panicking because no textbook framework matches—or forcing a Profitability/4Ps template onto a puzzle that needs First Principles!",
  "variations": [
    {
      "question": "How would your recommendation change if Credit Card Issuer had half the timeline or budget?",
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
  "id": "cm-cons-43-fysikum-strategy-case",
  "title": "Fysikum Strategy Case",
  "company": "Fysikum Fitness & Squash",
  "track": "Consulting",
  "category": "Unconventional",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "Unconventional",
    "Consulting"
  ],
  "prompt": "Your client, Fysikum, operates highly successful squash centers in Sweden featuring courts alongside a sauna, spa, pool, and gym. Encouraged by its domestic success, Fysikum is considering expanding into Germany. How should the company evaluate this market entry, and what minimum membership pricing would it need to break even?",
  "clarifyingQuestions": [
    {
      "q": "What is Fysikum's operating schedule, court utilization profile, and player mix (singles vs. doubles)?",
      "a": "Courts run at 100% utilization during operating hours, split evenly at 50% singles (2 players) and 50% doubles (4 players).",
      "why": "Determines effective player throughput per court-hour and total member capacity over which fixed facility costs are spread."
    },
    {
      "q": "What is the financial objective for the initial German expansion—profit maximization or break-even scale?",
      "a": "At minimum, Fysikum must determine the lowest annual membership fee required to cover annual running costs without operating at a loss.",
      "why": "Sets the break-even pricing floor needed to benchmark Fysikum's cost structure against German incumbents."
    },
    {
      "q": "What does the competitive landscape in Germany look like in terms of market concentration and pricing?",
      "a": "A dominant incumbent holds 60% market share in Germany and charges €50 per annual membership on a lower operating cost base.",
      "why": "Tests whether Fysikum's break-even membership fee can compete head-on or requires a differentiated premium tier."
    }
  ],
  "frameworkUsed": "First Principles Objective Equation → MECE Drivers & Constraints → Impact Prioritization",
  "coreEquation": "Target Outcome = ∑ (MECE Stakeholder / Funnel / Operational Drivers) Subject to Constraints",
  "strategyOverview": "Approach Fysikum Strategy Case (Fysikum Fitness & Squash) using a market-entry and unit-economics structure: evaluate German industry attractiveness and incumbent strength (60% share at €50/yr), calculate Fysikum's break-even annual membership (>€90/member based on annual running costs and 50% singles/50% doubles court capacity), and recommend entering only with a differentiated premium wellness positioning.",
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
      "phase": "Scoping",
      "speaker": "Interviewer",
      "kind": "prompt",
      "detail": "Fysikum operates successful squash centers in Sweden combining courts with a sauna, spa, pool, and gym, and is evaluating expanding into Germany. How would you assess this expansion?"
    },
    {
      "phase": "Scoping",
      "speaker": "Candidate",
      "kind": "question",
      "detail": "To frame the market-entry evaluation, what external data should we gather on Germany, and what are Fysikum's operating hours, court usage mix (singles vs. doubles), and cost structure?",
      "reasoning": "Combining external competitive intelligence with internal capacity and cost drivers prevents recommending entry into an unprofitable price environment."
    },
    {
      "phase": "Structure",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "We can pull market research reports and tap internal fitness-industry benchmarks. For the quantitative check, assume courts operate at 100% capacity during open hours with 50% singles and 50% doubles play, and profits must at least cover annual running costs. How do you compute the minimum annual membership fee?"
    },
    {
      "phase": "Structure",
      "speaker": "Candidate",
      "kind": "framework",
      "detail": "I will structure the decision in two steps: first, calculate total annual player capacity from court operating hours and the 3-player average (50% 2-player singles, 50% 4-player doubles) to divide annual running costs by member count for the break-even annual fee; second, benchmark that fee against German competition via a 3Cs lens.",
      "reasoning": "Converting court-hours into active member capacity gives an exact cost-per-member floor before testing market willingness to pay."
    },
    {
      "phase": "Investigation",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "Good—dividing annual running costs by total active members shows Fysikum must charge more than €90 per member annually just to break even. Meanwhile, the dominant player in Germany holds 60% market share and charges €50 per year on a lower cost base. Would you recommend entering Germany?"
    },
    {
      "phase": "Root Cause",
      "speaker": "Candidate",
      "kind": "root-cause",
      "detail": "No—not on a head-to-head mass-market model. Fysikum's €90+ annual break-even floor is 80% higher than the €50 membership charged by an incumbent controlling 60% of the market with a structurally lower cost base. Entering without differentiation would trap Fysikum in a losing price war where every incremental member loses money.",
      "reasoning": "Comparing Fysikum's >€90 break-even fee against the incumbent's €50 price proves that cost-based competition is structurally unviable.",
      "causes": [
        "Fysikum requires >€90/year per member to cover annual facility running costs",
        "Dominant German incumbent holds 60% market share at €50/year on a lower cost base",
        "Full-service amenities (spa, sauna, pool, gym) inflate fixed costs versus basic court operators"
      ]
    },
    {
      "phase": "Solution",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "Fair point. Under what conditions, if any, could Fysikum still make Germany work?"
    },
    {
      "phase": "Synthesis",
      "speaker": "Candidate",
      "kind": "synthesis",
      "detail": "Fysikum should only enter Germany if it can differentiate decisively into a premium urban wellness tier—monetizing its sauna, spa, pool, and gym bundle in affluent Tier-1 cities where members will pay €120+ annually. Otherwise, it should stay out of Germany and explore less saturated Nordic or European markets. If piloted in one city, track court utilization, spa/gym attach rates, and net member retention as strict expansion gates.",
      "reasoning": "Turning Fysikum's higher-cost wellness amenities into a premium pricing moat is the only viable path above the >€90 break-even floor.",
      "causes": [
        "Premium wellness positioning (€120+/year) leverages spa, sauna, pool, and gym bundle",
        "Single-city Tier-1 pilot limits capex exposure before multi-site commitment"
      ]
    }
  ],
  "recommendations": [
    "P0 — Reject a mass-market German entry strategy: With a >€90 annual break-even fee against a 60%-share incumbent charging €50/year, competing on standard squash pricing guarantees structural losses.",
    "P1 — Pursue Germany only via a differentiated premium wellness club format: Target affluent Tier-1 neighborhoods where bundling courts with spa, sauna, pool, and fitness coaching supports €120+ annual memberships.",
    "P2 — Validate economics through a single flagship pilot: Test demand and willingness-to-pay at one leased site—tracking court utilization, ancillary wellness revenue, and churn—before committing regional rollout capital."
  ],
  "metricsAndGuardrails": {
    "northStar": "Primary Policy / Operational Objective Metric (Fysikum Fitness & Squash)",
    "leading": [
      "Target cohort participation / throughput",
      "Bottleneck conversion %"
    ],
    "guardrails": [
      "Implementation cost & fairness",
      "Unintended gaming / backlash"
    ]
  },
  "synthesisScript": "For Fysikum Fitness & Squash, dividing annual running costs by member capacity shows a break-even floor above €90 per year—uncompetitive against Germany's 60%-share incumbent charging €50 per year. Fysikum should avoid mass-market entry and enter Germany only if a single-city pilot proves customers in affluent hubs will pay €120+ annually for its differentiated spa, pool, gym, and squash bundle.",
  "interviewerTrap": "Panicking because no textbook framework matches—or forcing a Profitability/4Ps template onto a puzzle that needs First Principles!",
  "variations": [
    {
      "question": "How would your recommendation change if Fysikum Fitness & Squash had half the timeline or budget?",
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
  "id": "cm-cons-44-reducing-road-accidents-in-india",
  "title": "Reducing Road Accidents in India",
  "company": "Road Safety Authority",
  "track": "Consulting",
  "category": "Unconventional",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "Unconventional",
    "Consulting"
  ],
  "prompt": "Recently, a highway corridor in Bihar was expanded from 4 lanes to 6 lanes to reduce congestion, but within a few months, accidents spiked sharply along the newly widened section. How would you diagnose the root cause of this spike and recommend corrective measures?",
  "clarifyingQuestions": [
    {
      "q": "What types of accidents are occurring, and is there any concentration by time of day?",
      "a": "They are predominantly vehicle-to-vehicle collisions, with no significant difference between daytime and nighttime frequency.",
      "why": "Rules out pedestrian crossings and night-only streetlighting defects as the primary driver."
    },
    {
      "q": "Are the collisions spread evenly across the highway, or concentrated in specific lanes or road segments?",
      "a": "The spike is heavily concentrated in the center and innermost lanes of the newly expanded 6-lane section.",
      "why": "Points toward high-speed lane-changing or visibility issues specific to inner lanes rather than roadside shoulder hazards."
    },
    {
      "q": "During the expansion from 4 to 6 lanes, were highway signage, lane markings, and overhead gantries upgraded alongside the asphalt widening?",
      "a": "No—existing roadside signs designed for the original 4-lane width were kept in place without adding overhead or median signage.",
      "why": "Isolates whether lateral sightline blockage from outer-lane traffic prevents inner-lane drivers from seeing critical instructions."
    }
  ],
  "frameworkUsed": "First Principles Objective Equation → MECE Drivers & Constraints → Impact Prioritization",
  "coreEquation": "Target Outcome = ∑ (MECE Stakeholder / Funnel / Operational Drivers) Subject to Constraints",
  "strategyOverview": "Approach Reducing Road Accidents in India (Road Safety Authority) using a MECE diagnostic tree across Human Error, Road Design Flaws (signage/markings, geometry, lane structure), and External Factors: isolate center-lane vehicle-to-vehicle collisions caused by unadjusted 4-lane roadside signage, and deploy overhead gantries and median signs.",
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
      "phase": "Scoping",
      "speaker": "Interviewer",
      "kind": "prompt",
      "detail": "A highway in Bihar was recently expanded from 4 lanes to 6 lanes to ease congestion, yet accidents spiked sharply within months on the new section. How would you identify the cause?"
    },
    {
      "phase": "Scoping",
      "speaker": "Candidate",
      "kind": "question",
      "detail": "To narrow down the accident pattern, are these mostly vehicle-to-vehicle or pedestrian collisions, do they spike during daytime or nighttime, and are they concentrated in particular lanes?",
      "reasoning": "Segmenting by collision type, time of day, and lane position quickly separates visibility, pedestrian, and high-speed lane dynamics."
    },
    {
      "phase": "Structure",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "They are mostly vehicle-to-vehicle collisions with no day-versus-night skew, and they are heavily concentrated in the center and innermost lanes of the widened road. How would you structure your root-cause diagnosis?"
    },
    {
      "phase": "Structure",
      "speaker": "Candidate",
      "kind": "framework",
      "detail": "I will break potential causes into three MECE categories: Human Error (speeding or unfamiliarity), Road Design Flaws (signage and markings, road geometry/merges, or lane structure), and External Factors (weather or lighting). Since there is no night skew, external lighting looks unlikely—can we inspect Design Flaws and Human Error?",
      "reasoning": "Eliminating time-dependent lighting issues lets us focus directly on physical road design changes introduced by the 4-to-6-lane widening."
    },
    {
      "phase": "Investigation",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "Good call—the core issue sits under Design Flaws, specifically Signage. When the corridor was widened from 4 lanes to 6 lanes, roadside traffic signs were neither repositioned nor supplemented. Why does that drive center-lane collisions?"
    },
    {
      "phase": "Root Cause",
      "speaker": "Candidate",
      "kind": "root-cause",
      "detail": "Roadside signs calibrated for a 4-lane width sit too far laterally from the new center and innermost lanes and are routinely blocked by trucks and buses in the outer lanes. As a result, high-speed drivers in inner lanes miss upcoming exit, merge, and speed advisories until the last second, triggering abrupt cross-lane swerves and vehicle-to-vehicle collisions.",
      "reasoning": "Connecting lateral distance and outer-lane sightline obstruction to inner-lane driving behavior explains the exact spatial concentration of crashes.",
      "causes": [
        "Original 4-lane roadside signs were not relocated or supplemented after widening to 6 lanes",
        "Outer-lane heavy vehicles block roadside sign sightlines for center and inner-lane drivers",
        "Late sign recognition triggers sudden high-speed lane changes and collisions"
      ]
    },
    {
      "phase": "Solution",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "That explains the spike cleanly. What corrective measures should the authority implement immediately and for future highway expansions?"
    },
    {
      "phase": "Synthesis",
      "speaker": "Candidate",
      "kind": "synthesis",
      "detail": "I recommend an immediate three-part fix. First, install overhead gantry signs and central-median signage along the 6-lane corridor so inner-lane drivers have unobstructed visibility 500 meters ahead of exits and merges. Second, add high-contrast lane markings, rumble strips, and strict outer-lane heavy-vehicle enforcement. Third, mandate signage-repositioning sign-offs on all highway widening projects while tracking weekly center-lane collision rates.",
      "reasoning": "Combining overhead visibility with heavy-vehicle lane discipline and pre-opening safety audits resolves both the immediate corridor hazard and systemic planning gaps.",
      "causes": [
        "Overhead gantries and median signs eliminate lateral sightline blockage",
        "Mandatory safety-signage audits prevent repeat failures on future 6-lane expansions"
      ]
    }
  ],
  "recommendations": [
    "P0 — Install overhead gantry and central-median signage along the 6-lane section: Guarantee unobstructed visibility of speed limits, exits, and merge warnings for center and innermost-lane drivers.",
    "P1 — Reinforce lane discipline and advance pavement warnings: Repaint high-contrast reflective lane dividers, deploy rumble strips 500 meters before junctions, and enforce outer-lane rules for slow heavy vehicles.",
    "P2 — Mandate corridor safety audits and KPI tracking: Monitor weekly center-lane collision counts and abrupt lane-change events via CCTV, and require signage-relocation sign-offs before opening future widened highways."
  ],
  "metricsAndGuardrails": {
    "northStar": "Primary Policy / Operational Objective Metric (Road Safety Authority)",
    "leading": [
      "Target cohort participation / throughput",
      "Bottleneck conversion %"
    ],
    "guardrails": [
      "Implementation cost & fairness",
      "Unintended gaming / backlash"
    ]
  },
  "synthesisScript": "For Road Safety Authority, the post-expansion collision spike in the center lanes stems from retaining legacy 4-lane roadside signage after widening the highway to 6 lanes, leaving inner-lane drivers' sightlines blocked by outer-lane traffic. Installing overhead gantry and median signage, enforcing heavy-vehicle lane discipline, and mandating signage audits on future expansions will eliminate sudden lane-change collisions.",
  "interviewerTrap": "Panicking because no textbook framework matches—or forcing a Profitability/4Ps template onto a puzzle that needs First Principles!",
  "variations": [
    {
      "question": "How would your recommendation change if Road Safety Authority had half the timeline or budget?",
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
  "id": "cm-cons-45-door-to-door-newspaper-campaign",
  "title": "Door-to-Door Newspaper Campaign",
  "company": "Media & Print Org",
  "track": "Consulting",
  "category": "Unconventional",
  "difficulty": 4,
  "isStarter": false,
  "tags": [
    "Unconventional",
    "Consulting"
  ],
  "prompt": "Our client operates a growing online newspaper and is considering launching a door-to-door print distribution network in Kolkata, India. They have not mapped out the operational details yet and want us to evaluate whether this offline expansion is feasible. How would you approach this evaluation?",
  "clarifyingQuestions": [
    {
      "q": "What is the demographic profile of the client's current online readership?",
      "a": "Most current readers are 18 to 35 years old, tech-savvy, and strongly prefer consuming news digitally.",
      "why": "Establishes whether the existing reader base would even adopt a physical print edition."
    },
    {
      "q": "If younger readers prefer digital, how large is the untapped older demographic in Kolkata?",
      "a": "Kolkata has roughly 15 million residents with an 80% literacy rate, or 12 million literate people, and about 25 to 30%—around 3.5 to 4 million people—are aged 40 and above.",
      "why": "Sizes the maximum addressable market for physical print before accounting for incumbent share."
    },
    {
      "q": "How is the core online newspaper performing financially today?",
      "a": "Online revenues are growing steadily through digital subscriptions and ad sales, supported by consistent traffic and high engagement.",
      "why": "Clarifies the opportunity cost of diverting capital and management focus away from digital growth."
    }
  ],
  "frameworkUsed": "First Principles Objective Equation → MECE Drivers & Constraints → Impact Prioritization",
  "coreEquation": "Target Outcome = ∑ (MECE Stakeholder / Funnel / Operational Drivers) Subject to Constraints",
  "strategyOverview": "Evaluate the Kolkata door-to-door print expansion for Media & Print Org across four pillars: Audience Fit & Market Size, Competitive Moat of Legacy Dailies, Printing & Distribution Economics, and Capital Allocation Trade-offs against the high-growth digital core.",
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
      "phase": "Scoping",
      "speaker": "Interviewer",
      "kind": "prompt",
      "detail": "Our client operates a growing online newspaper and is considering launching a door-to-door print distribution network in Kolkata, India. They have not mapped out the operational details yet and want us to evaluate whether this offline expansion is feasible. How would you approach this evaluation?"
    },
    {
      "phase": "Scoping",
      "speaker": "Candidate",
      "kind": "question",
      "detail": "Before structuring the feasibility assessment, I want to understand who reads the online paper today and how the digital business is performing. Are we trying to cross-sell print to existing subscribers, or acquire an entirely new older readership in Kolkata?",
      "reasoning": "Testing whether the goal is cross-selling existing users or acquiring a new segment determines the target market size and retention risk."
    },
    {
      "phase": "Structure",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "Our current online readers are mostly 18 to 35 years old and prefer digital news, while online subscription and ad revenues are growing steadily. However, management wonders if Kolkata's 15 million population—roughly 12 million literate residents, with 3.5 to 4 million aged 40 and above—represents an untapped print opportunity."
    },
    {
      "phase": "Structure",
      "speaker": "Candidate",
      "kind": "framework",
      "detail": "That immediately flags an audience mismatch with our 18 to 35 core, so the case hinges on winning the 3.5 to 4 million older cohort. I will evaluate feasibility across four pillars: addressable print demand and switching willingness, incumbent print competition, end-to-end printing and hawker unit economics, and opportunity cost versus reinvesting in digital.",
      "reasoning": "A four-pillar feasibility tree separates demand viability from supply-chain economics and strategic capital allocation."
    },
    {
      "phase": "Investigation",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "Let's test competition and cost structure. Kolkata already has several legacy newspapers with decades of reader trust and deeply entrenched hawker delivery networks, while launching print requires major upfront outlays in local printing capacity, last-mile delivery partnerships, and brand-awareness marketing.",
      "causes": [
        "Entrenched legacy print incumbents with multi-decade reader loyalty",
        "High upfront capex for printing, hawker networks, and offline marketing"
      ]
    },
    {
      "phase": "Root Cause",
      "speaker": "Candidate",
      "kind": "root-cause",
      "detail": "This looks structurally unattractive on both demand and unit economics. Targeting the 40-plus cohort pits an unknown brand against habit-driven incumbents, while low initial subscription prices and heavy printing and delivery fixed costs push break-even several years out—all while starving a steadily growing digital business of capital.",
      "reasoning": "Connecting incumbent switching friction with fixed-cost leverage exposes why payback timelines fail hurdle rates.",
      "causes": [
        "Core 18–35 audience will not switch from digital to print",
        "Multi-year break-even from fixed printing/delivery costs and low initial ARPU",
        "Capital diversion risk away from profitable digital subscription growth"
      ]
    },
    {
      "phase": "Solution",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "Agreed that a full door-to-door rollout is risky. What concrete recommendation would you give leadership if they still want to reach older Kolkata readers without burning cash?"
    },
    {
      "phase": "Synthesis",
      "speaker": "Candidate",
      "kind": "synthesis",
      "detail": "I recommend rejecting the door-to-door print rollout in Kolkata and doubling down on digital expansion, regional content, and targeted online monetization. If the client still wants exposure to the 40-plus demographic, they should test an asset-light digital-first vernacular edition or curated weekend print inserts with B2B partners rather than building a standalone hawker network.",
      "reasoning": "Offering a low-capex alternative preserves upside with older readers while protecting the profitable digital growth engine."
    }
  ],
  "recommendations": [
    "P0: Halt plans for a standalone door-to-door print and printing-plant rollout in Kolkata to avoid multi-year negative cash flows against entrenched legacy incumbents.",
    "P1: Reallocate the proposed print capex into high-ROI digital initiatives—expanding Bengali/regional digital editions, audio/video news formats, and subscriber retention funnels.",
    "P2: If offline brand visibility among 40+ readers remains a strategic goal, pilot an asset-light weekend digest via third-party transit/cafe partnerships with strict 90-day CAC payback guardrails."
  ],
  "metricsAndGuardrails": {
    "northStar": "Primary Policy / Operational Objective Metric (Media & Print Org)",
    "leading": [
      "Target cohort participation / throughput",
      "Bottleneck conversion %"
    ],
    "guardrails": [
      "Implementation cost & fairness",
      "Unintended gaming / backlash"
    ]
  },
  "synthesisScript": "I recommend against launching a door-to-door print newspaper in Kolkata because our 18–35 core readership prefers digital, entrenched legacy dailies lock up the 3.5–4M older segment, and heavy printing and hawker setup costs push break-even years out. Instead, the client should reinvest that capital into high-margin digital subscriptions and ad growth, using only asset-light digital vernacular outreach to tap older readers.",
  "interviewerTrap": "Panicking because no textbook framework matches—or forcing a Profitability/4Ps template onto a puzzle that needs First Principles!",
  "variations": [
    {
      "question": "How would your recommendation change if Media & Print Org had half the timeline or budget?",
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
  "id": "cm-cons-unc-women-voters",
  "title": "Increasing Women Voter Turnout",
  "company": "Civic Outreach Initiative",
  "track": "Consulting",
  "category": "Unconventional",
  "difficulty": 4,
  "isStarter": false,
  "tags": [
    "Unconventional",
    "Consulting"
  ],
  "prompt": "Our client is a civic outreach initiative planning a nationwide voter mobilization campaign ahead of the upcoming General Lok Sabha elections. They want to significantly increase voter turnout among women across India. How would you design this campaign?",
  "clarifyingQuestions": [
    {
      "q": "Are we designing this campaign for a specific state election or the national General Lok Sabha election?",
      "a": "We are targeting the General Lok Sabha election to lift women's voter participation nationwide.",
      "why": "Determines the scale, messaging diversity, and multi-tier media mix required."
    },
    {
      "q": "Should we concentrate on specific states or socioeconomic segments?",
      "a": "No, the campaign needs a pan-India footprint reaching women across all states, union territories, age groups, and socioeconomic backgrounds.",
      "why": "Requires balancing mass-reach broadcast channels with hyper-local rural and urban grassroots mobilization."
    },
    {
      "q": "Is the primary bottleneck voter registration or actual polling-day turnout?",
      "a": "Focus primarily on motivating registered and eligible women voters to turn out on election day.",
      "why": "Aligns the creative message and community touchpoints around overcoming behavioral and logistical turnout barriers."
    }
  ],
  "frameworkUsed": "First Principles Objective Equation → MECE Drivers & Constraints → Impact Prioritization",
  "coreEquation": "Target Outcome = ∑ (MECE Stakeholder / Funnel / Operational Drivers) Subject to Constraints",
  "strategyOverview": "Design a pan-India women's voter mobilization campaign for Civic Outreach Initiative by anchoring on a resonant core issue (personal safety and empowerment), deploying a 3-channel mass media mix (Print, TV, Digital), and driving last-mile trust through Naari Sangathans, urban residential plays, and women leader forums.",
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
      "phase": "Scoping",
      "speaker": "Interviewer",
      "kind": "prompt",
      "detail": "Our client is a civic outreach initiative planning a nationwide voter mobilization campaign ahead of the upcoming General Lok Sabha elections. They want to significantly increase voter turnout among women across India. How would you design this campaign?"
    },
    {
      "phase": "Scoping",
      "speaker": "Candidate",
      "kind": "question",
      "detail": "To scope the campaign effectively, are we targeting the national Lok Sabha elections or a regional assembly cycle, and should we focus on specific states or a pan-India demographic?",
      "reasoning": "Confirming election scope and geographic breadth dictates whether the channel mix should be hyper-regional or nationwide."
    },
    {
      "phase": "Structure",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "This is a pan-India campaign for the General Lok Sabha elections, targeting women across all states, union territories, age brackets, and socioeconomic tiers."
    },
    {
      "phase": "Structure",
      "speaker": "Candidate",
      "kind": "framework",
      "detail": "Given that breadth, I will structure the campaign in three layers: first, identifying core unifying themes that resonate across demographics; second, selecting a multi-channel media mix across urban and rural India; and third, designing grassroots community activations to convert awareness into booth-level turnout.",
      "reasoning": "Separating message resonance, mass media reach, and hyper-local trust-building ensures no demographic tier is left behind."
    },
    {
      "phase": "Investigation",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "Let's start with the core message. Among issues like safety, education, equal rights, healthcare, and representation, which anchor should lead the creative strategy, and how would you adapt your media channels around it?",
      "causes": [
        "Women's personal safety and empowerment serve as the strongest cross-demographic motivator",
        "Media consumption splits sharply between regional TV/print and youth-skewed digital platforms"
      ]
    },
    {
      "phase": "Root Cause",
      "speaker": "Candidate",
      "kind": "hypothesis",
      "detail": "Personal safety and agency should anchor the campaign because they resonate universally across rural and urban households. To distribute this message, I recommend a three-pronged media mix: print banners in high-footfall markets and community centers, targeted regional TV spots during prime-time daily soap operas, and digital storytelling by relatable women influencers and leaders.",
      "reasoning": "Matching each demographic's primary media touchpoint prevents urban-digital skew and maximizes reach among homemakers.",
      "causes": [
        "Lack of localized trust in purely top-down advertising",
        "Rural vs. urban divergence in media access and community gathering points"
      ]
    },
    {
      "phase": "Solution",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "That covers broad awareness well. What grassroots activities would you deploy to deepen engagement and actually get women to the polling booth?"
    },
    {
      "phase": "Synthesis",
      "speaker": "Candidate",
      "kind": "synthesis",
      "detail": "To bridge awareness to action, we should partner with Naari Sangathans and women's self-help groups in rural areas where peer trust is highest, stage street plays and voter-pledge drives inside urban residential societies, and host seminars with women leaders from healthcare, business, and education. We will track booth-level female turnout lift against historical baselines while ensuring strictly non-partisan messaging.",
      "reasoning": "Combining peer-trusted rural collectives with urban civic activations converts passive awareness into election-day turnout."
    }
  ],
  "recommendations": [
    "P0: Anchor pan-India campaign messaging on women's personal safety and agency, deploying regional TV spots during prime-time daily soaps alongside market-center print banners.",
    "P1: Partner with rural Naari Sangathans and self-help groups to run door-to-door polling-day mobilization and buddy-voting groups in low-turnout districts.",
    "P2: Execute urban residential-society street plays, influencer video series, and cross-sector women-leader town halls while tracking booth-level turnout lift and non-partisan compliance."
  ],
  "metricsAndGuardrails": {
    "northStar": "Primary Policy / Operational Objective Metric (Civic Outreach Initiative)",
    "leading": [
      "Target cohort participation / throughput",
      "Bottleneck conversion %"
    ],
    "guardrails": [
      "Implementation cost & fairness",
      "Unintended gaming / backlash"
    ]
  },
  "synthesisScript": "To maximize women's turnout for the General Lok Sabha elections, I recommend anchoring the campaign on personal safety and agency across a three-tier funnel: regional TV soaps and market print for broad reach, digital women-leader storytelling for younger voters, and grassroots partnerships with rural Naari Sangathans plus urban society street plays. Success will be tracked via district-level female turnout lift against prior-cycle baselines under strict non-partisan guardrails.",
  "interviewerTrap": "Panicking because no textbook framework matches—or forcing a Profitability/4Ps template onto a puzzle that needs First Principles!",
  "variations": [
    {
      "question": "How would your recommendation change if Civic Outreach Initiative had half the timeline or budget?",
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
  "id": "cm-cons-47-old-winery-valuation-strategy",
  "title": "Old Winery Valuation & Strategy",
  "company": "Winery Estate",
  "track": "Consulting",
  "category": "Unconventional",
  "difficulty": 4,
  "isStarter": false,
  "tags": [
    "Unconventional",
    "Consulting"
  ],
  "prompt": "You have inherited the Old Winery, a 16th-century family-owned vineyard passed down for five generations. A young winemaker currently manages operations, but low brand visibility has kept wine demand weak, and you do not plan to run the business directly. How would you size its production potential and design a strategy to revitalize the estate while preserving its heritage?",
  "clarifyingQuestions": [
    {
      "q": "What is the current condition of the vineyard, and is the entire grape harvest turned into wine?",
      "a": "The vine stocks across the 11-hectare estate are in good condition, but only one-quarter of the harvest is currently vinified into wine while three-quarters is sold as raw grapes.",
      "why": "Reveals immediate under-utilized value-add capacity without needing new land acquisition."
    },
    {
      "q": "What are the grape-to-wine yield metrics and standard bottle size?",
      "a": "Vines occupy 4 square meters (2m by 2m) with roughly 2 meters of vine yielding 3 kg of grapes per meter, wine yield is ~0.5 liters per kg of grapes, and bottles are 0.75 liters.",
      "why": "Provides the exact physical inputs required to calculate maximum annual bottle output and revenue upside."
    },
    {
      "q": "What is the owner's objective regarding operational involvement and brand positioning?",
      "a": "The owner wants to remain hands-off operationally while boosting profitability and preserving the five-generation heritage.",
      "why": "Steers the operating model toward empowering the young winemaker and outsourcing non-core commercial functions."
    }
  ],
  "frameworkUsed": "First Principles Objective Equation → MECE Drivers & Constraints → Impact Prioritization",
  "coreEquation": "Target Outcome = ∑ (MECE Stakeholder / Funnel / Operational Drivers) Subject to Constraints",
  "strategyOverview": "Revitalize Winery Estate by first sizing maximum bottle capacity (110,000 bottles/year vs. ~27,500 currently produced), auditing value-chain feasibility from cultivation to sales, and shifting mix from raw grapes toward high-margin heritage wine via boutique distribution and hands-off estate governance.",
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
      "phase": "Scoping",
      "speaker": "Interviewer",
      "kind": "prompt",
      "detail": "You have inherited the Old Winery, a 16th-century family-owned vineyard passed down for five generations. A young winemaker currently manages operations, but low brand visibility has kept wine demand weak, and you do not plan to run the business directly. How would you size its production potential and design a strategy to revitalize the estate while preserving its heritage?"
    },
    {
      "phase": "Scoping",
      "speaker": "Candidate",
      "kind": "question",
      "detail": "Thank you for the scenario. Before structuring the strategy, I'd like to check the condition and size of the vineyard, whether all harvested grapes are made into wine today, and what our bottle size and wine yield look like.",
      "reasoning": "Establishing physical land yield and current vinification mix reveals whether growth is constrained by supply or commercial demand."
    },
    {
      "phase": "Structure",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "The 11-hectare estate has healthy vine stocks, but only one-fourth of the harvest is turned into wine while three-fourths is sold as raw grapes. Each 2m by 2m plot holds about 2m of vine yielding 3 kg per meter, 1 kg of grapes yields 0.5 liters of wine, and we bottle in 0.75-liter bottles."
    },
    {
      "phase": "Structure",
      "speaker": "Candidate",
      "kind": "framework",
      "detail": "Great, I will structure my analysis in three parts: first, calculating our theoretical annual bottle capacity; second, assessing qualitative feasibility across the value chain from cultivation and vinification to bottling and sales; and third, evaluating quantitative revenue, pricing, and cost levers that fit a hands-off owner.",
      "reasoning": "Quantifying capacity headroom first anchors the commercial and operational recommendations in realistic volume targets."
    },
    {
      "phase": "Investigation",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "That structure makes sense. Walk me through your production math and tell me where the biggest bottleneck sits today.",
      "causes": [
        "75% of grape harvest is sold raw at low commodity margins instead of being bottled",
        "Low brand visibility keeps wine demand far below the 110,000-bottle estate capacity"
      ]
    },
    {
      "phase": "Root Cause",
      "speaker": "Candidate",
      "kind": "root-cause",
      "detail": "At 2 meters of vine per 4 square meters yielding 3 kg per meter, we produce 1.5 kg per square meter—or 15,000 kg per hectare. Across 11 hectares that is 165,000 kg of grapes, which at 0.5 liters per kg equals 82,500 liters, or 110,000 bottles of 0.75 liters annually. Because we only vinify 25% today, we are producing around 27,500 bottles and leaving 82,500 bottles of value-added capacity on the table due to weak brand awareness and underdeveloped sales channels.",
      "reasoning": "Deriving the 110,000-bottle ceiling proves that commercial demand—not vineyard supply—is the primary constraint on profitability.",
      "causes": [
        "Under-utilized vinification capacity (~27,500 vs. 110,000 bottle potential)",
        "Lack of modern brand storytelling and direct/hospitality sales channels"
      ]
    },
    {
      "phase": "Solution",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "The math is spot on. Given you don't want to manage day-to-day operations, how would you unlock that demand while preserving the 16th-century heritage?"
    },
    {
      "phase": "Synthesis",
      "speaker": "Candidate",
      "kind": "synthesis",
      "detail": "I recommend shifting the harvest mix progressively from 25% to 75%+ bottled wine by pairing the young winemaker's craft with an outsourced commercial distributor and boutique hospitality partners. We should rebrand around the 16th-century five-generation story for premium pricing, launch high-margin estate tastings and direct-to-consumer wine clubs, and retain a professional general manager with margin-linked incentives so the owner stays strategic rather than operational.",
      "reasoning": "Empowering a commercial partner and monetizing heritage through D2C and tourism scales margins without requiring daily owner oversight."
    }
  ],
  "recommendations": [
    "P0: Gradually shift harvest allocation from 25% to 75%+ wine production to capture the ~82,500-bottle value-added gap rather than selling commodity raw grapes.",
    "P1: Rebrand around the 16th-century five-generation provenance and launch D2C wine clubs plus weekend vineyard tastings with boutique hospitality partners.",
    "P2: Appoint a commercial sales lead or distributor and tie the winemaker's compensation to quality ratings and gross margin so the owner remains hands-off."
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
  "synthesisScript": "The Old Winery can produce up to 110,000 bottles (0.75L) annually across its 11 hectares, yet currently vinifies only 25% (~27,500 bottles) and sells 75% as low-margin raw grapes due to weak visibility. By shifting harvest mix toward bottled wine, packaging the 16th-century heritage into D2C clubs and estate tourism, and delegating sales to a commercial partner, the owner can unlock high-margin growth without day-to-day involvement.",
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
  "id": "cm-cons-48-relationship-dilemma-framework",
  "title": "Relationship Dilemma Framework",
  "company": "Corporate Intern",
  "track": "Consulting",
  "category": "Unconventional",
  "difficulty": 4,
  "isStarter": false,
  "tags": [
    "Unconventional",
    "Consulting"
  ],
  "prompt": "Suppose you land a demanding 6-month corporate internship with long working hours while in a committed relationship. How would you structure a strategy to prevent the workload from creating conflict and keep the relationship healthy?",
  "clarifyingQuestions": [
    {
      "q": "Should I treat this as a part-time student internship alongside classes or a full-time corporate role with long hours?",
      "a": "Assume it is a full-time professional corporate internship with demanding hours.",
      "why": "Sets the severity of the weekly time constraint and fatigue factor."
    },
    {
      "q": "What is my partner's schedule—are they also working full-time or do they have more flexible availability?",
      "a": "Your partner is also working full-time, so both of you have busy schedules.",
      "why": "Indicates that coordination windows are narrow on both sides, making spontaneous meetups difficult."
    },
    {
      "q": "Will we be in the same city during the 6 months, or will this be long-distance?",
      "a": "You are in the same city, so time availability rather than physical distance is the primary constraint.",
      "why": "Focuses the solution on calendar discipline, energy management, and high-quality micro-touchpoints."
    }
  ],
  "frameworkUsed": "First Principles Objective Equation → MECE Drivers & Constraints → Impact Prioritization",
  "coreEquation": "Target Outcome = ∑ (MECE Stakeholder / Funnel / Operational Drivers) Subject to Constraints",
  "strategyOverview": "Structure the 6-month relationship strategy for Corporate Intern chronologically across three phases—Pre-Internship Alignment, During-Internship Cadence & Boundaries, and Post-Internship Reconnection & Retrospective—to manage mutual busy schedules in the same city.",
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
      "phase": "Scoping",
      "speaker": "Interviewer",
      "kind": "prompt",
      "detail": "Suppose you land a demanding 6-month corporate internship with long working hours while in a committed relationship. How would you structure a strategy to prevent the workload from creating conflict and keep the relationship healthy?"
    },
    {
      "phase": "Scoping",
      "speaker": "Candidate",
      "kind": "question",
      "detail": "Before laying out a framework, I'd like to clarify three parameters: is this a full-time corporate role with long hours, is my partner also working full-time, and are we in the same city during these six months?",
      "reasoning": "Identifying whether the bottleneck is geographic distance or mutual calendar scarcity shapes the communication plan."
    },
    {
      "phase": "Structure",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "Assume it is a demanding full-time corporate internship in the same city, and your partner is also working full-time with busy hours."
    },
    {
      "phase": "Structure",
      "speaker": "Candidate",
      "kind": "framework",
      "detail": "Understood—our core constraint is overlapping time scarcity rather than physical distance. I will divide the strategy chronologically into three phases: Before the internship to align expectations, During the internship to sustain low-friction connection and protected time, and After the internship to reconnect and build long-term resilience.",
      "reasoning": "A lifecycle approach prevents surprises upfront, sustains rituals under peak stress, and captures learnings afterward."
    },
    {
      "phase": "Investigation",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "Let's unpack the first two phases. What usually breaks down when both partners work long hours, and how do you proactively prevent that before and during the 6 months?",
      "causes": [
        "Unspoken expectations around weekday availability cause avoidable resentment",
        "Mental fatigue erodes emotional presence even when living in the same city"
      ]
    },
    {
      "phase": "Root Cause",
      "speaker": "Candidate",
      "kind": "hypothesis",
      "detail": "Conflicts usually stem from misaligned expectations and feeling excluded from each other's daily lives. Before starting, I would hold a candid conversation outlining the six-month workload while reaffirming commitment, and front-load quality time like a short weekend getaway. During the internship, I would replace long unstructured hangouts with reliable micro-touchpoints—a morning check-in text, a five-minute evening call, sharing work learnings so my partner feels included—and strictly block one sacred weekend evening on both calendars.",
      "reasoning": "Combining predictable daily micro-rituals with one protected weekly block balances career intensity with emotional security.",
      "causes": [
        "Ad-hoc scheduling fails when both calendars are tight",
        "Partners feel sidelined when career stress crowds out shared context"
      ]
    },
    {
      "phase": "Solution",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "That handles the active crunch well. How do you close the loop once the six months wrap up?"
    },
    {
      "phase": "Synthesis",
      "speaker": "Candidate",
      "kind": "synthesis",
      "detail": "Post-internship, I would schedule an intentional reset—such as a dedicated trip or shared hobby—to shift back into full presence, followed by a joint retrospective on what worked and where friction appeared. Overall, setting transparent expectations beforehand, protecting consistent micro-rituals and one weekly anchor date during the crunch, and debriefing afterward turns a temporary 6-month strain into lasting relationship resilience.",
      "reasoning": "A structured debrief converts short-term coping habits into a repeatable playbook for future demanding career sprints."
    }
  ],
  "recommendations": [
    "P0: Hold a pre-internship alignment conversation to set realistic weekday expectations, reaffirm commitment, and bank quality time via a pre-start getaway.",
    "P1: Institutionalize daily 5-minute check-ins and one non-negotiable protected weekend evening on both calendars to prevent ad-hoc cancellations.",
    "P2: Conclude the 6 months with a dedicated reconnection trip and a candid retrospective on communication wins and friction points for future career sprints."
  ],
  "metricsAndGuardrails": {
    "northStar": "Primary Policy / Operational Objective Metric (Corporate Intern)",
    "leading": [
      "Target cohort participation / throughput",
      "Bottleneck conversion %"
    ],
    "guardrails": [
      "Implementation cost & fairness",
      "Unintended gaming / backlash"
    ]
  },
  "synthesisScript": "To prevent a 6-month corporate internship from straining a dual-career relationship in the same city, manage the timeline across three stages: align expectations and front-load quality time beforehand, maintain predictable daily 5-minute check-ins plus one protected weekly date during peak hours, and run a post-internship reset and retrospective. This prevents unspoken resentment while building resilience for future demanding projects.",
  "interviewerTrap": "Panicking because no textbook framework matches—or forcing a Profitability/4Ps template onto a puzzle that needs First Principles!",
  "variations": [
    {
      "question": "How would your recommendation change if Corporate Intern had half the timeline or budget?",
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
  "id": "cm-cons-49-user-analysis-deep-dive",
  "title": "User Analysis Deep-Dive",
  "company": "Zomato",
  "track": "Consulting",
  "category": "Unconventional",
  "difficulty": 4,
  "isStarter": false,
  "tags": [
    "Zomato",
    "Unconventional",
    "Consulting"
  ],
  "prompt": "You are analyzing user behavior on the Zomato app. If you plot Conversion Rate against Time Spent in a session, you observe a curve with two peaks and two dips. How would you interpret these user segments and design product strategies to improve conversion?",
  "clarifyingQuestions": [
    {
      "q": "What does Conversion Rate represent on this plot—completed food orders per app session?",
      "a": "Yes, it tracks the percentage of active browsing sessions that end in a completed order against total session duration.",
      "why": "Clarifies that we are optimizing checkout completion rather than merely maximizing time on app."
    },
    {
      "q": "What is the exact shape of the Conversion Rate vs. Time Spent curve?",
      "a": "The curve shows two local maxima (First Peak and Second Peak) separated by a First Dip, followed by a Second Dip at very long session times.",
      "why": "Allows segmenting users into four distinct behavioral cohorts based on intent clarity and price sensitivity."
    },
    {
      "q": "Should our interventions prioritize lifting order volume while guarding contribution margin?",
      "a": "Yes, reduce drop-offs and competitor switching without relying on blanket margin-eroding discounts.",
      "why": "Ensures targeted rescue offers go only to price-sensitive or fatigued cohorts rather than loyal quick deciders."
    }
  ],
  "frameworkUsed": "First Principles Objective Equation → MECE Drivers & Constraints → Impact Prioritization",
  "coreEquation": "Target Outcome = ∑ (MECE Stakeholder / Funnel / Operational Drivers) Subject to Constraints",
  "strategyOverview": "Segment Zomato's bimodal Conversion vs. Time Spent curve into four distinct cohorts—First Peak (loyal quick deciders), First Dip (light explorers), Second Peak (price-sensitive comparers), and Second Dip (decision-fatigued switchers)—and deploy targeted UX, SLA, and dynamic offer interventions per cohort.",
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
      "phase": "Scoping",
      "speaker": "Interviewer",
      "kind": "prompt",
      "detail": "You are analyzing user behavior on the Zomato app. If you plot Conversion Rate against Time Spent in a session, you observe a curve with two peaks and two dips. How would you interpret these user segments and design product strategies to improve conversion?"
    },
    {
      "phase": "Scoping",
      "speaker": "Candidate",
      "kind": "question",
      "detail": "To confirm the metric setup, does Conversion Rate measure completed orders per session, and are we aiming to lift total orders without giving blanket discounts to users who would convert anyway?",
      "reasoning": "Confirming the conversion definition and margin guardrail prevents recommending unnecessary subsidies for high-intent users."
    },
    {
      "phase": "Structure",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "Yes, it is session-to-order conversion, and protecting unit economics is critical. Walk me through what the First Peak, First Dip, Second Peak, and Second Dip tell us about user intent and price sensitivity."
    },
    {
      "phase": "Structure",
      "speaker": "Candidate",
      "kind": "framework",
      "detail": "I see four distinct behavioral cohorts along the time axis. The First Peak reflects high-loyalty quick deciders with low offer sensitivity who know what they want. The First Dip captures light explorers and delayed deciders dropping off early. The Second Peak represents menu explorers and price-sensitive value maximizers comparing options, while the Second Dip reflects overwhelmed users hitting decision fatigue or switching to a competitor.",
      "reasoning": "Mapping each inflection point to intent clarity and price sensitivity lets us tailor UX friction removal versus targeted incentives."
    },
    {
      "phase": "Investigation",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "That segmentation is spot on. When users in those dips switch to a competing delivery app, what factors typically trigger the switch, and how does ETA sensitivity differ across cohorts?",
      "causes": [
        "Better competitor discounts and combo offers pull away Second Peak comparers",
        "Slow delivery ETAs and clunky UX push First Peak quick deciders to switch"
      ]
    },
    {
      "phase": "Root Cause",
      "speaker": "Candidate",
      "kind": "root-cause",
      "detail": "Switching stems from four drivers: superior competitor discounts, significantly faster delivery ETAs, broader cuisine variety, or smoother app ratings and UX. Crucially, sensitivity varies by segment: quick deciders at the First Peak are hyper-sensitive to ETA delays and checkout friction, price-sensitive comparers at the Second Peak respond mainly to deal competitiveness, and fatigued users at the Second Dip churn from choice overload combined with long ETAs.",
      "reasoning": "Differentiating ETA sensitivity from discount sensitivity avoids wasting promo spend on loyal repeat users.",
      "causes": [
        "Checkout friction and ETA spikes alienate high-intent First Peak users",
        "Choice overload and missing deal comparisons stall Second Peak/Dip browsers"
      ]
    },
    {
      "phase": "Solution",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "Given those distinct drivers, what targeted product and pricing plays would you roll out for each of the four segments?"
    },
    {
      "phase": "Synthesis",
      "speaker": "Candidate",
      "kind": "synthesis",
      "detail": "For the First Peak, I'd prioritize one-click 'Order Again' shelves, favorite-item notifications, and strict ETA reliability rather than discounts. For the First Dip, use mid-session nudges, 'Recently Viewed' shortcuts, and abandoned-cart reminders. For the Second Peak, surface dynamic personalized offers, meal bundles, and deal-comparison widgets, and for the Second Dip, trigger rescue prompts with curated top-3 picks and time-limited flash deals to break decision fatigue.",
      "reasoning": "Matching intervention cost to segment elasticity lifts overall session conversion while preserving contribution margin."
    }
  ],
  "recommendations": [
    "P0: Protect First Peak conversion without promo burn by launching a one-click 'Order Again' carousel on the home screen and enforcing strict delivery-ETA reliability.",
    "P1: Capture First Dip and Second Peak explorers via 'Recently Viewed' quick links, abandoned-cart nudges, and dynamic personalized bundle/deal-comparison widgets.",
    "P2: Rescue Second Dip fatigued sessions with curated top-3 AI recommendations and time-boxed flash offers, tracking incremental conversion lift against promo-cost-per-order guardrails."
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
  "synthesisScript": "Zomato's bimodal Conversion vs. Time Spent curve separates loyal quick deciders (First Peak) and value-hunting comparers (Second Peak) from light browsers (First Dip) and fatigued switchers (Second Dip). We should protect First Peak users via one-click reordering and fast ETAs without discounts, re-engage First Dip users with cart/view nudges, and convert Second Peak/Dip users using curated top-3 picks, bundles, and targeted time-limited rescue deals.",
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
  "id": "cm-cons-50-well-being-healthcare-strategy",
  "title": "Well Being Healthcare Strategy",
  "company": "Healthcare Platform",
  "track": "Consulting",
  "category": "Unconventional",
  "difficulty": 4,
  "isStarter": false,
  "tags": [
    "Unconventional",
    "Consulting"
  ],
  "prompt": "Our client, Well Being (WB), is a private healthcare provider operating 10 hospitals in Germany alongside roughly 1,000 public hospitals. The Governmental National Healthcare system (NHC) has proposed outsourcing a portion of its overflow patients to WB. How would you evaluate this opportunity and advise WB on whether to accept?",
  "clarifyingQuestions": [
    {
      "q": "What is WB's current market position and primary strategic objective?",
      "a": "WB holds under 1% market share and aims to grow its market presence while improving profitability.",
      "why": "Establishes that incremental patient volume must be margin-accretive rather than purely top-line dilutive."
    },
    {
      "q": "How do WB's hospitals compare to public hospitals in size, services, and payer mix?",
      "a": "WB's hospitals are about half the size of public ones, do not offer Accident & Emergency (ER) services, and earn revenue from private-insurance and cash-paying patients.",
      "why": "Highlights that WB is best suited for planned elective care and faces payer-mix cannibalization risk if public contracts crowd out private beds."
    },
    {
      "q": "What specific procedures or patient volumes is NHC proposing to outsource?",
      "a": "NHC wants to issue bulk contracts to outsource elective hip-replacement operations due to long public waiting lists.",
      "why": "Focuses operational and unit-economic evaluation on orthopedic OR capacity, standardization, and bulk pricing."
    }
  ],
  "frameworkUsed": "First Principles Objective Equation → MECE Drivers & Constraints → Impact Prioritization",
  "coreEquation": "Target Outcome = ∑ (MECE Stakeholder / Funnel / Operational Drivers) Subject to Constraints",
  "strategyOverview": "Evaluate NHC's bulk hip-replacement outsourcing offer for Well Being (Healthcare Platform) by assessing German hospital industry structure (Five Forces), operational fit with WB's non-ER elective hospitals, unit economics vs. private-patient cannibalization, and long-term public-payer dependency risk.",
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
      "phase": "Scoping",
      "speaker": "Interviewer",
      "kind": "prompt",
      "detail": "Our client, Well Being (WB), is a private healthcare provider operating 10 hospitals in Germany alongside roughly 1,000 public hospitals. The Governmental National Healthcare system (NHC) has proposed outsourcing a portion of its overflow patients to WB. How would you evaluate this opportunity and advise WB on whether to accept?"
    },
    {
      "phase": "Scoping",
      "speaker": "Candidate",
      "kind": "question",
      "detail": "Before structuring my analysis, I'd like to clarify WB's strategic goal—is it market share growth or profitability? Also, how do WB's 10 hospitals differ from public hospitals in scale, service mix, and current payer profile?",
      "reasoning": "Understanding existing hospital capabilities and payer margins clarifies whether public overflow complements or cannibalizes core revenue."
    },
    {
      "phase": "Structure",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "WB holds less than 1% share and wants to grow both presence and profitability. Their hospitals are half the size of public facilities, lack Accident and Emergency (ER) departments, and rely on private-insurance and cash patients. Specifically, NHC is offering bulk contracts to outsource hip-replacement surgeries due to long public waitlists."
    },
    {
      "phase": "Structure",
      "speaker": "Candidate",
      "kind": "framework",
      "detail": "That makes this a clear strategic and financial trade-off. I will evaluate the offer across four lenses: German hospital competitive dynamics, operational fit of bulk hip replacements with WB's non-ER footprint, financial unit economics including capacity and private-patient cannibalization, and strategic risks around public-payer bargaining power.",
      "reasoning": "Combining industry attractiveness with unit economics and cannibalization tests both short-term margin and long-term positioning."
    },
    {
      "phase": "Investigation",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "Let's look at the German market structure. Rivalry is intense between NHC's 1,000 public hospitals and competing private chains, compressing margins for small players. Patients hold strong buyer power since they can easily choose public options, while entry barriers are moderate—requiring capital and clinical expertise, though international groups can enter.",
      "causes": [
        "High rivalry and strong patient buyer power compress margins for <1% private players",
        "Absence of ER suits planned elective surgeries like hip replacements if OR utilization has slack"
      ]
    },
    {
      "phase": "Root Cause",
      "speaker": "Candidate",
      "kind": "root-cause",
      "detail": "Given intense rivalry and low scale, WB cannot win on price alone and must differentiate on wait times, clinical quality, and specialized care. Bulk hip replacements fit WB's non-ER model operationally because elective orthopedics allow predictable scheduling and scale economies in implants and surgical teams. However, the core risk is margin dilution and capacity lock-in: bulk NHC tariffs will likely sit below private-insurance rates, and over-committing beds could displace high-margin cash/private patients or leave WB exposed if NHC later pulls the contract.",
      "reasoning": "Balancing orthopedic specialization economies against private-payer displacement identifies the exact threshold for accepting the contract.",
      "causes": [
        "Lower NHC bulk reimbursement rates vs. private-insurance and cash pricing",
        "Risk of crowding out high-margin private beds and creating single-buyer dependency"
      ]
    },
    {
      "phase": "Solution",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "Well framed. Under what conditions should WB accept the NHC hip-replacement contract, and how should they structure the deal?"
    },
    {
      "phase": "Synthesis",
      "speaker": "Candidate",
      "kind": "synthesis",
      "detail": "I recommend accepting the NHC hip-replacement contract conditionally—only if NHC rates exceed WB's marginal surgical cost plus a target contribution margin, and strictly capped at currently idle operating-room capacity so private patients are never displaced. WB should negotiate multi-year minimum volume guarantees, standardize orthopedic care pathways to drive down per-case costs, and use the predictable public cash flow to fund brand differentiation and selective facility expansion.",
      "reasoning": "Capping public volume at idle capacity captures fixed-cost leverage while safeguarding WB's premium private positioning."
    }
  ],
  "recommendations": [
    "P0: Conduct a hospital-by-hospital OR and bed-utilization audit and accept NHC hip-replacement volume only up to idle capacity so private-insurance and cash patients are not crowded out.",
    "P1: Negotiate multi-year volume floors and transparent DRG/bulk reimbursement tariffs with NHC that cover variable implant/staff costs and contribute to fixed hospital overhead.",
    "P2: Establish specialized orthopedic centers of excellence across select WB hospitals to standardize hip-replacement protocols, lower unit costs, and raise quality differentiation."
  ],
  "metricsAndGuardrails": {
    "northStar": "Primary Policy / Operational Objective Metric (Healthcare Platform)",
    "leading": [
      "Target cohort participation / throughput",
      "Bottleneck conversion %"
    ],
    "guardrails": [
      "Implementation cost & fairness",
      "Unintended gaming / backlash"
    ]
  },
  "synthesisScript": "Well Being should conditionally accept NHC's bulk hip-replacement contract because elective orthopedics align well with WB's non-ER hospital model and can absorb fixed overhead in a margin-compressed market. However, WB must cap NHC volume strictly at idle capacity, secure multi-year minimum volume guarantees above marginal cost, and protect private-insurance bed availability to avoid margin dilution.",
  "interviewerTrap": "Panicking because no textbook framework matches—or forcing a Profitability/4Ps template onto a puzzle that needs First Principles!",
  "variations": [
    {
      "question": "How would your recommendation change if Healthcare Platform had half the timeline or budget?",
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
  "id": "cm-strat-fast-food-chain",
  "title": "Fast Food QSR Chain Revenue Decline",
  "company": "QSR Chain",
  "track": "Consulting",
  "category": "Profitability",
  "difficulty": 1,
  "isStarter": true,
  "tags": [
    "Profitability",
    "QSR",
    "Revenue Decline",
    "NPS"
  ],
  "prompt": "Our client is a leading Quick Service Restaurant (QSR) chain with a nationwide footprint and a standard fast-food menu. Over the last quarter, the business experienced a roughly 15% decline in revenue. How would you diagnose the root cause of this drop and turn performance around?",
  "clarifyingQuestions": [
    {
      "q": "Is the 15% revenue drop concentrated in specific cities or store formats, or is it broad-based?",
      "a": "The decline is broad-based across markets and stores nationwide, with no major changes in menu pricing or competitor activity.",
      "why": "Rules out localized macroeconomic shocks or price wars, pointing toward a system-wide internal change."
    },
    {
      "q": "Which component of store revenue fell—customer transaction volume or average spend per visit?",
      "a": "Monthly customer transactions per store dropped by ~12%, while average ticket size stayed relatively stable.",
      "why": "Narrows the investigation to footfall and repeat-visit frequency rather than upselling or menu price elasticity."
    },
    {
      "q": "Has the brand tracked customer feedback or Net Promoter Score (NPS) during this quarter?",
      "a": "Yes, NPS dipped noticeably, with multiple customers citing frustration over recent changes to the loyalty program.",
      "why": "Provides a direct behavioral link between repeat traffic loss and loyalty-program friction."
    }
  ],
  "frameworkUsed": "Revenue Tree (Customers × Average Spend) → Internal Loyalty/NPS & Store Operations Audit",
  "coreEquation": "Store Revenue = Footfall/Transactions × Average Ticket Size",
  "strategyOverview": "Break QSR Chain revenue into Transactions × Average Spend. Since pricing and competitor activity are stable while monthly transactions fell ~12% alongside an NPS dip, audit internal customer retention levers—pinpointing an uncommunicated loyalty-program devaluation—and deploy win-back credits, omnichannel alerts, and A/B pilot guardrails.",
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
      "phase": "Scoping",
      "speaker": "Interviewer",
      "kind": "prompt",
      "detail": "Our client is a leading Quick Service Restaurant (QSR) chain with a nationwide footprint and a standard fast-food menu. Over the last quarter, the business experienced a roughly 15% decline in revenue. How would you diagnose the root cause of this drop and turn performance around?"
    },
    {
      "phase": "Scoping",
      "speaker": "Candidate",
      "kind": "question",
      "detail": "Before building my issue tree, I'd like to confirm three things: is this 15% drop localized or nationwide, have menu prices or offerings changed, and has there been any aggressive competitor launch this quarter?",
      "reasoning": "Isolating geography, pricing, and competitive shifts determines whether the cause is external market pressure or an internal policy change."
    },
    {
      "phase": "Structure",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "The 15% decline is broad-based across almost all markets and stores nationwide. Menu offerings and prices haven't changed, and competitor activity has been largely stable."
    },
    {
      "phase": "Structure",
      "speaker": "Candidate",
      "kind": "framework",
      "detail": "That points strongly to an internal nationwide driver. I'll decompose Revenue into Number of Customer Transactions times Average Spend per Customer, and across those levers examine five areas: store operations and wait times, loyalty and retention programs, customer experience and NPS, marketing effectiveness, and any macro shifts. Let's check first whether transactions or ticket size drove the 15% drop.",
      "reasoning": "Splitting transactions from average spend immediately narrows whether customers are visiting less often or ordering smaller baskets."
    },
    {
      "phase": "Investigation",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "Average spend held steady, but monthly transactions per store dropped about 12%. At the same time, our NPS tracking showed a noticeable dip, with several customers complaining about the loyalty program—specifically that old points were voided, monthly redemptions were capped, and new points now expire after 30 days.",
      "causes": [
        "Major loyalty devaluation: voided legacy points, monthly redemption caps, and 30-day expiry",
        "Email-only rollout meant customers only discovered lost points at checkout"
      ]
    },
    {
      "phase": "Root Cause",
      "speaker": "Candidate",
      "kind": "root-cause",
      "detail": "That explains the nationwide 12% traffic loss. Voiding accrued points, capping redemptions, and imposing a 30-day expiry sharply reduced the perceived value of repeat visits, while relying solely on email communication meant loyal customers felt ambushed at the register. That checkout friction hurt NPS and broke their habitual visit frequency.",
      "reasoning": "Connecting the email-only communication gap to checkout surprise explains why even loyal repeat customers churned simultaneously nationwide.",
      "causes": [
        "Abrupt loyalty value erosion driving repeat-visit churn",
        "Single-channel email notice caused point-of-sale trust breakdown"
      ]
    },
    {
      "phase": "Solution",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "Good diagnosis. How should the QSR chain recover lost traffic quickly and prevent this kind of misstep in future policy updates?"
    },
    {
      "phase": "Synthesis",
      "speaker": "Candidate",
      "kind": "synthesis",
      "detail": "I recommend an immediate win-back campaign reinstating a portion of voided points or issuing bonus apology credits, coupled with extending expiry from 30 days to at least 90–180 days. Second, replace email-only notices with multi-channel alerts across push notifications, SMS, and in-store signage well ahead of policy shifts. Finally, mandate controlled regional pilot testing for all future loyalty or pricing changes before a nationwide launch.",
      "reasoning": "Combining immediate trust restoration with pre-launch A/B testing recovers churned regulars and prevents repeat policy shocks."
    }
  ],
  "recommendations": [
    "P0: Launch a targeted win-back campaign for churned loyalty members by reinstating partial voided points or issuing bonus credits, and extend point expiration from 30 days to 90–180 days.",
    "P1: Mandate omnichannel customer communication—combining app push notifications, SMS, in-store counter signage, and email—at least 30 days before any rewards policy change.",
    "P2: Institute a gated A/B pilot framework in 5–10% of stores to measure repeat-visit frequency and NPS impact before rolling out future loyalty or menu-economics changes nationwide."
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
  "synthesisScript": "The QSR chain's 15% revenue decline was driven by a ~12% nationwide drop in store transactions after an abrupt loyalty-program overhaul voided legacy points, capped monthly redemptions, and added a 30-day expiry—communicated only via email. To restore repeat footfall and NPS, we should reinstate goodwill bonus points, relax expiry terms, mandate omnichannel pre-launch notices, and pilot future policy shifts in a small store cohort before scaling.",
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
  "id": "cm-strat-medical-implants",
  "title": "Suggestion to Enter Medical Implants Sector",
  "company": "MedTech Co.",
  "track": "Consulting",
  "category": "Market Entry",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "Healthcare / MedTech",
    "Market Entry",
    "Consulting"
  ],
  "prompt": "Our client is an established pharmaceuticals company seeking to accelerate growth by entering the medical implants and medical electronics sectors, such as blood-pressure monitors. How would you evaluate this market entry decision and recommend an entry strategy?",
  "clarifyingQuestions": [
    {
      "q": "Who are the client's current customers, and what product portfolio do they sell today?",
      "a": "Their current products are prescription medicines, and their primary sales channel targets doctors directly.",
      "why": "Reveals strong commercial synergy with physician-prescribed implants but a capability gap for consumer electronics."
    },
    {
      "q": "What is the client's overarching objective and decision criterion for entering these new categories?",
      "a": "The objective is to achieve scalable, sustainable growth while maximizing long-term profitability.",
      "why": "Ensures entry-mode choices balance margin, capital risk, and speed to scale rather than chasing vanity revenue."
    },
    {
      "q": "Is the client open to partnerships or acquisitions, or must they build manufacturing in-house?",
      "a": "They are open to evaluating build, joint venture, or acquisition options based on control, cost, brand synergy, and regulation.",
      "why": "Allows tailoring different entry modes for implants versus electronics based on capability overlap."
    }
  ],
  "frameworkUsed": "Market Attractiveness (TAM/Growth) → Competition & Barriers → Capabilities & Breakeven → Entry Mode",
  "coreEquation": "Go / No-Go = Attractive SOM × Client Right-to-Win × (Breakeven Volume ≤ Achievable Share)",
  "strategyOverview": "Evaluate MedTech Co.'s expansion from prescription pharmaceuticals into medical implants and electronics across Industry Attractiveness, Financial Viability, Operational Value-Chain Synergies (R&D, manufacturing, regulatory, post-sale service), and Entry Mode—prioritizing implants via existing doctor relationships while partnering for electronics.",
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
      "phase": "Scoping",
      "speaker": "Interviewer",
      "kind": "prompt",
      "detail": "Our client is an established pharmaceuticals company seeking to accelerate growth by entering the medical implants and medical electronics sectors, such as blood-pressure monitors. How would you evaluate this market entry decision and recommend an entry strategy?"
    },
    {
      "phase": "Scoping",
      "speaker": "Candidate",
      "kind": "question",
      "detail": "Before structuring the case, I'd like to understand the client's current product mix, who their core customers are today, and how leadership defines success—whether top-line scale, profitability, or both.",
      "reasoning": "Mapping existing customer relationships and profit objectives determines which adjacent medtech category offers real right-to-win."
    },
    {
      "phase": "Structure",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "Today the client sells prescription pharmaceuticals exclusively through doctors. Their goal is to build scalable, sustainable, and profitable new revenue streams across implants and devices like BP monitors."
    },
    {
      "phase": "Structure",
      "speaker": "Candidate",
      "kind": "framework",
      "detail": "I will structure this evaluation across four pillars: market attractiveness and regulatory barriers, financial viability and breakeven timeline, operational feasibility across the value chain, and optimal entry mode weighing control, cost, and brand synergies. Notice right away that medical implants and consumer electronics like BP monitors have very different buyers and capabilities.",
      "reasoning": "Separating implants from consumer medical electronics prevents applying a single flawed go-to-market model to two distinct industries."
    },
    {
      "phase": "Investigation",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "Good catch. Let's zoom in on operational feasibility—walk me through the value chain for these products and where our pharma capabilities create genuine synergies versus gaps.",
      "causes": [
        "Strong B2B doctor-detailing and regulatory compliance synergy for medical implants",
        "Major capability gaps in hardware R&D, retail/OTC distribution, and device after-sales servicing"
      ]
    },
    {
      "phase": "Root Cause",
      "speaker": "Candidate",
      "kind": "hypothesis",
      "detail": "Across the value chain—demand forecasting, R&D, inbound logistics, manufacturing and utilities, clinical testing, outbound distribution, marketing, and post-sale or reverse logistics—a pharma player has strong synergies in clinical governance and doctor-facing marketing, which transfer directly to medical implants. Conversely, medical electronics like BP monitors require hardware engineering, high-volume electronics assembly, pharmacy/e-commerce retail distribution, and warranty repair networks where we have zero economies of scale.",
      "reasoning": "Auditing every value-chain stage exposes why implants leverage existing commercial moats while electronics require external partners.",
      "causes": [
        "Pharma doctor-channel access lowers customer acquisition cost for implants",
        "Lack of hardware manufacturing and reverse-logistics servicing increases risk in electronics"
      ]
    },
    {
      "phase": "Solution",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "Given those synergies and gaps, what criteria should finalize the entry mode, and how would you sequence the launch?"
    },
    {
      "phase": "Synthesis",
      "speaker": "Candidate",
      "kind": "synthesis",
      "detail": "We should evaluate entry options on five criteria: control dilution, upfront capital cost, revenue potential, brand synergy, and regulatory speed. I recommend entering medical implants first—via a joint venture or targeted acquisition of a certified manufacturer—so we immediately monetize our doctor relationships without multi-year R&D delays. For BP monitors and medical electronics, either defer entry or use an asset-light white-label OEM partnership sold through pharmacy chains rather than building greenfield plants.",
      "reasoning": "Sequencing implants first via JV/M&A and keeping electronics asset-light maximizes NPV while protecting working capital."
    }
  ],
  "recommendations": [
    "P0: Prioritize entering medical implants first by forming a JV or acquiring a niche certified implant maker, leveraging the existing prescription-pharma doctor sales force for rapid adoption.",
    "P1: Avoid greenfield hardware manufacturing for BP monitors; instead test medical electronics via an asset-light OEM/white-label licensing model distributed through pharmacy and clinic networks.",
    "P2: Build a dedicated medtech regulatory, clinical-testing, and post-sale/reverse-logistics team before scaling SKUs to protect brand trust and prevent working-capital lockup."
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
  "synthesisScript": "Our pharmaceutical client should pursue a phased, capability-led entry: enter medical implants first via a JV or tuck-in acquisition to leverage existing physician relationships and clinical credibility, while keeping medical electronics like BP monitors asset-light through OEM partnerships rather than building hardware plants. Final go/no-go gates should balance control dilution, regulatory speed, and capex payback.",
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
  "id": "cm-strat-airline-pricing",
  "title": "Pricing a 1-Hour Delhi–NY Business Aircraft Fleet",
  "company": "Airline Company",
  "track": "Consulting",
  "category": "Pricing",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "Airline Company",
    "Pricing",
    "Consulting"
  ],
  "prompt": "Our client is an airline company launching a revolutionary business aircraft fleet capable of flying from Delhi to New York in 1 hour. Their primary objective is profit maximization. How would you identify the right target segment and price this new offering?",
  "clarifyingQuestions": [
    {
      "q": "Are there any competing 1-hour ultra-supersonic routes between Delhi and New York today?",
      "a": "No, this is a completely new category with no direct 1-hour competitor, though traditional ~15-hour business-class flights exist as substitutes.",
      "why": "Eliminates direct competitor-based pricing and shifts the ceiling anchor to value-based time savings over business class."
    },
    {
      "q": "Which target customer segments should we prioritize for initial pricing?",
      "a": "Key segments include corporate CXOs, management consultants, fashion and media professionals, government officials, and ultra-high-net-worth individuals—let's focus specifically on management consultants.",
      "why": "Narrows the willingness-to-pay calculation to a quantifiable corporate travel use case."
    },
    {
      "q": "Who pays for a management consultant's airfare, and what are the baseline economics?",
      "a": "The consulting firm—not the individual—pays for the ticket. Assume a project sends 2 consultants leaving Monday and returning Friday, with an hourly billing contribution of INR 1,000 per consultant.",
      "why": "Anchors WTP on firm billable hours recovered rather than personal salary."
    }
  ],
  "frameworkUsed": "Business Model Check → 3Cs of Pricing (Cost Floor | Competitor Anchor | Value WTP) → Tiering & Test",
  "coreEquation": "Optimal Price ∈ [Unit Cost Floor, Perceived Value WTP Ceiling] Tuned to Elasticity",
  "strategyOverview": "Price Airline Company's 1-hour Delhi–New York fleet by ruling out direct competitor pricing, setting a cost-plus floor, and sizing a value-based ceiling for corporate management consultants using firm-level billable hours saved across round-trip travel plus avoided commercial business-class fares.",
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
      "phase": "Scoping",
      "speaker": "Interviewer",
      "kind": "prompt",
      "detail": "Our client is an airline company launching a revolutionary business aircraft fleet capable of flying from Delhi to New York in 1 hour. Their primary objective is profit maximization. How would you identify the right target segment and price this new offering?"
    },
    {
      "phase": "Scoping",
      "speaker": "Candidate",
      "kind": "question",
      "detail": "To confirm our objective and market context: is the airline strictly maximizing profit, and do any comparable ultra-fast transcontinental flights exist today? On customer segments, high-value time-sensitive travelers like corporate CXOs, management consultants, diplomats, media/fashion executives, and UHNWIs stand out—is there a primary segment you want us to focus on?",
      "reasoning": "Identifying the highest time-value segment establishes the true economic ceiling for value-based pricing."
    },
    {
      "phase": "Structure",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "Yes, profit maximization is the goal, and there is no direct 1-hour competitor. Let's focus on management consultants as our core customer segment."
    },
    {
      "phase": "Structure",
      "speaker": "Candidate",
      "kind": "framework",
      "detail": "We have three classic pricing lenses: cost-based, competitor-based, and value-based. Because this is a category-creating 1-hour product, direct competitor pricing won't capture our differentiation—though commercial business class is our reference substitute. I recommend starting with value-based pricing anchored on time saved, then cross-checking against our per-seat operating cost floor to ensure healthy margins.",
      "reasoning": "Pairing a value-based WTP ceiling with a unit-cost floor defines the viable pricing corridor for a first-of-its-kind service."
    },
    {
      "phase": "Investigation",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "Let's go with value-based pricing. Initially, you might look at a consultant's hourly salary to value the time saved—however, flight expenses in consulting are borne by the firm, not the individual. How does that change your valuation, and what price ceiling do you get if a 2-consultant team flies out Monday and back Friday at an hourly contribution of INR 1,000 per consultant?",
      "causes": [
        "Corporate buyer (firm) values recovered client-billable hours rather than personal salary",
        "14+ hours saved per leg unlocks two extra billable workdays per round-trip"
      ]
    },
    {
      "phase": "Root Cause",
      "speaker": "Candidate",
      "kind": "root-cause",
      "detail": "Because the firm pays, willingness-to-pay is driven by incremental billable revenue plus avoided commercial airfare and jet-lag productivity loss. A standard Delhi–New York flight takes roughly 15 hours, so a 1-hour flight saves 14 hours each way—28 hours round-trip per consultant, or 56 hours across the 2-consultant team. At INR 1,000 per hour, that is INR 56,000 in recovered billing contribution (INR 28,000 per consultant round-trip) on top of the baseline business-class ticket price they would already pay.",
      "reasoning": "Quantifying both recovered billable hours and avoided substitute airfare captures the full economic surplus delivered to the corporate buyer.",
      "causes": [
        "Time-saving USP equals 28 billable hours recovered per consultant per round-trip",
        "Corporate expense structure raises price elasticity ceiling above individual WTP"
      ]
    },
    {
      "phase": "Solution",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "Great calculation. Beyond pure ticket price, how should the airline structure tiers and verify that this value-based price actually clears operating costs?"
    },
    {
      "phase": "Synthesis",
      "speaker": "Candidate",
      "kind": "synthesis",
      "detail": "The airline should price tickets inside the corridor between per-seat operating cost (fuel, depreciation, crew, airport slots) and the economic ceiling—commercial business-class fare plus the INR 28,000 round-trip productivity premium (or higher for CXO/billing tiers). To maximize profit across heterogeneous segments, offer B2B corporate block subscriptions for consulting firms and flexible last-minute full-fare tiers for diplomats and UHNWIs, while tracking load factor and net contribution margin per flight.",
      "reasoning": "Tiered B2B subscriptions plus dynamic spot pricing capture consumer surplus across segments while guaranteeing capacity utilization."
    }
  ],
  "recommendations": [
    "P0: Anchor pricing using a value-based premium over commercial business class—quantified via firm-level billable hours saved (e.g., 28 round-trip hours × hourly contribution)—verified above per-seat operating cost.",
    "P1: Launch annual B2B corporate flight-pass contracts for consulting firms and investment banks to lock in baseline Monday/Friday load factors.",
    "P2: Introduce dynamic surge pricing for last-minute UHNW and diplomatic bookings while monitoring seat load factor and price-sensitivity churn."
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
  "synthesisScript": "For Airline Company's 1-hour Delhi–New York fleet, competitor-based pricing is inadequate because the time-saving USP creates a new category. By anchoring on corporate-borne billable value—28 round-trip hours saved per consultant on top of baseline business-class fares—and verifying against per-seat operating cost, the airline can maximize margins through B2B corporate block passes and dynamic spot tiers.",
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
  "id": "cm-strat-road-transport",
  "title": "Improving Highway Logistical Efficiency (MoRTH)",
  "company": "Ministry of Road Transport",
  "track": "Consulting",
  "category": "Unconventional",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "Ministry of Road Transport",
    "Unconventional",
    "Consulting"
  ],
  "prompt": "The Ministry of Road Transport and Highways (MoRTH) wants to improve road logistical efficiency for industrial transport across India. How would you diagnose the bottlenecks in road efficiency and estimate intra-city commercial vehicle demand?",
  "clarifyingQuestions": [
    {
      "q": "How is logistical efficiency defined here—cost per ton-km, safety, or travel time?",
      "a": "Primarily travel time—getting industrial goods from point A to point B faster.",
      "why": "Focuses the diagnostic tree on speed and congestion friction rather than toll pricing or fuel taxes."
    },
    {
      "q": "Is the Ministry focusing on a specific freight corridor or nationwide across India?",
      "a": "We are looking to improve road efficiency nationwide across the country.",
      "why": "Requires a systemic framework applicable across highways and urban industrial hubs rather than one local project."
    },
    {
      "q": "When estimating intra-city vehicle demand, should we include residential passenger vehicles or only commercial traffic?",
      "a": "Exclude residential and passenger travel segments; focus strictly on commercial industrial supply vehicles.",
      "why": "Scopes the demand guesstimate specifically to freight trucks, vans, and industrial supply fleets."
    }
  ],
  "frameworkUsed": "First Principles Objective Equation → MECE Drivers & Constraints → Impact Prioritization",
  "coreEquation": "Target Outcome = ∑ (MECE Stakeholder / Funnel / Operational Drivers) Subject to Constraints",
  "strategyOverview": "Diagnose industrial road travel-time bottlenecks for Ministry of Road Transport across five pillars (Main Road Infra, Peripheral Infra, Traffic Regulation, Legal/Speed Setup, and Vehicle Fleet), then build a bottom-up guesstimate for intra-city commercial industrial supply vehicle demand to solve capacity planning.",
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
      "phase": "Scoping",
      "speaker": "Interviewer",
      "kind": "prompt",
      "detail": "The Ministry of Road Transport and Highways (MoRTH) wants to improve road logistical efficiency for industrial transport across India. How would you diagnose the bottlenecks in road efficiency and estimate intra-city commercial vehicle demand?"
    },
    {
      "phase": "Scoping",
      "speaker": "Candidate",
      "kind": "question",
      "detail": "To align on scope, when we say logistical efficiency, are we measuring end-to-end travel time, cost per kilometer, or cargo safety? Also, is this initiative focused on a single state corridor or pan-India?",
      "reasoning": "Pinning down travel time as the primary KPI and pan-India as the scope sets the right diagnostic variables."
    },
    {
      "phase": "Structure",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "Efficiency here means minimizing travel time, and we are looking at improving it across India as a whole. Walk me through the factors you would examine."
    },
    {
      "phase": "Structure",
      "speaker": "Candidate",
      "kind": "framework",
      "detail": "I would diagnose road travel-time bottlenecks across five pillars: first, main road infrastructure like surface material, lane width, potholes, and speed breakers; second, peripheral infrastructure such as traffic signals and toll bottlenecks; third, active assistance from traffic regulators; fourth, the legal setup including speed and load regulations; and fifth, the automobile ecosystem covering vehicle counts, types, and maintenance.",
      "reasoning": "Separating physical road geometry from signaling, enforcement, and fleet health covers every source of transit delay."
    },
    {
      "phase": "Investigation",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "Focusing on main road infrastructure—width, road quality, potholes, and speed breakers—is sound. However, our biggest issue isn't just road supply; it's failing to estimate true demand. How would you estimate intra-city commercial vehicle demand for industrial supply, ignoring residential and passenger travel?",
      "causes": [
        "Physical road delays stem from narrow widths, potholes, and unstandardized speed breakers",
        "Capacity planning fails because agencies lack accurate intra-city industrial freight demand models"
      ]
    },
    {
      "phase": "Root Cause",
      "speaker": "Candidate",
      "kind": "hypothesis",
      "detail": "To estimate intra-city industrial supply vehicle demand, I would use a bottom-up supply-chain approach: segment the city's commercial consumption and manufacturing hubs—factories, warehouses, wholesale mandis, and retail clusters. For each hub tier, estimate average daily tonnage moved, divide by average payload per commercial vehicle and trips completed per day, and apply a peak-hour concurrency factor to find required road capacity.",
      "reasoning": "Deriving vehicle counts from daily freight tonnage and truck turnaround cycles avoids under-sizing peak industrial corridors.",
      "causes": [
        "Mismatch between peak commercial freight trips and unbuffered road lane capacity",
        "Lack of segmented freight-tonnage forecasting across industrial and wholesale clusters"
      ]
    },
    {
      "phase": "Solution",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "That's a clean estimation model. Based on both the infrastructure bottlenecks and that demand framework, what concrete actions should MoRTH prioritize?"
    },
    {
      "phase": "Synthesis",
      "speaker": "Candidate",
      "kind": "synthesis",
      "detail": "MoRTH should pair targeted physical upgrades with data-driven capacity planning. First, eliminate main-road speed bottlenecks by auditing industrial feeders for potholes, improper speed breakers, and lane pinch points. Second, deploy a standardized intra-city freight demand model using e-way bill and FASTag data to forecast commercial vehicle peaks, and third, enforce time-of-day freight corridors and dedicated bypass lanes so heavy industrial traffic avoids peak passenger congestion.",
      "reasoning": "Combining physical bottleneck repair with real-time e-way bill demand forecasting attacks both supply quality and congestion timing."
    }
  ],
  "recommendations": [
    "P0: Audit high-density industrial feeder roads nationwide to standardize surface quality, widen pinch-point lanes, and replace unscientific speed breakers that slow freight transit.",
    "P1: Build a city-level commercial freight demand model anchored on GST e-way bills, warehouse tonnage, and FASTag flows to right-size road capacity investments.",
    "P2: Pilot dedicated freight time-windows and urban bypass spurs in top industrial cities to separate heavy supply trucks from peak passenger traffic."
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
  "synthesisScript": "Improving industrial road logistics nationwide requires tackling both physical road delays (potholes, narrow widths, speed breakers) and systemic under-estimation of intra-city commercial freight demand. By modeling industrial vehicle volume bottom-up from hub freight tonnage and e-way bill flows—and pairing that forecast with feeder-road upgrades and dedicated freight windows—MoRTH can cut transit times across India.",
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
  "id": "cm-strat-nta-cheating",
  "title": "Tackling Cheating in Medical Entrance Exams (UP)",
  "company": "Testing Authority",
  "track": "Consulting",
  "category": "Unconventional",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "National Testing Authority",
    "Unconventional",
    "Consulting"
  ],
  "prompt": "A national testing authority has observed abnormally high rates of cheating in medical entrance examinations across Uttar Pradesh compared to other states. How would you diagnose the root causes enabling this malpractice and design practical interventions to eliminate it?",
  "clarifyingQuestions": [
    {
      "q": "Is this cheating wave unique to Uttar Pradesh, or is it happening at similar scale across other states?",
      "a": "Isolated incidents occur in other states, but the severity and frequency are disproportionately concentrated in Uttar Pradesh.",
      "why": "Indicates local state-level execution or center-governance failures rather than a flaw in the national exam paper itself."
    },
    {
      "q": "How are test centers and invigilators currently assigned for these exams in Uttar Pradesh?",
      "a": "Students and invigilators frequently belong to the same local schools, and teachers have been found actively helping students during the exam.",
      "why": "Exposes an immediate conflict of interest and local collusion loop."
    },
    {
      "q": "What surveillance or monitoring infrastructure is currently in place on exam day?",
      "a": "Most affected test centers lack working CCTV cameras and have no surprise flying-squad inspections.",
      "why": "Confirms weak detection probability, which lowers the deterrent cost of collusion."
    }
  ],
  "frameworkUsed": "First Principles Objective Equation → MECE Drivers & Constraints → Impact Prioritization",
  "coreEquation": "Target Outcome = ∑ (MECE Stakeholder / Funnel / Operational Drivers) Subject to Constraints",
  "strategyOverview": "Diagnose severe medical-exam cheating in Uttar Pradesh for Testing Authority across People, Process, and Infrastructure—uncovering local school-invigilator collusion plus absent CCTV/flying squads—and deploy randomized center-staffing, live surveillance, and strict institutional penalties.",
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
      "phase": "Scoping",
      "speaker": "Interviewer",
      "kind": "prompt",
      "detail": "A national testing authority has observed abnormally high rates of cheating in medical entrance examinations across Uttar Pradesh compared to other states. How would you diagnose the root causes enabling this malpractice and design practical interventions to eliminate it?"
    },
    {
      "phase": "Scoping",
      "speaker": "Candidate",
      "kind": "question",
      "detail": "Before structuring my diagnosis, is this cheating surge localized to Uttar Pradesh or seen at the same scale nationwide? Confirming that will tell us whether the vulnerability sits in central exam design or state-level center execution.",
      "reasoning": "Isolating geographic concentration distinguishes central paper leaks from local test-center governance breakdowns."
    },
    {
      "phase": "Structure",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "Other states see occasional incidents, but the problem is uniquely severe in Uttar Pradesh. How would you structure your investigation and solution design?"
    },
    {
      "phase": "Structure",
      "speaker": "Candidate",
      "kind": "framework",
      "detail": "I'll split the case into Diagnosis and Intervention Design. For Diagnosis, I'll examine three MECE pillars: People (students, invigilators, and school management), Process (center allocation, ID verification, and exam-day supervision), and Infrastructure (CCTV coverage, jammers, and surprise flying squads). Let's start with how centers and invigilators are currently assigned.",
      "reasoning": "Auditing People, Process, and Infrastructure isolates both human incentives and physical monitoring gaps."
    },
    {
      "phase": "Investigation",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "Looking into local operations, we found that students and invigilators often come from the same local schools, and some teachers have actively helped students during exams. Additionally, most test centers lack CCTV surveillance and receive zero flying-squad inspections.",
      "causes": [
        "Conflict of interest: local teachers invigilate their own school's students",
        "Zero deterrence: no CCTV cameras and no surprise flying squads"
      ]
    },
    {
      "phase": "Root Cause",
      "speaker": "Candidate",
      "kind": "root-cause",
      "detail": "The root cause is a dual failure of internal collusion and blind monitoring infrastructure. Because local staff supervise their own students, schools have both the incentive and opportunity to boost pass rates, while the absence of CCTV, strict ID checks, and surprise inspections eliminates the risk of getting caught.",
      "reasoning": "Linking aligned local collusion incentives with zero oversight explains why malpractice scaled systematically across UP.",
      "causes": [
        "Same-school student and invigilator pairing creates active collusion",
        "Missing CCTV, weak ID verification, and absent flying squads remove deterrence"
      ]
    },
    {
      "phase": "Solution",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "Clear diagnosis. What practical, enforceable interventions would you implement before the next exam cycle?"
    },
    {
      "phase": "Synthesis",
      "speaker": "Candidate",
      "kind": "synthesis",
      "detail": "We must break local collusion and raise detection certainty simultaneously. First, mandate randomized external center allocation and rotate independent invigilators from outside districts. Second, require live-streamed CCTV in every exam hall paired with randomized flying-squad raids at high-risk centers. Third, enforce biometric ID verification at entry and impose automatic center blacklisting plus criminal liability on complicit staff.",
      "reasoning": "Removing same-school supervision while adding real-time surveillance and harsh institutional penalties eliminates both motive and opportunity."
    }
  ],
  "recommendations": [
    "P0: Eliminate same-school invigilation immediately by randomizing student center assignments and deploying rotated external invigilators from independent institutions.",
    "P1: Mandate operational CCTV with centralized live monitoring across all exam rooms and deploy surprise district flying squads weighted toward historically anomalous centers.",
    "P2: Enforce biometric/government-ID check-in at exam gates and introduce automatic multi-year de-affiliation and blacklisting for schools caught facilitating malpractice."
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
  "synthesisScript": "Abnormally high medical-exam cheating in Uttar Pradesh is driven by local collusion—where students and invigilators come from the same schools and teachers assist candidates—compounded by missing CCTV and zero flying-squad checks. By breaking same-school supervision via external invigilator rotation, mandating live CCTV and surprise raids, and enforcing biometric IDs with strict center blacklisting, the Testing Authority can rapidly restore exam integrity.",
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
  "id": "cm-strat-public-sector-banking",
  "title": "Diagnosing Decline in Bank Visits in Uttar Pradesh",
  "company": "Public Sector Bank",
  "track": "Consulting",
  "category": "Profitability",
  "difficulty": 2,
  "isStarter": true,
  "tags": [
    "Profitability",
    "Banking",
    "Rural UP",
    "Digital Shift"
  ],
  "prompt": "A leading public sector bank has observed a steady decline in physical branch visits across Uttar Pradesh. How would you diagnose the root causes behind falling branch footfall and assess physical banking accessibility across the state?",
  "clarifyingQuestions": [
    {
      "q": "Is the decline in branch visits uniform across Uttar Pradesh, or more pronounced in rural versus urban areas?",
      "a": "The decline is steeper in rural areas, though urban branches are also experiencing noticeable drops.",
      "why": "Signals that rural access barriers and urban digital migration may both be contributing."
    },
    {
      "q": "Is this trend unique to our client bank or observed across the entire banking sector?",
      "a": "It is an industry-wide trend across public and private banks in Uttar Pradesh.",
      "why": "Rules out bank-specific brand damage and points to structural infrastructure or behavioral shifts."
    },
    {
      "q": "Have there been any large-scale branch closures, staff reductions, or core system changes recently?",
      "a": "No major structural changes have occurred at scale across the branch network.",
      "why": "Confirms that lower footfall is not simply a mechanical effect of fewer open branches."
    }
  ],
  "frameworkUsed": "Branch Footfall Decline Tree (Access/Infra × Service Quality × Digital Substitution × Incentives)",
  "coreEquation": "Profit = ∑(Units × Price × Margin Mix) − (Fixed Overhead + Variable Value-Chain Costs)",
  "strategyOverview": "Diagnose falling UP branch footfall for Public Sector Bank across four MECE pillars—Customer Digital Shift, Physical Access & Infrastructure, In-Branch Service Quality, and Product Awareness—paired with an ATM/branch accessibility guesstimate showing heavy urban skew and rural service gaps.",
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
      "phase": "Scoping",
      "speaker": "Interviewer",
      "kind": "prompt",
      "detail": "A leading public sector bank has observed a steady decline in physical branch visits across Uttar Pradesh. How would you diagnose the root causes behind falling branch footfall and assess physical banking accessibility across the state?"
    },
    {
      "phase": "Scoping",
      "speaker": "Candidate",
      "kind": "question",
      "detail": "Before structuring my approach, I'd like to clarify three points: is this decline steeper in rural or urban Uttar Pradesh, is it happening across all banks or just ours, and have there been recent branch consolidations or staffing cuts?",
      "reasoning": "Distinguishing bank-specific operational cuts from statewide rural/urban trends prevents misdiagnosing structural shifts."
    },
    {
      "phase": "Structure",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "The decline is steeper in rural areas though urban branches are affected too, it is an industry-wide trend across all banks, and no major branch closures or structural changes have taken place at scale."
    },
    {
      "phase": "Structure",
      "speaker": "Candidate",
      "kind": "framework",
      "detail": "Got it—since this is statewide and sector-wide, I will structure my investigation in two phases. First, I will test four root-cause buckets: Customer-side digital substitution like UPI, Access and Infrastructure barriers, In-branch Service Quality like queues or outages, and Product Awareness. Second, I'll run a guesstimate on physical banking and ATM accessibility across UP to see if rural supply gaps explain the steeper rural drop.",
      "reasoning": "Pairing a four-pillar behavioral tree with a geographic access guesstimate tests both digital pull and physical push factors."
    },
    {
      "phase": "Investigation",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "That two-phase approach makes sense. Walk me through what your accessibility guesstimate reveals about UP, and what that implies for rural versus urban footfall.",
      "causes": [
        "Heavy urban concentration of branches and ATMs masks severe rural access deficits",
        "Rural residents often share one distant ATM across multiple villages"
      ]
    },
    {
      "phase": "Root Cause",
      "speaker": "Candidate",
      "kind": "root-cause",
      "detail": "Estimating physical access across Uttar Pradesh shows heavy urban concentration: while cities have dense branch and ATM networks, many rural villages lack dedicated ATMs entirely or share one unit across several villages, creating high travel cost and weather friction. Combined with youth adoption of UPI and mobile banking in urban centers, long in-branch wait times, and low awareness of non-cash advisory products, customers avoid branches for both routine cash errands and complex services.",
      "reasoning": "Showing that rural accessibility is far lower than raw state ATM averages explains why rural footfall dropped even as urban digital adoption surged.",
      "causes": [
        "Last-mile rural access friction (shared/distant ATMs, transport, weather)",
        "UPI and mobile banking substitution for routine urban transactions",
        "In-branch queues, server downtime, and low awareness of branch advisory products"
      ]
    },
    {
      "phase": "Solution",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "Strong synthesis of supply and demand factors. How should the public sector bank respond to re-engage customers and modernize its UP branch footprint?"
    },
    {
      "phase": "Synthesis",
      "speaker": "Candidate",
      "kind": "synthesis",
      "detail": "I recommend a bifurcated strategy for rural and urban UP. In underserved rural clusters, deploy local Business Correspondents and micro-ATMs at village kirana hubs to eliminate travel friction, alongside vernacular awareness camps for credit and insurance. In urban branches, accept that UPI handles routine cash and repurpose branches into high-value advisory centers for MSME loans and wealth products while fixing queue wait times and server uptime.",
      "reasoning": "Tailoring last-mile rural access while repositioning urban branches toward advisory services aligns physical footprint with modern banking habits."
    }
  ],
  "recommendations": [
    "P0: Expand rural last-mile access by deploying Business Correspondents (Bank Mitras) and biometric micro-ATMs in multi-village clusters lacking dedicated ATMs.",
    "P1: Repurpose urban branches from routine cash counters—already substituted by UPI—into specialized advisory hubs for MSME credit, agricultural loans, and insurance.",
    "P2: Upgrade branch service reliability by reducing server downtime, introducing token-based queue scheduling, and running local-language campaigns on high-value branch services."
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
  "synthesisScript": "Declining branch footfall across Uttar Pradesh reflects two distinct forces: heavy urban concentration of branches/ATMs leaves rural villages with high last-mile access friction, while urban customers increasingly substitute routine visits with UPI amid slow branch queues. The bank should deploy village-level Business Correspondents and micro-ATMs in underserved rural clusters while repositioning urban branches as fast, reliable advisory hubs for loans and financial products.",
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
  "id": "cm-strat-us-auto-growth",
  "title": "Diagnose & Grow a US Automobile Company",
  "company": "US Auto OEM",
  "track": "Consulting",
  "category": "Growth",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "US Auto OEM",
    "Growth",
    "Consulting"
  ],
  "prompt": "Your client is a US-based automobile manufacturer facing stagnant revenue growth. Diagnose the underlying cause of the slowdown and recommend a growth strategy.",
  "clarifyingQuestions": [
    {
      "q": "Where does the client sit in the automotive value chain, and what vehicle segments do they offer?",
      "a": "They are an Original Equipment Manufacturer (OEM) focused primarily on internal combustion engine (ICE) vehicles, with a small recent foray into electric vehicles (EVs).",
      "why": "Clarifies whether growth constraints stem from manufacturing/product portfolio mix or downstream dealership operations."
    },
    {
      "q": "How is the client positioned in the market, and are competitors experiencing a similar slowdown?",
      "a": "The client holds a luxury, high-end positioning. Other automakers are growing, so the slowdown is concentrated on our client.",
      "why": "Distinguishes a company-specific competitive loss from a broader US macroeconomic or industry-wide downturn."
    },
    {
      "q": "Is the revenue stagnation driven by lower average selling prices or fewer vehicles sold?",
      "a": "Average selling prices have held steady, but unit sales volume has declined.",
      "why": "Isolates whether to investigate pricing erosion versus volume drivers across supply and demand."
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
      "phase": "Scoping",
      "speaker": "Interviewer",
      "kind": "prompt",
      "detail": "Your client is a US-based automobile manufacturer facing stagnant revenue growth. How would you diagnose the problem and build a growth plan?"
    },
    {
      "phase": "Scoping",
      "speaker": "Candidate",
      "kind": "question",
      "detail": "I would like to clarify three things before structuring: where the client sits in the value chain and their segment mix, how they are positioned relative to peers, and whether the decline is in price or unit volume.",
      "reasoning": "Pinpointing portfolio mix, competitive positioning, and price-versus-volume splits prevents diagnosing an industry trend when the issue is competitive."
    },
    {
      "phase": "Structure",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "They are a luxury OEM primarily selling ICE vehicles with a small EV lineup. Peers are doing fine, and our average price is steady, so unit sales volume has dropped."
    },
    {
      "phase": "Structure",
      "speaker": "Candidate",
      "kind": "framework",
      "detail": "Since unit volume fell while prices held, I will test supply versus demand first. Assuming supply is intact, I will split demand into internal product/distribution factors and external drivers across macroeconomic conditions, competitors, and complements like charging infrastructure.",
      "reasoning": "Separating supply constraints from internal and external demand drivers ensures we quickly isolate whether lost volume is operational or competitive."
    },
    {
      "phase": "Investigation",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "Supply is healthy, and overall luxury auto demand is growing. Look closer at the external competitive dynamics—what might be eroding our unit share?"
    },
    {
      "phase": "Root Cause",
      "speaker": "Candidate",
      "kind": "root-cause",
      "detail": "Given the rapid shift toward electrification in the US luxury tier, a specialized EV entrant such as Tesla has likely captured high-income buyers who previously bought our luxury ICE models, leaving our small EV lineup uncompetitive.",
      "reasoning": "Connecting our ICE-heavy portfolio with growing industry demand points directly to EV substitution in the luxury segment.",
      "causes": [
        "Heavy dependence on legacy ICE models while luxury demand shifted to EVs",
        "Rapid expansion and brand dominance of Tesla in the US premium EV segment",
        "Underdeveloped proprietary EV lineup and charging ecosystem parity"
      ]
    },
    {
      "phase": "Solution",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "Spot on—Tesla has captured much of the premium EV segment. What growth plan should the client pursue to recover volume, comparing organic and inorganic options?"
    },
    {
      "phase": "Synthesis",
      "speaker": "Candidate",
      "kind": "synthesis",
      "detail": "Because luxury demand has structurally shifted to EVs, the client should execute a dual-track plan: accelerate premium EV platform launches organically by retooling existing plants and bundling home-charging partnerships, while pursuing selective M&A or joint ventures with battery and EV-software players to close the time-to-market gap.",
      "causes": [
        "Closing the EV time-to-market gap via battery/software JVs or tuck-in M&A",
        "Converting loyal luxury ICE customers via hybrid/EV trade-in incentives and charging access"
      ]
    }
  ],
  "recommendations": [
    "P0: Accelerate launch of 2–3 flagship luxury EV models by retooling high-margin ICE assembly lines and securing battery supply partnerships.",
    "P1: Pursue a strategic JV or tuck-in acquisition in EV powertrain software and partner with nationwide fast-charging networks to eliminate buyer range anxiety.",
    "P2: Launch a targeted ICE-to-EV loyalty trade-in program with bundled home charger installation for existing luxury vehicle owners."
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
  "synthesisScript": "Our US Auto OEM client's volume decline stems from luxury buyer migration toward premium EVs—led by Tesla's rapid expansion—while the client remains over-indexed on ICE models. I recommend accelerating flagship luxury EV launches, closing technology and charging gaps via strategic JVs or targeted M&A, and deploying loyalty trade-in programs to retain existing luxury customers, tracked via EV unit share and gross margin per vehicle.",
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
  "id": "cm-strat-star-sports-wipl",
  "title": "Financial Attractiveness: Star Sports Bidding for W-IPL",
  "company": "Star Sports",
  "track": "Consulting",
  "category": "Market Entry",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "Star Sports",
    "Market Entry",
    "Consulting"
  ],
  "prompt": "Your client, Star Sports, is considering bidding for the broadcasting rights of the inaugural Women's IPL (W-IPL). Assess the financial attractiveness of this opportunity and determine how they should calculate their maximum bid price.",
  "clarifyingQuestions": [
    {
      "q": "Does Star Sports have existing cricket broadcasting synergies or any capital and regulatory constraints?",
      "a": "They already broadcast major cricket tournaments with strong production and cross-selling synergies, and there are no capital or regulatory constraints.",
      "why": "Establishes whether fixed broadcast infrastructure can be leveraged and whether cross-property bundling lifts unit economics."
    },
    {
      "q": "What is the tournament format, duration, and competitive bidding environment?",
      "a": "There are 6 teams featuring Indian and international players over a 45-day broadcast window. Assume no competing bidders for our baseline valuation.",
      "why": "Defines the inventory volume of matches/streams and confirms we should anchor on a standalone ROI-based ceiling rather than a game-theoretic bid."
    },
    {
      "q": "What target return on investment (ROI) does Star Sports require on this rights acquisition?",
      "a": "Management requires a minimum 15% ROI over the tournament cycle.",
      "why": "Sets the hurdle rate needed to convert projected net operating cash flows into a maximum justifiable bid price."
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
      "phase": "Scoping",
      "speaker": "Interviewer",
      "kind": "prompt",
      "detail": "Your client, Star Sports, is evaluating a bid for the inaugural Women's IPL broadcasting rights. Assess its financial attractiveness and recommend how to determine the bid price."
    },
    {
      "phase": "Scoping",
      "speaker": "Candidate",
      "kind": "question",
      "detail": "Before structuring, could you confirm any existing cricket synergies or constraints, the tournament scale in teams and days, competing bidders, and Star Sports' target ROI?",
      "reasoning": "Knowing the 45-day inventory, synergy potential, and hurdle rate defines the exact boundaries for a valuation model."
    },
    {
      "phase": "Structure",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "Star Sports has strong synergies with existing cricket properties and no hard constraints. The tournament has 6 teams over 45 days, requires a 15% ROI, and you can model the baseline assuming no competing bidders."
    },
    {
      "phase": "Structure",
      "speaker": "Candidate",
      "kind": "framework",
      "detail": "I will evaluate three pillars: financial attractiveness—breaking down incremental revenues and non-rights costs to solve for the maximum bid at a 15% ROI—alongside operational feasibility and strategic risks.",
      "reasoning": "Isolating revenue potential and operating costs before backing into the rights fee ensures the bid respects the 15% return floor."
    },
    {
      "phase": "Investigation",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "Let's start with financial attractiveness. Walk me through the specific revenue streams you would project over the 45-day window."
    },
    {
      "phase": "Root Cause",
      "speaker": "Candidate",
      "kind": "hypothesis",
      "detail": "I would split revenues into three buckets: Broadcast & Streaming (TV ad slots, OTT incremental subscriptions, and pay-per-view), Marketing & Sponsorships (title/associate brand integrations), and Merchandising & Cross-Selling of existing Star Sports cricket packages.",
      "reasoning": "Disaggregating TV, OTT monetization, and cross-selling captures both direct match inventory and halo value across Star's sports portfolio.",
      "causes": [
        "Incremental OTT subscribers and TV ad inventory across a 45-day, 6-team slate",
        "Cross-selling uplift to existing men's cricket and sports subscription bundles"
      ]
    },
    {
      "phase": "Solution",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "Good revenue breakdown. What cost buckets must be deducted, and what is the resulting formula for the maximum bid price?"
    },
    {
      "phase": "Synthesis",
      "speaker": "Candidate",
      "kind": "synthesis",
      "detail": "On the cost side, we must account for operational expenses—specifically platform development, TRP/production costs, and customer acquisition cost (CAC)—plus marketing, financing, and opportunity costs. To guarantee a 15% ROI, the maximum bid satisfies (Total Revenue − Total Non-Rights Costs − Bid) / (Total Non-Rights Costs + Bid) = 15%, meaning Maximum Bid = [(Number of Streams × Average Revenue per Stream + Ancillary Revenue) / 1.15] − Total Non-Rights Costs.",
      "causes": [
        "Operational outlays driven by OTT platform scaling, TRP/production, and viewer CAC",
        "Disciplined bid ceiling capped by the 15% hurdle rate after financing and opportunity costs"
      ]
    }
  ],
  "recommendations": [
    "P0: Anchor the rights bid strictly below the 15% ROI ceiling derived from Total Expected Revenue divided by 1.15 less all production, marketing, and CAC outlays.",
    "P1: Monetize the 45-day 6-team inventory through bundled TV+OTT sponsorship packages and cross-sell W-IPL viewers into year-round cricket subscriptions to lower effective CAC.",
    "P2: Negotiate multi-year rights escalation clauses or performance-linked viewership rebates to hedge inaugural-season TRP uncertainty."
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
  "synthesisScript": "Bidding for the inaugural Women's IPL is financially attractive for Star Sports given strong production and cross-selling synergies across its 45-day, 6-team broadcast window, provided the bid enforces a 15% ROI floor. By capping the rights fee at projected TV, OTT, sponsorship, and cross-sell revenues discounted by the 15% hurdle less platform, TRP, CAC, financing, and opportunity costs, Star Sports can capture new sports audiences while protecting media margins.",
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
  "id": "cm-strat-global-gadget-go",
  "title": "Global Gadget Go Expansion into Southeast Asia",
  "company": "Global Gadget Go",
  "track": "Consulting",
  "category": "Market Entry",
  "difficulty": 2,
  "isStarter": false,
  "tags": [
    "Wearable Tech",
    "Market Entry",
    "Consulting"
  ],
  "prompt": "We are advising Global Gadget Go, a leading US wearable tech company, on expanding into Southeast Asia. Assess the feasibility of this expansion and recommend a market entry strategy.",
  "clarifyingQuestions": [
    {
      "q": "How fast is the Southeast Asian wearable fitness tracker market growing, and what are the primary demand drivers?",
      "a": "The market is growing at roughly 20% annually, fueled by rising health awareness, growing disposable incomes, and rapid smartphone and mobile app adoption.",
      "why": "Confirms whether underlying category momentum justifies international capital allocation."
    },
    {
      "q": "Who is the target customer profile, and what does the competitive landscape look like?",
      "a": "Target buyers are young, tech-savvy, and health-conscious, though incomes vary widely by country. Both international and local brands compete, with local brands winning on low prices and influencer marketing.",
      "why": "Tests whether Global Gadget Go's US premium positioning fits local willingness to pay."
    },
    {
      "q": "Are there significant regulatory or distribution barriers across Southeast Asian markets?",
      "a": "Yes, regulatory certifications vary by country, and logistics and retail distribution infrastructure are fragmented across the region.",
      "why": "Identifies operational complexity and whether a uniform regional launch or phased country entry is feasible."
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
      "phase": "Scoping",
      "speaker": "Interviewer",
      "kind": "prompt",
      "detail": "Global Gadget Go, a leading US wearable tech company, wants to expand into Southeast Asia. Assess the feasibility of this move and recommend an entry strategy."
    },
    {
      "phase": "Scoping",
      "speaker": "Candidate",
      "kind": "question",
      "detail": "To ground our assessment, could you share the market size and growth rate in Southeast Asia, target customer preferences, local versus global competitors, and any regulatory or distribution constraints?",
      "reasoning": "Validating demand growth, price sensitivity, and cross-border regulatory hurdles upfront determines whether expansion is viable."
    },
    {
      "phase": "Structure",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "The market is growing 20% annually due to health awareness, rising disposable income, and smartphone growth. Customers are young and tech-savvy with varied incomes, local brands compete on low price, and regulations and logistics vary by country."
    },
    {
      "phase": "Structure",
      "speaker": "Candidate",
      "kind": "framework",
      "detail": "I will evaluate three areas: Market Attractiveness (growth drivers and country-level segments), Competitive Positioning (local affordability players vs our US brand equity), and Entry Strategy (country sequencing, product tiering, and entry mode).",
      "reasoning": "Evaluating market demand alongside local price competition and country fragmentation directly informs both the go/no-go decision and entry mode."
    },
    {
      "phase": "Investigation",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "Good structure. Looking at competition, local brands sell basic trackers at much lower price points and market heavily via social media influencers. How does that affect our feasibility?"
    },
    {
      "phase": "Root Cause",
      "speaker": "Candidate",
      "kind": "root-cause",
      "detail": "A direct copy-paste of our premium US lineup will struggle outside affluent urban pockets because price sensitivity is high and local brands dominate entry-level awareness through localized influencer campaigns, while country-specific certifications slow regional scaling.",
      "reasoning": "Linking local price anchoring and fragmented certification rules explains why an unadapted regional launch would burn cash.",
      "causes": [
        "High price sensitivity favoring basic, low-cost local fitness trackers",
        "Local competitor dominance in localized social media and influencer marketing",
        "Fragmented country-by-country regulatory certifications and logistics networks"
      ]
    },
    {
      "phase": "Solution",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "Makes sense. Given those constraints, how should Global Gadget Go enter Southeast Asia?"
    },
    {
      "phase": "Synthesis",
      "speaker": "Candidate",
      "kind": "synthesis",
      "detail": "Expansion is feasible via a phased, localized approach rather than a region-wide launch. First, start in 1–2 high-income, digitally mature hubs like Singapore and Malaysia; second, introduce a stripped-down, value-priced tracker tier alongside flagship models; and third, form a joint venture or distributor partnership to clear local certifications, handle fragmented logistics, and run micro-influencer campaigns.",
      "causes": [
        "Phased country sequencing starting with high-readiness urban hubs",
        "Entry-tier product adaptation plus local JV partnerships for compliance and distribution"
      ]
    }
  ],
  "recommendations": [
    "P0: Execute a phased market entry starting with high-income, high-smartphone hubs (such as Singapore and Malaysia) before scaling into price-sensitive tier-2 markets.",
    "P1: Form a joint venture or exclusive partnership with a regional electronics distributor to navigate country-specific certifications and fragmented last-mile logistics.",
    "P2: Launch an entry-level tracker SKU priced competitively against local brands and promote it via localized social media micro-influencer campaigns."
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
  "synthesisScript": "Expanding into Southeast Asia is attractive for Global Gadget Go given 20% annual market growth, but high price sensitivity, low-cost local competitors, and fragmented country regulations prevent a uniform premium rollout. I recommend a phased entry starting in affluent urban hubs, paired with a value-priced tracker tier and a local distribution joint venture, measuring Year-1 market share, localized gross margin, and CAC payback.",
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
  "id": "cm-strat-tin-sheets",
  "title": "Tin Sheets Manufacturer Net Margin Expansion",
  "company": "Tin Sheet Manufacturer",
  "track": "Consulting",
  "category": "Profitability",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "Industrial Mfg",
    "Profitability",
    "Consulting"
  ],
  "prompt": "Your client is a B2B tin-sheet manufacturer looking to increase its net profit margin by 10–15% over the next 1–2 years. Diagnose their value chain and recommend concrete margin-expansion levers.",
  "clarifyingQuestions": [
    {
      "q": "Who are the client's customers, and how differentiated are their tin-sheet products?",
      "a": "They are a B2B player selling finished tin sheets of varying thickness, length, and breadth to FMCG, F&B, and paint companies.",
      "why": "Clarifies whether custom dimensions drive manufacturing complexity, scrap rates, or pricing power."
    },
    {
      "q": "What part of the value chain does the client own relative to competitors?",
      "a": "The client receives metal coils, rolls and cuts them into sheets, stores inventory, and uses third-party logistics (3PL) for delivery. Competitors follow a similar model, though our client is the largest player.",
      "why": "Identifies where operational scale advantages should exist and which cost nodes sit under direct management control."
    },
    {
      "q": "How is net margin defined here, and what is the exact target and timeline?",
      "a": "Net margin is Profit divided by Revenue, and management targets a 10–15% improvement within 1–2 years.",
      "why": "Sets the quantitative benchmark and rules out long-gestation capital projects that cannot pay back within two years."
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
      "phase": "Scoping",
      "speaker": "Interviewer",
      "kind": "prompt",
      "detail": "Your client is a tin-sheet manufacturer aiming to increase net profit margin. How would you approach this?"
    },
    {
      "phase": "Scoping",
      "speaker": "Candidate",
      "kind": "question",
      "detail": "To scope the problem, I would like to understand our customer segments and product customization, our value chain footprint versus peers, and the target margin improvement and timeline.",
      "reasoning": "Confirming product customization, owned value-chain steps, and the 1–2 year horizon focuses the analysis on near-term, controllable levers."
    },
    {
      "phase": "Structure",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "They are the largest B2B player selling customized tin sheets to FMCG, F&B, and paint firms. They buy coils, roll and store sheets, and use 3PL outbound logistics. They want a 10–15% net margin uplift in 1–2 years."
    },
    {
      "phase": "Structure",
      "speaker": "Candidate",
      "kind": "framework",
      "detail": "Since Net Margin = 1 − (Total Costs / Revenue), we can improve it by cutting costs or expanding revenue. Starting with costs across the value chain—R&D, raw material sourcing, inbound freight, storage, rolling/processing, packaging, outbound 3PL, and reverse logistics—let's inspect where major leakage sits.",
      "reasoning": "Mapping costs sequentially along the manufacturing value chain ensures no procurement, yield, or logistics bottleneck is overlooked."
    },
    {
      "phase": "Investigation",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "That value chain breakdown is comprehensive. Let's focus on raw material costs—break down raw material spend and zoom in on the quantity of coils consumed."
    },
    {
      "phase": "Root Cause",
      "speaker": "Candidate",
      "kind": "root-cause",
      "detail": "Raw material cost equals number of suppliers times average coil quantity purchased times price per ton. Looking at quantity consumed, high scrap and trim waste likely occur when rolling and cutting standard coils into highly varied custom thickness, length, and breadth specs, compounded by excess safety stock held for fragmented SKUs.",
      "reasoning": "Connecting custom SKU dimensions to coil-slitting geometry explains why physical coil consumption exceeds theoretical finished sheet tonnage.",
      "causes": [
        "High metal scrap and edge-trim yield loss from cutting custom thickness/length/breadth orders",
        "Fragmented coil procurement and excess working-capital storage across low-volume custom specs",
        "Unpriced customization complexity and underutilized 3PL outbound truckloads"
      ]
    },
    {
      "phase": "Solution",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "Spot on—custom sizing creates significant yield loss and inventory drag. What concrete actions should the client implement over the next 1–2 years?"
    },
    {
      "phase": "Synthesis",
      "speaker": "Candidate",
      "kind": "synthesis",
      "detail": "To capture a 10–15% margin expansion in 1–2 years, the client should optimize coil-slitting nesting and standardize core sheet widths to cut scrap yield loss, leverage its #1 market scale to consolidate coil suppliers on volume-rebate contracts with JIT delivery, and introduce minimum order quantities or price premiums on bespoke sheet specs alongside 3PL route consolidation.",
      "causes": [
        "Nesting optimization and standard width rationalization to slash coil scrap",
        "Scale-driven supplier consolidation and pricing tiers on custom dimensions"
      ]
    }
  ],
  "recommendations": [
    "P0: Deploy algorithmic slitting/nesting schedules and standardize core coil widths with key FMCG and paint clients to cut metal scrap and trim waste.",
    "P1: Leverage #1 industry scale to consolidate raw coil procurement into fewer long-term supplier contracts with volume rebates and JIT inbound scheduling to reduce storage costs.",
    "P2: Introduce minimum order quantities and complexity surcharges on low-volume bespoke sheet dimensions while consolidating 3PL outbound dispatches."
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
  "synthesisScript": "Our Tin Sheet Manufacturer can unlock a 10–15% net margin improvement over 1–2 years by addressing raw-material yield loss and working capital drag caused by unstandardized custom sheet dimensions. By optimizing coil-cutting nesting, consolidating coil procurement around our market-leading scale, and pricing bespoke specifications accurately alongside 3PL load optimization, we can expand margins without sacrificing B2B customer quality or delivery SLAs.",
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
  "id": "cm-strat-bombay-theatre",
  "title": "Standalone Theatre in Bombay Revenue Growth",
  "company": "Standalone Movie Theatre",
  "track": "Consulting",
  "category": "Growth",
  "difficulty": 2,
  "isStarter": false,
  "tags": [
    "Entertainment",
    "Growth",
    "Consulting"
  ],
  "prompt": "Your friend owns a standalone movie theatre in Mumbai serving middle-to-upper-income audiences and wants to double revenue over the next 3–4 years. How would you help them achieve this growth?",
  "clarifyingQuestions": [
    {
      "q": "What are the theatre's current revenue streams and target customer segment?",
      "a": "The theatre serves middle-to-upper-income patrons and earns revenue from movie tickets, food and beverages (F&B), parking, and in-theatre advertisements.",
      "why": "Maps all monetization levers beyond ticket box office so high-margin ancillary streams are included in the growth plan."
    },
    {
      "q": "Who are the main competitors, and what is the specific revenue target and timeframe?",
      "a": "Competitors include multiplex chains, other standalone theatres, and OTT platforms. Your friend wants to double (2x) revenue over the next 3–4 years.",
      "why": "Clarifies the scale of growth required and highlights the need to differentiate from multiplexes and home-streaming."
    },
    {
      "q": "Are there physical space or seating constraints at the current Mumbai location?",
      "a": "Yes, as a single standalone property, seating capacity and daily show slots limit peak-hour throughput.",
      "why": "Identifies whether off-peak utilization and yield per seat must carry most of the 2x target."
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
      "phase": "Scoping",
      "speaker": "Interviewer",
      "kind": "prompt",
      "detail": "Your friend owns a standalone movie theatre in Mumbai and wants to grow revenues significantly. How would you advise them?"
    },
    {
      "phase": "Scoping",
      "speaker": "Candidate",
      "kind": "question",
      "detail": "To frame the opportunity, could you confirm the customer segment, current revenue streams across tickets, F&B, parking, and ads, key competitors like multiplexes and OTT, and the target growth timeline?",
      "reasoning": "Confirming the 2x goal over 3–4 years and all ancillary revenue lines prevents an overly narrow ticket-pricing-only solution."
    },
    {
      "phase": "Structure",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "Audience is middle-to-upper income, all four revenue streams apply, competitors include multiplexes and OTT platforms, and the goal is a 2x revenue increase over 3–4 years."
    },
    {
      "phase": "Structure",
      "speaker": "Candidate",
      "kind": "framework",
      "detail": "I will divide growth into Existing Business optimization—breaking revenue into Number of Customers times Revenue per Customer across tickets, F&B, ads, and parking—and New Business extensions such as exclusive live events, alternative content, or spatial monetization.",
      "reasoning": "Separating core theatre throughput from new experiential offerings ensures we address both off-peak idle capacity and wallet-share expansion."
    },
    {
      "phase": "Investigation",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "Let's dig into both increasing revenue per customer and resolving supply/infrastructure bottlenecks at the theatre."
    },
    {
      "phase": "Root Cause",
      "speaker": "Candidate",
      "kind": "root-cause",
      "detail": "Revenue per customer splits into spend per visit and visit frequency. Right now, flat ticket pricing leaves peak-demand willingness to pay untapped, F&B lacks tiered combo/decoy pricing, and weekday or non-blockbuster show slots suffer low seat utilization compared to multiplexes.",
      "reasoning": "Linking seat-utilization gaps and uniform pricing reveals immediate monetization headroom without requiring a second property.",
      "causes": [
        "Low off-peak seat utilization due to dependence on standard theatrical film releases",
        "Flat ticket pricing and under-optimized F&B upselling/decoy bundling",
        "Suboptimal seating layout and aging seat comfort capping effective capacity and yield"
      ]
    },
    {
      "phase": "Solution",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "You have generated strong ideas across pricing, programming, and layout. Which top 3 initiatives should your friend prioritize to achieve the 2x target?"
    },
    {
      "phase": "Synthesis",
      "speaker": "Candidate",
      "kind": "synthesis",
      "detail": "I recommend prioritizing three high-ROI levers: first, host exclusive non-movie screenings such as live sports, comedy/music concerts, and cult classics during off-peak slots to lift utilization; second, implement differential peak/row pricing paired with F&B combo and decoy pricing; and third, reconfigure seating layout and upgrade comfort to expand high-yield seat capacity.",
      "causes": [
        "Exclusive live sports, concert, and event screenings to fill off-peak utilization",
        "Differential pricing, F&B bundling, and seat-layout upgrades to lift yield per patron"
      ]
    }
  ],
  "recommendations": [
    "P0: Monetize off-peak weekday and late-night slots with exclusive live sports screenings, stand-up/concert broadcasts, and private corporate bookings.",
    "P1: Roll out dynamic differential pricing by seat tier and showtime alongside F&B combo bundles using decoy pricing to lift spend per patron.",
    "P2: Re-engineer row spacing and upgrade auditorium seating comfort to add high-yield capacity and justify premium ticket tiers over competing multiplexes."
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
  "synthesisScript": "To double the Mumbai standalone theatre's revenue within 3–4 years against multiplex and OTT competition, we must unlock off-peak seat utilization and raise per-patron spend across tickets and F&B. I recommend prioritizing exclusive non-movie live event screenings, introducing differential seat/time pricing with F&B decoy bundles, and upgrading seating layout and capacity, tracked via occupancy rate and revenue per available seat-hour.",
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
  "id": "cm-strat-cement-conglomerate",
  "title": "Cement Conglomerate Low Profitability",
  "company": "Cement Conglomerate",
  "track": "Consulting",
  "category": "Profitability",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "Cement Co.",
    "Profitability",
    "Consulting"
  ],
  "prompt": "Your client is an Eastern India cement conglomerate operating two plants with 5 MT of total capacity, but selling only 2 MT, leading to low profitability. Diagnose the cause of underutilization and recommend a turnaround plan to reach full 5 MT sales.",
  "clarifyingQuestions": [
    {
      "q": "What is the client's customer mix between B2B and B2C, and is cement differentiated in this market?",
      "a": "About 30% of volume is B2B and 70% is B2C residential. Cement is largely a commoditized product.",
      "why": "Shows whether sales depend on institutional relationships or retail dealer push and brand availability."
    },
    {
      "q": "What does the competitive landscape and distribution network look like in Eastern India?",
      "a": "The client and major peers collectively hold 80% of the market. Around 200 regional dealers sell 20 MT annually, meaning our client's 2 MT represents just 10% of dealer throughput.",
      "why": "Quantifies the exact distribution gap and confirms strong addressable demand exists through existing trade channels."
    },
    {
      "q": "Which part of the value chain does the client control, and should we focus on revenue growth or cost cuts?",
      "a": "They manufacture and brand cement while relying on third-party distributors. Because idle capacity is driving fixed-cost under-absorption, focus on growing sales from 2 MT to 5 MT.",
      "why": "Directs the analysis toward volume and channel expansion rather than plant-floor cost cutting."
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
      "phase": "Scoping",
      "speaker": "Interviewer",
      "kind": "prompt",
      "detail": "Your client is a conglomerate in Kolkata operating two cement plants in Eastern India with 5 MT capacity, but selling only 2 MT and suffering low profitability. How would you turn this around?"
    },
    {
      "phase": "Scoping",
      "speaker": "Candidate",
      "kind": "question",
      "detail": "Before structuring, I would like to clarify the B2B versus B2C mix, product differentiation, the competitive landscape, our value chain role, and whether the priority is driving volume to 5 MT.",
      "reasoning": "Verifying customer mix and channel ownership clarifies whether low utilization stems from weak B2B contracting or B2C dealer bottlenecks."
    },
    {
      "phase": "Structure",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "Sales are 30% B2B and 70% B2C residential, and cement is commoditized. Our client and major competitors hold 80% of the market, and we rely on third-party distributors. Focus strictly on growing volume toward 5 MT."
    },
    {
      "phase": "Structure",
      "speaker": "Candidate",
      "kind": "framework",
      "detail": "To bridge the 3 MT volume gap, I will break Units Sold into Addressable Market × Market Share across both B2B and B2C, examining geographic reach, channel partnerships, and dealer share-of-wallet.",
      "reasoning": "In a commoditized category with fixed plant capacity, channel access and dealer push drive market share more than product features."
    },
    {
      "phase": "Investigation",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "What specific distribution channels should we examine, and note that ~200 existing dealers in our footprint already sell 20 MT in total—giving us only a 10% share of dealer sales."
    },
    {
      "phase": "Root Cause",
      "speaker": "Candidate",
      "kind": "root-cause",
      "detail": "Holding only 10% share across 200 dealers handling 20 MT proves demand exists right in our catchment, but we are losing push at the dealer counter in B2C and under-indexing on direct institutional B2B demand.",
      "reasoning": "Comparing our 2 MT sales against 20 MT total dealer throughput isolates channel execution—not regional demand—as the bottleneck.",
      "causes": [
        "Low 10% share-of-wallet across 200 existing third-party dealers due to weak trade incentives",
        "Under-penetration of direct B2B contracts with large builders and government infrastructure schemes",
        "Over-reliance on third-party distributors without direct hub-and-spoke retail coverage"
      ]
    },
    {
      "phase": "Solution",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "Exactly. Lay out your concrete channel plan across B2B and B2C to close the 3 MT gap."
    },
    {
      "phase": "Synthesis",
      "speaker": "Candidate",
      "kind": "synthesis",
      "detail": "To scale from 2 MT to 5 MT and restore fixed-cost leverage, the client should pursue two tracks: in B2C, introduce tiered volume rebates and credit terms to lift share-of-wallet among the top 200 dealers while launching company-managed hub-and-spoke depots in underserved districts; in B2B, build a dedicated key-account team for long-term builder contracts and government infrastructure tenders.",
      "causes": [
        "Tiered dealer incentives and hub-and-spoke depots to lift B2C share-of-wallet above 10%",
        "Direct B2B builder partnerships and government infrastructure contracting"
      ]
    }
  ],
  "recommendations": [
    "P0: Restructure B2C trade terms with tiered volume rebates and mason/contractor loyalty programs to raise share-of-wallet across the 200 existing dealers from 10% toward 20%.",
    "P1: Establish a dedicated B2B key-account sales team to lock in multi-quarter supply contracts with large real estate builders and Eastern India government infrastructure schemes.",
    "P2: Pilot a hub-and-spoke direct distribution model with company-leased regional depots to bypass third-party bottlenecks in high-growth rural and semi-urban districts."
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
  "synthesisScript": "Our Cement Conglomerate's low profitability stems from 60% idle capacity (selling 2 MT of 5 MT), driven by a 10% share-of-wallet across regional dealers and limited direct B2B contracting. By deploying tiered dealer rebates and hub-and-spoke depots in B2C alongside direct builder and government infrastructure contracts in B2B, the client can absorb fixed plant overheads and capture full 5 MT utilization.",
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
  "id": "cm-strat-shipping-logistics",
  "title": "B2B & B2C Marketing Campaign for Shipping Logistics",
  "company": "Shipping Logistics Co.",
  "track": "Consulting",
  "category": "GTM",
  "difficulty": 2,
  "isStarter": false,
  "tags": [
    "Shipping Logistics",
    "GTM",
    "Consulting"
  ],
  "prompt": "A land-freight shipping logistics company serves B2B liquid tanker clients and is newly entering the B2C packers-and-movers market. Design a tailored digital and social media marketing strategy across both B2B and B2C segments.",
  "clarifyingQuestions": [
    {
      "q": "What mode of transport and specific services does the company operate in B2B versus B2C?",
      "a": "They operate land freight forwarding: B2B tanker trucks transporting liquids such as petroleum, chemicals, and milk, and a newly launched B2C packers-and-movers service.",
      "why": "Aligns messaging and channel selection with distinct risk profiles—industrial bulk safety versus household relocation trust."
    },
    {
      "q": "How have previous marketing campaigns performed across both segments?",
      "a": "Past B2B campaigns underperformed because they failed to position the company's reliability clearly or build brand awareness. No significant B2C marketing has been run yet.",
      "why": "Diagnoses why B2B outreach stalled before proposing new channels or creative formats."
    },
    {
      "q": "What marketing budget is allocated for the B2C packers-and-movers launch?",
      "a": "Approximately $100,000 is allocated for the B2C launch plan.",
      "why": "Sets clear spend guardrails so B2C channel mix and customer acquisition targets remain realistic."
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
      "phase": "Scoping",
      "speaker": "Interviewer",
      "kind": "prompt",
      "detail": "A shipping logistics company serving both B2B and B2C clients wants to launch tailored marketing campaigns across social media platforms. How would you design their strategy?"
    },
    {
      "phase": "Scoping",
      "speaker": "Candidate",
      "kind": "question",
      "detail": "To tailor the plan properly, could you confirm whether they operate maritime or land freight, what exact products they move for B2B versus B2C, past campaign results, and any B2C budget limits?",
      "reasoning": "Understanding freight mode, cargo sensitivity, past campaign failures, and budget caps prevents generic social media recommendations."
    },
    {
      "phase": "Structure",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "They are a land-freight forwarder: B2B uses tanker trucks for liquids like petroleum, chemicals, and milk, while B2C is a new entry into packers and movers with a $100,000 budget. Past B2B campaigns failed due to weak positioning and awareness."
    },
    {
      "phase": "Structure",
      "speaker": "Candidate",
      "kind": "framework",
      "detail": "Because B2B enterprise buyers and B2C households have completely different purchase journeys, I will build two separate funnels using the AIDA framework (Awareness, Interest, Desire, Action), matching platform choice and value propositions to each buyer persona.",
      "reasoning": "Separating B2B procurement decision-makers from consumer movers ensures high-intent channel targeting and avoids wasted ad spend."
    },
    {
      "phase": "Investigation",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "Good separation. Start with the B2B segment—why did prior campaigns miss the mark, and how would you execute the AIDA funnel there?"
    },
    {
      "phase": "Root Cause",
      "speaker": "Candidate",
      "kind": "root-cause",
      "detail": "B2B liquid logistics buyers—plant heads, procurement leads, and compliance officers—prioritize zero-leak safety, hygiene, and on-time SLAs, which generic past ads failed to prove. On LinkedIn, we should build Awareness with safety-certified case studies and infographics, drive Interest via targeted account-based email sequences showing cost-per-liter savings, and convert Desire through technical compliance webinars.",
      "reasoning": "Anchoring B2B outreach on LinkedIn and compliance proof directly addresses why procurement teams ignored earlier generic campaigns.",
      "causes": [
        "Prior B2B campaigns lacked clear positioning on liquid-handling safety, hygiene, and SLA reliability",
        "Mismatch between generic social messaging and B2B procurement/technical buyer criteria"
      ]
    },
    {
      "phase": "Solution",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "That is a sharp B2B turnaround plan. Now how would you deploy the $100,000 budget to launch the B2C packers-and-movers business?"
    },
    {
      "phase": "Synthesis",
      "speaker": "Candidate",
      "kind": "synthesis",
      "detail": "For B2C, households fear damaged goods and hidden fees, so we should leverage our B2B safety heritage across visual platforms—Instagram, Facebook, and YouTube—using short packing-quality reels, transparent pricing calculators, and geo-targeted search/social ads in high-relocation urban corridors. Tracking cost per qualified lead (CPL) and booking conversion will keep the $100,000 launch disciplined while B2B scales on LinkedIn.",
      "causes": [
        "Visual safety-first storytelling on Instagram, Facebook, and YouTube to overcome household damage anxiety",
        "Geo-targeted urban relocation funnels paired with transparent quote calculators within the $100,000 cap"
      ]
    }
  ],
  "recommendations": [
    "P0: Rebuild the B2B funnel on LinkedIn and account-based email around safety, hygiene compliance, and client testimonials for petroleum, chemical, and dairy logistics buyers.",
    "P1: Deploy the $100,000 B2C budget across geo-targeted YouTube, Instagram, and Facebook video campaigns emphasizing damage-free packaging inherited from precision tanker operations.",
    "P2: Launch an instant online moving-quote calculator and post-move referral incentive in top metropolitan corridors to lift B2C lead-to-booking conversion."
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
  "synthesisScript": "To fix underperforming B2B outreach and launch B2C packers and movers within a $100,000 budget, the company must split its social strategy by buyer trust drivers. Deploying safety-backed LinkedIn thought leadership and compliance webinars for B2B procurement leaders, paired with geo-targeted visual trust campaigns and instant quote funnels on Instagram, Facebook, and YouTube for B2C households, will maximize qualified pipeline and CAC payback.",
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
  "id": "cm-strat-unconventional-psb",
  "title": "Unconventional Public Sector Bank Productivity",
  "company": "Public Sector Bank",
  "track": "Consulting",
  "category": "Unconventional",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "Public Sector Bank",
    "Unconventional",
    "Consulting"
  ],
  "prompt": "Your client is a pan-India public sector bank facing persistently low employee productivity compared to private sector peers. Diagnose the root causes of this productivity gap and recommend actionable solutions.",
  "clarifyingQuestions": [
    {
      "q": "How long has this productivity issue existed, and what benchmark is management using?",
      "a": "It has persisted for many years, and new leadership is now benchmarking performance against private sector banks rather than other public sector banks.",
      "why": "Clarifies that the gap stems from structural operating differences versus agile private banks rather than a sudden recent shock."
    },
    {
      "q": "Is the issue concentrated in specific regions, and how is employee productivity measured?",
      "a": "It is a pan-India issue, though branch attainment varies widely even within cities like Mumbai. Productivity is measured as percentage of branch sales targets achieved across loans, fixed deposits, and savings accounts.",
      "why": "Establishes both the exact KPI formula and internal variance across branches facing similar market conditions."
    },
    {
      "q": "How are employee targets currently determined and communicated?",
      "a": "Managers assign targets top-down based mechanically on each employee's prior-year target, regardless of whether it was achieved or aligned with local branch potential.",
      "why": "Tests whether unrealistic or uncalibrated goal-setting is demotivating staff and distorting reported productivity."
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
      "phase": "Scoping",
      "speaker": "Interviewer",
      "kind": "prompt",
      "detail": "Your client is a public sector bank facing low employee productivity. Diagnose the root causes and recommend practical solutions."
    },
    {
      "phase": "Scoping",
      "speaker": "Candidate",
      "kind": "question",
      "detail": "I would like to clarify the geographic footprint, how long the issue has persisted, how productivity is defined, and which peer group management is comparing against.",
      "reasoning": "Establishing the benchmark (private vs public banks) and KPI definition (% of sales target achieved) clarifies whether the gap is structural or measurement-driven."
    },
    {
      "phase": "Structure",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "It is a pan-India, long-standing issue that new leadership is benchmarking against private sector banks. Productivity is measured as percentage of sales targets achieved across loans, FDs, and savings accounts, and branch performance varies sharply even within Mumbai."
    },
    {
      "phase": "Structure",
      "speaker": "Candidate",
      "kind": "framework",
      "detail": "I will structure the diagnosis across two levers: Target Design & Alignment (how targets are set and calibrated to branch potential) and Employee Enablement & Motivation (sales capability, digital tools/workflows, and performance incentives).",
      "reasoning": "Because productivity is defined as target attainment, evaluating both the realism of the denominator (targets) and the drivers of the numerator (sales output) is essential."
    },
    {
      "phase": "Investigation",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "Start with target setting: currently, managers assign targets top-down based on each employee's previous-year target regardless of prior attainment. What else drives the gap against private banks?"
    },
    {
      "phase": "Root Cause",
      "speaker": "Candidate",
      "kind": "root-cause",
      "detail": "Blindly rolling over prior-year targets creates demoralizing, unachievable quotas in slower catchments while under-challenging high-footfall branches. Combined with flat PSB compensation lacking performance-linked rewards, manual paper-heavy workflows, and limited cross-selling training compared to private banks, frontline staff disengage.",
      "reasoning": "Combining flawed top-down quota design with weak incentives and operational friction explains why attainment lags private peers and varies within Mumbai.",
      "causes": [
        "Top-down target rollovers disconnected from local branch catchment potential or prior attainment",
        "Absence of differentiated performance-linked incentives or recognition relative to private banks",
        "Manual branch processes and insufficient product cross-selling training reducing selling time"
      ]
    },
    {
      "phase": "Solution",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "Strong diagnosis. Given public sector union and pay-scale constraints, how can the bank fix this realistically?"
    },
    {
      "phase": "Synthesis",
      "speaker": "Candidate",
      "kind": "synthesis",
      "detail": "The bank should replace mechanical top-down rollovers with data-backed, catchment-adjusted branch targets co-owned by branch managers, automate routine teller/KYC paperwork to free up advisory hours, and introduce transparent branch leaderboards with non-monetary recognition, fast-track promotions, and team-based bonus pools piloted in lagging Mumbai branches first.",
      "causes": [
        "Catchment-adjusted bottom-up target calibration to restore quota fairness",
        "Digital workflow automation and promotion/recognition incentives compatible with PSB rules"
      ]
    }
  ],
  "recommendations": [
    "P0: Replace top-down target rollovers with catchment-adjusted branch quotas calibrated to local deposit/loan potential and historical attainment.",
    "P1: Digitize routine KYC and account-servicing workflows to free frontline staff hours for cross-selling loans, FDs, and wealth products, supported by structured sales coaching.",
    "P2: Introduce transparent branch scorecards linking consistent target outperformance to fast-track promotions, prestigious postings, and team recognition programs."
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
  "synthesisScript": "The public sector bank's low productivity against private peers stems from uncalibrated top-down target rollovers, heavy manual branch administration, and flat reward structures that dampen frontline sales motivation. By introducing catchment-adjusted quotas, digitizing routine branch workflows to boost selling time, and tying outperformance to promotion fast-tracks and team recognition, management can lift target attainment fairly across its pan-India network.",
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
  "id": "cm-strat-hepatitis-c-drug",
  "title": "Determining Price of a New Hepatitis-C Drug",
  "company": "Pharma Client",
  "track": "Consulting",
  "category": "Pricing",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "Pharma",
    "Pricing",
    "Consulting"
  ],
  "prompt": "Your client is a pharmaceutical company launching a new Hepatitis C drug in the US that cures patients in 12 months. Currently, there are 100,000 annual cases—80% receive a $1,000 generic drug and 20% receive a $20,000 specialized drug—while 20% of total cases also incur $300,000 each in downstream insurance hospitalization costs. Determine the optimal price for the new drug.",
  "clarifyingQuestions": [
    {
      "q": "Do we have manufacturing cost data, or should we anchor the price on the economic value delivered to the US healthcare system?",
      "a": "Focus on value-based pricing anchored on total current annual treatment and insurance spend across the 100,000 cases.",
      "why": "Confirms that ceiling willingness-to-pay is bounded by total healthcare cost savings rather than a cost-plus markup."
    },
    {
      "q": "In the baseline valuation, what clinical efficacy and adoption rate should we assume for the new drug?",
      "a": "Start by assuming a 100% cure rate (0% failure) that eliminates downstream hospitalization costs and captures all 100,000 annual cases.",
      "why": "Establishes the clean theoretical ceiling calculation before stress-testing commercial and clinical assumptions."
    },
    {
      "q": "How should we adjust the theoretical ceiling for real-world US payer and competitive dynamics?",
      "a": "Identify the exact assumptions behind the theoretical number and recommend how payers, physicians, and competitors constrain the final launch price.",
      "why": "Ensures the pricing recommendation balances theoretical value capture with realistic insurer reimbursement and adoption."
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
      "phase": "Scoping",
      "speaker": "Interviewer",
      "kind": "prompt",
      "detail": "Your client has developed a 12-month Hepatitis C cure for the US market (100,000 annual cases). Currently, 80% take a $1,000 generic, 20% take a $20,000 specialty drug, and 20% of all cases incur $300,000 in insurance costs. How would you price this drug?"
    },
    {
      "phase": "Scoping",
      "speaker": "Candidate",
      "kind": "question",
      "detail": "To establish our pricing boundaries, should I compute the value-based ceiling from total healthcare spend avoided, and what efficacy or market-capture assumptions hold in the baseline?",
      "reasoning": "Confirming value-based pricing against total payer burden clarifies how drug spend plus avoided hospitalization costs set the upper bound."
    },
    {
      "phase": "Structure",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "Yes, calculate the value-based ceiling first assuming 0% failure and full coverage of all 100,000 cases, then critique the assumptions."
    },
    {
      "phase": "Structure",
      "speaker": "Candidate",
      "kind": "framework",
      "detail": "Using the 3Cs pricing framework—Cost floor, Competitor/Standard-of-Care anchor, and Customer/Payer Value—I will sum today's total annual system spend across generic drugs, specialty drugs, and downstream insurance costs, divide by 100,000 patients for the theoretical ceiling, and then discount for commercial reality.",
      "reasoning": "Quantifying total system spend first gives an objective economic ceiling before negotiating payer rebates and competitive positioning."
    },
    {
      "phase": "Investigation",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "Walk me through the exact math to arrive at the theoretical ceiling price per treatment."
    },
    {
      "phase": "Root Cause",
      "speaker": "Candidate",
      "kind": "root-cause",
      "detail": "Current annual spend has three parts: generic drugs cost 80,000 × $1,000 = $80 million; specialty drugs cost 20,000 × $20,000 = $400 million; and downstream insurance costs 20,000 × $300,000 = $6.00 billion. Total current spend equals $6.48 billion, which across 100,000 patients yields a theoretical value-based ceiling of $64,800 per cure.",
      "reasoning": "Isolating the $6.00 billion downstream hospitalization cost shows why total system savings—not the $1,000 generic—drive value.",
      "causes": [
        "Downstream insurance hospitalization ($6.00B) accounts for 92.6% of total annual Hepatitis C spend",
        "Theoretical $64,800 price equals total $6.48B current healthcare burden divided across 100,000 cases"
      ]
    },
    {
      "phase": "Solution",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "Spot on at $64,800. What five critical assumptions underpin that ceiling, and how should they shape our actual launch price?"
    },
    {
      "phase": "Synthesis",
      "speaker": "Candidate",
      "kind": "synthesis",
      "detail": "The $64,800 figure assumes: (1) 100% patient demand capture, (2) full distributor push, (3) universal physician prescription switching, (4) a permanent 0% failure rate, and (5) zero competitive retaliation from incumbent drugmakers. In reality, insurers will refuse to pay 100% of savings upfront and 80% of mild cases use a $1,000 generic, so we should set a list price near $60,000 with tiered payer rebates—targeting ~$45,000–$50,000 net—and risk-sharing cure guarantees to win formulary priority.",
      "causes": [
        "Five rigid assumptions: 100% share, full distributor/doctor push, 0% failure, and no competitor response",
        "Need for payer rebates and outcome-based risk-sharing below $64,800 to capture formulary access"
      ]
    }
  ],
  "recommendations": [
    "P0: Anchor US list price just below the $64,800 value ceiling (around $60,000) while offering 15–25% volume rebates to commercial payers and PBMs for preferred formulary tiering.",
    "P1: Introduce an outcomes-based rebate guarantee refunding insurers if a patient relapses within 12 months, directly neutralizing skepticism around the 0% failure assumption.",
    "P2: Target the 20% high-risk severe segment ($20,000 drug + $300,000 hospitalization risk) first via specialist hepatologist detailing before expanding into mild generic-treated cohorts."
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
  "synthesisScript": "Total annual US spend on Hepatitis C is $6.48 billion—$6.00 billion of which is downstream insurance costs—setting a theoretical value-based price ceiling of $64,800 per patient across 100,000 cases. Because that ceiling relies on unrealistic assumptions of 100% share, zero failure, and no competitor response, I recommend launching near $60,000 list with outcomes-based payer rebates targeting ~$45,000–$50,000 net, prioritized first toward the 20% high-hospitalization-risk segment.",
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
  "id": "cm-strat-five-star-hotel",
  "title": "Mumbai 5-Star Hotel Lower Profitability",
  "company": "Mumbai 5-Star Hotel",
  "track": "Consulting",
  "category": "Profitability",
  "difficulty": 2,
  "isStarter": false,
  "tags": [
    "Hospitality",
    "Profitability",
    "Consulting"
  ],
  "prompt": "Your client is a standalone luxury 5-star hotel in Mumbai experiencing declining profitability over the past 3 years, with a steep drop in the last 1 year. Diagnose the root causes and recommend a recovery plan.",
  "clarifyingQuestions": [
    {
      "q": "Is this a hotel chain or a single property, and are competing 5-star hotels in Mumbai facing the same issue?",
      "a": "It is a single standalone luxury hotel, and competing hotels in Mumbai are not experiencing this decline.",
      "why": "Isolates the profitability drop to property-specific execution rather than city-wide tourism or macroeconomic headwinds."
    },
    {
      "q": "What customer segments does the hotel serve, and has their mix changed recently?",
      "a": "We serve tourists and business travelers. Historically the split was 50:50, but it has shifted to 30% tourists and 70% business travelers.",
      "why": "Tests whether mix shift from higher-margin leisure guests toward discounted corporate travelers is compressing yields."
    },
    {
      "q": "Which revenue streams exist, and is the profit drop driven by lower revenues, higher costs, or both?",
      "a": "There are four streams—rooms, restaurants, banquet halls, and ancillary services. Both revenues fell and costs rose, though we should examine room revenues first.",
      "why": "Prioritizes the core room P&L driver before evaluating secondary F&B and overhead impacts."
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
      "phase": "Scoping",
      "speaker": "Interviewer",
      "kind": "prompt",
      "detail": "Your client is a standalone 5-star hotel in Mumbai facing declining profitability for 3 years, worsening sharply in the last year. Identify the reasons behind this drop."
    },
    {
      "phase": "Scoping",
      "speaker": "Candidate",
      "kind": "question",
      "detail": "Before structuring, could you clarify if this is a single hotel or chain, whether peers face the same issue, how customer segments have shifted, and which revenue streams drive the P&L?",
      "reasoning": "Checking peer performance and segment mix reveals immediately whether the drop reflects local demand loss or internal rate/mix erosion."
    },
    {
      "phase": "Structure",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "It is a single luxury hotel facing a property-specific issue across rooms, restaurants, banquets, and ancillary services. Customer mix shifted from 50:50 tourists-to-business to 30:70. Both revenues dropped and costs rose; start with room revenues."
    },
    {
      "phase": "Structure",
      "speaker": "Candidate",
      "kind": "framework",
      "detail": "I will split Room Revenue into Room Rent (#Available Rooms × Occupancy % × Average Room Rate) and In-Room Ancillaries like room service and minibar, then trace how the shift from 50% to 30% tourists lowered rate realization, ancillary attach, and restaurant/banquet spillover while fixed costs stayed elevated.",
      "reasoning": "Connecting customer mix directly to ARR and ancillary spend uncovers compounding margin loss across multiple P&L lines."
    },
    {
      "phase": "Investigation",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "That makes sense. How does losing leisure tourists—moving from 50% down to 30%—hurt room revenue and overall hotel profitability so sharply in the past year?"
    },
    {
      "phase": "Root Cause",
      "speaker": "Candidate",
      "kind": "root-cause",
      "detail": "Business travelers typically book lower-rate standard rooms under discounted corporate contracts and dine outside with clients, whereas leisure tourists pay higher rack/OTA rates, book premium suites, and spend heavily on room service, restaurants, and spa ancillaries. Over-reliance on corporate bookings alongside aging property upkeep or weak OTA visibility has hollowed out high-margin yield while rigid staffing and utilities inflated unit costs.",
      "reasoning": "Showing the double hit of lower corporate ADRs and lower F&B attach explains why both top-line rooms and ancillary profits fell together.",
      "causes": [
        "Sharp mix shift from high-yield tourists (50% to 30%) toward lower-rate corporate business guests",
        "Lower ancillary F&B, room-service, and banquet attachment from short-stay corporate travelers",
        "High fixed staffing and facility maintenance overhead spread over lower-margin room nights"
      ]
    },
    {
      "phase": "Solution",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "Very clear. What turnaround actions should management take to restore profitability?"
    },
    {
      "phase": "Synthesis",
      "speaker": "Candidate",
      "kind": "synthesis",
      "detail": "To reverse the 3-year decline, the hotel should aggressively rebuild its tourist and staycation share toward 50% via curated luxury packages, refreshed OTA/digital positioning, and weekend dining/banquet bundles; simultaneously, raise corporate contract rate floors with minimum room-night commitments and flex variable housekeeping and F&B staffing to match occupancy troughs.",
      "causes": [
        "Rebalancing guest mix back toward leisure tourists, luxury staycations, and weekend events",
        "Corporate rate-floor renegotiation and occupancy-indexed variable staffing"
      ]
    }
  ],
  "recommendations": [
    "P0: Rebuild the high-margin leisure tourist mix from 30% back toward 50% through luxury OTA visibility, international travel-agent partnerships, and bundled room-plus-dining weekend staycations.",
    "P1: Renegotiate corporate B2B rate cards with higher minimum rate floors and bundle breakfast/meeting-room credits to lift ancillary spend per business guest.",
    "P2: Flex variable F&B, banquet, and housekeeping staffing schedules to mid-week versus weekend occupancy and audit energy/procurement costs to trim overhead."
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
  "synthesisScript": "The Mumbai 5-star hotel's profitability drop is a property-specific mix and margin crisis: tourist share fell from 50% to 30%, replacing high-ADR, high-ancillary leisure guests with discounted corporate stays while fixed costs kept rising. Rebuilding leisure and weekend staycation demand via targeted OTA packages, tightening corporate rate floors, and flexing variable operating staff will restore RevPAR and EBITDA margins.",
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
  "id": "cm-strat-ecom-sustainability",
  "title": "E-Commerce Company Taking Sustainable Measures",
  "company": "Flipkart",
  "track": "Consulting",
  "category": "Unconventional",
  "difficulty": 3,
  "isStarter": false,
  "tags": [
    "E-Commerce",
    "Unconventional",
    "Consulting"
  ],
  "prompt": "Flipkart wants to integrate environmental sustainability and social responsibility across its core Indian e-commerce delivery operations after seeing competitors profit from green initiatives. Devise a practical roadmap for Flipkart to transition toward a sustainable business model.",
  "clarifyingQuestions": [
    {
      "q": "What is motivating Flipkart's sustainability push now, and has it attempted similar initiatives before?",
      "a": "Flipkart has not run a comprehensive operational shift previously, but competitors moving toward sustainability have achieved strong returns and customer traction.",
      "why": "Frames sustainability as a margin- and loyalty-accretive business transformation rather than pure compliance."
    },
    {
      "q": "Should our recommendations cover only Flipkart's core Indian e-commerce delivery operations, excluding subsidiaries?",
      "a": "Yes, limit the scope strictly to Flipkart's main Indian e-commerce delivery business.",
      "why": "Keeps operational levers focused on core fulfillment, packaging, sellers, and last-mile logistics."
    },
    {
      "q": "Can Flipkart adjust its operating balance between pure marketplace and inventory-led fulfillment?",
      "a": "Yes, shifting eligible high-volume operations to warehouse inventory models is on the table if it reduces waste and cost.",
      "why": "Tests whether warehouse consolidation can simultaneously cut packaging waste, split shipments, and unit fulfillment cost."
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
      "phase": "Scoping",
      "speaker": "Interviewer",
      "kind": "prompt",
      "detail": "Flipkart wants to integrate environmental sustainability and social responsibility into its operations. How can they smoothly transition toward a sustainable business model?"
    },
    {
      "phase": "Scoping",
      "speaker": "Candidate",
      "kind": "question",
      "detail": "Before structuring, could you confirm the commercial objective behind this shift, whether any prior green pilots exist, and that we are scoping strictly to Flipkart's core Indian delivery operations?",
      "reasoning": "Confirming the Indian core-delivery boundary and competitive profit rationale ensures recommendations remain commercially viable."
    },
    {
      "phase": "Structure",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "Yes, focus strictly on core Indian delivery operations. Flipkart has no prior full-scale program, while peers have generated positive returns from sustainability."
    },
    {
      "phase": "Structure",
      "speaker": "Candidate",
      "kind": "framework",
      "detail": "I will map the sustainability transformation across three value-chain stages: Pre-Delivery (product sourcing, seller onboarding, inbound transport), Core Operations (warehousing, packaging, inventory, outbound EV logistics), and Post-Delivery (reverse logistics and recycling), alongside social impact.",
      "reasoning": "Walking end-to-end through the e-commerce fulfillment chain captures both upstream seller emissions and downstream packaging/return waste."
    },
    {
      "phase": "Investigation",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "I like the value-chain breakdown. Let's start with Pre-Delivery and Core Operations—how would shifting more volume from pure marketplace to an inventory warehouse model help sustainability?"
    },
    {
      "phase": "Root Cause",
      "speaker": "Candidate",
      "kind": "root-cause",
      "detail": "In a fragmented marketplace, third-party sellers ship separately with oversized, non-recyclable plastic packaging, driving high emissions and waste. Consolidating high-velocity SKUs into Flipkart's regional warehouses enables right-sized recyclable packaging, multi-item box consolidation, fewer split deliveries, and lower per-unit logistics cost.",
      "reasoning": "Connecting fragmented seller fulfillment to duplicate packaging and split-truck miles shows how inventory consolidation cuts both carbon and cost.",
      "causes": [
        "Fragmented marketplace sellers creating excess single-use plastic packaging and split shipments",
        "Long-haul diesel routing and high reverse-logistics return rates increasing per-order emissions"
      ]
    },
    {
      "phase": "Solution",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "Makes sense. But practically, Flipkart cannot abruptly ban all unsustainable products without hurting GMV—how should they roll out assortment and supplier changes?"
    },
    {
      "phase": "Synthesis",
      "speaker": "Candidate",
      "kind": "synthesis",
      "detail": "Flipkart should adopt a phased 'category-wise sustainability transition' based on unit cost-benefit analysis rather than an overnight ban: start with high-margin, packaging-heavy categories like FMCG, beauty, and apparel using recycled/paper-based packaging and eco-certified seller badges, incentivize existing suppliers to transition with lower marketplace commissions, and pair EV last-mile fleets with circular packaging collection on returns.",
      "causes": [
        "Phased category-by-category cost-benefit rollout instead of an immediate SKU ban",
        "Seller commission incentives, EV last-mile routing, and warehouse packaging consolidation"
      ]
    }
  ],
  "recommendations": [
    "P0: Consolidate high-velocity SKUs into regional inventory hubs to enable multi-item order bundling and replace single-use plastic with right-sized biodegradable packaging.",
    "P1: Implement a phased category-wise sustainability roadmap—starting with FMCG, personal care, and fashion—offering lower commissions and 'Green Verified' badges to compliant sellers.",
    "P2: Transition metropolitan last-mile delivery and return-pickup fleets to electric vehicles (EVs) while offering delivery-worker safety, insurance, and green-slot incentives for customers."
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
  "synthesisScript": "Flipkart can turn sustainability into a profitable advantage across its Indian delivery operations by targeting fragmented seller packaging and split-shipment emissions. Through regional inventory consolidation for right-sized green packaging, a phased category-wise supplier incentive roadmap that protects GMV, and EV last-mile deployment, Flipkart can reduce unit fulfillment costs while boosting brand loyalty and ESG compliance.",
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
  "id": "cm-strat-mobile-showroom",
  "title": "Reasons for Revenue Decline of Mobile Phone Showroom",
  "company": "Croma",
  "track": "Consulting",
  "category": "Profitability",
  "difficulty": 2,
  "isStarter": false,
  "tags": [
    "Retail Store",
    "Profitability",
    "Consulting"
  ],
  "prompt": "Revenue from low-end mobile phones (<INR 10,000) at Croma's Rajouri Garden showroom has declined over the past 3 months, while competing electronics stores have not experienced a similar drop. Diagnose the root cause and recommend corrective actions.",
  "clarifyingQuestions": [
    {
      "q": "When you say low-end mobile phones, does that strictly mean devices priced under INR 10,000, and how long has the decline lasted?",
      "a": "Yes, phones under INR 10,000, and the revenue drop has occurred over the past 3 months.",
      "why": "Defines the exact price tier and 3-month timeframe to isolate recent local triggers from long-term structural shifts."
    },
    {
      "q": "Are nearby competing electronics stores seeing a similar decline, and should we isolate mobile phones from other appliances?",
      "a": "No other stores report this issue, and you can focus strictly on mobile phone sales at the Rajouri Garden store.",
      "why": "Confirms the problem is specific to Croma's Rajouri Garden showroom rather than a broader market downturn in budget phones."
    },
    {
      "q": "Is the revenue drop driven by lower prices or fewer units sold, and is inventory supply affected?",
      "a": "Selling prices and inventory supply have remained constant, so unit demand has fallen due to lower customer footfall rather than lower in-store conversion.",
      "why": "Pinpoints declining store footfall for budget buyers as the immediate mechanical driver."
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
      "phase": "Scoping",
      "speaker": "Interviewer",
      "kind": "prompt",
      "detail": "Revenue from low-end mobile phones at Croma's Rajouri Garden showroom has declined. How would you diagnose the root cause?"
    },
    {
      "phase": "Scoping",
      "speaker": "Candidate",
      "kind": "question",
      "detail": "To scope the decline, I would like to confirm the price definition of low-end phones, how long revenues have fallen, whether nearby competitors are impacted, and whether other store categories are involved.",
      "reasoning": "Establishing the <INR 10,000 price band, 3-month window, and competitor stability separates a local store issue from a category trend."
    },
    {
      "phase": "Structure",
      "speaker": "Interviewer",
      "kind": "data",
      "detail": "Low-end means under INR 10,000, the drop started 3 months ago, peers are unaffected, and you can focus solely on mobile phones."
    },
    {
      "phase": "Structure",
      "speaker": "Candidate",
      "kind": "framework",
      "detail": "Since Revenue equals Price times Quantity and prices held steady, Quantity dropped. With supply intact, I will decompose Demand into Store Footfall × Conversion Rate × Purchase Share, and examine what lowered footfall or conversion in the <INR 10,000 segment.",
      "reasoning": "Breaking unit sales into footfall and conversion isolates whether fewer budget shoppers enter the store or whether they leave without buying."
    },
    {
      "phase": "Investigation",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "Conversion among visitors is steady, but customer footfall for low-end phones has dropped over the last 3 months. Walk through the potential drivers of a store-specific footfall drop."
    },
    {
      "phase": "Root Cause",
      "speaker": "Candidate",
      "kind": "root-cause",
      "detail": "A 3-month, store-specific footfall drop in the budget segment points to three localized triggers: physical accessibility barriers such as road or metro construction near Rajouri Garden, aggressive localized promos or zero-down-payment EMI offers by nearby multi-brand mobile shops, and store perception/merchandising where Croma's premium layout makes <INR 10,000 buyers assume fewer budget deals exist.",
      "reasoning": "Combining physical access friction with competitor budget promos explains why price-sensitive shoppers shifted away over just 3 months while peers stayed healthy.",
      "causes": [
        "Localized physical access friction (such as recent road/metro construction or parking disruption) deterring walk-in shoppers",
        "Aggressive localized cashback/EMI promotions from nearby budget mobile retailers",
        "Premium showroom merchandising signaling high prices and under-displaying <INR 10,000 value deals"
      ]
    },
    {
      "phase": "Solution",
      "speaker": "Interviewer",
      "kind": "probe",
      "detail": "Those are very realistic store-level causes. What immediate actions should the Rajouri Garden store manager take to recover footfall and revenue?"
    },
    {
      "phase": "Synthesis",
      "speaker": "Candidate",
      "kind": "synthesis",
      "detail": "To recover <INR 10,000 phone sales, Croma should address both access and price perception immediately: deploy prominent storefront signage and geo-targeted local digital ads highlighting entry-level EMI/exchange deals, move a dedicated budget-phone discovery zone near the entrance, and offer hyper-local same-day doorstep delivery or assisted parking to offset local construction friction.",
      "causes": [
        "Dedicated front-of-store <INR 10,000 value zone and local EMI/exchange signage",
        "Hyper-local 2-hour delivery and geo-targeted offers to overcome storefront access barriers"
      ]
    }
  ],
  "recommendations": [
    "P0: Launch hyper-local geo-targeted ads and prominent exterior banners advertising zero-cost EMI, instant exchange bonuses, and top <INR 10,000 models to counter budget-retailer promos.",
    "P1: Reconfigure storefront merchandising by placing an accessible 'Value Smartphones Under ₹10K' display zone near the entrance to overcome premium-pricing intimidation.",
    "P2: Introduce assisted parking/valet support and rapid same-day local home delivery for Rajouri Garden shoppers affected by nearby road or construction bottlenecks."
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
  "synthesisScript": "The 3-month revenue drop in <INR 10,000 phones at Croma's Rajouri Garden showroom is driven by a store-specific footfall decline—rooted in local access friction, rival budget-store promos, and weak visibility of entry-level deals inside a premium-positioned store. Launching hyper-local EMI/exchange campaigns, creating a front-of-store <INR 10,000 value zone, and offering rapid local delivery or parking assistance will restore walk-in volume and segment share.",
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
