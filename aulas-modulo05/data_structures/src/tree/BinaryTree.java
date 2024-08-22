package tree;



public class BinaryTree {
    public static class Node {

        //Declara um atributo valor
        public int value;

        //Declara um atributo para o valor à esquerda da árvore
        public Node left;

        //Declara um atributo para o valor à direita da árvore
        public Node right;

        //Construtor do nó
        public Node (int value) {
            this.value = value;
            this.left = null;
            this.right = null;
        }
    }

    //Declaração da raíz da árvore
    public Node root;

    //Construtor
    public BinaryTree () {
        this.root = null;
    }

    //Método para adicionar na árvore
    public void add (int value) {
        this.root = this.addRecursive(this.root, value);
    }

    //Método privado utilizado para adicionar recursivamente em uma árvore
    private Node addRecursive (Node current, int value) {

        //Verifica se a nó for nulo e cria um novo nó caso for verdadeiro
        if (current == null) return new Node(value);

        //Verifica se o valor for menor que o valor do nó atual, caso for verdadeiro,
        // é adicionado recursivamente à esquerda
        if (value < current.value) current.left = addRecursive(current.left, value);

        //Verifica se o valor for menor que o valor do nó atual, caso for verdadeiro,
        //é adicionado recursivamente à direita
        else if (value > current.value) current.right = addRecursive(current.right, value);

        //Retorna o current
        return current;
    }

    //Método que percorre a árvore e imprime seus dados de forma ordenada
    public void print (Node current) {

        //
        if (current != null) {

            //
            print(current.left);

            //
            System.out.println(current.value);

            //
            print(current.right);
        }
    }

    //Método para remover
    public void remove (int data) {
        this.root = removeRecursive(this.root, data);
    }

    //Método privado recursivo de remover
    private Node removeRecursive (Node current, int data);

}
