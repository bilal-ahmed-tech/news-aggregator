"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    router.push(`/search?q=${encodeURIComponent(query.trim())}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center gap-2 w-full max-w-xl">
      <div className="relative flex-1">
        <Search
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 pointer-events-none"
        />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search news..."
          aria-label="Search news"
          className="w-full pl-9 pr-4 py-2.5 rounded-xl text-sm bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 border border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:border-violet-500 transition-all duration-200"
        />
      </div>
      <button
        type="submit"
        aria-label="Submit search"
        className="px-4 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 active:bg-violet-700 active:scale-95 text-white text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950 transition-all duration-200">
        Search
      </button>
    </form>
  );
}