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
		System.out.println("*Calcular M�dia*");
		System.out.println("****************");
					
		do {
			System.out.print("\nDigite a 1o nota: ");
			nota1 = sc.nextFloat();
			System.out.print("Digite a 2o nota: ");
			nota2 = sc.nextFloat();
			
			res   = (nota1 + nota2) / 2;
			
			if(res < 5) {
				System.out.printf("Sua m�dia � : %.2f", res);
				System.out.println(" e com isso voc� est� REPROVADO!");
				
			}else if(res <= 6.9) {
				System.out.printf("Sua m�dia � : %.2f", res);
				System.out.println(" e com isso voc� est� em RECUPERA��O!");
			}else {
				System.out.printf("Sua m�dia � : %.2f", res);
				System.out.println(" e com isso voc� est� APROVADO!");
			}
			
			System.out.print("Deseja calcular outra m�dia? (s/n) ");
			opt = sc.next();
			    
			
		} while((opt.equals("s")) || (opt.equals("S")));
		if((opt.equals("n")) || (opt.equals("N"))) {
			System.out.print("\nAplica��o encerrada com sucesso!");
		}else{
			System.out.print("\nOp��o inv�lida!");
		}
		sc.close();
	}
}
