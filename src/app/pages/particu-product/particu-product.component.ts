import { Component, OnInit } from '@angular/core';
import { FormulesComponent } from '../../componnents/formules/formules.component';
import { Formule } from '../../componnents/formules/formulesModel';
import * as formulesData from '../../data/formules.json';

@Component({
  selector: 'app-particu-product',
  standalone: true,
  imports: [FormulesComponent],
  templateUrl: './particu-product.component.html',
  styleUrl: './particu-product.component.scss'
})
export class ParticuProductComponent implements OnInit {

  formules: Formule[] = [];

  ngOnInit(): void {
    const toutesLesFormules: Formule[] = formulesData.formule;
    this.formules = toutesLesFormules.filter(formule => formule.id >= 1 && formule.id <= 8);
  }
  // formules: Formule[] = [];
  // showFormules: boolean = false; // Ajout de cette propriété

  // ngOnInit(): void {
  //   // Récupérer toutes les formules du fichier JSON
  //   const toutesLesFormules: Formule[] = formulesData.formule;

  //   // Filtrer les formules avec les ID de 1 à 6
  //   this.formules = toutesLesFormules.filter(formule => formule.id >= 1 && formule.id <= 5);

  //   // Condition pour déterminer si le composant FormulesComponent doit être affiché
  //   this.showFormules = this.formules.length > 0;

  //   console.log(this.showFormules);
  // }
}
