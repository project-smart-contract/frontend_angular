import { Component, OnInit } from '@angular/core';
import { HedaerComponent } from "../shared/hedaer/hedaer.component";
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss',
    imports: [HedaerComponent,RouterOutlet]
})
export class DashboardComponent implements OnInit {
  menuContentHeader:any[]=[];
  ngOnInit(): void {
    this.menuContentHeader=[
      {
       label:"Home",
       link:"/"
      },{
        label:"Packs",
        link:"/"
      },{
       label:"Transactions",
       link:"/dash"
     },
      
      {
       label:"Mes contrats",
       link:"dashboard/contract"
      }
  ]
  }

 
   
}
