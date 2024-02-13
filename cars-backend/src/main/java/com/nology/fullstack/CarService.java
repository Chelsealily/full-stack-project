package com.nology.fullstack;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class CarService {

    @Autowired
    CarRepository carRepository;

    // CREATE
    public void addCar(Car car) {
        carRepository.save(car);
    }

    // READ

    public List<Car> getAllCars() {
        return carRepository.getAllCars();
    }

    // UPDATE

    public void updateCar(Car newCar, long id) {
        carRepository.save(newCar);
    }



    // DELETE
    @Transactional
    public void deleteCarById(long id) {
        carRepository.deleteCarById(id);
    }

}

