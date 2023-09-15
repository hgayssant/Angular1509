import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CitoyenService } from 'src/app/service/citoyen.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {
  username:string ="" ;
  password:string = "" ;
  

  constructor(private cservice:CitoyenService, private router:Router)
  {
 
  }

  connection(){
    this.cservice.connection(this.username,this.password).subscribe(
      response =>
      {console.log("connection réussie"),
      sessionStorage.setItem('username',this.username),
      sessionStorage.setItem('password',this.password),
      //sessionStorage
      //affichage des personnes
      this.router.navigateByUrl('afficherPersonneAPI')},
      error=>
      {console.error("Connection impossible")}
    )
  }
}
