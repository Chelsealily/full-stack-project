import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import CarForm from "../../Components/CarForm/CarForm";
import { CarType } from "../../types/types";
import "./UpdateCar.scss";
import CarCard from "../../Components/CarCard/CarCard";

const getFormCar = (car: CarType) => {
  return {
    id: car.id,
    image: car.image,
    make: car.make,
    model: car.model,
    year: car.year,
    color: car.color,
  };
};

const UpdateCar = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [car, setCar] = useState<CarType | null>(null);
  const [showForm, setShowForm] = useState(false);

  const getCarById = async (id: number) => {
    const url = `http://localhost:8080/car/${id}`;
    const response = await fetch(url);
    const carData = await response.json();
    setCar(carData);
  };

  useEffect(() => {
    if (location.state) {
      setCar(location.state);
    } else {
      getCarById(Number(id));
    }
  }, [id, location]);

  const handleUpdateCar = async (updatedCar: CarType) => {
    const result = await fetch(`http://localhost:8080/car/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedCar),
    });

    if (result.ok) {
      alert("Car updated");
      const updated = await result.json();
      setCar(updated);
    } else {
      const message = await result.text();
      alert(message);
    }
  };

  const handleDeleteCar = async () => {
    const result = await fetch(`http://localhost:8080/car/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (result.ok) {
      alert("Car deleted");
      navigate("/");
    } else {
      const message = await result.text();
      alert(message);
    }
  };

  const handleShowForm = () => setShowForm(!showForm);

  if (!car) return "sorry no car";

  const formCar: CarType | null = car ? getFormCar(car) : null;

  return (
    <section className="edit-car">
      <h2 className="edit-car__title">Edit Car</h2>
      <div className="edit-car__content">
       <CarCard carInfo={car}/>
        <div className="edit-car__buttons">
          <button
            className={showForm ? "edit-car__button" : "edit-car__button edit-car__button--secondary"}
            onClick={handleShowForm}
          >
            Update
          </button>
          <button className="edit-car__button edit-car__button--secondary" onClick={handleDeleteCar}>
            Delete
          </button>
        </div>
      </div>
      {showForm && formCar && (
        <CarForm
          defaultFormState={formCar}
          formTitle="Update Car"
          handleSubmit={handleUpdateCar}
          // Pass any other necessary props
        />
      )}
    </section>
  );
};

export default UpdateCar;
