export type NestedPointGroup = {
  heading?: string;
  text?: string;
  points?: readonly string[];
};

export type Section = {
  heading?: string;
  text?: string;
  points?: readonly (string | NestedPointGroup)[];
};

export type YearContent = {
  title: string;
  sections: readonly Section[];
};

export type JourneyData = {
  years: readonly string[];
  details: Record<string, YearContent>;
};

const journeyData: JourneyData = {
  years: ["2017", "2018", "2020", "2022", "2023"],
  details: {
    "2017": {
      title: "Launched Sec2Pay as a B2B, white-label fintech platform.",
      sections: [
        {
          heading:
            "Built partner-branded rails for essential financial services:",
          points: [
            "Domestic Money Transfer",
            "Bill Payments",
            "Cash-in / Cash-out",
            "UPI-ready merchant collections",
          ],
        },
        {
          text: "Established a compliance-first operating cadence and early bank/fintech integrations.",
        },
        {
          text: "Ran controlled partner pilots across Bharat to refine product, support, and distribution.",
        },
      ],
    },
    "2018": {
      title:
        "Standardized the platform for enterprise partners and strengthened reliability and partner readiness.",
      sections: [
        { text: "Introduced modular, API-first capabilities:" },
        {
          points: [
            "Payouts & collections workflows",
            "Paper-light onboarding & KYC journeys",
            "Reconciliation, settlement & reporting dashboards",
          ],
        },
        {
          text: "Expanded distribution through partner-run outlets and regional entrepreneur networks.",
        },
        {
          text: "Formalized documentation, SLAs, and support frameworks for white-label deployments.",
        },
      ],
    },
    "2020": {
      title:
        "Expanded into co‑operative segment with comprehensive financial solutions.",
      sections: [
        {
          text: "Provided robust, secure payment platform with diverse services:",
        },
        {
          points: [
            "Payout",
            "UPI collection",
            "Credit Score Check",
            "Digital Account Opening",
            "Kiosk Machine",
          ],
        },
        {
          text: "Served co‑op banks, Co‑Op Credit Societies, and Pathsanthas",
        },
        { text: "Onboarded 2000+ Credit Societies across India" },
      ],
    },
    "2022": {
      title:
        "Consolidated payments and commerce rails in preparation for multi-brand expansion.",
      sections: [
        {
          heading: "Advanced core capabilities for partners:",
          points: [
            "UPI orchestration & payouts",
            "Merchant onboarding and settlement flows",
            "Risk controls, monitoring, and audit trails",
            "Reporting & reconciliation at scale",
          ],
        },
        {
          heading:
            "Laid the groundwork for ONDC enablement and upcoming brand launches:",
          points: [
            "Zion Commerce foundation for marketplace enablement",
            {
              heading: "Brand tracks:",
              points: ["Zionmart", "IndiConnect", "Venko"],
            },
          ],
        },
        {
          text: "Strengthened governance and integration readiness to enable strategic acquisitions.",
        },
      ],
    },
    "2023": {
      title: "Strategic acquisitions and brand expansion.",
      sections: [
        {
          points: [
            "Acquired Chintamoney Fintech (UPI TPAP) and Finjoy Technologies (1L+ partner affiliate marketing powerhouse)",
            "Entered ONDC space with Zion Commerce, onboarding 3k+ merchants to Zionmart.",
          ],
        },
        {
          heading: "Established brands:",
          points: [
            "Zionmart",
            "Indicconnect",
            "Venko",
            "Created umbrella brand: Indifly Ventures.",
          ],
        },
      ],
    },
  },
};

export default journeyData;
