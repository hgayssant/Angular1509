import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GestionCitoyenComponent } from './component/citoyen/gestion-citoyen/gestion-citoyen.component';
import { Login2Component } from './component/login2/login2.component';
import { authGuard } from './service/auth.guard';
import { GestionPasseportComponent } from './component/passeport/gestion-passeport/gestion-passeport.component';



const routes: Routes = [
  
  {path:'afficherCitoyen',component:GestionCitoyenComponent,canActivate:[authGuard]},
  {path:'afficherPasseport',component:GestionPasseportComponent,canActivate:[authGuard]},
  {path:'login',component:Login2Component},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }