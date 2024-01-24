import { Component, Input, OnInit } from '@angular/core';
import { StockRecommendationsService } from '../services/stock-recommendations.service';
import { HedaerComponent, MenuItem } from "../shared/hedaer/hedaer.component";

@Component({
    selector: 'app-recommended-packs',
    standalone: true,
    templateUrl: './recommended-packs.component.html',
    styleUrl: './recommended-packs.component.scss',
    imports: [HedaerComponent]
})
export class RecommendedPacksComponent implements OnInit{
  @Input() menuContentHeader !:MenuItem[];
  recommendations: any[]=[];

  constructor( 
    private stockRecommendationsService : StockRecommendationsService,
  ){}
  ngOnInit(): void {
    this.menuContentHeader = [
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
    this.recommendations = this.stockRecommendationsService.getRecommendations();
    console.log("1=========",this.recommendations)
  }

}
