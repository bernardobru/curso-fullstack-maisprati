package queue;

import java.util.LinkedList;
import java.util.PriorityQueue;
import java.util.Queue;

public class QueueExample {
    public static void main (String[] args){
        //LinkedList implementa os métodos de Queue
        Queue<Integer> queue = new LinkedList<>();

        //Adicionando elementos na lista
        queue.add(1);
        queue.add(2);
        queue.add(3);
        queue.add(4);

        //Retorna o elemento no head da fila
        System.out.println("Peek: " + queue.peek());

        //Retorna o elemento removido da fila (o primeiro)
        System.out.println("Poll: " + queue.poll());


    }
}
