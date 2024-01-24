import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StockRecommendationsService {
  recommendations: any[] = [];
  constructor() { }

  setRecommendations(data:any[]){
    this.recommendations = data;
    console.log("1=========",this.recommendations)
  }

  getRecommendations(){
    return this.recommendations;
  }
}
