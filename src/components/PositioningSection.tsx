import FadeInWhenVisible from "./FadeInWhenVisible";

const positioningCards = [
  {
    title: "What I build",
    items: [
      "Kubernetes-focused tooling and delivery workflows.",
      "Infrastructure guardrails that make deployment and cost decisions safer.",
      "Operational systems with CLI, API, automation, and recovery thinking built in.",
    ],
  },
  {
    title: "What I optimize for",
    items: [
      "Reliability under failure, not just happy-path demos.",
      "Repeatable CI/CD workflows with clear validation steps.",
      "Operational visibility that helps teams detect, decide, and recover quickly.",
    ],
  },
  {
    title: "What I can discuss in interviews",
    items: [
      "Cluster pressure detection and recommendation workflows in Go and Kubernetes.",
      "EKS backup and restore drills using Velero and S3.",
      "Terraform cost guardrails, canary rollouts, rollback validation, and runbook design.",
    ],
  },
];

export default function PositioningSection() {
  return (
    <section className="px-4 py-16 sm:py-20" id="positioning">
      <div className="mx-auto max-w-5xl">
        <FadeInWhenVisible>
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-wider text-gray-500">
              Platform Engineering Positioning
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Built around systems, failure handling, and operational proof
            </h2>
          </div>
        </FadeInWhenVisible>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {positioningCards.map((card) => (
            <FadeInWhenVisible key={card.title}>
              <article className="h-full rounded-lg border border-gray-200 bg-white p-5">
                <h3 className="text-lg font-bold text-gray-900">{card.title}</h3>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-gray-600">
                  {card.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 size-1.5 flex-none rounded-full bg-gray-900" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  );
}
