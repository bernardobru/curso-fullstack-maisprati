package inheritance;

abstract class Animal {
    String name;

    public Animal (String name) {
        this.name = name;
    }

    public abstract void makeSound ();

    public void sleep () {
        System.out.println("Dormindo");
    }
}
