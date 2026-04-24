import Image from "next/image";
import { ExternalLink, Calendar, Radio } from "lucide-react";
import { format } from "date-fns";
import type { Article } from "@/lib/news";

export default function NewsCard({ article }: { article: Article }) {
  const formattedDate = format(new Date(article.publishedAt), "MMM dd, yyyy");

  return (
    <article className="group flex flex-col rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-violet-300 dark:hover:border-violet-700 hover:shadow-lg hover:shadow-violet-500/10 active:scale-[0.98] transition-all duration-300">
      {/* Image */}
      <div className="relative w-full h-48 bg-slate-100 dark:bg-slate-800 overflow-hidden">
        <Image
          src={article.urlToImage || "/fallback.jpg"}
          alt={article.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          unoptimized
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4 gap-3">
        {/* Source + Date */}
        <div className="flex items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-1">
            <Radio size={12} />
            {article.source.name}
          </span>
          <span className="flex items-center gap-1">
            <Calendar size={12} />
            {formattedDate}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-sm font-semibold text-slate-900 dark:text-white line-clamp-2 leading-snug">
          {article.title}
        </h2>

        {/* Description */}
        <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-3 flex-1">
          {article.description}
        </p>

        {/* Read More */}
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Read full article: ${article.title}`}
          className="inline-flex items-center gap-1.5 text-xs font-medium text-violet-600 dark:text-violet-400 hover:text-violet-500 dark:hover:text-violet-300 active:text-violet-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded transition-colors duration-200 w-fit">
          Read More
          <ExternalLink size={12} />
        </a>
      </div>
    </article>
  );
}