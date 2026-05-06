import Link from "next/link";
import { getAllLogs } from "@/lib/logs";

export default function LogsPage() {
  const logs = getAllLogs();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="mb-8 text-3xl font-bold text-[#E5E7EB]">Logs</h1>
      <div className="space-y-4">
        {logs.map((log) => (
          <Link
            key={log.slug}
            href={`/logs/${log.slug}`}
            className="block rounded-lg border border-[#1f2937] bg-[#111827] p-5 transition-colors hover:border-[#3B82F6]"
          >
            <p className="mb-2 text-sm text-[#3B82F6]">{log.date}</p>
            <h2 className="mb-2 text-lg font-semibold text-[#E5E7EB]">
              {log.title}
            </h2>
            <p className="text-sm text-[#9CA3AF]">{log.summary}</p>
          </Link>
        ))}
      </div>
      {logs.length === 0 && (
        <p className="py-12 text-center text-[#9CA3AF]">No logs yet.</p>
      )}
    </div>
  );
}