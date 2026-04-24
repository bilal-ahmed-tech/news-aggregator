import { getTopHeadlines } from "@/lib/news";
import NewsGrid from "@/components/ui/NewsGrid";
import CategoryFilter from "@/components/ui/CategoryFilter";
import EmptyState from "@/components/ui/EmptyState";
import ErrorState from "@/components/ui/ErrorState";
import type { Article } from "@/lib/news";

export default async function HomePage() {

let articles: Article[] = [];
let error: string | null = null;

try {
  articles = await getTopHeadlines("general");
} catch {
  error = "Failed to load news. Please try again later.";
}

  return (
    <div className="flex flex-col gap-8">
      {/* Hero */}
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
          Top Headlines
        </h1>
        <p className="text-slate-500 dark:text-slate-400">
          Stay updated with the latest news from around the world.
        </p>
      </div>

      {/* Category Filter */}
      <CategoryFilter activeCategory="general" />

      {/* News */}
      {error ? (
        <ErrorState message={error} />
      ) : articles.length === 0 ? (
        <EmptyState message="No articles available right now. Check back later." />
      ) : (
        <NewsGrid articles={articles} />
      )}
    </div>
  );
}