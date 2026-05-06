export default function Loading() {
  return (
    <div className="mx-auto max-w-6xl animate-pulse px-4 py-12">
      <div className="h-12 w-48 rounded bg-[#1f2937]"></div>
      <div className="mt-8 space-y-4">
        <div className="h-4 w-full rounded bg-[#1f2937]"></div>
        <div className="h-4 w-3/4 rounded bg-[#1f2937]"></div>
      </div>
    </div>
  );
}