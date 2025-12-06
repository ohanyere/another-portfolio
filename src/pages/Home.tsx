import TestingSection from "../components/TestingSection";
import About from "../components/About";
import Contact from "../components/Contact";
import ProjectsSection from "../components/ProjectsSection";
import Skills from "../components/Skills";
import Hero from "../components/Hero";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-1 justify-center py-5 sm:px-4 md:px-10 lg:px-20 xl:px-40">
        <div className="flex flex-col max-w-[960px] flex-1">
          <Header />
          <main className="flex-1">
            <Hero />
            <Skills />
            <ProjectsSection />
            <About />
            <TestingSection />
            <Contact />
          </main>
        </div>
      </div>
    </div>
  );
}
