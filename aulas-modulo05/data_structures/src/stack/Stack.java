package stack;

class Node {

    //Define o atributo 'data'
    char data;

    //Define o atributo 'next' como Node, pois o próximo nó será um objeto Node
    Node next;

    //Construtor da classe Node
    public Node (char data) {

        //Define o 'data' como o valor passado para o construtor
        this.data = data;

        //Define o 'next' como null, porque está sendo criado um novo nó
        this.next = null;
    }
}

public class Stack {

    //Declara um atributo para o topo da pilha
    public Node top;

    //Construtor da classe Stack
    public Stack () {

        //Define o topo como nulo, pois a pilha começa vazia
        this.top = null;
    }

    //Método de adicionar na pilha
    public void push (char data) {

        //Cria um novo nó
        Node node = new Node(data);

        //Atualiza o ponteiro next do novo nó sendo o antigo top
        node.next = this.top;

        //Atualiza o ponteiro top sendo o novo nó
        this.top = node;
    }

    //Método para remover um elemento da pilha
    public char pop () {

        //Verifica se está vazia
        if (isEmpty()) {

            //Retorna um erro se a pilha tá vazia
            throw new RuntimeException("Stack is empty");
        }

        //Armazena o dado do top
        char data = this.top.data;

        //Atualiza o top com o próximo valor
        this.top = this.top.next;

        //Retorna o dado excluído da fila
        return data;
    }

    //Método que verifica se a pilha está vazia
    public boolean isEmpty () {

        //Retorna true se o topo for igual a nulo
        return this.top == null;
    }

    //Método que retorna o dado do top
    public char peek () {
        if (isEmpty()) throw new RuntimeException("Stack is empty");

        return this.top.data;
    }
}
