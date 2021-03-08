import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estabelecimento } from '../model/Estabelecimento';

@Injectable({
  providedIn: 'root'
})
export class EstabelecimentoService {

  constructor(
    private http: HttpClient
  ) { }

  cadastrar(estabelecimento: Estabelecimento): Observable<Estabelecimento>{
    return this.http.post<Estabelecimento>('http://localhost:8080/estabelecimento/cadastrar', estabelecimento)
  }

  getAllEstabelecimento(): Observable<Estabelecimento[]>{
    return this.http.get<Estabelecimento[]>('http://localhost:8080/estabelecimento')
  }

  getByIdEstabelecimento(id: number): Observable<Estabelecimento>{
    return this.http.get<Estabelecimento>(`http://localhost:8080/estabelecimento/id/${id}`)
  }


  atualizar(estabelecimento: Estabelecimento): Observable<Estabelecimento>{
    return this.http.put<Estabelecimento>(`http://localhost:8080/estabelecimento`, estabelecimento)
  }

  deleteIdEstabelecimento (id: number){
  return this.http.delete(`http://localhost:8080/estabelecimento/${id}`)
  }
}

