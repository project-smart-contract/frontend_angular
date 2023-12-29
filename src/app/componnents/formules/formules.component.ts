import { Component, OnInit } from '@angular/core';

import { Formule } from './formulesModel';
import { FormsModule } from '@angular/forms';
import * as formulesData from '../../data/formules.json';

@Component({
  selector: 'app-formules',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formules.component.html',
  styleUrls: ['./formules.component.scss']
})
export class FormulesComponent implements OnInit {
  formules: Formule[] = [];

  constructor() {
    console.log("hi");
  }

  ngOnInit(): void {
    this.formules = formulesData.formule;
  }
}
