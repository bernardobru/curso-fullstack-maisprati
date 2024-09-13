package encapsulation;

public class BankTransaction implements Transaction {

    private final BankAccount account;

    private final TransactionType type;

    private final float value;

    public enum TransactionType {
        DEPOSIT,
        WITHDRAW
    }

    public BankTransaction(BankAccount account, float value, TransactionType type) {
        this.account = account;
        this.value = value;
        this.type = type;
    }

    //Sobrescreve o método da interface Transaction
    @Override
    public void execute() {
        switch (type) {
            case DEPOSIT -> this.account.deposit(value);
            case WITHDRAW -> this.account.withdraw(value);
        }
    }

    //Sobrescreve o método da interface Transaction
    @Override
    public String getDetails() {
        return String.format("A %s type transaction of %.2f in the %s account", this.type, this.value,
                this.account.getAccountNumber());
    }

    @Override
    public void defaultMethod() {
        Transaction.super.defaultMethod();
    }

    public void staticMethod() {
        Transaction.staticMethod();
    }
}
