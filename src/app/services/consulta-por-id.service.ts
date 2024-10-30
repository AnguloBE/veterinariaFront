import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { Ingreso } from '../common/ingreso';

@Injectable({
  providedIn: 'root'
})
export class ConsultaPorIdService {

  private url = "http://localhost:8080/consultas";

  constructor(private httpClient: HttpClient) { }

  obtenerConsulta(consultaId: number):Promise<Ingreso> {

    return lastValueFrom(this.httpClient.get<Ingreso>(`${this.url}/${consultaId}`));
  }
}
