package stack;

class Node {
    //Define o atributo 'data'
    int data;
    //Define o atributo 'next' como Node, pois o próximo nó será um objeto Node
    Node next;
    //Construtor da classe Node
    public Node (int data) {
        //Define o 'data' como o valor passado para o construtor
        this.data = data;
        //Define o 'next' como null, porque está sendo criado um novo nó
        this.next = null;
    }
}

public class Stack {
    //Declara um atributo para o topo da pilha
    private Node top;
    //Construtor da classe Stack
    public Stack () {
        //Define o topo como nulo, pois a pilha começa vazia
        this.top = null;
    }
    //Método de adicionar na pilha
    public void push (int data) {
        //Cria um novo nó
        Node node = new Node(data);


    }
}
