import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { CadastrarEstaComponent } from './cadastrar-esta/cadastrar-esta.component';
import { EstaEditComponent } from './esta-edit/esta-edit.component';
import { EstaDelComponent } from './esta-del/esta-del.component';
import { ProfEditComponent } from './prof-edit/prof-edit.component';
import { ProfDelComponent } from './prof-del/prof-del.component';


@NgModule({
  declarations: [
    AppComponent,
    CadastrarComponent,
    InicioComponent,
    CadastrarEstaComponent,
    EstaEditComponent,
    EstaDelComponent,
    ProfEditComponent,
    ProfDelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
