package streams;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
//forma antiga de fazer toList() "collectors.toList()

public class Streams {
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(1,2,3,4,5,6,7,8,9,10);

        List<Integer> evens = numbers.stream().filter(n -> n % 2 == 0).toList();

        List<Integer> multipliedBy2 = numbers.stream().filter(n -> n % 2 == 0).map(n -> n * 2).collect(Collectors.toList());

        System.out.println(evens);
        System.out.println(multipliedBy2);

        //Reduz o array de números a um valor único, somando todos os elementos
        int sum = 0;
        sum = numbers.stream().reduce(sum, Integer::sum); //Método sum da classe Integer
        System.out.println(sum);


        List<String> names = Arrays.asList("joao", "paulo", "jose", "anderson", "bento", "roberto", "cornelio", "eduardo", "gabriel", "ricardo");

        names.stream().map(String::toUpperCase).forEach(System.out::println); //Referência de método da classe String e println da classe System.out

        String paragraph = "Lorem ipsum dolor sit amet consectetur adipiscing elit.";

    }
}
