import FadeInWhenVisible from "./FadeInWhenVisible";

export default function About() {
  return (
    <section className="px-4 py-16 sm:py-20" id="about">
      <div className="mx-auto max-w-3xl">
        <FadeInWhenVisible>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            About
          </h2>

          <p className="mt-4 text-base leading-relaxed text-gray-600">
            I am moving my engineering focus toward backend systems, infrastructure automation, and cloud-native delivery. My frontend background helps me understand complete product workflows, but the professional direction I want to emphasize is building reliable services and the deployment paths that support them.
          </p>

          <p className="mt-4 text-base leading-relaxed text-gray-600">
            I care about the practical engineering work behind production systems: clear API boundaries, repeatable deployments, containerized workloads, CI/CD checks, infrastructure as code, and operational visibility. I am especially interested in environments where code quality, automation, and reliability matter as much as feature delivery.
          </p>

          <p className="mt-4 text-base leading-relaxed text-gray-600">
            I am continuing to deepen my platform and DevOps skill set across Docker image building, Kubernetes and EKS workflows, Terraform provisioning, deployment validation, and observability fundamentals while keeping a strong bias toward honest, maintainable engineering.
          </p>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}
