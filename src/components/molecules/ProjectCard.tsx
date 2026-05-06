import type { Project } from "@/types";
import { Badge } from "@/components/atoms/Badge";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <a
      href={project.repoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col rounded-xl border border-[#1f2937] bg-[#111827] p-5 transition-all hover:border-[#3B82F6] hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]"
    >
      <div className="mb-3 flex items-start justify-between">
        <h3 className="text-lg font-semibold text-[#E5E7EB] group-hover:text-[#3B82F6]">
          {project.title}
        </h3>
        <svg
          className="h-4 w-4 text-[#9CA3AF] opacity-0 transition-opacity group-hover:opacity-100"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </div>
      <p className="mb-4 flex-1 text-sm text-[#9CA3AF]">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>
    </a>
  );
}