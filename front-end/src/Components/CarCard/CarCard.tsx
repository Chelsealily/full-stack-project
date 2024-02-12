import { Car } from "../../types/types";
import "./CarCard.scss"

type CarCardProps = {
    car:Car;
  };
  
  const CarCard = ({car} :CarCardProps) => {
   
    return (
      
      <div className="car-card">
        <img className="car-card__pic" src={car.image} alt={car.make+" "+car.model} />
        <h1 className="car-card__name">{car.make+" "+car.model}</h1>
        <p className="car-card__tag">{car.year}</p>
        <p className="car-card__tag">{car.color}</p>
        </div>
    );
  };
  export default CarCard;