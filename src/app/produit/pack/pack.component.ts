import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterEvent, RouterLink, RouterOutlet } from '@angular/router';
import { PackService } from '../../services/pack.service';
import { Pack } from '../../models/Pack';
import { CommonModule, ViewportScroller } from '@angular/common';
import { Produit } from '../../models/Produit';
import { HedaerComponent } from "../../shared/hedaer/hedaer.component";
import { CardPackComponent } from "../../shared/card-pack/card-pack.component";

@Component({
    selector: 'app-pack',
    standalone: true,
    templateUrl: './pack.component.html',
    styleUrl: './pack.component.scss',
    imports: [RouterOutlet, CommonModule, RouterLink, HedaerComponent, CardPackComponent]
})


export class PackComponent implements OnInit,DoCheck{
  childRouteActive: boolean = false;
  typeProduit:string|null="";
  produits:Produit[]=[];
  slug:string|null="";
        constructor(private route: ActivatedRoute ,private packService:PackService,private router: Router,private viewportScroller: ViewportScroller){
          this.slug=this.route.snapshot.paramMap.get('slug');
         
          router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
              // Vérifiez si le composant enfant est actif en fonction de l'URL
            if(this.slug != null)  this.childRouteActive = event.url.includes(this.slug);
            }
          });
        }


  ngDoCheck(): void {
     this.slug=this.route.snapshot.paramMap.get('slug');
         
          this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
              // Vérifiez si le composant enfant est actif en fonction de l'URL
            if(this.slug != null)  this.childRouteActive = event.url.includes(this.slug);
            console.log("sloooooooog ",this.slug)
            }
          });
  }

          // Vous pouvez également utiliser cette méthode pour effectuer des actions lors de l'activation du composant enfant
  onChildRouteActivate(event: any): void {
    console.log('Composant enfant activé', event);
    // Vous pouvez effectuer des actions supplémentaires ici si nécessaire
  }

        ngOnInit(): void {
          // Get product ID from the route parameter
           this.typeProduit = this.route.snapshot.paramMap.get('type');
          // Implement logic to fetch and display details of the specified product
           if(this.typeProduit!=null){
            console.log(this.typeProduit)
           this.produits = this.packService.getPacks(this.typeProduit);
           console.log(this.produits)
           }   
        }

        scrollToTop() {
          this.viewportScroller.scrollToPosition([0.5, 0]);
        }
       
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
