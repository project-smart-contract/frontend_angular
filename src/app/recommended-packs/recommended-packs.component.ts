import { Component, OnInit } from '@angular/core';
import { StockRecommendationsService } from '../services/stock-recommendations.service';

@Component({
  selector: 'app-recommended-packs',
  standalone: true,
  imports: [],
  templateUrl: './recommended-packs.component.html',
  styleUrl: './recommended-packs.component.scss'
})
export class RecommendedPacksComponent implements OnInit{
  recommendations: any[]=[];

  constructor( 
    private stockRecommendationsService : StockRecommendationsService,
  ){}
  ngOnInit(): void {
    this.recommendations = this.stockRecommendationsService.getRecommendations();
  }

}
