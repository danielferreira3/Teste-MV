import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estabelecimento } from '../model/Estabelecimento';
import { Profissional } from '../model/Profissional';
import { EstabelecimentoService } from '../service/estabelecimento.service';
import { ProfissionalService } from '../service/profissional.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  estabelecimento: Estabelecimento = new Estabelecimento
  profissional: Profissional = new Profissional
  estabelecimentos: Estabelecimento[] = []
  listaEstabelecimento: Estabelecimento[]

  constructor(
    private profissionalService: ProfissionalService,
    private estabelecimentoService: EstabelecimentoService,
    private router: Router
  ) { }

  ngOnInit(){
    window.scroll(0,0);
    this.findAllEstabelecimento();
    
  }

pEstabelecimento(event: any){
  this.estabelecimentos = event.target.value
  
}

findAllEstabelecimento(){
  this.estabelecimentoService.getAllEstabelecimento().subscribe((resp: Estabelecimento[]) =>{
    this.listaEstabelecimento = resp
    console.log(this.listaEstabelecimento)
  })
}

cadastrar(){
  this.profissional.estabelecimento = this.estabelecimentos
  this.profissionalService.cadastrar(this.profissional).subscribe((resp: Profissional)=>{
    this.profissional = resp
    alert('Profissional cadastrado com sucesso!')
    this.router.navigate(['/inicio'])
  })
}


}
