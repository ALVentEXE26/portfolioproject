import type { Project } from "@/types";

export interface FilterState {
  techStack: string | null;
  category: string | null;
}

export function filterProjects(
  projects: Project[],
  filters: FilterState
): Project[] {
  return projects.filter((project) => {
    const matchesTechStack =
      !filters.techStack ||
      project.techStack.includes(filters.techStack);
    const matchesCategory =
      !filters.category || project.category === filters.category;
    return matchesTechStack && matchesCategory;
  });
}

export function createFilterKey(techStack: string | null, category: string | null): string {
  return `${techStack || "all"}-${category || "all"}`;
}