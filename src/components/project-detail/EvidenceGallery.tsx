interface EvidenceGalleryProps {
  items: string[];
}

export default function EvidenceGallery({ items }: EvidenceGalleryProps) {
  return (
    <section className="rounded-lg border border-gray-200 bg-white p-6">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">Evidence</h2>
      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        {items.map((item) => (
          <article key={item} className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <p className="text-sm leading-relaxed text-gray-600">{item}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
