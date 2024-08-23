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
    private Node removeRecursive (Node current, int data) {

        //Se o nó atual for nulo, retorna nulo
        if (current == null) return null;

        //Se o valor for menor que o valor do nó atual, a função é chamada recursivamente para o nó da esquerda
        if (data < current.value) {
            current.left = removeRecursive(current.left, data);

        //Se o valor for maior que o valor do nó atual, a função é chamada recursivamente para o nó da direita
        } else if (data > current.value) {
            current.right = removeRecursive(current.right, data);

        //Caso contrário
        } else {

            //Se o nó à esquerda do nó atual e o nó à direita do nó atual forem nulos, retorna nulo
            if (current.left == null && current.right == null) return null;

            //Se o nó à esquerda do atual for nulo, retorna o nó da direita
            if (current.left == null) return current.right;

            //Se o nó à direita do atual for nulo, retorna o nó da esquerda
            if (current.right == null) return current.left;

            //Caso o nó encontrado tenha dois filhos, é chamada um método para encontrar o menor dentre eles
            int smallest = findSmallest(current.right);

            //O valor do nó atual é o valor de retorno do método de encontrar o menor
            current.value = smallest;

            //O método é chamado recursivamente para
            current.right = removeRecursive(current.right, smallest);
        }

        return current;
    };

    //Método privado para encontrar o menor valor
    private int findSmallest (Node current) {

        //Retorna o valor do nó atual se o nó da esquerda for nulo, caso contrário o método é chamada recursivamente até encontrar um nó com o valor à esquerda nulo
        return current.left == null ? current.value : findSmallest(current.left);
    }

}
