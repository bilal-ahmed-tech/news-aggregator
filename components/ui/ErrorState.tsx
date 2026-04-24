import { AlertTriangle } from "lucide-react";

export default function ErrorState({ message }: { message: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-24 gap-4 text-center">
      <div className="p-4 rounded-2xl bg-red-50 dark:bg-red-500/10">
        <AlertTriangle size={32} className="text-red-500" />
      </div>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
        Something went wrong
      </h3>
      <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm">
        {message}
      </p>
    </div>
  );
}