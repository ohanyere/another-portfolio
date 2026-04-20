import { Boxes, CloudCog, Gauge, GitPullRequestArrow, Layers3, PackageCheck } from "lucide-react";

const capabilities = [
  {
    icon: <PackageCheck size={22} />,
    title: "Docker image building",
    text: "Package applications into repeatable images with attention to build steps, environment configuration, and production-ready runtime behavior.",
  },
  {
    icon: <GitPullRequestArrow size={22} />,
    title: "CI/CD pipelines",
    text: "Use automated checks to catch issues before release: linting, type checks, tests, builds, preview deployments, and release gates.",
  },
  {
    icon: <CloudCog size={22} />,
    title: "Deployment workflows",
    text: "Think through promotion between environments, configuration management, rollback awareness, and deployment validation.",
  },
  {
    icon: <Boxes size={22} />,
    title: "Kubernetes / EKS usage",
    text: "Developing practical familiarity with manifests, workloads, services, health checks, cluster deployment patterns, and EKS-oriented operations.",
  },
  {
    icon: <Layers3 size={22} />,
    title: "Terraform provisioning",
    text: "Use infrastructure as code concepts to make cloud resources reviewable, repeatable, and easier to reason about.",
  },
  {
    icon: <Gauge size={22} />,
    title: "Observability basics",
    text: "Value useful logs, health endpoints, metrics, traces, and operational signals that make systems easier to debug and support.",
  },
];

export default function PlatformCapabilities() {
  return (
    <section className="px-4 py-16 sm:py-20" id="capabilities">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-wider text-gray-500">
            Platform & DevOps Capabilities
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            The operational layer behind reliable software
          </h2>
          <p className="mt-3 text-base leading-relaxed text-gray-600">
            These are the platform practices I am building toward and applying as I evolve my projects from application demos into deployable, observable systems.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability) => (
            <article
              key={capability.title}
              className="rounded-lg border border-gray-200 bg-gray-50 p-5"
            >
              <div className="flex items-center gap-3 text-gray-900">
                <span className="flex size-9 items-center justify-center rounded-lg bg-white">
                  {capability.icon}
                </span>
                <h3 className="text-sm font-bold">{capability.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                {capability.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
