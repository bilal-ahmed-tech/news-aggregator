import { getTopHeadlines, type Category } from "@/lib/news";
import NewsGrid from "@/components/ui/NewsGrid";
import CategoryFilter from "@/components/ui/CategoryFilter";
import EmptyState from "@/components/ui/EmptyState";
import ErrorState from "@/components/ui/ErrorState";
import type { Metadata } from "next";
import type { Article } from "@/lib/news";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `${slug.charAt(0).toUpperCase() + slug.slice(1)} News`,
    description: `Latest ${slug} news from around the world.`,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  let articles: Article[] = [];
  let error: string | null = null;

  try {
    articles = await getTopHeadlines(slug as Category);
  } catch {
    error = "Failed to load news. Please try again later.";
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white capitalize">
          {slug} News
        </h1>
        <p className="text-slate-500 dark:text-slate-400">
          Latest {slug} news from around the world.
        </p>
      </div>

      <CategoryFilter activeCategory={slug} />

      {error ? (
        <ErrorState message={error} />
      ) : articles.length === 0 ? (
        <EmptyState message={`No ${slug} articles available right now.`} />
      ) : (
        <NewsGrid articles={articles} />
      )}
    </div>
  );
}