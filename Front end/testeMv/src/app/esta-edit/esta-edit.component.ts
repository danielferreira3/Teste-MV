import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Estabelecimento } from '../model/Estabelecimento';
import { EstabelecimentoService } from '../service/estabelecimento.service';

@Component({
  selector: 'app-esta-edit',
  templateUrl: './esta-edit.component.html',
  styleUrls: ['./esta-edit.component.css']
})
export class EstaEditComponent implements OnInit {

  estabelecimento: Estabelecimento = new Estabelecimento

  constructor(
    private estabelecimentoService: EstabelecimentoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(){

    let id = this.route.snapshot.params['id']
    this.findByIdEsta(id)
  }
 
  findByIdEsta(id: number){
    this.estabelecimentoService.getByIdEstabelecimento(id).subscribe((resp: Estabelecimento)=>{
      this.estabelecimento = resp
    })
  }

  atualizar(){
    this.estabelecimentoService.atualizar(this.estabelecimento).subscribe((resp: Estabelecimento)=>{
      this.estabelecimento = resp
      alert('Estabelecimento Atualizado com sucesso!')
      this.router.navigate(['/inicio'])
    })
  }

}
