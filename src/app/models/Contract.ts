import { Section } from "./Section";
import { Transactions } from "./Transactions";




export interface Contract {
    usage: string;
    numPolice:string;
    dateCreation:Date;
    dateExpiration:Date;
    sections:Section[];
    transaction:Transactions;
}


