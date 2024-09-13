package inheritance;

import java.time.LocalDate;

public class Developer extends Employee{

    private String mainLanguage;

    private String job;

    private int workingDay;

    public Developer (String name, String cpf, float salary, String department, LocalDate admissionDate,
                      String mainLanguage, String job, int workingDay) {
        super(name, cpf, salary, department, admissionDate);
        this.mainLanguage = mainLanguage;
        this.job = job;
        this.workingDay = workingDay;
    }

    public void developing () {
        System.out.println("Desenvolvendo softwares...");
    }
}
