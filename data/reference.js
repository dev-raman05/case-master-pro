window.CM_DATA = window.CM_DATA || {};

window.CM_DATA.reference = {
  cheatSheetSections: [
    {
      id: 'equations',
      title: '1. Core Case Equations & Business Formulas',
      subtitle: 'Essential math & unit-economics anchors for Consulting & PM cases',
      items: [
        { label: 'Profit Equation', value: 'Revenue − Total Cost', note: 'Rev = Units × Price × Product Mix | Cost = Fixed + (Units × Variable Cost)' },
        { label: 'Breakeven Volume (BEP)', value: 'Fixed Costs ÷ (Price − VC)', note: 'Contribution Margin per Unit = Price − Variable Cost; BEP tells payback feasibility' },
        { label: 'LTV (Customer Lifetime Value)', value: '(ARPU × Gross Margin %) ÷ Churn %', note: 'Healthy SaaS / Consumer benchmark: LTV : CAC ≥ 3 : 1' },
        { label: 'Retention & Churn', value: 'Retention = 1 − Monthly Churn', note: '5% monthly churn ≈ 46% annual churn; small churn cuts compound LTV fast' },
        { label: 'Net Revenue Retention (NRR)', value: '(Start ARR + Expansion − Churn) ÷ Start ARR', note: '>110% NRR means existing customers grow faster than churn' },
        { label: 'E-Commerce Unit Economics', value: 'CM1 = GMV×TakeRate − COGS | CM2 − Logistics/RTO', note: 'Always subtract forward + reverse shipping on RTO/RVP orders!' },
        { label: 'RICE Prioritization Score', value: '(Reach × Impact × Confidence) ÷ Effort', note: 'Impact: 3=Massive, 2=High, 1=Med, 0.5=Low | Effort in person-months' },
        { label: 'TAM → SAM → SOM', value: 'Total → Serviceable → Obtainable Share', note: 'Clarify whether Market Entry wants total TAM or Year-1 realistic SOM' }
      ]
    },
    {
      id: 'rca-checklist',
      title: '2. RCA Diagnostic Checklist (Never Miss a Cause)',
      subtitle: 'Run this exact 4-step diagnostic sequence on every metric drop',
      items: [
        { label: 'Step A: Data & Logging Sanity', value: 'Tooling / Definition / Timing', note: 'Sudden cliff vs gradual slope? SDK bug? Dashboard metric definition change? Weekend/holiday shift?' },
        { label: 'Step B: 5-Way Segmentation', value: 'Geo × Platform × Cohort × Category × Time', note: 'iOS vs Android? Tier-1 vs Tier-2/3? New vs Repeat users? Dinner vs Lunch? Payment mode?' },
        { label: 'Step C: Internal Factors', value: 'Tech · UX · Ops · Pricing · Policy', note: 'App crash/latency, checkout redesign, dark-store stockouts, delivery SLA slip, surge fee hike, promo expiry' },
        { label: 'Step D: External Factors', value: 'Rivals · Season · Macro · Regulation', note: 'Competitor discount blitz (Zomato vs Swiggy), heavy rain/monsoon, exam/IPL season, RBI/UPI outage' },
        { label: 'Funnel Isolation Rule', value: 'Impressions → Clicks → Cart → Checkout → Success', note: 'Find the single step whose conversion % dropped sharpest; ignore flat steps!' }
      ]
    },
    {
      id: 'gtm-checklist',
      title: '3. GTM & Market Entry Launch Checklist',
      subtitle: 'From Beachhead ICP to Pre-Launch, Launch, and Post-Launch execution',
      items: [
        { label: 'Beachhead ICP', value: 'Narrow High-Pain Segment First', note: 'Never target "all of India" on Day 1—pick 1–3 cities or 1 clear persona with acute pain' },
        { label: 'Positioning Statement', value: 'For [ICP] who [Pain], [Brand] is [Category] that [Benefit]', note: 'Must clearly differentiate from entrenched substitutes/competitors' },
        { label: '4Ps Alignment', value: 'Product · Price · Place · Promotion', note: 'Verify channel fit: B2B field sales vs D2C creators/SEO vs pharmacy/kirana distribution' },
        { label: 'Phase 1: Pre-Launch', value: 'Beta Pilots · Waitlist · Teasers · Supply Seed', note: 'In marketplaces, seed supply (drivers/merchants/creators) BEFORE turning on buyer ads!' },
        { label: 'Phase 2: Launch', value: 'Activation Loops · Intro Pricing · PR / Influencers', note: 'Focus on Day-1 Time-to-Value and frictionless onboarding' },
        { label: 'Phase 3: Post-Launch', value: 'Retention · Referral · Cohort Unit Economics', note: 'Audit D7/D30 retention & CAC payback before scaling spend nationwide' },
        { label: 'Entry Modes (Consulting)', value: 'Build (Greenfield) vs Buy (M&A) vs Partner (JV)', note: 'Match mode to speed needed, regulatory barriers, and local distribution gap' }
      ]
    },
    {
      id: 'metrics-guardrails',
      title: '4. Product Metrics, Guardrails & A/B Rules',
      subtitle: 'How top tech interviewers test metric judgment and experimentation',
      items: [
        { label: 'North Star Rule', value: 'Captures Real Value Delivered (Not Clicks)', note: 'Good: "Trusted Tasks Completed" or "Delivered Orders/WAU". Bad: "App Opens"' },
        { label: 'Guardrail / Counter-Metrics', value: 'Always Pair Growth With Quality/Margin', note: 'More notifications → guard opt-outs; Lower AI errors → guard refusal rate & latency' },
        { label: 'Leading vs Lagging', value: 'Activation predicts Retention/LTV', note: 'L1 funnel rates move in days; L0 revenue & 90-day retention move in weeks/months' },
        { label: 'Marketplace A/B Interference', value: 'Use Geo-Cluster or Switchback Tests', note: 'Never user-split when riders/drivers/sellers are shared across Test & Control!' },
        { label: 'Novelty & Cannibalization', value: 'Run ≥2–4 Weeks · Watch Sibling SKUs', note: 'New tab clicks might just steal from existing search bar without lifting total orders' }
      ]
    },
    {
      id: 'value-chain',
      title: '5. Consulting Value Chain & Cost/Revenue Levers',
      subtitle: 'Trace every rupee of Revenue and Cost from raw input to after-sales',
      items: [
        { label: 'Revenue Decomposition', value: 'Volume × Price × Product/Channel Mix', note: 'Check customer acquisition vs frequency vs basket size vs discount leakage' },
        { label: 'Primary Value Chain', value: 'Procurement → Inbound → Mfg → Outbound → Sales → Service', note: 'Walk sequentially so you never miss raw-material waste, yield loss, or returns' },
        { label: 'Fixed vs Variable Costs', value: 'Rent/Salaries/R&D vs RM/Shipping/Commissions', note: 'Low capacity utilization inflates fixed cost per unit; RM inflation hits variable cost' },
        { label: 'M&A Deal Formula', value: 'Value = Standalone + Synergies − Price − Integration Risk', note: 'Revenue synergies (cross-sell) are slower/riskier than Cost synergies (overhead cuts)' }
      ]
    }
  ],

  industryPrimers: [
    {
      industry: 'E-Commerce & Social Commerce',
      valueChain: 'Seller Onboarding → Catalog/Pricing → Discovery/Search → Checkout (COD/Prepaid) → Seller Pickup → Linehaul → Last-Mile Delivery → Returns (RTO/RVP)',
      revenueDrivers: 'Traffic × Conversion Rate × AOV × Repeat Frequency × Seller Commission/Ads Take-Rate',
      costDrivers: 'Forward & Reverse Logistics (RTO 15–25% on COD), Payment Gateway/COD Cash Handling, Customer Acquisition (CAC), Discounts',
      keyKPIs: ['GMV & Net Revenue', 'Contribution Margin (CM1/CM2)', 'COD vs Prepaid Share', 'RTO % & RVP %', 'D30/D90 Repeat Retention'],
      caseTwists: 'Value platforms (Meesho) rely ~60% on COD in Tier-2/3 cities—any feature ignoring COD trust or RTO cost breaks unit economics.'
    },
    {
      industry: 'Food Delivery & Quick Commerce (10-Min)',
      valueChain: 'Brand/Supplier → Mother Warehouse → Dark Store (or Restaurant Kitchen) → Rider Dispatch/Batching → Doorstep (<10–35 min)',
      revenueDrivers: 'Order Density × AOV × Delivery/Platform Fees × Restaurant/Brand Ads & Take-Rate',
      costDrivers: 'Rider Payout per Order, Dark Store Rent & Shrinkage/Wastage (perishables), Cold-Chain, Packaging, Peak Surge Incentives',
      keyKPIs: ['Orders per Rider per Hour', 'Dark Store Breakeven (Orders/Day)', 'AOV (₹)', 'On-Time SLA %', 'Stockout Rate'],
      caseTwists: '3-sided marketplace! Always model peak-hour dinner/morning bottlenecks and avoid user-level A/B spillover.'
    },
    {
      industry: 'Fintech & Digital Payments (UPI / Lending)',
      valueChain: 'KYC & Onboarding → Wallet/Bank Link → Transaction/Loan Origination → Underwriting/Risk Engine → Settlement → Collections',
      revenueDrivers: 'MDR/Merchant Fees (cards/PG), Loan Interest/Processing Spread, Cross-Sell (Insurance/Wealth), Float Income',
      costDrivers: 'Credit Loss / NPAs (Defaults), KYC/Fraud Verification, Server/Switch Infra, Cashback/CAC',
      keyKPIs: ['TPV (Total Payment Volume)', 'Transaction Success Rate', 'GNPA / 90+ DPD Default Rate', 'NIM (Net Interest Margin)', 'CAC Payback'],
      caseTwists: 'P2P UPI has ~0 MDR revenue—monetization comes from merchant lending, credit lines, RuPay CC on UPI, and wealth cross-sell.'
    },
    {
      industry: 'Banking (Retail & Public Sector)',
      valueChain: 'Deposit Mobilization (CASA) → Treasury/CRR-SLR → Credit Assessment → Loan Disbursement → Branch/Digital Servicing → Recovery',
      revenueDrivers: 'Net Interest Income (Interest Earned − Interest Paid on Deposits) + Fee Income (Cards, FX, Processing)',
      costDrivers: 'Cost of Funds (CASA % keeps it low), Provisions for Bad Loans (NPAs), Branch/Staff Opex, Tech Modernization',
      keyKPIs: ['NIM (3–4%)', 'CASA Ratio (%)', 'GNPA / NNPA %', 'Cost-to-Income Ratio', 'Credit-Deposit (CD) Ratio'],
      caseTwists: 'PSBs face rural branch footfall shifts toward UPI/mobile apps and higher legacy operating costs vs nimble private/digital banks.'
    },
    {
      industry: 'Insurance (Life, Health, Motor)',
      valueChain: 'Product Actuary Design → Distribution (Agents/Bancassurance/Digital) → Underwriting → Policy Issuance → Claims Processing & Fraud Audit',
      revenueDrivers: 'Gross Written Premium (GWP), Renewal Persistency (13th/61st month), Investment Float Yield',
      costDrivers: 'Claims Paid Ratio, Agent Commissions (high Year-1), Fraudulent Claims, Customer Acquisition',
      keyKPIs: ['Combined Ratio (<100% = Underwriting Profit)', 'Claims Ratio', 'Persistency Rate', 'Solvency Ratio'],
      caseTwists: 'Never grow premiums by loosening underwriting—adverse selection spikes claims 12–24 months later!'
    },
    {
      industry: 'Ride-Hailing & Urban Mobility',
      valueChain: 'Driver Onboarding/KYC → App Demand Matching → Dynamic Pricing/ETA → Pickup & Trip Execution → Settlement & Ratings',
      revenueDrivers: 'Completed Rides × Avg Fare × Take-Rate % (or Flat Daily Driver Subscription)',
      costDrivers: 'Driver Incentives/Guarantees, Rider Promos, Maps/Cloud APIs, Support & Safety Ops',
      keyKPIs: ['Search-to-Fulfillment Rate (%)', 'ETA & Driver Cancellation Rate', 'Driver Hours Online', 'Rides per Driver per Hour'],
      caseTwists: 'Check commission vs subscription model first (Namma Yatri = flat fee!) and size for peak office/rain supply shortages.'
    },
    {
      industry: 'Airlines & Aviation',
      valueChain: 'Fleet Leasing/Purchase → Slot/Route Allocation → Ticketing & Yield Mgmt → Airport Ground Ops → In-Flight → MRO Maintenance',
      revenueDrivers: 'RASK (Revenue per Available Seat Km) = Load Factor × Yield + Ancillary (Baggage, Meals, Seat Fees)',
      costDrivers: 'ATF Jet Fuel (~35–40% of cost!), Aircraft Lease/Ownership, Airport Landing/Navigation Fees, Crew & MRO',
      keyKPIs: ['PLF (Passenger Load Factor ~80–88%)', 'RASK − CASK Spread', 'On-Time Performance (OTP)', 'Aircraft Turnaround Time (~30 min)'],
      caseTwists: 'Airlines have huge fixed costs—losing 1–2% load factor or grounding planes for MRO crushes profitability immediately.'
    },
    {
      industry: 'Automobiles & EV Ecosystem',
      valueChain: 'R&D & Platform Design → Component Sourcing (Battery/Chips) → OEM Assembly → Dealership Network → Financing → After-Sales Spare Parts',
      revenueDrivers: 'New Vehicle Units × ASP + High-Margin After-Sales Service/Spare Parts + Captive Finance',
      costDrivers: 'Raw Materials (Steel, Aluminum, Li-ion Cells ~40% of EV cost), R&D Capex, Dealer Margins, Warranty Recalls',
      keyKPIs: ['Wholesale vs Retail Units', 'Dealer Inventory Days', 'TCO (Total Cost of Ownership for EV vs ICE)', 'After-Sales Retention'],
      caseTwists: 'EV adoption hinges on TCO payback (high upfront capex vs low ₹/km running cost) + charging infrastructure anxiety.'
    },
    {
      industry: 'Pharmaceuticals & Healthcare Hospitals',
      valueChain: 'R&D/Trials → Patent/API Sourcing → Formulation Mfg → Distributors/Stockists → Hospitals/Pharmacies + Doctor Detailing → Patient',
      revenueDrivers: 'Doctor Prescriptions × Chronic Repeat Adherence × Price (Branded Generics vs Patented Specialty) | Hospitals: ARPOB × Occupied Beds',
      costDrivers: 'R&D Failure Risk, Field Medical Reps (MRs), API Raw Materials, Regulatory Compliance (FDA/CDSCO), Hospital Doctor Pay',
      keyKPIs: ['Hospital Occupancy % & ALOS (Avg Length of Stay)', 'ARPOB (Avg Revenue Per Occupied Bed)', 'Prescription Share', 'MR Productivity'],
      caseTwists: 'In India Pharma, the DOCTOR is the decision-maker (not the patient)—GTM must win physician trust & stockist availability!'
    },
    {
      industry: 'FMCG (Consumer Packaged Goods)',
      valueChain: 'Agri/Commodity Sourcing → Contract/Owned Mfg → C&F Agents → Super-Stockists → Distributors → Kirana/Modern Trade/Q-Comm',
      revenueDrivers: 'Distribution Reach (Outlets) × Velocity (Units/Outlet) × Price/Grammage × Premiumization Mix',
      costDrivers: 'Raw Material Commodities (Palm Oil, Wheat, Sugar, Packaging), Trade/Distributor Margins, A&P Marketing (~10–15%)',
      keyKPIs: ['Numeric vs Weighted Distribution', 'Same-Store Sales Growth', 'Inventory Days', 'Gross Margin & A&P Spend %'],
      caseTwists: 'Indian FMCG often protects ₹5/₹10 price points via "shrinkflation" (cutting pack grams) when commodity costs spike.'
    },
    {
      industry: 'Retail & Apparel (Offline + Omnichannel)',
      valueChain: 'Trend Forecasting → Sourcing/Design → Central Warehouse → Store Allocation → Visual Merchandising → Checkout → Clearance/Returns',
      revenueDrivers: 'Footfall × Conversion % × Units per Transaction × ASP (or Revenue per Sq Ft)',
      costDrivers: 'Store Lease/Rent (prime high-street/mall), Inventory Obsolescence/Markdowns, Store Staff, Shrinkage',
      keyKPIs: ['Same-Store Sales Growth (SSSG)', 'Sales per Sq Ft', 'Inventory Turnover', 'Full-Price Sell-Through %'],
      caseTwists: 'Fast fashion wins on inventory speed and full-price sell-through—dead seasonal stock destroys margins via end-of-season discounts.'
    },
    {
      industry: 'Media, Entertainment & OTT Streaming',
      valueChain: 'Content Acquisition/Originals → Localization/Dubbing → Encoding/CDN → App Discovery/Recs → Ad/Subscription Monetization',
      revenueDrivers: 'Paid Subscribers × ARPU + AVOD Ad Impressions × CPM + Bundled Telco Partnerships',
      costDrivers: 'Content Licensing & Originals Capex, Live Sports Rights (IPL), CDN Bandwidth, Marketing Churn Recovery',
      keyKPIs: ['Paid Subscribers & Churn %', 'Watch Hours per MAU', 'CAC vs Subscriber LTV', 'Ad Fill Rate & eCPM'],
      caseTwists: 'India OTT is ultra-price-sensitive—telco bundles, mobile-only plans, and regional content drive scale far better than Western pricing.'
    },
    {
      industry: 'IT Services & B2B SaaS / AI',
      valueChain: 'Lead Gen/Enterprise Sales → Implementation/Onboarding → Cloud Hosting/LLM Inference → Customer Success → Renewal & Expansion',
      revenueDrivers: 'IT: Billable Headcount × Utilization % × Billing Rate | SaaS: Logos × Seats/Usage × ARPA × NRR',
      costDrivers: 'IT: Bench Salary & Attrition | SaaS/AI: Cloud/GPU Inference Cost, Enterprise Sales Cycle (CAC), R&D',
      keyKPIs: ['SaaS: ARR, NRR, Magic Number, Gross Margin (~75–85%)', 'IT: Utilization % (80%+), Attrition %, Offshore Mix'],
      caseTwists: 'AI SaaS has real per-query COGS (token/GPU inference), unlike zero-marginal-cost traditional CRUD SaaS!'
    },
    {
      industry: 'Telecommunications',
      valueChain: 'Spectrum Auction → Tower/Fiber Capex → Network Ops → SIM/Plan Distribution → Recharge/Postpaid Billing → Enterprise/5G Services',
      revenueDrivers: 'Active Subscribers × ARPU + Enterprise Connectivity/Cloud',
      costDrivers: 'Massive Spectrum & Tower Capex (Depreciation), Power/Diesel at Towers, License Fees/SUC, Customer Acquisition',
      keyKPIs: ['ARPU (₹)', 'Subscriber Churn %', 'Data Usage/User/Month', 'Capex-to-Revenue Ratio'],
      caseTwists: 'High fixed-cost utility: once towers are built, incremental subscriber margin is huge—making tariff hikes pure profit flow-through.'
    },
    {
      industry: 'Cement & Steel (Heavy Commodities)',
      valueChain: 'Limestone/Iron Ore Mining → Clinker/Blast Furnace → Grinding/Rolling → Rail/Truck Bulk Logistics → B2B Infra / Dealers',
      revenueDrivers: 'Plant Capacity × Capacity Utilization % × Regional Realization (₹/Ton) × Trade vs Non-Trade Mix',
      costDrivers: 'Power & Fuel (Coal/Pet-coke ~30%), Freight/Logistics (~25% — cement is heavy & regional!), Raw Materials',
      keyKPIs: ['Capacity Utilization (%)', 'EBITDA per Ton (₹)', 'Lead Distance (km)', 'Blended vs OPC Mix'],
      caseTwists: 'Cement cannot be profitably trucked >300–400 km—regional plant proximity and rail/road lead distance decide margins!'
    },
    {
      industry: 'Hospitality & Tourism',
      valueChain: 'Property Asset/Lease → OTA & Direct Booking → Check-In/Room Prep → F&B / Events → Check-Out & Loyalty',
      revenueDrivers: 'Available Room Nights × Occupancy % × ADR (Average Daily Rate) + F&B / Banquets',
      costDrivers: 'Fixed Property Lease/Debt, Housekeeping/Staffing, OTA Commissions (15–25%!), Utilities',
      keyKPIs: ['RevPAR (Occupancy × ADR)', 'Occupancy %', 'Direct vs OTA Booking Share', 'GOPPAR'],
      caseTwists: 'Empty hotel room tonight is perishable revenue lost forever—dynamic pricing & direct repeat bookings beat high OTA fees.'
    },
    {
      industry: 'Logistics & Warehousing',
      valueChain: 'First-Mile Pickup → Sortation Hub → Linehaul (FTL/Rail/Air) → Destination Hub → Last-Mile Van/Bike → POD/Returns',
      revenueDrivers: 'Shipment Volume × Weight/Distance Tariff + Value-Added Warehousing/Fulfillment Fees',
      costDrivers: 'Fuel & Fleet Lease, Empty Backhaul (Deadhead km!), Hub Labor, Failed Delivery Re-attempts',
      keyKPIs: ['Truck Fill / Load Factor (%)', 'Empty Backhaul %', 'Cost per Kg / Cost per Parcel', 'On-Time Delivery (OTD %)'],
      caseTwists: 'Profitability in trucking is won or lost on backhaul utilization—never assume outbound-only pricing!'
    },
    {
      industry: 'Ed-Tech (K-12, Test Prep & Upskilling)',
      valueChain: 'Free Content/Tests (Top Funnel) → Counseling/Demo Sales → Cohort/Self-Paced Delivery → Doubt Solving → Outcomes/Placements',
      revenueDrivers: 'Paid Enrollments × Course Ticket Size + Multi-Year Renewals / Upskilling Cohorts',
      costDrivers: 'Sky-High Performance Marketing & Inside-Sales Counselor Payroll (often >50% of rev!), Star Faculty, Refunds',
      keyKPIs: ['Lead-to-Demo-to-Paid Conversion', 'CAC Payback & Refund %', 'Course Completion %', 'Organic Referral Share'],
      caseTwists: 'Offline hybrid centers often lowered CAC vs pure digital ads—watch counselor pushiness driving post-sale refunds.'
    },
    {
      industry: 'Real Estate & Construction',
      valueChain: 'Land Acquisition & Approvals → Financing → Architectural Design → Civil Construction → Pre-Sales/Channel Partners → Handover',
      revenueDrivers: 'Saleable Area (Sq Ft) × Realization (₹/Sq Ft) × Booking Velocity (or Commercial Lease Yield)',
      costDrivers: 'Land Cost (30–50% in metros), Steel/Cement/Labor, Cost of Capital/Delays, Broker Commissions',
      keyKPIs: ['Pre-Sales Velocity', 'Unsold Inventory Months', 'EBITDA Margin', 'Cash Collection vs Construction Stage'],
      caseTwists: 'Regulatory approval delays freeze capital while interest compounds—cashflow timing matters as much as total profit!'
    },
    {
      industry: 'Renewable Energy (Solar / Wind)',
      valueChain: 'Land & Grid Connectivity → Module/Turbine Procurement → EPC Construction → PPA Tariff Sign-Off → O&M Generation',
      revenueDrivers: 'Installed MW × CUF (Capacity Utilization Factor ~20–35%) × Hours × PPA Tariff (₹/kWh)',
      costDrivers: 'Upfront Capex (Solar Modules/Cells), Debt Interest Cost (~70% debt!), Transmission Losses & Curtailment',
      keyKPIs: ['LCOE (Levelized Cost of Energy)', 'CUF / Plant Load Factor', 'PPA Receivables Days (DISCOM delays)', 'Debt-Service Coverage'],
      caseTwists: 'Almost zero marginal fuel cost—project IRR depends on upfront capex, interest rate, CUF sunlight/wind, and DISCOM payment discipline.'
    }
  ],

  userFlows: [
    {
      app: 'Amazon',
      sector: 'E-Commerce',
      goal: 'Product Discovery → Evaluation → Frictionless Purchase & Delivery Tracking',
      steps: ['Home / Search Bar & Voice', 'Search Results + Filters / Prime Badge', 'Product Detail Page (Photos, Price, ETA, Reviews)', 'Add to Cart / Buy Now', 'Address & Delivery Slot', 'Payment (UPI/Card/COD/Pay Later)', 'Order Confirmation & Live Tracking'],
      keyDropOffPoints: ['Long/unclear delivery ETA on PDP', 'Forced login or slow OTP at checkout', 'Payment gateway failure / missing preferred COD or EMI'],
      monetizationTouchpoints: ['Sponsored Search Ads', 'Seller Commission + FBA Logistics Fee', 'Amazon Prime Subscription & Co-branded Card']
    },
    {
      app: 'Zomato',
      sector: 'Food Delivery',
      goal: 'Hunger Intent → Fast Dish/Restaurant Pick → Order & Live Rider Tracking',
      steps: ['Location Auto-Detect', 'Home Feed / Search / Cravings', 'Restaurant Menu + Combos + Reviews', 'Cart (Coupons, Zomato Gold, Tip, Cutlery)', 'Checkout Payment', 'Live Kitchen Prep + Rider Map Tracking', 'Post-Order Food & Delivery Rating'],
      keyDropOffPoints: ['Surge/rain fee or high platform charges surprise in Cart', 'Restaurant offline / long 55-min ETA', 'No driver assigned during dinner peak'],
      monetizationTouchpoints: ['Restaurant Commission (18–25%)', 'Promoted Restaurant Ads', 'Platform/Delivery Fees & Zomato Gold Subscription']
    },
    {
      app: 'CRED',
      sector: 'Fintech & Credit',
      goal: 'Credit Card Bill Payment → Reward Dopamine → Cross-Sell Lending & Commerce',
      steps: ['Phone + PAN/SMS Credit Score Check', 'Card Linking & Due Date Sync', 'Bill Amount & UPI/Netbanking Pay', 'Instant Coins + Spin/Jackpot Reward', 'Explore CRED Cash / Mint / Store / Garage', 'EMI / Loan Disbursement or Store Checkout'],
      keyDropOffPoints: ['High credit score (750+) eligibility gate rejection', 'Perceived reward dilution on spin coins', 'KYC friction during CRED Cash loan onboarding'],
      monetizationTouchpoints: ['Personal Loan (CRED Cash) Origination & Interest Spread', 'CRED Store D2C Brand Margins', 'Bill-Pay / UPI Merchant Partnerships']
    },
    {
      app: 'Practo',
      sector: 'Healthtech',
      goal: 'Symptom / Doctor Search → Slot Booking / Teleconsult → Prescription & Follow-up',
      steps: ['Home (In-Clinic, Video Consult, Lab Tests, Meds)', 'Specialty / Symptom Search + City Filter', 'Doctor Profile (Fees, Experience, Patient Stories)', 'Slot Selection + Patient Details', 'Consultation Fee Payment', 'Visit / Video Call + Digital Rx', 'Medicine Order & Lab Cross-Sell'],
      keyDropOffPoints: ['Unavailability of trusted doctors in immediate time slots', 'High consultation fees without upfront insurance clarity', 'Video call lag / doctor no-show'],
      monetizationTouchpoints: ['Doctor SaaS (Practo Ray) Subscriptions', 'Sponsored Doctor/Clinic Listings', 'Commission on Teleconsults, Diagnostics & Surgeries']
    },
    {
      app: 'Notion',
      sector: 'SaaS Productivity',
      goal: 'Workspace Setup → Template Adoption → Collaborative Daily Habit & Team Upgrade',
      steps: ['Signup (Google/Email) + Role Onboarding', 'Blank Page vs Template Gallery', 'Create Docs / Databases / Kanban', 'Invite Teammates & @Mention Comments', 'Hit Free Team Block Limit / AI Upsell', 'Upgrade to Plus / Business / AI Add-on'],
      keyDropOffPoints: ['"Blank-page paralysis" for new non-technical users', 'Steep database learning curve on mobile', 'Slow load on massive workspaces'],
      monetizationTouchpoints: ['Per-Seat SaaS Tiers (Plus/Business/Enterprise)', 'Notion AI Add-on', 'Template Marketplace Ecosystem']
    },
    {
      app: 'Airbnb',
      sector: 'Travel & Hospitality',
      goal: 'Destination Inspiration → Trust Verification → Stay Booking & Host Review',
      steps: ['Search (Where, Dates, Guests) + Category Icons', 'Map + Listing Cards (Total Price Transparency)', 'Listing Detail (Photos, Amenities, Host Superhost Badge, Reviews)', 'Request to Book / Instant Book + Host Message', 'ID Verification & Payment Split', 'Check-in Guide & In-Stay Support', 'Two-Way Mutual Review'],
      keyDropOffPoints: ['Hidden cleaning/service fees inflating checkout total', 'Host rejection or slow reply on Request-to-Book', 'Trust anxiety in unfamiliar neighborhoods'],
      monetizationTouchpoints: ['Guest Service Fee (~10–14%)', 'Host Service Fee (~3% or split-fee)', 'Experiences & Travel Insurance Upsells']
    },
    {
      app: 'Instagram',
      sector: 'Social & Creator Media',
      goal: 'Instant Feed/Reels Dopamine → Social Connection → Creator & Ad Engagement',
      steps: ['App Open directly into Stories + Home Feed', 'Reels Infinite Vertical Swipe', 'Like / Comment / Share via DM', 'Explore & Search Discovery', 'Create Story/Reel with Audio/Filters', 'Shop / Tap Sponsored Ad CTA'],
      keyDropOffPoints: ['Cold-start empty feed for brand-new users without follows', 'Irrelevant Reels ranking or ad overload', 'Creator burnout from low organic reach'],
      monetizationTouchpoints: ['In-Feed, Stories & Reels Performance Ads (Meta Ads)', 'Creator Subscriptions & Badges', 'Click-to-WhatsApp / Shopping Lead Ads']
    },
    {
      app: "BYJU'S",
      sector: 'Ed-Tech',
      goal: 'Free Learning Hook → Parent Counseling Demo → High-Ticket Course Enrollment',
      steps: ['App Install + Grade/Exam Selection', 'Free Animated Video Lessons & Diagnostic Quiz', 'Parent Lead Capture & Counselor Call', 'Home/Video Demo Sales Pitch', 'Scholarship / EMI Financing Plan', 'Paid Tablet/Cohort Access & Mentor Check-ins'],
      keyDropOffPoints: ['Aggressive sales follow-up causing parent distrust', 'Drop in student engagement after Month 1', 'Refund / EMI cancellation friction'],
      monetizationTouchpoints: ['Annual/Multi-Year Paid Course Subscriptions', 'Hybrid Tuition Center Fees', 'Test-Prep (JEE/NEET/UPSC) Cohorts']
    }
  ],

  flashcards: [
    { id: 'cf-1', category: 'RCA', front: 'What are the 3 Data Sanity questions you MUST ask first in any RCA?', back: '1. Sudden drop vs gradual decline?\n2. Isolated to 1 geo/platform/cohort?\n3. Any tracking/logging or metric definition change?', tip: 'Prevents wasting 10 minutes diagnosing a broken analytics tag or city-specific rain!' },
    { id: 'cf-2', category: 'RCA', front: 'In Meesho R3, why did 50% of return funnel dropouts abandon on the Refund screen?', back: 'Tier-2/3 COD shoppers lacked UPI/bank comfort & didn’t value Meesho Balance like cash.', tip: 'Always trace forward vs reverse payment friction!' },
    { id: 'cf-3', category: 'RCA', front: 'In Meesho R2, total returns = 25% (RTO 20%, RVP 5%). Which do you tackle first?', back: 'RTO — it drives 80% of all return volume and double-shipping cost.', tip: 'Use the 80/20 Pareto rule immediately after clarifying numbers.' },
    { id: 'cf-4', category: 'RCA', front: 'Why should you NEVER disable COD across India to eliminate RTO?', back: 'COD is ~60% of Tier-2/3 volume and the primary trust bridge—blanket removal crushes GMV.', tip: 'Use ML risk scoring + OTP confirmation only on risky user/pincode orders.' },
    { id: 'cf-5', category: 'RCA', front: 'What are the 2 overarching buckets after segmenting an RCA drop?', back: 'Internal Factors (Tech, UX, Ops, Pricing, Policy) vs External Factors (Competitors, Weather/Season, Macro, Regulation).', tip: 'Walking the User Journey step-by-step catches internal leaks fast.' },
    { id: 'cf-6', category: 'RCA', front: 'Correlation vs Causation trap in Retention RCA?', back: 'Users who return once may retain higher simply because power shoppers buy more—not because returns cause retention.', tip: 'Always verify causality with a controlled A/B experiment.' },
    { id: 'cf-7', category: 'RCA', front: 'In Google Gemini "Confident but Wrong", what are the 6 pipeline stages where trust breaks?', back: 'Intent → Context → Knowledge/Grounding → Reasoning → Presentation/Calibration → Agentic Action', tip: 'Separating RAG freshness from base model reasoning picks the right fix.' },
    { id: 'cf-8', category: 'GTM', front: 'What are the 3 Execution Phases of every GTM Strategy?', back: '1. Pre-Launch (ICP, Waitlist, Supply Seed, Teasers)\n2. Launch (Channels, Activation, Intro Pricing)\n3. Post-Launch (Retention, Referrals, KPI Iteration)', tip: 'Never jump straight to "run ads"—sequence supply, positioning, and rollout!' },
    { id: 'cf-9', category: 'GTM', front: 'Why is picking a "Beachhead Segment" crucial in GTM?', back: 'Targeting everyone dilutes budget & messaging; dominating 1 acute niche builds PMF and word-of-mouth first.', tip: 'Example: launch in 3 metro cities or college campuses before pan-India.' },
    { id: 'cf-10', category: 'GTM', front: 'In Pharma GTM (like ClearAsthma), who is the primary decision-maker?', back: 'Doctors/Prescribers (pull) + Stockists/Pharmacies (availability)—not the end patient directly.', tip: 'Always map B2B2C gatekeepers in healthcare and enterprise GTM!' },
    { id: 'cf-11', category: 'GTM', front: 'What are the 4Ps of Marketing in a GTM launch?', back: 'Product (MVP scope), Price (tier/freemium), Place (distribution channels), Promotion (inbound + outbound).', tip: 'Use 4Ps silently to verify your GTM plan has zero gaps.' },
    { id: 'cf-12', category: 'GTM', front: 'In a two-sided marketplace GTM (dating, food, rides), which side do you seed FIRST?', back: 'The constrained/supply side (e.g., drivers, restaurants, verified women profiles, local creators) before paid buyer acquisition.', tip: 'Empty shelves kill Day-1 buyer retention permanently.' },
    { id: 'cf-13', category: 'Product Design', front: 'What does CIRCLES stand for in Product Design?', back: 'Comprehend → Identify Customer → Report Needs → Cut/Prioritize → List Solutions → Evaluate Trade-offs → Summarize', tip: 'Spend the most energy on Persona selection and P0 Pain Points—not random feature dumping.' },
    { id: 'cf-14', category: 'Product Design', front: 'Golden rule when asked to design a feature (e.g., Blinkit Group Ordering)?', back: 'Identify 2–3 personas, PICK ONE priority persona for v1, and explicitly justify why others wait for v2.', tip: 'Families/roommates order frequently and informally; corporate office teams can be v2.' },
    { id: 'cf-15', category: 'Product Design', front: 'How should you structure 3 proposed solutions in Product Design?', back: '1. Core Table-Stakes Workflow\n2. Friction-Removing UX Fix\n3. Differentiator / Delighter (e.g., AI or Viral Loop)', tip: 'Always close by evaluating technical/UX trade-offs of your favorite solution.' },
    { id: 'cf-16', category: 'Product Design', front: 'What is the Double Diamond design process?', back: 'Discover (Diverge) → Define P0 Problem (Converge) → Develop Solutions (Diverge) → Deliver MVP (Converge).', tip: 'Great mental check so you don’t converge on a solution before exploring needs.' },
    { id: 'cf-17', category: 'Metrics', front: 'What makes a great North Star Metric?', back: 'Measures core user value delivered + predicts long-term business value + cannot be gamed by vanity clicks.', tip: 'Example: "Trusted Task Success" for Gemini, "Delivered Orders/WAU" for Zomato.' },
    { id: 'cf-18', category: 'Metrics', front: 'Why are Guardrail (Counter) Metrics mandatory in every Metrics answer?', back: 'Optimizing one metric blindly breaks another (e.g., cutting AI errors via hedging ruins usefulness; raising fares hurts conversion).', tip: 'Name 2–3 guardrails on every Product Metrics & Design case!' },
    { id: 'cf-19', category: 'Metrics', front: 'What does AARRR stand for?', back: 'Acquisition → Activation → Retention → Referral → Revenue (Pirate Metrics).', tip: 'Best lifecycle map for consumer apps and marketplaces.' },
    { id: 'cf-20', category: 'Metrics', front: 'What does Google’s HEART framework measure?', back: 'Happiness · Engagement · Adoption · Retention · Task Success (Goals → Signals → Metrics).', tip: 'Ideal for UX quality, AI assistants, and B2B productivity tools.' },
    { id: 'cf-21', category: 'Metrics', front: 'Why does user-level 20/80 A/B testing fail in ride-hailing or delivery pricing?', back: 'Network Interference: Test and Control riders share the same drivers, who favor higher-paying Test rides and starve Control.', tip: 'Use Geo-Cluster splits or Alternate-Day Switchback testing instead!' },
    { id: 'cf-22', category: 'Metrics', front: 'In Google Gemini, what is the "High-Confidence Error Rate" diagnostic metric?', back: '% of materially wrong responses among answers where the model expressed high confidence.', tip: 'Slice it by intent, severity, model routing, and source freshness.' },
    { id: 'cf-23', category: 'Pricing', front: 'What are the 3 fundamental lenses of Pricing?', back: '1. Cost-Plus (Price Floor)\n2. Competitor Benchmarking (Market Anchor)\n3. Value-Based WTP (Price Ceiling)', tip: 'Value-based pricing maximizes margin; cost-plus prevents losing money.' },
    { id: 'cf-24', category: 'Pricing', front: 'What was the hidden business-model twist in the Navi Namma Yatri pricing case?', back: '0% ride commission! Drivers pay a flat daily subscription fee, so higher fares only grow revenue if more drivers come online.', tip: 'Always verify HOW the company captures revenue in the first 60 seconds!' },
    { id: 'cf-25', category: 'Pricing', front: 'Why should Namma Yatri avoid charging higher fares in wealthy neighborhoods or to loyal riders?', back: 'Destroys fair-pricing brand trust and punishes best repeat users; demand/supply multipliers already price busy zones naturally.', tip: 'Transparency + capped surge (≤1.3x) protects retention.' },
    { id: 'cf-26', category: 'Pricing', front: 'How do you price a SaaS/AI subscription (like Perplexity One or YouTube Premium) for India?', back: 'Use Purchasing Power Parity (PPP), Good-Better-Best tiers, mobile-only or annual lock-in plans, and bundle with telcos/UPI.', tip: 'Watch out for LLM API inference cost floors in AI subscriptions!' },
    { id: 'cf-27', category: 'Profitability', front: 'What is the #1 first split in any Profitability case?', back: 'Profit = Revenue − Cost. Never assume costs spiked or sales dropped—ask which side drove the decline!', tip: 'Also ask immediately: Industry-wide or Company-specific?' },
    { id: 'cf-28', category: 'Profitability', front: 'What are the 3 levers of Revenue beyond just Price × Volume?', back: 'Price × Volume × Product/Channel/Geography Mix!', tip: 'Selling more low-margin entry SKUs can shrink total profit even when volume grows.' },
    { id: 'cf-29', category: 'Profitability', front: 'Walk the standard Manufacturing Value Chain for Cost Diagnosis:', back: 'R&D → Procurement (Raw Materials) → Inbound Logistics → Manufacturing (Yield/Scrap) → Outbound → Marketing/Sales → After-Sales', tip: 'Separates Fixed Costs (rent, depreciation) from Variable Costs (copper, fuel, freight).' },
    { id: 'cf-30', category: 'Profitability', front: 'In BCG Fan Company, why couldn’t the mid-range client just raise prices?', back: 'Mid-range fans have elastic demand and zero differentiation vs rivals investing in BLDC motors & IoT.', tip: 'Pair short-term Value Chain cost cuts with medium-term R&D differentiation!' },
    { id: 'cf-31', category: 'Market Entry', front: 'What are the 4 pillars of a Market Entry case?', back: '1. Market Attractiveness (TAM/Growth/Margins)\n2. Competition & Barriers (5 Forces/PESTEL)\n3. Client Capabilities & Breakeven\n4. Mode of Entry (Build/Buy/JV)', tip: 'Answer BOTH "Should we enter?" AND "How should we enter?"' },
    { id: 'cf-32', category: 'Market Entry', front: 'Formula for Breakeven Units in Market Entry?', back: 'Breakeven Units = Fixed Setup Investment ÷ (Price per Unit − Variable Cost per Unit)', tip: 'Compare BEP units to realistic Year-1 SOM market share to prove financial feasibility!' },
    { id: 'cf-33', category: 'Market Entry', front: 'When do you recommend Acquiring (Buy) or JV instead of Organic Build?', back: 'When speed-to-market is urgent, local distribution/regulatory licenses are hard to get, or incumbents lock up shelf space.', tip: 'Check balance sheet capital and post-merger integration risk.' },
    { id: 'cf-34', category: 'Growth', front: 'What are the 4 quadrants of the Ansoff Growth Matrix?', back: '1. Market Penetration (Existing Prod, Existing Mkt)\n2. Market Development (Existing Prod, New Mkt)\n3. Product Dev (New Prod, Existing Mkt)\n4. Diversification (New/New)', tip: 'Always add Inorganic Growth (M&A / Franchising / Partnerships) alongside Organic.' },
    { id: 'cf-35', category: 'Growth', front: 'Why is Market Penetration usually preferred first in Growth cases?', back: 'Highest ROI & lowest risk—growing share of wallet, retention, and frequency among existing customers beats cold acquisition.', tip: 'Check distribution gaps (e.g., Quick Commerce/D2C) before inventing brand-new products.' },
    { id: 'cf-36', category: 'M&A', front: 'What are the 4 pillars of an M&A / Acquisition case?', back: '1. Strategic Fit (Why buy vs build?)\n2. Target Standalone Value\n3. Revenue & Cost Synergies\n4. Deal Price, Culture & Integration Risks', tip: 'Cost synergies (shared distribution/SG&A) are more reliable than optimistic cross-sell synergies!' },
    { id: 'cf-37', category: 'M&A', front: 'In Disney acquiring Star Wars (Lucasfilm), where do the biggest synergies sit?', back: 'Multi-engine IP monetization: Box Office + Disney+ Streaming + Theme Parks + Consumer Merchandising/Toys.', tip: 'Remember to subtract acquisition price & franchise fatigue risk!' },
    { id: 'cf-38', category: 'Unconventional', front: 'What do you do when an interviewer gives an Unconventional case with NO standard framework?', back: 'Breathe → Clarify the exact objective → Write a First-Principles Equation → Split into 3 MECE buckets!', tip: 'Example: Voter Turnout = Eligible × Registered × Motivated × Physically Able to Vote.' },
    { id: 'cf-39', category: 'Prioritization', front: 'What is the difference between Impact vs Effort (2×2) and RICE?', back: 'Impact/Effort is a fast qualitative 2×2 (Quick Wins first); RICE adds Reach & Confidence for quantitative product roadmaps.', tip: 'In live 25-min interviews, Impact × Frequency/Effort tables are cleanest.' },
    { id: 'cf-40', category: 'Prioritization', front: 'What are the 3 tiers of the Kano Model?', back: '1. Must-Have Basics (missing = anger)\n2. Performance (more = happier)\n3. Delighters (unexpected wow)', tip: 'Great for Product Critique—never build Delighters if Basics like checkout/ETA are broken!' },
    { id: 'cf-41', category: 'Frameworks', front: 'What are Porter’s Five Forces?', back: 'Industry Rivalry · New Entrants · Substitutes · Buyer Power · Supplier Power', tip: 'Best for assessing long-term profit pool attractiveness in Market Entry.' },
    { id: 'cf-42', category: 'Frameworks', front: 'What does PESTEL cover?', back: 'Political · Economic · Social · Technological · Environmental · Legal', tip: 'Essential for Pharma, Fintech, Airlines, EVs, and Cross-border GTM.' },
    { id: 'cf-43', category: 'Frameworks', front: 'What are the 4 quadrants of the BCG Matrix?', back: 'Stars (High share/growth) · Cash Cows (High share/low growth) · Question Marks (Low share/high growth) · Dogs (Low/Low)', tip: 'Use Cash Cow profits to fund promising Question Marks into Stars.' },
    { id: 'cf-44', category: 'Frameworks', front: 'What are the McKinsey 7S elements?', back: 'Hard: Strategy, Structure, Systems\nSoft: Shared Values, Style, Staff, Skills', tip: 'Crucial in Post-Merger Integration and Organizational Turnaround cases.' },
    { id: 'cf-45', category: 'Frameworks', front: 'What does MoSCoW stand for?', back: 'Must-Have · Should-Have · Could-Have · Won’t-Have (for this release)', tip: 'Ideal for scoping an MVP in Product Design!' },
    { id: 'cf-46', category: 'Industry', front: 'What is RASK vs CASK in Airlines?', back: 'RASK = Revenue per Available Seat Km | CASK = Cost per Available Seat Km. Profit requires RASK > CASK.', tip: 'ATF Fuel (~35–40%) and Passenger Load Factor (~80%+) drive airline margins.' },
    { id: 'cf-47', category: 'Industry', front: 'What is CASA Ratio and NIM in Banking?', back: 'CASA = Current + Savings Account share (cheap deposits) | NIM = Net Interest Margin (Yield earned − Cost of funds).', tip: 'Higher CASA lowers cost of funds, lifting NIM.' },
    { id: 'cf-48', category: 'Industry', front: 'What is Combined Ratio in Insurance?', back: '(Incurred Claims + Operating Expenses) ÷ Earned Premiums. Below 100% means profitable underwriting!', tip: 'Above 100% means insurer relies solely on investment float to break even.' },
    { id: 'cf-49', category: 'Industry', front: 'What is ARPOB and ALOS in Healthcare Hospitals?', back: 'ARPOB = Average Revenue Per Occupied Bed | ALOS = Average Length of Stay.', tip: 'Shorter ALOS for fixed-package surgeries increases bed turnover and hospital ROI!' },
    { id: 'cf-50', category: 'Industry', front: 'Why is Cement a strictly regional business?', back: 'Low value-to-weight ratio makes trucking >300–400 km uneconomic; freight is ~25% of cost.', tip: 'Check plant proximity, rail sidings, and power/fuel (pet-coke) costs.' },
    { id: 'cf-51', category: 'Industry', front: 'What is Deadhead / Backhaul utilization in Logistics?', back: 'Percentage of return trips carrying paying cargo instead of returning empty.', tip: 'Also critical in ride-hailing pricing for long one-way airport/outskirt trips!' },
    { id: 'cf-52', category: 'Industry', front: 'What is RevPAR in Hotels & Hospitality?', back: 'Revenue Per Available Room = Occupancy Rate × Average Daily Rate (ADR).', tip: 'Unbooked rooms perish nightly—balance ADR vs Occupancy & OTA fees.' },
    { id: 'cf-53', category: 'Industry', front: 'What is the #1 hidden cost in AI SaaS vs traditional SaaS?', back: 'Variable LLM/GPU inference cost per query, lowering gross margins from ~85% toward 60–75% if uncached.', tip: 'Route simple queries to lighter models and cache frequent responses!' },
    { id: 'cf-54', category: 'Scripts', front: 'Exact words to buy thinking time after Clarifying Questions?', back: '"Thank you, that clarifies the scope. May I take 20 seconds to organize my thoughts into a structured framework?"', tip: 'Interviewers LOVE a calm 20-second pause—it shows executive poise.' },
    { id: 'cf-55', category: 'Scripts', front: 'Exact words to get interviewer buy-in on your MECE tree?', back: '"I\'ll look at this across [3 buckets], starting with [Bucket A] because [reason]. Does this structure make sense to proceed?"', tip: 'Turns the interview into a collaborative conversation.' },
    { id: 'cf-56', category: 'Scripts', front: 'How do you deliver a Pyramid Principle Synthesis in 30 seconds?', back: '1. Recommendation upfront\n2. 2–3 supporting numbers/insights\n3. Top risk + mitigation/metric.', tip: 'Never walk chronologically through "First I asked X, then Y..."' },
    { id: 'cf-57', category: 'Scripts', front: 'How do you react when an interviewer challenges your assumption or nudges you?', back: '"That’s a great point—incorporating that shifts priority toward [X]. Let me adjust my analysis accordingly."', tip: 'Never get defensive; an interviewer nudge is a helpful course-correction.' },
    { id: 'cf-58', category: 'Product Critique', front: '3 things every strong Product Critique covers?', back: '1. Core Value Prop & What Works Well\n2. User Journey Friction & Edge Cases\n3. Prioritized Fix + Strategic Trade-off', tip: 'Never critique only colors/fonts—critique trust, speed, discovery, and unit economics.' },
    { id: 'cf-59', category: 'Product Improvement', front: 'In Rural Bharat products (Meesho), what are the top 3 UX design principles?', back: '1. High Trust Signals (Verified badges, video reviews, upfront COD)\n2. Vernacular / Voice cues\n3. Lightweight APK & low friction.', tip: 'Rural shoppers miss the offline shopkeeper’s reassurance—build digital reassurance!' },
    { id: 'cf-60', category: 'Unit Economics', front: 'LTV : CAC & Payback benchmarks for healthy startups?', back: 'LTV : CAC ≥ 3 : 1 and CAC Payback ≤ 12 months (faster in low-margin consumer commerce).', tip: 'Growing CAC without matching retention uplift creates unprofitable scale.' }
  ],

  drillQuestions: [
    { q: 'Swiggy’s food delivery orders dropped 15% in Delhi over 3 weeks. What is your VERY FIRST step?', options: ['Launch a 50% discount coupon in Delhi', 'Clarify scope & check data sanity (Instamart vs Food, placed vs cancelled, sudden vs gradual)', 'Redesign the Swiggy checkout UI', 'Hire 500 more riders'], answer: 1, exp: 'Always clarify metric scope and run data/segmentation sanity checks before diagnosing or proposing fixes.' },
    { q: 'Namma Yatri takes 0% commission and charges drivers a flat daily fee. Higher rider fares increase Namma Yatri revenue ONLY IF:', options: ['Riders pay by credit card', 'Higher fares bring more drivers online for more subscription days', 'We raise prices during empty off-peak hours', 'We charge loyal riders 2x'], answer: 1, exp: 'Under a flat daily driver subscription, extra fare goes 100% to the driver—platform revenue rises only via active driver-days.' },
    { q: 'Why does a 20/80 user-level A/B test fail in ride-hailing pricing?', options: ['Shared drivers cherry-pick higher-paying Test rides, biasing Control', 'Riders cannot see prices upfront', 'Apps cannot randomize users', 'Drivers prefer lower fares'], answer: 0, exp: 'Network interference corrupts user splits when both cohorts share one driver pool. Use Geo-Cluster or Switchback tests!' },
    { q: 'In Meesho R3, 80% of non-returners never completed a return; 30% dropped in funnel, and 50% of those dropped on UPI/Bank details. What % of ALL non-returners is that?', options: ['30%', '12%', '5%', '24%'], answer: 1, exp: '80% × 30% × 50% = 12% of the entire cohort—the single largest concentrated drop-off!' },
    { q: 'In Meesho R2, Total Returns = 25% (RTO 20%, RVP 5%). With a Cost Reduction goal, where do you focus first?', options: ['RVP QC failures', 'RTO (drives 80% of all returns)', 'App store icons', 'Seller onboarding colors'], answer: 1, exp: 'Pareto 80/20: RTO is 4x larger than RVP (20% vs 5%) and incurs wasted 2-way shipping.' },
    { q: 'What is the biggest trap when optimizing Google Gemini to be "less wrong"?', options: ['Using citations', 'Excessive hedging/refusal makes the AI unhelpful even if error rate drops', 'Checking retrieval freshness', 'Segmenting by severity'], answer: 1, exp: 'Confidence vs Usefulness trade-off: always pair error rate with Trusted Task Success & refusal rate guardrails!' },
    { q: 'A Consulting client says "Our profits fell 20% this year." What should you check FIRST?', options: ['Cut employee salaries immediately', 'Split Profit = Revenue − Cost and check if it is Industry-wide or Company-specific', 'Run a brand marketing campaign', 'Build an iOS app'], answer: 1, exp: 'Never assume costs vs revenue before isolating which side moved and whether rivals see the same trend.' },
    { q: 'Which framework best fits "Should Spotify launch video streaming in India, UK, and US?"', options: ['Go-To-Market (ICP, Positioning, 4Ps, Pre/Launch/Post phases)', 'Profitability Value Chain', 'Fishbone RCA', 'Porter’s M&A Synergy'], answer: 0, exp: 'New product/vertical rollout is a classic GTM case.' },
    { q: 'When designing "Group Ordering at Blinkit", what should you do right after listing 3 personas (Families, Roommates, Offices)?', options: ['Build features for all 3 equally in v1', 'Pick ONE priority persona for v1 (e.g., Families/Roommates) with clear rationale', 'Skip pain points and draw UI screens', 'Only talk about backend databases'], answer: 1, exp: 'Trying to serve everyone in v1 creates bloated design. Pick one high-frequency beachhead persona first.' },
    { q: 'Which is the BEST North Star Metric for WhatsApp Communities?', options: ['Total app downloads', 'Weekly Active Communities with ≥3 meaningful member interactions', 'Number of push notifications sent', 'Total emojis tapped'], answer: 1, exp: 'A North Star must reflect genuine ongoing value exchange, not one-time clicks or spam.' },
    { q: 'Even though unit sales grew +10% and prices stayed flat, a manufacturer’s gross profit fell. Why?', options: ['Product Mix shifted toward lower-margin economy SKUs', 'Gravity increased', 'More customers paid on time', 'Marketing stopped'], answer: 0, exp: 'Revenue = Volume × Price × Mix! A shift toward lower-margin SKUs lowers overall profit.' },
    { q: 'In Market Entry, Fixed Capex = ₹10 Cr, Price = ₹1,500, Variable Cost = ₹1,000. How many units to break even?', options: ['1,00,000 units', '2,00,000 units', '50,000 units', '5,00,000 units'], answer: 1, exp: 'Contribution margin = ₹1,500 − ₹1,000 = ₹500. BEP = ₹10,00,00,000 ÷ ₹500 = 2,00,000 units.' },
    { q: 'Which prioritization method explicitly divides value by person-months of engineering effort?', options: ['SWOT', 'RICE Score', 'PESTEL', 'BCG Matrix'], answer: 1, exp: 'RICE = (Reach × Impact × Confidence) ÷ Effort.' },
    { q: 'In Indian Pharma GTM (like ClearAsthma), who must your launch convince FIRST?', options: ['Doctors/Prescribers & Pharmacy Stockists', 'Movie theaters', 'Airports', 'College hostels'], answer: 0, exp: 'Prescription medicines rely on doctor detailing/trust plus pharmacy stock availability.' },
    { q: 'What is "Combined Ratio" in Insurance?', options: ['(Claims + Expenses) ÷ Premiums — under 100% means underwriting profit', 'Total agents ÷ branches', 'Revenue × Churn', 'Assets ÷ Debt'], answer: 0, exp: 'A combined ratio below 100% indicates core insurance operations are profitable before investment income.' },
    { q: 'In Airlines, which single variable typically accounts for ~35–40% of operating cost?', options: ['In-flight coffee', 'Aviation Turbine Fuel (ATF)', 'Boarding pass paper', 'Baggage tags'], answer: 1, exp: 'Fuel (ATF) and aircraft leases dominate airline CASK.' },
    { q: 'Why is Cement almost always analyzed regionally (within 300–400 km of the plant)?', options: ['Cement expires in 2 hours', 'Freight is ~25% of cost, making long-distance trucking unprofitable', 'Cement cannot travel on highways', 'Only 1 city uses cement'], answer: 1, exp: 'Low value-to-weight ratio makes logistics lead distance the make-or-break margin lever.' },
    { q: 'What is the #1 guardrail when launching an aggressive COD-to-Prepaid discount or COD OTP check?', options: ['Checkout Conversion / Gross Orders (don’t block genuine buyers)', 'Font size on footer', 'Employee lunch budget', 'Server color'], answer: 0, exp: 'Reducing RTO must never choke off genuine Tier-2/3 buyer activation.' },
    { q: 'In an M&A case (e.g., Disney buying Lucasfilm), why are cost synergies valued more conservatively than revenue synergies?', options: ['Cost cuts (shared overhead) are controllable, while cross-sell revenue synergies often disappoint', 'Cost synergies are illegal', 'Revenue synergies never exist', 'Cost synergies take 50 years'], answer: 0, exp: 'Eliminating duplicate SG&A/supply chain is direct; predicting customer cross-sell carries execution risk.' },
    { q: 'An interviewer asks an Unconventional puzzle: "How would you reduce road accidents in India?" What is your best opening move?', options: ['Panic because there is no CIRCLES template', 'Write a First-Principles equation (Accidents = Trips × Risk/Trip × Severity) across Driver, Vehicle, Road, Enforcement', 'Recommend banning all cars', 'Talk only about Tesla'], answer: 1, exp: 'First Principles + MECE buckets instantly turns any weird prompt into a clean consulting case!' },
    { q: 'Which pricing lens sets the MINIMUM sustainable price floor?', options: ['Competitor Pricing', 'Cost-Plus (Unit Cost)', 'Value-Based WTP', 'Psychological .99'], answer: 1, exp: 'Unit variable + allocated fixed cost sets the floor; Competitor sets anchor; Customer Value sets ceiling.' },
    { q: 'In E-Cell IITG’s Zomato User Flow, what is a top Cart drop-off trigger?', options: ['Unexpected surge/platform fees inflating the final bill vs menu price', 'Too many food photos', 'Instant UPI refund', 'Free delivery'], answer: 0, exp: 'Sticker shock at checkout between menu price and total payable causes sharp cart abandonment.' },
    { q: 'In Consulting, what is the Pyramid Principle for your final 30-second pitch?', options: ['Start with your final recommendation first, followed by 3 key supporting points + risks', 'Read your notes chronologically from Minute 1 to Minute 25', 'End with a question asking what the answer was', 'List 15 unranked ideas'], answer: 0, exp: 'Answer-first communication mirrors how McKinsey/BCG partners brief CEOs.' },
    { q: 'A D2C SaaS has ARPU = ₹1,000/mo, Gross Margin = 80%, Monthly Churn = 5%. What is LTV?', options: ['₹8,000', '₹16,000', '₹20,000', '₹4,000'], answer: 1, exp: 'LTV = (1,000 × 0.80) ÷ 0.05 = 800 ÷ 0.05 = ₹16,000.' },
    { q: 'Which metric measures whether existing SaaS customers expand spending faster than they churn?', options: ['CAC', 'NRR (Net Revenue Retention)', 'CTR', 'DAU/MAU'], answer: 1, exp: 'NRR > 100% indicates net expansion from existing accounts.' },
    { q: 'When evaluating a Hospital’s revenue per bed, what KPI matters most?', options: ['ARPOB (Avg Revenue Per Occupied Bed) & Occupancy %', 'Number of parking cones', 'Website bounce rate', 'Wi-Fi password length'], answer: 0, exp: 'Hospital revenue = Beds × Occupancy % × ARPOB.' },
    { q: 'If rural Meesho buyers fear product quality mismatch, which solution has the highest Trust ROI?', options: ['Verified Seller Badges + Vernacular Buyer Video/Photo Reviews', 'Adding dark mode', 'Hiding return policies', 'Requiring a credit card'], answer: 0, exp: 'Social proof from peers in their own language plus verified quality directly bridges the offline trust gap.' },
    { q: 'What is "Deadhead" in Logistics & Mobility cases?', options: ['Empty return distance driven without paying cargo/passengers', 'Broken headlights', 'Warehouse roof', 'Driver uniform'], answer: 0, exp: 'Pricing or routing must compensate for empty return legs.' },
    { q: 'In Banking, why is a high CASA Ratio (Current + Savings Accounts) a huge competitive moat?', options: ['CASA deposits pay low/zero interest, giving the bank a low Cost of Funds and higher NIM', 'It bans ATMs', 'It eliminates loans', 'It removes branches'], answer: 0, exp: 'Cheap sticky CASA deposits expand Net Interest Margin (NIM).' },
    { q: 'If orders dropped ONLY on Android version 5.4 released yesterday, what is the most likely RCA bucket?', options: ['Technical / App Release Regression (checkout crash or UI bug)', 'Macroeconomic recession', 'Competitor TV campaign', 'Monsoon rain'], answer: 0, exp: 'A sudden drop isolated to a single OS + single release version screams regression bug!' },
    { q: 'In Kano Model prioritization, what happens if you ship "Delighters" while "Basic" reliability is broken?', options: ['Users remain frustrated because Basic expectations are unmet', 'Users double their spend', 'Churn drops to 0%', 'Costs vanish'], answer: 0, exp: 'Fix Basic table-stakes (speed, checkout, quality) before chasing shiny delighters.' },
    { q: 'Which framework maps Acquisition, Activation, Retention, Referral, Revenue?', options: ['HEART', 'AARRR (Pirate Metrics)', 'PESTEL', 'McKinsey 7S'], answer: 1, exp: 'AARRR tracks the full user lifecycle funnel.' },
    { q: 'In Ansoff’s Matrix, launching an existing tea brand into a brand-new country is:', options: ['Market Penetration', 'Market Development', 'Product Development', 'Diversification'], answer: 1, exp: 'Existing Product + New Market = Market Development.' },
    { q: 'In BCG Matrix, a business unit with High Market Share in a Slow-Growing Market is a:', options: ['Star', 'Cash Cow', 'Question Mark', 'Dog'], answer: 1, exp: 'Cash Cows generate excess cash to fund Question Marks and Stars.' },
    { q: 'Why must you separate "Orders Placed" from "Orders Delivered" when clarifying an e-commerce drop?', options: ['Placed drops point to discovery/checkout/pricing, while Delivered drops point to rider/logistics/RTO failures', 'They are always identical', 'Delivery never fails', 'It saves math'], answer: 0, exp: 'Splits demand/checkout issues cleanly from supply/fulfillment issues!' },
    { q: 'When an interviewer asks "How would you price YouTube Premium in India vs US?", what concept applies?', options: ['Purchasing Power Parity (PPP) + localized mobile/student/family tiers', 'Exact USD exchange conversion only', 'Cost of printing DVDs', 'Eliminating free YouTube'], answer: 0, exp: 'Digital subscriptions have near-zero marginal cost, so PPP pricing unlocks huge India volume.' },
    { q: 'What is the #1 mistake 0-experience candidates make in Product Design interviews?', options: ['Spending 15 minutes clarifying and picking 1 persona', 'Listing 8 random features without defining a persona or P0 pain point', 'Naming a guardrail metric', 'Evaluating trade-offs'], answer: 1, exp: 'Feature-dumping without Persona → Pain → Priority signals zero product judgment.' },
    { q: 'In a Quick Commerce (Blinkit/Zepto) Dark Store Profitability case, what is the key local lever?', options: ['Orders/day per store × AOV vs Dark store rent, wastage, and rider batching', 'Global oil prices only', 'Airline load factor', 'Cement lead distance'], answer: 0, exp: 'Dark store density, basket size (AOV), perishable shrinkage, and rider trips/hr drive quick-commerce P&L.' },
    { q: 'What is a "Counter-Metric" for increasing push notification frequency to lift DAU?', options: ['Notification Opt-Out / App Uninstall Rate', 'Total emails sent', 'Office rent', 'Logo brightness'], answer: 0, exp: 'Spamming pushes can boost Day-1 opens while spiking long-term uninstalls.' },
    { q: 'In Consulting, what does "Should we Build, Buy, or Partner?" belong to?', options: ['Market Entry Mode Decision', 'RCA Data Sanity', 'HEART UX Metrics', 'Kano Basics'], answer: 0, exp: 'Every Market Entry strategy must pick the optimal entry mode.' },
    { q: 'If an interviewer interrupts your structure to say "Skip marketing, let’s focus on ops", what should you do?', options: ['Acknowledge smoothly and pivot immediately to the ops branch', 'Argue that your framework requires marketing first', 'Freeze silently', 'End the interview'], answer: 0, exp: 'Interviewer nudges are gifts guiding you toward the core bottleneck of the case!' },
    { q: 'What is the fastest way to check if a Market Entry investment is financially attractive?', options: ['Calculate Contribution Margin per unit and Breakeven Volume vs realistic SOM', 'Guess a random IRR', 'Count competitors’ Twitter followers', 'Assume 100% market share in Year 1'], answer: 0, exp: 'Connecting unit economics to realistic obtainable share proves commercial rigor.' },
    { q: 'In Google’s HEART framework, what does the "T" stand for?', options: ['Traffic', 'Task Success', 'Time on Site', 'Tickets'], answer: 1, exp: 'Happiness, Engagement, Adoption, Retention, Task Success.' },
    { q: 'Which 2 dimensions are in the fastest live-interview Prioritization 2×2?', options: ['Impact vs Effort', 'Revenue vs Alphabet', 'Font vs Color', 'Age vs Height'], answer: 0, exp: 'Impact vs Effort lets you immediately highlight Quick Wins (High Impact, Low Effort).' },
    { q: 'Why do Consulting & PM interviewers love a 20-second silent pause before you speak your tree?', options: ['It proves structured, deliberate thinking instead of panicked rambling', 'It wastes time', 'It tests your typing speed', 'It avoids clarifying questions'], answer: 0, exp: 'Asking "May I take 20 seconds to structure my approach?" signals poise and seniority.' }
  ]
};
