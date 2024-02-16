import { Link } from "react-router-dom";
import { CarType } from "../../types/types";
import CarCard from "../CarCard/CarCard";
import "./CarCardList.scss";

type CarCardListProps ={
  cars:CarType[];
}

const CarCardList = ({cars}:CarCardListProps) => { 
  return ( 
    <div className="card-list">
       {cars.map((car) => (
        <Link key={car.id} to={`/car/${car.id}`}>
      <CarCard key={car.id} carInfo={car}/>
       </Link>
  ))};
  </div>
);
};
export default CarCardList;