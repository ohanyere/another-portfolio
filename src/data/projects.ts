export type ProjectRecord = {
  slug: string;
  title: string;
  problem: string;
  stack: string[];
  architectureSummary: string[];
  howItWorks: string[];
  failureScenario: string;
  runbookSteps: string[];
  evidence: string[];
  result: string;
  githubUrl: string;
  keyResult: string;
};

export const projects: ProjectRecord[] = [
  {
    slug: "cluster-meter",
    title: "Cluster Meter",
    problem:
      "Platform teams need fast visibility into cluster capacity and workload pressure before resource issues become production incidents.",
    stack: ["Go", "Kubernetes", "CLI", "HTTP API", "Docker", "GitHub Actions", "ArgoCD"],
    architectureSummary: [
      "A Go service exposes both a CLI workflow and an HTTP API for cluster analysis.",
      "The analyzer queries Kubernetes resource state and capacity signals, then evaluates CPU, memory, and pod pressure conditions.",
      "Results are returned as actionable recommendations that operators can use to right-size workloads or prepare scaling actions.",
    ],
    howItWorks: [
      "Connect to the target cluster and collect workload and capacity metrics.",
      "Evaluate pressure conditions across CPU, memory, and pod availability.",
      "Return recommendations through the CLI and API so the same analysis can support both operators and automation.",
      "Package the service in Docker and ship it through GitHub Actions and Kubernetes deployment workflows.",
    ],
    failureScenario:
      "Simulate CPU and memory pressure in the cluster, then verify that the tool detects pressure and surfaces actionable recommendations.",
    runbookSteps: [
      "Collect cluster metrics from the target environment.",
      "Analyze pressure across CPU, memory, and pod capacity.",
      "Review generated recommendations and identify affected workloads.",
      "Act by right-sizing requests, scaling capacity, or adjusting workload placement.",
    ],
    evidence: [
      "CLI output showing pressure detection for CPU, memory, or pod capacity.",
      "HTTP API response demonstrating machine-readable recommendation output.",
      "Container build and CI execution proving repeatable packaging.",
      "Kubernetes or ArgoCD deployment evidence showing the tool running in-cluster.",
    ],
    result:
      "Built a platform tool that turns raw cluster state into operator-ready recommendations for capacity and pressure management.",
    githubUrl: "https://github.com/ohanyere/cluster-meter",
    keyResult: "Detected cluster pressure conditions and produced actionable capacity recommendations.",
  },
  {
    slug: "eks-dr",
    title: "EKS Disaster Recovery Platform",
    problem:
      "Backup strategies are incomplete unless restore workflows are tested and proven under failure conditions.",
    stack: ["Kubernetes", "Amazon EKS", "Velero", "Amazon S3", "kubectl", "YAML"],
    architectureSummary: [
      "An EKS cluster runs workloads protected by Velero backup and restore workflows.",
      "Backup artifacts are stored in S3 so cluster state can be restored after failure simulation.",
      "The workflow validates that protected workloads and namespace-scoped resources can be recovered after deletion.",
    ],
    howItWorks: [
      "Create backups of target namespaces and workloads with Velero.",
      "Persist recovery artifacts to S3 for durable backup storage.",
      "Simulate failure by deleting a namespace and its workloads.",
      "Run restore operations and validate that workloads return successfully.",
    ],
    failureScenario:
      "Delete a namespace to simulate failure, then restore the workloads from Velero backups stored in S3.",
    runbookSteps: [
      "Create and verify a Velero backup for the target namespace.",
      "Delete the namespace to simulate a destructive failure event.",
      "Trigger a Velero restore from the stored backup artifacts.",
      "Validate restored workloads, resources, and application state.",
    ],
    evidence: [
      "Backup and restore command output from Velero.",
      "Namespace deletion proof used for the failure drill.",
      "Screenshots or terminal output showing workloads restored successfully.",
      "Validation notes confirming zero observed data loss after recovery.",
    ],
    result:
      "Proved that the disaster recovery workflow could restore deleted workloads successfully with zero observed data loss.",
    githubUrl: "https://github.com/ohanyere/eks-disaster-recovery-platform",
    keyResult: "Restored deleted workloads successfully after namespace failure simulation.",
  },
  {
    slug: "finops",
    title: "FinOps Cost Guardrail Pipeline",
    problem:
      "Infrastructure changes can increase cloud spend silently unless cost impact is surfaced and enforced before merge.",
    stack: ["Terraform", "Infracost", "GitHub Actions", "Pull Requests", "CI"],
    architectureSummary: [
      "A plan-only CI pipeline runs Terraform planning and cost analysis on pull requests.",
      "Infracost compares projected cost changes and surfaces the delta directly in review workflows.",
      "Threshold enforcement blocks changes that exceed acceptable cost guardrails before deployment.",
    ],
    howItWorks: [
      "A pull request triggers Terraform plan generation in CI.",
      "Infracost evaluates the plan output and computes the cost delta.",
      "The pipeline posts cost information to the review flow and checks threshold rules.",
      "If the projected change is too expensive, the workflow fails before merge.",
    ],
    failureScenario:
      "Submit an infrastructure change that exceeds the allowed cost threshold and confirm that CI blocks the pull request.",
    runbookSteps: [
      "Open a pull request with Terraform changes.",
      "Run plan-only CI to generate infrastructure diff output.",
      "Review the Infracost delta and compare environments.",
      "Block the change automatically if the configured threshold is exceeded.",
    ],
    evidence: [
      "GitHub Actions run showing Terraform plan and Infracost execution.",
      "Pull request cost diff output visible to reviewers.",
      "A failed pipeline result when the threshold is exceeded.",
      "Environment comparison proof demonstrating multi-environment review support.",
    ],
    result:
      "Created a pre-deployment cost control workflow that helps prevent expensive infrastructure changes from being merged.",
    githubUrl: "https://github.com/ohanyere/finops-cost-guardrail-pipeline",
    keyResult: "Blocked costly infrastructure changes before merge with automated CI guardrails.",
  },
  {
    slug: "progressive-delivery",
    title: "Progressive Delivery System",
    problem:
      "All-at-once deployments increase operational risk when a bad release reaches users before rollback can happen safely.",
    stack: ["Kubernetes", "Argo Rollouts", "Canary Deployments", "kubectl", "GitOps"],
    architectureSummary: [
      "Application releases are managed through Kubernetes with Argo Rollouts controlling progressive delivery steps.",
      "Canary stages allow partial rollout, observation, and decision points before full promotion.",
      "Rollback behavior is part of the workflow so failed releases can be reversed quickly.",
    ],
    howItWorks: [
      "Deploy a new version through a canary rollout strategy.",
      "Observe the rollout as traffic or workload exposure increases gradually.",
      "Simulate a failure condition for the new release.",
      "Allow rollback logic to return the system to the last stable version.",
    ],
    failureScenario:
      "Introduce a bad deployment during a canary rollout and verify that the system rolls back to the stable release.",
    runbookSteps: [
      "Start a canary deployment for the new version.",
      "Observe rollout progress and health signals.",
      "Detect release failure during the canary stage.",
      "Roll back to the previous stable version and confirm service recovery.",
    ],
    evidence: [
      "Argo Rollouts output or screenshots showing canary progression.",
      "Failure simulation records for the bad release.",
      "Rollback confirmation output showing reversion to the stable version.",
      "Post-rollback validation proving the service returned to healthy state.",
    ],
    result:
      "Demonstrated safer release mechanics with canary rollout control and verified rollback under failure conditions.",
    githubUrl: "https://github.com/ohanyere/progressive-delivery-system",
    keyResult: "Validated rollback behavior during a failed canary deployment.",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
