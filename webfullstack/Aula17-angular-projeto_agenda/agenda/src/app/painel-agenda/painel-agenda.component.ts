import { AgendaService } from './../agenda.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-painel-agenda',
  templateUrl: './painel-agenda.component.html',
  styleUrls: ['./painel-agenda.component.css']
})
export class PainelAgendaComponent implements OnInit {
  // Declaramos um vetor (array) contendo três elementos
  // agenda = [
  //   { id: 1, nome: 'Thiago', telefone: '(11) 99854-6789' },
  //   { id: 2, nome: 'Rafael', telefone: '(11) 99999-8888' },
  //   {id: 3, nome: 'Ian', telefone: '(11) 98215-9832'},
  // ]

  agenda = []
  contato: any = {} //{id: 4, nome: " Danillo",telefone: '(021) 98623-9836'}
  operacao: boolean = true;

  constructor(private service: AgendaService) { }

  ngOnInit(): void {
    this.buscar()
  }

  buscar() {
    this.service.listar().subscribe(resposta => this.agenda = <any> resposta)
  }

  adicionar() {
    this.service.salvar(this.contato).subscribe(() => {
      this.contato = {} // LIMPA OS CAMPOS
      this.buscar() // LISTA NO BANCO DE DADOS
    },
    () => {alert("Ocorreu um erro inesperado! Contate o administrador.")}
    )
  }

  atualizar() {
    this.service.atualizar(this.contato).subscribe(() => { // vai passar o valor dos inputs para dentro do serviço de atualizar
      this.contato = {};
      this.buscar();
    },
    () => alert("Não foi atualizar este contato."));
  }

  inserirOuAtualizar() {
    if (this.operacao == true) { // Se a variável operacao igual a true ele cadastra um novo contato
      this.adicionar();
    } else { // Se não ele atualiza contato existente
      this.atualizar();
      this.operacao = true; // vai dizer para o sistema que agora ela voltar a cadastrar
    }
  }

  editar(cont: any) { // cont é nossa abreviação de contato
    this.contato = {id: cont.id, nome: cont.nome, telefone: cont.telefone};
    this.operacao = false; // dizer para o sistema que agora ele vai atualizar
  }

  excluir(id: number) {
    this.service.excluir(id).subscribe(() => {
      alert("Contato foi excluído com sucesso!")
      // PARA SIMULAR UM LOADING
      setTimeout(() => {
        this.buscar()
      }, 2 * 1000)
    },
    () => {alert("Não foi possível excluir!")}
    )
  }

  // inserirOuAtualizar() {
  //   if (this.operacao == true) {
  //     this.adicionar();
  //   } else {
  //     this.atualizar();
  //     this.operacao = true;
  //   }
  // }

  // editar(cont: any) {
  //   this.contato = {id: cont.id, nome: cont.nome, telefone: cont.telefone};
  //   this.operacao = false;
  // }

  // atualizar() {
  //   this.service.atualizar(this.contato).subscribe(() => {

  //   })
  // }

}
