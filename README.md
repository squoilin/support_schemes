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

1. **RES LEGAL Europe:** Database on support schemes and grid issues for renewable energy in the EU.
2. **IEA (International Energy Agency) Policies Database:** Global coverage of country-level energy policies.
3. **IRENA (International Renewable Energy Agency):** Tracks structural energy schemes globally.
4. **European Commission - National Energy and Climate Plans (NECPs):** Source of up-to-date (2024 revised) country projections.
5. **National Regulatory Portals:** Localized portals tracking direct tendering mechanisms (e.g., Borzen, HROTE, BNetzA, NERC).

## General Policy Categories

Policy mechanisms for renewable energy span complex definitions. For the purpose of categorization and mapping, policies are broken down into the following general categories:

* **Contracts for Difference (CfDs) & Feed-in Premiums (FiP):** Usually awarded via competitive auctions/tenders. A generator receives the wholesale market price plus a premium. In a "two-way CfD", if the market price drops below the strike price, the state pays the difference; if it exceeds it, the generator pays the surplus to the state.
* **Tenders / Auctions (Fixed or PAB):** Procurement processes where capacity is allocated to the most competitive bidders. This category represents a dominant mechanism where bidders submit the minimum remuneration they need.
* **Feed-in Tariffs (FiT):** A fixed guaranteed remuneration per kWh injected into the grid, typically utilized for small-scale installations without a competitive auction. Gradually phasing out across the EU in favor of premiums.
* **Net Billing / Net Metering:** Prosumer mechanisms. Net Metering balances kWh against kWh over a specified period. Net Billing, taking over most legacy systems, strictly monetizes the surplus energy at a designated wholesale/market rate and charges retail price for consumed grid energy.
* **Investment Subsidies / Grants:** Upfront capital expenditure support (CapEx subsidies) largely funded by EU Recovery and Resilience Facilities (RRF). Extremely prevalent for decentralised systems like Rooftop PV + Local Battery Storage.
* **Quotas / Green Certificates (TGCs):** An obligation on suppliers or large consumers to source a determined % of their electricity from renewables, proved via tradable certificates. Mostly a legacy mechanism being phased out (e.g., Flanders, Sweden).
* **Merchant / Corporate PPAs:** Projects completely funded outside state aid schemes, relying exclusively on wholesale market revenues or direct long-term Power Purchase Agreements (PPAs) with large corporate consumers.
* **ETS & Carbon Tax/Levy (CO2):** Nearly all assessed nations operate under the EU Emissions Trading System (cap-and-trade). Nations designated as "ETS + Tax" mandate specific internal national carbon floor prices or specific carbon taxes largely focused on non-ETS sectors (e.g., heating, transport, small industry).

## Detailed Tables

All underlying tracked mechanisms, complete with their status comments and source references, can be found documented cleanly in the [support_schemes.md](support_schemes.md) file.

## Contributors

* **Sylvain Quoilin** – *University of Liege*

## License

* **Code and logic:** The application software, map generation logic, and associated scripts in this repository are provided under the [MIT License](LICENSE).
* **Figures and Outputs:** Any map snapshots, images, tables, or output figures extracted from this tool are licensed under a [Creative Commons Attribution 4.0 International (CC-BY 4.0)](https://creativecommons.org/licenses/by/4.0/) license. 
