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

        /* print an array */
        for(int i = 0; i < array.length; i++) {
            System.out.println(array[i]);
        }

        /* sum of the elements */
        int sum = 0;
        for(int i = 0; i < declaredArray.length; i++) {
            sum += declaredArray[i];
        }
        System.out.println("sum of the elements: " + sum);

        /* bigger element */
        int big = 0;
        for(int i = 0; i < array.length; i++) {
            if(array[i] > big) big = array[i];
        }
        System.out.println(big);

        /* revert array */
        int j;
        int start = 0;
        int end = array.length - 1;
        while(start < end) {
            //stores the value at i index
            int tmp = array[start];
            //the value at i index is the last value of the array
            array[start] = array[end];
            //the last element of the array is the at i index stored before
            array[end] = tmp;
            start++;
            end--;
        }
        for(int i = 0; i < array.length; i++) {
            System.out.println(array[i]);
        }

        /* add element in the array */
        System.out.println("What value do you want to add? ");
        int valueToAdd = sc.nextInt();
        int newSize = declaredArray.length + 1;
        int[] newArray = new int[newSize];
        for(int i = 0; i < newSize - 1; i++) {
            newArray[i] = declaredArray[i];
        }
        int addedIndex = newArray.length - 1;
        newArray[addedIndex] = valueToAdd;

        for(int elements: newArray) {
            System.out.println(elements);
        }

        /* remove element from array */
        for(int elements: array) {
            System.out.println(elements);
        }
        System.out.println("Which element you wanna remove? ");
        int removedIndex = sc.nextInt();
        j = 0;
        int[] copyArray = new int[array.length - 1];
        for(int i = 0; i < array.length; i++) {
            if(i != removedIndex) copyArray[j++] = array[i];
        }
        for(int elements: copyArray) {
            System.out.println(elements);
        }

        /* searching elements of the array */
        System.out.println("Type the element you want to find: ");
        int searchedElement = sc.nextInt();
        for(int i = 0; i  < array.length; i++) {
            if(array[i] == searchedElement) {
                System.out.println(array[i]);
                break;
            }
        }

        /* matrices */

        int[][] matrix = new int[][]{
                {1,2,3},
                {4,5,6},
                {7,8,9}
        };
        for(int i = 0; i < matrix.length; i++) {
            for(j = 0; j < matrix[i].length; j++) {
                System.out.println(matrix[i][j]);
            }
        }
        for(int[]row : matrix) {
            String valueOfMatrix = "";
            for(int value : row) {
                valueOfMatrix += value;
            }
            System.out.println(valueOfMatrix);
        }

        /* sum of main diagonal and the secondary */
        int sumMain = 0;
        int sumSecondary = 0;
        for(int i = 0; i < matrix.length; i++) {
            for(j = 0; j < matrix[i].length; j++) {
                if(i == j) sumMain += matrix[i][j];
            }
        }
        System.out.println(sumMain);
        for(int i = 0; i < matrix.length; i++) {
            sumSecondary += matrix[i][matrix.length - 1 - i];
        }
        System.out.println(sumSecondary);

        /* rotate 90° matrix */
        int index = matrix.length - 1;
        int length = matrix.length;

        for(int[]row : matrix) {
            String valueOfMatrix = "";
            for(int value : row) {
                valueOfMatrix += value;
            }
            System.out.println(valueOfMatrix);
        }
        System.out.println();

        int[][] newMatrix = new int[length][length];
        for (int i = 0; i < length; i++) {
            for (j = 0; j < length; j++) {
              //pick the element last element at the matrix in the first iteration
              //for each iteration after the first, picks up the elements in the left direction
                newMatrix[j][index - i] = matrix[i][j];
            }
        }

        for(int[]row : newMatrix) {
            String valueOfMatrix = "";
            for(int value : row) {
                valueOfMatrix += value;
            }
            System.out.println(valueOfMatrix);
        }

        /* Search elements in the matrix */

        int elementSearched = sc.nextInt();
        for(int[] row : newMatrix) {
            for(int element : row) {
                if(element == elementSearched) System.out.println(element);
            }
        }
    }
}
