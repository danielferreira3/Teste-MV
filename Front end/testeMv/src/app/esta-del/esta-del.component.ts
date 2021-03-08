import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Estabelecimento } from '../model/Estabelecimento';
import { EstabelecimentoService } from '../service/estabelecimento.service';

@Component({
  selector: 'app-esta-del',
  templateUrl: './esta-del.component.html',
  styleUrls: ['./esta-del.component.css']
})
export class EstaDelComponent implements OnInit {

  estabelecimento: Estabelecimento = new Estabelecimento
  idEsta: number

  constructor(
    private estabelecimentoService: EstabelecimentoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.idEsta = this.route.snapshot.params['id']
    this.findByIdEsta(this.idEsta)
  }

  findByIdEsta(id: number){
    this.estabelecimentoService.getByIdEstabelecimento(id).subscribe((resp: Estabelecimento)=>{
      this.estabelecimento = resp
    })

  }

  apagar(){
    this.estabelecimentoService.deleteIdEstabelecimento(this.idEsta).subscribe(()=>{
      this.router.navigate(['/inicio'])
      alert('Estabelecimento apagado com sucesso!')
      
    })
  }

}
