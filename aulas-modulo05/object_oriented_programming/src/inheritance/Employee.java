package inheritance;

import java.time.LocalDate;

public class Employee {

    //Propriedades
    private String name;

    private String cpf;

    private float salary;

    private String department;

    private LocalDate admissionDate;

    //Getters e setters
    public String getName () {
        return this.name;
    }

    public String getCpf() {
        return cpf;
    }

    public float getSalary() {
        return salary;
    }

    public String getDepartment() {
        return department;
    }

    public LocalDate getAdmissionDate() {
        return admissionDate;
    }

    public Employee(String name, String cpf, float salary, String department, LocalDate admissionDate) {
        this.name = name;
        this.cpf = cpf;
        this.salary = salary;
        this.department = department;
        this.admissionDate = admissionDate;
    }

    //Métodos
    public int getLaborTime (int year) {
        return LocalDate.now().getYear() - year;
    }

    public float getAnnualSalary () {
        return this.salary * 12;
    }

    public float calculateBonus (float percentage) {
        float bonus = this.salary * (percentage / 100);
        return this.salary + bonus;
    }
}
