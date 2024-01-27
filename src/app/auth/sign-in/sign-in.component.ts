import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { HedaerComponent, MenuItem } from "../../shared/hedaer/hedaer.component";
import { CommonModule, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-sign-in',
    standalone: true,
    templateUrl: './sign-in.component.html',
    styleUrl: './sign-in.component.scss',
    imports: [HedaerComponent, CommonModule,RouterLink,MatFormFieldModule, MatInputModule, 
      FormsModule, ReactiveFormsModule, NgIf, MatButtonModule, MatIconModule]
})
export class SignInComponent implements OnInit{

  @Input() menuContentHeader !:MenuItem[];

  showModal:boolean=false;

  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  
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
