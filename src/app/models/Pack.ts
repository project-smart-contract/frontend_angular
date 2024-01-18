import {Option} from "./Option";



export interface Pack {
    avantages:Avantage[];
    options:Option[]
}

export interface Avantage {
     lable: string;
}