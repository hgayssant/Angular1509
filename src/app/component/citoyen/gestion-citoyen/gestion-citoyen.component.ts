import { Component, OnInit } from '@angular/core';
import { Citoyen } from 'src/app/models/citoyen';
import { Passeport } from 'src/app/models/passeport';
import { CitoyenService } from 'src/app/service/citoyen.service';

@Component({
  selector: 'app-gestion-citoyen',
  templateUrl: './gestion-citoyen.component.html',
  styleUrls: ['./gestion-citoyen.component.css']
})
export class GestionCitoyenComponent implements OnInit {

  listeCitoyen !: Citoyen[];
  citoyen !: Citoyen;
 

  constructor(private cservice:CitoyenService){}

  ngOnInit(): void {
    this.afficherall();
    this.citoyen = new Citoyen();
  }

  afficherall()
  {
    this.cservice.getAll().subscribe(
      response =>{
        this.listeCitoyen=response
        
      }
    )
  }

  supprimerCitoyen(id:number){
    this.cservice.delete(id).subscribe(
      response=>{
        this.afficherall();
      },
      error =>{
        console.log("Impossible de supprimer")
      }
    )
  }

  ajouterCitoyen(){
    this.cservice.save(this.citoyen).subscribe(
      response =>{
        this.citoyen = new Citoyen();
        this.afficherall()
      },
      error =>{
        console.log("Impossible d'ajouter une personne")
      }
    )
  }

  modifierCitoyen(c:Citoyen){
    this.citoyen=c;
    this.afficherall();
  }
}
