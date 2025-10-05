import { useEffect, useState } from "react";

function useFetchNews(endpoint, params = {}) {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNews() {
      setLoading(true);
      const apiKey = "4b4f1ac615dc44ebab8c8465163cb9a0";

      const query = new URLSearchParams({
        pageSize: params.pageSize || 20, // 👈 Default 20 news per page
        ...params,
        apiKey,
      });

      const url = `https://newsapi.org/v2/${endpoint}?${query.toString()}`;

      console.log("🔎 Fetching URL:", url);

      const res = await fetch(url);
      const data = await res.json();

      if (data.articles && data.articles.length > 0) {
        setNews(data.articles);
      } else {
        const fallbackUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}&pageSize=${
          params.pageSize || 10
        }`;
        console.log("⚠️ No news found, using fallback:", fallbackUrl);
        const fallbackRes = await fetch(fallbackUrl);
        const fallbackData = await fallbackRes.json();
        setNews(fallbackData.articles || []);
      }
      setLoading(false);
    }

    fetchNews();
  }, [endpoint, JSON.stringify(params)]);

  return { news, loading };
}

export default useFetchNews;
