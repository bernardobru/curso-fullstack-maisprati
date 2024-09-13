package encapsulation;

public class BankAccount {

    private final String accountNumber;

    private float balance;

    public BankAccount (String number, float value) {
        this.accountNumber = number;
        this.balance = value;
    }

    public String getAccountNumber() {
        return accountNumber;
    }

    public float getBalance() {
        return balance;
    }

    public void deposit (float value) {
        if (value > 0) this.balance += value;
        else throw new IllegalArgumentException("deposit could not be less then 0");
    }

    public void withdraw (float value) {
        if (value < 0) throw new IllegalArgumentException("withdraw could not be less then 0");
        else if (value > this.balance) throw new IllegalArgumentException("withdraw could not be greater then balance");
        else this.balance -= value;
    }
}
