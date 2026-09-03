export interface FAQItem {
  id: string;
  category: "General" | "AI Automation" | "Implementation" | "Pricing & ROI" | "Integrations" | "Security" | "Enterprise Intelligence";
  question: string;
  answer: string;
  tags: string[];
}

export const faqCategories = [
  "All Questions",
  "General",
  "AI Automation",
  "Enterprise Intelligence",
  "Implementation",
  "Pricing & ROI",
  "Integrations",
  "Security",
] as const;

export const faqData: FAQItem[] = [
  {
    id: "what-makes-finescale-different",
    category: "General",
    question: "How is FineScale AI different from standard AI agencies and SaaS tools?",
    answer: "Most generic AI agencies wrap off-the-shelf ChatGPT APIs with brittle Zapier connections that fail silently in enterprise environments. FineScale AI builds deterministic, production-grade AI infrastructure. We deploy multi-agent state machines with strict guardrails, sub-300ms latency telephony backends, private VPC data isolation, and deep bi-directional ERP/CRM mutations. Our systems are built to scale with zero hallucinations and guaranteed SLAs.",
    tags: ["difference", "architecture", "agency comparison", "reliability"],
  },
  {
    id: "how-fast-can-we-deploy",
    category: "Implementation",
    question: "What is the typical timeline to deploy a production AI system?",
    answer: "Our standard enterprise deployments follow a 4-to-8 week sprint lifecycle: Week 1-2 involves deep workflow auditing, data pipeline ingestion, and guardrail specification. Week 3-5 is architecture building and synthetic edge-case benchmarking. Week 6 is staging pilot with human-in-the-loop validation. By Week 7-8, the system is fully autonomous in production with real-time monitoring telemetry.",
    tags: ["timeline", "deployment", "sprint", "speed"],
  },
  {
    id: "data-privacy-and-security",
    category: "Security",
    question: "Is our proprietary company and customer data used to train public AI models?",
    answer: "Never. We enforce a strict Zero-Data-Retention policy with all LLM backends (Azure OpenAI Private Enclaves, AWS Bedrock, or Private Self-Hosted weights). Your proprietary customer records, call transcripts, and documents remain strictly isolated within your encrypted enterprise perimeter. All systems are architected to be SOC2 Type II, HIPAA, and GDPR compliant.",
    tags: ["security", "privacy", "SOC2", "HIPAA", "training data"],
  },
  {
    id: "voice-agent-latency",
    category: "AI Automation",
    question: "How do your AI voice agents achieve sub-300ms latency without awkward pauses?",
    answer: "We engineer a streaming pipeline combining sub-50ms Voice Activity Detection (VAD), streaming neural Speech-to-Text (Nova-2), low-latency token streaming LLMs, and WebSocket-driven acoustic voice synthesis (Cartesia / Deepgram). This allows our voice agents to respond in under 280ms, handle natural user interruptions instantly, and modulate tone dynamically.",
    tags: ["voice", "latency", "telephony", "speech"],
  },
  {
    id: "pricing-and-roi-model",
    category: "Pricing & ROI",
    question: "How are FineScale AI engagements structured and priced?",
    answer: "We offer transparent enterprise engagements consisting of an upfront Architecture & Deployment Sprint (custom engineering, data integration, testing) followed by an Ongoing Optimization & SLA Maintenance retainer (continuous prompt fine-tuning, latency optimization, model upgrades, and dedicated infrastructure support). Most clients achieve full ROI within 90 days of go-live.",
    tags: ["pricing", "cost", "retainer", "ROI"],
  },
  {
    id: "integration-with-legacy-systems",
    category: "Integrations",
    question: "Can FineScale AI integrate with our custom internal databases or legacy ERPs?",
    answer: "Yes. Our engineering team builds custom API connectors and headless microservices that bridge modern AI agents with legacy SOAP/REST endpoints, on-prem SQL databases, SAP S/4HANA, AS400 systems, custom webhooks, and enterprise platforms like Salesforce, HubSpot, and Epic FHIR.",
    tags: ["integrations", "ERP", "Salesforce", "legacy systems", "APIs"],
  },
  {
    id: "hallucination-prevention",
    category: "AI Automation",
    question: "How do you prevent AI hallucinations when dealing with critical business data?",
    answer: "We do not let raw generative models make uncontrolled decisions. We utilize deterministic state machines, mathematical validation layers, multi-agent cross-verification swarms, and bounded tool execution schemas. If a query falls below a 99% confidence threshold, it triggers an instant graceful human fallback or confirmation step.",
    tags: ["hallucinations", "guardrails", "accuracy", "safety"],
  },
  {
    id: "ongoing-maintenance-and-monitoring",
    category: "Implementation",
    question: "Who maintains the AI systems after deployment?",
    answer: "FineScale AI provides 24/7 telemetry monitoring, latency tracking, automated regression testing, and weekly performance audits. As frontier foundation models improve (e.g., GPT-5, Claude 3.5 Sonnet updates), we upgrade your pipelines seamlessly without breaking downstream production workflows.",
    tags: ["maintenance", "support", "SLA", "monitoring"],
  },
  {
    id: "replace-vs-augment",
    category: "General",
    question: "Do your AI systems replace our employees or augment them?",
    answer: "Our systems eliminate repetitive, low-leverage mechanical tasks (tier-1 triage, manual CRM data entry, rote quotation calculation, appointment booking) so your high-value human team can focus 100% of their energy on complex client relationships, high-stakes negotiations, and strategic growth.",
    tags: ["staffing", "productivity", "automation vs human"],
  },
  {
    id: "custom-fine-tuned-models",
    category: "Enterprise Intelligence",
    question: "When do you recommend custom fine-tuned models vs Retrieval-Augmented Generation (RAG)?",
    answer: "We use a hybrid architecture: RAG is used for dynamic, frequently changing knowledge (inventory levels, live pricing, customer histories), while fine-tuned open-source model weights (e.g. Llama 3, Mistral) are deployed when you require ultra-fast execution, proprietary reasoning styles, or 100% offline on-prem security.",
    tags: ["fine-tuning", "RAG", "models", "architecture"],
  },
];
