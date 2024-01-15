import { Component, Input, OnInit } from '@angular/core';

import { Formule } from './formulesModel';
import { FormsModule } from '@angular/forms';
import * as formulesData from '../../data/formules.json';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-formules',
  standalone: true,
  imports: [FormsModule,RouterModule],
  templateUrl: './formules.component.html',
  styleUrls: ['./formules.component.scss']
})
export class FormulesComponent implements OnInit {
  @Input() formulesFiltrees: Formule[] = [];

  constructor() {
    console.log("hi");
  }

  ngOnInit(): void {
    // Ne pas effectuer de filtrage ici, utiliser simplement this.formulesFiltrees
    console.log("Le composant FormulesComponent a été initialisé.");
  }
  // formules: Formule[] = [];

  // constructor() {
  //   console.log("hi");
  // }

  // ngOnInit(): void {
  //   // this.formules = formulesData.formule;

  //   // Récupérer toutes les formules du fichier JSON
  //   const toutesLesFormules: Formule[] = formulesData.formule;

  //   // Filtrer les formules avec les ID de 1 à 5
  //   this.formules = toutesLesFormules.filter(formule => (formule.id >= 1 && formule.id <= 5) || (formule.id >= 6 && formule.id <= 8));  }
}
