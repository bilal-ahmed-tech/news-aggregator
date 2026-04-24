import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-32 gap-6 text-center">
      <h1 className="text-8xl font-bold text-violet-500">404</h1>
      <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
        Page Not Found
      </h2>
      <p className="text-slate-500 dark:text-slate-400 max-w-sm">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 active:bg-violet-700 active:scale-95 text-white font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950 transition-all duration-200">
        Back to Home
      </Link>
    </div>
  );
}