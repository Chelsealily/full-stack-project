package com.nology.fullstack;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import java.util.List;
import java.util.stream.Collectors;

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
        return carRepository
                .findAll()
                .stream()
                .collect(Collectors.toList());

    }

    // UPDATE

    public Car updateCar(Car newCar, long id) {
        carRepository.save(newCar);
        return newCar;
    }



    // DELETE
    @Transactional
    public void deleteCarById(long id) {
        carRepository.deleteCarById(id);
    }

}

