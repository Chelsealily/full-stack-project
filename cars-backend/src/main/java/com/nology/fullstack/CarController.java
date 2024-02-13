package com.nology.fullstack;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173/")
public class CarController {

    @Autowired
    private CarService carService;

    // CREATE
    @PostMapping("/car")
    public ResponseEntity<Car> createGreeting(@RequestBody Car car) {
        carService.addCar(car);
        return ResponseEntity.status(HttpStatus.CREATED).body(car);
    }

    //READ

    @GetMapping("/carTest")
    public ResponseEntity<String> carTest() {
        return ResponseEntity.status(HttpStatus.OK).body("Hello car Lover!");
    }

    @GetMapping("/cars")
    public ResponseEntity<List<Car>> getCars() {

        return ResponseEntity.status(HttpStatus.OK).body(carService.getAllCars());
    }

    // UPDATE

    //DELETE


}
