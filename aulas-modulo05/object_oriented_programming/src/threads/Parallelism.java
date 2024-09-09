package threads;

import java.util.List;
import java.util.concurrent.ForkJoinPool;

public class Parallelism {
    public static void main(String[] args) {
        List<Integer> numbers = List.of(1,2,3,4,5);

        ForkJoinPool fork = new ForkJoinPool(Runtime.getRuntime().availableProcessors());

        fork.submit(() -> numbers.parallelStream().forEach((number) -> {
                    System.out.println("Número processado: " + number + " - " + Thread.currentThread().getName());
                    try {
                        Thread.sleep(1000);
                    } catch (InterruptedException error) {
                        error.printStackTrace();
                    }
                }
            )
        ).join();

        fork.shutdown();
    }
}
