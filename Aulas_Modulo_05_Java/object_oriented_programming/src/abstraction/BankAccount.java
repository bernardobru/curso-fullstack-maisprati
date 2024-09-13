package abstraction;

import java.util.ArrayList;
import java.util.Date;

public class BankAccount {

    private String identificationNumber;
    private float balance;
    private String holder;
    private float withdrawLimit;
    private ArrayList<String> transactions = new ArrayList<>();

    public BankAccount (String id, String holder, float limit) {
        this.balance = 0;
        this.identificationNumber = id;
        this.holder = holder;
        this.withdrawLimit = limit;
    }

    public float getBalance() {
        return this.balance;
    }

    public float getWithdrawLimit() {
        return withdrawLimit;
    }

    public String getIdentificationNumber() {
        return identificationNumber;
    }

    public String getHolder() {
        return holder;
    }

    public void deposit (float value) {
        if (value < 0) throw new IllegalArgumentException("value less then 0");
        this.balance += value;
        registerTransaction("Deposit: " + value);
    }

    public void withdrawal (float value)  {
        if (value < 0) throw new IllegalArgumentException("value less then 0");

        if (value > this.balance) throw new IllegalArgumentException("value greater then balance");

        if (value > this.withdrawLimit) throw new IllegalArgumentException("limit reached");

        this.balance -= value;
        registerTransaction("Withdrawal: " + value);
    }

    public void transfer (float value, BankAccount destination) {
        if (value <= 0) throw new IllegalArgumentException("value is less or equal 0");

        if (value > this.balance) throw new IllegalArgumentException("not enough currency");

        this.balance -= value;
        destination.deposit(value);
        registerTransaction("Transfer: " + value + " to " + destination.getIdentificationNumber());
    }

    public void bankStatement () {
        System.out.println("Statement of " + this.getIdentificationNumber());
        for (String transaction : transactions) {
            System.out.println(transaction);
        }
        System.out.println("Balance: " + this.getBalance());
    }

    private void registerTransaction (String description) {
        Date today = new Date();
        transactions.add(today + ": " + description);
    }
}
