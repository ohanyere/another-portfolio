import FadeInWhenVisible from "./FadeInWhenVisible";

const evidenceItems = [
  {
    title: "Golden Path service creation",
    text: "Platform-owned service creation workflows standardize onboarding so new services start with approved delivery paths instead of bespoke setup work.",
  },
  {
    title: "Self-service infrastructure requests",
    text: "Infrastructure access is exposed through reviewable workflows that preserve auditability, platform labels, and secure provisioning controls.",
  },
  {
    title: "Kubernetes tenant automation",
    text: "A TeamEnvironment Operator reconciles tenant resources like namespaces, RBAC, quotas, service accounts, and network policies from Custom Resources.",
  },
  {
    title: "Release safety and governance",
    text: "Promotion, rollback, cost controls, and policy-aware workflows keep delivery automation fast without giving up reliability or governance.",
  },
];

export default function ValidationEvidence() {
  return (
    <section className="px-4 py-16 sm:py-20" id="evidence">
      <div className="mx-auto max-w-5xl">
        <FadeInWhenVisible>
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-wider text-gray-500">
              Validation Evidence
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Proof points tied to platform automation and developer workflow outcomes
            </h2>
          </div>
        </FadeInWhenVisible>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {evidenceItems.map((item) => (
            <FadeInWhenVisible key={item.title}>
              <article className="h-full rounded-lg border border-gray-200 bg-white p-5">
                <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.text}</p>
              </article>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  );
}
