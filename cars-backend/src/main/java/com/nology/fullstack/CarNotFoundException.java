package com.nology.fullstack;

public class CarNotFoundException extends RuntimeException {

    public CarNotFoundException() {
        super("Car has not been found");
    }
}
