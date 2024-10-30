import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../common/cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActualizarClienteService {

  private url = "http://localhost:8080/clientes";

  constructor(private httpClient: HttpClient) { }

  actualizarCliente(cliente: Cliente): Observable<any> {

    return this.httpClient.put<Cliente>(`${this.url}/${cliente.clienteId}`,cliente);
  }
}
