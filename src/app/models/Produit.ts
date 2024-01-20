import { Pack } from "./Pack";



export interface Produit {
     type:string;
     titre: string;
     description: string;
     packs:Pack[];
}