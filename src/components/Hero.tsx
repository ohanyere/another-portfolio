import TextCycle from "../components/TextCycle";

export default function Hero() {
  return (
    <section className="text-center py-20 sm:py-28 md:py-16 px-4">
      <div className="flex flex-col items-center gap-6">

        {/* Badge */}
        <div className="inline-block rounded-full bg-blue-900/10 dark:bg-blue-400 px-4 py-1.5 text-sm font-medium text-primary dark:text-primary/90">
          Frontend Engineer
        </div>

        {/* Greeting */}
        <div className="text-2xl font-medium text-black dark:text-white">
          Hello there,
        </div>

        {/* Animated Name Line */}
        <div className="flex items-center justify-center text-3xl sm:text-4xl font-black text-black dark:text-white gap-3">
          <span>I’m</span>
          <TextCycle />
        </div>

        {/* Subtext */}
        <p className="max-w-2xl text-base sm:text-lg font-normal text-gray-600 dark:text-gray-400">
          I’m a full-stack developer who builds functional and efficient web applications using React, Next.js, and TypeScript, focusing on clean code and practical solutions.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-4">
          <a
            className="flex items-center justify-center rounded-lg h-12 px-6 bg-black text-white text-base font-bold shadow-sm hover:bg-primary/90 transition-colors"
            href="#projects"
          >
            View Projects
          </a>

          <a
            className="flex items-center justify-center rounded-lg h-12 px-6 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white text-base font-bold hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
            href="#"
          >
            Download Resume
          </a>
        </div>

      </div>
    </section>
  );
}
