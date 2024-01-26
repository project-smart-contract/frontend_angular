import { Component, Input, OnInit } from '@angular/core';
import { StockRecommendationsService } from '../services/stock-recommendations.service';
import { HedaerComponent, MenuItem } from "../shared/hedaer/hedaer.component";
import { CardPackComponent } from "../shared/card-pack/card-pack.component";
import { PackService } from '../services/pack.service';

@Component({
    selector: 'app-recommended-packs',
    standalone: true,
    templateUrl: './recommended-packs.component.html',
    styleUrl: './recommended-packs.component.scss',
    imports: [HedaerComponent, CardPackComponent]
})
export class RecommendedPacksComponent implements OnInit{
  @Input() menuContentHeader !:MenuItem[];
  recommendations: any[]=[];

  packs: any[]=[];
  constructor( 
    private stockRecommendationsService : StockRecommendationsService,
    private packService: PackService
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
    for (var i = 0; i < this.recommendations.length; i++) {
      console.log("2=========",this.recommendations[i])
      this.packs[i] = this.packService.filterPacksBySlug(this.recommendations[i]);
    }


  }




  

}
