package projeto;

import java.util.Locale;
import java.util.Scanner;

public class CalcularMedia {

	public static void main(String[] args) {
		
		Locale.setDefault(Locale.US);
		Scanner sc = new Scanner(System.in);
		
		String opt = "s";
		float nota1, nota2, res;
		
		System.out.println("****************");
		System.out.println("*Calcular Média*");
		System.out.println("****************");
					
		do {
			System.out.print("\nDigite a 1o nota: ");
			nota1 = sc.nextFloat();
			System.out.print("Digite a 2o nota: ");
			nota2 = sc.nextFloat();
			
			res   = (nota1 + nota2) / 2;
			
			if(res < 5) {
				System.out.printf("Sua média é : %.2f", res);
				System.out.println(" e com isso você está REPROVADO!");
				
			}else if(res <= 6.9) {
				System.out.printf("Sua média é : %.2f", res);
				System.out.println(" e com isso você está em RECUPERAÇÃO!");
			}else {
				System.out.printf("Sua média é : %.2f", res);
				System.out.println(" e com isso você está APROVADO!");
			}
			
			System.out.print("Deseja calcular outra média? (s/n) ");
			opt = sc.next();
			    
			
		} while((opt.equals("s")) || (opt.equals("S")));
		if((opt.equals("n")) || (opt.equals("N"))) {
			System.out.print("\nAplicação encerrada com sucesso!");
		}else{
			System.out.print("\nOpção inválida!");
		}
		sc.close();
	}
}
