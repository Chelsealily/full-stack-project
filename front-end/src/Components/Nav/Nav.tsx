import "./Nav.scss";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    
    <div className="nav">
      
      <Link className="nav__item" to="/">
        Home
      </Link>

      <Link className="nav__item" to="/cars">
        All Cars
      </Link>

      <Link className="nav__item" to="/car/create">
        Add Car
      </Link>

      <Link className="nav__item" to="/car/random">
        Inspire me
      </Link>
    </div>
  );
};

export default Nav;