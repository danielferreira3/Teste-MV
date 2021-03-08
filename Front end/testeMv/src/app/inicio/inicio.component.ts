import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Estabelecimento } from '../model/Estabelecimento';
import { Profissional } from '../model/Profissional';
import { EstabelecimentoService } from '../service/estabelecimento.service';
import { ProfissionalService } from '../service/profissional.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  estabelecimento: Estabelecimento = new Estabelecimento
  estabelecimentos: Estabelecimento[] = []
  listaEstabelecimento: Estabelecimento[]
  profissional: Profissional = new Profissional
  listaProfissional: Profissional[]

  constructor(
    private estabelecimentoService: EstabelecimentoService,
    private profissionalService: ProfissionalService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(){
    window.scroll(0,0);
    this.findAllEstabelecimento();
    this.findAllProfissional();
  }

  findAllEstabelecimento(){
    this.estabelecimentoService.getAllEstabelecimento().subscribe((resp: Estabelecimento[]) =>{
      this.listaEstabelecimento = resp
      
    })
  }

  findAllProfissional(){
    this.profissionalService.getAllProfissional().subscribe((resp: Profissional[]) =>{
      this.listaProfissional = resp
      console.log(this.listaProfissional)
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
