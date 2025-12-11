import FadeInWhenVisible from "./FadeInWhenVisible";

export default function About() {
  return (
    <section className="py-16 sm:py-20 px-4" id="about">
     <a href="#about">  <div className="max-w-3xl mx-auto text-center">

        <FadeInWhenVisible>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            About Me
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-400 text-base leading-relaxed">
            Hi, I'm a frontend engineer who genuinely enjoys building things that feel good to use.  
            I love taking ideas from simple sketches or concepts and turning them into clean, functional interfaces.
          </p>

          <p className="mt-4 text-gray-600 dark:text-gray-400 text-base leading-relaxed">
            I work mainly with 
            <span className="font-semibold text-gray-900 dark:text-white"> React</span>, 
            <span className="font-semibold text-gray-900 dark:text-white"> TypeScript</span>, and 
            <span className="font-semibold text-gray-900 dark:text-white"> Next.js</span>, 
            and I care a lot about writing code that's easy to understand, maintain, and scale.  
            Good UI/UX matters to me, so I try to make every interaction feel smooth and intentional.
          </p>

          <p className="mt-4 text-gray-600 dark:text-gray-400 text-base leading-relaxed">
            Lately, I’ve been exploring how AI can enhance everyday user experiences  whether that’s making things
            faster, smarter, or more helpful in the background. It’s exciting to see how much potential there is.
          </p>
        </FadeInWhenVisible>

      </div></a>
    </section>
  );
}
