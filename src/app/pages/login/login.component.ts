import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  hide: boolean = true;
  Email: string = '';
  isEmailValid = true;
  password: string = '';
  confirmPassword: string = ''; 
  allFieldsFilled = false;


  togglePasswordVisibility() {
    this.hide = !this.hide;
  }
}
