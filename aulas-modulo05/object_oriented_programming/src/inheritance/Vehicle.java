package inheritance;

import java.util.Date;

public class Vehicle {

    public String manufacturer;

    public String model;

    public String type;

    public int fabricationYear;

    public float power;

    public int capacity;

    private String chassis;

    public Vehicle(String manufacturer, String model, String type, int fabricationYear, float power, int capacity, String chassis) {
        this.manufacturer = manufacturer;
        this.model = model;
        this.type = type;
        this.fabricationYear = fabricationYear;
        this.power = power;
        this.capacity = capacity;
        this.chassis = chassis;
    }

    public Vehicle(String manufacturer) {
        this.manufacturer = manufacturer;

    }

    public Vehicle () {

    }

    void start () {
        System.out.println("Ligando...");
    }

    void accelerate () {
        System.out.println("Acelerando...");
    }



}
