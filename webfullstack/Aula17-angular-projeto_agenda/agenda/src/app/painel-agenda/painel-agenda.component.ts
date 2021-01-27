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

  constructor(private service: AgendaService) { }

  ngOnInit(): void {
    this.buscar()
  }

  buscar() {
    this.service.listar().subscribe(resposta => this.agenda = <any> resposta)
  }

}
