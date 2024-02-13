package com.nology.fullstack;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;


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

    public List<Car> getAllCars(int limit) {
        return carRepository
                .findAll()
                .stream()
                .limit(limit)
                .collect(Collectors.toList());

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

