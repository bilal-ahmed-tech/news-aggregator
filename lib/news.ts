const API_KEY = process.env.NEWS_API_KEY;
const BASE_URL = "https://newsdata.io/api/1";

export type Article = {
  title: string;
  description: string;
  link: string;
  image_url: string;
  pubDate: string;
  source_name: string;
};

export type Category =
  | "top"
  | "technology"
  | "business"
  | "sports"
  | "health"
  | "entertainment";

export async function getTopHeadlines(
  category: Category = "top"
): Promise<Article[]> {
  const res = await fetch(
    `${BASE_URL}/news?apikey=${API_KEY}&language=en&category=${category}`,
    { next: { revalidate: 3600 } }
  );

  const data = await res.json();

  if (!res.ok) throw new Error("Failed to fetch news");

  const seen = new Set<string>();
  return (data.results || []).filter((a: Article) => {
    if (!a.title || !a.description || a.title === "[Removed]") return false;
    if (seen.has(a.title)) return false;
    seen.add(a.title);
    return true;
  });
}

export async function searchNews(query: string): Promise<Article[]> {
  const res = await fetch(
    `${BASE_URL}/news?apikey=${API_KEY}&language=en&q=${encodeURIComponent(query)}`,
    { next: { revalidate: 3600 } }
  );

  const data = await res.json();

  if (!res.ok) throw new Error("Failed to fetch news");

  const seen = new Set<string>();
  return (data.results || []).filter((a: Article) => {
    if (!a.title || !a.description || a.title === "[Removed]") return false;
    if (seen.has(a.title)) return false;
    seen.add(a.title);
    return true;
  });
}