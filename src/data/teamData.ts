export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  specialization: string;
  skills: string[];
  initials: string;
  linkedin?: string;
  isFounder?: boolean;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Hriday Krishnan",
    role: "Co-Founder | Sales, Marketing & Management",
    bio: "Hriday Krishnan is the Co-Founder of FineScaleAI and leads the business side of the company. He is responsible for sales, marketing, business development, client relationships, partnerships, and overall management. At FineScaleAI, Hriday works closely with clients to understand their business challenges, identify opportunities for automation, and help shape solutions that create meaningful business value. He also contributes to the company's growth strategy, client acquisition, partnerships, and day-to-day business operations.",
    specialization: "Business, Sales & Growth",
    skills: [
      "Sales",
      "Marketing Strategy",
      "Business Development",
      "Client Acquisition",
      "Client Relationship Management",
      "Strategic Partnerships",
      "Lead Generation",
      "Business Strategy",
      "Growth Strategy",
      "Negotiation",
      "Account Management",
      "Business Operations",
    ],
    initials: "HK",
    linkedin: "https://www.linkedin.com/in/hriday-krishnan-852b5541b/",
    isFounder: true,
  },
  {
    name: "Vaibhav Mehta",
    role: "Co-Founder | Technical Lead & AI Automation Engineer",
    bio: "Vaibhav Mehta is the Co-Founder and technical lead at FineScaleAI, responsible for the company's technology, software development, and AI automation systems. He specializes in Python backend development, full-stack development, AI automation, AI agents, API integrations, system architecture, and building production-ready software systems. He leads the technical implementation of FineScaleAI's solutions, turning complex business processes into scalable and intelligent automated systems.",
    specialization: "Technology, AI & Engineering",
    skills: [
      "Python",
      "Backend Development",
      "Full-Stack Development",
      "AI Automation",
      "AI Agents",
      "AI Engineering",
      "API Integration",
      "System Architecture",
      "FastAPI",
      "Database Development",
      "Workflow Automation",
      "Cloud & Production Deployment",
    ],
    initials: "VM",
    linkedin: "https://www.linkedin.com/in/vaibhav-mehta-137763328/",
    isFounder: true,
  },
  {
    name: "Akashy Sastry",
    role: "Business Analyst | Commission-Based Contractor",
    bio: "Works with FineScaleAI to analyze business processes, identify operational bottlenecks, and translate client requirements into clear business and automation opportunities. Supports solution discovery, workflow analysis, process documentation, and helps bridge the gap between client requirements and technical implementation.",
    specialization: "Business & Process Analysis",
    skills: [
      "Business Analysis",
      "Process Analysis",
      "Requirements Gathering",
      "Workflow Mapping",
      "Process Optimization",
      "Client Discovery",
      "Documentation",
      "Automation Opportunity Analysis",
      "Business Process Design",
      "Solution Analysis",
    ],
    initials: "AS",
  },
];

export const engineeringPrinciples = [
  {
    number: "01",
    title: "Deterministic Guardrails Over Raw Prompting",
    description: "Enterprise operations cannot rely on probabilistic luck. We wrap non-deterministic LLMs inside deterministic state machines and mathematical boundary checks.",
  },
  {
    number: "02",
    title: "Sub-Second Latency as a First-Class Feature",
    description: "Every millisecond of latency reduces human conversational engagement. We optimize every layer from token streaming to network hops for near-instant response.",
  },
  {
    number: "03",
    title: "Zero Data Retention & Sovereign Enclaves",
    description: "Your proprietary company data is your competitive moat. We deploy inside your own VPC perimeter with zero training leakage and strict cryptographic security.",
  },
  {
    number: "04",
    title: "Action-Oriented Resolution, Not Simple Chat",
    description: "We don't build informational FAQ chatbots. Our systems are autonomous actors equipped with authenticated tools to execute real business workflows end-to-end.",
  },
];
