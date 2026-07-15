import FadeInWhenVisible from "./FadeInWhenVisible";

const positioningCards = [
  {
    title: "What I build",
    items: [
      "Platform products that turn delivery, infrastructure, and governance into supported developer workflows.",
      "Internal Developer Platforms, platform APIs, Kubernetes automation, and self-service tooling for engineering teams.",
      "Software that extends delivery systems and Kubernetes instead of exposing raw platform complexity to every team.",
    ],
  },
  {
    title: "What the platform enables",
    items: [
      "Standardized software delivery through Golden Paths and reusable release workflows.",
      "Self-service infrastructure requests with auditability, policy, and review built into the flow.",
      "Faster onboarding and lower developer cognitive load through platform-owned automation.",
    ],
  },
  {
    title: "What I focus on operationally",
    items: [
      "Platform reliability, release safety, and recovery-oriented workflow design.",
      "Governance and security embedded in the supported path rather than added after delivery.",
      "Operational visibility that helps teams detect, decide, and act quickly during change.",
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
              Built around platform products, developer workflows, and operational ownership
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
