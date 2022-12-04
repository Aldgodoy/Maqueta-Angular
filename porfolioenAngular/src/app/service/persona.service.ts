import { HttpClient } from '@angular/common/http'; //usa el obervable para manejar las peticiones y respuestas
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  URL = 'http://localhost:8080/personas/';

  constructor(private http: HttpClient) {}
  //  observable se usa en angular para hacer peticiones asincronas
  public getPersona(): Observable<persona> {
    return this.http.get<persona>(this.URL + 'traer/perfil'); //puede pasar que enfrente de traer vaya otra barra; 
  }
}
