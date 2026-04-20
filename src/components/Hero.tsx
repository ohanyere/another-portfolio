import TextCycle from "../components/TextCycle";

export default function Hero() {
  return (
    <section className="px-4 py-20 sm:py-24 md:py-28">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
        <div className="inline-block rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700">
          Available for Platform, Backend, and DevOps roles
        </div>

        <div className="flex flex-col items-center justify-center gap-2">
          <span className="text-3xl font-black text-black sm:text-4xl">
            Ohanyere Francis
          </span>
          <TextCycle />
        </div>

        <p className="max-w-2xl text-base font-normal leading-relaxed text-gray-600 sm:text-lg">
          I build reliable backend systems, deployment workflows, and cloud-native infrastructure with a focus on automation, maintainability, and production readiness.
        </p>

        <div className="mt-4 flex flex-col flex-wrap gap-4 sm:flex-row">
          <a
            className="flex h-12 items-center justify-center rounded-lg bg-black px-6 text-base font-bold text-white shadow-sm transition-colors hover:bg-gray-800"
            href="#projects"
          >
            View Engineering Work
          </a>

          <a
            className="flex h-12 items-center justify-center rounded-lg bg-gray-200 px-6 text-base font-bold text-gray-900 transition-colors hover:bg-gray-300"
            href="https://drive.google.com/file/d/1jm6042exlyqNX2XgZWQg8BUJx0vdFG0e/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
