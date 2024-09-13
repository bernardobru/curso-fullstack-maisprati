package inheritance;

public class Enterprise {

    private float payRoll;

    public Enterprise () {
        this.payRoll = 0;
    }

    public void addToPayroll (float value) {
        this.payRoll += value;
    }

    public float getPayroll () {
        return payRoll;
    }

}
