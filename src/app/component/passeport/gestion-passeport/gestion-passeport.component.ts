import { Component, OnInit } from '@angular/core';
import { Citoyen } from 'src/app/models/citoyen';
import { Passeport } from 'src/app/models/passeport';
import { CitoyenService } from 'src/app/service/citoyen.service';
import { PasseportService } from 'src/app/service/passeport.service';

@Component({
  selector: 'app-gestion-passeport',
  templateUrl: './gestion-passeport.component.html',
  styleUrls: ['./gestion-passeport.component.css']
})
export class GestionPasseportComponent implements OnInit {
  listePasseport!:Passeport[];
  listeCitoyen !:Citoyen[];
  passeport!:Passeport;
  citoyen!:Citoyen;

  constructor(private pservice:PasseportService, private cservice:CitoyenService){}

  ngOnInit(): void {
    this.afficherAll();
    this.cservice.getAll().subscribe(
      response=>{this.listeCitoyen = response},
      error => {console.error("Impossible d'afficher la liste des citoyens")}
    );
    this.citoyen=new Citoyen()
    this.passeport=new Passeport(0,"",this.citoyen);
  }

  afficherAll()
  {
    this.pservice.getAll().subscribe(
      response=>{this.listePasseport = response},
      error => {console.error("Impossible d'afficher la liste des passeports")}
    )
  }
  supprimerPasseport(id:number){
    this.pservice.delete(id).subscribe(
      response=>{
        this.afficherAll();
      },
      error =>{
        console.log("Impossible de supprimer")
      }
    )
  }

  ajouterPasseport(){
    this.pservice.save(this.passeport).subscribe(
      response=>{
        
        this.afficherAll()
      },
      error => {
        console.error("impossible d'ajouter la personne")
      }
    )
  }

}
