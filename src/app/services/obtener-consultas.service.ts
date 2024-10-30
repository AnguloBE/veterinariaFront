import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Ingreso } from '../common/ingreso';
import { response } from 'express';

@Injectable({
  providedIn: 'root'
})
export class ObtenerConsultasService {

  private baseUrl = "http://localhost:8080/consultas";

  constructor(private httpClient: HttpClient) { }

  ObtenerConsultas(): Observable<Ingreso[]> {

    return this.httpClient.get<Ingreso[]>(this.baseUrl);

  }

}
