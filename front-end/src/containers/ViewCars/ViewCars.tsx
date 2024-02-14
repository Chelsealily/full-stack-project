import { useState, useEffect, FormEvent } from "react";
import "./ViewCars.scss"
import CarCardList from "../../Components/CarCardList/CarCardList";
import Search from "../../Components/Search/Search";

const viewCars = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [cars, setCars] = useState([]);
    const [filteredCars, setFilteredCars] = useState([]);
  
    useEffect(() => {
      getCars();
    }, []);

    useEffect(() => {
      const filtered = cars.filter((car) =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCars(filtered);
    }, [searchTerm, cars]);

    // Search bar
    const handleInput = (event: FormEvent<HTMLInputElement>) => {
      const input = event.currentTarget.value.toLowerCase();
      setSearchTerm(input);
    };

  
    const getCars = async () => {

        const response = await fetch('http://localhost:8080/cars');
        if (!response.ok) {
          throw new Error('Failed to fetch cars');
        }
        const carData = await response.json();
        setCars(carData);
        console.log(carData);
    };
  
    return (
      <section>
    
        <Search searchTerm={searchTerm} handleInput={handleInput}/>
        
        <CarCardList cars={filteredCars}/>
    </section>
    )
}

export default viewCars;