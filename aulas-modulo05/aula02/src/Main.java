//Converter Celsius para Fahrenheit
import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        float celsiusDegrees = sc.nextFloat();
        float fahrenheitDegrees = (celsiusDegrees * 1.8F) + 32;
        System.out.printf("A temperatura " + celsiusDegrees + "° em Celsius é " + fahrenheitDegrees + "° em " + "Fahrenheit.");
    }
}

