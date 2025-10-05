import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./assets/pages/Home";
import Filter from "./assets/pages/Filter";
import CategoryPage from "./assets/pages/CategoryPage";
import Navbar from "./assets/components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filter" element={<Filter />} />
        <Route path="/category/:categoryCode" element={<CategoryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
