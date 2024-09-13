package queue;
import utils.Client;

public class Queue {
    //"Ponteiro" para o primeiro da lista
    private Node first;

    //"Ponteiro" para o último da lista
    private Node last;

    public Queue () {
        this.first = null;
        this.last = null;
    }

    //Criação da classe do nó
    public static class Node {
        String data;

        Node next;

        public Node (String data) {
            this.data = data;
            this.next = null;
        }
    }

    //Método para enfileirar/adicionar na fila
    public void enqueue (String data) {
        Node node = new Node(data);

        //Verifica se está vazio
        if (this.last == null){
            //O primeiro é o novo nó
            this.first = node;

            //O último é o novo nó
            this.last = node;
        } else {
            //O próximo do antigo último nó é o novo nó
            this.last.next = node;

            //O último nó é o novo nó
            this.last = node;
        }
    }

    //Método para desenfileirar
    public String dequeue () {
        //verifica se a fila está vazia e retorna um erro
        if (this.isEmpty()) throw new IllegalStateException("Empty queue / no clients");

        //Armazena o dado do primeiro nó da fila
        String data = this.first.data;

        //Move o "ponteiro" para o próximo do antigo primeiro
        this.first = this.first.next;

        //Verifica se a fila ficou vazia e remove a referência do último (que é uma referência do primeiro)
        if (isEmpty()) this.last = null;

        //Retorna o primeiro dado da fila
        return data;
    }

    //Método que verifica se está vazia
    private boolean isEmpty () {
        return this.first == null;
    }

}
