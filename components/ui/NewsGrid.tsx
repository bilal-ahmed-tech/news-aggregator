import NewsCard from "@/components/ui/NewsCard";
import type { Article } from "@/lib/news";

export default function NewsGrid({ articles }: { articles: Article[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article, index) => (
        <NewsCard key={`${article.url}-${index}`} article={article} />
      ))}
    </div>
  );
}