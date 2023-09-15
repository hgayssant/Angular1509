import { Citoyen } from "./citoyen";

export class Passeport {
    id !:number;
    numPass!:string;
    citoyen!:Citoyen;


    constructor(id?:number,numPass?:string,citoyen?:Citoyen){
        if (id) {
            this.id=id;
        }
        if (numPass) {
            this.numPass=numPass;
        }
        if (citoyen) {
            this.citoyen=citoyen;
        }
    }
}
