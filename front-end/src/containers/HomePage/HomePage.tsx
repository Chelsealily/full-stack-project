import CarCardList from "../../Components/CarCardList/CarCardList";
import "./HomePage.scss"

const HomePage = () => {
    return (
      <div>
        <h1>My Favourite Cars</h1>
        <CarCardList cars={[]} />
      </div>
    );
  };

export default HomePage;