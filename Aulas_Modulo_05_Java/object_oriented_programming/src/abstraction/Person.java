package abstraction;

public class Person {

    public String name;

    private String cpf;

    protected String birthday;

    float height;

    float weight;

    char sex;

    public void walk () {
        System.out.println("walking...");
    }

    public void study () {
        System.out.println("studying...");
    }

    public void program () {
        System.out.println("programming...");
    }

/*  Métodos acessores e modificadores (getter e setters) */

//  Método de acessar o name
    public String getName () {
        return this.name;
    }

//  Método para alterar o name
    public void setName (String name) {
        this.name = name;
    }





    /*public Person (String name, String cpf, String birthday, float height, float weight, char sex) {
        this.name = name;
        this.cpf = cpf;
        this.birthday = birthday;
        this.height = height;
        this.weight = weight;
        this.sex = sex;
    }*/
}
