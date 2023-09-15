import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Passeport } from '../models/passeport';

@Injectable({
  providedIn: 'root'
})
export class PasseportService {

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get<Passeport[]>("http://localhost:8015/passeport/public");
  }
  delete(id: number) {
    return this.http.delete(`http://localhost:8015/passeport/admin/supprimer/${id}`);
  }

  save(p: Passeport) {
    return this.http.post(`http://localhost:8015/passeport/user/save`, p);
  }



}
