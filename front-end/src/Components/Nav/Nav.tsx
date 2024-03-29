import "./Nav.scss";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <Link className="nav__item" to="/">
        Home
      </Link>

      <Link className="nav__item" to="/cars">
        Car
      </Link>

      <Link className="nav__item" to="/cars/create">
        Add Car
      </Link>
    </div>
  );
};

export default Nav;