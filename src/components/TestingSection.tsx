import FadeInWhenVisible from "./FadeInWhenVisible";

const practices = [
  {
    title: "Testing Philosophy",
    text: "Use tests to protect important behavior, not just individual components. Prioritize API flows, integration points, validation logic, and user-critical paths.",
  },
  {
    title: "CI/CD Readiness",
    text: "Treat linting, type checks, test runs, build verification, and deployment previews as part of the delivery workflow instead of afterthoughts.",
  },
  {
    title: "Deployment Validation",
    text: "Prefer repeatable release steps with smoke checks, environment configuration review, rollback awareness, and clear ownership of what changed.",
  },
  {
    title: "Reliability Mindset",
    text: "Design with failure modes in mind: retries where appropriate, useful logs, health checks, dependency boundaries, and enough visibility to debug production issues.",
  },
];

export default function TestingSection() {
  return (
    <section className="px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <FadeInWhenVisible>
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-wider text-gray-500">
              Reliability & Delivery
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Engineering practices for production-minded work
            </h2>
            <p className="mt-3 text-base leading-relaxed text-gray-600">
              The emphasis is on building software that can be tested, shipped, observed, and maintained with confidence.
            </p>
          </div>
        </FadeInWhenVisible>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {practices.map((practice) => (
            <FadeInWhenVisible key={practice.title}>
              <article className="h-full rounded-lg border border-gray-200 bg-white p-5">
                <h3 className="font-bold text-gray-900">{practice.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {practice.text}
                </p>
              </article>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  );
}
