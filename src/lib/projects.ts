import type { Project, ProjectsData } from "@/types";
import projectsData from "@/data/projects.json";

export function getProjects(): Project[] {
  return projectsData.projects as Project[];
}

export function getProjectByTitle(title: string): Project | undefined {
  return (projectsData.projects as Project[]).find(
    (p) => p.title.toLowerCase() === title.toLowerCase()
  );
}

export function getFeaturedProjects(limit: number = 2): Project[] {
  return (projectsData.projects as Project[]).slice(0, limit);
}

export function getUniqueTechStacks(): string[] {
  const stacks = new Set<string>();
  (projectsData.projects as Project[]).forEach((p) => {
    p.techStack.forEach((tech) => stacks.add(tech));
  });
  return Array.from(stacks).sort();
}

export function getUniqueCategories(): string[] {
  const categories = new Set<string>();
  (projectsData.projects as Project[]).forEach((p) => {
    categories.add(p.category);
  });
  return Array.from(categories).sort();
}