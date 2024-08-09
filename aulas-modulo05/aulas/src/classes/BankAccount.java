package classes;

public class BankAccount {
    private float balance;

    public float getBalance () {
        return this.balance;
    }

    public void depositCash (float value) {
        this.balance += value;
    }
}

