import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { Ingreso } from '../common/ingreso';
import { Animal } from '../common/animal';

@Injectable({
  providedIn: 'root'
})
export class AnimalPorIdService {

  private url = "http://localhost:8080/animales";

  constructor(private httpClient: HttpClient) { }

  obtenerAnimal(animalId: number):Promise<Animal> {

    return lastValueFrom(this.httpClient.get<Animal>(`${this.url}/${animalId}`));
  }
}
