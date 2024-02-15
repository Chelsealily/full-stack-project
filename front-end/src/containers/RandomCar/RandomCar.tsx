import { useState, useEffect } from 'react';
import { CarType } from '../../types/types';
import "./RandomCar.scss"
import CarCard from '../../Components/CarCard/CarCard';
import { Link } from 'react-router-dom';

const RandomCar = () => {
  const [randomCar, setRandomCar] = useState<CarType | null>(null);

  useEffect(() => {
    fetchRandomCar();
  }, []);

  const fetchRandomCar = () => {
    fetch("http://localhost:8080/car/random")
      .then(response => response.json())
      .then(data => setRandomCar(data))
      .catch(error => console.error("Error fetching random car:", error));
  };

  const handleGenerateRandomCar = () => {
    fetchRandomCar();
  };

  return (
    <div className="random-car">
      {randomCar && <CarCard carInfo={randomCar} />} 
      <div className='random-car__button'>
      <button onClick={handleGenerateRandomCar}>Generate Random Car</button></div>
    </div>
  );
};

export default RandomCar;
