import classes.Class01;
import classes.Class02;
import classes.Class03.Arrays;
import classes.Class03.Matrices;

public class Main {
    public static void main(String[] args) {
        /* Class 01 */
//        Class01.typesOfVariables();
//
//        Class01.typeCasting();
//
//        Class01.scanner();
//
//        /* Class 02 */
//        float temperature = Class02.celsiusToFahrenheit(69);
//        System.out.println(temperature);
//
//        if(Class02.isUnderageIfElse(17)) System.out.println("Legal age"); else System.out.println("Underage");
//        String underage = Class02.isUnderageTernary(19) ? "Legal age" : "Underage";
//        System.out.println(underage);
//
//        Class02.switchCase((byte) 5);
//
//        int year = 2024;
//        if(Class02.isLeapYear(year)) System.out.println(year + " is a leap year.");
//        else System.out.println(year + " is not a leap year.");

        /* Class 03 */
        /* Arrays */
        int[] array = {1,2,3,4,5,99,7,8,9};
        System.out.println("Print an array: ");
        Arrays.printArray(array);

        System.out.println("Sum of the elements of the array: ");
        System.out.println(Arrays.sumArray(array));

        System.out.println("Bigger element in the array: ");
        System.out.println(Arrays.biggerElement(array));

        System.out.println("Reverted Array");
        Arrays.printArray(Arrays.revertArray(array));

        System.out.println("Add an element to the array: ");
        Arrays.printArray(Arrays.addToArray(array, 69));

        System.out.println("Removed an element from the array: ");
        Arrays.printArray(Arrays.removeFromArray(array, 99));

        System.out.println("Searching in the array: ");
        System.out.println(Arrays.hasOnArray(array, 3));

        /* Matrices */
        int[][] matrix = {
                {1,2,3,4},
                {5,6,7,8},
                {9,10,11,12}
        };
        //System.out.println(Matrices.searchFromMatrix(matrix, 12));
    }
}