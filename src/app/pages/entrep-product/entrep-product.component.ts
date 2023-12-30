import { Component, OnInit } from '@angular/core';
import { Formule } from '../../componnents/formules/formulesModel';
import * as formulesData from '../../data/formules.json';

import { FormulesComponent } from '../../componnents/formules/formules.component';


@Component({
  selector: 'app-entrep-product',
  standalone: true,
  imports: [FormulesComponent],
  templateUrl: './entrep-product.component.html',
  styleUrl: './entrep-product.component.scss'
})
export class EntrepProductComponent implements OnInit {
  formules: Formule[] = [];

  ngOnInit(): void {
    const toutesLesFormules: Formule[] = formulesData.formule;
    this.formules = toutesLesFormules.filter(formule => formule.id >= 9 && formule.id <= 13);
  }
  // formules: Formule[] = [];
  // showFormules: boolean = false; // Ajout de cette propriété

  // ngOnInit(): void {
  //   // Récupérer toutes les formules du fichier JSON
  //   const toutesLesFormules: Formule[] = formulesData.formule;

  //   // Filtrer les formules avec les ID de 1 à 6
  //   this.formules = toutesLesFormules.filter(formule => formule.id >= 6 && formule.id <= 8);

  //   // Condition pour déterminer si le composant FormulesComponent doit être affiché
  //   this.showFormules = this.formules.length > 0;

  //   console.log(this.showFormules);
  // }
}
