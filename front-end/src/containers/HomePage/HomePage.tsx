import CarForm from "../../Components/CarForm/CarForm";
import { CarType } from "../../types/types";
import "./HomePage.scss"

const HomePage = () => {
    return (
      <div className="home-text">
        <h2>Welcome to My Favourite Cars web app!
        You can add your own favourites, add or delete mine too :D
        </h2>
        <CarForm defaultFormState={{
          id: 0,
          image: "",
          make: "",
          model: "",
          year: 0,
          color: ""
        }} formTitle={"Add a new Car"} handleSubmit={function (car: CarType): void {
          throw new Error("Function not implemented.");
        } }/>
      </div>
    );
  };

export default HomePage;