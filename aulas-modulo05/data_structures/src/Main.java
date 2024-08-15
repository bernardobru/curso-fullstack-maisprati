import java.util.ArrayList;
import java.util.LinkedList;
import java.util.Scanner;
import utils.Product;
import utils.Client;
import lists.SimpleLinkedList;
import queue.Queue;
public class Main {
    public static void main(String[] args) {
        //Instancia o ArrayList
        ArrayList<Client> list = new ArrayList<>();

        //Instancia a fila
        Queue queue = new Queue();

        //Instancia a LinkedList
        /*LinkedList<Integer> linkedList = new LinkedList<>();

        //Instancia o Scanner
        Scanner sc = new Scanner(System.in);


       //Exercício lista simples encadeada
       Product product1 = new Product("Cadeira de escritório", 259.99F, "É uma cadeira");
        Product product2 = new Product("Mesa", 499.99F, "É uma mesa");
        Product product3 = new Product("Caneta azul", 1.29F, "É uma caneta azul");
        Product product4 = new Product("Post it rosa", 5.39F, "É um post it rosa");

        list.add(product1);
        list.add(product2);
        list.add(product3);
        list.add(product4);

        System.out.print("Pesquisar produtos no catálogo\nCadeira => 0, mesa => 1 , caneta => 2, marca texto => 3, post it => 4 e 5 para mostrar todos\n");
        int index = sc.nextInt();
        if (index == 5) {
            for (int i = 0; i < list.size(); i++) {
                System.out.println();
                System.out.println(list.get(i).name + "\n" + list.get(i).price);
            }
        } else System.out.println("Produto: " + list.get(index).name + "\n" + list.get(index).price);*/


        //Exercício com fila e lista
        Client client1 = new Client("joão", "problema com boleto");
        Client client2 = new Client("josé", "não recebeu o dinheiro");
        Client client3 = new Client("carlos", "pedido de divórcio");

        list.add(client1);
        list.add(client2);
        list.add(client3);

        Client firstClient = list.get(0);
        Client secondClient = list.get(1);
        Client thirdClient = list.get(2);

        System.out.println(firstClient.name);
        System.out.println(secondClient.name);
        System.out.println(thirdClient.name);

        queue.enqueue(firstClient.request);
        queue.enqueue(secondClient.request);
        queue.enqueue(thirdClient.request);

        String firstClientServed = queue.dequeue();
        System.out.println(firstClientServed);

        String secondClientServed = queue.dequeue();
        System.out.println(secondClientServed);

        String thirdClientServed = queue.dequeue();
        System.out.println(thirdClientServed);

        //Retorna IllegalStateException
        //queue.dequeue();
    }
}