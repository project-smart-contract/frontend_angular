import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-pack',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './pack.component.html',
  styleUrl: './pack.component.scss'
})
export class PackComponent implements OnInit{
  typeProduit:string|null="";
        constructor(private route: ActivatedRoute){}

        ngOnInit(): void {
          // Get product ID from the route parameter
          this.typeProduit = this.route.snapshot.paramMap.get('type');
          // Implement logic to fetch and display details of the specified product
             if(this.typeProduit=="test"){
              console.log("is test")
             }
          
        }


}
