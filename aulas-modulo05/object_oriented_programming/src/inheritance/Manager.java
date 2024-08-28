package inheritance;

import java.time.LocalDate;

public class Manager extends Employee{

    private String departmentManaged;

    private int subordinates;

    public Manager(String name, String cpf, float salary, String department, LocalDate admissionDate, String departmentManaged, int subordinates) {
        super(name, cpf, salary, department, admissionDate);
        this.departmentManaged = departmentManaged;
        this.subordinates = subordinates;
    }

    public void managing () {
        System.out.println("Gerindo...");
    }
}
