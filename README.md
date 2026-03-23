# EU & Neighbors Renewable Energy Support Schemes (2024-2026)

This repository tracks and visualizes the principal renewable energy support schemes and CO2 pricing mechanisms across the 27 EU member states, plus the United Kingdom (UK), Norway (NO), and Switzerland (CH).

## Live Interactive Map

The primary deliverable of this repository is a dynamic, interactive geographic visualization. 

🌍 **[View the Live Interactive Map Here](https://squoilin.github.io/support_schemes/)**

You can also view it locally by opening `index.html` in any web browser. The Leaflet.js-based interactive map features:
* **Technology Dropdowns:** Switch between Rooftop PV, Ground-mounted PV, Onshore Wind, Offshore Wind, and CO2 mechanisms.
* **Dynamic Recategorization:** Recalculates scheme models and updates legend colors depending on the subset viewed.
* **Boundary Sub-Regionalization:** E.g., accurately dividing Belgium into its three energy jurisdictions (Flanders, Wallonia, Brussels) overlaid on the NUTS/CNTR base vectors.

## Data Collection Process

The data representing the 2024-2026 policy framework has been thoroughly synthesized, triangulated, and inferred from the following primary resources indicating structural shifts towards the 2030 targets:

1. **RES LEGAL Europe:** Database on support schemes and grid issues for renewable energy in the EU (http://www.res-legal.eu/).
2. **IEA (International Energy Agency) Policies Database:** Global coverage of country-level energy policies (https://www.iea.org/policies).
3. **IRENA (International Renewable Energy Agency):** Tracks structural energy schemes globally (https://www.irena.org/).
4. **European Commission - National Energy and Climate Plans (NECPs):** Source of up-to-date (2024 revised) country projections (https://energy.ec.europa.eu/).
5. **National Regulatory Portals:** Localized portals tracking direct tendering mechanisms (e.g., Borzen, HROTE, BNetzA, NERC).

All entries in the tables are referenced back to their original policy documents or legislative acts for full traceability.

### Timing and Updates

The support schemes data covers the policy frameworks primarily active between **2024 and 2026**. The dataset specifically reflects transition periods, as many EU member states are phasing out legacy schemes (like Quotas and Net Metering) during 2024-2025 in favor of competitive mechanisms (e.g., CfDs via auctions) or market-reflective premiums (e.g., Net Billing) required by the recent EU Electricity Market Design directives. We aim to keep the data as current as reasonably possible in relation to major regulatory updates.

## General Policy Categories

Policy mechanisms for renewable energy span complex and evolving definitions. For the purpose of categorization and mapping, policies are broken down into the following general categories. Note that most countries use a **combination** of these instruments, often differentiated by technology (e.g., PV vs. wind), installation size (e.g., rooftop vs. utility-scale), and vintage (legacy contracts vs. new capacity).

### Contracts for Difference (CfDs) & Feed-in Premiums (FiP)

These are the **dominant support mechanisms for utility-scale renewables** in Europe today, typically awarded via competitive auctions/tenders:

* **Feed-in Premium (FiP):** A generator sells electricity on the wholesale market and receives an additional premium per MWh. In a **sliding (or floating) FiP**, the premium adjusts so that total revenue (market price + premium) equals a pre-determined reference price. If the market price rises, the premium shrinks; if it falls, the premium increases.
* **One-way CfD:** Functions like a sliding FiP — the state only pays when the market price falls below the strike price, but the generator keeps any upside when market prices exceed it.
* **Two-way CfD:** A symmetric mechanism. When the market price is below the strike price, the state pays the difference; when it exceeds the strike price, the generator pays back the surplus. This protects both the generator (downside risk) and the state/consumers (windfall profits). **Two-way CfDs have become the EU's preferred mechanism** under the 2024 Electricity Market Design reform (Regulation (EU) 2024/1747).

### Tenders / Auctions

The **procurement process** through which support (typically CfDs or premiums) is competitively allocated. Developers bid the minimum price at which they can deliver energy. Common formats:

* **Pay-as-bid (PAB):** Each winner receives the price they bid.
* **Uniform price:** All winners receive the price of the marginal (highest accepted) bid.
* **Negative bidding:** In some mature markets (e.g., Portuguese and German solar tenders), competition has led developers to bid below zero, i.e., paying the state for the right to build.

Tenders are now mandated by EU State Aid Guidelines ([CEEAG 2022](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:52022XC0218(03))) for most new RES support above 1 MW.

### Feed-in Tariffs (FiT)

A **fixed guaranteed remuneration per kWh** injected into the grid, set administratively (not through competitive bidding). The generator is shielded from market price risk. FiTs were the dominant EU mechanism during the 2000s-2010s expansion but have been **largely phased out for new utility-scale installations** in favor of competitive premiums. They remain relevant for:

* Small-scale installations (e.g., rooftop PV below 100-500 kWp, depending on country)
* Legacy contracts still running for their original 15-20 year duration

### Net Billing / Net Metering

**Prosumer-oriented mechanisms** designed for small self-consumption installations (primarily rooftop PV):

* **Net Metering:** Surplus electricity exported to the grid is credited as a kWh-for-kWh offset against future consumption within a billing period (monthly or annually). Effectively values exported electricity at the full retail rate. Being phased out across the EU because it does not reflect the actual value of exported electricity and can shift grid costs to non-prosumers.
* **Net Billing:** Surplus exported electricity is compensated at a separate (typically wholesale-linked) rate, while grid consumption is charged at the retail rate. Provides a more accurate market signal. Most EU countries are transitioning from net metering to net billing (e.g., Poland since April 2022, Greece since 2023).

### Investment Subsidies / Grants

**Upfront capital expenditure (CapEx) support** reducing the initial investment cost. Common forms include direct grants, tax credits/deductions, soft loans, and co-financing. Prevalent for:

* Rooftop PV and battery storage for households and SMEs
* Emerging technologies (e.g., offshore wind pilots, green hydrogen electrolysers)
* Largely funded through the [EU Recovery and Resilience Facility (RRF)](https://commission.europa.eu/business-economy-euro/economic-recovery/recovery-and-resilience-facility_en), the Modernisation Fund, or national climate funds

### Quotas / Green Certificates (TGCs)

A **market-based quantity obligation** where electricity suppliers or large consumers must source a set percentage of electricity from renewables, proven via Tradable Green Certificates (TGCs). Producers earn certificates proportional to their generation, which are sold to obligated parties. The certificate price adds revenue on top of wholesale electricity sales. This is a **legacy mechanism** now largely being phased out. Belgium (Wallonia, Brussels) and Romania retain active schemes. Sweden and Norway's joint Elcertifikat system closed to new entrants in 2021-2022.

### Merchant / Corporate PPAs

Projects developed **entirely without state aid schemes**, relying exclusively on:

* **Merchant revenue:** Selling electricity directly on the wholesale spot market, bearing full price risk.
* **Corporate PPAs:** Long-term bilateral power purchase agreements (typically 10-15 years) directly between a renewable energy generator and a large corporate off-taker (e.g., data centers, industrial manufacturers).

While not a "support scheme" in the traditional subsidy sense, this category is tracked because it represents the **policy destination** for mature renewable technologies that have reached grid parity. Countries where Merchant/PPA is the primary mechanism (e.g., Sweden, Finland, Norway for onshore wind) indicate that the technology **no longer requires public financial support** — a key objective of the EU Green Deal. The enabling regulatory environment (permitting, grid access, PPA contract frameworks) still plays a critical role in making this model viable.

### Mixed Policies / Transitioning

Countries designated as **"Mixed"** have overlapping or transitioning frameworks, typically involving:

* Legacy support schemes still running for existing installations alongside new mechanisms for new capacity
* Regional differentiation (e.g., Belgium, where energy policy is devolved to three regions, each with different instruments)
* Simultaneous use of multiple instruments at different scales (e.g., FiTs for small installations + auctions for large ones, as in Switzerland)

### ETS & Carbon Tax/Levy (CO2)

Carbon pricing mechanisms applicable across assessed nations:

* **EU ETS (Emissions Trading System):** A [cap-and-trade system](https://climate.ec.europa.eu/eu-action/eu-emissions-trading-system-eu-ets_en) covering power generation, heavy industry, and intra-EU aviation. Companies must hold allowances for each tonne of CO₂ emitted. The allowance price provides an indirect incentive for renewables by increasing the cost of fossil-fuel generation. EU ETS allowance prices have ranged between €50-80/tCO₂ during 2024-2025.
* **National Carbon Taxes/Levies:** Several countries operate additional domestic carbon pricing, mainly targeting non-ETS sectors (heating, transport, small industry). Countries marked "ETS + Tax" have both mechanisms. Notable examples: Sweden (~€110/tCO₂, highest globally), Ireland, France, and Germany (national BEHG fuel emissions trading).
* **UK ETS:** The United Kingdom operates its own [post-Brexit ETS](https://www.gov.uk/government/publications/uk-emissions-trading-scheme-markets), coupled with a Carbon Price Support mechanism.
* **Swiss ETS:** Switzerland operates a [linked but separate ETS](https://www.bafu.admin.ch/bafu/en/home/topics/climate/info-specialists/reduction-measures/ets.html) with an additional CO₂ levy on heating fuels.

## Detailed Tables

All underlying tracked mechanisms, complete with their status comments and source references, can be found documented cleanly in the [support_schemes.md](support_schemes.md) file.

## Contributors

* **Sylvain Quoilin** – *University of Liege*

## License

* **Code and logic:** The application software, map generation logic, and associated scripts in this repository are provided under the [MIT License](LICENSE).
* **Figures and Outputs:** Any map snapshots, images, tables, or output figures extracted from this tool are licensed under a [Creative Commons Attribution 4.0 International (CC-BY 4.0)](https://creativecommons.org/licenses/by/4.0/) license. 
