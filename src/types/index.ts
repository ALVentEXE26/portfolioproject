export type ProjectCategory = "SEO Audit" | "Frontend" | "Research" | "Other";

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  completionDate: string;
  category: ProjectCategory;
  repoUrl: string;
}

export interface ProjectsData {
  projects: Project[];
}