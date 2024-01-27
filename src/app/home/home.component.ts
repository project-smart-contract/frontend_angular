import { Component, Input, OnInit } from '@angular/core';
import { MenuItem, HedaerComponent } from '../shared/hedaer/hedaer.component';
import { CarouselComponent } from "../shared/carousel/carousel.component";
import { ResumePackComponent } from "../shared/resume-pack/resume-pack.component";
import { FooterComponent } from "../shared/footer/footer.component";
import { SignInComponent } from "../auth/sign-in/sign-in.component";
import { JumbotronComponent } from "../shared/jumbotron/jumbotron.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [HedaerComponent, CarouselComponent, ResumePackComponent, FooterComponent, SignInComponent, JumbotronComponent]
})
export class HomeComponent implements OnInit{
  @Input() menuContentHeader !:MenuItem[];
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
       link:"/dashboard"
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
      },
      {
        label:"Register",
        link:"/register"
       },
       {
        label:"Sign In",
        link:"/signin"
       }
]
  }

   

}
