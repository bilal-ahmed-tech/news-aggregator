import SkeletonGrid from "@/components/ui/SkeletonGrid";

export default function Loading() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div className="h-10 w-48 bg-slate-200 dark:bg-slate-800 rounded-full animate-pulse" />
        <div className="h-4 w-72 bg-slate-200 dark:bg-slate-800 rounded-full animate-pulse" />
      </div>
      <div className="flex gap-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="h-9 w-24 bg-slate-200 dark:bg-slate-800 rounded-full animate-pulse shrink-0"
          />
        ))}
      </div>
      <SkeletonGrid />
    </div>
  );
}