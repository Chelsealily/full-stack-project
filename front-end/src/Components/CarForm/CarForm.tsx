import { CarType } from "../../types/types";
import "./CarForm.scss"
import { FormEvent, useState } from "react";

type FormProps = {
  defaultFormState: CarType;
  formTitle: string;
  handleSubmit: (car: CarType) => void;
};

const Form = ({ defaultFormState, handleSubmit, formTitle }: FormProps) => {
  const [car, setCar] = useState<CarType>(defaultFormState);

  const handleValidation = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (Object.values(car).some(value => !value)) {
      alert("Missing content, unable to proceed");
      return;
    }

    handleSubmit(car);
  };

  const handleInput = (event: FormEvent<HTMLInputElement>, key: string) =>
    setCar({ ...car, [key]: event.currentTarget.value });

  return (
    <div className="form-container">
      <h2 className="form-container__title">{formTitle}</h2>
      <form className="form-container__form" onSubmit={handleValidation}>
        <input
          className="form-container__input"
          type="text"
          placeholder="Car Brand"
          value={car.make}
          onInput={event => handleInput(event, "Brand")}
        />
        <input
          className="form-container__input"
          type="text"
          placeholder="Model Name"
          value={car.model}
          onInput={event => handleInput(event, "Car Model Name")}
        />
        <input
          className="form-container__input"
          type="text"
          placeholder="Production Year"
          value={car.year}
          onInput={event => handleInput(event, "Car Production Year")}
        />
        <input
          className="form-container__input"
          type="text"
          placeholder="Color"
          value={car.color}
          onInput={event => handleInput(event, "Car Color")}
        />
        <input
          className="form-container__input"
          type="text"
          placeholder="Image Url"
          value={car.image}
          onInput={event => handleInput(event, "Car Image Url")}
        />
        <button type="submit" className="form-container__button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
