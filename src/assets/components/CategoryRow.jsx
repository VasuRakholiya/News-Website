import useFetchNews from "../hooks/useFetchNews";
import NewsCard from "./NewsCard";
import { useNavigate } from "react-router-dom";
import "./CategoryRow.css";

function CategoryRow({ code, name }) {
  const navigate = useNavigate();
  const { news, loading } = useFetchNews("top-headlines", {
    category: code,
    pageSize: 8,
    country: "us",
  });

  return (
    <div className="category-section">
      <div className="category-header">
        <h2>{name}</h2>
        <button onClick={() => navigate(`/category/${code}`)}>
          See more →
        </button>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : news.length === 0 ? (
        <p>No news available</p>
      ) : (
        <div className="scroll-row">
          {news.map((article, i) => (
            <NewsCard key={i} article={article} />
          ))}
        </div>
      )}
    </div>
  );
}

export default CategoryRow;
