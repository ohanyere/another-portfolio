interface FailureScenarioBlockProps {
  scenario: string;
}

export default function FailureScenarioBlock({ scenario }: FailureScenarioBlockProps) {
  return (
    <section className="rounded-lg border border-gray-200 bg-gray-50 p-6">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">Failure Scenario</h2>
      <p className="mt-4 text-sm leading-relaxed text-gray-600">{scenario}</p>
    </section>
  );
}
