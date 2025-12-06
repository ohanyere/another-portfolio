import FadeInWhenVisible from "./FadeInWhenVisible";
import { Mail, Github, Linkedin } from "lucide-react";
export default function Contact() {
  return (
    <section className="py-20 sm:py-28 text-center px-4" id="contact">
      <FadeInWhenVisible>
        <>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
            Let's work together.
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-gray-600 dark:text-gray-400">
            I'm always excited to connect with new people. Feel free to reach out!
          </p>

          <div className="mt-8 flex justify-center items-center flex-wrap gap-4 text-sm font-medium text-gray-700 dark:text-gray-300">
            <a
              href="mailto:ohanyerefrancis395@gmail.com"
              className="hover:text-blue-500 dark:hover:text-blue-500 transition-colors flex items-center gap-1.5"
            >
              
              <Mail size={18} />
              Mail
            </a>

            <span className="text-gray-300 dark:text-gray-700 hidden sm:block">|</span>

            <a className="hover:text-blue-500 dark:hover:text-blue-500 transition-colors flex items-center gap-1.5" href="https://github.com/ohanyere">
              
          
               <Github size={18} />
              GitHub
            </a>

            <span className="text-gray-300 dark:text-gray-700 hidden sm:block">|</span>

            <a className="hover:text-blue-500 dark:hover:text-blue-500 transition-colors flex items-center gap-1.5" href="https://www.linkedin.com/in/ohanyere-francis-78a794374/">
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>

          <div className="mt-10">
            <a
              href="mailto:ohanyerefrancis395@gmail.com"
              className="inline-block rounded-lg h-12 px-8 bg-black text-white text-base font-bold shadow-lg hover:bg-primary/90 transition-colors leading-[48px]"
            >
              Contact Me
            </a>
          </div>
        </>
      </FadeInWhenVisible>
    </section>
  );
}
