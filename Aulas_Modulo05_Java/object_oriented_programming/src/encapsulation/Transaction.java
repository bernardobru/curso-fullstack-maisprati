package encapsulation;

public interface Transaction {
    void execute ();

    String getDetails ();

    static void staticMethod () {
        System.out.println("Método estático da interface, pode ser usado sem instancia-la");
    }

    default void defaultMethod () {
        System.out.println("Método padrão que todas as classes que implementam a interface possuirão");
    }
}
