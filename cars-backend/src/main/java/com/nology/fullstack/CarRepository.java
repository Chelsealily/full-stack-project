package com.nology.fullstack;

import jakarta.persistence.Table;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Table(name="cars")
@Repository
public interface CarRepository extends JpaRepository<Car, Long> {

    // READ

    @Query(value = "SELECT * FROM cars ORDER BY RAND() LIMIT 1", nativeQuery = true)
    Car getRandomCar();

    // DELETE
    void deleteCarById(long id);
}