//Converter Celsius para Fahrenheit
import java.util.Objects;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        float celsiusDegrees = sc.nextFloat();
        float fahrenheitDegrees = (celsiusDegrees * 1.8F) + 32;
        System.out.printf("A temperature " + celsiusDegrees + "° em Celsius é " + fahrenheitDegrees + "° em " + "Fahrenheit.");

        /* 4. Simple calculator */

        System.out.println("Chose an operator: ");
        char operation = sc.next().charAt(0);
        System.out.println("Type the first number");
        float num1 = sc.nextInt();
        System.out.println("Type the second number");
        float num2 = sc.nextInt();
        switch(operation) {
            case '+':
                System.out.println("Result: " + (num1 + num2));
                break;
            case '-':
                System.out.println("Result: " + (num1 - num2));
                break;
            case '*':
                System.out.println("Result: " + (num1 * num2));
                break;
            case '/':
                System.out.println("Result: " + (num1 / num2));
                break;
            default:
                System.out.println("Invalid operation!");
        }

        /* 5. Simulate a basic login that allows three tries */

        String userName = "bernardo";
        String password = "12345abcde";
        int counter = 0;
        while(counter <= 3) {
            if(counter == 3) {
                System.out.println("User blocked!");
                break;
            }
            String userNameTry = sc.nextLine();
            String passwordTry = sc.nextLine();
            if(!Objects.equals(userNameTry, userName) || !Objects.equals(passwordTry, password)) {
                counter++;
            } else {
                System.out.println("User allowed!");
                break;
            }
        }
        /* For loop */

        for(int i = 1; i <= 5; i++) {
            System.out.println(i);
        }

        /*While loop*/
        int i = 0;
        while(i <= 5) {
            System.out.println(i);
            i++;
        }
        /* Do while */
        i = 0;
        do {
            System.out.println(i);
            i++;
        } while(i < 5);

        /* String functions */

        String text = "Lorem ipsum dolor sit amet.";
        String textUpperCase = text.toUpperCase();
        String textLowerCase = textUpperCase.toLowerCase();
        String replaceWord = text.replace("Lorem", "Sample");
        String substringed = text.substring(6, 11);
        boolean containTrue = text.contains("ipsum");
        boolean containFalse = text.contains("consectetur");
        int sizeOfText = text.length();

        System.out.println("Size: " + sizeOfText);
        System.out.println("Upper Case: " + textUpperCase);
        System.out.println("Lower Case: " + textLowerCase);
        System.out.println("Has Ipsum: " + containTrue);
        System.out.println("Has consectetur: " + containFalse);
        System.out.println("Replaced word: " + replaceWord);
        System.out.println("Substring: " + substringed);

        /* Math functions */

        num1 = 45.333F;
        float rounded = Math.round(num1);
        float absolute = Math.abs(num1);
        double roundedToUp = Math.ceil(num1);
        double roundedToDown = Math.floor(num1);
        double squareRoot = Math.sqrt(num1);
        double random = Math.random();
        System.out.println("Rounded: " + rounded);
        System.out.println("Absolute: " + absolute);
        System.out.println("Ceil: " + roundedToUp);
        System.out.println("Floor: " + roundedToDown);
        System.out.println("Square root: " + squareRoot);
        System.out.println("Random number between 0 and 1: " + random);

        /* Factorial */

        System.out.println("Type a number and see it factorial");
        long num = sc.nextLong();
        long factorial = num;
        while(num > 1) {
            factorial = factorial * (num - 1);
            num--;
        }
        System.out.println(factorial);

    /* Fibonacci sequence without recursion */
        int n = sc.nextInt();
        int a = 0;
        int b = 1;
        for(i = 0; i < n; i++) {
            a = a + b;
            b = a - b;
            System.out.println(a);
        }
    }
}

