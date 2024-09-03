package encapsulation2;

public abstract sealed class Shape permits Circle, Rectangle {
    public abstract double area ();
}

final class Circle extends Shape {

    private double radius;

    @Override
    public double area () {
        return Math.PI * (this.radius * this.radius);
    }
}

final class Rectangle extends Shape {

    public double length;

    public double width;

    public double area () {
        return this.length * this.width;
    }

}
