import { Component, ElementRef } from '@angular/core';
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


  ngAfterViewInit(): void {
    const arrowElements = this.elementRef.nativeElement.querySelectorAll('.arrow');
    
    for (let i = 0; i < arrowElements.length; i++) {
      arrowElements[i].addEventListener('click', (e:any) => {
        const arrowParent = e.target.parentElement.parentElement;
        arrowParent.classList.toggle('showMenu');
      });
    }
    
    const sidebarBtn = this.elementRef.nativeElement.querySelector('.bx-menu');
    const sidebar = this.elementRef.nativeElement.querySelector('.sidebar');
    
    sidebar.classList.remove('close'); // Ensure that the sidebar does not have the 'close' class initially
    sidebarBtn.addEventListener('click', () => {
      sidebar.classList.toggle('close');
    });
  }


}
