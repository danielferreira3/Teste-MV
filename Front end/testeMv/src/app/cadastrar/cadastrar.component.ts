
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
  arr: number []

  constructor(
    private profissionalService: ProfissionalService,
    private estabelecimentoService: EstabelecimentoService,
    private router: Router
  ) { }

  ngOnInit(){
    window.scroll(0,0);
    this.findAllEstabelecimento();
    this.profissional.estabelecimento = []
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
   this.cbx3()
  for(let i =0; i<this.arr.length; i++){
    let estabe: Estabelecimento = new Estabelecimento
    estabe.id_estabelecimento = this.arr[i];
    this.profissional.estabelecimento.push(estabe)
  }
  console.log(this.arr)
  console.log(this.profissional.estabelecimento)
  this.profissionalService.cadastrar(this.profissional).subscribe((resp: Profissional)=>{
    this.profissional = resp
    alert('Profissional cadastrado com sucesso!')
    this.router.navigate(['/inicio'])
  })
}


 cbx3(){
   this.arr = []/* Cria array com todos os names dos check selecionados */;
   var inputElements = <HTMLCollectionOf<any>> <unknown>document.getElementsByClassName('check') /* Busca todos os elementos com o class check *//* Busca todos os elementos com o class check */;
  for(var i=0; inputElements[i]; ++i){
      if(inputElements[i].checked) /* Verifique se o elemento em questão está com o atributo checked marcado */
      this.arr.push(inputElements[i].name) /* Inclui name do elemento em um array*/;
  }
   //alert(this.arr)

 }

//  cbx4(){
//   var arr = [];
//   var inputElements = (<HTMLInputElement>document.getElementsByClassName('check')).value;
//   for(var i=0; inputElements[i]; ++i){
//       if(inputElements[i].checked)
//       arr.push(inputElements[i].name);
//   }
//   console.log(arr)
//   return arr;
// }


}
