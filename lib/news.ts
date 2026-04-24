const API_KEY = process.env.NEWS_API_KEY;
const BASE_URL = "https://newsapi.org/v2";

export type Article = {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  source: {
    name: string;
  };
};

export type Category =
  | "general"
  | "technology"
  | "business"
  | "sports"
  | "health"
  | "entertainment";

export async function getTopHeadlines(
  category: Category = "general"
): Promise<Article[]> {
  const res = await fetch(
    `${BASE_URL}/top-headlines?country=us&category=${category}&pageSize=20&apiKey=${API_KEY}`,
    { next: { revalidate: 3600 } }
  );

  if (!res.ok) throw new Error("Failed to fetch news");

  const data = await res.json();

  return data.articles.filter(
    (a: Article) => a.title !== "[Removed]" && a.description !== "[Removed]"
  );
}

export async function searchNews(query: string): Promise<Article[]> {
  const res = await fetch(
    `${BASE_URL}/everything?q=${query}&sortBy=publishedAt&pageSize=20&apiKey=${API_KEY}`,
    { next: { revalidate: 3600 } }
  );

  if (!res.ok) throw new Error("Failed to fetch news");

  const data = await res.json();

  return data.articles.filter(
    (a: Article) => a.title !== "[Removed]" && a.description !== "[Removed]"
  );
}