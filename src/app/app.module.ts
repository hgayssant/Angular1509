import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { GestionCitoyenComponent } from './component/citoyen/gestion-citoyen/gestion-citoyen.component';
import { GestionPasseportComponent } from './component/passeport/gestion-passeport/gestion-passeport.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptorInterceptor } from './service/auth-interceptor.interceptor';
import { Login2Component } from './component/login2/login2.component';


@NgModule({
  declarations: [
    AppComponent,
    GestionCitoyenComponent,
    GestionPasseportComponent,
    Login2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
