import "./CarCard.scss"

type CarCardProps = {
    image: string;
    make: string ;
    model: string;
    year: number;
    color: string;
  };
  
  const CarCard = ({image, make, model, year, color }: CarCardProps) => {
   
    return (
      
      <div className="car-card">
        <img className="car-card__pic" src={image} alt={make+" "+model} />
        <h1 className="car-card__name">{make+" "+model}</h1>
        <p className="car-card__tag">{year}</p>
        <p className="car-card__tag">{color}</p>
        </div>
    );
  };
  export default CarCard;