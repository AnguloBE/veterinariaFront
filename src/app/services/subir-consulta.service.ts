import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ingreso } from '../common/ingreso';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubirConsultaService {

  private url = "http://localhost:8080/ingresos";

  constructor(private httpClient: HttpClient) { }

  subirConsulta(ingreso: Ingreso):Observable<any> {

    return this.httpClient.post<Ingreso>(this.url,ingreso);
  }
}
