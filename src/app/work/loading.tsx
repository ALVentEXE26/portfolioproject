export default function Loading() {
  return (
    <div className="mx-auto max-w-6xl animate-pulse px-4 py-12">
      <div className="mb-8 flex flex-wrap gap-2">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-8 w-20 rounded bg-[#1f2937]"></div>
        ))}
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-48 rounded-lg bg-[#1f2937]"></div>
        ))}
      </div>
    </div>
  );
}