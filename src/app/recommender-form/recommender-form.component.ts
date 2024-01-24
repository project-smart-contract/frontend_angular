import { Component } from '@angular/core';
import { HedaerComponent } from "../shared/hedaer/hedaer.component"; 
import { FormComponent } from './form/form.component';


@Component({
    selector: 'app-recommender-form',
    standalone: true,
    templateUrl: './recommender-form.component.html',
    styleUrl: './recommender-form.component.scss',
    imports: [HedaerComponent, FormComponent]
})
export class RecommenderFormComponent {
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
