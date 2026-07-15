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
    title: "Nexus Platform",
    problem:
      "Engineering teams move slower when service creation, release workflows, infrastructure requests, and runtime visibility are fragmented across disconnected tools and manual handoffs.",
    stack: [
      "Internal Developer Platform",
      "Golden Paths",
      "Platform APIs",
      "GitOps",
      "Self-Service Infrastructure",
      "Platform Governance",
    ],
    architectureSummary: [
      "A platform portal organizes service catalog workflows, release actions, infrastructure requests, and runtime views into one developer-facing product.",
      "Platform APIs drive service creation, promotion, rollback, and infrastructure flows while GitOps repositories keep delivery and provisioning reviewable.",
      "Reusable workflows, runtime adapters, and platform metadata connect GitHub, Kubernetes, ArgoCD, Crossplane, and policy controls into a supported path.",
    ],
    howItWorks: [
      "Developers choose a Golden Path and create a service through the platform workflow.",
      "The platform generates or personalizes the repository, connects delivery defaults, and registers the service for GitOps-based release management.",
      "Promotion, rollback, and infrastructure requests run through platform-owned workflows instead of ad hoc operational steps.",
      "Runtime and audit views keep release state, ownership, and platform activity visible inside the same product surface.",
    ],
    failureScenario:
      "Platform workflows are only trustworthy if promotion, rollback, infrastructure requests, and runtime visibility remain reviewable, recoverable, and observable during change.",
    runbookSteps: [
      "Create a service through the Golden Path flow and verify the generated delivery baseline.",
      "Promote a release through GitOps-controlled workflows with review and audit context.",
      "Request infrastructure through the platform and generate reviewable provisioning changes.",
      "Inspect release history, runtime signals, and rollback paths from the platform surface.",
    ],
    evidence: [
      "Platform login and service catalog flows showing developer-facing platform entry points.",
      "Repository generation, promotion, rollback, and provisioning code paths tied to platform APIs.",
      "GitOps registration, runtime adapters, and audit-log behavior proving platform workflow ownership.",
      "Live deployment and repositories demonstrating the platform product and its supporting control-plane code.",
    ],
    result:
      "Built a platform product that standardizes software delivery, exposes self-service infrastructure through supported workflows, and keeps governance closer to the developer path.",
    githubUrl: "https://github.com/ohanyere/nexeus-Idp",
    keyResult: "Standardized service creation, release control, and self-service infrastructure through one developer-facing platform product.",
  },
  {
    slug: "eks-dr",
    title: "Kubernetes TeamEnvironment Operator",
    problem:
      "Platform teams need a repeatable way to provision tenant-ready Kubernetes environments without creating namespaces, RBAC, quotas, and network rules by hand for every team.",
    stack: [
      "Kubernetes Operator",
      "Custom Resources",
      "Tenant Automation",
      "RBAC Provisioning",
      "Resource Guardrails",
      "Developer Self-Service",
    ],
    architectureSummary: [
      "A Kubernetes Custom Resource represents a team environment request as declarative platform intent.",
      "The reconciliation loop provisions namespaces, RBAC, ResourceQuotas, LimitRanges, NetworkPolicies, Service Accounts, and other tenant resources automatically.",
      "The operator turns repeated cluster setup work into platform automation that can sit inside an Internal Developer Platform or self-service workflow.",
    ],
    howItWorks: [
      "A team or platform workflow submits a TeamEnvironment Custom Resource.",
      "The operator reconciles the desired state and creates the tenant resources required for a usable environment.",
      "Platform defaults for isolation, quotas, and access control are applied consistently across environments.",
      "Updates to the Custom Resource allow platform automation to keep team environments aligned with declared intent.",
    ],
    failureScenario:
      "Delete or drift managed tenant resources and verify that the controller restores the declared environment baseline through reconciliation.",
    runbookSteps: [
      "Create a TeamEnvironment Custom Resource representing the desired tenant environment.",
      "Observe reconciliation of namespaces, RBAC, quotas, policies, and service accounts.",
      "Change or remove managed resources to test that the controller restores declared state.",
      "Review the resulting tenant environment for repeatability, isolation, and policy consistency.",
    ],
    evidence: [
      "Custom Resource definitions and reconciliation logic showing controller-driven environment management.",
      "Provisioned tenant resources proving automated namespace, RBAC, quota, and policy creation.",
      "Controller behavior demonstrating that platform defaults are applied consistently through Kubernetes APIs.",
      "Operational traces or manifests showing repeatable environment provisioning from declarative input.",
    ],
    result:
      "Built Kubernetes automation that provisions tenant-ready environments through Custom Resources instead of manual namespace administration.",
    githubUrl: "https://github.com/ohanyere/platform-core",
    keyResult: "Turned tenant environment setup into controller-driven platform automation for namespaces, access, and guardrails.",
  },
  {
    slug: "finops",
    title: "FinOps Cost Guardrail Pipeline",
    problem:
      "Infrastructure changes can increase cloud spend silently unless platform workflows surface cost impact and enforce guardrails before changes reach production.",
    stack: [
      "Platform Governance",
      "FinOps Guardrails",
      "Policy-Aware CI",
      "Reviewable Changes",
      "Delivery Safety",
    ],
    architectureSummary: [
      "A review-first workflow evaluates infrastructure changes before merge and surfaces projected cost impact directly in the delivery path.",
      "Cost deltas are attached to pull requests so platform and application teams can make decisions with financial context visible.",
      "Threshold enforcement turns cost controls into a platform guardrail instead of a manual review exercise.",
    ],
    howItWorks: [
      "A pull request triggers a review workflow for infrastructure changes.",
      "The pipeline evaluates projected spend impact and posts the result into the change discussion.",
      "Threshold checks decide whether the change remains within acceptable platform guardrails.",
      "If the projected spend exceeds the defined boundary, the workflow blocks the change before merge.",
    ],
    failureScenario:
      "Submit a change with projected spend above the accepted threshold and verify that the platform workflow blocks it before merge.",
    runbookSteps: [
      "Open a pull request with an infrastructure change that should be reviewed for spend impact.",
      "Run the review workflow and inspect the generated cost context.",
      "Compare the projected change against platform guardrail thresholds.",
      "Block the change automatically if it exceeds the defined boundary.",
    ],
    evidence: [
      "Review workflow runs showing projected cost context attached to pull requests.",
      "Change discussions with visible spend deltas for platform-aware decision making.",
      "A blocked workflow result when the defined threshold is exceeded.",
      "Validation output proving that governance happens before infrastructure changes are merged.",
    ],
    result:
      "Built a governance-oriented platform workflow that keeps infrastructure changes reviewable, cost-aware, and safer before deployment.",
    githubUrl: "https://github.com/ohanyere/finops-cost-guardrail-pipeline",
    keyResult: "Turned cost awareness into an automated platform guardrail that blocks risky changes before merge.",
  },
  {
    slug: "progressive-delivery",
    title: "Progressive Delivery Workflow",
    problem:
      "Release workflows become fragile when teams lack a supported way to stage rollouts, validate change safely, and recover quickly from a bad release.",
    stack: [
      "Release Automation",
      "GitOps Workflows",
      "Canary Safety",
      "Rollback Control",
      "Platform Reliability",
    ],
    architectureSummary: [
      "A platform-owned release workflow manages staged promotion and recovery behavior instead of relying on all-at-once deployment patterns.",
      "Canary steps create decision points so a new release can be observed before full rollout.",
      "Rollback remains part of the supported workflow so release recovery is designed in rather than improvised later.",
    ],
    howItWorks: [
      "Ship a release through a staged rollout path rather than a single-step deployment.",
      "Observe the rollout while exposure increases in controlled increments.",
      "Introduce a failure condition or unhealthy signal during rollout validation.",
      "Trigger the rollback path to restore the last stable version and preserve service reliability.",
    ],
    failureScenario:
      "Introduce a bad release during staged rollout validation and verify that the platform workflow returns safely to the stable version.",
    runbookSteps: [
      "Start a staged rollout for the new release.",
      "Observe health and rollout progress during the controlled exposure window.",
      "Detect a failure condition before full promotion.",
      "Run the rollback path and confirm recovery to the stable release.",
    ],
    evidence: [
      "Rollout traces or screenshots showing staged release progression.",
      "Validation records for an unhealthy release introduced during rollout.",
      "Rollback confirmation showing return to the previous stable version.",
      "Post-rollback checks proving service recovery through the supported workflow.",
    ],
    result:
      "Built release automation that makes staged rollout and rollback part of the platform path for safer software delivery.",
    githubUrl: "https://github.com/ohanyere/progressive-delivery-system",
    keyResult: "Validated that staged rollout and rollback behavior can be treated as reusable platform release mechanics.",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
