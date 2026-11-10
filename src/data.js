// Edit this file to update the whole site.
export const profile = {
  name: "Aditya Raj",
  eyebrow: "CLOUD & DEVOPS ENGINEER",
  tagline: "Engineering reliable cloud platforms.",
  intro:
    "Cloud, DevOps and platform engineer with 7+ years of experience automating enterprise delivery on Azure, supporting cloud migration, CI/CD, infrastructure as code, containers, and observability. Currently driving Azure modernization and production workload migration initiatives for enterprise systems.",
  location: "Hyderabad, India",
  github: "https://github.com/adi099r",
  linkedin: "https://www.linkedin.com/in/aditya099raj/",
  email: "", // add your email to show a "Get in touch" button
  avatar: "https://avatars.githubusercontent.com/u/68183850?v=4",
};

export const stats = [
  { n: "7+", l: "Years in cloud & DevOps" },
  { n: "2", l: "Clouds: Azure & AWS" },
  { n: "3", l: "Featured projects" },
];

export const strip = ["Azure DevOps", "CI/CD", "Terraform", "Docker", "Kubernetes", "Azure", "AWS"];

export const architecture = [
  { title: "Source", sub: "GitHub · Azure Repos" },
  { title: "CI/CD pipeline", sub: "GitHub Actions · Azure DevOps · Jenkins" },
  { title: "Kubernetes", sub: "AKS · EKS · Helm · Argo CD" },
  { title: "Observability", sub: "Azure Monitor · Prometheus · Grafana" },
];
export const iac = { title: "IaC", sub: "Terraform · ARM\n · Bicep" };

export const focus = [
  { icon: "⌘", title: "DevOps & CI/CD", text: "Automated build and release pipelines with Azure DevOps, GitHub Actions and Jenkins.", tags: ["Azure DevOps", "GitHub Actions", "Jenkins", "Git"] },
  { icon: "⌬", title: "Cloud & IaC", text: "Infrastructure provisioned as code on Azure and AWS, repeatable and reviewable.", tags: ["Terraform", "Bicep", "ARM", "AWS"] },
  { icon: "◈", title: "Containers & GitOps", text: "Containerized apps running on Kubernetes, delivered with Helm and Argo CD.", tags: ["Docker", "Kubernetes", "Helm", "Argo CD"] },
];

export const exploring = ["GitOps with Argo CD and Helm", "AWS: EKS, VPC and IAM", "Azure OpenAI and semantic search", "Java and Spring Boot"];

export const toolbox = [
  { group: "Cloud & DevOps", text: "Where code meets infrastructure.", items: ["Azure", "AWS", "Terraform", "Bicep", "Azure DevOps", "GitHub Actions", "Jenkins"] },
  { group: "Containers & platforms", text: "Packaging and running workloads at scale.", items: ["Docker", "Kubernetes", "Helm", "Argo CD"] },
  { group: "Observability", text: "Finding problems from the evidence first.", items: ["Azure Monitor", "App Insights", "KQL", "Prometheus", "Grafana"] },
  { group: "Scripting & development", text: "Automation glue and application layers.", items: ["PowerShell", "Bash", "YAML", ".NET", "React", "PostgreSQL"] },
];

// Fill these in and the sections appear automatically.
// experience: { role: "Job title", company: "Company", period: "2021 - Present", points: ["What you did..."] }
export const experience = [
  {
    role: "Senior Analyst - DevOps Engineer",
    company: "Accenture Solutions Pvt. Ltd.",
    period: "10/2026 – Present | Hyderabad, India",
    points: [
      "Contributing to an ongoing migration of 5+ production workloads from AWS to Azure, supporting architecture design and phased cutover planning to minimize downtime and optimize infrastructure costs.",
      "Provisioning and managing Azure infrastructure using Terraform, including Azure Container Apps, networking, and PostgreSQL, enabling repeatable, version-controlled environments.",
      "Containerizing Java (Spring Boot) and React.js applications with Docker and building GitHub Actions CI/CD pipelines to automate build, test, image publishing, and deployment to Azure.",
      "Migrating PostgreSQL databases and Kafka-based event streaming from AWS to Azure.",
      "Collaborating with cross-functional teams in an Agile setup, using Jira for sprint tracking and Confluence for architecture docs and runbooks while validating performance, security, and monitoring in the new environment.",
    ],
  },
  {
    role: "Senior Analyst — Platform & DevOps Engineer",
    company: "Accenture Solutions Pvt. Ltd.",
    period: "07/2023 – 09/2026 | Hyderabad, India",
    points: [
      "Designed, maintained and troubleshot Azure DevOps CI/CD pipelines for 20+ enterprise applications, covering build, validation, deployment and release workflows across development, test and production environments.",
      "Automated Azure infrastructure provisioning and configuration using Terraform, ARM Templates and Bicep, enabling repeatable deployments and alignment with enterprise IaC and governance standards.",
      "Managed Azure cloud resources and platform components including App Services, Azure Functions, Storage, Key Vault, networking and container platforms; troubleshot deployment and environment issues across subscriptions.",
      "Supported containerized application delivery using Docker and Kubernetes/AKS, including deployment configuration, release troubleshooting and environment stability activities.",
      "Worked on CI/CD and infrastructure automation for an Azure-based AI platform using Azure OpenAI and semantic search, including deployment of supporting Azure AI resources and application infrastructure.",
      "Implemented monitoring, logging and alerting with Azure Monitor, Log Analytics, Application Insights and KQL to investigate production issues, deployment failures, performance degradation and application health.",
      "Drove security and identity improvements including Managed Identity adoption, RBAC-based access and remediation of component vulnerabilities across Azure workloads.",
      "Troubleshot complex production issues across pipelines, networking, application hosting, identity, storage and Azure services; performed root-cause analysis and coordinated fixes with teams.",
      "Collaborated with developers and cross-functional teams in Agile/Scrum delivery to improve release processes, deployment reliability, automation and operational readiness.",
    ],
  },
  {
    role: "Analyst — DevOps Engineer",
    company: "Accenture Solutions Pvt. Ltd.",
    period: "09/2021 – 06/2023 | Hyderabad, India",
    points: [
      "Managed Azure DevOps Pipelines, Azure Repos and Git branching strategies for enterprise Power BI release workflows.",
      "Built YAML and PowerShell automation for deployment, environment configuration and release validation, accelerating software release cycles by 50%.",
      "Performed root-cause analysis and troubleshooting for pipeline failures, deployment issues and code integration defects, improving release reliability and reducing blockers.",
    ],
  },
  {
    role: "Server Administrator",
    company: "LTIM",
    period: "02/2019 – 09/2021 | Hyderabad, India",
    points: [
      "Administered Windows Server infrastructure including installation, patching, configuration management, DNS, DHCP and network services.",
      "Supported enterprise environments through proactive patch management, infrastructure maintenance and operational troubleshooting.",
    ],
  },
];
// credentials: { title: "Microsoft Certified: ...", date: "Mar 2025", link: "https://..." }
export const credentials = [];

export const projects = [
  { title: "Amazon Prime Video on Kubernetes", text: "Deploys an Amazon Prime Video-inspired streaming platform on Kubernetes with microservices, containerized services, and cloud-native platform automation.", tags: ["Kubernetes", "Docker", "Microservices", "DevOps"], link: "https://github.com/adi099r/amazon-prime-video-kubernetes" },
];
