import { Component, ElementRef, HostListener, Input, Renderer2} from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
//import { SideBarComponent } from "../side-bar/side-bar.component";
import { CommonModule, NgIf } from '@angular/common';
export interface MenuItem {
  label: string;
  link?: string;
  subMenu?: MenuItem[];
}

@Component({
    selector: 'app-hedaer',
    templateUrl: './hedaer.component.html',
    styleUrls: ['./hedaer.component.scss'],
    standalone: true,
    imports: [CommonModule,RouterLink,NgIf , RouterModule]
})
export class HedaerComponent {

   @Input() menuContent! :MenuItem[];

   @Input() isfixed! :boolean;
   display:string ="";
  constructor(private renderer: Renderer2, private el: ElementRef,private elementRef: ElementRef) {}

    ngOnInit(): void {
      console.log("hello i'm header !")
      if(this.isfixed!==false){
         this.display = "relative"
      }else {
        this.display = "fixed"
      }
      // search-box open close js code
      const navbar = document.querySelector(".navbar");

      
      const searchBox = document.querySelector(".search-box .bx-search") as HTMLElement;
      // const searchBoxCancel = document.querySelector(".search-box .bx-x");
  
      searchBox.addEventListener("click", () => {
        navbar?.classList.toggle("showInput");
        if (navbar?.classList.contains("showInput")) {
          searchBox.classList.replace("bx-search", "bx-x");
        } else {
          searchBox.classList.replace("bx-x", "bx-search");
        }
      });
    
      // sidebar open close js code
      const navLinks = document.querySelector(".navbar .nav-links") as HTMLElement;
      const menuOpenBtn = document.querySelector(".navbar .bx-menu") as HTMLElement;
    
      const menuCloseBtn = document.querySelector(".nav-links .bx-x") as HTMLElement;
      menuOpenBtn.onclick = () => {
        navLinks.style.left = "0";
        console.log(navLinks)
      };
      menuCloseBtn.onclick = () => {
        navLinks.style.left = "-100%";
      };
  
      const subMenuArrows = this.el.nativeElement.querySelectorAll(".js-arrow");
      subMenuArrows.forEach((arrow:any) => {
        this.renderer.listen(arrow, 'click', () => {
          const parentNavItem = arrow.parentElement;
          const subMenu = parentNavItem.querySelector(".js-sub-menu");
          if (subMenu) {
            subMenu.classList.toggle("show-sub-menu");
          }
        });
      });

    
    }
    menuItems: MenuItem[] = [
      {
        label: 'HOME',
        link: '/'
      },
      {
        label: 'HTML & CSS',
        subMenu: [
          { label: 'Web Design', link: '/Web_Design' },
          { label: 'Login Forms', link: '/Login_Forms' },
          { label: 'Card Design', link: '#' },
          {
            label: 'DevOps',
            subMenu: [
              { label: 'Neumorphism', link: '#' },
              { label: 'Pre-loader', link: '#' },
              { label: 'Glassmorphism', link: '#' }
            ]
          }
        ]
      },
      {
        label: 'JAVASCRIPT',
        subMenu: [
          { label: 'Dynamic Clock', link: '#' },
          { label: 'Form Validation', link: '#' },
          { label: 'Card Slider', link: '#' },
          { label: 'Complete Website', link: '#' }
        ]
      },
      {
        label: 'ABOUT US',
        link: '#'
      },
      {
        label: 'CONTACT US',
        link: '#'
      }
    ];


}