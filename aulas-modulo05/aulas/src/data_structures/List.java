package data_structures;

import java.util.Arrays;

public class List {
    private int[] elements;

    private int size;

    public List () {
        this.elements = new int[10];
        this.size = 0;
    }

    private boolean isFull () {
        return this.size == this.elements.length;
    }

    private void resize () {
        int[] newElements = new int[this.elements.length + 1];
        for (int i = 0; i < this.elements.length; i++) {
            newElements[i] = this.elements[i];
        }
        this.elements = newElements;
    }

    public int getElement (int index) {
        if (index >= this.size || index < 0) throw new IndexOutOfBoundsException("Index out of the bounds / Index invalid");
        return this.elements[index];
    }

    public void add (int element) {
        if (isFull()) this.resize();
        this.elements[this.size++] = element;
    }

    public void remove (int index) {
        if (index >= this.size || index < 0) throw new IndexOutOfBoundsException("Index out of the bounds / Index invalid");
        for (int i = index; i < this.size - 1; i++) {
            this.elements[i] = this.elements[i + 1];
        }
        this.size--;
    }

    @Override
    public String toString () {
        return Arrays.toString(Arrays.copyOfRange(this.elements, 0, this.size));
    }
}
