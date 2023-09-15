import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (sessionStorage.getItem("jwtToken") !=null ) {

      //new HttpHeaders().set('Authorization', 'Basic ' + window.btoa(sessionStorage.getItem("username") + ':' + sessionStorage.getItem("password")))
      let cnx = 'Bearer ' + sessionStorage.getItem("jwtToken");

      request = request.clone({
        setHeaders: {
          Authorization: cnx
        }

      });
    };

    return next.handle(request);
  }
}
