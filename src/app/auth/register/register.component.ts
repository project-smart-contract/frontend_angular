import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HedaerComponent, MenuItem } from "../../shared/hedaer/hedaer.component";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';


@Component({
    selector: 'oauth',
    templateUrl: './oauth.html',
    styleUrls: ['./register.component.scss'],
    standalone: true,
    imports: [MatButtonModule],
  })
export class OAuth {
constructor() {}
}


@Component({
    selector: 'app-register',
    standalone: true,
    templateUrl: './register.component.html',
    styleUrl: './register.component.scss',
    imports: [HedaerComponent,OAuth, FormsModule,ReactiveFormsModule,CommonModule
            ,MatInputModule,MatIconModule,MatSelectModule,MatButtonModule, MatRadioModule],

})
export class RegisterComponent implements OnInit{
    @Input() menuContentHeader !:MenuItem[];

    ngOnInit(): void {
        this.myForm = this.fb.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]]
          });

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


    panelOpenState = false;
  selectedOption: string = 'personel';
  
  @Input()
  myForm!: FormGroup;
  @Output() submitForm: EventEmitter<any> = new EventEmitter();
  constructor(private fb: FormBuilder) {}


  onSubmit() {
    if (this.myForm.valid) {
      // Form submission logic
      console.log(this.myForm.value);
    }
  }

  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  scrollToTarget() {
    const targetElement = document.getElementById('scrollTarget');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
