import { useState, useEffect } from "react";
import "./ViewCars.scss"
import CarCardList from "../../Components/CarCardList/CarCardList";

const viewCars = () => {
    const [cars, setCars] = useState([]);
  
    useEffect(() => {
      fetchCars();
    }, []);
  
    const fetchCars = async () => {
      try {
        const response = await fetch('http://localhost:8080/cars'); // Update the URL to match your backend endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch cars');
        }
        const carData = await response.json();
        setCars(carData);
      } catch (error) {
        console.error('Error fetching cars:', error);
      }
    };
  
    return (
        <CarCardList cars={cars}/>

    )
}

export default viewCars;