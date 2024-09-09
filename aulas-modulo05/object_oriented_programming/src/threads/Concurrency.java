package threads;

import java.util.concurrent.Executor;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class Concurrency {
    public static void main(String[] args) {

        ExecutorService executor = Executors.newFixedThreadPool(2);

        Runnable task1 = () -> {
            for (int i = 0; i <= 5 ; i++) {
                System.out.println("Task 1 - Number: " + i);
                /*try {
                    Thread.sleep(1000);
                } catch (InterruptedException error) {
                    error.printStackTrace();
                }*/
            }
        };

        Runnable task2 = () -> {
            for (char c = 'a'; c <= 'f'; c++) {
                System.out.println("Task 2 - Letter: " + c);
                /*try {
                    Thread.sleep(1000);
                } catch (InterruptedException error) {
                    error.printStackTrace();
                }*/
            }
        };

        executor.submit(task1);
        executor.submit(task2);

        executor.shutdown();
    }
}
