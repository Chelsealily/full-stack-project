import CarCard from "../CarCard/CarCard";
import "./CarCardList.scss";


const CardList = () => {

  return ( 
    <div className="cardlist-container">
    
      <CarCard image={""} make={""} model={""} year={0} color={""} />

    </div>
  );
  
};

export default CardList;