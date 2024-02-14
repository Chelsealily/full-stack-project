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
    CarService carService;

    @ExceptionHandler
    public ResponseEntity<String> handleExceptions(CarNotFoundException exception) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(exception.getMessage());
    }

    // CREATE
    @PostMapping("/car")
    public ResponseEntity<Car> createCar(@RequestBody Car car) {
        carService.addCar(car);
        return ResponseEntity.status(HttpStatus.CREATED).body(car);
    }

    //READ

    @GetMapping("/cars")
    public ResponseEntity<List<Car>> getCars(){
        System.out.println(carService.getAllCars());
        return ResponseEntity.status(HttpStatus.OK).body(carService.getAllCars());
    }

    @GetMapping("/cars/{id}")
    public ResponseEntity<Car> getCarById(@PathVariable long id) {
        return ResponseEntity.status(HttpStatus.OK).body(carService.getCarById(id));
    }

    // UPDATE

    @PutMapping("/cars/{id}")
    public ResponseEntity<Car> updateRecipe(@RequestBody Car newCar, @PathVariable long id) {
        newCar.setId(id);
        Car updatedCar = carService.updateCar(newCar, id);
        return ResponseEntity.status(HttpStatus.OK).body(updatedCar);
    }

    //DELETE

    @DeleteMapping("/cars/{id}")
    public ResponseEntity<String> deleteCarById(@PathVariable long car_id) {
        carService.deleteCarById(car_id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).body("Deleted Car");
    }

}
