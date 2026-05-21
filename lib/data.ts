// All content sourced from Daniel Ojiezele's CV.
// Edit values here to update the site — everything renders from this file.

export const profile = {
  name: "Daniel Ojiezele",
  role: "FullStack Engineer",
  tagline:
    "Building scalable, high-performance web applications for fintech and enterprise.",
  location: "Lagos, Nigeria (GMT+1)",
  availability:
    "Open to remote roles worldwide — comfortable overlapping with US and European time zones.",
  email: "danielitoyaojiezele@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/daniel-ojiezele-73022113b/",
    github: "https://github.com/", // TODO: replace with your GitHub URL
    portfolio: "#",
  },
  intro:
    "Dynamic FullStack Developer with expertise in Node.js, React, Next.js, TypeScript, and Tailwind CSS. I care about modern UI/UX, responsive design, and component-based architecture — and I've shipped products across fintech, enterprise, and e-commerce.",
};

export const stack = [
  "TypeScript",
  "Node.js",
  "React",
  "Next.js",
  "Express",
  "PostgreSQL",
  "MongoDB",
  "GraphQL",
  "REST APIs",
  "Apollo Server",
  "Docker",
  "AWS",
  "GCP",
  "Tailwind CSS",
  "JWT",
  "Jest",
  "Cypress",
];

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
};

export const experience: Experience[] = [
  {
    role: "Frontend Engineer",
    company: "Providus Bank",
    location: "Nigeria · On-site",
    period: "Oct 2025 — Present",
    highlights: [
      "Updated the account opening portal with facial recognition and liveness checks in line with CBN policy.",
      "Built the Voice of Employee platform for staff to submit complaints and suggestions for management review.",
      "Built a payment processor linked to the Lagos State tax portal, enabling online tax remittance via direct deposit and bank transfer.",
      "Built an e-invoicing platform letting customers create CBN-compliant invoices.",
    ],
  },
  {
    role: "Backend Engineer",
    company: "Cplynk",
    location: "Nigeria · Remote",
    period: "Jun 2025 — Dec 2025",
    highlights: [
      "Built the backend API for the riders, drivers, and admin dashboard application using Node.js.",
      "Implemented realtime interaction between riders, drivers, and admin using Socket.io.",
      "Designed business logic and in-app process flows.",
    ],
  },
  {
    role: "FullStack Engineer",
    company: "Mansastars Advisory",
    location: "Germany · Remote",
    period: "Jan 2024 — Sep 2025",
    highlights: [
      "Built and deployed the company's core website from scratch with Node.js and React; integrated Stripe and deployed the full stack on AWS.",
      "Developed the LeadRep.ai platform — React/TypeScript frontend, Node.js/TypeScript backend.",
      "Set up staging and production pipelines on Google Cloud Platform (GCP).",
      "Provisioned AI services on Azure and integrated the Apollo API for people-data management.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Decagon",
    location: "Nigeria · Hybrid",
    period: "Sep 2023 — Mar 2024",
    highlights: [
      "Built enterprise-level UI components with React, improving UX by 40%.",
      "Automated testing with Jest and Cypress to ensure stability.",
      "Optimized frontend performance, reducing load time by 25%.",
    ],
  },
  {
    role: "Freelance Web Developer",
    company: "Self-employed",
    location: "Remote",
    period: "Mar 2020 — Aug 2023",
    highlights: [
      "Developed fintech applications with React, Node.js, and PostgreSQL.",
      "Implemented task automation with cron jobs to improve efficiency.",
      "Maintained databases for high security and transaction reliability.",
    ],
  },
];

export type Project = {
  name: string;
  blurb: string;
  tech: string[];
  link?: string;
  linkLabel?: string;
};

export const projects: Project[] = [
  {
    name: "LeadRep.ai",
    blurb:
      "An AI-powered CRM that generates recommended leads matched to a business profile, with automated lead and contact management plus in-house and external API integrations.",
    tech: ["TypeScript", "Express", "React", "PostgreSQL", "JWT", "GCP", "OpenAI", "Apollo API"],
    link: "https://leadrep.ai",
    linkLabel: "leadrep.ai",
  },
  {
    name: "Mansa CRM",
    blurb:
      "A customer relationship management app with seamless in-house tooling and external API integrations.",
    tech: ["TypeScript", "Express", "React", "PostgreSQL", "JWT", "AWS"],
    link: "https://crm.mansastars.com/auth/login",
    linkLabel: "crm.mansastars.com",
  },
  {
    name: "CloudBank & Shanono",
    blurb:
      "A microfinance banking platform offering money transfers and bill payments.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Laravel", "MySQL", "Node.js"],
    link: "https://shanonobank.com",
    linkLabel: "shanonobank.com",
  },
  {
    name: "Deca-Event",
    blurb:
      "An event management platform for ticketing and event organization.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Express", "PostgreSQL"],
    link: "https://github.com/decadevs/live-project-frontend-deca-events-frontend",
    linkLabel: "View on GitHub",
  },
  {
    name: "EduMate",
    blurb:
      "A school management app that lets teachers share resources and manage course activities.",
    tech: ["React", "TypeScript", "Express", "MongoDB", "JWT", "Bootstrap"],
    link: "https://github.com/decadevs/week-8-mini-project-node018",
    linkLabel: "View on GitHub",
  },
  {
    name: "Quick Grade",
    blurb:
      "A tertiary-institution management app for assessments, exams, and grading.",
    tech: ["React", "TypeScript", "Express", "PostgreSQL", "JWT", "Tailwind CSS"],
  },
];

export const certifications = [
  "Frontend Web Development (HTML + CSS + JS) — SideHustle, Cohort 6 (2022)",
  "Backend Web Development (PHP + MySQL) — SideHustle, Cohort 7 (2023)",
  "Frontend Web Development (JS + React) — Microsoft Learn (2023)",
  "SCRUM Fundamentals Certification — SCRUMstudy (2023)",
];
