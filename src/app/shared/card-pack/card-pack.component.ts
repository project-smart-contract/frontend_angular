import { RouterLink } from '@angular/router';
import { Component, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Pack } from '../../models/Pack';
import { CommonModule, ViewportScroller } from '@angular/common';
import {MatDividerModule} from '@angular/material/divider';


@Component({
  selector: 'card-pack',
  standalone: true,
  imports: [MatCardModule, MatButtonModule,CommonModule,RouterLink,MatDividerModule],
  templateUrl: './card-pack.component.html',
  styleUrl: './card-pack.component.scss'
})
export class CardPackComponent {
   constructor(private viewportScroller: ViewportScroller){}
   @Input() packs:Pack[] = [];
  
  scrollToTop() {
    this.viewportScroller.scrollToPosition([0,0]);
  }

  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  
}
