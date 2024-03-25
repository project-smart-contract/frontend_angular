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
import { User } from '../../models/User';
import { AuthService } from '../../services/auth.service';
import { TokenService } from '../../services/token.service';


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
  form! : FormGroup;
  user!: User ;
  selectedOption: string = 'personel';

  constructor(private _fb: FormBuilder,
              private authService :AuthService,
              private token :TokenService
    ) {
      this.form = this._fb.group({
        fullname:'',
        email:'',
        password :'',
        age: 0,
        numeroSociete:'',
        numPermis:'',
        cin:'',
        numeroTelephone:'',
  })
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


  panelOpenState = false;

  
  @Input()
  // myForm!: FormGroup;
  // @Output() submitForm: EventEmitter<any> = new EventEmitter();


  onSubmit() {
    if (this.form.valid) {
        console.log('Selected Option:', this.selectedOption);

        if (this.selectedOption === 'personel') {
          this.user = {
            email: this.form.value.email,
            password: this.form.value.password,
            userType: 'personel',
            fullname: this.form.value.fullname,
            age: this.form.value.age,
            numPermis: this.form.value.numPermis,
            cin: this.form.value.cin,
            numeroTelephone: this.form.value.numeroTelephone,
          }
        } else if (this.selectedOption === 'entreprise') {
            this.user = {
              email: this.form.value.email,
              password: this.form.value.password,
              userType: 'entreprise',
              nomSociete: this.form.value.fullname,
              numeroSociete: this.form.value.numeroSociete,
          }
        }

        console.log(this.user);
        this.authService.signUp(this.user).subscribe({
          next:(res)=>{ 
            console.log(res);
          },
          error:(err)=>{console.log(err);}
        })
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
