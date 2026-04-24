import { searchNews } from "@/lib/news";
import NewsGrid from "@/components/ui/NewsGrid";
import EmptyState from "@/components/ui/EmptyState";
import ErrorState from "@/components/ui/ErrorState";
import type { Metadata } from "next";
import type { Article } from "@/lib/news";

type Props = {
  searchParams: Promise<{ q?: string }>;
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const { q } = await searchParams;
  return {
    title: q ? `Search: ${q}` : "Search News",
    description: `Search results for ${q}`,
  };
}

export default async function SearchPage({ searchParams }: Props) {
  const { q } = await searchParams;
  let articles: Article[] = [];
  let error: string | null = null;

  if (!q) {
    return (
      <EmptyState message="Type something in the search bar to find news." />
    );
  }

  try {
    articles = await searchNews(q);
  } catch {
    error = "Failed to fetch search results. Please try again.";
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
          Search Results
        </h1>
        <p className="text-slate-500 dark:text-slate-400">
          Showing results for <span className="text-violet-500 font-medium">&quot;{q}&quot;</span>
        </p>
      </div>

      {error ? (
        <ErrorState message={error} />
      ) : articles.length === 0 ? (
        <EmptyState message={`No results found for "${q}". Try a different keyword.`} />
      ) : (
        <NewsGrid articles={articles} />
      )}
    </div>
  );
}