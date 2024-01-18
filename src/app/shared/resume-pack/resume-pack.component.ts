import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

export interface Resume {
    type: string;
    title:string;
    description:string;
    packs:PackResume[];
}
export interface PackResume {
  title:string;
  description:string;
}


@Component({
  selector: 'app-resume-pack',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume-pack.component.html',
  styleUrl: './resume-pack.component.scss'
})

export class ResumePackComponent {
      arrayPack:Resume[]= [
        {
          type:"Entreprise",
          title:"L’assurance automobile pour les entreprises, l’esprit léger.          ",
          description:" nous assurance offre aux entreprises une large gamme de produits et de services pour assurer leurs risques et leur apporter le soutien le mieux adapté lorsqu’un sinistre survient",
          packs :[
                  {title:"Assur'Auto Entreprise", description:"Vous avez entre 4 et 20 véhicules ? Avantages Responsabilité civile,Dommages au véhicule,Collision,Bris de glace,Vol,Incendie Options des marchandises transportées,dommages causés aux remorques confiées"},
                  {title:"Assur'Auto Taxi", description:"Options Défense et recours,Vol,Dommages collision,Bris de glaces,Incendie"},
                  {title:"Assur'Auto Flotte", description:"Dommages Collision,Dommages au véhicule,Vol,Incendie"},
                  {title:"Assur'Auto TPE", description:"Vous avez un parc de 1 à 5 véhicules dans le cadre de votre activité ?"}
                ]
        },
        {
          type:"Particulier",
          title:"L’assurance automobile, l’esprit léger.",
          description:"Souscrire l’assurance automobile qui vous correspond peut être un vrai casse-tête. Chez RMA, nous nous engageons à vous offrir une couverture simple et inclusive, adaptée à vos besoins. Si votre véhicule est endommagé, vous pouvez compter sur RMA pour le réparer ou le remplacer ; tout simplement.Que vous préfériez personnaliser votre offre ou choisir l’une de nos formules les plus prisées, faites l’expérience de l’assurance auto RMA pour un service sur lequel vous pouvez compter.",
          packs :[
            {title:"Assur'Auto", description:"Protection Juridique,Incendie,Actes de Vandalisme,Dommages au véhicule,Vol des rétroviseurs,Rachat de vétusté,Valeur Majorée,Marchandises Transportées"},
            {title:"Assur'Auto Rzana", description:"Incendie,Dommages au véhicule,Actes de Vandalisme,Protection Juridique,Dommages au véhicule « limitée »,"},
            {title:"Assur'Auto WWW", description:"Dommages collision,Dommages collision déplafonnée,Bris de glaces,Tierce accident,Vol,Incendie,Personnes transportées"},
            {title:"Assur'Auto Rzana", description:"Incendie,Dommages au véhicule,Actes de Vandalisme,Protection Juridique,Dommages au véhicule « limitée »,"},]
        }
       ]
}
