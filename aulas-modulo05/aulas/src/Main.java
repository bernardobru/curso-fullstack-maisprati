//import classes.Class01;
//import classes.Class02;
//import classes.Class03.Arrays;
//import classes.Class03.Matrices;
//import classes.BankAccount;
//import classes.Class04;
//import classes.Class04;
//import data_structures.List;
import data_structures.LinkedList;

public class Main {
    public static void main(String[] args) {
        // Class 01 //
        /*Class01.typesOfVariables();

        Class01.typeCasting();

        Class01.scanner();

        // Class 02 //
        float temperature = Class02.celsiusToFahrenheit(69);
        System.out.println(temperature);

        if(Class02.isUnderageIfElse(17)) System.out.println("Legal age"); else System.out.println("Underage");
        String underage = Class02.isUnderageTernary(19) ? "Legal age" : "Underage";
        System.out.println(underage);

        Class02.switchCase((byte) 5);

        int year = 2024;
        if(Class02.isLeapYear(year)) System.out.println(year + " is a leap year.");
        else System.out.println(year + " is not a leap year.");

        // Class 03 //
        // Arrays
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

        //Matrices
        int[][] matrix = {
                {1,2,3,4},
                {5,6,7,8},
                {9,10,11,12},
                {13,14,15,16}
        };
        System.out.println("Print matrix");
        Matrices.printMatrix(matrix);

        System.out.println("Sum of the main diagonal");
        System.out.println(Matrices.sumMainDiagonal(matrix));

        System.out.println("Sum of the secondary diagonal");
        System.out.println(Matrices.sumSecondaryDiagonal(matrix));

        System.out.println("Rotate matrix 90°");
        Matrices.printMatrix(Matrices.rotate90DegMatrix(matrix));

        System.out.println("Search from matrix");
        System.out.println(Matrices.hasOnMatrix(matrix, 4));

        // Class 04 //
        // Bank account class
        BankAccount bank = new BankAccount();
        bank.depositCash(69.42F);
        System.out.println(bank.getBalance());
        bank.depositCash(69.42F);
        System.out.println(bank.getBalance());

        //Geometry class
        System.out.println("Calculate rectangle area");
        System.out.println(Class04.Geometry.calculateRectangle(5.0F, 6.9F));

        System.out.println("Multiply two integers");
        System.out.println(Class04.Geometry.multiplyTwoIntegers(6, 9));

        //Utils class
        System.out.println("Print a message");
        Class04.Utils.printMessage("Hello, World!");*/


        /* Data Structures: List */
//        List list = new List();
//        String array = list.toString();
//        System.out.println(array);
//        list.add(1);
//        array = list.toString();
//        System.out.println(array);
//        list.add(2);
//        list.add(3);
//        list.add(4);
//        list.add(5);
//        array = list.toString();
//        System.out.println(array);
//        list.remove(2);
//        array = list.toString();
//        System.out.println(array);
//        int element = list.getElement(3);
//        System.out.println(element);

        /* Data Structures: Linked List */
        LinkedList linkedList = new LinkedList();
        linkedList.add(5);
        
    }
}