window.STUDY_DATA = {
  exam: {
    name: "NISM-Series-XV: Research Analyst Certification Examination",
    date: "2026-06-27",
    workbookVersion: "February 2026",
    format: "80 one-mark MCQs plus 5 caselets with 4 one-mark questions each",
    duration: "2 hours",
    passMark: 60,
    negativeMarking: -0.25,
    officialLinks: [
      "https://www.nism.ac.in/research-analyst-certification-examination/",
      "https://www.nism.ac.in/curriculum-research-analyst-certification/",
      "https://www.nism.ac.in/test-objectives-research-analyst-w-e-f-january-20-2026/"
    ]
  },
  chapters: [
    {
      id: 1,
      title: "Introduction to Research Analyst Profession",
      weight: 1,
      pages: "15-21",
      priority: "light",
      focus: ["Role of research analysts", "Responsibilities", "Client and company interaction", "Core analyst qualities"],
      mustKnow: [
        "A research analyst collects information, analyses it, and converts it into an investment view.",
        "Sell-side research is usually published with recommendations; buy-side research supports internal portfolio decisions.",
        "Independence, neutrality, confidentiality, numerical ability, and written communication are recurring exam themes."
      ],
      traps: ["Do not reduce the role to only data collection or only data analysis.", "Company interactions must not seek or use unpublished price-sensitive information."],
      tasks: ["Read once only.", "Make a one-page RA role and ethics note.", "Attempt 3 quick questions."]
    },
    {
      id: 2,
      title: "Introduction to Securities Market",
      weight: 2,
      pages: "22-54",
      priority: "light",
      focus: ["Securities and market structure", "Products", "Participants", "Transaction types", "Demat and settlement"],
      mustKnow: [
        "Primary markets issue securities; secondary markets provide trading after issue.",
        "Equity, bonds, warrants, indices, mutual fund units, ETFs, structured products, commodities, futures, options, swaps, and forwards have distinct rights and obligations.",
        "Know the difference between hedging, speculation, arbitrage, pledging, cash, spot, tom, and forward transactions."
      ],
      traps: ["An option gives a right, not an obligation.", "Futures create obligations for both parties.", "ETF units trade like exchange-listed securities."],
      tasks: ["Create a product comparison table.", "Revise futures vs options.", "Quiz until transaction terms are automatic."]
    },
    {
      id: 3,
      title: "Terminology in Equity and Debt Markets",
      weight: 2,
      pages: "55-77",
      priority: "light",
      focus: ["Equity valuation terms", "Debt terminology", "Yield measures", "Bond types", "Duration"],
      mustKnow: [
        "Equity terms include face value, book value, market value, intrinsic value, market cap, enterprise value, EPS, DPS, P/E, P/S, and P/B.",
        "Debt terms include coupon, maturity, market price, redemption, holding period return, current yield, YTM, realised yield, and duration.",
        "Duration rises with higher maturity and lower coupon, increasing interest-rate sensitivity."
      ],
      traps: ["Current yield ignores capital gain or loss to maturity.", "Enterprise value is not the same as market capitalization.", "Bond price and market interest rates move inversely."],
      formulas: ["Market cap = Share price x Number of shares", "EV = Equity value + Debt - Cash", "EPS = PAT / Number of equity shares"],
      tasks: ["Memorize every term in 3.1 and 3.2.", "Do 10 yield and ratio flashcards.", "Revise bond price-rate relationship."]
    },
    {
      id: 4,
      title: "Fundamentals of Research",
      weight: 5,
      pages: "78-89",
      priority: "core",
      focus: ["Investing vs speculation", "Mosaic analysis", "Technical, fundamental, quantitative, and behavioural approaches", "Commodity research"],
      mustKnow: [
        "Investment is a disciplined wealth-creation activity based on risk, return, time horizon, and valuation.",
        "Mosaic analysis uses public information pieces to form a view; insider information is prohibited.",
        "Fundamental analysis studies economy, industry, company, financials, and valuation; technical analysis studies price and volume behaviour."
      ],
      traps: ["Speculation is not automatically illegal, but it is different from disciplined investing.", "Public information analysis is valid; non-public price-sensitive information is not."],
      tasks: ["Make a research approach comparison chart.", "Revise commodities research drivers.", "Attempt mixed research-method questions."]
    },
    {
      id: 5,
      title: "Economic Analysis",
      weight: 5,
      pages: "90-104",
      priority: "core",
      focus: ["Micro and macro basics", "National income", "Inflation and interest rates", "FDI/FPI", "Fiscal and monetary policy", "Trade and currency"],
      mustKnow: [
        "Fiscal policy is driven by government spending and taxation; monetary policy is driven by the central bank through money supply and rates.",
        "Inflation, interest rates, unemployment, exchange rates, trade deficit, savings, investment, FDI, and FPI affect company and market analysis.",
        "Classify trends as secular, cyclical, or seasonal before linking them to forecasts."
      ],
      traps: ["FDI is long-term direct investment; FPI is portfolio flow.", "A seasonal pattern is not the same as an economic cycle."],
      tasks: ["Build a macro indicator sheet.", "Map each variable to equity impact.", "Revise sources such as RBI, government data, IMF, World Bank."]
    },
    {
      id: 6,
      title: "Industry Analysis",
      weight: 8,
      pages: "105-129",
      priority: "high",
      focus: ["Industry definition", "Cyclicality", "Market sizing", "Value migration", "Porter, PESTLE, BCG, SCP", "KPIs and sources"],
      mustKnow: [
        "Industry analysis connects macro conditions to sector-level opportunity, risk, and competitive structure.",
        "Porter's five forces test rivalry, supplier power, buyer power, threat of substitutes, and threat of new entrants.",
        "BCG classifies businesses by market growth and relative market share: stars, cash cows, question marks, and dogs.",
        "Industry KPIs must match the business model, such as ARPU for telecom, occupancy for hotels, and load factor for airlines."
      ],
      traps: ["A high-growth industry is not automatically attractive if competition destroys returns.", "Define the industry boundary before market sizing."],
      tasks: ["Memorize Porter and BCG.", "Make KPI examples for 8 industries.", "Attempt one caselet on industry attractiveness."]
    },
    {
      id: 7,
      title: "Company Analysis - Business and Governance",
      weight: 6,
      pages: "130-144",
      priority: "core",
      focus: ["Business model", "Pricing power", "Competitive advantage", "SWOT", "Management quality", "Governance", "ESG", "Sources"],
      mustKnow: [
        "Qualitative company analysis tests whether the business can sustain growth, margins, and capital allocation.",
        "Pricing power, brand, scale, cost advantage, switching cost, distribution, and regulation can support a moat.",
        "Governance review covers board quality, promoter holding, related-party transactions, disclosures, and minority shareholder treatment."
      ],
      traps: ["High promoter holding is not automatically good; governance quality and alignment matter.", "SWOT starts with a clear business and industry context."],
      tasks: ["Create a governance red-flag list.", "Revise business model and moat examples.", "Attempt management-quality questions."]
    },
    {
      id: 8,
      title: "Company Analysis - Financial Analysis",
      weight: 12,
      pages: "145-187",
      priority: "major",
      focus: ["Accounting basics", "Balance sheet", "P&L", "Cash flow", "Notes", "Audit report", "Ratios", "DuPont", "Forecasting"],
      mustKnow: [
        "Balance sheet is a point-in-time statement; P&L and cash flow cover a period.",
        "Cash flow is classified into operating, investing, and financing activities.",
        "Ratio analysis supports descriptive, comparative, and predictive analysis.",
        "Profitability, return, leverage, liquidity, and efficiency ratios must be interpreted together, not in isolation.",
        "DuPont decomposes ROE into margin, asset turnover, and leverage drivers."
      ],
      traps: ["PAT can rise while cash flow quality deteriorates.", "High leverage can lift ROE but increase risk.", "Notes and audit qualifications can change the interpretation of numbers."],
      formulas: ["EBITDA margin = EBITDA / Net sales", "PAT margin = PAT / Net sales", "ROE = PAT / Net worth", "ROCE = EBIT / Capital employed", "Current ratio = Current assets / Current liabilities"],
      tasks: ["Memorize all ratio formulas.", "Solve at least two financial statement caselets.", "Revise accounting notes and audit report signals."]
    },
    {
      id: 9,
      title: "Corporate Actions",
      weight: 5,
      pages: "188-198",
      priority: "core",
      focus: ["Dividends", "Rights", "Bonus", "Split", "Consolidation", "M&A", "Demerger", "Buyback", "Delisting", "Share swap"],
      mustKnow: [
        "Corporate actions change ownership, price, capital structure, or investor cash flow.",
        "Bonus issues increase shares without cash inflow; stock splits reduce face value per share and increase share count.",
        "Rights issues give existing shareholders a chance to subscribe, usually at a specified ratio and price.",
        "Buybacks reduce outstanding shares and may improve per-share metrics if executed at a reasonable price."
      ],
      traps: ["Bonus and split both increase share count but have different accounting mechanics.", "Dividend reduces cash and may lead to price adjustment."],
      tasks: ["Compare bonus, split, rights, and buyback.", "Practice ex-price style questions.", "Revise M&A, demerger, delisting terminology."]
    },
    {
      id: 10,
      title: "Valuation Principles",
      weight: 12,
      pages: "199-218",
      priority: "major",
      focus: ["Price vs value", "DCF", "DDM", "FCFE and FCFF", "Terminal value", "CAPM", "WACC", "Relative valuation", "SOTP"],
      mustKnow: [
        "DCF values expected cash flows by discounting them at a rate that reflects risk.",
        "DDM suits mature companies with stable dividends; FCFE suits equity cash flows; FCFF values the whole firm.",
        "FCFE is discounted at cost of equity; FCFF is discounted at WACC.",
        "Relative valuation uses comparable ratios such as P/E, PEG, EV/EBITDA, EV/Sales, P/B, and EV/Capital Employed.",
        "Terminal value and discount rate assumptions usually drive most of a DCF output."
      ],
      traps: ["Growth rate in Gordon growth must be lower than cost of equity.", "PE can mislead when leverage or one-off earnings distort EPS.", "EV, not market cap alone, reflects firm value for all capital providers."],
      formulas: ["P0 = D1 / (Ke - g)", "Ke = Rf + Beta x (Rm - Rf)", "WACC = Ke x We + Kd x (1 - tax) x Wd", "PEG = P/E / Growth rate"],
      tasks: ["Memorize DDM, CAPM, WACC, and relative multiples.", "Do valuation numericals daily.", "Write one DCF assumption checklist."]
    },
    {
      id: 11,
      title: "Fundamental Analysis of Commodities",
      weight: 5,
      pages: "219-228",
      priority: "core",
      focus: ["Supply demand", "Major producers and consumers", "Currency and dollar index", "Inventory and production data", "Weather", "Policy", "Hedging"],
      mustKnow: [
        "Commodity prices are driven mainly by supply-demand balance, inventories, currency, global linkages, weather, and policy.",
        "Dollar strength often pressures dollar-denominated commodities, all else equal.",
        "Hedging uses derivatives to offset price risk; hedge ratio links exposure to futures position."
      ],
      traps: ["Commodity analysis is not only chart-based.", "Domestic prices can diverge from global prices because of currency, taxes, duties, and local supply conditions."],
      tasks: ["Make a factor checklist for agri, metals, and energy.", "Revise hedge ratio.", "Attempt commodity-driver questions."]
    },
    {
      id: 12,
      title: "Fundamentals of Risk and Return",
      weight: 7,
      pages: "229-247",
      priority: "high",
      focus: ["Return calculations", "Risk types", "Standard deviation", "Beta", "Sensitivity", "Margin of safety", "Risk-adjusted return", "Biases", "Liquidity"],
      mustKnow: [
        "Return can be simple, annualized, or compounded depending on holding period and reinvestment assumptions.",
        "Risk is uncertainty in outcome; beta measures sensitivity to market movements.",
        "Margin of safety is the gap between intrinsic value and purchase price.",
        "Liquidity of equity shares can be assessed through volume, bid-ask spread, impact cost, and trading frequency."
      ],
      traps: ["Higher return without risk context is incomplete.", "Beta measures market risk, not business quality.", "Compounded return differs from average simple return."],
      formulas: ["CAGR = (Ending value / Beginning value)^(1 / years) - 1", "Sharpe ratio = (Portfolio return - Risk-free rate) / Standard deviation", "Expected return = Sum(probability x outcome)"],
      tasks: ["Practice return numericals.", "Revise beta and sensitivity.", "List behavioural biases with one example each."]
    },
    {
      id: 13,
      title: "Qualities of a Good Research Report",
      weight: 5,
      pages: "248-255",
      priority: "core",
      focus: ["Report quality", "Checklist approach", "Recommendation discipline", "Risks and disclosures"],
      mustKnow: [
        "A good research report presents an investment idea with clear thesis, facts, assumptions, valuation, risks, and disclosures.",
        "Annual reports and official filings are stronger fact sources than media commentary or informal views.",
        "Recommendation language must be consistent and supported by analysis."
      ],
      traps: ["A report is not just a target price.", "Disclosures and conflicts are part of report quality, not optional add-ons."],
      tasks: ["Memorize report checklist headings.", "Revise rating terms.", "Attempt 5 report-quality questions."]
    },
    {
      id: 14,
      title: "Legal and Regulatory Environment",
      weight: 10,
      pages: "256-295",
      priority: "major",
      focus: ["Regulators", "SCRA", "SEBI Act", "Insider trading", "PFUTP", "RA Regulations", "IBC", "Code of conduct", "Disclosures", "GSM/ASM", "Investor charter", "Cybersecurity"],
      mustKnow: [
        "SEBI regulates securities markets and intermediaries; RBI, MCA, IRDAI, PFRDA, and IBBI have separate financial-market roles.",
        "Insider trading regulations revolve around unpublished price-sensitive information and trading or communication restrictions.",
        "Research Analyst Regulations cover registration, qualification, certification, conduct, disclosures, and conflicts.",
        "GSM and ASM are exchange surveillance mechanisms for risk controls.",
        "Research reports and recommendations must include relevant disclosures and manage conflicts of interest."
      ],
      traps: ["Disclosure does not cure every conflict.", "UPSI cannot be used for trading or passed to others.", "Know which regulator handles which market function."],
      tasks: ["Read this chapter twice.", "Make a regulation-to-purpose map.", "Quiz until regulator and disclosure questions are above 80%."]
    },
    {
      id: 15,
      title: "Technical Analysis",
      weight: 15,
      pages: "296-328",
      priority: "major",
      focus: ["Chart types", "Dow Theory", "Primary, secondary, and tertiary trends", "Candlestick reversals", "Triangles, flags, pennants", "Support and resistance", "Trendlines", "MA, MACD, RSI, ADX, RSC, OBV"],
      mustKnow: [
        "Technical analysis studies price and volume patterns to infer demand, supply, trend, and momentum.",
        "Dow Theory includes market discounting information, trend classifications, confirmation, volume support, and trend persistence until reversal.",
        "Reversal patterns include hammer, hanging man, engulfing patterns, dark cloud cover, piercing pattern, morning star, and evening star.",
        "Consolidation patterns include symmetrical, ascending, and descending triangles, flags, and pennants.",
        "RSI measures momentum; ADX measures trend strength; MACD follows momentum via moving averages; OBV links volume to price direction."
      ],
      traps: ["ADX does not show trend direction.", "Overbought RSI is a warning, not an automatic sell signal.", "Support can become resistance after a breakdown."],
      formulas: ["MACD = 12-period EMA - 26-period EMA", "RSI = 100 - (100 / (1 + RS))", "OBV adds volume on up closes and subtracts volume on down closes"],
      tasks: ["Draw every candlestick and triangle pattern.", "Memorize indicator purpose, not just formula.", "Do daily chart-recognition quizzes."]
    }
  ],
  roadmap: [
    { id: "d1", date: "Jun 17", focus: "Technical analysis foundation", chapters: [15, 3], actions: ["Charts, Dow Theory, trend types", "Equity and debt terminology", "20-question baseline quiz"] },
    { id: "d2", date: "Jun 18", focus: "Financial statement analysis", chapters: [8], actions: ["Statements, audit notes, ratios", "DuPont and forecasting", "Two financial caselets"] },
    { id: "d3", date: "Jun 19", focus: "Valuation principles", chapters: [10], actions: ["DCF, DDM, FCFE, FCFF", "CAPM, WACC, multiples", "20 valuation questions"] },
    { id: "d4", date: "Jun 20", focus: "Regulations and conduct", chapters: [14], actions: ["SEBI, SCRA, RA Regulations", "UPSI, PFUTP, conflicts", "Disclosure drill"] },
    { id: "d5", date: "Jun 21", focus: "Industry plus company analysis", chapters: [6, 7], actions: ["Porter, PESTLE, BCG, SCP", "Business model and governance", "One industry caselet"] },
    { id: "d6", date: "Jun 22", focus: "Risk, return, and economy", chapters: [12, 5], actions: ["CAGR, beta, Sharpe, liquidity", "Fiscal and monetary variables", "Numerical practice"] },
    { id: "d7", date: "Jun 23", focus: "Research, actions, commodities", chapters: [4, 9, 11], actions: ["Mosaic vs insider information", "Bonus, split, rights, buyback", "Commodity drivers and hedging"] },
    { id: "d8", date: "Jun 24", focus: "Research reports and light chapters", chapters: [13, 1, 2], actions: ["Report checklist", "Market structure recap", "Formula deck revision"] },
    { id: "d9", date: "Jun 25", focus: "Mock and repair", chapters: [15, 8, 10, 14], actions: ["100-style weighted mock", "Review wrong answers", "Redo weak chapter quiz"] },
    { id: "d10", date: "Jun 26", focus: "Final scoring pass", chapters: [15, 8, 10, 14, 6, 12], actions: ["Second mock", "One-page formula sheet", "Stop new topics at night"] },
    { id: "d11", date: "Jun 27", focus: "Exam day", chapters: [], actions: ["Light formula review", "Read every question carefully", "Skip uncertain numericals first"] }
  ],
  formulas: [
    {
      chapter: 3, name: "Market Capitalisation",
      formula: "Market cap = Share price x Number of outstanding equity shares",
      where: ["Share price = current market price of one share", "Number of shares = total equity shares issued and outstanding"],
      example: "Share price Rs. 250 and 10 crore shares: market cap = 250 x 10 crore = Rs. 2,500 crore.",
      use: "Market value of the equity portion only. It sizes the company and feeds P/E and P/B.",
      trap: "It ignores debt and cash, so it is NOT the value of the whole business. Use Enterprise Value for that."
    },
    {
      chapter: 3, name: "Enterprise Value (EV)",
      formula: "EV = Market cap + Total debt - Cash & cash equivalents",
      where: ["Market cap = equity market value", "Total debt = short-term + long-term borrowings", "Cash = cash and liquid investments"],
      example: "Market cap Rs. 2,500 cr, debt Rs. 600 cr, cash Rs. 100 cr: EV = 2,500 + 600 - 100 = Rs. 3,000 cr.",
      use: "Value of the whole firm to all capital providers (equity + debt). Use for EV/EBITDA, EV/Sales, and to compare firms with different debt.",
      trap: "You ADD debt and SUBTRACT cash. A cash-rich company has EV below its market cap."
    },
    {
      chapter: 3, name: "Earnings Per Share (EPS)",
      formula: "EPS = PAT / Number of equity shares",
      where: ["PAT = profit after tax (net profit)", "Number of equity shares = shares outstanding"],
      example: "PAT Rs. 90 cr and 30 cr shares: EPS = 90 / 30 = Rs. 3 per share.",
      use: "Profit earned per share. It feeds into P/E and earnings yield.",
      trap: "Use the same share-count basis (basic vs diluted) on both sides when you compare."
    },
    {
      chapter: 3, name: "P/E Ratio",
      formula: "P/E = Market price per share / EPS",
      where: ["Market price = current share price", "EPS = earnings per share (trailing, current, or forward)"],
      example: "Price Rs. 300, EPS Rs. 10: P/E = 300 / 10 = 30x. You pay Rs. 30 for every Rs. 1 of yearly earnings.",
      use: "How expensive a share is relative to its earnings. Compare with peers and the company's own history.",
      trap: "A low P/E is not automatically cheap. Check if earnings are depressed, one-off, or risky. Note whether EPS is trailing or forward."
    },
    {
      chapter: 3, name: "Current Yield (bond)",
      formula: "Current yield = Annual coupon / Current market price",
      where: ["Annual coupon = yearly interest in rupees", "Current market price = traded price of the bond"],
      example: "Bond pays Rs. 100 a year and trades at Rs. 900: current yield = 100 / 900 = 11.11%.",
      use: "Quick income yield on a bond at today's price.",
      trap: "It ignores the capital gain or loss to maturity. YTM captures full return; current yield does not."
    },
    {
      chapter: 8, name: "EBITDA Margin",
      formula: "EBITDA margin = EBITDA / Net sales",
      where: ["EBITDA = earnings before interest, tax, depreciation and amortisation", "Net sales = revenue after returns and discounts"],
      example: "EBITDA Rs. 220 cr on sales Rs. 1,000 cr: margin = 220 / 1,000 = 22%.",
      use: "Operating profitability before depreciation, financing and tax. Good for comparing firms with different depreciation/tax/debt.",
      trap: "It is not cash profit and ignores capex and interest. A high EBITDA margin with heavy debt can still give weak net profit."
    },
    {
      chapter: 8, name: "PAT Margin",
      formula: "PAT margin = PAT / Net sales",
      where: ["PAT = profit after all expenses, interest and tax", "Net sales = revenue"],
      example: "PAT Rs. 90 cr on sales Rs. 1,000 cr: margin = 9%.",
      use: "Final bottom-line profit left for shareholders per rupee of sales.",
      trap: "Can be distorted by one-off gains or tax changes. Separate recurring profit from one-offs."
    },
    {
      chapter: 8, name: "Return on Equity (ROE)",
      formula: "ROE = PAT / Net worth",
      where: ["PAT = profit after tax", "Net worth = Equity share capital (face value) + Reserves & surplus", "Use AVERAGE net worth = (opening + closing) / 2"],
      example: "PAT Rs. 90 cr, average net worth Rs. 600 cr: ROE = 90 / 600 = 15%.",
      use: "Return generated on shareholders' funds. The headline efficiency number for equity investors.",
      trap: "Leverage can inflate ROE. Always read ROE alongside debt levels and the DuPont breakdown."
    },
    {
      chapter: 8, name: "Return on Capital Employed (ROCE)",
      formula: "ROCE = EBIT / Capital employed",
      where: ["EBIT = earnings before interest and tax (operating profit)", "Capital employed = Total assets - non-interest-bearing current liabilities, roughly Equity + Debt", "Use average capital employed"],
      example: "EBIT Rs. 150 cr, capital employed Rs. 1,000 cr: ROCE = 15%.",
      use: "Pre-tax return on ALL capital (equity + debt). Compares firms with different financing fairly.",
      trap: "Uses EBIT (pre-interest), not PAT. Do not mix it up with ROE, which uses PAT and equity only."
    },
    {
      chapter: 8, name: "Debt to Equity (D/E)",
      formula: "D/E = Total adjusted debt / Net worth",
      where: ["Total adjusted debt = all interest-bearing liabilities (short + long term)", "Net worth = equity capital + reserves"],
      example: "Debt Rs. 600 cr, net worth Rs. 1,200 cr: D/E = 0.5x.",
      use: "Leverage gauge. A conservative benchmark is D/E of 1 or below, then adjust for industry and track record.",
      trap: "Definitions vary (total debt vs net debt vs only long-term debt). Stay consistent."
    },
    {
      chapter: 8, name: "Interest Coverage",
      formula: "Interest coverage = EBIT / Interest expense",
      where: ["EBIT = operating profit before interest and tax", "Interest expense = interest on borrowings"],
      example: "EBIT Rs. 150 cr, interest Rs. 50 cr: coverage = 3.0x (earnings cover interest 3 times).",
      use: "Ability to service interest from operating profit. Higher is safer.",
      trap: "A ratio below 1 means EBIT cannot even cover interest, a serious distress signal (e.g. Kingfisher Airlines)."
    },
    {
      chapter: 8, name: "Current Ratio",
      formula: "Current ratio = Current assets / Current liabilities",
      where: ["Current assets = cash, receivables, inventory, etc.", "Current liabilities = dues payable within a year"],
      example: "Current assets Rs. 300 cr, current liabilities Rs. 200 cr: 1.5x.",
      use: "Short-term liquidity. Above 1 means current assets exceed current liabilities.",
      trap: "Below 1 is not always bad. Firms that collect cash on sale and pay suppliers on credit run on negative working capital, which is favourable."
    },
    {
      chapter: 8, name: "Quick Ratio",
      formula: "Quick ratio = (Current assets - Inventory) / Current liabilities",
      where: ["Excludes inventory, the least liquid current asset", "Keeps cash, liquid investments and receivables"],
      example: "Current assets Rs. 300 cr, inventory Rs. 80 cr, current liabilities Rs. 200 cr: (300 - 80) / 200 = 1.10x.",
      use: "Stricter liquidity test than the current ratio.",
      trap: "Only INVENTORY is removed, not receivables. Do not subtract receivables."
    },
    {
      chapter: 8, name: "Asset Turnover",
      formula: "Asset turnover = Net sales / Total assets",
      where: ["Net sales = revenue", "Total assets = average total assets"],
      example: "Sales Rs. 2,000 cr, assets Rs. 1,500 cr: 1.33x. Each rupee of assets generates Rs. 1.33 of sales.",
      use: "How efficiently assets generate revenue. One of the three DuPont drivers.",
      trap: "Low turnover is normal for capital-heavy firms, high for asset-light ones. Compare within the industry."
    },
    {
      chapter: 8, name: "DuPont ROE",
      formula: "ROE = Net profit margin x Asset turnover x Equity multiplier",
      where: ["Net profit margin = PAT / Sales (profitability)", "Asset turnover = Sales / Assets (efficiency)", "Equity multiplier = Assets / Equity (leverage)"],
      example: "9% margin x 1.33 turnover x 1.25 leverage = 15% ROE.",
      use: "Splits ROE into profitability, efficiency and leverage so you see WHY ROE changed.",
      trap: "ROE rising only from higher leverage (equity multiplier) is lower quality and riskier than ROE rising from margin or efficiency."
    },
    {
      chapter: 9, name: "Theoretical Ex-Rights Price (TERP)",
      formula: "TERP = (Cum-rights value of holding + Rights subscription amount) / Total shares after rights",
      where: ["Cum-rights value = existing shares x cum-rights price", "Rights amount = new shares x rights issue price"],
      example: "Hold 400 @ Rs. 250 (= 1,00,000); 1:4 rights of 100 shares @ Rs. 150 (= 15,000): TERP = 1,15,000 / 500 = Rs. 230.",
      use: "Fair price of a share just after a rights issue, ignoring market movement.",
      trap: "Use the CUM-rights (pre-adjustment) price for existing shares, not a guessed post price."
    },
    {
      chapter: 9, name: "Ex-Bonus / Ex-Split Price",
      formula: "Adjusted price = Cum price x (Old shares / New shares)",
      where: ["1:1 bonus doubles shares, so price roughly halves", "A 2-for-1 split doubles shares and halves face value and price"],
      example: "Rs. 400 before a 1:1 bonus becomes about Rs. 200 after. Your total value is unchanged.",
      use: "Adjust price for a bonus or split. Economic value of your holding does not change.",
      trap: "Bonus and split change share count and per-share price, not the total value you hold or the cash in the company."
    },
    {
      chapter: 10, name: "Gordon Growth Model (DDM)",
      formula: "P0 = D1 / (Ke - g)",
      where: ["P0 = fair value today", "D1 = expected dividend next year", "Ke = cost of equity", "g = constant long-term dividend growth"],
      example: "D1 Rs. 8, Ke 13.2%, g 4%: P0 = 8 / (0.132 - 0.04) = 8 / 0.092 = Rs. 86.96.",
      use: "Values a mature, stable dividend payer as a perpetuity growing at g.",
      trap: "Only works when g < Ke. If g is greater than or equal to Ke the formula breaks (negative or infinite value)."
    },
    {
      chapter: 10, name: "Cost of Equity (CAPM)",
      formula: "Ke = Rf + Beta x (Rm - Rf)",
      where: ["Rf = risk-free rate", "Beta = sensitivity to the market", "Rm = expected market return", "(Rm - Rf) = market risk premium"],
      example: "Rf 6%, Beta 1.2, Rm 12%: Ke = 6% + 1.2 x (12% - 6%) = 6% + 7.2% = 13.2%.",
      use: "Required return for equity holders. It is the discount rate for FCFE and the equity cost inside WACC.",
      trap: "Multiply beta by the PREMIUM (Rm - Rf), not by Rm. Beta above 1 pushes Ke above the market return."
    },
    {
      chapter: 10, name: "WACC",
      formula: "WACC = Ke x We + Kd x (1 - tax) x Wd",
      where: ["Ke = cost of equity, We = weight of equity", "Kd = pre-tax cost of debt, Wd = weight of debt", "tax = corporate tax rate"],
      example: "Ke 14% x 0.6 + 10% x (1 - 0.30) x 0.4 = 8.4% + 2.8% = 11.2%.",
      use: "Blended cost of all capital. The discount rate for FCFF (whole-firm valuation).",
      trap: "Use AFTER-tax cost of debt because interest is tax-deductible (the tax shield). Do not tax-adjust equity."
    },
    {
      chapter: 10, name: "Dividend Yield",
      formula: "Dividend yield = Dividend per share / Current price",
      where: ["DPS = annual dividend per share", "Current price = market price"],
      example: "DPS Rs. 5, price Rs. 200: 2.5%.",
      use: "Income return from dividends alone, before any capital gain.",
      trap: "A very high yield can signal a falling price or an unsustainable payout, not a bargain."
    },
    {
      chapter: 10, name: "Earnings Yield",
      formula: "Earnings yield = EPS / Current price",
      where: ["EPS = earnings per share", "Current price = market price"],
      example: "EPS Rs. 10, price Rs. 100: 10%. This is simply 1 / P/E.",
      use: "Earnings return per rupee invested. Lets you compare equities against bond yields.",
      trap: "It is the reciprocal of P/E (1 / P/E), not the P/E itself."
    },
    {
      chapter: 10, name: "PEG Ratio",
      formula: "PEG = P/E ratio / Earnings growth rate (%)",
      where: ["P/E = price-to-earnings multiple", "Growth = expected annual EPS growth in percent"],
      example: "P/E 30, growth 20%: PEG = 30 / 20 = 1.5.",
      use: "Adjusts P/E for growth. Around 1 is often seen as fair; below 1 may be attractive IF growth is real.",
      trap: "A cheap PEG is meaningless if the growth assumption is too optimistic or unsustainable."
    },
    {
      chapter: 10, name: "EV / Sales",
      formula: "EV / Sales = Enterprise value / Sales",
      where: ["EV = enterprise value", "Sales = revenue"],
      example: "EV Rs. 3,000 cr, sales Rs. 1,000 cr: 3.0x.",
      use: "Useful when earnings are negative or volatile but revenue is meaningful (early-stage or new-age firms).",
      trap: "It ignores profitability, so it is only valid if the firm can plausibly become profitable."
    },
    {
      chapter: 12, name: "Holding Period Return (HPR)",
      formula: "HPR = (Ending value - Beginning value + Income) / Beginning value",
      where: ["Income = dividends or coupons received during the period", "Beginning/Ending value = price at start/end"],
      example: "Buy at Rs. 100, sell at Rs. 110, dividend Rs. 5: (110 - 100 + 5) / 100 = 15%.",
      use: "Total return over the full holding period, before annualising.",
      trap: "Include income (dividend or coupon), not just the price change."
    },
    {
      chapter: 12, name: "CAGR",
      formula: "CAGR = (Ending value / Beginning value)^(1 / years) - 1",
      where: ["Ending/Beginning value = portfolio or price at end/start", "years = number of years"],
      example: "Rs. 5,00,000 grows to Rs. 6,65,500 in 3 years: (6,65,500 / 5,00,000)^(1/3) - 1 = (1.331)^(1/3) - 1 = 10%.",
      use: "Smoothed compounded annual return between two points in time.",
      trap: "It is compounded, not total return divided by years. CAGR hides the volatility along the way."
    },
    {
      chapter: 12, name: "Expected Return",
      formula: "Expected return = Sum of (Probability x Outcome)",
      where: ["Probability = chance of each scenario (must sum to 1)", "Outcome = return in that scenario"],
      example: "0.5 x 20% + 0.3 x 10% + 0.2 x (-5%) = 10% + 3% - 1% = 12%.",
      use: "Probability-weighted average return across scenarios.",
      trap: "Probabilities must add up to 100%. The expected value may not equal any single actual outcome."
    },
    {
      chapter: 12, name: "Sharpe Ratio",
      formula: "Sharpe = (Portfolio return - Risk-free rate) / Standard deviation",
      where: ["Portfolio return = realised or expected return", "Risk-free rate = e.g. T-bill yield", "Standard deviation = total risk / volatility"],
      example: "(12% - 6%) / 15% = 0.40. The portfolio earns 0.4% of excess return per 1% of risk.",
      use: "Risk-adjusted return: return per unit of TOTAL risk. Higher is better.",
      trap: "The denominator is standard deviation (total risk), not beta. The beta version is the Treynor ratio."
    },
    {
      chapter: 15, name: "MACD",
      formula: "MACD line = 12-period EMA - 26-period EMA; Signal line = 9-period EMA of MACD",
      where: ["EMA = exponential moving average", "12 EMA = fast, 26 EMA = slow", "Signal line = 9 EMA of the MACD line"],
      example: "When the MACD line crosses above the signal line and both are rising, it is a bullish momentum signal.",
      use: "Trend-following momentum indicator. Crossovers and divergences flag momentum shifts.",
      trap: "It shows momentum, not price level. A crossover of the zero line on its own is not a trade signal."
    },
    {
      chapter: 15, name: "RSI",
      formula: "RSI = 100 - [100 / (1 + RS)],  RS = Average gain / Average loss",
      where: ["RS = ratio of average gains to average losses over the period (default 14)", "Plotted on a 0 to 100 scale"],
      example: "Above 70 = overbought, below 30 = oversold. RSI 78 with price at a higher high but RSI at a lower high = bearish divergence.",
      use: "Momentum oscillator to spot overbought/oversold conditions and divergences.",
      trap: "In a strong trend RSI can stay overbought or oversold for a long time. It is a warning, not an automatic buy or sell."
    },
    {
      chapter: 15, name: "On Balance Volume (OBV)",
      formula: "OBV = Previous OBV + Volume (if close is up) - Volume (if close is down)",
      where: ["Add the day's volume when close is above the previous close", "Subtract the day's volume when close is below it", "Read OBV with its 20-period average"],
      example: "Rising OBV confirms a rising price trend. OBV falling while price rises warns of weak, unconfirmed demand.",
      use: "Volume-based confirmation of a price trend. Divergences can precede reversals.",
      trap: "It confirms trend through volume. It is not a price target or an overbought/oversold gauge."
    }
  ],
  caselets: {
    fin1: "A company reports net sales of Rs. 1,000 crore, EBITDA of Rs. 220 crore, PAT of Rs. 90 crore, average net worth of Rs. 600 crore, EBIT of Rs. 150 crore, interest expense of Rs. 50 crore, current assets of Rs. 300 crore, inventory of Rs. 80 crore, and current liabilities of Rs. 200 crore.",
    val1: "A mature company is expected to pay a dividend of Rs. 8 next year. Its beta is 1.2, the risk-free rate is 6%, expected market return is 12%, and long-term dividend growth is 4%. The stock trades at Rs. 100 and EPS is Rs. 10.",
    tech1: "A stock has been in a decline. A candle forms with a small real body near the high and a long lower shadow. Over the next week price breaks above a falling trendline. RSI moves from 28 to 42 and ADX rises from 16 to 24.",
    ca1: "ABC Ltd announces a 1:1 bonus issue. Before the record date, an investor holds 100 shares at Rs. 400 each. The company also considers a separate 2-for-1 split later in the year.",
    reg1: "An analyst owns shares of a company under coverage. The analyst is preparing a public report after meeting management and receiving only public information. The analyst's employer has also provided investment banking services to the company in the past year.",
    fin2: "PQR Ltd reports net sales of Rs. 2,000 crore, EBIT of Rs. 300 crore, PAT of Rs. 180 crore, total assets of Rs. 1,500 crore, average net worth of Rs. 1,200 crore, total debt of Rs. 600 crore, inventory of Rs. 250 crore, current assets of Rs. 500 crore, and current liabilities of Rs. 400 crore.",
    val2: "XYZ Ltd is expected to generate free cash flow to the firm (FCFF) of Rs. 50 crore next year, growing at 5% in perpetuity. Its cost of equity is 14%, pre-tax cost of debt is 10%, the tax rate is 30%, and the capital structure is 60% equity and 40% debt.",
    ind1: "An analyst studies the Indian passenger airline industry. There are many competing carriers, low product differentiation, and price-sensitive customers. Fuel suppliers and aircraft lessors have strong bargaining power, fixed costs are high, and fare wars are frequent. A budget carrier holds the largest market share in a segment that is now growing slowly.",
    ca2: "LMN Ltd announces a rights issue in the ratio 1:4 at Rs. 150 per share. An investor currently holds 400 shares trading at Rs. 250 each on a cum-rights basis.",
    risk1: "An investor's portfolio grows from Rs. 5,00,000 to Rs. 6,65,500 over 3 years. Its annual return is 12%, the risk-free rate is 6%, and the standard deviation of returns is 15%.",
    tech2: "A stock in a strong uptrend shows an RSI of 78. Price makes a new higher high, but the RSI makes a lower high. The ADX has risen from 22 to 31, and the +DMI is above the -DMI."
  },
  questions: [
    { id: "c1q1", chapter: 1, difficulty: "Easy", question: "Which statement best describes the role of a research analyst?", options: ["Only collecting raw data", "Only executing client trades", "Collecting information, analysing it, and forming investment views", "Guaranteeing investment returns"], answer: 2, explain: "The RA role combines information gathering, analysis, and communication of an investment view." },
    { id: "c1q2", chapter: 1, difficulty: "Easy", question: "Which quality is most central to analyst-company interaction?", options: ["Seeking unpublished price-sensitive information", "Maintaining independence and asking clear questions", "Accepting management claims without checks", "Avoiding written records"], answer: 1, explain: "Analysts must remain independent and structure interactions around clear, permissible questions." },
    { id: "c2q1", chapter: 2, difficulty: "Easy", question: "A company issuing shares to investors for the first time is using which market?", options: ["Secondary market", "Primary market", "Money market only", "Derivatives market"], answer: 1, explain: "The primary market is where issuers raise capital by issuing securities." },
    { id: "c2q2", chapter: 2, difficulty: "Easy", question: "Which derivative gives the buyer a right but not an obligation?", options: ["Future", "Forward", "Option", "Swap"], answer: 2, explain: "An option buyer has a right; futures and forwards create obligations." },
    { id: "c2q3", chapter: 2, difficulty: "Medium", question: "A trader buys the same security in one market and sells it in another to capture a price difference. This is:", options: ["Hedging", "Arbitrage", "Pledging", "Rematerialisation"], answer: 1, explain: "Arbitrage attempts to capture price differences across markets or instruments." },
    { id: "c2q4", chapter: 2, difficulty: "Easy", question: "Dematerialisation means:", options: ["Converting physical securities into electronic form", "Converting debt into equity", "Cancelling listed securities", "Issuing bonus shares"], answer: 0, explain: "Dematerialisation converts physical certificates into electronic holdings." },
    { id: "c3q1", chapter: 3, difficulty: "Easy", question: "Market capitalisation is calculated as:", options: ["Book value x EPS", "Share price x Number of outstanding shares", "Debt minus cash", "Dividend per share / Price"], answer: 1, explain: "Market cap is the market value of equity." },
    { id: "c3q2", chapter: 3, difficulty: "Medium", question: "Which item is normally subtracted while calculating enterprise value?", options: ["Debt", "Cash and cash equivalents", "Preference capital", "Minority interest"], answer: 1, explain: "Enterprise value adds debt-like claims and subtracts cash." },
    { id: "c3q3", chapter: 3, difficulty: "Medium", question: "If market interest rates rise after a fixed-rate bond is issued, the bond price will generally:", options: ["Rise", "Fall", "Stay fixed at face value", "Convert into equity"], answer: 1, explain: "Bond prices and market yields move inversely." },
    { id: "c3q4", chapter: 3, difficulty: "Medium", question: "All else equal, which bond has higher duration?", options: ["Short maturity, high coupon", "Long maturity, low coupon", "Short maturity, floating coupon", "Bond held only for one day"], answer: 1, explain: "Duration increases with longer maturity and lower coupon." },
    { id: "c4q1", chapter: 4, difficulty: "Easy", question: "Mosaic analysis is best described as:", options: ["Using public information pieces to build an investment view", "Trading on unpublished price-sensitive information", "Ignoring company fundamentals", "Only reading chart patterns"], answer: 0, explain: "Mosaic analysis combines public information and legitimate analysis." },
    { id: "c4q2", chapter: 4, difficulty: "Easy", question: "Fundamental equity analysis usually follows which broad sequence?", options: ["Price chart only", "Economy, industry, company, financials, valuation", "Only company logo and product quality", "Only broker recommendations"], answer: 1, explain: "Top-down and bottom-up analysis both rely on economy, industry, company, financials, and valuation." },
    { id: "c4q3", chapter: 4, difficulty: "Medium", question: "Which research approach focuses primarily on price and volume behaviour?", options: ["Fundamental analysis", "Technical analysis", "Credit analysis", "Forensic accounting"], answer: 1, explain: "Technical analysis studies market action such as price and volume." },
    { id: "c4q4", chapter: 4, difficulty: "Medium", question: "A commodity analyst studying crop output, inventory, weather, and demand is mainly using:", options: ["Only behavioural finance", "Fundamental commodity analysis", "Dividend discount analysis", "Insider trading"], answer: 1, explain: "Commodity fundamentals depend on supply, demand, inventory, weather, currency, and policy factors." },
    { id: "c5q1", chapter: 5, difficulty: "Easy", question: "Fiscal policy is mainly associated with:", options: ["Government spending and taxation", "Only stock exchange settlement", "Central bank demat rules", "Company dividend policy"], answer: 0, explain: "Fiscal policy is controlled by government budget decisions." },
    { id: "c5q2", chapter: 5, difficulty: "Easy", question: "Monetary policy is primarily managed in India by:", options: ["Ministry of Corporate Affairs", "Reserve Bank of India", "Stock exchanges", "Depositories"], answer: 1, explain: "The RBI manages monetary policy." },
    { id: "c5q3", chapter: 5, difficulty: "Medium", question: "Which pair is correctly matched?", options: ["FDI - short-term portfolio trade", "FPI - direct control of factories", "FDI - direct long-term investment", "FPI - government taxation"], answer: 2, explain: "FDI is direct investment; FPI is portfolio investment in financial assets." },
    { id: "c5q4", chapter: 5, difficulty: "Medium", question: "A multi-year shift from cash payments to digital payments is best classified as:", options: ["Seasonal trend", "Secular trend", "One-day volatility", "Inventory turnover"], answer: 1, explain: "Secular trends are long-term structural changes." },
    { id: "c5q5", chapter: 5, difficulty: "Medium", question: "A weaker domestic currency can affect companies most directly through:", options: ["Import costs and export competitiveness", "Only board composition", "Only share face value", "Only dematerialisation"], answer: 0, explain: "Currency movements affect import costs, export revenues, and foreign-currency liabilities." },
    { id: "c6q1", chapter: 6, difficulty: "Easy", question: "Which is not one of Porter's five forces?", options: ["Supplier power", "Buyer power", "Threat of substitutes", "Depreciation method"], answer: 3, explain: "Depreciation method is an accounting choice, not a Porter force." },
    { id: "c6q2", chapter: 6, difficulty: "Medium", question: "In the BCG matrix, a business with high market growth and high relative market share is a:", options: ["Star", "Cash cow", "Dog", "Question mark"], answer: 0, explain: "Stars operate in high-growth markets and have high relative share." },
    { id: "c6q3", chapter: 6, difficulty: "Medium", question: "Which framework explicitly covers political, economic, socio-cultural, technological, legal, and environmental factors?", options: ["BCG", "PESTLE", "DuPont", "CAPM"], answer: 1, explain: "PESTLE is the macro-environment framework." },
    { id: "c6q4", chapter: 6, difficulty: "Medium", question: "Value migration refers to:", options: ["Movement of profits and market value from old business models to new ones", "Transfer of shares from physical to demat", "Calculation of bond duration", "Payment of cash dividend"], answer: 0, explain: "Value migration captures shifts in profit pools and investor value across business models." },
    { id: "c6q5", chapter: 6, difficulty: "Medium", question: "Which KPI pairing is most reasonable?", options: ["Telecom - ARPU", "Hotel - coupon rate", "Bank - room occupancy", "Airline - face value"], answer: 0, explain: "Average revenue per user is a telecom KPI." },
    { id: "c6q6", chapter: 6, difficulty: "Hard", question: "A high-growth industry with low entry barriers and intense price competition may still be unattractive because:", options: ["Growth always destroys value", "Competitive forces may prevent sustainable returns", "Market sizing is impossible", "All firms must be cash cows"], answer: 1, explain: "Industry attractiveness depends on competitive structure, not growth alone." },
    { id: "c7q1", chapter: 7, difficulty: "Easy", question: "Which factor best indicates pricing power?", options: ["Ability to raise prices without losing significant demand", "Only a low share face value", "High number of subsidiaries", "Frequent stock splits"], answer: 0, explain: "Pricing power means customers accept price increases because of differentiation, necessity, brand, or switching costs." },
    { id: "c7q2", chapter: 7, difficulty: "Medium", question: "SWOT analysis includes:", options: ["Sales, wages, operations, taxes", "Strengths, weaknesses, opportunities, threats", "Securities, warrants, options, treasury bills", "Support, wedge, oscillator, trend"], answer: 1, explain: "SWOT is a qualitative business analysis framework." },
    { id: "c7q3", chapter: 7, difficulty: "Medium", question: "Which is a governance red flag?", options: ["Clear related-party disclosure", "Independent board oversight", "Repeated opaque related-party transactions", "Timely annual reports"], answer: 2, explain: "Opaque related-party transactions can indicate conflict with minority shareholders." },
    { id: "c7q4", chapter: 7, difficulty: "Medium", question: "Credit rating is useful in company analysis because it helps assess:", options: ["Only chart momentum", "Debt repayment capacity and credit risk", "Only stock split ratio", "Tax slab for investors"], answer: 1, explain: "Credit ratings summarize credit risk and repayment ability." },
    { id: "c7q5", chapter: 7, difficulty: "Medium", question: "ESG review primarily covers:", options: ["Earnings, sales, gross margin", "Environmental, social, and governance factors", "Equity, swaps, government bonds", "Exchange, settlement, grossing"], answer: 1, explain: "ESG expands company analysis beyond near-term financials." },
    { id: "c8q1", chapter: 8, difficulty: "Easy", question: "Which statement is a point-in-time statement?", options: ["Balance sheet", "Profit and loss account", "Cash flow statement", "Management commentary only"], answer: 0, explain: "The balance sheet shows assets, liabilities, and equity at a date." },
    { id: "c8q2", chapter: 8, difficulty: "Easy", question: "EBITDA margin equals:", options: ["EBITDA / Net sales", "PAT / Net worth", "Debt / Equity", "Current assets / Current liabilities"], answer: 0, explain: "EBITDA margin measures operating profitability before depreciation and financing effects." },
    { id: "c8q3", chapter: 8, difficulty: "Easy", question: "ROE is calculated as:", options: ["EBIT / Capital employed", "PAT / Net worth", "Sales / Assets", "Debt / Interest"], answer: 1, explain: "ROE measures return generated on shareholders' net worth." },
    { id: "c8q4", chapter: 8, difficulty: "Medium", question: "Interest coverage ratio measures:", options: ["Inventory ageing", "Ability of earnings to cover interest expense", "Dividend payout only", "Market share"], answer: 1, explain: "Interest coverage is EBIT divided by interest expense." },
    { id: "c8q5", chapter: 8, difficulty: "Medium", question: "Quick ratio differs from current ratio because it excludes:", options: ["Cash", "Inventory", "Current liabilities", "Receivables"], answer: 1, explain: "Quick ratio removes inventory from current assets." },
    { id: "c8q6", chapter: 8, difficulty: "Medium", question: "DuPont analysis decomposes ROE into:", options: ["Net margin, asset turnover, financial leverage", "Coupon, maturity, yield", "Trend, support, resistance", "Dividend, split, bonus"], answer: 0, explain: "DuPont helps diagnose the drivers of ROE." },
    { id: "c8q7", chapter: 8, difficulty: "Medium", question: "A company reports rising profits but persistent negative operating cash flow. The analyst should first suspect:", options: ["Accounting quality or working-capital stress", "A guaranteed buy signal", "Lower interest rates only", "A stock split"], answer: 0, explain: "Cash flow quality matters; profits without cash may need deeper review." },
    { id: "c8q8", chapter: 8, difficulty: "Medium", caselet: "fin1", question: "What is the company's EBITDA margin?", options: ["9%", "15%", "22%", "60%"], answer: 2, explain: "EBITDA margin = 220 / 1,000 = 22%." },
    { id: "c8q9", chapter: 8, difficulty: "Medium", caselet: "fin1", question: "What is the company's ROE?", options: ["9%", "15%", "22%", "30%"], answer: 1, explain: "ROE = PAT / average net worth = 90 / 600 = 15%." },
    { id: "c8q10", chapter: 8, difficulty: "Medium", caselet: "fin1", question: "What is the interest coverage ratio?", options: ["1.0x", "2.0x", "3.0x", "4.4x"], answer: 2, explain: "Interest coverage = EBIT / interest = 150 / 50 = 3.0x." },
    { id: "c8q11", chapter: 8, difficulty: "Medium", caselet: "fin1", question: "What is the quick ratio?", options: ["0.60x", "1.10x", "1.50x", "2.20x"], answer: 1, explain: "Quick ratio = (300 - 80) / 200 = 1.10x." },
    { id: "c8q12", chapter: 8, difficulty: "Medium", question: "Contingent liabilities are usually found in:", options: ["Notes to accounts", "Only share price chart", "Exchange order book", "Demat account statement only"], answer: 0, explain: "Notes to accounts disclose important accounting policies and contingent liabilities." },
    { id: "c9q1", chapter: 9, difficulty: "Easy", question: "When a company issues additional shares to existing shareholders without consideration, it is called:", options: ["Bonus issue", "Cash dividend", "Delisting", "Loan restructuring"], answer: 0, explain: "A bonus issue capitalizes reserves and gives shares without cash payment." },
    { id: "c9q2", chapter: 9, difficulty: "Medium", question: "A rights issue gives existing shareholders:", options: ["A forced sale order", "A right to subscribe to new shares, usually in a specified ratio", "A guaranteed dividend", "A change in auditor"], answer: 1, explain: "Rights issues raise capital by offering shares to existing shareholders." },
    { id: "c9q3", chapter: 9, difficulty: "Medium", caselet: "ca1", question: "After the 1:1 bonus, how many shares will the investor hold?", options: ["50", "100", "200", "400"], answer: 2, explain: "A 1:1 bonus gives one additional share for each share held: 100 becomes 200." },
    { id: "c9q4", chapter: 9, difficulty: "Medium", caselet: "ca1", question: "Ignoring market movement, what is the approximate ex-bonus price per share?", options: ["Rs. 100", "Rs. 200", "Rs. 400", "Rs. 800"], answer: 1, explain: "Economic value is spread across twice the shares, so Rs. 400 becomes about Rs. 200." },
    { id: "c9q5", chapter: 9, difficulty: "Easy", question: "A buyback directly reduces:", options: ["Outstanding shares", "Face value of every share only", "All debt automatically", "Number of employees"], answer: 0, explain: "A buyback repurchases shares and reduces outstanding share count if extinguished." },
    { id: "c10q1", chapter: 10, difficulty: "Easy", question: "In a DCF, cash flows are discounted because:", options: ["Future cash flows have time value and risk", "Accounting books require no assumptions", "All companies pay the same dividend", "Price always equals value"], answer: 0, explain: "DCF converts expected future cash flows to present value using a risk-reflective discount rate." },
    { id: "c10q2", chapter: 10, difficulty: "Medium", question: "The Gordon growth model is most appropriate for:", options: ["A mature company with stable dividends", "A pre-revenue startup", "A company with no dividend and no cash flows", "A stock split calculation"], answer: 0, explain: "The model values a stable growing dividend stream." },
    { id: "c10q3", chapter: 10, difficulty: "Medium", question: "FCFF should normally be discounted at:", options: ["Cost of equity", "WACC", "Dividend yield", "Inventory turnover"], answer: 1, explain: "FCFF belongs to all capital providers, so WACC is used." },
    { id: "c10q4", chapter: 10, difficulty: "Medium", question: "FCFE should normally be discounted at:", options: ["Cost of equity", "Pre-tax cost of debt", "Gross margin", "Current ratio"], answer: 0, explain: "FCFE is cash flow available to equity shareholders." },
    { id: "c10q5", chapter: 10, difficulty: "Medium", question: "Which formula is the CAPM cost of equity?", options: ["Ke = Rf + Beta x (Rm - Rf)", "Ke = Sales / Assets", "Ke = DPS / EPS", "Ke = Debt / Equity"], answer: 0, explain: "CAPM adds market risk premium adjusted by beta to the risk-free rate." },
    { id: "c10q6", chapter: 10, difficulty: "Medium", question: "WACC uses cost of debt after tax because:", options: ["Interest is generally tax-deductible", "Equity dividends are tax-deductible to the company", "Debt has no risk", "Cash is always zero"], answer: 0, explain: "Tax deductibility of interest creates a tax shield." },
    { id: "c10q7", chapter: 10, difficulty: "Medium", question: "PEG ratio is calculated as:", options: ["P/E divided by growth rate", "Growth rate divided by P/E", "EV divided by sales", "Dividend divided by price"], answer: 0, explain: "PEG adjusts the P/E ratio for expected growth." },
    { id: "c10q8", chapter: 10, difficulty: "Medium", question: "Which multiple is usually more capital-structure neutral than P/E?", options: ["EV/EBITDA", "Dividend per share", "Face value", "Current ratio"], answer: 0, explain: "EV-based multiples compare firm value before financing structure effects." },
    { id: "c10q9", chapter: 10, difficulty: "Medium", caselet: "val1", question: "What is the cost of equity using CAPM?", options: ["10.0%", "12.0%", "13.2%", "18.0%"], answer: 2, explain: "Ke = 6% + 1.2 x (12% - 6%) = 13.2%." },
    { id: "c10q10", chapter: 10, difficulty: "Medium", caselet: "val1", question: "Using Gordon growth, what is the fair value per share?", options: ["Rs. 86.96", "Rs. 100.00", "Rs. 153.85", "Rs. 200.00"], answer: 0, explain: "P0 = 8 / (13.2% - 4%) = Rs. 86.96 approximately." },
    { id: "c10q11", chapter: 10, difficulty: "Medium", caselet: "val1", question: "What is the stock's P/E ratio at Rs. 100 and EPS of Rs. 10?", options: ["4x", "8x", "10x", "13.2x"], answer: 2, explain: "P/E = 100 / 10 = 10x." },
    { id: "c10q12", chapter: 10, difficulty: "Hard", question: "For a conglomerate with unrelated businesses, the most suitable valuation method is often:", options: ["Sum-of-the-parts valuation", "Only current ratio", "Only RSI", "Only face value"], answer: 0, explain: "SOTP values each business separately and aggregates them." },
    { id: "c11q1", chapter: 11, difficulty: "Easy", question: "The fundamental analysis of commodities starts mainly with:", options: ["Supply and demand dynamics", "Board independence only", "Dividend payout only", "Share split ratio"], answer: 0, explain: "Commodity prices are highly linked to supply-demand balance." },
    { id: "c11q2", chapter: 11, difficulty: "Medium", question: "A stronger US dollar often affects dollar-denominated commodities by:", options: ["Making them more expensive for non-dollar buyers", "Eliminating storage costs", "Fixing weather risk", "Increasing face value"], answer: 0, explain: "Dollar strength can pressure demand from non-dollar buyers, all else equal." },
    { id: "c11q3", chapter: 11, difficulty: "Medium", question: "Crop reports and weather reports are especially relevant for:", options: ["Agricultural commodities", "Only preference shares", "Only stock splits", "Only research disclosures"], answer: 0, explain: "Weather and crop data directly affect agricultural supply." },
    { id: "c11q4", chapter: 11, difficulty: "Medium", question: "Hedging in commodities is used mainly to:", options: ["Eliminate all business risk permanently", "Reduce price risk through offsetting positions", "Increase insider information", "Avoid all regulation"], answer: 1, explain: "Hedging offsets price exposure; it does not remove every risk." },
    { id: "c12q1", chapter: 12, difficulty: "Easy", question: "CAGR measures:", options: ["Compounded annual growth rate", "Coupon amount only", "Current asset growth ratio", "Cash arbitrage gross return"], answer: 0, explain: "CAGR annualizes growth on a compounded basis." },
    { id: "c12q2", chapter: 12, difficulty: "Medium", question: "Beta measures:", options: ["Sensitivity to market movements", "Auditor independence", "Dividend tax only", "Number of shares after split"], answer: 0, explain: "Beta captures market risk relative to a benchmark." },
    { id: "c12q3", chapter: 12, difficulty: "Medium", question: "Margin of safety is:", options: ["Difference between intrinsic value and purchase price", "Difference between coupon and face value only", "Brokerage charged on trade", "The bid-ask spread only"], answer: 0, explain: "Buying below estimated intrinsic value provides margin of safety." },
    { id: "c12q4", chapter: 12, difficulty: "Medium", question: "Which is a risk-adjusted return measure?", options: ["Sharpe ratio", "Face value", "Bonus ratio", "Demat number"], answer: 0, explain: "Sharpe ratio relates excess return to standard deviation." },
    { id: "c12q5", chapter: 12, difficulty: "Medium", question: "Confirmation bias means an investor:", options: ["Seeks information that supports existing views", "Always diversifies perfectly", "Values a bond using YTM", "Computes WACC after tax"], answer: 0, explain: "Confirmation bias is the tendency to favour information that confirms current beliefs." },
    { id: "c12q6", chapter: 12, difficulty: "Medium", question: "Which indicator best points to poor share liquidity?", options: ["Wide bid-ask spread and high impact cost", "High disclosure quality", "Stable dividend history", "Low debt-to-equity"], answer: 0, explain: "Liquidity is worse when trading costs and price impact are high." },
    { id: "c13q1", chapter: 13, difficulty: "Easy", question: "A good research report should include:", options: ["Investment thesis, valuation, risks, and disclosures", "Only a target price", "Only a chart screenshot", "Only company advertisements"], answer: 0, explain: "The report must support its recommendation with analysis and disclosures." },
    { id: "c13q2", chapter: 13, difficulty: "Easy", question: "For checking company facts, the most reliable source among these is usually:", options: ["Annual report", "Anonymous social media post", "Rumour message", "Unverified blog comment"], answer: 0, explain: "Annual reports and official filings are primary sources." },
    { id: "c13q3", chapter: 13, difficulty: "Medium", question: "Risk factors in a research report should be:", options: ["Hidden to make the report persuasive", "Clearly disclosed and linked to the thesis", "Added only after the exam", "Replaced by marketing slogans"], answer: 1, explain: "Clear risk disclosure is part of a good research report." },
    { id: "c13q4", chapter: 13, difficulty: "Medium", question: "A checklist approach helps a report by:", options: ["Reducing missed sections and improving consistency", "Guaranteeing stock performance", "Avoiding all data", "Removing disclosures"], answer: 0, explain: "Checklists improve completeness and consistency." },
    { id: "c14q1", chapter: 14, difficulty: "Easy", question: "The primary securities market regulator in India is:", options: ["SEBI", "IRDAI", "PFRDA", "IBBI"], answer: 0, explain: "SEBI regulates securities markets and intermediaries." },
    { id: "c14q2", chapter: 14, difficulty: "Easy", question: "UPSI stands for:", options: ["Unpublished price-sensitive information", "Unified payment securities index", "Updated portfolio settlement instruction", "Underwritten public share issue"], answer: 0, explain: "UPSI is central to insider trading regulations." },
    { id: "c14q3", chapter: 14, difficulty: "Medium", question: "An analyst who has a financial interest in a covered company should:", options: ["Hide it if the report is positive", "Disclose it as required and manage the conflict", "Trade before publication", "Avoid all written records"], answer: 1, explain: "Conflict management and disclosure are key RA requirements." },
    { id: "c14q4", chapter: 14, difficulty: "Medium", question: "PFUTP regulations primarily target:", options: ["Fraudulent and unfair trade practices", "Dividend yield calculation", "P&L formatting", "Weather reports"], answer: 0, explain: "PFUTP rules prohibit fraudulent and manipulative market practices." },
    { id: "c14q5", chapter: 14, difficulty: "Medium", question: "GSM and ASM are best described as:", options: ["Exchange surveillance mechanisms", "Valuation multiples", "Cash flow statements", "Commodity weather reports"], answer: 0, explain: "GSM and ASM are surveillance frameworks used by exchanges." },
    { id: "c14q6", chapter: 14, difficulty: "Medium", question: "Which regulator is most closely linked to insolvency professionals and insolvency resolution?", options: ["IBBI", "IRDAI", "PFRDA", "Stock broker only"], answer: 0, explain: "IBBI oversees insolvency and bankruptcy framework participants." },
    { id: "c14q7", chapter: 14, difficulty: "Medium", caselet: "reg1", question: "What is the analyst's best course regarding share ownership?", options: ["Ignore it", "Disclose it as a conflict according to requirements", "Trade more shares before publication", "Ask management for UPSI"], answer: 1, explain: "Financial interest in the covered company requires conflict management and disclosure." },
    { id: "c14q8", chapter: 14, difficulty: "Medium", caselet: "reg1", question: "The employer's investment banking relationship is:", options: ["Irrelevant in all cases", "A potential conflict that may require disclosure", "A technical indicator", "A corporate action"], answer: 1, explain: "Business relationships can create conflicts and need appropriate disclosure." },
    { id: "c14q9", chapter: 14, difficulty: "Hard", caselet: "reg1", question: "If management accidentally shares UPSI, the analyst should:", options: ["Use it in the report immediately", "Trade before others know", "Avoid using it and follow internal compliance procedures", "Send it to clients"], answer: 2, explain: "UPSI cannot be traded on or selectively communicated." },
    { id: "c14q10", chapter: 14, difficulty: "Medium", question: "The Research Analyst code of conduct emphasizes:", options: ["Integrity, independence, due skill, and care", "Guaranteed returns", "Avoiding all disclosures", "Trading ahead of recommendations"], answer: 0, explain: "Professional conduct standards require integrity, independence, skill, care, and compliance." },
    { id: "c15q1", chapter: 15, difficulty: "Easy", question: "Technical analysis primarily studies:", options: ["Price and volume behaviour", "Only annual reports", "Only tax policy", "Only board structure"], answer: 0, explain: "Technical analysis uses market action, especially price and volume." },
    { id: "c15q2", chapter: 15, difficulty: "Medium", question: "Under Dow Theory, a trend is assumed to continue until:", options: ["A clear reversal signal appears", "The company announces a dividend", "The share face value changes", "The auditor resigns"], answer: 0, explain: "Dow Theory treats trends as persistent until evidence of reversal." },
    { id: "c15q3", chapter: 15, difficulty: "Medium", question: "A hammer after a decline is usually interpreted as:", options: ["Potential bullish reversal", "Guaranteed bankruptcy", "No price information", "A rights issue"], answer: 0, explain: "A hammer can indicate rejection of lower prices after a downtrend." },
    { id: "c15q4", chapter: 15, difficulty: "Medium", question: "A hanging man appears after an uptrend and warns of:", options: ["Potential bearish reversal", "Certain bonus issue", "Higher current ratio", "No volume relevance"], answer: 0, explain: "The same candle shape has different implication depending on preceding trend." },
    { id: "c15q5", chapter: 15, difficulty: "Medium", question: "An ascending triangle usually has:", options: ["Horizontal resistance and rising lows", "Horizontal support and falling highs", "No support or resistance", "Only annual dividend data"], answer: 0, explain: "Ascending triangles show buyers stepping up against resistance." },
    { id: "c15q6", chapter: 15, difficulty: "Medium", question: "RSI is mainly a:", options: ["Momentum oscillator", "Liquidity ratio", "Corporate action", "Regulator"], answer: 0, explain: "RSI measures momentum by comparing average gains and losses." },
    { id: "c15q7", chapter: 15, difficulty: "Medium", question: "ADX measures:", options: ["Trend strength, not direction", "Dividend yield", "Auditor opinion", "Book value"], answer: 0, explain: "ADX indicates strength of trend; direction must be read separately." },
    { id: "c15q8", chapter: 15, difficulty: "Medium", question: "MACD is based on:", options: ["Moving averages", "Inventory balances", "Tax rates", "Promoter pledge only"], answer: 0, explain: "MACD is the difference between shorter and longer EMAs." },
    { id: "c15q9", chapter: 15, difficulty: "Medium", question: "OBV attempts to confirm price movement using:", options: ["Volume", "Income tax", "Face value", "Credit rating scale"], answer: 0, explain: "OBV adds or subtracts volume based on price closes." },
    { id: "c15q10", chapter: 15, difficulty: "Medium", question: "When a support level breaks, it may later act as:", options: ["Resistance", "Dividend", "Debt", "EPS"], answer: 0, explain: "Broken support often becomes resistance due to changed market psychology." },
    { id: "c15q11", chapter: 15, difficulty: "Medium", caselet: "tech1", question: "The candle described in the caselet is closest to:", options: ["Hammer", "Dark cloud cover", "Evening star", "Descending triangle"], answer: 0, explain: "Small body near high with a long lower shadow after decline is a hammer-like setup." },
    { id: "c15q12", chapter: 15, difficulty: "Medium", caselet: "tech1", question: "RSI moving from 28 to 42 suggests:", options: ["Momentum improving from oversold conditions", "A guaranteed rights issue", "No change in momentum", "Current liabilities increasing"], answer: 0, explain: "RSI rising from oversold territory signals improving momentum, though not a guarantee." },
    { id: "c15q13", chapter: 15, difficulty: "Medium", caselet: "tech1", question: "ADX rising from 16 to 24 most likely indicates:", options: ["Trend strength is increasing", "The company has no debt", "A dividend must be paid", "The balance sheet date changed"], answer: 0, explain: "Rising ADX indicates strengthening trend conditions." },
    { id: "c15q14", chapter: 15, difficulty: "Hard", question: "Which pattern is generally a three-candle bullish reversal?", options: ["Morning star", "Evening star", "Dark cloud cover", "Bearish engulfing"], answer: 0, explain: "Morning star is a bullish reversal pattern that appears after a decline." },
    { id: "c15q15", chapter: 15, difficulty: "Hard", question: "Relative Strength Comparative is used to compare:", options: ["A security's performance against a benchmark or another security", "Debt with cash only", "Dividend with tax rate", "Inventory with receivables only"], answer: 0, explain: "RSC helps judge relative outperformance or underperformance." },

    { id: "c3q5", chapter: 3, difficulty: "Medium", question: "Yield to maturity (YTM) assumes the bond is:", options: ["Sold immediately at face value", "Held to maturity with cash flows received as expected", "Converted into equity", "Repaid only if interest rates fall"], answer: 1, explain: "YTM is the return earned if the bond is held to maturity and all cash flows occur as scheduled." },
    { id: "c3q6", chapter: 3, difficulty: "Medium", question: "A zero-coupon bond:", options: ["Pays a high coupon every quarter", "Pays no periodic interest and is issued at a discount to face value", "Always trades above face value", "Has zero duration"], answer: 1, explain: "Zero-coupon bonds pay no periodic coupon; the return comes from the discount to redemption value." },

    { id: "c6q7", chapter: 6, difficulty: "Medium", question: "The SCP framework in industry analysis stands for:", options: ["Sales-Cost-Profit", "Structure-Conduct-Performance", "Supply-Capacity-Pricing", "Sector-Cycle-Premium"], answer: 1, explain: "Structure-Conduct-Performance links industry structure to firm conduct and resulting performance." },
    { id: "c6q8", chapter: 6, difficulty: "Medium", question: "Estimating market size by adding up demand from individual customer segments is a:", options: ["Top-down approach", "Bottom-up approach", "Discount-rate approach", "PESTLE approach"], answer: 1, explain: "Bottom-up sizing builds total market from granular segment demand; top-down starts from a macro aggregate." },
    { id: "c6q9", chapter: 6, difficulty: "Medium", question: "In the late (declining) stage of an industry life cycle, a typical feature is:", options: ["Explosive new entrant growth", "Slowing growth and consolidation", "Guaranteed high margins", "No competition"], answer: 1, explain: "Mature and declining industries usually show slowing growth, overcapacity, and consolidation." },

    { id: "c7q6", chapter: 7, difficulty: "Medium", question: "A wide, durable economic moat most directly supports:", options: ["Sustained high returns and margins over time", "A guaranteed stock split", "Lower face value", "Higher negative working capital only"], answer: 0, explain: "A sustainable moat lets a firm defend pricing and earn above-average returns for longer." },
    { id: "c7q7", chapter: 7, difficulty: "Medium", question: "Which of the following is NOT a governance red flag?", options: ["Frequent opaque related-party transactions", "High promoter share pledging", "An independent, active audit committee", "Repeated auditor resignations"], answer: 2, explain: "An independent audit committee is a positive governance feature, not a red flag." },

    { id: "c8q13", chapter: 8, difficulty: "Medium", question: "Inventory turnover = Sales / Inventory. A higher ratio generally means:", options: ["Inventory is converting into sales faster", "The company is hoarding stock", "Sales are falling", "Depreciation is rising"], answer: 0, explain: "Higher inventory turnover indicates stock is sold and replenished quickly, locking up less capital." },
    { id: "c8q14", chapter: 8, difficulty: "Medium", question: "A falling accounts receivable turnover ratio suggests:", options: ["Faster cash collection", "Slower collections or more lenient credit terms", "Lower inventory", "Higher interest coverage"], answer: 1, explain: "Receivable turnover = Revenue / Average receivables; a fall means collections are slowing." },
    { id: "c8q15", chapter: 8, difficulty: "Hard", question: "A firm that collects cash on sales but pays suppliers on credit may show a current ratio below 1. This is:", options: ["Always a red flag of bankruptcy", "Often favourable negative working capital funded by customers", "Proof of accounting fraud", "Irrelevant to liquidity"], answer: 1, explain: "Negative working capital from strong bargaining power is interest-free funding and can be a strength." },
    { id: "c8q16", chapter: 8, difficulty: "Easy", question: "In the cash flow statement, cash generated from the core business is shown under:", options: ["Operating activities", "Investing activities", "Financing activities", "Notes to accounts"], answer: 0, explain: "Operating activities capture cash flows from the principal revenue-producing operations." },
    { id: "c8q17", chapter: 8, difficulty: "Medium", question: "A qualified audit opinion means the auditor:", options: ["Has no reservations at all", "Has specific reservations on certain items but accounts are otherwise fair", "Refuses to give any opinion", "Confirms fraud"], answer: 1, explain: "A qualified opinion flags specific exceptions, distinct from a clean (unqualified), adverse, or disclaimer opinion." },
    { id: "c8q18", chapter: 8, difficulty: "Easy", question: "ROCE uses which profit figure in the numerator?", options: ["PAT", "EBIT", "EBITDA", "Dividend"], answer: 1, explain: "ROCE = EBIT / Capital employed; it is a pre-interest, pre-tax return on all capital." },
    { id: "c8q19", chapter: 8, difficulty: "Medium", question: "Net worth in the ROE formula equals:", options: ["Total assets minus cash", "Equity share capital (face value) plus reserves and surplus", "Total debt plus equity", "Market capitalisation"], answer: 1, explain: "Net worth (shareholders' funds) is paid-up equity capital plus reserves and surplus." },
    { id: "c8q20", chapter: 8, difficulty: "Medium", caselet: "fin2", question: "What is PQR's net profit (PAT) margin?", options: ["6%", "9%", "15%", "18%"], answer: 1, explain: "PAT margin = 180 / 2,000 = 9%." },
    { id: "c8q21", chapter: 8, difficulty: "Medium", caselet: "fin2", question: "What is PQR's asset turnover ratio?", options: ["0.75x", "1.33x", "1.50x", "2.00x"], answer: 1, explain: "Asset turnover = Net sales / Total assets = 2,000 / 1,500 = 1.33x." },
    { id: "c8q22", chapter: 8, difficulty: "Medium", caselet: "fin2", question: "What is PQR's ROE?", options: ["9%", "12%", "15%", "20%"], answer: 2, explain: "ROE = PAT / average net worth = 180 / 1,200 = 15%. (Also = 9% x 1.33 x 1.25 via DuPont.)" },
    { id: "c8q23", chapter: 8, difficulty: "Medium", caselet: "fin2", question: "What is PQR's quick ratio?", options: ["0.63x", "1.00x", "1.25x", "1.50x"], answer: 0, explain: "Quick ratio = (500 - 250) / 400 = 0.625, about 0.63x." },

    { id: "c9q6", chapter: 9, difficulty: "Medium", question: "A stock split:", options: ["Raises fresh cash for the company", "Reduces face value per share and increases the number of shares", "Reduces the number of shares", "Cancels the listing"], answer: 1, explain: "A split lowers face value and raises share count proportionately; total value and capital are unchanged." },
    { id: "c9q7", chapter: 9, difficulty: "Medium", question: "Share consolidation (reverse split):", options: ["Increases the number of shares", "Reduces the number of shares and raises face value per share", "Pays a cash dividend", "Is the same as a bonus issue"], answer: 1, explain: "Consolidation merges shares, reducing count and increasing face value per share." },
    { id: "c9q8", chapter: 9, difficulty: "Medium", caselet: "ca2", question: "How many rights shares can the investor subscribe to?", options: ["50", "100", "200", "400"], answer: 1, explain: "A 1:4 rights issue gives one new share per four held: 400 / 4 = 100 shares." },
    { id: "c9q9", chapter: 9, difficulty: "Medium", caselet: "ca2", question: "What total cash is needed to take up the full rights entitlement?", options: ["Rs. 7,500", "Rs. 15,000", "Rs. 25,000", "Rs. 60,000"], answer: 1, explain: "100 rights shares x Rs. 150 = Rs. 15,000." },
    { id: "c9q10", chapter: 9, difficulty: "Hard", caselet: "ca2", question: "What is the theoretical ex-rights price (TERP) per share?", options: ["Rs. 150", "Rs. 200", "Rs. 230", "Rs. 250"], answer: 2, explain: "TERP = (400 x 250 + 100 x 150) / 500 = 1,15,000 / 500 = Rs. 230." },
    { id: "c9q11", chapter: 9, difficulty: "Easy", caselet: "ca2", question: "Unlike a bonus issue, a rights issue:", options: ["Brings fresh cash into the company", "Reduces share count", "Requires no payment", "Cancels existing shares"], answer: 0, explain: "Rights issues raise capital (cash inflow); bonus issues only capitalise reserves with no cash." },

    { id: "c10q13", chapter: 10, difficulty: "Medium", question: "FCFF is discounted at WACC because:", options: ["It belongs to all capital providers (equity and debt)", "It belongs only to equity holders", "Debt is risk-free", "WACC ignores equity"], answer: 0, explain: "FCFF is pre-financing cash flow for all providers, so the blended WACC is the right rate." },
    { id: "c10q14", chapter: 10, difficulty: "Medium", question: "In the Gordon growth model, the perpetual growth rate g must be:", options: ["Higher than the cost of equity", "Equal to the cost of equity", "Lower than the cost of equity", "Equal to zero"], answer: 2, explain: "If g is greater than or equal to Ke, the denominator (Ke - g) is zero or negative and the model breaks." },
    { id: "c10q15", chapter: 10, difficulty: "Medium", question: "EV/EBITDA is often preferred over P/E when comparing firms with:", options: ["The same tax rate", "Different capital structures and leverage", "No revenue", "Identical share counts"], answer: 1, explain: "EV-based multiples are more capital-structure neutral than equity-only P/E." },
    { id: "c10q16", chapter: 10, difficulty: "Medium", question: "The price-to-book (P/B) multiple is most useful for valuing:", options: ["Asset-heavy and financial firms such as banks", "Pre-revenue startups", "Companies with no balance sheet", "Only commodity traders"], answer: 0, explain: "Book value is meaningful for banks and asset-heavy businesses, making P/B relevant there." },
    { id: "c10q17", chapter: 10, difficulty: "Hard", question: "Terminal value in a DCF:", options: ["Is usually a small, ignorable part of value", "Often forms a large part of value and is sensitive to growth and discount-rate assumptions", "Is always zero", "Equals current market price"], answer: 1, explain: "Terminal value typically dominates DCF output, so small assumption changes move valuation a lot." },
    { id: "c10q18", chapter: 10, difficulty: "Easy", question: "Earnings yield equals:", options: ["Price / EPS", "EPS / Price", "Dividend / Price", "EBIT / Sales"], answer: 1, explain: "Earnings yield = EPS / Price, the reciprocal of the P/E ratio." },
    { id: "c10q19", chapter: 10, difficulty: "Medium", question: "Sum-of-the-parts (SOTP) valuation is best suited to:", options: ["A single-product company", "A diversified conglomerate with distinct businesses", "A company in bankruptcy only", "A bond portfolio"], answer: 1, explain: "SOTP values each distinct business separately and adds them, ideal for conglomerates." },
    { id: "c10q20", chapter: 10, difficulty: "Medium", caselet: "val2", question: "What is XYZ's WACC?", options: ["9.6%", "11.2%", "12.4%", "14.0%"], answer: 1, explain: "WACC = 14% x 0.6 + 10% x (1 - 0.30) x 0.4 = 8.4% + 2.8% = 11.2%." },
    { id: "c10q21", chapter: 10, difficulty: "Easy", caselet: "val2", question: "What is XYZ's after-tax cost of debt?", options: ["3.0%", "7.0%", "10.0%", "13.0%"], answer: 1, explain: "After-tax cost of debt = 10% x (1 - 0.30) = 7%." },
    { id: "c10q22", chapter: 10, difficulty: "Hard", caselet: "val2", question: "Using FCFF perpetuity, the firm value is approximately:", options: ["Rs. 446 crore", "Rs. 625 crore", "Rs. 806 crore", "Rs. 1,000 crore"], answer: 2, explain: "Firm value = FCFF / (WACC - g) = 50 / (0.112 - 0.05) = 50 / 0.062 = about Rs. 806 crore." },
    { id: "c10q23", chapter: 10, difficulty: "Easy", caselet: "val2", question: "FCFF should be discounted at:", options: ["Cost of equity", "WACC", "Pre-tax cost of debt", "Dividend yield"], answer: 1, explain: "FCFF belongs to all capital providers, so the discount rate is WACC." },

    { id: "c11q5", chapter: 11, difficulty: "Medium", question: "A producer worried that the price of its commodity will fall would usually:", options: ["Buy futures (long hedge)", "Sell futures (short hedge)", "Avoid all derivatives", "Buy more inventory only"], answer: 1, explain: "A producer hedges downside by selling futures (short hedge); a consumer hedges upside by buying futures." },
    { id: "c11q6", chapter: 11, difficulty: "Medium", question: "Even if the global price is unchanged, India's landed cost of an imported commodity can rise when:", options: ["The rupee strengthens", "The rupee weakens", "Duties are cut", "Freight falls"], answer: 1, explain: "A weaker rupee raises the domestic cost of dollar-priced commodities." },

    { id: "c12q7", chapter: 12, difficulty: "Medium", question: "Systematic (market) risk is risk that:", options: ["Can be fully diversified away", "Affects the whole market and cannot be diversified away", "Applies to one company only", "Is measured by the current ratio"], answer: 1, explain: "Systematic risk (captured by beta) is market-wide and not removable by diversification." },
    { id: "c12q8", chapter: 12, difficulty: "Medium", question: "Unsystematic (specific) risk can be reduced by:", options: ["Diversification across many securities", "Increasing leverage", "Buying only one stock", "Raising the discount rate"], answer: 0, explain: "Company-specific risk can be diversified away by holding many uncorrelated securities." },
    { id: "c12q9", chapter: 12, difficulty: "Medium", question: "Standard deviation of returns measures:", options: ["Total volatility or dispersion of returns", "Only market risk", "Dividend payout", "Trend direction"], answer: 0, explain: "Standard deviation is a measure of total risk (variability of returns around the mean)." },
    { id: "c12q10", chapter: 12, difficulty: "Medium", question: "A stock with a beta of 0.8 is expected to be:", options: ["More volatile than the market", "Less volatile than the market", "Risk-free", "Uncorrelated with the market"], answer: 1, explain: "Beta below 1 means the stock tends to move less than the market." },
    { id: "c12q11", chapter: 12, difficulty: "Medium", question: "Following the crowd into a rising stock without independent analysis is an example of:", options: ["Herding bias", "Margin of safety", "Arbitrage", "Hedging"], answer: 0, explain: "Herding is the tendency to mimic the actions of a larger group." },
    { id: "c12q12", chapter: 12, difficulty: "Medium", caselet: "risk1", question: "What is the portfolio's CAGR over the 3 years?", options: ["8%", "10%", "12%", "33%"], answer: 1, explain: "(6,65,500 / 5,00,000)^(1/3) - 1 = (1.331)^(1/3) - 1 = 10%." },
    { id: "c12q13", chapter: 12, difficulty: "Medium", caselet: "risk1", question: "What is the portfolio's Sharpe ratio?", options: ["0.20", "0.40", "0.80", "1.20"], answer: 1, explain: "Sharpe = (12% - 6%) / 15% = 6 / 15 = 0.40." },
    { id: "c12q14", chapter: 12, difficulty: "Easy", caselet: "risk1", question: "The portfolio's excess return over the risk-free rate is:", options: ["3%", "6%", "12%", "18%"], answer: 1, explain: "Excess return = portfolio return - risk-free rate = 12% - 6% = 6%." },
    { id: "c12q15", chapter: 12, difficulty: "Medium", caselet: "risk1", question: "The Sharpe ratio primarily measures:", options: ["Return per unit of total risk", "Trend strength", "Liquidity", "Leverage"], answer: 0, explain: "Sharpe relates excess return to standard deviation, i.e. risk-adjusted return." },

    { id: "c13q5", chapter: 13, difficulty: "Medium", question: "A research report should disclose:", options: ["Only the target price", "The analyst's holdings, compensation links, and conflicts of interest", "Nothing about the analyst", "Only positive information"], answer: 1, explain: "Disclosures on interests, compensation, and conflicts are an essential part of report quality." },

    { id: "c14q11", chapter: 14, difficulty: "Easy", question: "Research analysts are registered and regulated under:", options: ["SEBI (Research Analysts) Regulations, 2014", "Companies Act, 1956", "RBI Act, 1934", "SCRA, 1956 only"], answer: 0, explain: "The SEBI (Research Analysts) Regulations, 2014 govern registration and conduct of RAs." },
    { id: "c14q12", chapter: 14, difficulty: "Easy", question: "The insurance sector in India is regulated by:", options: ["SEBI", "IRDAI", "PFRDA", "IBBI"], answer: 1, explain: "IRDAI regulates insurance; SEBI regulates securities markets." },
    { id: "c14q13", chapter: 14, difficulty: "Easy", question: "Pension funds in India are regulated by:", options: ["IRDAI", "PFRDA", "MCA", "IBBI"], answer: 1, explain: "PFRDA regulates pension funds and the NPS framework." },
    { id: "c14q14", chapter: 14, difficulty: "Medium", question: "CSCRF, referenced in the workbook, stands for:", options: ["Cyber Security and Cyber Resilience Framework", "Central Settlement and Clearing Reform Framework", "Capital Structure and Credit Rating Format", "Combined Surveillance and Compliance Reporting Form"], answer: 0, explain: "CSCRF is SEBI's Cyber Security and Cyber Resilience Framework for regulated entities." },
    { id: "c14q15", chapter: 14, difficulty: "Medium", question: "The SEBI Investor Charter mainly focuses on:", options: ["Investor rights, services, and grievance redressal", "Valuation multiples", "Technical indicators", "Bond duration"], answer: 0, explain: "The Investor Charter sets out investor rights, expected services, and complaint handling." },
    { id: "c14q16", chapter: 14, difficulty: "Medium", question: "The Securities Contracts (Regulation) Act, 1956 (SCRA) primarily deals with:", options: ["Regulation of securities contracts and recognition of stock exchanges", "Income tax on dividends", "Insurance claims", "Pension withdrawals"], answer: 0, explain: "SCRA governs securities contracts and the recognition and regulation of stock exchanges." },
    { id: "c14q17", chapter: 14, difficulty: "Medium", question: "ASM, an exchange surveillance mechanism, stands for:", options: ["Additional Surveillance Measure", "Annual Settlement Margin", "Automated Stock Matching", "Average Sales Multiple"], answer: 0, explain: "ASM (Additional Surveillance Measure) and GSM are exchange risk-control surveillance frameworks." },
    { id: "c14q18", chapter: 14, difficulty: "Hard", question: "To manage conflicts, a research analyst should NOT:", options: ["Disclose personal holdings", "Trade in a covered security contrary to or ahead of a recommendation", "Follow internal compliance procedures", "Maintain records"], answer: 1, explain: "Trading against or ahead of one's own recommendation (front-running) is prohibited." },
    { id: "c14q19", chapter: 14, difficulty: "Medium", question: "IBBI operates under which framework?", options: ["Insolvency and Bankruptcy Code", "SEBI Act only", "Banking Regulation Act", "FEMA"], answer: 0, explain: "The Insolvency and Bankruptcy Board of India is established under the Insolvency and Bankruptcy Code." },
    { id: "c14q20", chapter: 14, difficulty: "Medium", question: "The RA Code of Conduct requires an analyst to act with:", options: ["Integrity, independence, due skill and care", "Guaranteed return promises", "Selective disclosure to favoured clients", "Maximum personal trading"], answer: 0, explain: "The code stresses integrity, independence, professional skill, care, and avoidance of misrepresentation." },

    { id: "c15q16", chapter: 15, difficulty: "Easy", question: "An RSI value above 70 generally indicates the security is:", options: ["Oversold", "Overbought", "In no trend", "Illiquid"], answer: 1, explain: "RSI above 70 is conventionally overbought; below 30 is oversold." },
    { id: "c15q17", chapter: 15, difficulty: "Easy", question: "An RSI value below 30 generally indicates the security is:", options: ["Overbought", "Oversold", "Fairly valued", "Delisted"], answer: 1, explain: "RSI below 30 signals oversold conditions, though it can persist in strong downtrends." },
    { id: "c15q18", chapter: 15, difficulty: "Medium", question: "The MACD signal (slow) line is the:", options: ["12-period EMA of price", "26-period EMA of price", "9-period EMA of the MACD line", "Simple average of volume"], answer: 2, explain: "MACD line = 12 EMA - 26 EMA; the signal line is the 9-period EMA of that MACD line." },
    { id: "c15q19", chapter: 15, difficulty: "Medium", question: "An ADX value below 25 generally indicates:", options: ["A very strong trend", "A weak trend or no trend", "An overbought market", "High dividend yield"], answer: 1, explain: "ADX below 25 suggests a weak or absent trend; a rising ADX above 25 signals a strong trend." },
    { id: "c15q20", chapter: 15, difficulty: "Medium", question: "An RSC (Relative Strength Comparative) value above 100 indicates the stock is:", options: ["Underperforming the benchmark", "Outperforming the benchmark", "Overbought", "In a downtrend"], answer: 1, explain: "RSC is normalised to 100; above 100 means outperformance versus the benchmark, below 100 underperformance." },
    { id: "c15q21", chapter: 15, difficulty: "Medium", question: "OBV is usually interpreted together with its:", options: ["20-period moving average", "Face value", "Dividend yield", "Bid-ask spread"], answer: 0, explain: "OBV (OBV 1) is typically read against its 20-period average (OBV 20) for crossovers." },
    { id: "c15q22", chapter: 15, difficulty: "Medium", question: "A doji candlestick reflects:", options: ["Strong directional conviction", "Market indecision, with open and close nearly equal", "A guaranteed reversal", "High dividend"], answer: 1, explain: "A doji has open and close almost equal, signalling indecision between buyers and sellers." },
    { id: "c15q23", chapter: 15, difficulty: "Medium", question: "A shooting star appearing after an uptrend warns of a potential:", options: ["Bullish continuation", "Bearish reversal", "Bonus issue", "Liquidity increase"], answer: 1, explain: "A shooting star (small body, long upper shadow) after an advance is a bearish reversal warning." },
    { id: "c15q24", chapter: 15, difficulty: "Medium", question: "Dark cloud cover is a:", options: ["Bullish reversal pattern", "Bearish reversal pattern", "Continuation triangle", "Volume indicator"], answer: 1, explain: "Dark cloud cover is a two-candle bearish reversal pattern after an uptrend." },
    { id: "c15q25", chapter: 15, difficulty: "Medium", question: "A piercing pattern is a:", options: ["Bearish reversal pattern", "Bullish reversal pattern", "Trend-strength indicator", "Liquidity ratio"], answer: 1, explain: "The piercing pattern is a two-candle bullish reversal appearing after a decline." },
    { id: "c15q26", chapter: 15, difficulty: "Easy", question: "A line chart is plotted using mainly the:", options: ["Opening prices", "Closing prices", "High prices only", "Volume only"], answer: 1, explain: "Line charts connect closing prices to show the broad trend." },
    { id: "c15q27", chapter: 15, difficulty: "Medium", question: "Under Dow Theory, a secondary trend is:", options: ["The main long-term trend", "A corrective move against the primary trend", "A one-day move", "A volume spike"], answer: 1, explain: "Secondary trends are intermediate corrections within the larger primary trend." },
    { id: "c15q28", chapter: 15, difficulty: "Medium", caselet: "tech2", question: "An RSI reading of 78 indicates the stock is:", options: ["Oversold", "Overbought", "Trendless", "Fairly valued"], answer: 1, explain: "RSI above 70, here 78, marks an overbought condition." },
    { id: "c15q29", chapter: 15, difficulty: "Hard", caselet: "tech2", question: "Price making a higher high while RSI makes a lower high is:", options: ["A bullish divergence", "A bearish divergence and loss of upward momentum", "A confirmed uptrend", "A volume signal"], answer: 1, explain: "Higher price high with lower RSI high is a bearish divergence, an early sell warning." },
    { id: "c15q30", chapter: 15, difficulty: "Medium", caselet: "tech2", question: "ADX rising from 22 to 31 indicates:", options: ["A weakening trend", "A strengthening trend", "An overbought market", "Falling volume"], answer: 1, explain: "ADX rising through 25 toward 31 signals a strengthening trend." },
    { id: "c15q31", chapter: 15, difficulty: "Medium", caselet: "tech2", question: "With +DMI above -DMI and a rising ADX, the trend direction is:", options: ["Down", "Up", "Flat", "Undefined"], answer: 1, explain: "+DMI above -DMI with rising ADX indicates a strengthening uptrend." },

    { id: "c3q7", chapter: 3, difficulty: "Easy", numeric: true, question: "A company has 20 crore shares trading at Rs. 180. Its market capitalisation is:", options: ["Rs. 360 crore", "Rs. 1,800 crore", "Rs. 3,600 crore", "Rs. 7,200 crore"], answer: 2, explain: "Market cap = 180 x 20 crore = Rs. 3,600 crore." },
    { id: "c3q8", chapter: 3, difficulty: "Medium", numeric: true, question: "Market cap is Rs. 5,000 crore, total debt Rs. 1,200 crore, cash Rs. 200 crore. Enterprise value is:", options: ["Rs. 4,000 crore", "Rs. 5,000 crore", "Rs. 6,000 crore", "Rs. 6,400 crore"], answer: 2, explain: "EV = 5,000 + 1,200 - 200 = Rs. 6,000 crore (add debt, subtract cash)." },
    { id: "c3q9", chapter: 3, difficulty: "Easy", numeric: true, question: "PAT is Rs. 240 crore and there are 60 crore equity shares. EPS is:", options: ["Rs. 2", "Rs. 4", "Rs. 6", "Rs. 8"], answer: 1, explain: "EPS = 240 / 60 = Rs. 4 per share." },
    { id: "c3q10", chapter: 3, difficulty: "Easy", numeric: true, question: "A share trades at Rs. 480 with EPS of Rs. 24. The P/E ratio is:", options: ["10x", "15x", "20x", "24x"], answer: 2, explain: "P/E = 480 / 24 = 20x." },
    { id: "c3q11", chapter: 3, difficulty: "Medium", numeric: true, question: "A bond with face value Rs. 1,000 and 8% coupon trades at Rs. 800. Its current yield is:", options: ["8.0%", "9.0%", "10.0%", "12.5%"], answer: 2, explain: "Annual coupon = 8% of 1,000 = Rs. 80. Current yield = 80 / 800 = 10%." },

    { id: "c8q24", chapter: 8, difficulty: "Easy", numeric: true, question: "Sales Rs. 1,500 crore, EBITDA Rs. 300 crore. EBITDA margin is:", options: ["15%", "20%", "25%", "30%"], answer: 1, explain: "EBITDA margin = 300 / 1,500 = 20%." },
    { id: "c8q25", chapter: 8, difficulty: "Easy", numeric: true, question: "Sales Rs. 1,500 crore, PAT Rs. 120 crore. PAT margin is:", options: ["6%", "8%", "10%", "12%"], answer: 1, explain: "PAT margin = 120 / 1,500 = 8%." },
    { id: "c8q26", chapter: 8, difficulty: "Easy", numeric: true, question: "PAT Rs. 150 crore, average net worth Rs. 750 crore. ROE is:", options: ["15%", "18%", "20%", "25%"], answer: 2, explain: "ROE = 150 / 750 = 20%." },
    { id: "c8q27", chapter: 8, difficulty: "Medium", numeric: true, question: "EBIT Rs. 200 crore, capital employed Rs. 1,600 crore. ROCE is:", options: ["10.0%", "12.5%", "15.0%", "20.0%"], answer: 1, explain: "ROCE = 200 / 1,600 = 12.5%." },
    { id: "c8q28", chapter: 8, difficulty: "Easy", numeric: true, question: "Total debt Rs. 900 crore, net worth Rs. 600 crore. Debt-to-equity is:", options: ["0.67x", "1.00x", "1.50x", "2.00x"], answer: 2, explain: "D/E = 900 / 600 = 1.5x (more debt than equity, on the riskier side)." },
    { id: "c8q29", chapter: 8, difficulty: "Easy", numeric: true, question: "EBIT Rs. 240 crore, interest expense Rs. 60 crore. Interest coverage is:", options: ["2x", "3x", "4x", "5x"], answer: 2, explain: "Interest coverage = 240 / 60 = 4x." },
    { id: "c8q30", chapter: 8, difficulty: "Easy", numeric: true, question: "Current assets Rs. 600 crore, current liabilities Rs. 300 crore. Current ratio is:", options: ["0.5x", "1.0x", "1.5x", "2.0x"], answer: 3, explain: "Current ratio = 600 / 300 = 2.0x." },
    { id: "c8q31", chapter: 8, difficulty: "Medium", numeric: true, question: "Current assets Rs. 600 crore, inventory Rs. 150 crore, current liabilities Rs. 300 crore. Quick ratio is:", options: ["1.0x", "1.5x", "2.0x", "2.5x"], answer: 1, explain: "Quick ratio = (600 - 150) / 300 = 450 / 300 = 1.5x." },
    { id: "c8q32", chapter: 8, difficulty: "Easy", numeric: true, question: "Net sales Rs. 2,400 crore, total assets Rs. 1,200 crore. Asset turnover is:", options: ["0.5x", "1.0x", "1.5x", "2.0x"], answer: 3, explain: "Asset turnover = 2,400 / 1,200 = 2.0x." },
    { id: "c8q33", chapter: 8, difficulty: "Medium", numeric: true, question: "Sales Rs. 1,000 crore, inventory Rs. 200 crore. Inventory turnover is:", options: ["2x", "4x", "5x", "10x"], answer: 2, explain: "Inventory turnover = 1,000 / 200 = 5x." },
    { id: "c8q34", chapter: 8, difficulty: "Hard", numeric: true, question: "Using DuPont: net profit margin 10%, asset turnover 1.5x, equity multiplier 2x. ROE is:", options: ["15%", "20%", "25%", "30%"], answer: 3, explain: "ROE = 10% x 1.5 x 2 = 30%." },
    { id: "c8q35", chapter: 8, difficulty: "Medium", numeric: true, question: "Revenue Rs. 1,200 crore, average accounts receivable Rs. 150 crore. Receivables turnover is:", options: ["6x", "8x", "10x", "12x"], answer: 1, explain: "Receivables turnover = 1,200 / 150 = 8x (higher means faster collection)." },

    { id: "c9q12", chapter: 9, difficulty: "Easy", numeric: true, question: "In a 2-for-1 stock split, an investor holding 300 shares will hold:", options: ["150", "300", "600", "900"], answer: 2, explain: "A 2-for-1 split doubles the share count: 300 becomes 600 (face value and price halve)." },
    { id: "c9q13", chapter: 9, difficulty: "Medium", numeric: true, question: "A 1:5 rights issue is offered. An investor holding 500 shares can subscribe to how many rights shares?", options: ["50", "100", "125", "250"], answer: 1, explain: "1:5 means one new share for every five held: 500 / 5 = 100 shares." },
    { id: "c9q14", chapter: 9, difficulty: "Hard", numeric: true, question: "Hold 500 shares at Rs. 200 (cum-rights); a 1:5 rights issue is priced at Rs. 120. The theoretical ex-rights price (TERP) is about:", options: ["Rs. 160.00", "Rs. 180.00", "Rs. 186.67", "Rs. 200.00"], answer: 2, explain: "TERP = (500 x 200 + 100 x 120) / 600 = (1,00,000 + 12,000) / 600 = Rs. 186.67." },
    { id: "c9q15", chapter: 9, difficulty: "Easy", numeric: true, question: "A company with 100 crore shares buys back and extinguishes 10 crore shares. Shares outstanding become:", options: ["80 crore", "90 crore", "100 crore", "110 crore"], answer: 1, explain: "Buyback reduces share count: 100 - 10 = 90 crore shares." },

    { id: "c10q24", chapter: 10, difficulty: "Medium", numeric: true, question: "Rf 7%, beta 1.5, expected market return 13%. CAPM cost of equity is:", options: ["13.0%", "14.5%", "16.0%", "19.5%"], answer: 2, explain: "Ke = 7% + 1.5 x (13% - 7%) = 7% + 9% = 16%." },
    { id: "c10q25", chapter: 10, difficulty: "Hard", numeric: true, question: "Ke 16%, equity weight 50%, pre-tax cost of debt 12%, debt weight 50%, tax 25%. WACC is:", options: ["10.0%", "12.5%", "14.0%", "16.0%"], answer: 1, explain: "WACC = 16% x 0.5 + 12% x (1 - 0.25) x 0.5 = 8% + 4.5% = 12.5%." },
    { id: "c10q26", chapter: 10, difficulty: "Medium", numeric: true, question: "Expected dividend next year Rs. 5, cost of equity 15%, growth 5%. Gordon model fair value is:", options: ["Rs. 33.33", "Rs. 50.00", "Rs. 66.67", "Rs. 100.00"], answer: 1, explain: "P0 = 5 / (0.15 - 0.05) = 5 / 0.10 = Rs. 50." },
    { id: "c10q27", chapter: 10, difficulty: "Easy", numeric: true, question: "Pre-tax cost of debt 10%, tax rate 30%. After-tax cost of debt is:", options: ["3%", "7%", "10%", "13%"], answer: 1, explain: "After-tax cost of debt = 10% x (1 - 0.30) = 7%." },
    { id: "c10q28", chapter: 10, difficulty: "Medium", numeric: true, question: "P/E ratio 24, expected earnings growth 12%. PEG ratio is:", options: ["0.5", "1.0", "2.0", "2.9"], answer: 2, explain: "PEG = 24 / 12 = 2.0." },
    { id: "c10q29", chapter: 10, difficulty: "Easy", numeric: true, question: "EPS Rs. 20, price Rs. 250. Earnings yield is:", options: ["6%", "8%", "10%", "12.5%"], answer: 1, explain: "Earnings yield = 20 / 250 = 8% (and P/E = 12.5x is its reciprocal)." },
    { id: "c10q30", chapter: 10, difficulty: "Medium", numeric: true, question: "Enterprise value Rs. 4,500 crore, EBITDA Rs. 500 crore. EV/EBITDA is:", options: ["7x", "9x", "10x", "12x"], answer: 1, explain: "EV/EBITDA = 4,500 / 500 = 9x." },
    { id: "c10q31", chapter: 10, difficulty: "Hard", numeric: true, question: "FCFF next year Rs. 80 crore, WACC 12%, perpetual growth 4%. Firm value is:", options: ["Rs. 667 crore", "Rs. 800 crore", "Rs. 1,000 crore", "Rs. 1,600 crore"], answer: 2, explain: "Firm value = 80 / (0.12 - 0.04) = 80 / 0.08 = Rs. 1,000 crore." },

    { id: "c12q16", chapter: 12, difficulty: "Medium", numeric: true, question: "An investment grows from Rs. 2,00,000 to Rs. 2,42,000 in 2 years. CAGR is:", options: ["7%", "10%", "12%", "21%"], answer: 1, explain: "2,42,000 / 2,00,000 = 1.21 = 1.1^2, so CAGR = 10%." },
    { id: "c12q17", chapter: 12, difficulty: "Easy", numeric: true, question: "Buy a share at Rs. 100, sell at Rs. 115, and receive Rs. 5 dividend. Holding period return is:", options: ["10%", "15%", "20%", "25%"], answer: 2, explain: "HPR = (115 - 100 + 5) / 100 = 20%." },
    { id: "c12q18", chapter: 12, difficulty: "Medium", numeric: true, question: "Portfolio return 15%, risk-free rate 7%, standard deviation 16%. Sharpe ratio is:", options: ["0.25", "0.50", "0.75", "1.00"], answer: 1, explain: "Sharpe = (15% - 7%) / 16% = 8 / 16 = 0.50." },
    { id: "c12q19", chapter: 12, difficulty: "Medium", numeric: true, question: "Scenarios: 40% chance of 25%, 40% chance of 10%, 20% chance of -10%. Expected return is:", options: ["8%", "10%", "12%", "14%"], answer: 2, explain: "0.4 x 25% + 0.4 x 10% + 0.2 x (-10%) = 10% + 4% - 2% = 12%." },
    { id: "c12q20", chapter: 12, difficulty: "Medium", numeric: true, question: "An investment grows from Rs. 1,00,000 to Rs. 1,33,100 in 3 years. CAGR is:", options: ["9%", "10%", "11%", "33%"], answer: 1, explain: "1,33,100 / 1,00,000 = 1.331 = 1.1^3, so CAGR = 10%." },

    { id: "c14q21", chapter: 14, difficulty: "Medium", question: "Per the Investor Charter, a research analyst should try to redress an investor grievance within:", options: ["7 days", "21 days", "45 days", "90 days"], answer: 1, explain: "The RA should strive to redress grievances immediately, but not later than 21 days of receipt." },
    { id: "c14q22", chapter: 14, difficulty: "Easy", question: "SEBI's centralized web-based grievance redressal system is:", options: ["SCORES", "SMARTODR", "CeFCoM", "RAASB"], answer: 0, explain: "SCORES (now SCORES 2.0) is SEBI's centralized online complaint-handling system." },
    { id: "c14q23", chapter: 14, difficulty: "Medium", question: "Complaints against a research analyst get a first-level review by:", options: ["RAASB", "IRDAI", "RBI", "The stock exchange board"], answer: 0, explain: "RAASB (Research Analyst Administration and Supervisory Body) does the first review; SEBI does the second." },
    { id: "c14q24", chapter: 14, difficulty: "Medium", question: "If unsatisfied with the resolution, an investor can seek online conciliation or arbitration through:", options: ["SMARTODR", "GSM", "ASM", "CSCRF"], answer: 0, explain: "SMARTODR is the online dispute resolution platform for unresolved complaints." },
    { id: "c14q25", chapter: 14, difficulty: "Medium", question: "A research analyst must disclose to clients the extent of use of which tools in providing research?", options: ["Spreadsheet macros", "Artificial Intelligence (AI) tools", "Charting software", "Email clients"], answer: 1, explain: "The Investor Charter requires disclosure of the extent of use of AI tools in research services." },
    { id: "c14q26", chapter: 14, difficulty: "Easy", question: "The vision in the Research Analyst Investor Charter is:", options: ["Maximum returns guaranteed", "Invest with knowledge and safety", "Trade more, earn more", "Beat the index every year"], answer: 1, explain: "The Investor Charter vision is 'Invest with knowledge and safety'." },
    { id: "c14q27", chapter: 14, difficulty: "Medium", question: "How often must a research analyst conduct a compliance audit?", options: ["Monthly", "Quarterly", "Annually", "Only once at registration"], answer: 2, explain: "An RA must conduct an audit annually as part of compliance obligations." },
    { id: "c14q28", chapter: 14, difficulty: "Easy", question: "Which is a 'Don't' for an investor dealing with a research analyst?", options: ["Check the SEBI registration number", "Pay through banking channels", "Provide investment funds to the RA", "Read the disclosures in the report"], answer: 2, explain: "Investors should never hand investment funds (or trading/demat login credentials) to the RA." },
    { id: "c14q29", chapter: 14, difficulty: "Hard", question: "CeFCoM, operated under RAASB, is used for:", options: ["Centralized fee collection from clients", "Cyber incident reporting", "Surveillance of stocks", "Rating of bonds"], answer: 0, explain: "CeFCoM is the Centralized Fee Collection Mechanism through which fee-paying clients can pay the RA." },
    { id: "c14q30", chapter: 14, difficulty: "Medium", question: "If a research analyst offers assured or guaranteed returns, the investor should:", options: ["Invest immediately", "Inform SEBI", "Pay a higher fee", "Share demat login"], answer: 1, explain: "Guaranteed/assured returns are a red flag; investors should report such RAs to SEBI." },

    { id: "c14q31", chapter: 14, difficulty: "Medium", question: "The Barings Bank collapse (Nick Leeson) is primarily a lesson in:", options: ["Operational risk and weak internal controls", "Dividend policy", "Bond duration", "Stock splits"], answer: 0, explain: "One trader controlling both front and back office, with unchecked position limits, caused an operational-risk failure." },
    { id: "c14q32", chapter: 14, difficulty: "Medium", question: "A key control lesson from Barings is to:", options: ["Merge front and back office under one person", "Separate front and back office and monitor position limits", "Avoid all derivatives", "Remove all margins"], answer: 1, explain: "Separating front and back office and rigorously monitoring position limits prevents hidden, unauthorized exposures." },
    { id: "c14q33", chapter: 14, difficulty: "Medium", question: "Satyam, Enron, and WorldCom are most associated with:", options: ["Accounting fraud and financial misstatement", "Excellent governance", "Bond defaults due to rate rises", "Commodity hedging"], answer: 0, explain: "All three involved manipulated/inflated financial statements, underscoring governance and accounting-quality checks." },
    { id: "c14q34", chapter: 14, difficulty: "Medium", question: "The Michael Milken and Raj Rajaratnam (Galleon) cases relate to:", options: ["Insider trading", "Stock splits", "Rights issues", "Dividend yield"], answer: 0, explain: "Both were convicted in insider-trading matters, reinforcing why UPSI must never be used or shared." },
    { id: "c12q21", chapter: 12, difficulty: "Medium", question: "The 2008 credit crisis showed the danger of:", options: ["Diluting risk management and moral hazard in lending", "Paying dividends", "Holding too much cash", "Using EV/EBITDA"], answer: 0, explain: "Banks loosened loan-to-value and credit standards, and originate-to-sell created moral hazard and systemic risk." },
    { id: "c12q22", chapter: 12, difficulty: "Hard", question: "A lesson from the 2008 mortgage crisis for analysts is to:", options: ["Rely only on credit rating agencies", "Do independent due diligence and ask 'what could go wrong'", "Assume asset prices only rise", "Ignore historical data entirely"], answer: 1, explain: "AAA-rated mortgage securities still failed; independent analysis and downside thinking are essential." }
  ]
};
