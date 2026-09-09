export interface CaseStudyImpactItem {
  label: string;
  before: string;
  after: string;
}

export interface AiOsCaseStudy {
  id: string;
  category: string;
  industryTag: string;
  heroTag: string;
  summary: string;
  client: string;
  title: string;
  timeline: string;
  challenge: string;
  solution: string;
  operationalImpact: CaseStudyImpactItem[];
  systemCapabilities: CaseStudyImpactItem[];
  capabilitiesNote?: string;
  extraSection?: {
    heading: string;
    text: string;
  };
  quote: {
    text: string;
    author: string;
  };
  techStack: string[];
  service: string;
}

export const aiOsCaseStudies: AiOsCaseStudy[] = [
  {
    id: "sfl-ecommerce",
    category: "E-Commerce • DTC Growth Marketing Agency",
    industryTag: "E-Commerce",
    heroTag: "12 Accounts, One Reporting Layer",
    summary: "Centralized ad, revenue, and email data from 12 DTC client brands into one standardized weekly dataset with automated client-health flags.",
    client: "SFL E-Commerce",
    title: "AI-Powered Multi-Client Reporting & Performance Intelligence System",
    timeline: "Custom Automation Build • 12 Client Accounts",
    challenge:
      "SFL E-Commerce manages growth marketing for 12 DTC Shopify brands across Meta advertising, CRO, and Klaviyo email/SMS marketing. Performance data was distributed across multiple platforms, making centralized reporting and portfolio-level visibility difficult. The team needed a unified system that could collect performance data once, standardize it, and make the same reliable dataset available across reporting workflows — while also surfacing client risks before they became larger problems.",
    solution:
      "FineScaleAI engineered a centralized data and reporting automation layer connecting Meta Ads, Shopify, GA4, and Klaviyo across all 12 client accounts. The system establishes a canonical weekly dataset for every client, which downstream reporting workflows consume instead of repeatedly pulling data from individual platforms. This creates a consistent source of truth across client reporting, advertising performance, email performance, client health, and founder-level reporting. A rule-based client health layer additionally analyzes performance changes, communication activity, overdue tasks, call activity, and other operational signals to identify accounts requiring attention.",
    operationalImpact: [
      { label: "Client Accounts Unified", before: "12 client accounts", after: "One standardized reporting architecture" },
      { label: "Data Sources", before: "Meta Ads + Shopify + GA4 + Klaviyo", after: "Centralized weekly data layer" },
      { label: "Reporting Architecture", before: "Multiple independent data pulls", after: "One shared source of truth" },
      { label: "Client Monitoring", before: "Manual account checking", after: "Automated rule-based health signals" },
    ],
    systemCapabilities: [
      { label: "Canonical Data Layer", before: "12 client accounts", after: "Standardized weekly datasets" },
      { label: "Performance Reporting", before: "Shared data", after: "Client, Meta Ads & Email reporting" },
      { label: "Client Health Monitoring", before: "Multiple operational signals", after: "Automated risk flags" },
      { label: "Founder Intelligence", before: "Portfolio + pipeline + workload", after: "Founder-level dashboard" },
    ],
    capabilitiesNote:
      "The founder dashboard is designed to surface portfolio performance, sales pipeline status, and team workload signals in a single daily view.",
    quote: {
      text: "A centralized intelligence layer designed to turn fragmented client data into a consistent, actionable operating system for a growing e-commerce agency.",
      author: "FineScaleAI",
    },
    techStack: ["Meta Ads", "Shopify", "GA4", "Klaviyo", "Google Drive", "Google Sheets", "Asana", "Slack", "Gmail", "Fireflies"],
    service: "AI OS — Client Operations & Performance Intelligence",
  },
  {
    id: "search-business-group",
    category: "SEO & Digital Marketing • Search Business Group",
    industryTag: "Professional Services",
    heroTag: "One Connected Operational Layer",
    summary: "Replaced scattered task tracking and manual handoffs across tools with a coordinated internal workflow system.",
    client: "Search Business Group",
    title: "Internal AI Operating System for Workflow Management",
    timeline: "Custom AI OS Build • Internal Operations & Team Coordination",
    challenge:
      "Search Business Group operates across multiple SEO and digital marketing workflows, requiring teams to coordinate tasks, manage processes, track work, and keep projects moving across different tools. As operations grow, internal work can become fragmented across project management systems, communication channels, documents, meetings, and individual team workflows. Important actions can depend on someone remembering to update a task, communicate a status, or manually move information from one system to another. The challenge wasn't simply automating one repetitive task. Search Business Group needed an internal operating system that could connect its existing workflows, reduce manual coordination, and give the team a more consistent way to manage work from start to finish.",
    solution:
      "FineScaleAI designed an AI-powered internal workflow management layer around the way Search Business Group already operates. Instead of replacing the team's existing tools, the AI OS connects them into a coordinated operational system — allowing information, tasks, responsibilities, and workflow states to move between systems automatically. The system is designed to centralize operational intelligence while automating repetitive internal handoffs, helping the team know what needs to happen, who needs to handle it, and what is currently blocked. AI is applied where reasoning adds value, while deterministic automation handles structured workflow operations. Human approval remains in the loop wherever decisions require team oversight.",
    operationalImpact: [
      { label: "Internal Workflow", before: "Disconnected processes", after: "One connected operational layer" },
      { label: "Task Management", before: "Manual follow-ups", after: "Automated task creation, assignment & tracking" },
      { label: "Team Coordination", before: "Information spread across tools", after: "Centralized operational visibility" },
      { label: "Workflow Execution", before: "Repeated manual handoffs", after: "Automated movement between workflow stages" },
    ],
    systemCapabilities: [
      { label: "Workflow Orchestration", before: "Internal processes", after: "Connected automated workflows" },
      { label: "Task Intelligence", before: "Meetings, updates & workflow events", after: "Actionable tasks and ownership" },
      { label: "Team Coordination", before: "Tasks + deadlines + blockers", after: "Clear operational priorities" },
      { label: "Operational Visibility", before: "Scattered workflow information", after: "Centralized view of internal operations" },
      { label: "AI-Assisted Management", before: "Operational data", after: "Priorities, summaries & workflow intelligence" },
    ],
    capabilitiesNote:
      "The AI OS is designed to function as the internal nervous system of the business — connecting the tools and processes the team already uses while reducing the amount of manual coordination required to keep work moving.",
    quote: {
      text: "Instead of adding another tool for the team to manage, we built an operating layer that connects the systems they already use — turning fragmented internal workflows into one intelligent operational system.",
      author: "FineScaleAI",
    },
    techStack: ["AI Agents", "Workflow Automation", "Project Management", "Communication Tools", "Google Workspace", "APIs", "Custom Software"],
    service: "AI OS — Internal Workflow Management",
  },
  {
    id: "taco-bar-voice-agent",
    category: "Voice AI • Restaurant & Catering",
    industryTag: "Voice AI",
    heroTag: "Automated Catering Order Intake",
    summary: "An AI voice agent answers catering calls, captures order and event details, and escalates to staff only when a request needs a human.",
    client: "Taco Bar",
    title: "AI Voice Agent for Automated Catering Orders",
    timeline: "Custom Voice AI Build • Catering Order Intake",
    challenge:
      "Taco Bar receives catering inquiries from customers who need information, availability, pricing, menu options, and help placing catering orders. Handling these conversations manually can take valuable staff time away from in-store operations, while missed calls or delayed responses can result in lost catering opportunities. The business needed a faster way to handle inbound catering inquiries without requiring staff to manually manage every conversation from start to finish.",
    solution:
      "FineScaleAI built an AI-powered voice agent designed specifically for Taco Bar's catering workflow. The voice agent can answer incoming catering calls, understand what the customer is looking for, collect the information required to process an order, and guide the conversation through the appropriate catering workflow. Instead of simply acting as a basic phone bot, the system is designed around the business's actual catering process — turning natural voice conversations into structured customer and order information that can move into the appropriate internal workflow. The agent can handle common customer questions, gather event details, capture order requirements, and escalate conversations to a human when the request requires staff involvement.",
    operationalImpact: [
      { label: "Catering Inquiries", before: "Manual phone handling", after: "AI-powered conversational intake" },
      { label: "Customer Information", before: "Unstructured phone conversations", after: "Structured catering order data" },
      { label: "Staff Workload", before: "Repeated questions & information collection", after: "Automated first-line handling" },
      { label: "Response Time", before: "Missed or delayed inquiries", after: "Immediate conversational response" },
    ],
    systemCapabilities: [
      { label: "Voice Order Intake", before: "Customer calls", after: "Natural AI conversation → Structured catering information" },
      { label: "Catering Qualification", before: "Event details + order requirements", after: "Organized customer information" },
      { label: "FAQ Handling", before: "Common catering questions", after: "Instant AI responses" },
      { label: "Order Information Capture", before: "Customer conversation", after: "Required order details" },
      { label: "Human Escalation", before: "Complex or unsupported requests", after: "Human handoff" },
      { label: "Workflow Integration", before: "Voice conversation", after: "Structured information → Internal catering workflow" },
    ],
    extraSection: {
      heading: "AI Agent",
      text: "The voice agent acts as the first point of contact for Taco Bar's catering customers. It is designed to understand natural language rather than force customers through rigid phone menus, while following predefined business rules and catering workflows. Human approval and escalation remain available whenever the request falls outside the agent's defined capabilities.",
    },
    quote: {
      text: "A voice agent built around the actual catering workflow — turning inbound customer conversations into structured, actionable orders while allowing the team to stay focused on the business.",
      author: "FineScaleAI",
    },
    techStack: ["Voice AI", "AI Agents", "Conversational AI", "Workflow Automation", "APIs", "Custom Software"],
    service: "Voice AI — AI Catering Order Agent",
  },
  {
    id: "agrawal-cake-ghar",
    category: "Custom Software • Inventory Management",
    industryTag: "Custom Development",
    heroTag: "Proactive Low-Stock Alerts",
    summary: "Replaced manual stock checks with a custom inventory system that flags items nearing reorder thresholds automatically.",
    client: "Agrawal Cake Ghar",
    title: "Custom Inventory Management System",
    timeline: "Custom Development Build • Inventory & Stock Management",
    challenge:
      "Agrawal Cake Ghar manages a large number of ingredients, raw materials, packaging supplies, and finished products required for day-to-day bakery operations. When inventory is managed manually, teams can spend significant time checking stock, updating records, identifying low-stock items, and coordinating replenishment. The business needed a more structured inventory system that could provide better visibility into stock levels while reducing repetitive manual inventory work.",
    solution:
      "FineScaleAI designed and built a custom inventory management system around the bakery's operational workflow. The system centralizes inventory information and automates key stock-management processes, allowing inventory movements and stock levels to be tracked through a structured digital workflow. The system is designed to monitor inventory levels, identify items approaching predefined thresholds, organize stock information, and surface items that require attention. Instead of relying entirely on manual checking, the system creates an operational layer that helps the team understand what is available, what is being consumed, and what needs to be replenished.",
    operationalImpact: [
      { label: "Inventory Tracking", before: "Manual stock checking", after: "Centralized inventory visibility" },
      { label: "Low Stock Detection", before: "Manual monitoring", after: "Automated inventory alerts" },
      { label: "Stock Management", before: "Scattered records", after: "Structured inventory workflow" },
      { label: "Replenishment", before: "Reactive checking", after: "Proactive reorder signals" },
    ],
    systemCapabilities: [
      { label: "Inventory Tracking", before: "Stock entries + stock movements", after: "Centralized inventory records" },
      { label: "Low Stock Monitoring", before: "Inventory levels", after: "Automated threshold detection" },
      { label: "Stock Alerts", before: "Items approaching minimum levels", after: "Actionable inventory alerts" },
      { label: "Inventory Intelligence", before: "Stock data", after: "Clear visibility into inventory status" },
      { label: "Replenishment Workflow", before: "Low-stock items", after: "Organized reorder workflow" },
      { label: "Operational Dashboard", before: "Inventory information", after: "Easy-to-understand stock visibility" },
    ],
    extraSection: {
      heading: "AI-Powered Inventory Intelligence",
      text: "The system uses AI where it provides useful operational intelligence while keeping core inventory calculations and stock rules deterministic. Inventory quantities, thresholds, and stock movements are handled through structured logic, while AI can assist with summarization, prioritization, and surfacing inventory information that requires attention. The goal is to give the team a simple operational view of inventory without requiring them to manually inspect multiple records every time they need to understand stock status.",
    },
    quote: {
      text: "An intelligent inventory layer that turns everyday stock data into clear operational signals — helping the team know what they have, what is running low, and what needs attention.",
      author: "FineScaleAI",
    },
    techStack: ["Custom Software", "Database Systems", "Inventory Management", "Workflow Automation", "AI Automation", "AI Agents"],
    service: "Custom Development — Inventory Management System",
  },
];
