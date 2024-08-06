import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        /* Arrays */

        //array of integers with 5 empty slots
        int[] array = new int[5];
        array[0] = 1;
        array[1] = 2;
        array[2] = 3;
        array[3] = 4;
        array[4] = 5;

        //declared array
        int[] declaredArray = {10, 20, 30, 40, 50};

        //print an array
//        for(int i = 0; i < array.length; i++) {
//            System.out.println(array[i]);
//        }

        //sum of the elements
//        int sum = 0;
//        for(int i = 0; i < declaredArray.length; i++) {
//            sum += declaredArray[i];
//        }
//        System.out.println("sum of the elements: " + sum);

        //bigger element
//        int big = 0;
//        for(int i = 0; i < array.length; i++) {
//            if(array[i] > big) big = array[i];
//        }
//        System.out.println(big);

        //revert array
//        int j = 0;
//        int start = 0;
//        int end = array.length - 1;
//        while(start < end) {
//            //stores the value at i index
//            int tmp = array[start];
//            //the value at i index is the last value of the array
//            array[start] = array[end];
//            //the last element of the array is the at i index stored before
//            array[end] = tmp;
//            start++;
//            end--;
//        }
//        for(int i = 0; i < array.length; i++) {
//            System.out.println(array[i]);
//        }

        //add element in the array
//        System.out.println("What value do you want to add? ");
//        int valueToAdd = sc.nextInt();
//        int[] newArray = new int[declaredArray.length + 1];
//
//        for(int i = 0; i < declaredArray.length; i++) {
//            newArray[i] = declaredArray[i];
//        }
//
//        newArray[newArray.length - 1] = valueToAdd;
//
//        for(int elements: newArray) {
//            System.out.println(elements);
//        }
        //remove element from array

    }
}
