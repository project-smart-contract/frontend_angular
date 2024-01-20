import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { Option } from '../../models/Option';
import { Avantage } from '../../models/Pack';

@Component({
  selector: 'table-mat',
  styleUrl: './table.component.scss',
  templateUrl: './table.component.html',
  animations: [
    trigger('detailExpand', [
      state('collapsed,void', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatIconModule],
})

export class TableComponent implements OnChanges{


  @Input() ELEMENT_DATA: Option[] = [];
  @Input() avantages :Avantage[] = [];
  
  dataSource = this.ELEMENT_DATA;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['ELEMENT_DATA']){
       this.dataSource=this.ELEMENT_DATA
    }
  }

  columnsToDisplay = ['titre', 'montantGarantie', 'franchise', 'prixOption','isOblg'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement!: Option | null;
}







