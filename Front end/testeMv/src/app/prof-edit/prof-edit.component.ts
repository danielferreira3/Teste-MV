import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Estabelecimento } from '../model/Estabelecimento';
import { Profissional } from '../model/Profissional';
import { EstabelecimentoService } from '../service/estabelecimento.service';
import { ProfissionalService } from '../service/profissional.service';

@Component({
  selector: 'app-prof-edit',
  templateUrl: './prof-edit.component.html',
  styleUrls: ['./prof-edit.component.css']
})
export class ProfEditComponent implements OnInit {

  profissional: Profissional = new Profissional
  estabelecimento: Estabelecimento = new Estabelecimento
  estabelecimentos: Estabelecimento[] = []
  listaEstabelecimento: Estabelecimento[]

  constructor(
    private profissionalService: ProfissionalService,
    private estabelecimentoService: EstabelecimentoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(){
    let id = this.route.snapshot.params['id']
    this.findByIdProf(id)
  }

  findByIdProf(id: number){
    this.profissionalService.getByIdProfissional(id).subscribe((resp: Profissional)=>{
      this.profissional = resp
    })
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

  atualizar(){
    this.profissionalService.atualizar(this.profissional).subscribe((resp: Profissional)=>{
      this.profissional = resp
      alert('Profissional Atualizado com sucesso!')
      this.router.navigate(['/inicio'])
    })
  }

}
