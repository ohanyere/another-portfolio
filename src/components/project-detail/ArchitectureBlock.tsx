interface ArchitectureBlockProps {
  items: string[];
}

export default function ArchitectureBlock({ items }: ArchitectureBlockProps) {
  return (
    <section className="rounded-lg border border-gray-200 bg-white p-6">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">Architecture</h2>
      <div className="mt-4 space-y-3 text-sm leading-relaxed text-gray-600">
        {items.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
    </section>
  );
}
