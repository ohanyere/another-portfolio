import { ExternalLink, Github } from "lucide-react";

export interface ProjectCardProps {
  title: string;
  description: string;
  stack: string[];
  githubUrl?: string;
  liveUrl?: string;
  group?: string;
}

export default function ProjectCard({
  title,
  description,
  stack,
  githubUrl,
  liveUrl,
  group,
}: ProjectCardProps) {
  const hasGithub = Boolean(githubUrl);

  return (
    <article className="flex h-full flex-col rounded-lg border border-gray-200 bg-white p-5">
      <div className="flex flex-1 flex-col gap-4">
        {group ? (
          <p className="text-xs font-bold uppercase tracking-wider text-gray-500">
            {group}
          </p>
        ) : null}

        <div>
          <h3 className="text-lg font-bold text-gray-900">{title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-gray-600">
            {description}
          </p>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-gray-500">
            Stack
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {stack.map((item) => (
              <span
                key={item}
                className="rounded-md border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-700"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-auto flex flex-col gap-3 sm:flex-row">
          {hasGithub ? (
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-black px-4 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
            >
              <Github size={16} />
              GitHub
            </a>
          ) : (
            <span className="inline-flex h-10 items-center justify-center rounded-lg border border-gray-200 bg-gray-50 px-4 text-sm font-semibold text-gray-500">
              GitHub coming soon
            </span>
          )}

          {liveUrl ? (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-gray-300 px-4 text-sm font-semibold text-gray-800 transition-colors hover:bg-gray-50"
            >
              <ExternalLink size={16} />
              Live
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
