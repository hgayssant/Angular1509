import { Passeport } from "./passeport";

export class Citoyen {
id!:number;
nom!:string;
prenom!:string;
passeport!:Passeport;

constructor(id?:number, nom?:string, prenom?:string){
    if (id) {
        this.id=id;
    }
    if (nom) {
        this.nom=nom;
    }
    if (prenom) {
        this.prenom=prenom;
    }
}

}
