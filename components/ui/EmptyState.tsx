import { Newspaper } from "lucide-react";

export default function EmptyState({ message }: { message: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-24 gap-4 text-center">
      <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800">
        <Newspaper size={32} className="text-slate-400 dark:text-slate-500" />
      </div>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
        No articles found
      </h3>
      <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm">
        {message}
      </p>
    </div>
  );
}