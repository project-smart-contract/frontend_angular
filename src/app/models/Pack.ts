import {Option} from "./Option";



export interface Pack {
    titre:string;
    description:string;
    image:string;
    avantages:Avantage[];
    options:Option[],
    slug:string;
}

export interface Avantage {
    label: string;
}