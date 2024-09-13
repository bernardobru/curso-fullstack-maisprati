package encapsulation2;

public final class Rectangle extends Shape {

    public double length;

    public double width;

    public Rectangle (double length, double width) {
        this.length = length;
        this.width = width;
    }

    public double area () {
        return this.length * this.width;
    }

}
