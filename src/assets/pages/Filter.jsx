import CategoryRow from "../components/CategoryRow";
import "./Filter.css";

function Filter() {
  const categories = [
    { code: "sports", name: "Sports" },
    { code: "technology", name: "Technology" },
    { code: "business", name: "Business" },
    { code: "health", name: "Health" },
    { code: "entertainment", name: "Entertainment" },
    { code: "science", name: "Science" },
    { code: "general", name: "Politics" }, // 'general' works like politics
  ];

  return (
    <div className="filter">
      <h1>News by Category</h1>
      {categories.map((c) => (
        <CategoryRow key={c.code} code={c.code} name={c.name} />
      ))}
    </div>
  );
}

export default Filter;
