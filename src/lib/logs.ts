import fs from "fs";
import path from "path";

export interface LogMetadata {
  slug: string;
  title: string;
  date: string;
  summary: string;
}

const logsDirectory = path.join(process.cwd(), "content/logs");

export function getLogSlugs(): string[] {
  if (!fs.existsSync(logsDirectory)) return [];
  return fs.readdirSync(logsDirectory).filter((file) => file.endsWith(".md"));
}

export function getLogBySlug(slug: string): { metadata: LogMetadata; content: string } | null {
  const filePath = path.join(logsDirectory, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf8");
  const lines = fileContent.split("\n");
  const metadata: Partial<LogMetadata> = { slug };
  let content = "";
  let isReadingContent = false;

  for (const line of lines) {
    if (line.startsWith("---")) {
      isReadingContent = !isReadingContent;
      continue;
    }
    if (!isReadingContent) {
      const [key, ...valueParts] = line.split(": ");
      if (key === "title") metadata.title = valueParts.join(": ").trim();
      if (key === "date") metadata.date = valueParts.join(": ").trim();
      if (key === "summary") metadata.summary = valueParts.join(": ").trim();
    } else {
      content += line + "\n";
    }
  }

  return {
    metadata: metadata as LogMetadata,
    content: content.trim(),
  };
}

export function getAllLogs(): LogMetadata[] {
  const slugs = getLogSlugs();
  return slugs
    .map((slug) => {
      const log = getLogBySlug(slug.replace(".md", ""));
      return log?.metadata || null;
    })
    .filter((log): log is LogMetadata => log !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}