import { Component, OnInit } from '@angular/core';
import { HedaerComponent } from "../../../shared/hedaer/hedaer.component";
import { CardPackComponent } from "../../../shared/card-pack/card-pack.component";

@Component({
    selector: 'app-contract',
    standalone: true,
    templateUrl: './contract.component.html',
    styleUrl: './contract.component.scss',
    imports: [HedaerComponent, CardPackComponent]
})
export class ContractComponent implements OnInit {
  menuContentHeader:any[]=[];
  ngOnInit(): void {
    this.menuContentHeader=[
      {
       label:"Retour",
       link:"/dashboard"
      },{
        label:"Mes contrats",
        link:"/"
      },{
       label:"Gestion des Contrats",
       link:"/dash"
     },
      
      {
       label:"Contrat Archivé",
       link:"/"
      }
  ]
  }

 
}
