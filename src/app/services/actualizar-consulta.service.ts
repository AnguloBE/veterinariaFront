import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Consulta } from '../common/consulta';
import { Observable } from 'rxjs';
import { Cliente } from '../common/cliente';

@Injectable({
  providedIn: 'root'
})
export class ActualizarConsultaService {

  private url = "http://localhost:8080/consultas";

  constructor(private httpClient: HttpClient) { }

  actualizarConsulta(consulta: Consulta): Observable<any> {

    return this.httpClient.put<Cliente>(`${this.url}/${consulta.consultaId}`,consulta);
  }
}
