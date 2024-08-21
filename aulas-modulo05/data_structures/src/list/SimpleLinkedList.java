package list;

public class SimpleLinkedList {
    //Cria uma inner class representando o nó
    private static class Node {
        //Cria um atributo do dado
        public int data;
        //Cria um atributo do próximo, que é um objeto do nó
        public Node next;
        //Construtor do nó
        public Node (int data) {
            this.data = data;
            this.next = null;
        }
    }

    //Cria o head da lista
    private Node head;

    //Construtor da lista
    public SimpleLinkedList () {
        this.head = null;
    }

    //Método de adicionar na lista
    public void add (int data) {
        //Cria novo nó
        Node node = new Node(data);
        //Se o head for vazio, o novo nó é o primeiro
        if (isEmpty()) {
            this.head = node;
        }
        //Se não for vazio
        else {
            //cria nó atual pegando o head
            Node current = this.head;
            //Percorre a lista até encontrar o último nó
            while (current.next != null) {
                current = current.next;
            }
            //Quando o próximo do atual for nulo, receberá o novo nó
            current.next = node;
        }
    }

    //Método de retornar um elemento pelo índice;
    public int getElement (int index) {
        //Cria um nó que representa o head
        Node current = this.head;
        //Cria uma variável contadora
        int count = 0;
        //Percorre a lista até encontrar o último nó
        while (current != null) {
            //Se o elemento no índice do contador for igual ao índice fornecido, retorna o dado do atual
            if (count == index) return current.data;
            //Incrementa o contador
            count++;
            //Caso não seja verdadeira, continua a iteração
            current = current.next;
        }
        //Se não for encontrado, retorna um erro
        throw new IndexOutOfBoundsException("Element not found / index out of bounds");
    }

    //Método de remover um elemento da lista
    public void remove (int index) {
        //Declara um nó representando o nó atual
        Node current = this.head;
        //Se o head for nulo, retorna um erro
        if (isEmpty()) throw new IndexOutOfBoundsException("Invalid index");
        //Se o índice for igual a zero, move o head para o próximo elemento
        if (index == 0) {
            this.head = this.head.next;
            return;
        }
        //Declara uma variável contadora
        int count = 0;
        //Declara um nó com referência ao nó anterior
        Node previous = null;
        //Percorre toda a lista enquanto o contador for menor que o index
        while (current.next != null && count < index) {
            //O nó anterior recebe o atual
            previous = current;
            //O atual recebe o próximo
            current = current.next;
            //Incrementa o contador
            count++;
        }
        //O próximo do elemento anterior se torna o próximo do elemento removido;
        previous.next = current.next;
    }

    //Método que retorna o tamanho da lista
    public int getSize () {
        int count = 0;
        Node current = this.head;
        //Enquanto o nó atual for diferente de nulo
        while (current != null) {
            //Incrementa o contador
            count++;
            //O nó atual recebe o próximo
            current = current.next;
        }
        //Retorna o count, que representa o tamanho da lista
        return count;
    }

    //Método que retorna true se a lista estiver vazia;
    private boolean isEmpty () {
        //Retorna verdadeiro se o head for nulo
        return this.head == null;
    }

}
