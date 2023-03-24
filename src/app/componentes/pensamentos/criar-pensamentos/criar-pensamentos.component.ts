import { PensamentoService } from './../pensamento.service';
import { Component, NgModule , OnInit} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-criar-pensamentos',
  templateUrl: './criar-pensamentos.component.html',
  styleUrls: ['./criar-pensamentos.component.css']
})
export class CriarPensamentosComponent {

  pensamento = {

    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor(
    private service: PensamentoService,
    private router: Router,
      ){}

  ngOnInit() :void {

  }

  criarPensamento(){
    this.service.criar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listarPensamento'])
    })
  }

  cancelarPensamento(){

    this.router.navigate(['/listarPensamento'])
  }


}
