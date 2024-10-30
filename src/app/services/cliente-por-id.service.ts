import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { Ingreso } from '../common/ingreso';

@Injectable({
  providedIn: 'root'
})
export class ClientePorIdService {

  private url = "http://localhost:8080/clientes";

  constructor(private httpClient: HttpClient) { }

  obtenerCliente(clienteId: number): Promise<Ingreso> {

    return lastValueFrom(this.httpClient.get<Ingreso>(`${this.url}/${clienteId}`));
  }
}
