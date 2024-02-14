import { CarType } from "../../types/types";
import CarCard from "../CarCard/CarCard";
import "./CarCardList.scss";

type CarCardListProps ={
  cars:CarType[];
}

//later on I need to add the edit link for each card

const CarCardList = ({cars}:CarCardListProps) => { 
  return ( 
    <div className="card-list">
       {cars.map((car) => (
      <CarCard key={car.id} carInfo={car}/>
       
  ))};
  </div>
);
};
export default CarCardList;