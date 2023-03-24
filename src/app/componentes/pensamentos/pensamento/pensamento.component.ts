import { Pensamento } from './../pensamento';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent {
@Input() pensamento: Pensamento = {
  id: 0,
  conteudo: 'I love Angular',
  autoria: 'Vítor Gabriel',
  modelo: 'modelo3'
 }

 larguraPensamento(): string {
  if(this.pensamento.conteudo.length >= 256){
    return 'pensamento-g'
  }
  return 'pensmento-p'
 }
}
