package polymorphism;

public class Main {
    public static void main(String[] args) {
        Cat cat = new Cat();

        cat.sound();

        Dog dog = new Dog();

        dog.sound();

        //Método de soma de 2 inteiros
        System.out.println(Math.sum(2, 2));

        //Método de soma de 3 inteiros
        System.out.println(Math.sum(1, 2, 3));

        //Método de soma de 2 floats
        System.out.println(Math.sum(3.14159F, 2.71828F));
    }
}
