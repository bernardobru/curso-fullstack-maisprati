import abstraction.Person;
import abstraction.ProtectedTest;
import abstraction.Student;
import abstraction.BankAccount;

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
//        person.program();
//        person.study();
//        person.walk();
//
////      Método de acessar o nome e de modificar o nome
//        String name = person.getName();
//        System.out.println(name);
//
//        person.setName("José");
//
//        String alteredName = person.getName();
//        System.out.println(alteredName);
//
////      Teste de acesso protected
//        ProtectedTest teste = new ProtectedTest();
//        teste.teste();

//        Student student = new Student();
//
//        student.setName("Joãozinho");
//        student.setBirthday("12/03/2012");
//        student.setCpf("12345678900");
//        student.setEnrollment(425622);
//        student.setGrade(7.75F);
//        student.setParentsName("Maria", "José");
//
//        System.out.println(student.getName());
//        System.out.println(student.getBirthday());
//        System.out.println(student.getEnrollment());
//        System.out.println(student.getGrade());
//        for (String name : student.getParentsName()) {
//            System.out.println(name);
//        }

        BankAccount joao = new BankAccount("35.000000.0-1", "João da Silva", 1000F);
        BankAccount maria = new BankAccount("69.000000.0-1", "Maria da Silva", 1250F);

        joao.deposit(1245.35F);
        System.out.println(joao.getBalance());
        System.out.println(joao.getIdentificationNumber());
        System.out.println(joao.getHolder());
        System.out.println(joao.getWithdrawLimit());
        joao.withdrawal(534.35F);
        joao.transfer(500F, maria);
        joao.bankStatement();



    }
}