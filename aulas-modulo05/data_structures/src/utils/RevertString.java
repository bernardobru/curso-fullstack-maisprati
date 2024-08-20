package utils;

import stack.Stack;

public class RevertString {
    private static final Stack stack = new Stack();

    public static String revertString(String string) {

        //Inicializa a string invertida
        StringBuilder revertedString = new StringBuilder();

        //Percorre a string e empilha os chars
        for (int i = 0; i < string.length(); i++) {
            stack.push(string.charAt(i));
        }

        //Itera concatenando os chars da pilha na variável string invertida
        for (int i = 0; i < string.length(); i++) {
            revertedString.append(stack.pop());
        }

        //Retorna a string invertida
        return revertedString.toString();
    }
}
