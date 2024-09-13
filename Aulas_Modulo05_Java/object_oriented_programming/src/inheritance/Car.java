package inheritance;

public class Car extends Vehicle {

    public boolean hasEletricLock;

    public String traction;

    public int doors;

    public String color;

    public Car (boolean eletricLock, String traction, int doors, String color) {
        super("volkswagen", "Gol", "Hatch", 2020, 82F, 4, "9BW BLWHEXG0 1 07721");
        this.hasEletricLock = eletricLock;
        this.traction = traction;
        this.doors = doors;
        this.color = color;
    }

    public void shiftGears () {
        System.out.println("Trocando de marcha...");
    }

    public static void main (String[] args) {
        Car car = new Car(true, "dianteira", 4, "branco");
        //Superclasse
        System.out.println("Superclasse");
        System.out.println("fabricante: " + car.manufacturer);
        System.out.println("modelo: " + car.model);
        System.out.println("tipo: " + car.type);
        System.out.println("ano de fabricação: " + car.fabricationYear);
        System.out.println("potência em cavalos: " + car.power);
        System.out.println("capacidade: " + car.capacity);
        car.start();
        car.accelerate();

        System.out.println();

        //Subclasse
        System.out.println("Subclasse");
        System.out.println("trava elétrica: " + car.hasEletricLock);
        System.out.println("cor: " + car.color);
        System.out.println("portas: " + car.doors);
        System.out.println("tração: " + car.traction);
        car.shiftGears();
    }
}
