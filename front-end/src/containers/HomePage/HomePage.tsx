import { Link } from "react-router-dom";
import Welcome from "../../assets/Welcome.png"
import "./HomePage.scss"

const HomePage = () => {
    return (
      <div className="home">
        <Link className="home-image" to="/cars">
        <img src={Welcome} alt="Welcome! add your own favourites, add, update or delete cars! have fun!"></img>
       </Link>
      </div>
    );
  };

export default HomePage;