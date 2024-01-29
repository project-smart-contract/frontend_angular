import {SelectionModel} from '@angular/cdk/collections';
import {Component, Input} from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { PackService } from '../../services/pack.service';
import { Option } from '../../models/Option';
import { HedaerComponent } from "../hedaer/hedaer.component";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

export interface PeriodicElement {
  position: number;
  titre : string;
  descriptions:string;
  isCheck:boolean;
  montantGarantie:string;
  isOblg:boolean;
  franchise:number;
  prixOption:number;
}



/**
 * @title Table with selection
 */
@Component({
    selector: 'table-selection',
    styleUrls: ['./table-selection-example.component.scss'],
    templateUrl: './table-selection-example.component.html',
    standalone: true,
    imports: [MatTableModule, MatCheckboxModule, HedaerComponent , CommonModule]
})
export class TableSelectionExampleComponent {
  ELEMENT_DATA: PeriodicElement[] = [];
  @Input() dataInsert:any;
  constructor(private packService:PackService , private route:Router){

   
    var tabOptions = this.packService.getSavedPack()[0].options;
    console.log(this.packService.getSavedPack()[0].options);
    for(let i = 0 ; i < tabOptions.length ; i++){
     this.ELEMENT_DATA[i] = {
        position:i,
        titre:tabOptions[i].titre,
        descriptions:tabOptions[i].descriptions,
        isCheck:tabOptions[i].isCheck,
        montantGarantie:tabOptions[i].montantGarantie,
        isOblg:tabOptions[i].isOblg,
        franchise:tabOptions[i].franchise,
        prixOption:tabOptions[i].prixOption
     }
     if(tabOptions[i].isOblg==false){
      this.selection.select(this.ELEMENT_DATA[i]);
     }
     
  }

  }
  ngOnInit(): void {
    this.calculeTotalPrix(this.selection.selected);
  }


 totalPrixContract !: number;

 calculeTotalPrix(table:any){
  var s = 0;
  for(let i = 0 ; i < table.length ; i++){
  
        s+=table[i].prixOption;
      
  }

  this.totalPrixContract=s;
 }


  displayedColumns: string[] = ['select','titre', 'montantGarantie', 'franchise','prixOption'];
  dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    this.calculeTotalPrix(this.selection.selected);
    console.log(this.selection.selected)
    //console.log(this.dataSource)
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }



  menuContentHeader = [
    {
     label:"Home",
     link:"/"
    },{
      label:"Browse Projects",
      link:"/"
    },{
     label:"Dashboard",
     link:"/dashboard"
   },
    
    {
     label:"Découvrez nos offres",
     link:"/",
     subMenu: [
        {
         label:"Enterprise",
         link:"/produits/entreprise",
        },
        {
         label:"Particulier",
         link:"/produits/particulier",
        }
     ]
    }
]


getWallet(){
   localStorage.setItem('total',this.totalPrixContract.toString());
   this.route.navigate(['/wallet']);
}


}
