package com.nology.fullstack;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CarRepository extends JpaRepository<Car, Long> {

    // READ
    List<Car> getAllCars();

    // DELETE
    void deleteCarById(Long id);
}