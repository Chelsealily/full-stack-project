import { useState, useEffect } from "react";
import "./ViewCars.scss"
import CarCardList from "../../Components/CarCardList/CarCardList";

const viewCars = () => {
    const [cars, setCars] = useState([]);
  
    useEffect(() => {
      fetchCars();
    }, []);
  
    const fetchCars = async () => {

        const response = await fetch('http://localhost:8080/cars');
        if (!response.ok) {
          throw new Error('Failed to fetch cars');
        }
        const carData = await response.json();
        setCars(carData);
        console.log(carData);
    };
  
    return (
        <CarCardList cars={cars}/>

    )
}

export default viewCars;