import { Contract } from './models/Contract';
import { Routes } from '@angular/router';
import { RegistrationComponent } from './pages/registration/registration.component';
import { LoginComponent } from './pages/login/login.component';
import { FormulesComponent } from './componnents/formules/formules.component';
import { ParticuProductComponent} from './pages/particu-product/particu-product.component';
import { EntrepProductComponent } from './pages/entrep-product/entrep-product.component';
import { DetailFormuleComponent } from './pages/detail-formule/detail-formule.component';
import { HomeComponent } from './home/home.component';
import { ProduitComponent } from './produit/produit.component';
import { PackComponent } from './produit/pack/pack.component';
import { PackAddComponent } from './produit/pack/pack-add/pack-add.component';
import { PackDetailsComponent } from './produit/pack/pack-details/pack-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EspaceClientComponent } from './dashboard/espace-client/espace-client.component';
import { ContractComponent } from './dashboard/espace-client/contract/contract.component';
import { DocumentComponent } from './dashboard/document/document.component';
import { RecommenderFormComponent } from './recommender-form/recommender-form.component';
import { RecommendedPacksComponent } from './recommended-packs/recommended-packs.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    {
        path:"produits",
        component:ProduitComponent,
        children:[
            {
                 path:":type",
                 component:PackComponent,
                 children:[
                    {
                        path:"details-pack/:slug",
                        component:PackDetailsComponent,
                        
                    },
                    {
                        path:"update-pack/:slug",
                        component:PackDetailsComponent,
                        
                    },
                     {
                         path:"add-pack",
                         component:PackAddComponent
                     },

                 ]
            },
           
        ]
    },

    {
        
        path:"dashboard",
        component:DashboardComponent,
        children:[
               {

                 path:"",
                 component:EspaceClientComponent, 
                }
        ]
    },{
        path:"dashboard/contract",
        component:ContractComponent,
        
    },{
        path:"dashboard/contract/:id",
        component:DocumentComponent,
    },


 


    { path: 'registration', component: RegistrationComponent },
    { path: 'login', component: LoginComponent },
    { path: 'formules', component: FormulesComponent },
    { path: 'particulier', component: ParticuProductComponent },
    { path: 'entreprise', component: EntrepProductComponent },
    { path: 'formule/:id', component: DetailFormuleComponent },
    { path: 'recommendation', component: RecommenderFormComponent },
    { path: 'recommendedPack', component: RecommendedPacksComponent },
];