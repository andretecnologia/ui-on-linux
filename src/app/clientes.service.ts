import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from './clientes'

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { }


  getAll(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(`http://vetornegocios.com.br:8080/app/clientes`)
  }
}
