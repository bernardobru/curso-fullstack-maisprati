package inheritance;

import java.util.Date;

public class Vehicle {

    public String manufacturer;

    public String model;

    public String type;

    public String category;

    public int fabricationYear;

    public float power;

    public int capacity;

    private String chassis;

    void start () {
        System.out.println("Ligando...");
    }

    void accelerate () {
        System.out.println("Acelerando...");
    }



}
