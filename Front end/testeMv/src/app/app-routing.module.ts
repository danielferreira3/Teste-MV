import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrarEstaComponent } from './cadastrar-esta/cadastrar-esta.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EstaDelComponent } from './esta-del/esta-del.component';
import { EstaEditComponent } from './esta-edit/esta-edit.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProfDelComponent } from './prof-del/prof-del.component';
import { ProfEditComponent } from './prof-edit/prof-edit.component';

const routes: Routes = [

  {path: '', redirectTo: 'inicio', pathMatch: 'full'},

  {path:'cadastrar', component: CadastrarComponent},
  {path:'inicio', component: InicioComponent},
  {path: 'cadastrar-esta', component: CadastrarEstaComponent},
  {path: 'esta-del/:id', component: EstaDelComponent},
  {path: 'esta-edit/:id', component: EstaEditComponent},
  {path: 'prof-del/:id', component: ProfDelComponent},
  {path: 'prof-edit/:id', component: ProfEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
