window.STUDY_LESSONS = {
  1: {
    intro: "This chapter is small in marks, but it sets the professional frame for the entire exam. Think of a research analyst as someone who turns scattered information into a defensible investment opinion.",
    modules: [
      {
        title: "What a research analyst actually does",
        teach: [
          "The analyst does three connected jobs: gathers information, analyses that information, and communicates a view. If any one part is missing, the work is incomplete.",
          "Information can come from annual reports, exchange filings, RBI or government data, industry sources, management calls, competitors, customers, and public databases.",
          "The final output may be a buy, hold, sell, accumulate, reduce, outperform, or underperform view, but the exam cares more about the process than the label."
        ],
        example: "If an analyst studies an auto company, they will look at GDP growth, interest rates, fuel prices, raw material cost, market share, capacity use, financial statements, and valuation before writing a view.",
        exam: "Do not choose options that say the RA only collects data or only analyses data. The role combines both and leads to an investment view."
      },
      {
        title: "Sell-side vs buy-side",
        teach: [
          "Sell-side analysts usually work for brokers or investment banks and publish research for clients or the public.",
          "Buy-side analysts work for investors such as mutual funds, portfolio managers, pension funds, or AIFs. Their work is normally used internally for investment decisions.",
          "Both need research skill, but their audience and incentive structure are different."
        ],
        example: "A broker report on TCS available to clients is sell-side research. An internal note prepared by a mutual fund analyst for a fund manager is buy-side research.",
        exam: "If a question says the report is published with a recommendation and target price, think sell-side."
      },
      {
        title: "Professional conduct in company interaction",
        teach: [
          "Analysts can speak to management, suppliers, distributors, competitors, and experts, but they must avoid unpublished price-sensitive information.",
          "They should prepare clear questions, check management claims against public evidence, and keep independence of view.",
          "A good analyst does not become a spokesperson for the company."
        ],
        example: "Asking management about publicly announced capacity expansion is acceptable. Asking for next quarter's unpublished profit before results is not acceptable.",
        exam: "Independence, neutrality, confidentiality, and clarity of questions are the key phrases."
      }
    ],
    drill: [
      "Explain RA work in one sentence without using the word prediction.",
      "Give one example each of sell-side and buy-side research.",
      "List two questions an analyst may ask management and one question they should not ask."
    ]
  },
  2: {
    intro: "This chapter teaches the market map: products, participants, market segments, and transaction types. Treat it like learning the layout of the securities market.",
    modules: [
      {
        title: "Primary vs secondary market",
        teach: [
          "The primary market is where issuers raise capital by issuing securities. The money generally goes to the issuer.",
          "The secondary market is where existing securities trade between investors. The company usually does not receive money from normal secondary trades.",
          "Primary market examples include IPOs, FPOs, rights issues, and private placements. Secondary market examples include trades on NSE or BSE."
        ],
        example: "If a company sells new shares in an IPO, it is primary market activity. If you later buy those shares from another investor on NSE, it is secondary market activity.",
        exam: "When the question says 'issuer raises funds', choose primary market."
      },
      {
        title: "Securities and product types",
        teach: [
          "Equity gives ownership interest and residual claim. Debt gives a contractual claim such as interest and principal repayment.",
          "Mutual fund units represent ownership in a pooled investment scheme. ETFs are funds that trade on the exchange like shares.",
          "Derivatives derive value from an underlying asset. Futures and forwards create obligations; options give the buyer a right but not an obligation."
        ],
        example: "Buying a call option gives the right to buy the underlying at a strike price. Buying a futures contract creates an obligation to transact under contract terms.",
        exam: "The words 'right but not obligation' almost always point to options."
      },
      {
        title: "Participants and infrastructure",
        teach: [
          "Stock exchanges provide the trading platform. Clearing corporations handle clearing and settlement. Depositories hold securities in electronic form.",
          "Brokers connect investors to the exchange. Depository participants connect investors to the depository.",
          "Institutional participants include mutual funds, insurance companies, FPIs, pension funds, banks, and AIFs."
        ],
        example: "Your broker helps place the order, the exchange matches it, the clearing corporation settles it, and the depository records securities in demat form.",
        exam: "Do not mix up broker, exchange, clearing corporation, depository, and depository participant."
      },
      {
        title: "Trading, hedging, speculation, and arbitrage",
        teach: [
          "Trading is buying and selling securities. Speculation is taking a price view with risk. Hedging is reducing risk in an existing exposure.",
          "Arbitrage tries to profit from price differences in related instruments or markets.",
          "Pledging shares means using shares as collateral, often for borrowing."
        ],
        example: "An importer buying USD futures to protect against rupee depreciation is hedging. Buying a stock only because you expect it to rise tomorrow is speculation.",
        exam: "Hedging reduces exposure; speculation creates exposure; arbitrage exploits mispricing."
      }
    ],
    drill: [
      "Make a table: equity, debt, mutual fund, ETF, future, option.",
      "Write one example of primary market and one of secondary market.",
      "Explain why a futures buyer and seller both have obligations."
    ]
  },
  3: {
    intro: "This chapter is terminology-heavy. The fastest way to learn it is to connect each term to a formula or a practical use.",
    modules: [
      {
        title: "Equity value terms",
        teach: [
          "Face value is the nominal value printed in the company's capital structure. It is not the same as market price.",
          "Book value is accounting net worth. Market value is what investors currently pay in the market.",
          "Intrinsic value is the analyst's estimate of fair value based on future cash flows, assets, earnings, and risk."
        ],
        example: "A share can have face value Rs. 10, book value Rs. 80, market price Rs. 240, and intrinsic value estimated by an analyst at Rs. 210.",
        exam: "Do not assume face value, book value, market value, and intrinsic value are equal."
      },
      {
        title: "Market cap vs enterprise value",
        teach: [
          "Market capitalisation is the value of equity: share price multiplied by number of shares.",
          "Enterprise value is closer to the value of the entire business for all capital providers. It adds debt and subtracts cash.",
          "Use market cap when focusing only on equity. Use EV when comparing companies with different debt levels."
        ],
        example: "Two firms can have the same market cap, but the one with much higher debt has a higher enterprise value.",
        exam: "EV is usually better for firm-level multiples like EV/EBITDA and EV/Sales."
      },
      {
        title: "Debt market terms",
        teach: [
          "Coupon is the stated interest payment. Maturity is the date when principal is due.",
          "Current yield is annual coupon divided by current market price. It does not include redemption gain or loss.",
          "YTM is the return if the bond is held to maturity and cash flows occur as expected."
        ],
        example: "A Rs. 1,000 bond with 10 percent coupon pays Rs. 100 per year. If it trades at Rs. 900, current yield is 100/900 = 11.11 percent.",
        exam: "If market interest rates rise, existing fixed-rate bond prices generally fall."
      },
      {
        title: "Duration intuition",
        teach: [
          "Duration measures interest-rate sensitivity. It is not just the number of years to maturity.",
          "Longer maturity increases duration. Lower coupon increases duration because more cash flow comes later.",
          "Higher duration means the bond price is more sensitive to interest-rate changes."
        ],
        example: "A 10-year zero-coupon bond has higher duration than a 10-year high-coupon bond because all cash flow comes at maturity.",
        exam: "Higher maturity plus lower coupon equals higher duration and higher interest-rate risk."
      }
    ],
    drill: [
      "Calculate market cap for 10 crore shares at Rs. 250.",
      "Explain why EV can be higher than market cap.",
      "Name two reasons a bond may trade below face value."
    ]
  },
  4: {
    intro: "This chapter explains what research means in investment decision-making. It also separates legal analysis from illegal use of inside information.",
    modules: [
      {
        title: "Investing vs speculation",
        teach: [
          "Investing is a disciplined activity where expected return is judged against risk and time horizon.",
          "Speculation is a shorter-term price call, often with less focus on intrinsic value and sometimes with leverage.",
          "Both involve uncertainty, but the exam treats investing as more research-driven."
        ],
        example: "Buying a stock after estimating its fair value and margin of safety is investing. Buying because a price may jump tomorrow is speculation.",
        exam: "Look for words like disciplined, long term, analysis, and wealth creation for investment."
      },
      {
        title: "Mosaic analysis vs insider information",
        teach: [
          "Mosaic analysis combines public information, industry checks, and analyst judgment to form a view.",
          "Insider information involves unpublished price-sensitive information. Trading on it or passing it on is prohibited.",
          "Analysts must build insight from legal information sources."
        ],
        example: "Using public sales data, channel checks, annual reports, and management's public call transcript is mosaic analysis.",
        exam: "If information is unpublished and price-sensitive, the safe answer is to avoid using it."
      },
      {
        title: "Research approaches",
        teach: [
          "Fundamental analysis studies business value using economy, industry, company, financial statements, and valuation.",
          "Technical analysis studies price and volume to understand trend, momentum, support, and resistance.",
          "Quantitative research uses models and data patterns. Behavioural investing studies investor biases and market psychology."
        ],
        example: "A discounted cash flow model is fundamental. RSI and moving averages are technical. A statistical factor model is quantitative.",
        exam: "Do not confuse technical analysis with fundamental valuation."
      }
    ],
    drill: [
      "Write one legal source and one illegal source of information.",
      "Classify DCF, RSI, and factor model by research approach.",
      "Explain mosaic analysis in your own words."
    ]
  },
  5: {
    intro: "Economic analysis tells you the background conditions in which industries and companies operate. The exam usually tests cause and effect.",
    modules: [
      {
        title: "Micro vs macro",
        teach: [
          "Microeconomics studies individual consumers, firms, demand, supply, pricing, and competition.",
          "Macroeconomics studies the whole economy: GDP, inflation, unemployment, interest rates, exchange rates, fiscal policy, and monetary policy.",
          "Research analysts need both because a company is affected by its own business choices and the broader economy."
        ],
        example: "A cement company is affected by micro factors like local competition and macro factors like infrastructure spending and interest rates.",
        exam: "GDP, inflation, interest rate, unemployment, and exchange rate are macro variables."
      },
      {
        title: "Fiscal and monetary policy",
        teach: [
          "Fiscal policy comes from the government through spending, taxation, and borrowing.",
          "Monetary policy comes from the central bank through interest rates, liquidity, and money supply.",
          "Both influence demand, inflation, cost of capital, and market valuations."
        ],
        example: "Higher government infrastructure spending can support cement and capital goods. Higher policy rates can hurt rate-sensitive sectors.",
        exam: "Government equals fiscal. RBI or central bank equals monetary."
      },
      {
        title: "Inflation, rates, and equity markets",
        teach: [
          "Inflation raises input costs and can reduce purchasing power. Companies with pricing power manage it better.",
          "Higher interest rates increase discount rates and borrowing costs. That can reduce valuation multiples.",
          "Lower rates can support credit growth and valuations, but may also signal weak demand if cut during stress."
        ],
        example: "A highly leveraged company suffers more when interest rates rise because interest expense increases or refinancing becomes expensive.",
        exam: "Always ask: does this variable affect demand, cost, currency, interest expense, or valuation?"
      },
      {
        title: "Secular, cyclical, and seasonal trends",
        teach: [
          "Secular trends are long-term structural shifts, such as digitisation or premiumisation.",
          "Cyclical trends move with the economic cycle, such as demand for metals or autos.",
          "Seasonal trends repeat during parts of the year, such as festival demand or monsoon-linked agriculture."
        ],
        example: "Air-conditioner sales rising every summer is seasonal. Electric vehicle adoption over many years is secular.",
        exam: "Do not label every repeated pattern as cyclical. If it happens at the same time each year, it is seasonal."
      }
    ],
    drill: [
      "Classify: higher repo rate, weak rupee, rising CPI, festival demand.",
      "Name two sectors helped by lower interest rates.",
      "Explain why FPI flows affect markets faster than FDI."
    ]
  },
  6: {
    intro: "Industry analysis is where you decide whether a company is swimming with the tide or against it. It is 8 marks, so frameworks and examples matter.",
    modules: [
      {
        title: "Why industry analysis comes before company analysis",
        teach: [
          "A strong company in a structurally weak industry may struggle. An average company in a booming industry may temporarily look strong.",
          "Industry analysis looks at demand growth, profitability, competitive intensity, regulation, technology, and entry barriers.",
          "It helps the analyst avoid judging a company only by its past numbers."
        ],
        example: "A newspaper company may have good management, but the industry can face value migration toward digital advertising platforms.",
        exam: "Industry growth is useful, but sustainable returns depend on industry structure."
      },
      {
        title: "Porter's Five Forces",
        teach: [
          "The five forces are rivalry, threat of new entrants, threat of substitutes, bargaining power of buyers, and bargaining power of suppliers.",
          "High rivalry, low entry barriers, powerful buyers, powerful suppliers, and many substitutes usually reduce industry attractiveness.",
          "The framework helps explain why some sectors earn high returns for long periods while others do not."
        ],
        example: "Airlines often face intense rivalry, high fuel supplier exposure, price-sensitive buyers, and limited switching costs, making returns difficult.",
        exam: "If a question asks industry attractiveness, Porter's framework is usually relevant."
      },
      {
        title: "PESTLE and external environment",
        teach: [
          "PESTLE stands for Political, Economic, Socio-cultural, Technological, Legal, and Environmental factors.",
          "It is useful when external non-company factors can reshape an industry.",
          "Regulation, consumer behaviour, climate rules, technology shifts, and tax policy can all change industry economics."
        ],
        example: "Electric vehicle adoption depends on technology, government incentives, charging infrastructure, environmental policy, and consumer acceptance.",
        exam: "PESTLE is broader than Porter's competitive forces."
      },
      {
        title: "BCG matrix",
        teach: [
          "BCG classifies business segments using market growth and relative market share.",
          "Stars have high growth and high share. Cash cows have low growth and high share. Question marks have high growth and low share. Dogs have low growth and low share.",
          "The tool helps think about capital allocation within a diversified company."
        ],
        example: "A dominant product in a mature market may be a cash cow: it may not grow fast, but it can generate cash.",
        exam: "High growth plus high share equals star."
      },
      {
        title: "Industry KPIs",
        teach: [
          "Every industry has different operating drivers. A bank is not analysed with the same KPIs as a hotel or telecom company.",
          "Good analysts link KPIs to revenue, cost, capacity, and margins.",
          "KPI selection is often tested through matching questions."
        ],
        example: "Telecom: ARPU and subscriber base. Hotel: occupancy and average room rate. Airline: load factor and yield. Bank: NIM, GNPA, CASA.",
        exam: "Memorise at least one KPI each for banking, telecom, airlines, hotels, retail, cement, IT, and FMCG."
      }
    ],
    drill: [
      "Apply Porter's forces to the airline industry.",
      "Classify a high-share mature product in BCG.",
      "Write three KPIs for banking and three for telecom."
    ]
  },
  7: {
    intro: "This chapter teaches qualitative company analysis: what the business is, why it wins, whether management can be trusted, and what can go wrong.",
    modules: [
      {
        title: "Business model",
        teach: [
          "A business model explains how the company earns money, who pays it, what costs it incurs, and what capital it needs.",
          "Two companies in the same sector may have different business models and therefore different risk and return profiles.",
          "The analyst should understand revenue drivers, cost drivers, working capital, capital intensity, and scalability."
        ],
        example: "A software services company earns through employee billing and margins; a platform company may earn commissions with lower incremental cost.",
        exam: "Before ratios, ask: how does this business actually make money?"
      },
      {
        title: "Competitive advantage and pricing power",
        teach: [
          "Competitive advantage can come from brand, patents, distribution, scale, cost leadership, network effects, switching costs, regulation, or location.",
          "Pricing power means the company can raise prices without losing too much demand.",
          "Sustainable advantage is more valuable than temporary growth."
        ],
        example: "A strong consumer brand may pass raw material inflation to customers better than a commodity producer.",
        exam: "Moat and pricing power usually support margins and valuation premium."
      },
      {
        title: "SWOT analysis",
        teach: [
          "Strengths and weaknesses are usually internal to the company.",
          "Opportunities and threats are usually external to the company.",
          "A useful SWOT is specific. Generic statements such as 'good management' or 'high competition' are weak unless explained."
        ],
        example: "For an export IT company, a weak rupee may be an opportunity, while rising attrition may be a weakness.",
        exam: "Internal equals strength or weakness. External equals opportunity or threat."
      },
      {
        title: "Management and governance",
        teach: [
          "Management quality is assessed through execution track record, capital allocation, transparency, communication, and treatment of minority shareholders.",
          "Governance analysis checks board independence, related-party transactions, promoter pledges, accounting quality, and disclosures.",
          "A good business with poor governance can still be a bad investment."
        ],
        example: "Frequent related-party transactions at non-transparent prices are a governance concern even if revenue is growing.",
        exam: "Promoter holding alone is not enough. Alignment and governance behaviour matter."
      }
    ],
    drill: [
      "Write a SWOT for a listed bank or FMCG company.",
      "List five governance red flags.",
      "Explain pricing power using one real-life product."
    ]
  },
  8: {
    intro: "This is one of the most important chapters. Learn it as a story: balance sheet shows position, P&L shows performance, cash flow shows cash reality, and ratios connect everything.",
    modules: [
      {
        title: "Three financial statements",
        teach: [
          "The balance sheet shows what the company owns and owes at a specific date. Assets equal liabilities plus equity.",
          "The profit and loss account shows revenue, expenses, and profit over a period.",
          "The cash flow statement explains cash generated or used in operating, investing, and financing activities."
        ],
        example: "A company can show profit in the P&L but still have weak operating cash flow if customers are not paying on time.",
        exam: "Balance sheet is point-in-time. P&L and cash flow are period statements."
      },
      {
        title: "Quality of earnings",
        teach: [
          "High-quality earnings are supported by cash flow, recurring operations, reasonable accounting policies, and transparent notes.",
          "Low-quality earnings may come from one-off gains, aggressive revenue recognition, capitalising expenses, or weak receivable collection.",
          "Analysts read notes to accounts and audit reports to judge accounting quality."
        ],
        example: "If PAT rises because of a one-time asset sale, it should not be treated the same as recurring operating profit.",
        exam: "Always separate recurring operating profit from one-off gains."
      },
      {
        title: "Profitability ratios",
        teach: [
          "EBITDA margin shows operating profitability before depreciation, interest, and tax.",
          "PAT margin shows final profit after all expenses and tax.",
          "Margins should be compared over time and against peers, not judged in isolation."
        ],
        example: "If sales are Rs. 1,000 crore and EBITDA is Rs. 220 crore, EBITDA margin is 22 percent.",
        exam: "Margin means profit measure divided by sales."
      },
      {
        title: "Return ratios",
        teach: [
          "ROE shows return generated on shareholders' net worth. ROCE shows return generated on total capital employed.",
          "ROE can be boosted by leverage, so compare it with debt levels.",
          "ROCE is useful when comparing businesses with different financing structures."
        ],
        example: "A company with 25 percent ROE and very high debt may be riskier than one with 18 percent ROE and low debt.",
        exam: "High ROE is good only if it is not produced by dangerous leverage or poor accounting."
      },
      {
        title: "Leverage and liquidity",
        teach: [
          "Debt-to-equity measures leverage. Interest coverage measures ability to pay interest from operating profit.",
          "Current ratio and quick ratio measure short-term liquidity.",
          "A company can be profitable but still financially stressed if liquidity and coverage are weak."
        ],
        example: "Interest coverage of 1.2x means EBIT barely covers interest. That is much weaker than 5x coverage.",
        exam: "Interest coverage = EBIT / interest expense."
      },
      {
        title: "Efficiency and DuPont",
        teach: [
          "Efficiency ratios show how well the company uses assets, inventory, receivables, and payables.",
          "DuPont analysis breaks ROE into net margin, asset turnover, and financial leverage.",
          "This tells whether ROE changed because of profitability, asset use, or leverage."
        ],
        example: "If ROE rises only because leverage increased, the improvement may be lower quality than ROE rising because margins improved.",
        exam: "DuPont = margin x asset turnover x leverage."
      }
    ],
    drill: [
      "Calculate EBITDA margin, PAT margin, ROE, ROCE, interest coverage, current ratio, and quick ratio from one company.",
      "Find one example where profit rises but operating cash flow falls.",
      "Explain DuPont ROE in one line."
    ]
  },
  9: {
    intro: "Corporate actions change the number of shares, cash flows to investors, ownership rights, or capital structure. Most questions test the difference between similar actions.",
    modules: [
      {
        title: "Dividend, bonus, and split",
        teach: [
          "A dividend distributes cash or profit to shareholders. It reduces company cash.",
          "A bonus issue gives additional shares to existing shareholders without payment, usually by capitalising reserves.",
          "A stock split reduces face value and increases share count proportionately. Economic ownership does not change just because of the split."
        ],
        example: "In a 1:1 bonus, 100 shares become 200 shares. Ignoring market movement, price roughly halves.",
        exam: "Bonus and split both increase share count, but the accounting reason is different."
      },
      {
        title: "Rights issue and buyback",
        teach: [
          "A rights issue offers existing shareholders the right to buy new shares, usually in a fixed ratio and price.",
          "A buyback is the company repurchasing its own shares. It can reduce share count and improve per-share metrics.",
          "Both affect equity capital, but rights raise money while buybacks use company cash."
        ],
        example: "A 1-for-4 rights issue means one new share for every four shares held, subject to payment of the rights price.",
        exam: "Rights issue brings cash into the company. Buyback sends cash out."
      },
      {
        title: "M&A, demerger, delisting, and share swap",
        teach: [
          "A merger combines businesses. An acquisition is one company taking control of another.",
          "A demerger or spin-off separates a business into another entity.",
          "A share swap uses shares as consideration instead of only cash."
        ],
        example: "If Company A acquires Company B by issuing shares to B's shareholders, that is a share-swap structure.",
        exam: "Read whether the action changes ownership, listing status, share count, or cash flow."
      }
    ],
    drill: [
      "Compare bonus vs split in two lines.",
      "Explain why a buyback can increase EPS.",
      "Calculate shares after a 2-for-1 split."
    ]
  },
  10: {
    intro: "Valuation is another 12-mark chapter. Learn the core idea: price is what the market quotes, value is what your analysis supports.",
    modules: [
      {
        title: "Price vs value",
        teach: [
          "Price is observable in the market. Value is an estimate based on expected cash flows, assets, earnings, growth, risk, and return requirements.",
          "A stock is attractive only if value is meaningfully higher than price after considering risk.",
          "Different analysts can estimate different values because assumptions differ."
        ],
        example: "A stock trading at Rs. 100 may be worth Rs. 130 to one analyst and Rs. 90 to another if their growth and margin assumptions differ.",
        exam: "Do not assume market price always equals intrinsic value."
      },
      {
        title: "DCF logic",
        teach: [
          "DCF says an asset is worth the present value of future cash flows.",
          "Two things drive the answer: expected cash flows and discount rate.",
          "The discount rate should reflect the risk of the cash flows. Riskier cash flows require a higher discount rate."
        ],
        example: "Rs. 100 received one year later is worth less than Rs. 100 today because investors require return for time and risk.",
        exam: "DCF is conceptually strong but highly sensitive to assumptions."
      },
      {
        title: "DDM, FCFE, and FCFF",
        teach: [
          "Dividend discount model values expected dividends. It suits mature dividend-paying companies.",
          "FCFE values cash flow available to equity shareholders and is discounted at cost of equity.",
          "FCFF values cash flow available to all capital providers and is discounted at WACC."
        ],
        example: "If you are valuing the whole firm before debt payments, think FCFF and WACC. If you are valuing equity cash flows after debt effects, think FCFE and cost of equity.",
        exam: "FCFF -> WACC. FCFE -> cost of equity."
      },
      {
        title: "Terminal value",
        teach: [
          "Most businesses are expected to continue beyond the explicit forecast period. Terminal value captures value after that period.",
          "It can be estimated using perpetual growth or exit multiple methods.",
          "Terminal value is often a large part of DCF, so small changes in growth or discount rate can change valuation significantly."
        ],
        example: "A company forecast for five years still has value in year six and beyond. That remaining value is terminal value.",
        exam: "Perpetual growth rate should not exceed the long-term growth capacity of the economy."
      },
      {
        title: "CAPM and WACC",
        teach: [
          "CAPM estimates cost of equity: risk-free rate plus beta times market risk premium.",
          "WACC combines cost of equity and after-tax cost of debt using their capital weights.",
          "Use after-tax cost of debt because interest is generally tax-deductible."
        ],
        example: "If Rf is 6 percent, market return is 12 percent, and beta is 1.2, Ke = 6 + 1.2 x 6 = 13.2 percent.",
        exam: "Ke = Rf + beta x (Rm - Rf)."
      },
      {
        title: "Relative valuation",
        teach: [
          "Relative valuation compares a company with peers using multiples such as P/E, P/B, EV/EBITDA, EV/Sales, and PEG.",
          "A low multiple is not automatically cheap. It may reflect poor growth, high risk, weak governance, or low returns.",
          "Choose the multiple based on business type and profitability."
        ],
        example: "EV/Sales can be useful for early-stage companies with negative earnings, but only if future profitability is plausible.",
        exam: "P/E can mislead for highly leveraged firms. EV-based multiples are often more capital-structure neutral."
      }
    ],
    drill: [
      "Explain when to use DDM, FCFE, and FCFF.",
      "Calculate Ke using CAPM for beta 1.1, Rf 6 percent, market return 12 percent.",
      "State two reasons a low P/E stock may still not be attractive."
    ]
  },
  11: {
    intro: "Commodity analysis is about supply, demand, inventory, currency, weather, policy, and global linkages. It is not just chart reading.",
    modules: [
      {
        title: "Supply and demand",
        teach: [
          "Commodity prices respond strongly to production, consumption, inventory, spare capacity, and logistics.",
          "Supply shocks can come from weather, mining disruption, war, export bans, or policy changes.",
          "Demand changes can come from industrial activity, consumer demand, substitution, or global growth."
        ],
        example: "Crude oil can rise if supply is disrupted even when demand is stable.",
        exam: "The blank in many commodity questions is 'supply and demand dynamics'."
      },
      {
        title: "Currency and global prices",
        teach: [
          "Many commodities are globally priced in US dollars.",
          "A stronger dollar can pressure commodities by making them costlier for non-dollar buyers.",
          "Domestic prices also depend on exchange rates, duties, taxes, freight, and local demand-supply conditions."
        ],
        example: "If global crude price is unchanged but the rupee weakens, India's landed crude cost can rise.",
        exam: "Global price and domestic price can differ because of currency and local factors."
      },
      {
        title: "Hedging",
        teach: [
          "Hedging uses derivatives to reduce price risk in an existing exposure.",
          "Producers may hedge against price falls. Consumers may hedge against price rises.",
          "Hedge ratio links the size of the futures position to the exposure being hedged."
        ],
        example: "A jeweller worried about gold prices rising may use futures to hedge purchase cost.",
        exam: "Hedging reduces risk; it does not guarantee profit."
      }
    ],
    drill: [
      "List five drivers of crude oil prices.",
      "Explain why a weak rupee can raise domestic commodity prices.",
      "Give one producer hedge and one consumer hedge example."
    ]
  },
  12: {
    intro: "This chapter links return with risk. The exam will punish answers that discuss return without discussing risk.",
    modules: [
      {
        title: "Simple, annualised, and compounded returns",
        teach: [
          "Simple return measures gain or loss over a period.",
          "Annualised return converts a holding-period return into a yearly rate.",
          "CAGR shows the smoothed compounded annual growth rate between beginning and ending values."
        ],
        example: "If Rs. 100 becomes Rs. 121 in two years, CAGR is 10 percent because 100 x 1.10 x 1.10 = 121.",
        exam: "CAGR uses compounding; it is not the same as simply dividing total return by years in every case."
      },
      {
        title: "Risk and beta",
        teach: [
          "Risk is uncertainty in actual outcome. For investments, it includes market risk, business risk, liquidity risk, credit risk, and valuation risk.",
          "Beta measures sensitivity to market movements. Beta above 1 means higher market sensitivity than the benchmark.",
          "Beta does not measure governance quality or accounting quality."
        ],
        example: "A beta of 1.3 suggests the stock tends to move more than the market, but it does not tell whether the company is fundamentally good.",
        exam: "Beta is market risk sensitivity."
      },
      {
        title: "Margin of safety",
        teach: [
          "Margin of safety is the gap between estimated intrinsic value and purchase price.",
          "It protects against errors in assumptions, valuation, or unexpected business deterioration.",
          "The more uncertain the business, the larger the required margin of safety should be."
        ],
        example: "If you estimate fair value at Rs. 150 and buy at Rs. 100, the Rs. 50 gap is your margin of safety.",
        exam: "Margin of safety is not a stop-loss. It is a valuation cushion."
      },
      {
        title: "Behavioural biases",
        teach: [
          "Investors are not perfectly rational. Biases can affect decisions even when data is available.",
          "Confirmation bias means seeking information that supports an existing view.",
          "Herding means following the crowd. Loss aversion means losses hurt more than equivalent gains feel good."
        ],
        example: "Refusing to read negative news about a stock you own is confirmation bias.",
        exam: "Learn each bias with one example."
      },
      {
        title: "Liquidity",
        teach: [
          "Liquidity means the ability to buy or sell without large price impact and without delay.",
          "Volume, trading frequency, bid-ask spread, and impact cost are useful liquidity indicators.",
          "Illiquid stocks can look cheap but may be difficult to exit."
        ],
        example: "A stock with a wide bid-ask spread and low volume has higher trading cost and lower liquidity.",
        exam: "Wide spread plus high impact cost means poor liquidity."
      }
    ],
    drill: [
      "Calculate CAGR from Rs. 100 to Rs. 133.10 in three years.",
      "Explain beta in one sentence.",
      "Give examples of confirmation bias and herding."
    ]
  },
  13: {
    intro: "This chapter is about communication quality. A research report is not just a target price; it is a structured argument.",
    modules: [
      {
        title: "What a good report contains",
        teach: [
          "A good report explains the business, industry, thesis, financials, valuation, recommendation, risks, and disclosures.",
          "It should separate facts, assumptions, and opinions clearly.",
          "It should be readable enough for the intended audience without hiding important caveats."
        ],
        example: "A report saying 'Buy because price will rise' is weak. A report linking earnings growth, valuation, risks, and target price is stronger.",
        exam: "Report quality includes risks and disclosures, not only the recommendation."
      },
      {
        title: "Fact sources",
        teach: [
          "Annual reports, exchange filings, investor presentations, official data, and regulatory filings are strong sources.",
          "Media reports and market rumours can be inputs but should not be treated as final proof.",
          "Analysts should cross-check important claims."
        ],
        example: "If you need revenue, debt, auditor comments, and accounting policies, start with the annual report.",
        exam: "For authentic company facts, annual reports and official filings are preferred."
      },
      {
        title: "Checklist approach",
        teach: [
          "A checklist reduces the chance of missing key sections such as risks, assumptions, disclosures, and peer comparison.",
          "It improves consistency across reports.",
          "It does not replace judgment; it makes judgment more disciplined."
        ],
        example: "Before publishing, an analyst checks whether target price, valuation method, risks, financials, disclosures, and conflict statements are included.",
        exam: "Checklist means completeness and consistency."
      }
    ],
    drill: [
      "List eight sections of a good research report.",
      "Name three strong sources of company information.",
      "Write two risk factors for a bank report."
    ]
  },
  14: {
    intro: "This 10-mark chapter is memory-heavy. Learn it by mapping regulator -> regulation -> purpose -> analyst behaviour.",
    modules: [
      {
        title: "Regulatory infrastructure",
        teach: [
          "SEBI regulates the securities market and intermediaries.",
          "RBI regulates banking and monetary policy. MCA handles company law. IRDAI handles insurance. PFRDA handles pension funds. IBBI handles insolvency and bankruptcy framework.",
          "The exam often tests which regulator is responsible for what."
        ],
        example: "A research analyst registration issue points to SEBI. A bank monetary policy question points to RBI.",
        exam: "Make a regulator-purpose table and revise it repeatedly."
      },
      {
        title: "Insider trading and UPSI",
        teach: [
          "UPSI means unpublished price-sensitive information.",
          "If information is not public and can materially affect price, analysts must not trade on it or pass it to others.",
          "Research must be based on public information and legitimate analysis."
        ],
        example: "Knowing unpublished quarterly results before announcement is UPSI. Using it in a report or trade is not allowed.",
        exam: "If the question contains UPSI, the answer usually involves not using it and following compliance procedure."
      },
      {
        title: "PFUTP and market integrity",
        teach: [
          "PFUTP regulations target fraudulent and unfair trade practices.",
          "They cover manipulative, deceptive, or unfair conduct in securities markets.",
          "Analysts must not create misleading research or participate in practices that distort market integrity."
        ],
        example: "Publishing a false positive report to help someone exit a position is a market integrity problem.",
        exam: "PFUTP = fraudulent and unfair trade practices."
      },
      {
        title: "Research Analyst Regulations",
        teach: [
          "RA Regulations cover registration, qualification, certification, conduct, disclosures, conflict management, and record responsibilities.",
          "They apply to research analysts and associated persons involved in research reports or analysis.",
          "The key idea is investor protection through competence, independence, and transparency."
        ],
        example: "If an analyst owns shares of a covered company, that financial interest must be handled and disclosed as required.",
        exam: "Conflicts are not ignored; they are managed and disclosed."
      },
      {
        title: "Disclosures and conflicts",
        teach: [
          "Research reports must disclose relevant financial interests, business relationships, compensation links, and other conflicts as required.",
          "Disclosure helps users judge independence, but it does not make every conflicted behaviour acceptable.",
          "Personal trading, investment banking relationships, and compensation conflicts are common exam examples."
        ],
        example: "If the analyst's employer has had investment banking business with the company, the report may need to disclose that relationship.",
        exam: "Disclosure is necessary but not a magic cure for misconduct."
      },
      {
        title: "GSM, ASM, investor charter, and cybersecurity",
        teach: [
          "GSM and ASM are exchange surveillance mechanisms for securities with unusual risk indicators.",
          "Investor charter focuses on investor rights, services, and complaint handling.",
          "Cybersecurity requirements focus on protecting systems, data, and resilience."
        ],
        example: "A stock under ASM may face additional surveillance requirements due to market risk indicators.",
        exam: "GSM/ASM are surveillance, not valuation methods."
      }
    ],
    drill: [
      "Create a table for SEBI, RBI, MCA, IRDAI, PFRDA, IBBI.",
      "Write what an analyst should do if management shares UPSI.",
      "List four conflict disclosures in research reports."
    ]
  },
  15: {
    intro: "This is the biggest chapter at 15 marks. Learn it visually: charts show price, patterns show behaviour, indicators summarise trend, momentum, and volume.",
    modules: [
      {
        title: "What technical analysis assumes",
        teach: [
          "Technical analysis assumes market price reflects available information, prices move in trends, and history can repeat because human behaviour repeats.",
          "It does not try to estimate intrinsic value. It studies demand, supply, trend, momentum, and volume.",
          "It is often used for timing entries and exits rather than judging long-term business quality."
        ],
        example: "A fundamentally strong stock may still be avoided by a technical trader if it is in a clear downtrend.",
        exam: "Technical analysis = price and volume, not financial statement valuation."
      },
      {
        title: "Chart types",
        teach: [
          "Line charts connect closing prices and are simple for trend view.",
          "Bar and candlestick charts show open, high, low, and close.",
          "Candlesticks make it easier to see market psychology through body and shadows."
        ],
        example: "A long lower shadow shows sellers pushed price down but buyers brought it back up before close.",
        exam: "OHLC means open, high, low, close."
      },
      {
        title: "Dow Theory and trend levels",
        teach: [
          "Dow Theory says markets discount information, move in trends, and trends persist until reversal evidence appears.",
          "Primary trends are major long-term trends. Secondary trends are corrections within primary trends. Tertiary trends are short-term movements.",
          "Volume should generally confirm the trend."
        ],
        example: "In a primary uptrend, a 3-week fall can be a secondary correction if the larger uptrend is intact.",
        exam: "Trend remains in force until a clear reversal."
      },
      {
        title: "Reversal candlestick patterns",
        teach: [
          "Hammer after a decline suggests potential bullish reversal. Hanging man after an advance warns of bearish reversal.",
          "Bullish engulfing means a strong up candle engulfs the prior down candle. Bearish engulfing is the opposite.",
          "Morning star is a bullish three-candle reversal. Evening star is a bearish three-candle reversal."
        ],
        example: "The same candle shape can mean different things depending on the prior trend. Context matters.",
        exam: "Hammer after fall = bullish warning. Hanging man after rise = bearish warning."
      },
      {
        title: "Continuation and consolidation patterns",
        teach: [
          "Triangles, flags, and pennants often show consolidation before continuation, though false breakouts can occur.",
          "Ascending triangle has flat resistance and rising lows. Descending triangle has flat support and falling highs.",
          "Symmetrical triangle has converging trendlines with lower highs and higher lows."
        ],
        example: "Rising lows against the same resistance show buyers becoming more aggressive.",
        exam: "Ascending triangle = horizontal resistance plus rising support."
      },
      {
        title: "Support, resistance, trendlines, and channels",
        teach: [
          "Support is an area where buying interest may emerge. Resistance is an area where selling pressure may emerge.",
          "After a breakdown, old support can become resistance. After a breakout, old resistance can become support.",
          "Trendlines connect higher lows in an uptrend or lower highs in a downtrend. Channels use roughly parallel lines."
        ],
        example: "If a stock repeatedly bounces near Rs. 100, that zone is support. If it breaks below Rs. 100, rallies back to Rs. 100 may face resistance.",
        exam: "Support and resistance are zones, but exam options often use the terms as levels."
      },
      {
        title: "Indicators",
        teach: [
          "Moving averages smooth price and help identify trend. MACD uses moving averages to judge momentum.",
          "RSI is a momentum oscillator. It is often interpreted using overbought and oversold zones, but signals need context.",
          "ADX measures trend strength, not direction. OBV uses volume to confirm price movement. RSC compares performance against another security or benchmark."
        ],
        example: "ADX rising from 15 to 30 means trend strength is increasing, but you still need price direction to know whether it is uptrend or downtrend.",
        exam: "ADX strength, RSI momentum, MACD moving-average momentum, OBV volume, RSC relative performance."
      }
    ],
    drill: [
      "Draw hammer, hanging man, bullish engulfing, bearish engulfing, morning star, and evening star.",
      "Explain why ADX cannot tell trend direction by itself.",
      "Name the chart pattern with flat resistance and rising lows."
    ]
  }
};

window.STUDY_SIMPLE = {
  1: {
    analogy: "A research analyst is like a friend who researches phones before you buy one. They gather the specs, compare options, and tell you buy or skip. Here the phone is a company's shares.",
    points: [
      { term: "The job in 3 steps", plain: "Gather information, analyse it, then give a Buy, Hold, or Sell view.", hook: "Gather, Analyse, View." },
      { term: "Sell-side analyst", plain: "Works for a broker. The report is public and comes with a price target.", hook: "Sell-side SELLS the idea to the public." },
      { term: "Buy-side analyst", plain: "Works for a fund (mutual fund, pension). The report is secret, only for the fund's own buying.", hook: "Buy-side BUYS for itself." },
      { term: "Talking to management", plain: "You can ask questions, but never ask for secret unpublished numbers, and keep your own honest opinion.", hook: "Stay independent, no secret tips." }
    ],
    mnemonic: "Analyst = a paid 'selector' who studies a company and says buy, hold, or sell."
  },
  2: {
    analogy: "The market is a big vegetable mandi. The primary market is the farmer selling produce for the first time, so the money goes to the farmer (the company). The secondary market is you reselling to a neighbour, where the company gets nothing.",
    points: [
      { term: "Primary vs secondary", plain: "Primary = company gets the money (an IPO). Secondary = investors trade among themselves on NSE or BSE.", hook: "Primary = First time, money to company." },
      { term: "Equity vs debt", plain: "Equity = you own a slice of the company. Debt = you lent it money and get fixed interest.", hook: "Owner vs lender." },
      { term: "Option vs future", plain: "An option gives a right with no compulsion. A future or forward is a pakka deal both sides MUST honour.", hook: "Option is Optional. Future is Forced." },
      { term: "Who is who", plain: "Broker places your order, the exchange is the marketplace, the clearing corporation settles the trade, the depository is the electronic locker holding your shares.", hook: "Broker, Exchange, Clearing, Depository." },
      { term: "Hedge, speculate, arbitrage", plain: "Hedge = insurance to cut risk. Speculate = a bet on price. Arbitrage = buy cheap in one place, sell dear in another.", hook: "Insure, bet, or pocket the gap." }
    ]
  },
  3: {
    analogy: "A share has many 'values', just like a house has a stamp-paper value, a builder's cost, today's market rate, and what you personally think it is truly worth.",
    points: [
      { term: "Four values", plain: "Face value = the printed nominal value. Book value = accounting net worth. Market value = today's price. Intrinsic value = your estimate of true worth.", hook: "Face printed, Book accounts, Market today, Intrinsic truth." },
      { term: "Market cap", plain: "Share price times number of shares. The value of just the equity (owners' part).", hook: "Add up the price of all shares." },
      { term: "Enterprise value (EV)", plain: "What it costs to buy the WHOLE business: add its loans, subtract its cash.", hook: "Buy the shop, take its loans, pocket its cash. Add debt, minus cash." },
      { term: "Bonds and interest rates", plain: "When market interest rates go UP, old bond prices go DOWN. They move opposite, like a seesaw.", hook: "Rates up, price down." },
      { term: "Duration", plain: "How sensitive a bond's price is to rate changes. Longer maturity and lower coupon mean more sensitive.", hook: "Longer + lower coupon = more swing." }
    ]
  },
  4: {
    analogy: "Investing is building a house brick by brick with research and patience. Speculation is betting on a cricket match, fast and risky.",
    points: [
      { term: "Mosaic analysis", plain: "Building a full picture from many small PUBLIC clues, like solving a puzzle from newspaper bits. This is legal.", hook: "Many public tiles make the picture." },
      { term: "Insider information", plain: "Using secret, unpublished, price-moving info. This is like peeking at the exam paper. Illegal.", hook: "Insider = cheating, never use it." },
      { term: "The four approaches", plain: "Fundamental = study the business and its numbers. Technical = study the price chart. Quantitative = use data models. Behavioural = study investor psychology.", hook: "Business, chart, data, psychology." }
    ]
  },
  5: {
    analogy: "The economy is the weather and companies are people. Good weather (growth, low rates) helps everyone. Storms (high inflation, high rates) hurt.",
    points: [
      { term: "Micro vs macro", plain: "Micro = one shop or person. Macro = the whole country (GDP, inflation, jobs, currency).", hook: "One shop vs the whole country." },
      { term: "Fiscal vs monetary", plain: "Fiscal policy = the GOVERNMENT's spending and taxes. Monetary policy = the RBI's interest rates and money supply.", hook: "Fiscal = govt (Finance ministry). Monetary = RBI." },
      { term: "FDI vs FPI", plain: "FDI = a foreigner builds a factory, long-term and sticky. FPI = a foreigner buys shares, quick money that can flee fast.", hook: "FDI Direct/factory stays. FPI Portfolio flies away." },
      { term: "Three trend types", plain: "Secular = slow long-term shift (digital payments over years). Cyclical = moves up and down with the economy (autos, metals). Seasonal = same time every year (ACs in summer, festival sales).", hook: "Slow change, economy cycle, calendar season." }
    ]
  },
  6: {
    analogy: "Before judging a swimmer, look at the river. A great company in a bad industry is a strong swimmer fighting the current.",
    points: [
      { term: "Porter's 5 Forces", plain: "How tough is the fight in an industry: competitors (rivalry), new entrants, substitutes, customer power, supplier power.", hook: "Count on 5 fingers: rivals, newcomers, substitutes, buyers, suppliers." },
      { term: "PESTLE", plain: "The outside-world forces: Political, Economic, Social, Technological, Legal, Environmental.", hook: "PESTLE = the 6 outside winds." },
      { term: "BCG matrix", plain: "Sorts businesses by growth and market share. Star = high growth + high share. Cash Cow = low growth + high share (gives cash). Question mark = high growth + low share. Dog = low + low.", hook: "Star shines, Cow gives cash, Question is risky, Dog is weak." },
      { term: "Industry KPI", plain: "Each industry has its own scorecard. Telecom = ARPU, Hotel = occupancy, Airline = load factor, Bank = NIM and NPA.", hook: "Match the metric to the business." }
    ]
  },
  7: {
    analogy: "Judging a company is like judging a cricket captain. How do they score (business model)? Can they keep winning (moat)? Are they honest (governance)?",
    points: [
      { term: "Business model", plain: "Simply, HOW the company makes money: who pays it, for what, and at what cost.", hook: "How does it actually earn?" },
      { term: "Moat and pricing power", plain: "A moat is the fort wall that keeps rivals out: brand, patents, scale, network, switching cost. Pricing power means it can raise prices without losing customers.", hook: "Strong wall + can raise prices = strong company." },
      { term: "SWOT", plain: "Strengths and Weaknesses are INSIDE the company. Opportunities and Threats are OUTSIDE.", hook: "SW inside, OT outside." },
      { term: "Governance red flags", plain: "Honesty checks: shady related-party deals, heavy promoter share-pledging, auditors quitting.", hook: "Good business plus bad owner equals bad investment." }
    ]
  },
  8: {
    analogy: [
      "Reading a company's financials is exactly like checking a person's money life.",
      "Balance Sheet = a PHOTO of your wealth today: what you own (assets) minus what you owe (loans) is your net worth.",
      "Profit and Loss = your SALARY SLIP for the year: income minus expenses is what you saved (profit).",
      "Cash Flow = your BANK PASSBOOK: the actual cash that came in and went out.",
      "Someone can show a fat salary slip but have an empty bank account. That is why cash flow matters most."
    ],
    points: [
      { term: "Photo vs movie", plain: "Balance sheet is a snapshot on ONE date. P&L and cash flow cover the WHOLE year.", hook: "Balance sheet = photo. P&L and cash flow = movie." },
      { term: "Profit is not cash", plain: "A shop can sell on credit and book profit on paper, but the cash has not arrived yet.", hook: "Profit is opinion, cash is fact." },
      { term: "Cash flow has 3 buckets", plain: "Operating (daily business), Investing (buying or selling assets), Financing (loans, shares, dividends).", hook: "Operate, Invest, Finance." },
      { term: "EBITDA margin and PAT margin", plain: "Of every Rs.100 of sales: EBITDA margin is what is left after running costs (before interest, tax, wear-and-tear). PAT margin is the final take-home after EVERYTHING.", hook: "Paisa left per Rs.100 of sales." },
      { term: "ROE", plain: "On every Rs.100 the OWNERS put in, how much profit it earns. Higher means owner money is used well.", hook: "ROE = Return on Owner's money." },
      { term: "ROCE", plain: "On every Rs.100 of TOTAL money (owners plus loans), how much it earns. Uses EBIT, not PAT.", hook: "ROCE = return on Everyone's capital." },
      { term: "Debt to Equity", plain: "How much loan versus own money. Above 1 means more loan than own money, which is risky.", hook: "D/E high = too much udhaar." },
      { term: "Interest coverage", plain: "How many times profit can pay the interest bill. Below 1 means it cannot even pay interest. Danger.", hook: "How many times can earnings pay the EMI?" },
      { term: "Current vs quick ratio", plain: "Current ratio: can short-term assets cover short-term bills (above 1 is yes). Quick ratio is stricter, it removes inventory because unsold stock is not cash yet.", hook: "Quick ratio = current ratio minus inventory." },
      { term: "DuPont", plain: "Splits ROE into 3 reasons: good margins, using assets well, and using loans. If ROE is high ONLY because of loans, be careful.", hook: "Why is ROE high? Margin, efficiency, or loan?" },
      { term: "Audit report words", plain: "Clean (unqualified) means all good. Qualified means mostly fine but with a 'but'. Adverse means the accounts are wrong. Disclaimer means the auditor could not check.", hook: "Qualified = a 'but'. Adverse = 'wrong'. Disclaimer = 'couldn't check'." }
    ],
    mnemonic: "Photo, Salary slip, Passbook = Balance sheet, P&L, Cash flow. And profit is opinion, cash is fact."
  },
  9: {
    analogy: "Corporate actions are a company slicing or sharing its pizza. The pizza is the pool of shares.",
    points: [
      { term: "Dividend", plain: "The company shares its profit as cash. A slice of cash comes to you.", hook: "Cash to shareholders." },
      { term: "Bonus issue", plain: "Free extra shares. The pizza is cut into more slices, so you hold more shares but each is worth less. Total value is the same. A 1:1 bonus doubles shares and roughly halves the price.", hook: "More shares, no new cash." },
      { term: "Stock split", plain: "Same pizza cut into more slices, and the face value per share drops.", hook: "More slices, smaller face value." },
      { term: "Rights issue", plain: "The company offers you more shares at a discount, with first chance to existing holders. Cash comes INTO the company.", hook: "Rights = cash IN." },
      { term: "Buyback", plain: "The company buys its own shares back, so fewer remain and each is worth a bit more. Cash goes OUT.", hook: "Buyback = cash OUT." }
    ],
    mnemonic: "Bonus and split = more shares, no new cash. Rights = cash in. Buyback = cash out. Dividend = cash to you."
  },
  10: {
    analogy: [
      "Price is the tag in the shop. Value is what the thing is truly worth to you.",
      "A smart buyer buys when value is clearly above price, like a Rs.130 item on sale for Rs.100."
    ],
    points: [
      { term: "DCF idea", plain: "Add up the future cash a business will give you, brought back to today's money (Rs.100 next year is worth less than Rs.100 today). Two knobs: how much cash, and the discount rate for risk.", hook: "Future cash, valued in today's money." },
      { term: "FCFE vs FCFF", plain: "FCFE is cash for OWNERS only, so discount at cost of equity. FCFF is cash for EVERYONE (owners and lenders), so discount at WACC.", hook: "FCF-E to Equity uses Ke. FCF-F to Firm uses WACC." },
      { term: "CAPM (cost of equity)", plain: "The return shareholders demand: a safe return plus extra for risk (beta times the market premium).", hook: "Ke = safe return + danger money." },
      { term: "WACC", plain: "The blended cost of owner-money and loan-money. Use the loan cost AFTER tax, because interest saves tax.", hook: "Blend equity and after-tax debt." },
      { term: "Relative valuation", plain: "Compare with neighbours using P/E, EV/EBITDA, P/B. A low P/E is not always cheap, sometimes it is cheap for a reason.", hook: "Compare with peers, but ask why it is low." },
      { term: "Gordon model rule", plain: "In P0 = D1 / (Ke - g), the growth g must be LESS than Ke, or the maths breaks.", hook: "g must stay below Ke." }
    ],
    mnemonic: "Price is what you pay, value is what you get. FCFE uses Ke, FCFF uses WACC."
  },
  11: {
    analogy: "Commodity prices are a tug-of-war between supply and demand. Weather, the US dollar, and government rules are extra pullers on the rope.",
    points: [
      { term: "Main driver", plain: "Supply versus demand, plus how much inventory is sitting in storage.", hook: "Supply vs demand decides price." },
      { term: "The dollar", plain: "A stronger US dollar makes dollar-priced commodities costlier for other buyers, which presses demand down.", hook: "Dollar up, commodity demand down." },
      { term: "Weak rupee", plain: "Imported commodities cost MORE in India even if the global price has not moved.", hook: "Weak rupee, costlier imports." },
      { term: "Hedging", plain: "Insurance against price moves. A producer fearing a price fall SELLS futures. A consumer fearing a price rise BUYS futures.", hook: "Producer sells, consumer buys." }
    ]
  },
  12: {
    analogy: "Return is the reward, risk is the bumpiness of the ride. Praising return without checking risk is like praising a car for speed while ignoring its brakes.",
    points: [
      { term: "CAGR", plain: "The smooth average yearly growth, compounded. It is not just total return divided by years.", hook: "Steady yearly speed." },
      { term: "Beta", plain: "How much a stock swings compared to the market. Beta 1 moves with the market, above 1 is wilder, below 1 is calmer.", hook: "Swing-meter vs the market." },
      { term: "Two kinds of risk", plain: "Systematic risk is market-wide and cannot be diversified away. Unsystematic risk is company-specific and CAN be reduced by holding many stocks.", hook: "System-wide you can't escape, specific you can spread out." },
      { term: "Margin of safety", plain: "Buying below true worth, a cushion for your mistakes, like buying a Rs.150 item for Rs.100.", hook: "Buy cheap, leave a cushion." },
      { term: "Sharpe ratio", plain: "Reward per unit of bumpiness: (return minus safe rate) divided by standard deviation. Higher is better.", hook: "Return per unit of risk." },
      { term: "Common biases", plain: "Confirmation = only hearing what you already believe. Herding = following the crowd. Loss aversion = losses hurt more than equal gains feel good.", hook: "Believe, follow, fear loss." }
    ]
  },
  13: {
    analogy: "A good research report is like a good doctor's note: a clear diagnosis (thesis), the tests (financials and valuation), the risks, and a clear prescription (buy, hold, sell). Not just 'take this medicine'.",
    points: [
      { term: "What it must contain", plain: "Business, thesis, valuation, risks, AND disclosures. Not only a target price.", hook: "A target price alone is not a report." },
      { term: "Best sources", plain: "Annual reports and official filings, not rumours or WhatsApp forwards.", hook: "Official filings beat gossip." },
      { term: "Checklist", plain: "Like a pilot's pre-flight list, it makes sure you never forget risks and disclosures.", hook: "A checklist stops you forgetting." }
    ]
  },
  14: {
    analogy: "Think of regulators as different police stations, each in charge of its own area.",
    points: [
      { term: "Who polices what", plain: "SEBI = stock market. RBI = banks and money. IRDAI = insurance. PFRDA = pensions. MCA = companies. IBBI = insolvency and bankruptcy.", hook: "SEBI shares, RBI banks, IRDAI insurance, PFRDA pension, MCA companies, IBBI bankruptcy." },
      { term: "UPSI", plain: "Unpublished price-sensitive info, the secret price-moving news. Do not trade on it and do not pass it on.", hook: "UPSI is an exam leak: never use, never share." },
      { term: "PFUTP", plain: "The anti-cheating rule against Fraudulent and Unfair Trade Practices.", hook: "No tricks or manipulation." },
      { term: "RA rules and conflicts", plain: "The SEBI Research Analyst Regulations (2014) require you to register, qualify, and disclose conflicts. If you own the stock or your employer did banking for it, you must DISCLOSE and manage it.", hook: "Disclose conflicts, but disclosure does not excuse misconduct." },
      { term: "Surveillance and extras", plain: "GSM and ASM are the exchange's CCTV on risky stocks. The Investor Charter lists your rights. CSCRF is the cyber-safety framework. Never trade ahead of your own recommendation (front-running).", hook: "GSM/ASM watch risky stocks, no front-running." }
    ],
    mnemonic: "Match the regulator to its beat, and with UPSI: never use it, never share it."
  },
  15: {
    analogy: [
      "Technical analysis ignores the company and just reads the price chart's body language.",
      "It is like reading a crowd's mood from how it moves, not from what each person earns."
    ],
    points: [
      { term: "What it studies", plain: "Only price and volume, not the business. It is mainly used for timing entries and exits.", hook: "Price and volume, not profits." },
      { term: "Chart types", plain: "A line chart joins closing prices. A candlestick shows open, high, low, close. A long lower shadow means buyers fought back.", hook: "Candles show the day's fight." },
      { term: "Dow Theory", plain: "A trend continues until it clearly reverses. Primary = main trend, Secondary = a correction against it, Tertiary = daily noise.", hook: "Trend holds till it clearly turns." },
      { term: "Reversal candles", plain: "Hammer after a fall hints at a bullish turn. Hanging man after a rise warns of a bearish turn (same shape, the trend decides). Morning star = bullish, Evening star = bearish.", hook: "Morning = up, Evening = down." },
      { term: "Support and resistance", plain: "Support is the floor where price bounces up. Resistance is the ceiling where it stalls. Break the floor and it becomes the new ceiling.", hook: "Floor and ceiling can swap roles." },
      { term: "The indicators", plain: "RSI = speed-meter 0 to 100 (above 70 overbought, below 30 oversold). ADX = trend STRENGTH only, not direction (below 25 is weak). MACD = momentum from two moving averages. OBV = volume confirms price. RSC = stock versus benchmark (above 100 is beating the market).", hook: "RSI overbought/sold, ADX strength, MACD momentum, OBV volume, RSC vs market." }
    ],
    mnemonic: "RSI 70/30, ADX 25 for strength only, MACD for momentum, OBV for volume, RSC vs the index."
  }
};
