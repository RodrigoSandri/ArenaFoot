import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Chuteira } from '../models/chuteira';

@Injectable({
  providedIn: 'root',
})
export class ChuteiraService {
  private readonly apiurl = 'http://localhost:3000/chuteiras';
  private readonly http = inject(HttpClient);
  
  listar(): Observable<Chuteira[]> {
    return this.http.get<Chuteira[]>(this.apiurl);
  }

  criar(chuteira: Chuteira) : Observable<Chuteira> {
    return this.http.post<Chuteira>(this.apiurl, chuteira);
  }

  atualizar(chuteira: Chuteira, id: number) : Observable<Chuteira> {
    return this.http.put<Chuteira>(`${this.apiurl}/${id}`, chuteira); 
  }

  excluir(id: number) : Observable<void> {
    return this.http.delete<void>(`/${id}`);
  }
}
