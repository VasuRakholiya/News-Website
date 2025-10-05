import useFetchNews from "../hooks/useFetchNews";
import NewsCard from "../components/NewsCard";



function Home() {
 const { news, loading } = useFetchNews("top-headlines", {
  country: "us",
  pageSize: 20
});


  if (loading) {
    return <p>Loading news...</p>;
  }

  return (
    <div className="home">
      <h1>Today’s News</h1>

      {news.length === 0 ? (
        <p>No news available</p>
      ) : (
        <div className="news-grid">
          {news.map((article, index) => (
            <NewsCard key={index} article={article} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
