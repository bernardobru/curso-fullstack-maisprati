//Converter Celsius para Fahrenheit
import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        /* 1. Convert Celsius to Fahrenheit */
//        float celsiusDegrees = sc.nextFloat();
//        float fahrenheitDegrees = (celsiusDegrees * 1.8F) + 32;
//        System.out.printf("The temperature " + celsiusDegrees + "° in Celsius is " + fahrenheitDegrees + "° in " + "Fahrenheit.");
//        int age = sc.nextInt();
//
//        /* if / else */
//        if(age < 18) System.out.println("Underage");
//        else System.out.println("Legal age");
//
//        /*if / else can be like this */
//        if(age >= 18) {
//            System.out.println("Legal age");
//        } else {
//            System.out.println("Underage");
//        }
//
//        /* ternary */
//        String output = age > 18 ? "Legal age" : "Underage";
//        System.out.println(output);
        /* 2. Odd or even */
//        int num = sc.nextInt();
//        if(num % 2 == 0) System.out.println("Is even");
//        else System.out.println("is odd");
        /*switch case*/
//        int dia = sc.nextInt();
//        switch(dia) {
//            case 1:
//                System.out.println("Sunday");
//                break;
//            case 2:
//                System.out.println("Monday");
//                break;
//            case 3:
//                System.out.println("Tuesday");
//                break;
//            case 4:
//                System.out.println("Wednesday");
//                break;
//            case 5:
//                System.out.println("Thursday");
//                break;
//            case 6:
//                System.out.println("Friday");
//            case 7:
//                System.out.println("Saturday");
//                break;
//            default:
//                break;
//        }
        /*3. Verify if is leap year*/
        System.out.println("Type the year: ");
        int year = sc.nextInt();
        boolean isLeap;
        if(year % 4 == 0) {
            if(year % 100 != 0) isLeap = true;
            else isLeap = (year % 400 == 0);
            //true if the operation is true, false otherwise
        } else {
            isLeap = false;
        }
        String output = isLeap ? "Is a leap year" : "Is not a leap year";
        System.out.println(output);
    }
}

