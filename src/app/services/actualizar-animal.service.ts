import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Animal } from '../common/animal';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActualizarAnimalService {

  private url = "http://localhost:8080/animales";

  constructor(private httpClient: HttpClient) { }

  actualizarAnimal(animal: Animal): Observable<any> {

    return this.httpClient.put<Animal>(this.url,animal);
  } 
}
