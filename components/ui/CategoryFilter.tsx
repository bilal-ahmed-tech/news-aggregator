import Link from "next/link";

export const categories = [
  { label: "Top", slug: "top" },
  { label: "Technology", slug: "technology" },
  { label: "Business", slug: "business" },
  { label: "Sports", slug: "sports" },
  { label: "Health", slug: "health" },
  { label: "Entertainment", slug: "entertainment" },
];

export default function CategoryFilter({
  activeCategory,
}: {
  activeCategory: string;
}) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
      {categories.map((cat) => {
        const isActive = activeCategory === cat.slug;
        return (
          <Link
            key={cat.slug}
            href={`/category/${cat.slug}`}
            aria-current={isActive ? "page" : undefined}
            className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 active:scale-95 ${
              isActive
                ? "bg-violet-600 text-white shadow-md shadow-violet-500/25"
                : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-violet-50 dark:hover:bg-violet-500/10 hover:text-violet-600 dark:hover:text-violet-400"
            }`}>
            {cat.label}
          </Link>
        );
      })}
    </div>
  );
}