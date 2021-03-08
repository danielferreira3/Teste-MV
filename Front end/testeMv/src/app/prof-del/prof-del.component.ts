import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Profissional } from '../model/Profissional';
import { ProfissionalService } from '../service/profissional.service';

@Component({
  selector: 'app-prof-del',
  templateUrl: './prof-del.component.html',
  styleUrls: ['./prof-del.component.css']
})
export class ProfDelComponent implements OnInit {

  profissional: Profissional = new Profissional
  idProf: number

  constructor(
    private profissionalService: ProfissionalService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.idProf = this.route.snapshot.params['id']
    this.findByIdProf(this.idProf)
  }
  findByIdProf(id: number){
    this.profissionalService.getByIdProfissional(id).subscribe((resp: Profissional)=>{
      this.profissional = resp
    })

  }
  apagar(){
    this.profissionalService.deleteIdProfissional(this.idProf).subscribe(()=>{
      this.router.navigate(['/inicio'])
      alert('Profissional apagado com sucesso!')
      
    })
  }

}
