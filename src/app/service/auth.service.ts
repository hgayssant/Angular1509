import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthentificationOK } from '../models/authentification-ok';
import { AuthentificationResponse } from '../models/authentification-response';
import { AuthentificationRequest } from '../models/authentification-request';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  request !: AuthentificationRequest;

  constructor(private http: HttpClient) {}

  connectionJwt(username:string, password:string){
    this.request = new AuthentificationRequest();
    this.request.username=username;
    this.request.password=password;
    return this.http.post<AuthentificationResponse>('http://localhost:8015/loginUserJwt',this.request)

  }

  connection(username: String, password: String) {
    let headers2 = new HttpHeaders()
      .set('Authorization', 'Basic ' + window.btoa(username + ':' + password));
    return this.http.get<AuthentificationOK>(`http://localhost:8015/AuthOk`, { headers: headers2 })
  }
}
