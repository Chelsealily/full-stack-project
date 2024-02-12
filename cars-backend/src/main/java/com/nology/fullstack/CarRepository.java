package com.nology.fullstack;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CarRepository extends JpaRepository<Car, Long> {

    // Method to find all cars
    List<Car> findAll();

    // Method to find car by ID
    Optional<Car> findById(Long id);

    // Method to save a new car or update an existing one
    Car save(Car car);

    // Method to delete a car by ID
    void deleteById(Long id);

    // Example of a custom query method
    List<Car> findByMake(String make);
}