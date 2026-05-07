import { ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import FadeInWhenVisible from "./FadeInWhenVisible";

const projectPaths: Record<string, string> = {
  "cluster-meter": "/projects/cluster-meter",
  "eks-dr": "/projects/eks-dr",
  finops: "/projects/finops",
  "progressive-delivery": "/projects/progressive-delivery",
};

export default function FeaturedProjects() {
  return (
    <section className="px-4 py-16 sm:py-20" id="projects">
      <div className="mx-auto max-w-5xl">
        <FadeInWhenVisible>
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-wider text-gray-500">
              Featured Projects
            </p>
            <h2 className="mt-2 text-2xl font-bold leading-tight tracking-tight text-gray-900 sm:text-3xl">
              Platform engineering work with failure drills and validation built in
            </h2>
          </div>
        </FadeInWhenVisible>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <FadeInWhenVisible key={project.slug}>
              <article className="flex h-full flex-col rounded-lg border border-gray-200 bg-white p-5">
                <div className="flex flex-1 flex-col gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{project.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-gray-600">
                      {project.problem}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-500">
                      Stack
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <span
                          key={item}
                          className="rounded-md border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-700"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-500">
                      Key Result
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">
                      {project.keyResult}
                    </p>
                  </div>

                  <div className="mt-auto flex flex-col gap-3 sm:flex-row">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-black px-4 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
                    >
                      <Github size={16} />
                      GitHub
                    </a>

                    <Link
                      to={projectPaths[project.slug]}
                      className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-gray-300 px-4 text-sm font-semibold text-gray-800 transition-colors hover:bg-gray-50"
                    >
                      <ExternalLink size={16} />
                      View Case Study
                    </Link>
                  </div>
                </div>
              </article>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  );
}
