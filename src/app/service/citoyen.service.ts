import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Citoyen } from '../models/citoyen';
import { AuthentificationOK } from '../models/authentification-ok';

@Injectable({
  providedIn: 'root'
})
export class CitoyenService {

  constructor(private http: HttpClient) {}

  getAll(){
    return this.http.get<Citoyen[]>("http://localhost:8015/citoyen/public");
  }

  delete(id: number) {
    return this.http.delete(`http://localhost:8015/citoyen/admin/supprimer/${id}`);
  }

  save(c: Citoyen) {
    return this.http.post(`http://localhost:8015/citoyen/user/save`, c);
  }
  getById(id:number){
    return this.http.get<Citoyen>(`http://localhost:8015/citoyen/public/${id}`)
  }

}
