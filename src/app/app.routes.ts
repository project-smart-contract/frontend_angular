import { Routes } from '@angular/router';
import { RegistrationComponent } from '../pages/registration/registration.component';
import { LoginComponent } from '../pages/login/login.component';

export const routes: Routes = [

    { path: 'registration', component: RegistrationComponent },
    { path: 'login', component: LoginComponent },
];
