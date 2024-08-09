package utils;
import java.time.LocalDate;
import java.time.LocalTime;

public class DateTime {
    public static void main (String[] args) {
        LocalDate today = LocalDate.now();
        LocalTime time = LocalTime.now();
        System.out.println(today);
        System.out.println(time);
    }
}
