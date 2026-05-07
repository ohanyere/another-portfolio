interface RunbookBlockProps {
  steps: string[];
}

export default function RunbookBlock({ steps }: RunbookBlockProps) {
  return (
    <section className="rounded-lg border border-gray-200 bg-white p-6">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">Runbook</h2>
      <ol className="mt-4 space-y-3 text-sm leading-relaxed text-gray-600">
        {steps.map((step, index) => (
          <li key={step} className="flex gap-3">
            <span className="flex size-6 flex-none items-center justify-center rounded-full bg-gray-900 text-xs font-bold text-white">
              {index + 1}
            </span>
            <span>{step}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}
