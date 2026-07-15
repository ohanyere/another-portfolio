export default function Hero() {
  return (
    <section className="px-4 py-20 sm:py-24 md:py-28">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
        <div className="inline-block rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700">
          Platform products for self-service engineering
        </div>

        <div className="flex flex-col items-center justify-center gap-2">
          <h1 className="text-center text-3xl font-black text-gray-900 sm:text-4xl md:text-5xl">
            I build platform products for self-service engineering.
          </h1>
        </div>

        <p className="max-w-2xl text-base font-normal leading-relaxed text-gray-600 sm:text-lg">
          Internal Developer Platforms, platform APIs, Kubernetes automation, and GitOps-driven workflows
          that standardize delivery, secure infrastructure access, and reduce developer friction.
        </p>

        <div className="mt-4 flex flex-col flex-wrap gap-4 sm:flex-row">
          <a
            className="flex h-12 items-center justify-center rounded-lg bg-black px-6 text-base font-bold text-white shadow-sm transition-colors hover:bg-gray-800"
            href="#projects"
          >
            View Platform Work
          </a>

          

          <a
            className="flex h-12 items-center justify-center rounded-lg bg-gray-200 px-6 text-base font-bold text-gray-900 transition-colors hover:bg-gray-300"
            href="/resume/Ohanyere-Francis-Platform-Engineer-Resume.pdf"
            download="Ohanyere-Francis-Platform-Engineer-Resume.pdf"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
