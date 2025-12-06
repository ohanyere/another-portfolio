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
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452H20.453V13.781C20.453 10.225 19.825 7.472 15.485 7.472C13.431 7.472 12.09 8.521 11.533 9.479H11.458V7.747H7.729V20.452H11.616V14.548C11.616 12.872 11.954 11.231 13.91 11.231C15.836 11.231 16.143 13.125 16.143 14.673V20.452H20.447ZM5.645 20.452H1.933V7.747H5.645V20.452ZM3.789 6.544C5.058 6.544 6.077 5.525 6.077 4.256C6.077 2.987 5.058 1.968 3.789 1.968C2.52 1.968 1.5 2.987 1.5 4.256C1.5 5.525 2.52 6.544 3.789 6.544Z" />
              </svg>
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
