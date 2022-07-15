import java.util.Scanner;

public class Main {


	public static void main(String[] args) {
		Main inicio = new Main();
		double valor;
		String nome, senha;
		Scanner ler = new Scanner(System.in);
		System.out.println("Digite seu nome: ");
		nome = ler.nextLine();
		System.out.println("Digite sua senha: ");
		senha = ler.nextLine();
		Cliente cli = new Cliente(nome, senha);
		Conta corrente = new ContaCorrente(cli);
		Conta poupanca = new ContaPoupanca(cli);
		corrente.depositar(300);
		corrente.transferir(100, poupanca);
		corrente.imprimirExtrato();
		poupanca.imprimirExtrato();
	}

}
