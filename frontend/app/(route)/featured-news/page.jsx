import { fetchLatestNews } from "@/lib/fetchNews";
import Link from "next/link";

export default async function FeaturedNews() {
  let news;

  try {
    news = await fetchLatestNews(); // Fetch news on the server side
  } catch (error) {
    return <div>Failed to load news. Please try again later.</div>;
  }

  if (!news || !news.news) {
    return <div>No news available at the moment.</div>;
  }

  return (
    <div>
      <h1>Latest COVID-19 News</h1>
      <ul>
        {news.news.map((item) => (
          <li key={item.id}>
            <Link
              key={item.id}
              href={item.originalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-8 text-xl font-bold"
            >
              {item.title}
            </Link>
            <p key={item.id} className="my-4">
              {item.excerpt}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
