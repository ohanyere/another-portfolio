import { Link } from "react-router-dom";
import ArchitectureBlock from "../../components/project-detail/ArchitectureBlock";
import EvidenceGallery from "../../components/project-detail/EvidenceGallery";
import FailureScenarioBlock from "../../components/project-detail/FailureScenarioBlock";
import OutcomeBlock from "../../components/project-detail/OutcomeBlock";
import RunbookBlock from "../../components/project-detail/RunbookBlock";
import { getProjectBySlug } from "../../data/projects";

const project = getProjectBySlug("finops");

export default function FinopsGuardrailPage() {
  if (!project) return null;

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-1 justify-center py-5 sm:px-4 md:px-10 lg:px-20 xl:px-40">
        <div className="flex max-w-[1200px] flex-1 flex-col">
          <main className="flex-1 px-4 py-16 sm:py-20">
            <div className="mx-auto max-w-5xl space-y-8">
              <div className="rounded-lg border border-gray-200 bg-white p-6">
                <Link to="/" className="text-sm font-medium text-gray-500 hover:text-gray-900">
                  Back to Home
                </Link>
                <p className="mt-4 text-sm font-bold uppercase tracking-wider text-gray-500">
                  Project Case Study
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  {project.title}
                </h1>
                <div className="mt-4 flex flex-wrap gap-2">
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

              <section className="rounded-lg border border-gray-200 bg-white p-6">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Problem</h2>
                <p className="mt-4 text-sm leading-relaxed text-gray-600">{project.problem}</p>
              </section>

              <ArchitectureBlock items={project.architectureSummary} />

              <section className="rounded-lg border border-gray-200 bg-white p-6">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">How it works</h2>
                <div className="mt-4 space-y-3 text-sm leading-relaxed text-gray-600">
                  {project.howItWorks.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </section>

              <FailureScenarioBlock scenario={project.failureScenario} />
              <RunbookBlock steps={project.runbookSteps} />
              <EvidenceGallery items={project.evidence} />
              <OutcomeBlock result={project.result} />

              <section className="rounded-lg border border-gray-200 bg-white p-6">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">GitHub link</h2>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex h-10 items-center justify-center rounded-lg bg-black px-4 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
                >
                  Open Repository
                </a>
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
