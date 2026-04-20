import ProjectCard, { type ProjectCardProps } from "./ProjectCard";

const projects: ProjectCardProps[] = [
  {
    title: "Kubernetes Cost Guard",
    group: "Platform & Infrastructure",
    description:
      "Kubernetes workload analysis service that inspects deployments, extracts CPU, memory, and replica configuration, compares declared requests against observed usage patterns, applies namespace and replica guardrails, supports dry-run validation, and persists recommendation history in PostgreSQL for traceability.",
    stack: ["Go", "Kubernetes", "PostgreSQL", "Metrics Server", "Slack", "Backstage"],
  },
  {
    title: "Scholarship Platform MVP",
    group: "Cloud-Native Delivery",
    description:
      "Containerized backend platform on Kubernetes with independently deployable workloads, GitOps synchronization through ArgoCD, CI/CD pipelines for image builds and deployments, Terraform-managed AWS infrastructure, Kubernetes Services and Ingress, and a Karpenter-ready scaling model.",
    stack: [
      "Go",
      "PostgreSQL",
      "Redis",
      "Kubernetes",
      "Helm",
      "Terraform",
      "AWS",
      "ArgoCD",
      "GitHub Actions",
    ],
    githubUrl: "https://github.com/ohanyere/scholarship-mvp",
  },
  {
    title: "GraphQL E-Commerce Store",
    group: "Backend Systems",
    description:
      "Commerce backend-facing application focused on GraphQL data access, authentication-aware flows, product querying, cart behavior, API boundaries, and payment-readiness tradeoffs.",
    stack: ["TypeScript", "GraphQL", "Apollo Client", "Auth", "API Design"],
    githubUrl: "https://github.com/ohanyere/graphql-ecommerce",
    liveUrl: "https://graphql-ecommerce-phi.vercel.app/",
  },
];

export default function ProjectsSection() {
  return (
    <section className="px-4 py-16 sm:py-20" id="projects">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-wider text-gray-500">
            Selected Engineering Work
          </p>
          <h2 className="mt-2 text-2xl font-bold leading-tight tracking-tight text-gray-900 sm:text-3xl">
            Platform, backend, and cloud-native projects
          </h2>
          <p className="mt-3 text-base leading-relaxed text-gray-600">
            A focused set of projects that support infrastructure automation, backend workflows, deployment systems, and reliability-oriented engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
