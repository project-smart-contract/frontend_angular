import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PackService } from '../../../services/pack.service';
import { Pack } from '../../../models/Pack';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pack-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pack-details.component.html',
  styleUrl: './pack-details.component.scss'
})
export class PackDetailsComponent implements OnInit ,DoCheck{
    slug:string|null="";
    pack:Pack[]=[];
    constructor(private route: ActivatedRoute,private packService:PackService){}


  ngDoCheck(): void {
      this.slug=this.route.snapshot.paramMap.get('slug');
      if(this.slug!==null) this.pack=this.packService.filterPacksBySlug(this.slug);
      console.log(this.pack);
  }


  ngOnInit(): void {
      this.slug=this.route.snapshot.paramMap.get('slug');
      if(this.slug!==null) this.pack=this.packService.filterPacksBySlug(this.slug);
      console.log(this.pack);
  }
   
    
}
