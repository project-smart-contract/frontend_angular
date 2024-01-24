import { Component, ElementRef } from '@angular/core';
import { NgModel } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-espace-client',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './espace-client.component.html',
  styleUrl: './espace-client.component.scss'
})

export class EspaceClientComponent {
  constructor(private elementRef: ElementRef) {
    
  }

  

}
