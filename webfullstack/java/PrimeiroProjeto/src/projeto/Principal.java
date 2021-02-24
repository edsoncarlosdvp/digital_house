package projeto;

public class Principal {

	public static void main(String[] args) {

		int num1, num2, soma;
		
		num1 = 5;
		num2 = 10;
		soma = num1 + num2;
		
		System.out.println("O resultado da soma é: " + soma);
		
		float numero1, numero2, divisao;
		
		numero1 = 15.5f;
		numero2 = 3;
		divisao = numero1 / numero2;
		System.out.println("O resultado da divisão é: " + divisao);
		System.out.printf("O resultado da divisão é: %.2f\n", divisao);
		
		String nome = "Edson";
		System.out.println("Meu nome é: " + nome);
		
		char letra;
		letra = 'a';
		System.out.println("A letra digitada é: " + letra);
		
		boolean resposta;
		resposta = true; // ou false
		
		int n = 16;
		
		if((n %2) == 0) {
			System.out.println("O número " + n + " é par!");
		}else {
			System.out.println("O número " + n + " é impar!");
		}

	}

}
