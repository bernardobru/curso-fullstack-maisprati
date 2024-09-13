package classes;

public class Class02 {
    public static float celsiusToFahrenheit (float celsius) {
        return (celsius * 1.8F) + 32;
    }

    public static boolean isUnderageIfElse (int age) {
        if(age < 18) return true; else return false;
    }

    public static boolean isUnderageTernary (int age) {
        return (age < 18) ? true : false;
    }

    public static String isOddOrEven (int num) {
        return num % 2 == 0 ? "Is Even" : "Is Odd";
    }

    public static void switchCase (byte day) {
        switch(day) {
            case 1:
                System.out.println("Sunday");
                break;
            case 2:
                System.out.println("Monday");
                break;
            case 3:
                System.out.println("Tuesday");
                break;
            case 4:
                System.out.println("Wednesday");
                break;
            case 5:
                System.out.println("Thursday");
                break;
            case 6:
                System.out.println("Friday");
            case 7:
                System.out.println("Saturday");
                break;
            default:
                break;
        }
    }

    public static boolean isLeapYear (int year) {
        if(year % 4 == 0) {
            //true if the operation is true, false otherwise
            if(year % 100 != 0) return true; else return (year % 400 == 0);
        } else return false;
    }
}
