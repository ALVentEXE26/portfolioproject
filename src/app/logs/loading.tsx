export default function Loading() {
  return (
    <div className="mx-auto max-w-6xl animate-pulse px-4 py-12">
      <div className="h-12 w-48 rounded bg-[#1f2937]"></div>
      <div className="mt-8 space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-24 rounded-lg bg-[#1f2937]"></div>
        ))}
      </div>
    </div>
  );
}