import { Component } from '@angular/core';
import { HedaerComponent } from "../shared/hedaer/hedaer.component";
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss',
    imports: [HedaerComponent,RouterOutlet]
})
export class DashboardComponent {
  menuContentHeader = [
    {
     label:"Home",
     link:"/"
    },{
      label:"Browse Projects",
      link:"/"
    },{
     label:"Dashboard",
     link:"/dash"
   },
    
    {
     label:"Découvrez nos offres",
     link:"/",
     subMenu: [
        {
         label:"Enterprise",
         link:"/produits/entreprise",
        },
        {
         label:"Particulier",
         link:"/produits/particulier",
        }
     ]
    }
]
}
