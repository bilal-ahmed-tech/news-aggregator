import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} <span className="text-violet-500 font-medium">NewsAgg</span>. Powered by Next.js.
        </p>
        <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
          <Link
            href="/"
            className="hover:text-violet-500 dark:hover:text-violet-400 active:text-violet-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded transition-colors duration-200">
            Home
          </Link>
          <Link
            href="/category/technology"
            className="hover:text-violet-500 dark:hover:text-violet-400 active:text-violet-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded transition-colors duration-200">
            Technology
          </Link>
          <Link
            href="/category/business"
            className="hover:text-violet-500 dark:hover:text-violet-400 active:text-violet-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded transition-colors duration-200">
            Business
          </Link>
        </div>
      </div>
    </footer>
  );
}