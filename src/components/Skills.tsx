import { Boxes, CloudCog, Gauge, GitBranch, Server } from "lucide-react";
import type { ReactElement } from "react";

type SkillGroup = {
  icon: ReactElement;
  title: string;
  items: string[];
};

const skillGroups: SkillGroup[] = [
  {
    icon: <Boxes size={24} />,
    title: "Platform Products",
    items: ["Internal Developer Platforms", "service catalogs", "platform APIs", "developer-facing workflow design"],
  },
  {
    icon: <GitBranch size={24} />,
    title: "Software Delivery",
    items: ["Golden Paths", "GitOps automation", "release promotion flows", "rollback-aware delivery workflows"],
  },
  {
    icon: <CloudCog size={24} />,
    title: "Infrastructure Self-Service",
    items: ["secure provisioning paths", "reviewable infrastructure requests", "tenant resource automation", "platform-owned workflows"],
  },
  {
    icon: <Gauge size={24} />,
    title: "Platform Governance",
    items: ["policy-aware workflows", "cost guardrails", "audit-ready changes", "secure delivery controls"],
  },
  {
    icon: <Server size={24} />,
    title: "Platform Tooling",
    items: ["Kubernetes controllers and operators", "developer experience automation", "platform reliability", "cloud platform workflows"],
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
            Skills
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Capabilities organized around platform product outcomes
          </h2>
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
