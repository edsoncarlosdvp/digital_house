package projeto;

public class Principal {

	public static void main(String[] args) {

		int num1, num2, soma;
		
		num1 = 5;
		num2 = 10;
		soma = num1 + num2;
		
		System.out.println("O resultado da soma �: " + soma);
		
		float numero1, numero2, divisao;
		
		numero1 = 15.5f;
		numero2 = 3;
		divisao = numero1 / numero2;
		System.out.println("O resultado da divis�o �: " + divisao);
		System.out.printf("O resultado da divis�o �: %.2f\n", divisao);
		
		String nome = "Edson";
		System.out.println("Meu nome �: " + nome);
		
		char letra;
		letra = 'a';
		System.out.println("A letra digitada �: " + letra);
		
		boolean resposta;
		resposta = true; // ou false
		
		int n = 16;
		
		if((n %2) == 0) {
			System.out.println("O n�mero " + n + " � par!");
		}else {
			System.out.println("O n�mero " + n + " � impar!");
		}

	}

}
