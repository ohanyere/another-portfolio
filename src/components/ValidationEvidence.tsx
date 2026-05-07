import FadeInWhenVisible from "./FadeInWhenVisible";

const evidenceItems = [
  {
    title: "DR recovery success",
    text: "Namespace deletion was used as the failure drill, then workloads were restored successfully with zero observed data loss.",
  },
  {
    title: "CI cost guardrail enforcement",
    text: "Plan-only CI surfaced infrastructure cost deltas and blocked pull requests when thresholds were exceeded.",
  },
  {
    title: "Rollout rollback success",
    text: "Canary deployment flow was exercised under failure conditions and validated rollback to the stable release.",
  },
  {
    title: "Cluster pressure detection",
    text: "Capacity analysis identified CPU, memory, and pod pressure conditions and returned operator-facing recommendations.",
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
              Proof points tied to failure handling and operational outcomes
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
