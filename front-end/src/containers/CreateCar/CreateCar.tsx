import CarForm from "../../Components/CarForm/CarForm";
import { CarType } from "../../types/types";
import "./CreateCar.scss"

const CreateCar = () => {

    const handleSubmit = async (car: CarType) => {
        const result = await fetch("http://localhost:8080/car", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(car),
        });
    
        if (result.ok) {
          alert("car added");
        } else {
          const message = await result.text();
          alert(message);
        }
      };

    const defaultFormState = {id:-1, image:"",make:"",model:"",year:"",color:""}

    return (
        <div className="create-car">
        
    <CarForm handleSubmit={handleSubmit} defaultFormState={defaultFormState} formTitle={"Add a new Car"}/>
  
  </div>
    )
    
}

export default CreateCar;