package polymorphism;

public class Cat extends Animal {
    //Polimorfismo dinâmico ou sobrescrita
    @Override
    public void sound() {
        System.out.println("som de gato");
    }
}
