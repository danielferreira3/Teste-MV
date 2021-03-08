import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estabelecimento } from '../model/Estabelecimento';
import { EstabelecimentoService } from '../service/estabelecimento.service';

@Component({
  selector: 'app-cadastrar-esta',
  templateUrl: './cadastrar-esta.component.html',
  styleUrls: ['./cadastrar-esta.component.css']
})
export class CadastrarEstaComponent implements OnInit {

  estabelecimento: Estabelecimento = new Estabelecimento
  estabelecimentos: Estabelecimento[] = []
  listaEstabelecimento: Estabelecimento[]


  constructor(
    private estabelecimentoService: EstabelecimentoService,
    private router: Router
  ) { }

  ngOnInit() {
  }


  findAllEstabelecimento(){
    this.estabelecimentoService.getAllEstabelecimento().subscribe((resp: Estabelecimento[]) =>{
      this.listaEstabelecimento = resp
      console.log(this.listaEstabelecimento)
    })
  }

  cadastrar(){
    this.estabelecimentoService.cadastrar(this.estabelecimento).subscribe((resp: Estabelecimento)=>{
      this.estabelecimento = resp
      this.router.navigate(['/inicio'])

      alert('Estabelecimento cadastrado com sucesso!')

      
      
      
    })
  }

}
