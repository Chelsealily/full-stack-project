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
      alert("Please fill in all of the fields!");
      return;
    }

    handleSubmit(car);
  };


  return (
    <div className="form-container">
      <h2 className="form-container__title">{formTitle}</h2>
      <form className="form-container__form" onSubmit={handleValidation}>
        <label className="form-container__label">Manufacturer
        <input
          className="form-container__input"
          id="form-make"
          type="text"
          value={car.make}
          onInput={event => setCar({ ...car, make: event.currentTarget.value })}
        />
        </label>
        <label className="form-container__label">Model Name
        <input
          className="form-container__input"
          id="form-model"
          type="text"
          value={car.model}
          onInput={event => setCar({ ...car, model: event.currentTarget.value })}
        />
        </label>
        <label className="form-container__label">Production Year
        <input
          className="form-container__input"
          id="form-year"
          type="number"
          value={car.year}
          onInput={event => setCar({ ...car, year: event.currentTarget.value })}
          />
          </label>
        <label className="form-container__label">Color
        <input
          className="form-container__input"
          id="form-color"
          type="text"
          value={car.color}
          onInput={event => setCar({ ...car, color: event.currentTarget.value })}
          /></label>
        <label id="form-container__label">Image Url
        <input
          className="form-container__input"
          id="form-img"
          type="text"
          value={car.image}
          onInput={event => setCar({ ...car, image: event.currentTarget.value })}
          />
          </label>
        <button type="submit" className="form-container__button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
