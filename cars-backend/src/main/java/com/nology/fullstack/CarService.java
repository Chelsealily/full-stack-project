package com.nology.fullstack;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Modifying;
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

    public Car getCarById(long id) {
        return carRepository.findById(id).orElseThrow();
    }

    public Car getRandomCar() {
        return carRepository.getRandomCar();
    }



    // UPDATE
    @Modifying
    public Car updateCar(Car newCar, long id) {
        if (!carRepository.existsById(id)) {
            throw new CarNotFoundException("Car Not Found");
        }
        newCar.setId(id);
        carRepository.save(newCar);
        return newCar;
    }



    // DELETE
    @Transactional
    public void deleteCarById(long id) {
        if (!carRepository.existsById(id)) {
            throw new CarNotFoundException("Car Not Found");
        }
        carRepository.deleteCarById(id);
    }

}

