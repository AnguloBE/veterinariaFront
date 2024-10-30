import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Consulta } from '../common/consulta';

@Injectable({
  providedIn: 'root'
})
export class EliminarConsultaService {

  private baseUrl = "http://localhost:8080/consultas";

  constructor(private httpClient: HttpClient) { }

  eliminarConsulta(consultaId: number): Observable<any> {

    return this.httpClient.delete<Consulta>(`${this.baseUrl}/${consultaId}`)

  }
}
