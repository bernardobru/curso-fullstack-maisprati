package abstraction;

public class Student {

    private String name;


    private String birthday;


    private String cpf;


    private int enrollment;


    private String[] parentsName = new String[2];


    private float grade;


    public String getName () {
        return this.name;
    }


    public void setName (String name) {
        this.name = name;
    }


    public String getBirthday () {
        return this.birthday;
    }


    public void setBirthday (String birthday) {
        this.birthday = birthday;
    }


    public void setCpf (String cpf) {
        this.cpf = cpf;
    }


    public int getEnrollment () {
        return this.enrollment;
    }


    public void setEnrollment (int enrollment) {
        if (enrollment < 0) throw new RuntimeException("Enrollment value is under 0");
        this.enrollment = enrollment;
    }


    public String[] getParentsName () {
        return this.parentsName;
    }


    public void setParentsName (String mother, String father) {
        this.parentsName[0] = mother;
        this.parentsName[1] = father;
    }


    public float getGrade () {
        return this.grade;
    }


    public void setGrade (float grade) {
        if (enrollment < 0) throw new RuntimeException("Grade value is less then 0");
        this.grade = grade;
    }
}
