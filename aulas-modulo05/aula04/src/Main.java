import utils.Utils;

public class Main {
    public static void main (String[] args) {
        /* Geometry static class */

        double area = Geometry.calculateRectangle(5.55F, 7.69F);
        System.out.println(area);
        int result = Geometry.multiplyTwoIntegers(69, 420);
        System.out.println(result);

        /* BankAccount class */

        BankAccount account = new BankAccount();
        account.depositCash(50.56F);
        float balance = account.getBalance();
        System.out.println(balance);

        /* utils.Utils */

        Utils.printMessage("Hello, World!");
    }
}
