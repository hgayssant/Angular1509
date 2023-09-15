import { Component } from '@angular/core';
import { CitoyenService } from 'src/app/service/citoyen.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component {
  username:string ="" ;
  password:string = "" ;
  

  constructor(private authservice:AuthService, private router:Router)
  {
 
  }

  connectionJwt(){
    this.authservice.connectionJwt(this.username,this.password).subscribe(
      response=> {console.log("connection réussie"),
      sessionStorage.setItem('jwtToken',response.jwt)
      this.router.navigateByUrl('afficherCitoyen')},
      error=>
      {console.error("Connection impossible")}
    )
  }

  connection(){
    this.authservice.connection(this.username,this.password).subscribe(
      response =>
      {console.log("connection réussie"),
      sessionStorage.setItem('username',this.username),
      sessionStorage.setItem('password',this.password),
      //sessionStorage
      //affichage des personnes
      this.router.navigateByUrl('afficherCitoyen')},
      error=>
      {console.error("Connection impossible")}
    )
  }
}
