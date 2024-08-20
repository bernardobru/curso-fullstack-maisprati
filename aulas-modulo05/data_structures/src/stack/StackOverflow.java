package stack;

public class StackOverflow {

    public static void recursive () {
        System.out.println("recursividade");
        recursive();
    }

    public static void main (String[] args) {
        try {
            recursive();
        } catch (StackOverflowError error) {
            System.err.println("Stack overflow");
        }
    }
}
