package encapsulation2;

public abstract sealed class Shape permits Circle, Rectangle {
    public abstract double area ();
}

final class Circle extends Shape {

    private double radius;

    public Circle(double radius) {
        this.radius = radius;
    }

    @Override
    public double area () {
        return Math.PI * (this.radius * this.radius);
    }


}


