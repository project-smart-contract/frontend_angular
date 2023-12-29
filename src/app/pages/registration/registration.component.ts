import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
 import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {
  nom: string = '';
  isnomValid = true;
  prenom: string = '';
  isprenomValid = true;
  birthdayday: string = '';
  birthdayyear: string = '';
  numTelephone: string = ''; 
  hide: boolean = true;
  Email: string = '';
  isEmailValid = true;
  password: string = '';
  confirmPassword: string = ''; 
  ispasswordValid = true;
  responseErrorMessage = '';
 allFieldsFilled = false;

 showErrorMessage = false; 

 submitHandler(event: Event) {
  event.preventDefault();
  if (this.nom.length < 3) {
    this.isnomValid = false;
    return;
  }

  if (this.prenom.length < 3) {
    this.isprenomValid = false;
    return;
  }
  if (this.Email.length < 3) {
    this.isEmailValid = false;
    this.allFieldsFilled = true; // Afficher le message d'erreur
    return;
  }
 if (this.password !== this.confirmPassword) {
  this.ispasswordValid = false;
  this.allFieldsFilled = true; // Afficher le message d'erreur
  return;
}
// Vérifier la force du mot de passe
const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
if (!passwordPattern.test(this.password)) {
  this.showErrorMessage = true; // Afficher le message d'erreur
  return;
}

if (!this.nom || !this.prenom || !this.birthdayday ||!this.birthdayyear ||!this.numTelephone ||!this.Email || !this.password || !this.confirmPassword) {
  this.allFieldsFilled = true; // Afficher le message d'erreur
  return;
}
this.isnomValid = true; 
this.isprenomValid = true;
this.isEmailValid = true;
  this.ispasswordValid = true;
  this.showErrorMessage = false;
  this.allFieldsFilled = false;
  this.responseErrorMessage = '';
 }
 togglePasswordVisibility() {
  this.hide = !this.hide;
}

}
