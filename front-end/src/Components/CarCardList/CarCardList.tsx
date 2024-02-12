import { Link } from "react-router-dom";
import { Car } from "../../types/types";
import CarCard from "../CarCard/CarCard";
import "./CarCardList.scss";

type CarCardListProps= {
  cars:Car[];
}

const CardList = ({cars}: CarCardListProps) => {

  return ( 
    <div className="cardlist-container">
     <div className="card-list">
            {cars.map(car => 
            <div key={car.id} className="card-list__card">
                <Link to={`cars/${car.id}`} className="card-list__link">
                    <CarCard key={car.id} car={car} />
                </Link>
            </div>
            )
            }
        </div>

    </div>
  );
  
};

export default CardList;