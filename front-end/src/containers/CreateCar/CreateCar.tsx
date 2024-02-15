import CarForm from "../../Components/CarForm/CarForm";
import { CarType } from "../../types/types";
import "./CreateCar.scss"

const CreateCar = () => {

    return (
        <div className="create-car">
    <CarForm defaultFormState={{
    id: 0,
    image: "",
    make: "",
    model: "",
    year: 0,
    color: ""
  }} formTitle={"Add a new Car"} handleSubmit={function (car: CarType): void {
    throw new Error("Function not implemented.");
  } }/></div>
    )
    
}

export default CreateCar;