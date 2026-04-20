import { Cloud, Container, GitBranch, MonitorCheck, Server, Workflow } from "lucide-react";
import type { ReactElement } from "react";

type SkillGroup = {
  icon: ReactElement;
  title: string;
  items: string[];
};

const skillGroups: SkillGroup[] = [
  {
    icon: <Cloud size={24} />,
    title: "Infrastructure & Cloud",
    items: ["AWS direction", "cloud deployment models", "environment configuration", "secrets-aware workflows"],
  },
  {
    icon: <Container size={24} />,
    title: "Containers & Orchestration",
    items: ["Docker image building", "containerized services", "Kubernetes fundamentals", "EKS-oriented deployment patterns"],
  },
  {
    icon: <Server size={24} />,
    title: "Backend Systems",
    items: ["API design", "authentication flows", "data persistence", "integration with third-party services"],
  },
  {
    icon: <GitBranch size={24} />,
    title: "CI/CD & DevOps",
    items: ["pipeline checks", "build automation", "deployment validation", "release workflow awareness"],
  },
  {
    icon: <MonitorCheck size={24} />,
    title: "Observability & Reliability",
    items: ["logging basics", "health checks", "failure-aware design", "operational debugging mindset"],
  },
  {
    icon: <Workflow size={24} />,
    title: "Frontend as Supporting Skill",
    items: ["React", "TypeScript", "Next.js", "testing user-facing flows"],
  },
];

function SkillGroupCard({ icon, title, items }: SkillGroup) {
  return (
    <article className="flex h-full flex-col gap-4 rounded-lg border border-gray-200 bg-white p-5">
      <div className="flex items-center gap-3 text-gray-900">
        <span className="flex size-10 items-center justify-center rounded-lg bg-gray-100">
          {icon}
        </span>
        <h3 className="text-base font-bold">{title}</h3>
      </div>

      <ul className="space-y-2 text-sm leading-relaxed text-gray-600">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-2 size-1.5 flex-none rounded-full bg-gray-900" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function Skills() {
  return (
    <section className="px-4 py-16 sm:py-20" id="skills">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-wider text-gray-500">
            Technical Focus
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Backend, infrastructure, delivery, and reliability
          </h2>
          <p className="mt-3 text-base leading-relaxed text-gray-600">
            The site now presents frontend experience as useful context, while the primary story is platform-minded engineering: systems, automation, deployment, and operational readiness.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <SkillGroupCard key={group.title} {...group} />
          ))}
        </div>
      </div>
    </section>
  );
}
