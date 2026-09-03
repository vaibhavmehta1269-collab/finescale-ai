export interface CaseStudy {
  id: string;
  clientPlaceholder: string;
  clientTitle: string;
  industry: "Fintech" | "Logistics & Supply Chain" | "B2B SaaS" | "Healthcare & MedTech" | "E-Commerce" | "Professional Services";
  heroTag: string;
  summary: string;
  challenge: string;
  solution: string;
  architectureDetails: string[];
  techStack: string[];
  timeline: string;
  metrics: {
    label: string;
    value: string;
    delta: string;
  }[];
  beforeVsAfter: {
    metric: string;
    before: string;
    after: string;
  }[];
  quote: {
    text: string;
    author: string;
    role: string;
  };
}

export const caseStudiesIndustries = [
  "All Industries",
  "Fintech",
  "Logistics & Supply Chain",
  "B2B SaaS",
  "Healthcare & MedTech",
  "E-Commerce",
  "Professional Services",
] as const;

export const caseStudiesData: CaseStudy[] = [
  {
    id: "fintech-loan-underwriting",
    clientPlaceholder: "Enterprise FinTech Group",
    clientTitle: "Autonomous Risk & KYC Underwriting Pipeline",
    industry: "Fintech",
    heroTag: "88% Faster Loan Origination",
    summary: "Replacing a 48-hour manual document audit and fraud check with an autonomous multi-agent underwriting engine operating at sub-minute speeds.",
    challenge: "The institution processed 12,000+ monthly business loan applications. Manual verification of bank statements, tax filings, and corporate registry entries created a 48-hour bottleneck, leading to a 31% prospect abandonment rate to agile competitors.",
    solution: "FineScale AI engineered a deterministic multi-agent document analysis & fraud triangulation pipeline. High-precision OCR extracts balance sheets, reconciles transaction ledgers against IRS tax transcripts, and runs real-time synthetic identity detection before issuing underwriting scorecards.",
    architectureDetails: [
      "Zero-retention private Azure VPC enclave for banking compliance",
      "Deterministic mathematical verification algorithms on bank ledger transactions",
      "Real-time sanctions, PEP, and corporate registry API waterfall",
      "Executive exception routing engine for borderline credit profiles",
    ],
    techStack: ["Azure OpenAI Private", "LangGraph", "PostgreSQL PGVector", "DocuSign API", "Plaid", "Snowflake"],
    timeline: "6-Week Deployment",
    metrics: [
      { label: "Approval Cycle Time", value: "48h → 3.5m", delta: "-98%" },
      { label: "Monthly Underwriting OpEx", value: "$420K saved", delta: "-74%" },
      { label: "Fraud Detection Accuracy", value: "99.85%", delta: "+18.2%" },
    ],
    beforeVsAfter: [
      { metric: "Application Review Time", before: "48 hours average", after: "3 minutes 30 seconds" },
      { metric: "Analyst Touchpoints", before: "4 human reviewers / app", after: "Autonomous with 2% exception review" },
      { metric: "Applicant Drop-off Rate", before: "31.4%", after: "4.8%" },
      { metric: "Monthly Capacity", before: "12,000 max applications", after: "150,000+ elastic capacity" },
    ],
    quote: {
      text: "FineScale AI delivered a banking-grade pipeline that cut our loan turnaround from 2 days to under 4 minutes with zero compromise on risk precision.",
      author: "Chief Operating Officer",
      role: "Tier-1 Commercial Lending Partner",
    },
  },
  {
    id: "logistics-dispatch-voice",
    clientPlaceholder: "Global Freight Logistics Network",
    clientTitle: "Sub-300ms Autonomous Carrier Voice Dispatch",
    industry: "Logistics & Supply Chain",
    heroTag: "100% Inbound Carrier Coverage",
    summary: "Deploying bidirectional voice agents to negotiate freight rates, verify driver locations, and resolve port demurrage in real-time.",
    challenge: "With over 4,500 daily calls from truck drivers, brokers, and shipping terminals, human dispatchers were overwhelmed. High hold times resulted in missed freight loads and expensive detention fees totaling over $2.4M annually.",
    solution: "We deployed low-latency conversational AI voice agents capable of negotiating spot rates within strictly bounded parameters, sending dispatch contracts via SMS, and logging GPS milestone status directly into the enterprise TMS system.",
    architectureDetails: [
      "Sub-280ms speech-to-speech engine with acoustic noise cancellation for cabin noise",
      "Dynamic rate negotiation state machine with margin floors and ceiling guardrails",
      "Instant SMS payload dispatcher with e-signature links and gate access barcodes",
      "Live integration into McLeod TMS and Trimble freight network",
    ],
    techStack: ["Retell AI Telephony", "Deepgram Nova-2", "Cartesia Sonic", "McLeod TMS API", "Twilio Messaging", "Redis"],
    timeline: "8-Week Deployment",
    metrics: [
      { label: "Call Handling Capacity", value: "4,500+ / day", delta: "100% answered" },
      { label: "Average Carrier Wait Time", value: "< 2 seconds", delta: "-99%" },
      { label: "Annual Detention Savings", value: "$1.85M", delta: "-77%" },
    ],
    beforeVsAfter: [
      { metric: "Average Hold Time", before: "14 minutes", after: "1.8 seconds" },
      { metric: "Missed Call Rate", before: "27.8%", after: "0.0%" },
      { metric: "Rate Negotiation Time", before: "18 minutes per load", after: "3 minutes 12 seconds" },
      { metric: "Night & Weekend Coverage", before: "Skeleton crew (30% capacity)", after: "100% full capacity 24/7" },
    ],
    quote: {
      text: "Our drivers get answered on the first ring, negotiate rates smoothly, and receive rate confirmations by SMS before hanging up. A monumental upgrade.",
      author: "VP of Logistics Technology",
      role: "North American Freight Network",
    },
  },
  {
    id: "saas-lead-acceleration",
    clientPlaceholder: "Series-C Enterprise B2B SaaS",
    clientTitle: "Sub-30-Second Inbound Lead Qualification Engine",
    industry: "B2B SaaS",
    heroTag: "3.4x Pipeline Conversion",
    summary: "Instant AI inbound engagement, dynamic prospect enrichment, and automated executive calendar bookings.",
    challenge: "Inbound demo requests from high-value enterprise accounts waited an average of 4.2 hours for SDR outreach. During that gap, 42% of inbound prospects booked meetings with competitors or lost immediate purchasing momentum.",
    solution: "FineScale AI built a multi-channel revenue orchestration agent. As soon as a demo request lands, the AI enriches the company profile via Clay & Clearbit, prepares a custom value hypothesis, triggers an AI voice/email outreach in 25 seconds, and books directly to AE calendars.",
    architectureDetails: [
      "Sub-30 second event-driven webhook architecture",
      "Deep enrichment pipeline extracting CRM tech stack, hiring velocity, and G2 intent",
      "Dynamic objection handler fine-tuned on 8,000+ closed-won enterprise call transcripts",
      "Two-way Google Calendar / Salesforce lead routing matching territory ownership",
    ],
    techStack: ["HubSpot API", "Salesforce CRM", "Clay Waterfall", "OpenAI GPT-4o", "Calendly API", "Slack API"],
    timeline: "4-Week Deployment",
    metrics: [
      { label: "Speed-to-Lead Response", value: "24.8 seconds", delta: "-99.8%" },
      { label: "Demo Booking Rate", value: "22% → 58%", delta: "+163%" },
      { label: "Qualified Pipeline Added", value: "+$4.2M / Qtr", delta: "+240%" },
    ],
    beforeVsAfter: [
      { metric: "First Touch Latency", before: "4.2 hours average", after: "24.8 seconds" },
      { metric: "Lead Qualification Accuracy", before: "76% human consistency", after: "99.2% deterministic rules" },
      { metric: "SDR Calendar Admin Time", before: "18 hours / rep / week", after: "0 hours (fully autonomous)" },
      { metric: "Inbound to Opportunity Rate", before: "14.2%", after: "38.6%" },
    ],
    quote: {
      text: "Our speed-to-lead dropped from half a business day to under thirty seconds. Our AEs' calendars are packed with high-intent enterprise buyers.",
      author: "Chief Revenue Officer",
      role: "Cloud Infrastructure SaaS",
    },
  },
  {
    id: "healthcare-patient-intake",
    clientPlaceholder: "Multi-Location Medical & Dental Network",
    clientTitle: "Autonomous HIPAA-Compliant Patient Intake & Triage",
    industry: "Healthcare & MedTech",
    heroTag: "Zero Patient Hold Times",
    summary: "Automated 24/7 patient scheduling, insurance pre-authorization, and post-procedure check-ins across 45 clinics.",
    challenge: "Clinic staff were swamped with over 8,000 weekly calls for appointments, prescription refills, and insurance eligibility checks, resulting in long waiting room queues, burned-out front desk nurses, and a 19% patient no-show rate.",
    solution: "Engineered a private HIPAA-compliant voice and SMS triage system that verifies patient insurance in real time via clearinghouse APIs, schedules multi-specialty clinical slots, and triggers personalized post-op wellness surveys.",
    architectureDetails: [
      "HIPAA-compliant BAA-signed infrastructure with encrypted audio logging",
      "Real-time 270/271 insurance eligibility clearinghouse verification",
      "Bi-directional integration with Epic and AthenaHealth EHR systems",
      "Clinical sentiment and red-flag emergency detection with warm transfer to on-call doctors",
    ],
    techStack: ["AthenaHealth API", "Epic FHIR", "AWS HealthLake", "ElevenLabs HIPAA", "Twilio HIPAA SIP"],
    timeline: "10-Week Deployment",
    metrics: [
      { label: "Weekly Call Ingestion", value: "100% answered", delta: "0 dropped" },
      { label: "Appointment No-Show Rate", value: "19% → 5.2%", delta: "-72%" },
      { label: "Front Desk Staff Overtime", value: "-65% hours", delta: "$280K saved" },
    ],
    beforeVsAfter: [
      { metric: "Average Call Queue", before: "11 minutes 45 seconds", after: "0 seconds" },
      { metric: "Insurance Eligibility Check", before: "Manual phone calls (25 mins)", after: "Automated API check (4.2s)" },
      { metric: "After-Hours Booking Rate", before: "Voicemail with 40% loss", after: "Instant confirmed booking" },
      { metric: "Patient Satisfaction Score", before: "3.4 / 5.0", after: "4.85 / 5.0" },
    ],
    quote: {
      text: "Our front desk staff can finally focus entirely on in-clinic patient care while the AI handles high-volume appointment bookings and insurance checks flawlessly.",
      author: "Managing Medical Director",
      role: "Regional Healthcare Network",
    },
  },
  {
    id: "ecommerce-support-refund",
    clientPlaceholder: "Direct-to-Consumer Luxury Apparel Brand",
    clientTitle: "Autonomous Omnichannel Support & Action Resolution",
    industry: "E-Commerce",
    heroTag: "92% Tier-1 Resolution Rate",
    summary: "AI agent executing authenticated Shopify & Gorgias actions including returns, address adjustments, and personalized size styling.",
    challenge: "During peak holiday sales, support tickets spiked by 600%. Customers experienced 36-hour wait times for simple return labels or order edits, resulting in negative reviews and chargebacks.",
    solution: "FineScale AI built an action-oriented autonomous support engine connected directly to Shopify Plus, Klaviyo, and 3PL warehouses. The AI verifies order IDs, processes returns, generates carrier shipping labels, and modifies addresses in real-time.",
    architectureDetails: [
      "Tool-calling architecture with authenticated Shopify Admin GraphQL API",
      "Multi-modal image analysis checking customer product photos for return qualification",
      "Personalized upsell engine recommending matching accessories during returns",
      "Real-time warehouse 3PL address holds before shipment manifests lock",
    ],
    techStack: ["Shopify Plus GraphQL", "Gorgias API", "Klaviyo", "OpenAI Vision", "ShipBob API", "Stripe API"],
    timeline: "5-Week Deployment",
    metrics: [
      { label: "First Response Time", value: "36h → 14s", delta: "-99.9%" },
      { label: "Autonomous Resolution", value: "92.4% tickets", delta: "+350%" },
      { label: "Saved Holiday Revenue", value: "$640K retained", delta: "+28%" },
    ],
    beforeVsAfter: [
      { metric: "Resolution SLA", before: "36 hours", after: "14 seconds" },
      { metric: "Support Ticket Cost", before: "$8.40 per ticket", after: "$0.32 per ticket" },
      { metric: "Holiday Seasonal Temp Hires", before: "35 seasonal agents", after: "0 seasonal hires required" },
      { metric: "Customer CSAT Score", before: "71%", after: "96.4%" },
    ],
    quote: {
      text: "Black Friday was completely stress-free for our operations team. Over 40,000 customer inquiries resolved with sub-minute satisfaction.",
      author: "VP of E-Commerce Operations",
      role: "Luxury Retail Brand",
    },
  },
  {
    id: "quotation-contractor-rfp",
    clientPlaceholder: "Commercial MEP & Construction Contractor",
    clientTitle: "Autonomous RFP & Bill-of-Materials Estimation",
    industry: "Professional Services",
    heroTag: "15-Minute Bid Turnaround",
    summary: "Autonomous extraction of engineering blueprints and RFP specifications into accurate price quotes and margin proposals.",
    challenge: "Senior estimators spent 14 hours per RFP reviewing 150+ page specification sheets and cross-referencing vendor catalogs, limiting the company to bidding on only 15% of high-value municipal contracts.",
    solution: "Built a computer vision and tabular extraction pipeline that ingests architectural CAD drawings and RFP documents, identifies required materials and labor codes, checks real-time vendor pricing sheets, and compiles a certified bid package.",
    architectureDetails: [
      "High-density PDF table and architectural drawing OCR extraction",
      "Dynamic cost-matching engine against distributor ERP pricing feeds",
      "Configurable risk-margin guardrails with executive review approval threshold",
      "Instant DocuSign / Procore bid submission bundle generation",
    ],
    techStack: ["AWS Textract", "Procore API", "LangGraph", "DocuSign API", "QuickBooks Enterprise"],
    timeline: "6-Week Deployment",
    metrics: [
      { label: "RFP Turnaround Time", value: "14h → 18m", delta: "-98%" },
      { label: "Monthly Bid Volume", value: "12 → 85 bids", delta: "+600%" },
      { label: "New Contract Win Rate", value: "+34% YoY", delta: "+$6.8M Rev" },
    ],
    beforeVsAfter: [
      { metric: "Time to Quote", before: "14 business hours", after: "18 minutes" },
      { metric: "Bidding Capacity", before: "12 RFPs / month", after: "85+ RFPs / month" },
      { metric: "Estimation Error Rate", before: "4.8% human discrepancy", after: "< 0.3% verified tolerances" },
      { metric: "Senior Estimator Time Reclaimed", before: "80% spent on manual data entry", after: "80% spent on strategic vendor negotiations" },
    ],
    quote: {
      text: "We went from turning away 80% of RFP opportunities to bidding on nearly every project within 20 minutes with zero estimation mistakes.",
      author: "Chief Estimating Officer",
      role: "Commercial MEP Contracting Firm",
    },
  },
];
