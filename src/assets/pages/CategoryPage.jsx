import { useParams, useNavigate } from "react-router-dom";
import useFetchNews from "../hooks/useFetchNews";
import NewsCard from "../components/NewsCard";
import "./CategoryPage.css";

function CategoryPage() {
  const { categoryCode } = useParams();
  const navigate = useNavigate();

  const { news, loading } = useFetchNews("top-headlines", {
    category: categoryCode,
    pageSize: 30,
    country: "us",
  });

  if (loading) return <p>Loading...</p>;

  return (
    <div className="category-page">
      <button onClick={() => navigate(-1)}>← Back</button>
      <h1>{categoryCode.toUpperCase()} News</h1>
      <div className="category-news">
        {news.map((article, i) => (
          <NewsCard key={i} article={article} />
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;
