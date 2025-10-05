import "./NewsCard.css";

function NewsCard({ article }) {
  const fallbackImage = "https://placehold.co/400x200/1e1e1e/ffffff?text=No+Image";

  return (
    <div className="card">
      <img
        src={article.urlToImage || fallbackImage}
        alt={article.title || "News image"}
        onError={(e) => {
          e.target.onerror = null; // prevent infinite loop
          e.target.src = fallbackImage;
        }}
      />

      <div className="card-content">
        <h2>{article.title}</h2>
        <p>{article.description}</p>
        <a href={article.url} target="_blank" rel="noopener noreferrer">
          Read more →
        </a>
      </div>
    </div>
  );
}

export default NewsCard;
