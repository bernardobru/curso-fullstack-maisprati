package classes;

public class Class03 {
    public static class Arrays {
        public static void printArray(int[] array) {
            for(int i = 0; i < array.length; i++) {
                System.out.print(array[i] + " ");
            }
        }

        public static int sumArray (int[] array) {
            int sum = 0;
            for (int elements : array) {
                sum += elements;
            }
            return sum;
        }

        public static int biggerElement (int[] array) {
            int bigger = 0;
            for(int elements : array) {
                if(elements > bigger) bigger = elements;
            }
            return bigger;
        }

        public static int[] revertArray (int[] array) {
            int start = 0;
            int end = array.length - 1;
            while(start < end) {
                int tmp = array[start];
                array[start] = array[end];
                array[end] = tmp;
                start++;
                end--;
            }
            return array;
        }

        public static int[] addToArray (int[] array, int value) {
            int newLength = array.length + 1;
            int[] newArray = new int[newLength];
            for(int i = 0; i < array.length; i++) {
                newArray[i] = array[i];
            }
            newArray[newLength - 1] = value;
            return newArray;
        }

        public static int[] removeFromArray (int[] array, int value) {
            int j = 0;
            int[] newArray = new int[array.length - 1];
            for(int i = 0; i < array.length; i++) {
                if(array[i] != value) newArray[j++] = array[i];
            }
            return newArray;
        }

        public static boolean hasOnArray (int[] array, int value) {
            for (int element : array) {
                if(element == value) return true;
            }
            return false;
        }
    }

    public static class Matrices {
        public static void printMatrix (int[][] matrix) {
            for(int[]row : matrix) {
                String valueOfMatrix = "";
                for(int value : row) {
                    valueOfMatrix += value + " ";
                }
                System.out.println(valueOfMatrix);
            }
        }

        public static int sumMainDiagonal (int[][] matrix) {
            int sum = 0;
            for(int i = 0; i < matrix.length; i++) {
                for(int j = 0; j < matrix[i].length; j++) {
                    if(i == j) sum += matrix[i][j];
                }
            }
            return sum;
        }

        public static int sumSecondaryDiagonal (int [][] matrix) {
            int sum = 0;
            for(int i = 0; i < matrix.length; i++) {
                sum += matrix[i][matrix.length - 1 - i];
            }
            return sum;
        }

        public static int[][] rotate90DegMatrix (int[][] matrix) {
            int index = matrix.length - 1;
            int length = matrix.length;
            int[][] newMatrix = new int[length][length];
            for (int i = 0; i < length; i++) {
                for (int j = 0; j < length; j++) {
                    newMatrix[j][index - i] = matrix[i][j];
                }
            }
            return newMatrix;
        }

        public static boolean searchFromMatrix (int[][] matrix, int value) {
            for(int[] row : matrix) {
                for(int element : row) {
                    if(element == value) return true;
                }
            }
            return false;
        }
    }
}
