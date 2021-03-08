import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profissional } from '../model/Profissional';

@Injectable({
  providedIn: 'root'
})
export class ProfissionalService {

  constructor(
    private http: HttpClient
  ) { }

  cadastrar(profissional: Profissional): Observable<Profissional>{
    return this.http.post<Profissional>('http://localhost:8080/profissional/cadastrar',profissional)
  }

  getAllProfissional(): Observable<Profissional[]>{
    return this.http.get<Profissional[]>('http://localhost:8080/profissional')
  }

  getByIdProfissional(id: number): Observable<Profissional>{
    return this.http.get<Profissional>(`http://localhost:8080/profissional/id/${id}`)
  }


  atualizar(profissional: Profissional): Observable<Profissional>{
    return this.http.put<Profissional>(`http://localhost:8080/profissional`, profissional)
  }

  deleteIdProfissional (id: number){
  return this.http.delete(`http://localhost:8080/profissional/${id}`)
  }
}
