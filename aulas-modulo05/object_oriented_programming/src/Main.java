import abstraction.Person;
import abstraction.ProtectedTest;

public class Main {
    public static void main(String[] args) {

//      Instanciando pessoa
        Person person = new Person();

//      Atribuindo valores aos atributos
        person.name = "joão";

//      O atributo cpf é privado
//      person.cpf = "12345678900";
//      System.out.println(person.cpf);

//      O atributo birthday é protected
//      person.birthday = "01/01/01";

//      O atributo height é default
//      person.height = 1.70F;


//      Métodos de pessoa
        person.program();
        person.study();
        person.walk();

//      Método de acessar o nome e de modificar o nome
        String name = person.getName();
        System.out.println(name);

        person.setName("José");

        String alteredName = person.getName();
        System.out.println(alteredName);

//      Teste de acesso protected
        ProtectedTest teste = new ProtectedTest();
        teste.teste();
    }
}