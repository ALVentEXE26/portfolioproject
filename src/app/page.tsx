import Link from "next/link";
import { getProjects } from "@/lib/projects";
import { ProjectCard } from "@/components/molecules/ProjectCard";

export default function Home() {
  const projects = getProjects();

  return (
    <div className="mx-auto max-w-6xl px-4">
      <section className="py-20">
        <h1 className="mb-6 text-5xl font-bold tracking-tight text-[#E5E7EB]">
          Hi, I'm <span className="text-[#3B82F6]">ALVentEXE</span>
        </h1>
        <p className="mb-8 max-w-2xl text-lg text-[#9CA3AF]">
          Frontend Developer passionate about building clean, modular web applications.
          I create optimized, accessible experiences with modern technologies.
        </p>
        <div className="flex gap-4">
          <Link
            href="/work"
            className="inline-flex items-center rounded-lg bg-[#2563EB] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#3B82F6]"
          >
            View Projects
          </Link>
          <Link
            href="/logs"
            className="inline-flex items-center rounded-lg border border-[#3B82F6] px-4 py-2 text-sm font-medium text-[#3B82F6] transition-colors hover:bg-[#3B82F6]/10"
          >
            Read Logs
          </Link>
        </div>
      </section>

      <section className="border-t border-[#1f2937] py-16">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-[#E5E7EB]">Featured Work</h2>
          <Link
            href="/work"
            className="text-sm text-[#3B82F6] hover:underline"
          >
            View all →
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.slice(0, 2).map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section className="border-t border-[#1f2937] py-16">
        <h2 className="mb-8 text-2xl font-bold text-[#E5E7EB]">
          Timeline
        </h2>
        <div className="relative border-l border-[#1f2937] pl-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="relative mb-8 last:mb-0"
            >
              <div className="absolute -left-[37px] flex h-5 w-5 items-center justify-center rounded-full border-4 border-[#0B0F19] bg-[#2563EB]"></div>
              <p className="mb-1 text-sm text-[#3B82F6]">
                {project.completionDate}
              </p>
              <h3 className="mb-2 text-lg font-semibold text-[#E5E7EB]">
                {project.title}
              </h3>
              <p className="text-sm text-[#9CA3AF]">
                {project.category} · {project.techStack.join(", ")}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}