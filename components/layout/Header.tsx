"use client";

import Link from "next/link";
import { Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "@/components/layout/ThemeProvider";
import SearchBar from "@/components/ui/SearchBar";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-16">
          {/* Logo */}
          <Link
            href="/"
            className="shrink-0 text-xl font-bold tracking-tight text-slate-900 dark:text-white hover:text-violet-500 dark:hover:text-violet-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded transition-colors duration-200">
            News<span className="text-violet-500">.</span>
          </Link>

          {/* Search */}
          <div className="flex-1 hidden sm:flex justify-center">
            <SearchBar />
          </div>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="shrink-0 p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-violet-500 dark:hover:text-violet-400 hover:bg-violet-50 dark:hover:bg-violet-500/10 active:scale-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 transition-all duration-200">
            {mounted ? (
              theme === "dark" ? <Moon size={20} /> : <Sun size={20} />
            ) : (
              <Sun size={20} />
            )}
          </button>
        </div>

        {/* Mobile search */}
        <div className="sm:hidden pb-3">
          <SearchBar />
        </div>
      </div>
    </header>
  );
}