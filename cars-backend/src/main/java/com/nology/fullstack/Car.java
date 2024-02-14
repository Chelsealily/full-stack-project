package com.nology.fullstack;
import jakarta.persistence.*;

@Entity
@Table (name="cars")
public class Car {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String image;
    private String make;
    private String model;
    private int year;
    private String color;

    // Constructors, getters, and setters

    public Car() {
    }

    public Car(String image, String make, String model, int year, String color) {
        this.image = image;
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }

    // Getters and setters for all properties
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getMake() {
        return make;
    }

    public void setMake(String make) {
        this.make = make;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    // toString() method for debugging and logging

    @Override
    public String toString() {
        return "Car{" +
                "id=" + id +
                ", image_url='"+ image + '\'' +
                ", make='" + make + '\'' +
                ", model='" + model + '\'' +
                ", year=" + year +
                ", color='" + color + '\'' +
                '}';
    }
}