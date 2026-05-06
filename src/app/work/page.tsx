"use client";

import { useState } from "react";
import { getProjects, getUniqueTechStacks, getUniqueCategories } from "@/lib/projects";
import { filterProjects } from "@/lib/filters";
import type { Project, ProjectCategory } from "@/types";
import { ProjectCard } from "@/components/molecules/ProjectCard";

export default function WorkPage() {
  const projects = getProjects();
  const techStacks = getUniqueTechStacks();
  const categories = getUniqueCategories();

  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProjects = filterProjects(projects, {
    techStack: selectedTech,
    category: selectedCategory,
  });

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="mb-8 text-3xl font-bold text-[#E5E7EB]">Work</h1>

      <div className="mb-8 flex flex-wrap gap-4">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedTech(null)}
            className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
              selectedTech === null
                ? "bg-[#2563EB] text-white"
                : "bg-[#111827] text-[#9CA3AF] hover:bg-[#1f2937] hover:text-[#E5E7EB]"
            }`}
          >
            All Tech
          </button>
          {techStacks.map((tech) => (
            <button
              key={tech}
              onClick={() => setSelectedTech(tech)}
              className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                selectedTech === tech
                  ? "bg-[#2563EB] text-white"
                  : "bg-[#111827] text-[#9CA3AF] hover:bg-[#1f2937] hover:text-[#E5E7EB]"
              }`}
            >
              {tech}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-8 flex flex-wrap gap-4">
        <div className="flex flex-wrap gap-2">
          <span className="py-1.5 text-sm text-[#9CA3AF]">Category:</span>
          <button
            onClick={() => setSelectedCategory(null)}
            className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
              selectedCategory === null
                ? "bg-[#2563EB] text-white"
                : "bg-[#111827] text-[#9CA3AF] hover:bg-[#1f2937] hover:text-[#E5E7EB]"
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? "bg-[#2563EB] text-white"
                  : "bg-[#111827] text-[#9CA3AF] hover:bg-[#1f2937] hover:text-[#E5E7EB]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <p className="py-12 text-center text-[#9CA3AF]">
          No projects match the selected filters.
        </p>
      )}
    </div>
  );
}