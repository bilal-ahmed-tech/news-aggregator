export default function SkeletonCard() {
  return (
    <div className="flex flex-col rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 animate-pulse">
      {/* Image placeholder */}
      <div className="w-full h-48 bg-slate-200 dark:bg-slate-800" />

      {/* Content */}
      <div className="flex flex-col p-4 gap-3">
        {/* Source + Date */}
        <div className="flex justify-between">
          <div className="h-3 w-20 bg-slate-200 dark:bg-slate-700 rounded-full" />
          <div className="h-3 w-16 bg-slate-200 dark:bg-slate-700 rounded-full" />
        </div>

        {/* Title */}
        <div className="space-y-2">
          <div className="h-4 w-full bg-slate-200 dark:bg-slate-700 rounded-full" />
          <div className="h-4 w-3/4 bg-slate-200 dark:bg-slate-700 rounded-full" />
        </div>

        {/* Description */}
        <div className="space-y-2">
          <div className="h-3 w-full bg-slate-200 dark:bg-slate-700 rounded-full" />
          <div className="h-3 w-full bg-slate-200 dark:bg-slate-700 rounded-full" />
          <div className="h-3 w-1/2 bg-slate-200 dark:bg-slate-700 rounded-full" />
        </div>

        {/* Read more */}
        <div className="h-3 w-16 bg-slate-200 dark:bg-slate-700 rounded-full" />
      </div>
    </div>
  );
}