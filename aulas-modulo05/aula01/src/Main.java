//import java.util.Locale;
import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
    /*
        print() apenas imprime
        println() quebra a linha
        printf() imprime uma string formatada
        var é uma palavra-chave para a declaração de uma variável sem tipo definido
        '' é para char, "" é para string
        string é uma classe no Java, um tipo complexo
        se mudar o Locale o número float é separado por . e não por ,
        para operações com números de diferentes tipos, devemos utilizar um () com o tipo do resultado

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
        System.out.printf("float com apenas 2 casas decimais\n" + "%.2f", floatVariable);
        Locale.setDefault(Locale.US);
        System.out.printf("float no formato norte-americano\n" + "%.2f", floatVariable);

        byte height;
        byte width;
        byte length;
        double area;
        height = 5;
        width = 9;
        length = 3;
        area = (double) (height * length) / width;
        System.out.println(area);
    */
        Scanner sc = new Scanner(System.in);
        String name = sc.next();
        int age = sc.nextInt();
        float salary = sc.nextFloat();
        char character = sc.next().charAt(0);
        System.out.println("Seu nome é: " + name);
        System.out.println("Sua idade é: " + age);
        System.out.println("Seu salário é: " + salary);
        System.out.println("A primeira letra do seu nome é: " + character);
    }
}