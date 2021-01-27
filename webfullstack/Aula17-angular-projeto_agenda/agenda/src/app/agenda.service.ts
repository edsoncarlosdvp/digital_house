import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  url = "http://localhost:3000/agenda"

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get(this.url)
  }
}
