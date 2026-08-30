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
  githubUrl?: string;
  keyResult: string;
  decisions?: string[];
  tradeOffs?: string[];
  limitations?: string[];
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
    slug: "kubernetes-tenant-platform",
    title: "Kubernetes Tenant Platform",
    problem:
      "A self-service tenant platform replaces manual namespace administration with a bounded Tenant contract that turns team and environment intent into platform-managed capacity, access, networking, security, GitOps lifecycle, readiness, and audit history.",
    stack: [
      "Next.js Portal",
      "Platform API",
      "GitOps",
      "Tenant Control Plane",
      "Durable Audit Events",
      "Kubernetes Reconciliation",
    ],
    architectureSummary: [
      "Developer intent flows from a Next.js portal to a Go Platform API, through a governed GitHub branch and pull-request path, into Argo CD, and finally into a cluster-scoped Tenant custom resource reconciled by a HA Go operator.",
      "Git owns desired Tenant.spec, Kubernetes owns runtime and status, and a separate EventStore in PostgreSQL owns durable audit, GitOps, and lifecycle history without replacing either source of truth.",
      "The operator manages platform-owned Namespace, ResourceQuota, LimitRange, Role, RoleBinding, NetworkPolicy, and Pod Security configuration while preserving unrelated metadata and refusing silent adoption of foreign resources.",
    ],
    howItWorks: [
      "A developer requests a tenant by team, environment, and bounded resource, network, access, and deletion profiles instead of authoring Namespace, quota, RBAC, or NetworkPolicy YAML directly.",
      "The Platform API validates the request, records audit intent, creates a deterministic GitOps change, and exposes developer-oriented status and activity views rather than raw Kubernetes objects.",
      "Argo CD reconciles the desired Tenant resource, and the operator converges platform-owned capacity, group-based access, network policy, pod security defaults, and readiness conditions idempotently.",
      "If managed resources drift they are recreated or corrected, while ownership conflicts, stale deletion approvals, or dependency failures surface as safe degraded states rather than hidden takeover.",
    ],
    failureScenario:
      "A platform-owned resource drifts or a retained same-name resource conflicts with the current Tenant UID, and the control plane must either restore declared state or fail safely without silently adopting foreign infrastructure.",
    runbookSteps: [
      "Create a Tenant through the developer-oriented product contract and confirm that only team, environment, and bounded profiles are accepted as intent.",
      "Review the GitOps desired-state boundary and verify that Git stores Tenant.spec while Kubernetes returns runtime phase and readiness.",
      "Inspect reconciliation and status semantics for NamespaceReady, CapacityReady, AccessReady, NetworkReady, and aggregate Ready across profile changes or drift repair.",
      "Walk the retain-versus-destructive deletion flow and confirm exact-UID approval, webhook admission, fresh ownership validation, and namespace-last cleanup semantics.",
    ],
    evidence: [
      "README, architecture records, ADRs, API contracts, and validation targets show the full product boundary: portal, Platform API, GitOps path, Tenant CR, HA operator, and durable activity history.",
      "Tenant API and status contracts define bounded profiles, normalized readiness conditions, fail-safe retain deletion, and developer-oriented semantics rather than exposing raw child resources.",
      "Operator, webhook, and GitOps docs document deterministic ownership, drift correction, exact-UID destructive approval, fail-closed DELETE admission, and separation of Git desired state from Kubernetes runtime state.",
      "Stage 18 adds deterministic resilience coverage and an infrastructure-free portal demo; Stage 19 live Kubernetes acceptance has not been completed, so runtime claims remain intentionally bounded.",
    ],
    result:
      "Built a self-service tenant platform that treats Kubernetes tenancy as a governed control-plane problem: developers declare intent once, while the platform owns lifecycle, safety, readiness, and historical accountability.",
    githubUrl: "https://github.com/ohanyere/Kubernetes-Tenant-Platform",
    keyResult: "Turned Kubernetes tenancy into a platform product with GitOps-owned intent, controller-owned runtime convergence, normalized readiness, and durable audit history.",
    decisions: [
      "Tenant is the product contract because developers request a team and environment boundary, not a bundle of low-level Namespace, quota, RBAC, and NetworkPolicy primitives.",
      "Git owns Tenant.spec while Kubernetes owns runtime and status, which keeps desired state reviewable without writing transient controller facts back into Git.",
      "EventStore owns durable activity history so audit, GitOps, and lifecycle events survive beyond bounded Kubernetes status and expiring Kubernetes Events.",
      "The Platform API reads from cache for normal inventory views but performs direct safety-critical Kubernetes reads for destructive approval and ownership-sensitive operations.",
      "Controller reconciliation, Platform API lifecycle, and event observation are intentionally separated so status, mutation, and historical recording do not collapse into one component.",
    ],
    tradeOffs: [
      "A higher-level Tenant abstraction sharply reduces cognitive load, but it requires carefully governed profiles so the contract stays useful without leaking raw Kubernetes detail back to developers.",
      "GitOps gives reviewed, deterministic desired state, but it makes production mutation asynchronous: merge does not mean Ready, and Git plus Kubernetes become separate concurrency domains.",
      "Retain-by-default deletion and refusal to adopt foreign resources are safer for shared-cluster tenancy, but they require explicit remediation paths for retained-resource conflicts and destructive cleanup.",
      "The infrastructure-free demo and resilience harness make the product explainable and testable offline, but they do not count as live Kubernetes or Argo CD runtime proof.",
    ],
    limitations: [
      "Stage 18 resilience coverage and the portal demo are implemented, but Stage 19 live Kubernetes acceptance has not been completed.",
      "NetworkPolicy objects, HA topology, GitOps contracts, and failure boundaries are validated offline or statically; live packet-flow, Argo synchronization, and failover claims are intentionally not made yet.",
    ],
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
    title: "Progressive Delivery Platform",
    problem:
      "A progressive delivery platform separates artifact creation, GitOps deployment intent, runtime traffic shaping, health analysis, feature exposure, and rollback so releases progress through controlled decision points instead of all at once.",
    stack: [
      "Argo Rollouts",
      "Istio Traffic Management",
      "Prometheus Analysis",
      "GitOps",
      "Feature Flag Platform",
      "Release Safety",
    ],
    architectureSummary: [
      "Source changes pass through CI quality, artifact, SBOM, signing, and container stages before Git records reviewed deployment intent and Argo CD reconciles that intent into Kubernetes.",
      "Argo Rollouts owns canary, blue-green, experiment, promotion, abort, and rollback semantics while Istio manages routed stable-versus-candidate traffic and Prometheus supplies the analysis signals.",
      "Feature release control is implemented separately through OpenFeature and flagd so runtime feature exposure can progress or reverse independently of deployment traffic.",
    ],
    howItWorks: [
      "A stable version keeps serving while a candidate artifact is packaged through Helm, proposed through GitOps, and reconciled as an Argo Rollout rather than a one-shot Deployment update.",
      "Canary progression moves through 5, 20, 50, 75, and 100 percent exposure with timed pauses, automated Prometheus analysis, and a manual promotion gate after successful 50 percent checks.",
      "Blue-green is also supported as a first-class strategy with active and preview Services, pre-promotion and post-promotion analysis, and restoration semantics if post-cutover health fails.",
      "Optional rollout experiments compare baseline versus candidate behavior under routed traffic, while feature flags remain a separate platform control plane for progressive feature exposure and kill-switch behavior.",
    ],
    failureScenario:
      "A candidate release produces unacceptable error rate, latency, or insufficient evidence during analysis, and the rollout must stop or abort so stable traffic remains protected while the failure is investigated.",
    runbookSteps: [
      "Validate the Demo API, container image, Helm chart, and GitOps environment contract before a release is allowed to become rollout intent.",
      "Inspect the canary strategy for staged weights, automated analysis, and the explicit manual promotion gate after successful 50 percent evaluation.",
      "Review blue-green and experiment support to see how preview cutover and baseline-versus-candidate comparison extend beyond a simple canary plus rollback story.",
      "Check the feature-flag boundary and confirm that deployment rollback and feature rollback are modeled as separate controls with different risk and recovery semantics.",
    ],
    evidence: [
      "README, architecture docs, progressive-delivery contracts, Helm templates, GitOps manifests, and validation targets verify canary, blue-green, experiment, Istio, Prometheus, and feature-flag implementation boundaries.",
      "The Demo API exposes deterministic health, latency, metrics, and release identity contracts that the delivery platform uses as rollout evidence rather than treating deployment success as enough.",
      "Pinned platform contracts exist for Argo Rollouts, Istio, Argo CD, Prometheus, Grafana, Loki, Tempo, OpenTelemetry, feature flags, and supply-chain controls, with validation explicitly marked as local, static, offline, or runtime pending.",
      "The repository is precise that no live Kubernetes cluster validation has been completed yet, so controller reconciliation, traffic routing, AnalysisRun outcomes, and policy enforcement are described as implemented and offline-validated rather than production-proven.",
    ],
    result:
      "Built a progressive delivery platform that turns release safety into reusable engineering capability: analyzed canaries, blue-green cutovers, comparative experiments, GitOps delivery boundaries, and independent feature rollout controls.",
    githubUrl: "https://github.com/ohanyere/Progressive-Delivery-Platform",
    keyResult: "Implemented a platform release path where traffic exposure, health analysis, promotion, rollback, and feature rollout are explicit, reusable controls rather than team-by-team improvisation.",
    decisions: [
      "Progressive delivery is treated as a platform capability so application teams do not each invent their own rollout logic, traffic rules, thresholds, or rollback behavior.",
      "Canary and blue-green are both supported because they solve different operational problems: gradual blast-radius control versus preview validation with fast service cutover.",
      "Istio traffic routing is separated from Argo Rollouts orchestration so traffic control and rollout control each have a clear owner and observable responsibility.",
      "Prometheus-driven automated analysis is central policy, not app-local PromQL, so health gates remain reusable and governed across services.",
      "Feature flags are implemented as a separate control plane through OpenFeature and flagd so feature progression is not falsely coupled to deployment progression.",
    ],
    tradeOffs: [
      "This platform is much safer than all-at-once deployment, but it adds control-plane complexity and more moving parts across CI, GitOps, routing, analysis, and observability.",
      "Canary gives precise routed exposure with Istio, but it depends on mesh runtime and enough request volume for trustworthy decisions.",
      "Blue-green offers strong preview semantics and rapid active-service restoration, but it temporarily doubles capacity during a cutover window.",
      "Experiments and feature flags improve decision quality and release flexibility, but they introduce extra operational cost, configuration scope, and additional runtime dependencies that still need live-cluster proof.",
    ],
    limitations: [
      "As of August 30, 2026, the repository documents no completed live Kubernetes cluster validation for Argo Rollouts, Istio routing, AnalysisRuns, or Argo CD reconciliation.",
      "The system is implemented and validated locally, statically, or offline across many boundaries, but runtime controller behavior, mesh traffic percentages, and policy enforcement remain pending live integration evidence.",
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
