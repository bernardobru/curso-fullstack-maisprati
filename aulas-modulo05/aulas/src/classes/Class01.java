package classes;
import java.util.Locale;
import java.util.Scanner;

public class Class01 {
    public static void typesOfVariables () {
        var varVariable = 1;
        byte byteVariable = 127;
        short shortVariable = 32767;
        int intVariable = 2147483647;
        long longVariable = 9223372036854775807L;
        float floatVariable = 3.1415F;
        double doubleVariable = 3.141592653589793238462643383279502;
        char charVariable = 'A';
        boolean booleanTrueVariable = true;
        boolean booleanFalseVariable = false;
        String myName = "Bernardo";

        System.out.println("var" + varVariable);
        System.out.println("byte: " + byteVariable);
        System.out.println("short: " + shortVariable);
        System.out.println("int: " + intVariable);
        System.out.println("long: " + longVariable);
        System.out.println("float: " + floatVariable);
        System.out.println("double: " + doubleVariable);
        System.out.println("char: " + charVariable);
        System.out.println("boolean: " + booleanTrueVariable);
        System.out.println("boolean: " + booleanFalseVariable);
        System.out.println("String: " + myName);
        System.out.printf("float with two decimal places: " + "%.2f" + "\n", floatVariable);
        Locale.setDefault(Locale.US);
        System.out.println("float in the north-american format: " + floatVariable);
    }
    public static void typeCasting () {
        int height = 10;
        int width = 5;
        System.out.println("Type casting: " + (double) height * width);
    }
    public static void scanner () {
        Scanner sc = new Scanner(System.in);
        System.out.println("Type your name: ");
        String name = sc.nextLine();
        System.out.println("Type your age: ");
        int age = sc.nextInt();
        System.out.println("Type your salary: ");
        float salary = sc.nextFloat();
        System.out.println("Type your name: ");
        char character = sc.next().charAt(0);
        System.out.println("Your name is: " + name);
        System.out.println("Your age is: " + age);
        System.out.println("Your salary is: " + salary);
        System.out.println("The first letter of your name is: " + character);
    }
}
