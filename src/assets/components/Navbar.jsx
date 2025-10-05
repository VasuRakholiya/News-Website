import { useNavigate } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navButton">
      
       <button className =  "button" onClick={()=>navigate("/")}>Home</button>
      
      <button className =  "button"onClick={()=>navigate("/filter")}>Filter</button>
    </nav>
  );
}

export default Navbar;
