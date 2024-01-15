import { Routes } from '@angular/router';
import { RegistrationComponent } from './pages/registration/registration.component';
import { LoginComponent } from './pages/login/login.component';
import { FormulesComponent } from './componnents/formules/formules.component';
import { ParticuProductComponent} from './pages/particu-product/particu-product.component';
import { EntrepProductComponent } from './pages/entrep-product/entrep-product.component';
import { DetailFormuleComponent } from './pages/detail-formule/detail-formule.component';


export const routes: Routes = [

    { path: 'registration', component: RegistrationComponent },
    { path: 'login', component: LoginComponent },
    { path: 'formules', component: FormulesComponent },
    { path: 'particulier', component: ParticuProductComponent },
    { path: 'entreprise', component: EntrepProductComponent },
    { path: 'formule/:id', component: DetailFormuleComponent },
];
